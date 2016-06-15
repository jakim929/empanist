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



// Global Template Helpers

Template.registerHelper( 'profileDoc', () => {
    event.preventDefault();
    return MusicProfiles.findOne({ userId: Meteor.userId()});
});

Template.registerHelper( 'accountDoc', () => {
  	event.preventDefault();
    return Accounts.findOne({ _id: Meteor.userId()});
});

Template.registerHelper( 'accompanistProfileDoc', () => {
    event.preventDefault();
    return AccompanistProfile.findOne({ userId: Meteor.userId()});
});

Template.registerHelper( 'musicCompetitionsDoc', () => {
    event.preventDefault();
    // array =  MusicCompetitions.find().fetch();
    return [{label: "First Manhattan International Music Competition", value: "First Manhattan International Music Competition"}]
});

// Local Template Helpers

Template.testData.events({
  'click button'(event){
    event.preventDefault();
      console.log("Pressed");
    for (var i =0; i < TestAccountData.length; i++){
      Accounts.insert(TestAccountData[i]);
      console.log("Inserted account number "+(i+1));
    };
  }
});


Template.makeUpdateAccompForm.helpers ({
  NewAccompSchema: function () {
  	event.preventDefault();
  	return Schema.AccompanistProfileSchema;
  }
});

// add info from account.js and make it work for accompanist search results as well
Template.ProfileLayout.helpers({
  myprofile: ()=> {
    return MusicProfiles.find({userId: Meteor.userId()});
  }
});

// Event Listeners
// Template.HomeLayout.events({
//     'click submit': function () {
//       event.preventDefault();

//      // const account_number = event.target;
//       // const text = target.text.value;
//     // deposit money
//      // accounts.update(account_number: account_number, {$inc: {balance: amount}});
      
//       //const city =;
//       //const time_pref =;
//       //const session_location=;

//       results: ()=> {
//     	return AccompanistProfile.find({});
//   }
//     }
//   });

// Trial search

// Template.HomeLayout.helpers({
//   accountsIndex: function () {
//   	return Accounts.find();
//   } 
// });

// Searching Account profile


Template.search.helpers({
  accountsIndex: () => AccountsIndex // instanceof EasySearch.Index
});

// // On Client
// Tracker.autorun(function () {
//   let cursor = AccountsIndex.search('Marie'); // search all docs that contain "Marie" in the name or score field


//   console.log(cursor.fetch()); // log found documents with default search limit
//   console.log(cursor.count()); // log count of all found documents
// });



// Searching Accompanist profile

// Template.ResultsLayout.helpers({
// // Searching Account profile
//   accompanistIndex: () => AccompanistIndex // instanceof EasySearch.Index
// });

// // On Client
// Tracker.autorun(function () {
// // Searching Account profile
//   let cursor = AccompanistIndex.search('Marie'); // search all docs that contain "Marie" in the name or score field


//   console.log(cursor.fetch()); // log found documents with default search limit
//   console.log(cursor.count()); // log count of all found documents
// });

Template.search.events({

'submit form': function(){
    event.preventDefault();
    console.log("Form submitted");
    console.log(event.type);

    //Constants submitted from the Home search bar
   	const geo_location = event.target.geo_location.value
   	const start_date = event.target.start_date.value
   	const end_date = event.target.end_date.value

  	Session.set('geo_location', geo_location)
    Session.set('start_date', start_date)
  	Session.set('end_date', end_date)
}
});

 	Template.search.helpers({
	accompanists: ()=> {
		var gl = Session.get('geo_location')
		var sd = moment().toDate().Session.get('start_date')
		var ed = moment().toDate().Session.get('end_date')

		// comparing dates
		// var startDate = moment().toDate();
		// var endDate = moment().toDate();

		// check for sd and ed ranges in corrispondance with star end dates for accompanist
		if (gl && sd && ed) {
			return AccompanistProfile.find({mylocation: gl, startDate: {$gte: sd, $lt: ed}})
			//return AccompanistProfile.find({"mylocation": gl, "startDate": {$lte st}, "endDate": {$gte ed}})

		}
    // take dates into account!!!! this is only for testing reasons!!!
    	return null
  }

});




// Template.players.events({
//   'submit form': function () {
//     // index instanceof EasySearch.Index
//     index
//       .getComponentMethods(/* optional name if specified on the components */)
//       .search(this._id)
//     ;
//   }
// });


// For Debugging
  SimpleSchema.debug = true;









