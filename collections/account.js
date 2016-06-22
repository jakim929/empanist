import { Mongo } from 'meteor/mongo';
import { AccompanistProfileSchema } from './accompanistProfile.js'

export const Accounts = new Mongo.Collection('accounts');

PaymentMethodSchema = new SimpleSchema({
  paymentType: {
    type: String,
    label: "Payment Type"
  }
});

AccountSchema = new SimpleSchema({
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

  name: {
    type: String,
    label: "Name"
  },

  birthDate : {
    type: Date,
    label: "Date of Birth"
  },

  phone: {
    type: String,
    label: "Phone Number"
  },

  affiliation: {
    type: String,
    label: "Affiliation"
  }

});

Accounts.attachSchema(AccountSchema)
