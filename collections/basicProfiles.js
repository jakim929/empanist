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
      if(this.isSet){
        return this.value
      }else {
        return this.userId
      }
    }
  },

  firstName: {
    type: String,
    label: "First Name"
  },

  lastName:{
    type: String,
    label: "Last Name"
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
    label: "Phone Number",
    optional: true
  },

  affiliation: {
    type: String,
    label: "Affiliation",
    optional: true
  },

  profilePic: {
    type: String,
    label: "Profile Picture ID",
    optional: true
  },

  coverPic: {
    type: String,
    label: "Cover Picture ID",
    optional: true
  },

  customerId:{
    type: String,
    label: "Braintree Customer ID",
    optional: true
  },

  customerObj : {
    type: Object,
    label: "Braintree Customer Object",
    blackbox: true,
    optional: true
  }
});

BasicProfiles.attachSchema(BasicProfileSchema)
