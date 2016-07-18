import { MusicProfiles } from '../collections/musicProfiles.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'
import { BasicProfiles } from '../collections/basicProfiles.js'
import { MusicCompetitions } from '../collections/competitions.js'
import { Transactions } from '../collections/transactions.js'
import { Sessions } from '../collections/transactions.js'

import { TransactionSchema } from '../collections/transactions.js'

import { TestAccountData } from '../collections/testData.js'

window.MusicProfiles = MusicProfiles
window.AccompanistProfiles = AccompanistProfiles
window.BasicProfiles = BasicProfiles
window.MusicCompetitions = MusicCompetitions
window.Transactions = Transactions
window.Sessions = Sessions

// Booking Tests

formatDuration = function(date1, date2) {
  var start =  moment(date1);
  var end = moment(date2);
  if (start.year() == end.year()){
    // Year is the same
    if(start.month() == end.month()){
      return start.format('MMM DD - ') + end.format('DD, YYYY')
    }
      return start.format('MMM DD - ') + end.format('MMM DD, YYYY')
  }
  return start.format('MMM DD, YYYY - ') + end.format('MMM DD, YYYY')
}

Template.SuccessLayout.helpers({
  priceDetails(accompanistId, sessionCount){
    var doc = AccompanistProfiles.findOne({Id: accompanistId}, {charge: 1});
    if (doc){
      if(sessionCount){
        return {hourly: doc.charge, sessionCount: sessionCount, total: (sessionCount * doc.charge)}
      }
    }
  },
});

Template.BookingRequest.onCreated(function () {
  this.currentStep = new ReactiveVar("repertoireSection");
});

