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


// On creation

Template.MainLayout.onCreated(function (){
  this.navbarFields = new ReactiveVar(['myProfile', 'accompanistDashboard','bookings', 'login'])
});

// Global Template Helpers

// Get Current User's Account
Template.registerHelper('myAccount', () => {
  return Accounts.findOne({userId: Meteor.userId()});
});

// Get Current User's Music Profile
Template.registerHelper('myProfile', () => {
  return MusicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current User's Accompanist Profile
Template.registerHelper('myAccompanistProfile', () => {
  return AccompanistProfile.findOne({userId: Meteor.userId()});
});

Template.registerHelper('isOwnProfile', () => {
  return FlowRouter.getParam("profileId") == Meteor.userId();
});




// Old Global Template Helpers


Template.registerHelper('navbarFields', () => {
  return Template.instance().navbarFields.get()
});

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
  if (Meteor.users.findOne(FlowRouter.getParam("profileId"))){
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
    return wrapDoc(AccompanistProfile.findOne({ userId: id}));
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

// Local Template Events

// Template.testData.events({
//   'click button'(event){
//     event.preventDefault();
//       console.log("Pressed");
//     for (var i =0; i < TestAccountData.length; i++){
//       Accounts.insert(TestAccountData[i]);
//       console.log("Inserted account number "+(i+1));
//     };
//   }
// });

Template.makeUpdateAccompForm.helpers ({
  NewAccompSchema: function () {
  	event.preventDefault();
  	return Schema.AccompanistProfileSchema;
  }
});

Template.results.helpers({
	// print this from the new page
  accompanists: ()=> {
		var gl = Session.get('geo_location')
		var sd = Session.get('start_date')
		var ed = Session.get('end_date')

		// convert dates to dates that can be compared with Mongo schema
		var new_sd = new Date(sd)
		var new_ed = new Date(ed)

		// fix location (Rad + Google API)
		if (gl && sd && ed) {
		  console.log("Searched")
      return AccompanistProfile.find({
        mylocation: gl,
        startDate:  {$lte: new_sd, $lte: new_ed},
        endDate: {$gte: new_sd, $gte: new_ed}}).fetch()
    }
    	// return No results found if null!!!!!!!!
      console.log("Didn't search")
    	return null
  }
});

// Events

// var initAutoCompleteProfile = function() {
//       var autocomplete = new google.maps.places.Autocomplete(
//         (document.getElementById('autocomplete')),{types: ['geocode'] }
//       );
// };

// var initAutoCompletePost = function() {
//       var autocomplete = new google.maps.places.Autocomplete(
//         (document.getElementById('autocomplete')),{types: ['geocode'] }
//       );
// };

// Template.search.rendered = initAutoCompleteProfile;

// Template.search.rendered = initAutoCompletePost;
window.onload = function() {
  var autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')),{types: ['geocode'] }
  );
};

Template.search.events({
	'submit form': function(){
	    event.preventDefault();

	    //Constants submitted from the Home search bar
	   	const geo_location = event.target.geo_location.value
	   	const start_date = event.target.start_date.value
	   	const end_date = event.target.end_date.value

	  	Session.set('geo_location', geo_location)
	    Session.set('start_date', start_date)
	  	Session.set('end_date', end_date)

      console.log("Form Submitted")
      // go to knew page here
      FlowRouter.go('results');
  }
});

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

Meteor.call('getGeocode', '29 champs elysée paris', function(err, result){
  if(err) {
    console.log(err);
  } else {
  }
});

AccompanistProfile.after.update(function (userId, doc, fieldNames, modifier, options) {
  Meteor.call('getGeocode', '29 champs elysée paris', function(err, res){
    if(err) {
      console.log(err);
    } else {

      AccompanistProfile.update({_id : doc._id}, {$set:{geolocation: res[0]}})
      console.log(AccompanistProfile.findOne({_id: doc._id}))
    }
  });
}, {fetchPrevious: false});



// Random creation
function randomElement (arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function randomInstrument (){
  var instrumentList = ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
  "Zither"];
  return randomElement(instrumentList);
};

function randomDatePar(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

function randomDate (){
  var start = new Date(2000, 1,1);
  var end = new Date(2015, 6, 21);

  return randomDatePar(start, end, 4, 12);
}

function randomAward (){
  var competitionList = ["First Manhattan International Music Competition ","Golden Classical Music Awards International Competition ","Washington Metropolitan Philharmonic Association Composition Competition ","APAP Young Performer’s Career Advancement Program ","Young Concert Artists Competition (YCA)","Young Artists Competition Flute Society of Greater Philadelphia ","Kennett Symphony Competition ","Howard County Rising Star Award Competition ","S&R Foundation Washington Award","Astral Artists Auditions ","Mary Graham Lasley Scholarship Competition ","VSA International Young Soloists Award Program Kennedy Center","Arts Club of Washington Piano Trio Composition Competition ","Washington International Competition ","Johansen International Competition ","Wonderlic Competition ","US Army Band National Collegiate Solo Competition ","Concert Artist Guild Victor Elmaleh Competition ","Chesapeake Chamber Music Competition ","Ensemble ACJW Fellowship ","Liszt-Garrison Piano Competition ","Juilliard Pre College Division Concerto Competition ","Stulberg International String Competition ","Aspen Summer Music Festival Fellowship","YoungArts (National Foundation for the Advancement of the Arts)","U.S. Presidential Scholar in the Arts","Ambler Symphony Competition","Philadelphia Orchestra Albert M. GreenField Competition","Old York Symphony Competition ","Warminster Symphony Competition","NPR’s “From the Top” ","Delaware Tri County Music Festival Competition ","American String Teacher’s Association (ASTA) National Solo Competition"]
  var competition = randomElement(competitionList);

  var awardNameList = ["1st Prize", "2nd Prize", "3rd Prize", "Effort Award", "Bach Award"];
  var awardName = randomElement(awardNameList);

  var wonDate = randomDate();

  return {name: competition, date: wonDate, award: awardName};
};

function randomMusicProgram (){
  var musicProgramList = ["Kneisel Hall","Miami Music Festival ","National Orchestra Institute (NOI)","Boston University Tanglewood Institute (BUTI)","Music Academy of the West (MAW)","Britt Festival (Southern Oregon) ","Prague Summer Nights Festival ","Aspen Summer Music Festival ","Verbier Festival ","Colorado college summer music festival","Lucerne Summer Music Festival","Yellow Barn","Meadowmount School of Music ","Atlantic Music Festival ","International Contemporary Ensemble at Lincoln Center","Taos Chamber Music Festival ","National Youth Orchestra of the United States of America at Carnegie Hall (NYO-USA)","National Youth Orchestra 2 (NYO2)","Perlman Music Program ","Music@Menlo"]
  var musicProgramName = randomElement(musicProgramList);

  var today = new Date(2016, 6, 21);

  var sd = randomDate();
  var ed = randomDatePar(sd, today, 6, 20);

  return {programName: musicProgramName, startDate: sd, endDate: ed};
};

function createNewMusicProfile (){
  var randomUserId = new Meteor.Collection.ObjectID()._str;
  var randomYearsPlayed = Math.floor(Math.random()*20);
  return {userId: randomUserId, instrument: randomInstrument(), yearsPlayed: randomYearsPlayed, awards: [randomAward(),randomAward()], musicPrograms: [randomMusicProgram(),randomMusicProgram()]};
};

// For Debugging
 SimpleSchema.debug = true;
