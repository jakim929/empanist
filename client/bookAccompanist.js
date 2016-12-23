
Template.ReviewLeftFormPanel.helpers({
  getNextButtonClass(){
    if(Template.instance().currentStep.get() == "PaymentReview"){
      return "btn wave-light z-depth-0 finalize right"
    }else{
      return "btn wave-light z-depth-0 next-panel right";
    }
  },

  getBackButtonClass(){
    if(Template.instance().currentStep.get() == "EventReview"){
      return "btn wave-light z-depth-0 previous-panel disabled left"
    }else{
      return "btn wave-light z-depth-0 previous-panel left";
    }
  },

  currentStep(){
    return Template.instance().currentStep.get();
  }
});

Template.ReviewLeftFormPanel.onCreated(function() {
  this.currentStep = new ReactiveVar("EventReview")
});

Template.SessionReview.helpers({
  transactionInputStatus(){
    var currentTransaction = FlowRouter.getQueryParam("booking")

    if(currentTransaction.sessionCount){
      Session.set("sessionCountRepeat", false);
      return false;
    }else{
      Session.set("sessionCountRepeat", true);
      return true;
    }
  }
})



Template.EventReview.onRendered(function(){
  $('#timepicker').pickatime({
    autoclose:false,
    twelvehour: true
  })
});

Template.EventReview.helpers({
  currentTransaction(){
    return FlowRouter.getQueryParam("booking");
  },

  currentSession(){
    return FlowRouter.getQueryParam("session");
  }
})


Template.PaymentReview.helpers({

});


Template.SessionReview.onRendered(function(){
  $('.pickadate').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
})

Template.SessionReview.helpers({

  optionsArray(){
    var array = ["7AM", "8AM","9AM","10AM"]
    var newArray = [{label: '7AM', value: 7},
                    {label: '8AM', value: 8},
                    {label: '9AM', value: 9},
                    {label: '10AM', value: 10},
                    {label: '11AM', value: 11},
                    {label: '12PM', value: 12},
                    {label: '1PM', value: 13},
                    {label: '2PM', value: 14},
                    {label: '3PM', value: 15},
                    {label: '4PM', value: 16},
                    {label: '5PM', value: 17},
                    {label: '6PM', value: 18}]
    return newArray
  },

  sessionsOptions(){
    return [
        {label: "1 session", value: 1},
        {label: "2 sessions", value: 2},
        {label: "3 sessions", value: 3},
        {label: "4 sessions", value: 4},
        {label: "5 sessions", value: 5},
        {label: "6 sessions", value: 6},
        {label: "7 sessions", value: 7},
        {label: "8 sessions", value: 8},
        {label: "9 sessions", value: 9},
    ];
  },
  defaultSessionCount(){
    return 1
  },

  currentTransaction(){
    return FlowRouter.getQueryParam("booking");
  },

  currentSession(){
    //console.log(FlowRouter.getQueryParam("session"))
    return FlowRouter.getQueryParam("session");
  }
});

function enterFinalEventInfo(){
  var currentTransaction = FlowRouter.getQueryParam("booking")

  //console.log(AutoForm.validateField('UpdateEventInformation', 'eventName', false))
  currentTransaction.musician = Meteor.userId()
  currentTransaction.performanceLocation = AutoForm.getFieldValue('performanceLocation', 'UpdateEventInformation')
  currentTransaction.repertoire = AutoForm.getFieldValue('repertoire', 'UpdateEventInformation')
  currentTransaction.eventName = AutoForm.getFieldValue('eventName', 'updateEventInformaiton')

  let eventNameCorrect = AutoForm.validateField('UpdateEventInformation', 'eventName', false)
  let repertoireCorrect =  AutoForm.validateField('UpdateEventInformation', 'repertoire', false)
  let locationCorrect = AutoForm.validateField('UpdateEventInformation', 'performanceLocation', false)

  return [(eventNameCorrect && repertoireCorrect && locationCorrect), currentTransaction]
}

function enterSessionInfo(){
  if (Session.get("sessionCountRepeat")){
    return (AutoForm.validateField("InsertFirstSession", 'date') &&
    AutoForm.validateField("InsertFirstSession", 'suggestedHours') &&
    AutoForm.validateField("UpdateSessionCount", 'sessionCount'))
  }else{
    return (AutoForm.validateField("InsertFirstSession", 'date') &&
    AutoForm.validateField("InsertFirstSession", 'suggestedHours'))
  }

}

