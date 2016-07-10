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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var DDP = Package['ddp-client'].DDP;
var getCaretCoordinates = Package['dandv:caret-position'].getCaretCoordinates;
var HTML = Package.htmljs.HTML;
var Spacebars = Package.spacebars.Spacebars;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, AutocompleteTest;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/mizzao_autocomplete/packages/mizzao_autocomplete.js                                             //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
(function () {                                                                                              // 1
                                                                                                            // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mizzao:autocomplete/template.inputs.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("inputAutocomplete");                                                                            // 2
Template["inputAutocomplete"] = new Template("Template.inputAutocomplete", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return [ HTML.INPUT(HTML.Attrs({                                                                                    // 5
    type: "text"                                                                                                      // 6
  }, function() {                                                                                                     // 7
    return Spacebars.attrMustache(view.lookup("attributes"));                                                         // 8
  })), "\n    ", Spacebars.include(view.lookupTemplate("autocompleteContainer")) ];                                   // 9
}));                                                                                                                  // 10
                                                                                                                      // 11
Template.__checkName("textareaAutocomplete");                                                                         // 12
Template["textareaAutocomplete"] = new Template("Template.textareaAutocomplete", (function() {                        // 13
  var view = this;                                                                                                    // 14
  return [ HTML.TEXTAREA(HTML.Attrs(function() {                                                                      // 15
    return Spacebars.attrMustache(view.lookup("attributes"));                                                         // 16
  }, {                                                                                                                // 17
    value: function() {                                                                                               // 18
      return Blaze._InOuterTemplateScope(view, function() {                                                           // 19
        return Spacebars.include(function() {                                                                         // 20
          return Spacebars.call(view.templateContentBlock);                                                           // 21
        });                                                                                                           // 22
      });                                                                                                             // 23
    }                                                                                                                 // 24
  })), "\n    ", Spacebars.include(view.lookupTemplate("autocompleteContainer")) ];                                   // 25
}));                                                                                                                  // 26
                                                                                                                      // 27
Template.__checkName("_autocompleteContainer");                                                                       // 28
Template["_autocompleteContainer"] = new Template("Template._autocompleteContainer", (function() {                    // 29
  var view = this;                                                                                                    // 30
  return Blaze.If(function() {                                                                                        // 31
    return Spacebars.call(view.lookup("isShowing"));                                                                  // 32
  }, function() {                                                                                                     // 33
    return [ "\n    ", HTML.DIV({                                                                                     // 34
      "class": "-autocomplete-container"                                                                              // 35
    }, "\n        ", Blaze.If(function() {                                                                            // 36
      return Spacebars.call(view.lookup("isLoaded"));                                                                 // 37
    }, function() {                                                                                                   // 38
      return [ "\n            ", Blaze.Unless(function() {                                                            // 39
        return Spacebars.call(view.lookup("empty"));                                                                  // 40
      }, function() {                                                                                                 // 41
        return [ "\n            ", HTML.UL({                                                                          // 42
          "class": "-autocomplete-list"                                                                               // 43
        }, "\n                ", Blaze.Each(function() {                                                              // 44
          return Spacebars.call(view.lookup("filteredList"));                                                         // 45
        }, function() {                                                                                               // 46
          return [ "\n                ", HTML.LI({                                                                    // 47
            "class": "-autocomplete-item"                                                                             // 48
          }, "\n                    ", Spacebars.With(function() {                                                    // 49
            return Spacebars.call(Spacebars.dot(view.lookup(".."), "currentTemplate"));                               // 50
          }, function() {                                                                                             // 51
            return [ "\n                        ", Spacebars.With(function() {                                        // 52
              return Spacebars.call(view.lookup(".."));                                                               // 53
            }, function() {                                                                                           // 54
              return [ "  \n                            ", Spacebars.include(view.lookupTemplate("..")), "  \n                        " ];
            }), "\n                    " ];                                                                           // 56
          }), "\n                "), "\n                " ];                                                          // 57
        }), "\n            "), "\n            " ];                                                                    // 58
      }, function() {                                                                                                 // 59
        return [ "\n                ", Spacebars.include(view.lookupTemplate("noMatchTemplate")), "\n            " ]; // 60
      }), "\n        " ];                                                                                             // 61
    }, function() {                                                                                                   // 62
      return [ "\n            ", HTML.I("loading..."), "\n        " ];                                                // 63
    }), "\n    "), "\n    " ];                                                                                        // 64
  });                                                                                                                 // 65
}));                                                                                                                  // 66
                                                                                                                      // 67
