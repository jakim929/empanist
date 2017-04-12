import braintree from 'braintree'

import { MerchantAccountSchema } from '../collections/merchantAccounts.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'

import { BasicProfiles } from '../collections/basicProfiles.js'
import { Transactions } from '../collections/transactions.js'


import { gateway } from './payment.js'



Meteor.methods({
  makeSubmerchant: function(doc){
    //Called directly from AutoForm
    console.log("makeSubmerchant called")
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

    var origin = {
      'first_name': 'individual.firstName',
      'last_name' : 'individual.lastName',
      'date_of_birth' : 'individual.dateOfBirth',
      'email' : 'individual.email',
      'phone' : 'individual.phone',
      'ssn' : 'individual.ssn',
      'street_address' : 'individual.address.streetAddress',
      'locality' : 'individual.address.locality',
      'region' : 'individual.address.region',
      'postalCode' : 'individual.address.postalCode',
      'account_number': 'funding.accountNumber',
      'routing_number': 'funding.routingNumber',
      'tos_accepted': 'tosAccepted'
    }

    var createMerchantAccountResult;
    try{
      createMerchantAccountResult = createMerchantAccount(doc)
    }catch(error){
      console.log(error)
      throwError('merchant.makeSubmerchant.braintreeFailed','Error raised while sending request to Braintree', 'Connection to payment server failed. Please try again later.')
    }

    if(createMerchantAccountResult.success == false){
      var errors = []
      var deepErrors = createMerchantAccountResult.errors.deepErrors()
      for (i in deepErrors) {
        if(deepErrors.hasOwnProperty(i)){
          console.log(deepErrors[i].attribute)
          var name = origin[deepErrors[i].attribute]
          var errorObject = {}
          errorObject.name = name
          errorObject.type = deepErrors[i].code.toString()
          errorObject.message = deepErrors[i].message
          errors.push(errorObject)
        }
      }
      console.log(errors)
      throwValidationError(errors)
    }

    // MAKE NON BLOCKING
    AccompanistProfiles.update({Id: Meteor.userId()}, {$set:{accompanistSubmerchantId: createMerchantAccountResult.merchantAccount.id}})
    return true

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
