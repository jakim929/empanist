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

  attachExistingPayment: function(userId, transactionId, uni){
    if(userId != Meteor.userId()){
      throw new Meteor.Error("payment.attachExistingPayment.unauthorized", "Incorrect user credentials (User ID): credential mismatch")
    }
    if(uni == undefined){
      throw new Meteor.Error("payment.attachExistingPayment.invalidRequest", "Incorrect payment identification number (Unique Number Identifier)")
    }
    let transaction = Transactions.findOne({_id: transactionId, musician: userId});
    if(!transaction){
      throw new Meteor.Error("payment.attachExistingPayment.invalidRequest", "Incorrect transaction ID (or no permission to access transaction)")
    }

    let customerId = getCustomerId(userId)
    if(!customerId){
      throw new Meteor.Error("payment.attachExistingPayment.invalidRequest", "The user does not have a customer ID yet. For security do not process request")
    }

    var findCustomer = Meteor.wrapAsync(gateway.customer.find, gateway.customer)
    var findCustomerResult;

    try{
      findCustomerResult = findCustomer(customerId)
    }catch(error){
      console.log(error);
    }

    let creditCards = findCustomerResult.creditCards
    var token = ""
    for(var i = 0; i < creditCards.length; i++){
      if (creditCards[i].uniqueNumberIdentifier == uni){
        token = creditCards[i].token
      }
    }

    if(token == ""){
      throw new Meteor.Error("payment.attachExistingPayment.invalidRequest", "The unique number identifier does not have a match")
    }

    attachPaymentToTransaction(transactionId, customerId, token);

    return true;

  },

  attachNewPayment: function(userId, transactionId, nonce){
    if(userId != Meteor.userId()){
      throw new Meteor.Error("payment.attachNewPayment.unauthorized", "Incorrect user credentials (User ID): credential mismatch")
    }
    if(nonce == undefined){
      throw new Meteor.Error("payment.attachNewPayment.invalidRequest", "Invalid paymentMethodNonce")
    }
    let transaction = Transactions.findOne({_id: transactionId, musician: userId});
    if(!transaction){
      throw new Meteor.Error("payment.attachNewPayment.invalidRequest", "Incorrect transaction ID (or no permission to access transaction)")
    }

    var customerId = getCustomerId(userId)
    var token;
    if(customerId){
      token = addNewPaymentMethod(nonce,customerId)
    }else{
      var returnObject = createCustomer(userId, nonce)
      customerId = returnObject.customerId
      token = returnObject.token
    }
    console.log("attachNewPayment", token)

    attachPaymentToTransaction(transactionId, customerId, token);
    return true;

  },

  testAddCreditCard:function(nonce){
    //CHANGE THIS
    var customerId = "60522058"

    addNewPaymentMethod(nonce, customerId)
  },

  getPaymentMethods: function(userId){
    // if(userId != Meteor.userId()){
    //   return new Meteor.Error("Invalid User Credentials to Access Payment Methods")
    // }
    var basicProfile = BasicProfiles.findOne({userId : userId});
    var customerId = basicProfile.customerId
    if(customerId){
      var getCustomer = Meteor.wrapAsync(gateway.customer.find, gateway.customer)
      var result = getCustomer(customerId)
      // console.log("Successfully got customer obj from Braintree, number of credit cards:", result.creditCards.length)
      if(result){
        var creditCards = result.creditCards
        var parsedCreditCards = []
        for(var i = 0; i < creditCards.length; i++){
          var creditCardDetails = {}
          creditCardDetails.last4 = creditCards[i].last4
          creditCardDetails.cardType = creditCards[i].cardType
          creditCardDetails.uni = creditCards[i].uniqueNumberIdentifier
          parsedCreditCards.push(creditCardDetails);
        }
        //console.log(parsedCreditCards)
        return parsedCreditCards
      }else{
        return "ERROR"
      }

    }else{
      return []
    }
  }
})


function addNewPaymentMethod(nonce, customerId){
  var createNewPaymentMethod = Meteor.wrapAsync(gateway.paymentMethod.create, gateway.paymentMethod)
  var findCustomer = Meteor.wrapAsync(gateway.customer.find, gateway.customer)
  var updateCustomer = Meteor.wrapAsync(gateway.customer.update, gateway.customer)
  var deletePaymentMethod = Meteor.wrapAsync(gateway.paymentMethod.delete, gateway.paymentMethod)

  var newPaymentMethod;
  try{
    newPaymentMethod = createNewPaymentMethod({customerId: customerId, paymentMethodNonce:nonce})
  }catch(error){
    console.log("gateway.paymentMethod.create Error", error)
  }

  var findCustomerResult;
  try{
    findCustomerResult = findCustomer(customerId)
  }catch(error){
    console.log("gateway.customer.find Error", error)
  }

  var creditCards = findCustomerResult.creditCards

  var duplicateExists = false;
  var token = newPaymentMethod.creditCard.token;

  //To make sure it doesn't try to match with the method just added
  for(var i = 0; i< creditCards.length; i++){
    if((creditCards[i].uniqueNumberIdentifier == newPaymentMethod.creditCard.uniqueNumberIdentifier) &&
      (creditCards[i].token != newPaymentMethod.creditCard.token)){
      duplicateExists = true;
      token = creditCards[i].token
      //console.log(creditCards[i].uniqueNumberIdentifier, newPaymentMethod.creditCard.uniqueNumberIdentifier)
    }
  }
  console.log("duplicate exists:", duplicateExists)
  if(duplicateExists){
    try{
      deletePaymentMethod(newPaymentMethod.creditCard.token)
    }
    catch(error){
      console.log(error)
    }

  }else{
    var updateCustomerResult;
    try{
      updateCustomerResult = updateCustomer(customerId, {creditCard:{token : token}})
    }catch(error){
      console.log("gateway.customer.update Error",error)
    }
  }
  console.log("addNewPaymentMethod", token)
  return token
}

function attachPaymentToTransaction(transactionId, customerId, token){
  // Transaction must be prevalidated!
  let result = Transactions.update({_id: transactionId},
    {$set: {transactionCustomerId: customerId, transactionPaymentToken: token}})
  return result // How many were updated (should always be one)
}

function createCustomer(userId, paymentMethodNonce){
  "Create Customer Called"

  let basicProfile = BasicProfiles.findOne({userId: userId});
  if(!basicProfile){
    throw new Meteor.Error('payment.createCustomer.unauthorized', 'User does not have a corresponding basic profile.')
  }
  let userProfile = Meteor.users.findOne({_id : userId});
  if(!userProfile){
    throw new Meteor.Error('payment.createCustomer.unauthorized', 'User does not have a corresponding Meteor.users profile.')
  }

  if(!paymentMethodNonce){
    throw new Meteor.Error('payment.createCustomer.invalidRequest', 'The paymentMethodNonce is not valid.')
  }

  var makeCustomer = Meteor.wrapAsync(gateway.customer.create, gateway.customer);
  var options = {}

  options.firstName = basicProfile.firstName
  options.lastName = basicProfile.lastName
  options.email = userProfile.emails[0].address
  options.paymentMethodNonce = paymentMethodNonce

  try{
    var makeCustomerResult = makeCustomer(options);
  }catch(error){
    console.log(error);
  }

  setCustomerId(userId, makeCustomerResult.id);
  return {customerId: makeCustomerResult.id, token: makeCustomerResult.creditCards[0].token}
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
