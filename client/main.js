import { MusicProfiles } from '../collections/musicProfile.js'
import { Temp } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

window.MusicProfiles = MusicProfiles
window.Temp = Temp

Template.makeProfileForm.helpers ({
  profileDoc() {
  	event.preventDefault();
    return MusicProfiles.findOne({_id : Meteor.userId})
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