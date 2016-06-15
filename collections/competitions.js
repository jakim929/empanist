import { Mongo } from 'meteor/mongo';

export const MusicCompetitions = new Mongo.Collection('musicCompetitions');
export const TagsCollection = new Mongo.Collection('tagsCollection');

MusicCompetitionSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Competition Name"
  },
  alias: {
    type: [String],
    label: "Other Names"
  },
  reputation: {
    type: Number,
    label: "Competition Reputation",
    min: 1,
    max: 3
  }

});

MusicCompetitions.attachSchema(MusicCompetitionSchema)

TagsSchema =new SimpleSchema({
  tags: {
    type: [Object]
  },
  "tags.$._id": {
    type: String
  },
  "tags.$.name": {
    type: String
  }
});

TagsCollection.attachSchema(TagsSchema);
