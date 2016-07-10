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
var _ = Package.underscore._;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/comerc_autoform-selectize/template.autoform-selectize.js                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("afSelectize");                                                                         // 2
Template["afSelectize"] = new Template("Template.afSelectize", (function() {                                 // 3
  var view = this;                                                                                           // 4
  return HTML.SELECT(HTML.Attrs(function() {                                                                 // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                      // 6
  }), "\n    ", Blaze.Unless(function() {                                                                    // 7
    return Spacebars.call(view.lookup("isReactiveOptions"));                                                 // 8
  }, function() {                                                                                            // 9
    return [ "\n      ", Blaze.Each(function() {                                                             // 10
      return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                       // 11
    }, function() {                                                                                          // 12
      return [ "\n        ", Blaze.If(function() {                                                           // 13
        return Spacebars.call(Spacebars.dot(view.lookup("."), "optgroup"));                                  // 14
      }, function() {                                                                                        // 15
        return [ "\n          ", HTML.OPTGROUP({                                                             // 16
          label: function() {                                                                                // 17
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "optgroup"));                          // 18
          }                                                                                                  // 19
        }, "\n          ", Blaze.Each(function() {                                                           // 20
          return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                   // 21
        }, function() {                                                                                      // 22
          return [ "\n          ", HTML.OPTION(HTML.Attrs(function() {                                       // 23
            return Spacebars.attrMustache(view.lookup("optionAtts"));                                        // 24
          }), Blaze.View("lookup:..label", function() {                                                      // 25
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                             // 26
          })), "\n          " ];                                                                             // 27
        }), "\n          "), "\n        " ];                                                                 // 28
      }, function() {                                                                                        // 29
        return [ "\n          ", HTML.OPTION(HTML.Attrs(function() {                                         // 30
          return Spacebars.attrMustache(view.lookup("optionAtts"));                                          // 31
        }), Blaze.View("lookup:..label", function() {                                                        // 32
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                               // 33
        })), "\n        " ];                                                                                 // 34
      }), "\n      " ];                                                                                      // 35
    }), "\n    " ];                                                                                          // 36
  }), "\n  ");                                                                                               // 37
}));                                                                                                         // 38
                                                                                                             // 39
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/comerc_autoform-selectize/autoform-selectize.js                                                  //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
AutoForm.addInputType("selectize", {                                                                         // 1
  template: "afSelectize",                                                                                   // 2
  valueOut: function () {                                                                                    // 3
    // FIXME: may be related https://github.com/aldeed/meteor-autoform/issues/569                            // 4
    if (this[0].selectize) {                                                                                 // 5
      return this[0].selectize.getValue();                                                                   // 6
    }                                                                                                        // 7
  },                                                                                                         // 8
  valueConverters: {                                                                                         // 9
    "stringArray": function (val) {                                                                          // 10
      if (_.isArray(val)) {                                                                                  // 11
        return _.map(val, function (item) {                                                                  // 12
          return $.trim(item);                                                                               // 13
        });                                                                                                  // 14
      }                                                                                                      // 15
      return val;                                                                                            // 16
    },                                                                                                       // 17
    "number": AutoForm.Utility.stringToNumber,                                                               // 18
    "numberArray": function (val) {                                                                          // 19
      if (_.isArray(val)) {                                                                                  // 20
        return _.map(val, function (item) {                                                                  // 21
          item = $.trim(item);                                                                               // 22
          return AutoForm.Utility.stringToNumber(item);                                                      // 23
        });                                                                                                  // 24
      }                                                                                                      // 25
      return val;                                                                                            // 26
    },                                                                                                       // 27
    "boolean": AutoForm.Utility.stringToBool,                                                                // 28
    "booleanArray": function (val) {                                                                         // 29
      if (_.isArray(val)) {                                                                                  // 30
        return _.map(val, function (item) {                                                                  // 31
          item = $.trim(item);                                                                               // 32
          return AutoForm.Utility.stringToBool(item);                                                        // 33
        });                                                                                                  // 34
      }                                                                                                      // 35
      return val;                                                                                            // 36
    },                                                                                                       // 37
    "date": AutoForm.Utility.stringToDate,                                                                   // 38
    "dateArray": function (val) {                                                                            // 39
      if (_.isArray(val)) {                                                                                  // 40
        return _.map(val, function (item) {                                                                  // 41
          item = $.trim(item);                                                                               // 42
          return AutoForm.Utility.stringToDate(item);                                                        // 43
        });                                                                                                  // 44
      }                                                                                                      // 45
      return val;                                                                                            // 46
    }                                                                                                        // 47
  },                                                                                                         // 48
  contextAdjust: function (context) {                                                                        // 49
    //can fix issues with some browsers selecting the firstOption instead of the selected option             // 50
    context.atts.autocomplete = 'off';                                                                       // 51
                                                                                                             // 52
    var itemAtts = _.omit(context.atts, 'firstOption');                                                      // 53
    var firstOption = context.atts.firstOption;                                                              // 54
                                                                                                             // 55
    // build items list                                                                                      // 56
    context.items = [];                                                                                      // 57
                                                                                                             // 58
    // If a firstOption was provided, add that to the items list first                                       // 59
    if (firstOption === false) {                                                                             // 60
      // nothing                                                                                             // 61
    } else if (typeof firstOption === 'string' || typeof _defaults.firstOption === "string") {               // 62
      context.items.push({                                                                                   // 63
        name: context.name,                                                                                  // 64
        label: (typeof firstOption === 'string' ? firstOption : _defaults.firstOption),                      // 65
        value: '',                                                                                           // 66
        // _id must be included because it is a special property that                                        // 67
        // #each uses to track unique list items when adding and removing them                               // 68
        // See https://github.com/meteor/meteor/issues/2174                                                  // 69
        //                                                                                                   // 70
        // Setting this to an empty string caused problems if option with value                              // 71
        // 1 was in the options list because Spacebars evaluates "" to 1 and                                 // 72
        // considers that a duplicate.                                                                       // 73
        // See https://github.com/aldeed/meteor-autoform/issues/656                                          // 74
        _id: 'AUTOFORM_EMPTY_FIRST_OPTION',                                                                  // 75
        selected: false,                                                                                     // 76
        // atts: itemAtts                                                                                    // 77
      });                                                                                                    // 78
    }                                                                                                        // 79
                                                                                                             // 80
    var fetchOpt = function fetchOpt(opt) {                                                                  // 81
      return {                                                                                               // 82
        name: context.name,                                                                                  // 83
        label: opt.label,                                                                                    // 84
        value: opt.value,                                                                                    // 85
        // _id must be included because it is a special property that                                        // 86
        // #each uses to track unique list items when adding and removing them                               // 87
        // See https://github.com/meteor/meteor/issues/2174                                                  // 88
        _id: opt.value,                                                                                      // 89
        selected: _.isArray(context.value) ?                                                                 // 90
          _.include(context.value, opt.value) : (opt.value === context.value),                               // 91
        // atts: itemAtts                                                                                    // 92
      };                                                                                                     // 93
    };                                                                                                       // 94
                                                                                                             // 95
    // Add all defined options                                                                               // 96
    _.each(context.selectOptions, function(opt) {                                                            // 97
      if (opt.optgroup) {                                                                                    // 98
        context.items.push({                                                                                 // 99
          optgroup: opt.optgroup,                                                                            // 100
          items: _.map(opt.options, fetchOpt)                                                                // 101
        });                                                                                                  // 102
      } else {                                                                                               // 103
        context.items.push(fetchOpt(opt));                                                                   // 104
      }                                                                                                      // 105
    });                                                                                                      // 106
                                                                                                             // 107
    return context;                                                                                          // 108
  }                                                                                                          // 109
});                                                                                                          // 110
                                                                                                             // 111
