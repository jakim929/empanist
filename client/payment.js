// Change to only take code needed
import braintree from 'braintree-web';

Session.set('paymentFormStatus', null);
var isBraintreeInitialized = false;

function initializeBraintree (clientToken) {
  if(isBraintreeInitialized) return;

  braintree.setup(clientToken, 'dropin', {
    container: 'dropin-container',
    paymentMethodNonceRecieved: function(event, nonce){
      Session.set('paymentFormStatus', true);
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
