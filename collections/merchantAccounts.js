import { Mongo } from 'meteor/mongo';

export const MerchantAccounts = new Mongo.Collection('merchantAccounts');

var states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};

var statesArray = [];
for (var state in states) {
    if (states.hasOwnProperty(state)) {
      statesArray.push({label: state, value: state})
    }
}

AddressSchema = new SimpleSchema({
  streetAddress: {
    type: String,
    label: "Street Address"
  },
  locality: {
    type: String,
    label: "City"
  },
  region: {
    type: String,
    label: "State/Region",
    autoform: {
      options: statesArray
    }
  },
  postalCode: {
    type: String,
    label: "Postal Code"
  }
})

IndividualInformationSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name"
  },
  lastName: {
    type: String,
    label: "Last Name"
  },
  email: {
    type: String,
    label: "Email"
  },
  phone: {
    type: String,
    label: "Mobile Phone",
    optional: true
  },
  dateOfBirth: {
    type: Date,
    label: "Date of Birth"
  },
  ssn: {
    type: String,
    label: "SSN (Last 4)",
    optional: true
  },
  address: {
    type: AddressSchema,
    label: "Address"
  }
})



FundingSchema = new SimpleSchema({
  descriptor: {
    type: String,
    label: 'Funding Description',
    optional: true
  },
  destination: {
    type: Object,
    label: 'Funding Destination',
    optional: true
  },
  email: {
    type: String,
    label: 'Funding Email',
    optional: true,
  },
  mobilePhone: {
    type: String,
    label: 'Mobile Phone Number',
    optional: true
  },
  accountNumber: {
    type: String,
    label: 'Account Number'
  },
  routingNumber:{
    type: String,
    label: 'Routing Number'
  }

})


MerchantAccountSchema = new SimpleSchema({
  individual: {
    type: IndividualInformationSchema,
    label: "Accompanist Individual Information"
  },
  business: {
    type: Object,
    label: "Accompanist Business Information",
    optional: true
  },
  funding: {
    type: FundingSchema,
    label: "Accompanist Funding/Payment Information"
  },
  tosAccepted: {
    type: Boolean,
    label: "Accept Terms of Service"
  },
  masterMerchantAccountId: {
    type: String,
    label: "Master Merchant Account ID",
    optional: true
  },
  id : {
    type: String,
    label: "Submerchant ID",
    optional: true
  }
});


export { MerchantAccountSchema }
MerchantAccounts.attachSchema(MerchantAccountSchema)
