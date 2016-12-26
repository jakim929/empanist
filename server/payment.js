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
  getClientToken: function (userId){
    if(userId == Meteor.userId()){
      var generateToken = Meteor.wrapAsync(gateway.clientToken.generate, gateway.clientToken);
      var options = {};

      let basicProfile = BasicProfiles.findOne({userId : userId})

      if(basicProfile.customerId){
        options.customerId = basicProfile.customerId;
      }

      var response = generateToken(options);

      return response.clientToken;
    }
    return Meteor.Error("Invalid User ID, cannot proceed in creating client token")
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

  attachMusicianPayment: function(userId, transactionId, nonce){
    if(userId != Meteor.userId()){
      throw new Meteor.Error("Invalid UserID/ Mismatch/ Not Logged In")
    }
    if(nonce == undefined){
      throw new Meteor.Error("Invalid Nonce")
    }
    console.log(nonce)
    console.log("userId and nonce valid")
    let transaction = Transactions.findOne({_id: transactionId, musician: userId});
    if(transaction){
      var customerId = getCustomerId(userId)
      if(customerId){
        console.log("customer has ID already")
        // Make Non Blocking
        var paymentMethodUpdate = Meteor.wrapAsync(gateway.paymentMethod.update, gateway.paymentMethod)
        // Options to make Nonce the default payment on Braintree
        var options = {
          options: {
            makeDefault: true
          }
        }
        var result = paymentMethodUpdate(nonce, options);
        if(result.success){
          console.log(result)
          if(attachCustomerToTransaction(transactionId,customerId) == 1){
            return true
          }else{
            throw new Meteor.Error("Something unexpected in Transactions database")
          }

        }else{
          throw new Meteor.Error("PaymentMethod defaulting failed:", result.message)
        }
      }else{
        createCustomer(userId, nonce, function(err, result){
          if(err){
            throw new Meteor.Error(err)
          }else{
            if(attachCustomerToTransaction(transactionId,result) == 1){
              return true
            }else{
              throw new Meteor.Error("Something unexpected in Transactions database")
            }
          }
        })
      }
    }else{
      throw new Meteor.Error("Cannot Attach Payment: Transaction Not Found.")
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


function attachCustomerToTransaction(transactionId, customerId){
  // Transaction must be prevalidated!
  let result = Transactions.update({_id: transactionId}, {$set: {transactionCustomerId: customerId}})
  return result // How many were updated (should always be one)
}

function createCustomer(userId, paymentMethodNonce, callback){
  console.log("createCustomer function called");

  let basicProfile = BasicProfiles.findOne({userId: userId});
  // Check for error
  let userProfile = Meteor.users.findOne({_id : userId});

  var makeCustomer = Meteor.wrapAsync(gateway.customer.create, gateway.customer);
  var options = {}

  if(userProfile){
    console.log("userProfile exists")
    if(paymentMethodNonce){
      options.firstName = basicProfile.firstName
      options.lastName = basicProfile.lastName
      options.email = userProfile.emails[0].address
      options.paymentMethodNonce = paymentMethodNonce

      var result = makeCustomer(options);

      if(result.success == false){
        console.log("Error in createCustomer:", result.message )
        callback(result.message);
      }else{
        var customer = result.customer

        setCustomerId(userId, customer.id);

        callback(null, customer.id)
        // Try LATER, store entire customer obj
          //setCustomerObj(userId, customerObj)
      }

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

function setCustomerId(userId, customerId){
  //FIX make it non-blocking
  var hell = BasicProfiles.update({userId: userId}, {$set: {customerId: customerId}})
}

function getCustomerId(userId){
  let result = BasicProfiles.findOne({userId: userId, customerId: {$exists: true}}, {fields: {customerId: 1}});
  if(result){
    return result.customerId
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
