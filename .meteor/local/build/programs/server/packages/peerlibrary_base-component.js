(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var assert = Package['peerlibrary:assert'].assert;
var ReactiveField = Package['peerlibrary:reactive-field'].ReactiveField;
var ComputedField = Package['peerlibrary:computed-field'].ComputedField;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, BaseComponent, BaseComponentDebug;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/peerlibrary_base-component/packages/peerlibrary_base-component.js                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/peerlibrary:base-component/lib.coffee.js                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ComponentsNamespace, addComponentChildDeprecationWarning, arrayReferenceEquals, childrenComponentsDeprecationWarning, childrenComponentsWithDeprecationWarning, componentChildrenDeprecationWarning, componentChildrenWithDeprecationWarning, componentParentDeprecationWarning, createNamespace, getComponent, getNamespace, getPathAndName, removeComponentChildDeprecationWarning, setComponent,               
  __hasProp = {}.hasOwnProperty,
  __slice = [].slice;

arrayReferenceEquals = function(a, b) {
  var i, _i, _ref;
  if (a.length !== b.length) {
    return false;
  }
  for (i = _i = 0, _ref = a.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

ComponentsNamespace = (function() {
  function ComponentsNamespace() {}

  ComponentsNamespace.COMPONENTS_FIELD = '';

  return ComponentsNamespace;

})();

getPathAndName = function(name) {
  var path;
  assert(name);
  path = name.split('.');
  name = path.pop();
  assert(name);
  return {
    path: path,
    name: name
  };
};

getNamespace = function(components, path) {
  var match, segment;
  assert(_.isObject(components));
  assert(_.isArray(path));
  match = components;
  while ((segment = path.shift()) != null) {
    match = match[segment];
    if (!_.isObject(match)) {
      return null;
    }
  }
  if (!_.isObject(match)) {
    return null;
  }
  return match || null;
};

createNamespace = function(components, path) {
  var match, segment;
  assert(_.isObject(components));
  assert(_.isArray(path));
  match = components;
  while ((segment = path.shift()) != null) {
    if (!(segment in match)) {
      match[segment] = new components.constructor();
    }
    match = match[segment];
    assert(_.isObject(match));
  }
  assert(_.isObject(match));
  return match;
};

getComponent = function(components, name) {
  var namespace, path, _ref, _ref1;
  assert(_.isObject(components));
  if (!name) {
    return null;
  }
  _ref = getPathAndName(name), path = _ref.path, name = _ref.name;
  namespace = getNamespace(components, path);
  if (!namespace) {
    return null;
  }
  return ((_ref1 = namespace[components.constructor.COMPONENTS_FIELD]) != null ? _ref1[name] : void 0) || null;
};

setComponent = function(components, name, component) {
  var namespace, path, _name, _ref;
  assert(_.isObject(components));
  assert(name);
  assert(component);
  _ref = getPathAndName(name), path = _ref.path, name = _ref.name;
  namespace = createNamespace(components, path);
  if (namespace[_name = components.constructor.COMPONENTS_FIELD] == null) {
    namespace[_name] = new components.constructor();
  }
  assert(!(name in namespace[components.constructor.COMPONENTS_FIELD]));
  return namespace[components.constructor.COMPONENTS_FIELD][name] = component;
};

componentChildrenDeprecationWarning = false;

componentChildrenWithDeprecationWarning = false;

addComponentChildDeprecationWarning = false;

removeComponentChildDeprecationWarning = false;

componentParentDeprecationWarning = false;

childrenComponentsDeprecationWarning = false;

childrenComponentsWithDeprecationWarning = false;

BaseComponent = (function() {
  function BaseComponent() {}

  BaseComponent.components = new ComponentsNamespace();

  BaseComponent.register = function(componentName, componentClass) {
    if (!componentName) {
      throw new Error("Component name is required for registration.");
    }
    if (componentClass == null) {
      componentClass = this;
    }
    if (getComponent(this.components, componentName)) {
      throw new Error("Component '" + componentName + "' already registered.");
    }
    if (componentClass.componentName() && componentClass.componentName() !== componentName && getComponent(this.components, componentClass.componentName()) === componentClass) {
      throw new Error("Component '" + componentName + "' already registered under the name '" + (componentClass.componentName()) + "'.");
    }
    componentClass.componentName(componentName);
    assert.equal(componentClass.componentName(), componentName);
    setComponent(this.components, componentName, componentClass);
    return this;
  };

  BaseComponent.getComponent = function(componentsNamespace, componentName) {
    if (!componentName) {
      componentName = componentsNamespace;
      componentsNamespace = this.components;
    }
    if (!componentName) {
      return null;
    }
    if (!_.isString(componentName)) {
      throw new Error("Component name '" + componentName + "' is not a string.");
    }
    return getComponent(componentsNamespace, componentName);
  };

  BaseComponent.componentName = function(componentName) {
    if (componentName) {
      this._componentName = componentName;
      return this;
    }
    return this._componentName || null;
  };

  BaseComponent.prototype.componentName = function() {
    return this.constructor.componentName();
  };

  BaseComponent.prototype.childComponents = function(nameOrComponent) {
    var child, _base;
    if (this._componentInternals == null) {
      this._componentInternals = {};
    }
    if ((_base = this._componentInternals).childComponents == null) {
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);
    }
    if (!nameOrComponent) {
      return (function() {
        var _i, _len, _ref, _results;
        _ref = this._componentInternals.childComponents();
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          _results.push(child);
        }
        return _results;
      }).call(this);
    }
    if (_.isString(nameOrComponent)) {
      return this.childComponentsWith((function(_this) {
        return function(child, parent) {
          return child.componentName() === nameOrComponent;
        };
      })(this));
    } else {
      return this.childComponentsWith((function(_this) {
        return function(child, parent) {
          if (child.constructor === nameOrComponent) {
            return true;
          }
          if (child === nameOrComponent) {
            return true;
          }
          return false;
        };
      })(this));
    }
  };

  BaseComponent.prototype.childComponentsWith = function(propertyOrMatcherOrFunction) {
    var matcher, property, results;
    if (_.isString(propertyOrMatcherOrFunction)) {
      property = propertyOrMatcherOrFunction;
      propertyOrMatcherOrFunction = (function(_this) {
        return function(child, parent) {
          return property in child;
        };
      })(this);
    } else if (!_.isFunction(propertyOrMatcherOrFunction)) {
      assert(_.isObject(propertyOrMatcherOrFunction));
      matcher = propertyOrMatcherOrFunction;
      propertyOrMatcherOrFunction = (function(_this) {
        return function(child, parent) {
          var value;
          for (property in matcher) {
            value = matcher[property];
            if (!(property in child)) {
              return false;
            }
            if (_.isFunction(child[property])) {
              if (child[property]() !== value) {
                return false;
              }
            } else {
              if (child[property] !== value) {
                return false;
              }
            }
          }
          return true;
        };
      })(this);
    }
    results = new ComputedField((function(_this) {
      return function() {
        var child, _i, _len, _ref, _results;
        _ref = _this.childComponents();
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          if (propertyOrMatcherOrFunction.call(_this, child, _this)) {
            _results.push(child);
          }
        }
        return _results;
      };
    })(this), arrayReferenceEquals);
    return results();
  };

  BaseComponent.prototype.addChildComponent = function(childComponent) {
    var _base;
    if (this._componentInternals == null) {
      this._componentInternals = {};
    }
    if ((_base = this._componentInternals).childComponents == null) {
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);
    }
    this._componentInternals.childComponents(Tracker.nonreactive((function(_this) {
      return function() {
        return _this._componentInternals.childComponents().concat([childComponent]);
      };
    })(this)));
    return this;
  };

  BaseComponent.prototype.removeChildComponent = function(childComponent) {
    var _base;
    if (this._componentInternals == null) {
      this._componentInternals = {};
    }
    if ((_base = this._componentInternals).childComponents == null) {
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);
    }
    this._componentInternals.childComponents(Tracker.nonreactive((function(_this) {
      return function() {
        return _.without(_this._componentInternals.childComponents(), childComponent);
      };
    })(this)));
    return this;
  };

  BaseComponent.prototype.parentComponent = function(parentComponent) {
    var _base;
    if (this._componentInternals == null) {
      this._componentInternals = {};
    }
    if ((_base = this._componentInternals).parentComponent == null) {
      _base.parentComponent = new ReactiveField(null, function(a, b) {
        return a === b;
      });
    }
    if (!_.isUndefined(parentComponent)) {
      this._componentInternals.parentComponent(parentComponent);
      return this;
    }
    return this._componentInternals.parentComponent();
  };

  BaseComponent.renderComponent = function(parentComponent) {
    throw new Error("Not implemented");
  };

  BaseComponent.prototype.renderComponent = function(parentComponent) {
    throw new Error("Not implemented");
  };

  BaseComponent.extendComponent = function(constructor, methods) {
    var currentClass, property, value, _ref;
    currentClass = this;
    if (!_.isFunction(constructor)) {
      methods = constructor;
      constructor = function() {
        return constructor.__super__.constructor.apply(this, arguments);
      };
    }
    constructor.prototype = Object.create(currentClass.prototype);
    constructor.prototype.constructor = constructor;
    for (property in currentClass) {
      if (!__hasProp.call(currentClass, property)) continue;
      value = currentClass[property];
      constructor[property] = value;
    }
    constructor.__super__ = currentClass.prototype;
    _ref = methods || {};
    for (property in _ref) {
      if (!__hasProp.call(_ref, property)) continue;
      value = _ref[property];
      constructor.prototype[property] = value;
    }
    return constructor;
  };

  BaseComponent.prototype.componentChildren = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!componentChildrenDeprecationWarning) {
      componentChildrenDeprecationWarning = true;
      if (typeof console !== "undefined" && console !== null) {
        console.warn("componentChildren has been deprecated. Use childComponents instead.");
      }
    }
    return this.childComponents.apply(this, args);
  };

  BaseComponent.prototype.componentChildrenWith = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!componentChildrenWithDeprecationWarning) {
      componentChildrenWithDeprecationWarning = true;
      if (typeof console !== "undefined" && console !== null) {
        console.warn("componentChildrenWith has been deprecated. Use childComponentsWith instead.");
      }
    }
    return this.childComponentsWith.apply(this, args);
  };

  BaseComponent.prototype.addComponentChild = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!addComponentChildDeprecationWarning) {
      addComponentChildDeprecationWarning = true;
      if (typeof console !== "undefined" && console !== null) {
        console.warn("addComponentChild has been deprecated. Use addChildComponent instead.");
      }
    }
    return this.addChildComponent.apply(this, args);
  };

  BaseComponent.prototype.removeComponentChild = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!removeComponentChildDeprecationWarning) {
      removeComponentChildDeprecationWarning = true;
      if (typeof console !== "undefined" && console !== null) {
        console.warn("removeComponentChild has been deprecated. Use removeChildComponent instead.");
      }
    }
    return this.removeChildComponent.apply(this, args);
  };

  BaseComponent.prototype.componentParent = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!componentParentDeprecationWarning) {
      componentParentDeprecationWarning = true;
      if (typeof console !== "undefined" && console !== null) {
        console.warn("componentParent has been deprecated. Use parentComponent instead.");
      }
    }
    return this.parentComponent.apply(this, args);
  };

  BaseComponent.prototype.childrenComponents = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!componentChildrenDeprecationWarning) {
      componentChildrenDeprecationWarning = true;
      if (typeof console !== "undefined" && console !== null) {
        console.warn("childrenComponents has been deprecated. Use childComponents instead.");
      }
    }
    return this.childComponents.apply(this, args);
  };

  BaseComponent.prototype.childrenComponentsWith = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!componentChildrenWithDeprecationWarning) {
      componentChildrenWithDeprecationWarning = true;
      if (typeof console !== "undefined" && console !== null) {
        console.warn("childrenComponentsWith has been deprecated. Use childComponentsWith instead.");
      }
    }
    return this.childComponentsWith.apply(this, args);
  };

  return BaseComponent;

})();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/peerlibrary:base-component/debug.coffee.js                                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                       

