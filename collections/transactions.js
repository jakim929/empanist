import { Mongo } from 'meteor/mongo';

export const Transactions = new Mongo.Collection('transactions');

TransactionSchema = new SimpleSchema({
  musician: {
    type: String,
    label: "Musician ID",
    autoform: {
      type: "hidden"
    }
  },

  accompanist: {
    type: String,
    label: "Accompanist ID",
    autoform: {
      type: "hidden"
    }
  },

  repertoire: {
    type: [String],
    label: "Planned Repertoire"
  },

  status: {
    type: String,
    label: "Booking Status",
    allowedValues: ['Accepted', 'Rejected', 'Offered', 'Cancelled'],
    autoform: {
      type: "hidden"
    },
    autoValue: function() {
      return 'Offered'
    }
  },

  startDate: {
    type: Date,
    label: "Start Date"
  },

  endDate: {
    type: Date,
    label: "End Date"
  },

  'sessions.$.location': {
    type: String,
    label:'Session Location',
    optional: true
  },

  'sessions.$.date': {
    type: Date,
    label: 'Session Date',
    optional: true
  },

  'sessions.$.rating': {
    type: Number,
    label: 'Session Rating',
    optional: true
  },

  rating: {
    type: Number,
    label: 'Booking Rating',
    optional: true,
    autoform: {
      type: "hidden"
    }
  }

});

Transactions.attachSchema(TransactionSchema)
