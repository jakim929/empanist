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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var EJSON = Package.ejson.EJSON;
var Spacebars = Package.spacebars.Spacebars;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var BaseComponent = Package['peerlibrary:base-component'].BaseComponent;
var BaseComponentDebug = Package['peerlibrary:base-component'].BaseComponentDebug;
var assert = Package['peerlibrary:assert'].assert;
var ReactiveField = Package['peerlibrary:reactive-field'].ReactiveField;
var ComputedField = Package['peerlibrary:computed-field'].ComputedField;
var DataLookup = Package['peerlibrary:data-lookup'].DataLookup;
var HTML = Package.htmljs.HTML;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, Template, AttributeHandler, ElementAttributesUpdater, BlazeComponent, BlazeComponentDebug;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/template.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                                                       // 1
                                                                                                                       //
Template = Blaze.Template;                                                                                             // 1
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/templating.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903                       // 1
   If it is a copy of templating.js file wrapped into a condition.                                                     // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
if (!Blaze.Template.__checkName) {                                                                                     // 7
  // Packages and apps add templates on to this object.                                                                // 8
                                                                                                                       // 9
  /**                                                                                                                  // 10
   * @summary The class for defining templates                                                                         // 11
   * @class                                                                                                            // 12
   * @instanceName Template.myTemplate                                                                                 // 13
   */                                                                                                                  // 14
  Template = Blaze.Template;                                                                                           // 15
                                                                                                                       // 16
  var RESERVED_TEMPLATE_NAMES = "__proto__ name".split(" ");                                                           // 17
                                                                                                                       // 18
  // Check for duplicate template names and illegal names that won't work.                                             // 19
  Template.__checkName = function (name) {                                                                             // 20
    // Some names can't be used for Templates. These include:                                                          // 21
    //  - Properties Blaze sets on the Template object.                                                                // 22
    //  - Properties that some browsers don't let the code to set.                                                     // 23
    //    These are specified in RESERVED_TEMPLATE_NAMES.                                                              // 24
    if (name in Template || _.contains(RESERVED_TEMPLATE_NAMES, name)) {                                               // 25
      if ((Template[name] instanceof Template) && name !== "body")                                                     // 26
        throw new Error("There are multiple templates named '" + name + "'. Each template needs a unique name.");      // 27
      throw new Error("This template name is reserved: " + name);                                                      // 28
    }                                                                                                                  // 29
  };                                                                                                                   // 30
                                                                                                                       // 31
  // XXX COMPAT WITH 0.8.3                                                                                             // 32
  Template.__define__ = function (name, renderFunc) {                                                                  // 33
    Template.__checkName(name);                                                                                        // 34
    Template[name] = new Template("Template." + name, renderFunc);                                                     // 35
    // Exempt packages built pre-0.9.0 from warnings about using old                                                   // 36
    // helper syntax, because we can.  It's not very useful to get a                                                   // 37
    // warning about someone else's code (like a package on Atmosphere),                                               // 38
    // and this should at least put a bit of a dent in number of warnings                                              // 39
    // that come from packages that haven't been updated lately.                                                       // 40
    Template[name]._NOWARN_OLDSTYLE_HELPERS = true;                                                                    // 41
  };                                                                                                                   // 42
                                                                                                                       // 43
  // Define a template `Template.body` that renders its                                                                // 44
  // `contentRenderFuncs`.  `<body>` tags (of which there may be                                                       // 45
  // multiple) will have their contents added to it.                                                                   // 46
                                                                                                                       // 47
  /**                                                                                                                  // 48
   * @summary The [template object](#templates_api) representing your `<body>`                                         // 49
   * tag.                                                                                                              // 50
   * @locus Client                                                                                                     // 51
   */                                                                                                                  // 52
  Template.body = new Template('body', function () {                                                                   // 53
    var view = this;                                                                                                   // 54
    return _.map(Template.body.contentRenderFuncs, function (func) {                                                   // 55
      return func.apply(view);                                                                                         // 56
    });                                                                                                                // 57
  });                                                                                                                  // 58
  Template.body.contentRenderFuncs = []; // array of Blaze.Views                                                       // 59
  Template.body.view = null;                                                                                           // 60
                                                                                                                       // 61
  Template.body.addContent = function (renderFunc) {                                                                   // 62
    Template.body.contentRenderFuncs.push(renderFunc);                                                                 // 63
  };                                                                                                                   // 64
                                                                                                                       // 65
  // This function does not use `this` and so it may be called                                                         // 66
  // as `Meteor.startup(Template.body.renderIntoDocument)`.                                                            // 67
  Template.body.renderToDocument = function () {                                                                       // 68
    // Only do it once.                                                                                                // 69
    if (Template.body.view)                                                                                            // 70
      return;                                                                                                          // 71
                                                                                                                       // 72
    var view = Blaze.render(Template.body, document.body);                                                             // 73
    Template.body.view = view;                                                                                         // 74
  };                                                                                                                   // 75
                                                                                                                       // 76
  // XXX COMPAT WITH 0.9.0                                                                                             // 77
  UI.body = Template.body;                                                                                             // 78
                                                                                                                       // 79
  // XXX COMPAT WITH 0.9.0                                                                                             // 80
  // (<body> tags in packages built with 0.9.0)                                                                        // 81
  Template.__body__ = Template.body;                                                                                   // 82
  Template.__body__.__contentParts = Template.body.contentViews;                                                       // 83
  Template.__body__.__instantiate = Template.body.renderToDocument;                                                    // 84
}                                                                                                                      // 85
                                                                                                                       // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/template.dynamic.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("__dynamicBackport");                                                                             // 2
Template["__dynamicBackport"] = new Template("Template.__dynamicBackport", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return [ Blaze.View("lookup:checkContext", function() {                                                              // 5
    return Spacebars.mustache(view.lookup("checkContext"));                                                            // 6
  }), "\n  ", Blaze.If(function() {                                                                                    // 7
    return Spacebars.call(view.lookup("dataContextPresent"));                                                          // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {                 // 10
      return Blaze._InOuterTemplateScope(view, function() {                                                            // 11
        return Spacebars.include(function() {                                                                          // 12
          return Spacebars.call(view.templateContentBlock);                                                            // 13
        });                                                                                                            // 14
      });                                                                                                              // 15
    }), "\n  " ];                                                                                                      // 16
  }, function() {                                                                                                      // 17
    return [ "\n    \n    ", Blaze._TemplateWith(function() {                                                          // 18
      return {                                                                                                         // 19
        template: Spacebars.call(view.lookup("template")),                                                             // 20
        data: Spacebars.call(view.lookup(".."))                                                                        // 21
      };                                                                                                               // 22
    }, function() {                                                                                                    // 23
      return Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {                           // 24
        return Blaze._InOuterTemplateScope(view, function() {                                                          // 25
          return Spacebars.include(function() {                                                                        // 26
            return Spacebars.call(view.templateContentBlock);                                                          // 27
          });                                                                                                          // 28
        });                                                                                                            // 29
      });                                                                                                              // 30
    }), "\n  " ];                                                                                                      // 31
  }) ];                                                                                                                // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
Template.__checkName("__dynamicWithDataContextBackport");                                                              // 35
Template["__dynamicWithDataContextBackport"] = new Template("Template.__dynamicWithDataContextBackport", (function() {
  var view = this;                                                                                                     // 37
  return Spacebars.With(function() {                                                                                   // 38
    return Spacebars.dataMustache(view.lookup("chooseTemplate"), view.lookup("template"));                             // 39
  }, function() {                                                                                                      // 40
    return [ "\n    \n    ", Blaze._TemplateWith(function() {                                                          // 41
      return Spacebars.call(Spacebars.dot(view.lookup(".."), "data"));                                                 // 42
    }, function() {                                                                                                    // 43
      return Spacebars.include(view.lookupTemplate(".."), function() {                                                 // 44
        return Blaze._InOuterTemplateScope(view, function() {                                                          // 45
          return Spacebars.include(function() {                                                                        // 46
            return Spacebars.call(view.templateContentBlock);                                                          // 47
          });                                                                                                          // 48
        });                                                                                                            // 49
      });                                                                                                              // 50
    }), "\n  " ];                                                                                                      // 51
  });                                                                                                                  // 52
}));                                                                                                                   // 53
                                                                                                                       // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/dynamic.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903                       // 1
   If it is a copy of dynamic.js file wrapped into a condition with renaming of backported templates.                  // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
if (!Blaze.Template.__dynamicWithDataContext) {                                                                        // 7
  Blaze.Template.__dynamicWithDataContext = Blaze.Template.__dynamicWithDataContextBackport;                           // 8
  Blaze.Template.__dynamicWithDataContext.viewName = 'Template.__dynamicWithDataContext';                              // 9
  Blaze.Template.__dynamic = Blaze.Template.__dynamicBackport;                                                         // 10
  Blaze.Template.__dynamic.viewName = 'Template.__dynamic';                                                            // 11
                                                                                                                       // 12
  var Template = Blaze.Template;                                                                                       // 13
                                                                                                                       // 14
  /**                                                                                                                  // 15
   * @isTemplate true                                                                                                  // 16
   * @memberOf Template                                                                                                // 17
   * @function dynamic                                                                                                 // 18
   * @summary Choose a template to include dynamically, by name.                                                       // 19
   * @locus Templates                                                                                                  // 20
   * @param {String} template The name of the template to include.                                                     // 21
   * @param {Object} [data] Optional. The data context in which to include the                                         // 22
   * template.                                                                                                         // 23
   */                                                                                                                  // 24
                                                                                                                       // 25
  Template.__dynamicWithDataContext.helpers({                                                                          // 26
    chooseTemplate: function (name) {                                                                                  // 27
      return Blaze._getTemplate(name, function () {                                                                    // 28
        return Template.instance();                                                                                    // 29
      });                                                                                                              // 30
    }                                                                                                                  // 31
  });                                                                                                                  // 32
                                                                                                                       // 33
  Template.__dynamic.helpers({                                                                                         // 34
    dataContextPresent: function () {                                                                                  // 35
      return _.has(this, "data");                                                                                      // 36
    },                                                                                                                 // 37
    checkContext: function () {                                                                                        // 38
      if (!_.has(this, "template")) {                                                                                  // 39
        throw new Error("Must specify name in the 'template' argument " +                                              // 40
          "to {{> Template.dynamic}}.");                                                                               // 41
      }                                                                                                                // 42
                                                                                                                       // 43
      _.each(this, function (v, k) {                                                                                   // 44
        if (k !== "template" && k !== "data") {                                                                        // 45
          throw new Error("Invalid argument to {{> Template.dynamic}}: " +                                             // 46
            k);                                                                                                        // 47
        }                                                                                                              // 48
      });                                                                                                              // 49
    }                                                                                                                  // 50
  });                                                                                                                  // 51
}                                                                                                                      // 52
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/lookup.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file backports Blaze lookup.js from Meteor 1.2 so that required Blaze features to support Blaze                // 1
   Components are available also in older Meteor versions.                                                             // 2
   It is a copy of lookup.js file from Meteor 1.2 with lexical scope lookup commented out.                             // 3
                                                                                                                       // 4
   TODO: Remove this file eventually.                                                                                  // 5
 */                                                                                                                    // 6
                                                                                                                       // 7
