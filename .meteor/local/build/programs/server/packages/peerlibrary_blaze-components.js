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
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903
   If it is a copy of templating.js file wrapped into a condition.

   TODO: Remove this file eventually.
 */

if (!Blaze.Template.__checkName) {
  // Packages and apps add templates on to this object.

  /**
   * @summary The class for defining templates
   * @class
   * @instanceName Template.myTemplate
   */
  Template = Blaze.Template;

  var RESERVED_TEMPLATE_NAMES = "__proto__ name".split(" ");

  // Check for duplicate template names and illegal names that won't work.
  Template.__checkName = function (name) {
    // Some names can't be used for Templates. These include:
    //  - Properties Blaze sets on the Template object.
    //  - Properties that some browsers don't let the code to set.
    //    These are specified in RESERVED_TEMPLATE_NAMES.
    if (name in Template || _.contains(RESERVED_TEMPLATE_NAMES, name)) {
      if ((Template[name] instanceof Template) && name !== "body")
        throw new Error("There are multiple templates named '" + name + "'. Each template needs a unique name.");
      throw new Error("This template name is reserved: " + name);
    }
  };

  // XXX COMPAT WITH 0.8.3
  Template.__define__ = function (name, renderFunc) {
    Template.__checkName(name);
    Template[name] = new Template("Template." + name, renderFunc);
    // Exempt packages built pre-0.9.0 from warnings about using old
    // helper syntax, because we can.  It's not very useful to get a
    // warning about someone else's code (like a package on Atmosphere),
    // and this should at least put a bit of a dent in number of warnings
    // that come from packages that haven't been updated lately.
    Template[name]._NOWARN_OLDSTYLE_HELPERS = true;
  };

  // Define a template `Template.body` that renders its
  // `contentRenderFuncs`.  `<body>` tags (of which there may be
  // multiple) will have their contents added to it.

  /**
   * @summary The [template object](#templates_api) representing your `<body>`
   * tag.
   * @locus Client
   */
  Template.body = new Template('body', function () {
    var view = this;
    return _.map(Template.body.contentRenderFuncs, function (func) {
      return func.apply(view);
    });
  });
  Template.body.contentRenderFuncs = []; // array of Blaze.Views
  Template.body.view = null;

  Template.body.addContent = function (renderFunc) {
    Template.body.contentRenderFuncs.push(renderFunc);
  };

  // This function does not use `this` and so it may be called
  // as `Meteor.startup(Template.body.renderIntoDocument)`.
  Template.body.renderToDocument = function () {
    // Only do it once.
    if (Template.body.view)
      return;

    var view = Blaze.render(Template.body, document.body);
    Template.body.view = view;
  };

  // XXX COMPAT WITH 0.9.0
  UI.body = Template.body;

  // XXX COMPAT WITH 0.9.0
  // (<body> tags in packages built with 0.9.0)
  Template.__body__ = Template.body;
  Template.__body__.__contentParts = Template.body.contentViews;
  Template.__body__.__instantiate = Template.body.renderToDocument;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/template.dynamic.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("__dynamicBackport");
Template["__dynamicBackport"] = new Template("Template.__dynamicBackport", (function() {
  var view = this;
  return [ Blaze.View("lookup:checkContext", function() {
    return Spacebars.mustache(view.lookup("checkContext"));
  }), "\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("dataContextPresent"));
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {
      return Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      });
    }), "\n  " ];
  }, function() {
    return [ "\n    \n    ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("template")),
        data: Spacebars.call(view.lookup(".."))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {
        return Blaze._InOuterTemplateScope(view, function() {
          return Spacebars.include(function() {
            return Spacebars.call(view.templateContentBlock);
          });
        });
      });
    }), "\n  " ];
  }) ];
}));

