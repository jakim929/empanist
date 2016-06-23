import { Meteor } from 'meteor/meteor';
import { Accounts } from '../collections/account.js'
import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

Meteor.startup(() => {

});

var geo = new GeoCoder();

getGeocode = function(arg) {
    var result = geo.geocode(arg);
    return result
}

Meteor.methods({
  getGeocode: function (arg) {
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

// Server Side hooks

// Meteor.users.after.insert(function (userId, doc){
//   Roles.addUsersToRoles(userId, 'canMakeAccountDetails');
// });

Accounts.before.insert(function (userId, doc){
  var loggedInUser = Meteor.user()

  if(!loggedInUser){
    console.log("Must be Logged In")
    throw new Meteor.Error(403, "Must be Logged In");
  }
});

Accounts.after.insert(function(userId, doc){
  Roles.addUsersToRoles(userId, ['canMakeMusicProfile', 'canBook']);
});

MusicProfiles.after.insert(function(userId, doc){
  Roles.addUsersToRoles(userId, ['canBecomeAccompanist', 'musician']);
});



// Accompanist Profile Server Side Hooks

AccompanistProfile.after.insert(function (userId, doc) {
  var address = doc.mylocation;
  var coded = getGeocode(address);

  var lat = Number(coded[0].latitude);
  var lng = Number(coded[0].longitude);
  var coords_new = [lng, lat];
  console.log("working Insert")
  AccompanistProfile.update({_id: doc._id}, {$set: {geolocation : coded[0], loc: {'type': "Point", 'coordinates' : coords_new}}},{getAutoValues: false});
  Roles.addUsersToRoles(userId, 'accompanist');
});

AccompanistProfile.after.update(function (userId, doc, fieldNames, modifier, options) {

  var address = doc.mylocation;

  // take if outside to make more efficient!!!!!
    var result = getGeocode(address);

      var lat = Number(result[0].latitude);
      var lng = Number(result[0].longitude);
      var coords_new = [lng, lat];
      var coords_db = doc.loc.coordinates


      if (coords_new[0] !== coords_db[0] && coords_new[1] !== coords_db[1]) {
        console.log("updating")
        AccompanistProfile.update({_id: doc._id}, {$set: {geolocation : result[0], loc: {'type': "Point", 'coordinates' : coords_new}}},
                                    {getAutoValues: false});
      }
      console.log("working_UPDATE nothing done")

}, {fetchPrevious: true});
