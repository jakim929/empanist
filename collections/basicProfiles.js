import { Mongo } from 'meteor/mongo';

export const BasicProfiles = new Mongo.Collection('basicProfiles');

PaymentMethodSchema = new SimpleSchema({
  paymentType: {
    type: String,
    label: "Payment Type"
  }
});

BasicProfileSchema = new SimpleSchema({
  userId: {
    type: String,
    label: "User ID",
    autoform: {
      type: "hidden"
    },
    autoValue: function() {
      return this.userId
    }
  },

  name: {
    type: String,
    label: "Name"
  },

  birthDate : {
    type: Date,
    // label: "Date of Birth"
  },
// 
  phone: {
    type: String,
    label: "Phone Number"
  },

  affiliation: {
    type: String,
    label: "Affiliation"
  }
});

BasicProfiles.attachSchema(BasicProfileSchema)
