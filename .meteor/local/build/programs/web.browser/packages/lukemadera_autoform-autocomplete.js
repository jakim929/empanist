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
var AutoForm = Package['aldeed:autoform'].AutoForm;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var notoriiArray = Package['notorii:array'].notoriiArray;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

/* Package-scope variables */
var lmAfAutocomplete;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/lukemadera_autoform-autocomplete/template.autoform-autocomplete.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afAutocomplete");                                                                                // 2
Template["afAutocomplete"] = new Template("Template.afAutocomplete", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "lm-autoform-autocomplete-input-cont"                                                                     // 6
  }, "\n\n    ", Blaze.If(function() {                                                                                 // 7
    return Spacebars.call(Spacebars.dot(view.lookup("opts"), "multi"));                                                // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.DIV({                                                                                    // 10
      "class": "lm-autoform-autocomplete-input-multi-cont"                                                             // 11
    }, "\n        ", Blaze.Each(function() {                                                                           // 12
      return Spacebars.call(view.lookup("values"));                                                                    // 13
    }, function() {                                                                                                    // 14
      return [ "\n          ", HTML.DIV({                                                                              // 15
        "class": "lm-autoform-autocomplete-selected-value"                                                             // 16
      }, "\n            ", HTML.Comment(" <div class='lm-autoform-autocomplete-selected-value-remove'>x</div> "), "\n            ", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("xDisplay"), "name"));                                         // 18
      }, function() {                                                                                                  // 19
        return [ "\n              ", Blaze.View("lookup:xDisplay.name", function() {                                   // 20
          return Spacebars.mustache(Spacebars.dot(view.lookup("xDisplay"), "name"));                                   // 21
        }), "\n            " ];                                                                                        // 22
      }, function() {                                                                                                  // 23
        return [ "\n              ", Blaze.View("lookup:name", function() {                                            // 24
          return Spacebars.mustache(view.lookup("name"));                                                              // 25
        }), "\n            " ];                                                                                        // 26
      }), "\n          "), "\n        " ];                                                                             // 27
    }), "\n        ", HTML.INPUT(HTML.Attrs({                                                                          // 28
      type: "text",                                                                                                    // 29
      "class": "lm-autoform-autocomplete-input"                                                                        // 30
    }, function() {                                                                                                    // 31
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 32
    })), "\n      "), "\n    " ];                                                                                      // 33
  }, function() {                                                                                                      // 34
    return [ "\n      ", HTML.INPUT(HTML.Attrs({                                                                       // 35
      type: "text",                                                                                                    // 36
      "class": "lm-autoform-autocomplete-input"                                                                        // 37
    }, function() {                                                                                                    // 38
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 39
    })), "\n    " ];                                                                                                   // 40
  }), "\n    \n    ", HTML.DIV({                                                                                       // 41
    "class": function() {                                                                                              // 42
      return [ "lm-autoform-autocomplete-predictions ", Spacebars.mustache(Spacebars.dot(view.lookup("classes"), "predictions")) ];
    }                                                                                                                  // 44
  }, "\n      ", Blaze.Each(function() {                                                                               // 45
    return Spacebars.call(view.lookup("predictions"));                                                                 // 46
  }, function() {                                                                                                      // 47
    return [ "\n        ", HTML.DIV({                                                                                  // 48
      "class": "lm-autoform-autocomplete-prediction-item"                                                              // 49
    }, "\n          ", Blaze.If(function() {                                                                           // 50
      return Spacebars.call(Spacebars.dot(view.lookup("xDisplay"), "name"));                                           // 51
    }, function() {                                                                                                    // 52
      return [ "\n            ", Blaze.View("lookup:xDisplay.name", function() {                                       // 53
        return Spacebars.mustache(Spacebars.dot(view.lookup("xDisplay"), "name"));                                     // 54
      }), "\n          " ];                                                                                            // 55
    }, function() {                                                                                                    // 56
      return [ "\n            ", Blaze.View("lookup:name", function() {                                                // 57
        return Spacebars.mustache(view.lookup("name"));                                                                // 58
      }), "\n          " ];                                                                                            // 59
    }), "\n        "), "\n      " ];                                                                                   // 60
  }), "\n    "), "\n  ");                                                                                              // 61
}));                                                                                                                   // 62
                                                                                                                       // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/lukemadera_autoform-autocomplete/autoform-autocomplete.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