Template.afSelectize.helpers({                                                                               // 112
  optionAtts: function () {                                                                                  // 113
    var item = this                                                                                          // 114
    var atts = {                                                                                             // 115
      value: item.value                                                                                      // 116
    };                                                                                                       // 117
    if (item.selected) {                                                                                     // 118
      atts.selected = '';                                                                                    // 119
    }                                                                                                        // 120
    return atts;                                                                                             // 121
  },                                                                                                         // 122
  atts: function () {                                                                                        // 123
    var atts = _.clone(this.atts);                                                                           // 124
    // TODO: if (style == 'bootstrap3') ...                                                                  // 125
    // Add bootstrap class                                                                                   // 126
    atts = AutoForm.Utility.addClass(atts, 'form-control');                                                  // 127
    delete atts.selectizeOptions;                                                                            // 128
    delete atts.isReactiveOptions;                                                                           // 129
    return atts;                                                                                             // 130
  },                                                                                                         // 131
  isReactiveOptions: function () {                                                                           // 132
    var isReactiveOptions;                                                                                   // 133
    if (_.has(this.atts, 'isReactiveOptions')) {                                                             // 134
      isReactiveOptions = this.atts.isReactiveOptions;                                                       // 135
    } else {                                                                                                 // 136
      isReactiveOptions = _defaults.isReactiveOptions;                                                       // 137
    }                                                                                                        // 138
    return isReactiveOptions;                                                                                // 139
  }                                                                                                          // 140
});                                                                                                          // 141
                                                                                                             // 142