Template.NewAccompLayout.onRendered(function () {
  $(document).ready(function(){
    $('.pushpin').pushpin({ top: 100 });
  });
  console.log("pushpin should be working")

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

Template.SessionReview.helpers({

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
    console.log((FlowRouter.getQueryParam("booking")))
    return FlowRouter.getQueryParam("booking");
  },

  currentSession(){
    return FlowRouter.getQueryParam("session");
  }
});

Template.upsertMusicProfileForm.events({
  'click .next-instrument':function(){
    $(".award").css('display', 'block');
    $(".instrument").css('display', 'none');
    $(".determinate").css('width', '50%');
    },
    'click .next-award':function(){
    $(".award").css('display', 'none');
    $(".program").css('display', 'block');
    $(".determinate").css('width', '75%');
    },
    'click .next-program':function(){
    $(".program").css('display', 'none');
    $(".orchestra").css('display', 'block');
    $(".determinate").css('width', '100%');
    },
    'click .back-award':function(){
    $(".award").css('display', 'none');
    $(".instrument").css('display', 'block');
    },
    'click .back-program':function(){
    $(".program").css('display', 'none');
    $(".award").css('display', 'block');
    },
    'click .back-orchestra':function(){
    $(".orchestra").css('display', 'none');
    $(".program").css('display', 'block');
    },
    'submit form': function(){
      FlowRouter.go('/newaccomp');
    }
  });

Template.profileTemplate.events({
  'click .awardsAddButton':function(){
    $(".awardsAddForm").css('display', 'block');
    $(".awardsAddButton").css('display', 'none');
    },
    'click .programsAddButton':function(){
    $(".programsAddButton").css('display', 'none');
    $(".programsAddForm").css('display', 'block');
    },
    'click .orchestrasAddButton':function(){
    $(".orchestrasAddForm").css('display', 'block');
    $(".orchestrasAddButton").css('display', 'none');
    },
    'click .instrumentsAddButton':function(){
    $(".instrumentsAddForm").css('display', 'block');
    $(".instrumentsAddButton").css('display', 'none');
    },
    'click .cancelAward':function(){
    $(".awardsAddForm").css('display', 'none');
    $(".awardsAddButton").css('display', 'block');
    },
    'click .cancelProgram':function(){
    $(".programsAddForm").css('display', 'none');
    $(".programsAddButton").css('display', 'block');
    },
    'click .cancelOrchestra':function(){
    $(".orchestrasAddForm").css('display', 'none');
    $(".orchestrasAddButton").css('display', 'block');
    },
    'click .cancelInstrument':function(){
    $(".instrumentsAddForm").css('display', 'none');
    $(".instrumentsAddButton").css('display', 'block');
    }
  });

Template.instruments.events({
  'click .btn':function(){
    $(".instrumentsAddForm").css('display', 'none');
    $(".instrumentsAddButton").css('display', 'block');
    }
  });

Template.awards.events({
  'click .btn':function(){
    $(".awardsAddForm").css('display', 'none');
    $(".awardsAddButton").css('display', 'block');
    }
  });

Template.musicPrograms.events({
  'click .btn':function(){
    $(".programsAddForm").css('display', 'none');
    $(".programsAddButton").css('display', 'block');
    }
  });

Template.orchestras.events({
  'click .btn':function(){
    $(".orchestrasAddForm").css('display', 'none');
    $(".orchestrasAddButton").css('display', 'block');
    }
  });

Template.basicNewAccomp.events({
  'submit form': function(){
      FlowRouter.go('/newaccomp');
    }
  });

Template.upsertAccompanistForm.events({
  'click .next-repertoire':function(){
    $(".charge").css('display', 'block');
    $(".repertoire").css('display', 'none');
    $(".determinate").css('width', '12.5%');
    },
    'click .next-charge':function(){
    $(".charge").css('display', 'none');
    $(".working_hours").css('display', 'block');
    $(".determinate").css('width', '25%');
    },
    'click .next-working_hours':function(){
    $(".working_hours").css('display', 'none');
    $(".working_days").css('display', 'block');
    $(".determinate").css('width', '37.5%');
    },
    'click .next-working_days':function(){
    $(".active").css('display', 'block');
    $(".working_days").css('display', 'none');
    $(".determinate").css('width', '50%');
    },
    // 'click .next-startDate':function(){
    // $(".startDate").css('display', 'none');
    // $(".endDate").css('display', 'block');
    // $(".determinate").css('width', '62.5%');
    // },
    'click .next-active':function(){
    $(".active").css('display', 'none');
    $(".session_location").css('display', 'block');
    $(".determinate").css('width', '85%');
    },
    'click .next-session_location':function(){
    $(".mylocation").css('display', 'block');
    $(".session_location").css('display', 'none');
    $(".determinate").css('width', '95%');
    },
    'click .next-mylocation':function(){
    $(".mylocation").css('display', 'none');
    $(".one_liner").css('display', 'block');
    $(".determinate").css('width', '100%');
    },
    'click .back-charge':function(){
    $(".charge").css('display', 'none');
    $(".repertoire").css('display', 'block');
    },
    'click .back-working_hours':function(){
    $(".working_hours").css('display', 'none');
    $(".charge").css('display', 'block');
    },
    'click .back-working_days':function(){
    $(".working_hours").css('display', 'block');
    $(".working_days").css('display', 'none');
    },
    'click .active-startDate':function(){
    $(".active").css('display', 'none');
    $(".working_days").css('display', 'block');
    },
    // 'click .back-endDate':function(){
    // $(".endDate").css('display', 'none');
    // $(".startDate").css('display', 'block');
    // },
    'click .back-session_location':function(){
    $(".endDate").css('display', 'block');
    $(".session_location").css('display', 'none');
    },
    'click .back-mylocation':function(){
    $(".mylocation").css('display', 'none');
    $(".session_location").css('display', 'block');
    },
    'click .back-one_liner':function(){
    $(".one_liner").css('display', 'none');
    $(".mylocation").css('display', 'block');
    },
    'submit form': function(){
      FlowRouter.go('/newaccomp');
    }
  });

// Modal Review Booking Tests

Template.ReviewLeftFormPanel.helpers({
  getNextButtonClass(){
    if(Template.instance().currentStep.get() == "PaymentReview"){
      return "btn wave-light finalize right"
    }else{
      return "btn wave-light next-panel right";
    }
  },

  currentStep(){
    return Template.instance().currentStep.get();
  }
});

Template.ReviewLeftFormPanel.onCreated(function() {
  this.currentStep = new ReactiveVar("SessionReview")
});

Template.ReviewLeftFormPanel.events({
  'click .next-panel'(event, template){
    console.log(AutoForm.getFormValues('UpdateSessionCount').insertDoc)
    if(AutoForm.validateForm('UpdateSessionCount') &&
        AutoForm.validateField('InsertFirstSession', 'suggestedTimes') &&
        AutoForm.validateField('InsertFirstSession', 'location'))
    {

      var queryParam = {booking: AutoForm.getFormValues('UpdateSessionCount').insertDoc, session: AutoForm.getFormValues('InsertFirstSession').insertDoc};
      FlowRouter.setQueryParams(queryParam);

      let panels= ["SessionReview", "PaymentReview"]
      var currentStepIndex = panels.indexOf(template.currentStep.get());
      if(currentStepIndex > -1){
        let nextStepIndex = currentStepIndex + 1
        if(nextStepIndex < panels.length){
          console.log("Go to next page")
          template.currentStep.set(panels[nextStepIndex]);
        }
      }
    }
  },

  'click .finalize' (event, template) {
    var finalTransaction = FlowRouter.getQueryParam("booking");
    var firstSession = FlowRouter.getQueryParam("session");

    let insertedTransactionId = Transactions.insert(finalTransaction);

    if(insertedTransactionId){
      firstSession.transaction = insertedTransactionId;

      if(Sessions.insert(firstSession)){
        console.log('Successfully Booked');
        FlowRouter.go('/success/:transactionId', {transactionId: insertedTransactionId});
      };
    }
  }
});

Template.request.helpers({
  profilePicUrlById(userId){
    var picDoc = Images.findOne({userId: userId, picType: "profile"})
    if(picDoc){
      return picDoc
    }
  }
});

Template.bookAccompanistForm.events({
  'click .book-accompanist' (event, instance) {
    var userId = Meteor.userId();
    if (userId){
      if(Roles.userIsInRole(userId, 'bookAccompanist')){
        //$('#bookAccompanistForm').submit()
        if(AutoForm.validateForm("bookAccompanistForm")){
          let currentTransaction = AutoForm.getFormValues("bookAccompanistForm").insertDoc
          console.log(currentTransaction);
          let currentProfileId = FlowRouter.getParam("profileId");
          if (currentProfileId){
            FlowRouter.go('/bookAccompanist/:profileId',  {profileId: currentProfileId}, {booking: currentTransaction} );
          }else{
            console.log("Wrong Page; Please book an accompanist on an accompanist profile page")
          }
        }else{
          Bert.alert( 'Please check the fields again!', 'danger');
        }

      }else{
        Bert.alert( 'You must first fill in music profile before booking!', 'danger');
      }
    }else{
    }
  }
});

Template.registerHelper('myProfilePic', function(){
  var urlDoc = Images.findOne({userId: Meteor.userId()}, {url: 1});
  if (urlDoc){
    return urlDoc.url
  }
})

Template.accountTemplate.helpers({
  currentProfilePic(){
    var urlDoc = Images.findOne({userId: FlowRouter.getParam('profileId')}, {url: 1});
    if (urlDoc){
      return urlDoc.url
    }
  }
})

Template.BookingReviewLeftPanel.onCreated(function () {
  this.currentStep = new ReactiveVar("repertoireSection");
  this.checkboxState = new ReactiveVar(false);
});

Template.BookingReviewLeftPanel.helpers({
  currentStep() {
    return Template.instance().currentStep.get()
  },
  isChecked() {
    if (Template.instance().checkboxState.get()){
      return "checked";
    }else{
      return "";
    }
  },
  getButtonText(){
    if(Template.instance().currentStep.get() == "paymentSection"){
      return "Confirm Booking"
    }
    return "Next"
  },
  getNextButtonClass() {
    var atts = "btn col s12"
    if(Template.instance().currentStep.get() == "paymentSection"){
      atts =  (atts + " " + "final-confirm")
    }else{
      atts =  (atts + " " + "next-panel")
    }

    if(Template.instance().checkboxState.get()){
      return atts
    }else{
      return (atts + " " + "disabled")
    }

  },
  currentCheckBoxText(transaction) {
    switch (Template.instance().currentStep.get()) {
      case "repertoireSection":
          return "I confirm that I can accompany the musician on the repertoire above"
          break;
      case "sessionsSection":
          var str = "I confirm " + transaction.sessionCount + " sessions between " + formatDuration(transaction.startDate, transaction.endDate);
          return str;
          break;
      case "paymentSection":
          return "Confirm the total payment"
          break;
    }
  }
});

Template.BookingReviewLeftPanel.events({
  'change .checkbox-confirm input' (event, instance) {
    instance.checkboxState.set(event.target.checked);
  },
  'click .next-panel' (event, instance) {
    var validTransition = true;
    if(instance.currentStep.get() == "sessionsSection"){
      if (AutoForm.validateField('upsertSessionResponse', 'startTime')){
        var doc = AutoForm.getFormValues('upsertSessionResponse');
        if(doc){
          var currentSession = Sessions.findOne({transaction: FlowRouter.getParam("transactionId")}, {_id:1} );
          var selector = {_id: currentSession._id};
          FlowRouter.setQueryParams({doc : doc.updateDoc, selector : selector});
        };


      }else{
        validTransition = false;
      }
    }
    if(validTransition){
      let panels= ["repertoireSection", "sessionsSection", "paymentSection"]
      var currentStepIndex = panels.indexOf(instance.currentStep.get());
      if(currentStepIndex > -1){
        let nextStepIndex = currentStepIndex + 1
        if(nextStepIndex < panels.length){
          console.log("Go to next page")
          instance.checkboxState.set(false);
          instance.currentStep.set(panels[nextStepIndex]);
        }
      }
    }


  },
  'click .final-confirm' (event, instance) {

    Meteor.call('confirmBookingRequest', FlowRouter.getParam("transactionId"), FlowRouter.getQueryParam("selector"), FlowRouter.getQueryParam("doc"))
  },

});

// Modal Review Booking Tests

Template.paymentSection.helpers({
  getHourlyCharge(musician) {
    var x = AccompanistProfiles.findOne({Id: musician}, {charge: 1})
    if (x){
      return x.charge
    }
  },
  getTotalEstimated(musician, hours) {
    var x = AccompanistProfiles.findOne({Id: musician}, {charge: 1})
    if (x){
      return hours * x.charge
    }
  }
});

Template.request.events({
  'click .review-booking' (event) {
    Session.set('sessionTransaction', this._id);
  }
});

Template.upsertSessionResponse.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  // FIXTHIS check if there are more than one sessions/transaction

  optionArray: function() {
    // Get options from sessions
    var currentSession = Sessions.findOne({transaction: FlowRouter.getParam("transactionId")});
    if(currentSession && currentSession.suggestedTimes){
      var optionsArray = currentSession.suggestedTimes.map(function(time){
        return {label:time.toString(), value:time.toString()};
      });
      return optionsArray
    }
  }
});


