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
(function () {                                                                                                     // 1
                                                                                                                   // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/peerlibrary:base-component/lib.coffee.js                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ComponentsNamespace, addComponentChildDeprecationWarning, arrayReferenceEquals, childrenComponentsDeprecationWarning, childrenComponentsWithDeprecationWarning, componentChildrenDeprecationWarning, componentChildrenWithDeprecationWarning, componentParentDeprecationWarning, createNamespace, getComponent, getNamespace, getPathAndName, removeComponentChildDeprecationWarning, setComponent,               
  __hasProp = {}.hasOwnProperty,                                                                                   // 11
  __slice = [].slice;                                                                                              // 12
                                                                                                                   // 13
arrayReferenceEquals = function(a, b) {                                                                            // 14
  var i, _i, _ref;                                                                                                 // 15
  if (a.length !== b.length) {                                                                                     // 16
    return false;                                                                                                  // 17
  }                                                                                                                // 18
  for (i = _i = 0, _ref = a.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {              // 19
    if (a[i] !== b[i]) {                                                                                           // 20
      return false;                                                                                                // 21
    }                                                                                                              // 22
  }                                                                                                                // 23
  return true;                                                                                                     // 24
};                                                                                                                 // 25
                                                                                                                   // 26
ComponentsNamespace = (function() {                                                                                // 27
  function ComponentsNamespace() {}                                                                                // 28
                                                                                                                   // 29
  ComponentsNamespace.COMPONENTS_FIELD = '';                                                                       // 30
                                                                                                                   // 31
  return ComponentsNamespace;                                                                                      // 32
                                                                                                                   // 33
})();                                                                                                              // 34
                                                                                                                   // 35
getPathAndName = function(name) {                                                                                  // 36
  var path;                                                                                                        // 37
  assert(name);                                                                                                    // 38
  path = name.split('.');                                                                                          // 39
  name = path.pop();                                                                                               // 40
  assert(name);                                                                                                    // 41
  return {                                                                                                         // 42
    path: path,                                                                                                    // 43
    name: name                                                                                                     // 44
  };                                                                                                               // 45
};                                                                                                                 // 46
                                                                                                                   // 47
getNamespace = function(components, path) {                                                                        // 48
  var match, segment;                                                                                              // 49
  assert(_.isObject(components));                                                                                  // 50
  assert(_.isArray(path));                                                                                         // 51
  match = components;                                                                                              // 52
  while ((segment = path.shift()) != null) {                                                                       // 53
    match = match[segment];                                                                                        // 54
    if (!_.isObject(match)) {                                                                                      // 55
      return null;                                                                                                 // 56
    }                                                                                                              // 57
  }                                                                                                                // 58
  if (!_.isObject(match)) {                                                                                        // 59
    return null;                                                                                                   // 60
  }                                                                                                                // 61
  return match || null;                                                                                            // 62
};                                                                                                                 // 63
                                                                                                                   // 64
createNamespace = function(components, path) {                                                                     // 65
  var match, segment;                                                                                              // 66
  assert(_.isObject(components));                                                                                  // 67
  assert(_.isArray(path));                                                                                         // 68
  match = components;                                                                                              // 69
  while ((segment = path.shift()) != null) {                                                                       // 70
    if (!(segment in match)) {                                                                                     // 71
      match[segment] = new components.constructor();                                                               // 72
    }                                                                                                              // 73
    match = match[segment];                                                                                        // 74
    assert(_.isObject(match));                                                                                     // 75
  }                                                                                                                // 76
  assert(_.isObject(match));                                                                                       // 77
  return match;                                                                                                    // 78
};                                                                                                                 // 79
                                                                                                                   // 80
getComponent = function(components, name) {                                                                        // 81
  var namespace, path, _ref, _ref1;                                                                                // 82
  assert(_.isObject(components));                                                                                  // 83
  if (!name) {                                                                                                     // 84
    return null;                                                                                                   // 85
  }                                                                                                                // 86
  _ref = getPathAndName(name), path = _ref.path, name = _ref.name;                                                 // 87
  namespace = getNamespace(components, path);                                                                      // 88
  if (!namespace) {                                                                                                // 89
    return null;                                                                                                   // 90
  }                                                                                                                // 91
  return ((_ref1 = namespace[components.constructor.COMPONENTS_FIELD]) != null ? _ref1[name] : void 0) || null;    // 92
};                                                                                                                 // 93
                                                                                                                   // 94
setComponent = function(components, name, component) {                                                             // 95
  var namespace, path, _name, _ref;                                                                                // 96
  assert(_.isObject(components));                                                                                  // 97
  assert(name);                                                                                                    // 98
  assert(component);                                                                                               // 99
  _ref = getPathAndName(name), path = _ref.path, name = _ref.name;                                                 // 100
  namespace = createNamespace(components, path);                                                                   // 101
  if (namespace[_name = components.constructor.COMPONENTS_FIELD] == null) {                                        // 102
    namespace[_name] = new components.constructor();                                                               // 103
  }                                                                                                                // 104
  assert(!(name in namespace[components.constructor.COMPONENTS_FIELD]));                                           // 105
  return namespace[components.constructor.COMPONENTS_FIELD][name] = component;                                     // 106
};                                                                                                                 // 107
                                                                                                                   // 108
componentChildrenDeprecationWarning = false;                                                                       // 109
                                                                                                                   // 110
componentChildrenWithDeprecationWarning = false;                                                                   // 111
                                                                                                                   // 112
addComponentChildDeprecationWarning = false;                                                                       // 113
                                                                                                                   // 114
removeComponentChildDeprecationWarning = false;                                                                    // 115
                                                                                                                   // 116
componentParentDeprecationWarning = false;                                                                         // 117
                                                                                                                   // 118
childrenComponentsDeprecationWarning = false;                                                                      // 119
                                                                                                                   // 120
childrenComponentsWithDeprecationWarning = false;                                                                  // 121
                                                                                                                   // 122
BaseComponent = (function() {                                                                                      // 123
  function BaseComponent() {}                                                                                      // 124
                                                                                                                   // 125
  BaseComponent.components = new ComponentsNamespace();                                                            // 126
                                                                                                                   // 127
  BaseComponent.register = function(componentName, componentClass) {                                               // 128
    if (!componentName) {                                                                                          // 129
      throw new Error("Component name is required for registration.");                                             // 130
    }                                                                                                              // 131
    if (componentClass == null) {                                                                                  // 132
      componentClass = this;                                                                                       // 133
    }                                                                                                              // 134
    if (getComponent(this.components, componentName)) {                                                            // 135
      throw new Error("Component '" + componentName + "' already registered.");                                    // 136
    }                                                                                                              // 137
    if (componentClass.componentName() && componentClass.componentName() !== componentName && getComponent(this.components, componentClass.componentName()) === componentClass) {
      throw new Error("Component '" + componentName + "' already registered under the name '" + (componentClass.componentName()) + "'.");
    }                                                                                                              // 140
    componentClass.componentName(componentName);                                                                   // 141
    assert.equal(componentClass.componentName(), componentName);                                                   // 142
    setComponent(this.components, componentName, componentClass);                                                  // 143
    return this;                                                                                                   // 144
  };                                                                                                               // 145
                                                                                                                   // 146
  BaseComponent.getComponent = function(componentsNamespace, componentName) {                                      // 147
    if (!componentName) {                                                                                          // 148
      componentName = componentsNamespace;                                                                         // 149
      componentsNamespace = this.components;                                                                       // 150
    }                                                                                                              // 151
    if (!componentName) {                                                                                          // 152
      return null;                                                                                                 // 153
    }                                                                                                              // 154
    if (!_.isString(componentName)) {                                                                              // 155
      throw new Error("Component name '" + componentName + "' is not a string.");                                  // 156
    }                                                                                                              // 157
    return getComponent(componentsNamespace, componentName);                                                       // 158
  };                                                                                                               // 159
                                                                                                                   // 160
  BaseComponent.componentName = function(componentName) {                                                          // 161
    if (componentName) {                                                                                           // 162
      this._componentName = componentName;                                                                         // 163
      return this;                                                                                                 // 164
    }                                                                                                              // 165
    return this._componentName || null;                                                                            // 166
  };                                                                                                               // 167
                                                                                                                   // 168
  BaseComponent.prototype.componentName = function() {                                                             // 169
    return this.constructor.componentName();                                                                       // 170
  };                                                                                                               // 171
                                                                                                                   // 172
  BaseComponent.prototype.childComponents = function(nameOrComponent) {                                            // 173
    var child, _base;                                                                                              // 174
    if (this._componentInternals == null) {                                                                        // 175
      this._componentInternals = {};                                                                               // 176
    }                                                                                                              // 177
    if ((_base = this._componentInternals).childComponents == null) {                                              // 178
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);                                         // 179
    }                                                                                                              // 180
    if (!nameOrComponent) {                                                                                        // 181
      return (function() {                                                                                         // 182
        var _i, _len, _ref, _results;                                                                              // 183
        _ref = this._componentInternals.childComponents();                                                         // 184
        _results = [];                                                                                             // 185
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                        // 186
          child = _ref[_i];                                                                                        // 187
          _results.push(child);                                                                                    // 188
        }                                                                                                          // 189
        return _results;                                                                                           // 190
      }).call(this);                                                                                               // 191
    }                                                                                                              // 192
    if (_.isString(nameOrComponent)) {                                                                             // 193
      return this.childComponentsWith((function(_this) {                                                           // 194
        return function(child, parent) {                                                                           // 195
          return child.componentName() === nameOrComponent;                                                        // 196
        };                                                                                                         // 197
      })(this));                                                                                                   // 198
    } else {                                                                                                       // 199
      return this.childComponentsWith((function(_this) {                                                           // 200
        return function(child, parent) {                                                                           // 201
          if (child.constructor === nameOrComponent) {                                                             // 202
            return true;                                                                                           // 203
          }                                                                                                        // 204
          if (child === nameOrComponent) {                                                                         // 205
            return true;                                                                                           // 206
          }                                                                                                        // 207
          return false;                                                                                            // 208
        };                                                                                                         // 209
      })(this));                                                                                                   // 210
    }                                                                                                              // 211
  };                                                                                                               // 212
                                                                                                                   // 213
  BaseComponent.prototype.childComponentsWith = function(propertyOrMatcherOrFunction) {                            // 214
    var matcher, property, results;                                                                                // 215
    if (_.isString(propertyOrMatcherOrFunction)) {                                                                 // 216
      property = propertyOrMatcherOrFunction;                                                                      // 217
      propertyOrMatcherOrFunction = (function(_this) {                                                             // 218
        return function(child, parent) {                                                                           // 219
          return property in child;                                                                                // 220
        };                                                                                                         // 221
      })(this);                                                                                                    // 222
    } else if (!_.isFunction(propertyOrMatcherOrFunction)) {                                                       // 223
      assert(_.isObject(propertyOrMatcherOrFunction));                                                             // 224
      matcher = propertyOrMatcherOrFunction;                                                                       // 225
      propertyOrMatcherOrFunction = (function(_this) {                                                             // 226
        return function(child, parent) {                                                                           // 227
          var value;                                                                                               // 228
          for (property in matcher) {                                                                              // 229
            value = matcher[property];                                                                             // 230
            if (!(property in child)) {                                                                            // 231
              return false;                                                                                        // 232
            }                                                                                                      // 233
            if (_.isFunction(child[property])) {                                                                   // 234
              if (child[property]() !== value) {                                                                   // 235
                return false;                                                                                      // 236
              }                                                                                                    // 237
            } else {                                                                                               // 238
              if (child[property] !== value) {                                                                     // 239
                return false;                                                                                      // 240
              }                                                                                                    // 241
            }                                                                                                      // 242
          }                                                                                                        // 243
          return true;                                                                                             // 244
        };                                                                                                         // 245
      })(this);                                                                                                    // 246
    }                                                                                                              // 247
    results = new ComputedField((function(_this) {                                                                 // 248
      return function() {                                                                                          // 249
        var child, _i, _len, _ref, _results;                                                                       // 250
        _ref = _this.childComponents();                                                                            // 251
        _results = [];                                                                                             // 252
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                        // 253
          child = _ref[_i];                                                                                        // 254
          if (propertyOrMatcherOrFunction.call(_this, child, _this)) {                                             // 255
            _results.push(child);                                                                                  // 256
          }                                                                                                        // 257
        }                                                                                                          // 258
        return _results;                                                                                           // 259
      };                                                                                                           // 260
    })(this), arrayReferenceEquals);                                                                               // 261
    return results();                                                                                              // 262
  };                                                                                                               // 263
                                                                                                                   // 264
  BaseComponent.prototype.addChildComponent = function(childComponent) {                                           // 265
    var _base;                                                                                                     // 266
    if (this._componentInternals == null) {                                                                        // 267
      this._componentInternals = {};                                                                               // 268
    }                                                                                                              // 269
    if ((_base = this._componentInternals).childComponents == null) {                                              // 270
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);                                         // 271
    }                                                                                                              // 272
    this._componentInternals.childComponents(Tracker.nonreactive((function(_this) {                                // 273
      return function() {                                                                                          // 274
        return _this._componentInternals.childComponents().concat([childComponent]);                               // 275
      };                                                                                                           // 276
    })(this)));                                                                                                    // 277
    return this;                                                                                                   // 278
  };                                                                                                               // 279
                                                                                                                   // 280
  BaseComponent.prototype.removeChildComponent = function(childComponent) {                                        // 281
    var _base;                                                                                                     // 282
    if (this._componentInternals == null) {                                                                        // 283
      this._componentInternals = {};                                                                               // 284
    }                                                                                                              // 285
    if ((_base = this._componentInternals).childComponents == null) {                                              // 286
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);                                         // 287
    }                                                                                                              // 288
    this._componentInternals.childComponents(Tracker.nonreactive((function(_this) {                                // 289
      return function() {                                                                                          // 290
        return _.without(_this._componentInternals.childComponents(), childComponent);                             // 291
      };                                                                                                           // 292
    })(this)));                                                                                                    // 293
    return this;                                                                                                   // 294
  };                                                                                                               // 295
                                                                                                                   // 296
  BaseComponent.prototype.parentComponent = function(parentComponent) {                                            // 297
    var _base;                                                                                                     // 298
    if (this._componentInternals == null) {                                                                        // 299
      this._componentInternals = {};                                                                               // 300
    }                                                                                                              // 301
    if ((_base = this._componentInternals).parentComponent == null) {                                              // 302
      _base.parentComponent = new ReactiveField(null, function(a, b) {                                             // 303
        return a === b;                                                                                            // 304
      });                                                                                                          // 305
    }                                                                                                              // 306
    if (!_.isUndefined(parentComponent)) {                                                                         // 307
      this._componentInternals.parentComponent(parentComponent);                                                   // 308
      return this;                                                                                                 // 309
    }                                                                                                              // 310
    return this._componentInternals.parentComponent();                                                             // 311
  };                                                                                                               // 312
                                                                                                                   // 313
  BaseComponent.renderComponent = function(parentComponent) {                                                      // 314
    throw new Error("Not implemented");                                                                            // 315
  };                                                                                                               // 316
                                                                                                                   // 317
  BaseComponent.prototype.renderComponent = function(parentComponent) {                                            // 318
    throw new Error("Not implemented");                                                                            // 319
  };                                                                                                               // 320
                                                                                                                   // 321
  BaseComponent.extendComponent = function(constructor, methods) {                                                 // 322
    var currentClass, property, value, _ref;                                                                       // 323
    currentClass = this;                                                                                           // 324
    if (!_.isFunction(constructor)) {                                                                              // 325
      methods = constructor;                                                                                       // 326
      constructor = function() {                                                                                   // 327
        return constructor.__super__.constructor.apply(this, arguments);                                           // 328
      };                                                                                                           // 329
    }                                                                                                              // 330
    constructor.prototype = Object.create(currentClass.prototype);                                                 // 331
    constructor.prototype.constructor = constructor;                                                               // 332
    for (property in currentClass) {                                                                               // 333
      if (!__hasProp.call(currentClass, property)) continue;                                                       // 334
      value = currentClass[property];                                                                              // 335
      constructor[property] = value;                                                                               // 336
    }                                                                                                              // 337
    constructor.__super__ = currentClass.prototype;                                                                // 338
    _ref = methods || {};                                                                                          // 339
    for (property in _ref) {                                                                                       // 340
      if (!__hasProp.call(_ref, property)) continue;                                                               // 341
      value = _ref[property];                                                                                      // 342
      constructor.prototype[property] = value;                                                                     // 343
    }                                                                                                              // 344
    return constructor;                                                                                            // 345
  };                                                                                                               // 346
                                                                                                                   // 347
  BaseComponent.prototype.componentChildren = function() {                                                         // 348
    var args;                                                                                                      // 349
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 350
    if (!componentChildrenDeprecationWarning) {                                                                    // 351
      componentChildrenDeprecationWarning = true;                                                                  // 352
      if (typeof console !== "undefined" && console !== null) {                                                    // 353
        console.warn("componentChildren has been deprecated. Use childComponents instead.");                       // 354
      }                                                                                                            // 355
    }                                                                                                              // 356
    return this.childComponents.apply(this, args);                                                                 // 357
  };                                                                                                               // 358
                                                                                                                   // 359
  BaseComponent.prototype.componentChildrenWith = function() {                                                     // 360
    var args;                                                                                                      // 361
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 362
    if (!componentChildrenWithDeprecationWarning) {                                                                // 363
      componentChildrenWithDeprecationWarning = true;                                                              // 364
      if (typeof console !== "undefined" && console !== null) {                                                    // 365
        console.warn("componentChildrenWith has been deprecated. Use childComponentsWith instead.");               // 366
      }                                                                                                            // 367
    }                                                                                                              // 368
    return this.childComponentsWith.apply(this, args);                                                             // 369
  };                                                                                                               // 370
                                                                                                                   // 371
  BaseComponent.prototype.addComponentChild = function() {                                                         // 372
    var args;                                                                                                      // 373
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 374
    if (!addComponentChildDeprecationWarning) {                                                                    // 375
      addComponentChildDeprecationWarning = true;                                                                  // 376
      if (typeof console !== "undefined" && console !== null) {                                                    // 377
        console.warn("addComponentChild has been deprecated. Use addChildComponent instead.");                     // 378
      }                                                                                                            // 379
    }                                                                                                              // 380
    return this.addChildComponent.apply(this, args);                                                               // 381
  };                                                                                                               // 382
                                                                                                                   // 383
  BaseComponent.prototype.removeComponentChild = function() {                                                      // 384
    var args;                                                                                                      // 385
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 386
    if (!removeComponentChildDeprecationWarning) {                                                                 // 387
      removeComponentChildDeprecationWarning = true;                                                               // 388
      if (typeof console !== "undefined" && console !== null) {                                                    // 389
        console.warn("removeComponentChild has been deprecated. Use removeChildComponent instead.");               // 390
      }                                                                                                            // 391
    }                                                                                                              // 392
    return this.removeChildComponent.apply(this, args);                                                            // 393
  };                                                                                                               // 394
                                                                                                                   // 395
  BaseComponent.prototype.componentParent = function() {                                                           // 396
    var args;                                                                                                      // 397
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 398
    if (!componentParentDeprecationWarning) {                                                                      // 399
      componentParentDeprecationWarning = true;                                                                    // 400
      if (typeof console !== "undefined" && console !== null) {                                                    // 401
        console.warn("componentParent has been deprecated. Use parentComponent instead.");                         // 402
      }                                                                                                            // 403
    }                                                                                                              // 404
    return this.parentComponent.apply(this, args);                                                                 // 405
  };                                                                                                               // 406
                                                                                                                   // 407
  BaseComponent.prototype.childrenComponents = function() {                                                        // 408
    var args;                                                                                                      // 409
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 410
    if (!componentChildrenDeprecationWarning) {                                                                    // 411
      componentChildrenDeprecationWarning = true;                                                                  // 412
      if (typeof console !== "undefined" && console !== null) {                                                    // 413
        console.warn("childrenComponents has been deprecated. Use childComponents instead.");                      // 414
      }                                                                                                            // 415
    }                                                                                                              // 416
    return this.childComponents.apply(this, args);                                                                 // 417
  };                                                                                                               // 418
                                                                                                                   // 419
  BaseComponent.prototype.childrenComponentsWith = function() {                                                    // 420
    var args;                                                                                                      // 421
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 422
    if (!componentChildrenWithDeprecationWarning) {                                                                // 423
      componentChildrenWithDeprecationWarning = true;                                                              // 424
      if (typeof console !== "undefined" && console !== null) {                                                    // 425
        console.warn("childrenComponentsWith has been deprecated. Use childComponentsWith instead.");              // 426
      }                                                                                                            // 427
    }                                                                                                              // 428
    return this.childComponentsWith.apply(this, args);                                                             // 429
  };                                                                                                               // 430
                                                                                                                   // 431
  return BaseComponent;                                                                                            // 432
                                                                                                                   // 433
})();                                                                                                              // 434
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   // 436
}).call(this);                                                                                                     // 437
                                                                                                                   // 438
                                                                                                                   // 439
                                                                                                                   // 440
                                                                                                                   // 441
                                                                                                                   // 442
                                                                                                                   // 443
