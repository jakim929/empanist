(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Coordinates;

var require = meteorInstall({"node_modules":{"meteor":{"muriloventuroso:get-coordinates":{"get-coordinates.js":function(){

////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
// packages/muriloventuroso_get-coordinates/get-coordinates.js                    //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
                                                                                  //
Coordinates = {                                                                   // 1
    key: '',                                                                      // 2
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=',            // 3
    getFromAdress: function getFromAdress(address) {                              // 4
        var apiUrl = this.url + encodeURIComponent(address) + '&key=' + this.key;
        var res = HTTP.get(apiUrl).data;                                          // 6
        if (res['status'] == 'OK') {                                              // 7
            var response = {                                                      // 8
                'status': res['status'],                                          // 9
                'location': res['results'][0]['geometry']['location']             // 10
            };                                                                    // 8
        } else {                                                                  // 12
            var response = { 'status': res['status'] };                           // 13
        }                                                                         // 14
        return response;                                                          // 15
    }                                                                             // 16
};                                                                                // 1
////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/muriloventuroso:get-coordinates/get-coordinates.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['muriloventuroso:get-coordinates'] = {}, {
  Coordinates: Coordinates
});

})();

//# sourceMappingURL=muriloventuroso_get-coordinates.js.map
