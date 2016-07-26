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
  }
});

BasicProfiles.attachSchema(BasicProfileSchema)
