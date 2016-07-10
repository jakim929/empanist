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
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/mrt_copy-template/packages/mrt_copy-template.js                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
(function () {                                                               // 1
                                                                             // 2
//////////////////////////////////////////////////////////////////////////   // 3
//                                                                      //   // 4
// packages/mrt:copy-template/copy_template.js                          //   // 5
//                                                                      //   // 6
//////////////////////////////////////////////////////////////////////////   // 7
                                                                        //   // 8
                                                                        // 1
Template.__copy__ = function (name, copyOf) {                           // 2
  Template.__checkName(name);                                           // 3
  Template[name] = new Template(name, Template[copyOf].renderFunction); // 4
}                                                                       // 5
                                                                        // 6
//////////////////////////////////////////////////////////////////////////   // 15
                                                                             // 16
}).call(this);                                                               // 17
                                                                             // 18
///////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:copy-template'] = {};

})();