Template.__checkName("__dynamicWithDataContextBackport");
Template["__dynamicWithDataContextBackport"] = new Template("Template.__dynamicWithDataContextBackport", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("chooseTemplate"), view.lookup("template"));
  }, function() {
    return [ "\n    \n    ", Blaze._TemplateWith(function() {
      return Spacebars.call(Spacebars.dot(view.lookup(".."), "data"));
    }, function() {
      return Spacebars.include(view.lookupTemplate(".."), function() {
        return Blaze._InOuterTemplateScope(view, function() {
          return Spacebars.include(function() {
            return Spacebars.call(view.templateContentBlock);
          });
        });
      });
    }), "\n  " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/dynamic.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903
   If it is a copy of dynamic.js file wrapped into a condition with renaming of backported templates.

   TODO: Remove this file eventually.
 */

if (!Blaze.Template.__dynamicWithDataContext) {
  Blaze.Template.__dynamicWithDataContext = Blaze.Template.__dynamicWithDataContextBackport;
  Blaze.Template.__dynamicWithDataContext.viewName = 'Template.__dynamicWithDataContext';
  Blaze.Template.__dynamic = Blaze.Template.__dynamicBackport;
  Blaze.Template.__dynamic.viewName = 'Template.__dynamic';

  var Template = Blaze.Template;

  /**
   * @isTemplate true
   * @memberOf Template
   * @function dynamic
   * @summary Choose a template to include dynamically, by name.
   * @locus Templates
   * @param {String} template The name of the template to include.
   * @param {Object} [data] Optional. The data context in which to include the
   * template.
   */

  Template.__dynamicWithDataContext.helpers({
    chooseTemplate: function (name) {
      return Blaze._getTemplate(name, function () {
        return Template.instance();
      });
    }
  });

  Template.__dynamic.helpers({
    dataContextPresent: function () {
      return _.has(this, "data");
    },
    checkContext: function () {
      if (!_.has(this, "template")) {
        throw new Error("Must specify name in the 'template' argument " +
          "to {{> Template.dynamic}}.");
      }

      _.each(this, function (v, k) {
        if (k !== "template" && k !== "data") {
          throw new Error("Invalid argument to {{> Template.dynamic}}: " +
            k);
        }
      });
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/lookup.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file backports Blaze lookup.js from Meteor 1.2 so that required Blaze features to support Blaze
   Components are available also in older Meteor versions.
   It is a copy of lookup.js file from Meteor 1.2 with lexical scope lookup commented out.

   TODO: Remove this file eventually.
 */

// Check if we are not running Meteor 1.2+.
if (! Blaze._getTemplate) {
  // If `x` is a function, binds the value of `this` for that function
  // to the current data context.
  var bindDataContext = function (x) {
    if (typeof x === 'function') {
      return function () {
        var data = Blaze.getData();
        if (data == null)
          data = {};
        return x.apply(data, arguments);
      };
    }
    return x;
  };

  Blaze._getTemplateHelper = function (template, name, tmplInstanceFunc) {
    // XXX COMPAT WITH 0.9.3
    var isKnownOldStyleHelper = false;

    if (template.__helpers.has(name)) {
      var helper = template.__helpers.get(name);
      if (helper === Blaze._OLDSTYLE_HELPER) {
        isKnownOldStyleHelper = true;
      } else if (helper != null) {
        return wrapHelper(bindDataContext(helper), tmplInstanceFunc);
      } else {
        return null;
      }
    }

    // old-style helper
    if (name in template) {
      // Only warn once per helper
      if (!isKnownOldStyleHelper) {
        template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);
        if (!template._NOWARN_OLDSTYLE_HELPERS) {
          Blaze._warn('Assigning helper with `' + template.viewName + '.' +
            name + ' = ...` is deprecated.  Use `' + template.viewName +
            '.helpers(...)` instead.');
        }
      }
      if (template[name] != null) {
        return wrapHelper(bindDataContext(template[name]), tmplInstanceFunc);
      }
    }

    return null;
  };

  var wrapHelper = function (f, templateFunc) {
    // XXX COMPAT WITH METEOR 1.0.3.2
    if (!Blaze.Template._withTemplateInstanceFunc) {
      return Blaze._wrapCatchingExceptions(f, 'template helper');
    }

    if (typeof f !== "function") {
      return f;
    }

    return function () {
      var self = this;
      var args = arguments;

      return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {
        return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);
      });
    };
  };

  // templateInstance argument is provided to be available for possible
  // alternative implementations of this function by 3rd party packages.
  Blaze._getTemplate = function (name, templateInstance) {
    if ((name in Blaze.Template) && (Blaze.Template[name] instanceof Blaze.Template)) {
      return Blaze.Template[name];
    }
    return null;
  };

  Blaze._getGlobalHelper = function (name, templateInstance) {
    if (Blaze._globalHelpers[name] != null) {
      return wrapHelper(bindDataContext(Blaze._globalHelpers[name]), templateInstance);
    }
    return null;
  };

  Blaze.View.prototype.lookup = function (name, _options) {
    var template = this.template;
    var lookupTemplate = _options && _options.template;
    var helper;
    var binding;
    var boundTmplInstance;
    var foundTemplate;

    if (this.templateInstance) {
      boundTmplInstance = _.bind(this.templateInstance, this);
    }

    // 0. looking up the parent data context with the special "../" syntax
    if (/^\./.test(name)) {
      // starts with a dot. must be a series of dots which maps to an
      // ancestor of the appropriate height.
      if (!/^(\.)+$/.test(name))
        throw new Error("id starting with dot must be a series of dots");

      return Blaze._parentData(name.length - 1, true /*_functionWrapped*/);

    }

    // 1. look up a helper on the current template
    if (template && ((helper = Blaze._getTemplateHelper(template, name, boundTmplInstance)) != null)) {
      return helper;
    }

    // 2. look up a binding by traversing the lexical view hierarchy inside the
    // current template
    /*if (template && (binding = Blaze._lexicalBindingLookup(Blaze.currentView, name)) != null) {
      return binding;
    }*/

    // 3. look up a template by name
    if (lookupTemplate && ((foundTemplate = Blaze._getTemplate(name, boundTmplInstance)) != null)) {
      return foundTemplate;
    }

    // 4. look up a global helper
    if ((helper = Blaze._getGlobalHelper(name, boundTmplInstance)) != null) {
      return helper;
    }

    // 5. look up in a data context
    return function () {
      var isCalledAsFunction = (arguments.length > 0);
      var data = Blaze.getData();
      var x = data && data[name];
      if (!x) {
        if (lookupTemplate) {
          throw new Error("No such template: " + name);
        } else if (isCalledAsFunction) {
          throw new Error("No such function: " + name);
        } /*else if (name.charAt(0) === '@' && ((x === null) ||
          (x === undefined))) {
          // Throw an error if the user tries to use a `@directive`
          // that doesn't exist.  We don't implement all directives
          // from Handlebars, so there's a potential for confusion
          // if we fail silently.  On the other hand, we want to
          // throw late in case some app or package wants to provide
          // a missing directive.
          throw new Error("Unsupported directive: " + name);
        }*/
      }
      if (!data) {
        return null;
      }
      if (typeof x !== 'function') {
        if (isCalledAsFunction) {
          throw new Error("Can't call non-function: " + x);
        }
        return x;
      }
      return x.apply(data, arguments);
    };
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/attrs.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893
   It is a copy of attrs.js file with the changes from the above pull request merged in.

   TODO: Remove this file eventually.
 */

var jsUrlsAllowed = false;
Blaze._allowJavascriptUrls = function () {
  jsUrlsAllowed = true;
};
Blaze._javascriptUrlsAllowed = function () {
  return jsUrlsAllowed;
};

// An AttributeHandler object is responsible for updating a particular attribute
// of a particular element.  AttributeHandler subclasses implement
// browser-specific logic for dealing with particular attributes across
// different browsers.
//
// To define a new type of AttributeHandler, use
// `var FooHandler = AttributeHandler.extend({ update: function ... })`
// where the `update` function takes arguments `(element, oldValue, value)`.
// The `element` argument is always the same between calls to `update` on
// the same instance.  `oldValue` and `value` are each either `null` or
// a Unicode string of the type that might be passed to the value argument
// of `setAttribute` (i.e. not an HTML string with character references).
// When an AttributeHandler is installed, an initial call to `update` is
// always made with `oldValue = null`.  The `update` method can access
// `this.name` if the AttributeHandler class is a generic one that applies
// to multiple attribute names.
//
// AttributeHandlers can store custom properties on `this`, as long as they
// don't use the names `element`, `name`, `value`, and `oldValue`.
//
// AttributeHandlers can't influence how attributes appear in rendered HTML,
// only how they are updated after materialization as DOM.

AttributeHandler = function (name, value) {
  this.name = name;
  this.value = value;
};
Blaze._AttributeHandler = AttributeHandler;

AttributeHandler.prototype.update = function (element, oldValue, value) {
  if (value === null) {
    if (oldValue !== null)
      element.removeAttribute(this.name);
  } else {
    element.setAttribute(this.name, value);
  }
};

AttributeHandler.extend = function (options) {
  var curType = this;
  var subType = function AttributeHandlerSubtype(/*arguments*/) {
    AttributeHandler.apply(this, arguments);
  };
  subType.prototype = new curType;
  subType.extend = curType.extend;
  if (options)
    _.extend(subType.prototype, options);
  return subType;
};

/// Apply the diff between the attributes of "oldValue" and "value" to "element."
//
// Each subclass must implement a parseValue method which takes a string
// as an input and returns a dict of attributes. The keys of the dict
// are unique identifiers (ie. css properties in the case of styles), and the
// values are the entire attribute which will be injected into the element.
//
// Extended below to support classes, SVG elements and styles.

Blaze._DiffingAttributeHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    if (!this.getCurrentValue || !this.setValue || !this.parseValue)
      throw new Error("Missing methods in subclass of 'DiffingAttributeHandler'");

    var oldAttrsMap = oldValue ? this.parseValue(oldValue) : {};
    var newAttrsMap = value ? this.parseValue(value) : {};

    // the current attributes on the element, which we will mutate.

    var attrString = this.getCurrentValue(element);
    var attrsMap = attrString ? this.parseValue(attrString) : {};

    _.each(_.keys(oldAttrsMap), function (t) {
      if (! (t in newAttrsMap))
        delete attrsMap[t];
    });

    _.each(_.keys(newAttrsMap), function (t) {
      attrsMap[t] = newAttrsMap[t];
    });

    this.setValue(element, _.values(attrsMap).join(' '));
  }
});

var ClassHandler = Blaze._DiffingAttributeHandler.extend({
  // @param rawValue {String}
  getCurrentValue: function (element) {
    return element.className;
  },
  setValue: function (element, className) {
    element.className = className;
  },
  parseValue: function (attrString) {
    var tokens = {};

    _.each(attrString.split(' '), function(token) {
      if (token)
        tokens[token] = token;
    });
    return tokens;
  }
});

var SVGClassHandler = ClassHandler.extend({
  getCurrentValue: function (element) {
    return element.className.baseVal;
  },
  setValue: function (element, className) {
    element.setAttribute('class', className);
  }
});

var StyleHandler = Blaze._DiffingAttributeHandler.extend({
  getCurrentValue: function (element) {
    return element.getAttribute('style');
  },
  setValue: function (element, style) {
    if (style === '') {
      element.removeAttribute('style');
    } else {
      element.setAttribute('style', style);
    }
  },

  // Parse a string to produce a map from property to attribute string.
  //
  // Example:
  // "color:red; foo:12px" produces a token {color: "color:red", foo:"foo:12px"}
  parseValue: function (attrString) {
    var tokens = {};

    // Regex for parsing a css attribute declaration, taken from css-parse:
    // https://github.com/reworkcss/css-parse/blob/7cef3658d0bba872cde05a85339034b187cb3397/index.js#L219
    var regex = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*(?:\'(?:\\\'|.)*?\'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+[;\s]*/g;
    var match = regex.exec(attrString);
    while (match) {
      // match[0] = entire matching string
      // match[1] = css property
      // Prefix the token to prevent conflicts with existing properties.

      // XXX No `String.trim` on Safari 4. Swap out $.trim if we want to
      // remove strong dep on jquery.
      tokens[' ' + match[1]] = match[0].trim ?
        match[0].trim() : $.trim(match[0]);

      match = regex.exec(attrString);
    }

    return tokens;
  }
});

var BooleanHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    var name = this.name;
    if (value == null) {
      if (oldValue != null)
        element[name] = false;
    } else {
      element[name] = true;
    }
  }
});

var DOMPropertyHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    var name = this.name;
    if (value !== element[name])
      element[name] = value;
  }
});

// attributes of the type 'xlink:something' should be set using
// the correct namespace in order to work
var XlinkHandler = AttributeHandler.extend({
  update: function(element, oldValue, value) {
    var NS = 'http://www.w3.org/1999/xlink';
    if (value === null) {
      if (oldValue !== null)
        element.removeAttributeNS(NS, this.name);
    } else {
      element.setAttributeNS(NS, this.name, this.value);
    }
  }
});

// cross-browser version of `instanceof SVGElement`
var isSVGElement = function (elem) {
  return 'ownerSVGElement' in elem;
};

var isUrlAttribute = function (tagName, attrName) {
  // Compiled from http://www.w3.org/TR/REC-html40/index/attributes.html
  // and
  // http://www.w3.org/html/wg/drafts/html/master/index.html#attributes-1
  var urlAttrs = {
    FORM: ['action'],
    BODY: ['background'],
    BLOCKQUOTE: ['cite'],
    Q: ['cite'],
    DEL: ['cite'],
    INS: ['cite'],
    OBJECT: ['classid', 'codebase', 'data', 'usemap'],
    APPLET: ['codebase'],
    A: ['href'],
    AREA: ['href'],
    LINK: ['href'],
    BASE: ['href'],
    IMG: ['longdesc', 'src', 'usemap'],
    FRAME: ['longdesc', 'src'],
    IFRAME: ['longdesc', 'src'],
    HEAD: ['profile'],
    SCRIPT: ['src'],
    INPUT: ['src', 'usemap', 'formaction'],
    BUTTON: ['formaction'],
    BASE: ['href'],
    MENUITEM: ['icon'],
    HTML: ['manifest'],
    VIDEO: ['poster']
  };

  if (attrName === 'itemid') {
    return true;
  }

  var urlAttrNames = urlAttrs[tagName] || [];
  return _.contains(urlAttrNames, attrName);
};

