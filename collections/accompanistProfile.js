import { Mongo } from 'meteor/mongo';

export const AccompanistProfile = new Mongo.Collection('accompanistProfile');

AccompanistProfileSchema = new SimpleSchema({
	
	repertoire: {
    	type: [String],
    	label: "Repertoire"
  	},
  	
  	charge: {
  		type: Number,
  		label: "Hourly Charge",
  		autoform: {
      		options: [
        	{label: "$20", value: 20},
        	{label: "$40", value: 40},
        	{label: "$60", value: 60}
      		]
   		}
  	},

  	location: {
  		type: String,
  		label: "Session's Location",
  		autoform: {
  			options: [
        	{label: "My Place", value: "My Place"},
        	{label: "Student's Place", value: "Student's Place"},
        	{label: "Doesn't matter", value: "Doesn't matter"}
      		]
  		}
  	},

  	one_liner: {
  		type: String,
  		label: "Describe yourself in one sentence",
  	},

});


AccompanistProfile.attachSchema(AccompanistProfileSchema)
