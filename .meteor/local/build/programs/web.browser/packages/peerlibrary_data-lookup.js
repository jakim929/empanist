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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ComputedField = Package['peerlibrary:computed-field'].ComputedField;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, DataLookup;

(function(){

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// packages/peerlibrary_data-lookup/packages/peerlibrary_data-lookup.js //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
                                                                        //
(function () {                                                          // 1
                                                                        // 2
///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/peerlibrary:data-lookup/lib.coffee.js                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                        // 10
                                                                        // 11
DataLookup = (function() {                                              // 12
  function DataLookup() {}                                              // 13
                                                                        // 14
  DataLookup.lookup = function(obj, path) {                             // 15
    var segment;                                                        // 16
    if (_.isString(path)) {                                             // 17
      path = path.split('.');                                           // 18
    }                                                                   // 19
    if (_.isFunction(obj)) {                                            // 20
      obj = obj();                                                      // 21
    }                                                                   // 22
    if (!_.isArray(path)) {                                             // 23
      return obj;                                                       // 24
    }                                                                   // 25
    while (path.length > 0) {                                           // 26
      segment = path.shift();                                           // 27
      if (_.isObject(obj) && segment in obj) {                          // 28
        obj = obj[segment];                                             // 29
        if (_.isFunction(obj)) {                                        // 30
          obj = obj();                                                  // 31
        }                                                               // 32
      } else {                                                          // 33
        return void 0;                                                  // 34
      }                                                                 // 35
    }                                                                   // 36
    return obj;                                                         // 37
  };                                                                    // 38
                                                                        // 39
  DataLookup.get = function(obj, path, equalsFunc) {                    // 40
    var result;                                                         // 41
    if (!Tracker.active) {                                              // 42
      return this.lookup(obj, path);                                    // 43
    }                                                                   // 44
    result = new ComputedField((function(_this) {                       // 45
      return function() {                                               // 46
        return _this.lookup(obj, path);                                 // 47
      };                                                                // 48
    })(this), equalsFunc);                                              // 49
    return result();                                                    // 50
  };                                                                    // 51
                                                                        // 52
  return DataLookup;                                                    // 53
                                                                        // 54
})();                                                                   // 55
///////////////////////////////////////////////////////////////////////
                                                                        // 57
}).call(this);                                                          // 58
                                                                        // 59
//////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:data-lookup'] = {}, {
  DataLookup: DataLookup
});

})();