// To get the protocol for a URL, we let the browser normalize it for
// us, by setting it as the href for an anchor tag and then reading out
// the 'protocol' property.
if (Meteor.isClient) {
  var anchorForNormalization = document.createElement('A');
}

var getUrlProtocol = function (url) {
  if (Meteor.isClient) {
    anchorForNormalization.href = url;
    return (anchorForNormalization.protocol || "").toLowerCase();
  } else {
    throw new Error('getUrlProtocol not implemented on the server');
  }
};

// UrlHandler is an attribute handler for all HTML attributes that take
// URL values. It disallows javascript: URLs, unless
// Blaze._allowJavascriptUrls() has been called. To detect javascript:
// urls, we set the attribute on a dummy anchor element and then read
// out the 'protocol' property of the attribute.
var origUpdate = AttributeHandler.prototype.update;
var UrlHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    var self = this;
    var args = arguments;

    if (Blaze._javascriptUrlsAllowed()) {
      origUpdate.apply(self, args);
    } else {
      var isJavascriptProtocol = (getUrlProtocol(value) === "javascript:");
      if (isJavascriptProtocol) {
        Blaze._warn("URLs that use the 'javascript:' protocol are not " +
                    "allowed in URL attribute values. " +
                    "Call Blaze._allowJavascriptUrls() " +
                    "to enable them.");
        origUpdate.apply(self, [element, oldValue, null]);
      } else {
        origUpdate.apply(self, args);
      }
    }
  }
});

