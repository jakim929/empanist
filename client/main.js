import { MusicProfiles } from '../collections/musicProfiles.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'
import { BasicProfiles } from '../collections/basicProfiles.js'
import { MusicCompetitions } from '../collections/competitions.js'
import { Transactions } from '../collections/transactions.js'

import { TestAccountData } from '../collections/testData.js'

window.MusicProfiles = MusicProfiles
window.AccompanistProfiles = AccompanistProfiles
window.BasicProfiles = BasicProfiles
window.MusicCompetitions = MusicCompetitions
window.Transactions = Transactions


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
    $(".dropdown-button").dropdown();
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



// On creation


// ==Global Template Helpers==

Template.registerHelper('navbarFields', () => {
  // Logged In
  if (Meteor.user()){
    // Accompanist
    if (Roles.userIsInRole(Meteor.userId(), 'accompanist')){
      console.log("Navbar Config 1")
      return ['accompanistDashboard', 'bookings', 'navbarAccount']
    }
    // Not Accompanist
    return ['becomeAnAccompanist','bookings', 'navbarAccount' ]
  // Not Logged In
  }else{
    return ['modalLogin','modalSignUp', 'becomeAnAccompanist']

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
