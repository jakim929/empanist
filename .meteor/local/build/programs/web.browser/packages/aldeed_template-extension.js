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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
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

/* Package-scope variables */
var Hooks;

var require = meteorInstall({"node_modules":{"meteor":{"aldeed:template-extension":{"lib":{"hooks.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/hooks.js                                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Hooks = {                                                                                                       // 1
  global: {                                                                                                     // 2
    created: [],                                                                                                // 3
    rendered: [],                                                                                               // 4
    destroyed: []                                                                                               // 5
  },                                                                                                            // 2
  master: {                                                                                                     // 7
    created: function () {                                                                                      // 8
      function created() {                                                                                      // 8
        Hooks.runGlobal('created', this, arguments);                                                            // 9
      }                                                                                                         // 10
                                                                                                                //
      return created;                                                                                           // 8
    }(),                                                                                                        // 8
    rendered: function () {                                                                                     // 11
      function rendered() {                                                                                     // 11
        Hooks.runGlobal('rendered', this, arguments);                                                           // 12
      }                                                                                                         // 13
                                                                                                                //
      return rendered;                                                                                          // 11
    }(),                                                                                                        // 11
    destroyed: function () {                                                                                    // 14
      function destroyed() {                                                                                    // 14
        Hooks.runGlobal('destroyed', this, arguments);                                                          // 15
      }                                                                                                         // 16
                                                                                                                //
      return destroyed;                                                                                         // 14
    }()                                                                                                         // 14
  }                                                                                                             // 7
};                                                                                                              // 1
                                                                                                                //
Hooks.addGlobal = function (template) {                                                                         // 20
  // For each hookType, define the hooks for this template.                                                     //
  // Since we might call this multiple times from startup code                                                  //
  // and other functions, make sure we do it only once.                                                         //
  // Doing it twice would create an infinite loop of self-calling                                               //
  // hooks.                                                                                                     //
  if (!template._hasTemplateExtensionMasterHooks) {                                                             // 26
    template.onCreated(Hooks.master.created);                                                                   // 27
    template.onRendered(Hooks.master.rendered);                                                                 // 28
    template.onDestroyed(Hooks.master.destroyed);                                                               // 29
                                                                                                                //
    template._hasTemplateExtensionMasterHooks = true;                                                           // 31
  }                                                                                                             // 32
};                                                                                                              // 33
                                                                                                                //
Hooks.runGlobal = function (type, template, args) {                                                             // 35
  for (var _iterator = Hooks.global[type], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;                                                                                                   // 36
                                                                                                                //
    if (_isArray) {                                                                                             // 36
      if (_i >= _iterator.length) break;                                                                        // 36
      _ref = _iterator[_i++];                                                                                   // 36
    } else {                                                                                                    // 36
      _i = _iterator.next();                                                                                    // 36
      if (_i.done) break;                                                                                       // 36
      _ref = _i.value;                                                                                          // 36
    }                                                                                                           // 36
                                                                                                                //
    var hook = _ref;                                                                                            // 36
                                                                                                                //
    hook.apply(template, args);                                                                                 // 37
  }                                                                                                             // 38
};                                                                                                              // 39
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-for-each.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-for-each.js                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.forEach = function (callback) {                                                                        // 1
  // for some reason we get the "body" template twice when looping, so                                          //
  // we track that and only call the callback once.                                                             //
  var alreadyDidBody = false;                                                                                   // 4
  for (var t in meteorBabelHelpers.sanitizeForInObject(Template)) {                                             // 5
    if (Template.hasOwnProperty(t)) {                                                                           // 6
      var tmpl = Template[t];                                                                                   // 7
      if (Blaze.isTemplate(tmpl)) {                                                                             // 8
        var name = tmpl.viewName;                                                                               // 9
        if (name === "body") {                                                                                  // 10
          if (!alreadyDidBody) {                                                                                // 11
            alreadyDidBody = true;                                                                              // 12
            callback(tmpl);                                                                                     // 13
          }                                                                                                     // 14
        } else if (name !== 'Template.__dynamic' && name !== 'Template.__dynamicWithDataContext') {             // 15
          callback(tmpl);                                                                                       // 16
        }                                                                                                       // 17
      }                                                                                                         // 18
    }                                                                                                           // 19
  }                                                                                                             // 20
};                                                                                                              // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-hooks.js":["babel-runtime/helpers/typeof",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-hooks.js                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                         //
                                                                                                                //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
Template.prototype.hooks = function (hooks) {                                                                   // 1
  if (!hooks || (typeof hooks === "undefined" ? "undefined" : (0, _typeof3["default"])(hooks)) !== "object") {  // 2
    throw new Error("hooks argument must be an object with created, rendered, and/or destroyed properties, each set to a function");
  }                                                                                                             // 4
                                                                                                                //
  if (typeof hooks.created === 'function') this.onCreated(hooks.created);                                       // 6
  if (typeof hooks.rendered === 'function') this.onRendered(hooks.rendered);                                    // 7
  if (typeof hooks.destroyed === 'function') this.onDestroyed(hooks.destroyed);                                 // 8
};                                                                                                              // 9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template-global-hooks.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-global-hooks.js                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// Setup for multiple hooks support                                                                             //
// We assume that no other code will be directly defining                                                       //
// a hook once the client has started.                                                                          //
Meteor.startup(function () {                                                                                    // 4
  Template.forEach(function (template) {                                                                        // 5
    Hooks.addGlobal(template);                                                                                  // 6
  });                                                                                                           // 7
});                                                                                                             // 8
                                                                                                                //
Template.onCreated = function (hook) {                                                                          // 10
  Hooks.global.created.push(hook);                                                                              // 11
};                                                                                                              // 12
                                                                                                                //
Template.onRendered = function (hook) {                                                                         // 14
  Hooks.global.rendered.push(hook);                                                                             // 15
};                                                                                                              // 16
                                                                                                                //
Template.onDestroyed = function (hook) {                                                                        // 18
  Hooks.global.destroyed.push(hook);                                                                            // 19
};                                                                                                              // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-for-each-instance.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-for-each-instance.js                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template._renderedInstances = [];                                                                               // 1
                                                                                                                //
Template.onRendered(function () {                                                                               // 3
  Template._renderedInstances.push(this);                                                                       // 4
});                                                                                                             // 5
                                                                                                                //
Template.onDestroyed(function () {                                                                              // 7
  var i = Template._renderedInstances.indexOf(this);                                                            // 8
  if (i > -1) Template._renderedInstances.splice(i, 1);                                                         // 9
});                                                                                                             // 10
                                                                                                                //
Template.forEachCurrentlyRenderedInstance = function (func) {                                                   // 12
  Template._renderedInstances.forEach(func);                                                                    // 13
};                                                                                                              // 14
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-inherits-events-from.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-inherits-events-from.js                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.prototype.inheritsEventsFrom = function () {                                                           // 1
  function inheritsEventsFrom(otherTemplate) {                                                                  // 1
    var self = this;                                                                                            // 2
                                                                                                                //
    self.__eventMaps = self.__eventMaps || [];                                                                  // 4
                                                                                                                //
    function inheritEvents(template) {                                                                          // 6
      // String template names can be provided and template object is looked up                                 //
      if (typeof template === 'string') template = Template[template];                                          // 8
      if (!template) return;                                                                                    // 9
                                                                                                                //
      self.__eventMaps = self.__eventMaps.concat(template.__eventMaps);                                         // 11
    }                                                                                                           // 12
                                                                                                                //
    // Accept an array as otherTemplate argument                                                                //
    if (_.isArray(otherTemplate)) {                                                                             // 15
      _.each(otherTemplate, inheritEvents);                                                                     // 16
    } else {                                                                                                    // 17
      //otherTemplate is a string                                                                               //
      inheritEvents(otherTemplate);                                                                             // 18
    }                                                                                                           // 19
  }                                                                                                             // 20
                                                                                                                //
  return inheritsEventsFrom;                                                                                    // 1
}();                                                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-inherits-helpers-from.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-inherits-helpers-from.js                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.prototype.inheritsHelpersFrom = function () {                                                          // 1
  function inheritsHelpersFrom(otherTemplate) {                                                                 // 1
    var self = this;                                                                                            // 2
                                                                                                                //
    function inheritHelpers(template) {                                                                         // 4
      // String template names can be provided and template object is looked up                                 //
      if (typeof template === 'string') template = Template[template];                                          // 6
      if (!template) return;                                                                                    // 7
                                                                                                                //
      var inheritedHelpers = {};                                                                                // 9
      _.each(template.__helpers, function (helper, name) {                                                      // 10
        if (name.charAt(0) === " ") inheritedHelpers[name.slice(1)] = helper;                                   // 11
      });                                                                                                       // 12
                                                                                                                //
      self.helpers(inheritedHelpers);                                                                           // 14
    }                                                                                                           // 15
                                                                                                                //
    // Accept an array as otherTemplate argument                                                                //
    if (_.isArray(otherTemplate)) {                                                                             // 18
      _.each(otherTemplate, inheritHelpers);                                                                    // 19
    } else {                                                                                                    // 20
      //otherTemplate is a string                                                                               //
      inheritHelpers(otherTemplate);                                                                            // 21
    }                                                                                                           // 22
  }                                                                                                             // 23
                                                                                                                //
  return inheritsHelpersFrom;                                                                                   // 1
}();                                                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-inherits-hooks-from.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-inherits-hooks-from.js                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.prototype.inheritsHooksFrom = function () {                                                            // 1
  function inheritsHooksFrom(otherTemplate) {                                                                   // 1
    var self = this;                                                                                            // 2
                                                                                                                //
    function inheritHooks(template) {                                                                           // 4
      // String template names can be provided and template object is looked up                                 //
      if (typeof template === 'string') template = Template[template];                                          // 6
      if (!template) return;                                                                                    // 7
                                                                                                                //
      // For this to work properly, need to ensure that we've defined                                           //
      // the global hook hook for the other template already.                                                   //
      Hooks.addGlobal(template);                                                                                // 11
                                                                                                                //
      for (var _iterator = template._callbacks.created, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;                                                                                               // 13
                                                                                                                //
        if (_isArray) {                                                                                         // 13
          if (_i >= _iterator.length) break;                                                                    // 13
          _ref = _iterator[_i++];                                                                               // 13
        } else {                                                                                                // 13
          _i = _iterator.next();                                                                                // 13
          if (_i.done) break;                                                                                   // 13
          _ref = _i.value;                                                                                      // 13
        }                                                                                                       // 13
                                                                                                                //
        var hook = _ref;                                                                                        // 13
                                                                                                                //
        // Don't copy the master hook because every template already has it                                     //
        if (hook === Hooks.master.created) continue;                                                            // 15
        self.onCreated(hook);                                                                                   // 16
      }                                                                                                         // 17
                                                                                                                //
      for (var _iterator2 = template._callbacks.rendered, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;                                                                                              // 19
                                                                                                                //
        if (_isArray2) {                                                                                        // 19
          if (_i2 >= _iterator2.length) break;                                                                  // 19
          _ref2 = _iterator2[_i2++];                                                                            // 19
        } else {                                                                                                // 19
          _i2 = _iterator2.next();                                                                              // 19
          if (_i2.done) break;                                                                                  // 19
          _ref2 = _i2.value;                                                                                    // 19
        }                                                                                                       // 19
                                                                                                                //
        var _hook = _ref2;                                                                                      // 19
                                                                                                                //
        // Don't copy the master hook because every template already has it                                     //
        if (_hook === Hooks.master.rendered) continue;                                                          // 21
        self.onRendered(_hook);                                                                                 // 22
      }                                                                                                         // 23
                                                                                                                //
      for (var _iterator3 = template._callbacks.destroyed, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;                                                                                              // 25
                                                                                                                //
        if (_isArray3) {                                                                                        // 25
          if (_i3 >= _iterator3.length) break;                                                                  // 25
          _ref3 = _iterator3[_i3++];                                                                            // 25
        } else {                                                                                                // 25
          _i3 = _iterator3.next();                                                                              // 25
          if (_i3.done) break;                                                                                  // 25
          _ref3 = _i3.value;                                                                                    // 25
        }                                                                                                       // 25
                                                                                                                //
        var _hook2 = _ref3;                                                                                     // 25
                                                                                                                //
        // Don't copy the master hook because every template already has it                                     //
        if (_hook2 === Hooks.master.destroyed) continue;                                                        // 27
        self.onDestroyed(_hook2);                                                                               // 28
      }                                                                                                         // 29
    }                                                                                                           // 30
                                                                                                                //
    // Accept an array as otherTemplate argument                                                                //
    if (_.isArray(otherTemplate)) {                                                                             // 33
      _.each(otherTemplate, inheritHooks);                                                                      // 34
    } else {                                                                                                    // 35
      //otherTemplate is a string                                                                               //
      inheritHooks(otherTemplate);                                                                              // 36
    }                                                                                                           // 37
  }                                                                                                             // 38
                                                                                                                //
  return inheritsHooksFrom;                                                                                     // 1
}();                                                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-register-helpers.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-register-helpers.js                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.registerHelpers = function (helpers) {                                                                 // 1
  if (!helpers) return;                                                                                         // 2
                                                                                                                //
  for (var name in meteorBabelHelpers.sanitizeForInObject(helpers)) {                                           // 4
    if (helpers.hasOwnProperty(name)) {                                                                         // 5
      Template.registerHelper(name, helpers[name]);                                                             // 6
    }                                                                                                           // 7
  }                                                                                                             // 8
};                                                                                                              // 9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-replaces.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-replaces.js                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.prototype.replaces = function () {                                                                     // 1
  function replaces(otherTemplate) {                                                                            // 1
    var self = this;                                                                                            // 2
                                                                                                                //
    function replaceRender(template) {                                                                          // 4
      // String template names can be provided and template object is looked up                                 //
      if (typeof template === 'string') template = Template[template];                                          // 6
      if (!template) return;                                                                                    // 7
                                                                                                                //
      template.renderFunction = self.renderFunction;                                                            // 9
    }                                                                                                           // 10
                                                                                                                //
    // Accept an array as otherTemplate argument                                                                //
    if (_.isArray(otherTemplate)) {                                                                             // 13
      _.each(otherTemplate, replaceRender);                                                                     // 14
    } else {                                                                                                    // 15
      replaceRender(otherTemplate);                                                                             // 16
    }                                                                                                           // 17
  }                                                                                                             // 18
                                                                                                                //
  return replaces;                                                                                              // 1
}();                                                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-clear-event-maps.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-clear-event-maps.js                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.prototype.clearEventMaps = function () {                                                               // 1
  function clearEventMaps() {                                                                                   // 1
    this.__eventMaps = [];                                                                                      // 2
  }                                                                                                             // 3
                                                                                                                //
  return clearEventMaps;                                                                                        // 1
}();                                                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-copy-as.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-copy-as.js                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.prototype.copyAs = function () {                                                                       // 1
  function copyAs(newTemplateName) {                                                                            // 1
    var self = this;                                                                                            // 2
                                                                                                                //
    function createNewTemplate(templateName) {                                                                  // 4
      var newTemplate = Template[templateName] = new Template("Template." + templateName, self.renderFunction);
                                                                                                                //
      newTemplate.inheritsHelpersFrom(self);                                                                    // 8
      newTemplate.inheritsEventsFrom(self);                                                                     // 9
      newTemplate.inheritsHooksFrom(self);                                                                      // 10
                                                                                                                //
      return newTemplate;                                                                                       // 12
    }                                                                                                           // 13
                                                                                                                //
    // Check if newTemplateName is an array                                                                     //
    if (_.isArray(newTemplateName)) {                                                                           // 16
      var result = [];                                                                                          // 17
      for (var _iterator = newTemplateName, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;                                                                                               // 18
                                                                                                                //
        if (_isArray) {                                                                                         // 18
          if (_i >= _iterator.length) break;                                                                    // 18
          _ref = _iterator[_i++];                                                                               // 18
        } else {                                                                                                // 18
          _i = _iterator.next();                                                                                // 18
          if (_i.done) break;                                                                                   // 18
          _ref = _i.value;                                                                                      // 18
        }                                                                                                       // 18
                                                                                                                //
        var name = _ref;                                                                                        // 18
                                                                                                                //
        result.push(createNewTemplate(name));                                                                   // 19
      }                                                                                                         // 20
      return result;                                                                                            // 21
    } else {                                                                                                    // 22
      //newTemplateName is a string                                                                             //
      return createNewTemplate(newTemplateName);                                                                // 23
    }                                                                                                           // 24
  }                                                                                                             // 25
                                                                                                                //
  return copyAs;                                                                                                // 1
}();                                                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-instance-parent.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-instance-parent.js                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// Access parent template instance. "height" is the number of levels beyond the                                 //
// current template instance to look. By default block helper template instances                                //
// are skipped, but if "includeBlockHelpers" is set to true, they are not.                                      //
// See https://github.com/meteor/meteor/issues/3071                                                             //
Blaze.TemplateInstance.prototype.parent = function () {                                                         // 5
  function parent(height, includeBlockHelpers) {                                                                // 5
    // If height is null or undefined, we default to 1, the first parent.                                       //
    if (height == null) height = 1;                                                                             // 7
                                                                                                                //
    var i = 0;                                                                                                  // 9
    var template = this;                                                                                        // 10
    while (i < height && template) {                                                                            // 11
      var view = parentView(template.view, includeBlockHelpers);                                                // 12
      // We skip contentBlock views which are injected by Meteor when using                                     //
      // block helpers (in addition to block helper view). This matches more                                    //
      // the visual structure of templates and not the internal implementation.                                 //
      while (view && (!view.template || view.name === '(contentBlock)' || view.name === '(elseBlock)')) {       // 16
        view = parentView(view, includeBlockHelpers);                                                           // 17
      }                                                                                                         // 18
      if (!view) return null;                                                                                   // 19
      // Body view has template field, but not templateInstance,                                                //
      // which more or less signals that we reached the top.                                                    //
      template = typeof view.templateInstance === 'function' ? view.templateInstance() : null;                  // 22
      i++;                                                                                                      // 23
    }                                                                                                           // 24
    return template;                                                                                            // 25
  }                                                                                                             // 26
                                                                                                                //
  return parent;                                                                                                // 5
}();                                                                                                            // 5
                                                                                                                //
function parentView(view, includeBlockHelpers) {                                                                // 28
  if (includeBlockHelpers) return view.originalParentView || view.parentView;                                   // 29
  return view.parentView;                                                                                       // 30
}                                                                                                               // 31
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-instance-get.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-instance-get.js                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// Allow easy access to a template instance field when you do not know exactly                                  //
// on which instance (this, or parent, or parent's parent, ...) a field is defined.                             //
// This allows easy restructuring of templates in HTML, moving things to included                               //
// templates without having to change everywhere in the code instance levels.                                   //
// It also allows different structures of templates, when once template is included                             //
// at one level, and some other time at another. Levels do not matter anymore, just                             //
// that the field exists somewhere.                                                                             //
Blaze.TemplateInstance.prototype.get = function () {                                                            // 8
  function get(fieldName) {                                                                                     // 8
    var template = this;                                                                                        // 9
                                                                                                                //
    while (template) {                                                                                          // 11
      if (fieldName in template) return template[fieldName];                                                    // 12
      template = template.parent(1, true);                                                                      // 13
    }                                                                                                           // 14
  }                                                                                                             // 15
                                                                                                                //
  return get;                                                                                                   // 8
}();                                                                                                            // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template-parent-data-function.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_template-extension/lib/template-parent-data-function.js                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// Allow to specify a function to test parent data for at various                                               //
// levels, instead of specifying a fixed number of levels to traverse.                                          //
var originalParentData = Blaze._parentData;                                                                     // 3
Blaze._parentData = function (height, _functionWrapped) {                                                       // 4
  // If height is not a function, simply call original implementation.                                          //
  if (typeof height !== 'function') return originalParentData(height, _functionWrapped);                        // 6
                                                                                                                //
  var theWith = Blaze.getView('with');                                                                          // 8
  var test = function test() {                                                                                  // 9
    return height(theWith.dataVar.get());                                                                       // 9
  };                                                                                                            // 9
  while (theWith) {                                                                                             // 10
    if (Tracker.nonreactive(test)) break;                                                                       // 11
    theWith = Blaze.getView(theWith, 'with');                                                                   // 12
  }                                                                                                             // 13
                                                                                                                //
  // _functionWrapped is internal and will not be                                                               //
  // specified with non numeric height, so we ignore it.                                                        //
  if (!theWith) return null;                                                                                    // 17
  // This registers a Tracker dependency.                                                                       //
  return theWith.dataVar.get();                                                                                 // 19
};                                                                                                              // 20
                                                                                                                //
Template.parentData = Blaze._parentData;                                                                        // 22
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/aldeed:template-extension/lib/hooks.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-for-each.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-hooks.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-global-hooks.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-for-each-instance.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-inherits-events-from.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-inherits-helpers-from.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-inherits-hooks-from.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-register-helpers.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-replaces.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-clear-event-maps.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-copy-as.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-instance-parent.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-instance-get.js");
require("./node_modules/meteor/aldeed:template-extension/lib/template-parent-data-function.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:template-extension'] = {};

})();
