
var dateToDateString = function(date) {
  var m = (date.getMonth() + 1);
  if (m < 10) {
    m = "0" + m;
  }
  var d = date.getDate();
  if (d < 10) {
    d = "0" + d;
  }
  return date.getFullYear() + '-' + m + '-' + d;
};

Template.results.onCreated(function() {
  this.currentState = new ReactiveVar('result-card-left')
});

Template.results.events({
  'click a'(event, template){
    event.preventDefault()
    var accompanist = event.currentTarget.dataset.accompanist
    var queryParam = {
      start_date: FlowRouter.getQueryParam('start_date'),
      end_date: FlowRouter.getQueryParam('end_date')
    };
    FlowRouter.go('/profile/:profileId', {profileId:accompanist}, queryParam);
  }
})

Template.advancedSearch.helpers ({
  // currentSearch: function () {
  //   var currentSearch = SearchData.findOne({userId: Meteor.userId()}, {sort: {timesStamp: -1, limit: 1}});
  //   console.log(currentSearch)
  //   return currentSearch;
  // }
  startDate: function() {
    var startDate = new Date(FlowRouter.getQueryParam('start_date'))
    return dateToDateString(startDate)
  },

  endDate: function() {
    var endDate = new Date(FlowRouter.getQueryParam('end_date'))
    return dateToDateString(endDate)
  },

  address: function () {
    var address = FlowRouter.getQueryParam("address")
    return address;
  },
  charge: function () {
    var charge = FlowRouter.getQueryParam("charge")
    return parseInt(charge)
  },
  session_location: function () {
    var session_location = FlowRouter.getQueryParam("session_location")
    return session_location
  },
  times: function () {
    var times = FlowRouter.getQueryParam("working_hours")
    return times
  },
  days: function() {
    var days = FlowRouter.getQueryParam("working_days")
    return days
  },
  rads: function() {
    var radius = FlowRouter.getQueryParam("radius")
    return radius
  }
})

Template.results.helpers({

  accompanists: function() {

    // If search
    var address = FlowRouter.getQueryParam("address")
    var start_date = FlowRouter.getQueryParam("start_date")
    var end_date = FlowRouter.getQueryParam("end_date")

    // if Advanced search
    var charge = FlowRouter.getQueryParam("charge")
    var session_location = FlowRouter.getQueryParam("session_location")
    var radius = FlowRouter.getQueryParam("radius")
    var time = FlowRouter.getQueryParam("working_hours")
    var day = FlowRouter.getQueryParam("working_days")

    console.log("Search Info")
    console.log(address)
    console.log(charge)
    console.log(session_location)
    console.log(radius)
    console.log(time)
    console.log(day)

    Meteor.call('getGeocode', address, function(err, result){

      if (result !== null){

        var lat = Number(result[0].latitude);
        var lng = Number(result[0].longitude);
        var coords = [lng, lat];
      }

      //convert dates to dates that can be compared with Mongo schema
      var sd = new Date(start_date)
      var ed = new Date(end_date)

      function searchWith(){

        if (charge !== undefined && charge.length > 1) {

          var result = charge.map(function (x) {
            return parseInt(x, 10);
          });
          var charge_algo =
          {charge: {$in: result}}
        } else if (charge !== undefined) {
          var charge_algo =
          {charge: parseInt(charge[0])}
        }

        if (session_location !== null) {
          if (session_location == "Doesn't matter") {
            var session_algo = {session_location: {$in: ["Doesn't matter", "My Place", "Student's Place" ]}}
          } else
          var session_algo =
          {session_location: session_location}
        }

        if (time !== undefined && time.length > 1) {
          var time_algo =
          {working_hours: {$in: time}}
          console.log("several times")
        } else if (time !== undefined) {
          var time_algo =
          {working_hours: time}
          console.log("one time")
        }

        if (day !== undefined && $.isArray(day)) {
          var work_algo =
          {working_days: {$in: day}}
        }

        var array_algo = [charge_algo, session_algo, time_algo, work_algo]
        var new_algo = [{accompanist_active: true},{Id: { $ne: Meteor.userId()}}]

        $.each(array_algo, function( index, value ) {
          switch (index) {
            case 0:
              if (value !== undefined) {
                new_algo.push(value)
              }
              break;
            case 1:
              if ((value['session_location'] !== undefined) ) {
                new_algo.push(value)
              }
              break;
            case 2:
               if (value !== undefined) {
                new_algo.push(value)
              }
              break;
            case 3:
              if (value !== undefined) {
                new_algo.push(value)
              }
              break;
          }
        });
          return new_algo
      };

      if (radius !== undefined ) {
        switch (parseInt(radius)) {
          case 1:
            var distance = 3350
            break;
          case 2:
            var distance = 10050
            break;
          case 3:
            var distance = 20100
            break;
          case 4:
            var distance = 40200
            break;
        }
      } else {
        var distance = 20000
      }
      var x =  searchWith()
      console.log("Search Algorithm")
      console.log(x)
      var results = AccompanistProfiles.find(
        {loc:
        { $near :
          {
            $geometry: { type: 'Point',  coordinates: coords },
            $maxDistance: distance
          }
        },
        $and: x
      }).fetch();
      Session.set('results', results)
    });
    return Session.get('results')
  },
  accompname: function() {
    var names = BasicProfiles.findOne({userId: this.Id});
    return names
  },
   currentProfilePic: function() {
     console.log('CurrentProfilePic')
    var profileDoc = BasicProfiles.findOne({userId: FlowRouter.getParam('profileId'), $exists: {profilePic: 1}});
    if (profileDoc){
      var picId = profileDoc.profilePic;
      var imageDoc = UserImages.findOne(picId);
      console.log(imageDoc.url)
      return imageDoc.url
    }
  },
  currentCoverPic: function(Id) {
    var profileDoc = BasicProfiles.findOne({userId: Id, $exists: {coverPic: 1}}, {coverPic : 1});
    if (profileDoc){
      var picId = profileDoc.coverPic;
      var imageDoc = UserImages.findOne(picId);
      return imageDoc.url
    }
  },
  noResults: function (results) {
    var index = 0
    if (results[index] == null) {
      return true
    } else {
      return false
    }
  },
  allTimes: function (times) {
    if (times.length == 3) {
      return true
    } else {
      return false
    }
  },
  allDays: function (days) {
    if (days.length == 7) {
      return true
    } else {
      return false
    }
  }
});

