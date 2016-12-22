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
  }
})
