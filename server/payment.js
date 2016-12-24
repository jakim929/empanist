import braintree from 'braintree'

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
    if(userId){

    }
  },

  attachPayment: function(nonce){

  }
})

function createCustomer(userId, paymentMethodNonce, callback){
  let basicProfile = basicProfiles.findOne({userId: userId});
  if(paymentMethodNonce){
    gateway.customer.create({
      firstName: "basicProfile"
    })
  }else{

  }
}

function setCustomerObj(userId, customerObj){
  //FIX make it non-blocking
  basicProfiles.update({userId: userId}, {$set: {customerObj: customerObj}})
}

function getCustomerId(userId){
  let result = basicProfiles.findOne({userId: userId, customerId: {$exists: true}}, {fields: {customerObj: 1}});
  if(result){
    return result.customerObj.customerId
  }else{
    return false
  }
}
