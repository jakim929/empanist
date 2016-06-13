import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { MusicProfiles } from '../collections/musicProfile.js'
import { Temp } from '../collections/musicProfile.js'

window.MusicProfiles = MusicProfiles
window.Temp = Temp

Template.makeProfileForm.helpers ({
  profileDoc() {
    return MusicProfiles.findOne({_id : Meteor.userId})
  }
});