BaseComponentDebug = (function() {
  function BaseComponentDebug() {}

  BaseComponentDebug.startComponent = function(component) {
    var name;
    name = component.componentName() || 'unnamed';
    console.group(name);
    return console.log('%o', component);
  };

  BaseComponentDebug.endComponent = function(component) {
    return console.groupEnd();
  };

  BaseComponentDebug.startMarkedComponent = function(component) {
    var name;
    name = component.componentName() || 'unnamed';
    console.group('%c%s', 'text-decoration: underline', name);
    return console.log('%o', component);
  };

  BaseComponentDebug.endMarkedComponent = function(component) {
    return this.endComponent(component);
  };

  BaseComponentDebug.dumpComponentSubtree = function(rootComponent, _markComponent) {
    var child, marked, _i, _len, _ref;
    if (_markComponent == null) {
      _markComponent = (function() {});
    }
    if (!rootComponent) {
      return;
    }
    marked = _markComponent(rootComponent);
    if (marked) {
      this.startMarkedComponent(rootComponent);
    } else {
      this.startComponent(rootComponent);
    }
    _ref = rootComponent.childComponents();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      this.dumpComponentSubtree(child, _markComponent);
    }
    if (marked) {
      this.endMarkedComponent(rootComponent);
    } else {
      this.endComponent(rootComponent);
    }
  };

  BaseComponentDebug.componentRoot = function(component) {
    var parentComponent;
    while (parentComponent = component.parentComponent()) {
      component = parentComponent;
    }
    return component;
  };

  BaseComponentDebug.dumpComponentTree = function(component) {
    if (!component) {
      return;
    }
    return this.dumpComponentSubtree(this.componentRoot(component), function(c) {
      return c === component;
    });
  };

  return BaseComponentDebug;

})();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:base-component'] = {}, {
  BaseComponent: BaseComponent,
  BaseComponentDebug: BaseComponentDebug
});

})();

//# sourceMappingURL=peerlibrary_base-component.js.map
