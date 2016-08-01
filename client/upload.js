// To Handle Upload (To S3) functionality client side


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
    Meteor.call( "storeImageUrlInDatabase", info, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, "warning" );
      } else {
        Bert.alert( "Image uploaded!", "success" );
      }
    });
  }
};





Template.ImagesLayout.helpers({
  initialData (){
    var basicProfileDoc = BasicProfiles.findOne({userId: Meteor.userId()});
    if(basicProfileDoc){
      var imageDoc = UserImages.findOne(basicProfileDoc.profilePic);
      if(imageDoc)
      return {type: 'Profile',
              imageId: basicProfileDoc.profilePic,
              imageUrl: imageDoc.url}
    }
  }
})

Template.PictureCropper.events({
  'click .upload-crop': function (event, template) {
    console.log($('#crop-image'))
    var imgSrc = $('#crop-image').attr('src');
    var imgDoc = UserImages.findOne({url : src}, {_id: 1})
    if (imgSrc && imgDoc){
      originalImageId = imgDoc._id
      var canvas = $("#crop-image").cropper('getCroppedCanvas')
      if(canvas && canvas.toBlob){
        canvas.toBlob(function (blob){
          uploadThumbnail(blob, originalImageId)
        })
      }
    }
  },

});

Template.PictureCropper.onRendered(function() {
  console.log(this)
  var pictureSettings = {'Profile': 1, 'Cover' : 2}
  var ar = pictureSettings[Template.instance().cropperType.get()]
  if(ar){
    $('#crop-image').cropper({
      aspectRatio: ar,
    });
  }

});

Template.PictureCropper.onCreated(function() {
  this.cropperType = new ReactiveVar(this.data.type);
})


Template.ChangeThumbnailModal.events({
  'click .save-profile-thumbnail': function (event, template) {
    console.log($('#crop-image'))
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


Template.ChangeThumbnailModal.onRendered(function(){
  var currentCropperType = 'Profile'
  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {
        var pictureSettings = {'Profile': 1, 'Cover' : 2}
        var ar = pictureSettings[currentCropperType]
        if(ar){
          $('#crop-image').cropper({
            aspectRatio: ar,
          });
        }
      }, // Callback for Modal open
      complete: function() {
        $('#crop-image').cropper('destroy');
      } // Callback for Modal close
    }
  );
    console.log(this)

})

Template.ChangeThumbnailModal.helpers({
  getImageUrl (imageId) {
    var imageDoc = UserImages.findOne(imageId);
    if (imageDoc){
      return imageDoc.url
    }
  },
})

Template.ChangeThumbnailModal.onCreated(function(){
  this.cropperType = new ReactiveVar(this.data.type);
})


Template.UploadImageModal.events({
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


Template.ImageDropzone.onCreated(function (){

  Meteor.Dropzone.options = {
    url: "https://s3.amazonaws.com/empanist-images",
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
      addImageToDatabase(file);
    }
  }

})

Template.ImageDropzone.events({
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


Template.UploadImageModal.onCreated(function (){

  Meteor.Dropzone.options = {
    url: "https://s3.amazonaws.com/empanist-images",
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
      addImageToDatabase(file);
    }
  }

})
