Template.BookingRequestSelector.helpers({
  getSelectedTransaction (){
    return Session.get('selectedTransaction')
  },



});


Template.BookingRequestSelector.events({
  'click .select-transaction-for-review' (event, template){
    Session.set('selectedTransaction', event.currentTarget.dataset.transactionid)
  }
})


Template.BookingRequestSelector.onRendered(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
})

Template.BookingRequestSelector.onCreated(function() {
})

Template.BookingRequestReviewCard.onRendered(function() {
  $('.modal-trigger').leanModal();
})

Template.BookingRequestReviewCard.events({
  'click .final-reject' (event, template){
    Meteor.call('rejectTransactionRequest', event.currentTarget.dataset.transactionid);
  }
})

Template.RequestTypeCollections.helpers({
  getSelectionClass(id){
    console.log(id)
    if(id == Session.get('selectedTransaction')){
      console.log("helloactive")
      return "active"
    }
  }
})

Template.registerHelper('getProfilePictureById', function(userId){
  var basicProfileDoc = BasicProfiles.findOne({userId: userId, profilePic: {$exists: true}}, {profilePic: 1});
  if (basicProfileDoc && basicProfileDoc.profilePic){
    var imageDoc = UserImages.findOne(basicProfileDoc.profilePic);
    if (imageDoc){
      return imageDoc.url
    }
  }

});

Template.registerHelper('getCoverPictureById', function(userId){
  var basicProfileDoc = BasicProfiles.findOne({userId: userId, coverPic: {$exists: true}}, {coverPic: 1});
  if (basicProfileDoc && basicProfileDoc.coverPic){
    var imageDoc = UserImages.findOne(basicProfileDoc.coverPic);
    if (imageDoc){
      return imageDoc.url
    }
  }

});

Template.registerHelper('getPrimaryInstrument', function(instruments){
  if (instruments.length >0) return instruments[0].instrument
})


Template.registerHelper('getMusicianType', function (instrument){
  let nameList = {
    'Violin': 'Violinist',
    'Cello': 'Cellist',
    'Viola': 'Violist',
    'Piano': 'Pianist',
    'Bass': 'Bassist',
    'Flute': 'Flutist',
    'Clarinet': 'Clarinetist',
    'Bassoon': 'Bassoonist',
    'Oboe': 'Oboist'
  };
  if(!nameList[instrument]){
    return instrument + ' Player'
  }
  return nameList[instrument];
})
