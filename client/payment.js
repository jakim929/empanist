// Change to only take code needed
import braintree from 'braintree-web';

var isBraintreeInitialized = false;

function initializeBraintree (clientToken) {
  if(isBraintreeInitialized) return;

  braintree.setup(clientToken, 'dropin', {
    container: 'dropin-container',
    onPaymentMethodReceived: function(obj){
      var booking = FlowRouter.getQueryParam("booking");
      console.log(booking)
      if(booking){
        Meteor.call('attachMusicianPayment', Meteor.userId(), booking._id, obj.nonce, function(err,result){
        })

      }

    }
  })
}

Template.PaymentPanel.onCreated(function(){
  Meteor.call('getClientToken', Meteor.userId(), function(err, clientToken){
    if(err){
      console.log("There was an error generating client token");
      return;
    }
    initializeBraintree(clientToken);
  })

})