// Uploader Tests

Template.uploader.events({
  'change input[type="file"]' ( event, template ) {
    Modules.client.uploadToAmazonS3( { event: event, template: template, type:"profile" } );
  }
});

Template.files.onCreated( () => Template.instance().subscribe( 'files' ) );

Template.files.helpers({
  files() {
    var files = Images.find({userId: Meteor.userId()}, { sort: { "added": -1 } } );
    if ( files ) {
      return files;
    }
  },

  profileFile() {
    var file = Images.findOne({userId: Meteor.userId(), picType: "profile"});
    if(file){
      return file
    }
  }
});

Template.accountTemplate.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

});

Template.file.helpers({
  isImage( url ) {
    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
  }
});

Template.file.events({
  'click .delete_button' ( event, template ) {
    Meteor.call('deleteImageFromS3',event.target.value);
  }
});
//
// Template.uploader.events({
//   'dragover' : function (event, template){
//     event.preventDefault();
//     console.log("entered")
//     $('.card-panel').addClass('green lighten-1 white-text');
//   },
//
//   'dragleave' : function (event, template){
//     event.preventDefault();
//     console.log("left")
//     $('.card-panel').addClass('white black-text').removeClass('green lighten-1 white-text');
//   },
//
//   'drop' : function (event, template){
//     console.log("dropped")
//     $('.card-panel').addClass('white black-text').removeClass('green lighten-1 white-text');
//   },
// });

