import braintree from 'braintree-web';

import { MerchantAccounts } from '../collections/merchantAccounts.js'
import { MerchantAccountSchema } from '../collections/merchantAccounts.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'

window.MerchantAccounts = MerchantAccounts
window.AccompanistProfiles = AccompanistProfiles


AutoForm.hooks({
  insertMerchantAccount: {
    onSubmit: function(insertDoc, updateDoc, currentDoc){
      this.event.preventDefault()
      console.log("insert submerchant request")
      var submitDataContext = this
      Meteor.call('makeSubmerchant', insertDoc, function(err, result){
        if(err){
          if(ValidationError.is(err)){
            submitDataContext.done(err)
            return false
          }else{

          }
        }else{
          console.log("apparently successful")
          submitDataContext.done()
          return false
        }
      })
      return false
    },
    onError: function(formType, error) {
      console.log("error")
      console.log(error)
      if(ValidationError.is(error)){
        console.log("Validation Error caught")
        for(x in error.details)
        {
          let name = error.details[x].name
          let message = error.details[x].message
          var crase = 'invalidValue ' + name
          var newMessageFeature = {}
          newMessageFeature[crase] = message
          SimpleSchema.messages(newMessageFeature)
          var valContext = MerchantAccountSchema.newContext()
          valContext.addInvalidKeys([{name: name, type: "invalidValue" }])
        }
      }else{

      }
    },
    onSuccess: function(formType, result) {
      console.log("Successful insert submerchant request")
      sAlert.info("Successfully registered merchant information!")
    }
  }
})


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
  }
})

Template.SubmerchantPanel.events({
  // 'click .make-submerchant' (event, template){
  //   console.log("successful submerchant request")
  //   event.preventDefault()
  //   if(AutoForm.validateForm("insertMerchantAccount")){
  //     let formValues = AutoForm.getFormValues("insertMerchantAccount");
  //     // AutoForm.resetForm("insertMerchantAccount");
  //     Meteor.call('makeSubmerchant', formValues.insertDoc, function(err, result){
  //       if(err){
  //         console.log(err)
  //       }else{
  //         if(!result.success){
  //           console.log("unsuccessful")
  //           Materialize.toast(parseBraintreeValidationError(result.errorArray), 4000, 'red')
  //         }else{
  //           console.log("successful submerchant made")
  //           sAlert.info("Successfully registered merchant information!")
  //         }
  //
  //       }
  //     })
  //   }
  //
  // },
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
