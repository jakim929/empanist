import { Mongo } from 'meteor/mongo';

export const AccompanistProfile = new Mongo.Collection('accompanistProfile');

export const AccompanistProfileSchema = new SimpleSchema({
  paymentType: {
    type: String,
    label: "Payment Type"
  }
});

AccompanistProfile.attachSchema(AccompanistProfileSchema)
