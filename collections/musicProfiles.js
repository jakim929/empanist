import { Mongo } from 'meteor/mongo';

export const MusicProfiles = new Mongo.Collection('musicProfiles');

OrchestraSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Ensemble Name"
  },

  position: {
    type: String,
    label: "Position in Ensemble"
  },

  startYear: {
    type: Number,
    label: "Start Year"
  },

   startMonth: {
    type: String,
    label: "Start Month"
  },

  endYear: {
    type: Number,
    label: "End Year"
  },

  endMonth: {
    type: String,
    label: "End Month"
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
  year: {
    type: Number,
    label: "Year Received"
  }
});

MusicProgramSchema = new SimpleSchema({

  programName : {
    type: String,
    label: "Program Name"
  },
   startYear: {
    type: Number,
    label: "Start Year"
  },

   startMonth: {
    type: String,
    label: "Start Month"
  },

  endYear: {
    type: Number,
    label: "End Year"
  },
  
  endMonth: {
    type: String,
    label: "End Month"
  }
});

InstrumentSchema = new SimpleSchema({
  instrument: {
    type: String,
    label: "Instrument Played",
  },

  yearsPlayed: {
    type: Number,
    label: "Years Played",
  }
});

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
  instruments: {
    type: [InstrumentSchema],
    label: "Instrument Played",
    optional: true
  },

  awards: {
    type: [AwardSchema],
    label: "Awards Won",
    optional: true,
    blackbox: true
  },

  musicPrograms: {
    type: [MusicProgramSchema],
    label: "Music Programs Participated in",
    optional: true
  },

  orchestras: {
    type: [OrchestraSchema],
    label: "Ensembles Played At",
    optional: true
  }

});

MusicProfiles.attachSchema(MusicProfileSchema)
