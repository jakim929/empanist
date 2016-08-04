let uploadThumbnail = (blob, imageId, type) => {
  // Check if blob type is image
  if(blob.type.indexOf( 'image/' ) >= 0){
    let array = blob.type.split('/');
    ext = '.' + array[array.length -1];
    blob.name = Meteor.uuid() + ext;
    blob.originalImage = imageId

    const uploader = new Slingshot.Upload("uploadImageToAmazonS3");

    console.log(blob);

    uploader.send(blob, function (error, url) {
      if ( error ) {
        Bert.alert( error.message, "warning" );
      } else {
        addThumbnailToDatabase(blob, url, imageId, type);
      }
    })
  }
}

let addThumbnailToDatabase = (file, url, originalImageId, type) => {
  var info = {
    url: url,
    name: file.name,
    size: file.size,
    type: file.type,
  }
    Meteor.call( "saveThumbnailAs", info, originalImageId, type, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, "warning" );
      } else {
        Bert.alert( "Thumbnail updated!", "success" );
      }
    });
};

let addImageToDatabase = (file, type) => {
  // Sanity Check
  if(file.status == "success"){
    var info = {
      name: file.name,
      lastModifiedDate: file.lastModifiedDate,
      size: file.size,
      type: file.type,
      key: file.postData[0].value
    }
    // Meteor.call( "storeImageUrlInDatabase", info, (error , result) => {
    //   if ( error ) {
    //     Bert.alert( error.reason, "warning" );
    //   } else {
    //     Bert.alert( "Image uploaded!", "success" );
    //     Session.set('currentImage', result);
    //   }
    // });
    Meteor.call('storeImageUrlInDatabase', info, function(error, result){
      if(error){
        throw new Meteor.Error(error)
      }else{
        Session.set('currentImage', result);
      }
    })
  }
};

Template.ProfilePictureModal.onCreated(function(){
  var profileDoc = BasicProfiles.findOne({userId: Meteor.userId(), profilePic: {$exists: true}})
  if (profileDoc){
    Session.set('currentImage', profileDoc.profilePic)
  }else{
    Session.set('currentImage', false)
  }
})

Template.ImagesLayout.onRendered(function(){
  $('.parallax').parallax();
  $('.modal-trigger').leanModal();
})

Template.accountTemplate.helpers({
  getProfileData() {
    return {picType: "Profile"};
  },
  getCoverData() {
    return {picType: "Cover"};
  }

})



Template.registerHelper('getPicTypeObject', function(type){
  if (type == "Profile"){
    return {picType: "Profile"};
  }else if(type == "Cover"){
    return {picType: "Cover"};
  }
});


Template.registerHelper('getPersonalPic', function(type){
  if (type == "Profile"){
    var basicProfileDoc = BasicProfiles.findOne({userId: Meteor.userId(), profilePic: {$exists: true}}, {profilePic: 1});
    if (basicProfileDoc && basicProfileDoc.profilePic){
      var imageDoc = UserImages.findOne(basicProfileDoc.profilePic);
      if (imageDoc){
        return imageDoc.url
      }
    }
  }else if (type == "Cover"){
    var basicProfileDoc = BasicProfiles.findOne({userId: Meteor.userId(), coverPic: {$exists: true}}, {profilePic: 1});
    if (basicProfileDoc && basicProfileDoc.coverPic){
      var imageDoc = UserImages.findOne(basicProfileDoc.coverPic);
      if (imageDoc){
        return imageDoc.url
      }
    }
  }
})

Template.PictureModal.onCreated(function() {
  this.pictureType = new ReactiveVar(this.data.picType)
})

Template.PictureModal.onRendered(function() {
  var aspectRatioArray = {'Profile': 1, 'Cover': 2}
  var pictureType = Template.instance().pictureType.get();
  $('.modal-trigger').leanModal({
    ready: function() {
      $('ul.tabs').tabs({
        onShow: function(param){
          if($(param[0]).attr('id') == "edit-thumbnail")
          {
            console.log('edit-thumbnail tab opened')
            $('#crop-image').cropper({
              aspectRatio: aspectRatioArray[pictureType]
            });
            $('#crop-image').cropper('replace', $('#crop-image').attr('src'));

          }
        }
      });
    }
  });
})

Template.PictureModal.helpers({
  getPicType (){
    return Template.instance().picType.get()
  },

  getPicWidth (type) {
    var array =  {'Profile' : '250px', 'Cover': '100%'}
  },

  getPicHeight (type) {
    var array =  {'Profile' : '250px', 'Cover': '400px'}
  },

})

Template.PictureModal.events({
  'click .change-to-upload-panel' (event, template){
    $('ul.tabs').tabs('select_tab', 'upload-picture');
  },
  // Sometimes buggy, check it out later
  // 'click edit-thumbnail-tab' (event, template){
  //   $('#crop-image').cropper({
  //     aspectRatio: 1,
  //   });
  // }
})

Template.EditProfileThumbnail.events({
  'click .save-profile-thumbnail': function (event, template) {
    var imgSrc = $('#crop-image').attr('src');
    var imgDoc = UserImages.findOne({url : imgSrc}, {_id: 1})
    if (imgSrc && imgDoc){
      originalImageId = imgDoc._id
      var canvas = $("#crop-image").cropper('getCroppedCanvas')
      if(canvas && canvas.toBlob){
        canvas.toBlob(function (blob){
          uploadThumbnail(blob, originalImageId, "Profile")

          // Worry about async later
        })
      }
    }
  },
});

