//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

(function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// packages/comerc_autoform-typeahead/template.autoform-typeahead.js          //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
                                                                              // 1
Template.__checkName("afTypeahead");                                          // 2
Template["afTypeahead"] = new Template("Template.afTypeahead", (function() {  // 3
  var view = this;                                                            // 4
  return HTML.INPUT(HTML.Attrs({                                              // 5
    type: "text",                                                             // 6
    value: function() {                                                       // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));    // 8
    }                                                                         // 9
  }, function() {                                                             // 10
    return Spacebars.attrMustache(view.lookup("atts"));                       // 11
  }));                                                                        // 12
}));                                                                          // 13
                                                                              // 14
////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// packages/comerc_autoform-typeahead/autoform-typeahead.js                   //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
AutoForm.addInputType("typeahead", {                                          // 1
  template: "afTypeahead",                                                    // 2
  valueOut: function () {                                                     // 3
    return this.typeahead('val');                                             // 4
  },                                                                          // 5
  valueConverters: {                                                          // 6
    "number": AutoForm.Utility.stringToNumber,                                // 7
    "numberArray": function (val) {                                           // 8
      if (_.isArray(val)) {                                                   // 9
        return _.map(val, function (item) {                                   // 10
          item = $.trim(item);                                                // 11
          return AutoForm.Utility.stringToNumber(item);                       // 12
        });                                                                   // 13
      }                                                                       // 14
      return val;                                                             // 15
    },                                                                        // 16
    "boolean": AutoForm.Utility.stringToBool,                                 // 17
    "booleanArray": function (val) {                                          // 18
      if (_.isArray(val)) {                                                   // 19
        return _.map(val, function (item) {                                   // 20
          item = $.trim(item);                                                // 21
          return AutoForm.Utility.stringToBool(item);                         // 22
        });                                                                   // 23
      }                                                                       // 24
      return val;                                                             // 25
    },                                                                        // 26
    "date": AutoForm.Utility.stringToDate,                                    // 27
    "dateArray": function (val) {                                             // 28
      if (_.isArray(val)) {                                                   // 29
        return _.map(val, function (item) {                                   // 30
          item = $.trim(item);                                                // 31
          return AutoForm.Utility.stringToDate(item);                         // 32
        });                                                                   // 33
      }                                                                       // 34
      return val;                                                             // 35
    }                                                                         // 36
  }                                                                           // 37
});                                                                           // 38
                                                                              // 39
Template.afTypeahead.helpers({                                                // 40
  atts: function () {                                                         // 41
    var atts = _.clone(this.atts);                                            // 42
    atts = AutoForm.Utility.addClass(atts, "twitter-typeahead form-control");
    delete atts.typeaheadOptions;                                             // 44
    delete atts.typeaheadDatasets;                                            // 45
    return atts;                                                              // 46
  }                                                                           // 47
});                                                                           // 48
                                                                              // 49
Template.afTypeahead.rendered = function () {                                 // 50
  // instanciate typeahead                                                    // 51
  var substringMatcher = function(strs) {                                     // 52
    return function findMatches(q, cb) {                                      // 53
      var matches, substrRegex;                                               // 54
      // an array that will be populated with substring matches               // 55
      matches = [];                                                           // 56
      // regex used to determine if a string contains the substring `q`       // 57
      substrRegex = new RegExp(q, 'i');                                       // 58
      // iterate through the pool of strings and for any string that          // 59
      // contains the substring `q`, add it to the `matches` array            // 60
      $.each(strs, function(i, str) {                                         // 61
        if (substrRegex.test(str.label)) {                                    // 62
          // the typeahead jQuery plugin expects suggestions to a             // 63
          // JavaScript object, refer to typeahead docs for more info         // 64
          matches.push({ value: str.label });                                 // 65
        }                                                                     // 66
      });                                                                     // 67
      cb(matches);                                                            // 68
    };                                                                        // 69
  };                                                                          // 70
  var options = {                                                             // 71
    highlight: true                                                           // 72
  };                                                                          // 73
  if (this.data.atts.typeaheadOptions) {                                      // 74
    _.extend(options, this.data.atts.typeaheadOptions);                       // 75
  }                                                                           // 76
  var datasets = {                                                            // 77
    source: substringMatcher(this.data.selectOptions)                         // 78
  };                                                                          // 79
  if (this.data.atts.typeaheadDatasets) {                                     // 80
    _.extend(datasets, this.data.atts.typeaheadDatasets);                     // 81
  }                                                                           // 82
  this.$('.twitter-typeahead').typeahead(options, datasets);                  // 83
};                                                                            // 84
                                                                              // 85
Template.afTypeahead.destroyed = function () {                                // 86
  this.$('.twitter-typeahead').typeahead('destroy');                          // 87
};                                                                            // 88
                                                                              // 89
////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['comerc:autoform-typeahead'] = {};

})();
