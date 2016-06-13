import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

window.MusicProfiles = MusicProfiles
window.AccompanistProfile = AccompanistProfile


// Global Template Helpers

Template.registerHelper( 'profileDoc', () => {
    event.preventDefault();
    return MusicProfiles.findOne({ userId: Meteor.userId()});
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

// For Debugging
  SimpleSchema.debug = true;
