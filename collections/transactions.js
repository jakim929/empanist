import { Mongo } from 'meteor/mongo';

export const Transactions = new Mongo.Collection('transactions');

TransactionSchema = new SimpleSchema({
  musician: {
    type: String,
    label: "Musician ID"
  },

  accompanist: {
    type: String,
    label: "Accompanist ID"
  },

  status: {
    type: String,
    label: "Booking Status",
    allowedValues: ['Before First Session', 'In Between Session', 'Completed']
  },

  'sessions.$.location': {
    type: String,
    label:'Session Location'
  },

  'sessions.$.date': {
    type: Date,
    label: 'Session Date'
  },

  'sessions.$.rating': {
    type: Number,
    label: 'Session Rating'
  },

  rating: {
    type: Number,
    label: 'Booking Rating'
  }

});

Transactions.attachSchema(TransactionSchema)