// Check if we are not running Meteor 1.2+.                                                                            // 8
if (! Blaze._getTemplate) {                                                                                            // 9
  // If `x` is a function, binds the value of `this` for that function                                                 // 10
  // to the current data context.                                                                                      // 11
  var bindDataContext = function (x) {                                                                                 // 12
    if (typeof x === 'function') {                                                                                     // 13
      return function () {                                                                                             // 14
        var data = Blaze.getData();                                                                                    // 15
        if (data == null)                                                                                              // 16
          data = {};                                                                                                   // 17
        return x.apply(data, arguments);                                                                               // 18
      };                                                                                                               // 19
    }                                                                                                                  // 20
    return x;                                                                                                          // 21
  };                                                                                                                   // 22
                                                                                                                       // 23
  Blaze._getTemplateHelper = function (template, name, tmplInstanceFunc) {                                             // 24
    // XXX COMPAT WITH 0.9.3                                                                                           // 25
    var isKnownOldStyleHelper = false;                                                                                 // 26
                                                                                                                       // 27
    if (template.__helpers.has(name)) {                                                                                // 28
      var helper = template.__helpers.get(name);                                                                       // 29
      if (helper === Blaze._OLDSTYLE_HELPER) {                                                                         // 30
        isKnownOldStyleHelper = true;                                                                                  // 31
      } else if (helper != null) {                                                                                     // 32
        return wrapHelper(bindDataContext(helper), tmplInstanceFunc);                                                  // 33
      } else {                                                                                                         // 34
        return null;                                                                                                   // 35
      }                                                                                                                // 36
    }                                                                                                                  // 37
                                                                                                                       // 38
    // old-style helper                                                                                                // 39
    if (name in template) {                                                                                            // 40
      // Only warn once per helper                                                                                     // 41
      if (!isKnownOldStyleHelper) {                                                                                    // 42
        template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);                                                          // 43
        if (!template._NOWARN_OLDSTYLE_HELPERS) {                                                                      // 44
          Blaze._warn('Assigning helper with `' + template.viewName + '.' +                                            // 45
            name + ' = ...` is deprecated.  Use `' + template.viewName +                                               // 46
            '.helpers(...)` instead.');                                                                                // 47
        }                                                                                                              // 48
      }                                                                                                                // 49
      if (template[name] != null) {                                                                                    // 50
        return wrapHelper(bindDataContext(template[name]), tmplInstanceFunc);                                          // 51
      }                                                                                                                // 52
    }                                                                                                                  // 53
                                                                                                                       // 54
    return null;                                                                                                       // 55
  };                                                                                                                   // 56
                                                                                                                       // 57
  var wrapHelper = function (f, templateFunc) {                                                                        // 58
    // XXX COMPAT WITH METEOR 1.0.3.2                                                                                  // 59
    if (!Blaze.Template._withTemplateInstanceFunc) {                                                                   // 60
      return Blaze._wrapCatchingExceptions(f, 'template helper');                                                      // 61
    }                                                                                                                  // 62
                                                                                                                       // 63
    if (typeof f !== "function") {                                                                                     // 64
      return f;                                                                                                        // 65
    }                                                                                                                  // 66
                                                                                                                       // 67
    return function () {                                                                                               // 68
      var self = this;                                                                                                 // 69
      var args = arguments;                                                                                            // 70
                                                                                                                       // 71
      return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {                                      // 72
        return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);                                  // 73
      });                                                                                                              // 74
    };                                                                                                                 // 75
  };                                                                                                                   // 76
                                                                                                                       // 77
  // templateInstance argument is provided to be available for possible                                                // 78
  // alternative implementations of this function by 3rd party packages.                                               // 79
  Blaze._getTemplate = function (name, templateInstance) {                                                             // 80
    if ((name in Blaze.Template) && (Blaze.Template[name] instanceof Blaze.Template)) {                                // 81
      return Blaze.Template[name];                                                                                     // 82
    }                                                                                                                  // 83
    return null;                                                                                                       // 84
  };                                                                                                                   // 85
                                                                                                                       // 86
  Blaze._getGlobalHelper = function (name, templateInstance) {                                                         // 87
    if (Blaze._globalHelpers[name] != null) {                                                                          // 88
      return wrapHelper(bindDataContext(Blaze._globalHelpers[name]), templateInstance);                                // 89
    }                                                                                                                  // 90
    return null;                                                                                                       // 91
  };                                                                                                                   // 92
                                                                                                                       // 93
  Blaze.View.prototype.lookup = function (name, _options) {                                                            // 94
    var template = this.template;                                                                                      // 95
    var lookupTemplate = _options && _options.template;                                                                // 96
    var helper;                                                                                                        // 97
    var binding;                                                                                                       // 98
    var boundTmplInstance;                                                                                             // 99
    var foundTemplate;                                                                                                 // 100
                                                                                                                       // 101
    if (this.templateInstance) {                                                                                       // 102
      boundTmplInstance = _.bind(this.templateInstance, this);                                                         // 103
    }                                                                                                                  // 104
                                                                                                                       // 105
    // 0. looking up the parent data context with the special "../" syntax                                             // 106
    if (/^\./.test(name)) {                                                                                            // 107
      // starts with a dot. must be a series of dots which maps to an                                                  // 108
      // ancestor of the appropriate height.                                                                           // 109
      if (!/^(\.)+$/.test(name))                                                                                       // 110
        throw new Error("id starting with dot must be a series of dots");                                              // 111
                                                                                                                       // 112
      return Blaze._parentData(name.length - 1, true /*_functionWrapped*/);                                            // 113
                                                                                                                       // 114
    }                                                                                                                  // 115
                                                                                                                       // 116
    // 1. look up a helper on the current template                                                                     // 117
    if (template && ((helper = Blaze._getTemplateHelper(template, name, boundTmplInstance)) != null)) {                // 118
      return helper;                                                                                                   // 119
    }                                                                                                                  // 120
                                                                                                                       // 121
    // 2. look up a binding by traversing the lexical view hierarchy inside the                                        // 122
    // current template                                                                                                // 123
    /*if (template && (binding = Blaze._lexicalBindingLookup(Blaze.currentView, name)) != null) {                      // 124
      return binding;                                                                                                  // 125
    }*/                                                                                                                // 126
                                                                                                                       // 127
    // 3. look up a template by name                                                                                   // 128
    if (lookupTemplate && ((foundTemplate = Blaze._getTemplate(name, boundTmplInstance)) != null)) {                   // 129
      return foundTemplate;                                                                                            // 130
    }                                                                                                                  // 131
                                                                                                                       // 132
    // 4. look up a global helper                                                                                      // 133
    if ((helper = Blaze._getGlobalHelper(name, boundTmplInstance)) != null) {                                          // 134
      return helper;                                                                                                   // 135
    }                                                                                                                  // 136
                                                                                                                       // 137
    // 5. look up in a data context                                                                                    // 138
    return function () {                                                                                               // 139
      var isCalledAsFunction = (arguments.length > 0);                                                                 // 140
      var data = Blaze.getData();                                                                                      // 141
      var x = data && data[name];                                                                                      // 142
      if (!x) {                                                                                                        // 143
        if (lookupTemplate) {                                                                                          // 144
          throw new Error("No such template: " + name);                                                                // 145
        } else if (isCalledAsFunction) {                                                                               // 146
          throw new Error("No such function: " + name);                                                                // 147
        } /*else if (name.charAt(0) === '@' && ((x === null) ||                                                        // 148
          (x === undefined))) {                                                                                        // 149
          // Throw an error if the user tries to use a `@directive`                                                    // 150
          // that doesn't exist.  We don't implement all directives                                                    // 151
          // from Handlebars, so there's a potential for confusion                                                     // 152
          // if we fail silently.  On the other hand, we want to                                                       // 153
          // throw late in case some app or package wants to provide                                                   // 154
          // a missing directive.                                                                                      // 155
          throw new Error("Unsupported directive: " + name);                                                           // 156
        }*/                                                                                                            // 157
      }                                                                                                                // 158
      if (!data) {                                                                                                     // 159
        return null;                                                                                                   // 160
      }                                                                                                                // 161
      if (typeof x !== 'function') {                                                                                   // 162
        if (isCalledAsFunction) {                                                                                      // 163
          throw new Error("Can't call non-function: " + x);                                                            // 164
        }                                                                                                              // 165
        return x;                                                                                                      // 166
      }                                                                                                                // 167
      return x.apply(data, arguments);                                                                                 // 168
    };                                                                                                                 // 169
  };                                                                                                                   // 170
}                                                                                                                      // 171
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/attrs.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893                       // 1
   It is a copy of attrs.js file with the changes from the above pull request merged in.                               // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
var jsUrlsAllowed = false;                                                                                             // 7
Blaze._allowJavascriptUrls = function () {                                                                             // 8
  jsUrlsAllowed = true;                                                                                                // 9
};                                                                                                                     // 10
Blaze._javascriptUrlsAllowed = function () {                                                                           // 11
  return jsUrlsAllowed;                                                                                                // 12
};                                                                                                                     // 13
                                                                                                                       // 14
// An AttributeHandler object is responsible for updating a particular attribute                                       // 15
// of a particular element.  AttributeHandler subclasses implement                                                     // 16
// browser-specific logic for dealing with particular attributes across                                                // 17
// different browsers.                                                                                                 // 18
//                                                                                                                     // 19
// To define a new type of AttributeHandler, use                                                                       // 20
// `var FooHandler = AttributeHandler.extend({ update: function ... })`                                                // 21
// where the `update` function takes arguments `(element, oldValue, value)`.                                           // 22
// The `element` argument is always the same between calls to `update` on                                              // 23
// the same instance.  `oldValue` and `value` are each either `null` or                                                // 24
// a Unicode string of the type that might be passed to the value argument                                             // 25
// of `setAttribute` (i.e. not an HTML string with character references).                                              // 26
// When an AttributeHandler is installed, an initial call to `update` is                                               // 27
// always made with `oldValue = null`.  The `update` method can access                                                 // 28
// `this.name` if the AttributeHandler class is a generic one that applies                                             // 29
// to multiple attribute names.                                                                                        // 30
//                                                                                                                     // 31
// AttributeHandlers can store custom properties on `this`, as long as they                                            // 32
// don't use the names `element`, `name`, `value`, and `oldValue`.                                                     // 33
//                                                                                                                     // 34
// AttributeHandlers can't influence how attributes appear in rendered HTML,                                           // 35
// only how they are updated after materialization as DOM.                                                             // 36
                                                                                                                       // 37
AttributeHandler = function (name, value) {                                                                            // 38
  this.name = name;                                                                                                    // 39
  this.value = value;                                                                                                  // 40
};                                                                                                                     // 41
Blaze._AttributeHandler = AttributeHandler;                                                                            // 42
                                                                                                                       // 43
AttributeHandler.prototype.update = function (element, oldValue, value) {                                              // 44
  if (value === null) {                                                                                                // 45
    if (oldValue !== null)                                                                                             // 46
      element.removeAttribute(this.name);                                                                              // 47
  } else {                                                                                                             // 48
    element.setAttribute(this.name, value);                                                                            // 49
  }                                                                                                                    // 50
};                                                                                                                     // 51
                                                                                                                       // 52
AttributeHandler.extend = function (options) {                                                                         // 53
  var curType = this;                                                                                                  // 54
  var subType = function AttributeHandlerSubtype(/*arguments*/) {                                                      // 55
    AttributeHandler.apply(this, arguments);                                                                           // 56
  };                                                                                                                   // 57
  subType.prototype = new curType;                                                                                     // 58
  subType.extend = curType.extend;                                                                                     // 59
  if (options)                                                                                                         // 60
    _.extend(subType.prototype, options);                                                                              // 61
  return subType;                                                                                                      // 62
};                                                                                                                     // 63
                                                                                                                       // 64
/// Apply the diff between the attributes of "oldValue" and "value" to "element."                                      // 65
//                                                                                                                     // 66
// Each subclass must implement a parseValue method which takes a string                                               // 67
// as an input and returns a dict of attributes. The keys of the dict                                                  // 68
// are unique identifiers (ie. css properties in the case of styles), and the                                          // 69
// values are the entire attribute which will be injected into the element.                                            // 70
//                                                                                                                     // 71
// Extended below to support classes, SVG elements and styles.                                                         // 72
                                                                                                                       // 73
Blaze._DiffingAttributeHandler = AttributeHandler.extend({                                                             // 74
  update: function (element, oldValue, value) {                                                                        // 75
    if (!this.getCurrentValue || !this.setValue || !this.parseValue)                                                   // 76
      throw new Error("Missing methods in subclass of 'DiffingAttributeHandler'");                                     // 77
                                                                                                                       // 78
    var oldAttrsMap = oldValue ? this.parseValue(oldValue) : {};                                                       // 79
    var newAttrsMap = value ? this.parseValue(value) : {};                                                             // 80
                                                                                                                       // 81
    // the current attributes on the element, which we will mutate.                                                    // 82
                                                                                                                       // 83
    var attrString = this.getCurrentValue(element);                                                                    // 84
    var attrsMap = attrString ? this.parseValue(attrString) : {};                                                      // 85
                                                                                                                       // 86
    _.each(_.keys(oldAttrsMap), function (t) {                                                                         // 87
      if (! (t in newAttrsMap))                                                                                        // 88
        delete attrsMap[t];                                                                                            // 89
    });                                                                                                                // 90
                                                                                                                       // 91
    _.each(_.keys(newAttrsMap), function (t) {                                                                         // 92
      attrsMap[t] = newAttrsMap[t];                                                                                    // 93
    });                                                                                                                // 94
                                                                                                                       // 95
    this.setValue(element, _.values(attrsMap).join(' '));                                                              // 96
  }                                                                                                                    // 97
});                                                                                                                    // 98
                                                                                                                       // 99
var ClassHandler = Blaze._DiffingAttributeHandler.extend({                                                             // 100
  // @param rawValue {String}                                                                                          // 101
  getCurrentValue: function (element) {                                                                                // 102
    return element.className;                                                                                          // 103
  },                                                                                                                   // 104
  setValue: function (element, className) {                                                                            // 105
    element.className = className;                                                                                     // 106
  },                                                                                                                   // 107
  parseValue: function (attrString) {                                                                                  // 108
    var tokens = {};                                                                                                   // 109
                                                                                                                       // 110
    _.each(attrString.split(' '), function(token) {                                                                    // 111
      if (token)                                                                                                       // 112
        tokens[token] = token;                                                                                         // 113
    });                                                                                                                // 114
    return tokens;                                                                                                     // 115
  }                                                                                                                    // 116
});                                                                                                                    // 117
                                                                                                                       // 118
var SVGClassHandler = ClassHandler.extend({                                                                            // 119
  getCurrentValue: function (element) {                                                                                // 120
    return element.className.baseVal;                                                                                  // 121
  },                                                                                                                   // 122
  setValue: function (element, className) {                                                                            // 123
    element.setAttribute('class', className);                                                                          // 124
  }                                                                                                                    // 125
});                                                                                                                    // 126
                                                                                                                       // 127
