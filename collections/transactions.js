import { Mongo } from 'meteor/mongo';

export const Transactions = new Mongo.Collection('transactions');
export const Sessions = new Mongo.Collection('sessions');


TransactionSchema = new SimpleSchema({
  musician: {
    type: String,
    label: "Musician ID",
    // autoform: {
    //   type: "hidden"
    // }
  },

  accompanist: {
    type: String,
    label: "Accompanist ID",
    // autoform: {
    //   type: "hidden"
    // }
  },

  repertoire: {
    type: [String],
    label: "Planned Repertoire"
  },

  status: {
    type: String,
    label: "Booking Status",
    allowedValues: [ 'Pending', 'Ongoing', 'Completed', 'Rejected', 'Cancelled'],
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
  }
});


SessionSchema = new SimpleSchema({

  transaction: {
    type: String,
    label: "Transaction ID",
    optional: true,
    // autoform: {
    //   type: "hidden"
    // }
  },

  location: {
    type: String,
    label:'Session Location'
  },

  suggestedTimes: {
    type: [Date],
    label: 'Suggested Times for Session'
  },

  startTime: {
    type: Date,
    optional: true,
    label: 'Start Time'
  },

  duration: {
    type: Number,
    label: "Duration in Hours"
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