Template.afSelectize.events({                                                                                // 143
  "click .selectized": function (event) {                                                                    // 144
    // TODO: https://github.com/selectize/selectize.js/issues/658                                            // 145
    $(event.toElement).next().children(":first-child").children("input:first").focus();                      // 146
  }                                                                                                          // 147
});                                                                                                          // 148
                                                                                                             // 149
Template.afSelectize.rendered = function () {                                                                // 150
  var selectizeOptions = this.data.atts.selectizeOptions || {};                                              // 151
  // selectize rearranges one option from the middle of the list                                             // 152
  // https://github.com/selectize/selectize.js/issues/640#issuecomment-71788203                              // 153
  if (!selectizeOptions.sortField) {                                                                         // 154
    selectizeOptions.sortField = 'text';                                                                     // 155
  }                                                                                                          // 156
  // instanciate selectize                                                                                   // 157
  this.$('select').selectize(selectizeOptions);                                                              // 158
                                                                                                             // 159
  var isReactiveOptions;                                                                                     // 160
  if (_.has(this.data.atts, 'isReactiveOptions')) {                                                          // 161
    isReactiveOptions = this.data.atts.isReactiveOptions;                                                    // 162
  } else {                                                                                                   // 163
    isReactiveOptions = _defaults.isReactiveOptions;                                                         // 164
  }                                                                                                          // 165
                                                                                                             // 166
  if (isReactiveOptions) {                                                                                   // 167
    var test = false;                                                                                        // 168
    var selectize = this.$('select')[0].selectize;                                                           // 169
    this.autorun(function () {                                                                               // 170
      var items = Template.currentData().items;                                                              // 171
      // FIXED double autorun                                                                                // 172
      // TODO may be computation.firstRun?                                                                   // 173
      test = !test;                                                                                          // 174
      if (test) {                                                                                            // 175
        _refreshSelectizeOptions(selectize, items);                                                          // 176
      }                                                                                                      // 177
    });                                                                                                      // 178
  }                                                                                                          // 179
};                                                                                                           // 180
                                                                                                             // 181
Template.afSelectize.destroyed = function () {                                                               // 182
  this.$('select')[0].selectize.destroy();                                                                   // 183
};                                                                                                           // 184
                                                                                                             // 185
var _defaults = {                                                                                            // 186
  firstOption: 'Select an option',                                                                           // 187
  isReactiveOptions: false                                                                                   // 188
};                                                                                                           // 189
                                                                                                             // 190
AutoForm.Selectize = {};                                                                                     // 191
AutoForm.Selectize.setDefaults = function (o) {                                                              // 192
  if (_.has(o, 'firstOption')) {                                                                             // 193
    _defaults.firstOption = o.firstOption;                                                                   // 194
  }                                                                                                          // 195
  if (_.has(o, 'isReactiveOptions')) {                                                                       // 196
    _defaults.isReactiveOptions = o.isReactiveOptions;                                                       // 197
  }                                                                                                          // 198
}                                                                                                            // 199
                                                                                                             // 200
var _refreshSelectizeOptions = function (selectize, options) {                                               // 201
  var items = selectize.items;                                                                               // 202
                                                                                                             // 203
  selectize.clearOptions();                                                                                  // 204
                                                                                                             // 205
  _.each(options, function (option) {                                                                        // 206
    if (option.optgroup) {                                                                                   // 207
      selectize.addOptionGroup(option.optgroup, {label: option.optgroup});                                   // 208
      _.each(option.items, function (groupOption) {                                                          // 209
        selectize.addOption({value: groupOption.value, text: groupOption.label, optgroup: option.optgroup});
        if (groupOption.selected) {                                                                          // 211
          selectize.addItem(groupOption.value, true);                                                        // 212
        }                                                                                                    // 213
      });                                                                                                    // 214
    } else if (option.value) {                                                                               // 215
      selectize.addOption({value: option.value, text: option.label});                                        // 216
      if (option.selected) {                                                                                 // 217
        selectize.addItem(option.value, true);                                                               // 218
      }                                                                                                      // 219
    }                                                                                                        // 220
  });                                                                                                        // 221
                                                                                                             // 222
  _.each(items, function (item) {                                                                            // 223
    selectize.addItem(item, true);                                                                           // 224
  });                                                                                                        // 225
};                                                                                                           // 226
                                                                                                             // 227
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/comerc_autoform-selectize/template.autoform-selectize-input.js                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("afSelectizeInput");                                                                    // 2
Template["afSelectizeInput"] = new Template("Template.afSelectizeInput", (function() {                       // 3
  var view = this;                                                                                           // 4
  return HTML.INPUT(HTML.Attrs({                                                                             // 5
    type: "text",                                                                                            // 6
    value: function() {                                                                                      // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                   // 8
    }                                                                                                        // 9
  }, function() {                                                                                            // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                      // 11
  }));                                                                                                       // 12
}));                                                                                                         // 13
                                                                                                             // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/comerc_autoform-selectize/autoform-selectize-input.js                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
