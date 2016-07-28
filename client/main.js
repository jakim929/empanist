import { MusicProfiles } from '../collections/musicProfiles.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'
import { BasicProfiles } from '../collections/basicProfiles.js'
import { MusicCompetitions } from '../collections/competitions.js'
import { Transactions } from '../collections/transactions.js'
import { Sessions } from '../collections/transactions.js'
import { TransactionSchema } from '../collections/transactions.js'
import cropper from 'cropper';
import 'cropper/dist/cropper.css';
import { Data } from '../collections/profileData.js'
import { SearchData } from '../collections/searchData.js'



window.MusicProfiles = MusicProfiles
window.AccompanistProfiles = AccompanistProfiles
window.BasicProfiles = BasicProfiles
window.MusicCompetitions = MusicCompetitions
window.Transactions = Transactions
window.Sessions = Sessions
window.SearchData = SearchData


// Reservations Layout

Template.statusBadge.helpers({
  getClass (status) {
    if (status == "Pending"){
      return "lime"
    }else if (status == "Ongoing"){
      return "cyan lighten-2"
    }else if (status == "Rejected"){
      return "red lighten-1"
    }else if (status == "Confirmed"){
      return "cyan lighten-2"
    }
  }
})

sessionInsertHook = {
  before: {
    insert: function(doc) {
      var transactionDoc = Transactions.findOne({_id: doc.transaction}, {})
      if(!transactionDoc){
        return false;
      }
      if (doc.sessionType == "Rehearsal"){
        doc.location = transactionDoc.rehearsalLocation
      }else{
        doc.location = transactionDoc.performanceLocation
      }
    }
  }
}

Template.ReservationDetails.helpers({
  arrayLength (array){
    return array.length
  },
  getSessionsLink (){
    var routeName = "sessions"
    var queryParams = {transaction: FlowRouter.getQueryParam('transaction')}
    return FlowRouter.path(routeName, {}, queryParams);
  }
})

Template.NewSession.onRendered(function() {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
})

AutoForm.hooks({
  advancedSearch: {
    onSubmit: function (doc) {
      event.preventDefault();
      console.log(doc)
      $('#advancedsearch').removeAttr('disabled');
      FlowRouter.setQueryParams(doc);
    }
  }
});

Template.NewSession.helpers({
  optionsArray(){
    var array = ["7AM", "8AM","9AM","10AM"]
    var newArray = [{label: '7AM', value: 7},
                    {label: '8AM', value: 8},
                    {label: '9AM', value: 9},
                    {label: '10AM', value: 10},
                    {label: '11AM', value: 11},
                    {label: '12PM', value: 12},
                    {label: '1PM', value: 13},
                    {label: '2PM', value: 14},
                    {label: '3PM', value: 15},
                    {label: '4PM', value: 16},
                    {label: '5PM', value: 17},
                    {label: '6PM', value: 18}]
    return newArray
  },
  initialDoc(){
    // Try changing to dynamically take from template
    transactionDoc = Transactions.findOne(FlowRouter.getQueryParam("transaction"))
    if(transactionDoc){
      return {transaction: transactionDoc._id, accompanist: transactionDoc.accompanist, musician: transactionDoc.musician}
    }

  }
  // initialDoc(transactionId) {
  //   var transactionDoc = Transactions.findOne({_id : transactionId}, {musician: 1, accompanist: 1, rehearsalLocation: 1, performanceLocation: 1});
  //   return {transaction: transactionId,
  //     accompanist: transactionDoc.accompanist,
  //     musician: transactionDoc.musician
  //
  //   }
  // }
})

  valueOut = function(){
    var val = [];
    this.find('input.timeslot-checkbox').each(function(){
      if($(this).is(":checked")) {
        val.push($(this).val());
      }
    })
    return val
}

var options = {template: "TestDrag", valueOut: valueOut}

AutoForm.addInputType("time-checkboxes", options)


Template.TestDrag.onRendered(function(){
   $('ul.tabs').tabs();
})

Template.TestDrag.helpers({
  testArray: function() {
    var array = ["7AM", "8AM","9AM","10AM","11AM","12PM","1PM","2PM",'3PM',"4PM","5PM", "6PM"]
    array.map(function(currentValue){
      return {label: currentValue, value: currentValue}
    })
    console.log(array)
    return array
  },
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);
    if (this.selected) {
      atts.checked = "";
    }
    // remove data-schema-key attribute because we put it
    // on the entire group
    delete atts["data-schema-key"];
    return atts;
  },
  dsk: function dsk() {
    return {
      "data-schema-key": this.atts["data-schema-key"]
    };
  }

})

Template.TestDrag.events({

})

Template.ReservationLayout.helpers({

})

// Bookings Layout

Template.becomeAnAccompanist.helpers({
  onNewAccomp: function() {
    if (FlowRouter.getRouteName() == "NewAccompLayout"){
      return "hidden"
    }
  },
  ifNotSignedIn: function() {
    if (Meteor.user()) {
      return ""
    } else {
      return  "modal-login-trigger modal-trigger"
    }
  },
  link: function() {
    if (Meteor.user()) {
      return "/newaccomp"
    } else {
      return "#loginModal"
    }
  }
});

// DELETE LATER
Template.BookingCardExample.helpers({
  getLink: function (id){
    let routeName = "reservation";
    let queryParams = {transaction: id};
    return FlowRouter.path(routeName, {}, queryParams);
  },

})

Template.BookingCard.helpers({
  getLink: function (id){
    let routeName = "reservation";
    let queryParams = {transaction: id};
    return FlowRouter.path(routeName, {}, queryParams);
  },

})

// CropUploader

Template.ProfileLayout.events({
  'click .change-profile-pic' (event, template){
    Session.set("changeImageModalStatus", "profile");
  },
  'click .change-cover-pic' (event, template){
    Session.set("changeImageModalStatus", "cover");
  }

})

getDimensions = function(type) {
  if(type == "profile"){

    return {width: 200, height: 200, aspectRatio: 1}
  }
  if(type == "cover"){

    return {width: 1200, height: 600, aspectRatio: 2};
  }
  return {width:200, height: 200, aspectRatio: 1};
}

Template.picOverlord.onRendered(function() {
  Tracker.autorun(function () {
    var currentCropperStatus = Session.get("cropperStatus");
    if (currentCropperStatus == "go"){
      console.log("go cropper");

      var dimensions = getDimensions(Session.get("changeImageModalStatus"));
      options =
        {
          aspectRatio: dimensions.aspectRatio,
          data: {
                  x:10,
                  y:10,
                  width: dimensions.width,
                  height: dimensions.height
                }
        }
      $("#crop-image").cropper(options);
    }else if (currentCropperStatus == "stop"){
      console.log("stop cropper")
      $("#crop-image").cropper('destroy');
    }
  });
})



Template.accountTemplate.onRendered(function () {

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal(
      {
        ready: function() {
          console.log("Ready Modal");
          // var options = Session.get('cropperOptions');
          // options.rotatable = false;
          // Session.set('cropperOptions', options);
          // var imageSegment = $("#crop-image");
          // imageSegment.cropper(options);
          // Session.set("picModalOpened", true);
        },
        complete: function() {

          Session.set("cropperStatus", "stop");
                    // $("#crop-image").cropper('destroy');
        }
      }
    );
  });

});

Template.picOverlord.events({
  'click .change-thumbnail-tab': function () {
    Session.set('cropperStatus', "go");
  },
  'click .upload-image-tab': function () {
    Session.set('cropperStatus', "stop");
  },

});

Template.changeImageModal.onRendered(function(){
    $('ul.tabs').tabs();
  Session.get("cropperStatus", "unrendered")
})

var directory = ''; // same as Meteor.settings.S3Directory
CropUploader.init("uploadToAmazonS3", directory);

Template.images.onCreated(function(){
    this.subscribe('cropUploaderImages');
})
Template.images.onRendered(function(){
  this.$('.preview').addClass('hidden');
});
Template.images.helpers({
  images: function() {
    return CropUploader.images.find();
  }
});



// Template.picUploader.onCreated(function(){
//   this.picType = new ReactiveVar("profile");
//   Tracker.autorun(function(){
//     var status = Session.get("changeImageModalStatus")
//     if (status){
//       Template.instance().picType.set(status);
//     }else{
//       Template.instance().picType.set("profile");
//     }
//   })
// });

Template.picUploader.helpers({
  dimensions: function(){
    return getDimensions(Session.get("changeImageModalStatus"));
  },


  previewPresent: function() {
    if (Session.get("previewPresent")){
        return "";
    }else{
        return "hidden"
    }

  },
  picType: function() {
    // Change to reactive var at some point from sessions
    console.log(Session.get("changeImageModalStatus"))
    return Session.get("changeImageModalStatus");
  },
  currentImage: function() {
    // Change back to reactive var
    if(Session.get("changeImageModalStatus") == "profile"){
              console.log("Hello");
      var basicProfileDoc = BasicProfiles.findOne({userId : Meteor.userId(), profilePic: {$exists: true}}, {profilePic: 1});
      if(basicProfileDoc){
        var x = CropUploader.images.findOne({_id: basicProfileDoc.profilePic});
        console.log(basicProfileDoc.profilePic);
        return x
      }
    }else if(Session.get("changeImageModalStatus") == "cover"){
      var basicProfileDoc = BasicProfiles.findOne({userId : Meteor.userId(), coverPic: {$exists: true}}, {coverPic: 1});
      if(basicProfileDoc){
        return CropUploader.images.findOne({_id: basicProfileDoc.coverPic})
      }
    }
  },
});

Template.picCropper.onCreated(function(){
  this.picType = new ReactiveVar("profile");
});

Template.picCropper.helpers({
  picType: function() {
    return Template.instance().picType.get();
  },
  currentImage: function() {
    if(Template.instance().picType.get() == "profile"){
      var basicProfileDoc = BasicProfiles.findOne({userId : Meteor.userId(), profilePic: {$exists: true}}, {profilePic: 1});
      if(basicProfileDoc){
        return CropUploader.images.findOne({_id: basicProfileDoc.profilePic});
      }
    }else if(Template.instance().picType.get() == "cover"){
      var basicProfileDoc = BasicProfiles.findOne({userId : Meteor.userId(), coverPic: {$exists: true}}, {coverPic: 1});
      if(basicProfileDoc){
        return CropUploader.images.findOne({_id: basicProfileDoc.coverPic})
      }
    }
  },
  dimensions: function(){
    return getDimensions(Session.get("changeImageModalStatus"));
  },


});