// XXX make it possible for users to register attribute handlers!
Blaze._makeAttributeHandler = function (elem, name, value) {
  // generally, use setAttribute but certain attributes need to be set
  // by directly setting a JavaScript property on the DOM element.
  if (name === 'class') {
    if (isSVGElement(elem)) {
      return new SVGClassHandler(name, value);
    } else {
      return new ClassHandler(name, value);
    }
  } else if (name === 'style') {
    return new StyleHandler(name, value);
  } else if ((elem.tagName === 'OPTION' && name === 'selected') ||
             (elem.tagName === 'INPUT' && name === 'checked')) {
    return new BooleanHandler(name, value);
  } else if ((elem.tagName === 'TEXTAREA' || elem.tagName === 'INPUT')
             && name === 'value') {
    // internally, TEXTAREAs tracks their value in the 'value'
    // attribute just like INPUTs.
    return new DOMPropertyHandler(name, value);
  } else if (name.substring(0,6) === 'xlink:') {
    return new XlinkHandler(name.substring(6), value);
  } else if (isUrlAttribute(elem.tagName, name)) {
    return new UrlHandler(name, value);
  } else {
    return new AttributeHandler(name, value);
  }

  // XXX will need one for 'style' on IE, though modern browsers
  // seem to handle setAttribute ok.
};


