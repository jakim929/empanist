
let makeName = ( imageId ) => {
  var currentImage = UserImages.findOne({_id: imageId, userId: Meteor.userId()}, {name: 1});
  if ( !currentImage ) {
    throw new Meteor.Error( "file-error", "Couldn't find a matching file to make a thumbnail for" );
  }
  return 'thumbnail_' + currentImage.name
};

Modules.both.makeThumbnailName = makeName;
