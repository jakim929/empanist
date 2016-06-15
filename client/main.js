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

// For Debugging
  SimpleSchema.debug = true;
