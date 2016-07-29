import { Meteor } from 'meteor/meteor';
import { BasicProfiles } from '../collections/basicProfiles.js'
import { MusicProfiles } from '../collections/musicProfiles.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'
import { Transactions } from '../collections/transactions.js'
import { Sessions } from '../collections/transactions.js'
import { Data } from '../collections/profileData.js'



Meteor.startup(() => {
});

AWS.config.update({
  accessKeyId: Meteor.settings.AWSAccessKeyId,
  secretAccessKey: Meteor.settings.AWSSecretAccessKey
});



var geo = new GeoCoder();

getGeocode = function (arg) {
  if (arg == 0){
    return null
  } else {
    var result = geo.geocode(arg);
    return result
  }
};

myPostSubmitFunc = function (userId, info) {
  if(BasicProfiles.findOne({userId: userId})){
    Roles.addUsersToRoles(userId, "makeMusicProfile")
  }
}

AccountsTemplates.configure({
  postSignUpHook: myPostSubmitFunc
});

Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  if (options.profile.name && options.profile.birthDate){
    var newBasicProfile = {userId: user._id, name: options.profile.name, birthDate: options.profile.birthDate}
    console.log(newBasicProfile)
    BasicProfiles.insert(newBasicProfile);

    return user;
  }

});

Meteor.publish( 'files', function(){
  var data = UserImages.find( { "userId": this.userId } );

  if ( data ) {
    return data;
  }

  return this.ready();
});

var deleteImageDependencies = function(imageId){
  var imageToDelete = UserImages.findOne({_id: imageId, userId: Meteor.userId()});
  if (imageToDelete){
    deleteImageFromS3(imageToDelete.url, function(error, result){
      UserImages.remove({_id: imageId, userId: Meteor.userId()}, function (error) {
        if (error){
          throw new Meteor.error("Image Database Error", "Removing Image Failed");
        }else{
          if (BasicProfiles.findOne({userId: Meteor.userId(), profilePic: imageId})){
            BasicProfiles.update({userId: Meteor.userId()}, {$unset: {profilePic:1}}, function(error, result){
              throw new Meteor.error("Image Database Error", "Removing Image Failed");
            })
          }
          if (BasicProfiles.findOne({userId: Meteor.userId(), coverPic: imageId})){
            BasicProfiles.update({userId: Meteor.userId()}, {$unset: {coverPic:1}}, function(error,result){
              throw new Meteor.error("Image Database Error", "Removing Image Failed");
            })
          }
        }
      });
    })
  }
}

var deleteImageFromUserImages = function(imageId, callback){
  var imageToDelete = UserImages.findOne({_id: imageId, userId: Meteor.userId()})
  if (imageToDelete) {
    // Make sure that thumbnail doesn't have another thumbnail
    if (imageToDelete.hasOwnProperty('thumbnailId')){
      deleteImageDependencies(imageToDelete.thumbnailId);
    }
    deleteImageDependencies(imageId);
  }
}

// var deleteImageFromS3 = function(url, callback){
//   if (url.indexOf("https://empanist-images.s3.amazonaws.com/") < 0)
//   {
//     throw new Meteor.error("URL parse failed","Not a valid image url");
//   }
//
//   var newKey = url.replace("https://empanist-images.s3.amazonaws.com/", "")
//   var s3 = new AWS.S3();
//
//   var params = {
//     Bucket: "empanist-images",
//     Key:newKey
//   };
//
//   s3.deleteObject(params, Meteor.bindEnvironment(callback))
// }

var deleteImageFromS3 = function(key){
  AWS.config.update({
     accessKeyId: Meteor.settings.AWSAccessKeyId,
     secretAccessKey: Meteor.settings.AWSSecretAccessKey
  });

  var s3 = new AWS.S3();
  var params = {
    Bucket: "empanist-images",
    Key: key
  };

  var syncS3DeleteObject = Meteor.wrapAsync(s3.deleteObject, s3);
  return syncS3DeleteObject(params);

}

var setAsProfilePicture = function(imageId){
  if(!UserImages.findOne({_id : imageId, userId: Meteor.userId()}, {_id:1})){
    throw new Meteor.Error('no-such-image', "Insufficient permissions/No such image in database.");
  }else{
    BasicProfiles.update({userId: Meteor.userId()}, {$set: {profilePic : imageId}}, function(err, result){
      if(err){
        throw new Meteor.Error(err);
      }else{
        return true
      }
    })
  }
};

