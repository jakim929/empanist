import { Meteor } from 'meteor/meteor';
import { Accounts } from '../collections/account.js'
import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

Meteor.startup(() => {

});

var geo = new GeoCoder();

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

// Meteor.publishComposite('results', {
//     find: function() {
//         // Find top ten highest scoring posts
//          var coords = Session.get('coords')

//       //convert dates to dates that can be compared with Mongo schema
//       var sd = new Date(Session.get('start_date'))
//       var ed = new Date(Session.get('end_date'))
//              console.log("server shit")


//         return AccompanistProfile.find({
//           loc:
//             { $near :
//               {
//                 $geometry: { type: "Point",  coordinates: coords },
//                 $maxDistance: 20000
//               }
//             },
//           startDate:  {$lte: sd, $lte: ed},
//           endDate: {$gte: sd, $gte: ed}})
//     },
// 	    children: [
// 	        {
// 	            find: function(account) {
// 	                // Find post author. Even though we only want to return
// 	                // one record here, we use "find" instead of "findOne"
// 	                // since this function should return a cursor.
// 	                return Meteor.accounts.find(
// 	                    { userId: accompanists.Id });
// 	            }
// 	        }
// 	    ]
// });

insertFullRandomProfile = function(userId){
console.log("check this out:")
    console.log(userId)
    Accounts.insert(createNewAccount(userId), {getAutoValues: false});
    MusicProfiles.insert(createNewMusicProfile(userId), {getAutoValues: false});
    AccompanistProfile.insert(createNewAccompanistProfile(userId), {getAutoValues: false});
  };

  insertRandomData = function(number) {
    for (var i = 0; i < number; i++){
      var genId = Random.id();
      console.log(genId)
      Accounts.insert(createNewAccount(genId), {getAutoValues: false});
      MusicProfiles.insert(createNewMusicProfile(genId), {getAutoValues: false});
      AccompanistProfile.insert(createNewAccompanistProfile(genId), {getAutoValues: false});
    }
  };