Template.__checkName("_noMatch");                                                                                     // 68
Template["_noMatch"] = new Template("Template._noMatch", (function() {                                                // 69
  var view = this;                                                                                                    // 70
  return HTML.Raw("(<i>no matches</i>)");                                                                             // 71
}));                                                                                                                  // 72
                                                                                                                      // 73
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            // 83
}).call(this);                                                                                              // 84
                                                                                                            // 85
                                                                                                            // 86
                                                                                                            // 87
                                                                                                            // 88
                                                                                                            // 89
                                                                                                            // 90
(function () {                                                                                              // 91
                                                                                                            // 92
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mizzao:autocomplete/autocomplete-client.coffee.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var AutoCompleteRecords, getField, getFindParams, getRegExp, isServerSearch, isWholeField, validateRule,                  
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };                       // 101
                                                                                                            // 102
AutoCompleteRecords = new Mongo.Collection("autocompleteRecords");                                          // 103
                                                                                                            // 104
isServerSearch = function(rule) {                                                                           // 105
  return _.isString(rule.collection);                                                                       // 106
};                                                                                                          // 107
                                                                                                            // 108
validateRule = function(rule) {                                                                             // 109
  if ((rule.subscription != null) && !Match.test(rule.collection, String)) {                                // 110
    throw new Error("Collection name must be specified as string for server-side search");                  // 111
  }                                                                                                         // 112
  if (rule.callback != null) {                                                                              // 113
    return console.warn("autocomplete no longer supports callbacks; use event listeners instead.");         // 114
  }                                                                                                         // 115
};                                                                                                          // 116
                                                                                                            // 117
isWholeField = function(rule) {                                                                             // 118
  return !rule.token;                                                                                       // 119
};                                                                                                          // 120
                                                                                                            // 121
getRegExp = function(rule) {                                                                                // 122
  if (!isWholeField(rule)) {                                                                                // 123
    return new RegExp('(^|\\b|\\s)' + rule.token + '([\\w.]*)$');                                           // 124
  } else {                                                                                                  // 125
    return new RegExp('(^)(.*)$');                                                                          // 126
  }                                                                                                         // 127
};                                                                                                          // 128
                                                                                                            // 129
getFindParams = function(rule, filter, limit) {                                                             // 130
  var options, selector, sortspec;                                                                          // 131
  selector = _.extend({}, rule.filter || {});                                                               // 132
  options = {                                                                                               // 133
    limit: limit                                                                                            // 134
  };                                                                                                        // 135
  if (!filter) {                                                                                            // 136
    return [selector, options];                                                                             // 137
  }                                                                                                         // 138
  if (rule.sort && rule.field) {                                                                            // 139
    sortspec = {};                                                                                          // 140
    sortspec[rule.field] = 1;                                                                               // 141
    options.sort = sortspec;                                                                                // 142
  }                                                                                                         // 143
  if (_.isFunction(rule.selector)) {                                                                        // 144
    _.extend(selector, rule.selector(filter));                                                              // 145
  } else {                                                                                                  // 146
    selector[rule.field] = {                                                                                // 147
      $regex: rule.matchAll ? filter : "^" + filter,                                                        // 148
      $options: typeof rule.options === 'undefined' ? 'i' : rule.options                                    // 149
    };                                                                                                      // 150
  }                                                                                                         // 151
  return [selector, options];                                                                               // 152
};                                                                                                          // 153
                                                                                                            // 154
getField = function(obj, str) {                                                                             // 155
  var key, _i, _len, _ref;                                                                                  // 156
  _ref = str.split(".");                                                                                    // 157
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 158
    key = _ref[_i];                                                                                         // 159
    obj = obj[key];                                                                                         // 160
  }                                                                                                         // 161
  return obj;                                                                                               // 162
};                                                                                                          // 163
                                                                                                            // 164