Template.picCropper.events({
  'click button.delete': function(e,t) {
    if(confirm('Delete this image?'))
    {
      var imageid = t.$(e.target).attr('imageid');
      console.log(imageid);
      // change route away from the image since it no longer exists
      Meteor.call('deleteImageFromS3', imageid);
      Session.set("cropperStatus", "stop")
    }
  },
  'click button.save': function(e,t) {
    // provide the name of the derivative, thumbnail is the default
    CropUploader.crop.save('thumbnail');
  },
  'click button.rotate': function(e,t) {
    CropUploader.crop.rotate();
  }
})

Template.picCropper.onCreated(function(){
  this.subscribe('cropUploaderImages', {_id: Session.get('imageid')});
});

Template.cropper.onCreated(function(){
  Session.set('imageid', 'R4writwnZ9XM5sEoQ')
  this.subscribe('cropUploaderImages', {_id: Session.get('imageid')});
});

Template.cropper.helpers({
  imageid: function() {
    return Session.get('imageid');
  },
  url: function() {
    return CropUploader.images.findOne(Session.get('imageid')).url;
  }
});

Template.cropper.events({
  'click button.delete': function(e,t) {
    if(confirm('Delete this image?'))
    {
      var imageid = t.$(e.target).attr('imageid');
      CropUploader.images.remove(imageid);
      // change route away from the image since it no longer exists
    }
  },
  'click button.save': function(e,t) {
    // provide the name of the derivative, thumbnail is the default
    CropUploader.crop.save('thumbnail');
  },
  'click button.rotate': function(e,t) {
    CropUploader.crop.rotate();
  }
});

// Account Templates

Template.TestLayout.onRendered(function () {
  // $('#image').cropper({
  //   aspectRatio: 16 / 9,
  //   crop: function(e) {
  //     // Output the result data for cropping image.
  //     console.log(e.x);
  //     console.log(e.y);
  //     console.log(e.width);
  //     console.log(e.height);
  //     console.log(e.rotate);
  //     console.log(e.scaleX);
  //     console.log(e.scaleY);
  //   }
  // });
});

Template.TestLayout.events({
  'click .save-button': function(){
    var cropData = $('#image').cropper('getData', true);
    Meteor.call('setCropPreferences', cropData);

  }
});

var atName =
  {
    _id: 'name',
    type: 'text',
    displayName: "Full Name",
    required: true,
    options: {
      icon: "account_circle"
    }
  };

var atBirthDate =
  {
    _id: 'birthDate',
    type: 'text',
    template: 'dateTemplate',
    displayName: "Birthday",
    required: true,
    negativeValidation: false,
    negativeFeedback: true,
    options: {
      custom: true,
      icon: "cake"
    }
  };

var atPhone =
{
  _id: 'phone',
  type: 'tel',
  displayName: "Mobile Number",
  required: true,
  options: {
    icon: "phone"
  }
};

var atAffiliation =
{
  _id: 'affiliation',
  type: 'text',
  displayName: "Affiliation",
  required: true,
  options: {
    icon: "school"
  }
}

var atEmail = AccountsTemplates.removeField('email');
atEmail.options = {icon: "email"}

var atPassword = AccountsTemplates.removeField('password');
atPassword.options = {icon: "lock"}

AccountsTemplates.addField(atName);
AccountsTemplates.addField(atEmail);
AccountsTemplates.addField(atPassword);
// AccountsTemplates.addField(atAffiliation);
// AccountsTemplates.addField(atPhone);
AccountsTemplates.addField(atBirthDate);


Template.atInputWithIcon.replaces("atInput");

/*!
 * @license Open source under BSD 2-clause (http://choosealicense.com/licenses/bsd-2-clause/)
 * Copyright (c) 2015, Curtis Bratton
 * All rights reserved.
 *
 * Liquid Fill Gauge v1.1
 */

 Template.liquid_fill_gauge.rendered = function(){
   Tracker.autorun(function(){
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleThickness = 0.1;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;

    var x = Data.findOne({userId: Meteor.userId() })

    if (x){
      console.log("printing x")
      console.log(x.value)
      var nodes = d3.select("#fillgauge2")[0][0]["childNodes"]
      console.log(nodes.length)
      if (nodes.length > 0){
        console.log("removed")
        nodes[0].remove()
      }

      var gauge2 = loadLiquidFillGauge("fillgauge2", x.value, config1);
    }

    function liquidFillGaugeDefaultSettings(){
      return {
        minValue: 0, // The gauge minimum value.
        maxValue: 100, // The gauge maximum value.
        circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
        circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
        circleColor: "#178BCA", // The color of the outer circle.
        waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
        waveCount: 1, // The number of full waves per width of the wave circle.
        waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
        waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
        waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
        waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
        waveAnimate: true, // Controls if the wave scrolls or is static.
        waveColor: "#178BCA", // The color of the fill wave.
        waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
        textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
        textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
        valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
        displayPercent: true, // If true, a % symbol is displayed after the value.
        textColor: "#045681", // The color of the value text when the wave does not overlap it.
        waveTextColor: "#A4DBf8" // The color of the value text when the wave overlaps it.
      };
    }

    // gauge2.enter()
    function loadLiquidFillGauge(elementId, value, config) {
      if(config == null) config = liquidFillGaugeDefaultSettings();

      var gauge = d3.select("#" + elementId);
      var radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height")))/2;
      var locationX = parseInt(gauge.style("width"))/2 - radius;
      var locationY = parseInt(gauge.style("height"))/2 - radius;
      var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;

      var waveHeightScale;
      if(config.waveHeightScaling){
        waveHeightScale = d3.scale.linear()
          .range([0,config.waveHeight,0])
          .domain([0,50,100]);
      } else {
        waveHeightScale = d3.scale.linear()
          .range([config.waveHeight,config.waveHeight])
          .domain([0,100]);
      }

      var textPixels = (config.textSize*radius/2);
      var textFinalValue = parseFloat(value).toFixed(2);
      var textStartValue = config.valueCountUp?config.minValue:textFinalValue;
      var percentText = config.displayPercent?"%":"";
      var circleThickness = config.circleThickness * radius;
      var circleFillGap = config.circleFillGap * radius;
      var fillCircleMargin = circleThickness + circleFillGap;
      var fillCircleRadius = radius - fillCircleMargin;
      var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);

      var waveLength = fillCircleRadius*2/config.waveCount;
      var waveClipCount = 1+config.waveCount;
      var waveClipWidth = waveLength*waveClipCount;

      // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
      var textRounder = function(value){ return Math.round(value); };
      if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(1); };
      }
      if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(2); };
      }

      // Data for building the clip wave area.
      var data = [];
      for(var i = 0; i <= 40*waveClipCount; i++){
        data.push({x: i/(40*waveClipCount), y: (i/(40))});
      }

      // Scales for drawing the outer circle.
      var gaugeCircleX = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]);
      var gaugeCircleY = d3.scale.linear().range([0,radius]).domain([0,radius]);

      // Scales for controlling the size of the clipping path.
      var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
      var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);

      // Scales for controlling the position of the clipping path.
      var waveRiseScale = d3.scale.linear()
        // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
        // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
        // circle at 100%.
        .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
        .domain([0,1]);
      var waveAnimateScale = d3.scale.linear()
        .range([0, waveClipWidth-fillCircleRadius*2]) // Push the clip area one full wave then snap back.
        .domain([0,1]);

      // Scale for controlling the position of the text within the gauge.
      var textRiseScaleY = d3.scale.linear()
        .range([fillCircleMargin+fillCircleRadius*2,(fillCircleMargin+textPixels*0.7)])
        .domain([0,1]);

      // Center the gauge within the parent SVG.
      var gaugeGroup = gauge.append("g")
        .attr('transform','translate('+locationX+','+locationY+')');

      // Draw the outer circle.
      var gaugeCircleArc = d3.svg.arc()
        .startAngle(gaugeCircleX(0))
        .endAngle(gaugeCircleX(1))
        .outerRadius(gaugeCircleY(radius))
        .innerRadius(gaugeCircleY(radius-circleThickness));
      gaugeGroup.append("path")
        .attr("d", gaugeCircleArc)
        .style("fill", config.circleColor)
        .attr('transform','translate('+radius+','+radius+')');

      // Text where the wave does not overlap.
      var text1 = gaugeGroup.append("text")
        .text(textRounder(textStartValue) + percentText)
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.textColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

      // The clipping wave area.
      var clipArea = d3.svg.area()
        .x(function(d) { return waveScaleX(d.x); } )
        .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
        .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
      var waveGroup = gaugeGroup.append("defs")
        .append("clipPath")
        .attr("id", "clipWave" + elementId);
      var wave = waveGroup.append("path")
        .datum(data)
        .attr("d", clipArea)
        .attr("T", 0);

      // The inner circle with the clipping wave attached.
      var fillCircleGroup = gaugeGroup.append("g")
        .attr("clip-path", "url(#clipWave" + elementId + ")");
      fillCircleGroup.append("circle")
        .attr("cx", radius)
        .attr("cy", radius)
        .attr("r", fillCircleRadius)
        .style("fill", config.waveColor);

      // Text where the wave does overlap.
      var text2 = fillCircleGroup.append("text")
        .text(textRounder(textStartValue) + percentText)
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.waveTextColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

      // Make the value count up.
      if(config.valueCountUp){
        var textTween = function(){
          var i = d3.interpolate(this.textContent, textFinalValue);
          return function(t) { this.textContent = textRounder(i(t)) + percentText; }
        };
        text1.transition()
          .duration(config.waveRiseTime)
          .tween("text", textTween);
        text2.transition()
          .duration(config.waveRiseTime)
          .tween("text", textTween);
      }

      // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
      var waveGroupXPosition = fillCircleMargin+fillCircleRadius*2-waveClipWidth;
      if(config.waveRise){
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(0)+')')
          .transition()
          .duration(config.waveRiseTime)
          .attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')')
          .each("start", function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
      } else {
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')');
      }

      if(config.waveAnimate) animateWave();

      function animateWave() {
        wave.attr('transform','translate('+waveAnimateScale(wave.attr('T'))+',0)');
        wave.transition()
          .duration(config.waveAnimateTime * (1-wave.attr('T')))
          .ease('linear')
          .attr('transform','translate('+waveAnimateScale(1)+',0)')
          .attr('T', 1)
          .each('end', function(){
            wave.attr('T', 0);
            animateWave(config.waveAnimateTime);
          });
      }

      // this is currently not used, each time we update we are actually re creating the whole graph.. fix later on when we have more than 10 coders!
      function GaugeUpdater(){
        this.update = function(value){
          var newFinalValue = parseFloat(value).toFixed(2);
          var textRounderUpdater = function(value){ return Math.round(value); };
          if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
              extRounderUpdater = function(value){ return parseFloat(value).toFixed(1); };
          }
          if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
            textRounderUpdater = function(value){ return parseFloat(value).toFixed(2); };
          }

          var textTween = function(){
            var i = d3.interpolate(this.textContent, parseFloat(value).toFixed(2));
            return function(t) { this.textContent = textRounderUpdater(i(t)) + percentText; }
          };

          text1.transition()
            .duration(config.waveRiseTime)
            .tween("text", textTween);
          text2.transition()
            .duration(config.waveRiseTime)
            .tween("text", textTween);

          var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;
          var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);
          var waveRiseScale = d3.scale.linear()
            // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
            // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
            // circle at 100%.
            .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
            .domain([0,1]);
          var newHeight = waveRiseScale(fillPercent);
          var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
          var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);
          var newClipArea;
          if(config.waveHeightScaling){
            newClipArea = d3.svg.area()
              .x(function(d) { return waveScaleX(d.x); } )
              .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
              .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
          } else {
            newClipArea = clipArea;
          }

          var newWavePosition = config.waveAnimate?waveAnimateScale(1):0;
          wave.transition()
            .duration(0)
            .transition()
            .duration(config.waveAnimate?(config.waveAnimateTime * (1-wave.attr('T'))):(config.waveRiseTime))
            .ease('linear')
            .attr('d', newClipArea)
            .attr('transform','translate('+newWavePosition+',0)')
            .attr('T','1')
            .each("end", function(){
              if(config.waveAnimate){
                wave.attr('transform','translate('+waveAnimateScale(0)+',0)');
                animateWave(config.waveAnimateTime);
              }
            });
          waveGroup.transition()
            .duration(config.waveRiseTime)
            .attr('transform','translate('+waveGroupXPosition+','+newHeight+')')
        }
      }

      return new GaugeUpdater();
    }
  });
}

