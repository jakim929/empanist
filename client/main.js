import { MusicProfiles } from '../collections/musicProfiles.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'
import { BasicProfiles } from '../collections/basicProfiles.js'
import { MusicCompetitions } from '../collections/competitions.js'
import { Transactions } from '../collections/transactions.js'
import { AccompanistResponses } from '../collections/transactions.js'
import { Sessions } from '../collections/transactions.js'


window.MusicProfiles = MusicProfiles
window.AccompanistProfiles = AccompanistProfiles
window.BasicProfiles = BasicProfiles
window.MusicCompetitions = MusicCompetitions
window.Transactions = Transactions
window.AccompanistResponses = AccompanistResponses
window.Sessions = Sessions

// Booking Tests


Template.BookingRequest.onCreated(function () {
  this.currentStep = new ReactiveVar("repertoireSection");
});

Template.BookingRequest.onRendered(function () {

});

Template.BookingRequest.helpers({
  currentStep() {
    return Template.instance().currentStep.get()
  },


});

Template.BookingRequest.events({
  'click .next-session' (event, instance) {
    instance.currentStep.set("sessionsSection");
  },
  'click .next-payment' (event, instance) {
    instance.currentStep.set("paymentSection");
  },
  'click .final-confirm' (event, instance) {
    Meteor.call('confirmBookingRequest', FlowRouter.getParam("transactionId") )
  },

});

// Modal Review Booking Tests


Template.repertoireSection.onCreated(function () {
  this.RepertoireConfirmCheck = new ReactiveVar(false);
});

Template.repertoireSection.onRendered(function () {
  this.RepertoireConfirmCheck.set(false);
});

Template.repertoireSection.events({
  'change .check-repertoire-confirm input' (event, instance) {
    instance.RepertoireConfirmCheck.set(event.target.checked);
  },
});

Template.repertoireSection.helpers({
  getRepertoireConfirmButtonClass() {
    if (Template.instance().RepertoireConfirmCheck.get()){
      return "btn col s12 next-session"
    }else{
      return "btn col s12 next-session disabled"
    }
  }
});


Template.sessionsSection.onCreated(function () {
  this.SessionConfirmCheck = new ReactiveVar(false);
});

Template.sessionsSection.onRendered(function () {
  this.SessionConfirmCheck.set(false);
});

Template.sessionsSection.events({
  'change .check-session-confirm input' (event, instance) {
    instance.SessionConfirmCheck.set(event.target.checked);
  },

  'click .next-payment' (event, instance) {
     $('#upsertSessionResponse').submit()
  }
});

Template.sessionsSection.helpers({
  getSessionConfirmButtonClass() {
    if (Template.instance().SessionConfirmCheck.get()){
      return "btn col s12 next-payment"
    }else{
      return "btn col s12 next-payment disabled"
    }
  }
});

Template.paymentSection.onCreated(function () {
  this.PaymentConfirmCheck = new ReactiveVar(false);
});

Template.paymentSection.onRendered(function () {
  this.PaymentConfirmCheck.set(false);
});

Template.paymentSection.events({
  'change .check-payment-confirm input' (event, instance) {
    instance.PaymentConfirmCheck.set(event.target.checked);
  }
});

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
  },
  getFinalConfirmButtonClass() {
    if (Template.instance().PaymentConfirmCheck.get()){
      return "btn col s12 final-confirm"
    }else{
      return "btn col s12 final-confirm disabled"
    }
  }
});








Template.AccompanistDashboard.onCreated(function() {
  Session.set('sessionTransaction', undefined);
});

Template.request.events({
  'click .review-booking' (event) {
    Session.set('sessionTransaction', this._id);
  }
});

Template.registerHelper('getSessionTransaction', () => {
  return x =  Session.get('sessionTransaction')
});


Template.upsertSessionResponse.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  // FIXTHIS check if there are more than one transaction
  currentResponse: function () {
    var currentResponse = Sessions.findOne({ transaction: FlowRouter.getParam("transactionId")});
    if (currentResponse) {
      Template.instance().formType.set('update');
      return currentResponse
    }
  },

  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  },

  optionArray: function() {
    var currentSession = Sessions.findOne({transaction: FlowRouter.getParam("transactionId")});
    var optionsArray = currentSession.suggestedTimes.map(function(time){
      return {label:time.toString(), value:time.toString()};
    });
    return optionsArray
  }
});

Template.upsertSessionResponse.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});


Template.upsertSessionResponse.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  // FIXTHIS check if there are more than one transaction
  currentResponse: function () {
    var currentResponse = Sessions.findOne({ transaction: FlowRouter.getParam("transactionId")});
    if (currentResponse) {
      Template.instance().formType.set('update');
      return currentResponse
    }
  },

  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  },

  optionArray: function() {
    var currentSession = Sessions.findOne({transaction: FlowRouter.getParam("transactionId")});
    var optionsArray = currentSession.suggestedTimes.map(function(time){
      return {label:time.toString(), value:time.toString()};
    });
    return optionsArray
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
  }
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

Template.AccompanistDashboard.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $(".button-collapse").sideNav({
      menuWidth: 150, // Default is 240
      edge: 'left', // Choose the horizontal origin
      //closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  });
});


Template.accountTemplate.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
});

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

Template.request.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal(
      {ready: function() {
        $('ul.tabs').tabs('select_tab', 'repertoire');
      }}
    );
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


Template.registerHelper('profilePic',  () => {
  return Images.findOne({userId: Meteor.userId(), picType: "profile"}).url
});


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


Template.registerHelper('pictureUrl', () => {
  var x =  Images.findOne({filename: "banjo.png"});

  if (x) {
    return "/gridfs/images/" + x.md5
  }
  return x;
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

Template.upsertInstrumentForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertAwardsForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertProgramsForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertOrchestraForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

// Local Template Helpers

Template.upsertOrchestraForm.helpers ({
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

Template.upsertProgramsForm.helpers ({
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

Template.upsertAwardsForm.helpers ({
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
  },

  instrumentList: function () {
    return ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
    "Zither"].map(function(obj){return {label: obj, value:obj}})
  }
});

Template.upsertInstrumentForm.helpers ({
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
            startDate:  {$lte: sd, $lte: ed},
            endDate: {$gte: sd, $gte: ed}}).fetch();
      }

      else if (moment(sd).isValid() && moment(ed).isValid()){
        var results =
          AccompanistProfiles.find({
            startDate:  {$lte: sd, $lte: ed},
            endDate: {$gte: sd, $gte: ed}}).fetch();
      }

      else if (moment(ed).isValid()){
        var results =
          AccompanistProfiles.find({
            startDate:  {$lte: ed},
            endDate: {$gte: ed}}).fetch();
      }

      else if (moment(sd).isValid() ){
        var results =
          AccompanistProfiles.find({
            startDate:  {$lte: sd},
            endDate: {$gte: sd}}).fetch();
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
