import { Mongo } from 'meteor/mongo';

UserImages = new Mongo.Collection('userImages');

UserImageSchema = new SimpleSchema({
  userId: {
    type: String,
    label: "User ID",
  },

  url: {
    type: String,
    label: "Image URL"
  },

  type: {
    type: String,
    label: "File Type"
  },


  size: {
    type: Number,
    label: "Image File Size",
  },

  name: {
    type: String,
    label: "File Name"
  },

  lastModifiedDate: {
    type: Date,
    label: "Last Modified Date",
    optional: true
  },

  added: {
    type: Date,
    label: "Added Date"
  },

  thumbnailId: {
    type: String,
    label: "Thumbnail ID"
  },

  isThumbnail: {
    type: Boolean,
    label: "Image is Thumbnail"
  }



});