// Booking Tests


formatDuration = function(date1, date2) {
  var start =  moment(date1);
  var end = moment(date2);
  if (start.year() == end.year()){
    // Year is the same
    if(start.month() == end.month()){
      return start.format('MMM DD - ') + end.format('DD, YYYY')
    }
      return start.format('MMM DD - ') + end.format('MMM DD, YYYY')
  }
  return start.format('MMM DD, YYYY - ') + end.format('MMM DD, YYYY')
}

Template.SuccessLayout.helpers({
  priceDetails(accompanistId, sessionCount){
    var doc = AccompanistProfiles.findOne({Id: accompanistId}, {charge: 1});
    if (doc){
      if(sessionCount){
        return {hourly: doc.charge, sessionCount: sessionCount, total: (sessionCount * doc.charge)}
      }
    }
  },
});

Template.BookingRequest.onCreated(function () {
  this.currentStep = new ReactiveVar("repertoireSection");
});

Template.NewAccompLayout.onRendered(function () {
  $(document).ready(function(){
    $('.pushpin').pushpin({ top: 100 });
  });
  console.log("pushpin should be working")

});

Template.ReviewRightSummaryPanel.helpers({
  currentBooking(){
    return FlowRouter.getQueryParam("booking");
  },
  priceDetails(accompanistId, sessionCount){
    var doc = AccompanistProfiles.findOne({Id: accompanistId}, {charge: 1});
    if (doc){
      if(sessionCount){
        return {hourly: doc.charge, sessionCount: sessionCount, total: (sessionCount * doc.charge)}
      }
    }
  },

});

Template.SessionReview.helpers({

  optionsArray(){
    var array = ["7AM", "8AM","9AM","10AM"]
    var newArray = [{label: '7AM', value: 7},
                    {label: '8AM', value: 8},
                    {label: '9AM', value: 9},
                    {label: '10AM', value: 10},
                    {label: '11AM', value: 11},
                    {label: '12PM', value: 12},
                    {label: '1PM', value: 13},
                    {label: '2PM', value: 14},
                    {label: '3PM', value: 15},
                    {label: '4PM', value: 16},
                    {label: '5PM', value: 17},
                    {label: '6PM', value: 18}]
    return newArray
  },

  sessionsOptions(){
    return [
        {label: "1 session", value: 1},
        {label: "2 sessions", value: 2},
        {label: "3 sessions", value: 3},
        {label: "4 sessions", value: 4},
        {label: "5 sessions", value: 5},
        {label: "6 sessions", value: 6},
        {label: "7 sessions", value: 7},
        {label: "8 sessions", value: 8},
        {label: "9 sessions", value: 9},
    ];
  },
  defaultSessionCount(){
    return 1
  },

  currentTransaction(){
    return FlowRouter.getQueryParam("booking");
  },

  currentSession(){
    return FlowRouter.getQueryParam("session");
  }
});

Template.upsertMusicProfileForm.events({
  'click .next-instrument':function(){
    Session.set('showAward',true);
    Session.set('showInstrument',false);

    $(".award").css('display', 'block');
    $(".instrument").css('display', 'none');
    $(".determinate").css('width', '50%');
    },
    'click .next-award':function(){
    Session.set('showAward',false);
    Session.set('showProgram',true);

    $(".award").css('display', 'none');
    $(".program").css('display', 'block');
    $(".determinate").css('width', '75%');
    },
    'click .next-program':function(){
    Session.set('showOrchestra',true);
    Session.set('showProgram',false);
    $(".program").css('display', 'none');
    $(".orchestra").css('display', 'block');
    $(".determinate").css('width', '100%');
    },
    'click .back-award':function(){
    Session.set('showAward',false);
    Session.set('showInstrument',true);
    $(".award").css('display', 'none');
    $(".instrument").css('display', 'block');
    },
    'click .back-program':function(){
    Session.set('showAward',true);
    Session.set('showProgram',false);
    $(".program").css('display', 'none');
    $(".award").css('display', 'block');
    },
    'click .back-orchestra':function(){
    Session.set('showOrchestra',false);
    Session.set('showProgram',true);
    $(".orchestra").css('display', 'none');
    $(".program").css('display', 'block');
    },
    'submit form': function(){
      FlowRouter.go('/newaccomp');
    },
    'click .Instruments': function(){
        blockAllMusic()
        Session.set('showInstrument',true);
        $(".instrument").css('display', 'block');
    },
    'click .Awards': function(){
        blockAllMusic()
        Session.set('showAward',true);
        $(".award").css('display', 'block');
    },
    'click .Programs': function(){
        blockAllMusic()
        Session.set('showProgram',true);
        $(".program").css('display', 'block');
    },
    'click .Orchestras': function(){
        blockAllMusic()
        Session.set('showOrchestra',true);
        $(".orchestra").css('display', 'block');
    },
  });

  function blockAllMusic() {
    Session.set('showOrchestra',false);
    Session.set('showProgram',false);
    Session.set('showAward',false);
    Session.set('showInstrument',false);
    $(".program").css('display', 'none');
    $(".award").css('display', 'none');
    $(".orchestra").css('display', 'none');
    $(".instrument").css('display', 'none');
    }

// Template.upsertMusicProfileForm.events({
//   'click .next-instrument':function(){
//     Session.set('showAward',true);
//     Session.set('showInstrument',false);
//     $(".award").css('display', 'block');
//     $(".instrument").css('display', 'none');
//     $(".determinate").css('width', '50%');
//     },
//     'click .next-award':function(){
//     Session.set('showAward',false);
//     Session.set('showProgram',true);
//     $(".award").css('display', 'none');
//     $(".program").css('display', 'block');
//     $(".determinate").css('width', '75%');
//     },
//     'click .next-program':function(){
//     Session.set('showOrchestra',true);
//     Session.set('showProgram',false);
//     $(".program").css('display', 'none');
//     $(".orchestra").css('display', 'block');
//     $(".determinate").css('width', '100%');
//     },
//     'click .back-award':function(){
//     Session.set('showAward',false);
//     Session.set('showInstrument',true);
//     $(".award").css('display', 'none');
//     $(".instrument").css('display', 'block');
//     },
//     'click .back-program':function(){
//     Session.set('showAward',true);
//     Session.set('showProgram',false);
//     $(".program").css('display', 'none');
//     $(".award").css('display', 'block');
//     },
//     'click .back-orchestra':function(){
//     Session.set('showOrchestra',false);
//     Session.set('showProgram',true);
//     $(".orchestra").css('display', 'none');
//     $(".program").css('display', 'block');
//     },
//     'submit form': function(){
//       FlowRouter.go('/newaccomp');
//     }
//   });

Template.profileTemplate.events({
  'click .awardsAddButton':function(){
    $(".awardsAddForm").css('display', 'block');
    $(".awardsAddButton").css('display', 'none');
    },
    'click .programsAddButton':function(){
    $(".programsAddButton").css('display', 'none');
    $(".programsAddForm").css('display', 'block');
    },
    'click .orchestrasAddButton':function(){
    $(".orchestrasAddForm").css('display', 'block');
    $(".orchestrasAddButton").css('display', 'none');
    },
    'click .instrumentsAddButton':function(){
    $(".instrumentsAddForm").css('display', 'block');
    $(".instrumentsAddButton").css('display', 'none');
    },
    'click .cancelAward':function(){
    $(".awardsAddForm").css('display', 'none');
    $(".awardsAddButton").css('display', 'block');
    },
    'click .cancelProgram':function(){
    $(".programsAddForm").css('display', 'none');
    $(".programsAddButton").css('display', 'block');
    },
    'click .cancelOrchestra':function(){
    $(".orchestrasAddForm").css('display', 'none');
    $(".orchestrasAddButton").css('display', 'block');
    },
    'click .cancelInstrument':function(){
    $(".instrumentsAddForm").css('display', 'none');
    $(".instrumentsAddButton").css('display', 'block');
    }
  });

Template.accompanistProfileTemplate.events({
    'click .addRepButton':function(){
    $(".addRepForm").css('display', 'block');
    $(".addRepButton").css('display', 'none');
    },
    'click .cancel':function(){
    $(".addRepForm").css('display', 'none');
    $(".addRepButton").css('display', 'block');
    }
  });

