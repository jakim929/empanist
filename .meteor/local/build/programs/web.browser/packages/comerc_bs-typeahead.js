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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/comerc_bs-typeahead/packages/comerc_bs-typeahead.js      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/comerc:bs-typeahead/typeahead.bundle.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * typeahead.js 0.10.5                                                                                                 // 2
 * https://github.com/twitter/typeahead.js                                                                             // 3
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT                                              // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
(function($) {                                                                                                         // 7
    var _ = function() {                                                                                               // 8
        "use strict";                                                                                                  // 9
        return {                                                                                                       // 10
            isMsie: function() {                                                                                       // 11
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },                                                                                                         // 13
            isBlankString: function(str) {                                                                             // 14
                return !str || /^\s*$/.test(str);                                                                      // 15
            },                                                                                                         // 16
            escapeRegExChars: function(str) {                                                                          // 17
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");                                     // 18
            },                                                                                                         // 19
            isString: function(obj) {                                                                                  // 20
                return typeof obj === "string";                                                                        // 21
            },                                                                                                         // 22
            isNumber: function(obj) {                                                                                  // 23
                return typeof obj === "number";                                                                        // 24
            },                                                                                                         // 25
            isArray: $.isArray,                                                                                        // 26
            isFunction: $.isFunction,                                                                                  // 27
            isObject: $.isPlainObject,                                                                                 // 28
            isUndefined: function(obj) {                                                                               // 29
                return typeof obj === "undefined";                                                                     // 30
            },                                                                                                         // 31
            toStr: function toStr(s) {                                                                                 // 32
                return _.isUndefined(s) || s === null ? "" : s + "";                                                   // 33
            },                                                                                                         // 34
            bind: $.proxy,                                                                                             // 35
            each: function(collection, cb) {                                                                           // 36
                $.each(collection, reverseArgs);                                                                       // 37
                function reverseArgs(index, value) {                                                                   // 38
                    return cb(value, index);                                                                           // 39
                }                                                                                                      // 40
            },                                                                                                         // 41
            map: $.map,                                                                                                // 42
            filter: $.grep,                                                                                            // 43
            every: function(obj, test) {                                                                               // 44
                var result = true;                                                                                     // 45
                if (!obj) {                                                                                            // 46
                    return result;                                                                                     // 47
                }                                                                                                      // 48
                $.each(obj, function(key, val) {                                                                       // 49
                    if (!(result = test.call(null, val, key, obj))) {                                                  // 50
                        return false;                                                                                  // 51
                    }                                                                                                  // 52
                });                                                                                                    // 53
                return !!result;                                                                                       // 54
            },                                                                                                         // 55
            some: function(obj, test) {                                                                                // 56
                var result = false;                                                                                    // 57
                if (!obj) {                                                                                            // 58
                    return result;                                                                                     // 59
                }                                                                                                      // 60
                $.each(obj, function(key, val) {                                                                       // 61
                    if (result = test.call(null, val, key, obj)) {                                                     // 62
                        return false;                                                                                  // 63
                    }                                                                                                  // 64
                });                                                                                                    // 65
                return !!result;                                                                                       // 66
            },                                                                                                         // 67
            mixin: $.extend,                                                                                           // 68
            getUniqueId: function() {                                                                                  // 69
                var counter = 0;                                                                                       // 70
                return function() {                                                                                    // 71
                    return counter++;                                                                                  // 72
                };                                                                                                     // 73
            }(),                                                                                                       // 74
            templatify: function templatify(obj) {                                                                     // 75
                return $.isFunction(obj) ? obj : template;                                                             // 76
                function template() {                                                                                  // 77
                    return String(obj);                                                                                // 78
                }                                                                                                      // 79
            },                                                                                                         // 80
            defer: function(fn) {                                                                                      // 81
                setTimeout(fn, 0);                                                                                     // 82
            },                                                                                                         // 83
            debounce: function(func, wait, immediate) {                                                                // 84
                var timeout, result;                                                                                   // 85
                return function() {                                                                                    // 86
                    var context = this, args = arguments, later, callNow;                                              // 87
                    later = function() {                                                                               // 88
                        timeout = null;                                                                                // 89
                        if (!immediate) {                                                                              // 90
                            result = func.apply(context, args);                                                        // 91
                        }                                                                                              // 92
                    };                                                                                                 // 93
                    callNow = immediate && !timeout;                                                                   // 94
                    clearTimeout(timeout);                                                                             // 95
                    timeout = setTimeout(later, wait);                                                                 // 96
                    if (callNow) {                                                                                     // 97
                        result = func.apply(context, args);                                                            // 98
                    }                                                                                                  // 99
                    return result;                                                                                     // 100
                };                                                                                                     // 101
            },                                                                                                         // 102
            throttle: function(func, wait) {                                                                           // 103
                var context, args, timeout, result, previous, later;                                                   // 104
                previous = 0;                                                                                          // 105
                later = function() {                                                                                   // 106
                    previous = new Date();                                                                             // 107
                    timeout = null;                                                                                    // 108
                    result = func.apply(context, args);                                                                // 109
                };                                                                                                     // 110
                return function() {                                                                                    // 111
                    var now = new Date(), remaining = wait - (now - previous);                                         // 112
                    context = this;                                                                                    // 113
                    args = arguments;                                                                                  // 114
                    if (remaining <= 0) {                                                                              // 115
                        clearTimeout(timeout);                                                                         // 116
                        timeout = null;                                                                                // 117
                        previous = now;                                                                                // 118
                        result = func.apply(context, args);                                                            // 119
                    } else if (!timeout) {                                                                             // 120
                        timeout = setTimeout(later, remaining);                                                        // 121
                    }                                                                                                  // 122
                    return result;                                                                                     // 123
                };                                                                                                     // 124
            },                                                                                                         // 125
            noop: function() {}                                                                                        // 126
        };                                                                                                             // 127
    }();                                                                                                               // 128
    var VERSION = "0.10.5";                                                                                            // 129
    var tokenizers = function() {                                                                                      // 130
        "use strict";                                                                                                  // 131
        return {                                                                                                       // 132
            nonword: nonword,                                                                                          // 133
            whitespace: whitespace,                                                                                    // 134
            obj: {                                                                                                     // 135
                nonword: getObjTokenizer(nonword),                                                                     // 136
                whitespace: getObjTokenizer(whitespace)                                                                // 137
            }                                                                                                          // 138
        };                                                                                                             // 139
        function whitespace(str) {                                                                                     // 140
            str = _.toStr(str);                                                                                        // 141
            return str ? str.split(/\s+/) : [];                                                                        // 142
        }                                                                                                              // 143
        function nonword(str) {                                                                                        // 144
            str = _.toStr(str);                                                                                        // 145
            return str ? str.split(/\W+/) : [];                                                                        // 146
        }                                                                                                              // 147
        function getObjTokenizer(tokenizer) {                                                                          // 148
            return function setKey() {                                                                                 // 149
                var args = [].slice.call(arguments, 0);                                                                // 150
                return function tokenize(o) {                                                                          // 151
                    var tokens = [];                                                                                   // 152
                    _.each(args, function(k) {                                                                         // 153
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));                                              // 154
                    });                                                                                                // 155
                    return tokens;                                                                                     // 156
                };                                                                                                     // 157
            };                                                                                                         // 158
        }                                                                                                              // 159
    }();                                                                                                               // 160
    var LruCache = function() {                                                                                        // 161
        "use strict";                                                                                                  // 162
        function LruCache(maxSize) {                                                                                   // 163
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;                                                        // 164
            this.reset();                                                                                              // 165
            if (this.maxSize <= 0) {                                                                                   // 166
                this.set = this.get = $.noop;                                                                          // 167
            }                                                                                                          // 168
        }                                                                                                              // 169
        _.mixin(LruCache.prototype, {                                                                                  // 170
            set: function set(key, val) {                                                                              // 171
                var tailItem = this.list.tail, node;                                                                   // 172
                if (this.size >= this.maxSize) {                                                                       // 173
                    this.list.remove(tailItem);                                                                        // 174
                    delete this.hash[tailItem.key];                                                                    // 175
                }                                                                                                      // 176
                if (node = this.hash[key]) {                                                                           // 177
                    node.val = val;                                                                                    // 178
                    this.list.moveToFront(node);                                                                       // 179
                } else {                                                                                               // 180
                    node = new Node(key, val);                                                                         // 181
                    this.list.add(node);                                                                               // 182
                    this.hash[key] = node;                                                                             // 183
                    this.size++;                                                                                       // 184
                }                                                                                                      // 185
            },                                                                                                         // 186
            get: function get(key) {                                                                                   // 187
                var node = this.hash[key];                                                                             // 188
                if (node) {                                                                                            // 189
                    this.list.moveToFront(node);                                                                       // 190
                    return node.val;                                                                                   // 191
                }                                                                                                      // 192
            },                                                                                                         // 193
            reset: function reset() {                                                                                  // 194
                this.size = 0;                                                                                         // 195
                this.hash = {};                                                                                        // 196
                this.list = new List();                                                                                // 197
            }                                                                                                          // 198
        });                                                                                                            // 199
        function List() {                                                                                              // 200
            this.head = this.tail = null;                                                                              // 201
        }                                                                                                              // 202
        _.mixin(List.prototype, {                                                                                      // 203
            add: function add(node) {                                                                                  // 204
                if (this.head) {                                                                                       // 205
                    node.next = this.head;                                                                             // 206
                    this.head.prev = node;                                                                             // 207
                }                                                                                                      // 208
                this.head = node;                                                                                      // 209
                this.tail = this.tail || node;                                                                         // 210
            },                                                                                                         // 211
            remove: function remove(node) {                                                                            // 212
                node.prev ? node.prev.next = node.next : this.head = node.next;                                        // 213
                node.next ? node.next.prev = node.prev : this.tail = node.prev;                                        // 214
            },                                                                                                         // 215
            moveToFront: function(node) {                                                                              // 216
                this.remove(node);                                                                                     // 217
                this.add(node);                                                                                        // 218
            }                                                                                                          // 219
        });                                                                                                            // 220
        function Node(key, val) {                                                                                      // 221
            this.key = key;                                                                                            // 222
            this.val = val;                                                                                            // 223
            this.prev = this.next = null;                                                                              // 224
        }                                                                                                              // 225
        return LruCache;                                                                                               // 226
    }();                                                                                                               // 227
    var PersistentStorage = function() {                                                                               // 228
        "use strict";                                                                                                  // 229
        var ls, methods;                                                                                               // 230
        try {                                                                                                          // 231
            ls = window.localStorage;                                                                                  // 232
            ls.setItem("~~~", "!");                                                                                    // 233
            ls.removeItem("~~~");                                                                                      // 234
        } catch (err) {                                                                                                // 235
            ls = null;                                                                                                 // 236
        }                                                                                                              // 237
        function PersistentStorage(namespace) {                                                                        // 238
            this.prefix = [ "__", namespace, "__" ].join("");                                                          // 239
            this.ttlKey = "__ttl__";                                                                                   // 240
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));                                       // 241
        }                                                                                                              // 242
        if (ls && window.JSON) {                                                                                       // 243
            methods = {                                                                                                // 244
                _prefix: function(key) {                                                                               // 245
                    return this.prefix + key;                                                                          // 246
                },                                                                                                     // 247
                _ttlKey: function(key) {                                                                               // 248
                    return this._prefix(key) + this.ttlKey;                                                            // 249
                },                                                                                                     // 250
                get: function(key) {                                                                                   // 251
                    if (this.isExpired(key)) {                                                                         // 252
                        this.remove(key);                                                                              // 253
                    }                                                                                                  // 254
                    return decode(ls.getItem(this._prefix(key)));                                                      // 255
                },                                                                                                     // 256
                set: function(key, val, ttl) {                                                                         // 257
                    if (_.isNumber(ttl)) {                                                                             // 258
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));                                            // 259
                    } else {                                                                                           // 260
                        ls.removeItem(this._ttlKey(key));                                                              // 261
                    }                                                                                                  // 262
                    return ls.setItem(this._prefix(key), encode(val));                                                 // 263
                },                                                                                                     // 264
                remove: function(key) {                                                                                // 265
                    ls.removeItem(this._ttlKey(key));                                                                  // 266
                    ls.removeItem(this._prefix(key));                                                                  // 267
                    return this;                                                                                       // 268
                },                                                                                                     // 269
                clear: function() {                                                                                    // 270
                    var i, key, keys = [], len = ls.length;                                                            // 271
                    for (i = 0; i < len; i++) {                                                                        // 272
                        if ((key = ls.key(i)).match(this.keyMatcher)) {                                                // 273
                            keys.push(key.replace(this.keyMatcher, ""));                                               // 274
                        }                                                                                              // 275
                    }                                                                                                  // 276
                    for (i = keys.length; i--; ) {                                                                     // 277
                        this.remove(keys[i]);                                                                          // 278
                    }                                                                                                  // 279
                    return this;                                                                                       // 280
                },                                                                                                     // 281
                isExpired: function(key) {                                                                             // 282
                    var ttl = decode(ls.getItem(this._ttlKey(key)));                                                   // 283
                    return _.isNumber(ttl) && now() > ttl ? true : false;                                              // 284
                }                                                                                                      // 285
            };                                                                                                         // 286
        } else {                                                                                                       // 287
            methods = {                                                                                                // 288
                get: _.noop,                                                                                           // 289
                set: _.noop,                                                                                           // 290
                remove: _.noop,                                                                                        // 291
                clear: _.noop,                                                                                         // 292
                isExpired: _.noop                                                                                      // 293
            };                                                                                                         // 294
        }                                                                                                              // 295
        _.mixin(PersistentStorage.prototype, methods);                                                                 // 296
        return PersistentStorage;                                                                                      // 297
        function now() {                                                                                               // 298
            return new Date().getTime();                                                                               // 299
        }                                                                                                              // 300
        function encode(val) {                                                                                         // 301
            return JSON.stringify(_.isUndefined(val) ? null : val);                                                    // 302
        }                                                                                                              // 303
        function decode(val) {                                                                                         // 304
            return JSON.parse(val);                                                                                    // 305
        }                                                                                                              // 306
    }();                                                                                                               // 307
    var Transport = function() {                                                                                       // 308
        "use strict";                                                                                                  // 309
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);    // 310
        function Transport(o) {                                                                                        // 311
            o = o || {};                                                                                               // 312
            this.cancelled = false;                                                                                    // 313
            this.lastUrl = null;                                                                                       // 314
            this._send = o.transport ? callbackToDeferred(o.transport) : $.ajax;                                       // 315
            this._get = o.rateLimiter ? o.rateLimiter(this._get) : this._get;                                          // 316
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;                                           // 317
        }                                                                                                              // 318
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {                                        // 319
            maxPendingRequests = num;                                                                                  // 320
        };                                                                                                             // 321
        Transport.resetCache = function resetCache() {                                                                 // 322
            sharedCache.reset();                                                                                       // 323
        };                                                                                                             // 324
        _.mixin(Transport.prototype, {                                                                                 // 325
            _get: function(url, o, cb) {                                                                               // 326
                var that = this, jqXhr;                                                                                // 327
                if (this.cancelled || url !== this.lastUrl) {                                                          // 328
                    return;                                                                                            // 329
                }                                                                                                      // 330
                if (jqXhr = pendingRequests[url]) {                                                                    // 331
                    jqXhr.done(done).fail(fail);                                                                       // 332
                } else if (pendingRequestsCount < maxPendingRequests) {                                                // 333
                    pendingRequestsCount++;                                                                            // 334
                    pendingRequests[url] = this._send(url, o).done(done).fail(fail).always(always);                    // 335
                } else {                                                                                               // 336
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);                                              // 337
                }                                                                                                      // 338
                function done(resp) {                                                                                  // 339
                    cb && cb(null, resp);                                                                              // 340
                    that._cache.set(url, resp);                                                                        // 341
                }                                                                                                      // 342
                function fail() {                                                                                      // 343
                    cb && cb(true);                                                                                    // 344
                }                                                                                                      // 345
                function always() {                                                                                    // 346
                    pendingRequestsCount--;                                                                            // 347
                    delete pendingRequests[url];                                                                       // 348
                    if (that.onDeckRequestArgs) {                                                                      // 349
                        that._get.apply(that, that.onDeckRequestArgs);                                                 // 350
                        that.onDeckRequestArgs = null;                                                                 // 351
                    }                                                                                                  // 352
                }                                                                                                      // 353
            },                                                                                                         // 354
            get: function(url, o, cb) {                                                                                // 355
                var resp;                                                                                              // 356
                if (_.isFunction(o)) {                                                                                 // 357
                    cb = o;                                                                                            // 358
                    o = {};                                                                                            // 359
                }                                                                                                      // 360
                this.cancelled = false;                                                                                // 361
                this.lastUrl = url;                                                                                    // 362
                if (resp = this._cache.get(url)) {                                                                     // 363
                    _.defer(function() {                                                                               // 364
                        cb && cb(null, resp);                                                                          // 365
                    });                                                                                                // 366
                } else {                                                                                               // 367
                    this._get(url, o, cb);                                                                             // 368
                }                                                                                                      // 369
                return !!resp;                                                                                         // 370
            },                                                                                                         // 371
            cancel: function() {                                                                                       // 372
                this.cancelled = true;                                                                                 // 373
            }                                                                                                          // 374
        });                                                                                                            // 375
        return Transport;                                                                                              // 376
        function callbackToDeferred(fn) {                                                                              // 377
            return function customSendWrapper(url, o) {                                                                // 378
                var deferred = $.Deferred();                                                                           // 379
                fn(url, o, onSuccess, onError);                                                                        // 380
                return deferred;                                                                                       // 381
                function onSuccess(resp) {                                                                             // 382
                    _.defer(function() {                                                                               // 383
                        deferred.resolve(resp);                                                                        // 384
                    });                                                                                                // 385
                }                                                                                                      // 386
                function onError(err) {                                                                                // 387
                    _.defer(function() {                                                                               // 388
                        deferred.reject(err);                                                                          // 389
                    });                                                                                                // 390
                }                                                                                                      // 391
            };                                                                                                         // 392
        }                                                                                                              // 393
    }();                                                                                                               // 394
    var SearchIndex = function() {                                                                                     // 395
        "use strict";                                                                                                  // 396
        function SearchIndex(o) {                                                                                      // 397
            o = o || {};                                                                                               // 398
            if (!o.datumTokenizer || !o.queryTokenizer) {                                                              // 399
                $.error("datumTokenizer and queryTokenizer are both required");                                        // 400
            }                                                                                                          // 401
            this.datumTokenizer = o.datumTokenizer;                                                                    // 402
            this.queryTokenizer = o.queryTokenizer;                                                                    // 403
            this.reset();                                                                                              // 404
        }                                                                                                              // 405
        _.mixin(SearchIndex.prototype, {                                                                               // 406
            bootstrap: function bootstrap(o) {                                                                         // 407
                this.datums = o.datums;                                                                                // 408
                this.trie = o.trie;                                                                                    // 409
            },                                                                                                         // 410
            add: function(data) {                                                                                      // 411
                var that = this;                                                                                       // 412
                data = _.isArray(data) ? data : [ data ];                                                              // 413
                _.each(data, function(datum) {                                                                         // 414
                    var id, tokens;                                                                                    // 415
                    id = that.datums.push(datum) - 1;                                                                  // 416
                    tokens = normalizeTokens(that.datumTokenizer(datum));                                              // 417
                    _.each(tokens, function(token) {                                                                   // 418
                        var node, chars, ch;                                                                           // 419
                        node = that.trie;                                                                              // 420
                        chars = token.split("");                                                                       // 421
                        while (ch = chars.shift()) {                                                                   // 422
                            node = node.children[ch] || (node.children[ch] = newNode());                               // 423
                            node.ids.push(id);                                                                         // 424
                        }                                                                                              // 425
                    });                                                                                                // 426
                });                                                                                                    // 427
            },                                                                                                         // 428
            get: function get(query) {                                                                                 // 429
                var that = this, tokens, matches;                                                                      // 430
                tokens = normalizeTokens(this.queryTokenizer(query));                                                  // 431
                _.each(tokens, function(token) {                                                                       // 432
                    var node, chars, ch, ids;                                                                          // 433
                    if (matches && matches.length === 0) {                                                             // 434
                        return false;                                                                                  // 435
                    }                                                                                                  // 436
                    node = that.trie;                                                                                  // 437
                    chars = token.split("");                                                                           // 438
                    while (node && (ch = chars.shift())) {                                                             // 439
                        node = node.children[ch];                                                                      // 440
                    }                                                                                                  // 441
                    if (node && chars.length === 0) {                                                                  // 442
                        ids = node.ids.slice(0);                                                                       // 443
                        matches = matches ? getIntersection(matches, ids) : ids;                                       // 444
                    } else {                                                                                           // 445
                        matches = [];                                                                                  // 446
                        return false;                                                                                  // 447
                    }                                                                                                  // 448
                });                                                                                                    // 449
                return matches ? _.map(unique(matches), function(id) {                                                 // 450
                    return that.datums[id];                                                                            // 451
                }) : [];                                                                                               // 452
            },                                                                                                         // 453
            reset: function reset() {                                                                                  // 454
                this.datums = [];                                                                                      // 455
                this.trie = newNode();                                                                                 // 456
            },                                                                                                         // 457
            serialize: function serialize() {                                                                          // 458
                return {                                                                                               // 459
                    datums: this.datums,                                                                               // 460
                    trie: this.trie                                                                                    // 461
                };                                                                                                     // 462
            }                                                                                                          // 463
        });                                                                                                            // 464
        return SearchIndex;                                                                                            // 465
        function normalizeTokens(tokens) {                                                                             // 466
            tokens = _.filter(tokens, function(token) {                                                                // 467
                return !!token;                                                                                        // 468
            });                                                                                                        // 469
            tokens = _.map(tokens, function(token) {                                                                   // 470
                return token.toLowerCase();                                                                            // 471
            });                                                                                                        // 472
            return tokens;                                                                                             // 473
        }                                                                                                              // 474
        function newNode() {                                                                                           // 475
            return {                                                                                                   // 476
                ids: [],                                                                                               // 477
                children: {}                                                                                           // 478
            };                                                                                                         // 479
        }                                                                                                              // 480
        function unique(array) {                                                                                       // 481
            var seen = {}, uniques = [];                                                                               // 482
            for (var i = 0, len = array.length; i < len; i++) {                                                        // 483
                if (!seen[array[i]]) {                                                                                 // 484
                    seen[array[i]] = true;                                                                             // 485
                    uniques.push(array[i]);                                                                            // 486
                }                                                                                                      // 487
            }                                                                                                          // 488
            return uniques;                                                                                            // 489
        }                                                                                                              // 490
        function getIntersection(arrayA, arrayB) {                                                                     // 491
            var ai = 0, bi = 0, intersection = [];                                                                     // 492
            arrayA = arrayA.sort(compare);                                                                             // 493
            arrayB = arrayB.sort(compare);                                                                             // 494
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;                                                  // 495
            while (ai < lenArrayA && bi < lenArrayB) {                                                                 // 496
                if (arrayA[ai] < arrayB[bi]) {                                                                         // 497
                    ai++;                                                                                              // 498
                } else if (arrayA[ai] > arrayB[bi]) {                                                                  // 499
                    bi++;                                                                                              // 500
                } else {                                                                                               // 501
                    intersection.push(arrayA[ai]);                                                                     // 502
                    ai++;                                                                                              // 503
                    bi++;                                                                                              // 504
                }                                                                                                      // 505
            }                                                                                                          // 506
            return intersection;                                                                                       // 507
            function compare(a, b) {                                                                                   // 508
                return a - b;                                                                                          // 509
            }                                                                                                          // 510
        }                                                                                                              // 511
    }();                                                                                                               // 512
    var oParser = function() {                                                                                         // 513
        "use strict";                                                                                                  // 514
        return {                                                                                                       // 515
            local: getLocal,                                                                                           // 516
            prefetch: getPrefetch,                                                                                     // 517
            remote: getRemote                                                                                          // 518
        };                                                                                                             // 519
        function getLocal(o) {                                                                                         // 520
            return o.local || null;                                                                                    // 521
        }                                                                                                              // 522
        function getPrefetch(o) {                                                                                      // 523
            var prefetch, defaults;                                                                                    // 524
            defaults = {                                                                                               // 525
                url: null,                                                                                             // 526
                thumbprint: "",                                                                                        // 527
                ttl: 24 * 60 * 60 * 1e3,                                                                               // 528
                filter: null,                                                                                          // 529
                ajax: {}                                                                                               // 530
            };                                                                                                         // 531
            if (prefetch = o.prefetch || null) {                                                                       // 532
                prefetch = _.isString(prefetch) ? {                                                                    // 533
                    url: prefetch                                                                                      // 534
                } : prefetch;                                                                                          // 535
                prefetch = _.mixin(defaults, prefetch);                                                                // 536
                prefetch.thumbprint = VERSION + prefetch.thumbprint;                                                   // 537
                prefetch.ajax.type = prefetch.ajax.type || "GET";                                                      // 538
                prefetch.ajax.dataType = prefetch.ajax.dataType || "json";                                             // 539
                !prefetch.url && $.error("prefetch requires url to be set");                                           // 540
            }                                                                                                          // 541
            return prefetch;                                                                                           // 542
        }                                                                                                              // 543
        function getRemote(o) {                                                                                        // 544
            var remote, defaults;                                                                                      // 545
            defaults = {                                                                                               // 546
                url: null,                                                                                             // 547
                cache: true,                                                                                           // 548
                wildcard: "%QUERY",                                                                                    // 549
                replace: null,                                                                                         // 550
                rateLimitBy: "debounce",                                                                               // 551
                rateLimitWait: 300,                                                                                    // 552
                send: null,                                                                                            // 553
                filter: null,                                                                                          // 554
                ajax: {}                                                                                               // 555
            };                                                                                                         // 556
            if (remote = o.remote || null) {                                                                           // 557
                remote = _.isString(remote) ? {                                                                        // 558
                    url: remote                                                                                        // 559
                } : remote;                                                                                            // 560
                remote = _.mixin(defaults, remote);                                                                    // 561
                remote.rateLimiter = /^throttle$/i.test(remote.rateLimitBy) ? byThrottle(remote.rateLimitWait) : byDebounce(remote.rateLimitWait);
                remote.ajax.type = remote.ajax.type || "GET";                                                          // 563
                remote.ajax.dataType = remote.ajax.dataType || "json";                                                 // 564
                delete remote.rateLimitBy;                                                                             // 565
                delete remote.rateLimitWait;                                                                           // 566
                !remote.url && $.error("remote requires url to be set");                                               // 567
            }                                                                                                          // 568
            return remote;                                                                                             // 569
            function byDebounce(wait) {                                                                                // 570
                return function(fn) {                                                                                  // 571
                    return _.debounce(fn, wait);                                                                       // 572
                };                                                                                                     // 573
            }                                                                                                          // 574
            function byThrottle(wait) {                                                                                // 575
                return function(fn) {                                                                                  // 576
                    return _.throttle(fn, wait);                                                                       // 577
                };                                                                                                     // 578
            }                                                                                                          // 579
        }                                                                                                              // 580
    }();                                                                                                               // 581
    (function(root) {                                                                                                  // 582
        "use strict";                                                                                                  // 583
        var old, keys;                                                                                                 // 584
        old = root.Bloodhound;                                                                                         // 585
        keys = {                                                                                                       // 586
            data: "data",                                                                                              // 587
            protocol: "protocol",                                                                                      // 588
            thumbprint: "thumbprint"                                                                                   // 589
        };                                                                                                             // 590
        root.Bloodhound = Bloodhound;                                                                                  // 591
        function Bloodhound(o) {                                                                                       // 592
            if (!o || !o.local && !o.prefetch && !o.remote) {                                                          // 593
                $.error("one of local, prefetch, or remote is required");                                              // 594
            }                                                                                                          // 595
            this.limit = o.limit || 5;                                                                                 // 596
            this.sorter = getSorter(o.sorter);                                                                         // 597
            this.dupDetector = o.dupDetector || ignoreDuplicates;                                                      // 598
            this.local = oParser.local(o);                                                                             // 599
            this.prefetch = oParser.prefetch(o);                                                                       // 600
            this.remote = oParser.remote(o);                                                                           // 601
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;                        // 602
            this.index = new SearchIndex({                                                                             // 603
                datumTokenizer: o.datumTokenizer,                                                                      // 604
                queryTokenizer: o.queryTokenizer                                                                       // 605
            });                                                                                                        // 606
            this.storage = this.cacheKey ? new PersistentStorage(this.cacheKey) : null;                                // 607
        }                                                                                                              // 608
        Bloodhound.noConflict = function noConflict() {                                                                // 609
            root.Bloodhound = old;                                                                                     // 610
            return Bloodhound;                                                                                         // 611
        };                                                                                                             // 612
        Bloodhound.tokenizers = tokenizers;                                                                            // 613
        _.mixin(Bloodhound.prototype, {                                                                                // 614
            _loadPrefetch: function loadPrefetch(o) {                                                                  // 615
                var that = this, serialized, deferred;                                                                 // 616
                if (serialized = this._readFromStorage(o.thumbprint)) {                                                // 617
                    this.index.bootstrap(serialized);                                                                  // 618
                    deferred = $.Deferred().resolve();                                                                 // 619
                } else {                                                                                               // 620
                    deferred = $.ajax(o.url, o.ajax).done(handlePrefetchResponse);                                     // 621
                }                                                                                                      // 622
                return deferred;                                                                                       // 623
                function handlePrefetchResponse(resp) {                                                                // 624
                    that.clear();                                                                                      // 625
                    that.add(o.filter ? o.filter(resp) : resp);                                                        // 626
                    that._saveToStorage(that.index.serialize(), o.thumbprint, o.ttl);                                  // 627
                }                                                                                                      // 628
            },                                                                                                         // 629
            _getFromRemote: function getFromRemote(query, cb) {                                                        // 630
                var that = this, url, uriEncodedQuery;                                                                 // 631
                if (!this.transport) {                                                                                 // 632
                    return;                                                                                            // 633
                }                                                                                                      // 634
                query = query || "";                                                                                   // 635
                uriEncodedQuery = encodeURIComponent(query);                                                           // 636
                url = this.remote.replace ? this.remote.replace(this.remote.url, query) : this.remote.url.replace(this.remote.wildcard, uriEncodedQuery);
                return this.transport.get(url, this.remote.ajax, handleRemoteResponse);                                // 638
                function handleRemoteResponse(err, resp) {                                                             // 639
                    err ? cb([]) : cb(that.remote.filter ? that.remote.filter(resp) : resp);                           // 640
                }                                                                                                      // 641
            },                                                                                                         // 642
            _cancelLastRemoteRequest: function cancelLastRemoteRequest() {                                             // 643
                this.transport && this.transport.cancel();                                                             // 644
            },                                                                                                         // 645
            _saveToStorage: function saveToStorage(data, thumbprint, ttl) {                                            // 646
                if (this.storage) {                                                                                    // 647
                    this.storage.set(keys.data, data, ttl);                                                            // 648
                    this.storage.set(keys.protocol, location.protocol, ttl);                                           // 649
                    this.storage.set(keys.thumbprint, thumbprint, ttl);                                                // 650
                }                                                                                                      // 651
            },                                                                                                         // 652
            _readFromStorage: function readFromStorage(thumbprint) {                                                   // 653
                var stored = {}, isExpired;                                                                            // 654
                if (this.storage) {                                                                                    // 655
                    stored.data = this.storage.get(keys.data);                                                         // 656
                    stored.protocol = this.storage.get(keys.protocol);                                                 // 657
                    stored.thumbprint = this.storage.get(keys.thumbprint);                                             // 658
                }                                                                                                      // 659
                isExpired = stored.thumbprint !== thumbprint || stored.protocol !== location.protocol;                 // 660
                return stored.data && !isExpired ? stored.data : null;                                                 // 661
            },                                                                                                         // 662
            _initialize: function initialize() {                                                                       // 663
                var that = this, local = this.local, deferred;                                                         // 664
                deferred = this.prefetch ? this._loadPrefetch(this.prefetch) : $.Deferred().resolve();                 // 665
                local && deferred.done(addLocalToIndex);                                                               // 666
                this.transport = this.remote ? new Transport(this.remote) : null;                                      // 667
                return this.initPromise = deferred.promise();                                                          // 668
                function addLocalToIndex() {                                                                           // 669
                    that.add(_.isFunction(local) ? local() : local);                                                   // 670
                }                                                                                                      // 671
            },                                                                                                         // 672
            initialize: function initialize(force) {                                                                   // 673
                return !this.initPromise || force ? this._initialize() : this.initPromise;                             // 674
            },                                                                                                         // 675
            add: function add(data) {                                                                                  // 676
                this.index.add(data);                                                                                  // 677
            },                                                                                                         // 678
            get: function get(query, cb) {                                                                             // 679
                var that = this, matches = [], cacheHit = false;                                                       // 680
                matches = this.index.get(query);                                                                       // 681
                matches = this.sorter(matches).slice(0, this.limit);                                                   // 682
                matches.length < this.limit ? cacheHit = this._getFromRemote(query, returnRemoteMatches) : this._cancelLastRemoteRequest();
                if (!cacheHit) {                                                                                       // 684
                    (matches.length > 0 || !this.transport) && cb && cb(matches);                                      // 685
                }                                                                                                      // 686
                function returnRemoteMatches(remoteMatches) {                                                          // 687
                    var matchesWithBackfill = matches.slice(0);                                                        // 688
                    _.each(remoteMatches, function(remoteMatch) {                                                      // 689
                        var isDuplicate;                                                                               // 690
                        isDuplicate = _.some(matchesWithBackfill, function(match) {                                    // 691
                            return that.dupDetector(remoteMatch, match);                                               // 692
                        });                                                                                            // 693
                        !isDuplicate && matchesWithBackfill.push(remoteMatch);                                         // 694
                        return matchesWithBackfill.length < that.limit;                                                // 695
                    });                                                                                                // 696
                    cb && cb(that.sorter(matchesWithBackfill));                                                        // 697
                }                                                                                                      // 698
            },                                                                                                         // 699
            clear: function clear() {                                                                                  // 700
                this.index.reset();                                                                                    // 701
            },                                                                                                         // 702
            clearPrefetchCache: function clearPrefetchCache() {                                                        // 703
                this.storage && this.storage.clear();                                                                  // 704
            },                                                                                                         // 705
            clearRemoteCache: function clearRemoteCache() {                                                            // 706
                this.transport && Transport.resetCache();                                                              // 707
            },                                                                                                         // 708
            ttAdapter: function ttAdapter() {                                                                          // 709
                return _.bind(this.get, this);                                                                         // 710
            }                                                                                                          // 711
        });                                                                                                            // 712
        return Bloodhound;                                                                                             // 713
        function getSorter(sortFn) {                                                                                   // 714
            return _.isFunction(sortFn) ? sort : noSort;                                                               // 715
            function sort(array) {                                                                                     // 716
                return array.sort(sortFn);                                                                             // 717
            }                                                                                                          // 718
            function noSort(array) {                                                                                   // 719
                return array;                                                                                          // 720
            }                                                                                                          // 721
        }                                                                                                              // 722
        function ignoreDuplicates() {                                                                                  // 723
            return false;                                                                                              // 724
        }                                                                                                              // 725
    })(this);                                                                                                          // 726
    var html = function() {                                                                                            // 727
        return {                                                                                                       // 728
            wrapper: '<span class="twitter-typeahead"></span>',                                                        // 729
            dropdown: '<span class="tt-dropdown-menu"></span>',                                                        // 730
            dataset: '<div class="tt-dataset-%CLASS%"></div>',                                                         // 731
            suggestions: '<span class="tt-suggestions"></span>',                                                       // 732
            suggestion: '<div class="tt-suggestion"></div>'                                                            // 733
        };                                                                                                             // 734
    }();                                                                                                               // 735
    var css = function() {                                                                                             // 736
        "use strict";                                                                                                  // 737
        var css = {                                                                                                    // 738
            wrapper: {                                                                                                 // 739
                position: "relative",                                                                                  // 740
                display: "inline-block"                                                                                // 741
            },                                                                                                         // 742
            hint: {                                                                                                    // 743
                position: "absolute",                                                                                  // 744
                top: "0",                                                                                              // 745
                left: "0",                                                                                             // 746
                borderColor: "transparent",                                                                            // 747
                boxShadow: "none",                                                                                     // 748
                opacity: "1"                                                                                           // 749
            },                                                                                                         // 750
            input: {                                                                                                   // 751
                position: "relative",                                                                                  // 752
                verticalAlign: "top",                                                                                  // 753
                backgroundColor: "transparent"                                                                         // 754
            },                                                                                                         // 755
            inputWithNoHint: {                                                                                         // 756
                position: "relative",                                                                                  // 757
                verticalAlign: "top"                                                                                   // 758
            },                                                                                                         // 759
            dropdown: {                                                                                                // 760
                position: "absolute",                                                                                  // 761
                top: "100%",                                                                                           // 762
                left: "0",                                                                                             // 763
                zIndex: "100",                                                                                         // 764
                display: "none"                                                                                        // 765
            },                                                                                                         // 766
            suggestions: {                                                                                             // 767
                display: "block"                                                                                       // 768
            },                                                                                                         // 769
            suggestion: {                                                                                              // 770
                whiteSpace: "nowrap",                                                                                  // 771
                cursor: "pointer"                                                                                      // 772
            },                                                                                                         // 773
            suggestionChild: {                                                                                         // 774
                whiteSpace: "normal"                                                                                   // 775
            },                                                                                                         // 776
            ltr: {                                                                                                     // 777
                left: "0",                                                                                             // 778
                right: "auto"                                                                                          // 779
            },                                                                                                         // 780
            rtl: {                                                                                                     // 781
                left: "auto",                                                                                          // 782
                right: " 0"                                                                                            // 783
            }                                                                                                          // 784
        };                                                                                                             // 785
        if (_.isMsie()) {                                                                                              // 786
            _.mixin(css.input, {                                                                                       // 787
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" // 788
            });                                                                                                        // 789
        }                                                                                                              // 790
        if (_.isMsie() && _.isMsie() <= 7) {                                                                           // 791
            _.mixin(css.input, {                                                                                       // 792
                marginTop: "-1px"                                                                                      // 793
            });                                                                                                        // 794
        }                                                                                                              // 795
        return css;                                                                                                    // 796
    }();                                                                                                               // 797
    var EventBus = function() {                                                                                        // 798
        "use strict";                                                                                                  // 799
        var namespace = "typeahead:";                                                                                  // 800
        function EventBus(o) {                                                                                         // 801
            if (!o || !o.el) {                                                                                         // 802
                $.error("EventBus initialized without el");                                                            // 803
            }                                                                                                          // 804
            this.$el = $(o.el);                                                                                        // 805
        }                                                                                                              // 806
        _.mixin(EventBus.prototype, {                                                                                  // 807
            trigger: function(type) {                                                                                  // 808
                var args = [].slice.call(arguments, 1);                                                                // 809
                this.$el.trigger(namespace + type, args);                                                              // 810
            }                                                                                                          // 811
        });                                                                                                            // 812
        return EventBus;                                                                                               // 813
    }();                                                                                                               // 814
    var EventEmitter = function() {                                                                                    // 815
        "use strict";                                                                                                  // 816
        var splitter = /\s+/, nextTick = getNextTick();                                                                // 817
        return {                                                                                                       // 818
            onSync: onSync,                                                                                            // 819
            onAsync: onAsync,                                                                                          // 820
            off: off,                                                                                                  // 821
            trigger: trigger                                                                                           // 822
        };                                                                                                             // 823
        function on(method, types, cb, context) {                                                                      // 824
            var type;                                                                                                  // 825
            if (!cb) {                                                                                                 // 826
                return this;                                                                                           // 827
            }                                                                                                          // 828
            types = types.split(splitter);                                                                             // 829
            cb = context ? bindContext(cb, context) : cb;                                                              // 830
            this._callbacks = this._callbacks || {};                                                                   // 831
            while (type = types.shift()) {                                                                             // 832
                this._callbacks[type] = this._callbacks[type] || {                                                     // 833
                    sync: [],                                                                                          // 834
                    async: []                                                                                          // 835
                };                                                                                                     // 836
                this._callbacks[type][method].push(cb);                                                                // 837
            }                                                                                                          // 838
            return this;                                                                                               // 839
        }                                                                                                              // 840
        function onAsync(types, cb, context) {                                                                         // 841
            return on.call(this, "async", types, cb, context);                                                         // 842
        }                                                                                                              // 843
        function onSync(types, cb, context) {                                                                          // 844
            return on.call(this, "sync", types, cb, context);                                                          // 845
        }                                                                                                              // 846
        function off(types) {                                                                                          // 847
            var type;                                                                                                  // 848
            if (!this._callbacks) {                                                                                    // 849
                return this;                                                                                           // 850
            }                                                                                                          // 851
            types = types.split(splitter);                                                                             // 852
            while (type = types.shift()) {                                                                             // 853
                delete this._callbacks[type];                                                                          // 854
            }                                                                                                          // 855
            return this;                                                                                               // 856
        }                                                                                                              // 857
        function trigger(types) {                                                                                      // 858
            var type, callbacks, args, syncFlush, asyncFlush;                                                          // 859
            if (!this._callbacks) {                                                                                    // 860
                return this;                                                                                           // 861
            }                                                                                                          // 862
            types = types.split(splitter);                                                                             // 863
            args = [].slice.call(arguments, 1);                                                                        // 864
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {                                    // 865
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));                                     // 866
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));                                   // 867
                syncFlush() && nextTick(asyncFlush);                                                                   // 868
            }                                                                                                          // 869
            return this;                                                                                               // 870
        }                                                                                                              // 871
        function getFlush(callbacks, context, args) {                                                                  // 872
            return flush;                                                                                              // 873
            function flush() {                                                                                         // 874
                var cancelled;                                                                                         // 875
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {                               // 876
                    cancelled = callbacks[i].apply(context, args) === false;                                           // 877
                }                                                                                                      // 878
                return !cancelled;                                                                                     // 879
            }                                                                                                          // 880
        }                                                                                                              // 881
        function getNextTick() {                                                                                       // 882
            var nextTickFn;                                                                                            // 883
            if (window.setImmediate) {                                                                                 // 884
                nextTickFn = function nextTickSetImmediate(fn) {                                                       // 885
                    setImmediate(function() {                                                                          // 886
                        fn();                                                                                          // 887
                    });                                                                                                // 888
                };                                                                                                     // 889
            } else {                                                                                                   // 890
                nextTickFn = function nextTickSetTimeout(fn) {                                                         // 891
                    setTimeout(function() {                                                                            // 892
                        fn();                                                                                          // 893
                    }, 0);                                                                                             // 894
                };                                                                                                     // 895
            }                                                                                                          // 896
            return nextTickFn;                                                                                         // 897
        }                                                                                                              // 898
        function bindContext(fn, context) {                                                                            // 899
            return fn.bind ? fn.bind(context) : function() {                                                           // 900
                fn.apply(context, [].slice.call(arguments, 0));                                                        // 901
            };                                                                                                         // 902
        }                                                                                                              // 903
    }();                                                                                                               // 904
    var highlight = function(doc) {                                                                                    // 905
        "use strict";                                                                                                  // 906
        var defaults = {                                                                                               // 907
            node: null,                                                                                                // 908
            pattern: null,                                                                                             // 909
            tagName: "strong",                                                                                         // 910
            className: null,                                                                                           // 911
            wordsOnly: false,                                                                                          // 912
            caseSensitive: false                                                                                       // 913
        };                                                                                                             // 914
        return function hightlight(o) {                                                                                // 915
            var regex;                                                                                                 // 916
            o = _.mixin({}, defaults, o);                                                                              // 917
            if (!o.node || !o.pattern) {                                                                               // 918
                return;                                                                                                // 919
            }                                                                                                          // 920
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];                                              // 921
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);                                                 // 922
            traverse(o.node, hightlightTextNode);                                                                      // 923
            function hightlightTextNode(textNode) {                                                                    // 924
                var match, patternNode, wrapperNode;                                                                   // 925
                if (match = regex.exec(textNode.data)) {                                                               // 926
                    wrapperNode = doc.createElement(o.tagName);                                                        // 927
                    o.className && (wrapperNode.className = o.className);                                              // 928
                    patternNode = textNode.splitText(match.index);                                                     // 929
                    patternNode.splitText(match[0].length);                                                            // 930
                    wrapperNode.appendChild(patternNode.cloneNode(true));                                              // 931
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);                                        // 932
                }                                                                                                      // 933
                return !!match;                                                                                        // 934
            }                                                                                                          // 935
            function traverse(el, hightlightTextNode) {                                                                // 936
                var childNode, TEXT_NODE_TYPE = 3;                                                                     // 937
                for (var i = 0; i < el.childNodes.length; i++) {                                                       // 938
                    childNode = el.childNodes[i];                                                                      // 939
                    if (childNode.nodeType === TEXT_NODE_TYPE) {                                                       // 940
                        i += hightlightTextNode(childNode) ? 1 : 0;                                                    // 941
                    } else {                                                                                           // 942
                        traverse(childNode, hightlightTextNode);                                                       // 943
                    }                                                                                                  // 944
                }                                                                                                      // 945
            }                                                                                                          // 946
        };                                                                                                             // 947
        function getRegex(patterns, caseSensitive, wordsOnly) {                                                        // 948
            var escapedPatterns = [], regexStr;                                                                        // 949
            for (var i = 0, len = patterns.length; i < len; i++) {                                                     // 950
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));                                                 // 951
            }                                                                                                          // 952
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");                                   // 954
        }                                                                                                              // 955
    }(window.document);                                                                                                // 956
    var Input = function() {                                                                                           // 957
        "use strict";                                                                                                  // 958
        var specialKeyCodeMap;                                                                                         // 959
        specialKeyCodeMap = {                                                                                          // 960
            9: "tab",                                                                                                  // 961
            27: "esc",                                                                                                 // 962
            37: "left",                                                                                                // 963
            39: "right",                                                                                               // 964
            13: "enter",                                                                                               // 965
            38: "up",                                                                                                  // 966
            40: "down"                                                                                                 // 967
        };                                                                                                             // 968
        function Input(o) {                                                                                            // 969
            var that = this, onBlur, onFocus, onKeydown, onInput;                                                      // 970
            o = o || {};                                                                                               // 971
            if (!o.input) {                                                                                            // 972
                $.error("input is missing");                                                                           // 973
            }                                                                                                          // 974
            onBlur = _.bind(this._onBlur, this);                                                                       // 975
            onFocus = _.bind(this._onFocus, this);                                                                     // 976
            onKeydown = _.bind(this._onKeydown, this);                                                                 // 977
            onInput = _.bind(this._onInput, this);                                                                     // 978
            this.$hint = $(o.hint);                                                                                    // 979
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);        // 980
            if (this.$hint.length === 0) {                                                                             // 981
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;                       // 982
            }                                                                                                          // 983
            if (!_.isMsie()) {                                                                                         // 984
                this.$input.on("input.tt", onInput);                                                                   // 985
            } else {                                                                                                   // 986
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {                                // 987
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {                                                   // 988
                        return;                                                                                        // 989
                    }                                                                                                  // 990
                    _.defer(_.bind(that._onInput, that, $e));                                                          // 991
                });                                                                                                    // 992
            }                                                                                                          // 993
            this.query = this.$input.val();                                                                            // 994
            this.$overflowHelper = buildOverflowHelper(this.$input);                                                   // 995
        }                                                                                                              // 996
        Input.normalizeQuery = function(str) {                                                                         // 997
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");                                           // 998
        };                                                                                                             // 999
        _.mixin(Input.prototype, EventEmitter, {                                                                       // 1000
            _onBlur: function onBlur() {                                                                               // 1001
                this.resetInputValue();                                                                                // 1002
                this.trigger("blurred");                                                                               // 1003
            },                                                                                                         // 1004
            _onFocus: function onFocus() {                                                                             // 1005
                this.trigger("focused");                                                                               // 1006
            },                                                                                                         // 1007
            _onKeydown: function onKeydown($e) {                                                                       // 1008
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];                                               // 1009
                this._managePreventDefault(keyName, $e);                                                               // 1010
                if (keyName && this._shouldTrigger(keyName, $e)) {                                                     // 1011
                    this.trigger(keyName + "Keyed", $e);                                                               // 1012
                }                                                                                                      // 1013
            },                                                                                                         // 1014
            _onInput: function onInput() {                                                                             // 1015
                this._checkInputValue();                                                                               // 1016
            },                                                                                                         // 1017
            _managePreventDefault: function managePreventDefault(keyName, $e) {                                        // 1018
                var preventDefault, hintValue, inputValue;                                                             // 1019
                switch (keyName) {                                                                                     // 1020
                  case "tab":                                                                                          // 1021
                    hintValue = this.getHint();                                                                        // 1022
                    inputValue = this.getInputValue();                                                                 // 1023
                    preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);                       // 1024
                    break;                                                                                             // 1025
                                                                                                                       // 1026
                  case "up":                                                                                           // 1027
                  case "down":                                                                                         // 1028
                    preventDefault = !withModifier($e);                                                                // 1029
                    break;                                                                                             // 1030
                                                                                                                       // 1031
                  default:                                                                                             // 1032
                    preventDefault = false;                                                                            // 1033
                }                                                                                                      // 1034
                preventDefault && $e.preventDefault();                                                                 // 1035
            },                                                                                                         // 1036
            _shouldTrigger: function shouldTrigger(keyName, $e) {                                                      // 1037
                var trigger;                                                                                           // 1038
                switch (keyName) {                                                                                     // 1039
                  case "tab":                                                                                          // 1040
                    trigger = !withModifier($e);                                                                       // 1041
                    break;                                                                                             // 1042
                                                                                                                       // 1043
                  default:                                                                                             // 1044
                    trigger = true;                                                                                    // 1045
                }                                                                                                      // 1046
                return trigger;                                                                                        // 1047
            },                                                                                                         // 1048
            _checkInputValue: function checkInputValue() {                                                             // 1049
                var inputValue, areEquivalent, hasDifferentWhitespace;                                                 // 1050
                inputValue = this.getInputValue();                                                                     // 1051
                areEquivalent = areQueriesEquivalent(inputValue, this.query);                                          // 1052
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;              // 1053
                this.query = inputValue;                                                                               // 1054
                if (!areEquivalent) {                                                                                  // 1055
                    this.trigger("queryChanged", this.query);                                                          // 1056
                } else if (hasDifferentWhitespace) {                                                                   // 1057
                    this.trigger("whitespaceChanged", this.query);                                                     // 1058
                }                                                                                                      // 1059
            },                                                                                                         // 1060
            focus: function focus() {                                                                                  // 1061
                this.$input.focus();                                                                                   // 1062
            },                                                                                                         // 1063
            blur: function blur() {                                                                                    // 1064
                this.$input.blur();                                                                                    // 1065
            },                                                                                                         // 1066
            getQuery: function getQuery() {                                                                            // 1067
                return this.query;                                                                                     // 1068
            },                                                                                                         // 1069
            setQuery: function setQuery(query) {                                                                       // 1070
                this.query = query;                                                                                    // 1071
            },                                                                                                         // 1072
            getInputValue: function getInputValue() {                                                                  // 1073
                return this.$input.val();                                                                              // 1074
            },                                                                                                         // 1075
            setInputValue: function setInputValue(value, silent) {                                                     // 1076
                this.$input.val(value);                                                                                // 1077
                silent ? this.clearHint() : this._checkInputValue();                                                   // 1078
            },                                                                                                         // 1079
            resetInputValue: function resetInputValue() {                                                              // 1080
                this.setInputValue(this.query, true);                                                                  // 1081
            },                                                                                                         // 1082
            getHint: function getHint() {                                                                              // 1083
                return this.$hint.val();                                                                               // 1084
            },                                                                                                         // 1085
            setHint: function setHint(value) {                                                                         // 1086
                this.$hint.val(value);                                                                                 // 1087
            },                                                                                                         // 1088
            clearHint: function clearHint() {                                                                          // 1089
                this.setHint("");                                                                                      // 1090
            },                                                                                                         // 1091
            clearHintIfInvalid: function clearHintIfInvalid() {                                                        // 1092
                var val, hint, valIsPrefixOfHint, isValid;                                                             // 1093
                val = this.getInputValue();                                                                            // 1094
                hint = this.getHint();                                                                                 // 1095
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;                                           // 1096
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();                                      // 1097
                !isValid && this.clearHint();                                                                          // 1098
            },                                                                                                         // 1099
            getLanguageDirection: function getLanguageDirection() {                                                    // 1100
                return (this.$input.css("direction") || "ltr").toLowerCase();                                          // 1101
            },                                                                                                         // 1102
            hasOverflow: function hasOverflow() {                                                                      // 1103
                var constraint = this.$input.width() - 2;                                                              // 1104
                this.$overflowHelper.text(this.getInputValue());                                                       // 1105
                return this.$overflowHelper.width() >= constraint;                                                     // 1106
            },                                                                                                         // 1107
            isCursorAtEnd: function() {                                                                                // 1108
                var valueLength, selectionStart, range;                                                                // 1109
                valueLength = this.$input.val().length;                                                                // 1110
                selectionStart = this.$input[0].selectionStart;                                                        // 1111
                if (_.isNumber(selectionStart)) {                                                                      // 1112
                    return selectionStart === valueLength;                                                             // 1113
                } else if (document.selection) {                                                                       // 1114
                    range = document.selection.createRange();                                                          // 1115
                    range.moveStart("character", -valueLength);                                                        // 1116
                    return valueLength === range.text.length;                                                          // 1117
                }                                                                                                      // 1118
                return true;                                                                                           // 1119
            },                                                                                                         // 1120
            destroy: function destroy() {                                                                              // 1121
                this.$hint.off(".tt");                                                                                 // 1122
                this.$input.off(".tt");                                                                                // 1123
                this.$hint = this.$input = this.$overflowHelper = null;                                                // 1124
            }                                                                                                          // 1125
        });                                                                                                            // 1126
        return Input;                                                                                                  // 1127
        function buildOverflowHelper($input) {                                                                         // 1128
            return $('<pre aria-hidden="true"></pre>').css({                                                           // 1129
                position: "absolute",                                                                                  // 1130
                visibility: "hidden",                                                                                  // 1131
                whiteSpace: "pre",                                                                                     // 1132
                fontFamily: $input.css("font-family"),                                                                 // 1133
                fontSize: $input.css("font-size"),                                                                     // 1134
                fontStyle: $input.css("font-style"),                                                                   // 1135
                fontVariant: $input.css("font-variant"),                                                               // 1136
                fontWeight: $input.css("font-weight"),                                                                 // 1137
                wordSpacing: $input.css("word-spacing"),                                                               // 1138
                letterSpacing: $input.css("letter-spacing"),                                                           // 1139
                textIndent: $input.css("text-indent"),                                                                 // 1140
                textRendering: $input.css("text-rendering"),                                                           // 1141
                textTransform: $input.css("text-transform")                                                            // 1142
            }).insertAfter($input);                                                                                    // 1143
        }                                                                                                              // 1144
        function areQueriesEquivalent(a, b) {                                                                          // 1145
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);                                                // 1146
        }                                                                                                              // 1147
        function withModifier($e) {                                                                                    // 1148
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;                                               // 1149
        }                                                                                                              // 1150
    }();                                                                                                               // 1151
    var Dataset = function() {                                                                                         // 1152
        "use strict";                                                                                                  // 1153
        var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";                                      // 1154
        function Dataset(o) {                                                                                          // 1155
            o = o || {};                                                                                               // 1156
            o.templates = o.templates || {};                                                                           // 1157
            if (!o.source) {                                                                                           // 1158
                $.error("missing source");                                                                             // 1159
            }                                                                                                          // 1160
            if (o.name && !isValidName(o.name)) {                                                                      // 1161
                $.error("invalid dataset name: " + o.name);                                                            // 1162
            }                                                                                                          // 1163
            this.query = null;                                                                                         // 1164
            this.highlight = !!o.highlight;                                                                            // 1165
            this.name = o.name || _.getUniqueId();                                                                     // 1166
            this.source = o.source;                                                                                    // 1167
            this.displayFn = getDisplayFn(o.display || o.displayKey);                                                  // 1168
            this.templates = getTemplates(o.templates, this.displayFn);                                                // 1169
            this.$el = $(html.dataset.replace("%CLASS%", this.name));                                                  // 1170
        }                                                                                                              // 1171
        Dataset.extractDatasetName = function extractDatasetName(el) {                                                 // 1172
            return $(el).data(datasetKey);                                                                             // 1173
        };                                                                                                             // 1174
        Dataset.extractValue = function extractDatum(el) {                                                             // 1175
            return $(el).data(valueKey);                                                                               // 1176
        };                                                                                                             // 1177
        Dataset.extractDatum = function extractDatum(el) {                                                             // 1178
            return $(el).data(datumKey);                                                                               // 1179
        };                                                                                                             // 1180
        _.mixin(Dataset.prototype, EventEmitter, {                                                                     // 1181
            _render: function render(query, suggestions) {                                                             // 1182
                if (!this.$el) {                                                                                       // 1183
                    return;                                                                                            // 1184
                }                                                                                                      // 1185
                var that = this, hasSuggestions;                                                                       // 1186
                this.$el.empty();                                                                                      // 1187
                hasSuggestions = suggestions && suggestions.length;                                                    // 1188
                if (!hasSuggestions && this.templates.empty) {                                                         // 1189
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                } else if (hasSuggestions) {                                                                           // 1191
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                }                                                                                                      // 1193
                this.trigger("rendered");                                                                              // 1194
                function getEmptyHtml() {                                                                              // 1195
                    return that.templates.empty({                                                                      // 1196
                        query: query,                                                                                  // 1197
                        isEmpty: true                                                                                  // 1198
                    });                                                                                                // 1199
                }                                                                                                      // 1200
                function getSuggestionsHtml() {                                                                        // 1201
                    var $suggestions, nodes;                                                                           // 1202
                    $suggestions = $(html.suggestions).css(css.suggestions);                                           // 1203
                    nodes = _.map(suggestions, getSuggestionNode);                                                     // 1204
                    $suggestions.append.apply($suggestions, nodes);                                                    // 1205
                    that.highlight && highlight({                                                                      // 1206
                        className: "tt-highlight",                                                                     // 1207
                        node: $suggestions[0],                                                                         // 1208
                        pattern: query                                                                                 // 1209
                    });                                                                                                // 1210
                    return $suggestions;                                                                               // 1211
                    function getSuggestionNode(suggestion) {                                                           // 1212
                        var $el;                                                                                       // 1213
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {                                                               // 1215
                            $(this).css(css.suggestionChild);                                                          // 1216
                        });                                                                                            // 1217
                        return $el;                                                                                    // 1218
                    }                                                                                                  // 1219
                }                                                                                                      // 1220
                function getHeaderHtml() {                                                                             // 1221
                    return that.templates.header({                                                                     // 1222
                        query: query,                                                                                  // 1223
                        isEmpty: !hasSuggestions                                                                       // 1224
                    });                                                                                                // 1225
                }                                                                                                      // 1226
                function getFooterHtml() {                                                                             // 1227
                    return that.templates.footer({                                                                     // 1228
                        query: query,                                                                                  // 1229
                        isEmpty: !hasSuggestions                                                                       // 1230
                    });                                                                                                // 1231
                }                                                                                                      // 1232
            },                                                                                                         // 1233
            getRoot: function getRoot() {                                                                              // 1234
                return this.$el;                                                                                       // 1235
            },                                                                                                         // 1236
            update: function update(query) {                                                                           // 1237
                var that = this;                                                                                       // 1238
                this.query = query;                                                                                    // 1239
                this.canceled = false;                                                                                 // 1240
                this.source(query, render);                                                                            // 1241
                function render(suggestions) {                                                                         // 1242
                    if (!that.canceled && query === that.query) {                                                      // 1243
                        that._render(query, suggestions);                                                              // 1244
                    }                                                                                                  // 1245
                }                                                                                                      // 1246
            },                                                                                                         // 1247
            cancel: function cancel() {                                                                                // 1248
                this.canceled = true;                                                                                  // 1249
            },                                                                                                         // 1250
            clear: function clear() {                                                                                  // 1251
                this.cancel();                                                                                         // 1252
                this.$el.empty();                                                                                      // 1253
                this.trigger("rendered");                                                                              // 1254
            },                                                                                                         // 1255
            isEmpty: function isEmpty() {                                                                              // 1256
                return this.$el.is(":empty");                                                                          // 1257
            },                                                                                                         // 1258
            destroy: function destroy() {                                                                              // 1259
                this.$el = null;                                                                                       // 1260
            }                                                                                                          // 1261
        });                                                                                                            // 1262
        return Dataset;                                                                                                // 1263
        function getDisplayFn(display) {                                                                               // 1264
            display = display || "value";                                                                              // 1265
            return _.isFunction(display) ? display : displayFn;                                                        // 1266
            function displayFn(obj) {                                                                                  // 1267
                return obj[display];                                                                                   // 1268
            }                                                                                                          // 1269
        }                                                                                                              // 1270
        function getTemplates(templates, displayFn) {                                                                  // 1271
            return {                                                                                                   // 1272
                empty: templates.empty && _.templatify(templates.empty),                                               // 1273
                header: templates.header && _.templatify(templates.header),                                            // 1274
                footer: templates.footer && _.templatify(templates.footer),                                            // 1275
                suggestion: templates.suggestion || suggestionTemplate                                                 // 1276
            };                                                                                                         // 1277
            function suggestionTemplate(context) {                                                                     // 1278
                return "<p>" + displayFn(context) + "</p>";                                                            // 1279
            }                                                                                                          // 1280
        }                                                                                                              // 1281
        function isValidName(str) {                                                                                    // 1282
            return /^[_a-zA-Z0-9-]+$/.test(str);                                                                       // 1283
        }                                                                                                              // 1284
    }();                                                                                                               // 1285
    var Dropdown = function() {                                                                                        // 1286
        "use strict";                                                                                                  // 1287
        function Dropdown(o) {                                                                                         // 1288
            var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;                        // 1289
            o = o || {};                                                                                               // 1290
            if (!o.menu) {                                                                                             // 1291
                $.error("menu is required");                                                                           // 1292
            }                                                                                                          // 1293
            this.isOpen = false;                                                                                       // 1294
            this.isEmpty = true;                                                                                       // 1295
            this.datasets = _.map(o.datasets, initializeDataset);                                                      // 1296
            onSuggestionClick = _.bind(this._onSuggestionClick, this);                                                 // 1297
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);                                       // 1298
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);                                       // 1299
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {                                                                  // 1301
                that.$menu.append(dataset.getRoot());                                                                  // 1302
                dataset.onSync("rendered", that._onRendered, that);                                                    // 1303
            });                                                                                                        // 1304
        }                                                                                                              // 1305
        _.mixin(Dropdown.prototype, EventEmitter, {                                                                    // 1306
            _onSuggestionClick: function onSuggestionClick($e) {                                                       // 1307
                this.trigger("suggestionClicked", $($e.currentTarget));                                                // 1308
            },                                                                                                         // 1309
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {                                             // 1310
                this._removeCursor();                                                                                  // 1311
                this._setCursor($($e.currentTarget), true);                                                            // 1312
            },                                                                                                         // 1313
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {                                               // 1314
                this._removeCursor();                                                                                  // 1315
            },                                                                                                         // 1316
            _onRendered: function onRendered() {                                                                       // 1317
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);                                                 // 1318
                this.isEmpty ? this._hide() : this.isOpen && this._show();                                             // 1319
                this.trigger("datasetRendered");                                                                       // 1320
                function isDatasetEmpty(dataset) {                                                                     // 1321
                    return dataset.isEmpty();                                                                          // 1322
                }                                                                                                      // 1323
            },                                                                                                         // 1324
            _hide: function() {                                                                                        // 1325
                this.$menu.hide();                                                                                     // 1326
            },                                                                                                         // 1327
            _show: function() {                                                                                        // 1328
                this.$menu.css("display", "block");                                                                    // 1329
            },                                                                                                         // 1330
            _getSuggestions: function getSuggestions() {                                                               // 1331
                return this.$menu.find(".tt-suggestion");                                                              // 1332
            },                                                                                                         // 1333
            _getCursor: function getCursor() {                                                                         // 1334
                return this.$menu.find(".tt-cursor").first();                                                          // 1335
            },                                                                                                         // 1336
            _setCursor: function setCursor($el, silent) {                                                              // 1337
                $el.first().addClass("tt-cursor");                                                                     // 1338
                !silent && this.trigger("cursorMoved");                                                                // 1339
            },                                                                                                         // 1340
            _removeCursor: function removeCursor() {                                                                   // 1341
                this._getCursor().removeClass("tt-cursor");                                                            // 1342
            },                                                                                                         // 1343
            _moveCursor: function moveCursor(increment) {                                                              // 1344
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;                                              // 1345
                if (!this.isOpen) {                                                                                    // 1346
                    return;                                                                                            // 1347
                }                                                                                                      // 1348
                $oldCursor = this._getCursor();                                                                        // 1349
                $suggestions = this._getSuggestions();                                                                 // 1350
                this._removeCursor();                                                                                  // 1351
                newCursorIndex = $suggestions.index($oldCursor) + increment;                                           // 1352
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;                                 // 1353
                if (newCursorIndex === -1) {                                                                           // 1354
                    this.trigger("cursorRemoved");                                                                     // 1355
                    return;                                                                                            // 1356
                } else if (newCursorIndex < -1) {                                                                      // 1357
                    newCursorIndex = $suggestions.length - 1;                                                          // 1358
                }                                                                                                      // 1359
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));                                         // 1360
                this._ensureVisible($newCursor);                                                                       // 1361
            },                                                                                                         // 1362
            _ensureVisible: function ensureVisible($el) {                                                              // 1363
                var elTop, elBottom, menuScrollTop, menuHeight;                                                        // 1364
                elTop = $el.position().top;                                                                            // 1365
                elBottom = elTop + $el.outerHeight(true);                                                              // 1366
                menuScrollTop = this.$menu.scrollTop();                                                                // 1367
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {                                                                                       // 1369
                    this.$menu.scrollTop(menuScrollTop + elTop);                                                       // 1370
                } else if (menuHeight < elBottom) {                                                                    // 1371
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));                                     // 1372
                }                                                                                                      // 1373
            },                                                                                                         // 1374
            close: function close() {                                                                                  // 1375
                if (this.isOpen) {                                                                                     // 1376
                    this.isOpen = false;                                                                               // 1377
                    this._removeCursor();                                                                              // 1378
                    this._hide();                                                                                      // 1379
                    this.trigger("closed");                                                                            // 1380
                }                                                                                                      // 1381
            },                                                                                                         // 1382
            open: function open() {                                                                                    // 1383
                if (!this.isOpen) {                                                                                    // 1384
                    this.isOpen = true;                                                                                // 1385
                    !this.isEmpty && this._show();                                                                     // 1386
                    this.trigger("opened");                                                                            // 1387
                }                                                                                                      // 1388
            },                                                                                                         // 1389
            setLanguageDirection: function setLanguageDirection(dir) {                                                 // 1390
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);                                                     // 1391
            },                                                                                                         // 1392
            moveCursorUp: function moveCursorUp() {                                                                    // 1393
                this._moveCursor(-1);                                                                                  // 1394
            },                                                                                                         // 1395
            moveCursorDown: function moveCursorDown() {                                                                // 1396
                this._moveCursor(+1);                                                                                  // 1397
            },                                                                                                         // 1398
            getDatumForSuggestion: function getDatumForSuggestion($el) {                                               // 1399
                var datum = null;                                                                                      // 1400
                if ($el.length) {                                                                                      // 1401
                    datum = {                                                                                          // 1402
                        raw: Dataset.extractDatum($el),                                                                // 1403
                        value: Dataset.extractValue($el),                                                              // 1404
                        datasetName: Dataset.extractDatasetName($el)                                                   // 1405
                    };                                                                                                 // 1406
                }                                                                                                      // 1407
                return datum;                                                                                          // 1408
            },                                                                                                         // 1409
            getDatumForCursor: function getDatumForCursor() {                                                          // 1410
                return this.getDatumForSuggestion(this._getCursor().first());                                          // 1411
            },                                                                                                         // 1412
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {                                            // 1413
                return this.getDatumForSuggestion(this._getSuggestions().first());                                     // 1414
            },                                                                                                         // 1415
            update: function update(query) {                                                                           // 1416
                _.each(this.datasets, updateDataset);                                                                  // 1417
                function updateDataset(dataset) {                                                                      // 1418
                    dataset.update(query);                                                                             // 1419
                }                                                                                                      // 1420
            },                                                                                                         // 1421
            empty: function empty() {                                                                                  // 1422
                _.each(this.datasets, clearDataset);                                                                   // 1423
                this.isEmpty = true;                                                                                   // 1424
                function clearDataset(dataset) {                                                                       // 1425
                    dataset.clear();                                                                                   // 1426
                }                                                                                                      // 1427
            },                                                                                                         // 1428
            isVisible: function isVisible() {                                                                          // 1429
                return this.isOpen && !this.isEmpty;                                                                   // 1430
            },                                                                                                         // 1431
            destroy: function destroy() {                                                                              // 1432
                this.$menu.off(".tt");                                                                                 // 1433
                this.$menu = null;                                                                                     // 1434
                _.each(this.datasets, destroyDataset);                                                                 // 1435
                function destroyDataset(dataset) {                                                                     // 1436
                    dataset.destroy();                                                                                 // 1437
                }                                                                                                      // 1438
            }                                                                                                          // 1439
        });                                                                                                            // 1440
        return Dropdown;                                                                                               // 1441
        function initializeDataset(oDataset) {                                                                         // 1442
            return new Dataset(oDataset);                                                                              // 1443
        }                                                                                                              // 1444
    }();                                                                                                               // 1445
    var Typeahead = function() {                                                                                       // 1446
        "use strict";                                                                                                  // 1447
        var attrsKey = "ttAttrs";                                                                                      // 1448
        function Typeahead(o) {                                                                                        // 1449
            var $menu, $input, $hint;                                                                                  // 1450
            o = o || {};                                                                                               // 1451
            if (!o.input) {                                                                                            // 1452
                $.error("missing input");                                                                              // 1453
            }                                                                                                          // 1454
            this.isActivated = false;                                                                                  // 1455
            this.autoselect = !!o.autoselect;                                                                          // 1456
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;                                                // 1457
            this.$node = buildDom(o.input, o.withHint);                                                                // 1458
            $menu = this.$node.find(".tt-dropdown-menu");                                                              // 1459
            $input = this.$node.find(".tt-input");                                                                     // 1460
            $hint = this.$node.find(".tt-hint");                                                                       // 1461
            $input.on("blur.tt", function($e) {                                                                        // 1462
                var active, isActive, hasActive;                                                                       // 1463
                active = document.activeElement;                                                                       // 1464
                isActive = $menu.is(active);                                                                           // 1465
                hasActive = $menu.has(active).length > 0;                                                              // 1466
                if (_.isMsie() && (isActive || hasActive)) {                                                           // 1467
                    $e.preventDefault();                                                                               // 1468
                    $e.stopImmediatePropagation();                                                                     // 1469
                    _.defer(function() {                                                                               // 1470
                        $input.focus();                                                                                // 1471
                    });                                                                                                // 1472
                }                                                                                                      // 1473
            });                                                                                                        // 1474
            $menu.on("mousedown.tt", function($e) {                                                                    // 1475
                $e.preventDefault();                                                                                   // 1476
            });                                                                                                        // 1477
            this.eventBus = o.eventBus || new EventBus({                                                               // 1478
                el: $input                                                                                             // 1479
            });                                                                                                        // 1480
            this.dropdown = new Dropdown({                                                                             // 1481
                menu: $menu,                                                                                           // 1482
                datasets: o.datasets                                                                                   // 1483
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({                                                                                   // 1485
                input: $input,                                                                                         // 1486
                hint: $hint                                                                                            // 1487
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();                                                                              // 1489
        }                                                                                                              // 1490
        _.mixin(Typeahead.prototype, {                                                                                 // 1491
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {                                            // 1492
                var datum;                                                                                             // 1493
                if (datum = this.dropdown.getDatumForSuggestion($el)) {                                                // 1494
                    this._select(datum);                                                                               // 1495
                }                                                                                                      // 1496
            },                                                                                                         // 1497
            _onCursorMoved: function onCursorMoved() {                                                                 // 1498
                var datum = this.dropdown.getDatumForCursor();                                                         // 1499
                this.input.setInputValue(datum.value, true);                                                           // 1500
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);                                  // 1501
            },                                                                                                         // 1502
            _onCursorRemoved: function onCursorRemoved() {                                                             // 1503
                this.input.resetInputValue();                                                                          // 1504
                this._updateHint();                                                                                    // 1505
            },                                                                                                         // 1506
            _onDatasetRendered: function onDatasetRendered() {                                                         // 1507
                this._updateHint();                                                                                    // 1508
            },                                                                                                         // 1509
            _onOpened: function onOpened() {                                                                           // 1510
                this._updateHint();                                                                                    // 1511
                this.eventBus.trigger("opened");                                                                       // 1512
            },                                                                                                         // 1513
            _onClosed: function onClosed() {                                                                           // 1514
                this.input.clearHint();                                                                                // 1515
                this.eventBus.trigger("closed");                                                                       // 1516
            },                                                                                                         // 1517
            _onFocused: function onFocused() {                                                                         // 1518
                this.isActivated = true;                                                                               // 1519
                this.dropdown.open();                                                                                  // 1520
            },                                                                                                         // 1521
            _onBlurred: function onBlurred() {                                                                         // 1522
                this.isActivated = false;                                                                              // 1523
                this.dropdown.empty();                                                                                 // 1524
                this.dropdown.close();                                                                                 // 1525
            },                                                                                                         // 1526
            _onEnterKeyed: function onEnterKeyed(type, $e) {                                                           // 1527
                var cursorDatum, topSuggestionDatum;                                                                   // 1528
                cursorDatum = this.dropdown.getDatumForCursor();                                                       // 1529
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();                                         // 1530
                if (cursorDatum) {                                                                                     // 1531
                    this._select(cursorDatum);                                                                         // 1532
                    $e.preventDefault();                                                                               // 1533
                } else if (this.autoselect && topSuggestionDatum) {                                                    // 1534
                    this._select(topSuggestionDatum);                                                                  // 1535
                    $e.preventDefault();                                                                               // 1536
                }                                                                                                      // 1537
            },                                                                                                         // 1538
            _onTabKeyed: function onTabKeyed(type, $e) {                                                               // 1539
                var datum;                                                                                             // 1540
                if (datum = this.dropdown.getDatumForCursor()) {                                                       // 1541
                    this._select(datum);                                                                               // 1542
                    $e.preventDefault();                                                                               // 1543
                } else {                                                                                               // 1544
                    this._autocomplete(true);                                                                          // 1545
                }                                                                                                      // 1546
            },                                                                                                         // 1547
            _onEscKeyed: function onEscKeyed() {                                                                       // 1548
                this.dropdown.close();                                                                                 // 1549
                this.input.resetInputValue();                                                                          // 1550
            },                                                                                                         // 1551
            _onUpKeyed: function onUpKeyed() {                                                                         // 1552
                var query = this.input.getQuery();                                                                     // 1553
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();                                                                                  // 1555
            },                                                                                                         // 1556
            _onDownKeyed: function onDownKeyed() {                                                                     // 1557
                var query = this.input.getQuery();                                                                     // 1558
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();                                                                                  // 1560
            },                                                                                                         // 1561
            _onLeftKeyed: function onLeftKeyed() {                                                                     // 1562
                this.dir === "rtl" && this._autocomplete();                                                            // 1563
            },                                                                                                         // 1564
            _onRightKeyed: function onRightKeyed() {                                                                   // 1565
                this.dir === "ltr" && this._autocomplete();                                                            // 1566
            },                                                                                                         // 1567
            _onQueryChanged: function onQueryChanged(e, query) {                                                       // 1568
                this.input.clearHintIfInvalid();                                                                       // 1569
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();                  // 1570
                this.dropdown.open();                                                                                  // 1571
                this._setLanguageDirection();                                                                          // 1572
            },                                                                                                         // 1573
            _onWhitespaceChanged: function onWhitespaceChanged() {                                                     // 1574
                this._updateHint();                                                                                    // 1575
                this.dropdown.open();                                                                                  // 1576
            },                                                                                                         // 1577
            _setLanguageDirection: function setLanguageDirection() {                                                   // 1578
                var dir;                                                                                               // 1579
                if (this.dir !== (dir = this.input.getLanguageDirection())) {                                          // 1580
                    this.dir = dir;                                                                                    // 1581
                    this.$node.css("direction", dir);                                                                  // 1582
                    this.dropdown.setLanguageDirection(dir);                                                           // 1583
                }                                                                                                      // 1584
            },                                                                                                         // 1585
            _updateHint: function updateHint() {                                                                       // 1586
                var datum, val, query, escapedQuery, frontMatchRegEx, match;                                           // 1587
                datum = this.dropdown.getDatumForTopSuggestion();                                                      // 1588
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {                                 // 1589
                    val = this.input.getInputValue();                                                                  // 1590
                    query = Input.normalizeQuery(val);                                                                 // 1591
                    escapedQuery = _.escapeRegExChars(query);                                                          // 1592
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");                               // 1593
                    match = frontMatchRegEx.exec(datum.value);                                                         // 1594
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();                               // 1595
                } else {                                                                                               // 1596
                    this.input.clearHint();                                                                            // 1597
                }                                                                                                      // 1598
            },                                                                                                         // 1599
            _autocomplete: function autocomplete(laxCursor) {                                                          // 1600
                var hint, query, isCursorAtEnd, datum;                                                                 // 1601
                hint = this.input.getHint();                                                                           // 1602
                query = this.input.getQuery();                                                                         // 1603
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();                                               // 1604
                if (hint && query !== hint && isCursorAtEnd) {                                                         // 1605
                    datum = this.dropdown.getDatumForTopSuggestion();                                                  // 1606
                    datum && this.input.setInputValue(datum.value);                                                    // 1607
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);                              // 1608
                }                                                                                                      // 1609
            },                                                                                                         // 1610
            _select: function select(datum) {                                                                          // 1611
                this.input.setQuery(datum.value);                                                                      // 1612
                this.input.setInputValue(datum.value, true);                                                           // 1613
                this._setLanguageDirection();                                                                          // 1614
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);                                       // 1615
                this.dropdown.close();                                                                                 // 1616
                _.defer(_.bind(this.dropdown.empty, this.dropdown));                                                   // 1617
            },                                                                                                         // 1618
            open: function open() {                                                                                    // 1619
                this.dropdown.open();                                                                                  // 1620
            },                                                                                                         // 1621
            close: function close() {                                                                                  // 1622
                this.dropdown.close();                                                                                 // 1623
            },                                                                                                         // 1624
            setVal: function setVal(val) {                                                                             // 1625
                val = _.toStr(val);                                                                                    // 1626
                if (this.isActivated) {                                                                                // 1627
                    this.input.setInputValue(val);                                                                     // 1628
                } else {                                                                                               // 1629
                    this.input.setQuery(val);                                                                          // 1630
                    this.input.setInputValue(val, true);                                                               // 1631
                }                                                                                                      // 1632
                this._setLanguageDirection();                                                                          // 1633
            },                                                                                                         // 1634
            getVal: function getVal() {                                                                                // 1635
                return this.input.getQuery();                                                                          // 1636
            },                                                                                                         // 1637
            destroy: function destroy() {                                                                              // 1638
                this.input.destroy();                                                                                  // 1639
                this.dropdown.destroy();                                                                               // 1640
                destroyDomStructure(this.$node);                                                                       // 1641
                this.$node = null;                                                                                     // 1642
            }                                                                                                          // 1643
        });                                                                                                            // 1644
        return Typeahead;                                                                                              // 1645
        function buildDom(input, withHint) {                                                                           // 1646
            var $input, $wrapper, $dropdown, $hint;                                                                    // 1647
            $input = $(input);                                                                                         // 1648
            $wrapper = $(html.wrapper).css(css.wrapper);                                                               // 1649
            $dropdown = $(html.dropdown).css(css.dropdown);                                                            // 1650
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));                                     // 1651
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", true).attr({
                autocomplete: "off",                                                                                   // 1653
                spellcheck: "false",                                                                                   // 1654
                tabindex: -1                                                                                           // 1655
            });                                                                                                        // 1656
            $input.data(attrsKey, {                                                                                    // 1657
                dir: $input.attr("dir"),                                                                               // 1658
                autocomplete: $input.attr("autocomplete"),                                                             // 1659
                spellcheck: $input.attr("spellcheck"),                                                                 // 1660
                style: $input.attr("style")                                                                            // 1661
            });                                                                                                        // 1662
            $input.addClass("tt-input").attr({                                                                         // 1663
                autocomplete: "off",                                                                                   // 1664
                spellcheck: false                                                                                      // 1665
            }).css(withHint ? css.input : css.inputWithNoHint);                                                        // 1666
            try {                                                                                                      // 1667
                !$input.attr("dir") && $input.attr("dir", "auto");                                                     // 1668
            } catch (e) {}                                                                                             // 1669
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);                  // 1670
        }                                                                                                              // 1671
        function getBackgroundStyles($el) {                                                                            // 1672
            return {                                                                                                   // 1673
                backgroundAttachment: $el.css("background-attachment"),                                                // 1674
                backgroundClip: $el.css("background-clip"),                                                            // 1675
                backgroundColor: $el.css("background-color"),                                                          // 1676
                backgroundImage: $el.css("background-image"),                                                          // 1677
                backgroundOrigin: $el.css("background-origin"),                                                        // 1678
                backgroundPosition: $el.css("background-position"),                                                    // 1679
                backgroundRepeat: $el.css("background-repeat"),                                                        // 1680
                backgroundSize: $el.css("background-size")                                                             // 1681
            };                                                                                                         // 1682
        }                                                                                                              // 1683
        function destroyDomStructure($node) {                                                                          // 1684
            var $input = $node.find(".tt-input");                                                                      // 1685
            _.each($input.data(attrsKey), function(val, key) {                                                         // 1686
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);                                   // 1687
            });                                                                                                        // 1688
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);                           // 1689
            $node.remove();                                                                                            // 1690
        }                                                                                                              // 1691
    }();                                                                                                               // 1692
    (function() {                                                                                                      // 1693
        "use strict";                                                                                                  // 1694
        var old, typeaheadKey, methods;                                                                                // 1695
        old = $.fn.typeahead;                                                                                          // 1696
        typeaheadKey = "ttTypeahead";                                                                                  // 1697
        methods = {                                                                                                    // 1698
            initialize: function initialize(o, datasets) {                                                             // 1699
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);                               // 1700
                o = o || {};                                                                                           // 1701
                return this.each(attach);                                                                              // 1702
                function attach() {                                                                                    // 1703
                    var $input = $(this), eventBus, typeahead;                                                         // 1704
                    _.each(datasets, function(d) {                                                                     // 1705
                        d.highlight = !!o.highlight;                                                                   // 1706
                    });                                                                                                // 1707
                    typeahead = new Typeahead({                                                                        // 1708
                        input: $input,                                                                                 // 1709
                        eventBus: eventBus = new EventBus({                                                            // 1710
                            el: $input                                                                                 // 1711
                        }),                                                                                            // 1712
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,                                             // 1713
                        minLength: o.minLength,                                                                        // 1714
                        autoselect: o.autoselect,                                                                      // 1715
                        datasets: datasets                                                                             // 1716
                    });                                                                                                // 1717
                    $input.data(typeaheadKey, typeahead);                                                              // 1718
                }                                                                                                      // 1719
            },                                                                                                         // 1720
            open: function open() {                                                                                    // 1721
                return this.each(openTypeahead);                                                                       // 1722
                function openTypeahead() {                                                                             // 1723
                    var $input = $(this), typeahead;                                                                   // 1724
                    if (typeahead = $input.data(typeaheadKey)) {                                                       // 1725
                        typeahead.open();                                                                              // 1726
                    }                                                                                                  // 1727
                }                                                                                                      // 1728
            },                                                                                                         // 1729
            close: function close() {                                                                                  // 1730
                return this.each(closeTypeahead);                                                                      // 1731
                function closeTypeahead() {                                                                            // 1732
                    var $input = $(this), typeahead;                                                                   // 1733
                    if (typeahead = $input.data(typeaheadKey)) {                                                       // 1734
                        typeahead.close();                                                                             // 1735
                    }                                                                                                  // 1736
                }                                                                                                      // 1737
            },                                                                                                         // 1738
            val: function val(newVal) {                                                                                // 1739
                return !arguments.length ? getVal(this.first()) : this.each(setVal);                                   // 1740
                function setVal() {                                                                                    // 1741
                    var $input = $(this), typeahead;                                                                   // 1742
                    if (typeahead = $input.data(typeaheadKey)) {                                                       // 1743
                        typeahead.setVal(newVal);                                                                      // 1744
                    }                                                                                                  // 1745
                }                                                                                                      // 1746
                function getVal($input) {                                                                              // 1747
                    var typeahead, query;                                                                              // 1748
                    if (typeahead = $input.data(typeaheadKey)) {                                                       // 1749
                        query = typeahead.getVal();                                                                    // 1750
                    }                                                                                                  // 1751
                    return query;                                                                                      // 1752
                }                                                                                                      // 1753
            },                                                                                                         // 1754
            destroy: function destroy() {                                                                              // 1755
                return this.each(unattach);                                                                            // 1756
                function unattach() {                                                                                  // 1757
                    var $input = $(this), typeahead;                                                                   // 1758
                    if (typeahead = $input.data(typeaheadKey)) {                                                       // 1759
                        typeahead.destroy();                                                                           // 1760
                        $input.removeData(typeaheadKey);                                                               // 1761
                    }                                                                                                  // 1762
                }                                                                                                      // 1763
            }                                                                                                          // 1764
        };                                                                                                             // 1765
        $.fn.typeahead = function(method) {                                                                            // 1766
            var tts;                                                                                                   // 1767
            if (methods[method] && method !== "initialize") {                                                          // 1768
                tts = this.filter(function() {                                                                         // 1769
                    return !!$(this).data(typeaheadKey);                                                               // 1770
                });                                                                                                    // 1771
                return methods[method].apply(tts, [].slice.call(arguments, 1));                                        // 1772
            } else {                                                                                                   // 1773
                return methods.initialize.apply(this, arguments);                                                      // 1774
            }                                                                                                          // 1775
        };                                                                                                             // 1776
        $.fn.typeahead.noConflict = function noConflict() {                                                            // 1777
            $.fn.typeahead = old;                                                                                      // 1778
            return this;                                                                                               // 1779
        };                                                                                                             // 1780
    })();                                                                                                              // 1781
})(window.jQuery);                                                                                                     // 1782
                                                                                                                       // 1783
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1793
}).call(this);                                                       // 1794
                                                                     // 1795
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['comerc:bs-typeahead'] = {};

})();