this.AutoComplete = (function() {                                                                           // 165
  AutoComplete.KEYS = [40, 38, 13, 27, 9];                                                                  // 166
                                                                                                            // 167
  function AutoComplete(settings) {                                                                         // 168
    this.onItemClick = __bind(this.onItemClick, this);                                                      // 169
    var rule, _i, _len, _ref;                                                                               // 170
    this.limit = settings.limit || 5;                                                                       // 171
    this.position = settings.position || "bottom";                                                          // 172
    this.rules = settings.rules;                                                                            // 173
    _ref = this.rules;                                                                                      // 174
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                     // 175
      rule = _ref[_i];                                                                                      // 176
      validateRule(rule);                                                                                   // 177
    }                                                                                                       // 178
    this.expressions = (function() {                                                                        // 179
      var _j, _len1, _ref1, _results;                                                                       // 180
      _ref1 = this.rules;                                                                                   // 181
      _results = [];                                                                                        // 182
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {                                                // 183
        rule = _ref1[_j];                                                                                   // 184
        _results.push(getRegExp(rule));                                                                     // 185
      }                                                                                                     // 186
      return _results;                                                                                      // 187
    }).call(this);                                                                                          // 188
    this.matched = -1;                                                                                      // 189
    this.loaded = true;                                                                                     // 190
    this.ruleDep = new Deps.Dependency;                                                                     // 191
    this.filterDep = new Deps.Dependency;                                                                   // 192
    this.loadingDep = new Deps.Dependency;                                                                  // 193
    this.sub = null;                                                                                        // 194
    this.comp = Deps.autorun((function(_this) {                                                             // 195
      return function() {                                                                                   // 196
        var filter, options, selector, subName, _ref1, _ref2;                                               // 197
        if ((_ref1 = _this.sub) != null) {                                                                  // 198
          _ref1.stop();                                                                                     // 199
        }                                                                                                   // 200
        if (!((rule = _this.matchedRule()) && (filter = _this.getFilter()) !== null)) {                     // 201
          return;                                                                                           // 202
        }                                                                                                   // 203
        if (!isServerSearch(rule)) {                                                                        // 204
          _this.setLoaded(true);                                                                            // 205
          return;                                                                                           // 206
        }                                                                                                   // 207
        _ref2 = getFindParams(rule, filter, _this.limit), selector = _ref2[0], options = _ref2[1];          // 208
        _this.setLoaded(false);                                                                             // 209
        subName = rule.subscription || "autocomplete-recordset";                                            // 210
        return _this.sub = Meteor.subscribe(subName, selector, options, rule.collection, function() {       // 211
          return _this.setLoaded(true);                                                                     // 212
        });                                                                                                 // 213
      };                                                                                                    // 214
    })(this));                                                                                              // 215
  }                                                                                                         // 216
                                                                                                            // 217
  AutoComplete.prototype.teardown = function() {                                                            // 218
    return this.comp.stop();                                                                                // 219
  };                                                                                                        // 220
                                                                                                            // 221
  AutoComplete.prototype.matchedRule = function() {                                                         // 222
    this.ruleDep.depend();                                                                                  // 223
    if (this.matched >= 0) {                                                                                // 224
      return this.rules[this.matched];                                                                      // 225
    } else {                                                                                                // 226
      return null;                                                                                          // 227
    }                                                                                                       // 228
  };                                                                                                        // 229
                                                                                                            // 230
  AutoComplete.prototype.setMatchedRule = function(i) {                                                     // 231
    this.matched = i;                                                                                       // 232
    return this.ruleDep.changed();                                                                          // 233
  };                                                                                                        // 234
                                                                                                            // 235
  AutoComplete.prototype.getFilter = function() {                                                           // 236
    this.filterDep.depend();                                                                                // 237
    return this.filter;                                                                                     // 238
  };                                                                                                        // 239
                                                                                                            // 240
  AutoComplete.prototype.setFilter = function(x) {                                                          // 241
    this.filter = x;                                                                                        // 242
    this.filterDep.changed();                                                                               // 243
    return this.filter;                                                                                     // 244
  };                                                                                                        // 245
                                                                                                            // 246
  AutoComplete.prototype.isLoaded = function() {                                                            // 247
    this.loadingDep.depend();                                                                               // 248
    return this.loaded;                                                                                     // 249
  };                                                                                                        // 250
                                                                                                            // 251
  AutoComplete.prototype.setLoaded = function(val) {                                                        // 252
    if (val === this.loaded) {                                                                              // 253
      return;                                                                                               // 254
    }                                                                                                       // 255
    this.loaded = val;                                                                                      // 256
    return this.loadingDep.changed();                                                                       // 257
  };                                                                                                        // 258
                                                                                                            // 259
  AutoComplete.prototype.onKeyUp = function() {                                                             // 260
    var breakLoop, i, matches, startpos, val, _results;                                                     // 261
    if (!this.$element) {                                                                                   // 262
      return;                                                                                               // 263
    }                                                                                                       // 264
    startpos = this.element.selectionStart;                                                                 // 265
    val = this.getText().substring(0, startpos);                                                            // 266
                                                                                                            // 267
    /*                                                                                                      // 268
      Matching on multiple expressions.                                                                     // 269
      We always go from a matched state to an unmatched one                                                 // 270
      before going to a different matched one.                                                              // 271
     */                                                                                                     // 272
    i = 0;                                                                                                  // 273
    breakLoop = false;                                                                                      // 274
    _results = [];                                                                                          // 275
    while (i < this.expressions.length) {                                                                   // 276
      matches = val.match(this.expressions[i]);                                                             // 277
      if (!matches && this.matched === i) {                                                                 // 278
        this.setMatchedRule(-1);                                                                            // 279
        breakLoop = true;                                                                                   // 280
      }                                                                                                     // 281
      if (matches && this.matched === -1) {                                                                 // 282
        this.setMatchedRule(i);                                                                             // 283
        breakLoop = true;                                                                                   // 284
      }                                                                                                     // 285
      if (matches && this.filter !== matches[2]) {                                                          // 286
        this.setFilter(matches[2]);                                                                         // 287
        breakLoop = true;                                                                                   // 288
      }                                                                                                     // 289
      if (breakLoop) {                                                                                      // 290
        break;                                                                                              // 291
      }                                                                                                     // 292
      _results.push(i++);                                                                                   // 293
    }                                                                                                       // 294
    return _results;                                                                                        // 295
  };                                                                                                        // 296
                                                                                                            // 297
  AutoComplete.prototype.onKeyDown = function(e) {                                                          // 298
    if (this.matched === -1 || (this.constructor.KEYS.indexOf(e.keyCode) < 0)) {                            // 299
      return;                                                                                               // 300
    }                                                                                                       // 301
    switch (e.keyCode) {                                                                                    // 302
      case 9:                                                                                               // 303
      case 13:                                                                                              // 304
        if (this.select()) {                                                                                // 305
          e.preventDefault();                                                                               // 306
          e.stopPropagation();                                                                              // 307
        }                                                                                                   // 308
        break;                                                                                              // 309
      case 40:                                                                                              // 310
        e.preventDefault();                                                                                 // 311
        this.next();                                                                                        // 312
        break;                                                                                              // 313
      case 38:                                                                                              // 314
        e.preventDefault();                                                                                 // 315
        this.prev();                                                                                        // 316
        break;                                                                                              // 317
      case 27:                                                                                              // 318
        this.$element.blur();                                                                               // 319
        this.hideList();                                                                                    // 320
    }                                                                                                       // 321
  };                                                                                                        // 322
                                                                                                            // 323
  AutoComplete.prototype.onFocus = function() {                                                             // 324
    return Meteor.defer((function(_this) {                                                                  // 325
      return function() {                                                                                   // 326
        return _this.onKeyUp();                                                                             // 327
      };                                                                                                    // 328
    })(this));                                                                                              // 329
  };                                                                                                        // 330
                                                                                                            // 331
  AutoComplete.prototype.onBlur = function() {                                                              // 332
    return Meteor.setTimeout((function(_this) {                                                             // 333
      return function() {                                                                                   // 334
        return _this.hideList();                                                                            // 335
      };                                                                                                    // 336
    })(this), 500);                                                                                         // 337
  };                                                                                                        // 338
                                                                                                            // 339
  AutoComplete.prototype.onItemClick = function(doc, e) {                                                   // 340
    return this.processSelection(doc, this.rules[this.matched]);                                            // 341
  };                                                                                                        // 342
                                                                                                            // 343
  AutoComplete.prototype.onItemHover = function(doc, e) {                                                   // 344
    this.tmplInst.$(".-autocomplete-item").removeClass("selected");                                         // 345
    return $(e.target).closest(".-autocomplete-item").addClass("selected");                                 // 346
  };                                                                                                        // 347
                                                                                                            // 348
  AutoComplete.prototype.filteredList = function() {                                                        // 349
    var filter, options, rule, selector, _ref;                                                              // 350
    filter = this.getFilter();                                                                              // 351
    if (this.matched === -1) {                                                                              // 352
      return null;                                                                                          // 353
    }                                                                                                       // 354
    rule = this.rules[this.matched];                                                                        // 355
    if (!(rule.token || filter)) {                                                                          // 356
      return null;                                                                                          // 357
    }                                                                                                       // 358
    _ref = getFindParams(rule, filter, this.limit), selector = _ref[0], options = _ref[1];                  // 359
    Meteor.defer((function(_this) {                                                                         // 360
      return function() {                                                                                   // 361
        return _this.ensureSelection();                                                                     // 362
      };                                                                                                    // 363
    })(this));                                                                                              // 364
    if (isServerSearch(rule)) {                                                                             // 365
      return AutoCompleteRecords.find({}, options);                                                         // 366
    }                                                                                                       // 367
    return rule.collection.find(selector, options);                                                         // 368
  };                                                                                                        // 369
                                                                                                            // 370
  AutoComplete.prototype.isShowing = function() {                                                           // 371
    var rule, showing;                                                                                      // 372
    rule = this.matchedRule();                                                                              // 373
    showing = (rule != null) && (rule.token || this.getFilter());                                           // 374
    if (showing) {                                                                                          // 375
      Meteor.defer((function(_this) {                                                                       // 376
        return function() {                                                                                 // 377
          _this.positionContainer();                                                                        // 378
          return _this.ensureSelection();                                                                   // 379
        };                                                                                                  // 380
      })(this));                                                                                            // 381
    }                                                                                                       // 382
    return showing;                                                                                         // 383
  };                                                                                                        // 384
                                                                                                            // 385
  AutoComplete.prototype.select = function() {                                                              // 386
    var doc, node;                                                                                          // 387
    node = this.tmplInst.find(".-autocomplete-item.selected");                                              // 388
    if (node == null) {                                                                                     // 389
      return false;                                                                                         // 390
    }                                                                                                       // 391
    doc = Blaze.getData(node);                                                                              // 392
    if (!doc) {                                                                                             // 393
      return false;                                                                                         // 394
    }                                                                                                       // 395
    this.processSelection(doc, this.rules[this.matched]);                                                   // 396
    return true;                                                                                            // 397
  };                                                                                                        // 398
                                                                                                            // 399
  AutoComplete.prototype.processSelection = function(doc, rule) {                                           // 400
    var replacement;                                                                                        // 401
    replacement = getField(doc, rule.field);                                                                // 402
    if (!isWholeField(rule)) {                                                                              // 403
      this.replace(replacement, rule);                                                                      // 404
      this.hideList();                                                                                      // 405
    } else {                                                                                                // 406
      this.setText(replacement);                                                                            // 407
      this.onBlur();                                                                                        // 408
    }                                                                                                       // 409
    this.$element.trigger("autocompleteselect", doc);                                                       // 410
  };                                                                                                        // 411
                                                                                                            // 412
  AutoComplete.prototype.replace = function(replacement) {                                                  // 413
    var finalFight, fullStuff, newPosition, posfix, separator, startpos, val;                               // 414
    startpos = this.element.selectionStart;                                                                 // 415
    fullStuff = this.getText();                                                                             // 416
    val = fullStuff.substring(0, startpos);                                                                 // 417
    val = val.replace(this.expressions[this.matched], "$1" + this.rules[this.matched].token + replacement);
    posfix = fullStuff.substring(startpos, fullStuff.length);                                               // 419
    separator = (posfix.match(/^\s/) ? "" : " ");                                                           // 420
    finalFight = val + separator + posfix;                                                                  // 421
    this.setText(finalFight);                                                                               // 422
    newPosition = val.length + 1;                                                                           // 423
    this.element.setSelectionRange(newPosition, newPosition);                                               // 424
  };                                                                                                        // 425
                                                                                                            // 426
  AutoComplete.prototype.hideList = function() {                                                            // 427
    this.setMatchedRule(-1);                                                                                // 428
    return this.setFilter(null);                                                                            // 429
  };                                                                                                        // 430
                                                                                                            // 431
  AutoComplete.prototype.getText = function() {                                                             // 432
    return this.$element.val() || this.$element.text();                                                     // 433
  };                                                                                                        // 434
                                                                                                            // 435
  AutoComplete.prototype.setText = function(text) {                                                         // 436
    if (this.$element.is("input,textarea")) {                                                               // 437
      return this.$element.val(text);                                                                       // 438
    } else {                                                                                                // 439
      return this.$element.html(text);                                                                      // 440
    }                                                                                                       // 441
  };                                                                                                        // 442
                                                                                                            // 443
                                                                                                            // 444
  /*                                                                                                        // 445
    Rendering functions                                                                                     // 446
   */                                                                                                       // 447
                                                                                                            // 448
  AutoComplete.prototype.positionContainer = function() {                                                   // 449
    var offset, pos, position, rule;                                                                        // 450
    position = this.$element.position();                                                                    // 451
    rule = this.matchedRule();                                                                              // 452
    offset = getCaretCoordinates(this.element, this.element.selectionStart);                                // 453
    if ((rule != null) && isWholeField(rule)) {                                                             // 454
      pos = {                                                                                               // 455
        left: position.left,                                                                                // 456
        width: this.$element.outerWidth()                                                                   // 457
      };                                                                                                    // 458
    } else {                                                                                                // 459
      pos = {                                                                                               // 460
        left: position.left + offset.left                                                                   // 461
      };                                                                                                    // 462
    }                                                                                                       // 463
    if (this.position === "top") {                                                                          // 464
      pos.bottom = this.$element.offsetParent().height() - position.top - offset.top;                       // 465
    } else {                                                                                                // 466
      pos.top = position.top + offset.top + parseInt(this.$element.css('font-size'));                       // 467
    }                                                                                                       // 468
    return this.tmplInst.$(".-autocomplete-container").css(pos);                                            // 469
  };                                                                                                        // 470
                                                                                                            // 471
  AutoComplete.prototype.ensureSelection = function() {                                                     // 472
    var selectedItem;                                                                                       // 473
    selectedItem = this.tmplInst.$(".-autocomplete-item.selected");                                         // 474
    if (!selectedItem.length) {                                                                             // 475
      return this.tmplInst.$(".-autocomplete-item:first-child").addClass("selected");                       // 476
    }                                                                                                       // 477
  };                                                                                                        // 478
                                                                                                            // 479
  AutoComplete.prototype.next = function() {                                                                // 480
    var currentItem, next;                                                                                  // 481
    currentItem = this.tmplInst.$(".-autocomplete-item.selected");                                          // 482
    if (!currentItem.length) {                                                                              // 483
      return;                                                                                               // 484
    }                                                                                                       // 485
    currentItem.removeClass("selected");                                                                    // 486
    next = currentItem.next();                                                                              // 487
    if (next.length) {                                                                                      // 488
      return next.addClass("selected");                                                                     // 489
    } else {                                                                                                // 490
      return this.tmplInst.$(".-autocomplete-item:first-child").addClass("selected");                       // 491
    }                                                                                                       // 492
  };                                                                                                        // 493
                                                                                                            // 494
  AutoComplete.prototype.prev = function() {                                                                // 495
    var currentItem, prev;                                                                                  // 496
    currentItem = this.tmplInst.$(".-autocomplete-item.selected");                                          // 497
    if (!currentItem.length) {                                                                              // 498
      return;                                                                                               // 499
    }                                                                                                       // 500
    currentItem.removeClass("selected");                                                                    // 501
    prev = currentItem.prev();                                                                              // 502
    if (prev.length) {                                                                                      // 503
      return prev.addClass("selected");                                                                     // 504
    } else {                                                                                                // 505
      return this.tmplInst.$(".-autocomplete-item:last-child").addClass("selected");                        // 506
    }                                                                                                       // 507
  };                                                                                                        // 508
                                                                                                            // 509
  AutoComplete.prototype.currentTemplate = function() {                                                     // 510
    return this.rules[this.matched].template;                                                               // 511
  };                                                                                                        // 512
                                                                                                            // 513
  return AutoComplete;                                                                                      // 514
                                                                                                            // 515
})();                                                                                                       // 516
                                                                                                            // 517