Template.instruments.events({
  'click .btn':function(){
    // event.preventDefault();
    $(".instrumentsAddForm").css('display', 'none');
    $(".instrumentsAddButton").css('display', 'block');
    }
  });

Template.awards.events({
  'click .btn':function(){
    $(".awardsAddForm").css('display', 'none');
    $(".awardsAddButton").css('display', 'block');
    }
  });

Template.musicPrograms.events({
  'click .btn':function(){
    $(".programsAddForm").css('display', 'none');
    $(".programsAddButton").css('display', 'block');
    }
  });

Template.orchestras.events({
  'click .btn':function(){
    $(".orchestrasAddForm").css('display', 'none');
    $(".orchestrasAddButton").css('display', 'block');
    }
  });

Template.basicNewAccomp.events({
  'submit form': function(){
      FlowRouter.go('/newaccomp');
    }
  });

Template.upsertAccompanistForm.events({
  'click .next-repertoire':function(){
    Session.set('showCharge',true);
    Session.set('showRepertoire',false);
    $(".charge").css('display', 'block');
    $(".repertoire").css('display', 'none');
    $(".determinate").css('width', '12.5%');
    },
  'click .next-charge':function(){
    Session.set('showCharge',false);
    Session.set('showHours',true);
    $(".charge").css('display', 'none');
    $(".working_hours").css('display', 'block');
    $(".determinate").css('width', '25%');
    },
  'click .next-working_hours':function(){
    Session.set('showHours',false);
    Session.set('showDays',true);
      $(".working_hours").css('display', 'none');
    $(".working_days").css('display', 'block');
    $(".determinate").css('width', '37.5%');
    },
 'click .next-working_days':function(){
    Session.set('showDays',false);
    Session.set('showActive',true);
    $(".accompanist_active").css('display', 'block');
    $(".working_days").css('display', 'none');
    $(".determinate").css('width', '50%');
    },
  'click .next-accompanist_active':function(){
    Session.set('showActive',false);
    Session.set('showLocation',true);
    $(".accompanist_active").css('display', 'none');
    $(".session_location").css('display', 'block');
    $(".determinate").css('width', '85%');
    },
  'click .next-session_location':function(){
    Session.set('showLocation',false);
    Session.set('showMyLocation',true);
    $(".mylocation").css('display', 'block');
    $(".session_location").css('display', 'none');
    $(".determinate").css('width', '95%');
    },
  'click .next-mylocation':function(){
    Session.set('showLiner',true);
    Session.set('showMyLocation',false);
    $(".mylocation").css('display', 'none');
    $(".one_liner").css('display', 'block');
    $(".determinate").css('width', '100%');
    },
  'click .back-charge':function(){
    Session.set('showCharge',false);
    Session.set('showRepertoire',true);
    $(".charge").css('display', 'none');
    $(".repertoire").css('display', 'block');
    },
  'click .back-working_hours':function(){
    Session.set('showHours',false);
    Session.set('showCharge',true);
    $(".working_hours").css('display', 'none');
    $(".charge").css('display', 'block');
    },
  'click .back-working_days':function(){
    Session.set('showHours',true);
    Session.set('showDays',false);
    $(".working_hours").css('display', 'block');
    $(".working_days").css('display', 'none');
    },
  'click .back-accompanist_active':function(){
    Session.set('showActive',false);
    Session.set('showDays',true);
    $(".accompanist_active").css('display', 'none');
    $(".working_days").css('display', 'block');
    },
  'click .back-session_location':function(){
    Session.set('showLocation',false);
    Session.set('showActive',true);
    $(".accompanist_active").css('display', 'block');
    $(".session_location").css('display', 'none');
    },
  'click .back-mylocation':function(){
    Session.set('showMyLocation',false);
    Session.set('showLocation',true);
    $(".mylocation").css('display', 'none');
    $(".session_location").css('display', 'block');
    },
  'click .back-one_liner':function(){
    Session.set('showLiner',false);
    Session.set('showMyLocation',true);
    $(".one_liner").css('display', 'none');
    $(".mylocation").css('display', 'block');
    },
  'submit form': function(){
    FlowRouter.go('/newaccomp');
    },
    'click .Repertoire': function() {
      blockAllAccomp()
      Session.set('showRepertoire',true);
      $(".repertoire").css('display', 'block');

    },
    'click .Charge': function() {
      blockAllAccomp()
      Session.set('showCharge',true);
      $(".charge").css('display', 'block');

    },
    'click .Time': function() {
      blockAllAccomp()
      Session.set('showHours',true);
      $(".working_hours").css('display', 'block');

    },
    'click .Day': function() {
      blockAllAccomp()
      Session.set('showDays',true);
      $(".working_days").css('display', 'block');

    },
    'click .Activity': function() {
      blockAllAccomp()
      Session.set('showActive',true);
      $(".accompanist_active").css('display', 'block');

    },
    'click .Session': function() {
      blockAllAccomp()
      Session.set('showLocation',true);
      $(".session_location").css('display', 'block');

    },
    'click .Location': function() {
      blockAllAccomp()
      Session.set('showMyLocation',true);
      $(".mylocation").css('display', 'block');

    },
    'click .Description': function() {
      blockAllAccomp()
      Session.set('showLiner',true);
      $(".one_liner").css('display', 'block');
    }
  });

function blockAllAccomp() {
  Session.set('showLiner',false);
  Session.set('showMyLocation',false);
  Session.set('showLocation',false);
  Session.set('showActive',false);
  Session.set('showHours',false);
  Session.set('showDays',false);
  Session.set('showCharge',false);
  Session.set('showHours',false);
  Session.set('showRepertoire',false);
  $(".one_liner").css('display', 'none');
  $(".mylocation").css('display', 'none');
  $(".accompanist_active").css('display', 'none');
  $(".session_location").css('display', 'none');
  $(".working_days").css('display', 'none');
  $(".working_hours").css('display', 'none');
  $(".charge").css('display', 'none');
  $(".repertoire").css('display', 'none');
}

// Modal Review Booking Tests

Template.ReviewLeftFormPanel.helpers({
  getNextButtonClass(){
    if(Template.instance().currentStep.get() == "PaymentReview"){
      return "btn wave-light finalize right"
    }else{
      return "btn wave-light next-panel right";
    }
  },

  currentStep(){
    return Template.instance().currentStep.get();
  }
});

Template.ReviewLeftFormPanel.onCreated(function() {
  this.currentStep = new ReactiveVar("SessionReview")
});

Template.ReviewLeftFormPanel.events({
  'click .next-panel'(event, template){

    var currentTransaction = FlowRouter.getQueryParam("booking")
    // FIX Security FLAW (CHANGE) -> use something other than clientside user id
    currentTransaction.musician = Meteor.userId();
    currentTransaction.performanceLocation = AutoForm.getFieldValue('performanceLocation', 'UpdateSessionCount')
    currentTransaction.sessionCount = AutoForm.getFieldValue('sessionCount', 'UpdateSessionCount')

    var validationContext = TransactionSchema.newContext();
    TransactionSchema.clean(currentTransaction);

    if( validationContext.validate(currentTransaction) &&
        AutoForm.validateField('InsertFirstSession', 'suggestedHours') &&
        AutoForm.validateField('InsertFirstSession', 'date') &&
        AutoForm.validateField('InsertFirstSession', 'location'))
    {

      var queryParam = {booking: currentTransaction, session: AutoForm.getFormValues('InsertFirstSession').insertDoc};
      FlowRouter.setQueryParams(queryParam);

      let panels= ["SessionReview", "PaymentReview"]
      var currentStepIndex = panels.indexOf(template.currentStep.get());
      console.log(currentStepIndex)
      if(currentStepIndex > -1){
        let nextStepIndex = currentStepIndex + 1
        if(nextStepIndex < panels.length){
          console.log("Go to next page")
          template.currentStep.set(panels[nextStepIndex]);
        }
      }
    }
  },

  'click .finalize' (event, template) {
    var finalTransaction = FlowRouter.getQueryParam("booking");
    var firstSession = FlowRouter.getQueryParam("session");

    let insertedTransactionId = Transactions.insert(finalTransaction);

    if(insertedTransactionId){
      firstSession.transaction = insertedTransactionId;
      firstSession.musician = finalTransaction.musician;
      firstSession.accompanist = finalTransaction.accompanist

      if(Sessions.insert(firstSession)){
        console.log('Successfully Booked');
        FlowRouter.go('/success/:transactionId', {transactionId: insertedTransactionId});
      };
    }
  }
});

Template.request.helpers({
  profilePicUrlById(userId){
    var picDoc = UserImages.findOne({userId: userId, picType: "profile"})
    if(picDoc){
      return picDoc
    }
  }
});

Template.bookAccompanistForm.events({
  'click .book-accompanist' (event, instance) {
    var userId = Meteor.userId();
    if (userId){
      if(Roles.userIsInRole(userId, 'bookAccompanist')){
        //$('#bookAccompanistForm').submit()
        if(AutoForm.validateForm("bookAccompanistForm")){
          let currentTransaction = AutoForm.getFormValues("bookAccompanistForm").insertDoc
          console.log(currentTransaction);
          let currentProfileId = FlowRouter.getParam("profileId");
          if (currentProfileId){
            FlowRouter.go('/bookAccompanist/:profileId',  {profileId: currentProfileId}, {booking: currentTransaction} );
          }else{
            console.log("Wrong Page; Please book an accompanist on an accompanist profile page")
          }
        }else{
          Bert.alert( 'Please check the fields again!', 'danger');
        }

      }else{
        Bert.alert( 'You must first fill in music profile before booking!', 'danger');
      }
    }else{
    }
  }
});

Template.registerHelper('myProfilePic', function(){
  var urlDoc = UserImages.findOne({userId: Meteor.userId()}, {url: 1});
  if (urlDoc){
    return urlDoc.url
  }
})

Template.registerHelper('paymentInfo', function(accompanistId, sessionCount){
  var accompanistDoc = AccompanistProfiles.findOne({Id : accompanistId});
  // CHANGE TO CALCULATE IN BACKEND
  if(accompanistDoc){
    return { hourlyCharge: accompanistDoc.charge, sessionCount: sessionCount, total: sessionCount * accompanistDoc.charge}
  }

})

Template.accountTemplate.helpers({
  currentProfilePic(){
    var profileDoc = BasicProfiles.findOne({userId: FlowRouter.getParam("profileId")}, {profilePic : 1});
    if (profileDoc){
      var picId = profileDoc.profilePic;
      if(picId){
        var imageDoc = CropUploader.images.findOne(picId);
        if (imageDoc.derivatives){
          console.log(imageDoc.derivatives.thumbnail)
          return imageDoc.derivatives.thumbnail
        }
      }

    }
  }
})

