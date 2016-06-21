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

// Global Template Helpers

Template.registerHelper('defaultTransaction', () => {
  return {musician: Meteor.userId(),
          accompanist: FlowRouter.getParam("profileId"),
          status: 'Offered'}
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
})

Template.registerHelper( 'transactionsDoc', () => {
    event.preventDefault();
    var allTransactions =
      {asMusician: Transactions.find({ musician: Meteor.userId()}).fetch(),
       asAccompanist: Transactions.find({ accompanist: Meteor.userId()}).fetch()}
    console.log(allTransactions)
    return allTransactions;
});

Template.registerHelper( 'profileDoc', (id = FlowRouter.getParam("profileId")) => {
    event.preventDefault();
    if (!id) {
      id = Meteor.userId;
    }
    return wrapDoc(MusicProfiles.findOne({ userId: id}));
});

Template.registerHelper( 'accountDoc', (id = FlowRouter.getParam("profileId")) => {
  	event.preventDefault();
    if (!id) {
      id = Meteor.userId;
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

// Local Template Helpers

Template.upsertProfileForm.helpers ({
  instrumentList: function () {
    return ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
    "Zither"].map(function(obj){return {label: obj, value:obj}})
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

// Google search autocomplete
Template.search.events({
   'click #autocomplete': function(e,search) {
     initAutoComplete();
   }
});

var initAutoComplete = function() {
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

	  	Session.setPersistent('geo_location', geo_location)
	    Session.setPersistent('start_date', start_date)
	  	Session.setPersistent('end_date', end_date)

      console.log("Form Submitted")
      // go to knew page here
      FlowRouter.go('results');
  }
});

 SimpleSchema.debug = true;
