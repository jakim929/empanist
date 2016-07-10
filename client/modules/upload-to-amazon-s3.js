let template;

let _getFileFromInput = ( event ) => event.target.files[0];

let _setPlaceholderText = ( string = "Click or Drag a File Here to Upload" ) => {
  template.find( ".alert span" ).innerText = string;
};

let _addUrlToDatabase = ( url, type) => {
  Meteor.call( "storeUrlInDatabase", url, type, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, "warning" );
      _setPlaceholderText();
    } else {
      Bert.alert( "File uploaded to Amazon S3!", "success" );
      _setPlaceholderText();
    }
  });
};


let _uploadFileToAmazon = ( file, type ) => {
  const uploader = new Slingshot.Upload( "uploadToAmazonS3" );

  uploader.send( file, ( error, url ) => {
    if ( error ) {
      Bert.alert( error.message, "warning" );
      _setPlaceholderText();
    } else {
      _addUrlToDatabase( url , type);
    }
  });
};

let upload = ( options) => {
  template = options.template;
  let file = _getFileFromInput( options.event );

  _setPlaceholderText( `Uploading ${file.name}...` );
  _uploadFileToAmazon( file , options.type);
};

Modules.client.uploadToAmazonS3 = upload;
