import braintree from 'braintree-web';

import { MerchantAccounts } from '../collections/merchantAccounts.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'

window.MerchantAccounts = MerchantAccounts
window.AccompanistProfiles = AccompanistProfiles



Template.CurrentMerchant.helpers({

})

Template.CurrentMerchant.events({

})

Template.CurrentMerchant.onCreated(function(){

})


Template.SubmerchantUpdatePanel.helpers({
  getExistingDetails: function(){
    let basicProfile = BasicProfiles.findOne({userId: Meteor.userId()});
    return basicProfile
  },
  getSubmerchantDetails: function(){
    console.log("getsubmerchant helper called")
    Meteor.call("getSubmerchantDetails", Meteor.userId(), function(err, result){
      if(err){
        console.log("error getting submerchant details")
      }
      else{
        console.log("result obtained")
        console.log(result);
      }
    })
  }
})


Template.SubmerchantUpdatePanel.events({

})

Template.SubmerchantUpdatePanel.onCreated(function(){
  this.submerchantDetails = new ReactiveVar();

})


Template.SubmerchantPanel.helpers({
  getExistingDetails: function(){
    let basicProfile = BasicProfiles.findOne({userId: Meteor.userId()});
    return basicProfile
  },

  getCurrentEmail: function(){
    let email = Meteor.user().emails[0].address
    return email
  },
  getErrorValue: function(){
    return Template.instance().errorValue.get()
  }
})

Template.SubmerchantPanel.events({
  'click .make-submerchant' (event, template){
    event.preventDefault()
    if(AutoForm.validateForm("insertMerchantAccount")){
      let formValues = AutoForm.getFormValues("insertMerchantAccount");
      AutoForm.resetForm("insertMerchantAccount");
      Meteor.call('makeSubmerchant', formValues.insertDoc, function(err, result){
        if(err){
          console.log(err)
        }else{
          if(!result.success){
            console.log("unsuccessful")
            //template.errorValue.set(parseBraintreeValidationError(result.errorArray))
            Materialize.toast(parseBraintreeValidationError(result.errorArray), 4000, 'red')
          }else{
            console.log("successful submerchant made")
            Materialize.toast('Successfully registered payment information!', 4000, 'green')
          }

        }
      })
    }

  },
})

function parseBraintreeValidationError(errorArray){
  if(errorArray.length == 0){
    return false
  }
  var stringError = ""
  for(var i = 0; i < errorArray.length; i++){
    console.log(errorArray)
    if(i == errorArray.length-1){
      stringError += errorArray[i].attribute
    }else{
      stringError += errorArray[i].attribute + ', '
    }
  }

  stringError = "We couldn't verify your " + stringError + ". Please check them again."
  return stringError
}

Template.SubmerchantPanel.onCreated(function(){
  this.errorValue = new ReactiveVar("");
})
