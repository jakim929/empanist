import { Mongo } from 'meteor/mongo';

export const AccompanistProfiles = new Mongo.Collection('accompanistProfiles');

RepertoireSchema = new SimpleSchema({
  concerto: {
    type:String,
    label: "Concerto",
  },
});

AccompanistProfileSchema = new SimpleSchema({
		Id: {
			type: String,
			label: "Accompanist User ID",
			autoform: {
				type: "hidden"
			},
			autoValue: function(){
        return this.userId
			}
		},

		repertoire: {
    	type: [RepertoireSchema],
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
        	{label: "Morning (8am - 12pm)", value: "Morning"},
        	{label: "Afternoon (12pm - 6pm)", value: "Afternoon"},
        	{label: "Night (6pm - 11pm)", value: "Night"}
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
        	{label: "Monday", value: "Monday"},
        	{label: "Tuesday", value: "Tuesday"},
        	{label: "Wednesday", value: "Wednesday"},
        	{label: "Thursday", value: "Thursday"},
        	{label: "Friday", value: "Friday"},
        	{label: "Saturday", value: "Saturday"},
        	{label: "Sunday", value: "Sunday"},
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
      autoform: {
        type: "hidden",
        label: false
      },
      optional: true
  },

    loc: {
      type: Object,
      index: '2dsphere',
      label: "Location",
      //blackbox: true,
      autoform: {
      type: "hidden",
      omit: true
        },
        optional: true
      },

      "loc.type": {
        type: String,
        allowedValues: ["Point"],
        label: "Start location type"
      },

      "loc.coordinates": {
        type: [Number],
        //minCount: 2,
        //maxCount: 2,
        decimal: true,
    },

    one_liner: {
      type: String,
      label: "Describe yourself in one sentence",
    },

});


AccompanistProfiles.attachSchema(AccompanistProfileSchema)