AutoForm.addInputType("selectize-input", {                                                                   // 1
  template: "afSelectizeInput",                                                                              // 2
  valueOut: function () {                                                                                    // 3
    if (this[0].selectize) {                                                                                 // 4
      return this[0].selectize.getValue();                                                                   // 5
    }                                                                                                        // 6
  },                                                                                                         // 7
  valueConverters: {                                                                                         // 8
    "stringArray": function (val) {                                                                          // 9
      if (_.isArray(val)) {                                                                                  // 10
        return _.map(val, function (item) {                                                                  // 11
          return $.trim(item);                                                                               // 12
        });                                                                                                  // 13
      }                                                                                                      // 14
      return val;                                                                                            // 15
    },                                                                                                       // 16
    "number": AutoForm.Utility.stringToNumber,                                                               // 17
    "numberArray": function (val) {                                                                          // 18
      if (_.isArray(val)) {                                                                                  // 19
        return _.map(val, function (item) {                                                                  // 20
          item = $.trim(item);                                                                               // 21
          return AutoForm.Utility.stringToNumber(item);                                                      // 22
        });                                                                                                  // 23
      }                                                                                                      // 24
      return val;                                                                                            // 25
    },                                                                                                       // 26
    "boolean": AutoForm.Utility.stringToBool,                                                                // 27
    "booleanArray": function (val) {                                                                         // 28
      if (_.isArray(val)) {                                                                                  // 29
        return _.map(val, function (item) {                                                                  // 30
          item = $.trim(item);                                                                               // 31
          return AutoForm.Utility.stringToBool(item);                                                        // 32
        });                                                                                                  // 33
      }                                                                                                      // 34
      return val;                                                                                            // 35
    },                                                                                                       // 36
    "date": AutoForm.Utility.stringToDate,                                                                   // 37
    "dateArray": function (val) {                                                                            // 38
      if (_.isArray(val)) {                                                                                  // 39
        return _.map(val, function (item) {                                                                  // 40
          item = $.trim(item);                                                                               // 41
          return AutoForm.Utility.stringToDate(item);                                                        // 42
        });                                                                                                  // 43
      }                                                                                                      // 44
      return val;                                                                                            // 45
    }                                                                                                        // 46
  }                                                                                                          // 47
});                                                                                                          // 48
                                                                                                             // 49
Template.afSelectizeInput.helpers({                                                                          // 50
  atts: function afSelectAtts() {                                                                            // 51
    var atts = _.clone(this.atts);                                                                           // 52
    // TODO: if (style == 'bootstrap3') ...                                                                  // 53
    // Add bootstrap class                                                                                   // 54
    atts = AutoForm.Utility.addClass(atts, "form-control");                                                  // 55
    delete atts.selectizeOptions;                                                                            // 56
    return atts;                                                                                             // 57
  }                                                                                                          // 58
});                                                                                                          // 59
                                                                                                             // 60
Template.afSelectizeInput.events({                                                                           // 61
  "click .selectized": function (event) {                                                                    // 62
    // TODO: https://github.com/selectize/selectize.js/issues/658                                            // 63
    $(event.toElement).next().children(":first-child").children("input:first").focus();                      // 64
  }                                                                                                          // 65
});                                                                                                          // 66
                                                                                                             // 67
Template.afSelectizeInput.rendered = function () {                                                           // 68
  var selectizeOptions = this.data.atts.selectizeOptions || {};                                              // 69
  // selectize rearranges one option from the middle of the list                                             // 70
  // https://github.com/selectize/selectize.js/issues/640#issuecomment-71788203                              // 71
  if (!selectizeOptions.sortField) {                                                                         // 72
    selectizeOptions.sortField = 'text';                                                                     // 73
  }                                                                                                          // 74
  // instanciate selectize                                                                                   // 75
  this.$('input').selectize(selectizeOptions);                                                               // 76
};                                                                                                           // 77
                                                                                                             // 78
Template.afSelectizeInput.destroyed = function () {                                                          // 79
  this.$('input')[0].selectize.destroy();                                                                    // 80
};                                                                                                           // 81
                                                                                                             // 82
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['comerc:autoform-selectize'] = {};

})();