Template.advancedSearch.helpers({
  chargeArray(){
    var newArray = [{label: '$20', value: 20},
                    {label: '$40', value: 40},
                    {label: '$60', value: 60}]
    return newArray
  },
  timeArray(){
    var newArray = [{label: "Morning", value: "Morning"},
                    {label: "Afternoon", value: "Afternoon"},
                    {label: "Night", value: "Night"}]
    return newArray
  },
  dayArray(){
    var newArray = [{label: "Mon", value: "Monday"},
                    {label: "Tue", value: "Tuesday"},
                    {label: "Wed", value: "Wednesday"},
                    {label: "Thur", value: "Thursday"},
                    {label: "Fri", value: "Friday"},
                    {label: "Sat", value: "Saturday"},
                    {label: "Sun", value: "Sunday"}]
    return newArray
  }
});

AutoForm.hooks({
  advancedSearch: {
    onSubmit: function (doc) {
      event.preventDefault();

      var address = doc.address
      var charge = doc.charge
      var working_days = doc.working_days
      var start_date = doc.start_date
      var end_date = doc.end_date
      var radius = doc.radius
      var session_location = doc.session_location
      var working_hours = doc.working_hours

      if (address == undefined) {
        FlowRouter.setQueryParams({address: null});
      }
      if (charge == undefined) {
        FlowRouter.setQueryParams({charge: null});
      }
      if (working_days == undefined) {
        FlowRouter.setQueryParams({working_days: null});
      }
      if (start_date == undefined) {
        FlowRouter.setQueryParams({start_date: null});
      }
      if (end_date == undefined) {
        FlowRouter.setQueryParams({end_date: null});
      }
      if (radius == undefined) {
        FlowRouter.setQueryParams({radius: null});
      }
      if (session_location == undefined) {
        FlowRouter.setQueryParams({session_location: null});
      }
      if (working_hours == undefined) {
        FlowRouter.setQueryParams({working_hours: null});
      }

      console.log("New Query Param")
        $('#advancedsearch').removeAttr('disabled');
        FlowRouter.setQueryParams(doc);
    }
  }
});


Template.registerHelper('randomBlurb', () => {
    console.log("randomblurb")
    let randoms = [
      "I am a music teacher with 15 years of experience teaching flute, recorder, music theory, music history, ear training and music literature. I have contributed to the creation of music curriculums in one of the most renowned music schools in Montreal.",
      "I have been a concert pianist for 6 years, having worked with the nation's best soloist musicians. I am very adaptable in style, and having been a soloist as well, am able to work well with soloists. I've also played with smaller ensembles in the Carnegie Hall.",
      "I am a professional accompanist with a specialty in Jazz piano. I studied at the nation's best music schools, and am currently working as a concert pianist as well. I have previously collaborated with Yo-Yo Ma, Lang Lang, and Bihn Park, few of the most famous soloists in the world.",
      "I've played the piano for nearly 40 years. I can read, write, and produce music very well. I own and operate a recording studio in my home. Currently, I am the piano accompanist for a high school. My career includes being the music director for a not-for-profit theater company, and I'm the minister of music for my church. My hobby includes being the leader of an R&B/Soul band."
    ]
    return randoms[Math.floor(Math.random()*randoms.length)]
  }
)

Template.registerHelper('joinComma', (array) =>{
    // let trueName = {'Mon': 'Monday', 'Tue': 'Tuesday', 'Wed': 'Wednesday', 'Thu': 'Thursday', 'Fri': 'Friday', 'Sat': 'Saturday', 'Sun': 'Sunday'}
    // for(var i = 0; i < array.length; i++){
    //   console.log(array[i])
    //   array[i] = trueName[array[i]]
    // }
    return array.join(', ')
})
