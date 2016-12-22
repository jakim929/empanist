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

<<<<<<< HEAD
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
=======

  startYear: {
    type: Date,
    optional: true,
    label: "Beginning Year",
  },

  endYear: {
    type: Date,
    optional: true,
    label: "Ending Year"
  },

  startDate: {
    type: Date,
    label: "Beginning Date",
    optional: true
  },

  endDate: {
    type: Date,
    label: "Ending Date",
    optional:true
>>>>>>> 7a576b362b2bff10c8003ab786f10284ae07ffeb
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
<<<<<<< HEAD
    label: "Year Received"
=======
    optional:true,
    label: "Year Received"
  },

  date: {
    type: Date,
    label: "Date Received",
    optional: true
>>>>>>> 7a576b362b2bff10c8003ab786f10284ae07ffeb
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

<<<<<<< HEAD
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
=======
  startYear: {
    type: Date,
    optional: true,
    label: "Beginning Year",
  },

  endYear: {
    type: Date,
    optional: true,
    label: "Ending Year"
  },

  startDate: {
    type: Date,
    label: "Start Date",
    optional: true
  },

  endDate: {
    type: Date,
    label: "End Date",
    optional: true
>>>>>>> 7a576b362b2bff10c8003ab786f10284ae07ffeb
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
    optional: true
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