Meteor.methods({
  // Add security measures
  // deleteImageFromS3: function(imageDatabaseId){
  //   if(!this.userId){
  //     throw new Meteor.error("Access Denied","User not logged in");
  //   }else{
  //     var found = CropUploader.images.findOne({_id: imageDatabaseId, userId: this.userId })
  //     if (!found){
  //       throw new Meteor.error("Image search failed","Image not found");
  //     }
  //     var mainUrl = found.url
  //     var derivativeUrl = found.derivatives.thumbnail
  //
  //     var cbDeleteFromCollection = function(err,data){
  //       if (err){
  //         console.log(err)
  //       }else{
  //         CropUploader.images.remove({_id: imageDatabaseId});
  //         console.log("Successfully deleted from S3 and deleted from CropUploader.images collection", imageDatabaseId);
  //
  //       }
  //     };
  //
  //     var cbKeepCollection = function(err,data){
  //       if (err){
  //         console.log(err)
  //       }else{
  //         console.log("Successfully deleted from S3", imageDatabaseId);
  //       }
  //     };
  //
  //     if(derivativeUrl){
  //       deleteImageFromS3(derivativeUrl, cbKeepCollection);
  //     }
  //     deleteImageFromS3(mainUrl, cbDeleteFromCollection);
  //
  //     if (found.picType == "profile"){
  //       BasicProfiles.update({userId: this.userId}, {$unset:{profilePic : ""}});
  //     }else{
  //       BasicProfiles.update({userId: this.userId}, {$unset:{coverPic : ""}});
  //     }
  //
  //   }
  // },

  setProfilePicture: function(imageId) {
    setAsProfilePicture(imageId);
  },

  // storeUrlInDatabase: function( url, type ) {
  //   check( url, String );
  //   Modules.both.checkUrlValidity( url );
  //
  //   try {
  //     UserImages.insert({
  //       url: url,
  //       userId: Meteor.userId(),
  //       picType: type,
  //       added: new Date()
  //     });
  //   } catch( exception ) {
  //     return exception;
  //   }
  // },

  storeImageUrlInDatabase: function( info ) {
    var url = 'https://s3.amazonaws.com/empanist-images/' + Meteor.userId() + "/" + info.name;

    Modules.both.checkUrlValidity( url );

    try {
      UserImages.insert({
        url: url,
        userId: Meteor.userId(),
        type: info.type,
        name: info.name,
        size: info.size,
        added: new Date(),
        isThumbnail: false,
        lastModifiedDate: info.lastModifiedDate
      });
    } catch( exception ) {
      return exception;
    }
  },

  storeThumbnailUrlInDatabase: function(info,  originalImageId ) {
    Modules.both.checkUrlValidity( info.url );
    var originalImageDoc = UserImages.findOne({_id: originalImageId})
    if(originalImageDoc){
      UserImages.insert({
        url: info.url,
        userId: Meteor.userId(),
        type: info.type,
        name: info.name,
        size: info.size,
        added: new Date(),
        isThumbnail:true
      }, function (err, result){
        if(err){
          throw new Meteor.error("Thumbnail Database Update Error", err.message);
        }else{
          if (originalImageDoc.hasOwnProperty('thumbnailId')){
            return
          }else{
            UserImages.update({_id: originalImageId}, {$set: {thumbnailId:result}});
          }

        }
      });
    }

    // ADD ERROR HANDLING FOR WHEN USERIMAGES DOESNT HAVE A FILE




  },

  getGeocode: function (arg) {
    if (arg == 0){
      return null
    } else {
      var result = geo.geocode(arg);
      return result
    }
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

  insertRandomTransactions: function(number, userId) {
    for (var i = 0; i < number; i++){
      Transactions.insert(createNewTransaction(userId));
    }
  },

  confirmBookingRequest: function(transactionId, sessionSelector, sessionDoc) {
    var transaction = Transactions.findOne({_id: transactionId});
    var session = Sessions.findOne(sessionSelector);
    if(transaction && session){
      if(transaction.accompanist == this.userId){

        if(Sessions.update(sessionSelector, sessionDoc)){
          Transactions.update({_id: transactionId}, {$set: {status: "Ongoing"}});
        }
        else{
          Meteor.Error("First session not set yet.")
        }
      }
      else{
        Meteor.Error("No permission to confirm booking.")
      }
    }else{
      Meteor.Error("No such transaction.")
    }
  },

});

// Server Side hooks
// CHANGE ADMIN SETTINGS WHEN DONE TESTING


// Images (CropUploader) Hooks


//  MusicProfiles.after.upsert(function (userId, selector, modifier, options) {
//   console.log("music profiles updated")

// });


Meteor.users.after.insert(function (userId, doc){
  Roles.addUsersToRoles(this._id, 'makeBasicProfile');
});

// Basic Profiles Server Side Hooks

BasicProfiles.before.insert(function (userId, doc){
  // Alert -> Make Safer ASDFDSAFDASFASDFFA
});

BasicProfiles.after.insert(function(userId, doc){
  console.log("Basic Profile Made for",doc.userId);
  Roles.addUsersToRoles(doc.userId, 'makeMusicProfile');

   var suggestions = ["Master more Instruments", "Win more Awards", "Attend more Music Programs", "Play in more Orchestras"]
   Data.insert({ userId: doc.userId, suggestions: suggestions, value: 0})

});


// Music Profile Server Side Hooks
// all data ald suggestions should be here!!!
MusicProfiles.after.update(function (userId, doc, fieldNames, modifier, options) {

    // algorith that calculates filling percent
    var newData = doc;

    var instruments = newData.instruments;
    var awards = newData.awards;
    var programs = newData.musicPrograms;
    var orchestras = newData.orchestras;

    if (instruments == undefined) {
      var instruments_length = 0
    } else {
      var instruments_length = newData.instruments.length;
    }

    if (awards == undefined) {
      var awards_length = 0
    } else {
      var awards_length = newData.awards.length;
    }

    if (programs == undefined) {
      var programs_length = 0
    } else {
      var programs_length = newData.musicPrograms.length;
    }

    if (orchestras == undefined) {
      var orchestras_length = 0
    } else {
      var orchestras_length = newData.orchestras.length;
    }

    function percent(length) {
        if (length >= 4) {
        return 25
      } else {
        return (25/4) * length
      }
    }

    // very inefficient yet easy way to do this aka
    // this is some shitty as code that I would only write at 6 am on a Friday
    function suggestion(name, length) {
      switch(name){
        case 'instruments':
          if (length < 4) {
            return "Master more Instruments"
          }
          break;
        case 'awards':
          if (length < 4) {
            return "Win more Awards"
          }
          break;
        case 'programs':
          if (length < 4) {
            return "Attend more Music Programs"
          }
          break;
        case 'orchestras':
          if (length < 4) {
            return "Play in more Orchestras"
          }
          break;
      }
    }

    var suggestions = [ suggestion("instruments", instruments_length),
                        suggestion("awards", awards_length),
                        suggestion("programs", programs_length),
                        suggestion("orchestras", orchestras_length)]

    var percent = Math.round( percent(instruments_length) +
                              percent(awards_length) +
                              percent(programs_length) +
                              percent(orchestras_length));

    console.log("music profile after update")
    console.log(percent)

    Data.update({ userId: doc.userId },{ $set: {value: percent, suggestions: suggestions }})

});

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
  Roles.addUsersToRoles(doc.userId, 'bookAccompanist');

  // Create create profileData
  console.log("music profiles created")
  // algorithm that calculates percent
    var newData = doc;
    var instruments = newData.instruments;
    var awards = newData.awards;
    var programs = newData.musicPrograms;
    var orchestras = newData.orchestras;

    if (instruments == undefined) {
      var instruments_length = 0
    } else {
      var instruments_length = newData.instruments.length;
    }

    if (awards == undefined) {
      var awards_length = 0
    } else {
      var awards_length = newData.awards.length;
    }

    if (programs == undefined) {
      var programs_length = 0
    } else {
      var programs_length = newData.musicPrograms.length;
    }

    if (orchestras == undefined) {
      var orchestras_length = 0
    } else {
      var orchestras_length = newData.orchestras.length;
    }

    function percent(length){
        if (length >= 4) {
        return 25
      } else {
        return (25/4) * length
      }
    }

    // very inefficient yet easy way to do this aka
    // this is some shitty as code that I would only write at 6 am on a Friday
    function suggestion(name, length) {
      switch(name){
        case 'instruments':
          if (length < 4) {
            return "Master more Instruments"
          }
          break;
        case 'awards':
          if (length < 4) {
            return "Win more Awards"
          }
          break;
        case 'programs':
          if (length < 4) {
            return "Attend more Music Programs"
          }
          break;
        case 'orchestras':
          if (length < 4) {
            return "Play in more Orchestras"
          }
          break;
      }
    }


    var suggestions = [ suggestion("instruments", instruments_length),
                        suggestion("awards", awards_length),
                        suggestion("programs", programs_length),
                        suggestion("orchestras", orchestras_length)]

    var percent = Math.round( percent(instruments_length) +
                              percent(awards_length) +
                              percent(programs_length) +
                              percent(orchestras_length));

    Data.update({ userId: doc.userId },{ $set: {value: percent, suggestions: suggestions }})

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