// Template Inheritance


// Autoform Settings

AutoForm.setDefaultTemplate('materialize');

// Accounts

AccountsTemplates.configure({
  defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
  defaultLayout: 'MainLayout',
  defaultLayoutRegions: {
      nav: 'Navbar'
  },
  defaultContentRegion: 'main',

  onSubmitHook: function(error, state){
    if (!error){
      if (state === "signIn"){
        $('#signUp').closeModal();
        $('#login').closeModal();
      }
      if (state === "signUp"){
        $('#signUp').closeModal();
        $('#login').closeModal();
      }
    }
  }
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

// Javascript Component Initialization

Template.Navbar.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $(".dropdown-button").dropdown();
  });
});

Template.navbarAccount.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on click
      alignment: "right", // Aligns dropdown to left or right edge (works with constrain_width)
      gutter: 0, // Spacing from edge
      belowOrigin: true,
    });
  });
});

Template.modalLogin.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
});

Template.modalSignUp.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
});

Template.ProfileLayout.onRendered(function () {
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
});

Template.CollapsibleStructure.onRendered(function () {
  $('.collapsible').collapsible({
    accordion : false
  });
});

Template.TabStructure.onRendered(function () {
  $('ul.tabs').tabs();
});

Template.NewAccompLayout.onRendered(function () {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
});

