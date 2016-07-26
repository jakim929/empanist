// used for testing d3 visualization

export const Data = new Mongo.Collection('data');

DataSchema = new SimpleSchema({
  value: {
    type: Number,
    label: "val"
  },
   userId: {
    type: String,
    label: "User ID",
    autoform: {
      type: "hidden"
    },
    autoValue: function() {
      return this.userId;
    }
  },
  suggestions: {
    type: [String],
    label: "Suggestions"
  }
});


Data.attachSchema(DataSchema)
