import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

window.MusicProfiles = MusicProfiles



// Template Helpers

Template.MainLayout.helpers({
  profileDoc() {
  	event.preventDefault();
    return MusicProfiles.findOne({ userId: Meteor.userId()});
  },

  accompanistProfileDoc() {
    event.preventDefault();
    return AccompanistProfile.findOne({ userId: Meteor.userId()});
  }
});

Template.AddInfoLayout.helpers ({
  profileDoc() {
  	event.preventDefault();
    return MusicProfiles.findOne({ userId: Meteor.userId()});
  }
});

Template.makeUpdateProfileForm.helpers ({
  profileDoc() {
  	event.preventDefault();
    return MusicProfiles.findOne({ userId: Meteor.userId()});
  }
});

window.AccompanistProfile = AccompanistProfile

Template.newAccompForm.helpers ({
  NewAccompSchema: function () {
  	event.preventDefault();
  	return Schema.AccompanistProfileSchema;
  }
});

// For Debugging
  SimpleSchema.debug = true;
