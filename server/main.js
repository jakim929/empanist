import { Meteor } from 'meteor/meteor';
import { Accounts } from '../collections/account.js'
import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

Meteor.startup(() => {

});

Meteor.methods({
  getGeocode: function (arg) {
    var geo = new GeoCoder();
    var result = geo.geocode(arg);
    return result
  },

  insertFullRandomProfile: function(userId){
    Accounts.insert(createNewAccount(userId), {getAutoValues: false});
    MusicProfiles.insert(createNewMusicProfile(userId), {getAutoValues: false});
    AccompanistProfile.insert(createNewAccompanistProfile(userId), {getAutoValues: false});
  },

  insertRandomData: function(number) {
    for (var i = 0; i < number; i++){
      var genId = Random.id();
      Accounts.insert(createNewAccount(genId), {getAutoValues: false});
      MusicProfiles.insert(createNewMusicProfile(genId), {getAutoValues: false});
      AccompanistProfile.insert(createNewAccompanistProfile(genId), {getAutoValues: false});
    }

  }
});