@param {Object} [atts.opts]                                                                                            // 2
  @param {String} [instid] Required to use any external API calls                                                      // 3
  @param {Number} [multi =0] Set to 1 to make a multi select rather than a normal select                               // 4
  @param {Boolean} [createNew =false] True to allow creating a new value (instead of "no results" being displayed, the entered value will be displayed and will be given a value of newNamePrefix+name for uniquely identifying and then (optionally) using to create / save this new value to the database for next time)
  @param {String} [newNamePrefix ='__'] The prefix that will be used for creating a new name (if no match)             // 6
  @param {Function} getPredictions The function to call to look up predictions for the autocomplete. It is passed:     // 7
    @param {String} name The text input by the user to look up / match to                                              // 8
    @param {Object} [params]                                                                                           // 9
    @return {Object}                                                                                                   // 10
      @param {Array} predictions Array of objects with the predictions. Each object should have:                       // 11
        @param {String} value                                                                                          // 12
        @param {String} name                                                                                           // 13
  @param {Function} [onUpdateVals] A function to call every time value(s) are updated (set, added, removed). It is passed either an array of objects (if multi) or just one object.
    @param {String} optsInstid The same atts.opts.instid that was passed in (to uniquely identify)                     // 15
    @param {Object|Array} vals Array if multi is set, object otherwise of:                                             // 16
      @param {String} value                                                                                            // 17
      @param {String} name Set if multi                                                                                // 18
                                                                                                                       // 19
                                                                                                                       // 20
API is all the lmAfAutocomplete functions (see below)                                                                  // 21
                                                                                                                       // 22
                                                                                                                       // 23
@toc                                                                                                                   // 24
lmAfAutocomplete.                                                                                                      // 25
  3. setVals                                                                                                           // 26
  15. removeVals                                                                                                       // 27
  16. addVals                                                                                                          // 28
  18. removeAllVals                                                                                                    // 29
lmAfAutocompletePrivate.                                                                                               // 30
  17. onUpdateVals                                                                                                     // 31
  19. focusInput                                                                                                       // 32
  12. getTemplateInst                                                                                                  // 33
  1. init                                                                                                              // 34
  13. destroy                                                                                                          // 35
  2. initOpts                                                                                                          // 36
  4. getPredictions                                                                                                    // 37
  5. hide                                                                                                              // 38
  6. show                                                                                                              // 39