Template.ProfileLayout.onRendered(function(){
  // parallax
  $(".parallax").parallax();

  // resize card with card-reveal
  $(document).ready(function() {
    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
            $(this).velocity({height:$(this).data('height')},{duration:225});
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).data('height',$(this).css('height')).find('.card-reveal').css({ display: 'block',height:'auto'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
              $(this).velocity({height:$(this).find('.card-reveal').height()+40},{duration:300});
        }
      }
      $('.card-reveal').closest('.card').css('overflow', 'hidden');
    });
  });
});

Template.search.onRendered(function () {
  // Enter acts as tabs till time to submit form
  $(document).ready(function(){
    $('#searchform input').keydown(function(e){
      if(e.keyCode==13){
        if($(':input:eq(' + ($(':input').index(this) + 1) + ')').attr('type')=='submit'){
          return true;
        }
        $(':input:eq(' + ($(':input').index(this) + 1) + ')').focus();
        return false;
      }
    });
  });

  // Materialize date picker desing
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});

// On creation

// ==Global Template Helpers==

Template.registerHelper('navbarFields', () => {
  // Logged In
  if (Meteor.user()){
    // Accompanist
    if (Roles.userIsInRole(Meteor.userId(), 'accompanist')){
      return ['accompanistDashboard', 'bookings', 'navbarAccount']
    }
    // Not Accompanist
    return ['becomeAnAccompanist','bookings', 'navbarAccount' ]
  // Not Logged In
  }else{
    return ['becomeAnAccompanist','modalSignUp', 'modalLogin']
  }
});

