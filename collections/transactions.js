import { Mongo } from 'meteor/mongo';

export const Transactions = new Mongo.Collection('transactions');
export const Sessions = new Mongo.Collection('sessions');

RepertoireSchema = new SimpleSchema({
  concerto: {
    type:String,
    label: "Planned Repertoire",
  },
});

TransactionSchema = new SimpleSchema({
  musician: {
    type: String,
    label: "Musician ID",
    autoform: {
      type: "hidden"
    },
    autoValue:
      function() {
        if(this.isSet){
          return this.value
        }else{
          return Meteor.userId()
        }

      }
  },

  accompanist: {
    type: String,
    label: "Accompanist ID",
    // autoform: {
    //   type: "hidden"
    // }
  },

  sessionCount: {
    type: Number,
    label: "Session Count",
    optional: true
  },

  repertoire: {
    type: [RepertoireSchema],
    label: "Planned Repertoire"
  },

  status: {
    type: String,
    label: "Booking Status",
    allowedValues: [ 'Pending', 'Ongoing', 'Completed', 'Rejected', 'Cancelled']
    // autoform: {
    //   type: "hidden"
    // }
  },

  startDate: {
    type: Date,
    label: "Start Date"
  },

  endDate: {
    type: Date,
    label: "End Date"
  },

  rating: {
    type: Number,
    label: 'Booking Rating',
    optional: true,
    // autoform: {
    //   type: "hidden"
    // }
  },

  rehearsalLocation: {
    type: String,
    label: "Rehearsal Location",
    optional: true
  },

  performanceLocation: {
    type: String,
    label: "Performance Location",
    optional: true
  }

});


SessionSchema = new SimpleSchema({

  transaction: {
    type: String,
    label: "Transaction ID",
    // autoform: {
    //   type: "hidden"
    // }
  },

  accompanist: {
    type: String,
    label: "Accompanist ID",
  },

  musician: {
    type: String,
    label: "Musician ID",
  },

  sessionType: {
    type: String,
    label: "Session Type",
    allowedValues: ["Rehearsal", "Performance"]
  },

  location: {
    // CHANGE Make this into required
    type: String,
    label:'Session Location',
    optional: true
  },

  date: {
    type: Date,
    label: "Session Date"
  },

  suggestedHours: {
    type: [Number],
    label: 'Suggested Times (Military Hour) for Session'
  },

  startTime: {
    type: Date,
    optional: true,
    label: 'Start Time'
  },

  duration: {
    type: Number,
    label: "Duration in Hours",
    optional: true
  },

  status: {
    type: String,
    label: 'Session Status',
    allowedValues: [ 'Pending', 'Confirmed', 'Completed', 'Cancelled'],
    optional: true
  }


})

Sessions.attachSchema(SessionSchema)
Transactions.attachSchema(TransactionSchema)
export { TransactionSchema }
