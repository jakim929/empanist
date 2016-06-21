import { Mongo } from 'meteor/mongo';

export const AccompanistProfile = new Mongo.Collection('accompanistProfile');

AccompanistProfileSchema = new SimpleSchema({
		Id: {
			type: String,
			label: "User ID",
			autoform: {
				type: "hidden"
			},
			autoValue: function(){
				return this.userId
			}
		},

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

  	working_hours: {
  		type: [String],
  		label: "Times you prefer working",
  		autoform: {
  			type: "select-checkbox-inline",
  			options: [
        	{label: "Morning (8am - 12pm)", value: "morning"},
        	{label: "Afternoon (12pm - 6pm)", value: "afternoon"},
        	{label: "Night (6pm - 11pm)", value: "night"}
      		]
   		}
  	},

   	working_days: {
  		type: [String],
  		//noselect:true,
  		label: "Days you want to accompany",
  		autoform: {
  			type: "select-checkbox-inline",
  			options: [
        	{label: "Monday", value: "monday"},
        	{label: "Tuesday", value: "tuesday"},
        	{label: "Wednesday", value: "wednesday"},
        	{label: "Thursday", value: "thursday"},
        	{label: "Friday", value: "friday"},
        	{label: "Saturday", value: "saturday"},
        	{label: "Sunday", value: "sunday"},
      		]
   		}
  	},

  	session_location: {
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

    startDate: {
      type: Date,
      label: "Start Date"
    },

    endDate: {
      type: Date,
      label: "End Date"
    },

    // make this show up only if the accomp said he's willing to give sessoins in his place
    mylocation: {
      type: String,
      label: "mylocation"
    },

    geolocation:{
      type: Object,
      blackbox: true,
      label: 'geolocation',
      optional: true,
      autoform: {
        type: "hidden",
        label: false
      },
  },


  	one_liner: {
  		type: String,
  		label: "Describe yourself in one sentence",
  	},

});

AccompanistProfile.attachSchema(AccompanistProfileSchema)