// Get Current User's Account
Template.registerHelper('myBasicProfile', () => {
  return BasicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current User's Music Profile
Template.registerHelper('myMusicProfile', () => {
  return MusicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('myAccompanistProfile', () => {
  return AccompanistProfiles.findOne({Id: Meteor.userId()});
});

Template.registerHelper('routeBasicProfile', () => {
  return BasicProfiles.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Music Profile
Template.registerHelper('routeMusicProfile', () => {
  return MusicProfiles.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('routeAccompanistProfile', () => {
  return AccompanistProfiles.findOne({Id: FlowRouter.getParam("profileId")});
});

Template.registerHelper('routeAccompanist', () => {
  return FlowRouter.getParam("profileId");
});

Template.registerHelper('sentBookingRequests', () =>{
  return Transactions.find({musician: Meteor.userId()}).fetch()
});

Template.registerHelper('receivedBookingRequests', (arg) =>{
  var splitRequests = {pending:[], ongoing:[], completed:[], cancelled:[]}
  Transactions.find({accompanist: Meteor.userId()}).forEach(function(doc){
    if(doc.status == "Pending"){
      splitRequests.pending.push(doc);
    }else if(doc.status == "Ongoing"){
      splitRequests.ongoing.push(doc);
    }else if(doc.status == "Completed"){
      splitRequests.completed.push(doc);
    }else{
      splitRequests.cancelled.push(doc);
    }
  });
  return splitRequests
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMM DD, YYYY');
});

Template.registerHelper('formatDateWithoutYear', function(date) {
  return moment(date).format('MMM DD');
});


Template.registerHelper('formatBirthDate', function(date) {
  return moment(date).format('MMM, YYYY');
});

// Slice day string and capitalize it's first letter
// All fixed in schema, only need the slicing functionality
Template.registerHelper('formatDay', function(day) {
  var Day = day.substr(0,3);
  var new_day = Day.charAt(0).toUpperCase() + Day.slice(1);
  return new_day;
});

Template.registerHelper('formatDuration', function(date1, date2) {
  var start =  moment(date1);
  var end = moment(date2);
  if (start.year() == end.year()){
    // Year is the same
    if(start.month() == end.month()){
      return start.format('MMM DD - ') + end.format('DD, YYYY')
    }
      return start.format('MMM DD - ') + end.format('MMM DD, YYYY')
  }
  return start.format('MMM DD, YYYY - ') + end.format('MMM DD, YYYY')
});

Template.registerHelper('basicProfileById', (id) =>{
  return BasicProfiles.findOne({userId: id})
});

Template.registerHelper('musicProfileById', (id) =>{
  return MusicProfiles.findOne({userId: id})
});

Template.registerHelper('accompanistProfileById', (id) =>{
  return AccompanistProfiles.findOne({Id: id})
});

Template.registerHelper('routeTransaction', () =>{
  return Transactions.findOne({_id: FlowRouter.getParam("transactionId")})
});

Template.registerHelper('isOwnProfile', () => {
  return FlowRouter.getParam("profileId") == Meteor.userId();
});

Template.registerHelper('and',function(a,b){
  return a && b;
});
Template.registerHelper('or',function(a,b){
  return a || b;
});

Template.registerHelper('basicProfileExists', () => {
  return undefined !== BasicProfiles.findOne({userId: Meteor.userId()});
});

Template.registerHelper('musicProfileExists', () => {
  return undefined !== MusicProfiles.findOne({userId: Meteor.userId()});
});

Template.registerHelper('accompanistProfileExists', () => {
  return undefined !== AccompanistProfiles.findOne({Id: Meteor.userId()});
});

Template.registerHelper('isAccompanist', () => {
  var x = AccompanistProfiles.findOne({Id: FlowRouter.getParam("profileId")})
  return x !== null;
});

Template.registerHelper('validId', () =>{
  if (BasicProfiles.findOne({userId : FlowRouter.getParam("profileId")})){
    return true
  }else{
    return false
  }
});

Template.registerHelper( 'userId', () => {
    event.preventDefault();
    return Meteor.userId();
});


// Old Global Template Helpers


Template.registerHelper('defaultTransaction', () => {
  return {musician: Meteor.userId(),
          accompanist: FlowRouter.getParam("profileId"),
          status: 'Pending'}
});



Template.registerHelper( 'getProfileRoute', (id = Meteor.userId()) =>{
  return "/profile/"+id
});

Template.registerHelper( 'fromProfile', (location) =>{
  if (location == "myProfile") {
    return true
  } else {
  return false
}
});

Template.registerHelper( 'fromBooking', (page) =>{
  if (page == "booking") {
    return true
  } else {
  return false
}
});

Template.registerHelper( 'fromBookingTime', (page) =>{
  if (page == "sessionTime") {
    return true
  } else {
  return false
}
});

Template.registerHelper( 'getBookingRoute', (bookingId) =>{
  return "/bookingRequest/"+bookingId
});

Template.registerHelper( 'transactionById', (id = FlowRouter.getParam("transactionId")) => {
    event.preventDefault();
    // Only return if the user is the accompanist listed
    return Transactions.findOne({_id:id, accompanist: Meteor.userId()})
});

Template.registerHelper( 'musicCompetitionsDoc', () => {
    event.preventDefault();
    // array =  MusicCompetitions.find().fetch();
    return [{label: "First Manhattan International Music Competition", value: "First Manhattan International Music Competition"}]
});

// Local Template On Created

Template.upsertMusicProfileForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertBasicProfileForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertAccompanistForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.EditingForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.results.onCreated(function() {
  this.currentState = new ReactiveVar('result-card-left')
});

// Local Template Helpers

Template.EditingForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentProfile: function () {
    var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId()});
    if (currentProfile) {
      Template.instance().formType.set('update');
      return currentProfile
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  },
  instrumentList: function () {
    return ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
    "Zither"].map(function(obj){return {label: obj, value:obj}})
  }
});

Template.upsertMusicProfileForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentProfile: function () {
    var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId()});
    if (currentProfile) {
      Template.instance().formType.set('update');
      return currentProfile
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  }
});

Template.instruments.helpers ({
  instrumentList: function () {
    return ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
    "Zither"].map(function(obj){return {label: obj, value:obj}})
  }
});

