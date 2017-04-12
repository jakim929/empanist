import { Mongo } from 'meteor/mongo';

export const Receipts = new Mongo.Collection('receipts');

InvoiceItemSchema = new SimpleSchema({
  sessionId: {
    type: String,
    label: "Session ID"
  },
  sessionType: {
    type: String,
    label: "Session Type",
    allowedValues: ["Rehearsal", "Final"]
  },
  price: {
    type: Number,
    label: "Invoice Item Price"
  },
  serviceFee: {
    type: Number,
    label: "Invoice Item Service Fee"
  },
  totalPrice: {
    type: Number,
    label: "Invoice Item Total Price"
  },
  paymentStatus: {
    type: Boolean,
    label: "Payment Status"
  }
})

ReceiptSchema = new SimpleSchema({
  paymentType: {
    type: String,
    label: "Payment Type",
    allowedValues: ["Session", "Transaction"]
  },
  transactionId: {
    type: String,
    label: "Transaction"
  },
  accompanistId: {
    type: String,
    label: "Accompanist ID"
  },
  musicianId: {
    type: String,
    label: "Musician ID"
  },
  hourlyRate: {
    type: Number,
    label: "Hourly Rate"
  },
  serviceFee: {
    type: Number,
    label: "Service Fee"
  },
  sessionCount: {
    type: Number,
    label: "Session Count"
  },
  invoiceItems: {
    type: [InvoiceItemSchema],
    label: "Invoice Items"
  },
  totalPrice: {
    type: Number,
    label: "Total Transaction Price"
  },
  paymentToken:{
    type: String,
    label: "Payment Token"
  },

  submerchantID: {
    type: String,
    label: "Submerchant ID"
  },
  paymentProgress: {
    type: Number,
    label: "Paid So Far"
  }

});



Receipts.attachSchema(ReceiptSchema)
