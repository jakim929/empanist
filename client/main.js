import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'
import { Accounts } from '../collections/account.js'
import { MusicCompetitions } from '../collections/competitions.js'
import { Transactions } from '../collections/transactions.js'

import { TestAccountData } from '../collections/testData.js'

window.MusicProfiles = MusicProfiles
window.AccompanistProfile = AccompanistProfile
window.Accounts = Accounts
window.MusicCompetitions = MusicCompetitions
window.Transactions = Transactions

// Helper functions

function wrapDoc (obj) {
  if (obj){
    return {field: "update", doc: obj}
  }else{
    return {field: "insert", doc: null}
  }
}

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

// On creation

Template.MainLayout.onCreated(function (){
  this.navbarFields = new ReactiveVar(['login','myProfile', 'accompanistDashboard','bookings'])
});

// ==Global Template Helpers==



// Get Current User's Account
Template.registerHelper('myAccount', () => {
  return Accounts.findOne({userId: Meteor.userId()});
});

// Get Current User's Music Profile
Template.registerHelper('myProfile', () => {
  return MusicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('myAccompanistProfile', () => {
  return AccompanistProfile.findOne({Id: Meteor.userId()});
});

Template.registerHelper('routeAccount', () => {
  return Accounts.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Music Profile
Template.registerHelper('routeProfile', () => {
  return MusicProfiles.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('routeAccompanistProfile', () => {
  return AccompanistProfile.findOne({Id: FlowRouter.getParam("profileId")});
});

Template.registerHelper('sentBookingRequests', () =>{
  return Transactions.find({musician: Meteor.userId()}).fetch()
});

Template.registerHelper('receivedBookingRequests', () =>{
  return Transactions.find({accompanist: Meteor.userId()}).fetch()
});

Template.registerHelper('accountById', (id) =>{
  return Accounts.findOne({userId: id})
});

Template.registerHelper('profileById', (id) =>{
  return MusicProfiles.findOne({userId: id})
});

Template.registerHelper('accompanistProfileById', (id) =>{
  return AccompanistProfile.findOne({Id: id})
});

Template.registerHelper('routeTransaction', () =>{
  return Transactions.findOne({_id: FlowRouter.getParam("transactionId")})
});

Template.registerHelper('isOwnProfile', () => {
  return FlowRouter.getParam("profileId") == Meteor.userId();
});


// Get Elements of the Navbar Fields for the User
Template.registerHelper('navbarFields', () => {
  return Template.instance().navbarFields.get()
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
  // For now it is set to looking up in Accounts instead of Meteor.users
  // Makes it work with test data
  // if (Meteor.users.findOne(FlowRouter.getParam("profileId"))){

  if (Accounts.findOne({userId: FlowRouter.getParam("profileId")})){
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

Template.registerHelper( 'transactionsDoc', () => {
    event.preventDefault();
    var allTransactions =
      {asMusician: Transactions.find({ musician: Meteor.userId()}).fetch(),
       asAccompanist: Transactions.find({ accompanist: Meteor.userId()}).fetch()}
    return allTransactions;
});

Template.registerHelper( 'transactionById', (id = FlowRouter.getParam("transactionId")) => {
    event.preventDefault();
    // Only return if the user is the accompanist listed
    return Transactions.findOne({_id:id, accompanist: Meteor.userId()})
});

Template.registerHelper( 'profileDoc', (id = FlowRouter.getParam("profileId")) => {
    event.preventDefault();
    if (!id) {
      id = Meteor.userId();
    }
    return wrapDoc(MusicProfiles.findOne({ userId: id}));
});

Template.registerHelper( 'accountDoc', (id = FlowRouter.getParam("profileId")) => {
  	event.preventDefault();
    if (!id) {
      id = Meteor.userId();
    }
    return wrapDoc(Accounts.findOne({ userId: id}));
});

Template.registerHelper( 'accompanistProfileDoc', (id = FlowRouter.getParam("profileId")) => {
    event.preventDefault();
    if (!id) {
      id = Meteor.userId();
    }
    return wrapDoc(AccompanistProfile.findOne({ Id: Meteor.userId()}));
});

Template.registerHelper( 'musicCompetitionsDoc', () => {
    event.preventDefault();
    // array =  MusicCompetitions.find().fetch();
    return [{label: "First Manhattan International Music Competition", value: "First Manhattan International Music Competition"}]
});


// Local Template On Created

Template.upsertProfileForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertAccountForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertAccompanistForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

// Local Template Helpers

Template.upsertProfileForm.helpers ({
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

Template.upsertAccountForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentAccount: function () {
    var currentAccount = Accounts.findOne({ userId: Meteor.userId()});
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
  currentAccompanistProfile: function () {
    var currentAccompanistProfile = AccompanistProfile.findOne({ Id: Meteor.userId()});
    if (currentAccompanistProfile) {
      Template.instance().formType.set('update');
      return currentAccompanistProfile;
    }
  },

  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  }
});

Template.results.helpers({

  accompanists: ()=> {
		var coords = Session.get('coords')

		// convert dates to dates that can be compared with Mongo schema
		var sd = new Date(Session.get('start_date'))
		var ed = new Date(Session.get('end_date'))

    if (coords && sd && ed) {
		  console.log("search all")
      return AccompanistProfile.find({
        loc:
          { $near :
            {
              $geometry: { type: "Point",  coordinates: coords },
              $maxDistance: 20000
            }
          },
        startDate:  {$lte: sd, $lte: ed},
        endDate: {$gte: sd, $gte: ed}}).fetch()

     }

     //   else if (coords && ed) {
    //   console.log("Searched coords and ed")
    //   return AccompanistProfile.find({
    //     loc:
    //       { $near :
    //         {
    //           $geometry: { type: "Point",  coordinates: coords },
    //           $maxDistance: 20000
    //         }
    //       },
    //     endDate: {$gte: new_sd, $gte: new_ed}}).fetch()
    // } else if (coords && sd) {
    //   console.log("Searched coords and sd")
    //   return AccompanistProfile.find({
    //     loc:
    //       { $near :
    //         {
    //           $geometry: { type: "Point",  coordinates: coords },
    //           $maxDistance: 20000
    //         }
    //       },
    //     startDate:  {$lte: new_sd, $lte: new_ed}}).fetch()
    // } else if (sd && ed) {
    //   console.log("Searched sd and ed")
    //   return AccompanistProfile.find({
    //     startDate:  {$lte: new_sd, $lte: new_ed},
    //     endDate: {$gte: new_sd, $gte: new_ed}}).fetch()
    // }
    	// return No results found return Null (should just go to empty results page with advanced search)
      console.log("Didn't search")
    	return null
  }
});

// Events

Template.search.events({
	'submit form': function(){
	    event.preventDefault();

	    //Constants submitted from the Home search bar
      const address = event.target.address.value
	   	const start_date = event.target.start_date.value
	   	const end_date = event.target.end_date.value


      Meteor.call('getGeocode', address, function(err, result){

        var lat = Number(result[0].latitude);
        var lng = Number(result[0].longitude);
        var coords_new = [lng, lat];

        if(err) {
          console.log(err)
        } else {
            console.log("search session set")
            Session.setPersistent('coords', coords_new)
            Session.setPersistent('start_date', start_date)
            Session.setPersistent('end_date', end_date)
        }
        console.log("working_search nothing done")
    });

      console.log("Form Submitted")
      // go to knew page here
      FlowRouter.go('results');
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

Template.EditAccompanistProfile.events({
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

// For Debugging
 SimpleSchema.debug = true;