var StyleHandler = Blaze._DiffingAttributeHandler.extend({                                                             // 128
  getCurrentValue: function (element) {                                                                                // 129
    return element.getAttribute('style');                                                                              // 130
  },                                                                                                                   // 131
  setValue: function (element, style) {                                                                                // 132
    if (style === '') {                                                                                                // 133
      element.removeAttribute('style');                                                                                // 134
    } else {                                                                                                           // 135
      element.setAttribute('style', style);                                                                            // 136
    }                                                                                                                  // 137
  },                                                                                                                   // 138
                                                                                                                       // 139
  // Parse a string to produce a map from property to attribute string.                                                // 140
  //                                                                                                                   // 141
  // Example:                                                                                                          // 142
  // "color:red; foo:12px" produces a token {color: "color:red", foo:"foo:12px"}                                       // 143
  parseValue: function (attrString) {                                                                                  // 144
    var tokens = {};                                                                                                   // 145
                                                                                                                       // 146
    // Regex for parsing a css attribute declaration, taken from css-parse:                                            // 147
    // https://github.com/reworkcss/css-parse/blob/7cef3658d0bba872cde05a85339034b187cb3397/index.js#L219              // 148
    var regex = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*(?:\'(?:\\\'|.)*?\'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+[;\s]*/g;
    var match = regex.exec(attrString);                                                                                // 150
    while (match) {                                                                                                    // 151
      // match[0] = entire matching string                                                                             // 152
      // match[1] = css property                                                                                       // 153
      // Prefix the token to prevent conflicts with existing properties.                                               // 154
                                                                                                                       // 155
      // XXX No `String.trim` on Safari 4. Swap out $.trim if we want to                                               // 156
      // remove strong dep on jquery.                                                                                  // 157
      tokens[' ' + match[1]] = match[0].trim ?                                                                         // 158
        match[0].trim() : $.trim(match[0]);                                                                            // 159
                                                                                                                       // 160
      match = regex.exec(attrString);                                                                                  // 161
    }                                                                                                                  // 162
                                                                                                                       // 163
    return tokens;                                                                                                     // 164
  }                                                                                                                    // 165
});                                                                                                                    // 166
                                                                                                                       // 167
var BooleanHandler = AttributeHandler.extend({                                                                         // 168
  update: function (element, oldValue, value) {                                                                        // 169
    var name = this.name;                                                                                              // 170
    if (value == null) {                                                                                               // 171
      if (oldValue != null)                                                                                            // 172
        element[name] = false;                                                                                         // 173
    } else {                                                                                                           // 174
      element[name] = true;                                                                                            // 175
    }                                                                                                                  // 176
  }                                                                                                                    // 177
});                                                                                                                    // 178
                                                                                                                       // 179
var DOMPropertyHandler = AttributeHandler.extend({                                                                     // 180
  update: function (element, oldValue, value) {                                                                        // 181
    var name = this.name;                                                                                              // 182
    if (value !== element[name])                                                                                       // 183
      element[name] = value;                                                                                           // 184
  }                                                                                                                    // 185
});                                                                                                                    // 186
                                                                                                                       // 187
// attributes of the type 'xlink:something' should be set using                                                        // 188
// the correct namespace in order to work                                                                              // 189
var XlinkHandler = AttributeHandler.extend({                                                                           // 190
  update: function(element, oldValue, value) {                                                                         // 191
    var NS = 'http://www.w3.org/1999/xlink';                                                                           // 192
    if (value === null) {                                                                                              // 193
      if (oldValue !== null)                                                                                           // 194
        element.removeAttributeNS(NS, this.name);                                                                      // 195
    } else {                                                                                                           // 196
      element.setAttributeNS(NS, this.name, this.value);                                                               // 197
    }                                                                                                                  // 198
  }                                                                                                                    // 199
});                                                                                                                    // 200
                                                                                                                       // 201
// cross-browser version of `instanceof SVGElement`                                                                    // 202
var isSVGElement = function (elem) {                                                                                   // 203
  return 'ownerSVGElement' in elem;                                                                                    // 204
};                                                                                                                     // 205
                                                                                                                       // 206
var isUrlAttribute = function (tagName, attrName) {                                                                    // 207
  // Compiled from http://www.w3.org/TR/REC-html40/index/attributes.html                                               // 208
  // and                                                                                                               // 209
  // http://www.w3.org/html/wg/drafts/html/master/index.html#attributes-1                                              // 210
  var urlAttrs = {                                                                                                     // 211
    FORM: ['action'],                                                                                                  // 212
    BODY: ['background'],                                                                                              // 213
    BLOCKQUOTE: ['cite'],                                                                                              // 214
    Q: ['cite'],                                                                                                       // 215
    DEL: ['cite'],                                                                                                     // 216
    INS: ['cite'],                                                                                                     // 217
    OBJECT: ['classid', 'codebase', 'data', 'usemap'],                                                                 // 218
    APPLET: ['codebase'],                                                                                              // 219
    A: ['href'],                                                                                                       // 220
    AREA: ['href'],                                                                                                    // 221
    LINK: ['href'],                                                                                                    // 222
    BASE: ['href'],                                                                                                    // 223
    IMG: ['longdesc', 'src', 'usemap'],                                                                                // 224
    FRAME: ['longdesc', 'src'],                                                                                        // 225
    IFRAME: ['longdesc', 'src'],                                                                                       // 226
    HEAD: ['profile'],                                                                                                 // 227
    SCRIPT: ['src'],                                                                                                   // 228
    INPUT: ['src', 'usemap', 'formaction'],                                                                            // 229
    BUTTON: ['formaction'],                                                                                            // 230
    BASE: ['href'],                                                                                                    // 231
    MENUITEM: ['icon'],                                                                                                // 232
    HTML: ['manifest'],                                                                                                // 233
    VIDEO: ['poster']                                                                                                  // 234
  };                                                                                                                   // 235
                                                                                                                       // 236
  if (attrName === 'itemid') {                                                                                         // 237
    return true;                                                                                                       // 238
  }                                                                                                                    // 239
                                                                                                                       // 240
  var urlAttrNames = urlAttrs[tagName] || [];                                                                          // 241
  return _.contains(urlAttrNames, attrName);                                                                           // 242
};                                                                                                                     // 243
                                                                                                                       // 244
// To get the protocol for a URL, we let the browser normalize it for                                                  // 245
// us, by setting it as the href for an anchor tag and then reading out                                                // 246
// the 'protocol' property.                                                                                            // 247
if (Meteor.isClient) {                                                                                                 // 248
  var anchorForNormalization = document.createElement('A');                                                            // 249
}                                                                                                                      // 250
                                                                                                                       // 251
var getUrlProtocol = function (url) {                                                                                  // 252
  if (Meteor.isClient) {                                                                                               // 253
    anchorForNormalization.href = url;                                                                                 // 254
    return (anchorForNormalization.protocol || "").toLowerCase();                                                      // 255
  } else {                                                                                                             // 256
    throw new Error('getUrlProtocol not implemented on the server');                                                   // 257
  }                                                                                                                    // 258
};                                                                                                                     // 259
                                                                                                                       // 260
// UrlHandler is an attribute handler for all HTML attributes that take                                                // 261
// URL values. It disallows javascript: URLs, unless                                                                   // 262
// Blaze._allowJavascriptUrls() has been called. To detect javascript:                                                 // 263
// urls, we set the attribute on a dummy anchor element and then read                                                  // 264
// out the 'protocol' property of the attribute.                                                                       // 265
var origUpdate = AttributeHandler.prototype.update;                                                                    // 266
var UrlHandler = AttributeHandler.extend({                                                                             // 267
  update: function (element, oldValue, value) {                                                                        // 268
    var self = this;                                                                                                   // 269
    var args = arguments;                                                                                              // 270
                                                                                                                       // 271
    if (Blaze._javascriptUrlsAllowed()) {                                                                              // 272
      origUpdate.apply(self, args);                                                                                    // 273
    } else {                                                                                                           // 274
      var isJavascriptProtocol = (getUrlProtocol(value) === "javascript:");                                            // 275
      if (isJavascriptProtocol) {                                                                                      // 276
        Blaze._warn("URLs that use the 'javascript:' protocol are not " +                                              // 277
                    "allowed in URL attribute values. " +                                                              // 278
                    "Call Blaze._allowJavascriptUrls() " +                                                             // 279
                    "to enable them.");                                                                                // 280
        origUpdate.apply(self, [element, oldValue, null]);                                                             // 281
      } else {                                                                                                         // 282
        origUpdate.apply(self, args);                                                                                  // 283
      }                                                                                                                // 284
    }                                                                                                                  // 285
  }                                                                                                                    // 286
});                                                                                                                    // 287
                                                                                                                       // 288
// XXX make it possible for users to register attribute handlers!                                                      // 289
Blaze._makeAttributeHandler = function (elem, name, value) {                                                           // 290
  // generally, use setAttribute but certain attributes need to be set                                                 // 291
  // by directly setting a JavaScript property on the DOM element.                                                     // 292
  if (name === 'class') {                                                                                              // 293
    if (isSVGElement(elem)) {                                                                                          // 294
      return new SVGClassHandler(name, value);                                                                         // 295
    } else {                                                                                                           // 296
      return new ClassHandler(name, value);                                                                            // 297
    }                                                                                                                  // 298
  } else if (name === 'style') {                                                                                       // 299
    return new StyleHandler(name, value);                                                                              // 300
  } else if ((elem.tagName === 'OPTION' && name === 'selected') ||                                                     // 301
             (elem.tagName === 'INPUT' && name === 'checked')) {                                                       // 302
    return new BooleanHandler(name, value);                                                                            // 303
  } else if ((elem.tagName === 'TEXTAREA' || elem.tagName === 'INPUT')                                                 // 304
             && name === 'value') {                                                                                    // 305
    // internally, TEXTAREAs tracks their value in the 'value'                                                         // 306
    // attribute just like INPUTs.                                                                                     // 307
    return new DOMPropertyHandler(name, value);                                                                        // 308
  } else if (name.substring(0,6) === 'xlink:') {                                                                       // 309
    return new XlinkHandler(name.substring(6), value);                                                                 // 310
  } else if (isUrlAttribute(elem.tagName, name)) {                                                                     // 311
    return new UrlHandler(name, value);                                                                                // 312
  } else {                                                                                                             // 313
    return new AttributeHandler(name, value);                                                                          // 314
  }                                                                                                                    // 315
                                                                                                                       // 316
  // XXX will need one for 'style' on IE, though modern browsers                                                       // 317
  // seem to handle setAttribute ok.                                                                                   // 318
};                                                                                                                     // 319
                                                                                                                       // 320
                                                                                                                       // 321
ElementAttributesUpdater = function (elem) {                                                                           // 322
  this.elem = elem;                                                                                                    // 323
  this.handlers = {};                                                                                                  // 324
};                                                                                                                     // 325
                                                                                                                       // 326
// Update attributes on `elem` to the dictionary `attrs`, whose                                                        // 327
// values are strings.                                                                                                 // 328
ElementAttributesUpdater.prototype.update = function(newAttrs) {                                                       // 329
  var elem = this.elem;                                                                                                // 330
  var handlers = this.handlers;                                                                                        // 331
                                                                                                                       // 332
  for (var k in handlers) {                                                                                            // 333
    if (! _.has(newAttrs, k)) {                                                                                        // 334
      // remove attributes (and handlers) for attribute names                                                          // 335
      // that don't exist as keys of `newAttrs` and so won't                                                           // 336
      // be visited when traversing it.  (Attributes that                                                              // 337
      // exist in the `newAttrs` object but are `null`                                                                 // 338
      // are handled later.)                                                                                           // 339
      var handler = handlers[k];                                                                                       // 340
      var oldValue = handler.value;                                                                                    // 341
      handler.value = null;                                                                                            // 342
      handler.update(elem, oldValue, null);                                                                            // 343
      delete handlers[k];                                                                                              // 344
    }                                                                                                                  // 345
  }                                                                                                                    // 346
                                                                                                                       // 347
  for (var k in newAttrs) {                                                                                            // 348
    var handler = null;                                                                                                // 349
    var oldValue;                                                                                                      // 350
    var value = newAttrs[k];                                                                                           // 351
    if (! _.has(handlers, k)) {                                                                                        // 352
      if (value !== null) {                                                                                            // 353
        // make new handler                                                                                            // 354
        handler = Blaze._makeAttributeHandler(elem, k, value);                                                         // 355
        handlers[k] = handler;                                                                                         // 356
        oldValue = null;                                                                                               // 357
      }                                                                                                                // 358
    } else {                                                                                                           // 359
      handler = handlers[k];                                                                                           // 360
      oldValue = handler.value;                                                                                        // 361
    }                                                                                                                  // 362
    if (oldValue !== value) {                                                                                          // 363
      handler.value = value;                                                                                           // 364
      handler.update(elem, oldValue, value);                                                                           // 365
      if (value === null)                                                                                              // 366
        delete handlers[k];                                                                                            // 367
    }                                                                                                                  // 368
  }                                                                                                                    // 369
};                                                                                                                     // 370
                                                                                                                       // 371
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/materializer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893                       // 1
   It is a copy of the materializer.js file and is needed because it references symbols from attrs.js.                 // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
// Turns HTMLjs into DOM nodes and DOMRanges.                                                                          // 7
//                                                                                                                     // 8
// - `htmljs`: the value to materialize, which may be any of the htmljs                                                // 9
//   types (Tag, CharRef, Comment, Raw, array, string, boolean, number,                                                // 10
//   null, or undefined) or a View or Template (which will be used to                                                  // 11
//   construct a View).                                                                                                // 12
// - `intoArray`: the array of DOM nodes and DOMRanges to push the output                                              // 13
//   into (required)                                                                                                   // 14
// - `parentView`: the View we are materializing content for (optional)                                                // 15
// - `_existingWorkStack`: optional argument, only used for recursive                                                  // 16
//   calls when there is some other _materializeDOM on the call stack.                                                 // 17
//   If _materializeDOM called your function and passed in a workStack,                                                // 18
//   pass it back when you call _materializeDOM (such as from a workStack                                              // 19
//   task).                                                                                                            // 20
//                                                                                                                     // 21
// Returns `intoArray`, which is especially useful if you pass in `[]`.                                                // 22
Blaze._materializeDOM = function (htmljs, intoArray, parentView,                                                       // 23
                                  _existingWorkStack) {                                                                // 24
  // In order to use fewer stack frames, materializeDOMInner can push                                                  // 25
  // tasks onto `workStack`, and they will be popped off                                                               // 26
  // and run, last first, after materializeDOMInner returns.  The                                                      // 27
  // reason we use a stack instead of a queue is so that we recurse                                                    // 28
  // depth-first, doing newer tasks first.                                                                             // 29
  var workStack = (_existingWorkStack || []);                                                                          // 30
  materializeDOMInner(htmljs, intoArray, parentView, workStack);                                                       // 31
                                                                                                                       // 32
  if (! _existingWorkStack) {                                                                                          // 33
    // We created the work stack, so we are responsible for finishing                                                  // 34
    // the work.  Call each "task" function, starting with the top                                                     // 35
    // of the stack.                                                                                                   // 36
    while (workStack.length) {                                                                                         // 37
      // Note that running task() may push new items onto workStack.                                                   // 38
      var task = workStack.pop();                                                                                      // 39
      task();                                                                                                          // 40
    }                                                                                                                  // 41
  }                                                                                                                    // 42
                                                                                                                       // 43
  return intoArray;                                                                                                    // 44
};                                                                                                                     // 45
                                                                                                                       // 46
var materializeDOMInner = function (htmljs, intoArray, parentView, workStack) {                                        // 47
  if (htmljs == null) {                                                                                                // 48
    // null or undefined                                                                                               // 49
    return;                                                                                                            // 50
  }                                                                                                                    // 51
                                                                                                                       // 52
  switch (typeof htmljs) {                                                                                             // 53
  case 'string': case 'boolean': case 'number':                                                                        // 54
    intoArray.push(document.createTextNode(String(htmljs)));                                                           // 55
    return;                                                                                                            // 56
  case 'object':                                                                                                       // 57
    if (htmljs.htmljsType) {                                                                                           // 58
      switch (htmljs.htmljsType) {                                                                                     // 59
      case HTML.Tag.htmljsType:                                                                                        // 60
        intoArray.push(materializeTag(htmljs, parentView, workStack));                                                 // 61
        return;                                                                                                        // 62
      case HTML.CharRef.htmljsType:                                                                                    // 63
        intoArray.push(document.createTextNode(htmljs.str));                                                           // 64
        return;                                                                                                        // 65
      case HTML.Comment.htmljsType:                                                                                    // 66
        intoArray.push(document.createComment(htmljs.sanitizedValue));                                                 // 67
        return;                                                                                                        // 68
      case HTML.Raw.htmljsType:                                                                                        // 69
        // Get an array of DOM nodes by using the browser's HTML parser                                                // 70
        // (like innerHTML).                                                                                           // 71
        var nodes = Blaze._DOMBackend.parseHTML(htmljs.value);                                                         // 72
        for (var i = 0; i < nodes.length; i++)                                                                         // 73
          intoArray.push(nodes[i]);                                                                                    // 74
        return;                                                                                                        // 75
      }                                                                                                                // 76
    } else if (HTML.isArray(htmljs)) {                                                                                 // 77
      for (var i = htmljs.length-1; i >= 0; i--) {                                                                     // 78
        workStack.push(_.bind(Blaze._materializeDOM, null,                                                             // 79
                              htmljs[i], intoArray, parentView, workStack));                                           // 80
      }                                                                                                                // 81
      return;                                                                                                          // 82
    } else {                                                                                                           // 83
      if (htmljs instanceof Blaze.Template) {                                                                          // 84
        htmljs = htmljs.constructView();                                                                               // 85
        // fall through to Blaze.View case below                                                                       // 86
      }                                                                                                                // 87
      if (htmljs instanceof Blaze.View) {                                                                              // 88
        Blaze._materializeView(htmljs, parentView, workStack, intoArray);                                              // 89
        return;                                                                                                        // 90
      }                                                                                                                // 91
    }                                                                                                                  // 92
  }                                                                                                                    // 93
                                                                                                                       // 94
  throw new Error("Unexpected object in htmljs: " + htmljs);                                                           // 95
};                                                                                                                     // 96
                                                                                                                       // 97
var materializeTag = function (tag, parentView, workStack) {                                                           // 98
  var tagName = tag.tagName;                                                                                           // 99
  var elem;                                                                                                            // 100
  if ((HTML.isKnownSVGElement(tagName) || isSVGAnchor(tag))                                                            // 101
      && document.createElementNS) {                                                                                   // 102
    // inline SVG                                                                                                      // 103
    elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);                                            // 104
  } else {                                                                                                             // 105
    // normal elements                                                                                                 // 106
    elem = document.createElement(tagName);                                                                            // 107
  }                                                                                                                    // 108
                                                                                                                       // 109
  var rawAttrs = tag.attrs;                                                                                            // 110
  var children = tag.children;                                                                                         // 111
  if (tagName === 'textarea' && tag.children.length &&                                                                 // 112
      ! (rawAttrs && ('value' in rawAttrs))) {                                                                         // 113
    // Provide very limited support for TEXTAREA tags with children                                                    // 114
    // rather than a "value" attribute.                                                                                // 115
    // Reactivity in the form of Views nested in the tag's children                                                    // 116
    // won't work.  Compilers should compile textarea contents into                                                    // 117
    // the "value" attribute of the tag, wrapped in a function if there                                                // 118
    // is reactivity.                                                                                                  // 119
    if (typeof rawAttrs === 'function' ||                                                                              // 120
        HTML.isArray(rawAttrs)) {                                                                                      // 121
      throw new Error("Can't have reactive children of TEXTAREA node; " +                                              // 122
                      "use the 'value' attribute instead.");                                                           // 123
    }                                                                                                                  // 124
    rawAttrs = _.extend({}, rawAttrs || null);                                                                         // 125
    rawAttrs.value = Blaze._expand(children, parentView);                                                              // 126
    children = [];                                                                                                     // 127
  }                                                                                                                    // 128
                                                                                                                       // 129
  if (rawAttrs) {                                                                                                      // 130
    var attrUpdater = new ElementAttributesUpdater(elem);                                                              // 131
    var updateAttributes = function () {                                                                               // 132
      var expandedAttrs = Blaze._expandAttributes(rawAttrs, parentView);                                               // 133
      var flattenedAttrs = HTML.flattenAttributes(expandedAttrs);                                                      // 134
      var stringAttrs = {};                                                                                            // 135
      for (var attrName in flattenedAttrs) {                                                                           // 136
        stringAttrs[attrName] = Blaze._toText(flattenedAttrs[attrName],                                                // 137
                                              parentView,                                                              // 138
                                              HTML.TEXTMODE.STRING);                                                   // 139
      }                                                                                                                // 140
      attrUpdater.update(stringAttrs);                                                                                 // 141
    };                                                                                                                 // 142
    var updaterComputation;                                                                                            // 143
    if (parentView) {                                                                                                  // 144
      updaterComputation =                                                                                             // 145
        parentView.autorun(updateAttributes, undefined, 'updater');                                                    // 146
    } else {                                                                                                           // 147
      updaterComputation = Tracker.nonreactive(function () {                                                           // 148
        return Tracker.autorun(function () {                                                                           // 149
          Tracker._withCurrentView(parentView, updateAttributes);                                                      // 150
        });                                                                                                            // 151
      });                                                                                                              // 152
    }                                                                                                                  // 153
    Blaze._DOMBackend.Teardown.onElementTeardown(elem, function attrTeardown() {                                       // 154
      updaterComputation.stop();                                                                                       // 155
    });                                                                                                                // 156
  }                                                                                                                    // 157
                                                                                                                       // 158
  if (children.length) {                                                                                               // 159
    var childNodesAndRanges = [];                                                                                      // 160
    // push this function first so that it's done last                                                                 // 161
    workStack.push(function () {                                                                                       // 162
      for (var i = 0; i < childNodesAndRanges.length; i++) {                                                           // 163
        var x = childNodesAndRanges[i];                                                                                // 164
        if (x instanceof Blaze._DOMRange)                                                                              // 165
          x.attach(elem);                                                                                              // 166
        else                                                                                                           // 167
          elem.appendChild(x);                                                                                         // 168
      }                                                                                                                // 169
    });                                                                                                                // 170
    // now push the task that calculates childNodesAndRanges                                                           // 171
    workStack.push(_.bind(Blaze._materializeDOM, null,                                                                 // 172
                          children, childNodesAndRanges, parentView,                                                   // 173
                          workStack));                                                                                 // 174
  }                                                                                                                    // 175
                                                                                                                       // 176
  return elem;                                                                                                         // 177
};                                                                                                                     // 178
                                                                                                                       // 179
                                                                                                                       // 180