AutocompleteTest = {                                                                                        // 518
  records: AutoCompleteRecords,                                                                             // 519
  getRegExp: getRegExp,                                                                                     // 520
  getFindParams: getFindParams                                                                              // 521
};                                                                                                          // 522
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            // 524
}).call(this);                                                                                              // 525
                                                                                                            // 526
                                                                                                            // 527
                                                                                                            // 528
                                                                                                            // 529
                                                                                                            // 530
                                                                                                            // 531
(function () {                                                                                              // 532
                                                                                                            // 533
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mizzao:autocomplete/templates.coffee.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var acEvents, attributes, autocompleteHelpers;                                                              // 541
                                                                                                            // 542
acEvents = {                                                                                                // 543
  "keydown": function(e, t) {                                                                               // 544
    return t.ac.onKeyDown(e);                                                                               // 545
  },                                                                                                        // 546
  "keyup": function(e, t) {                                                                                 // 547
    return t.ac.onKeyUp(e);                                                                                 // 548
  },                                                                                                        // 549
  "focus": function(e, t) {                                                                                 // 550
    return t.ac.onFocus(e);                                                                                 // 551
  },                                                                                                        // 552
  "blur": function(e, t) {                                                                                  // 553
    return t.ac.onBlur(e);                                                                                  // 554
  }                                                                                                         // 555
};                                                                                                          // 556
                                                                                                            // 557
Template.inputAutocomplete.events(acEvents);                                                                // 558
                                                                                                            // 559
Template.textareaAutocomplete.events(acEvents);                                                             // 560
                                                                                                            // 561
attributes = function() {                                                                                   // 562
  return _.omit(this, 'settings');                                                                          // 563
};                                                                                                          // 564
                                                                                                            // 565
autocompleteHelpers = {                                                                                     // 566
  attributes: attributes,                                                                                   // 567
  autocompleteContainer: new Template('AutocompleteContainer', function() {                                 // 568
    var ac;                                                                                                 // 569
    ac = new AutoComplete(Blaze.getData().settings);                                                        // 570
    this.parentView.templateInstance().ac = ac;                                                             // 571
    this.onViewReady(function() {                                                                           // 572
      ac.element = this.parentView.firstNode();                                                             // 573
      return ac.$element = $(ac.element);                                                                   // 574
    });                                                                                                     // 575
    return Blaze.With(ac, function() {                                                                      // 576
      return Template._autocompleteContainer;                                                               // 577
    });                                                                                                     // 578
  })                                                                                                        // 579
};                                                                                                          // 580
                                                                                                            // 581
Template.inputAutocomplete.helpers(autocompleteHelpers);                                                    // 582
                                                                                                            // 583
Template.textareaAutocomplete.helpers(autocompleteHelpers);                                                 // 584
                                                                                                            // 585
Template._autocompleteContainer.rendered = function() {                                                     // 586
  return this.data.tmplInst = this;                                                                         // 587
};                                                                                                          // 588
                                                                                                            // 589
Template._autocompleteContainer.destroyed = function() {                                                    // 590
  return this.data.teardown();                                                                              // 591
};                                                                                                          // 592
                                                                                                            // 593
                                                                                                            // 594
/*                                                                                                          // 595
  List rendering helpers                                                                                    // 596
 */                                                                                                         // 597
                                                                                                            // 598
Template._autocompleteContainer.events({                                                                    // 599
  "click .-autocomplete-item": function(e, t) {                                                             // 600
    return t.data.onItemClick(this, e);                                                                     // 601
  },                                                                                                        // 602
  "mouseenter .-autocomplete-item": function(e, t) {                                                        // 603
    return t.data.onItemHover(this, e);                                                                     // 604
  }                                                                                                         // 605
});                                                                                                         // 606
                                                                                                            // 607
Template._autocompleteContainer.helpers({                                                                   // 608
  empty: function() {                                                                                       // 609
    return this.filteredList().count() === 0;                                                               // 610
  },                                                                                                        // 611
  noMatchTemplate: function() {                                                                             // 612
    return this.matchedRule().noMatchTemplate || Template._noMatch;                                         // 613
  }                                                                                                         // 614
});                                                                                                         // 615
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            // 617
}).call(this);                                                                                              // 618
                                                                                                            // 619
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mizzao:autocomplete'] = {}, {
  AutocompleteTest: AutocompleteTest
});

})();