(function () {                                                                                                     // 444
                                                                                                                   // 445
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/peerlibrary:base-component/debug.coffee.js                                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                                                   // 453
                                                                                                                   // 454
BaseComponentDebug = (function() {                                                                                 // 455
  function BaseComponentDebug() {}                                                                                 // 456
                                                                                                                   // 457
  BaseComponentDebug.startComponent = function(component) {                                                        // 458
    var name;                                                                                                      // 459
    name = component.componentName() || 'unnamed';                                                                 // 460
    console.group(name);                                                                                           // 461
    return console.log('%o', component);                                                                           // 462
  };                                                                                                               // 463
                                                                                                                   // 464
  BaseComponentDebug.endComponent = function(component) {                                                          // 465
    return console.groupEnd();                                                                                     // 466
  };                                                                                                               // 467
                                                                                                                   // 468
  BaseComponentDebug.startMarkedComponent = function(component) {                                                  // 469
    var name;                                                                                                      // 470
    name = component.componentName() || 'unnamed';                                                                 // 471
    console.group('%c%s', 'text-decoration: underline', name);                                                     // 472
    return console.log('%o', component);                                                                           // 473
  };                                                                                                               // 474
                                                                                                                   // 475
  BaseComponentDebug.endMarkedComponent = function(component) {                                                    // 476
    return this.endComponent(component);                                                                           // 477
  };                                                                                                               // 478
                                                                                                                   // 479
  BaseComponentDebug.dumpComponentSubtree = function(rootComponent, _markComponent) {                              // 480
    var child, marked, _i, _len, _ref;                                                                             // 481
    if (_markComponent == null) {                                                                                  // 482
      _markComponent = (function() {});                                                                            // 483
    }                                                                                                              // 484
    if (!rootComponent) {                                                                                          // 485
      return;                                                                                                      // 486
    }                                                                                                              // 487
    marked = _markComponent(rootComponent);                                                                        // 488
    if (marked) {                                                                                                  // 489
      this.startMarkedComponent(rootComponent);                                                                    // 490
    } else {                                                                                                       // 491
      this.startComponent(rootComponent);                                                                          // 492
    }                                                                                                              // 493
    _ref = rootComponent.childComponents();                                                                        // 494
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                            // 495
      child = _ref[_i];                                                                                            // 496
      this.dumpComponentSubtree(child, _markComponent);                                                            // 497
    }                                                                                                              // 498
    if (marked) {                                                                                                  // 499
      this.endMarkedComponent(rootComponent);                                                                      // 500
    } else {                                                                                                       // 501
      this.endComponent(rootComponent);                                                                            // 502
    }                                                                                                              // 503
  };                                                                                                               // 504
                                                                                                                   // 505
  BaseComponentDebug.componentRoot = function(component) {                                                         // 506
    var parentComponent;                                                                                           // 507
    while (parentComponent = component.parentComponent()) {                                                        // 508
      component = parentComponent;                                                                                 // 509
    }                                                                                                              // 510
    return component;                                                                                              // 511
  };                                                                                                               // 512
                                                                                                                   // 513
  BaseComponentDebug.dumpComponentTree = function(component) {                                                     // 514
    if (!component) {                                                                                              // 515
      return;                                                                                                      // 516
    }                                                                                                              // 517
    return this.dumpComponentSubtree(this.componentRoot(component), function(c) {                                  // 518
      return c === component;                                                                                      // 519
    });                                                                                                            // 520
  };                                                                                                               // 521
                                                                                                                   // 522
  return BaseComponentDebug;                                                                                       // 523
                                                                                                                   // 524
})();                                                                                                              // 525
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   // 527
}).call(this);                                                                                                     // 528
                                                                                                                   // 529
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
