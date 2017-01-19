import braintree from 'braintree'

import { MerchantAccountSchema } from '../collections/merchantAccounts.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'

import { BasicProfiles } from '../collections/basicProfiles.js'
import { Transactions } from '../collections/transactions.js'


import { gateway } from './payment.js'

Meteor.methods({
  makeSubmerchant: function(doc){
    //Called directly from AutoForm

    // Validation and adding necessary information
    MerchantAccountSchema.clean(doc)
    var masContext = MerchantAccountSchema.namedContext("SubmerchantPanel")

    masContext.validate(doc)

    if(!masContext.isValid()){
      console.log(masContext)
      throw new Meteor.Error("payment.makeSubmerchant.invalidParameters", "User entered invalid information in the SubmerchantPanel form")
    }

    if(!doc.tosAccepted){
      throw new Meteor.Error("payment.makeSubmerchant.mustAgreeTOS", "User did not agree to Terms of Service")
    }

    doc.funding.destination = braintree.MerchantAccount.FundingDestination.Bank
    doc.masterMerchantAccountId = "empanist";


    var createMerchantAccount = Meteor.wrapAsync(gateway.merchantAccount.create, gateway.merchantAccount)

    var createMerchantAccountResult;
    try{
      createMerchantAccountResult = createMerchantAccount(doc)
    }catch(error){
      console.log(error)
      throw new Meteor.Error(error)
    }

    var returnVar = {};
    returnVar.success = true

    if(createMerchantAccountResult.success == false){
      returnVar.success = false
      returnVar.errorArray = createMerchantAccountResult.errors.deepErrors();
      return returnVar
    }

    //If Successful

    // MAKE NON BLOCKING
    AccompanistProfiles.update({Id: Meteor.userId()}, {$set:{accompanistSubmerchantId: createMerchantAccountResult.merchantAccount.id}})
    return returnVar

  },
  
  getSubmerchantDetails: function (userId){
    if(Meteor.userId() != userId){
      throw new Meteor.Error("payment.getSubmerchantDetails.unauthorized", "Incorrect user credentials (User ID): credential mismatch")
    }

    var accompanistProfile = AccompanistProfiles.findOne({Id: userId})

    if(!accompanistProfile){
      // Return nothing if no person exists
      throw new Meteor.Error("payment.getSubmerchantDetails.noAccompanistProfile", "No valid accompanist profile")
    }else{
      if(!accompanistProfile.accompanistSubmerchantId){
        return
      }
    }
    let submerchantId = accompanistProfile.accompanistSubmerchantId

    //submerchantId = "12312321123"
    var findMerchantAccount = Meteor.wrapAsync(gateway.merchantAccount.find, gateway.merchantAccount)

    console.log("about to make request")
    var submerchantAccount;
    try{
      submerchantAccount = findMerchantAccount(submerchantId)
    }catch(error){
      if(error.type == "notFoundError"){
        console.log("Submerchant Not Found")
        return "Not Found"
      }
    }
    console.log(submerchantAccount)
    return submerchantAccount;
  }
})
