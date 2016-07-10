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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, ComputedField;

(function(){

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// packages/peerlibrary_computed-field/packages/peerlibrary_computed-fi //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
                                                                        //
(function () {                                                          // 1
                                                                        // 2
///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/peerlibrary:computed-field/lib.coffee.js                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                        // 10
                                                                        // 11
ComputedField = (function() {                                           // 12
  function ComputedField(func, equalsFunc) {                            // 13
    var getter, handle, lastValue, startAutorun;                        // 14
    handle = null;                                                      // 15
    lastValue = null;                                                   // 16
    startAutorun = function() {                                         // 17
      var originalStop;                                                 // 18
      handle = Tracker.autorun(function(computation) {                  // 19
        var value;                                                      // 20
        value = func();                                                 // 21
        if (!lastValue) {                                               // 22
          lastValue = new ReactiveVar(value, equalsFunc);               // 23
        } else {                                                        // 24
          lastValue.set(value);                                         // 25
        }                                                               // 26
        return Tracker.afterFlush(function() {                          // 27
          if (!lastValue.dep.hasDependents()) {                         // 28
            return getter.stop();                                       // 29
          }                                                             // 30
        });                                                             // 31
      });                                                               // 32
      if (handle.onStop) {                                              // 33
        return handle.onStop(function() {                               // 34
          return handle = null;                                         // 35
        });                                                             // 36
      } else {                                                          // 37
        originalStop = handle.stop;                                     // 38
        return handle.stop = function() {                               // 39
          if (handle) {                                                 // 40
            originalStop.call(handle);                                  // 41
          }                                                             // 42
          return handle = null;                                         // 43
        };                                                              // 44
      }                                                                 // 45
    };                                                                  // 46
    startAutorun();                                                     // 47
    getter = function() {                                               // 48
      getter.flush();                                                   // 49
      return lastValue.get();                                           // 50
    };                                                                  // 51
    if (Object.setPrototypeOf) {                                        // 52
      Object.setPrototypeOf(getter, this.constructor.prototype);        // 53
    } else {                                                            // 54
      getter.__proto__ = this.constructor.prototype;                    // 55
    }                                                                   // 56
    getter.toString = function() {                                      // 57
      return "ComputedField{" + (this()) + "}";                         // 58
    };                                                                  // 59
    getter.apply = function() {                                         // 60
      return getter();                                                  // 61
    };                                                                  // 62
    getter.call = function() {                                          // 63
      return getter();                                                  // 64
    };                                                                  // 65
    getter.stop = function() {                                          // 66
      if (handle != null) {                                             // 67
        handle.stop();                                                  // 68
      }                                                                 // 69
      return handle = null;                                             // 70
    };                                                                  // 71
    getter._isRunning = function() {                                    // 72
      return !!handle;                                                  // 73
    };                                                                  // 74
    getter.flush = function() {                                         // 75
      return Tracker.nonreactive(function() {                           // 76
        if (handle) {                                                   // 77
          return handle._recompute();                                   // 78
        } else {                                                        // 79
          return startAutorun();                                        // 80
        }                                                               // 81
      });                                                               // 82
    };                                                                  // 83
    return getter;                                                      // 84
  }                                                                     // 85
                                                                        // 86
  return ComputedField;                                                 // 87
                                                                        // 88
})();                                                                   // 89
///////////////////////////////////////////////////////////////////////
                                                                        // 91
}).call(this);                                                          // 92
                                                                        // 93
//////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:computed-field'] = {}, {
  ComputedField: ComputedField
});

})();