Template.profileTemplate.helpers({
  arrayProfileCards: function(instruments, awards, programs, orchestras) {
    var mydata =[
      {icon: 'brush', mainTitle: 'Instruments Mastered', dynamicDataTemplate: 'InstList', dynamicData: instruments, arrayField: "instruments", add_title: "Instrument", addButtonClass: "instrumentsAddButton", addArrayClass: "instrumentsAddForm", close: "cancelInstrument"},
      {icon: 'verified_user', mainTitle: 'Honors & Awards', dynamicDataTemplate: 'awardsList', dynamicData: awards, arrayField: "awards", add_title: "Award", addButtonClass: "awardsAddButton", addArrayClass: "awardsAddForm", close: "cancelAward"},
      {icon: 'music_note', mainTitle: 'Music Programs', dynamicDataTemplate: 'programsList', dynamicData: programs, arrayField: "musicPrograms", add_title: "Music Program", addButtonClass: "programsAddButton", addArrayClass: "programsAddForm", close: "cancelProgram"},
      {icon: 'group_work', mainTitle: 'Orchestras Participated in', dynamicDataTemplate: 'orchestrasList', dynamicData: orchestras, arrayField: "orchestras", add_title: "Orchestra", addButtonClass: "orchestrasAddButton", addArrayClass: "orchestrasAddForm", close: "cancelOrchestra"}
    ]
    return mydata;
  },
  currentProfile: function () {
    var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId()});
      return currentProfile
  },
});

Template.afArrayField_newAccompCustomArrayField.helpers({
    icon: function(name) {
      switch(name){
          case 'awards':   return "verified_user";
          case 'musicPrograms': return "music_note";
          case 'orchestras':    return "group_work";
          case 'repertoire':    return "group_work";
          case 'instruments':    return "brush";
      }
    },
    mainTitle: function(name) {
      switch(name){
          case 'awards':   return "Awards & Honors";
          case 'musicPrograms': return "Music Programs ";
          case 'orchestras':    return "Orchestras Participated in";
          case 'repertoire':    return "Repertoire";
          case 'instruments':    return "Instruments Mastered";
      }
    }
    ,
    add_title: function(name) {
        switch(name){
            case 'awards':   return "Award";
            case 'musicPrograms': return "Music Program";
            case 'orchestras':    return "Orchestra";
            case 'repertoire':    return "Repertoire";
            case 'suggestedTimes':    return "Time";
            case 'instruments':    return "Instrument";
        }
    }
});

Template.afArrayField_editProfileCustomArrayField.helpers({
    icon: function(name) {
      switch(name){
          case 'awards':   return "verified_user";
          case 'musicPrograms': return "music_note";
          case 'orchestras':    return "group_work";
          case 'instruments':    return "brush";
      }
    },
    mainTitle: function(name) {
      switch(name){
          case 'awards':   return "Awards & Honors";
          case 'musicPrograms': return "Music Programs";
          case 'orchestras':    return "Orchestras Participated in";
          case 'instruments':    return "Instruments Mastered";
      }
    }
});

// deletes null values in arrays (hack fix, change if autoform gets updated and solves this problem)
AutoForm.addHooks(null, {
  before: {
    update: function(doc) {
      _.each(doc.$set, function(value, setter) {
        if (_.isArray(value)) {
          var newValue = _.compact(value);
          doc.$set[setter] = newValue;
        }
      });
      return doc;
    }
  }
});

Template.upsertBasicProfileForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentBasicProfile: function () {
    var currentAccount = BasicProfiles.findOne({ userId: Meteor.userId()});
    if (currentAccount) {
      Template.instance().formType.set('update');
      return currentAccount;
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  }
});

Template.upsertAccompanistForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentAccompanistProfiles: function () {
    var currentAccompanistProfiles = AccompanistProfiles.findOne({ Id: Meteor.userId()});
    if (currentAccompanistProfiles) {
      Template.instance().formType.set('update');
      return currentAccompanistProfiles;
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  }
});

