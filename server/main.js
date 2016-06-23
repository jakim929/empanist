import { Meteor } from 'meteor/meteor';
import { BasicProfiles } from '../collections/basicProfiles.js'
import { MusicProfiles } from '../collections/musicProfiles.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'

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
    BasicProfiles.insert(createNewBasicProfile(userId), {getAutoValues: false});
    MusicProfiles.insert(createNewMusicProfile(userId), {getAutoValues: false});
    AccompanistProfiles.insert(createNewAccompanistProfile(userId), {getAutoValues: false});
  },

  insertRandomData: function(number) {
    for (var i = 0; i < number; i++){
      var genId = Random.id();
      BasicProfiles.insert(createNewBasicProfile(genId), {getAutoValues: false});
      MusicProfiles.insert(createNewMusicProfile(genId), {getAutoValues: false});
      AccompanistProfiles.insert(createNewAccompanistProfile(genId), {getAutoValues: false});
    }
  },

  divinify: function(userId) {
    Roles.addUsersToRoles(userId, 'admin');
  }

});

// Server Side hooks
// CHANGE ADMIN SETTINGS WHEN DONE TESTING

Meteor.users.after.insert(function (userId, doc){
  Roles.addUsersToRoles(this._id, 'makeBasicProfile');
});

// Basic Profiles Server Side Hooks

BasicProfiles.before.insert(function (userId, doc){
  var loggedInUser = Meteor.user();
  if(!loggedInUser){
    throw new Meteor.Error(403, "Not Logged In");
  }else if((!Roles.userIsInRole(loggedInUser._id, 'makeBasicProfile'))
            &&(!Roles.userIsInRole(loggedInUser._id, 'admin'))){
    throw new Meteor.Error(403, "No Permission to Make Basic Profile");
  }
});

BasicProfiles.after.insert(function(userId, doc){
  console.log("Basic Profile Made for",doc.userId);
  Roles.addUsersToRoles(doc.userId, 'makeMusicProfile');
  Roles.addUsersToRoles(doc.userId, 'bookAccompanist');
});


// Music Profile Server Side Hooks

MusicProfiles.before.insert(function (userId, doc){
  var loggedInUser = Meteor.user();
  if(!loggedInUser){
    throw new Meteor.Error(403, "Not Logged In");
  }else if((!Roles.userIsInRole(loggedInUser._id, 'makeMusicProfile'))
            &&(!Roles.userIsInRole(loggedInUser._id, 'admin'))){
    throw new Meteor.Error(403, "No Permission to Make Music Profile");
  }
});

MusicProfiles.after.insert(function(userId, doc){
  Roles.addUsersToRoles(doc.userId, ['becomeAccompanist', 'musician']);
});



// Accompanist Profile Server Side Hooks

AccompanistProfiles.before.insert(function (userId, doc){
  var loggedInUser = Meteor.user();
  if(!loggedInUser){
    throw new Meteor.Error(403, "Not Logged In");
  }else if((!Roles.userIsInRole(loggedInUser._id, 'becomeAccompanist'))
            &&(!Roles.userIsInRole(loggedInUser._id, 'admin'))){
    throw new Meteor.Error(403, "Must first make Music Profile");
  }
});

AccompanistProfiles.after.insert(function (userId, doc) {
  var address = doc.mylocation;
  var coded = getGeocode(address);

  var lat = Number(coded[0].latitude);
  var lng = Number(coded[0].longitude);
  var coords_new = [lng, lat];
  console.log("working Insert")
  AccompanistProfiles.update({_id: doc._id}, {$set: {geolocation : coded[0], loc: {'type': "Point", 'coordinates' : coords_new}}},{getAutoValues: false});
  Roles.addUsersToRoles(userId, 'accompanist');
});

AccompanistProfiles.after.update(function (userId, doc, fieldNames, modifier, options) {

  var address = doc.mylocation;

  // take if outside to make more efficient!!!!!
  var result = getGeocode(address);

  var lat = Number(result[0].latitude);
  var lng = Number(result[0].longitude);
  var coords_new = [lng, lat];
  var coords_db = doc.loc.coordinates

  if (coords_new[0] !== coords_db[0] && coords_new[1] !== coords_db[1]) {
    console.log("updating")
    AccompanistProfiles.update({_id: doc._id}, {$set: {geolocation : result[0], loc: {'type': "Point", 'coordinates' : coords_new}}},
                                {getAutoValues: false});
  }
  console.log("working_UPDATE nothing done")

}, {fetchPrevious: true});