Template.BookingReviewLeftPanel.onCreated(function () {
  this.currentStep = new ReactiveVar("repertoireSection");
  this.checkboxState = new ReactiveVar(false);
});

Template.BookingReviewLeftPanel.helpers({
  currentStep() {
    return Template.instance().currentStep.get()
  },
  isChecked() {
    if (Template.instance().checkboxState.get()){
      return "checked";
    }else{
      return "";
    }
  },
  getButtonText(){
    if(Template.instance().currentStep.get() == "paymentSection"){
      return "Confirm Booking"
    }
    return "Next"
  },
  getNextButtonClass() {
    var atts = "btn col s12"
    if(Template.instance().currentStep.get() == "paymentSection"){
      atts =  (atts + " " + "final-confirm")
    }else{
      atts =  (atts + " " + "next-panel")
    }

    if(Template.instance().checkboxState.get()){
      return atts
    }else{
      return (atts + " " + "disabled")
    }

  },
  currentCheckBoxText(transaction) {
    switch (Template.instance().currentStep.get()) {
      case "repertoireSection":
          return "I confirm that I can accompany the musician on the repertoire above"
          break;
      case "sessionsSection":
          var str = "I confirm " + transaction.sessionCount + " sessions between " + formatDuration(transaction.startDate, transaction.endDate);
          return str;
          break;
      case "paymentSection":
          return "Confirm the total payment"
          break;
    }
  }
});

Template.bookingSummary.helpers({
  currentSessionDoc () {
    var sessionDoc = FlowRouter.getQueryParam('doc');
    if(sessionDoc){
      console.log(sessionDoc.$set.startTime)
      return sessionDoc
    }
  },

  firstSessionTime (){
    var sessionDoc = FlowRouter.getQueryParam('doc');
    if(sessionDoc){
      return sessionDoc.$set.startTime

    }
  },
  firstSessionDate () {
    var sessionDoc = Sessions.findOne({transaction: FlowRouter.getParam("transactionId"), firstSession: {$exists: true}})
    if(sessionDoc){
      return sessionDoc.date
    }
  }
});

Template.BookingReviewLeftPanel.events({
  'change .checkbox-confirm input' (event, instance) {
    instance.checkboxState.set(event.target.checked);
  },
  'click .next-panel' (event, instance) {
    if(!$(event.target).hasClass("disabled")){
      var validTransition = true;
      if(instance.currentStep.get() == "sessionsSection"){
        if (AutoForm.validateField('upsertSessionResponse', 'startTime')){
          var doc = AutoForm.getFormValues('upsertSessionResponse');
          if(doc){
            var currentSession = Sessions.findOne({transaction: FlowRouter.getParam("transactionId")}, {_id:1} );
            var selector = {_id: currentSession._id};
            FlowRouter.setQueryParams({doc : doc.updateDoc, selector : selector});
          };


        }else{
          validTransition = false;
        }
      }
      if(validTransition){
        let panels= ["repertoireSection", "sessionsSection", "paymentSection"]
        var currentStepIndex = panels.indexOf(instance.currentStep.get());
        if(currentStepIndex > -1){
          let nextStepIndex = currentStepIndex + 1
          if(nextStepIndex < panels.length){
            console.log("Go to next page")
            instance.checkboxState.set(false);
            instance.currentStep.set(panels[nextStepIndex]);
          }
        }
      }
    }

  },
  'click .final-confirm' (event, instance) {

    Meteor.call('confirmBookingRequest', FlowRouter.getParam("transactionId"), FlowRouter.getQueryParam("selector"), FlowRouter.getQueryParam("doc"));


  },

});

// Modal Review Booking Tests

Template.paymentSection.helpers({
  getHourlyCharge(musician) {
    var x = AccompanistProfiles.findOne({Id: musician}, {charge: 1})
    if (x){
      return x.charge
    }
  },
  getTotalEstimated(musician, hours) {
    var x = AccompanistProfiles.findOne({Id: musician}, {charge: 1})
    if (x){
      return hours * x.charge
    }
  }
});

Template.request.events({
  'click .review-booking' (event) {
    Session.set('sessionTransaction', this._id);
  }
});

Template.registerHelper('convertMilitaryTime', function (time){
  return militaryTimeConvert(time)
})

var militaryTimeConvert = function (time){
  if (time < 12){
    return time + "AM"
  }else if (time == 12){
    return time + "PM"

  }else if (time < 24){
    return (time%12) + "PM"
  }
}

Template.upsertSessionResponse.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  // FIXTHIS check if there are more than one sessions/transaction
  currentDoc: function(){
    var transactionId = FlowRouter.getParam("transactionId")
    var sessionDoc = Sessions.findOne({transaction: transactionId, firstSession: {$exists: true}})
    if(sessionDoc){
      return sessionDoc
    }
  },

  optionArray: function() {
    // Get options from sessions
    // Check for efficiency
    var currentSession = Sessions.findOne({transaction: FlowRouter.getParam("transactionId"), firstSession: {$exists: true}});
    if(currentSession){
      var optionsArray = currentSession.suggestedHours.map(function(time){
        return {label:militaryTimeConvert(time), value:time};
      });
      return optionsArray
    }
  }
});


// Uploader Tests

Template.uploader.events({
  'change input[type="file"]' ( event, template ) {
    Modules.client.uploadToAmazonS3( { event: event, template: template, type:"profile" } );
  }
});

Template.files.onCreated( () => Template.instance().subscribe( 'files' ) );

Template.files.helpers({
  files() {
    var files = UserImages.find({userId: Meteor.userId()}, { sort: { "added": -1 } } );
    if ( files ) {
      return files;
    }
  },

  profileFile() {
    var file = UserImages.findOne({userId: Meteor.userId(), picType: "profile"});
    if(file){
      return file
    }
  }
});




Template.file.helpers({
  isImage( url ) {
    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
  }
});

Template.file.events({
  'click .delete_button' ( event, template ) {
    Meteor.call('deleteImageFromS3',event.target.value);
  }
});

Template.publishAccompanist.events({
  'click .btn' ( event, template ) {
    FlowRouter.go('/profile/:profileId',  {profileId: Meteor.userId()} );

  }
});

//
// Template.uploader.events({
//   'dragover' : function (event, template){
//     event.preventDefault(fupsert);
//     console.log("entered")
//     $('.card-panel').addClass('green lighten-1 white-text');
//   },
//
//   'dragleave' : function (event, template){
//     event.preventDefault();
//     console.log("left")
//     $('.card-panel').addClass('white black-text').removeClass('green lighten-1 white-text');
//   },
//
//   'drop' : function (event, template){
//     console.log("dropped")
//     $('.card-panel').addClass('white black-text').removeClass('green lighten-1 white-text');
//   },
// });

// Template Inheritance


// Autoform Settings

AutoForm.setDefaultTemplate('materialize');

// Accounts

AccountsTemplates.configure({
  defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
  defaultLayout: 'MainLayout',
  defaultLayoutRegions: {
      nav: 'Navbar'
  },
  defaultContentRegion: 'main',
  confirmPassword: false,

  texts: {
    title: {
      signIn: "Log In",
      signUp: "Sign Up",
    }
  },

  onSubmitHook: function(error, state){
    if (!error){
      if (state === "signIn"){
        console.log("Signed In")
        $('#loginModal').closeModal();
      }
      if (state === "signUp"){
        console.log("Signed Up")
        $('#signUpModal').closeModal();
      }
    }
  }
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

// Javascript Component Initialization

Template.Navbar.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $(".dropdown-button").dropdown();
  });
});

Template.navbarAccount.onRendered(function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: true, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on click
    alignment: "right", // Aligns dropdown to left or right edge (works with constrain_width)
    gutter: 0, // Spacing from edge
    belowOrigin: true,
    });
  });
});

Template.modalLogin.onRendered(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-login-trigger').leanModal({
      dismissible: true,
      complete: function() {  AccountsTemplates.avoidRedirect = false; }
    });
});

Template.modalSignUp.onRendered(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-signup-trigger').leanModal({
      dismissible: true,
      complete: function() {   AccountsTemplates.avoidRedirect = false; }
    });
});

Template.becomeAnAccompanist.onRendered(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-login-trigger').leanModal({
      dismissible: true,
      complete: function() {   AccountsTemplates.avoidRedirect = false; }
    });
});

Template.ProfileLayout.onRendered(function () {
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

});

Template.CollapsibleStructure.onRendered(function () {
  $('.collapsible').collapsible({
    accordion : false
  });
});

Template.TabStructure.onRendered(function () {
  $('ul.tabs').tabs();
});

Template.NewAccompLayout.onRendered(function () {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
});

Template.ProfileLayout.onRendered(function(){
  // // parallax

  // resize card with card-reveal
  $(document).ready(function() {

     $(".parallax").parallax();
    
    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'block'}); }
            }
          );

          console.log("insid height")
          console.log($(this).data('height'))
          // console.log("content hieght")
          // console.log($(this).find('.card-content'))
          // console.log($(this).find('.card-content')[0]['clientHeight'])
          // height here is always the old height, need to wait for the new height and then plug it in!!!!!
            $(this).velocity({height:$(this).data('height')},{duration:225});
        }
        else if ($(e.target).is($(' .activator')) ||
                 $(e.target).is($(' .activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).data('height',$(this).css('height')).find('.card-reveal').css({ display: 'block',height:'auto'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
              $(this).velocity({height:$(this).find('.card-reveal').height()+40},{duration:300});
        }
      }
      $('.card-reveal').closest('.card').css('overflow', 'hidden');
    });

  });
});

Template.search.onRendered(function () {
  // Enter acts as tabs till time to submit form
  $(document).ready(function(){
    $('#searchform input').keydown(function(e){
      if(e.keyCode==13){
        if($(':input:eq(' + ($(':input').index(this) + 1) + ')').attr('type')=='submit'){
          return true;
        }
        $(':input:eq(' + ($(':input').index(this) + 1) + ')').focus();
        return false;
      }
    });
  });

  // Materialize date picker desing
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});

// On creation

// ==Global Template Helpers==

