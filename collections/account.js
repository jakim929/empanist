import { Mongo } from 'meteor/mongo';

export const Accounts = new Mongo.Collection('accounts');

AccountSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },

  email: {
    type: String,
    label: "Email"
  },

  phone: {
    type: String,
    label: "Phone Number"
  },

  school: {
    type: String,
    label: "School"
  }

});

Accounts.attachSchema(AccountSchema)
