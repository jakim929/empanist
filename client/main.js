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


// Javascript Component Initialization

Template.CollapsibleStructure.onRendered(function () {
  $('.collapsible').collapsible({
    accordion : false
  });
});

Template.TabStructure.onRendered(function () {
  $('ul.tabs').tabs();
});

Template.login.onRendered(function () {
  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 700,
    belowOrigin: true,
    alignment: 'right'
  });
});

Template.NewAccompLayout.onRendered(function () {
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
});



// On creation

Template.navbar.onCreated(function (){
    this.navbarFields = new ReactiveVar(['myProfile', 'accompanistDashboard','bookings'])
});

// ==Global Template Helpers==

Template.registerHelper('navbarFields', () => {
  // Logged In
  if (Meteor.user()){
    // Accompanist
    if (Roles.userIsInRole(Meteor.userId(), 'accompanist')){
      console.log("Navbar Config 1")
      return ['accompanistDashboard', 'myProfile', 'bookings']
    }
    // Not Accompanist
    console.log("Navbar Config 2")
    return ['becomeAnAccompanist', 'myProfile' ,'bookings']
  // Not Logged In
  }else{
    console.log("Navbar Config 3")
    return ['login', 'becomeAnAccompanist']

  }
});


// Get Current User's Account
Template.registerHelper('myAccount', () => {
  return BasicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current User's Music Profile
Template.registerHelper('myProfile', () => {
  return MusicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('myAccompanistProfiles', () => {
  return AccompanistProfiles.findOne({Id: Meteor.userId()});
});

Template.registerHelper('routeAccount', () => {
  return BasicProfiles.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Music Profile
Template.registerHelper('routeProfile', () => {
  return MusicProfiles.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('routeAccompanistProfiles', () => {
  return AccompanistProfiles.findOne({Id: FlowRouter.getParam("profileId")});
});

Template.registerHelper('sentBookingRequests', () =>{
  return Transactions.find({musician: Meteor.userId()}).fetch()
});

Template.registerHelper('receivedBookingRequests', () =>{
  return Transactions.find({accompanist: Meteor.userId()}).fetch()
});

Template.registerHelper('accountById', (id) =>{
  return BasicProfiles.findOne({userId: id})
});

Template.registerHelper('profileById', (id) =>{
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



// Old Global Template Helpers

Template.registerHelper('pendingTransactions', (array) =>{
  return array.filter(function(element, index, array){
    return element.status == "Pending"
  })
});

Template.registerHelper('confirmedTransactions', (array) =>{
  return array.filter(function(element, index, array){
    return element.status == "Confirmed"
  })
});

Template.registerHelper('completedTransactions', (array) =>{
  return array.filter(function(element, index, array){
    return element.status == "Completed"
  })
});

Template.registerHelper('cancelledTransactions', (array) =>{
  return array.filter(function(element, index, array){
    return element.status == "Completed"
  })
});


Template.registerHelper('arrayLength', (array) =>{
  return array.length
});

Template.registerHelper('validId', () =>{
  // For now it is set to looking up in BasicProfiles instead of Meteor.users
  // Makes it work with test data
  // if (Meteor.users.findOne(FlowRouter.getParam("profileId"))){

  if (BasicProfiles.findOne({userId: FlowRouter.getParam("profileId")})){
    return true
  }else{
    return false
  }
});

Template.registerHelper('defaultTransaction', () => {
  return {musician: Meteor.userId(),
          accompanist: FlowRouter.getParam("profileId"),
          status: 'Pending'}
});

Template.registerHelper('ownProfile', () => {
  event.preventDefault();

  return (FlowRouter.getParam("profileId") == Meteor.userId())
});

Template.registerHelper( 'userId', () => {
    event.preventDefault();
    return Meteor.userId();
});

Template.registerHelper( 'getProfileRoute', (id = Meteor.userId()) =>{
  return "/profile/"+id
});

Template.registerHelper( 'getBookingRoute', (bookingId) =>{
  return "/bookingRequest/"+bookingId
});

Template.registerHelper('transactionsAsAccompanist', () =>{
  return Transactions.find({ accompanist: Meteor.userId()}).fetch();
});

Template.registerHelper('transactionsAsMusician', () =>{
  return Transactions.find({ musician: Meteor.userId()}).fetch()
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

// Local Template Helpers

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


// For Debugging
 SimpleSchema.debug = true;