Template.registerHelper('navbarFields', () => {
  // Logged In
  if (Meteor.user()){
    // Accompanist
    if (Roles.userIsInRole(Meteor.userId(), 'accompanist')){
      return ['accompanistDashboard', 'bookings', 'navbarAccount']
    }
    // // Not Accompanist
    // if (MakingNewAccomp (FlowRouter.current().path)) {
    //   // if not accomp and making accomp page
    //   return ['bookings', 'navbarAccount']
    // } else {
      // if not an accomp and not in newaccomp page
      return ['becomeAnAccompanist','bookings', 'navbarAccount' ]
    // }
  // Not Logged In
  }else{
    return ['becomeAnAccompanist','modalSignUp', 'modalLogin']
  }
});

// function MakingNewAccomp(path){
//       if (path == "/newaccomp" || path == "/newaccomp/step1" || path == "/newaccomp/step2" || path == "/newaccomp/step3") {
//     return true
//   } else {
//     return false
//   }
//     }


// Get Current User's Account
Template.registerHelper('myBasicProfile', () => {
  return BasicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current User's Music Profile
Template.registerHelper('myMusicProfile', () => {
  return MusicProfiles.findOne({userId: Meteor.userId()});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('myAccompanistProfile', () => {
  return AccompanistProfiles.findOne({Id: Meteor.userId()});
});

Template.registerHelper('routeBasicProfile', () => {
  return BasicProfiles.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Music Profile
Template.registerHelper('routeMusicProfile', () => {
  return MusicProfiles.findOne({userId: FlowRouter.getParam("profileId")});
});

// Get Current Route's Accompanist Profile
Template.registerHelper('routeAccompanistProfile', () => {
  return AccompanistProfiles.findOne({Id: FlowRouter.getParam("profileId")});
});

Template.registerHelper('routeAccompanist', () => {
  return FlowRouter.getParam("profileId");
});

Template.registerHelper('sentBookingRequests', () =>{
  return Transactions.find({musician: Meteor.userId()}).fetch()
});

Template.registerHelper('receivedBookingRequests', (arg) =>{
  var splitRequests = {pending:[], ongoing:[], completed:[], cancelled:[]}
  Transactions.find({accompanist: Meteor.userId()}).forEach(function(doc){
    if(doc.status == "Pending"){
      splitRequests.pending.push(doc);
    }else if(doc.status == "Ongoing"){
      splitRequests.ongoing.push(doc);
    }else if(doc.status == "Completed"){
      splitRequests.completed.push(doc);
    }else{
      splitRequests.cancelled.push(doc);
    }
  });
  return splitRequests
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMM DD, YYYY');
});

Template.registerHelper('formatDateWithoutYear', function(date) {
  return moment(date).format('MMM DD');
});


Template.registerHelper('formatBirthDate', function(date) {
  return moment(date).format('MMM, DD, YYYY');
});

// Slice day string and capitalize it's first letter
// All fixed in schema, only need the slicing functionality
Template.registerHelper('formatDay', function(day) {
  var Day = day.substr(0,3);
  var new_day = Day.charAt(0).toUpperCase() + Day.slice(1);
  return new_day;
});

Template.registerHelper('formatDuration', function(date1, date2) {
  var start =  moment(date1);
  var end = moment(date2);
  if (start.year() == end.year()){
    // Year is the same
    if(start.month() == end.month()){
      return start.format('MMM DD - ') + end.format('DD, YYYY')
    }
      return start.format('MMM DD - ') + end.format('MMM DD, YYYY')
  }
  return start.format('MMM DD, YYYY - ') + end.format('MMM DD, YYYY')
});

Template.registerHelper('basicProfileById', (id) =>{
  return BasicProfiles.findOne({userId: id})
});

Template.registerHelper('musicProfileById', (id) =>{
  return MusicProfiles.findOne({userId: id})
});

Template.registerHelper('accompanistProfileById', (id) =>{
  return AccompanistProfiles.findOne({Id: id})
});

Template.registerHelper('routeTransaction', () =>{
  if (FlowRouter.getParam("transactionId")){
      return Transactions.findOne({_id: FlowRouter.getParam("transactionId")})
  }
  if (FlowRouter.getQueryParam("transaction")){
    return Transactions.findOne({_id: FlowRouter.getQueryParam("transaction")})
  }

});

Template.registerHelper('scheduledSessions', () =>{
  if (FlowRouter.getParam("transactionId")){
    var x = Sessions.find({transaction: FlowRouter.getParam("transactionId"), $or: [{accompanist: Meteor.userId()}, {musician: Meteor.userId()}]}).fetch()
    console.log(x);
    return x
  }
  if (FlowRouter.getQueryParam("transaction")){
    var x = Sessions.find({transaction: FlowRouter.getQueryParam("transaction"), $or: [{accompanist: Meteor.userId()}, {musician: Meteor.userId()}]}).fetch()
    console.log(x);
    return x
  }
});

Template.registerHelper('isOwnProfile', () => {
  return FlowRouter.getParam("profileId") == Meteor.userId();
});

Template.registerHelper('false_and',function(a,b){
  return (a == false) && (b == false);
});

Template.registerHelper('print',function(a){
  console.log("Rep in invalid?")
  console.log(a)
  return a;
});


Template.registerHelper('and',function(a,b){
  console.log(a)
  console.log(b)
  console.log(a && b)
  return a && b ;
});

Template.registerHelper('or',function(a,b){
  return a || b;
});

Template.registerHelper('basicProfileExists', () => {
  return undefined !== BasicProfiles.findOne({userId: Meteor.userId()});
});

Template.registerHelper('musicProfileExists', () => {
  return undefined !== MusicProfiles.findOne({userId: Meteor.userId()});
});

Template.registerHelper('accompanistProfileExists', () => {
  return undefined !== AccompanistProfiles.findOne({Id: Meteor.userId()});
});

Template.registerHelper('isAccompanist', () => {
  var x = AccompanistProfiles.findOne({Id: FlowRouter.getParam("profileId")})
  return x !== null;
});

Template.registerHelper('userIsAccompanist', () => {
  var x = AccompanistProfiles.findOne({Id: Meteor.userId()})
  return x !== undefined;
});

Template.registerHelper('validId', () =>{
  if (Meteor.users.findOne({_id : FlowRouter.getParam("profileId")})){
    return true
  }else{
    return false
  }
});

Template.registerHelper( 'userId', () => {
    event.preventDefault();
    return Meteor.userId();
});


// Old Global Template Helpers


Template.registerHelper('defaultTransaction', () => {
  return {musician: Meteor.userId(),
          accompanist: FlowRouter.getParam("profileId"),
          status: 'Pending'}
});



Template.registerHelper( 'getProfileRoute', (id = Meteor.userId()) =>{
  return "/profile/"+id
});

Template.registerHelper( 'fromProfile', (location) =>{
  // console.log(location)
  if (location == "myProfile") {
    return true
  } else {
  return false
}
});

Template.registerHelper( 'fromBooking', (page) =>{
  if (page == "booking") {
    return true
  } else {
  return false
}
});

Template.registerHelper( 'fromBookingTime', (page) =>{
  if (page == "sessionTime") {
    return true
  } else {
  return false
}
});

Template.registerHelper( 'getBookingRoute', (bookingId) =>{
  return "/bookingRequest/"+bookingId
});

Template.registerHelper( 'transactionById', (id = FlowRouter.getParam("transactionId")) => {
    event.preventDefault();
    // Only return if the user is the accompanist/musician listed
    return Transactions.findOne({_id:id, $or: [{accompanist: Meteor.userId()}, {musician: Meteor.userId()}]})
});

Template.registerHelper( 'musicCompetitionsDoc', () => {
    event.preventDefault();
    // array =  MusicCompetitions.find().fetch();
    return [{label: "First Manhattan International Music Competition", value: "First Manhattan International Music Competition"}]
});

// Local Template On Created

Template.upsertMusicProfileForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertBasicProfileForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.upsertAccompanistForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.EditingForm.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

Template.results.onCreated(function() {
  this.currentState = new ReactiveVar('result-card-left')
});

Template.profileTemplate
.onCreated(function() {
  this.formType = new ReactiveVar('insert')
});

// Local Template Helpers

Template.EditingForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentProfile: function () {
    var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId()});
    if (currentProfile) {
      Template.instance().formType.set('update');
      return currentProfile
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  },
  instrumentList: function () {
    return ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
    "Zither"].map(function(obj){return {label: obj, value:obj}})
  }
});

Template.accompanistProfileTemplate.helpers ({
  accompColor: function (active) {
    if (active == true) {
      return "green-card"
    } else {
      return "red-card"
    }
  },
  notEmpty: function (array) {
    if (array == null) {
      return false
    } else {
      return true
    }
  },
   currentAccompanistProfiles: function () {
    var currentAccompanistProfiles = AccompanistProfiles.findOne({ Id: Meteor.userId()});
    if (currentAccompanistProfiles) {
      return currentAccompanistProfiles;
    }
  }
});

Template.upsertMusicProfileForm.onRendered(function () {
  Session.set('showInstrument',true);
  Session.set('showAward',false);
  Session.set('showProgram',false);
  Session.set('showOrchestra',false);

  $('ul.tabs').tabs();

  });

Template.upsertMusicProfileForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentProfile: function () {
    var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId()});
    if (currentProfile) {
      Template.instance().formType.set('update');
      return currentProfile
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  },
  shouldShow: function(field) {
    switch (field) {
      case "instruments":
          var status = Session.get('showInstrument')
          return status;
          break;
      case "awards":
          var status = Session.get('showAward')
          return status;
          break;
      case "programs":
          var status = Session.get('showProgram')
          return status;
          break;
      case "orchestras":
          var status = Session.get('showOrchestra')
          return status;
          break;
    }
  },
  button: function() {
    var inst = Session.get('showInstrument')
    var award = Session.get('showAward')
    var prog = Session.get('showProgram')
    var orch = Session.get('showOrchestra')

    if (inst) {
      return "instrument"
    } else if (award) {
      return "award"
    } else if (prog) {
      return "program"
    } else if (orch) {
      return "orchestra"
    }
  },
  advice: function() {
    var inst = Session.get('showInstrument')
    var award = Session.get('showAward')
    var prog = Session.get('showProgram')
    var orch = Session.get('showOrchestra')

    if (inst) {
      return {icon: 'brush', text: 'Filling in the the instruments you are most comfortable with and have the most experience with better matches you to accompanists who have played repertoire according to your instrument'}
    } else if (award) {
      return {icon: 'verified_user', text: 'Fill in the Honors & Awards section of your profile with your most memorable and prestigious awards. This will give musicians a good idea of your abilities as a musician and accompanist.'}
    } else if (prog) {
      return {icon: 'music_note', text: 'Listing your participation in music festivals and programs (Aspen, Perlman Music Program, etc) allows you to connect with musicians even before you start working together! Musicians might be more inclined to work with pianists who have a similar educational background.'}
    } else if (orch) {
      return {icon: 'group_work', text: 'orchestras Advice box!!'}
    }

  },
  question: function() {
      var inst = Session.get('showInstrument')
      var award = Session.get('showAward')
      var prog = Session.get('showProgram')
      var orch = Session.get('showOrchestra')

      if (inst) {
        return "What Instruments have you mastered?"
      } else if (award) {
        return "What Music Awards have you won?"
      } else if (prog) {
        return "Which music programs have you participated in?"
      } else if (orch) {
        return "Have you played in any orchestra's?"
      }

  },
  tabs: function() {
    var tabsList = [
    {title: "Instruments"},
    {title: "Awards"},
    {title: "Programs"},
    {title: "Orchestras"}]

    return tabsList
  }
});

