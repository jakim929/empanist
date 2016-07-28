// export const SearchData = new Mongo.Collection('searchData');

SearchDataSchema = new SimpleSchema({
  // userId: {
  //   type: String,
  //   label: "User ID",
  //   autoform: {
  //     type: "hidden"
  //   },
  //   autoValue: function() {
  //     return this.userId;
  //   }
  // },
  // timesStamp: {
  // type: Date,
  // autoValue: function() {
  //     return (new Date())
  //   }
  // },
  start_date: {
    type: Date,
    label: "Start Date",
    optional:true
  },
  end_date: {
    type: Date,
    label: "End Date",
    optional:true
  },
  address: {
    type: String,
  },
  charge: {
      type: Number,
      autoform: {
          options: [
            {label: "$20", value: 20},
            {label: "$40", value: 40},
            {label: "$60", value: 60}
          ]
      },
      optional:true
    },
    working_hours: {
      type: [String],
      autoform: {
        type: "select-checkbox-inline",
        options: [
          {label: "Morning (8am - 12pm)", value: "Morning"},
          {label: "Afternoon (12pm - 6pm)", value: "Afternoon"},
          {label: "Night (6pm - 11pm)", value: "Night"}
          ]
      },
      optional:true
    },
    working_days: {
      type: [String],
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
      },
      optional:true
    },
    session_location: {
      type: String,
      autoform: {
        options: [
          {label: "My Place", value: "My Place"},
          {label: "Student's Place", value: "Student's Place"},
          {label: "Doesn't matter", value: "Doesn't matter"}
          ]
      },
      optional:true
    },
    radius: {
      type: Number,
      optional:true
    }
});

// SearchData.attachSchema(SearchDataSchema)