var isSVGAnchor = function (node) {                                                                                    // 181
  // We generally aren't able to detect SVG <a> elements because                                                       // 182
  // if "A" were in our list of known svg element names, then all                                                      // 183
  // <a> nodes would be created using                                                                                  // 184
  // `document.createElementNS`. But in the special case of <a                                                         // 185
  // xlink:href="...">, we can at least detect that attribute and                                                      // 186
  // create an SVG <a> tag in that case.                                                                               // 187
  //                                                                                                                   // 188
  // However, we still have a general problem of knowing when to                                                       // 189
  // use document.createElementNS and when to use                                                                      // 190
  // document.createElement; for example, font tags will always                                                        // 191
  // be created as SVG elements which can cause other                                                                  // 192
  // problems. #1977                                                                                                   // 193
  return (node.tagName === "a" &&                                                                                      // 194
          node.attrs &&                                                                                                // 195
          node.attrs["xlink:href"] !== undefined);                                                                     // 196
};                                                                                                                     // 197
                                                                                                                       // 198
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/lib.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var                                                                                                                    //
    ComponentsNamespaceReference,                                                                                      //
    HTMLJSExpander,                                                                                                    //
    REQUIRE_RENDERED_INSTANCE,                                                                                         //
    SUPPORTS_REACTIVE_INSTANCE,                                                                                        //
    addEvents,                                                                                                         //
    argumentsConstructor,                                                                                              //
    bindComponent,                                                                                                     //
    bindDataContext,                                                                                                   //
    callTemplateBaseHooks,                                                                                             //
    contentAsFunc,                                                                                                     //
    contentAsView,                                                                                                     //
    currentViewIfRendering,                                                                                            //
    expand,                                                                                                            //
    expandView,                                                                                                        //
    getTemplateBase,                                                                                                   //
    getTemplateInstance,                                                                                               //
    getTemplateInstanceFunction,                                                                                       //
    method,                                                                                                            //
    methodName,                                                                                                        //
    originalDot,                                                                                                       //
    originalFlattenAttributes,                                                                                         //
    originalGetTemplate,                                                                                               //
    originalInclude,                                                                                                   //
    originalVisitTag,                                                                                                  //
    ref,                                                                                                               //
    registerFirstCreatedHook,                                                                                          //
    registerHooks,                                                                                                     //
    templateInstanceToComponent,                                                                                       //
    withTemplateInstanceFunc,                                                                                          //
    wrapHelper,                                                                                                        //
    wrapViewAndTemplate,                                                                                               //
    slice = [].slice,                                                                                                  //
    extend = function extend(child, parent) {                                                                          //
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                                    //
    if (hasProp.call(parent, key)) child[key] = parent[key];                                                           //
  }function ctor() {                                                                                                   //
    this.constructor = child;                                                                                          //
  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;     //
},                                                                                                                     //
    hasProp = {}.hasOwnProperty,                                                                                       //
    indexOf = [].indexOf || function (item) {                                                                          //
  for (var i = 0, l = this.length; i < l; i++) {                                                                       //
    if (i in this && this[i] === item) return i;                                                                       //
  }return -1;                                                                                                          //
};                                                                                                                     //
                                                                                                                       //
getTemplateInstance = function getTemplateInstance(view, skipBlockHelpers) {                                           //
  while (view && !view._templateInstance) {                                                                            //
    if (skipBlockHelpers) {                                                                                            //
      view = view.parentView;                                                                                          //
    } else {                                                                                                           //
      view = view.originalParentView || view.parentView;                                                               //
    }                                                                                                                  //
  }                                                                                                                    //
  return view != null ? view._templateInstance : void 0;                                                               //
};                                                                                                                     //
                                                                                                                       //
templateInstanceToComponent = function templateInstanceToComponent(templateInstanceFunc, skipBlockHelpers) {           //
  var templateInstance;                                                                                                //
  templateInstance = typeof templateInstanceFunc === "function" ? templateInstanceFunc() : void 0;                     //
  templateInstance = getTemplateInstance(templateInstance != null ? templateInstance.view : void 0, skipBlockHelpers);
  while (templateInstance) {                                                                                           //
    if ('component' in templateInstance) {                                                                             //
      return templateInstance.component;                                                                               //
    }                                                                                                                  //
    if (skipBlockHelpers) {                                                                                            //
      templateInstance = getTemplateInstance(templateInstance.view.parentView, skipBlockHelpers);                      //
    } else {                                                                                                           //
      templateInstance = getTemplateInstance(templateInstance.view.originalParentView || templateInstance.view.parentView, skipBlockHelpers);
    }                                                                                                                  //
  }                                                                                                                    //
  return null;                                                                                                         //
};                                                                                                                     //
                                                                                                                       //
getTemplateInstanceFunction = function getTemplateInstanceFunction(view, skipBlockHelpers) {                           //
  var templateInstance;                                                                                                //
  templateInstance = getTemplateInstance(view, skipBlockHelpers);                                                      //
  return function () {                                                                                                 //
    return templateInstance;                                                                                           //
  };                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
ComponentsNamespaceReference = function () {                                                                           //
  function ComponentsNamespaceReference(namespace, templateInstance1) {                                                //
    this.namespace = namespace;                                                                                        //
    this.templateInstance = templateInstance1;                                                                         //
  }                                                                                                                    //
                                                                                                                       //
  return ComponentsNamespaceReference;                                                                                 //
}();                                                                                                                   //
                                                                                                                       //
originalDot = Spacebars.dot;                                                                                           //
                                                                                                                       //
Spacebars.dot = function () {                                                                                          //
  var args, value;                                                                                                     //
  value = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                                  //
  if (value instanceof ComponentsNamespaceReference) {                                                                 //
    return Blaze._getTemplate(value.namespace + "." + args.join('.'), value.templateInstance);                         //
  }                                                                                                                    //
  return originalDot.apply(null, [value].concat(slice.call(args)));                                                    //
};                                                                                                                     //
                                                                                                                       //
originalInclude = Spacebars.include;                                                                                   //
                                                                                                                       //
Spacebars.include = function () {                                                                                      //
  var args, templateOrFunction;                                                                                        //
  templateOrFunction = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                     //
  if (templateOrFunction instanceof ComponentsNamespaceReference) {                                                    //
    templateOrFunction = Blaze._getTemplate(templateOrFunction.namespace, templateOrFunction.templateInstance);        //
  }                                                                                                                    //
  return originalInclude.apply(null, [templateOrFunction].concat(slice.call(args)));                                   //
};                                                                                                                     //
                                                                                                                       //
Blaze._getTemplateHelper = function (template, name, templateInstance) {                                               //
  var component, helper, isKnownOldStyleHelper, mixinOrComponent, ref, ref1, ref2;                                     //
  isKnownOldStyleHelper = false;                                                                                       //
  if (template.__helpers.has(name)) {                                                                                  //
    helper = template.__helpers.get(name);                                                                             //
    if (helper === Blaze._OLDSTYLE_HELPER) {                                                                           //
      isKnownOldStyleHelper = true;                                                                                    //
    } else if (helper != null) {                                                                                       //
      return wrapHelper(bindDataContext(helper), templateInstance);                                                    //
    } else {                                                                                                           //
      return null;                                                                                                     //
    }                                                                                                                  //
  }                                                                                                                    //
  if (name in template) {                                                                                              //
    if (!isKnownOldStyleHelper) {                                                                                      //
      template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);                                                            //
      if (!template._NOWARN_OLDSTYLE_HELPERS) {                                                                        //
        Blaze._warn("Assigning helper with `" + template.viewName + "." + name + " = ...` is deprecated.  Use `" + template.viewName + ".helpers(...)` instead.");
      }                                                                                                                //
    }                                                                                                                  //
    if (template[name] != null) {                                                                                      //
      return wrapHelper(bindDataContext(template[name]), templateInstance);                                            //
    } else {                                                                                                           //
      return null;                                                                                                     //
    }                                                                                                                  //
  }                                                                                                                    //
  if (!templateInstance) {                                                                                             //
    return null;                                                                                                       //
  }                                                                                                                    //
  if ((ref = template.viewName) === 'Template.__dynamicWithDataContext' || ref === 'Template.__dynamic') {             //
    return null;                                                                                                       //
  }                                                                                                                    //
  component = Tracker.nonreactive(function () {                                                                        //
    return templateInstanceToComponent(templateInstance, true);                                                        //
  });                                                                                                                  //
  if (component) {                                                                                                     //
    if (mixinOrComponent = component.getFirstWith(null, name)) {                                                       //
      return wrapHelper(bindComponent(mixinOrComponent, mixinOrComponent[name]), templateInstance);                    //
    }                                                                                                                  //
  }                                                                                                                    //
  if (name && name in BlazeComponent.components) {                                                                     //
    return new ComponentsNamespaceReference(name, templateInstance);                                                   //
  }                                                                                                                    //
  if (component) {                                                                                                     //
    if ((helper = (ref1 = component._componentInternals) != null ? (ref2 = ref1.templateBase) != null ? ref2.__helpers.get(name) : void 0 : void 0) != null) {
      return wrapHelper(bindDataContext(helper), templateInstance);                                                    //
    }                                                                                                                  //
  }                                                                                                                    //
  return null;                                                                                                         //
};                                                                                                                     //
                                                                                                                       //
