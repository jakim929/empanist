(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var blocking = Package['peerlibrary:blocking'].blocking;
var _ = Package.underscore._;

/* Package-scope variables */
var AWS;

(function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// packages/peerlibrary_aws-sdk/packages/peerlibrary_aws-sdk.js                     //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
(function () {

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// packages/peerlibrary:aws-sdk/server.js                                     //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
AWS = Npm.require('aws-sdk');                                                 // 1
                                                                              // 2
var originalDefineMethods = AWS.Service.defineMethods;                        // 3
                                                                              // 4
function makeBlocking(proto, methodName) {                                    // 5
  var syncMethod = methodName + 'Sync';                                       // 6
  if (!proto[methodName]) return;                                             // 7
  if (!_.isFunction(proto[methodName])) return;                               // 8
  if (proto[syncMethod]) return;                                              // 9
  proto[syncMethod] = blocking(proto[methodName]);                            // 10
}                                                                             // 11
                                                                              // 12
AWS.Service.defineMethods = function defineMethods(svc) {                     // 13
  originalDefineMethods(svc);                                                 // 14
  AWS.util.each(svc.prototype.api.operations, function iterator(methodName) { // 15
    makeBlocking(svc.prototype, methodName);                                  // 16
  });                                                                         // 17
};                                                                            // 18
                                                                              // 19
AWS.util.each(AWS, function iterator(name) {                                  // 20
  if (!(AWS[name].prototype instanceof AWS.Service)) return;                  // 21
                                                                              // 22
  AWS.util.each(AWS[name].prototype, function iterator(methodName) {          // 23
    makeBlocking(AWS[name].prototype, methodName);                            // 24
  });                                                                         // 25
});                                                                           // 26
                                                                              // 27
////////////////////////////////////////////////////////////////////////////////

}).call(this);

//////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:aws-sdk'] = {}, {
  AWS: AWS
});

})();

//# sourceMappingURL=peerlibrary_aws-sdk.js.map