Template.instruments.helpers ({
  instrumentList: function () {
    return ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
    "Zither"].map(function(obj){return {label: obj, value:obj}})
  }
});

Template.advancedSearch.helpers ({
  // currentSearch: function () {
  //   var currentSearch = SearchData.findOne({userId: Meteor.userId()}, {sort: {timesStamp: -1, limit: 1}});
  //   console.log(currentSearch)
  //   return currentSearch;
  // }
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

Template.profileTemplate.helpers({
  arrayProfileCards: function(instruments, awards, programs, orchestras) {
    var mydata =[
      {icon: 'brush', mainTitle: 'Instruments Mastered', dynamicDataTemplate: 'InstList', dynamicData: instruments, arrayField: "instruments", add_title: "Instrument", addButtonClass: "instrumentsAddButton", addArrayClass: "instrumentsAddForm", close: "cancelInstrument"},
      {icon: 'verified_user', mainTitle: 'Honors & Awards', dynamicDataTemplate: 'awardsList', dynamicData: awards, arrayField: "awards", add_title: "Award", addButtonClass: "awardsAddButton", addArrayClass: "awardsAddForm", close: "cancelAward"},
      {icon: 'music_note', mainTitle: 'Music Programs', dynamicDataTemplate: 'programsList', dynamicData: programs, arrayField: "musicPrograms", add_title: "Music Program", addButtonClass: "programsAddButton", addArrayClass: "programsAddForm", close: "cancelProgram"},
      {icon: 'group_work', mainTitle: 'Orchestras Participated in', dynamicDataTemplate: 'orchestrasList', dynamicData: orchestras, arrayField: "orchestras", add_title: "Orchestra", addButtonClass: "orchestrasAddButton", addArrayClass: "orchestrasAddForm", close: "cancelOrchestra"}
    ]
    return mydata;
  },
  currentProfile: function () {
    var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId()});
      if (currentProfile) {
      Template.instance().formType.set('update');
      return currentProfile;
    }
  },
  // potential bug = when create something then delete all objects it will be [] not null (i think so)
  notEmpty: function (array) {
    if (array == null) {
      return false
    } else {
      return true
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  }
});

Template.afArrayField_newAccompCustomArrayField.helpers({
    icon: function(name) {
      switch(name){
          case 'awards':   return "verified_user";
          case 'musicPrograms': return "music_note";
          case 'orchestras':    return "group_work";
          case 'repertoire':    return "group_work";
          case 'instruments':    return "brush";
      }
    },
    mainTitle: function(name) {
      switch(name){
          case 'awards':   return "Awards & Honors";
          case 'musicPrograms': return "Music Programs ";
          case 'orchestras':    return "Orchestras Participated in";
          case 'repertoire':    return "Repertoire";
          case 'instruments':    return "Instruments Mastered";
      }
    }
    ,
    add_title: function(name) {
        switch(name){
            case 'awards':   return "Award";
            case 'musicPrograms': return "Music Program";
            case 'orchestras':    return "Orchestra";
            case 'repertoire':    return "Repertoire";
            case 'suggestedTimes':    return "Time";
            case 'instruments':    return "Instrument";
        }
    }
});

Template.afArrayField_editProfileCustomArrayField.helpers({
    icon: function(name) {
      switch(name){
          case 'awards':   return "verified_user";
          case 'musicPrograms': return "music_note";
          case 'orchestras':    return "group_work";
          case 'instruments':    return "brush";
          case 'repertoire': return "clear_all"
      }
    },
    mainTitle: function(name) {
      switch(name){
          case 'awards':   return "Awards & Honors";
          case 'musicPrograms': return "Music Programs";
          case 'orchestras':    return "Orchestras Participated in";
          case 'instruments':    return "Instruments Mastered";
          case 'repertoire': return "Repertoire"
      }
    }
});

// deletes null values in arrays (hack fix, change if autoform gets updated and solves this problem)
AutoForm.addHooks(null, {
  before: {
    update: function(doc) {
      _.each(doc.$set, function(value, setter) {
        if (_.isArray(value)) {
          var newValue = _.compact(value);
          doc.$set[setter] = newValue;
        }
      });
      return doc;
    }
  }
});


// Template.NewAccompLayout.onRendered(function () {

//     $('#name, #phone, #birth, #affiliation').bind('keyup', function() {
//     if(allFilled()) $('#basicProfile').removeAttr('disabled');

// });
// function allFilled() {
//     var filled = true;
//     $('body input').each(function() {
//         if($(this).val() == '') filled = false;
//     });
//     return filled;
// }

// });

Template.upsertBasicProfileForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentBasicProfile: function () {
    var currentAccount = BasicProfiles.findOne({ userId: Meteor.userId()});
    if (currentAccount) {
      Template.instance().formType.set('update');
      return currentAccount;
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  },
  basicNotValid: function () {

    var name = AutoForm.getFieldValue('name', ['upsertBasicProfileForm']);
    var phone = AutoForm.getFieldValue('phone', ['upsertBasicProfileForm']);
    var birth = AutoForm.getFieldValue('birthDate', ['upsertBasicProfileForm']);
    var affili = AutoForm.getFieldValue('affiliation', ['upsertBasicProfileForm']);


    if (
        name == undefined ||
        phone == undefined ||
        birth == undefined ||
        affili == undefined
        ){
          return false
        } else {
          return true
        }
  }
});

Template.upsertAccompanistForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentAccompanistProfiles: function () {
    var currentAccompanistProfiles = AccompanistProfiles.findOne({ Id: Meteor.userId()});
    if (currentAccompanistProfiles) {
      Template.instance().formType.set('update');
      return currentAccompanistProfiles;
    }
  },
  formType: function () {
    var formType = Template.instance().formType.get();
    return formType;
  },
  shouldShow: function(field) {
    switch (field) {
      case "repertoire":
          var status = Session.get('showRepertoire')
          return status;
          break;
      case "charge":
          var status = Session.get('showCharge')
          return status;
          break;
      case "working_hours":
          var status = Session.get('showHours')
          return status;
          break;
      case "working_days":
          var status = Session.get('showDays')
          return status;
          break;
      case "accompanist_active":
          var status = Session.get('showActive')
          return status;
          break;
      case "session_location":
          var status = Session.get('showLocation')
          return status;
          break;
      case "mylocation":
          var status = Session.get('showMyLocation')
          return status;
          break;
      case "one_liner":
          var status = Session.get('showLiner')
          return status;
          break;
    }
  },
  name: function() {
    var rep = Session.get('showRepertoire')
    var charge = Session.get('showCharge')
    var hours = Session.get('showHours')
    var days = Session.get('showDays')
    var active = Session.get('showActive')
    var loc = Session.get('showLocation')
    var myloc = Session.get('showMyLocation')
    var liner = Session.get('showLiner')

    if (rep) {
      return "repertoire"
    } else if (charge) {
      return "charge"
    } else if (hours) {
      return "working_hours"
    } else if (days) {
      return "working_days"
    }else if (active) {
      return "accompanist_active"
    } else if (loc) {
      return "session_location"
    } else if (myloc) {
      return "mylocation"
    }else if (liner) {
      return "one_liner"
    }
  },
   advice: function() {
    var rep = Session.get('showRepertoire')
    var charge = Session.get('showCharge')
    var hours = Session.get('showHours')
    var days = Session.get('showDays')
    var active = Session.get('showActive')
    var loc = Session.get('showLocation')
    var myloc = Session.get('showMyLocation')
    var liner = Session.get('showLiner')

    if (rep) {
      return {icon: 'library_books', text: 'Entering in the repertoire you have the most experience playing for any instrument increases your rating. Specifically, if a musician is looking to rehearse a specific work and you have experience playing it, the musician will be much more likely to work with you than accompanists who have less experience.'}
    } else if (charge) {
      return {icon: 'attach_money', text: 'Setting lower prices ($20 or $40/hr) attracts a greater number of musicians looking for an affordable, high-quality accompanist.'}
    } else if (hours) {
      return {icon: 'access_time', text: 'Setting blocks of time in which you are available during the week allows musicians to pick and choose hours in which they are free to rehearse. You’ll attract more booking requests and make more money!'}
    } else if (days) {
      return {icon: 'today', text: 'Fill in what days you available during the week so that you’ll only get booking requests for days that work for you! '}
    }else if (active) {
      return {icon: 'accessibility', text: 'When you are “active”, you’ll always receive booking requests and will show up in the search results page. Not being active will prevent musicians from finding and requesting you. '}
    } else if (loc) {
      return {icon: 'location_city', text: 'Setting a neutral location makes it easier for musicians to concentrate on practicing their pieces instead of worrying about where to find a room and piano. '}
    } else if (myloc) {
      return {icon: 'location_on', text: 'If you own a piano, your location is another option for you to rehearse with a musician! It may be more convenient for musicians to commute to your personal location.  '}
    }else if (liner) {
      return {icon: 'person', text: 'Put down a quote or idea that you truly feel passionate about! Doing so, will give musicians an idea of your expectations as a fellow artist. It is an easy way to introduce yourself to potential clients! '}
    }
  },
  question: function() {
    var rep = Session.get('showRepertoire')
    var charge = Session.get('showCharge')
    var hours = Session.get('showHours')
    var days = Session.get('showDays')
    var active = Session.get('showActive')
    var loc = Session.get('showLocation')
    var myloc = Session.get('showMyLocation')
    var liner = Session.get('showLiner')

    if (rep) {
      return "What is some repertoire you feel comfortable playing?"
    } else if (charge) {
      return "How much do you want to charge for an hour?"
    } else if (hours) {
      return "What time do you prefer working at?"
    } else if (days) {
      return "What days do you prefer working on?"
    }else if (active) {
      return "Do you want to start accompanying asap?"
    } else if (loc) {
      return "Where do you want to accompany?"
    } else if (myloc) {
      return "Where do you live?"
    }else if (liner) {
      return "Caption yourself in line!"
    }
  },
  AccompNotValid: function (field) {
    var x = AutoForm.getFieldValue(field, ['upsertAccompanistForm']);
    // var y = AutoForm.getFieldValue("repertoire", ['upsertAccompanistForm']);
  console.log(x)
    if ( x == undefined ){
      return true
    } else {
      return false
    }
  },
   tabs: function() {
    var tabsList = [
    {title: "Repertoire"},
    {title: "Charge"},
    {title: "Time"},
    {title: "Day"},
    {title: "Activity"},
    {title: "Session"},
    {title: "Location"},
    {title: "Description"}]

    return tabsList
  }
});

