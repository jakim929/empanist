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
var check = Package.check.check;
var Match = Package.check.Match;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var EasySearch = Package['easysearch:core'].EasySearch;
var lodash = Package['erasaur:meteor-lodash'].lodash;
var _ = Package['erasaur:meteor-lodash']._;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:autosuggest":{"lib":{"template.autosuggest.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/easysearch_autosuggest/lib/template.autosuggest.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("EasySearch.Autosuggest");                                                                        // 2
Template["EasySearch.Autosuggest"] = new Template("Template.EasySearch.Autosuggest", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 5
    return Spacebars.attrMustache(view.lookup("attributes"));                                                          // 6
  }));                                                                                                                 // 7
}));                                                                                                                   // 8
                                                                                                                       // 9
Template.__checkName("EasySarch.Autogguest.DefaultRenderSuggestion");                                                  // 10
Template["EasySarch.Autogguest.DefaultRenderSuggestion"] = new Template("Template.EasySarch.Autogguest.DefaultRenderSuggestion", (function() {
  var view = this;                                                                                                     // 12
  return HTML.DIV("\n    ", HTML.SPAN({                                                                                // 13
    "class": "autosuggest-title"                                                                                       // 14
  }, HTML.SPAN({                                                                                                       // 15
    "class": "name"                                                                                                    // 16
  }, Blaze.View("lookup:label", function() {                                                                           // 17
    return Spacebars.mustache(view.lookup("label"));                                                                   // 18
  }))), "\n  ");                                                                                                       // 19
}));                                                                                                                   // 20
                                                                                                                       // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"autosuggest.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/easysearch_autosuggest/lib/autosuggest.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template['EasySearch.Autosuggest'].onRendered(function () {                                                            // 1
  var _this = this;                                                                                                    // 1
                                                                                                                       //
  /**                                                                                                                  //
   * Helper function to return data for the autosuggest component.                                                     //
   *                                                                                                                   //
   * @param {String} val        Value to return                                                                        //
   * @param {*}      defaultVal Optional default value to provide                                                      //
   *                                                                                                                   //
   * @return {*}                                                                                                       //
   */                                                                                                                  //
  var getDataValue = function getDataValue(val, defaultVal) {                                                          // 10
    return _this.data[val] || defaultVal;                                                                              // 10
  };                                                                                                                   // 10
                                                                                                                       //
  if (!this.data.index) {                                                                                              // 12
    throw new Meteor.Error('no-index', 'Please provide an index for your component');                                  // 13
  }                                                                                                                    // 14
                                                                                                                       //
  if (this.data.indexes) {                                                                                             // 16
    throw new Meteor.Error('only-single-index', 'Can only specify one index');                                         // 17
  }                                                                                                                    // 18
                                                                                                                       //
  var handle = void 0,                                                                                                 // 20
      computation = void 0,                                                                                            // 20
      index = this.data.index,                                                                                         // 20
      valueField = getDataValue('valueField', '_id'),                                                                  // 20
      labelField = getDataValue('labelField', index.config.fields[0]),                                                 // 20
      searchField = getDataValue('searchField', labelField),                                                           // 20
      changeConfiguration = getDataValue('changeConfiguration', function (c) {                                         // 20
    return c;                                                                                                          // 25
  }),                                                                                                                  // 25
      suggestionTemplate = Template[getDataValue('renderSuggestion', 'EasySarch.Autogguest.DefaultRenderSuggestion')];
                                                                                                                       //
  var select = this.$('select').selectize(changeConfiguration({                                                        // 30
    valueField: valueField,                                                                                            // 31
    labelField: labelField,                                                                                            // 32
    searchField: searchField,                                                                                          // 33
    create: false,                                                                                                     // 34
    preload: true,                                                                                                     // 35
    render: {                                                                                                          // 36
      option: function () {                                                                                            // 37
        function option(item, escape) {                                                                                // 37
          return Blaze.toHTMLWithData(suggestionTemplate, {                                                            // 37
            doc: item,                                                                                                 // 38
            _id: item._id,                                                                                             // 39
            label: _.get(item, labelField)                                                                             // 40
          });                                                                                                          // 37
        }                                                                                                              // 37
                                                                                                                       //
        return option;                                                                                                 // 37
      }()                                                                                                              // 37
    },                                                                                                                 // 36
    load: function () {                                                                                                // 43
      function load(query, callback) {                                                                                 // 43
        if (computation) {                                                                                             // 44
          computation.stop();                                                                                          // 45
        }                                                                                                              // 46
                                                                                                                       //
        computation = Tracker.autorun(function () {                                                                    // 48
          var cursor = index.search(query),                                                                            // 49
              docs = cursor.fetch();                                                                                   // 49
                                                                                                                       //
          if (handle) {                                                                                                // 52
            clearTimeout(handle);                                                                                      // 53
          }                                                                                                            // 54
                                                                                                                       //
          handle = setTimeout(function () {                                                                            // 56
            select[0].selectize.clearOptions();                                                                        // 57
            callback(docs);                                                                                            // 58
          }, 100);                                                                                                     // 59
        });                                                                                                            // 60
      }                                                                                                                // 61
                                                                                                                       //
      return load;                                                                                                     // 43
    }()                                                                                                                // 43
  }));                                                                                                                 // 30
});                                                                                                                    // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{"extensions":[".js",".json",".html"]});
require("./node_modules/meteor/easysearch:autosuggest/lib/template.autosuggest.js");
require("./node_modules/meteor/easysearch:autosuggest/lib/autosuggest.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['easysearch:autosuggest'] = {};

})();
