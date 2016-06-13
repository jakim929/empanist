import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'
import { Accounts } from '../collections/account.js'

window.MusicProfiles = MusicProfiles
window.AccompanistProfile = AccompanistProfile
window.Accounts = Accounts

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

// Local Template Helpers

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
