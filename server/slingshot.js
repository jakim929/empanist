// Old Directive

// Slingshot.fileRestrictions( "uploadToAmazonS3", {
//   allowedFileTypes: [ "image/png", "image/jpeg", "image/gif" ],
//   maxSize: 10 * 1024 * 1024
// });
//
// Slingshot.createDirective( "uploadToAmazonS3", Slingshot.S3Storage, {
//   bucket: "empanist-images",
//   acl: "public-read",
//   authorize: function () {
//     if(!this.userId){
//       var message = "Please login before posting files";
//       throw new Meteor.Error("Login Required", message);
//     }
//     let userFileCount = UserImages.find( { "userId": this.userId } ).count();
//     return userFileCount < 3 ? true : false;
//   },
//   key: function ( file ) {
//     var user = Meteor.users.findOne( this.userId );
//     return user.emails[0].address + "/" + file.name;
//   }
// });


// New Directive with Image

// Create key for upload

Slingshot.fileRestrictions( "uploadImageToAmazonS3", {
  allowedFileTypes: [ "image/png", "image/jpeg", "image/gif" ],
  maxSize: 10 * 1024 * 1024 // 10MB upload limit
});

Slingshot.createDirective( "uploadImageToAmazonS3", Slingshot.S3Storage, {
  bucket: "empanist-images",
  acl: "public-read",
  authorize: function () {
    if(!this.userId){
      var message = "Please login before uploading images";
      throw new Meteor.Error("Login Required", message);
    }
    let userFileCount = UserImages.find( { "userId": this.userId } ).count();
    return userFileCount < 100 ? true : false;
  },
  key: function ( file ) {
    return this.userId + "/" + file.name;
  }

});
