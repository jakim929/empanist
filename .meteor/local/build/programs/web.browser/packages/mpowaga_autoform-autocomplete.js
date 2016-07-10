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
var _ = Package.underscore._;
var Template = Package.templating.Template;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var helpers;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/mpowaga_autoform-autocomplete/packages/mpowaga_autoform-autocomplete.js                      //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
(function () {                                                                                           // 1
                                                                                                         // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                 //    // 4
// packages/mpowaga:autoform-autocomplete/template.autocomplete.js                                 //    // 5
//                                                                                                 //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                   //    // 8
                                                                                                   // 1  // 9
Template.__checkName("afAutocompleteInput");                                                       // 2  // 10
Template["afAutocompleteInput"] = new Template("Template.afAutocompleteInput", (function() {       // 3  // 11
  var view = this;                                                                                 // 4  // 12
  return Blaze._TemplateWith(function() {                                                          // 5  // 13
    return Spacebars.call(view.lookup("atts"));                                                    // 6  // 14
  }, function() {                                                                                  // 7  // 15
    return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                            // 8  // 16
  });                                                                                              // 9  // 17
}));                                                                                               // 10
                                                                                                   // 11
Template.__checkName("afAutocompleteTextarea");                                                    // 12
Template["afAutocompleteTextarea"] = new Template("Template.afAutocompleteTextarea", (function() { // 13
  var view = this;                                                                                 // 14
  return Blaze._TemplateWith(function() {                                                          // 15
    return Spacebars.call(view.lookup("atts"));                                                    // 16
  }, function() {                                                                                  // 17
    return Spacebars.include(view.lookupTemplate("textareaAutocomplete"), function() {             // 18
      return Blaze.View("lookup:value", function() {                                               // 19
        return Spacebars.mustache(view.lookup("value"));                                           // 20
      });                                                                                          // 21
    });                                                                                            // 22
  });                                                                                              // 23
}));                                                                                               // 24
                                                                                                   // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 34
                                                                                                         // 35
}).call(this);                                                                                           // 36
                                                                                                         // 37
                                                                                                         // 38
                                                                                                         // 39
                                                                                                         // 40
                                                                                                         // 41
                                                                                                         // 42
(function () {                                                                                           // 43
                                                                                                         // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 45
//                                                                                                 //    // 46
// packages/mpowaga:autoform-autocomplete/autocomplete.js                                          //    // 47
//                                                                                                 //    // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 49
                                                                                                   //    // 50
AutoForm.addInputType('autocomplete-input', {                                                      // 1  // 51
  template: 'afAutocompleteInput'                                                                  // 2  // 52
});                                                                                                // 3  // 53
                                                                                                   // 4  // 54
AutoForm.addInputType('autocomplete-textarea', {                                                   // 5  // 55
  template: 'afAutocompleteTextarea'                                                               // 6  // 56
});                                                                                                // 7  // 57
                                                                                                   // 8  // 58
Template.__copy__('afAutocompleteInput_bootstrap3',                                                // 9  // 59
                  'afAutocompleteInput');                                                          // 10
Template.__copy__('afAutocompleteTextarea_bootstrap3',                                             // 11
                  'afAutocompleteTextarea');                                                       // 12
                                                                                                   // 13
helpers = {                                                                                        // 14
  attsWithValue: function (atts, value) {                                                          // 15
    if (value) {                                                                                   // 16
      atts.value = value;                                                                          // 17
    }                                                                                              // 18
    return atts;                                                                                   // 19
  },                                                                                               // 20
                                                                                                   // 21
  bootstrapAtts: function (atts) {                                                                 // 22
    atts['class'] = _.isString(atts['class'])                                                      // 23
                      ? atts['class'] + ' form-control'                                            // 24
                      : 'form-control';                                                            // 25
    return atts;                                                                                   // 26
  },                                                                                               // 27
                                                                                                   // 28
  bootstrapAttsWithValue: function (atts, value) {                                                 // 29
    return helpers.attsWithValue(helpers.bootstrapAtts(atts), value);                              // 30
  }                                                                                                // 31
};                                                                                                 // 32
                                                                                                   // 33
Template.afAutocompleteInput.helpers({                                                             // 34
  atts: function () {                                                                              // 35
    return helpers.attsWithValue(this.atts, this.value);                                           // 36
  }                                                                                                // 37
});                                                                                                // 38
                                                                                                   // 39
Template.afAutocompleteInput_bootstrap3.helpers({                                                  // 40
  atts: function () {                                                                              // 41
    return helpers.bootstrapAttsWithValue(this.atts, this.value);                                  // 42
  }                                                                                                // 43
});                                                                                                // 44
                                                                                                   // 45
Template.afAutocompleteTextarea_bootstrap3.helpers({                                               // 46
  atts: function () {                                                                              // 47
    return helpers.bootstrapAtts(this.atts);                                                       // 48
  }                                                                                                // 49
});                                                                                                // 50
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 101
                                                                                                         // 102
}).call(this);                                                                                           // 103
                                                                                                         // 104
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mpowaga:autoform-autocomplete'] = {}, {
  helpers: helpers
});

})();