ElementAttributesUpdater = function (elem) {
  this.elem = elem;
  this.handlers = {};
};

// Update attributes on `elem` to the dictionary `attrs`, whose
// values are strings.
ElementAttributesUpdater.prototype.update = function(newAttrs) {
  var elem = this.elem;
  var handlers = this.handlers;

  for (var k in handlers) {
    if (! _.has(newAttrs, k)) {
      // remove attributes (and handlers) for attribute names
      // that don't exist as keys of `newAttrs` and so won't
      // be visited when traversing it.  (Attributes that
      // exist in the `newAttrs` object but are `null`
      // are handled later.)
      var handler = handlers[k];
      var oldValue = handler.value;
      handler.value = null;
      handler.update(elem, oldValue, null);
      delete handlers[k];
    }
  }

  for (var k in newAttrs) {
    var handler = null;
    var oldValue;
    var value = newAttrs[k];
    if (! _.has(handlers, k)) {
      if (value !== null) {
        // make new handler
        handler = Blaze._makeAttributeHandler(elem, k, value);
        handlers[k] = handler;
        oldValue = null;
      }
    } else {
      handler = handlers[k];
      oldValue = handler.value;
    }
    if (oldValue !== value) {
      handler.value = value;
      handler.update(elem, oldValue, value);
      if (value === null)
        delete handlers[k];
    }
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/materializer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893
   It is a copy of the materializer.js file and is needed because it references symbols from attrs.js.

   TODO: Remove this file eventually.
 */

// Turns HTMLjs into DOM nodes and DOMRanges.
//
// - `htmljs`: the value to materialize, which may be any of the htmljs
//   types (Tag, CharRef, Comment, Raw, array, string, boolean, number,
//   null, or undefined) or a View or Template (which will be used to
//   construct a View).
// - `intoArray`: the array of DOM nodes and DOMRanges to push the output
//   into (required)
// - `parentView`: the View we are materializing content for (optional)
// - `_existingWorkStack`: optional argument, only used for recursive
//   calls when there is some other _materializeDOM on the call stack.
//   If _materializeDOM called your function and passed in a workStack,
//   pass it back when you call _materializeDOM (such as from a workStack
//   task).
//
// Returns `intoArray`, which is especially useful if you pass in `[]`.
Blaze._materializeDOM = function (htmljs, intoArray, parentView,
                                  _existingWorkStack) {
  // In order to use fewer stack frames, materializeDOMInner can push
  // tasks onto `workStack`, and they will be popped off
  // and run, last first, after materializeDOMInner returns.  The
  // reason we use a stack instead of a queue is so that we recurse
  // depth-first, doing newer tasks first.
  var workStack = (_existingWorkStack || []);
  materializeDOMInner(htmljs, intoArray, parentView, workStack);

  if (! _existingWorkStack) {
    // We created the work stack, so we are responsible for finishing
    // the work.  Call each "task" function, starting with the top
    // of the stack.
    while (workStack.length) {
      // Note that running task() may push new items onto workStack.
      var task = workStack.pop();
      task();
    }
  }

  return intoArray;
};

var materializeDOMInner = function (htmljs, intoArray, parentView, workStack) {
  if (htmljs == null) {
    // null or undefined
    return;
  }

  switch (typeof htmljs) {
  case 'string': case 'boolean': case 'number':
    intoArray.push(document.createTextNode(String(htmljs)));
    return;
  case 'object':
    if (htmljs.htmljsType) {
      switch (htmljs.htmljsType) {
      case HTML.Tag.htmljsType:
        intoArray.push(materializeTag(htmljs, parentView, workStack));
        return;
      case HTML.CharRef.htmljsType:
        intoArray.push(document.createTextNode(htmljs.str));
        return;
      case HTML.Comment.htmljsType:
        intoArray.push(document.createComment(htmljs.sanitizedValue));
        return;
      case HTML.Raw.htmljsType:
        // Get an array of DOM nodes by using the browser's HTML parser
        // (like innerHTML).
        var nodes = Blaze._DOMBackend.parseHTML(htmljs.value);
        for (var i = 0; i < nodes.length; i++)
          intoArray.push(nodes[i]);
        return;
      }
    } else if (HTML.isArray(htmljs)) {
      for (var i = htmljs.length-1; i >= 0; i--) {
        workStack.push(_.bind(Blaze._materializeDOM, null,
                              htmljs[i], intoArray, parentView, workStack));
      }
      return;
    } else {
      if (htmljs instanceof Blaze.Template) {
        htmljs = htmljs.constructView();
        // fall through to Blaze.View case below
      }
      if (htmljs instanceof Blaze.View) {
        Blaze._materializeView(htmljs, parentView, workStack, intoArray);
        return;
      }
    }
  }

  throw new Error("Unexpected object in htmljs: " + htmljs);
};

var materializeTag = function (tag, parentView, workStack) {
  var tagName = tag.tagName;
  var elem;
  if ((HTML.isKnownSVGElement(tagName) || isSVGAnchor(tag))
      && document.createElementNS) {
    // inline SVG
    elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);
  } else {
    // normal elements
    elem = document.createElement(tagName);
  }

  var rawAttrs = tag.attrs;
  var children = tag.children;
  if (tagName === 'textarea' && tag.children.length &&
      ! (rawAttrs && ('value' in rawAttrs))) {
    // Provide very limited support for TEXTAREA tags with children
    // rather than a "value" attribute.
    // Reactivity in the form of Views nested in the tag's children
    // won't work.  Compilers should compile textarea contents into
    // the "value" attribute of the tag, wrapped in a function if there
    // is reactivity.
    if (typeof rawAttrs === 'function' ||
        HTML.isArray(rawAttrs)) {
      throw new Error("Can't have reactive children of TEXTAREA node; " +
                      "use the 'value' attribute instead.");
    }
    rawAttrs = _.extend({}, rawAttrs || null);
    rawAttrs.value = Blaze._expand(children, parentView);
    children = [];
  }

  if (rawAttrs) {
    var attrUpdater = new ElementAttributesUpdater(elem);
    var updateAttributes = function () {
      var expandedAttrs = Blaze._expandAttributes(rawAttrs, parentView);
      var flattenedAttrs = HTML.flattenAttributes(expandedAttrs);
      var stringAttrs = {};
      for (var attrName in flattenedAttrs) {
        stringAttrs[attrName] = Blaze._toText(flattenedAttrs[attrName],
                                              parentView,
                                              HTML.TEXTMODE.STRING);
      }
      attrUpdater.update(stringAttrs);
    };
    var updaterComputation;
    if (parentView) {
      updaterComputation =
        parentView.autorun(updateAttributes, undefined, 'updater');
    } else {
      updaterComputation = Tracker.nonreactive(function () {
        return Tracker.autorun(function () {
          Tracker._withCurrentView(parentView, updateAttributes);
        });
      });
    }
    Blaze._DOMBackend.Teardown.onElementTeardown(elem, function attrTeardown() {
      updaterComputation.stop();
    });
  }

  if (children.length) {
    var childNodesAndRanges = [];
    // push this function first so that it's done last
    workStack.push(function () {
      for (var i = 0; i < childNodesAndRanges.length; i++) {
        var x = childNodesAndRanges[i];
        if (x instanceof Blaze._DOMRange)
          x.attach(elem);
        else
          elem.appendChild(x);
      }
    });
    // now push the task that calculates childNodesAndRanges
    workStack.push(_.bind(Blaze._materializeDOM, null,
                          children, childNodesAndRanges, parentView,
                          workStack));
  }

  return elem;
};


var isSVGAnchor = function (node) {
  // We generally aren't able to detect SVG <a> elements because
  // if "A" were in our list of known svg element names, then all
  // <a> nodes would be created using
  // `document.createElementNS`. But in the special case of <a
  // xlink:href="...">, we can at least detect that attribute and
  // create an SVG <a> tag in that case.
  //
  // However, we still have a general problem of knowing when to
  // use document.createElementNS and when to use
  // document.createElement; for example, font tags will always
  // be created as SVG elements which can cause other
  // problems. #1977
  return (node.tagName === "a" &&
          node.attrs &&
          node.attrs["xlink:href"] !== undefined);
};

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
// packages/peerlibrary_blaze-components/server.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.body.renderToDocument = function() {};                                                                        // 2
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

//# sourceMappingURL=peerlibrary_blaze-components.js.map