Template.results.helpers({

  accompanists: function() {
  //var coords = Session.get('coords')

    var address = FlowRouter.getQueryParam("address")
    var start_date = FlowRouter.getQueryParam("start_date")
    var end_date = FlowRouter.getQueryParam("end_date")

    Meteor.call('getGeocode', address, function(err, result){
      console.log("Meteor call worked")

      if (result !== null){
        var lat = Number(result[0].latitude);
        var lng = Number(result[0].longitude);
        var coords = [lng, lat];
      }

      //convert dates to dates that can be compared with Mongo schema
      var sd = new Date(start_date)
      var ed = new Date(end_date)

      if (coords !== undefined && moment(sd).isValid() && moment(ed).isValid()) {
          var results = AccompanistProfiles.find({
            loc:
              { $near :
                {
                  $geometry: { type: "Point",  coordinates: coords },
                  $maxDistance: 20000
                }
              },
            // startDate:  {$lte: sd, $lte: ed},
            // endDate: {$gte: sd, $gte: ed}
            active: {true}
          }).fetch();
      }

      else if (moment(sd).isValid() && moment(ed).isValid()){
        var results =
          AccompanistProfiles.find({
            // startDate:  {$lte: sd, $lte: ed},
            // endDate: {$gte: sd, $gte: ed}
          active: {true}}).fetch();
      }

      else if (moment(ed).isValid()){
        var results =
          AccompanistProfiles.find({
            // startDate:  {$lte: ed},
            // endDate: {$gte: ed}
          active: {true}}).fetch();
      }

      else if (moment(sd).isValid() ){
        var results =
          AccompanistProfiles.find({
            // startDate:  {$lte: sd},
            // endDate: {$gte: sd}
          active: {true}}).fetch();
      }

      else if (coords !== undefined){
        var results = AccompanistProfiles.find({
          loc:
            { $near :
              {
                $geometry: { type: "Point",  coordinates: coords },
                $maxDistance: 20000
              }
            }}).fetch();
      }

      else {
        var results = null
      }

      Session.set('results', results)
    });

    return Session.get('results')
  },
  accompname: function() {
    var names = BasicProfiles.findOne({userId: this.Id});
    return names
  },
  currentState: function() {
    var state = Template.instance().currentState.get();

    if (state == "result-card-right") {
      Template.instance().currentState.set('result-card-right');
      return "result-card-left"
    } else {
      Template.instance().currentState.set('result-card-left');
      return "result-card-right"
    }
  },
   currentProfilePic: function(Id){
    var pic = Images.findOne({userId: Id});
    if (pic){
      return pic
    }
  }
});

// Events

Template.search.events({
  'submit form': function(){
      console.log("Form Submitted")
      FlowRouter.go('results?');
  }
});

// Google search autocomplete
Template.search.events({
   'click #autocomplete': function(e,search) {
     initAutoComplete();
   }
});

Template.NewAccompLayout.events({
   'click #autocomplete': function(e,NewAccompLayout) {
     initAutoComplete();
   }
});

var initAutoComplete = function() {
  var autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')),{types: ['geocode'] }
  );
};

Template.EditAccompanistProfiles.events({
  'click button': function(){
      Notifications.info('Test', 'Working Notification');
  }
});

Template.BookingRequest.events({
	'click button': function(){
      Transactions.update({_id: FlowRouter.getParam("transactionId")}, {$set: {status: "Confirmed"}});
      Notifications.info('Successful Confirmation', 'You successfully confirmed your booking!');
  }
});

Template.makeAdmin.events({
	'click button': function(){
    userId = Meteor.userId();
    Meteor.call('divinify', userId);
  }
});

// Decide Modal Login/SignUp Popup
Template.modalLogin.events({
  'click .modal-trigger': function(){
    AccountsTemplates.setState('signIn');
  }
});

Template.modalSignUp.events({
  'click .modal-trigger': function(){
    AccountsTemplates.setState('signUp');
  }
});

// Logout from the navbar
Template.Navbar.events({
  'click .logout': function(){
    AccountsTemplates.logout();
  }
});



// For Debugging
 SimpleSchema.debug = true;
