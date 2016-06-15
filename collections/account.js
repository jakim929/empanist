import { Mongo } from 'meteor/mongo';
import { AccompanistProfileSchema } from './accompanistProfile.js'

export const Accounts = new Mongo.Collection('accounts');

  // Searching
  AccountsIndex = new EasySearch.Index({
    collection: Accounts,
    fields: ['name', 'phone'],
    engine: new EasySearch.Minimongo()
  });

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
  },

  accompanistProfile : {
    type: [AccompanistProfileSchema],
    label: "Accompanist Profile",
    optional: true
  }

});

Accounts.attachSchema(AccountSchema)
