(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, ReactiveField;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/peerlibrary_reactive-field/packages/peerlibrary_reactive-fiel //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
(function () {

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/peerlibrary:reactive-field/lib.coffee.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                  

ReactiveField = (function() {
  function ReactiveField(initialValue, equalsFunc) {
    var getterSetter, value;
    value = new ReactiveVar(initialValue, equalsFunc);
    getterSetter = function(newValue) {
      if (arguments.length > 0) {
        value.set(newValue);
        return Tracker.nonreactive((function(_this) {
          return function() {
            return value.get();
          };
        })(this));
      }
      return value.get();
    };
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(getterSetter, this.constructor.prototype);
    } else {
      getterSetter.__proto__ = this.constructor.prototype;
    }
    getterSetter.toString = function() {
      return "ReactiveField{" + (this()) + "}";
    };
    getterSetter.apply = function(obj, args) {
      if ((args != null ? args.length : void 0) > 0) {
        return getterSetter(args[0]);
      } else {
        return getterSetter();
      }
    };
    getterSetter.call = function(obj, arg) {
      if (arguments.length > 1) {
        return getterSetter(arg);
      } else {
        return getterSetter();
      }
    };
    return getterSetter;
  }

  return ReactiveField;

})();
/////////////////////////////////////////////////////////////////////////

}).call(this);

////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:reactive-field'] = {}, {
  ReactiveField: ReactiveField
});

})();

//# sourceMappingURL=peerlibrary_reactive-field.js.map
