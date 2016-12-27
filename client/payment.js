// Change to only take code needed
import braintree from 'braintree-web';

var isBraintreeInitialized = false;

function initializeBraintree(clientToken){
  var form = document.querySelector('#credit-card-braintree-form');
  var submit = document.querySelector('input[type="submit"]');

  braintree.client.create({
    authorization: clientToken
  }, function (clientErr, clientInstance) {
    if (clientErr) {
      console.error(clientErr);
      return;
    }

    // This example shows Hosted Fields, but you can also use this
    // client instance to create additional components here, such as
    // PayPal or Data Collector.

    braintree.hostedFields.create({
      client: clientInstance,
      styles: {
        'input': {
          'font-size': '15px',
          'font-family': 'Avenir Next'
        },
        'input.invalid': {
          'color': '#ef5350'
        },
        'input.valid': {
          'color': '#009688'
        },

      },
      fields: {
        number: {
          selector: '#card-number',
          placeholder: '4111 1111 1111 1111'
        },
        cvv: {
          selector: '#cvv',
          placeholder: '123'
        },
        expirationDate: {
          selector: '#expiration-date',
          placeholder: '10/19'
        },
        postalCode: {
          selector: '#postal-code',
          placeholder: '02138'
        }
      }
    }, function (hostedFieldsErr, hostedFieldsInstance) {
      if (hostedFieldsErr) {
        console.error(hostedFieldsErr);
        return;
      }

      submit.removeAttribute('disabled');

      form.addEventListener('submit', function (event) {

        event.preventDefault();

        hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
          if (tokenizeErr) {
            console.error(tokenizeErr);
            if(tokenizeErr.code == "HOSTED_FIELDS_FIELDS_EMPTY" ||
              tokenizeErr.code == "HOSTED_FIELDS_FIELDS_INVALID" ){
              Session.set("errorMessage", "Please fill in all of the fields.")
            }else{
              Session.set("errorMessage", "Error. Please double check the fields.")
            }
            return;
          }

          let booking = FlowRouter.getQueryParam("booking");
          let session = FlowRouter.getQueryParam("session");
          if(booking._id && session){
            Meteor.call('attachNewPayment', Meteor.userId(), booking._id, payload.nonce, function(err, result){
              if(err){
                console.log(err)
              }else{
                finalizeTransaction(booking._id, session)
              }
            });
          }

        });
      }, false);
    });
  });
}

Template.PaymentSelection.onCreated(function(){
  this.paymentMethods = new ReactiveVar();
  this.selectedMethod = new ReactiveVar();
  var self = this;
  Meteor.call("getPaymentMethods", Meteor.userId(), function(err, result){
    if(err){
      console.log(err)
    }else{
      if(result == "ERROR"){
        return
      }
      if(result.length == 0){
        self.paymentMethods.set([]);
        return
      }
      self.paymentMethods.set(result);
    }
  })

})

Template.PaymentSelection.helpers({
  getPaymentMethods: function(){
    return Template.instance().paymentMethods.get();
  },
  getCreditCardImage: function(type){
    var imgSrc = 'credit'

    let cardImages =  {
        'American Express': 'amex',
        'MasterCard': 'mastercard',
        'JCB': 'jcb',
        'Discover': 'discover',
        'Maestro': 'maestro',
        'Visa': 'visa'
      }

      if (cardImages[type]){
        imgSrc = cardImages[type]
      }

      var imgSrc = "/images/creditcards/" + imgSrc + '.png'
      return imgSrc;
    },
    getSelectionStatus: function(uni){
      if(Template.instance().selectedMethod.get() == uni ){
        return "active"
      }else{
        return
      }
    },
    getLastStatus: function(){
      if(Template.instance().selectedMethod.get()){
        return
      }else{
        return "active"
      }
    },

    getConfirmButtonStatus: function(){
      if(Template.instance().selectedMethod.get()){
        return
      }else{
        return "disabled"
      }
    }

})

Template.PaymentSelection.events({
  'click .payment-method-selector' (event, template){
    let uni = event.currentTarget.getAttribute('data-id')
    Template.instance().selectedMethod.set(uni);

  },

  'click .confirm-transaction' (event, template){
    let uni = Template.instance().selectedMethod.get()
    let booking = FlowRouter.getQueryParam("booking");
    let session = FlowRouter.getQueryParam("session");
    if(booking._id && session){
      Meteor.call('attachExistingPayment', Meteor.userId(), booking._id, uni, function(err,result){
        if(err){
          console.log(err)
        }else{
          finalizeTransaction(booking._id, session)
        }
      })
    }
  }
})

function finalizeTransaction(transactionId, firstSession){
  if(transactionId){
    Meteor.call('finalizeTransactionRequest', transactionId, firstSession, function(err,result){
      if(err){
        console.log("Error in finalizing transaction")
      }else{
        console.log('Successfully Booked');
        FlowRouter.go('/success/:transactionId', {transactionId: transactionId});
      }
    })
  }else{
    return false
  }
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

Template.PaymentPanel.helpers({
  errorMessage: function(){
    return Session.get("errorMessage");
  }
})