Template.EditProfileThumbnail.helpers({
  getImageUrl(imageId) {
    if((imageId != '') && (imageId != undefined) && (imageId != false)){
      var imageDoc = UserImages.findOne(imageId);
      if (imageDoc){
        return imageDoc.url
      }
    }
  },
  getCurrentImage(){
    if(!Session.get('currentImages')){
      return Session.get('currentImages');
    }
  }
})

Template.EditThumbnailPanel.events({
  'click .save-profile-thumbnail': function (event, template) {
    var imgSrc = $('#crop-image').attr('src');
    var imgDoc = UserImages.findOne({url : imgSrc}, {_id: 1})
    if (imgSrc && imgDoc){
      originalImageId = imgDoc._id
      var canvas = $("#crop-image").cropper('getCroppedCanvas')
      if(canvas && canvas.toBlob){
        canvas.toBlob(function (blob){
          uploadThumbnail(blob, originalImageId, template.data.picType)

          // Worry about async later
        })
      }
    }
  },

});


Template.SimplePicturePicker.helpers({
  getPicType () {
    return Template.instance().pictureType.get()
  },

  getImageUrl (imageId) {
    var imageDoc = UserImages.findOne(imageId);
    if (imageDoc){
      return imageDoc.url
    }
  },

  imageArray () {
    // Just get the ones needed
    var x= UserImages.find({userId: Meteor.userId(), isThumbnail:false}).fetch()
    console.log(x)
    return x
  },

  selectionStatus (imageId) {
    if (imageId == Template.instance().selectedImageId.get()){
      return 'selected-border'
    }else{
      return 'unselected-border'
    }
  }
});



Template.SimplePicturePicker.events({
  'click .image-selection' (event, template){
    var currentTarget = $(event.target);
    template.selectedImageId.set(currentTarget[0].dataset.imageid);
  },
  'click button.set-Profile' (event, template){
    var imageId = template.selectedImageId.get()
    if(imageId != ''){
      // Check if imageid is legitimate
        Meteor.call('setProfilePicture', imageId);
    }
  },
  'click button.set-Cover' (event, template){
    var imageId = template.selectedImageId.get()
    if(imageId != ''){
      // Check if imageid is legitimate
        Meteor.call('setCoverPicture', imageId);
    }
  },
});

Template.SimplePicturePicker.onCreated(function() {
  this.selectedImageId = new ReactiveVar('');
  this.pictureType = new ReactiveVar('Profile');
});

Template.SimplePicturePicker.onRendered(function() {
  $("#imagePickerGallery").justifiedGallery({
    rowHeight : 70
  });
});



Template.ProfilePictureDropzone.onCreated(function (){

  Meteor.Dropzone.options = {
    url: "https://s3.amazonaws.com/empanist-images",
    maxFiles: 1,
    accept: function(file, done) {
      var upload = new Slingshot.Upload("uploadImageToAmazonS3")
      var options = this.options;

        upload.file = file;
        upload.request(function (error, instructions) {
            if (error)
                done(error.message);
            else {
                options.url = instructions.upload;
                file.postData = instructions.postData;
                done();
            }
        });
    },
    sending: function(file, xhr, formData) {
      _.each(file.postData, function(field){
          formData.append(field.name, field.value);
      });
    },
    success: function (file, serverResponse) {
      if(Meteor.isDevelopment) console.log(file)
      addImageToDatabase(file)
    }
  }

})

Template.ProfilePictureDropzone.events({
  'mouseover .dropzone': function (event, template) {
    $('.dz-message').addClass('blue-text text-darken-2');
  },
  'mouseout .dropzone': function (event, template) {
    var selector = $('.dz-message')
    if(selector.hasClass('blue-text text-darken-2')){
      selector.removeClass('blue-text text-darken-2')
    }
  },

})


//////////////////////////////////////////


Template.PicturePicker.helpers({
  getPicType () {
    return Template.instance().pictureType.get()
  },

  getImageUrl (imageId) {
    var imageDoc = UserImages.findOne(imageId);
    if (imageDoc){
      return imageDoc.url
    }
  },

  imageArray () {
    // Just get the ones needed
    var x= UserImages.find({userId: Meteor.userId(), isThumbnail:false}).fetch()
    console.log(x)
    return x
  },

  selectionStatus (imageId) {
    if (imageId == Template.instance().selectedImageId.get()){
      return 'selected-border'
    }else{
      return 'unselected-border'
    }
  }
});

Template.PicturePicker.onRendered(function() {
  console.log($('.materialboxed'))
})

Template.PicturePicker.events({
  'click .image-selection' (event, template){
    var currentTarget = $(event.target);
    template.selectedImageId.set(currentTarget[0].dataset.imageid);
  },
  'click button.set-Profile' (event, template){
    var imageId = template.selectedImageId.get()
    if(imageId != ''){
      // Check if imageid is legitimate
        Meteor.call('setProfilePicture', imageId);
    }
  },
  'click button.set-Cover' (event, template){
    var imageId = template.selectedImageId.get()
    if(imageId != ''){
      // Check if imageid is legitimate
        Meteor.call('setCoverPicture', imageId);
    }
  },
});

Template.PicturePicker.onCreated(function() {
  this.selectedImageId = new ReactiveVar('');
  this.pictureType = new ReactiveVar('Profile');
});


Template.TestLayout.onRendered(function(){
})

Template.TestLayout.events({
  'click .justifyNow' (event, template){
    $('#testJustifiedGallery').justifiedGallery();

  }

})

Template.TestLayout.helpers({
  imageArray () {
    // Just get the ones needed
    var x= UserImages.find({userId: Meteor.userId(), isThumbnail:false}).fetch()
    console.log(x)
    return x
  },
})
