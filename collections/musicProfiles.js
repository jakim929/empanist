import { Mongo } from 'meteor/mongo';

export const MusicProfiles = new Mongo.Collection('musicProfiles');

OrchestraSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Orchestra Name"
  },

  position: {
    type: String,
    label: "Position in Orchestra"
  },

  startDate: {
    type: Date,
    label: "Beginning Date"
  },

  endDate: {
    type: Date,
    label: "Ending Date"
  }
});

AwardSchema = new SimpleSchema({
  name: {
    type:String,
    label: "Competition Name"
  },

  award: {
    type: String,
    label: "Award Title"
  },
  date: {
    type: Date,
    label: "Date Received"
  }
});

CompetitionSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Competition Name"
  },
  date: {
    type: Date,
    label: "Competition Date"
  },
  award: {
    type: String,
    label: "Award Type"
  }
});

MusicProgramSchema = new SimpleSchema({

  programName : {
    type: String,
    label: "Program Name"
  },

  startDate: {
    type: Date,
    label: "Start Date"
  },

  endDate: {
    type: Date,
    label: "End Date"
  }
})



MusicProfileSchema = new SimpleSchema({
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

  instrument: {
    type: String,
    label: "Instrument Played",
    optional: true
  },

  yearsPlayed: {
    type: Number,
    label: "Years Played",
    optional: true
  },

  awards: {
    type: [AwardSchema],
    label: "Awards Won",
    optional: true
  },

  musicPrograms: {
    type: [MusicProgramSchema],
    label: "Music Programs Participated in",
    optional: true
  },

  orchestras: {
    type: [OrchestraSchema],
    label: "Orchestras Played At",
    optional: true
  }

});

MusicProfiles.attachSchema(MusicProfileSchema)
