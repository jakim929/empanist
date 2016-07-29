let template;

let _addUrlToDatabase = ( url, type) => {
  Meteor.call( "storeUrlInDatabase", url, type, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, "warning" );

    } else {
      Bert.alert( "File uploaded to Amazon S3!", "success" );

    }
  });
};


let _uploadFileToAmazon = ( file, type ) => {
  const uploader = new Slingshot.Upload( "uploadImageToAmazonS3" );

  uploader.send( file, ( error, url ) => {
    if ( error ) {
      Bert.alert( error.message, "warning" );
    } else {
      _addUrlToDatabase( url , type);
    }
  });
};

let upload = (file, options) => {
  _uploadFileToAmazon( file , options.type);
};

Modules.client.uploadImageToAmazonS3 = upload;