share.inExpandAttributes = false;                                                                                      //
                                                                                                                       //
bindComponent = function bindComponent(component, helper) {                                                            //
  if (_.isFunction(helper)) {                                                                                          //
    return function () {                                                                                               //
      var args, name, result, value;                                                                                   //
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                    //
      result = helper.apply(component, args);                                                                          //
      if (share.inExpandAttributes && _.isObject(result)) {                                                            //
        for (name in meteorBabelHelpers.sanitizeForInObject(result)) {                                                 //
          value = result[name];                                                                                        //
          if (share.EVENT_HANDLER_REGEX.test(name)) {                                                                  //
            if (_.isFunction(value)) {                                                                                 //
              result[name] = _.bind(value, component);                                                                 //
            } else if (_.isArray(value)) {                                                                             //
              result[name] = _.map(value, function (fun) {                                                             //
                if (_.isFunction(fun)) {                                                                               //
                  return _.bind(fun, component);                                                                       //
                } else {                                                                                               //
                  return fun;                                                                                          //
                }                                                                                                      //
              });                                                                                                      //
            }                                                                                                          //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
      return result;                                                                                                   //
    };                                                                                                                 //
  } else {                                                                                                             //
    return helper;                                                                                                     //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
bindDataContext = function bindDataContext(helper) {                                                                   //
  if (_.isFunction(helper)) {                                                                                          //
    return function () {                                                                                               //
      var data;                                                                                                        //
      data = Blaze.getData();                                                                                          //
      if (data == null) {                                                                                              //
        data = {};                                                                                                     //
      }                                                                                                                //
      return helper.apply(data, arguments);                                                                            //
    };                                                                                                                 //
  } else {                                                                                                             //
    return helper;                                                                                                     //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
wrapHelper = function wrapHelper(f, templateFunc) {                                                                    //
  if (!Blaze.Template._withTemplateInstanceFunc) {                                                                     //
    return Blaze._wrapCatchingExceptions(f, 'template helper');                                                        //
  }                                                                                                                    //
  if (!_.isFunction(f)) {                                                                                              //
    return f;                                                                                                          //
  }                                                                                                                    //
  return function () {                                                                                                 //
    var args, self;                                                                                                    //
    self = this;                                                                                                       //
    args = arguments;                                                                                                  //
    return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {                                        //
      return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);                                    //
    });                                                                                                                //
  };                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
if (Blaze.Template._withTemplateInstanceFunc) {                                                                        //
  withTemplateInstanceFunc = Blaze.Template._withTemplateInstanceFunc;                                                 //
} else {                                                                                                               //
  withTemplateInstanceFunc = function withTemplateInstanceFunc(templateInstance, f) {                                  //
    return f();                                                                                                        //
  };                                                                                                                   //
}                                                                                                                      //
                                                                                                                       //
getTemplateBase = function getTemplateBase(component) {                                                                //
  return Tracker.nonreactive(function () {                                                                             //
    var componentTemplate, templateBase;                                                                               //
    componentTemplate = component.template();                                                                          //
    if (_.isString(componentTemplate)) {                                                                               //
      templateBase = Template[componentTemplate];                                                                      //
      if (!templateBase) {                                                                                             //
        throw new Error("Template '" + componentTemplate + "' cannot be found.");                                      //
      }                                                                                                                //
    } else if (componentTemplate) {                                                                                    //
      templateBase = componentTemplate;                                                                                //
    } else {                                                                                                           //
      throw new Error("Template for the component '" + (component.componentName() || 'unnamed') + "' not provided.");  //
    }                                                                                                                  //
    return templateBase;                                                                                               //
  });                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
callTemplateBaseHooks = function callTemplateBaseHooks(component, hookName) {                                          //
  var callbacks, templateInstance;                                                                                     //
  if (component._componentInternals == null) {                                                                         //
    component._componentInternals = {};                                                                                //
  }                                                                                                                    //
  if (!component._componentInternals.templateInstance) {                                                               //
    return;                                                                                                            //
  }                                                                                                                    //
  templateInstance = Tracker.nonreactive(function () {                                                                 //
    return component._componentInternals.templateInstance();                                                           //
  });                                                                                                                  //
  callbacks = component._componentInternals.templateBase._getCallbacks(hookName);                                      //
  Template._withTemplateInstanceFunc(function () {                                                                     //
    return templateInstance;                                                                                           //
  }, function () {                                                                                                     //
    var callback, i, len, results;                                                                                     //
    results = [];                                                                                                      //
    for (i = 0, len = callbacks.length; i < len; i++) {                                                                //
      callback = callbacks[i];                                                                                         //
      results.push(callback.call(templateInstance));                                                                   //
    }                                                                                                                  //
    return results;                                                                                                    //
  });                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
wrapViewAndTemplate = function wrapViewAndTemplate(currentView, f) {                                                   //
  var templateInstance;                                                                                                //
  templateInstance = getTemplateInstanceFunction(currentView, true);                                                   //
  return withTemplateInstanceFunc(templateInstance, function () {                                                      //
    return Blaze._withCurrentView(currentView, function () {                                                           //
      return f();                                                                                                      //
    });                                                                                                                //
  });                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
addEvents = function addEvents(view, component) {                                                                      //
  var eventMap, events, eventsList, fn, handler, i, len, spec;                                                         //
  eventsList = component.events();                                                                                     //
  if (!_.isArray(eventsList)) {                                                                                        //
    throw new Error("'events' method from the component '" + (component.componentName() || 'unnamed') + "' did not return a list of event maps.");
  }                                                                                                                    //
  for (i = 0, len = eventsList.length; i < len; i++) {                                                                 //
    events = eventsList[i];                                                                                            //
    eventMap = {};                                                                                                     //
    fn = function fn(spec, handler) {                                                                                  //
      return eventMap[spec] = function () {                                                                            //
        var args, currentView, event;                                                                                  //
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                  //
        event = args[0];                                                                                               //
        currentView = Blaze.getView(event.currentTarget);                                                              //
        wrapViewAndTemplate(currentView, function () {                                                                 //
          return handler.apply(component, args);                                                                       //
        });                                                                                                            //
      };                                                                                                               //
    };                                                                                                                 //
    for (spec in meteorBabelHelpers.sanitizeForInObject(events)) {                                                     //
      handler = events[spec];                                                                                          //
      fn(spec, handler);                                                                                               //
    }                                                                                                                  //
    Blaze._addEventMap(view, eventMap, view);                                                                          //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
originalGetTemplate = Blaze._getTemplate;                                                                              //
                                                                                                                       //
Blaze._getTemplate = function (name, templateInstance) {                                                               //
  var template;                                                                                                        //
  template = Tracker.nonreactive(function () {                                                                         //
    var parentComponent, ref;                                                                                          //
    if (Blaze.currentView) {                                                                                           //
      parentComponent = BlazeComponent.currentComponent();                                                             //
    } else {                                                                                                           //
      parentComponent = templateInstanceToComponent(templateInstance, false);                                          //
    }                                                                                                                  //
    return (ref = BlazeComponent.getComponent(name)) != null ? ref.renderComponent(parentComponent) : void 0;          //
  });                                                                                                                  //
  if (template && (template instanceof Blaze.Template || _.isFunction(template))) {                                    //
    return template;                                                                                                   //
  }                                                                                                                    //
  return originalGetTemplate(name);                                                                                    //
};                                                                                                                     //
                                                                                                                       //
registerHooks = function registerHooks(template, hooks) {                                                              //
  if (template.onCreated) {                                                                                            //
    template.onCreated(hooks.onCreated);                                                                               //
    template.onRendered(hooks.onRendered);                                                                             //
    return template.onDestroyed(hooks.onDestroyed);                                                                    //
  } else {                                                                                                             //
    template.created = hooks.onCreated;                                                                                //
    template.rendered = hooks.onRendered;                                                                              //
    return template.destroyed = hooks.onDestroyed;                                                                     //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
registerFirstCreatedHook = function registerFirstCreatedHook(template, onCreated) {                                    //
  var oldCreated;                                                                                                      //
  if (template._callbacks) {                                                                                           //
    return template._callbacks.created.unshift(onCreated);                                                             //
  } else {                                                                                                             //
    oldCreated = template.created;                                                                                     //
    return template.created = function () {                                                                            //
      onCreated.call(this);                                                                                            //
      return oldCreated != null ? oldCreated.call(this) : void 0;                                                      //
    };                                                                                                                 //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
Template.__dynamicWithDataContext.__helpers.set('chooseTemplate', function (name) {                                    //
  return Blaze._getTemplate(name, function (_this) {                                                                   //
    return function () {                                                                                               //
      return Template.instance();                                                                                      //
    };                                                                                                                 //
  }(this));                                                                                                            //
});                                                                                                                    //
                                                                                                                       //
argumentsConstructor = function argumentsConstructor() {                                                               //
  return assert(false);                                                                                                //
};                                                                                                                     //
                                                                                                                       //
Template.registerHelper('args', function () {                                                                          //
  var obj;                                                                                                             //
  obj = {};                                                                                                            //
  obj.constructor = argumentsConstructor;                                                                              //
  obj._arguments = arguments;                                                                                          //
  return obj;                                                                                                          //
});                                                                                                                    //
                                                                                                                       //
share.EVENT_HANDLER_REGEX = /^on[A-Z]/;                                                                                //
                                                                                                                       //
share.isEventHandler = function (fun) {                                                                                //
  return _.isFunction(fun) && fun.eventHandler;                                                                        //
};                                                                                                                     //
                                                                                                                       //
originalFlattenAttributes = HTML.flattenAttributes;                                                                    //
                                                                                                                       //
HTML.flattenAttributes = function (attrs) {                                                                            //
  var name, value;                                                                                                     //
  if (attrs = originalFlattenAttributes(attrs)) {                                                                      //
    for (name in meteorBabelHelpers.sanitizeForInObject(attrs)) {                                                      //
      value = attrs[name];                                                                                             //
      if (!share.EVENT_HANDLER_REGEX.test(name)) {                                                                     //
        continue;                                                                                                      //
      }                                                                                                                //
      if (share.isEventHandler(value)) {                                                                               //
        continue;                                                                                                      //
      }                                                                                                                //
      if (_.isArray(value) && _.some(value, share.isEventHandler)) {                                                   //
        continue;                                                                                                      //
      }                                                                                                                //
      if (_.isArray(value)) {                                                                                          //
        attrs[name] = _.map(value, Spacebars.event);                                                                   //
      } else {                                                                                                         //
        attrs[name] = Spacebars.event(value);                                                                          //
      }                                                                                                                //
    }                                                                                                                  //
  }                                                                                                                    //
  return attrs;                                                                                                        //
};                                                                                                                     //
                                                                                                                       //
Spacebars.event = function () {                                                                                        //
  var args, eventHandler, fun;                                                                                         //
  eventHandler = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                           //
  if (!_.isFunction(eventHandler)) {                                                                                   //
    throw new Error("Event handler not a function: " + eventHandler);                                                  //
  }                                                                                                                    //
  args = Spacebars.mustacheImpl.apply(Spacebars, [function () {                                                        //
    var xs;                                                                                                            //
    xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                        //
    return xs;                                                                                                         //
  }].concat(slice.call(args)));                                                                                        //
  fun = function fun() {                                                                                               //
    var currentView, event, eventArgs;                                                                                 //
    event = arguments[0], eventArgs = 2 <= arguments.length ? slice.call(arguments, 1) : [];                           //
    currentView = Blaze.getView(event.currentTarget);                                                                  //
    return wrapViewAndTemplate(currentView, function () {                                                              //
      return eventHandler.apply(null, [event].concat(args, eventArgs));                                                //
    });                                                                                                                //
  };                                                                                                                   //
  fun.eventHandler = true;                                                                                             //
  return fun;                                                                                                          //
};                                                                                                                     //
                                                                                                                       //
originalVisitTag = HTML.ToHTMLVisitor.prototype.visitTag;                                                              //
                                                                                                                       //
HTML.ToHTMLVisitor.prototype.visitTag = function (tag) {                                                               //
  var attrs, name;                                                                                                     //
  if (attrs = tag.attrs) {                                                                                             //
    attrs = HTML.flattenAttributes(attrs);                                                                             //
    for (name in meteorBabelHelpers.sanitizeForInObject(attrs)) {                                                      //
      if (share.EVENT_HANDLER_REGEX.test(name)) {                                                                      //
        delete attrs[name];                                                                                            //
      }                                                                                                                //
    }                                                                                                                  //
    tag.attrs = attrs;                                                                                                 //
  }                                                                                                                    //
  return originalVisitTag.call(this, tag);                                                                             //
};                                                                                                                     //
                                                                                                                       //
currentViewIfRendering = function currentViewIfRendering() {                                                           //
  var view;                                                                                                            //
  view = Blaze.currentView;                                                                                            //
  if (view != null ? view._isInRender : void 0) {                                                                      //
    return view;                                                                                                       //
  } else {                                                                                                             //
    return null;                                                                                                       //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
contentAsFunc = function contentAsFunc(content) {                                                                      //
  if (!_.isFunction(content)) {                                                                                        //
    return function () {                                                                                               //
      return content;                                                                                                  //
    };                                                                                                                 //
  }                                                                                                                    //
  return content;                                                                                                      //
};                                                                                                                     //
                                                                                                                       //
contentAsView = function contentAsView(content) {                                                                      //
  if (content instanceof Blaze.Template) {                                                                             //
    return content.constructView();                                                                                    //
  } else if (content instanceof Blaze.View) {                                                                          //
    return content;                                                                                                    //
  } else {                                                                                                             //
    return Blaze.View('render', contentAsFunc(content));                                                               //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
HTMLJSExpander = Blaze._HTMLJSExpander.extend();                                                                       //
                                                                                                                       //
HTMLJSExpander.def({                                                                                                   //
  visitObject: function () {                                                                                           //
    function visitObject(x) {                                                                                          //
      if (x instanceof Blaze.Template) {                                                                               //
        x = x.constructView();                                                                                         //
      }                                                                                                                //
      if (x instanceof Blaze.View) {                                                                                   //
        return expandView(x, this.parentView);                                                                         //
      }                                                                                                                //
      return HTML.TransformingVisitor.prototype.visitObject.call(this, x);                                             //
    }                                                                                                                  //
                                                                                                                       //
    return visitObject;                                                                                                //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
expand = function expand(htmljs, parentView) {                                                                         //
  parentView = parentView || currentViewIfRendering();                                                                 //
  return new HTMLJSExpander({                                                                                          //
    parentView: parentView                                                                                             //
  }).visit(htmljs);                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
expandView = function expandView(view, parentView) {                                                                   //
  var htmljs, result;                                                                                                  //
  Blaze._createView(view, parentView, true);                                                                           //
  view._isInRender = true;                                                                                             //
  htmljs = Blaze._withCurrentView(view, function () {                                                                  //
    return view._render();                                                                                             //
  });                                                                                                                  //
  view._isInRender = false;                                                                                            //
  Tracker.flush();                                                                                                     //
  result = expand(htmljs, view);                                                                                       //
  Tracker.flush();                                                                                                     //
  if (Tracker.active) {                                                                                                //
    Tracker.onInvalidate(function () {                                                                                 //
      return Blaze._destroyView(view);                                                                                 //
    });                                                                                                                //
  } else {                                                                                                             //
    Blaze._destroyView(view);                                                                                          //
  }                                                                                                                    //
  Tracker.flush();                                                                                                     //
  return result;                                                                                                       //
};                                                                                                                     //
                                                                                                                       //
BlazeComponent = function (superClass) {                                                                               //
  extend(BlazeComponent, superClass);                                                                                  //
                                                                                                                       //
  function BlazeComponent() {                                                                                          //
    return BlazeComponent.__super__.constructor.apply(this, arguments);                                                //
  }                                                                                                                    //
                                                                                                                       //
  BlazeComponent.getComponentForElement = function (domElement) {                                                      //
    var templateInstance;                                                                                              //
    if (!domElement) {                                                                                                 //
      return null;                                                                                                     //
    }                                                                                                                  //
    if (domElement.nodeType !== Node.ELEMENT_NODE) {                                                                   //
      throw new Error("Expected DOM element.");                                                                        //
    }                                                                                                                  //
    templateInstance = getTemplateInstanceFunction(Blaze.getView(domElement), true);                                   //
    return templateInstanceToComponent(templateInstance, true);                                                        //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.mixins = function () {                                                                      //
    return [];                                                                                                         //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.mixinParent = function (mixinParent) {                                                      //
    if (this._componentInternals == null) {                                                                            //
      this._componentInternals = {};                                                                                   //
    }                                                                                                                  //
    if (mixinParent) {                                                                                                 //
      this._componentInternals.mixinParent = mixinParent;                                                              //
      return this;                                                                                                     //
    }                                                                                                                  //
    return this._componentInternals.mixinParent || null;                                                               //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.requireMixin = function (nameOrMixin) {                                                     //
    var ref;                                                                                                           //
    assert((ref = this._componentInternals) != null ? ref.mixins : void 0);                                            //
    Tracker.nonreactive(function (_this) {                                                                             //
      return function () {                                                                                             //
        var base, mixinInstance, mixinInstanceComponent, ref1, ref2, ref3;                                             //
        if (_this.getMixin(nameOrMixin)) {                                                                             //
          return;                                                                                                      //
        }                                                                                                              //
        if (_.isString(nameOrMixin)) {                                                                                 //
          if (_this.constructor.getComponent) {                                                                        //
            mixinInstanceComponent = _this.constructor.getComponent(nameOrMixin);                                      //
          } else {                                                                                                     //
            mixinInstanceComponent = BlazeComponent.getComponent(nameOrMixin);                                         //
          }                                                                                                            //
          if (!mixinInstanceComponent) {                                                                               //
            throw new Error("Unknown mixin '" + nameOrMixin + "'.");                                                   //
          }                                                                                                            //
          mixinInstance = new mixinInstanceComponent();                                                                //
        } else if (_.isFunction(nameOrMixin)) {                                                                        //
          mixinInstance = new nameOrMixin();                                                                           //
        } else {                                                                                                       //
          mixinInstance = nameOrMixin;                                                                                 //
        }                                                                                                              //
        _this._componentInternals.mixins.push(mixinInstance);                                                          //
        if (mixinInstance.mixinParent) {                                                                               //
          mixinInstance.mixinParent(_this);                                                                            //
        }                                                                                                              //
        if (typeof mixinInstance.createMixins === "function") {                                                        //
          mixinInstance.createMixins();                                                                                //
        }                                                                                                              //
        if ((base = _this._componentInternals).templateInstance == null) {                                             //
          base.templateInstance = new ReactiveField(null, function (a, b) {                                            //
            return a === b;                                                                                            //
          });                                                                                                          //
        }                                                                                                              //
        if (!((ref1 = _this._componentInternals.templateInstance()) != null ? ref1.view.isDestroyed : void 0)) {       //
          if (!_this._componentInternals.inOnCreated && ((ref2 = _this._componentInternals.templateInstance()) != null ? ref2.view.isCreated : void 0)) {
            if (typeof mixinInstance.onCreated === "function") {                                                       //
              mixinInstance.onCreated();                                                                               //
            }                                                                                                          //
          }                                                                                                            //
          if (!_this._componentInternals.inOnRendered && ((ref3 = _this._componentInternals.templateInstance()) != null ? ref3.view.isRendered : void 0)) {
            return typeof mixinInstance.onRendered === "function" ? mixinInstance.onRendered() : void 0;               //
          }                                                                                                            //
        }                                                                                                              //
      };                                                                                                               //
    }(this));                                                                                                          //
    return this;                                                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.createMixins = function () {                                                                //
    var i, len, mixin, ref;                                                                                            //
    if (this._componentInternals == null) {                                                                            //
      this._componentInternals = {};                                                                                   //
    }                                                                                                                  //
    if (this._componentInternals.mixins) {                                                                             //
      return;                                                                                                          //
    }                                                                                                                  //
    this._componentInternals.mixins = [];                                                                              //
    ref = this.mixins();                                                                                               //
    for (i = 0, len = ref.length; i < len; i++) {                                                                      //
      mixin = ref[i];                                                                                                  //
      this.requireMixin(mixin);                                                                                        //
    }                                                                                                                  //
    return this;                                                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.getMixin = function (nameOrMixin) {                                                         //
    var i, j, len, len1, mixin, mixinComponentName, ref, ref1, ref2;                                                   //
    assert((ref = this._componentInternals) != null ? ref.mixins : void 0);                                            //
    if (_.isString(nameOrMixin)) {                                                                                     //
      ref1 = this._componentInternals.mixins;                                                                          //
      for (i = 0, len = ref1.length; i < len; i++) {                                                                   //
        mixin = ref1[i];                                                                                               //
        mixinComponentName = (typeof mixin.componentName === "function" ? mixin.componentName() : void 0) || null;     //
        if (mixinComponentName && mixinComponentName === nameOrMixin) {                                                //
          return mixin;                                                                                                //
        }                                                                                                              //
      }                                                                                                                //
    } else {                                                                                                           //
      ref2 = this._componentInternals.mixins;                                                                          //
      for (j = 0, len1 = ref2.length; j < len1; j++) {                                                                 //
        mixin = ref2[j];                                                                                               //
        if (mixin.constructor === nameOrMixin) {                                                                       //
          return mixin;                                                                                                //
        } else if (mixin === nameOrMixin) {                                                                            //
          return mixin;                                                                                                //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return null;                                                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.callFirstWith = function () {                                                               //
    var afterComponentOrMixin, args, mixin, propertyName;                                                              //
    afterComponentOrMixin = arguments[0], propertyName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    mixin = this.getFirstWith(afterComponentOrMixin, propertyName);                                                    //
    if (!mixin) {                                                                                                      //
      return;                                                                                                          //
    }                                                                                                                  //
    if (_.isFunction(mixin[propertyName])) {                                                                           //
      return mixin[propertyName].apply(mixin, args);                                                                   //
    } else {                                                                                                           //
      return mixin[propertyName];                                                                                      //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.getFirstWith = function (afterComponentOrMixin, propertyName) {                             //
    var found, i, len, mixin, ref, ref1;                                                                               //
    assert((ref = this._componentInternals) != null ? ref.mixins : void 0);                                            //
    if (!afterComponentOrMixin) {                                                                                      //
      if (propertyName in this) {                                                                                      //
        return this;                                                                                                   //
      }                                                                                                                //
      found = true;                                                                                                    //
    } else if (afterComponentOrMixin && afterComponentOrMixin === this) {                                              //
      found = true;                                                                                                    //
    } else {                                                                                                           //
      found = false;                                                                                                   //
    }                                                                                                                  //
    ref1 = this._componentInternals.mixins;                                                                            //
    for (i = 0, len = ref1.length; i < len; i++) {                                                                     //
      mixin = ref1[i];                                                                                                 //
      if (found && propertyName in mixin) {                                                                            //
        return mixin;                                                                                                  //
      }                                                                                                                //
      if (mixin === afterComponentOrMixin) {                                                                           //
        found = true;                                                                                                  //
      }                                                                                                                //
    }                                                                                                                  //
    return null;                                                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.renderComponent = function (parentComponent) {                                                        //
    return Tracker.nonreactive(function (_this) {                                                                      //
      return function () {                                                                                             //
        var componentClass, data;                                                                                      //
        componentClass = _this;                                                                                        //
        if (Blaze.currentView) {                                                                                       //
          data = Template.currentData();                                                                               //
        } else {                                                                                                       //
          data = null;                                                                                                 //
        }                                                                                                              //
        if ((data != null ? data.constructor : void 0) !== argumentsConstructor) {                                     //
          return wrapViewAndTemplate(Blaze.currentView, function () {                                                  //
            var component;                                                                                             //
            component = new componentClass();                                                                          //
            return component.renderComponent(parentComponent);                                                         //
          });                                                                                                          //
        }                                                                                                              //
        return function () {                                                                                           //
          var currentWith, nonreactiveArguments, reactiveArguments;                                                    //
          assert(Tracker.active);                                                                                      //
          currentWith = Blaze.getView('with');                                                                         //
          reactiveArguments = new ComputedField(function () {                                                          //
            data = currentWith.dataVar.get();                                                                          //
            assert.equal(data != null ? data.constructor : void 0, argumentsConstructor);                              //
            return data._arguments;                                                                                    //
          }, EJSON.equals);                                                                                            //
          nonreactiveArguments = reactiveArguments();                                                                  //
          return Tracker.nonreactive(function () {                                                                     //
            var template;                                                                                              //
            template = Blaze._withCurrentView(Blaze.currentView.parentView.parentView, function (_this) {              //
              return function () {                                                                                     //
                return wrapViewAndTemplate(Blaze.currentView, function () {                                            //
                  var component;                                                                                       //
                  component = function (func, args, ctor) {                                                            //
                    ctor.prototype = func.prototype;                                                                   //
                    var child = new ctor(),                                                                            //
                        result = func.apply(child, args);                                                              //
                    return Object(result) === result ? result : child;                                                 //
                  }(componentClass, nonreactiveArguments, function () {});                                             //
                  return component.renderComponent(parentComponent);                                                   //
                });                                                                                                    //
              };                                                                                                       //
            }(this));                                                                                                  //
            registerFirstCreatedHook(template, function () {                                                           //
              this.view.originalParentView = this.view.parentView;                                                     //
              return this.view.parentView = this.view.parentView.parentView.parentView;                                //
            });                                                                                                        //
            return template;                                                                                           //
          });                                                                                                          //
        };                                                                                                             //
      };                                                                                                               //
    }(this));                                                                                                          //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.renderComponent = function (parentComponent) {                                              //
    return Tracker.nonreactive(function (_this) {                                                                      //
      return function () {                                                                                             //
        var component, template, templateBase;                                                                         //
        component = _this;                                                                                             //
        component.createMixins();                                                                                      //
        templateBase = getTemplateBase(component);                                                                     //
        template = new Blaze.Template("BlazeComponent." + (component.componentName() || 'unnamed'), templateBase.renderFunction);
        if (component._componentInternals == null) {                                                                   //
          component._componentInternals = {};                                                                          //
        }                                                                                                              //
        component._componentInternals.templateBase = templateBase;                                                     //
        registerHooks(template, {                                                                                      //
          onCreated: function () {                                                                                     //
            function onCreated() {                                                                                     //
              var base, base1, base2, base3, componentOrMixin, results;                                                //
              if (parentComponent) {                                                                                   //
                Tracker.nonreactive(function (_this) {                                                                 //
                  return function () {                                                                                 //
                    assert(!component.parentComponent());                                                              //
                    component.parentComponent(parentComponent);                                                        //
                    return parentComponent.addChildComponent(component);                                               //
                  };                                                                                                   //
                }(this));                                                                                              //
              }                                                                                                        //
              this.view._onViewRendered(function (_this) {                                                             //
                return function () {                                                                                   //
                  var componentOrMixin, results;                                                                       //
                  if (_this.view.renderCount !== 1) {                                                                  //
                    return;                                                                                            //
                  }                                                                                                    //
                  componentOrMixin = null;                                                                             //
                  results = [];                                                                                        //
                  while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'events')) {                //
                    results.push(addEvents(_this.view, componentOrMixin));                                             //
                  }                                                                                                    //
                  return results;                                                                                      //
                };                                                                                                     //
              }(this));                                                                                                //
              this.component = component;                                                                              //
              assert(!Tracker.nonreactive(function (_this) {                                                           //
                return function () {                                                                                   //
                  var base;                                                                                            //
                  return typeof (base = _this.component._componentInternals).templateInstance === "function" ? base.templateInstance() : void 0;
                };                                                                                                     //
              }(this)));                                                                                               //
              if ((base = this.component._componentInternals).templateInstance == null) {                              //
                base.templateInstance = new ReactiveField(this, function (a, b) {                                      //
                  return a === b;                                                                                      //
                });                                                                                                    //
              }                                                                                                        //
              this.component._componentInternals.templateInstance(this);                                               //
              if ((base1 = this.component._componentInternals).isCreated == null) {                                    //
                base1.isCreated = new ReactiveField(true);                                                             //
              }                                                                                                        //
              this.component._componentInternals.isCreated(true);                                                      //
              if ((base2 = this.component._componentInternals).isRendered == null) {                                   //
                base2.isRendered = new ReactiveField(false);                                                           //
              }                                                                                                        //
              this.component._componentInternals.isRendered(false);                                                    //
              if ((base3 = this.component._componentInternals).isDestroyed == null) {                                  //
                base3.isDestroyed = new ReactiveField(false);                                                          //
              }                                                                                                        //
              this.component._componentInternals.isDestroyed(false);                                                   //
              try {                                                                                                    //
                this.component._componentInternals.inOnCreated = true;                                                 //
                componentOrMixin = null;                                                                               //
                results = [];                                                                                          //
                while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onCreated')) {                //
                  results.push(componentOrMixin.onCreated());                                                          //
                }                                                                                                      //
                return results;                                                                                        //
              } finally {                                                                                              //
                delete this.component._componentInternals.inOnCreated;                                                 //
              }                                                                                                        //
            }                                                                                                          //
                                                                                                                       //
            return onCreated;                                                                                          //
          }(),                                                                                                         //
          onRendered: function () {                                                                                    //
            function onRendered() {                                                                                    //
              var base, componentOrMixin, results;                                                                     //
              if ((base = this.component._componentInternals).isRendered == null) {                                    //
                base.isRendered = new ReactiveField(true);                                                             //
              }                                                                                                        //
              this.component._componentInternals.isRendered(true);                                                     //
              Tracker.nonreactive(function (_this) {                                                                   //
                return function () {                                                                                   //
                  return assert.equal(_this.component._componentInternals.isCreated(), true);                          //
                };                                                                                                     //
              }(this));                                                                                                //
              try {                                                                                                    //
                this.component._componentInternals.inOnRendered = true;                                                //
                componentOrMixin = null;                                                                               //
                results = [];                                                                                          //
                while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onRendered')) {               //
                  results.push(componentOrMixin.onRendered());                                                         //
                }                                                                                                      //
                return results;                                                                                        //
              } finally {                                                                                              //
                delete this.component._componentInternals.inOnRendered;                                                //
              }                                                                                                        //
            }                                                                                                          //
                                                                                                                       //
            return onRendered;                                                                                         //
          }(),                                                                                                         //
          onDestroyed: function () {                                                                                   //
            function onDestroyed() {                                                                                   //
              return this.autorun(function (_this) {                                                                   //
                return function (computation) {                                                                        //
                  if (_this.component.childComponents().length) {                                                      //
                    return;                                                                                            //
                  }                                                                                                    //
                  computation.stop();                                                                                  //
                  return Tracker.nonreactive(function () {                                                             //
                    var base, base1, componentOrMixin;                                                                 //
                    assert.equal(_this.component._componentInternals.isCreated(), true);                               //
                    _this.component._componentInternals.isCreated(false);                                              //
                    if ((base = _this.component._componentInternals).isRendered == null) {                             //
                      base.isRendered = new ReactiveField(false);                                                      //
                    }                                                                                                  //
                    _this.component._componentInternals.isRendered(false);                                             //
                    if ((base1 = _this.component._componentInternals).isDestroyed == null) {                           //
                      base1.isDestroyed = new ReactiveField(true);                                                     //
                    }                                                                                                  //
                    _this.component._componentInternals.isDestroyed(true);                                             //
                    componentOrMixin = null;                                                                           //
                    while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'onDestroyed')) {         //
                      componentOrMixin.onDestroyed();                                                                  //
                    }                                                                                                  //
                    if (parentComponent) {                                                                             //
                      component.parentComponent(null);                                                                 //
                      parentComponent.removeChildComponent(component);                                                 //
                    }                                                                                                  //
                    return _this.component._componentInternals.templateInstance(null);                                 //
                  });                                                                                                  //
                };                                                                                                     //
              }(this));                                                                                                //
            }                                                                                                          //
                                                                                                                       //
            return onDestroyed;                                                                                        //
          }()                                                                                                          //
        });                                                                                                            //
        return template;                                                                                               //
      };                                                                                                               //
    }(this));                                                                                                          //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.removeComponent = function () {                                                             //
    if (this.isRendered()) {                                                                                           //
      return Blaze.remove(this._componentInternals.templateInstance().view);                                           //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.renderComponentToHTML = function (parentComponent, parentView, data) {                                //
    var component;                                                                                                     //
    component = Tracker.nonreactive(function (_this) {                                                                 //
      return function () {                                                                                             //
        var componentClass;                                                                                            //
        componentClass = _this;                                                                                        //
        parentView = parentView || currentViewIfRendering() || (parentComponent != null ? parentComponent.isRendered() : void 0) && parentComponent._componentInternals.templateInstance().view || null;
        return wrapViewAndTemplate(parentView, function () {                                                           //
          return new componentClass();                                                                                 //
        });                                                                                                            //
      };                                                                                                               //
    }(this));                                                                                                          //
    if (arguments.length > 2) {                                                                                        //
      return component.renderComponentToHTML(parentComponent, parentView, data);                                       //
    } else {                                                                                                           //
      return component.renderComponentToHTML(parentComponent, parentView);                                             //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.renderComponentToHTML = function (parentComponent, parentView, data) {                      //
    var expandedView, template;                                                                                        //
    template = Tracker.nonreactive(function (_this) {                                                                  //
      return function () {                                                                                             //
        parentView = parentView || currentViewIfRendering() || (parentComponent != null ? parentComponent.isRendered() : void 0) && parentComponent._componentInternals.templateInstance().view || null;
        return wrapViewAndTemplate(parentView, function () {                                                           //
          return _this.renderComponent(parentComponent);                                                               //
        });                                                                                                            //
      };                                                                                                               //
    }(this));                                                                                                          //
    if (arguments.length > 2) {                                                                                        //
      expandedView = expandView(Blaze._TemplateWith(data, contentAsFunc(template)), parentView);                       //
    } else {                                                                                                           //
      expandedView = expandView(contentAsView(template), parentView);                                                  //
    }                                                                                                                  //
    return HTML.toHTML(expandedView);                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.template = function () {                                                                    //
    return this.callFirstWith(this, 'template') || this.constructor.componentName();                                   //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.onCreated = function () {                                                                   //
    return callTemplateBaseHooks(this, 'created');                                                                     //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.onRendered = function () {                                                                  //
    return callTemplateBaseHooks(this, 'rendered');                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.onDestroyed = function () {                                                                 //
    return callTemplateBaseHooks(this, 'destroyed');                                                                   //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.isCreated = function () {                                                                   //
    var base;                                                                                                          //
    if (this._componentInternals == null) {                                                                            //
      this._componentInternals = {};                                                                                   //
    }                                                                                                                  //
    if ((base = this._componentInternals).isCreated == null) {                                                         //
      base.isCreated = new ReactiveField(false);                                                                       //
    }                                                                                                                  //
    return this._componentInternals.isCreated();                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.isRendered = function () {                                                                  //
    var base;                                                                                                          //
    if (this._componentInternals == null) {                                                                            //
      this._componentInternals = {};                                                                                   //
    }                                                                                                                  //
    if ((base = this._componentInternals).isRendered == null) {                                                        //
      base.isRendered = new ReactiveField(false);                                                                      //
    }                                                                                                                  //
    return this._componentInternals.isRendered();                                                                      //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.isDestroyed = function () {                                                                 //
    var base;                                                                                                          //
    if (this._componentInternals == null) {                                                                            //
      this._componentInternals = {};                                                                                   //
    }                                                                                                                  //
    if ((base = this._componentInternals).isDestroyed == null) {                                                       //
      base.isDestroyed = new ReactiveField(false);                                                                     //
    }                                                                                                                  //
    return this._componentInternals.isDestroyed();                                                                     //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.insertDOMElement = function (parent, node, before) {                                        //
    if (before == null) {                                                                                              //
      before = null;                                                                                                   //
    }                                                                                                                  //
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {                               //
      parent.insertBefore(node, before);                                                                               //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.moveDOMElement = function (parent, node, before) {                                          //
    if (before == null) {                                                                                              //
      before = null;                                                                                                   //
    }                                                                                                                  //
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {                               //
      parent.insertBefore(node, before);                                                                               //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.removeDOMElement = function (parent, node) {                                                //
    if (parent && node && node.parentNode === parent) {                                                                //
      parent.removeChild(node);                                                                                        //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.events = function () {                                                                      //
    var eventMap, events, fn, handler, i, len, ref, results, spec, templateInstance, view;                             //
    if (this._componentInternals == null) {                                                                            //
      this._componentInternals = {};                                                                                   //
    }                                                                                                                  //
    if (!this._componentInternals.templateInstance) {                                                                  //
      return [];                                                                                                       //
    }                                                                                                                  //
    view = Tracker.nonreactive(function (_this) {                                                                      //
      return function () {                                                                                             //
        return _this._componentInternals.templateInstance().view;                                                      //
      };                                                                                                               //
    }(this));                                                                                                          //
    templateInstance = getTemplateInstanceFunction(view, true);                                                        //
    ref = this._componentInternals.templateBase.__eventMaps;                                                           //
    results = [];                                                                                                      //
    for (i = 0, len = ref.length; i < len; i++) {                                                                      //
      events = ref[i];                                                                                                 //
      eventMap = {};                                                                                                   //
      fn = function fn(spec, handler) {                                                                                //
        return eventMap[spec] = function () {                                                                          //
          var args;                                                                                                    //
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                //
          return withTemplateInstanceFunc(templateInstance, function () {                                              //
            return Blaze._withCurrentView(view, function () {                                                          //
              return handler.apply(view, args);                                                                        //
            });                                                                                                        //
          });                                                                                                          //
        };                                                                                                             //
      };                                                                                                               //
      for (spec in meteorBabelHelpers.sanitizeForInObject(events)) {                                                   //
        handler = events[spec];                                                                                        //
        fn(spec, handler);                                                                                             //
      }                                                                                                                //
      results.push(eventMap);                                                                                          //
    }                                                                                                                  //
    return results;                                                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.data = function (path, equalsFunc) {                                                        //
    var base, ref, view;                                                                                               //
    if (this._componentInternals == null) {                                                                            //
      this._componentInternals = {};                                                                                   //
    }                                                                                                                  //
    if ((base = this._componentInternals).templateInstance == null) {                                                  //
      base.templateInstance = new ReactiveField(null, function (a, b) {                                                //
        return a === b;                                                                                                //
      });                                                                                                              //
    }                                                                                                                  //
    if (view = (ref = this._componentInternals.templateInstance()) != null ? ref.view : void 0) {                      //
      if (path != null) {                                                                                              //
        return DataLookup.get(function (_this) {                                                                       //
          return function () {                                                                                         //
            return Blaze.getData(view);                                                                                //
          };                                                                                                           //
        }(this), path, equalsFunc);                                                                                    //
      } else {                                                                                                         //
        return Blaze.getData(view);                                                                                    //
      }                                                                                                                //
    }                                                                                                                  //
    return void 0;                                                                                                     //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.currentData = function (path, equalsFunc) {                                                           //
    var currentView;                                                                                                   //
    if (!Blaze.currentView) {                                                                                          //
      return void 0;                                                                                                   //
    }                                                                                                                  //
    currentView = Blaze.currentView;                                                                                   //
    if (_.isString(path)) {                                                                                            //
      path = path.split('.');                                                                                          //
    } else if (!_.isArray(path)) {                                                                                     //
      return Blaze.getData(currentView);                                                                               //
    }                                                                                                                  //
    return DataLookup.get(function (_this) {                                                                           //
      return function () {                                                                                             //
        var lexicalData, result;                                                                                       //
        if (Blaze._lexicalBindingLookup && (lexicalData = Blaze._lexicalBindingLookup(currentView, path[0]))) {        //
          result = {};                                                                                                 //
          result[path[0]] = lexicalData;                                                                               //
          return result;                                                                                               //
        }                                                                                                              //
        return Blaze.getData(currentView);                                                                             //
      };                                                                                                               //
    }(this), path, equalsFunc);                                                                                        //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.currentData = function (path, equalsFunc) {                                                 //
    return this.constructor.currentData(path, equalsFunc);                                                             //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.component = function () {                                                                   //
    return this;                                                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.currentComponent = function () {                                                                      //
    var templateInstance;                                                                                              //
    templateInstance = getTemplateInstanceFunction(Blaze.currentView, false);                                          //
    return templateInstanceToComponent(templateInstance, false);                                                       //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.currentComponent = function () {                                                            //
    return this.constructor.currentComponent();                                                                        //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.firstNode = function () {                                                                   //
    if (this.isRendered()) {                                                                                           //
      return this._componentInternals.templateInstance().view._domrange.firstNode();                                   //
    }                                                                                                                  //
    return void 0;                                                                                                     //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.lastNode = function () {                                                                    //
    if (this.isRendered()) {                                                                                           //
      return this._componentInternals.templateInstance().view._domrange.lastNode();                                    //
    }                                                                                                                  //
    return void 0;                                                                                                     //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponent.prototype.autorun = function (runFunc) {                                                              //
    var templateInstance;                                                                                              //
    templateInstance = Tracker.nonreactive(function (_this) {                                                          //
      return function () {                                                                                             //
        var ref;                                                                                                       //
        return (ref = _this._componentInternals) != null ? typeof ref.templateInstance === "function" ? ref.templateInstance() : void 0 : void 0;
      };                                                                                                               //
    }(this));                                                                                                          //
    if (!templateInstance) {                                                                                           //
      throw new Error("The component has to be created before calling 'autorun'.");                                    //
    }                                                                                                                  //
    return templateInstance.autorun(_.bind(runFunc, this));                                                            //
  };                                                                                                                   //
                                                                                                                       //
  return BlazeComponent;                                                                                               //
}(BaseComponent);                                                                                                      //
                                                                                                                       //
SUPPORTS_REACTIVE_INSTANCE = ['subscriptionsReady'];                                                                   //
                                                                                                                       //
REQUIRE_RENDERED_INSTANCE = ['$', 'find', 'findAll'];                                                                  //
                                                                                                                       //
ref = Blaze.TemplateInstance.prototype;                                                                                //
for (methodName in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                      //
  method = ref[methodName];                                                                                            //
  if (!(methodName in BlazeComponent.prototype)) {                                                                     //
    (function (methodName, method) {                                                                                   //
      if (indexOf.call(SUPPORTS_REACTIVE_INSTANCE, methodName) >= 0) {                                                 //
        return BlazeComponent.prototype[methodName] = function () {                                                    //
          var args, base, templateInstance;                                                                            //
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                //
          if (this._componentInternals == null) {                                                                      //
            this._componentInternals = {};                                                                             //
          }                                                                                                            //
          if ((base = this._componentInternals).templateInstance == null) {                                            //
            base.templateInstance = new ReactiveField(null, function (a, b) {                                          //
              return a === b;                                                                                          //
            });                                                                                                        //
          }                                                                                                            //
          if (templateInstance = this._componentInternals.templateInstance()) {                                        //
            return templateInstance[methodName].apply(templateInstance, args);                                         //
          }                                                                                                            //
          return void 0;                                                                                               //
        };                                                                                                             //
      } else if (indexOf.call(REQUIRE_RENDERED_INSTANCE, methodName) >= 0) {                                           //
        return BlazeComponent.prototype[methodName] = function () {                                                    //
          var args, ref1;                                                                                              //
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                //
          if (this.isRendered()) {                                                                                     //
            return (ref1 = this._componentInternals.templateInstance())[methodName].apply(ref1, args);                 //
          }                                                                                                            //
          return void 0;                                                                                               //
        };                                                                                                             //
      } else {                                                                                                         //
        return BlazeComponent.prototype[methodName] = function () {                                                    //
          var args, templateInstance;                                                                                  //
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                //
          templateInstance = Tracker.nonreactive(function (_this) {                                                    //
            return function () {                                                                                       //
              var ref1;                                                                                                //
              return (ref1 = _this._componentInternals) != null ? typeof ref1.templateInstance === "function" ? ref1.templateInstance() : void 0 : void 0;
            };                                                                                                         //
          }(this));                                                                                                    //
          if (!templateInstance) {                                                                                     //
            throw new Error("The component has to be created before calling '" + methodName + "'.");                   //
          }                                                                                                            //
          return templateInstance[methodName].apply(templateInstance, args);                                           //
        };                                                                                                             //
      }                                                                                                                //
    })(methodName, method);                                                                                            //
  }                                                                                                                    //
}                                                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/debug.coffee.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var                                                                                                                    // 1
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,                                                                                         //
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                                                                       //
BlazeComponentDebug = (function(superClass) {                                                                          // 1
  extend(BlazeComponentDebug, superClass);                                                                             //
                                                                                                                       //
  function BlazeComponentDebug() {                                                                                     //
    return BlazeComponentDebug.__super__.constructor.apply(this, arguments);                                           //
  }                                                                                                                    //
                                                                                                                       //
  BlazeComponentDebug.startComponent = function(component) {                                                           //
    BlazeComponentDebug.__super__.constructor.startComponent.apply(this, arguments);                                   //
    return console.log(component.data());                                                                              //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponentDebug.startMarkedComponent = function(component) {                                                     //
    BlazeComponentDebug.__super__.constructor.startMarkedComponent.apply(this, arguments);                             //
    return console.log(component.data());                                                                              //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponentDebug.dumpComponentSubtree = function(rootComponentOrElement) {                                        //
    if ('nodeType' in rootComponentOrElement && rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {               //
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);                          //
    }                                                                                                                  //
    return BlazeComponentDebug.__super__.constructor.dumpComponentSubtree.apply(this, arguments);                      //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponentDebug.dumpComponentTree = function(rootComponentOrElement) {                                           //
    if ('nodeType' in rootComponentOrElement && rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {               //
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);                          //
    }                                                                                                                  //
    return BlazeComponentDebug.__super__.constructor.dumpComponentTree.apply(this, arguments);                         //
  };                                                                                                                   //
                                                                                                                       //
  BlazeComponentDebug.dumpAllComponents = function() {                                                                 //
    var allRootComponents, j, len, rootComponent;                                                                      // 25
    allRootComponents = [];                                                                                            //
    $('*').each((function(_this) {                                                                                     //
      return function(i, element) {                                                                                    //
        var component, rootComponent;                                                                                  // 28
        component = BlazeComponent.getComponentForElement(element);                                                    //
        if (!component) {                                                                                              //
          return;                                                                                                      // 29
        }                                                                                                              //
        rootComponent = _this.componentRoot(component);                                                                //
        if (indexOf.call(allRootComponents, rootComponent) < 0) {                                                      //
          return allRootComponents.push(rootComponent);                                                                //
        }                                                                                                              //
      };                                                                                                               //
    })(this));                                                                                                         //
    for (j = 0, len = allRootComponents.length; j < len; j++) {                                                        // 33
      rootComponent = allRootComponents[j];                                                                            //
      this.dumpComponentSubtree(rootComponent);                                                                        //
    }                                                                                                                  // 33
  };                                                                                                                   //
                                                                                                                       //
  return BlazeComponentDebug;                                                                                          //
                                                                                                                       //
})(BaseComponentDebug);                                                                                                //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/client.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var EventHandler, WHITESPACE_REGEX, createUIHooks, originalDOMRangeAttach, originalExpandAttributes, originalInsertNodeWithHooks, originalMakeAttributeHandler, originalMoveNodeWithHooks, originalToText, propagateUIHooks;
                                                                                                                       //
propagateUIHooks = function(parent, node) {                                                                            // 1
  var childNode, i, len, ref;                                                                                          // 2
  if (!parent._uihooks || node._uihooks) {                                                                             //
    return;                                                                                                            // 2
  }                                                                                                                    //
  node._uihooks = _.extend({}, parent._uihooks, {                                                                      //
    parentNode: node                                                                                                   //
  });                                                                                                                  //
  if (!node.hasChildNodes()) {                                                                                         //
    return;                                                                                                            // 6
  }                                                                                                                    //
  ref = node.childNodes;                                                                                               // 8
  for (i = 0, len = ref.length; i < len; i++) {                                                                        // 8
    childNode = ref[i];                                                                                                //
    if (childNode.nodeType === Node.ELEMENT_NODE) {                                                                    //
      propagateUIHooks(node, childNode);                                                                               //
    }                                                                                                                  //
  }                                                                                                                    // 8
};                                                                                                                     // 1
                                                                                                                       //
originalInsertNodeWithHooks = Blaze._DOMRange._insertNodeWithHooks;                                                    // 14
                                                                                                                       //
Blaze._DOMRange._insertNodeWithHooks = function(node, parent, next) {                                                  // 15
  propagateUIHooks(parent, node);                                                                                      //
  return originalInsertNodeWithHooks(node, parent, next);                                                              //
};                                                                                                                     // 15
                                                                                                                       //
originalMoveNodeWithHooks = Blaze._DOMRange._moveNodeWithHooks;                                                        // 19
                                                                                                                       //
Blaze._DOMRange._moveNodeWithHooks = function(node, parent, next) {                                                    // 20
  propagateUIHooks(parent, node);                                                                                      //
  return originalMoveNodeWithHooks(node, parent, next);                                                                //
};                                                                                                                     // 20
                                                                                                                       //
createUIHooks = function(component, parentNode) {                                                                      // 24
  return {                                                                                                             //
    parentNode: parentNode,                                                                                            //
    insertElement: function(node, before) {                                                                            //
      return component.insertDOMElement(this.parentNode, node, before);                                                //
    },                                                                                                                 //
    moveElement: function(node, before) {                                                                              //
      return component.moveDOMElement(this.parentNode, node, before);                                                  //
    },                                                                                                                 //
    removeElement: function(node) {                                                                                    //
      return component.removeDOMElement(node.parentNode, node);                                                        //
    }                                                                                                                  //
  };                                                                                                                   //
};                                                                                                                     // 24
                                                                                                                       //
originalDOMRangeAttach = Blaze._DOMRange.prototype.attach;                                                             // 36
                                                                                                                       //
Blaze._DOMRange.prototype.attach = function(parentElement, nextNode, _isMove, _isReplace) {                            // 37
  var childNode, component, i, j, len, len1, member, oldUIHooks, ref, ref1, ref2, ref3;                                // 38
  if (component = (ref = this.view) != null ? (ref1 = ref._templateInstance) != null ? ref1.component : void 0 : void 0) {
    ref2 = this.members;                                                                                               // 39
    for (i = 0, len = ref2.length; i < len; i++) {                                                                     // 39
      member = ref2[i];                                                                                                //
      if (!(!(member instanceof Blaze._DOMRange))) {                                                                   //
        continue;                                                                                                      //
      }                                                                                                                //
      member._uihooks = createUIHooks(component, member);                                                              //
      if (!member.hasChildNodes()) {                                                                                   //
        continue;                                                                                                      // 42
      }                                                                                                                //
      ref3 = member.childNodes;                                                                                        // 44
      for (j = 0, len1 = ref3.length; j < len1; j++) {                                                                 // 44
        childNode = ref3[j];                                                                                           //
        if (childNode.nodeType === Node.ELEMENT_NODE) {                                                                //
          propagateUIHooks(member, childNode);                                                                         //
        }                                                                                                              //
      }                                                                                                                // 44
    }                                                                                                                  // 39
    oldUIHooks = parentElement._uihooks;                                                                               //
    try {                                                                                                              // 48
      parentElement._uihooks = createUIHooks(component, parentElement);                                                //
      return originalDOMRangeAttach.apply(this, arguments);                                                            // 50
    } finally {                                                                                                        //
      if (oldUIHooks) {                                                                                                //
        parentElement._uihooks = oldUIHooks;                                                                           //
      } else {                                                                                                         //
        delete parentElement._uihooks;                                                                                 //
      }                                                                                                                //
    }                                                                                                                  //
  }                                                                                                                    //
  return originalDOMRangeAttach.apply(this, arguments);                                                                //
};                                                                                                                     // 37
                                                                                                                       //
WHITESPACE_REGEX = /^\s+$/;                                                                                            // 59
                                                                                                                       //
EventHandler = Blaze._AttributeHandler.extend({                                                                        // 61
  update: function(element, oldValue, value) {                                                                         //
    var $element, eventName, fun, i, j, len, len1, results;                                                            // 63
    if (!oldValue) {                                                                                                   //
      oldValue = [];                                                                                                   //
    }                                                                                                                  //
    if (!_.isArray(oldValue)) {                                                                                        //
      oldValue = [oldValue];                                                                                           //
    }                                                                                                                  //
    if (!value) {                                                                                                      //
      value = [];                                                                                                      //
    }                                                                                                                  //
    if (!_.isArray(value)) {                                                                                           //
      value = [value];                                                                                                 //
    }                                                                                                                  //
    assert(_.every(oldValue, share.isEventHandler), oldValue);                                                         //
    assert(_.every(value, share.isEventHandler), value);                                                               //
    $element = $(element);                                                                                             //
    eventName = this.name.substr(2).toLowerCase();                                                                     //
    for (i = 0, len = oldValue.length; i < len; i++) {                                                                 // 75
      fun = oldValue[i];                                                                                               //
      $element.off(eventName, fun);                                                                                    //
    }                                                                                                                  // 75
    results = [];                                                                                                      // 76
    for (j = 0, len1 = value.length; j < len1; j++) {                                                                  //
      fun = value[j];                                                                                                  //
      results.push($element.on(eventName, fun));                                                                       //
    }                                                                                                                  // 76
    return results;                                                                                                    //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
originalMakeAttributeHandler = Blaze._makeAttributeHandler;                                                            // 78
                                                                                                                       //
Blaze._makeAttributeHandler = function(elem, name, value) {                                                            // 79
  if (share.EVENT_HANDLER_REGEX.test(name)) {                                                                          //
    return new EventHandler(name, value);                                                                              //
  } else {                                                                                                             //
    return originalMakeAttributeHandler(elem, name, value);                                                            //
  }                                                                                                                    //
};                                                                                                                     // 79
                                                                                                                       //
originalToText = Blaze._toText;                                                                                        // 85
                                                                                                                       //
Blaze._toText = function(htmljs, parentView, textMode) {                                                               // 86
  if (share.isEventHandler(htmljs)) {                                                                                  //
    return htmljs;                                                                                                     //
  } else if (_.isArray(htmljs) && _.some(htmljs, share.isEventHandler)) {                                              //
    return _.filter(htmljs, function(fun) {                                                                            //
      if (share.isEventHandler(fun)) {                                                                                 //
        return true;                                                                                                   // 94
      }                                                                                                                //
      if (WHITESPACE_REGEX.test(fun)) {                                                                                //
        return false;                                                                                                  // 95
      }                                                                                                                //
      throw new Error("Invalid event handler: " + fun);                                                                // 98
    });                                                                                                                //
  } else {                                                                                                             //
    return originalToText(htmljs, parentView, textMode);                                                               //
  }                                                                                                                    //
};                                                                                                                     // 86
                                                                                                                       //
originalExpandAttributes = Blaze._expandAttributes;                                                                    // 102
                                                                                                                       //
Blaze._expandAttributes = function(attrs, parentView) {                                                                // 103
  var previousInExpandAttributes;                                                                                      // 104
  previousInExpandAttributes = share.inExpandAttributes;                                                               //
  share.inExpandAttributes = true;                                                                                     //
  try {                                                                                                                // 106
    return originalExpandAttributes(attrs, parentView);                                                                //
  } finally {                                                                                                          //
    share.inExpandAttributes = previousInExpandAttributes;                                                             //
  }                                                                                                                    //
};                                                                                                                     // 103
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:blaze-components'] = {}, {
  Template: Template,
  BlazeComponent: BlazeComponent,
  BlazeComponentDebug: BlazeComponentDebug
});

})();
