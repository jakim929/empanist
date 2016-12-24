// Change to only take code needed
import braintree from 'braintree-web';

var isBraintreeInitialized = false;

function initializeBraintree (clientToken) {
  if(isBraintreeInitialized) return;

  braintree.setup(clientToken, 'dropin', {
    container: 'dropin-container',
    onPaymentMethodReceived: function(result){

    }
  })
}

Template.PaymentPanel.onCreated(function(){
  Meteor.call('getClientToken', function(err, clientToken){
    if(err){
      console.log("There was an error generating client token");
      return;
    }
    initializeBraintree(clientToken);
  })

})
