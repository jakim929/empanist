import braintree from 'braintree'

import { BasicProfiles } from '../collections/basicProfiles.js'
import { Transactions } from '../collections/transactions.js'


var gateway;

Meteor.startup(function(){
  gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: Meteor.settings.BraintreeMerchantId,
    publicKey: Meteor.settings.BraintreePublicKey,
    privateKey: Meteor.settings.BraintreePrivateKey
  });
})


Meteor.methods({
  getClientToken: function (customerId){
    var generateToken = Meteor.wrapAsync(gateway.clientToken.generate, gateway.clientToken);
    var options = {};

    if (customerId){
      options.customerId = customerId;
    }

    var response = generateToken(options);

    return response.clientToken;
  },

  createTransaction: function (data){
    var transaction = Meteor.wrapAsync(gateway.transaction.sale, gateway.transaction);
    var amount = 11.23

    var response = transaction({
      amount: amount,
      paymentMethodNonce: data.nonce,
      customer: {
        firstName: data.firstName
      }
    });

    console.log("Payment Complete");

    return response;
  },

  createCustomer: function(paymentMethodNonce){
    let userId = Meteor.userId();
    if(userId){
      createCustomer(userId, paymentMethodNonce, function(err, result){
        if (err){
          console.log("Create Customer Failed", err)
          throw new Meteor.Error(err)
        }else{
          return true
        }
      })
    }
  },

  attachMusicianPayment: function(transactionId, nonce){
    let userId = Meteor.userId();
    if(userId){
      var customerId = getCustomerId(userId)
      if(customerId){
        // gateway.customer.update(customerId, {paymentMethodNonce: nonce})
        //
        console.log(userId)
        console.log(transactionId)
        let transaction = Transactions.findOne({_id: transactionId, musician: userId});
        if(transaction){
          // Make Non Blocking
          Transactions.update(transaction._id, {$set: {transactionCustomerId: customerId}});
          return true
        }else{
          throw new Meteor.Error("Unable to find correct payment transaction")
        }
      }else{
        createCustomer(userId, nonce, function(err, result){
          if(err){
            throw new Meteor.Error(err)
          }else{
            console.log(userId)
            console.log(transactionId)
            let transaction = Transactions.findOne({_id: transactionId, musician: userId});
            if(transaction){
              // Make Non Blocking
              Transactions.update(transaction._id, {$set: {transactionCustomerId: customerId}})
              return true
            }else{
              throw new Meteor.Error("Unable to find correct payment transaction")
            }
          }
        })

      }


    }
  },

  addFirstLastNames: function(){
    var allUsers = BasicProfiles.find().fetch();
    for(var i =0; i< allUsers.length; i++){
      var sptname = allUsers[i].name.split(' ');
      BasicProfiles.update(allUsers[i]._id, {$set: {firstName: sptname[0], lastName: sptname[1]}})
    }
  }
})

function createCustomer(userId, paymentMethodNonce, callback){
  console.log("createCustomer function called");
  let basicProfile = BasicProfiles.findOne({userId: userId});
  // Check for error
  let userProfile = Meteor.users.findOne({_id : userId});

  if(userProfile){
    console.log("userProfile exists")
    if(paymentMethodNonce){
      gateway.customer.create({
        firstName: basicProfile.firstName,
        lastName: basicProfile.lastName,
        email: userProfile.emails[0].address,
        paymentMethodNonce: paymentMethodNonce
      }, Meteor.bindEnvironment(function (err,result){
        if(err || !result.success){
          callback(err);
        }else{
          console.log("result.customer looks like", result.customer)
          setCustomerObj(userId, result.customer)
          callback(null, result.customer)
        }
      }))
    }else{
      callback(new Meteor.Error("Invalid Payment Nonce"))
    }
  }else{
    throw new Meteor.Error("No such user found to make customer")
  }

}

function setCustomerObj(userId, customerObj){
  //FIX make it non-blocking
  BasicProfiles.update({userId: userId}, {$set: {customerObj: customerObj}})
}

function getCustomerId(userId){
  let result = BasicProfiles.findOne({userId: userId, customerId: {$exists: true}}, {fields: {customerObj: 1}});
  if(result){
    return result.customerObj.customerId
  }else{
    return false
  }
}

function getCustomerObj(userId){
  let result = BasicProfiles.findOne({userId: userId, customerId: {$exists: true}}, {fields: {customerObj: 1}});
  if(result){
    return result.customerObj
  }else{
    return false
  }
}
