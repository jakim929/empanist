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
  },

  accompanist: {
    type: String,
    label: "Accompanist ID",
    // autoform: {
    //   type: "hidden"
    // }
  },

  eventName: {
    type: String,
    label: "Event Name"
  },


  performanceType: {
    type: String,
    allowedValues: ['Solo Recital', 'Audition', 'Competition', 'Recording Session', 'Private Lesson', 'Other'],
    label: 'Final Performance Type'
  },

  sessionCount: {
    type: Number,
    label: "Session Count",
    min: 1
  },

  repertoire: {
    type: [RepertoireSchema],
    label: "Planned Repertoire"
  },

  status: {
    type: String,
    label: "Booking Status",
    allowedValues: ['Making', 'Pending', 'Ongoing', 'Completed', 'Cancelled']
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
    label: "End Date",
    min: new Date()
  },

  eventTime: {
    type: String,
    label: 'Event Time',
    optional: true
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
  },

  description: {
    type: String,
    label:  'Performance Description',
    optional: true
  },

  transactionCustomerId: {
    type: String,
    label: 'Braintree Customer ID',
    optional: true
  },

  transactionPaymentToken: {
    type: String,
    label: 'Braintree Payment Token',
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
    label: "Session Date",
    min: new Date()
  },

  suggestedHours: {
    type: [Number],
    label: 'Suggested Times (Military Hour) for Session'
  },

  startTime: {
    type: Number,
    optional: true,
    label: 'Start Time in Military Hour'
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
  },

  firstSession: {
    type: String,
    label: "First Session?",
    optional:true
  }


})

Sessions.attachSchema(SessionSchema)
Transactions.attachSchema(TransactionSchema)
export { TransactionSchema }