Template.upsertAccompanistForm.onRendered(function () {
  Session.set('showRepertoire',true);
  Session.set('showCharge',false);
  Session.set('showHours',false);
  Session.set('showDays',false);
  Session.set('showActive',false);
  Session.set('showLocation',false);
  Session.set('showMyLocation',false);
  Session.set('showLiner',false);


  $('ul.tabs').tabs();

  });

// Template.search.onRendered(function () {
//   $(function() {

//   $('input[name="datefilter"]').daterangepicker({
//       autoUpdateInput: false,
//       locale: {
//           cancelLabel: 'Clear'
//       }
//   });

//   $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
//       $(this).val(picker.startDate.format('MM/DD/YYYY') + ' -> ' + picker.endDate.format('MM/DD/YYYY'));
//   });

//   $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
//       $(this).val('');
//   });

// });
//   });

Template.myProfileAccompEditingForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentAccompanistProfiles: function () {
    var currentAccompanistProfiles = AccompanistProfiles.findOne({ Id: Meteor.userId()});
    if (currentAccompanistProfiles) {
      return currentAccompanistProfiles;
    }
  }
});

Template.repertoireEditingForm.helpers ({
  // Helps set up fields for deciding between "insert" and "update"
  currentAccompanistProfiles: function () {
    var currentAccompanistProfiles = AccompanistProfiles.findOne({ Id: Meteor.userId()});
    if (currentAccompanistProfiles) {
      return currentAccompanistProfiles;
    }
  }
});

Template.suggestions.helpers ({
  suggestions: function () {
    var data = Data.findOne({ userId: Meteor.userId()});
    var suggestions = data.suggestions;
    return suggestions
  }
});

Template.results.helpers({

  accompanists: function() {

    // If search
    var address = FlowRouter.getQueryParam("address")
    var start_date = FlowRouter.getQueryParam("start_date")
    var end_date = FlowRouter.getQueryParam("end_date")

    // if Advanced search
    var charge = parseInt(FlowRouter.getQueryParam("charge"))
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

        if (charge !== NaN) {
          var charge_algo = 
          {charge: charge}
        } 

        if (session_location !== null) {
          var session_algo = 
          {session_location: session_location}
        }
        
        if (time !== undefined && time.length < 4) {
          var time_algo = 
          {working_hours: {$in: time}}
        } else if (time !== undefined) {
          var time_algo = 
          {working_hours: time}
        }

        if (day !== undefined && $.isArray(day)) {
          var work_algo = 
          {working_days: {$in: day}}
        } else if (day !== undefined) {
          var work_algo = 
          {working_days: day}
        }

        var array_algo = [charge_algo, session_algo, time_algo, work_algo]
        
        console.log("array_algo")
        console.log(array_algo)
        

        var new_algo = [{accompanist_active: true},{Id: { $ne: Meteor.userId()}}]

        $.each(array_algo, function( index, value ) {

          // console.log("Values")
          // console.log(value['charge'])
          // console.log(value['working_hours'])
          // console.log(value['working_days'])
          // console.log(value['session_location'])
          // console.log(value)

          switch (index) {
            case 0:
              console.log("charge add")
              console.log((value['charge']))
              
              if (value['charge']) {
                console.log("passed = charge not NaN")
                new_algo.push(value)
              }
              break;
            case 1:
            console.log("session_location")
        console.log(value['session_location'])
        console.log(value['session_location'] !== undefined)
              console.log("session_location add")

              if ((value['session_location'] !== undefined) ) {
                console.log("there is session preferance")
                new_algo.push(value)
              }
              // console.log(value['session_location'] !== "")
              // console.log(value['session_location'])
              break;
            case 2:
              console.log("hours add")
               if (value !== undefined) {
                console.log("there is hours preferance")
                new_algo.push(value)
              }
              // console.log(value['working_hours'] !== undefined)
              // console.log(value['working_hours'])
              break;
            case 3:
              console.log("days add")
              if (value !== undefined) {
                console.log("there is day preferance")
                new_algo.push(value)
              }
              // console.log(value['working_days'] !== undefined)
              // console.log(value['working_days'])
              break;
          }
   });

          // if ( !isNaN(value['charge']) && (value['session_location'] == undefined) && (value['working_hours'] == undefined) && (value['working_days'] == undefined)) {
          //   console.log("got charge")
          //   new_algo.push(value)
          // } else

          // if ( (value['charge'] == undefined) && (value['session_location'] !== "") && (value['working_hours'] == undefined) && (value['working_days'] == undefined)) {
          //   console.log("got session location")
          //   new_algo.push(value)
          // } else

          // if ((value['charge'] == undefined) && (value['session_location'] == undefined) && (value['working_hours'] !== undefined) && (value['working_days'] == undefined)) {
          //   console.log("got hours")
          //   new_algo.push(value)
          // } else 

          // if ((value['charge'] == undefined) && (value['session_location'] == undefined) && (value['working_hours'] == undefined) && (value['working_days'] !== undefined)) {
          //   console.log("got days")
          //   new_algo.push(value)
          // }

       

        console.log("new")
        console.log(new_algo)
        // console.log("old")
        // console.log(array_algo)

        return new_algo

      };

      
      var x =  searchWith()
      var results = AccompanistProfiles.find(
        {loc:
        { $near :
          {
            $geometry: { type: 'Point',  coordinates: coords },
            $maxDistance: 20000
          }
        },
        $and: x 
      }).fetch();

      console.log(results)

      // if (coords !== undefined && moment(sd).isValid() && moment(ed).isValid()) {
      //     var results = AccompanistProfiles.find({
      //       loc:
      //         { $near :
      //           {
      //             $geometry: { type: "Point",  coordinates: coords },
      //             $maxDistance: 20000
      //           }
      //         },
      //       accompanist_active: true,
      //       Id: { $ne: Meteor.userId() }
      //     }).fetch();
      // }

      // else if (moment(sd).isValid() && moment(ed).isValid()){
      //   var results =
      //     AccompanistProfiles.find({
      //     accompanist_active: true,
      //     Id: { $ne: Meteor.userId() }}).fetch();
      // }

      // else if (moment(ed).isValid()){
      //   var results =
      //     AccompanistProfiles.find({
      //     accompanist_active: true,
      //     Id: { $ne: Meteor.userId() }}).fetch();
      // }

      // else if (moment(sd).isValid() ){
      //   var results =
      //     AccompanistProfiles.find({
      //     accompanist_active: true,
      //     Id: { $ne: Meteor.userId() }}).fetch();
      // }

      // else if (coords !== undefined){
      //   var results = AccompanistProfiles.find({
      //     loc:
      //       { $near :
      //         {
      //           $geometry: { type: "Point",  coordinates: coords },
      //           $maxDistance: 20000
      //         }
      //       },
      //       Id: { $ne: Meteor.userId() },
      //     accompanist_active: true}).fetch();
      // }

      // else {
      //   var results = null
      // }
      Session.set('results', results)
    });

    return Session.get('results')
  },
  accompname: function() {
    var names = BasicProfiles.findOne({userId: this.Id});
    return names
  },
   currentProfilePic: function(Id) {
    var profileDoc = BasicProfiles.findOne({userId: Id}, {profilePic : 1});
    if (profileDoc){
      var picId = profileDoc.profilePic;
      var imageDoc = UserImages.findOne(picId);
      console.log(imageDoc.derivatives.thumbnail)
      return imageDoc.derivatives.thumbnail
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

// Events

Template.search.events({
  'submit form': function(){
    FlowRouter.go('results/:getQueryParam');
  }
});

// Google search autocomplete
Template.search.events({
   'click #autocomplete': function(e,advancedSearch) {
     initAutoComplete();
   }
});

Template.advancedSearch.events({
   'click #autocomplete': function(e,search) {
     initAutoComplete();
   }
});

// Template.NewAccompanist.events({
//    'click #autocomplete': function(e,NewAccompanist) {
//      initAutoComplete();
//    }
// });

var initAutoComplete = function() {
  var autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')),{types: ['geocode'] }
  );
};

Template.EditAccompanistProfiles.events({
  'click button': function(){
      Notifications.info('Test', 'Working Notification');
  }
});

Template.BookingRequest.events({
  'click button': function(){
      Transactions.update({_id: FlowRouter.getParam("transactionId")}, {$set: {status: "Confirmed"}});
      Notifications.info('Successful Confirmation', 'You successfully confirmed your booking!');
  }
});

Template.makeAdmin.events({
  'click button': function(){
    userId = Meteor.userId();
    Meteor.call('divinify', userId);
  }
});

// Decide Modal Login/SignUp Popup
Template.modalLogin.events({
  'click .modal-login-trigger': function(){
    AccountsTemplates.setState('signIn');
    AccountsTemplates.avoidRedirect = true;
  },

});

Template.becomeAnAccompanist.events({
  'click .modal-login-trigger': function(){
    AccountsTemplates.setState('signIn');
    AccountsTemplates.avoidRedirect = true;
  },

});

Template.modalSignUp.events({
  'click .modal-signup-trigger': function(){
    AccountsTemplates.setState('signUp');
    AccountsTemplates.avoidRedirect = true;
  },

});

// Logout from the navbar
Template.Navbar.events({
  'click .logout': function(){
    AccountsTemplates.logout();
  }
});



// For Debugging
 SimpleSchema.debug = true;