7. AutoForm.addInputType("lmautocomplete",..                                                                           // 40
Template.afAutocomplete.                                                                                               // 41
  8. created                                                                                                           // 42
  9. rendered                                                                                                          // 43
  14. destroyed                                                                                                        // 44
  10. helpers                                                                                                          // 45
  11. events                                                                                                           // 46
*/                                                                                                                     // 47
                                                                                                                       // 48
lmAfAutocomplete ={};                                                                                                  // 49
                                                                                                                       // 50
var lmAfAutocompletePrivate ={};                                                                                       // 51
                                                                                                                       // 52
/**                                                                                                                    // 53
//for external calls in, need to store reference to template instance to get the correct one so for EACH instance of this package / template, will store two values: a passed in instid (for external reference) as a key and that is an object with the internal template instance. This will allow going back and forth between the two and allow external interaction with the proper template instance.
@example                                                                                                               // 55
  lmAfAutocompletePrivate.inst ={                                                                                      // 56
    'inst1': {                                                                                                         // 57
      templateInst: templateInst1,                                                                                     // 58
      optsInstid: '',                                                                                                  // 59
      values: [{value: 'val1', name:'name1'}],                                                                         // 60
      multi: 0                                                                                                         // 61
    },                                                                                                                 // 62
    'inst2': {                                                                                                         // 63
      templateInst: templateInst2,                                                                                     // 64
      optsInstid: 'asfdlkjl3lajkf',                                                                                    // 65
      values: [{value: 'val2', name:'name2'}],                                                                         // 66
      multi: 1                                                                                                         // 67
    }                                                                                                                  // 68
  };                                                                                                                   // 69
*/                                                                                                                     // 70
lmAfAutocompletePrivate.inst ={};                                                                                      // 71
                                                                                                                       // 72
/**                                                                                                                    // 73
@toc 3.                                                                                                                // 74
@param {Array|Object} vals Array of objects (or one single object) to set, each object has:                            // 75
  @param {String} [value] If not set, will be assumed it is a NEW value to add                                         // 76
  @param {String} name The display text                                                                                // 77
@param {Object} params                                                                                                 // 78
  @param {Object} [templateInst] (for internal use) One of 'templateInst' or 'optsInstid' is required                  // 79
  @param {Object} [optsInstid] The opts.instid passed in with the template options (for external use)                  // 80
*/                                                                                                                     // 81
lmAfAutocomplete.setVals =function(vals, params) {                                                                     // 82
  if(typeof(vals) ==='object' && !(Object.prototype.toString.apply(vals) === "[object Array]")) {                      // 83
    vals =[vals];                                                                                                      // 84
  }                                                                                                                    // 85
  var templateInst =lmAfAutocompletePrivate.getTemplateInst(params);                                                   // 86
  if(templateInst) {                                                                                                   // 87
    var instid =templateInst.data.atts['data-schema-key'];                                                             // 88
                                                                                                                       // 89
    //if no multi, only set/add ONE                                                                                    // 90
    if(!lmAfAutocompletePrivate.inst[instid].multi) {                                                                  // 91
      vals =vals.slice(0, 1);                                                                                          // 92
    }                                                                                                                  // 93
                                                                                                                       // 94
    var opts =templateInst.opts.get();                                                                                 // 95
    var ii;                                                                                                            // 96
    for(ii =0; ii<vals.length; ii++) {                                                                                 // 97
      if(vals[ii].value ===undefined || !vals[ii].value) {                                                             // 98
        vals[ii].value =opts.newNamePrefix+vals[ii].name;                                                              // 99
      }                                                                                                                // 100
    }                                                                                                                  // 101
                                                                                                                       // 102
    lmAfAutocompletePrivate.onUpdateVals(instid, templateInst, vals, {});                                              // 103
  }                                                                                                                    // 104
};                                                                                                                     // 105
                                                                                                                       // 106
/**                                                                                                                    // 107
@toc 15.                                                                                                               // 108
@param {Array|Object} vals Array of objects (or one single object) to remove, each object has:                         // 109
  @param {String} value                                                                                                // 110
@param {Object} params                                                                                                 // 111
  @param {Object} [templateInst] (for internal use) One of 'templateInst' or 'optsInstid' is required                  // 112
  @param {Object} [optsInstid] The opts.instid passed in with the template options (for external use)                  // 113
  // @param {Boolean} [noOnUpdate] True to NOT run the on update (i.e. if just using this to remove all values befor ea set, do not want to call it twice)
*/                                                                                                                     // 115
lmAfAutocomplete.removeVals =function(vals, params) {                                                                  // 116
  if(typeof(vals) ==='object' && !(Object.prototype.toString.apply(vals) === "[object Array]")) {                      // 117
    vals =[vals];                                                                                                      // 118
  }                                                                                                                    // 119
  var templateInst =lmAfAutocompletePrivate.getTemplateInst(params);                                                   // 120
  if(templateInst) {                                                                                                   // 121
    var instid =templateInst.data.atts['data-schema-key'];                                                             // 122
    var curVals =lmAfAutocompletePrivate.inst[instid].values;                                                          // 123
    var ii, index1;                                                                                                    // 124
    //have to go through from the END since removing elements and do not want to mess up indices                       // 125
    for(ii =(curVals.length-1); ii>=0; ii--) {                                                                         // 126
      index1 =notoriiArray.findArrayIndex(vals, 'value', curVals[ii].value, {});                                       // 127
      if(index1 >-1) {                                                                                                 // 128
        curVals =notoriiArray.remove(curVals, ii);                                                                     // 129
      }                                                                                                                // 130
    }                                                                                                                  // 131
                                                                                                                       // 132
    // if(params.noOnUpdate ===undefined || !params.noOnUpdate) {                                                      // 133
      lmAfAutocompletePrivate.onUpdateVals(instid, templateInst, curVals, {});                                         // 134
    // }                                                                                                               // 135
  }                                                                                                                    // 136
};                                                                                                                     // 137
                                                                                                                       // 138
/**                                                                                                                    // 139
@toc 16.                                                                                                               // 140
@param {Array|Object} vals Array of objects (or one single object) to add, each object has:                            // 141
  @param {String} value                                                                                                // 142
@param {Object} params                                                                                                 // 143
  @param {Object} [templateInst] (for internal use) One of 'templateInst' or 'optsInstid' is required                  // 144
  @param {Object} [optsInstid] The opts.instid passed in with the template options (for external use)                  // 145
*/                                                                                                                     // 146
lmAfAutocomplete.addVals =function(vals, params) {                                                                     // 147
  if(typeof(vals) ==='object' && !(Object.prototype.toString.apply(vals) === "[object Array]")) {                      // 148
    vals =[vals];                                                                                                      // 149
  }                                                                                                                    // 150
  var templateInst =lmAfAutocompletePrivate.getTemplateInst(params);                                                   // 151
  if(templateInst) {                                                                                                   // 152
    var instid =templateInst.data.atts['data-schema-key'];                                                             // 153
                                                                                                                       // 154
    //if no multi, clear out first and only set/add ONE                                                                // 155
    if(!lmAfAutocompletePrivate.inst[instid].multi) {                                                                  // 156
      lmAfAutocomplete.removeAllVals(params);                                                                          // 157
      vals =vals.slice(0, 1);                                                                                          // 158
    }                                                                                                                  // 159
                                                                                                                       // 160
    var curVals =lmAfAutocompletePrivate.inst[instid].values;                                                          // 161
    var ii, index1;                                                                                                    // 162
    for(ii =0; ii<vals.length; ii++) {                                                                                 // 163
      index1 =notoriiArray.findArrayIndex(curVals, 'value', vals[ii].value, {});                                       // 164
      if(index1 <0) {                                                                                                  // 165
        curVals.push(vals[ii]);                                                                                        // 166
      }                                                                                                                // 167
    }                                                                                                                  // 168
                                                                                                                       // 169
    lmAfAutocompletePrivate.onUpdateVals(instid, templateInst, curVals, {});                                           // 170
  }                                                                                                                    // 171
};                                                                                                                     // 172
                                                                                                                       // 173
/**                                                                                                                    // 174
@toc 18.                                                                                                               // 175
@param {Object} params                                                                                                 // 176
  @param {Object} [templateInst] (for internal use) One of 'templateInst' or 'optsInstid' is required                  // 177
  @param {Object} [optsInstid] The opts.instid passed in with the template options (for external use)                  // 178
  // @param {Boolean} [noOnUpdate] True to NOT run the on update (i.e. if just using this to remove all values befor ea set, do not want to call it twice)
*/                                                                                                                     // 180
lmAfAutocomplete.removeAllVals =function(params) {                                                                     // 181
  var templateInst =lmAfAutocompletePrivate.getTemplateInst(params);                                                   // 182
  if(templateInst) {                                                                                                   // 183
    var instid =templateInst.data.atts['data-schema-key'];                                                             // 184
    var curVals =[];                                                                                                   // 185
    lmAfAutocompletePrivate.onUpdateVals(instid, templateInst, curVals, {});                                           // 186
  }                                                                                                                    // 187
};                                                                                                                     // 188
                                                                                                                       // 189
                                                                                                                       // 190
                                                                                                                       // 191
/**                                                                                                                    // 192
@toc 17.                                                                                                               // 193
*/                                                                                                                     // 194
lmAfAutocompletePrivate.onUpdateVals =function(instid, templateInst, vals, params) {                                   // 195
  //update UI too                                                                                                      // 196
  var ele =templateInst.find('input.lm-autoform-autocomplete-input');                                                  // 197
  if(lmAfAutocompletePrivate.inst[instid].multi) {                                                                     // 198
    ele.value ='';    //blank out                                                                                      // 199
  }                                                                                                                    // 200
  else if(vals.length) {                                                                                               // 201
    ele.value =vals[0].name;                                                                                           // 202
  }                                                                                                                    // 203
                                                                                                                       // 204
  lmAfAutocompletePrivate.inst[instid].values =vals;                                                                   // 205
  templateInst.values.set(vals);                                                                                       // 206
  lmAfAutocompletePrivate.hide(templateInst, {});                                                                      // 207
                                                                                                                       // 208
  if(vals.length && templateInst.data.atts.opts.instid !==undefined && templateInst.data.atts.opts.onUpdateVals !==undefined) {
    var valToSend =vals;                                                                                               // 210
    if(!lmAfAutocompletePrivate.inst[instid].multi) {                                                                  // 211
      valToSend =valToSend[0];                                                                                         // 212
    }                                                                                                                  // 213
    templateInst.data.atts.opts.onUpdateVals.call(templateInst, templateInst.data.atts.opts.instid, valToSend, {});    // 214
  }                                                                                                                    // 215
};                                                                                                                     // 216
                                                                                                                       // 217
/**                                                                                                                    // 218
@toc 19.                                                                                                               // 219
*/                                                                                                                     // 220
lmAfAutocompletePrivate.focusInput =function(templateInst, params) {                                                   // 221
  var ele =templateInst.find('input.lm-autoform-autocomplete-input');                                                  // 222
  ele.focus();                                                                                                         // 223
};                                                                                                                     // 224
                                                                                                                       // 225
/**                                                                                                                    // 226
@toc 12.                                                                                                               // 227
@param {Object} params                                                                                                 // 228
  @param {Object} [templateInst] (for internal use) One of 'templateInst' or 'optsInstid' is required                  // 229
  @param {Object} [optsInstid] The opts.instid passed in with the template options (for external use)                  // 230
*/                                                                                                                     // 231
lmAfAutocompletePrivate.getTemplateInst =function(params) {                                                            // 232
  var templateInst =false;                                                                                             // 233
  if(params.templateInst) {                                                                                            // 234
    templateInst =params.templateInst;                                                                                 // 235
  }                                                                                                                    // 236
  else if(params.instid) {                                                                                             // 237
    if(lmAfAutocompletePrivate.inst[params.instid] !==undefined) {                                                     // 238
      templateInst =lmAfAutocompletePrivate.inst[params.instid].templateInst;                                          // 239
    }                                                                                                                  // 240
  }                                                                                                                    // 241
  else if(params.optsInstid) {                                                                                         // 242
    var xx;                                                                                                            // 243
    for(xx in lmAfAutocompletePrivate.inst) {                                                                          // 244
      if(lmAfAutocompletePrivate.inst[xx].optsInstid ===params.optsInstid) {                                           // 245
        templateInst =lmAfAutocompletePrivate.inst[xx].templateInst;                                                   // 246
        break;                                                                                                         // 247
      }                                                                                                                // 248
    }                                                                                                                  // 249
  }                                                                                                                    // 250
  return templateInst;                                                                                                 // 251
}                                                                                                                      // 252
                                                                                                                       // 253
/**                                                                                                                    // 254
@toc 1.                                                                                                                // 255
*/                                                                                                                     // 256
lmAfAutocompletePrivate.init =function(templateInst, params) {                                                         // 257
  this.initOpts(templateInst, params);                                                                                 // 258
                                                                                                                       // 259
  var vals =templateInst.data.value;                                                                                   // 260
  if(vals ===undefined || !vals) {                                                                                     // 261
    vals =[];                                                                                                          // 262
  }                                                                                                                    // 263
  if(typeof(vals) ==='object' && !(Object.prototype.toString.apply(vals) === "[object Array]")) {                      // 264
    vals =[vals];                                                                                                      // 265
  }                                                                                                                    // 266
                                                                                                                       // 267
  lmAfAutocomplete.setVals(vals, {templateInst:templateInst});                                                         // 268
};                                                                                                                     // 269
                                                                                                                       // 270
/**                                                                                                                    // 271
@toc 13.                                                                                                               // 272
*/                                                                                                                     // 273
lmAfAutocompletePrivate.destroy =function(templateInst, params) {                                                      // 274
  //remove instid id key                                                                                               // 275
  var xx;                                                                                                              // 276
  for(xx in lmAfAutocompletePrivate.inst) {                                                                            // 277
    if(lmAfAutocompletePrivate.inst[xx].templateInst ===templateInst) {                                                // 278
      delete lmAfAutocompletePrivate.inst[xx];                                                                         // 279
      break;                                                                                                           // 280
    }                                                                                                                  // 281
  }                                                                                                                    // 282
};                                                                                                                     // 283
                                                                                                                       // 284
/**                                                                                                                    // 285
@toc 2.                                                                                                                // 286
*/                                                                                                                     // 287
lmAfAutocompletePrivate.initOpts =function(templateInst, params) {                                                     // 288
  var optsDefault ={                                                                                                   // 289
    newNamePrefix: '__',                                                                                               // 290
    multi: 0,                                                                                                          // 291
    createNew: false                                                                                                   // 292
  };                                                                                                                   // 293
  var xx, opts;                                                                                                        // 294
  opts =EJSON.clone(templateInst.data.atts.opts);                                                                      // 295
  if(opts ===undefined) {                                                                                              // 296
    opts =EJSON.clone(optsDefault);                                                                                    // 297
  }                                                                                                                    // 298
  else {                                                                                                               // 299
    //extend                                                                                                           // 300
    for(xx in optsDefault) {                                                                                           // 301
      if(opts[xx] ===undefined) {                                                                                      // 302
        opts[xx] =optsDefault[xx];                                                                                     // 303
      }                                                                                                                // 304
    }                                                                                                                  // 305
  }                                                                                                                    // 306
  opts.multi =parseInt(opts.multi, 10);                                                                                // 307
                                                                                                                       // 308
  if(opts.instid ===undefined) {                                                                                       // 309
    console.log('lmAfAutocomplete: opts.instid not set (it is required if you want to use any (external) api calls)');
    opts.instid =false;                                                                                                // 311
  }                                                                                                                    // 312
  var instid =templateInst.data.atts['data-schema-key'];                                                               // 313
  lmAfAutocompletePrivate.inst[instid] ={                                                                              // 314
    templateInst: templateInst,                                                                                        // 315
    optsInstid: opts.instid,                                                                                           // 316
    multi: opts.multi,                                                                                                 // 317
    values: []                                                                                                         // 318
  };                                                                                                                   // 319
                                                                                                                       // 320
  templateInst.opts.set(opts);                                                                                         // 321
};                                                                                                                     // 322
                                                                                                                       // 323
/**                                                                                                                    // 324
@toc 4.                                                                                                                // 325
@param {Object} params                                                                                                 // 326
  @param {Boolean} [noShow] True to NOT display predictions                                                            // 327
*/                                                                                                                     // 328
lmAfAutocompletePrivate.getPredictions =function(templateInst, val, params) {                                          // 329
  var predictions =[];                                                                                                 // 330
  var retPredictions =templateInst.data.atts.opts.getPredictions.call(templateInst, val, {});                          // 331
  predictions =retPredictions.predictions;                                                                             // 332
  if(!predictions.length) {                                                                                            // 333
    //if none and allow create new, show the val for allowing creation                                                 // 334
    if(templateInst.data.atts.opts.createNew) {                                                                        // 335
      predictions =[                                                                                                   // 336
        {                                                                                                              // 337
          name: val,                                                                                                   // 338
          value: '',                                                                                                   // 339
          xDisplay: {                                                                                                  // 340
            name: '*'+val                                                                                              // 341
          }                                                                                                            // 342
        }                                                                                                              // 343
      ];                                                                                                               // 344
    }                                                                                                                  // 345
  }                                                                                                                    // 346
  else {                                                                                                               // 347
    //filter out already selected values                                                                               // 348
    var instid =templateInst.data.atts['data-schema-key'];                                                             // 349
    var curVals =lmAfAutocompletePrivate.inst[instid].values;                                                          // 350
    var ii, index1;                                                                                                    // 351
    for(ii =(predictions.length-1); ii>=0; ii--) {                                                                     // 352
      index1 =notoriiArray.findArrayIndex(curVals, 'value', predictions[ii].value, {});                                // 353
      if(index1 >-1) {                                                                                                 // 354
        predictions =notoriiArray.remove(predictions, ii);                                                             // 355
      }                                                                                                                // 356
    }                                                                                                                  // 357
  }                                                                                                                    // 358
  templateInst.predictions.set(predictions);                                                                           // 359
  if(params.noShow ===undefined || !params.noShow) {                                                                   // 360
    this.show(templateInst, {});                                                                                       // 361
  }                                                                                                                    // 362
};                                                                                                                     // 363
                                                                                                                       // 364
/**                                                                                                                    // 365
@toc 5.                                                                                                                // 366
*/                                                                                                                     // 367
lmAfAutocompletePrivate.hide =function(templateInst, params) {                                                         // 368
  var classes =templateInst.classes.get();                                                                             // 369
  classes.predictions ='hidden';                                                                                       // 370
  templateInst.classes.set(classes);                                                                                   // 371
};                                                                                                                     // 372
                                                                                                                       // 373
/**                                                                                                                    // 374
@toc 6.                                                                                                                // 375
*/                                                                                                                     // 376
lmAfAutocompletePrivate.show =function(templateInst, params) {                                                         // 377
  var classes =templateInst.classes.get();                                                                             // 378
  classes.predictions ='visible';                                                                                      // 379
  templateInst.classes.set(classes);                                                                                   // 380
};                                                                                                                     // 381
                                                                                                                       // 382
/**                                                                                                                    // 383
@toc 7.                                                                                                                // 384
*/                                                                                                                     // 385
AutoForm.addInputType("lmautocomplete", {                                                                              // 386
  template: "afAutocomplete",                                                                                          // 387
  valueIn: function(val) {                                                                                             // 388
    //will convert to display value later after set / extend opts                                                      // 389
    return val;                                                                                                        // 390
  },                                                                                                                   // 391
  valueOut: function() {                                                                                               // 392
    var instid =this.attr('data-schema-key');                                                                          // 393
    var valOut =lmAfAutocompletePrivate.inst[instid].values;                                                           // 394
    if(!lmAfAutocompletePrivate.inst[instid].multi) {                                                                  // 395
      valOut =valOut[0];                                                                                               // 396
    }                                                                                                                  // 397
    return valOut;                                                                                                     // 398
  }                                                                                                                    // 399
});                                                                                                                    // 400
                                                                                                                       // 401
/**                                                                                                                    // 402
@toc 8.                                                                                                                // 403
*/                                                                                                                     // 404
Template.afAutocomplete.created =function() {                                                                          // 405
  this.opts =new ReactiveVar({});                                                                                      // 406
                                                                                                                       // 407
  this.predictions =new ReactiveVar([]);                                                                               // 408
  this.classes =new ReactiveVar({                                                                                      // 409
    predictions: 'hidden'                                                                                              // 410
  });                                                                                                                  // 411
                                                                                                                       // 412
  this.values =new ReactiveVar([]);                                                                                    // 413
};                                                                                                                     // 414
                                                                                                                       // 415
/**                                                                                                                    // 416
@toc 9.                                                                                                                // 417
*/                                                                                                                     // 418
Template.afAutocomplete.rendered =function() {                                                                         // 419
  //LAME! need timeout otherwise current value sometimes is not set yet..   //@todo - fix this                         // 420
  var templateInst =this;                                                                                              // 421
  lmAfAutocompletePrivate.init(templateInst, {});                                                                      // 422
  setTimeout(function() {                                                                                              // 423
    lmAfAutocompletePrivate.init(templateInst, {});                                                                    // 424
  }, 750);                                                                                                             // 425
};                                                                                                                     // 426
                                                                                                                       // 427
/**                                                                                                                    // 428
@toc 14.                                                                                                               // 429
*/                                                                                                                     // 430
Template.afAutocomplete.destroyed =function() {                                                                        // 431
  lmAfAutocompletePrivate.destroy(this, {});                                                                           // 432
};                                                                                                                     // 433
                                                                                                                       // 434
/**                                                                                                                    // 435
@toc 10.                                                                                                               // 436
*/                                                                                                                     // 437
Template.afAutocomplete.helpers({                                                                                      // 438
  //fix to avoid error for passed in object                                                                            // 439
  // - https://github.com/aldeed/meteor-autoform-bs-datepicker/issues/3                                                // 440
  // - https://github.com/aldeed/meteor-autoform-bs-datepicker/commit/3977aa69b61152cf8c0f731a11676b087d2ec9df         // 441
  atts: function() {                                                                                                   // 442
    var atts =EJSON.clone(this.atts);                                                                                  // 443
    delete atts.opts;                                                                                                  // 444
    return atts;                                                                                                       // 445
  },                                                                                                                   // 446
  classes: function() {                                                                                                // 447
    return Template.instance().classes.get();                                                                          // 448
  },                                                                                                                   // 449
  predictions: function() {                                                                                            // 450
    return Template.instance().predictions.get();                                                                      // 451
  },                                                                                                                   // 452
  values: function() {                                                                                                 // 453
    return Template.instance().values.get();                                                                           // 454
  },                                                                                                                   // 455
  opts: function() {                                                                                                   // 456
    return Template.instance().opts.get();                                                                             // 457
  }                                                                                                                    // 458
});                                                                                                                    // 459
                                                                                                                       // 460
/**                                                                                                                    // 461
@toc 11.                                                                                                               // 462
*/                                                                                                                     // 463
Template.afAutocomplete.events({                                                                                       // 464
  'keyup .lm-autoform-autocomplete-input': function(evt, template) {                                                   // 465
    lmAfAutocompletePrivate.getPredictions(template, evt.target.value, {});                                            // 466
  },                                                                                                                   // 467
  'click .lm-autoform-autocomplete-prediction-item': function(evt, template) {                                         // 468
    lmAfAutocomplete.addVals([this], {templateInst:template});                                                         // 469
    lmAfAutocompletePrivate.focusInput(template, {});                                                                  // 470
  },                                                                                                                   // 471
  'click .lm-autoform-autocomplete-selected-value': function(evt, template) {                                          // 472
    lmAfAutocomplete.removeVals([this], {templateInst:template});                                                      // 473
  },                                                                                                                   // 474
  'click .lm-autoform-autocomplete-input-multi-cont': function(evt, template) {                                        // 475
    lmAfAutocompletePrivate.focusInput(template, {});                                                                  // 476
  }                                                                                                                    // 477
});                                                                                                                    // 478
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['lukemadera:autoform-autocomplete'] = {}, {
  lmAfAutocomplete: lmAfAutocomplete
});

})();