Template.ReviewLeftFormPanel.events({
  'click .next-panel'(event, template){
    var transitionSuccess = false;
    var currentStep = template.currentStep.get()

    if(currentStep == "EventReview"){
      var validationStatus = enterFinalEventInfo()
      console.log(validationStatus)
      if (validationStatus[0]){
        var queryParam = {booking: validationStatus[1], session: {}};
        FlowRouter.setQueryParams(queryParam);
        transitionSuccess = true;
      }
    }
    else if(currentStep == "SessionReview"){
      if(enterSessionInfo()){
        var currentTransaction = FlowRouter.getQueryParam("booking")
        if(Session.get("sessionCountRepeat")){
          currentTransaction.sessionCount = AutoForm.getFieldValue('sessionCount', 'UpdateSessionCount')
        };
        // FIX show some sort of feedback
        if(AutoForm.getFormValues('InsertFirstSession').insertDoc.suggestedHours.length >= 2){
          var validationContext = TransactionSchema.newContext();
          TransactionSchema.clean(currentTransaction);
          var queryParam = {booking: currentTransaction, session: AutoForm.getFormValues('InsertFirstSession').insertDoc};
          FlowRouter.setQueryParams(queryParam);
          transitionSuccess = true;
        }

      }
    }
    else if(currentStep == "PaymentReview"){

    }
    //
    // var currentTransaction = FlowRouter.getQueryParam("booking")
    // // FIX Security FLAW (CHANGE) -> use something other than clientside user id
    // currentTransaction.musician = Meteor.userId();
    // currentTransaction.performanceLocation = AutoForm.getFieldValue('performanceLocation', 'UpdateSessionCount')
    // currentTransaction.sessionCount = AutoForm.getFieldValue('sessionCount', 'UpdateSessionCount')
    //
    // var validationContext = TransactionSchema.newContext();
    // TransactionSchema.clean(currentTransaction);
    //
    // if( validationContext.validate(currentTransaction) &&
    //     AutoForm.validateField('InsertFirstSession', 'suggestedHours') &&
    //     AutoForm.validateField('InsertFirstSession', 'date') &&
    //     AutoForm.validateField('InsertFirstSession', 'location'))
    // {
    //
    //   var queryParam = {booking: currentTransaction, session: AutoForm.getFormValues('InsertFirstSession').insertDoc};
    //   FlowRouter.setQueryParams(queryParam);
    //
    //   let panels= ["SessionReview", "PaymentReview"]
    //   var currentStepIndex = panels.indexOf(template.currentStep.get());
    //   console.log(currentStepIndex)
    //   if(currentStepIndex > -1){
    //     let nextStepIndex = currentStepIndex + 1
    //     if(nextStepIndex < panels.length){
    //       template.currentStep.set(panels[nextStepIndex]);
    //     }
    //
    //   }
    // }
    if(transitionSuccess){
      let panels= ["EventReview", "SessionReview", "PaymentReview"]
      var currentStepIndex = panels.indexOf(template.currentStep.get());
      console.log(currentStepIndex)
      if(currentStepIndex > -1){
        let nextStepIndex = currentStepIndex + 1
        if(nextStepIndex < panels.length){
          console.log("Go to next page")
          template.currentStep.set(panels[nextStepIndex]);
        }
      }
    }


  },

  'click .previous-panel'(event, template){
    let panels= ["EventReview", "SessionReview", "PaymentReview"]
    var currentStepIndex = panels.indexOf(template.currentStep.get());
    console.log(currentStepIndex)
    if(currentStepIndex > -1){
      let previousStepIndex = currentStepIndex - 1
      if(previousStepIndex >= 0){
        console.log("Go to previous page")
        template.currentStep.set(panels[previousStepIndex]);
      }
    }
  },

  'click .finalize' (event, template) {
    var finalTransaction = FlowRouter.getQueryParam("booking");
    var firstSession = FlowRouter.getQueryParam("session");

    let insertedTransactionId = Transactions.insert(finalTransaction);

    if(insertedTransactionId){
      firstSession.transaction = insertedTransactionId;
      firstSession.musician = finalTransaction.musician;
      firstSession.accompanist = finalTransaction.accompanist

      if(Sessions.insert(firstSession)){
        console.log('Successfully Booked');
        FlowRouter.go('/success/:transactionId', {transactionId: insertedTransactionId});
      };
    }
  }
});


Template.ReviewRightSummaryPanel.helpers({
  currentBooking(){
    return FlowRouter.getQueryParam("booking");
  },
  priceDetails(accompanistId, sessionCount){
    var doc = AccompanistProfiles.findOne({Id: accompanistId}, {charge: 1});
    if (doc){
      if(sessionCount){
        return {hourly: doc.charge, sessionCount: sessionCount, total: (sessionCount * doc.charge)}
      }
    }
  },

});
