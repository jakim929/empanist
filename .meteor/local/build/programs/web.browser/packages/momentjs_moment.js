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

/* Package-scope variables */
var moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/moment.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//! moment.js                                                                                                          // 1
//! version : 2.13.0                                                                                                   // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                         // 3
//! license : MIT                                                                                                      // 4
//! momentjs.com                                                                                                       // 5
                                                                                                                       // 6
;(function (global, factory) {                                                                                         // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                        // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                     // 9
    global.moment = factory()                                                                                          // 10
}(this, function () { 'use strict';                                                                                    // 11
                                                                                                                       // 12
    var hookCallback;                                                                                                  // 13
                                                                                                                       // 14
    function utils_hooks__hooks () {                                                                                   // 15
        return hookCallback.apply(null, arguments);                                                                    // 16
    }                                                                                                                  // 17
                                                                                                                       // 18
    // This is done to register the method called with moment()                                                        // 19
    // without creating circular dependencies.                                                                         // 20
    function setHookCallback (callback) {                                                                              // 21
        hookCallback = callback;                                                                                       // 22
    }                                                                                                                  // 23
                                                                                                                       // 24
    function isArray(input) {                                                                                          // 25
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';                   // 26
    }                                                                                                                  // 27
                                                                                                                       // 28
    function isDate(input) {                                                                                           // 29
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';                     // 30
    }                                                                                                                  // 31
                                                                                                                       // 32
    function map(arr, fn) {                                                                                            // 33
        var res = [], i;                                                                                               // 34
        for (i = 0; i < arr.length; ++i) {                                                                             // 35
            res.push(fn(arr[i], i));                                                                                   // 36
        }                                                                                                              // 37
        return res;                                                                                                    // 38
    }                                                                                                                  // 39
                                                                                                                       // 40
    function hasOwnProp(a, b) {                                                                                        // 41
        return Object.prototype.hasOwnProperty.call(a, b);                                                             // 42
    }                                                                                                                  // 43
                                                                                                                       // 44
    function extend(a, b) {                                                                                            // 45
        for (var i in b) {                                                                                             // 46
            if (hasOwnProp(b, i)) {                                                                                    // 47
                a[i] = b[i];                                                                                           // 48
            }                                                                                                          // 49
        }                                                                                                              // 50
                                                                                                                       // 51
        if (hasOwnProp(b, 'toString')) {                                                                               // 52
            a.toString = b.toString;                                                                                   // 53
        }                                                                                                              // 54
                                                                                                                       // 55
        if (hasOwnProp(b, 'valueOf')) {                                                                                // 56
            a.valueOf = b.valueOf;                                                                                     // 57
        }                                                                                                              // 58
                                                                                                                       // 59
        return a;                                                                                                      // 60
    }                                                                                                                  // 61
                                                                                                                       // 62
    function create_utc__createUTC (input, format, locale, strict) {                                                   // 63
        return createLocalOrUTC(input, format, locale, strict, true).utc();                                            // 64
    }                                                                                                                  // 65
                                                                                                                       // 66
    function defaultParsingFlags() {                                                                                   // 67
        // We need to deep clone this object.                                                                          // 68
        return {                                                                                                       // 69
            empty           : false,                                                                                   // 70
            unusedTokens    : [],                                                                                      // 71
            unusedInput     : [],                                                                                      // 72
            overflow        : -2,                                                                                      // 73
            charsLeftOver   : 0,                                                                                       // 74
            nullInput       : false,                                                                                   // 75
            invalidMonth    : null,                                                                                    // 76
            invalidFormat   : false,                                                                                   // 77
            userInvalidated : false,                                                                                   // 78
            iso             : false,                                                                                   // 79
            parsedDateParts : [],                                                                                      // 80
            meridiem        : null                                                                                     // 81
        };                                                                                                             // 82
    }                                                                                                                  // 83
                                                                                                                       // 84
    function getParsingFlags(m) {                                                                                      // 85
        if (m._pf == null) {                                                                                           // 86
            m._pf = defaultParsingFlags();                                                                             // 87
        }                                                                                                              // 88
        return m._pf;                                                                                                  // 89
    }                                                                                                                  // 90
                                                                                                                       // 91
    var some;                                                                                                          // 92
    if (Array.prototype.some) {                                                                                        // 93
        some = Array.prototype.some;                                                                                   // 94
    } else {                                                                                                           // 95
        some = function (fun) {                                                                                        // 96
            var t = Object(this);                                                                                      // 97
            var len = t.length >>> 0;                                                                                  // 98
                                                                                                                       // 99
            for (var i = 0; i < len; i++) {                                                                            // 100
                if (i in t && fun.call(this, t[i], i, t)) {                                                            // 101
                    return true;                                                                                       // 102
                }                                                                                                      // 103
            }                                                                                                          // 104
                                                                                                                       // 105
            return false;                                                                                              // 106
        };                                                                                                             // 107
    }                                                                                                                  // 108
                                                                                                                       // 109
    function valid__isValid(m) {                                                                                       // 110
        if (m._isValid == null) {                                                                                      // 111
            var flags = getParsingFlags(m);                                                                            // 112
            var parsedParts = some.call(flags.parsedDateParts, function (i) {                                          // 113
                return i != null;                                                                                      // 114
            });                                                                                                        // 115
            m._isValid = !isNaN(m._d.getTime()) &&                                                                     // 116
                flags.overflow < 0 &&                                                                                  // 117
                !flags.empty &&                                                                                        // 118
                !flags.invalidMonth &&                                                                                 // 119
                !flags.invalidWeekday &&                                                                               // 120
                !flags.nullInput &&                                                                                    // 121
                !flags.invalidFormat &&                                                                                // 122
                !flags.userInvalidated &&                                                                              // 123
                (!flags.meridiem || (flags.meridiem && parsedParts));                                                  // 124
                                                                                                                       // 125
            if (m._strict) {                                                                                           // 126
                m._isValid = m._isValid &&                                                                             // 127
                    flags.charsLeftOver === 0 &&                                                                       // 128
                    flags.unusedTokens.length === 0 &&                                                                 // 129
                    flags.bigHour === undefined;                                                                       // 130
            }                                                                                                          // 131
        }                                                                                                              // 132
        return m._isValid;                                                                                             // 133
    }                                                                                                                  // 134
                                                                                                                       // 135
    function valid__createInvalid (flags) {                                                                            // 136
        var m = create_utc__createUTC(NaN);                                                                            // 137
        if (flags != null) {                                                                                           // 138
            extend(getParsingFlags(m), flags);                                                                         // 139
        }                                                                                                              // 140
        else {                                                                                                         // 141
            getParsingFlags(m).userInvalidated = true;                                                                 // 142
        }                                                                                                              // 143
                                                                                                                       // 144
        return m;                                                                                                      // 145
    }                                                                                                                  // 146
                                                                                                                       // 147
    function isUndefined(input) {                                                                                      // 148
        return input === void 0;                                                                                       // 149
    }                                                                                                                  // 150
                                                                                                                       // 151
    // Plugins that add properties should also add the key here (null value),                                          // 152
    // so we can properly clone ourselves.                                                                             // 153
    var momentProperties = utils_hooks__hooks.momentProperties = [];                                                   // 154
                                                                                                                       // 155
    function copyConfig(to, from) {                                                                                    // 156
        var i, prop, val;                                                                                              // 157
                                                                                                                       // 158
        if (!isUndefined(from._isAMomentObject)) {                                                                     // 159
            to._isAMomentObject = from._isAMomentObject;                                                               // 160
        }                                                                                                              // 161
        if (!isUndefined(from._i)) {                                                                                   // 162
            to._i = from._i;                                                                                           // 163
        }                                                                                                              // 164
        if (!isUndefined(from._f)) {                                                                                   // 165
            to._f = from._f;                                                                                           // 166
        }                                                                                                              // 167
        if (!isUndefined(from._l)) {                                                                                   // 168
            to._l = from._l;                                                                                           // 169
        }                                                                                                              // 170
        if (!isUndefined(from._strict)) {                                                                              // 171
            to._strict = from._strict;                                                                                 // 172
        }                                                                                                              // 173
        if (!isUndefined(from._tzm)) {                                                                                 // 174
            to._tzm = from._tzm;                                                                                       // 175
        }                                                                                                              // 176
        if (!isUndefined(from._isUTC)) {                                                                               // 177
            to._isUTC = from._isUTC;                                                                                   // 178
        }                                                                                                              // 179
        if (!isUndefined(from._offset)) {                                                                              // 180
            to._offset = from._offset;                                                                                 // 181
        }                                                                                                              // 182
        if (!isUndefined(from._pf)) {                                                                                  // 183
            to._pf = getParsingFlags(from);                                                                            // 184
        }                                                                                                              // 185
        if (!isUndefined(from._locale)) {                                                                              // 186
            to._locale = from._locale;                                                                                 // 187
        }                                                                                                              // 188
                                                                                                                       // 189
        if (momentProperties.length > 0) {                                                                             // 190
            for (i in momentProperties) {                                                                              // 191
                prop = momentProperties[i];                                                                            // 192
                val = from[prop];                                                                                      // 193
                if (!isUndefined(val)) {                                                                               // 194
                    to[prop] = val;                                                                                    // 195
                }                                                                                                      // 196
            }                                                                                                          // 197
        }                                                                                                              // 198
                                                                                                                       // 199
        return to;                                                                                                     // 200
    }                                                                                                                  // 201
                                                                                                                       // 202
    var updateInProgress = false;                                                                                      // 203
                                                                                                                       // 204
    // Moment prototype object                                                                                         // 205
    function Moment(config) {                                                                                          // 206
        copyConfig(this, config);                                                                                      // 207
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);                                             // 208
        // Prevent infinite loop in case updateOffset creates new moment                                               // 209
        // objects.                                                                                                    // 210
        if (updateInProgress === false) {                                                                              // 211
            updateInProgress = true;                                                                                   // 212
            utils_hooks__hooks.updateOffset(this);                                                                     // 213
            updateInProgress = false;                                                                                  // 214
        }                                                                                                              // 215
    }                                                                                                                  // 216
                                                                                                                       // 217
    function isMoment (obj) {                                                                                          // 218
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);                                 // 219
    }                                                                                                                  // 220
                                                                                                                       // 221
    function absFloor (number) {                                                                                       // 222
        if (number < 0) {                                                                                              // 223
            return Math.ceil(number);                                                                                  // 224
        } else {                                                                                                       // 225
            return Math.floor(number);                                                                                 // 226
        }                                                                                                              // 227
    }                                                                                                                  // 228
                                                                                                                       // 229
    function toInt(argumentForCoercion) {                                                                              // 230
        var coercedNumber = +argumentForCoercion,                                                                      // 231
            value = 0;                                                                                                 // 232
                                                                                                                       // 233
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                          // 234
            value = absFloor(coercedNumber);                                                                           // 235
        }                                                                                                              // 236
                                                                                                                       // 237
        return value;                                                                                                  // 238
    }                                                                                                                  // 239
                                                                                                                       // 240
    // compare two arrays, return the number of differences                                                            // 241
    function compareArrays(array1, array2, dontConvert) {                                                              // 242
        var len = Math.min(array1.length, array2.length),                                                              // 243
            lengthDiff = Math.abs(array1.length - array2.length),                                                      // 244
            diffs = 0,                                                                                                 // 245
            i;                                                                                                         // 246
        for (i = 0; i < len; i++) {                                                                                    // 247
            if ((dontConvert && array1[i] !== array2[i]) ||                                                            // 248
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                             // 249
                diffs++;                                                                                               // 250
            }                                                                                                          // 251
        }                                                                                                              // 252
        return diffs + lengthDiff;                                                                                     // 253
    }                                                                                                                  // 254
                                                                                                                       // 255
    function warn(msg) {                                                                                               // 256
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&                                                // 257
                (typeof console !==  'undefined') && console.warn) {                                                   // 258
            console.warn('Deprecation warning: ' + msg);                                                               // 259
        }                                                                                                              // 260
    }                                                                                                                  // 261
                                                                                                                       // 262
    function deprecate(msg, fn) {                                                                                      // 263
        var firstTime = true;                                                                                          // 264
                                                                                                                       // 265
        return extend(function () {                                                                                    // 266
            if (utils_hooks__hooks.deprecationHandler != null) {                                                       // 267
                utils_hooks__hooks.deprecationHandler(null, msg);                                                      // 268
            }                                                                                                          // 269
            if (firstTime) {                                                                                           // 270
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;                                                                                     // 272
            }                                                                                                          // 273
            return fn.apply(this, arguments);                                                                          // 274
        }, fn);                                                                                                        // 275
    }                                                                                                                  // 276
                                                                                                                       // 277
    var deprecations = {};                                                                                             // 278
                                                                                                                       // 279
    function deprecateSimple(name, msg) {                                                                              // 280
        if (utils_hooks__hooks.deprecationHandler != null) {                                                           // 281
            utils_hooks__hooks.deprecationHandler(name, msg);                                                          // 282
        }                                                                                                              // 283
        if (!deprecations[name]) {                                                                                     // 284
            warn(msg);                                                                                                 // 285
            deprecations[name] = true;                                                                                 // 286
        }                                                                                                              // 287
    }                                                                                                                  // 288
                                                                                                                       // 289
    utils_hooks__hooks.suppressDeprecationWarnings = false;                                                            // 290
    utils_hooks__hooks.deprecationHandler = null;                                                                      // 291
                                                                                                                       // 292
    function isFunction(input) {                                                                                       // 293
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';             // 294
    }                                                                                                                  // 295
                                                                                                                       // 296
    function isObject(input) {                                                                                         // 297
        return Object.prototype.toString.call(input) === '[object Object]';                                            // 298
    }                                                                                                                  // 299
                                                                                                                       // 300
    function locale_set__set (config) {                                                                                // 301
        var prop, i;                                                                                                   // 302
        for (i in config) {                                                                                            // 303
            prop = config[i];                                                                                          // 304
            if (isFunction(prop)) {                                                                                    // 305
                this[i] = prop;                                                                                        // 306
            } else {                                                                                                   // 307
                this['_' + i] = prop;                                                                                  // 308
            }                                                                                                          // 309
        }                                                                                                              // 310
        this._config = config;                                                                                         // 311
        // Lenient ordinal parsing accepts just a number in addition to                                                // 312
        // number + (possibly) stuff coming from _ordinalParseLenient.                                                 // 313
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);                  // 314
    }                                                                                                                  // 315
                                                                                                                       // 316
    function mergeConfigs(parentConfig, childConfig) {                                                                 // 317
        var res = extend({}, parentConfig), prop;                                                                      // 318
        for (prop in childConfig) {                                                                                    // 319
            if (hasOwnProp(childConfig, prop)) {                                                                       // 320
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {                                     // 321
                    res[prop] = {};                                                                                    // 322
                    extend(res[prop], parentConfig[prop]);                                                             // 323
                    extend(res[prop], childConfig[prop]);                                                              // 324
                } else if (childConfig[prop] != null) {                                                                // 325
                    res[prop] = childConfig[prop];                                                                     // 326
                } else {                                                                                               // 327
                    delete res[prop];                                                                                  // 328
                }                                                                                                      // 329
            }                                                                                                          // 330
        }                                                                                                              // 331
        return res;                                                                                                    // 332
    }                                                                                                                  // 333
                                                                                                                       // 334
    function Locale(config) {                                                                                          // 335
        if (config != null) {                                                                                          // 336
            this.set(config);                                                                                          // 337
        }                                                                                                              // 338
    }                                                                                                                  // 339
                                                                                                                       // 340
    var keys;                                                                                                          // 341
                                                                                                                       // 342
    if (Object.keys) {                                                                                                 // 343
        keys = Object.keys;                                                                                            // 344
    } else {                                                                                                           // 345
        keys = function (obj) {                                                                                        // 346
            var i, res = [];                                                                                           // 347
            for (i in obj) {                                                                                           // 348
                if (hasOwnProp(obj, i)) {                                                                              // 349
                    res.push(i);                                                                                       // 350
                }                                                                                                      // 351
            }                                                                                                          // 352
            return res;                                                                                                // 353
        };                                                                                                             // 354
    }                                                                                                                  // 355
                                                                                                                       // 356
    // internal storage for locale config files                                                                        // 357
    var locales = {};                                                                                                  // 358
    var globalLocale;                                                                                                  // 359
                                                                                                                       // 360
    function normalizeLocale(key) {                                                                                    // 361
        return key ? key.toLowerCase().replace('_', '-') : key;                                                        // 362
    }                                                                                                                  // 363
                                                                                                                       // 364
    // pick the locale from the array                                                                                  // 365
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                       // 366
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {                                                                                     // 368
        var i = 0, j, next, locale, split;                                                                             // 369
                                                                                                                       // 370
        while (i < names.length) {                                                                                     // 371
            split = normalizeLocale(names[i]).split('-');                                                              // 372
            j = split.length;                                                                                          // 373
            next = normalizeLocale(names[i + 1]);                                                                      // 374
            next = next ? next.split('-') : null;                                                                      // 375
            while (j > 0) {                                                                                            // 376
                locale = loadLocale(split.slice(0, j).join('-'));                                                      // 377
                if (locale) {                                                                                          // 378
                    return locale;                                                                                     // 379
                }                                                                                                      // 380
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                           // 381
                    //the next array item is better than a shallower substring of this one                             // 382
                    break;                                                                                             // 383
                }                                                                                                      // 384
                j--;                                                                                                   // 385
            }                                                                                                          // 386
            i++;                                                                                                       // 387
        }                                                                                                              // 388
        return null;                                                                                                   // 389
    }                                                                                                                  // 390
                                                                                                                       // 391
    function loadLocale(name) {                                                                                        // 392
        var oldLocale = null;                                                                                          // 393
        // TODO: Find a better way to register and load all the locales in Node                                        // 394
        if (!locales[name] && (typeof module !== 'undefined') &&                                                       // 395
                module && module.exports) {                                                                            // 396
            try {                                                                                                      // 397
                oldLocale = globalLocale._abbr;                                                                        // 398
                require('./locale/' + name);                                                                           // 399
                // because defineLocale currently also sets the global locale, we                                      // 400
                // want to undo that for lazy loaded locales                                                           // 401
                locale_locales__getSetGlobalLocale(oldLocale);                                                         // 402
            } catch (e) { }                                                                                            // 403
        }                                                                                                              // 404
        return locales[name];                                                                                          // 405
    }                                                                                                                  // 406
                                                                                                                       // 407
    // This function will load locale and then set the global locale.  If                                              // 408
    // no arguments are passed in, it will simply return the current global                                            // 409
    // locale key.                                                                                                     // 410
    function locale_locales__getSetGlobalLocale (key, values) {                                                        // 411
        var data;                                                                                                      // 412
        if (key) {                                                                                                     // 413
            if (isUndefined(values)) {                                                                                 // 414
                data = locale_locales__getLocale(key);                                                                 // 415
            }                                                                                                          // 416
            else {                                                                                                     // 417
                data = defineLocale(key, values);                                                                      // 418
            }                                                                                                          // 419
                                                                                                                       // 420
            if (data) {                                                                                                // 421
                // moment.duration._locale = moment._locale = data;                                                    // 422
                globalLocale = data;                                                                                   // 423
            }                                                                                                          // 424
        }                                                                                                              // 425
                                                                                                                       // 426
        return globalLocale._abbr;                                                                                     // 427
    }                                                                                                                  // 428
                                                                                                                       // 429
    function defineLocale (name, config) {                                                                             // 430
        if (config !== null) {                                                                                         // 431
            config.abbr = name;                                                                                        // 432
            if (locales[name] != null) {                                                                               // 433
                deprecateSimple('defineLocaleOverride',                                                                // 434
                        'use moment.updateLocale(localeName, config) to change ' +                                     // 435
                        'an existing locale. moment.defineLocale(localeName, ' +                                       // 436
                        'config) should only be used for creating a new locale');                                      // 437
                config = mergeConfigs(locales[name]._config, config);                                                  // 438
            } else if (config.parentLocale != null) {                                                                  // 439
                if (locales[config.parentLocale] != null) {                                                            // 440
                    config = mergeConfigs(locales[config.parentLocale]._config, config);                               // 441
                } else {                                                                                               // 442
                    // treat as if there is no base config                                                             // 443
                    deprecateSimple('parentLocaleUndefined',                                                           // 444
                            'specified parentLocale is not defined yet');                                              // 445
                }                                                                                                      // 446
            }                                                                                                          // 447
            locales[name] = new Locale(config);                                                                        // 448
                                                                                                                       // 449
            // backwards compat for now: also set the locale                                                           // 450
            locale_locales__getSetGlobalLocale(name);                                                                  // 451
                                                                                                                       // 452
            return locales[name];                                                                                      // 453
        } else {                                                                                                       // 454
            // useful for testing                                                                                      // 455
            delete locales[name];                                                                                      // 456
            return null;                                                                                               // 457
        }                                                                                                              // 458
    }                                                                                                                  // 459
                                                                                                                       // 460
    function updateLocale(name, config) {                                                                              // 461
        if (config != null) {                                                                                          // 462
            var locale;                                                                                                // 463
            if (locales[name] != null) {                                                                               // 464
                config = mergeConfigs(locales[name]._config, config);                                                  // 465
            }                                                                                                          // 466
            locale = new Locale(config);                                                                               // 467
            locale.parentLocale = locales[name];                                                                       // 468
            locales[name] = locale;                                                                                    // 469
                                                                                                                       // 470
            // backwards compat for now: also set the locale                                                           // 471
            locale_locales__getSetGlobalLocale(name);                                                                  // 472
        } else {                                                                                                       // 473
            // pass null for config to unupdate, useful for tests                                                      // 474
            if (locales[name] != null) {                                                                               // 475
                if (locales[name].parentLocale != null) {                                                              // 476
                    locales[name] = locales[name].parentLocale;                                                        // 477
                } else if (locales[name] != null) {                                                                    // 478
                    delete locales[name];                                                                              // 479
                }                                                                                                      // 480
            }                                                                                                          // 481
        }                                                                                                              // 482
        return locales[name];                                                                                          // 483
    }                                                                                                                  // 484
                                                                                                                       // 485
    // returns locale data                                                                                             // 486
    function locale_locales__getLocale (key) {                                                                         // 487
        var locale;                                                                                                    // 488
                                                                                                                       // 489
        if (key && key._locale && key._locale._abbr) {                                                                 // 490
            key = key._locale._abbr;                                                                                   // 491
        }                                                                                                              // 492
                                                                                                                       // 493
        if (!key) {                                                                                                    // 494
            return globalLocale;                                                                                       // 495
        }                                                                                                              // 496
                                                                                                                       // 497
        if (!isArray(key)) {                                                                                           // 498
            //short-circuit everything else                                                                            // 499
            locale = loadLocale(key);                                                                                  // 500
            if (locale) {                                                                                              // 501
                return locale;                                                                                         // 502
            }                                                                                                          // 503
            key = [key];                                                                                               // 504
        }                                                                                                              // 505
                                                                                                                       // 506
        return chooseLocale(key);                                                                                      // 507
    }                                                                                                                  // 508
                                                                                                                       // 509
    function locale_locales__listLocales() {                                                                           // 510
        return keys(locales);                                                                                          // 511
    }                                                                                                                  // 512
                                                                                                                       // 513
    var aliases = {};                                                                                                  // 514
                                                                                                                       // 515
    function addUnitAlias (unit, shorthand) {                                                                          // 516
        var lowerCase = unit.toLowerCase();                                                                            // 517
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                     // 518
    }                                                                                                                  // 519
                                                                                                                       // 520
    function normalizeUnits(units) {                                                                                   // 521
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                 // 522
    }                                                                                                                  // 523
                                                                                                                       // 524
    function normalizeObjectUnits(inputObject) {                                                                       // 525
        var normalizedInput = {},                                                                                      // 526
            normalizedProp,                                                                                            // 527
            prop;                                                                                                      // 528
                                                                                                                       // 529
        for (prop in inputObject) {                                                                                    // 530
            if (hasOwnProp(inputObject, prop)) {                                                                       // 531
                normalizedProp = normalizeUnits(prop);                                                                 // 532
                if (normalizedProp) {                                                                                  // 533
                    normalizedInput[normalizedProp] = inputObject[prop];                                               // 534
                }                                                                                                      // 535
            }                                                                                                          // 536
        }                                                                                                              // 537
                                                                                                                       // 538
        return normalizedInput;                                                                                        // 539
    }                                                                                                                  // 540
                                                                                                                       // 541
    function makeGetSet (unit, keepTime) {                                                                             // 542
        return function (value) {                                                                                      // 543
            if (value != null) {                                                                                       // 544
                get_set__set(this, unit, value);                                                                       // 545
                utils_hooks__hooks.updateOffset(this, keepTime);                                                       // 546
                return this;                                                                                           // 547
            } else {                                                                                                   // 548
                return get_set__get(this, unit);                                                                       // 549
            }                                                                                                          // 550
        };                                                                                                             // 551
    }                                                                                                                  // 552
                                                                                                                       // 553
    function get_set__get (mom, unit) {                                                                                // 554
        return mom.isValid() ?                                                                                         // 555
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;                                                  // 556
    }                                                                                                                  // 557
                                                                                                                       // 558
    function get_set__set (mom, unit, value) {                                                                         // 559
        if (mom.isValid()) {                                                                                           // 560
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                   // 561
        }                                                                                                              // 562
    }                                                                                                                  // 563
                                                                                                                       // 564
    // MOMENTS                                                                                                         // 565
                                                                                                                       // 566
    function getSet (units, value) {                                                                                   // 567
        var unit;                                                                                                      // 568
        if (typeof units === 'object') {                                                                               // 569
            for (unit in units) {                                                                                      // 570
                this.set(unit, units[unit]);                                                                           // 571
            }                                                                                                          // 572
        } else {                                                                                                       // 573
            units = normalizeUnits(units);                                                                             // 574
            if (isFunction(this[units])) {                                                                             // 575
                return this[units](value);                                                                             // 576
            }                                                                                                          // 577
        }                                                                                                              // 578
        return this;                                                                                                   // 579
    }                                                                                                                  // 580
                                                                                                                       // 581
    function zeroFill(number, targetLength, forceSign) {                                                               // 582
        var absNumber = '' + Math.abs(number),                                                                         // 583
            zerosToFill = targetLength - absNumber.length,                                                             // 584
            sign = number >= 0;                                                                                        // 585
        return (sign ? (forceSign ? '+' : '') : '-') +                                                                 // 586
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;                                   // 587
    }                                                                                                                  // 588
                                                                                                                       // 589
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
                                                                                                                       // 591
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                          // 592
                                                                                                                       // 593
    var formatFunctions = {};                                                                                          // 594
                                                                                                                       // 595
    var formatTokenFunctions = {};                                                                                     // 596
                                                                                                                       // 597
    // token:    'M'                                                                                                   // 598
    // padded:   ['MM', 2]                                                                                             // 599
    // ordinal:  'Mo'                                                                                                  // 600
    // callback: function () { this.month() + 1 }                                                                      // 601
    function addFormatToken (token, padded, ordinal, callback) {                                                       // 602
        var func = callback;                                                                                           // 603
        if (typeof callback === 'string') {                                                                            // 604
            func = function () {                                                                                       // 605
                return this[callback]();                                                                               // 606
            };                                                                                                         // 607
        }                                                                                                              // 608
        if (token) {                                                                                                   // 609
            formatTokenFunctions[token] = func;                                                                        // 610
        }                                                                                                              // 611
        if (padded) {                                                                                                  // 612
            formatTokenFunctions[padded[0]] = function () {                                                            // 613
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                    // 614
            };                                                                                                         // 615
        }                                                                                                              // 616
        if (ordinal) {                                                                                                 // 617
            formatTokenFunctions[ordinal] = function () {                                                              // 618
                return this.localeData().ordinal(func.apply(this, arguments), token);                                  // 619
            };                                                                                                         // 620
        }                                                                                                              // 621
    }                                                                                                                  // 622
                                                                                                                       // 623
    function removeFormattingTokens(input) {                                                                           // 624
        if (input.match(/\[[\s\S]/)) {                                                                                 // 625
            return input.replace(/^\[|\]$/g, '');                                                                      // 626
        }                                                                                                              // 627
        return input.replace(/\\/g, '');                                                                               // 628
    }                                                                                                                  // 629
                                                                                                                       // 630
    function makeFormatFunction(format) {                                                                              // 631
        var array = format.match(formattingTokens), i, length;                                                         // 632
                                                                                                                       // 633
        for (i = 0, length = array.length; i < length; i++) {                                                          // 634
            if (formatTokenFunctions[array[i]]) {                                                                      // 635
                array[i] = formatTokenFunctions[array[i]];                                                             // 636
            } else {                                                                                                   // 637
                array[i] = removeFormattingTokens(array[i]);                                                           // 638
            }                                                                                                          // 639
        }                                                                                                              // 640
                                                                                                                       // 641
        return function (mom) {                                                                                        // 642
            var output = '', i;                                                                                        // 643
            for (i = 0; i < length; i++) {                                                                             // 644
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];                        // 645
            }                                                                                                          // 646
            return output;                                                                                             // 647
        };                                                                                                             // 648
    }                                                                                                                  // 649
                                                                                                                       // 650
    // format date using native date object                                                                            // 651
    function formatMoment(m, format) {                                                                                 // 652
        if (!m.isValid()) {                                                                                            // 653
            return m.localeData().invalidDate();                                                                       // 654
        }                                                                                                              // 655
                                                                                                                       // 656
        format = expandFormat(format, m.localeData());                                                                 // 657
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);                               // 658
                                                                                                                       // 659
        return formatFunctions[format](m);                                                                             // 660
    }                                                                                                                  // 661
                                                                                                                       // 662
    function expandFormat(format, locale) {                                                                            // 663
        var i = 5;                                                                                                     // 664
                                                                                                                       // 665
        function replaceLongDateFormatTokens(input) {                                                                  // 666
            return locale.longDateFormat(input) || input;                                                              // 667
        }                                                                                                              // 668
                                                                                                                       // 669
        localFormattingTokens.lastIndex = 0;                                                                           // 670
        while (i >= 0 && localFormattingTokens.test(format)) {                                                         // 671
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                               // 672
            localFormattingTokens.lastIndex = 0;                                                                       // 673
            i -= 1;                                                                                                    // 674
        }                                                                                                              // 675
                                                                                                                       // 676
        return format;                                                                                                 // 677
    }                                                                                                                  // 678
                                                                                                                       // 679
    var match1         = /\d/;            //       0 - 9                                                               // 680
    var match2         = /\d\d/;          //      00 - 99                                                              // 681
    var match3         = /\d{3}/;         //     000 - 999                                                             // 682
    var match4         = /\d{4}/;         //    0000 - 9999                                                            // 683
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                          // 684
    var match1to2      = /\d\d?/;         //       0 - 99                                                              // 685
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999                                                            // 686
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999                                                          // 687
    var match1to3      = /\d{1,3}/;       //       0 - 999                                                             // 688
    var match1to4      = /\d{1,4}/;       //       0 - 9999                                                            // 689
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                          // 690
                                                                                                                       // 691
    var matchUnsigned  = /\d+/;           //       0 - inf                                                             // 692
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                             // 693
                                                                                                                       // 694
    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                       // 695
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z                        // 696
                                                                                                                       // 697
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                            // 698
                                                                                                                       // 699
    // any word (or two) characters or numbers including two/three word month in arabic.                               // 700
    // includes scottish gaelic two word and hyphenated months                                                         // 701
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                       // 703
                                                                                                                       // 704
    var regexes = {};                                                                                                  // 705
                                                                                                                       // 706
    function addRegexToken (token, regex, strictRegex) {                                                               // 707
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {                                 // 708
            return (isStrict && strictRegex) ? strictRegex : regex;                                                    // 709
        };                                                                                                             // 710
    }                                                                                                                  // 711
                                                                                                                       // 712
    function getParseRegexForToken (token, config) {                                                                   // 713
        if (!hasOwnProp(regexes, token)) {                                                                             // 714
            return new RegExp(unescapeFormat(token));                                                                  // 715
        }                                                                                                              // 716
                                                                                                                       // 717
        return regexes[token](config._strict, config._locale);                                                         // 718
    }                                                                                                                  // 719
                                                                                                                       // 720
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript            // 721
    function unescapeFormat(s) {                                                                                       // 722
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;                                                                               // 724
        }));                                                                                                           // 725
    }                                                                                                                  // 726
                                                                                                                       // 727
    function regexEscape(s) {                                                                                          // 728
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                            // 729
    }                                                                                                                  // 730
                                                                                                                       // 731
    var tokens = {};                                                                                                   // 732
                                                                                                                       // 733
    function addParseToken (token, callback) {                                                                         // 734
        var i, func = callback;                                                                                        // 735
        if (typeof token === 'string') {                                                                               // 736
            token = [token];                                                                                           // 737
        }                                                                                                              // 738
        if (typeof callback === 'number') {                                                                            // 739
            func = function (input, array) {                                                                           // 740
                array[callback] = toInt(input);                                                                        // 741
            };                                                                                                         // 742
        }                                                                                                              // 743
        for (i = 0; i < token.length; i++) {                                                                           // 744
            tokens[token[i]] = func;                                                                                   // 745
        }                                                                                                              // 746
    }                                                                                                                  // 747
                                                                                                                       // 748
    function addWeekParseToken (token, callback) {                                                                     // 749
        addParseToken(token, function (input, array, config, token) {                                                  // 750
            config._w = config._w || {};                                                                               // 751
            callback(input, config._w, config, token);                                                                 // 752
        });                                                                                                            // 753
    }                                                                                                                  // 754
                                                                                                                       // 755
    function addTimeToArrayFromToken(token, input, config) {                                                           // 756
        if (input != null && hasOwnProp(tokens, token)) {                                                              // 757
            tokens[token](input, config._a, config, token);                                                            // 758
        }                                                                                                              // 759
    }                                                                                                                  // 760
                                                                                                                       // 761
    var YEAR = 0;                                                                                                      // 762
    var MONTH = 1;                                                                                                     // 763
    var DATE = 2;                                                                                                      // 764
    var HOUR = 3;                                                                                                      // 765
    var MINUTE = 4;                                                                                                    // 766
    var SECOND = 5;                                                                                                    // 767
    var MILLISECOND = 6;                                                                                               // 768
    var WEEK = 7;                                                                                                      // 769
    var WEEKDAY = 8;                                                                                                   // 770
                                                                                                                       // 771
    var indexOf;                                                                                                       // 772
                                                                                                                       // 773
    if (Array.prototype.indexOf) {                                                                                     // 774
        indexOf = Array.prototype.indexOf;                                                                             // 775
    } else {                                                                                                           // 776
        indexOf = function (o) {                                                                                       // 777
            // I know                                                                                                  // 778
            var i;                                                                                                     // 779
            for (i = 0; i < this.length; ++i) {                                                                        // 780
                if (this[i] === o) {                                                                                   // 781
                    return i;                                                                                          // 782
                }                                                                                                      // 783
            }                                                                                                          // 784
            return -1;                                                                                                 // 785
        };                                                                                                             // 786
    }                                                                                                                  // 787
                                                                                                                       // 788
    function daysInMonth(year, month) {                                                                                // 789
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();                                                    // 790
    }                                                                                                                  // 791
                                                                                                                       // 792
    // FORMATTING                                                                                                      // 793
                                                                                                                       // 794
    addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                 // 795
        return this.month() + 1;                                                                                       // 796
    });                                                                                                                // 797
                                                                                                                       // 798
    addFormatToken('MMM', 0, 0, function (format) {                                                                    // 799
        return this.localeData().monthsShort(this, format);                                                            // 800
    });                                                                                                                // 801
                                                                                                                       // 802
    addFormatToken('MMMM', 0, 0, function (format) {                                                                   // 803
        return this.localeData().months(this, format);                                                                 // 804
    });                                                                                                                // 805
                                                                                                                       // 806
    // ALIASES                                                                                                         // 807
                                                                                                                       // 808
    addUnitAlias('month', 'M');                                                                                        // 809
                                                                                                                       // 810
    // PARSING                                                                                                         // 811
                                                                                                                       // 812
    addRegexToken('M',    match1to2);                                                                                  // 813
    addRegexToken('MM',   match1to2, match2);                                                                          // 814
    addRegexToken('MMM',  function (isStrict, locale) {                                                                // 815
        return locale.monthsShortRegex(isStrict);                                                                      // 816
    });                                                                                                                // 817
    addRegexToken('MMMM', function (isStrict, locale) {                                                                // 818
        return locale.monthsRegex(isStrict);                                                                           // 819
    });                                                                                                                // 820
                                                                                                                       // 821
    addParseToken(['M', 'MM'], function (input, array) {                                                               // 822
        array[MONTH] = toInt(input) - 1;                                                                               // 823
    });                                                                                                                // 824
                                                                                                                       // 825
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                            // 826
        var month = config._locale.monthsParse(input, token, config._strict);                                          // 827
        // if we didn't find a month name, mark the date as invalid.                                                   // 828
        if (month != null) {                                                                                           // 829
            array[MONTH] = month;                                                                                      // 830
        } else {                                                                                                       // 831
            getParsingFlags(config).invalidMonth = input;                                                              // 832
        }                                                                                                              // 833
    });                                                                                                                // 834
                                                                                                                       // 835
    // LOCALES                                                                                                         // 836
                                                                                                                       // 837
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;                                                           // 838
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {                                                                                // 840
        return isArray(this._months) ? this._months[m.month()] :                                                       // 841
            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                          // 842
    }                                                                                                                  // 843
                                                                                                                       // 844
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');                       // 845
    function localeMonthsShort (m, format) {                                                                           // 846
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :                                             // 847
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                     // 848
    }                                                                                                                  // 849
                                                                                                                       // 850
    function units_month__handleStrictParse(monthName, format, strict) {                                               // 851
        var i, ii, mom, llc = monthName.toLocaleLowerCase();                                                           // 852
        if (!this._monthsParse) {                                                                                      // 853
            // this is not used                                                                                        // 854
            this._monthsParse = [];                                                                                    // 855
            this._longMonthsParse = [];                                                                                // 856
            this._shortMonthsParse = [];                                                                               // 857
            for (i = 0; i < 12; ++i) {                                                                                 // 858
                mom = create_utc__createUTC([2000, i]);                                                                // 859
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();                             // 860
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();                                   // 861
            }                                                                                                          // 862
        }                                                                                                              // 863
                                                                                                                       // 864
        if (strict) {                                                                                                  // 865
            if (format === 'MMM') {                                                                                    // 866
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 867
                return ii !== -1 ? ii : null;                                                                          // 868
            } else {                                                                                                   // 869
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 870
                return ii !== -1 ? ii : null;                                                                          // 871
            }                                                                                                          // 872
        } else {                                                                                                       // 873
            if (format === 'MMM') {                                                                                    // 874
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 875
                if (ii !== -1) {                                                                                       // 876
                    return ii;                                                                                         // 877
                }                                                                                                      // 878
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 879
                return ii !== -1 ? ii : null;                                                                          // 880
            } else {                                                                                                   // 881
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 882
                if (ii !== -1) {                                                                                       // 883
                    return ii;                                                                                         // 884
                }                                                                                                      // 885
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 886
                return ii !== -1 ? ii : null;                                                                          // 887
            }                                                                                                          // 888
        }                                                                                                              // 889
    }                                                                                                                  // 890
                                                                                                                       // 891
    function localeMonthsParse (monthName, format, strict) {                                                           // 892
        var i, mom, regex;                                                                                             // 893
                                                                                                                       // 894
        if (this._monthsParseExact) {                                                                                  // 895
            return units_month__handleStrictParse.call(this, monthName, format, strict);                               // 896
        }                                                                                                              // 897
                                                                                                                       // 898
        if (!this._monthsParse) {                                                                                      // 899
            this._monthsParse = [];                                                                                    // 900
            this._longMonthsParse = [];                                                                                // 901
            this._shortMonthsParse = [];                                                                               // 902
        }                                                                                                              // 903
                                                                                                                       // 904
        // TODO: add sorting                                                                                           // 905
        // Sorting makes sure if one month (or abbr) is a prefix of another                                            // 906
        // see sorting in computeMonthsParse                                                                           // 907
        for (i = 0; i < 12; i++) {                                                                                     // 908
            // make the regex if we don't have it already                                                              // 909
            mom = create_utc__createUTC([2000, i]);                                                                    // 910
            if (strict && !this._longMonthsParse[i]) {                                                                 // 911
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');         // 912
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');   // 913
            }                                                                                                          // 914
            if (!strict && !this._monthsParse[i]) {                                                                    // 915
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                 // 916
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                        // 917
            }                                                                                                          // 918
            // test the regex                                                                                          // 919
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                             // 920
                return i;                                                                                              // 921
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                      // 922
                return i;                                                                                              // 923
            } else if (!strict && this._monthsParse[i].test(monthName)) {                                              // 924
                return i;                                                                                              // 925
            }                                                                                                          // 926
        }                                                                                                              // 927
    }                                                                                                                  // 928
                                                                                                                       // 929
    // MOMENTS                                                                                                         // 930
                                                                                                                       // 931
    function setMonth (mom, value) {                                                                                   // 932
        var dayOfMonth;                                                                                                // 933
                                                                                                                       // 934
        if (!mom.isValid()) {                                                                                          // 935
            // No op                                                                                                   // 936
            return mom;                                                                                                // 937
        }                                                                                                              // 938
                                                                                                                       // 939
        if (typeof value === 'string') {                                                                               // 940
            if (/^\d+$/.test(value)) {                                                                                 // 941
                value = toInt(value);                                                                                  // 942
            } else {                                                                                                   // 943
                value = mom.localeData().monthsParse(value);                                                           // 944
                // TODO: Another silent failure?                                                                       // 945
                if (typeof value !== 'number') {                                                                       // 946
                    return mom;                                                                                        // 947
                }                                                                                                      // 948
            }                                                                                                          // 949
        }                                                                                                              // 950
                                                                                                                       // 951
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                             // 952
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                        // 953
        return mom;                                                                                                    // 954
    }                                                                                                                  // 955
                                                                                                                       // 956
    function getSetMonth (value) {                                                                                     // 957
        if (value != null) {                                                                                           // 958
            setMonth(this, value);                                                                                     // 959
            utils_hooks__hooks.updateOffset(this, true);                                                               // 960
            return this;                                                                                               // 961
        } else {                                                                                                       // 962
            return get_set__get(this, 'Month');                                                                        // 963
        }                                                                                                              // 964
    }                                                                                                                  // 965
                                                                                                                       // 966
    function getDaysInMonth () {                                                                                       // 967
        return daysInMonth(this.year(), this.month());                                                                 // 968
    }                                                                                                                  // 969
                                                                                                                       // 970
    var defaultMonthsShortRegex = matchWord;                                                                           // 971
    function monthsShortRegex (isStrict) {                                                                             // 972
        if (this._monthsParseExact) {                                                                                  // 973
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 974
                computeMonthsParse.call(this);                                                                         // 975
            }                                                                                                          // 976
            if (isStrict) {                                                                                            // 977
                return this._monthsShortStrictRegex;                                                                   // 978
            } else {                                                                                                   // 979
                return this._monthsShortRegex;                                                                         // 980
            }                                                                                                          // 981
        } else {                                                                                                       // 982
            return this._monthsShortStrictRegex && isStrict ?                                                          // 983
                this._monthsShortStrictRegex : this._monthsShortRegex;                                                 // 984
        }                                                                                                              // 985
    }                                                                                                                  // 986
                                                                                                                       // 987
    var defaultMonthsRegex = matchWord;                                                                                // 988
    function monthsRegex (isStrict) {                                                                                  // 989
        if (this._monthsParseExact) {                                                                                  // 990
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 991
                computeMonthsParse.call(this);                                                                         // 992
            }                                                                                                          // 993
            if (isStrict) {                                                                                            // 994
                return this._monthsStrictRegex;                                                                        // 995
            } else {                                                                                                   // 996
                return this._monthsRegex;                                                                              // 997
            }                                                                                                          // 998
        } else {                                                                                                       // 999
            return this._monthsStrictRegex && isStrict ?                                                               // 1000
                this._monthsStrictRegex : this._monthsRegex;                                                           // 1001
        }                                                                                                              // 1002
    }                                                                                                                  // 1003
                                                                                                                       // 1004
    function computeMonthsParse () {                                                                                   // 1005
        function cmpLenRev(a, b) {                                                                                     // 1006
            return b.length - a.length;                                                                                // 1007
        }                                                                                                              // 1008
                                                                                                                       // 1009
        var shortPieces = [], longPieces = [], mixedPieces = [],                                                       // 1010
            i, mom;                                                                                                    // 1011
        for (i = 0; i < 12; i++) {                                                                                     // 1012
            // make the regex if we don't have it already                                                              // 1013
            mom = create_utc__createUTC([2000, i]);                                                                    // 1014
            shortPieces.push(this.monthsShort(mom, ''));                                                               // 1015
            longPieces.push(this.months(mom, ''));                                                                     // 1016
            mixedPieces.push(this.months(mom, ''));                                                                    // 1017
            mixedPieces.push(this.monthsShort(mom, ''));                                                               // 1018
        }                                                                                                              // 1019
        // Sorting makes sure if one month (or abbr) is a prefix of another it                                         // 1020
        // will match the longer piece.                                                                                // 1021
        shortPieces.sort(cmpLenRev);                                                                                   // 1022
        longPieces.sort(cmpLenRev);                                                                                    // 1023
        mixedPieces.sort(cmpLenRev);                                                                                   // 1024
        for (i = 0; i < 12; i++) {                                                                                     // 1025
            shortPieces[i] = regexEscape(shortPieces[i]);                                                              // 1026
            longPieces[i] = regexEscape(longPieces[i]);                                                                // 1027
            mixedPieces[i] = regexEscape(mixedPieces[i]);                                                              // 1028
        }                                                                                                              // 1029
                                                                                                                       // 1030
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                       // 1031
        this._monthsShortRegex = this._monthsRegex;                                                                    // 1032
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                  // 1033
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                            // 1034
    }                                                                                                                  // 1035
                                                                                                                       // 1036
    function checkOverflow (m) {                                                                                       // 1037
        var overflow;                                                                                                  // 1038
        var a = m._a;                                                                                                  // 1039
                                                                                                                       // 1040
        if (a && getParsingFlags(m).overflow === -2) {                                                                 // 1041
            overflow =                                                                                                 // 1042
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                   // 1043
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                         // 1044
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                  // 1046
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                  // 1047
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                             // 1048
                -1;                                                                                                    // 1049
                                                                                                                       // 1050
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                       // 1051
                overflow = DATE;                                                                                       // 1052
            }                                                                                                          // 1053
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {                                                // 1054
                overflow = WEEK;                                                                                       // 1055
            }                                                                                                          // 1056
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {                                              // 1057
                overflow = WEEKDAY;                                                                                    // 1058
            }                                                                                                          // 1059
                                                                                                                       // 1060
            getParsingFlags(m).overflow = overflow;                                                                    // 1061
        }                                                                                                              // 1062
                                                                                                                       // 1063
        return m;                                                                                                      // 1064
    }                                                                                                                  // 1065
                                                                                                                       // 1066
    // iso 8601 regex                                                                                                  // 1067
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)       // 1068
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
                                                                                                                       // 1071
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;                                                                             // 1072
                                                                                                                       // 1073
    var isoDates = [                                                                                                   // 1074
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],                                                                       // 1075
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],                                                                             // 1076
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],                                                                            // 1077
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],                                                                          // 1078
        ['YYYY-DDD', /\d{4}-\d{3}/],                                                                                   // 1079
        ['YYYY-MM', /\d{4}-\d\d/, false],                                                                              // 1080
        ['YYYYYYMMDD', /[+-]\d{10}/],                                                                                  // 1081
        ['YYYYMMDD', /\d{8}/],                                                                                         // 1082
        // YYYYMM is NOT allowed by the standard                                                                       // 1083
        ['GGGG[W]WWE', /\d{4}W\d{3}/],                                                                                 // 1084
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],                                                                           // 1085
        ['YYYYDDD', /\d{7}/]                                                                                           // 1086
    ];                                                                                                                 // 1087
                                                                                                                       // 1088
    // iso time formats and regexes                                                                                    // 1089
    var isoTimes = [                                                                                                   // 1090
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],                                                                      // 1091
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],                                                                       // 1092
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],                                                                                // 1093
        ['HH:mm', /\d\d:\d\d/],                                                                                        // 1094
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],                                                                          // 1095
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],                                                                           // 1096
        ['HHmmss', /\d\d\d\d\d\d/],                                                                                    // 1097
        ['HHmm', /\d\d\d\d/],                                                                                          // 1098
        ['HH', /\d\d/]                                                                                                 // 1099
    ];                                                                                                                 // 1100
                                                                                                                       // 1101
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                       // 1102
                                                                                                                       // 1103
    // date from iso format                                                                                            // 1104
    function configFromISO(config) {                                                                                   // 1105
        var i, l,                                                                                                      // 1106
            string = config._i,                                                                                        // 1107
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),                                       // 1108
            allowTime, dateFormat, timeFormat, tzFormat;                                                               // 1109
                                                                                                                       // 1110
        if (match) {                                                                                                   // 1111
            getParsingFlags(config).iso = true;                                                                        // 1112
                                                                                                                       // 1113
            for (i = 0, l = isoDates.length; i < l; i++) {                                                             // 1114
                if (isoDates[i][1].exec(match[1])) {                                                                   // 1115
                    dateFormat = isoDates[i][0];                                                                       // 1116
                    allowTime = isoDates[i][2] !== false;                                                              // 1117
                    break;                                                                                             // 1118
                }                                                                                                      // 1119
            }                                                                                                          // 1120
            if (dateFormat == null) {                                                                                  // 1121
                config._isValid = false;                                                                               // 1122
                return;                                                                                                // 1123
            }                                                                                                          // 1124
            if (match[3]) {                                                                                            // 1125
                for (i = 0, l = isoTimes.length; i < l; i++) {                                                         // 1126
                    if (isoTimes[i][1].exec(match[3])) {                                                               // 1127
                        // match[2] should be 'T' or space                                                             // 1128
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];                                               // 1129
                        break;                                                                                         // 1130
                    }                                                                                                  // 1131
                }                                                                                                      // 1132
                if (timeFormat == null) {                                                                              // 1133
                    config._isValid = false;                                                                           // 1134
                    return;                                                                                            // 1135
                }                                                                                                      // 1136
            }                                                                                                          // 1137
            if (!allowTime && timeFormat != null) {                                                                    // 1138
                config._isValid = false;                                                                               // 1139
                return;                                                                                                // 1140
            }                                                                                                          // 1141
            if (match[4]) {                                                                                            // 1142
                if (tzRegex.exec(match[4])) {                                                                          // 1143
                    tzFormat = 'Z';                                                                                    // 1144
                } else {                                                                                               // 1145
                    config._isValid = false;                                                                           // 1146
                    return;                                                                                            // 1147
                }                                                                                                      // 1148
            }                                                                                                          // 1149
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');                                            // 1150
            configFromStringAndFormat(config);                                                                         // 1151
        } else {                                                                                                       // 1152
            config._isValid = false;                                                                                   // 1153
        }                                                                                                              // 1154
    }                                                                                                                  // 1155
                                                                                                                       // 1156
    // date from iso format or fallback                                                                                // 1157
    function configFromString(config) {                                                                                // 1158
        var matched = aspNetJsonRegex.exec(config._i);                                                                 // 1159
                                                                                                                       // 1160
        if (matched !== null) {                                                                                        // 1161
            config._d = new Date(+matched[1]);                                                                         // 1162
            return;                                                                                                    // 1163
        }                                                                                                              // 1164
                                                                                                                       // 1165
        configFromISO(config);                                                                                         // 1166
        if (config._isValid === false) {                                                                               // 1167
            delete config._isValid;                                                                                    // 1168
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 1169
        }                                                                                                              // 1170
    }                                                                                                                  // 1171
                                                                                                                       // 1172
    utils_hooks__hooks.createFromInputFallback = deprecate(                                                            // 1173
        'moment construction falls back to js Date. This is ' +                                                        // 1174
        'discouraged and will be removed in upcoming major ' +                                                         // 1175
        'release. Please refer to ' +                                                                                  // 1176
        'https://github.com/moment/moment/issues/1407 for more info.',                                                 // 1177
        function (config) {                                                                                            // 1178
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                          // 1179
        }                                                                                                              // 1180
    );                                                                                                                 // 1181
                                                                                                                       // 1182
    function createDate (y, m, d, h, M, s, ms) {                                                                       // 1183
        //can't just apply() to create a date:                                                                         // 1184
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);                                                                     // 1186
                                                                                                                       // 1187
        //the date constructor remaps years 0-99 to 1900-1999                                                          // 1188
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {                                                       // 1189
            date.setFullYear(y);                                                                                       // 1190
        }                                                                                                              // 1191
        return date;                                                                                                   // 1192
    }                                                                                                                  // 1193
                                                                                                                       // 1194
    function createUTCDate (y) {                                                                                       // 1195
        var date = new Date(Date.UTC.apply(null, arguments));                                                          // 1196
                                                                                                                       // 1197
        //the Date.UTC function remaps years 0-99 to 1900-1999                                                         // 1198
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {                                                    // 1199
            date.setUTCFullYear(y);                                                                                    // 1200
        }                                                                                                              // 1201
        return date;                                                                                                   // 1202
    }                                                                                                                  // 1203
                                                                                                                       // 1204
    // FORMATTING                                                                                                      // 1205
                                                                                                                       // 1206
    addFormatToken('Y', 0, 0, function () {                                                                            // 1207
        var y = this.year();                                                                                           // 1208
        return y <= 9999 ? '' + y : '+' + y;                                                                           // 1209
    });                                                                                                                // 1210
                                                                                                                       // 1211
    addFormatToken(0, ['YY', 2], 0, function () {                                                                      // 1212
        return this.year() % 100;                                                                                      // 1213
    });                                                                                                                // 1214
                                                                                                                       // 1215
    addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                 // 1216
    addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                 // 1217
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                 // 1218
                                                                                                                       // 1219
    // ALIASES                                                                                                         // 1220
                                                                                                                       // 1221
    addUnitAlias('year', 'y');                                                                                         // 1222
                                                                                                                       // 1223
    // PARSING                                                                                                         // 1224
                                                                                                                       // 1225
    addRegexToken('Y',      matchSigned);                                                                              // 1226
    addRegexToken('YY',     match1to2, match2);                                                                        // 1227
    addRegexToken('YYYY',   match1to4, match4);                                                                        // 1228
    addRegexToken('YYYYY',  match1to6, match6);                                                                        // 1229
    addRegexToken('YYYYYY', match1to6, match6);                                                                        // 1230
                                                                                                                       // 1231
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);                                                                          // 1232
    addParseToken('YYYY', function (input, array) {                                                                    // 1233
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);                 // 1234
    });                                                                                                                // 1235
    addParseToken('YY', function (input, array) {                                                                      // 1236
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 1237
    });                                                                                                                // 1238
    addParseToken('Y', function (input, array) {                                                                       // 1239
        array[YEAR] = parseInt(input, 10);                                                                             // 1240
    });                                                                                                                // 1241
                                                                                                                       // 1242
    // HELPERS                                                                                                         // 1243
                                                                                                                       // 1244
    function daysInYear(year) {                                                                                        // 1245
        return isLeapYear(year) ? 366 : 365;                                                                           // 1246
    }                                                                                                                  // 1247
                                                                                                                       // 1248
    function isLeapYear(year) {                                                                                        // 1249
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                               // 1250
    }                                                                                                                  // 1251
                                                                                                                       // 1252
    // HOOKS                                                                                                           // 1253
                                                                                                                       // 1254
    utils_hooks__hooks.parseTwoDigitYear = function (input) {                                                          // 1255
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                       // 1256
    };                                                                                                                 // 1257
                                                                                                                       // 1258
    // MOMENTS                                                                                                         // 1259
                                                                                                                       // 1260
    var getSetYear = makeGetSet('FullYear', true);                                                                     // 1261
                                                                                                                       // 1262
    function getIsLeapYear () {                                                                                        // 1263
        return isLeapYear(this.year());                                                                                // 1264
    }                                                                                                                  // 1265
                                                                                                                       // 1266
    // start-of-first-week - start-of-year                                                                             // 1267
    function firstWeekOffset(year, dow, doy) {                                                                         // 1268
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)                    // 1269
            fwd = 7 + dow - doy,                                                                                       // 1270
            // first-week day local weekday -- which local weekday is fwd                                              // 1271
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;                                           // 1272
                                                                                                                       // 1273
        return -fwdlw + fwd - 1;                                                                                       // 1274
    }                                                                                                                  // 1275
                                                                                                                       // 1276
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday          // 1277
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {                                                       // 1278
        var localWeekday = (7 + weekday - dow) % 7,                                                                    // 1279
            weekOffset = firstWeekOffset(year, dow, doy),                                                              // 1280
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,                                                // 1281
            resYear, resDayOfYear;                                                                                     // 1282
                                                                                                                       // 1283
        if (dayOfYear <= 0) {                                                                                          // 1284
            resYear = year - 1;                                                                                        // 1285
            resDayOfYear = daysInYear(resYear) + dayOfYear;                                                            // 1286
        } else if (dayOfYear > daysInYear(year)) {                                                                     // 1287
            resYear = year + 1;                                                                                        // 1288
            resDayOfYear = dayOfYear - daysInYear(year);                                                               // 1289
        } else {                                                                                                       // 1290
            resYear = year;                                                                                            // 1291
            resDayOfYear = dayOfYear;                                                                                  // 1292
        }                                                                                                              // 1293
                                                                                                                       // 1294
        return {                                                                                                       // 1295
            year: resYear,                                                                                             // 1296
            dayOfYear: resDayOfYear                                                                                    // 1297
        };                                                                                                             // 1298
    }                                                                                                                  // 1299
                                                                                                                       // 1300
    function weekOfYear(mom, dow, doy) {                                                                               // 1301
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),                                                        // 1302
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,                                             // 1303
            resWeek, resYear;                                                                                          // 1304
                                                                                                                       // 1305
        if (week < 1) {                                                                                                // 1306
            resYear = mom.year() - 1;                                                                                  // 1307
            resWeek = week + weeksInYear(resYear, dow, doy);                                                           // 1308
        } else if (week > weeksInYear(mom.year(), dow, doy)) {                                                         // 1309
            resWeek = week - weeksInYear(mom.year(), dow, doy);                                                        // 1310
            resYear = mom.year() + 1;                                                                                  // 1311
        } else {                                                                                                       // 1312
            resYear = mom.year();                                                                                      // 1313
            resWeek = week;                                                                                            // 1314
        }                                                                                                              // 1315
                                                                                                                       // 1316
        return {                                                                                                       // 1317
            week: resWeek,                                                                                             // 1318
            year: resYear                                                                                              // 1319
        };                                                                                                             // 1320
    }                                                                                                                  // 1321
                                                                                                                       // 1322
    function weeksInYear(year, dow, doy) {                                                                             // 1323
        var weekOffset = firstWeekOffset(year, dow, doy),                                                              // 1324
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);                                                      // 1325
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;                                                   // 1326
    }                                                                                                                  // 1327
                                                                                                                       // 1328
    // Pick the first defined of two or three arguments.                                                               // 1329
    function defaults(a, b, c) {                                                                                       // 1330
        if (a != null) {                                                                                               // 1331
            return a;                                                                                                  // 1332
        }                                                                                                              // 1333
        if (b != null) {                                                                                               // 1334
            return b;                                                                                                  // 1335
        }                                                                                                              // 1336
        return c;                                                                                                      // 1337
    }                                                                                                                  // 1338
                                                                                                                       // 1339
    function currentDateArray(config) {                                                                                // 1340
        // hooks is actually the exported moment object                                                                // 1341
        var nowValue = new Date(utils_hooks__hooks.now());                                                             // 1342
        if (config._useUTC) {                                                                                          // 1343
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];                         // 1344
        }                                                                                                              // 1345
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];                                      // 1346
    }                                                                                                                  // 1347
                                                                                                                       // 1348
    // convert an array to a date.                                                                                     // 1349
    // the array should mirror the parameters below                                                                    // 1350
    // note: all values past the year are optional and will default to the lowest possible value.                      // 1351
    // [year, month, day , hour, minute, second, millisecond]                                                          // 1352
    function configFromArray (config) {                                                                                // 1353
        var i, date, input = [], currentDate, yearToUse;                                                               // 1354
                                                                                                                       // 1355
        if (config._d) {                                                                                               // 1356
            return;                                                                                                    // 1357
        }                                                                                                              // 1358
                                                                                                                       // 1359
        currentDate = currentDateArray(config);                                                                        // 1360
                                                                                                                       // 1361
        //compute day of the year from weeks and weekdays                                                              // 1362
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                        // 1363
            dayOfYearFromWeekInfo(config);                                                                             // 1364
        }                                                                                                              // 1365
                                                                                                                       // 1366
        //if the day of the year is set, figure out what it is                                                         // 1367
        if (config._dayOfYear) {                                                                                       // 1368
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                  // 1369
                                                                                                                       // 1370
            if (config._dayOfYear > daysInYear(yearToUse)) {                                                           // 1371
                getParsingFlags(config)._overflowDayOfYear = true;                                                     // 1372
            }                                                                                                          // 1373
                                                                                                                       // 1374
            date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                     // 1375
            config._a[MONTH] = date.getUTCMonth();                                                                     // 1376
            config._a[DATE] = date.getUTCDate();                                                                       // 1377
        }                                                                                                              // 1378
                                                                                                                       // 1379
        // Default to current date.                                                                                    // 1380
        // * if no year, month, day of month are given, default to today                                               // 1381
        // * if day of month is given, default month and year                                                          // 1382
        // * if month is given, default only year                                                                      // 1383
        // * if year is given, don't default anything                                                                  // 1384
        for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                              // 1385
            config._a[i] = input[i] = currentDate[i];                                                                  // 1386
        }                                                                                                              // 1387
                                                                                                                       // 1388
        // Zero out whatever was not defaulted, including time                                                         // 1389
        for (; i < 7; i++) {                                                                                           // 1390
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                       // 1391
        }                                                                                                              // 1392
                                                                                                                       // 1393
        // Check for 24:00:00.000                                                                                      // 1394
        if (config._a[HOUR] === 24 &&                                                                                  // 1395
                config._a[MINUTE] === 0 &&                                                                             // 1396
                config._a[SECOND] === 0 &&                                                                             // 1397
                config._a[MILLISECOND] === 0) {                                                                        // 1398
            config._nextDay = true;                                                                                    // 1399
            config._a[HOUR] = 0;                                                                                       // 1400
        }                                                                                                              // 1401
                                                                                                                       // 1402
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                  // 1403
        // Apply timezone offset from input. The actual utcOffset can be changed                                       // 1404
        // with parseZone.                                                                                             // 1405
        if (config._tzm != null) {                                                                                     // 1406
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                          // 1407
        }                                                                                                              // 1408
                                                                                                                       // 1409
        if (config._nextDay) {                                                                                         // 1410
            config._a[HOUR] = 24;                                                                                      // 1411
        }                                                                                                              // 1412
    }                                                                                                                  // 1413
                                                                                                                       // 1414
    function dayOfYearFromWeekInfo(config) {                                                                           // 1415
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;                                               // 1416
                                                                                                                       // 1417
        w = config._w;                                                                                                 // 1418
        if (w.GG != null || w.W != null || w.E != null) {                                                              // 1419
            dow = 1;                                                                                                   // 1420
            doy = 4;                                                                                                   // 1421
                                                                                                                       // 1422
            // TODO: We need to take the current isoWeekYear, but that depends on                                      // 1423
            // how we interpret now (local, utc, fixed offset). So create                                              // 1424
            // a now version of current config (take local/utc/offset flags, and                                       // 1425
            // create now).                                                                                            // 1426
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);                   // 1427
            week = defaults(w.W, 1);                                                                                   // 1428
            weekday = defaults(w.E, 1);                                                                                // 1429
            if (weekday < 1 || weekday > 7) {                                                                          // 1430
                weekdayOverflow = true;                                                                                // 1431
            }                                                                                                          // 1432
        } else {                                                                                                       // 1433
            dow = config._locale._week.dow;                                                                            // 1434
            doy = config._locale._week.doy;                                                                            // 1435
                                                                                                                       // 1436
            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);               // 1437
            week = defaults(w.w, 1);                                                                                   // 1438
                                                                                                                       // 1439
            if (w.d != null) {                                                                                         // 1440
                // weekday -- low day numbers are considered next week                                                 // 1441
                weekday = w.d;                                                                                         // 1442
                if (weekday < 0 || weekday > 6) {                                                                      // 1443
                    weekdayOverflow = true;                                                                            // 1444
                }                                                                                                      // 1445
            } else if (w.e != null) {                                                                                  // 1446
                // local weekday -- counting starts from begining of week                                              // 1447
                weekday = w.e + dow;                                                                                   // 1448
                if (w.e < 0 || w.e > 6) {                                                                              // 1449
                    weekdayOverflow = true;                                                                            // 1450
                }                                                                                                      // 1451
            } else {                                                                                                   // 1452
                // default to begining of week                                                                         // 1453
                weekday = dow;                                                                                         // 1454
            }                                                                                                          // 1455
        }                                                                                                              // 1456
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {                                                      // 1457
            getParsingFlags(config)._overflowWeeks = true;                                                             // 1458
        } else if (weekdayOverflow != null) {                                                                          // 1459
            getParsingFlags(config)._overflowWeekday = true;                                                           // 1460
        } else {                                                                                                       // 1461
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);                                              // 1462
            config._a[YEAR] = temp.year;                                                                               // 1463
            config._dayOfYear = temp.dayOfYear;                                                                        // 1464
        }                                                                                                              // 1465
    }                                                                                                                  // 1466
                                                                                                                       // 1467
    // constant that refers to the ISO standard                                                                        // 1468
    utils_hooks__hooks.ISO_8601 = function () {};                                                                      // 1469
                                                                                                                       // 1470
    // date from string and format string                                                                              // 1471
    function configFromStringAndFormat(config) {                                                                       // 1472
        // TODO: Move this to another part of the creation flow to prevent circular deps                               // 1473
        if (config._f === utils_hooks__hooks.ISO_8601) {                                                               // 1474
            configFromISO(config);                                                                                     // 1475
            return;                                                                                                    // 1476
        }                                                                                                              // 1477
                                                                                                                       // 1478
        config._a = [];                                                                                                // 1479
        getParsingFlags(config).empty = true;                                                                          // 1480
                                                                                                                       // 1481
        // This array is used to make a Date, either with `new Date` or `Date.UTC`                                     // 1482
        var string = '' + config._i,                                                                                   // 1483
            i, parsedInput, tokens, token, skipped,                                                                    // 1484
            stringLength = string.length,                                                                              // 1485
            totalParsedInputLength = 0;                                                                                // 1486
                                                                                                                       // 1487
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                // 1488
                                                                                                                       // 1489
        for (i = 0; i < tokens.length; i++) {                                                                          // 1490
            token = tokens[i];                                                                                         // 1491
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                               // 1492
            // console.log('token', token, 'parsedInput', parsedInput,                                                 // 1493
            //         'regex', getParseRegexForToken(token, config));                                                 // 1494
            if (parsedInput) {                                                                                         // 1495
                skipped = string.substr(0, string.indexOf(parsedInput));                                               // 1496
                if (skipped.length > 0) {                                                                              // 1497
                    getParsingFlags(config).unusedInput.push(skipped);                                                 // 1498
                }                                                                                                      // 1499
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                               // 1500
                totalParsedInputLength += parsedInput.length;                                                          // 1501
            }                                                                                                          // 1502
            // don't parse if it's not a known token                                                                   // 1503
            if (formatTokenFunctions[token]) {                                                                         // 1504
                if (parsedInput) {                                                                                     // 1505
                    getParsingFlags(config).empty = false;                                                             // 1506
                }                                                                                                      // 1507
                else {                                                                                                 // 1508
                    getParsingFlags(config).unusedTokens.push(token);                                                  // 1509
                }                                                                                                      // 1510
                addTimeToArrayFromToken(token, parsedInput, config);                                                   // 1511
            }                                                                                                          // 1512
            else if (config._strict && !parsedInput) {                                                                 // 1513
                getParsingFlags(config).unusedTokens.push(token);                                                      // 1514
            }                                                                                                          // 1515
        }                                                                                                              // 1516
                                                                                                                       // 1517
        // add remaining unparsed input length to the string                                                           // 1518
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;                                 // 1519
        if (string.length > 0) {                                                                                       // 1520
            getParsingFlags(config).unusedInput.push(string);                                                          // 1521
        }                                                                                                              // 1522
                                                                                                                       // 1523
        // clear _12h flag if hour is <= 12                                                                            // 1524
        if (getParsingFlags(config).bigHour === true &&                                                                // 1525
                config._a[HOUR] <= 12 &&                                                                               // 1526
                config._a[HOUR] > 0) {                                                                                 // 1527
            getParsingFlags(config).bigHour = undefined;                                                               // 1528
        }                                                                                                              // 1529
                                                                                                                       // 1530
        getParsingFlags(config).parsedDateParts = config._a.slice(0);                                                  // 1531
        getParsingFlags(config).meridiem = config._meridiem;                                                           // 1532
        // handle meridiem                                                                                             // 1533
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                          // 1534
                                                                                                                       // 1535
        configFromArray(config);                                                                                       // 1536
        checkOverflow(config);                                                                                         // 1537
    }                                                                                                                  // 1538
                                                                                                                       // 1539
                                                                                                                       // 1540
    function meridiemFixWrap (locale, hour, meridiem) {                                                                // 1541
        var isPm;                                                                                                      // 1542
                                                                                                                       // 1543
        if (meridiem == null) {                                                                                        // 1544
            // nothing to do                                                                                           // 1545
            return hour;                                                                                               // 1546
        }                                                                                                              // 1547
        if (locale.meridiemHour != null) {                                                                             // 1548
            return locale.meridiemHour(hour, meridiem);                                                                // 1549
        } else if (locale.isPM != null) {                                                                              // 1550
            // Fallback                                                                                                // 1551
            isPm = locale.isPM(meridiem);                                                                              // 1552
            if (isPm && hour < 12) {                                                                                   // 1553
                hour += 12;                                                                                            // 1554
            }                                                                                                          // 1555
            if (!isPm && hour === 12) {                                                                                // 1556
                hour = 0;                                                                                              // 1557
            }                                                                                                          // 1558
            return hour;                                                                                               // 1559
        } else {                                                                                                       // 1560
            // this is not supposed to happen                                                                          // 1561
            return hour;                                                                                               // 1562
        }                                                                                                              // 1563
    }                                                                                                                  // 1564
                                                                                                                       // 1565
    // date from string and array of format strings                                                                    // 1566
    function configFromStringAndArray(config) {                                                                        // 1567
        var tempConfig,                                                                                                // 1568
            bestMoment,                                                                                                // 1569
                                                                                                                       // 1570
            scoreToBeat,                                                                                               // 1571
            i,                                                                                                         // 1572
            currentScore;                                                                                              // 1573
                                                                                                                       // 1574
        if (config._f.length === 0) {                                                                                  // 1575
            getParsingFlags(config).invalidFormat = true;                                                              // 1576
            config._d = new Date(NaN);                                                                                 // 1577
            return;                                                                                                    // 1578
        }                                                                                                              // 1579
                                                                                                                       // 1580
        for (i = 0; i < config._f.length; i++) {                                                                       // 1581
            currentScore = 0;                                                                                          // 1582
            tempConfig = copyConfig({}, config);                                                                       // 1583
            if (config._useUTC != null) {                                                                              // 1584
                tempConfig._useUTC = config._useUTC;                                                                   // 1585
            }                                                                                                          // 1586
            tempConfig._f = config._f[i];                                                                              // 1587
            configFromStringAndFormat(tempConfig);                                                                     // 1588
                                                                                                                       // 1589
            if (!valid__isValid(tempConfig)) {                                                                         // 1590
                continue;                                                                                              // 1591
            }                                                                                                          // 1592
                                                                                                                       // 1593
            // if there is any input that was not parsed add a penalty for that format                                 // 1594
            currentScore += getParsingFlags(tempConfig).charsLeftOver;                                                 // 1595
                                                                                                                       // 1596
            //or tokens                                                                                                // 1597
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;                                      // 1598
                                                                                                                       // 1599
            getParsingFlags(tempConfig).score = currentScore;                                                          // 1600
                                                                                                                       // 1601
            if (scoreToBeat == null || currentScore < scoreToBeat) {                                                   // 1602
                scoreToBeat = currentScore;                                                                            // 1603
                bestMoment = tempConfig;                                                                               // 1604
            }                                                                                                          // 1605
        }                                                                                                              // 1606
                                                                                                                       // 1607
        extend(config, bestMoment || tempConfig);                                                                      // 1608
    }                                                                                                                  // 1609
                                                                                                                       // 1610
    function configFromObject(config) {                                                                                // 1611
        if (config._d) {                                                                                               // 1612
            return;                                                                                                    // 1613
        }                                                                                                              // 1614
                                                                                                                       // 1615
        var i = normalizeObjectUnits(config._i);                                                                       // 1616
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);                                                                           // 1618
        });                                                                                                            // 1619
                                                                                                                       // 1620
        configFromArray(config);                                                                                       // 1621
    }                                                                                                                  // 1622
                                                                                                                       // 1623
    function createFromConfig (config) {                                                                               // 1624
        var res = new Moment(checkOverflow(prepareConfig(config)));                                                    // 1625
        if (res._nextDay) {                                                                                            // 1626
            // Adding is smart enough around DST                                                                       // 1627
            res.add(1, 'd');                                                                                           // 1628
            res._nextDay = undefined;                                                                                  // 1629
        }                                                                                                              // 1630
                                                                                                                       // 1631
        return res;                                                                                                    // 1632
    }                                                                                                                  // 1633
                                                                                                                       // 1634
    function prepareConfig (config) {                                                                                  // 1635
        var input = config._i,                                                                                         // 1636
            format = config._f;                                                                                        // 1637
                                                                                                                       // 1638
        config._locale = config._locale || locale_locales__getLocale(config._l);                                       // 1639
                                                                                                                       // 1640
        if (input === null || (format === undefined && input === '')) {                                                // 1641
            return valid__createInvalid({nullInput: true});                                                            // 1642
        }                                                                                                              // 1643
                                                                                                                       // 1644
        if (typeof input === 'string') {                                                                               // 1645
            config._i = input = config._locale.preparse(input);                                                        // 1646
        }                                                                                                              // 1647
                                                                                                                       // 1648
        if (isMoment(input)) {                                                                                         // 1649
            return new Moment(checkOverflow(input));                                                                   // 1650
        } else if (isArray(format)) {                                                                                  // 1651
            configFromStringAndArray(config);                                                                          // 1652
        } else if (format) {                                                                                           // 1653
            configFromStringAndFormat(config);                                                                         // 1654
        } else if (isDate(input)) {                                                                                    // 1655
            config._d = input;                                                                                         // 1656
        } else {                                                                                                       // 1657
            configFromInput(config);                                                                                   // 1658
        }                                                                                                              // 1659
                                                                                                                       // 1660
        if (!valid__isValid(config)) {                                                                                 // 1661
            config._d = null;                                                                                          // 1662
        }                                                                                                              // 1663
                                                                                                                       // 1664
        return config;                                                                                                 // 1665
    }                                                                                                                  // 1666
                                                                                                                       // 1667
    function configFromInput(config) {                                                                                 // 1668
        var input = config._i;                                                                                         // 1669
        if (input === undefined) {                                                                                     // 1670
            config._d = new Date(utils_hooks__hooks.now());                                                            // 1671
        } else if (isDate(input)) {                                                                                    // 1672
            config._d = new Date(input.valueOf());                                                                     // 1673
        } else if (typeof input === 'string') {                                                                        // 1674
            configFromString(config);                                                                                  // 1675
        } else if (isArray(input)) {                                                                                   // 1676
            config._a = map(input.slice(0), function (obj) {                                                           // 1677
                return parseInt(obj, 10);                                                                              // 1678
            });                                                                                                        // 1679
            configFromArray(config);                                                                                   // 1680
        } else if (typeof(input) === 'object') {                                                                       // 1681
            configFromObject(config);                                                                                  // 1682
        } else if (typeof(input) === 'number') {                                                                       // 1683
            // from milliseconds                                                                                       // 1684
            config._d = new Date(input);                                                                               // 1685
        } else {                                                                                                       // 1686
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 1687
        }                                                                                                              // 1688
    }                                                                                                                  // 1689
                                                                                                                       // 1690
    function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                 // 1691
        var c = {};                                                                                                    // 1692
                                                                                                                       // 1693
        if (typeof(locale) === 'boolean') {                                                                            // 1694
            strict = locale;                                                                                           // 1695
            locale = undefined;                                                                                        // 1696
        }                                                                                                              // 1697
        // object construction must be done this way.                                                                  // 1698
        // https://github.com/moment/moment/issues/1423                                                                // 1699
        c._isAMomentObject = true;                                                                                     // 1700
        c._useUTC = c._isUTC = isUTC;                                                                                  // 1701
        c._l = locale;                                                                                                 // 1702
        c._i = input;                                                                                                  // 1703
        c._f = format;                                                                                                 // 1704
        c._strict = strict;                                                                                            // 1705
                                                                                                                       // 1706
        return createFromConfig(c);                                                                                    // 1707
    }                                                                                                                  // 1708
                                                                                                                       // 1709
    function local__createLocal (input, format, locale, strict) {                                                      // 1710
        return createLocalOrUTC(input, format, locale, strict, false);                                                 // 1711
    }                                                                                                                  // 1712
                                                                                                                       // 1713
    var prototypeMin = deprecate(                                                                                      // 1714
         'moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',           // 1715
         function () {                                                                                                 // 1716
             var other = local__createLocal.apply(null, arguments);                                                    // 1717
             if (this.isValid() && other.isValid()) {                                                                  // 1718
                 return other < this ? this : other;                                                                   // 1719
             } else {                                                                                                  // 1720
                 return valid__createInvalid();                                                                        // 1721
             }                                                                                                         // 1722
         }                                                                                                             // 1723
     );                                                                                                                // 1724
                                                                                                                       // 1725
    var prototypeMax = deprecate(                                                                                      // 1726
        'moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',            // 1727
        function () {                                                                                                  // 1728
            var other = local__createLocal.apply(null, arguments);                                                     // 1729
            if (this.isValid() && other.isValid()) {                                                                   // 1730
                return other > this ? this : other;                                                                    // 1731
            } else {                                                                                                   // 1732
                return valid__createInvalid();                                                                         // 1733
            }                                                                                                          // 1734
        }                                                                                                              // 1735
    );                                                                                                                 // 1736
                                                                                                                       // 1737
    // Pick a moment m from moments so that m[fn](other) is true for all                                               // 1738
    // other. This relies on the function fn to be transitive.                                                         // 1739
    //                                                                                                                 // 1740
    // moments should either be an array of moment objects or an array, whose                                          // 1741
    // first element is an array of moment objects.                                                                    // 1742
    function pickBy(fn, moments) {                                                                                     // 1743
        var res, i;                                                                                                    // 1744
        if (moments.length === 1 && isArray(moments[0])) {                                                             // 1745
            moments = moments[0];                                                                                      // 1746
        }                                                                                                              // 1747
        if (!moments.length) {                                                                                         // 1748
            return local__createLocal();                                                                               // 1749
        }                                                                                                              // 1750
        res = moments[0];                                                                                              // 1751
        for (i = 1; i < moments.length; ++i) {                                                                         // 1752
            if (!moments[i].isValid() || moments[i][fn](res)) {                                                        // 1753
                res = moments[i];                                                                                      // 1754
            }                                                                                                          // 1755
        }                                                                                                              // 1756
        return res;                                                                                                    // 1757
    }                                                                                                                  // 1758
                                                                                                                       // 1759
    // TODO: Use [].sort instead?                                                                                      // 1760
    function min () {                                                                                                  // 1761
        var args = [].slice.call(arguments, 0);                                                                        // 1762
                                                                                                                       // 1763
        return pickBy('isBefore', args);                                                                               // 1764
    }                                                                                                                  // 1765
                                                                                                                       // 1766
    function max () {                                                                                                  // 1767
        var args = [].slice.call(arguments, 0);                                                                        // 1768
                                                                                                                       // 1769
        return pickBy('isAfter', args);                                                                                // 1770
    }                                                                                                                  // 1771
                                                                                                                       // 1772
    var now = function () {                                                                                            // 1773
        return Date.now ? Date.now() : +(new Date());                                                                  // 1774
    };                                                                                                                 // 1775
                                                                                                                       // 1776
    function Duration (duration) {                                                                                     // 1777
        var normalizedInput = normalizeObjectUnits(duration),                                                          // 1778
            years = normalizedInput.year || 0,                                                                         // 1779
            quarters = normalizedInput.quarter || 0,                                                                   // 1780
            months = normalizedInput.month || 0,                                                                       // 1781
            weeks = normalizedInput.week || 0,                                                                         // 1782
            days = normalizedInput.day || 0,                                                                           // 1783
            hours = normalizedInput.hour || 0,                                                                         // 1784
            minutes = normalizedInput.minute || 0,                                                                     // 1785
            seconds = normalizedInput.second || 0,                                                                     // 1786
            milliseconds = normalizedInput.millisecond || 0;                                                           // 1787
                                                                                                                       // 1788
        // representation for dateAddRemove                                                                            // 1789
        this._milliseconds = +milliseconds +                                                                           // 1790
            seconds * 1e3 + // 1000                                                                                    // 1791
            minutes * 6e4 + // 1000 * 60                                                                               // 1792
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a                                                // 1794
        // day when working around DST, we need to store them separately                                               // 1795
        this._days = +days +                                                                                           // 1796
            weeks * 7;                                                                                                 // 1797
        // It is impossible translate months into days without knowing                                                 // 1798
        // which months you are are talking about, so we have to store                                                 // 1799
        // it separately.                                                                                              // 1800
        this._months = +months +                                                                                       // 1801
            quarters * 3 +                                                                                             // 1802
            years * 12;                                                                                                // 1803
                                                                                                                       // 1804
        this._data = {};                                                                                               // 1805
                                                                                                                       // 1806
        this._locale = locale_locales__getLocale();                                                                    // 1807
                                                                                                                       // 1808
        this._bubble();                                                                                                // 1809
    }                                                                                                                  // 1810
                                                                                                                       // 1811
    function isDuration (obj) {                                                                                        // 1812
        return obj instanceof Duration;                                                                                // 1813
    }                                                                                                                  // 1814
                                                                                                                       // 1815
    // FORMATTING                                                                                                      // 1816
                                                                                                                       // 1817
    function offset (token, separator) {                                                                               // 1818
        addFormatToken(token, 0, 0, function () {                                                                      // 1819
            var offset = this.utcOffset();                                                                             // 1820
            var sign = '+';                                                                                            // 1821
            if (offset < 0) {                                                                                          // 1822
                offset = -offset;                                                                                      // 1823
                sign = '-';                                                                                            // 1824
            }                                                                                                          // 1825
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                     // 1826
        });                                                                                                            // 1827
    }                                                                                                                  // 1828
                                                                                                                       // 1829
    offset('Z', ':');                                                                                                  // 1830
    offset('ZZ', '');                                                                                                  // 1831
                                                                                                                       // 1832
    // PARSING                                                                                                         // 1833
                                                                                                                       // 1834
    addRegexToken('Z',  matchShortOffset);                                                                             // 1835
    addRegexToken('ZZ', matchShortOffset);                                                                             // 1836
    addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                       // 1837
        config._useUTC = true;                                                                                         // 1838
        config._tzm = offsetFromString(matchShortOffset, input);                                                       // 1839
    });                                                                                                                // 1840
                                                                                                                       // 1841
    // HELPERS                                                                                                         // 1842
                                                                                                                       // 1843
    // timezone chunker                                                                                                // 1844
    // '+10:00' > ['10',  '00']                                                                                        // 1845
    // '-1530'  > ['-15', '30']                                                                                        // 1846
    var chunkOffset = /([\+\-]|\d\d)/gi;                                                                               // 1847
                                                                                                                       // 1848
    function offsetFromString(matcher, string) {                                                                       // 1849
        var matches = ((string || '').match(matcher) || []);                                                           // 1850
        var chunk   = matches[matches.length - 1] || [];                                                               // 1851
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                  // 1852
        var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                              // 1853
                                                                                                                       // 1854
        return parts[0] === '+' ? minutes : -minutes;                                                                  // 1855
    }                                                                                                                  // 1856
                                                                                                                       // 1857
    // Return a moment from input, that is local/utc/zone equivalent to model.                                         // 1858
    function cloneWithOffset(input, model) {                                                                           // 1859
        var res, diff;                                                                                                 // 1860
        if (model._isUTC) {                                                                                            // 1861
            res = model.clone();                                                                                       // 1862
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.                                                    // 1864
            res._d.setTime(res._d.valueOf() + diff);                                                                   // 1865
            utils_hooks__hooks.updateOffset(res, false);                                                               // 1866
            return res;                                                                                                // 1867
        } else {                                                                                                       // 1868
            return local__createLocal(input).local();                                                                  // 1869
        }                                                                                                              // 1870
    }                                                                                                                  // 1871
                                                                                                                       // 1872
    function getDateOffset (m) {                                                                                       // 1873
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                              // 1874
        // https://github.com/moment/moment/pull/1871                                                                  // 1875
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                        // 1876
    }                                                                                                                  // 1877
                                                                                                                       // 1878
    // HOOKS                                                                                                           // 1879
                                                                                                                       // 1880
    // This function will be called whenever a moment is mutated.                                                      // 1881
    // It is intended to keep the offset in sync with the timezone.                                                    // 1882
    utils_hooks__hooks.updateOffset = function () {};                                                                  // 1883
                                                                                                                       // 1884
    // MOMENTS                                                                                                         // 1885
                                                                                                                       // 1886
    // keepLocalTime = true means only change the timezone, without                                                    // 1887
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                            // 1888
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                             // 1889
    // +0200, so we adjust the time as needed, to be valid.                                                            // 1890
    //                                                                                                                 // 1891
    // Keeping the time actually adds/subtracts (one hour)                                                             // 1892
    // from the actual represented time. That is why we call updateOffset                                              // 1893
    // a second time. In case it wants us to change the offset again                                                   // 1894
    // _changeInProgress == true case, then we have to adjust, because                                                 // 1895
    // there is no such time in the given timezone.                                                                    // 1896
    function getSetOffset (input, keepLocalTime) {                                                                     // 1897
        var offset = this._offset || 0,                                                                                // 1898
            localAdjust;                                                                                               // 1899
        if (!this.isValid()) {                                                                                         // 1900
            return input != null ? this : NaN;                                                                         // 1901
        }                                                                                                              // 1902
        if (input != null) {                                                                                           // 1903
            if (typeof input === 'string') {                                                                           // 1904
                input = offsetFromString(matchShortOffset, input);                                                     // 1905
            } else if (Math.abs(input) < 16) {                                                                         // 1906
                input = input * 60;                                                                                    // 1907
            }                                                                                                          // 1908
            if (!this._isUTC && keepLocalTime) {                                                                       // 1909
                localAdjust = getDateOffset(this);                                                                     // 1910
            }                                                                                                          // 1911
            this._offset = input;                                                                                      // 1912
            this._isUTC = true;                                                                                        // 1913
            if (localAdjust != null) {                                                                                 // 1914
                this.add(localAdjust, 'm');                                                                            // 1915
            }                                                                                                          // 1916
            if (offset !== input) {                                                                                    // 1917
                if (!keepLocalTime || this._changeInProgress) {                                                        // 1918
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);            // 1919
                } else if (!this._changeInProgress) {                                                                  // 1920
                    this._changeInProgress = true;                                                                     // 1921
                    utils_hooks__hooks.updateOffset(this, true);                                                       // 1922
                    this._changeInProgress = null;                                                                     // 1923
                }                                                                                                      // 1924
            }                                                                                                          // 1925
            return this;                                                                                               // 1926
        } else {                                                                                                       // 1927
            return this._isUTC ? offset : getDateOffset(this);                                                         // 1928
        }                                                                                                              // 1929
    }                                                                                                                  // 1930
                                                                                                                       // 1931
    function getSetZone (input, keepLocalTime) {                                                                       // 1932
        if (input != null) {                                                                                           // 1933
            if (typeof input !== 'string') {                                                                           // 1934
                input = -input;                                                                                        // 1935
            }                                                                                                          // 1936
                                                                                                                       // 1937
            this.utcOffset(input, keepLocalTime);                                                                      // 1938
                                                                                                                       // 1939
            return this;                                                                                               // 1940
        } else {                                                                                                       // 1941
            return -this.utcOffset();                                                                                  // 1942
        }                                                                                                              // 1943
    }                                                                                                                  // 1944
                                                                                                                       // 1945
    function setOffsetToUTC (keepLocalTime) {                                                                          // 1946
        return this.utcOffset(0, keepLocalTime);                                                                       // 1947
    }                                                                                                                  // 1948
                                                                                                                       // 1949
    function setOffsetToLocal (keepLocalTime) {                                                                        // 1950
        if (this._isUTC) {                                                                                             // 1951
            this.utcOffset(0, keepLocalTime);                                                                          // 1952
            this._isUTC = false;                                                                                       // 1953
                                                                                                                       // 1954
            if (keepLocalTime) {                                                                                       // 1955
                this.subtract(getDateOffset(this), 'm');                                                               // 1956
            }                                                                                                          // 1957
        }                                                                                                              // 1958
        return this;                                                                                                   // 1959
    }                                                                                                                  // 1960
                                                                                                                       // 1961
    function setOffsetToParsedOffset () {                                                                              // 1962
        if (this._tzm) {                                                                                               // 1963
            this.utcOffset(this._tzm);                                                                                 // 1964
        } else if (typeof this._i === 'string') {                                                                      // 1965
            this.utcOffset(offsetFromString(matchOffset, this._i));                                                    // 1966
        }                                                                                                              // 1967
        return this;                                                                                                   // 1968
    }                                                                                                                  // 1969
                                                                                                                       // 1970
    function hasAlignedHourOffset (input) {                                                                            // 1971
        if (!this.isValid()) {                                                                                         // 1972
            return false;                                                                                              // 1973
        }                                                                                                              // 1974
        input = input ? local__createLocal(input).utcOffset() : 0;                                                     // 1975
                                                                                                                       // 1976
        return (this.utcOffset() - input) % 60 === 0;                                                                  // 1977
    }                                                                                                                  // 1978
                                                                                                                       // 1979
    function isDaylightSavingTime () {                                                                                 // 1980
        return (                                                                                                       // 1981
            this.utcOffset() > this.clone().month(0).utcOffset() ||                                                    // 1982
            this.utcOffset() > this.clone().month(5).utcOffset()                                                       // 1983
        );                                                                                                             // 1984
    }                                                                                                                  // 1985
                                                                                                                       // 1986
    function isDaylightSavingTimeShifted () {                                                                          // 1987
        if (!isUndefined(this._isDSTShifted)) {                                                                        // 1988
            return this._isDSTShifted;                                                                                 // 1989
        }                                                                                                              // 1990
                                                                                                                       // 1991
        var c = {};                                                                                                    // 1992
                                                                                                                       // 1993
        copyConfig(c, this);                                                                                           // 1994
        c = prepareConfig(c);                                                                                          // 1995
                                                                                                                       // 1996
        if (c._a) {                                                                                                    // 1997
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);                             // 1998
            this._isDSTShifted = this.isValid() &&                                                                     // 1999
                compareArrays(c._a, other.toArray()) > 0;                                                              // 2000
        } else {                                                                                                       // 2001
            this._isDSTShifted = false;                                                                                // 2002
        }                                                                                                              // 2003
                                                                                                                       // 2004
        return this._isDSTShifted;                                                                                     // 2005
    }                                                                                                                  // 2006
                                                                                                                       // 2007
    function isLocal () {                                                                                              // 2008
        return this.isValid() ? !this._isUTC : false;                                                                  // 2009
    }                                                                                                                  // 2010
                                                                                                                       // 2011
    function isUtcOffset () {                                                                                          // 2012
        return this.isValid() ? this._isUTC : false;                                                                   // 2013
    }                                                                                                                  // 2014
                                                                                                                       // 2015
    function isUtc () {                                                                                                // 2016
        return this.isValid() ? this._isUTC && this._offset === 0 : false;                                             // 2017
    }                                                                                                                  // 2018
                                                                                                                       // 2019
    // ASP.NET json date format regex                                                                                  // 2020
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;                                   // 2021
                                                                                                                       // 2022
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                       // 2023
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                       // 2024
    // and further modified to allow for strings containing both week and day                                          // 2025
    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                                                                                                                       // 2027
    function create__createDuration (input, key) {                                                                     // 2028
        var duration = input,                                                                                          // 2029
            // matching against regexp is expensive, do it on demand                                                   // 2030
            match = null,                                                                                              // 2031
            sign,                                                                                                      // 2032
            ret,                                                                                                       // 2033
            diffRes;                                                                                                   // 2034
                                                                                                                       // 2035
        if (isDuration(input)) {                                                                                       // 2036
            duration = {                                                                                               // 2037
                ms : input._milliseconds,                                                                              // 2038
                d  : input._days,                                                                                      // 2039
                M  : input._months                                                                                     // 2040
            };                                                                                                         // 2041
        } else if (typeof input === 'number') {                                                                        // 2042
            duration = {};                                                                                             // 2043
            if (key) {                                                                                                 // 2044
                duration[key] = input;                                                                                 // 2045
            } else {                                                                                                   // 2046
                duration.milliseconds = input;                                                                         // 2047
            }                                                                                                          // 2048
        } else if (!!(match = aspNetRegex.exec(input))) {                                                              // 2049
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 2050
            duration = {                                                                                               // 2051
                y  : 0,                                                                                                // 2052
                d  : toInt(match[DATE])        * sign,                                                                 // 2053
                h  : toInt(match[HOUR])        * sign,                                                                 // 2054
                m  : toInt(match[MINUTE])      * sign,                                                                 // 2055
                s  : toInt(match[SECOND])      * sign,                                                                 // 2056
                ms : toInt(match[MILLISECOND]) * sign                                                                  // 2057
            };                                                                                                         // 2058
        } else if (!!(match = isoRegex.exec(input))) {                                                                 // 2059
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 2060
            duration = {                                                                                               // 2061
                y : parseIso(match[2], sign),                                                                          // 2062
                M : parseIso(match[3], sign),                                                                          // 2063
                w : parseIso(match[4], sign),                                                                          // 2064
                d : parseIso(match[5], sign),                                                                          // 2065
                h : parseIso(match[6], sign),                                                                          // 2066
                m : parseIso(match[7], sign),                                                                          // 2067
                s : parseIso(match[8], sign)                                                                           // 2068
            };                                                                                                         // 2069
        } else if (duration == null) {// checks for null or undefined                                                  // 2070
            duration = {};                                                                                             // 2071
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                         // 2072
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));           // 2073
                                                                                                                       // 2074
            duration = {};                                                                                             // 2075
            duration.ms = diffRes.milliseconds;                                                                        // 2076
            duration.M = diffRes.months;                                                                               // 2077
        }                                                                                                              // 2078
                                                                                                                       // 2079
        ret = new Duration(duration);                                                                                  // 2080
                                                                                                                       // 2081
        if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                       // 2082
            ret._locale = input._locale;                                                                               // 2083
        }                                                                                                              // 2084
                                                                                                                       // 2085
        return ret;                                                                                                    // 2086
    }                                                                                                                  // 2087
                                                                                                                       // 2088
    create__createDuration.fn = Duration.prototype;                                                                    // 2089
                                                                                                                       // 2090
    function parseIso (inp, sign) {                                                                                    // 2091
        // We'd normally use ~~inp for this, but unfortunately it also                                                 // 2092
        // converts floats to ints.                                                                                    // 2093
        // inp may be undefined, so careful calling replace on it.                                                     // 2094
        var res = inp && parseFloat(inp.replace(',', '.'));                                                            // 2095
        // apply sign while we're at it                                                                                // 2096
        return (isNaN(res) ? 0 : res) * sign;                                                                          // 2097
    }                                                                                                                  // 2098
                                                                                                                       // 2099
    function positiveMomentsDifference(base, other) {                                                                  // 2100
        var res = {milliseconds: 0, months: 0};                                                                        // 2101
                                                                                                                       // 2102
        res.months = other.month() - base.month() +                                                                    // 2103
            (other.year() - base.year()) * 12;                                                                         // 2104
        if (base.clone().add(res.months, 'M').isAfter(other)) {                                                        // 2105
            --res.months;                                                                                              // 2106
        }                                                                                                              // 2107
                                                                                                                       // 2108
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                              // 2109
                                                                                                                       // 2110
        return res;                                                                                                    // 2111
    }                                                                                                                  // 2112
                                                                                                                       // 2113
    function momentsDifference(base, other) {                                                                          // 2114
        var res;                                                                                                       // 2115
        if (!(base.isValid() && other.isValid())) {                                                                    // 2116
            return {milliseconds: 0, months: 0};                                                                       // 2117
        }                                                                                                              // 2118
                                                                                                                       // 2119
        other = cloneWithOffset(other, base);                                                                          // 2120
        if (base.isBefore(other)) {                                                                                    // 2121
            res = positiveMomentsDifference(base, other);                                                              // 2122
        } else {                                                                                                       // 2123
            res = positiveMomentsDifference(other, base);                                                              // 2124
            res.milliseconds = -res.milliseconds;                                                                      // 2125
            res.months = -res.months;                                                                                  // 2126
        }                                                                                                              // 2127
                                                                                                                       // 2128
        return res;                                                                                                    // 2129
    }                                                                                                                  // 2130
                                                                                                                       // 2131
    function absRound (number) {                                                                                       // 2132
        if (number < 0) {                                                                                              // 2133
            return Math.round(-1 * number) * -1;                                                                       // 2134
        } else {                                                                                                       // 2135
            return Math.round(number);                                                                                 // 2136
        }                                                                                                              // 2137
    }                                                                                                                  // 2138
                                                                                                                       // 2139
    // TODO: remove 'name' arg after deprecation is removed                                                            // 2140
    function createAdder(direction, name) {                                                                            // 2141
        return function (val, period) {                                                                                // 2142
            var dur, tmp;                                                                                              // 2143
            //invert the arguments, but complain about it                                                              // 2144
            if (period !== null && !isNaN(+period)) {                                                                  // 2145
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;                                                                 // 2147
            }                                                                                                          // 2148
                                                                                                                       // 2149
            val = typeof val === 'string' ? +val : val;                                                                // 2150
            dur = create__createDuration(val, period);                                                                 // 2151
            add_subtract__addSubtract(this, dur, direction);                                                           // 2152
            return this;                                                                                               // 2153
        };                                                                                                             // 2154
    }                                                                                                                  // 2155
                                                                                                                       // 2156
    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {                                       // 2157
        var milliseconds = duration._milliseconds,                                                                     // 2158
            days = absRound(duration._days),                                                                           // 2159
            months = absRound(duration._months);                                                                       // 2160
                                                                                                                       // 2161
        if (!mom.isValid()) {                                                                                          // 2162
            // No op                                                                                                   // 2163
            return;                                                                                                    // 2164
        }                                                                                                              // 2165
                                                                                                                       // 2166
        updateOffset = updateOffset == null ? true : updateOffset;                                                     // 2167
                                                                                                                       // 2168
        if (milliseconds) {                                                                                            // 2169
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);                                                // 2170
        }                                                                                                              // 2171
        if (days) {                                                                                                    // 2172
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);                                    // 2173
        }                                                                                                              // 2174
        if (months) {                                                                                                  // 2175
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);                                             // 2176
        }                                                                                                              // 2177
        if (updateOffset) {                                                                                            // 2178
            utils_hooks__hooks.updateOffset(mom, days || months);                                                      // 2179
        }                                                                                                              // 2180
    }                                                                                                                  // 2181
                                                                                                                       // 2182
    var add_subtract__add      = createAdder(1, 'add');                                                                // 2183
    var add_subtract__subtract = createAdder(-1, 'subtract');                                                          // 2184
                                                                                                                       // 2185
    function moment_calendar__calendar (time, formats) {                                                               // 2186
        // We want to compare the start of today, vs this.                                                             // 2187
        // Getting start-of-today depends on whether we're local/utc/offset or not.                                    // 2188
        var now = time || local__createLocal(),                                                                        // 2189
            sod = cloneWithOffset(now, this).startOf('day'),                                                           // 2190
            diff = this.diff(sod, 'days', true),                                                                       // 2191
            format = diff < -6 ? 'sameElse' :                                                                          // 2192
                diff < -1 ? 'lastWeek' :                                                                               // 2193
                diff < 0 ? 'lastDay' :                                                                                 // 2194
                diff < 1 ? 'sameDay' :                                                                                 // 2195
                diff < 2 ? 'nextDay' :                                                                                 // 2196
                diff < 7 ? 'nextWeek' : 'sameElse';                                                                    // 2197
                                                                                                                       // 2198
        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);                   // 2199
                                                                                                                       // 2200
        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));               // 2201
    }                                                                                                                  // 2202
                                                                                                                       // 2203
    function clone () {                                                                                                // 2204
        return new Moment(this);                                                                                       // 2205
    }                                                                                                                  // 2206
                                                                                                                       // 2207
    function isAfter (input, units) {                                                                                  // 2208
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 2209
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2210
            return false;                                                                                              // 2211
        }                                                                                                              // 2212
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 2213
        if (units === 'millisecond') {                                                                                 // 2214
            return this.valueOf() > localInput.valueOf();                                                              // 2215
        } else {                                                                                                       // 2216
            return localInput.valueOf() < this.clone().startOf(units).valueOf();                                       // 2217
        }                                                                                                              // 2218
    }                                                                                                                  // 2219
                                                                                                                       // 2220
    function isBefore (input, units) {                                                                                 // 2221
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 2222
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2223
            return false;                                                                                              // 2224
        }                                                                                                              // 2225
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 2226
        if (units === 'millisecond') {                                                                                 // 2227
            return this.valueOf() < localInput.valueOf();                                                              // 2228
        } else {                                                                                                       // 2229
            return this.clone().endOf(units).valueOf() < localInput.valueOf();                                         // 2230
        }                                                                                                              // 2231
    }                                                                                                                  // 2232
                                                                                                                       // 2233
    function isBetween (from, to, units, inclusivity) {                                                                // 2234
        inclusivity = inclusivity || '()';                                                                             // 2235
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&                   // 2236
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));                            // 2237
    }                                                                                                                  // 2238
                                                                                                                       // 2239
    function isSame (input, units) {                                                                                   // 2240
        var localInput = isMoment(input) ? input : local__createLocal(input),                                          // 2241
            inputMs;                                                                                                   // 2242
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2243
            return false;                                                                                              // 2244
        }                                                                                                              // 2245
        units = normalizeUnits(units || 'millisecond');                                                                // 2246
        if (units === 'millisecond') {                                                                                 // 2247
            return this.valueOf() === localInput.valueOf();                                                            // 2248
        } else {                                                                                                       // 2249
            inputMs = localInput.valueOf();                                                                            // 2250
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }                                                                                                              // 2252
    }                                                                                                                  // 2253
                                                                                                                       // 2254
    function isSameOrAfter (input, units) {                                                                            // 2255
        return this.isSame(input, units) || this.isAfter(input,units);                                                 // 2256
    }                                                                                                                  // 2257
                                                                                                                       // 2258
    function isSameOrBefore (input, units) {                                                                           // 2259
        return this.isSame(input, units) || this.isBefore(input,units);                                                // 2260
    }                                                                                                                  // 2261
                                                                                                                       // 2262
    function diff (input, units, asFloat) {                                                                            // 2263
        var that,                                                                                                      // 2264
            zoneDelta,                                                                                                 // 2265
            delta, output;                                                                                             // 2266
                                                                                                                       // 2267
        if (!this.isValid()) {                                                                                         // 2268
            return NaN;                                                                                                // 2269
        }                                                                                                              // 2270
                                                                                                                       // 2271
        that = cloneWithOffset(input, this);                                                                           // 2272
                                                                                                                       // 2273
        if (!that.isValid()) {                                                                                         // 2274
            return NaN;                                                                                                // 2275
        }                                                                                                              // 2276
                                                                                                                       // 2277
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;                                                       // 2278
                                                                                                                       // 2279
        units = normalizeUnits(units);                                                                                 // 2280
                                                                                                                       // 2281
        if (units === 'year' || units === 'month' || units === 'quarter') {                                            // 2282
            output = monthDiff(this, that);                                                                            // 2283
            if (units === 'quarter') {                                                                                 // 2284
                output = output / 3;                                                                                   // 2285
            } else if (units === 'year') {                                                                             // 2286
                output = output / 12;                                                                                  // 2287
            }                                                                                                          // 2288
        } else {                                                                                                       // 2289
            delta = this - that;                                                                                       // 2290
            output = units === 'second' ? delta / 1e3 : // 1000                                                        // 2291
                units === 'minute' ? delta / 6e4 : // 1000 * 60                                                        // 2292
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60                                                    // 2293
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst                     // 2294
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst               // 2295
                delta;                                                                                                 // 2296
        }                                                                                                              // 2297
        return asFloat ? output : absFloor(output);                                                                    // 2298
    }                                                                                                                  // 2299
                                                                                                                       // 2300
    function monthDiff (a, b) {                                                                                        // 2301
        // difference in months                                                                                        // 2302
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                   // 2303
            // b is in (anchor - 1 month, anchor + 1 month)                                                            // 2304
            anchor = a.clone().add(wholeMonthDiff, 'months'),                                                          // 2305
            anchor2, adjust;                                                                                           // 2306
                                                                                                                       // 2307
        if (b - anchor < 0) {                                                                                          // 2308
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                     // 2309
            // linear across the month                                                                                 // 2310
            adjust = (b - anchor) / (anchor - anchor2);                                                                // 2311
        } else {                                                                                                       // 2312
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                     // 2313
            // linear across the month                                                                                 // 2314
            adjust = (b - anchor) / (anchor2 - anchor);                                                                // 2315
        }                                                                                                              // 2316
                                                                                                                       // 2317
        //check for negative zero, return zero if negative zero                                                        // 2318
        return -(wholeMonthDiff + adjust) || 0;                                                                        // 2319
    }                                                                                                                  // 2320
                                                                                                                       // 2321
    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                         // 2322
    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';                                                    // 2323
                                                                                                                       // 2324
    function toString () {                                                                                             // 2325
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                   // 2326
    }                                                                                                                  // 2327
                                                                                                                       // 2328
    function moment_format__toISOString () {                                                                           // 2329
        var m = this.clone().utc();                                                                                    // 2330
        if (0 < m.year() && m.year() <= 9999) {                                                                        // 2331
            if (isFunction(Date.prototype.toISOString)) {                                                              // 2332
                // native implementation is ~50x faster, use it when we can                                            // 2333
                return this.toDate().toISOString();                                                                    // 2334
            } else {                                                                                                   // 2335
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                // 2336
            }                                                                                                          // 2337
        } else {                                                                                                       // 2338
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                  // 2339
        }                                                                                                              // 2340
    }                                                                                                                  // 2341
                                                                                                                       // 2342
    function format (inputString) {                                                                                    // 2343
        if (!inputString) {                                                                                            // 2344
            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;       // 2345
        }                                                                                                              // 2346
        var output = formatMoment(this, inputString);                                                                  // 2347
        return this.localeData().postformat(output);                                                                   // 2348
    }                                                                                                                  // 2349
                                                                                                                       // 2350
    function from (time, withoutSuffix) {                                                                              // 2351
        if (this.isValid() &&                                                                                          // 2352
                ((isMoment(time) && time.isValid()) ||                                                                 // 2353
                 local__createLocal(time).isValid())) {                                                                // 2354
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);      // 2355
        } else {                                                                                                       // 2356
            return this.localeData().invalidDate();                                                                    // 2357
        }                                                                                                              // 2358
    }                                                                                                                  // 2359
                                                                                                                       // 2360
    function fromNow (withoutSuffix) {                                                                                 // 2361
        return this.from(local__createLocal(), withoutSuffix);                                                         // 2362
    }                                                                                                                  // 2363
                                                                                                                       // 2364
    function to (time, withoutSuffix) {                                                                                // 2365
        if (this.isValid() &&                                                                                          // 2366
                ((isMoment(time) && time.isValid()) ||                                                                 // 2367
                 local__createLocal(time).isValid())) {                                                                // 2368
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);      // 2369
        } else {                                                                                                       // 2370
            return this.localeData().invalidDate();                                                                    // 2371
        }                                                                                                              // 2372
    }                                                                                                                  // 2373
                                                                                                                       // 2374
    function toNow (withoutSuffix) {                                                                                   // 2375
        return this.to(local__createLocal(), withoutSuffix);                                                           // 2376
    }                                                                                                                  // 2377
                                                                                                                       // 2378
    // If passed a locale key, it will set the locale for this                                                         // 2379
    // instance.  Otherwise, it will return the locale configuration                                                   // 2380
    // variables for this instance.                                                                                    // 2381
    function locale (key) {                                                                                            // 2382
        var newLocaleData;                                                                                             // 2383
                                                                                                                       // 2384
        if (key === undefined) {                                                                                       // 2385
            return this._locale._abbr;                                                                                 // 2386
        } else {                                                                                                       // 2387
            newLocaleData = locale_locales__getLocale(key);                                                            // 2388
            if (newLocaleData != null) {                                                                               // 2389
                this._locale = newLocaleData;                                                                          // 2390
            }                                                                                                          // 2391
            return this;                                                                                               // 2392
        }                                                                                                              // 2393
    }                                                                                                                  // 2394
                                                                                                                       // 2395
    var lang = deprecate(                                                                                              // 2396
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {                                                                                               // 2398
            if (key === undefined) {                                                                                   // 2399
                return this.localeData();                                                                              // 2400
            } else {                                                                                                   // 2401
                return this.locale(key);                                                                               // 2402
            }                                                                                                          // 2403
        }                                                                                                              // 2404
    );                                                                                                                 // 2405
                                                                                                                       // 2406
    function localeData () {                                                                                           // 2407
        return this._locale;                                                                                           // 2408
    }                                                                                                                  // 2409
                                                                                                                       // 2410
    function startOf (units) {                                                                                         // 2411
        units = normalizeUnits(units);                                                                                 // 2412
        // the following switch intentionally omits break keywords                                                     // 2413
        // to utilize falling through the cases.                                                                       // 2414
        switch (units) {                                                                                               // 2415
        case 'year':                                                                                                   // 2416
            this.month(0);                                                                                             // 2417
            /* falls through */                                                                                        // 2418
        case 'quarter':                                                                                                // 2419
        case 'month':                                                                                                  // 2420
            this.date(1);                                                                                              // 2421
            /* falls through */                                                                                        // 2422
        case 'week':                                                                                                   // 2423
        case 'isoWeek':                                                                                                // 2424
        case 'day':                                                                                                    // 2425
        case 'date':                                                                                                   // 2426
            this.hours(0);                                                                                             // 2427
            /* falls through */                                                                                        // 2428
        case 'hour':                                                                                                   // 2429
            this.minutes(0);                                                                                           // 2430
            /* falls through */                                                                                        // 2431
        case 'minute':                                                                                                 // 2432
            this.seconds(0);                                                                                           // 2433
            /* falls through */                                                                                        // 2434
        case 'second':                                                                                                 // 2435
            this.milliseconds(0);                                                                                      // 2436
        }                                                                                                              // 2437
                                                                                                                       // 2438
        // weeks are a special case                                                                                    // 2439
        if (units === 'week') {                                                                                        // 2440
            this.weekday(0);                                                                                           // 2441
        }                                                                                                              // 2442
        if (units === 'isoWeek') {                                                                                     // 2443
            this.isoWeekday(1);                                                                                        // 2444
        }                                                                                                              // 2445
                                                                                                                       // 2446
        // quarters are also special                                                                                   // 2447
        if (units === 'quarter') {                                                                                     // 2448
            this.month(Math.floor(this.month() / 3) * 3);                                                              // 2449
        }                                                                                                              // 2450
                                                                                                                       // 2451
        return this;                                                                                                   // 2452
    }                                                                                                                  // 2453
                                                                                                                       // 2454
    function endOf (units) {                                                                                           // 2455
        units = normalizeUnits(units);                                                                                 // 2456
        if (units === undefined || units === 'millisecond') {                                                          // 2457
            return this;                                                                                               // 2458
        }                                                                                                              // 2459
                                                                                                                       // 2460
        // 'date' is an alias for 'day', so it should be considered as such.                                           // 2461
        if (units === 'date') {                                                                                        // 2462
            units = 'day';                                                                                             // 2463
        }                                                                                                              // 2464
                                                                                                                       // 2465
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                   // 2466
    }                                                                                                                  // 2467
                                                                                                                       // 2468
    function to_type__valueOf () {                                                                                     // 2469
        return this._d.valueOf() - ((this._offset || 0) * 60000);                                                      // 2470
    }                                                                                                                  // 2471
                                                                                                                       // 2472
    function unix () {                                                                                                 // 2473
        return Math.floor(this.valueOf() / 1000);                                                                      // 2474
    }                                                                                                                  // 2475
                                                                                                                       // 2476
    function toDate () {                                                                                               // 2477
        return this._offset ? new Date(this.valueOf()) : this._d;                                                      // 2478
    }                                                                                                                  // 2479
                                                                                                                       // 2480
    function toArray () {                                                                                              // 2481
        var m = this;                                                                                                  // 2482
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                     // 2483
    }                                                                                                                  // 2484
                                                                                                                       // 2485
    function toObject () {                                                                                             // 2486
        var m = this;                                                                                                  // 2487
        return {                                                                                                       // 2488
            years: m.year(),                                                                                           // 2489
            months: m.month(),                                                                                         // 2490
            date: m.date(),                                                                                            // 2491
            hours: m.hours(),                                                                                          // 2492
            minutes: m.minutes(),                                                                                      // 2493
            seconds: m.seconds(),                                                                                      // 2494
            milliseconds: m.milliseconds()                                                                             // 2495
        };                                                                                                             // 2496
    }                                                                                                                  // 2497
                                                                                                                       // 2498
    function toJSON () {                                                                                               // 2499
        // new Date(NaN).toJSON() === null                                                                             // 2500
        return this.isValid() ? this.toISOString() : null;                                                             // 2501
    }                                                                                                                  // 2502
                                                                                                                       // 2503
    function moment_valid__isValid () {                                                                                // 2504
        return valid__isValid(this);                                                                                   // 2505
    }                                                                                                                  // 2506
                                                                                                                       // 2507
    function parsingFlags () {                                                                                         // 2508
        return extend({}, getParsingFlags(this));                                                                      // 2509
    }                                                                                                                  // 2510
                                                                                                                       // 2511
    function invalidAt () {                                                                                            // 2512
        return getParsingFlags(this).overflow;                                                                         // 2513
    }                                                                                                                  // 2514
                                                                                                                       // 2515
    function creationData() {                                                                                          // 2516
        return {                                                                                                       // 2517
            input: this._i,                                                                                            // 2518
            format: this._f,                                                                                           // 2519
            locale: this._locale,                                                                                      // 2520
            isUTC: this._isUTC,                                                                                        // 2521
            strict: this._strict                                                                                       // 2522
        };                                                                                                             // 2523
    }                                                                                                                  // 2524
                                                                                                                       // 2525
    // FORMATTING                                                                                                      // 2526
                                                                                                                       // 2527
    addFormatToken(0, ['gg', 2], 0, function () {                                                                      // 2528
        return this.weekYear() % 100;                                                                                  // 2529
    });                                                                                                                // 2530
                                                                                                                       // 2531
    addFormatToken(0, ['GG', 2], 0, function () {                                                                      // 2532
        return this.isoWeekYear() % 100;                                                                               // 2533
    });                                                                                                                // 2534
                                                                                                                       // 2535
    function addWeekYearFormatToken (token, getter) {                                                                  // 2536
        addFormatToken(0, [token, token.length], 0, getter);                                                           // 2537
    }                                                                                                                  // 2538
                                                                                                                       // 2539
    addWeekYearFormatToken('gggg',     'weekYear');                                                                    // 2540
    addWeekYearFormatToken('ggggg',    'weekYear');                                                                    // 2541
    addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                    // 2542
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                    // 2543
                                                                                                                       // 2544
    // ALIASES                                                                                                         // 2545
                                                                                                                       // 2546
    addUnitAlias('weekYear', 'gg');                                                                                    // 2547
    addUnitAlias('isoWeekYear', 'GG');                                                                                 // 2548
                                                                                                                       // 2549
    // PARSING                                                                                                         // 2550
                                                                                                                       // 2551
    addRegexToken('G',      matchSigned);                                                                              // 2552
    addRegexToken('g',      matchSigned);                                                                              // 2553
    addRegexToken('GG',     match1to2, match2);                                                                        // 2554
    addRegexToken('gg',     match1to2, match2);                                                                        // 2555
    addRegexToken('GGGG',   match1to4, match4);                                                                        // 2556
    addRegexToken('gggg',   match1to4, match4);                                                                        // 2557
    addRegexToken('GGGGG',  match1to6, match6);                                                                        // 2558
    addRegexToken('ggggg',  match1to6, match6);                                                                        // 2559
                                                                                                                       // 2560
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                      // 2561
        week[token.substr(0, 2)] = toInt(input);                                                                       // 2562
    });                                                                                                                // 2563
                                                                                                                       // 2564
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                            // 2565
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 2566
    });                                                                                                                // 2567
                                                                                                                       // 2568
    // MOMENTS                                                                                                         // 2569
                                                                                                                       // 2570
    function getSetWeekYear (input) {                                                                                  // 2571
        return getSetWeekYearHelper.call(this,                                                                         // 2572
                input,                                                                                                 // 2573
                this.week(),                                                                                           // 2574
                this.weekday(),                                                                                        // 2575
                this.localeData()._week.dow,                                                                           // 2576
                this.localeData()._week.doy);                                                                          // 2577
    }                                                                                                                  // 2578
                                                                                                                       // 2579
    function getSetISOWeekYear (input) {                                                                               // 2580
        return getSetWeekYearHelper.call(this,                                                                         // 2581
                input, this.isoWeek(), this.isoWeekday(), 1, 4);                                                       // 2582
    }                                                                                                                  // 2583
                                                                                                                       // 2584
    function getISOWeeksInYear () {                                                                                    // 2585
        return weeksInYear(this.year(), 1, 4);                                                                         // 2586
    }                                                                                                                  // 2587
                                                                                                                       // 2588
    function getWeeksInYear () {                                                                                       // 2589
        var weekInfo = this.localeData()._week;                                                                        // 2590
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                   // 2591
    }                                                                                                                  // 2592
                                                                                                                       // 2593
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {                                                    // 2594
        var weeksTarget;                                                                                               // 2595
        if (input == null) {                                                                                           // 2596
            return weekOfYear(this, dow, doy).year;                                                                    // 2597
        } else {                                                                                                       // 2598
            weeksTarget = weeksInYear(input, dow, doy);                                                                // 2599
            if (week > weeksTarget) {                                                                                  // 2600
                week = weeksTarget;                                                                                    // 2601
            }                                                                                                          // 2602
            return setWeekAll.call(this, input, week, weekday, dow, doy);                                              // 2603
        }                                                                                                              // 2604
    }                                                                                                                  // 2605
                                                                                                                       // 2606
    function setWeekAll(weekYear, week, weekday, dow, doy) {                                                           // 2607
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),                                     // 2608
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);                                      // 2609
                                                                                                                       // 2610
        this.year(date.getUTCFullYear());                                                                              // 2611
        this.month(date.getUTCMonth());                                                                                // 2612
        this.date(date.getUTCDate());                                                                                  // 2613
        return this;                                                                                                   // 2614
    }                                                                                                                  // 2615
                                                                                                                       // 2616
    // FORMATTING                                                                                                      // 2617
                                                                                                                       // 2618
    addFormatToken('Q', 0, 'Qo', 'quarter');                                                                           // 2619
                                                                                                                       // 2620
    // ALIASES                                                                                                         // 2621
                                                                                                                       // 2622
    addUnitAlias('quarter', 'Q');                                                                                      // 2623
                                                                                                                       // 2624
    // PARSING                                                                                                         // 2625
                                                                                                                       // 2626
    addRegexToken('Q', match1);                                                                                        // 2627
    addParseToken('Q', function (input, array) {                                                                       // 2628
        array[MONTH] = (toInt(input) - 1) * 3;                                                                         // 2629
    });                                                                                                                // 2630
                                                                                                                       // 2631
    // MOMENTS                                                                                                         // 2632
                                                                                                                       // 2633
    function getSetQuarter (input) {                                                                                   // 2634
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);     // 2635
    }                                                                                                                  // 2636
                                                                                                                       // 2637
    // FORMATTING                                                                                                      // 2638
                                                                                                                       // 2639
    addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                      // 2640
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                   // 2641
                                                                                                                       // 2642
    // ALIASES                                                                                                         // 2643
                                                                                                                       // 2644
    addUnitAlias('week', 'w');                                                                                         // 2645
    addUnitAlias('isoWeek', 'W');                                                                                      // 2646
                                                                                                                       // 2647
    // PARSING                                                                                                         // 2648
                                                                                                                       // 2649
    addRegexToken('w',  match1to2);                                                                                    // 2650
    addRegexToken('ww', match1to2, match2);                                                                            // 2651
    addRegexToken('W',  match1to2);                                                                                    // 2652
    addRegexToken('WW', match1to2, match2);                                                                            // 2653
                                                                                                                       // 2654
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                  // 2655
        week[token.substr(0, 1)] = toInt(input);                                                                       // 2656
    });                                                                                                                // 2657
                                                                                                                       // 2658
    // HELPERS                                                                                                         // 2659
                                                                                                                       // 2660
    // LOCALES                                                                                                         // 2661
                                                                                                                       // 2662
    function localeWeek (mom) {                                                                                        // 2663
        return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                   // 2664
    }                                                                                                                  // 2665
                                                                                                                       // 2666
    var defaultLocaleWeek = {                                                                                          // 2667
        dow : 0, // Sunday is the first day of the week.                                                               // 2668
        doy : 6  // The week that contains Jan 1st is the first week of the year.                                      // 2669
    };                                                                                                                 // 2670
                                                                                                                       // 2671
    function localeFirstDayOfWeek () {                                                                                 // 2672
        return this._week.dow;                                                                                         // 2673
    }                                                                                                                  // 2674
                                                                                                                       // 2675
    function localeFirstDayOfYear () {                                                                                 // 2676
        return this._week.doy;                                                                                         // 2677
    }                                                                                                                  // 2678
                                                                                                                       // 2679
    // MOMENTS                                                                                                         // 2680
                                                                                                                       // 2681
    function getSetWeek (input) {                                                                                      // 2682
        var week = this.localeData().week(this);                                                                       // 2683
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 2684
    }                                                                                                                  // 2685
                                                                                                                       // 2686
    function getSetISOWeek (input) {                                                                                   // 2687
        var week = weekOfYear(this, 1, 4).week;                                                                        // 2688
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 2689
    }                                                                                                                  // 2690
                                                                                                                       // 2691
    // FORMATTING                                                                                                      // 2692
                                                                                                                       // 2693
    addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                      // 2694
                                                                                                                       // 2695
    // ALIASES                                                                                                         // 2696
                                                                                                                       // 2697
    addUnitAlias('date', 'D');                                                                                         // 2698
                                                                                                                       // 2699
    // PARSING                                                                                                         // 2700
                                                                                                                       // 2701
    addRegexToken('D',  match1to2);                                                                                    // 2702
    addRegexToken('DD', match1to2, match2);                                                                            // 2703
    addRegexToken('Do', function (isStrict, locale) {                                                                  // 2704
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;                                          // 2705
    });                                                                                                                // 2706
                                                                                                                       // 2707
    addParseToken(['D', 'DD'], DATE);                                                                                  // 2708
    addParseToken('Do', function (input, array) {                                                                      // 2709
        array[DATE] = toInt(input.match(match1to2)[0], 10);                                                            // 2710
    });                                                                                                                // 2711
                                                                                                                       // 2712
    // MOMENTS                                                                                                         // 2713
                                                                                                                       // 2714
    var getSetDayOfMonth = makeGetSet('Date', true);                                                                   // 2715
                                                                                                                       // 2716
    // FORMATTING                                                                                                      // 2717
                                                                                                                       // 2718
    addFormatToken('d', 0, 'do', 'day');                                                                               // 2719
                                                                                                                       // 2720
    addFormatToken('dd', 0, 0, function (format) {                                                                     // 2721
        return this.localeData().weekdaysMin(this, format);                                                            // 2722
    });                                                                                                                // 2723
                                                                                                                       // 2724
    addFormatToken('ddd', 0, 0, function (format) {                                                                    // 2725
        return this.localeData().weekdaysShort(this, format);                                                          // 2726
    });                                                                                                                // 2727
                                                                                                                       // 2728
    addFormatToken('dddd', 0, 0, function (format) {                                                                   // 2729
        return this.localeData().weekdays(this, format);                                                               // 2730
    });                                                                                                                // 2731
                                                                                                                       // 2732
    addFormatToken('e', 0, 0, 'weekday');                                                                              // 2733
    addFormatToken('E', 0, 0, 'isoWeekday');                                                                           // 2734
                                                                                                                       // 2735
    // ALIASES                                                                                                         // 2736
                                                                                                                       // 2737
    addUnitAlias('day', 'd');                                                                                          // 2738
    addUnitAlias('weekday', 'e');                                                                                      // 2739
    addUnitAlias('isoWeekday', 'E');                                                                                   // 2740
                                                                                                                       // 2741
    // PARSING                                                                                                         // 2742
                                                                                                                       // 2743
    addRegexToken('d',    match1to2);                                                                                  // 2744
    addRegexToken('e',    match1to2);                                                                                  // 2745
    addRegexToken('E',    match1to2);                                                                                  // 2746
    addRegexToken('dd',   function (isStrict, locale) {                                                                // 2747
        return locale.weekdaysMinRegex(isStrict);                                                                      // 2748
    });                                                                                                                // 2749
    addRegexToken('ddd',   function (isStrict, locale) {                                                               // 2750
        return locale.weekdaysShortRegex(isStrict);                                                                    // 2751
    });                                                                                                                // 2752
    addRegexToken('dddd',   function (isStrict, locale) {                                                              // 2753
        return locale.weekdaysRegex(isStrict);                                                                         // 2754
    });                                                                                                                // 2755
                                                                                                                       // 2756
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {                                   // 2757
        var weekday = config._locale.weekdaysParse(input, token, config._strict);                                      // 2758
        // if we didn't get a weekday name, mark the date as invalid                                                   // 2759
        if (weekday != null) {                                                                                         // 2760
            week.d = weekday;                                                                                          // 2761
        } else {                                                                                                       // 2762
            getParsingFlags(config).invalidWeekday = input;                                                            // 2763
        }                                                                                                              // 2764
    });                                                                                                                // 2765
                                                                                                                       // 2766
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                         // 2767
        week[token] = toInt(input);                                                                                    // 2768
    });                                                                                                                // 2769
                                                                                                                       // 2770
    // HELPERS                                                                                                         // 2771
                                                                                                                       // 2772
    function parseWeekday(input, locale) {                                                                             // 2773
        if (typeof input !== 'string') {                                                                               // 2774
            return input;                                                                                              // 2775
        }                                                                                                              // 2776
                                                                                                                       // 2777
        if (!isNaN(input)) {                                                                                           // 2778
            return parseInt(input, 10);                                                                                // 2779
        }                                                                                                              // 2780
                                                                                                                       // 2781
        input = locale.weekdaysParse(input);                                                                           // 2782
        if (typeof input === 'number') {                                                                               // 2783
            return input;                                                                                              // 2784
        }                                                                                                              // 2785
                                                                                                                       // 2786
        return null;                                                                                                   // 2787
    }                                                                                                                  // 2788
                                                                                                                       // 2789
    // LOCALES                                                                                                         // 2790
                                                                                                                       // 2791
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                 // 2792
    function localeWeekdays (m, format) {                                                                              // 2793
        return isArray(this._weekdays) ? this._weekdays[m.day()] :                                                     // 2794
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];                   // 2795
    }                                                                                                                  // 2796
                                                                                                                       // 2797
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                         // 2798
    function localeWeekdaysShort (m) {                                                                                 // 2799
        return this._weekdaysShort[m.day()];                                                                           // 2800
    }                                                                                                                  // 2801
                                                                                                                       // 2802
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                  // 2803
    function localeWeekdaysMin (m) {                                                                                   // 2804
        return this._weekdaysMin[m.day()];                                                                             // 2805
    }                                                                                                                  // 2806
                                                                                                                       // 2807
    function day_of_week__handleStrictParse(weekdayName, format, strict) {                                             // 2808
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();                                                         // 2809
        if (!this._weekdaysParse) {                                                                                    // 2810
            this._weekdaysParse = [];                                                                                  // 2811
            this._shortWeekdaysParse = [];                                                                             // 2812
            this._minWeekdaysParse = [];                                                                               // 2813
                                                                                                                       // 2814
            for (i = 0; i < 7; ++i) {                                                                                  // 2815
                mom = create_utc__createUTC([2000, 1]).day(i);                                                         // 2816
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();                             // 2817
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();                         // 2818
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();                                   // 2819
            }                                                                                                          // 2820
        }                                                                                                              // 2821
                                                                                                                       // 2822
        if (strict) {                                                                                                  // 2823
            if (format === 'dddd') {                                                                                   // 2824
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 2825
                return ii !== -1 ? ii : null;                                                                          // 2826
            } else if (format === 'ddd') {                                                                             // 2827
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 2828
                return ii !== -1 ? ii : null;                                                                          // 2829
            } else {                                                                                                   // 2830
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 2831
                return ii !== -1 ? ii : null;                                                                          // 2832
            }                                                                                                          // 2833
        } else {                                                                                                       // 2834
            if (format === 'dddd') {                                                                                   // 2835
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 2836
                if (ii !== -1) {                                                                                       // 2837
                    return ii;                                                                                         // 2838
                }                                                                                                      // 2839
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 2840
                if (ii !== -1) {                                                                                       // 2841
                    return ii;                                                                                         // 2842
                }                                                                                                      // 2843
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 2844
                return ii !== -1 ? ii : null;                                                                          // 2845
            } else if (format === 'ddd') {                                                                             // 2846
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 2847
                if (ii !== -1) {                                                                                       // 2848
                    return ii;                                                                                         // 2849
                }                                                                                                      // 2850
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 2851
                if (ii !== -1) {                                                                                       // 2852
                    return ii;                                                                                         // 2853
                }                                                                                                      // 2854
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 2855
                return ii !== -1 ? ii : null;                                                                          // 2856
            } else {                                                                                                   // 2857
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 2858
                if (ii !== -1) {                                                                                       // 2859
                    return ii;                                                                                         // 2860
                }                                                                                                      // 2861
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 2862
                if (ii !== -1) {                                                                                       // 2863
                    return ii;                                                                                         // 2864
                }                                                                                                      // 2865
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 2866
                return ii !== -1 ? ii : null;                                                                          // 2867
            }                                                                                                          // 2868
        }                                                                                                              // 2869
    }                                                                                                                  // 2870
                                                                                                                       // 2871
    function localeWeekdaysParse (weekdayName, format, strict) {                                                       // 2872
        var i, mom, regex;                                                                                             // 2873
                                                                                                                       // 2874
        if (this._weekdaysParseExact) {                                                                                // 2875
            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);                             // 2876
        }                                                                                                              // 2877
                                                                                                                       // 2878
        if (!this._weekdaysParse) {                                                                                    // 2879
            this._weekdaysParse = [];                                                                                  // 2880
            this._minWeekdaysParse = [];                                                                               // 2881
            this._shortWeekdaysParse = [];                                                                             // 2882
            this._fullWeekdaysParse = [];                                                                              // 2883
        }                                                                                                              // 2884
                                                                                                                       // 2885
        for (i = 0; i < 7; i++) {                                                                                      // 2886
            // make the regex if we don't have it already                                                              // 2887
                                                                                                                       // 2888
            mom = create_utc__createUTC([2000, 1]).day(i);                                                             // 2889
            if (strict && !this._fullWeekdaysParse[i]) {                                                               // 2890
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');  // 2891
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }                                                                                                          // 2894
            if (!this._weekdaysParse[i]) {                                                                             // 2895
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                      // 2897
            }                                                                                                          // 2898
            // test the regex                                                                                          // 2899
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {                         // 2900
                return i;                                                                                              // 2901
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {                  // 2902
                return i;                                                                                              // 2903
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {                     // 2904
                return i;                                                                                              // 2905
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {                                          // 2906
                return i;                                                                                              // 2907
            }                                                                                                          // 2908
        }                                                                                                              // 2909
    }                                                                                                                  // 2910
                                                                                                                       // 2911
    // MOMENTS                                                                                                         // 2912
                                                                                                                       // 2913
    function getSetDayOfWeek (input) {                                                                                 // 2914
        if (!this.isValid()) {                                                                                         // 2915
            return input != null ? this : NaN;                                                                         // 2916
        }                                                                                                              // 2917
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                // 2918
        if (input != null) {                                                                                           // 2919
            input = parseWeekday(input, this.localeData());                                                            // 2920
            return this.add(input - day, 'd');                                                                         // 2921
        } else {                                                                                                       // 2922
            return day;                                                                                                // 2923
        }                                                                                                              // 2924
    }                                                                                                                  // 2925
                                                                                                                       // 2926
    function getSetLocaleDayOfWeek (input) {                                                                           // 2927
        if (!this.isValid()) {                                                                                         // 2928
            return input != null ? this : NaN;                                                                         // 2929
        }                                                                                                              // 2930
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                              // 2931
        return input == null ? weekday : this.add(input - weekday, 'd');                                               // 2932
    }                                                                                                                  // 2933
                                                                                                                       // 2934
    function getSetISODayOfWeek (input) {                                                                              // 2935
        if (!this.isValid()) {                                                                                         // 2936
            return input != null ? this : NaN;                                                                         // 2937
        }                                                                                                              // 2938
        // behaves the same as moment#day except                                                                       // 2939
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                              // 2940
        // as a setter, sunday should belong to the previous week.                                                     // 2941
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);                         // 2942
    }                                                                                                                  // 2943
                                                                                                                       // 2944
    var defaultWeekdaysRegex = matchWord;                                                                              // 2945
    function weekdaysRegex (isStrict) {                                                                                // 2946
        if (this._weekdaysParseExact) {                                                                                // 2947
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 2948
                computeWeekdaysParse.call(this);                                                                       // 2949
            }                                                                                                          // 2950
            if (isStrict) {                                                                                            // 2951
                return this._weekdaysStrictRegex;                                                                      // 2952
            } else {                                                                                                   // 2953
                return this._weekdaysRegex;                                                                            // 2954
            }                                                                                                          // 2955
        } else {                                                                                                       // 2956
            return this._weekdaysStrictRegex && isStrict ?                                                             // 2957
                this._weekdaysStrictRegex : this._weekdaysRegex;                                                       // 2958
        }                                                                                                              // 2959
    }                                                                                                                  // 2960
                                                                                                                       // 2961
    var defaultWeekdaysShortRegex = matchWord;                                                                         // 2962
    function weekdaysShortRegex (isStrict) {                                                                           // 2963
        if (this._weekdaysParseExact) {                                                                                // 2964
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 2965
                computeWeekdaysParse.call(this);                                                                       // 2966
            }                                                                                                          // 2967
            if (isStrict) {                                                                                            // 2968
                return this._weekdaysShortStrictRegex;                                                                 // 2969
            } else {                                                                                                   // 2970
                return this._weekdaysShortRegex;                                                                       // 2971
            }                                                                                                          // 2972
        } else {                                                                                                       // 2973
            return this._weekdaysShortStrictRegex && isStrict ?                                                        // 2974
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;                                             // 2975
        }                                                                                                              // 2976
    }                                                                                                                  // 2977
                                                                                                                       // 2978
    var defaultWeekdaysMinRegex = matchWord;                                                                           // 2979
    function weekdaysMinRegex (isStrict) {                                                                             // 2980
        if (this._weekdaysParseExact) {                                                                                // 2981
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 2982
                computeWeekdaysParse.call(this);                                                                       // 2983
            }                                                                                                          // 2984
            if (isStrict) {                                                                                            // 2985
                return this._weekdaysMinStrictRegex;                                                                   // 2986
            } else {                                                                                                   // 2987
                return this._weekdaysMinRegex;                                                                         // 2988
            }                                                                                                          // 2989
        } else {                                                                                                       // 2990
            return this._weekdaysMinStrictRegex && isStrict ?                                                          // 2991
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;                                                 // 2992
        }                                                                                                              // 2993
    }                                                                                                                  // 2994
                                                                                                                       // 2995
                                                                                                                       // 2996
    function computeWeekdaysParse () {                                                                                 // 2997
        function cmpLenRev(a, b) {                                                                                     // 2998
            return b.length - a.length;                                                                                // 2999
        }                                                                                                              // 3000
                                                                                                                       // 3001
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],                                       // 3002
            i, mom, minp, shortp, longp;                                                                               // 3003
        for (i = 0; i < 7; i++) {                                                                                      // 3004
            // make the regex if we don't have it already                                                              // 3005
            mom = create_utc__createUTC([2000, 1]).day(i);                                                             // 3006
            minp = this.weekdaysMin(mom, '');                                                                          // 3007
            shortp = this.weekdaysShort(mom, '');                                                                      // 3008
            longp = this.weekdays(mom, '');                                                                            // 3009
            minPieces.push(minp);                                                                                      // 3010
            shortPieces.push(shortp);                                                                                  // 3011
            longPieces.push(longp);                                                                                    // 3012
            mixedPieces.push(minp);                                                                                    // 3013
            mixedPieces.push(shortp);                                                                                  // 3014
            mixedPieces.push(longp);                                                                                   // 3015
        }                                                                                                              // 3016
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it                                       // 3017
        // will match the longer piece.                                                                                // 3018
        minPieces.sort(cmpLenRev);                                                                                     // 3019
        shortPieces.sort(cmpLenRev);                                                                                   // 3020
        longPieces.sort(cmpLenRev);                                                                                    // 3021
        mixedPieces.sort(cmpLenRev);                                                                                   // 3022
        for (i = 0; i < 7; i++) {                                                                                      // 3023
            shortPieces[i] = regexEscape(shortPieces[i]);                                                              // 3024
            longPieces[i] = regexEscape(longPieces[i]);                                                                // 3025
            mixedPieces[i] = regexEscape(mixedPieces[i]);                                                              // 3026
        }                                                                                                              // 3027
                                                                                                                       // 3028
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                     // 3029
        this._weekdaysShortRegex = this._weekdaysRegex;                                                                // 3030
        this._weekdaysMinRegex = this._weekdaysRegex;                                                                  // 3031
                                                                                                                       // 3032
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                // 3033
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                          // 3034
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');                              // 3035
    }                                                                                                                  // 3036
                                                                                                                       // 3037
    // FORMATTING                                                                                                      // 3038
                                                                                                                       // 3039
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                           // 3040
                                                                                                                       // 3041
    // ALIASES                                                                                                         // 3042
                                                                                                                       // 3043
    addUnitAlias('dayOfYear', 'DDD');                                                                                  // 3044
                                                                                                                       // 3045
    // PARSING                                                                                                         // 3046
                                                                                                                       // 3047
    addRegexToken('DDD',  match1to3);                                                                                  // 3048
    addRegexToken('DDDD', match3);                                                                                     // 3049
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                   // 3050
        config._dayOfYear = toInt(input);                                                                              // 3051
    });                                                                                                                // 3052
                                                                                                                       // 3053
    // HELPERS                                                                                                         // 3054
                                                                                                                       // 3055
    // MOMENTS                                                                                                         // 3056
                                                                                                                       // 3057
    function getSetDayOfYear (input) {                                                                                 // 3058
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;          // 3059
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                         // 3060
    }                                                                                                                  // 3061
                                                                                                                       // 3062
    // FORMATTING                                                                                                      // 3063
                                                                                                                       // 3064
    function hFormat() {                                                                                               // 3065
        return this.hours() % 12 || 12;                                                                                // 3066
    }                                                                                                                  // 3067
                                                                                                                       // 3068
    function kFormat() {                                                                                               // 3069
        return this.hours() || 24;                                                                                     // 3070
    }                                                                                                                  // 3071
                                                                                                                       // 3072
    addFormatToken('H', ['HH', 2], 0, 'hour');                                                                         // 3073
    addFormatToken('h', ['hh', 2], 0, hFormat);                                                                        // 3074
    addFormatToken('k', ['kk', 2], 0, kFormat);                                                                        // 3075
                                                                                                                       // 3076
    addFormatToken('hmm', 0, 0, function () {                                                                          // 3077
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);                                                 // 3078
    });                                                                                                                // 3079
                                                                                                                       // 3080
    addFormatToken('hmmss', 0, 0, function () {                                                                        // 3081
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +                                                // 3082
            zeroFill(this.seconds(), 2);                                                                               // 3083
    });                                                                                                                // 3084
                                                                                                                       // 3085
    addFormatToken('Hmm', 0, 0, function () {                                                                          // 3086
        return '' + this.hours() + zeroFill(this.minutes(), 2);                                                        // 3087
    });                                                                                                                // 3088
                                                                                                                       // 3089
    addFormatToken('Hmmss', 0, 0, function () {                                                                        // 3090
        return '' + this.hours() + zeroFill(this.minutes(), 2) +                                                       // 3091
            zeroFill(this.seconds(), 2);                                                                               // 3092
    });                                                                                                                // 3093
                                                                                                                       // 3094
    function meridiem (token, lowercase) {                                                                             // 3095
        addFormatToken(token, 0, 0, function () {                                                                      // 3096
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                // 3097
        });                                                                                                            // 3098
    }                                                                                                                  // 3099
                                                                                                                       // 3100
    meridiem('a', true);                                                                                               // 3101
    meridiem('A', false);                                                                                              // 3102
                                                                                                                       // 3103
    // ALIASES                                                                                                         // 3104
                                                                                                                       // 3105
    addUnitAlias('hour', 'h');                                                                                         // 3106
                                                                                                                       // 3107
    // PARSING                                                                                                         // 3108
                                                                                                                       // 3109
    function matchMeridiem (isStrict, locale) {                                                                        // 3110
        return locale._meridiemParse;                                                                                  // 3111
    }                                                                                                                  // 3112
                                                                                                                       // 3113
    addRegexToken('a',  matchMeridiem);                                                                                // 3114
    addRegexToken('A',  matchMeridiem);                                                                                // 3115
    addRegexToken('H',  match1to2);                                                                                    // 3116
    addRegexToken('h',  match1to2);                                                                                    // 3117
    addRegexToken('HH', match1to2, match2);                                                                            // 3118
    addRegexToken('hh', match1to2, match2);                                                                            // 3119
                                                                                                                       // 3120
    addRegexToken('hmm', match3to4);                                                                                   // 3121
    addRegexToken('hmmss', match5to6);                                                                                 // 3122
    addRegexToken('Hmm', match3to4);                                                                                   // 3123
    addRegexToken('Hmmss', match5to6);                                                                                 // 3124
                                                                                                                       // 3125
    addParseToken(['H', 'HH'], HOUR);                                                                                  // 3126
    addParseToken(['a', 'A'], function (input, array, config) {                                                        // 3127
        config._isPm = config._locale.isPM(input);                                                                     // 3128
        config._meridiem = input;                                                                                      // 3129
    });                                                                                                                // 3130
    addParseToken(['h', 'hh'], function (input, array, config) {                                                       // 3131
        array[HOUR] = toInt(input);                                                                                    // 3132
        getParsingFlags(config).bigHour = true;                                                                        // 3133
    });                                                                                                                // 3134
    addParseToken('hmm', function (input, array, config) {                                                             // 3135
        var pos = input.length - 2;                                                                                    // 3136
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 3137
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 3138
        getParsingFlags(config).bigHour = true;                                                                        // 3139
    });                                                                                                                // 3140
    addParseToken('hmmss', function (input, array, config) {                                                           // 3141
        var pos1 = input.length - 4;                                                                                   // 3142
        var pos2 = input.length - 2;                                                                                   // 3143
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 3144
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 3145
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 3146
        getParsingFlags(config).bigHour = true;                                                                        // 3147
    });                                                                                                                // 3148
    addParseToken('Hmm', function (input, array, config) {                                                             // 3149
        var pos = input.length - 2;                                                                                    // 3150
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 3151
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 3152
    });                                                                                                                // 3153
    addParseToken('Hmmss', function (input, array, config) {                                                           // 3154
        var pos1 = input.length - 4;                                                                                   // 3155
        var pos2 = input.length - 2;                                                                                   // 3156
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 3157
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 3158
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 3159
    });                                                                                                                // 3160
                                                                                                                       // 3161
    // LOCALES                                                                                                         // 3162
                                                                                                                       // 3163
    function localeIsPM (input) {                                                                                      // 3164
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                             // 3165
        // Using charAt should be more compatible.                                                                     // 3166
        return ((input + '').toLowerCase().charAt(0) === 'p');                                                         // 3167
    }                                                                                                                  // 3168
                                                                                                                       // 3169
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                  // 3170
    function localeMeridiem (hours, minutes, isLower) {                                                                // 3171
        if (hours > 11) {                                                                                              // 3172
            return isLower ? 'pm' : 'PM';                                                                              // 3173
        } else {                                                                                                       // 3174
            return isLower ? 'am' : 'AM';                                                                              // 3175
        }                                                                                                              // 3176
    }                                                                                                                  // 3177
                                                                                                                       // 3178
                                                                                                                       // 3179
    // MOMENTS                                                                                                         // 3180
                                                                                                                       // 3181
    // Setting the hour should keep the time, because the user explicitly                                              // 3182
    // specified which hour he wants. So trying to maintain the same hour (in                                          // 3183
    // a new timezone) makes sense. Adding/subtracting hours does not follow                                           // 3184
    // this rule.                                                                                                      // 3185
    var getSetHour = makeGetSet('Hours', true);                                                                        // 3186
                                                                                                                       // 3187
    // FORMATTING                                                                                                      // 3188
                                                                                                                       // 3189
    addFormatToken('m', ['mm', 2], 0, 'minute');                                                                       // 3190
                                                                                                                       // 3191
    // ALIASES                                                                                                         // 3192
                                                                                                                       // 3193
    addUnitAlias('minute', 'm');                                                                                       // 3194
                                                                                                                       // 3195
    // PARSING                                                                                                         // 3196
                                                                                                                       // 3197
    addRegexToken('m',  match1to2);                                                                                    // 3198
    addRegexToken('mm', match1to2, match2);                                                                            // 3199
    addParseToken(['m', 'mm'], MINUTE);                                                                                // 3200
                                                                                                                       // 3201
    // MOMENTS                                                                                                         // 3202
                                                                                                                       // 3203
    var getSetMinute = makeGetSet('Minutes', false);                                                                   // 3204
                                                                                                                       // 3205
    // FORMATTING                                                                                                      // 3206
                                                                                                                       // 3207
    addFormatToken('s', ['ss', 2], 0, 'second');                                                                       // 3208
                                                                                                                       // 3209
    // ALIASES                                                                                                         // 3210
                                                                                                                       // 3211
    addUnitAlias('second', 's');                                                                                       // 3212
                                                                                                                       // 3213
    // PARSING                                                                                                         // 3214
                                                                                                                       // 3215
    addRegexToken('s',  match1to2);                                                                                    // 3216
    addRegexToken('ss', match1to2, match2);                                                                            // 3217
    addParseToken(['s', 'ss'], SECOND);                                                                                // 3218
                                                                                                                       // 3219
    // MOMENTS                                                                                                         // 3220
                                                                                                                       // 3221
    var getSetSecond = makeGetSet('Seconds', false);                                                                   // 3222
                                                                                                                       // 3223
    // FORMATTING                                                                                                      // 3224
                                                                                                                       // 3225
    addFormatToken('S', 0, 0, function () {                                                                            // 3226
        return ~~(this.millisecond() / 100);                                                                           // 3227
    });                                                                                                                // 3228
                                                                                                                       // 3229
    addFormatToken(0, ['SS', 2], 0, function () {                                                                      // 3230
        return ~~(this.millisecond() / 10);                                                                            // 3231
    });                                                                                                                // 3232
                                                                                                                       // 3233
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');                                                                   // 3234
    addFormatToken(0, ['SSSS', 4], 0, function () {                                                                    // 3235
        return this.millisecond() * 10;                                                                                // 3236
    });                                                                                                                // 3237
    addFormatToken(0, ['SSSSS', 5], 0, function () {                                                                   // 3238
        return this.millisecond() * 100;                                                                               // 3239
    });                                                                                                                // 3240
    addFormatToken(0, ['SSSSSS', 6], 0, function () {                                                                  // 3241
        return this.millisecond() * 1000;                                                                              // 3242
    });                                                                                                                // 3243
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {                                                                 // 3244
        return this.millisecond() * 10000;                                                                             // 3245
    });                                                                                                                // 3246
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {                                                                // 3247
        return this.millisecond() * 100000;                                                                            // 3248
    });                                                                                                                // 3249
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {                                                               // 3250
        return this.millisecond() * 1000000;                                                                           // 3251
    });                                                                                                                // 3252
                                                                                                                       // 3253
                                                                                                                       // 3254
    // ALIASES                                                                                                         // 3255
                                                                                                                       // 3256
    addUnitAlias('millisecond', 'ms');                                                                                 // 3257
                                                                                                                       // 3258
    // PARSING                                                                                                         // 3259
                                                                                                                       // 3260
    addRegexToken('S',    match1to3, match1);                                                                          // 3261
    addRegexToken('SS',   match1to3, match2);                                                                          // 3262
    addRegexToken('SSS',  match1to3, match3);                                                                          // 3263
                                                                                                                       // 3264
    var token;                                                                                                         // 3265
    for (token = 'SSSS'; token.length <= 9; token += 'S') {                                                            // 3266
        addRegexToken(token, matchUnsigned);                                                                           // 3267
    }                                                                                                                  // 3268
                                                                                                                       // 3269
    function parseMs(input, array) {                                                                                   // 3270
        array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                             // 3271
    }                                                                                                                  // 3272
                                                                                                                       // 3273
    for (token = 'S'; token.length <= 9; token += 'S') {                                                               // 3274
        addParseToken(token, parseMs);                                                                                 // 3275
    }                                                                                                                  // 3276
    // MOMENTS                                                                                                         // 3277
                                                                                                                       // 3278
    var getSetMillisecond = makeGetSet('Milliseconds', false);                                                         // 3279
                                                                                                                       // 3280
    // FORMATTING                                                                                                      // 3281
                                                                                                                       // 3282
    addFormatToken('z',  0, 0, 'zoneAbbr');                                                                            // 3283
    addFormatToken('zz', 0, 0, 'zoneName');                                                                            // 3284
                                                                                                                       // 3285
    // MOMENTS                                                                                                         // 3286
                                                                                                                       // 3287
    function getZoneAbbr () {                                                                                          // 3288
        return this._isUTC ? 'UTC' : '';                                                                               // 3289
    }                                                                                                                  // 3290
                                                                                                                       // 3291
    function getZoneName () {                                                                                          // 3292
        return this._isUTC ? 'Coordinated Universal Time' : '';                                                        // 3293
    }                                                                                                                  // 3294
                                                                                                                       // 3295
    var momentPrototype__proto = Moment.prototype;                                                                     // 3296
                                                                                                                       // 3297
    momentPrototype__proto.add               = add_subtract__add;                                                      // 3298
    momentPrototype__proto.calendar          = moment_calendar__calendar;                                              // 3299
    momentPrototype__proto.clone             = clone;                                                                  // 3300
    momentPrototype__proto.diff              = diff;                                                                   // 3301
    momentPrototype__proto.endOf             = endOf;                                                                  // 3302
    momentPrototype__proto.format            = format;                                                                 // 3303
    momentPrototype__proto.from              = from;                                                                   // 3304
    momentPrototype__proto.fromNow           = fromNow;                                                                // 3305
    momentPrototype__proto.to                = to;                                                                     // 3306
    momentPrototype__proto.toNow             = toNow;                                                                  // 3307
    momentPrototype__proto.get               = getSet;                                                                 // 3308
    momentPrototype__proto.invalidAt         = invalidAt;                                                              // 3309
    momentPrototype__proto.isAfter           = isAfter;                                                                // 3310
    momentPrototype__proto.isBefore          = isBefore;                                                               // 3311
    momentPrototype__proto.isBetween         = isBetween;                                                              // 3312
    momentPrototype__proto.isSame            = isSame;                                                                 // 3313
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;                                                          // 3314
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;                                                         // 3315
    momentPrototype__proto.isValid           = moment_valid__isValid;                                                  // 3316
    momentPrototype__proto.lang              = lang;                                                                   // 3317
    momentPrototype__proto.locale            = locale;                                                                 // 3318
    momentPrototype__proto.localeData        = localeData;                                                             // 3319
    momentPrototype__proto.max               = prototypeMax;                                                           // 3320
    momentPrototype__proto.min               = prototypeMin;                                                           // 3321
    momentPrototype__proto.parsingFlags      = parsingFlags;                                                           // 3322
    momentPrototype__proto.set               = getSet;                                                                 // 3323
    momentPrototype__proto.startOf           = startOf;                                                                // 3324
    momentPrototype__proto.subtract          = add_subtract__subtract;                                                 // 3325
    momentPrototype__proto.toArray           = toArray;                                                                // 3326
    momentPrototype__proto.toObject          = toObject;                                                               // 3327
    momentPrototype__proto.toDate            = toDate;                                                                 // 3328
    momentPrototype__proto.toISOString       = moment_format__toISOString;                                             // 3329
    momentPrototype__proto.toJSON            = toJSON;                                                                 // 3330
    momentPrototype__proto.toString          = toString;                                                               // 3331
    momentPrototype__proto.unix              = unix;                                                                   // 3332
    momentPrototype__proto.valueOf           = to_type__valueOf;                                                       // 3333
    momentPrototype__proto.creationData      = creationData;                                                           // 3334
                                                                                                                       // 3335
    // Year                                                                                                            // 3336
    momentPrototype__proto.year       = getSetYear;                                                                    // 3337
    momentPrototype__proto.isLeapYear = getIsLeapYear;                                                                 // 3338
                                                                                                                       // 3339
    // Week Year                                                                                                       // 3340
    momentPrototype__proto.weekYear    = getSetWeekYear;                                                               // 3341
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;                                                            // 3342
                                                                                                                       // 3343
    // Quarter                                                                                                         // 3344
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;                                  // 3345
                                                                                                                       // 3346
    // Month                                                                                                           // 3347
    momentPrototype__proto.month       = getSetMonth;                                                                  // 3348
    momentPrototype__proto.daysInMonth = getDaysInMonth;                                                               // 3349
                                                                                                                       // 3350
    // Week                                                                                                            // 3351
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;                          // 3352
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;                       // 3353
    momentPrototype__proto.weeksInYear    = getWeeksInYear;                                                            // 3354
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;                                                         // 3355
                                                                                                                       // 3356
    // Day                                                                                                             // 3357
    momentPrototype__proto.date       = getSetDayOfMonth;                                                              // 3358
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;                     // 3359
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;                                                         // 3360
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;                                                            // 3361
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;                                                               // 3362
                                                                                                                       // 3363
    // Hour                                                                                                            // 3364
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;                                           // 3365
                                                                                                                       // 3366
    // Minute                                                                                                          // 3367
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;                                     // 3368
                                                                                                                       // 3369
    // Second                                                                                                          // 3370
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;                                     // 3371
                                                                                                                       // 3372
    // Millisecond                                                                                                     // 3373
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;                      // 3374
                                                                                                                       // 3375
    // Offset                                                                                                          // 3376
    momentPrototype__proto.utcOffset            = getSetOffset;                                                        // 3377
    momentPrototype__proto.utc                  = setOffsetToUTC;                                                      // 3378
    momentPrototype__proto.local                = setOffsetToLocal;                                                    // 3379
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;                                             // 3380
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                // 3381
    momentPrototype__proto.isDST                = isDaylightSavingTime;                                                // 3382
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;                                         // 3383
    momentPrototype__proto.isLocal              = isLocal;                                                             // 3384
    momentPrototype__proto.isUtcOffset          = isUtcOffset;                                                         // 3385
    momentPrototype__proto.isUtc                = isUtc;                                                               // 3386
    momentPrototype__proto.isUTC                = isUtc;                                                               // 3387
                                                                                                                       // 3388
    // Timezone                                                                                                        // 3389
    momentPrototype__proto.zoneAbbr = getZoneAbbr;                                                                     // 3390
    momentPrototype__proto.zoneName = getZoneName;                                                                     // 3391
                                                                                                                       // 3392
    // Deprecations                                                                                                    // 3393
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);    // 3394
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);        // 3395
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);           // 3396
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
                                                                                                                       // 3398
    var momentPrototype = momentPrototype__proto;                                                                      // 3399
                                                                                                                       // 3400
    function moment__createUnix (input) {                                                                              // 3401
        return local__createLocal(input * 1000);                                                                       // 3402
    }                                                                                                                  // 3403
                                                                                                                       // 3404
    function moment__createInZone () {                                                                                 // 3405
        return local__createLocal.apply(null, arguments).parseZone();                                                  // 3406
    }                                                                                                                  // 3407
                                                                                                                       // 3408
    var defaultCalendar = {                                                                                            // 3409
        sameDay : '[Today at] LT',                                                                                     // 3410
        nextDay : '[Tomorrow at] LT',                                                                                  // 3411
        nextWeek : 'dddd [at] LT',                                                                                     // 3412
        lastDay : '[Yesterday at] LT',                                                                                 // 3413
        lastWeek : '[Last] dddd [at] LT',                                                                              // 3414
        sameElse : 'L'                                                                                                 // 3415
    };                                                                                                                 // 3416
                                                                                                                       // 3417
    function locale_calendar__calendar (key, mom, now) {                                                               // 3418
        var output = this._calendar[key];                                                                              // 3419
        return isFunction(output) ? output.call(mom, now) : output;                                                    // 3420
    }                                                                                                                  // 3421
                                                                                                                       // 3422
    var defaultLongDateFormat = {                                                                                      // 3423
        LTS  : 'h:mm:ss A',                                                                                            // 3424
        LT   : 'h:mm A',                                                                                               // 3425
        L    : 'MM/DD/YYYY',                                                                                           // 3426
        LL   : 'MMMM D, YYYY',                                                                                         // 3427
        LLL  : 'MMMM D, YYYY h:mm A',                                                                                  // 3428
        LLLL : 'dddd, MMMM D, YYYY h:mm A'                                                                             // 3429
    };                                                                                                                 // 3430
                                                                                                                       // 3431
    function longDateFormat (key) {                                                                                    // 3432
        var format = this._longDateFormat[key],                                                                        // 3433
            formatUpper = this._longDateFormat[key.toUpperCase()];                                                     // 3434
                                                                                                                       // 3435
        if (format || !formatUpper) {                                                                                  // 3436
            return format;                                                                                             // 3437
        }                                                                                                              // 3438
                                                                                                                       // 3439
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {                           // 3440
            return val.slice(1);                                                                                       // 3441
        });                                                                                                            // 3442
                                                                                                                       // 3443
        return this._longDateFormat[key];                                                                              // 3444
    }                                                                                                                  // 3445
                                                                                                                       // 3446
    var defaultInvalidDate = 'Invalid date';                                                                           // 3447
                                                                                                                       // 3448
    function invalidDate () {                                                                                          // 3449
        return this._invalidDate;                                                                                      // 3450
    }                                                                                                                  // 3451
                                                                                                                       // 3452
    var defaultOrdinal = '%d';                                                                                         // 3453
    var defaultOrdinalParse = /\d{1,2}/;                                                                               // 3454
                                                                                                                       // 3455
    function ordinal (number) {                                                                                        // 3456
        return this._ordinal.replace('%d', number);                                                                    // 3457
    }                                                                                                                  // 3458
                                                                                                                       // 3459
    function preParsePostFormat (string) {                                                                             // 3460
        return string;                                                                                                 // 3461
    }                                                                                                                  // 3462
                                                                                                                       // 3463
    var defaultRelativeTime = {                                                                                        // 3464
        future : 'in %s',                                                                                              // 3465
        past   : '%s ago',                                                                                             // 3466
        s  : 'a few seconds',                                                                                          // 3467
        m  : 'a minute',                                                                                               // 3468
        mm : '%d minutes',                                                                                             // 3469
        h  : 'an hour',                                                                                                // 3470
        hh : '%d hours',                                                                                               // 3471
        d  : 'a day',                                                                                                  // 3472
        dd : '%d days',                                                                                                // 3473
        M  : 'a month',                                                                                                // 3474
        MM : '%d months',                                                                                              // 3475
        y  : 'a year',                                                                                                 // 3476
        yy : '%d years'                                                                                                // 3477
    };                                                                                                                 // 3478
                                                                                                                       // 3479
    function relative__relativeTime (number, withoutSuffix, string, isFuture) {                                        // 3480
        var output = this._relativeTime[string];                                                                       // 3481
        return (isFunction(output)) ?                                                                                  // 3482
            output(number, withoutSuffix, string, isFuture) :                                                          // 3483
            output.replace(/%d/i, number);                                                                             // 3484
    }                                                                                                                  // 3485
                                                                                                                       // 3486
    function pastFuture (diff, output) {                                                                               // 3487
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                 // 3488
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);                                    // 3489
    }                                                                                                                  // 3490
                                                                                                                       // 3491
    var prototype__proto = Locale.prototype;                                                                           // 3492
                                                                                                                       // 3493
    prototype__proto._calendar       = defaultCalendar;                                                                // 3494
    prototype__proto.calendar        = locale_calendar__calendar;                                                      // 3495
    prototype__proto._longDateFormat = defaultLongDateFormat;                                                          // 3496
    prototype__proto.longDateFormat  = longDateFormat;                                                                 // 3497
    prototype__proto._invalidDate    = defaultInvalidDate;                                                             // 3498
    prototype__proto.invalidDate     = invalidDate;                                                                    // 3499
    prototype__proto._ordinal        = defaultOrdinal;                                                                 // 3500
    prototype__proto.ordinal         = ordinal;                                                                        // 3501
    prototype__proto._ordinalParse   = defaultOrdinalParse;                                                            // 3502
    prototype__proto.preparse        = preParsePostFormat;                                                             // 3503
    prototype__proto.postformat      = preParsePostFormat;                                                             // 3504
    prototype__proto._relativeTime   = defaultRelativeTime;                                                            // 3505
    prototype__proto.relativeTime    = relative__relativeTime;                                                         // 3506
    prototype__proto.pastFuture      = pastFuture;                                                                     // 3507
    prototype__proto.set             = locale_set__set;                                                                // 3508
                                                                                                                       // 3509
    // Month                                                                                                           // 3510
    prototype__proto.months            =        localeMonths;                                                          // 3511
    prototype__proto._months           = defaultLocaleMonths;                                                          // 3512
    prototype__proto.monthsShort       =        localeMonthsShort;                                                     // 3513
    prototype__proto._monthsShort      = defaultLocaleMonthsShort;                                                     // 3514
    prototype__proto.monthsParse       =        localeMonthsParse;                                                     // 3515
    prototype__proto._monthsRegex      = defaultMonthsRegex;                                                           // 3516
    prototype__proto.monthsRegex       = monthsRegex;                                                                  // 3517
    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;                                                      // 3518
    prototype__proto.monthsShortRegex  = monthsShortRegex;                                                             // 3519
                                                                                                                       // 3520
    // Week                                                                                                            // 3521
    prototype__proto.week = localeWeek;                                                                                // 3522
    prototype__proto._week = defaultLocaleWeek;                                                                        // 3523
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;                                                            // 3524
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;                                                            // 3525
                                                                                                                       // 3526
    // Day of Week                                                                                                     // 3527
    prototype__proto.weekdays       =        localeWeekdays;                                                           // 3528
    prototype__proto._weekdays      = defaultLocaleWeekdays;                                                           // 3529
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;                                                        // 3530
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;                                                        // 3531
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;                                                      // 3532
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;                                                      // 3533
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;                                                      // 3534
                                                                                                                       // 3535
    prototype__proto._weekdaysRegex      = defaultWeekdaysRegex;                                                       // 3536
    prototype__proto.weekdaysRegex       =        weekdaysRegex;                                                       // 3537
    prototype__proto._weekdaysShortRegex = defaultWeekdaysShortRegex;                                                  // 3538
    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;                                                  // 3539
    prototype__proto._weekdaysMinRegex   = defaultWeekdaysMinRegex;                                                    // 3540
    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;                                                    // 3541
                                                                                                                       // 3542
    // Hours                                                                                                           // 3543
    prototype__proto.isPM = localeIsPM;                                                                                // 3544
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;                                                      // 3545
    prototype__proto.meridiem = localeMeridiem;                                                                        // 3546
                                                                                                                       // 3547
    function lists__get (format, index, field, setter) {                                                               // 3548
        var locale = locale_locales__getLocale();                                                                      // 3549
        var utc = create_utc__createUTC().set(setter, index);                                                          // 3550
        return locale[field](utc, format);                                                                             // 3551
    }                                                                                                                  // 3552
                                                                                                                       // 3553
    function listMonthsImpl (format, index, field) {                                                                   // 3554
        if (typeof format === 'number') {                                                                              // 3555
            index = format;                                                                                            // 3556
            format = undefined;                                                                                        // 3557
        }                                                                                                              // 3558
                                                                                                                       // 3559
        format = format || '';                                                                                         // 3560
                                                                                                                       // 3561
        if (index != null) {                                                                                           // 3562
            return lists__get(format, index, field, 'month');                                                          // 3563
        }                                                                                                              // 3564
                                                                                                                       // 3565
        var i;                                                                                                         // 3566
        var out = [];                                                                                                  // 3567
        for (i = 0; i < 12; i++) {                                                                                     // 3568
            out[i] = lists__get(format, i, field, 'month');                                                            // 3569
        }                                                                                                              // 3570
        return out;                                                                                                    // 3571
    }                                                                                                                  // 3572
                                                                                                                       // 3573
    // ()                                                                                                              // 3574
    // (5)                                                                                                             // 3575
    // (fmt, 5)                                                                                                        // 3576
    // (fmt)                                                                                                           // 3577
    // (true)                                                                                                          // 3578
    // (true, 5)                                                                                                       // 3579
    // (true, fmt, 5)                                                                                                  // 3580
    // (true, fmt)                                                                                                     // 3581
    function listWeekdaysImpl (localeSorted, format, index, field) {                                                   // 3582
        if (typeof localeSorted === 'boolean') {                                                                       // 3583
            if (typeof format === 'number') {                                                                          // 3584
                index = format;                                                                                        // 3585
                format = undefined;                                                                                    // 3586
            }                                                                                                          // 3587
                                                                                                                       // 3588
            format = format || '';                                                                                     // 3589
        } else {                                                                                                       // 3590
            format = localeSorted;                                                                                     // 3591
            index = format;                                                                                            // 3592
            localeSorted = false;                                                                                      // 3593
                                                                                                                       // 3594
            if (typeof format === 'number') {                                                                          // 3595
                index = format;                                                                                        // 3596
                format = undefined;                                                                                    // 3597
            }                                                                                                          // 3598
                                                                                                                       // 3599
            format = format || '';                                                                                     // 3600
        }                                                                                                              // 3601
                                                                                                                       // 3602
        var locale = locale_locales__getLocale(),                                                                      // 3603
            shift = localeSorted ? locale._week.dow : 0;                                                               // 3604
                                                                                                                       // 3605
        if (index != null) {                                                                                           // 3606
            return lists__get(format, (index + shift) % 7, field, 'day');                                              // 3607
        }                                                                                                              // 3608
                                                                                                                       // 3609
        var i;                                                                                                         // 3610
        var out = [];                                                                                                  // 3611
        for (i = 0; i < 7; i++) {                                                                                      // 3612
            out[i] = lists__get(format, (i + shift) % 7, field, 'day');                                                // 3613
        }                                                                                                              // 3614
        return out;                                                                                                    // 3615
    }                                                                                                                  // 3616
                                                                                                                       // 3617
    function lists__listMonths (format, index) {                                                                       // 3618
        return listMonthsImpl(format, index, 'months');                                                                // 3619
    }                                                                                                                  // 3620
                                                                                                                       // 3621
    function lists__listMonthsShort (format, index) {                                                                  // 3622
        return listMonthsImpl(format, index, 'monthsShort');                                                           // 3623
    }                                                                                                                  // 3624
                                                                                                                       // 3625
    function lists__listWeekdays (localeSorted, format, index) {                                                       // 3626
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');                                              // 3627
    }                                                                                                                  // 3628
                                                                                                                       // 3629
    function lists__listWeekdaysShort (localeSorted, format, index) {                                                  // 3630
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');                                         // 3631
    }                                                                                                                  // 3632
                                                                                                                       // 3633
    function lists__listWeekdaysMin (localeSorted, format, index) {                                                    // 3634
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');                                           // 3635
    }                                                                                                                  // 3636
                                                                                                                       // 3637
    locale_locales__getSetGlobalLocale('en', {                                                                         // 3638
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                          // 3639
        ordinal : function (number) {                                                                                  // 3640
            var b = number % 10,                                                                                       // 3641
                output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                     // 3642
                (b === 1) ? 'st' :                                                                                     // 3643
                (b === 2) ? 'nd' :                                                                                     // 3644
                (b === 3) ? 'rd' : 'th';                                                                               // 3645
            return number + output;                                                                                    // 3646
        }                                                                                                              // 3647
    });                                                                                                                // 3648
                                                                                                                       // 3649
    // Side effect imports                                                                                             // 3650
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
                                                                                                                       // 3653
    var mathAbs = Math.abs;                                                                                            // 3654
                                                                                                                       // 3655
    function duration_abs__abs () {                                                                                    // 3656
        var data           = this._data;                                                                               // 3657
                                                                                                                       // 3658
        this._milliseconds = mathAbs(this._milliseconds);                                                              // 3659
        this._days         = mathAbs(this._days);                                                                      // 3660
        this._months       = mathAbs(this._months);                                                                    // 3661
                                                                                                                       // 3662
        data.milliseconds  = mathAbs(data.milliseconds);                                                               // 3663
        data.seconds       = mathAbs(data.seconds);                                                                    // 3664
        data.minutes       = mathAbs(data.minutes);                                                                    // 3665
        data.hours         = mathAbs(data.hours);                                                                      // 3666
        data.months        = mathAbs(data.months);                                                                     // 3667
        data.years         = mathAbs(data.years);                                                                      // 3668
                                                                                                                       // 3669
        return this;                                                                                                   // 3670
    }                                                                                                                  // 3671
                                                                                                                       // 3672
    function duration_add_subtract__addSubtract (duration, input, value, direction) {                                  // 3673
        var other = create__createDuration(input, value);                                                              // 3674
                                                                                                                       // 3675
        duration._milliseconds += direction * other._milliseconds;                                                     // 3676
        duration._days         += direction * other._days;                                                             // 3677
        duration._months       += direction * other._months;                                                           // 3678
                                                                                                                       // 3679
        return duration._bubble();                                                                                     // 3680
    }                                                                                                                  // 3681
                                                                                                                       // 3682
    // supports only 2.0-style add(1, 's') or add(duration)                                                            // 3683
    function duration_add_subtract__add (input, value) {                                                               // 3684
        return duration_add_subtract__addSubtract(this, input, value, 1);                                              // 3685
    }                                                                                                                  // 3686
                                                                                                                       // 3687
    // supports only 2.0-style subtract(1, 's') or subtract(duration)                                                  // 3688
    function duration_add_subtract__subtract (input, value) {                                                          // 3689
        return duration_add_subtract__addSubtract(this, input, value, -1);                                             // 3690
    }                                                                                                                  // 3691
                                                                                                                       // 3692
    function absCeil (number) {                                                                                        // 3693
        if (number < 0) {                                                                                              // 3694
            return Math.floor(number);                                                                                 // 3695
        } else {                                                                                                       // 3696
            return Math.ceil(number);                                                                                  // 3697
        }                                                                                                              // 3698
    }                                                                                                                  // 3699
                                                                                                                       // 3700
    function bubble () {                                                                                               // 3701
        var milliseconds = this._milliseconds;                                                                         // 3702
        var days         = this._days;                                                                                 // 3703
        var months       = this._months;                                                                               // 3704
        var data         = this._data;                                                                                 // 3705
        var seconds, minutes, hours, years, monthsFromDays;                                                            // 3706
                                                                                                                       // 3707
        // if we have a mix of positive and negative values, bubble down first                                         // 3708
        // check: https://github.com/moment/moment/issues/2166                                                         // 3709
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||                                                       // 3710
                (milliseconds <= 0 && days <= 0 && months <= 0))) {                                                    // 3711
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;                                              // 3712
            days = 0;                                                                                                  // 3713
            months = 0;                                                                                                // 3714
        }                                                                                                              // 3715
                                                                                                                       // 3716
        // The following code bubbles up values, see the tests for                                                     // 3717
        // examples of what that means.                                                                                // 3718
        data.milliseconds = milliseconds % 1000;                                                                       // 3719
                                                                                                                       // 3720
        seconds           = absFloor(milliseconds / 1000);                                                             // 3721
        data.seconds      = seconds % 60;                                                                              // 3722
                                                                                                                       // 3723
        minutes           = absFloor(seconds / 60);                                                                    // 3724
        data.minutes      = minutes % 60;                                                                              // 3725
                                                                                                                       // 3726
        hours             = absFloor(minutes / 60);                                                                    // 3727
        data.hours        = hours % 24;                                                                                // 3728
                                                                                                                       // 3729
        days += absFloor(hours / 24);                                                                                  // 3730
                                                                                                                       // 3731
        // convert days to months                                                                                      // 3732
        monthsFromDays = absFloor(daysToMonths(days));                                                                 // 3733
        months += monthsFromDays;                                                                                      // 3734
        days -= absCeil(monthsToDays(monthsFromDays));                                                                 // 3735
                                                                                                                       // 3736
        // 12 months -> 1 year                                                                                         // 3737
        years = absFloor(months / 12);                                                                                 // 3738
        months %= 12;                                                                                                  // 3739
                                                                                                                       // 3740
        data.days   = days;                                                                                            // 3741
        data.months = months;                                                                                          // 3742
        data.years  = years;                                                                                           // 3743
                                                                                                                       // 3744
        return this;                                                                                                   // 3745
    }                                                                                                                  // 3746
                                                                                                                       // 3747
    function daysToMonths (days) {                                                                                     // 3748
        // 400 years have 146097 days (taking into account leap year rules)                                            // 3749
        // 400 years have 12 months === 4800                                                                           // 3750
        return days * 4800 / 146097;                                                                                   // 3751
    }                                                                                                                  // 3752
                                                                                                                       // 3753
    function monthsToDays (months) {                                                                                   // 3754
        // the reverse of daysToMonths                                                                                 // 3755
        return months * 146097 / 4800;                                                                                 // 3756
    }                                                                                                                  // 3757
                                                                                                                       // 3758
    function as (units) {                                                                                              // 3759
        var days;                                                                                                      // 3760
        var months;                                                                                                    // 3761
        var milliseconds = this._milliseconds;                                                                         // 3762
                                                                                                                       // 3763
        units = normalizeUnits(units);                                                                                 // 3764
                                                                                                                       // 3765
        if (units === 'month' || units === 'year') {                                                                   // 3766
            days   = this._days   + milliseconds / 864e5;                                                              // 3767
            months = this._months + daysToMonths(days);                                                                // 3768
            return units === 'month' ? months : months / 12;                                                           // 3769
        } else {                                                                                                       // 3770
            // handle milliseconds separately because of floating point math errors (issue #1867)                      // 3771
            days = this._days + Math.round(monthsToDays(this._months));                                                // 3772
            switch (units) {                                                                                           // 3773
                case 'week'   : return days / 7     + milliseconds / 6048e5;                                           // 3774
                case 'day'    : return days         + milliseconds / 864e5;                                            // 3775
                case 'hour'   : return days * 24    + milliseconds / 36e5;                                             // 3776
                case 'minute' : return days * 1440  + milliseconds / 6e4;                                              // 3777
                case 'second' : return days * 86400 + milliseconds / 1000;                                             // 3778
                // Math.floor prevents floating point math errors here                                                 // 3779
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;                                    // 3780
                default: throw new Error('Unknown unit ' + units);                                                     // 3781
            }                                                                                                          // 3782
        }                                                                                                              // 3783
    }                                                                                                                  // 3784
                                                                                                                       // 3785
    // TODO: Use this.as('ms')?                                                                                        // 3786
    function duration_as__valueOf () {                                                                                 // 3787
        return (                                                                                                       // 3788
            this._milliseconds +                                                                                       // 3789
            this._days * 864e5 +                                                                                       // 3790
            (this._months % 12) * 2592e6 +                                                                             // 3791
            toInt(this._months / 12) * 31536e6                                                                         // 3792
        );                                                                                                             // 3793
    }                                                                                                                  // 3794
                                                                                                                       // 3795
    function makeAs (alias) {                                                                                          // 3796
        return function () {                                                                                           // 3797
            return this.as(alias);                                                                                     // 3798
        };                                                                                                             // 3799
    }                                                                                                                  // 3800
                                                                                                                       // 3801
    var asMilliseconds = makeAs('ms');                                                                                 // 3802
    var asSeconds      = makeAs('s');                                                                                  // 3803
    var asMinutes      = makeAs('m');                                                                                  // 3804
    var asHours        = makeAs('h');                                                                                  // 3805
    var asDays         = makeAs('d');                                                                                  // 3806
    var asWeeks        = makeAs('w');                                                                                  // 3807
    var asMonths       = makeAs('M');                                                                                  // 3808
    var asYears        = makeAs('y');                                                                                  // 3809
                                                                                                                       // 3810
    function duration_get__get (units) {                                                                               // 3811
        units = normalizeUnits(units);                                                                                 // 3812
        return this[units + 's']();                                                                                    // 3813
    }                                                                                                                  // 3814
                                                                                                                       // 3815
    function makeGetter(name) {                                                                                        // 3816
        return function () {                                                                                           // 3817
            return this._data[name];                                                                                   // 3818
        };                                                                                                             // 3819
    }                                                                                                                  // 3820
                                                                                                                       // 3821
    var milliseconds = makeGetter('milliseconds');                                                                     // 3822
    var seconds      = makeGetter('seconds');                                                                          // 3823
    var minutes      = makeGetter('minutes');                                                                          // 3824
    var hours        = makeGetter('hours');                                                                            // 3825
    var days         = makeGetter('days');                                                                             // 3826
    var months       = makeGetter('months');                                                                           // 3827
    var years        = makeGetter('years');                                                                            // 3828
                                                                                                                       // 3829
    function weeks () {                                                                                                // 3830
        return absFloor(this.days() / 7);                                                                              // 3831
    }                                                                                                                  // 3832
                                                                                                                       // 3833
    var round = Math.round;                                                                                            // 3834
    var thresholds = {                                                                                                 // 3835
        s: 45,  // seconds to minute                                                                                   // 3836
        m: 45,  // minutes to hour                                                                                     // 3837
        h: 22,  // hours to day                                                                                        // 3838
        d: 26,  // days to month                                                                                       // 3839
        M: 11   // months to year                                                                                      // 3840
    };                                                                                                                 // 3841
                                                                                                                       // 3842
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                          // 3843
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                      // 3844
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                    // 3845
    }                                                                                                                  // 3846
                                                                                                                       // 3847
    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {                                 // 3848
        var duration = create__createDuration(posNegDuration).abs();                                                   // 3849
        var seconds  = round(duration.as('s'));                                                                        // 3850
        var minutes  = round(duration.as('m'));                                                                        // 3851
        var hours    = round(duration.as('h'));                                                                        // 3852
        var days     = round(duration.as('d'));                                                                        // 3853
        var months   = round(duration.as('M'));                                                                        // 3854
        var years    = round(duration.as('y'));                                                                        // 3855
                                                                                                                       // 3856
        var a = seconds < thresholds.s && ['s', seconds]  ||                                                           // 3857
                minutes <= 1           && ['m']           ||                                                           // 3858
                minutes < thresholds.m && ['mm', minutes] ||                                                           // 3859
                hours   <= 1           && ['h']           ||                                                           // 3860
                hours   < thresholds.h && ['hh', hours]   ||                                                           // 3861
                days    <= 1           && ['d']           ||                                                           // 3862
                days    < thresholds.d && ['dd', days]    ||                                                           // 3863
                months  <= 1           && ['M']           ||                                                           // 3864
                months  < thresholds.M && ['MM', months]  ||                                                           // 3865
                years   <= 1           && ['y']           || ['yy', years];                                            // 3866
                                                                                                                       // 3867
        a[2] = withoutSuffix;                                                                                          // 3868
        a[3] = +posNegDuration > 0;                                                                                    // 3869
        a[4] = locale;                                                                                                 // 3870
        return substituteTimeAgo.apply(null, a);                                                                       // 3871
    }                                                                                                                  // 3872
                                                                                                                       // 3873
    // This function allows you to set a threshold for relative time strings                                           // 3874
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {                                       // 3875
        if (thresholds[threshold] === undefined) {                                                                     // 3876
            return false;                                                                                              // 3877
        }                                                                                                              // 3878
        if (limit === undefined) {                                                                                     // 3879
            return thresholds[threshold];                                                                              // 3880
        }                                                                                                              // 3881
        thresholds[threshold] = limit;                                                                                 // 3882
        return true;                                                                                                   // 3883
    }                                                                                                                  // 3884
                                                                                                                       // 3885
    function humanize (withSuffix) {                                                                                   // 3886
        var locale = this.localeData();                                                                                // 3887
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);                                       // 3888
                                                                                                                       // 3889
        if (withSuffix) {                                                                                              // 3890
            output = locale.pastFuture(+this, output);                                                                 // 3891
        }                                                                                                              // 3892
                                                                                                                       // 3893
        return locale.postformat(output);                                                                              // 3894
    }                                                                                                                  // 3895
                                                                                                                       // 3896
    var iso_string__abs = Math.abs;                                                                                    // 3897
                                                                                                                       // 3898
    function iso_string__toISOString() {                                                                               // 3899
        // for ISO strings we do not use the normal bubbling rules:                                                    // 3900
        //  * milliseconds bubble up until they become hours                                                           // 3901
        //  * days do not bubble at all                                                                                // 3902
        //  * months bubble up until they become years                                                                 // 3903
        // This is because there is no context-free conversion between hours and days                                  // 3904
        // (think of clock changes)                                                                                    // 3905
        // and also not between days and months (28-31 days per month)                                                 // 3906
        var seconds = iso_string__abs(this._milliseconds) / 1000;                                                      // 3907
        var days         = iso_string__abs(this._days);                                                                // 3908
        var months       = iso_string__abs(this._months);                                                              // 3909
        var minutes, hours, years;                                                                                     // 3910
                                                                                                                       // 3911
        // 3600 seconds -> 60 minutes -> 1 hour                                                                        // 3912
        minutes           = absFloor(seconds / 60);                                                                    // 3913
        hours             = absFloor(minutes / 60);                                                                    // 3914
        seconds %= 60;                                                                                                 // 3915
        minutes %= 60;                                                                                                 // 3916
                                                                                                                       // 3917
        // 12 months -> 1 year                                                                                         // 3918
        years  = absFloor(months / 12);                                                                                // 3919
        months %= 12;                                                                                                  // 3920
                                                                                                                       // 3921
                                                                                                                       // 3922
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                // 3923
        var Y = years;                                                                                                 // 3924
        var M = months;                                                                                                // 3925
        var D = days;                                                                                                  // 3926
        var h = hours;                                                                                                 // 3927
        var m = minutes;                                                                                               // 3928
        var s = seconds;                                                                                               // 3929
        var total = this.asSeconds();                                                                                  // 3930
                                                                                                                       // 3931
        if (!total) {                                                                                                  // 3932
            // this is the same as C#'s (Noda) and python (isodate)...                                                 // 3933
            // but not other JS (goog.date)                                                                            // 3934
            return 'P0D';                                                                                              // 3935
        }                                                                                                              // 3936
                                                                                                                       // 3937
        return (total < 0 ? '-' : '') +                                                                                // 3938
            'P' +                                                                                                      // 3939
            (Y ? Y + 'Y' : '') +                                                                                       // 3940
            (M ? M + 'M' : '') +                                                                                       // 3941
            (D ? D + 'D' : '') +                                                                                       // 3942
            ((h || m || s) ? 'T' : '') +                                                                               // 3943
            (h ? h + 'H' : '') +                                                                                       // 3944
            (m ? m + 'M' : '') +                                                                                       // 3945
            (s ? s + 'S' : '');                                                                                        // 3946
    }                                                                                                                  // 3947
                                                                                                                       // 3948
    var duration_prototype__proto = Duration.prototype;                                                                // 3949
                                                                                                                       // 3950
    duration_prototype__proto.abs            = duration_abs__abs;                                                      // 3951
    duration_prototype__proto.add            = duration_add_subtract__add;                                             // 3952
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;                                        // 3953
    duration_prototype__proto.as             = as;                                                                     // 3954
    duration_prototype__proto.asMilliseconds = asMilliseconds;                                                         // 3955
    duration_prototype__proto.asSeconds      = asSeconds;                                                              // 3956
    duration_prototype__proto.asMinutes      = asMinutes;                                                              // 3957
    duration_prototype__proto.asHours        = asHours;                                                                // 3958
    duration_prototype__proto.asDays         = asDays;                                                                 // 3959
    duration_prototype__proto.asWeeks        = asWeeks;                                                                // 3960
    duration_prototype__proto.asMonths       = asMonths;                                                               // 3961
    duration_prototype__proto.asYears        = asYears;                                                                // 3962
    duration_prototype__proto.valueOf        = duration_as__valueOf;                                                   // 3963
    duration_prototype__proto._bubble        = bubble;                                                                 // 3964
    duration_prototype__proto.get            = duration_get__get;                                                      // 3965
    duration_prototype__proto.milliseconds   = milliseconds;                                                           // 3966
    duration_prototype__proto.seconds        = seconds;                                                                // 3967
    duration_prototype__proto.minutes        = minutes;                                                                // 3968
    duration_prototype__proto.hours          = hours;                                                                  // 3969
    duration_prototype__proto.days           = days;                                                                   // 3970
    duration_prototype__proto.weeks          = weeks;                                                                  // 3971
    duration_prototype__proto.months         = months;                                                                 // 3972
    duration_prototype__proto.years          = years;                                                                  // 3973
    duration_prototype__proto.humanize       = humanize;                                                               // 3974
    duration_prototype__proto.toISOString    = iso_string__toISOString;                                                // 3975
    duration_prototype__proto.toString       = iso_string__toISOString;                                                // 3976
    duration_prototype__proto.toJSON         = iso_string__toISOString;                                                // 3977
    duration_prototype__proto.locale         = locale;                                                                 // 3978
    duration_prototype__proto.localeData     = localeData;                                                             // 3979
                                                                                                                       // 3980
    // Deprecations                                                                                                    // 3981
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;                                                                             // 3983
                                                                                                                       // 3984
    // Side effect imports                                                                                             // 3985
                                                                                                                       // 3986
    // FORMATTING                                                                                                      // 3987
                                                                                                                       // 3988
    addFormatToken('X', 0, 0, 'unix');                                                                                 // 3989
    addFormatToken('x', 0, 0, 'valueOf');                                                                              // 3990
                                                                                                                       // 3991
    // PARSING                                                                                                         // 3992
                                                                                                                       // 3993
    addRegexToken('x', matchSigned);                                                                                   // 3994
    addRegexToken('X', matchTimestamp);                                                                                // 3995
    addParseToken('X', function (input, array, config) {                                                               // 3996
        config._d = new Date(parseFloat(input, 10) * 1000);                                                            // 3997
    });                                                                                                                // 3998
    addParseToken('x', function (input, array, config) {                                                               // 3999
        config._d = new Date(toInt(input));                                                                            // 4000
    });                                                                                                                // 4001
                                                                                                                       // 4002
    // Side effect imports                                                                                             // 4003
                                                                                                                       // 4004
                                                                                                                       // 4005
    utils_hooks__hooks.version = '2.13.0';                                                                             // 4006
                                                                                                                       // 4007
    setHookCallback(local__createLocal);                                                                               // 4008
                                                                                                                       // 4009
    utils_hooks__hooks.fn                    = momentPrototype;                                                        // 4010
    utils_hooks__hooks.min                   = min;                                                                    // 4011
    utils_hooks__hooks.max                   = max;                                                                    // 4012
    utils_hooks__hooks.now                   = now;                                                                    // 4013
    utils_hooks__hooks.utc                   = create_utc__createUTC;                                                  // 4014
    utils_hooks__hooks.unix                  = moment__createUnix;                                                     // 4015
    utils_hooks__hooks.months                = lists__listMonths;                                                      // 4016
    utils_hooks__hooks.isDate                = isDate;                                                                 // 4017
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;                                     // 4018
    utils_hooks__hooks.invalid               = valid__createInvalid;                                                   // 4019
    utils_hooks__hooks.duration              = create__createDuration;                                                 // 4020
    utils_hooks__hooks.isMoment              = isMoment;                                                               // 4021
    utils_hooks__hooks.weekdays              = lists__listWeekdays;                                                    // 4022
    utils_hooks__hooks.parseZone             = moment__createInZone;                                                   // 4023
    utils_hooks__hooks.localeData            = locale_locales__getLocale;                                              // 4024
    utils_hooks__hooks.isDuration            = isDuration;                                                             // 4025
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;                                                 // 4026
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;                                                 // 4027
    utils_hooks__hooks.defineLocale          = defineLocale;                                                           // 4028
    utils_hooks__hooks.updateLocale          = updateLocale;                                                           // 4029
    utils_hooks__hooks.locales               = locale_locales__listLocales;                                            // 4030
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;                                               // 4031
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;                                                         // 4032
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;                         // 4033
    utils_hooks__hooks.prototype             = momentPrototype;                                                        // 4034
                                                                                                                       // 4035
    var _moment = utils_hooks__hooks;                                                                                  // 4036
                                                                                                                       // 4037
    return _moment;                                                                                                    // 4038
                                                                                                                       // 4039
}));                                                                                                                   // 4040
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/meteor/export.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
moment = this.moment;                                                                                                  // 2
try {                                                                                                                  // 3
    delete this.moment;                                                                                                // 4
} catch (e) {                                                                                                          // 5
}                                                                                                                      // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['momentjs:moment'] = {}, {
  moment: moment
});

})();
