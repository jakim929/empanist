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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/jeremy_selectize/selectize/dist/js/standalone/selectize.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   // 1
 * sifter.js                                                                                                          // 2
 * Copyright (c) 2013 Brian Reavis & contributors                                                                     // 3
 *                                                                                                                    // 4
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this                               // 5
 * file except in compliance with the License. You may obtain a copy of the License at:                               // 6
 * http://www.apache.org/licenses/LICENSE-2.0                                                                         // 7
 *                                                                                                                    // 8
 * Unless required by applicable law or agreed to in writing, software distributed under                              // 9
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF                                // 10
 * ANY KIND, either express or implied. See the License for the specific language                                     // 11
 * governing permissions and limitations under the License.                                                           // 12
 *                                                                                                                    // 13
 * @author Brian Reavis <brian@thirdroute.com>                                                                        // 14
 */                                                                                                                   // 15
                                                                                                                      // 16
(function(root, factory) {                                                                                            // 17
	if (typeof define === 'function' && define.amd) {                                                                    // 18
		define('sifter', factory);                                                                                          // 19
	} else if (typeof exports === 'object') {                                                                            // 20
		module.exports = factory();                                                                                         // 21
	} else {                                                                                                             // 22
		root.Sifter = factory();                                                                                            // 23
	}                                                                                                                    // 24
}(this, function() {                                                                                                  // 25
                                                                                                                      // 26
	/**                                                                                                                  // 27
	 * Textually searches arrays and hashes of objects                                                                   // 28
	 * by property (or multiple properties). Designed                                                                    // 29
	 * specifically for autocomplete.                                                                                    // 30
	 *                                                                                                                   // 31
	 * @constructor                                                                                                      // 32
	 * @param {array|object} items                                                                                       // 33
	 * @param {object} items                                                                                             // 34
	 */                                                                                                                  // 35
	var Sifter = function(items, settings) {                                                                             // 36
		this.items = items;                                                                                                 // 37
		this.settings = settings || {diacritics: true};                                                                     // 38
	};                                                                                                                   // 39
                                                                                                                      // 40
	/**                                                                                                                  // 41
	 * Splits a search string into an array of individual                                                                // 42
	 * regexps to be used to match results.                                                                              // 43
	 *                                                                                                                   // 44
	 * @param {string} query                                                                                             // 45
	 * @returns {array}                                                                                                  // 46
	 */                                                                                                                  // 47
	Sifter.prototype.tokenize = function(query) {                                                                        // 48
		query = trim(String(query || '').toLowerCase());                                                                    // 49
		if (!query || !query.length) return [];                                                                             // 50
                                                                                                                      // 51
		var i, n, regex, letter;                                                                                            // 52
		var tokens = [];                                                                                                    // 53
		var words = query.split(/ +/);                                                                                      // 54
                                                                                                                      // 55
		for (i = 0, n = words.length; i < n; i++) {                                                                         // 56
			regex = escape_regex(words[i]);                                                                                    // 57
			if (this.settings.diacritics) {                                                                                    // 58
				for (letter in DIACRITICS) {                                                                                      // 59
					if (DIACRITICS.hasOwnProperty(letter)) {                                                                         // 60
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);                                             // 61
					}                                                                                                                // 62
				}                                                                                                                 // 63
			}                                                                                                                  // 64
			tokens.push({                                                                                                      // 65
				string : words[i],                                                                                                // 66
				regex  : new RegExp(regex, 'i')                                                                                   // 67
			});                                                                                                                // 68
		}                                                                                                                   // 69
                                                                                                                      // 70
		return tokens;                                                                                                      // 71
	};                                                                                                                   // 72
                                                                                                                      // 73
	/**                                                                                                                  // 74
	 * Iterates over arrays and hashes.                                                                                  // 75
	 *                                                                                                                   // 76
	 * ```                                                                                                               // 77
	 * this.iterator(this.items, function(item, id) {                                                                    // 78
	 *    // invoked for each item                                                                                       // 79
	 * });                                                                                                               // 80
	 * ```                                                                                                               // 81
	 *                                                                                                                   // 82
	 * @param {array|object} object                                                                                      // 83
	 */                                                                                                                  // 84
	Sifter.prototype.iterator = function(object, callback) {                                                             // 85
		var iterator;                                                                                                       // 86
		if (is_array(object)) {                                                                                             // 87
			iterator = Array.prototype.forEach || function(callback) {                                                         // 88
				for (var i = 0, n = this.length; i < n; i++) {                                                                    // 89
					callback(this[i], i, this);                                                                                      // 90
				}                                                                                                                 // 91
			};                                                                                                                 // 92
		} else {                                                                                                            // 93
			iterator = function(callback) {                                                                                    // 94
				for (var key in this) {                                                                                           // 95
					if (this.hasOwnProperty(key)) {                                                                                  // 96
						callback(this[key], key, this);                                                                                 // 97
					}                                                                                                                // 98
				}                                                                                                                 // 99
			};                                                                                                                 // 100
		}                                                                                                                   // 101
                                                                                                                      // 102
		iterator.apply(object, [callback]);                                                                                 // 103
	};                                                                                                                   // 104
                                                                                                                      // 105
	/**                                                                                                                  // 106
	 * Returns a function to be used to score individual results.                                                        // 107
	 *                                                                                                                   // 108
	 * Good matches will have a higher score than poor matches.                                                          // 109
	 * If an item is not a match, 0 will be returned by the function.                                                    // 110
	 *                                                                                                                   // 111
	 * @param {object|string} search                                                                                     // 112
	 * @param {object} options (optional)                                                                                // 113
	 * @returns {function}                                                                                               // 114
	 */                                                                                                                  // 115
	Sifter.prototype.getScoreFunction = function(search, options) {                                                      // 116
		var self, fields, tokens, token_count;                                                                              // 117
                                                                                                                      // 118
		self        = this;                                                                                                 // 119
		search      = self.prepareSearch(search, options);                                                                  // 120
		tokens      = search.tokens;                                                                                        // 121
		fields      = search.options.fields;                                                                                // 122
		token_count = tokens.length;                                                                                        // 123
                                                                                                                      // 124
		/**                                                                                                                 // 125
		 * Calculates how close of a match the                                                                              // 126
		 * given value is against a search token.                                                                           // 127
		 *                                                                                                                  // 128
		 * @param {mixed} value                                                                                             // 129
		 * @param {object} token                                                                                            // 130
		 * @return {number}                                                                                                 // 131
		 */                                                                                                                 // 132
		var scoreValue = function(value, token) {                                                                           // 133
			var score, pos;                                                                                                    // 134
                                                                                                                      // 135
			if (!value) return 0;                                                                                              // 136
			value = String(value || '');                                                                                       // 137
			pos = value.search(token.regex);                                                                                   // 138
			if (pos === -1) return 0;                                                                                          // 139
			score = token.string.length / value.length;                                                                        // 140
			if (pos === 0) score += 0.5;                                                                                       // 141
			return score;                                                                                                      // 142
		};                                                                                                                  // 143
                                                                                                                      // 144
		/**                                                                                                                 // 145
		 * Calculates the score of an object                                                                                // 146
		 * against the search query.                                                                                        // 147
		 *                                                                                                                  // 148
		 * @param {object} token                                                                                            // 149
		 * @param {object} data                                                                                             // 150
		 * @return {number}                                                                                                 // 151
		 */                                                                                                                 // 152
		var scoreObject = (function() {                                                                                     // 153
			var field_count = fields.length;                                                                                   // 154
			if (!field_count) {                                                                                                // 155
				return function() { return 0; };                                                                                  // 156
			}                                                                                                                  // 157
			if (field_count === 1) {                                                                                           // 158
				return function(token, data) {                                                                                    // 159
					return scoreValue(data[fields[0]], token);                                                                       // 160
				};                                                                                                                // 161
			}                                                                                                                  // 162
			return function(token, data) {                                                                                     // 163
				for (var i = 0, sum = 0; i < field_count; i++) {                                                                  // 164
					sum += scoreValue(data[fields[i]], token);                                                                       // 165
				}                                                                                                                 // 166
				return sum / field_count;                                                                                         // 167
			};                                                                                                                 // 168
		})();                                                                                                               // 169
                                                                                                                      // 170
		if (!token_count) {                                                                                                 // 171
			return function() { return 0; };                                                                                   // 172
		}                                                                                                                   // 173
		if (token_count === 1) {                                                                                            // 174
			return function(data) {                                                                                            // 175
				return scoreObject(tokens[0], data);                                                                              // 176
			};                                                                                                                 // 177
		}                                                                                                                   // 178
                                                                                                                      // 179
		if (search.options.conjunction === 'and') {                                                                         // 180
			return function(data) {                                                                                            // 181
				var score;                                                                                                        // 182
				for (var i = 0, sum = 0; i < token_count; i++) {                                                                  // 183
					score = scoreObject(tokens[i], data);                                                                            // 184
					if (score <= 0) return 0;                                                                                        // 185
					sum += score;                                                                                                    // 186
				}                                                                                                                 // 187
				return sum / token_count;                                                                                         // 188
			};                                                                                                                 // 189
		} else {                                                                                                            // 190
			return function(data) {                                                                                            // 191
				for (var i = 0, sum = 0; i < token_count; i++) {                                                                  // 192
					sum += scoreObject(tokens[i], data);                                                                             // 193
				}                                                                                                                 // 194
				return sum / token_count;                                                                                         // 195
			};                                                                                                                 // 196
		}                                                                                                                   // 197
	};                                                                                                                   // 198
                                                                                                                      // 199
	/**                                                                                                                  // 200
	 * Returns a function that can be used to compare two                                                                // 201
	 * results, for sorting purposes. If no sorting should                                                               // 202
	 * be performed, `null` will be returned.                                                                            // 203
	 *                                                                                                                   // 204
	 * @param {string|object} search                                                                                     // 205
	 * @param {object} options                                                                                           // 206
	 * @return function(a,b)                                                                                             // 207
	 */                                                                                                                  // 208
	Sifter.prototype.getSortFunction = function(search, options) {                                                       // 209
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;              // 210
                                                                                                                      // 211
		self   = this;                                                                                                      // 212
		search = self.prepareSearch(search, options);                                                                       // 213
		sort   = (!search.query && options.sort_empty) || options.sort;                                                     // 214
                                                                                                                      // 215
		/**                                                                                                                 // 216
		 * Fetches the specified sort field value                                                                           // 217
		 * from a search result item.                                                                                       // 218
		 *                                                                                                                  // 219
		 * @param  {string} name                                                                                            // 220
		 * @param  {object} result                                                                                          // 221
		 * @return {mixed}                                                                                                  // 222
		 */                                                                                                                 // 223
		get_field = function(name, result) {                                                                                // 224
			if (name === '$score') return result.score;                                                                        // 225
			return self.items[result.id][name];                                                                                // 226
		};                                                                                                                  // 227
                                                                                                                      // 228
		// parse options                                                                                                    // 229
		fields = [];                                                                                                        // 230
		if (sort) {                                                                                                         // 231
			for (i = 0, n = sort.length; i < n; i++) {                                                                         // 232
				if (search.query || sort[i].field !== '$score') {                                                                 // 233
					fields.push(sort[i]);                                                                                            // 234
				}                                                                                                                 // 235
			}                                                                                                                  // 236
		}                                                                                                                   // 237
                                                                                                                      // 238
		// the "$score" field is implied to be the primary                                                                  // 239
		// sort field, unless it's manually specified                                                                       // 240
		if (search.query) {                                                                                                 // 241
			implicit_score = true;                                                                                             // 242
			for (i = 0, n = fields.length; i < n; i++) {                                                                       // 243
				if (fields[i].field === '$score') {                                                                               // 244
					implicit_score = false;                                                                                          // 245
					break;                                                                                                           // 246
				}                                                                                                                 // 247
			}                                                                                                                  // 248
			if (implicit_score) {                                                                                              // 249
				fields.unshift({field: '$score', direction: 'desc'});                                                             // 250
			}                                                                                                                  // 251
		} else {                                                                                                            // 252
			for (i = 0, n = fields.length; i < n; i++) {                                                                       // 253
				if (fields[i].field === '$score') {                                                                               // 254
					fields.splice(i, 1);                                                                                             // 255
					break;                                                                                                           // 256
				}                                                                                                                 // 257
			}                                                                                                                  // 258
		}                                                                                                                   // 259
                                                                                                                      // 260
		multipliers = [];                                                                                                   // 261
		for (i = 0, n = fields.length; i < n; i++) {                                                                        // 262
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);                                                         // 263
		}                                                                                                                   // 264
                                                                                                                      // 265
		// build function                                                                                                   // 266
		fields_count = fields.length;                                                                                       // 267
		if (!fields_count) {                                                                                                // 268
			return null;                                                                                                       // 269
		} else if (fields_count === 1) {                                                                                    // 270
			field = fields[0].field;                                                                                           // 271
			multiplier = multipliers[0];                                                                                       // 272
			return function(a, b) {                                                                                            // 273
				return multiplier * cmp(                                                                                          // 274
					get_field(field, a),                                                                                             // 275
					get_field(field, b)                                                                                              // 276
				);                                                                                                                // 277
			};                                                                                                                 // 278
		} else {                                                                                                            // 279
			return function(a, b) {                                                                                            // 280
				var i, result, a_value, b_value, field;                                                                           // 281
				for (i = 0; i < fields_count; i++) {                                                                              // 282
					field = fields[i].field;                                                                                         // 283
					result = multipliers[i] * cmp(                                                                                   // 284
						get_field(field, a),                                                                                            // 285
						get_field(field, b)                                                                                             // 286
					);                                                                                                               // 287
					if (result) return result;                                                                                       // 288
				}                                                                                                                 // 289
				return 0;                                                                                                         // 290
			};                                                                                                                 // 291
		}                                                                                                                   // 292
	};                                                                                                                   // 293
                                                                                                                      // 294
	/**                                                                                                                  // 295
	 * Parses a search query and returns an object                                                                       // 296
	 * with tokens and fields ready to be populated                                                                      // 297
	 * with results.                                                                                                     // 298
	 *                                                                                                                   // 299
	 * @param {string} query                                                                                             // 300
	 * @param {object} options                                                                                           // 301
	 * @returns {object}                                                                                                 // 302
	 */                                                                                                                  // 303
	Sifter.prototype.prepareSearch = function(query, options) {                                                          // 304
		if (typeof query === 'object') return query;                                                                        // 305
                                                                                                                      // 306
		options = extend({}, options);                                                                                      // 307
                                                                                                                      // 308
		var option_fields     = options.fields;                                                                             // 309
		var option_sort       = options.sort;                                                                               // 310
		var option_sort_empty = options.sort_empty;                                                                         // 311
                                                                                                                      // 312
		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];                                    // 313
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];                                            // 314
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];                    // 315
                                                                                                                      // 316
		return {                                                                                                            // 317
			options : options,                                                                                                 // 318
			query   : String(query || '').toLowerCase(),                                                                       // 319
			tokens  : this.tokenize(query),                                                                                    // 320
			total   : 0,                                                                                                       // 321
			items   : []                                                                                                       // 322
		};                                                                                                                  // 323
	};                                                                                                                   // 324
                                                                                                                      // 325
	/**                                                                                                                  // 326
	 * Searches through all items and returns a sorted array of matches.                                                 // 327
	 *                                                                                                                   // 328
	 * The `options` parameter can contain:                                                                              // 329
	 *                                                                                                                   // 330
	 *   - fields {string|array}                                                                                         // 331
	 *   - sort {array}                                                                                                  // 332
	 *   - score {function}                                                                                              // 333
	 *   - filter {bool}                                                                                                 // 334
	 *   - limit {integer}                                                                                               // 335
	 *                                                                                                                   // 336
	 * Returns an object containing:                                                                                     // 337
	 *                                                                                                                   // 338
	 *   - options {object}                                                                                              // 339
	 *   - query {string}                                                                                                // 340
	 *   - tokens {array}                                                                                                // 341
	 *   - total {int}                                                                                                   // 342
	 *   - items {array}                                                                                                 // 343
	 *                                                                                                                   // 344
	 * @param {string} query                                                                                             // 345
	 * @param {object} options                                                                                           // 346
	 * @returns {object}                                                                                                 // 347
	 */                                                                                                                  // 348
	Sifter.prototype.search = function(query, options) {                                                                 // 349
		var self = this, value, score, search, calculateScore;                                                              // 350
		var fn_sort;                                                                                                        // 351
		var fn_score;                                                                                                       // 352
                                                                                                                      // 353
		search  = this.prepareSearch(query, options);                                                                       // 354
		options = search.options;                                                                                           // 355
		query   = search.query;                                                                                             // 356
                                                                                                                      // 357
		// generate result scoring function                                                                                 // 358
		fn_score = options.score || self.getScoreFunction(search);                                                          // 359
                                                                                                                      // 360
		// perform search and sort                                                                                          // 361
		if (query.length) {                                                                                                 // 362
			self.iterator(self.items, function(item, id) {                                                                     // 363
				score = fn_score(item);                                                                                           // 364
				if (options.filter === false || score > 0) {                                                                      // 365
					search.items.push({'score': score, 'id': id});                                                                   // 366
				}                                                                                                                 // 367
			});                                                                                                                // 368
		} else {                                                                                                            // 369
			self.iterator(self.items, function(item, id) {                                                                     // 370
				search.items.push({'score': 1, 'id': id});                                                                        // 371
			});                                                                                                                // 372
		}                                                                                                                   // 373
                                                                                                                      // 374
		fn_sort = self.getSortFunction(search, options);                                                                    // 375
		if (fn_sort) search.items.sort(fn_sort);                                                                            // 376
                                                                                                                      // 377
		// apply limits                                                                                                     // 378
		search.total = search.items.length;                                                                                 // 379
		if (typeof options.limit === 'number') {                                                                            // 380
			search.items = search.items.slice(0, options.limit);                                                               // 381
		}                                                                                                                   // 382
                                                                                                                      // 383
		return search;                                                                                                      // 384
	};                                                                                                                   // 385
                                                                                                                      // 386
	// utilities                                                                                                         // 387
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -                                   // 388
                                                                                                                      // 389
	var cmp = function(a, b) {                                                                                           // 390
		if (typeof a === 'number' && typeof b === 'number') {                                                               // 391
			return a > b ? 1 : (a < b ? -1 : 0);                                                                               // 392
		}                                                                                                                   // 393
		a = asciifold(String(a || ''));                                                                                     // 394
		b = asciifold(String(b || ''));                                                                                     // 395
		if (a > b) return 1;                                                                                                // 396
		if (b > a) return -1;                                                                                               // 397
		return 0;                                                                                                           // 398
	};                                                                                                                   // 399
                                                                                                                      // 400
	var extend = function(a, b) {                                                                                        // 401
		var i, n, k, object;                                                                                                // 402
		for (i = 1, n = arguments.length; i < n; i++) {                                                                     // 403
			object = arguments[i];                                                                                             // 404
			if (!object) continue;                                                                                             // 405
			for (k in object) {                                                                                                // 406
				if (object.hasOwnProperty(k)) {                                                                                   // 407
					a[k] = object[k];                                                                                                // 408
				}                                                                                                                 // 409
			}                                                                                                                  // 410
		}                                                                                                                   // 411
		return a;                                                                                                           // 412
	};                                                                                                                   // 413
                                                                                                                      // 414
	var trim = function(str) {                                                                                           // 415
		return (str + '').replace(/^\s+|\s+$|/g, '');                                                                       // 416
	};                                                                                                                   // 417
                                                                                                                      // 418
	var escape_regex = function(str) {                                                                                   // 419
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');                                                        // 420
	};                                                                                                                   // 421
                                                                                                                      // 422
	var is_array = Array.isArray || ($ && $.isArray) || function(object) {                                               // 423
		return Object.prototype.toString.call(object) === '[object Array]';                                                 // 424
	};                                                                                                                   // 425
                                                                                                                      // 426
	var DIACRITICS = {                                                                                                   // 427
		'a': '[aÀÁÂÃÄÅàáâãäåĀāąĄ]',                                                                                         // 428
		'c': '[cÇçćĆčČ]',                                                                                                   // 429
		'd': '[dđĐďĎ]',                                                                                                     // 430
		'e': '[eÈÉÊËèéêëěĚĒēęĘ]',                                                                                           // 431
		'i': '[iÌÍÎÏìíîïĪī]',                                                                                               // 432
		'l': '[lłŁ]',                                                                                                       // 433
		'n': '[nÑñňŇńŃ]',                                                                                                   // 434
		'o': '[oÒÓÔÕÕÖØòóôõöøŌō]',                                                                                          // 435
		'r': '[rřŘ]',                                                                                                       // 436
		's': '[sŠšśŚ]',                                                                                                     // 437
		't': '[tťŤ]',                                                                                                       // 438
		'u': '[uÙÚÛÜùúûüůŮŪū]',                                                                                             // 439
		'y': '[yŸÿýÝ]',                                                                                                     // 440
		'z': '[zŽžżŻźŹ]'                                                                                                    // 441
	};                                                                                                                   // 442
                                                                                                                      // 443
	var asciifold = (function() {                                                                                        // 444
		var i, n, k, chunk;                                                                                                 // 445
		var foreignletters = '';                                                                                            // 446
		var lookup = {};                                                                                                    // 447
		for (k in DIACRITICS) {                                                                                             // 448
			if (DIACRITICS.hasOwnProperty(k)) {                                                                                // 449
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);                                                     // 450
				foreignletters += chunk;                                                                                          // 451
				for (i = 0, n = chunk.length; i < n; i++) {                                                                       // 452
					lookup[chunk.charAt(i)] = k;                                                                                     // 453
				}                                                                                                                 // 454
			}                                                                                                                  // 455
		}                                                                                                                   // 456
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');                                                          // 457
		return function(str) {                                                                                              // 458
			return str.replace(regexp, function(foreignletter) {                                                               // 459
				return lookup[foreignletter];                                                                                     // 460
			}).toLowerCase();                                                                                                  // 461
		};                                                                                                                  // 462
	})();                                                                                                                // 463
                                                                                                                      // 464
                                                                                                                      // 465
	// export                                                                                                            // 466
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -                                   // 467
                                                                                                                      // 468
	return Sifter;                                                                                                       // 469
}));                                                                                                                  // 470
                                                                                                                      // 471
                                                                                                                      // 472
                                                                                                                      // 473
/**                                                                                                                   // 474
 * microplugin.js                                                                                                     // 475
 * Copyright (c) 2013 Brian Reavis & contributors                                                                     // 476
 *                                                                                                                    // 477
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this                               // 478
 * file except in compliance with the License. You may obtain a copy of the License at:                               // 479
 * http://www.apache.org/licenses/LICENSE-2.0                                                                         // 480
 *                                                                                                                    // 481
 * Unless required by applicable law or agreed to in writing, software distributed under                              // 482
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF                                // 483
 * ANY KIND, either express or implied. See the License for the specific language                                     // 484
 * governing permissions and limitations under the License.                                                           // 485
 *                                                                                                                    // 486
 * @author Brian Reavis <brian@thirdroute.com>                                                                        // 487
 */                                                                                                                   // 488
                                                                                                                      // 489
(function(root, factory) {                                                                                            // 490
	if (typeof define === 'function' && define.amd) {                                                                    // 491
		define('microplugin', factory);                                                                                     // 492
	} else if (typeof exports === 'object') {                                                                            // 493
		module.exports = factory();                                                                                         // 494
	} else {                                                                                                             // 495
		root.MicroPlugin = factory();                                                                                       // 496
	}                                                                                                                    // 497
}(this, function() {                                                                                                  // 498
	var MicroPlugin = {};                                                                                                // 499
                                                                                                                      // 500
	MicroPlugin.mixin = function(Interface) {                                                                            // 501
		Interface.plugins = {};                                                                                             // 502
                                                                                                                      // 503
		/**                                                                                                                 // 504
		 * Initializes the listed plugins (with options).                                                                   // 505
		 * Acceptable formats:                                                                                              // 506
		 *                                                                                                                  // 507
		 * List (without options):                                                                                          // 508
		 *   ['a', 'b', 'c']                                                                                                // 509
		 *                                                                                                                  // 510
		 * List (with options):                                                                                             // 511
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]                                                       // 512
		 *                                                                                                                  // 513
		 * Hash (with options):                                                                                             // 514
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}                                                                     // 515
		 *                                                                                                                  // 516
		 * @param {mixed} plugins                                                                                           // 517
		 */                                                                                                                 // 518
		Interface.prototype.initializePlugins = function(plugins) {                                                         // 519
			var i, n, key;                                                                                                     // 520
			var self  = this;                                                                                                  // 521
			var queue = [];                                                                                                    // 522
                                                                                                                      // 523
			self.plugins = {                                                                                                   // 524
				names     : [],                                                                                                   // 525
				settings  : {},                                                                                                   // 526
				requested : {},                                                                                                   // 527
				loaded    : {}                                                                                                    // 528
			};                                                                                                                 // 529
                                                                                                                      // 530
			if (utils.isArray(plugins)) {                                                                                      // 531
				for (i = 0, n = plugins.length; i < n; i++) {                                                                     // 532
					if (typeof plugins[i] === 'string') {                                                                            // 533
						queue.push(plugins[i]);                                                                                         // 534
					} else {                                                                                                         // 535
						self.plugins.settings[plugins[i].name] = plugins[i].options;                                                    // 536
						queue.push(plugins[i].name);                                                                                    // 537
					}                                                                                                                // 538
				}                                                                                                                 // 539
			} else if (plugins) {                                                                                              // 540
				for (key in plugins) {                                                                                            // 541
					if (plugins.hasOwnProperty(key)) {                                                                               // 542
						self.plugins.settings[key] = plugins[key];                                                                      // 543
						queue.push(key);                                                                                                // 544
					}                                                                                                                // 545
				}                                                                                                                 // 546
			}                                                                                                                  // 547
                                                                                                                      // 548
			while (queue.length) {                                                                                             // 549
				self.require(queue.shift());                                                                                      // 550
			}                                                                                                                  // 551
		};                                                                                                                  // 552
                                                                                                                      // 553
		Interface.prototype.loadPlugin = function(name) {                                                                   // 554
			var self    = this;                                                                                                // 555
			var plugins = self.plugins;                                                                                        // 556
			var plugin  = Interface.plugins[name];                                                                             // 557
                                                                                                                      // 558
			if (!Interface.plugins.hasOwnProperty(name)) {                                                                     // 559
				throw new Error('Unable to find "' +  name + '" plugin');                                                         // 560
			}                                                                                                                  // 561
                                                                                                                      // 562
			plugins.requested[name] = true;                                                                                    // 563
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);                                 // 564
			plugins.names.push(name);                                                                                          // 565
		};                                                                                                                  // 566
                                                                                                                      // 567
		/**                                                                                                                 // 568
		 * Initializes a plugin.                                                                                            // 569
		 *                                                                                                                  // 570
		 * @param {string} name                                                                                             // 571
		 */                                                                                                                 // 572
		Interface.prototype.require = function(name) {                                                                      // 573
			var self = this;                                                                                                   // 574
			var plugins = self.plugins;                                                                                        // 575
                                                                                                                      // 576
			if (!self.plugins.loaded.hasOwnProperty(name)) {                                                                   // 577
				if (plugins.requested[name]) {                                                                                    // 578
					throw new Error('Plugin has circular dependency ("' + name + '")');                                              // 579
				}                                                                                                                 // 580
				self.loadPlugin(name);                                                                                            // 581
			}                                                                                                                  // 582
                                                                                                                      // 583
			return plugins.loaded[name];                                                                                       // 584
		};                                                                                                                  // 585
                                                                                                                      // 586
		/**                                                                                                                 // 587
		 * Registers a plugin.                                                                                              // 588
		 *                                                                                                                  // 589
		 * @param {string} name                                                                                             // 590
		 * @param {function} fn                                                                                             // 591
		 */                                                                                                                 // 592
		Interface.define = function(name, fn) {                                                                             // 593
			Interface.plugins[name] = {                                                                                        // 594
				'name' : name,                                                                                                    // 595
				'fn'   : fn                                                                                                       // 596
			};                                                                                                                 // 597
		};                                                                                                                  // 598
	};                                                                                                                   // 599
                                                                                                                      // 600
	var utils = {                                                                                                        // 601
		isArray: Array.isArray || function(vArg) {                                                                          // 602
			return Object.prototype.toString.call(vArg) === '[object Array]';                                                  // 603
		}                                                                                                                   // 604
	};                                                                                                                   // 605
                                                                                                                      // 606
	return MicroPlugin;                                                                                                  // 607
}));                                                                                                                  // 608
                                                                                                                      // 609
/**                                                                                                                   // 610
 * selectize.js (v0.12.1)                                                                                             // 611
 * Copyright (c) 2013–2015 Brian Reavis & contributors                                                                // 612
 *                                                                                                                    // 613
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this                               // 614
 * file except in compliance with the License. You may obtain a copy of the License at:                               // 615
 * http://www.apache.org/licenses/LICENSE-2.0                                                                         // 616
 *                                                                                                                    // 617
 * Unless required by applicable law or agreed to in writing, software distributed under                              // 618
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF                                // 619
 * ANY KIND, either express or implied. See the License for the specific language                                     // 620
 * governing permissions and limitations under the License.                                                           // 621
 *                                                                                                                    // 622
 * @author Brian Reavis <brian@thirdroute.com>                                                                        // 623
 */                                                                                                                   // 624
                                                                                                                      // 625
/*jshint curly:false */                                                                                               // 626
/*jshint browser:true */                                                                                              // 627
                                                                                                                      // 628
(function(root, factory) {                                                                                            // 629
	if (typeof define === 'function' && define.amd) {                                                                    // 630
		define('selectize', ['jquery','sifter','microplugin'], factory);                                                    // 631
	} else if (typeof exports === 'object') {                                                                            // 632
		module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));                             // 633
	} else {                                                                                                             // 634
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);                                               // 635
	}                                                                                                                    // 636
}(this, function($, Sifter, MicroPlugin) {                                                                            // 637
	'use strict';                                                                                                        // 638
                                                                                                                      // 639
	var highlight = function($element, pattern) {                                                                        // 640
		if (typeof pattern === 'string' && !pattern.length) return;                                                         // 641
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;                                     // 642
	                                                                                                                     // 643
		var highlight = function(node) {                                                                                    // 644
			var skip = 0;                                                                                                      // 645
			if (node.nodeType === 3) {                                                                                         // 646
				var pos = node.data.search(regex);                                                                                // 647
				if (pos >= 0 && node.data.length > 0) {                                                                           // 648
					var match = node.data.match(regex);                                                                              // 649
					var spannode = document.createElement('span');                                                                   // 650
					spannode.className = 'highlight';                                                                                // 651
					var middlebit = node.splitText(pos);                                                                             // 652
					var endbit = middlebit.splitText(match[0].length);                                                               // 653
					var middleclone = middlebit.cloneNode(true);                                                                     // 654
					spannode.appendChild(middleclone);                                                                               // 655
					middlebit.parentNode.replaceChild(spannode, middlebit);                                                          // 656
					skip = 1;                                                                                                        // 657
				}                                                                                                                 // 658
			} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {                      // 659
				for (var i = 0; i < node.childNodes.length; ++i) {                                                                // 660
					i += highlight(node.childNodes[i]);                                                                              // 661
				}                                                                                                                 // 662
			}                                                                                                                  // 663
			return skip;                                                                                                       // 664
		};                                                                                                                  // 665
	                                                                                                                     // 666
		return $element.each(function() {                                                                                   // 667
			highlight(this);                                                                                                   // 668
		});                                                                                                                 // 669
	};                                                                                                                   // 670
	                                                                                                                     // 671
	var MicroEvent = function() {};                                                                                      // 672
	MicroEvent.prototype = {                                                                                             // 673
		on: function(event, fct){                                                                                           // 674
			this._events = this._events || {};                                                                                 // 675
			this._events[event] = this._events[event] || [];                                                                   // 676
			this._events[event].push(fct);                                                                                     // 677
		},                                                                                                                  // 678
		off: function(event, fct){                                                                                          // 679
			var n = arguments.length;                                                                                          // 680
			if (n === 0) return delete this._events;                                                                           // 681
			if (n === 1) return delete this._events[event];                                                                    // 682
	                                                                                                                     // 683
			this._events = this._events || {};                                                                                 // 684
			if (event in this._events === false) return;                                                                       // 685
			this._events[event].splice(this._events[event].indexOf(fct), 1);                                                   // 686
		},                                                                                                                  // 687
		trigger: function(event /* , args... */){                                                                           // 688
			this._events = this._events || {};                                                                                 // 689
			if (event in this._events === false) return;                                                                       // 690
			for (var i = 0; i < this._events[event].length; i++){                                                              // 691
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));                                     // 692
			}                                                                                                                  // 693
		}                                                                                                                   // 694
	};                                                                                                                   // 695
	                                                                                                                     // 696
	/**                                                                                                                  // 697
	 * Mixin will delegate all MicroEvent.js function in the destination object.                                         // 698
	 *                                                                                                                   // 699
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent                                                // 700
	 *                                                                                                                   // 701
	 * @param {object} the object which will support MicroEvent                                                          // 702
	 */                                                                                                                  // 703
	MicroEvent.mixin = function(destObject){                                                                             // 704
		var props = ['on', 'off', 'trigger'];                                                                               // 705
		for (var i = 0; i < props.length; i++){                                                                             // 706
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];                                                   // 707
		}                                                                                                                   // 708
	};                                                                                                                   // 709
	                                                                                                                     // 710
	var IS_MAC        = /Mac/.test(navigator.userAgent);                                                                 // 711
	                                                                                                                     // 712
	var KEY_A         = 65;                                                                                              // 713
	var KEY_COMMA     = 188;                                                                                             // 714
	var KEY_RETURN    = 13;                                                                                              // 715
	var KEY_ESC       = 27;                                                                                              // 716
	var KEY_LEFT      = 37;                                                                                              // 717
	var KEY_UP        = 38;                                                                                              // 718
	var KEY_P         = 80;                                                                                              // 719
	var KEY_RIGHT     = 39;                                                                                              // 720
	var KEY_DOWN      = 40;                                                                                              // 721
	var KEY_N         = 78;                                                                                              // 722
	var KEY_BACKSPACE = 8;                                                                                               // 723
	var KEY_DELETE    = 46;                                                                                              // 724
	var KEY_SHIFT     = 16;                                                                                              // 725
	var KEY_CMD       = IS_MAC ? 91 : 17;                                                                                // 726
	var KEY_CTRL      = IS_MAC ? 18 : 17;                                                                                // 727
	var KEY_TAB       = 9;                                                                                               // 728
	                                                                                                                     // 729
	var TAG_SELECT    = 1;                                                                                               // 730
	var TAG_INPUT     = 2;                                                                                               // 731
	                                                                                                                     // 732
	// for now, android support in general is too spotty to support validity                                             // 733
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('form').validity;
	                                                                                                                     // 735
	var isset = function(object) {                                                                                       // 736
		return typeof object !== 'undefined';                                                                               // 737
	};                                                                                                                   // 738
	                                                                                                                     // 739
	/**                                                                                                                  // 740
	 * Converts a scalar to its best string representation                                                               // 741
	 * for hash keys and HTML attribute values.                                                                          // 742
	 *                                                                                                                   // 743
	 * Transformations:                                                                                                  // 744
	 *   'str'     -> 'str'                                                                                              // 745
	 *   null      -> ''                                                                                                 // 746
	 *   undefined -> ''                                                                                                 // 747
	 *   true      -> '1'                                                                                                // 748
	 *   false     -> '0'                                                                                                // 749
	 *   0         -> '0'                                                                                                // 750
	 *   1         -> '1'                                                                                                // 751
	 *                                                                                                                   // 752
	 * @param {string} value                                                                                             // 753
	 * @returns {string|null}                                                                                            // 754
	 */                                                                                                                  // 755
	var hash_key = function(value) {                                                                                     // 756
		if (typeof value === 'undefined' || value === null) return null;                                                    // 757
		if (typeof value === 'boolean') return value ? '1' : '0';                                                           // 758
		return value + '';                                                                                                  // 759
	};                                                                                                                   // 760
	                                                                                                                     // 761
	/**                                                                                                                  // 762
	 * Escapes a string for use within HTML.                                                                             // 763
	 *                                                                                                                   // 764
	 * @param {string} str                                                                                               // 765
	 * @returns {string}                                                                                                 // 766
	 */                                                                                                                  // 767
	var escape_html = function(str) {                                                                                    // 768
		return (str + '')                                                                                                   // 769
			.replace(/&/g, '&amp;')                                                                                            // 770
			.replace(/</g, '&lt;')                                                                                             // 771
			.replace(/>/g, '&gt;')                                                                                             // 772
			.replace(/"/g, '&quot;');                                                                                          // 773
	};                                                                                                                   // 774
	                                                                                                                     // 775
	/**                                                                                                                  // 776
	 * Escapes "$" characters in replacement strings.                                                                    // 777
	 *                                                                                                                   // 778
	 * @param {string} str                                                                                               // 779
	 * @returns {string}                                                                                                 // 780
	 */                                                                                                                  // 781
	var escape_replace = function(str) {                                                                                 // 782
		return (str + '').replace(/\$/g, '$$$$');                                                                           // 783
	};                                                                                                                   // 784
	                                                                                                                     // 785
	var hook = {};                                                                                                       // 786
	                                                                                                                     // 787
	/**                                                                                                                  // 788
	 * Wraps `method` on `self` so that `fn`                                                                             // 789
	 * is invoked before the original method.                                                                            // 790
	 *                                                                                                                   // 791
	 * @param {object} self                                                                                              // 792
	 * @param {string} method                                                                                            // 793
	 * @param {function} fn                                                                                              // 794
	 */                                                                                                                  // 795
	hook.before = function(self, method, fn) {                                                                           // 796
		var original = self[method];                                                                                        // 797
		self[method] = function() {                                                                                         // 798
			fn.apply(self, arguments);                                                                                         // 799
			return original.apply(self, arguments);                                                                            // 800
		};                                                                                                                  // 801
	};                                                                                                                   // 802
	                                                                                                                     // 803
	/**                                                                                                                  // 804
	 * Wraps `method` on `self` so that `fn`                                                                             // 805
	 * is invoked after the original method.                                                                             // 806
	 *                                                                                                                   // 807
	 * @param {object} self                                                                                              // 808
	 * @param {string} method                                                                                            // 809
	 * @param {function} fn                                                                                              // 810
	 */                                                                                                                  // 811
	hook.after = function(self, method, fn) {                                                                            // 812
		var original = self[method];                                                                                        // 813
		self[method] = function() {                                                                                         // 814
			var result = original.apply(self, arguments);                                                                      // 815
			fn.apply(self, arguments);                                                                                         // 816
			return result;                                                                                                     // 817
		};                                                                                                                  // 818
	};                                                                                                                   // 819
	                                                                                                                     // 820
	/**                                                                                                                  // 821
	 * Wraps `fn` so that it can only be invoked once.                                                                   // 822
	 *                                                                                                                   // 823
	 * @param {function} fn                                                                                              // 824
	 * @returns {function}                                                                                               // 825
	 */                                                                                                                  // 826
	var once = function(fn) {                                                                                            // 827
		var called = false;                                                                                                 // 828
		return function() {                                                                                                 // 829
			if (called) return;                                                                                                // 830
			called = true;                                                                                                     // 831
			fn.apply(this, arguments);                                                                                         // 832
		};                                                                                                                  // 833
	};                                                                                                                   // 834
	                                                                                                                     // 835
	/**                                                                                                                  // 836
	 * Wraps `fn` so that it can only be called once                                                                     // 837
	 * every `delay` milliseconds (invoked on the falling edge).                                                         // 838
	 *                                                                                                                   // 839
	 * @param {function} fn                                                                                              // 840
	 * @param {int} delay                                                                                                // 841
	 * @returns {function}                                                                                               // 842
	 */                                                                                                                  // 843
	var debounce = function(fn, delay) {                                                                                 // 844
		var timeout;                                                                                                        // 845
		return function() {                                                                                                 // 846
			var self = this;                                                                                                   // 847
			var args = arguments;                                                                                              // 848
			window.clearTimeout(timeout);                                                                                      // 849
			timeout = window.setTimeout(function() {                                                                           // 850
				fn.apply(self, args);                                                                                             // 851
			}, delay);                                                                                                         // 852
		};                                                                                                                  // 853
	};                                                                                                                   // 854
	                                                                                                                     // 855
	/**                                                                                                                  // 856
	 * Debounce all fired events types listed in `types`                                                                 // 857
	 * while executing the provided `fn`.                                                                                // 858
	 *                                                                                                                   // 859
	 * @param {object} self                                                                                              // 860
	 * @param {array} types                                                                                              // 861
	 * @param {function} fn                                                                                              // 862
	 */                                                                                                                  // 863
	var debounce_events = function(self, types, fn) {                                                                    // 864
		var type;                                                                                                           // 865
		var trigger = self.trigger;                                                                                         // 866
		var event_args = {};                                                                                                // 867
	                                                                                                                     // 868
		// override trigger method                                                                                          // 869
		self.trigger = function() {                                                                                         // 870
			var type = arguments[0];                                                                                           // 871
			if (types.indexOf(type) !== -1) {                                                                                  // 872
				event_args[type] = arguments;                                                                                     // 873
			} else {                                                                                                           // 874
				return trigger.apply(self, arguments);                                                                            // 875
			}                                                                                                                  // 876
		};                                                                                                                  // 877
	                                                                                                                     // 878
		// invoke provided function                                                                                         // 879
		fn.apply(self, []);                                                                                                 // 880
		self.trigger = trigger;                                                                                             // 881
	                                                                                                                     // 882
		// trigger queued events                                                                                            // 883
		for (type in event_args) {                                                                                          // 884
			if (event_args.hasOwnProperty(type)) {                                                                             // 885
				trigger.apply(self, event_args[type]);                                                                            // 886
			}                                                                                                                  // 887
		}                                                                                                                   // 888
	};                                                                                                                   // 889
	                                                                                                                     // 890
	/**                                                                                                                  // 891
	 * A workaround for http://bugs.jquery.com/ticket/6696                                                               // 892
	 *                                                                                                                   // 893
	 * @param {object} $parent - Parent element to listen on.                                                            // 894
	 * @param {string} event - Event name.                                                                               // 895
	 * @param {string} selector - Descendant selector to filter by.                                                      // 896
	 * @param {function} fn - Event handler.                                                                             // 897
	 */                                                                                                                  // 898
	var watchChildEvent = function($parent, event, selector, fn) {                                                       // 899
		$parent.on(event, selector, function(e) {                                                                           // 900
			var child = e.target;                                                                                              // 901
			while (child && child.parentNode !== $parent[0]) {                                                                 // 902
				child = child.parentNode;                                                                                         // 903
			}                                                                                                                  // 904
			e.currentTarget = child;                                                                                           // 905
			return fn.apply(this, [e]);                                                                                        // 906
		});                                                                                                                 // 907
	};                                                                                                                   // 908
	                                                                                                                     // 909
	/**                                                                                                                  // 910
	 * Determines the current selection within a text input control.                                                     // 911
	 * Returns an object containing:                                                                                     // 912
	 *   - start                                                                                                         // 913
	 *   - length                                                                                                        // 914
	 *                                                                                                                   // 915
	 * @param {object} input                                                                                             // 916
	 * @returns {object}                                                                                                 // 917
	 */                                                                                                                  // 918
	var getSelection = function(input) {                                                                                 // 919
		var result = {};                                                                                                    // 920
		if ('selectionStart' in input) {                                                                                    // 921
			result.start = input.selectionStart;                                                                               // 922
			result.length = input.selectionEnd - result.start;                                                                 // 923
		} else if (document.selection) {                                                                                    // 924
			input.focus();                                                                                                     // 925
			var sel = document.selection.createRange();                                                                        // 926
			var selLen = document.selection.createRange().text.length;                                                         // 927
			sel.moveStart('character', -input.value.length);                                                                   // 928
			result.start = sel.text.length - selLen;                                                                           // 929
			result.length = selLen;                                                                                            // 930
		}                                                                                                                   // 931
		return result;                                                                                                      // 932
	};                                                                                                                   // 933
	                                                                                                                     // 934
	/**                                                                                                                  // 935
	 * Copies CSS properties from one element to another.                                                                // 936
	 *                                                                                                                   // 937
	 * @param {object} $from                                                                                             // 938
	 * @param {object} $to                                                                                               // 939
	 * @param {array} properties                                                                                         // 940
	 */                                                                                                                  // 941
	var transferStyles = function($from, $to, properties) {                                                              // 942
		var i, n, styles = {};                                                                                              // 943
		if (properties) {                                                                                                   // 944
			for (i = 0, n = properties.length; i < n; i++) {                                                                   // 945
				styles[properties[i]] = $from.css(properties[i]);                                                                 // 946
			}                                                                                                                  // 947
		} else {                                                                                                            // 948
			styles = $from.css();                                                                                              // 949
		}                                                                                                                   // 950
		$to.css(styles);                                                                                                    // 951
	};                                                                                                                   // 952
	                                                                                                                     // 953
	/**                                                                                                                  // 954
	 * Measures the width of a string within a                                                                           // 955
	 * parent element (in pixels).                                                                                       // 956
	 *                                                                                                                   // 957
	 * @param {string} str                                                                                               // 958
	 * @param {object} $parent                                                                                           // 959
	 * @returns {int}                                                                                                    // 960
	 */                                                                                                                  // 961
	var measureString = function(str, $parent) {                                                                         // 962
		if (!str) {                                                                                                         // 963
			return 0;                                                                                                          // 964
		}                                                                                                                   // 965
	                                                                                                                     // 966
		var $test = $('<test>').css({                                                                                       // 967
			position: 'absolute',                                                                                              // 968
			top: -99999,                                                                                                       // 969
			left: -99999,                                                                                                      // 970
			width: 'auto',                                                                                                     // 971
			padding: 0,                                                                                                        // 972
			whiteSpace: 'pre'                                                                                                  // 973
		}).text(str).appendTo('body');                                                                                      // 974
	                                                                                                                     // 975
		transferStyles($parent, $test, [                                                                                    // 976
			'letterSpacing',                                                                                                   // 977
			'fontSize',                                                                                                        // 978
			'fontFamily',                                                                                                      // 979
			'fontWeight',                                                                                                      // 980
			'textTransform'                                                                                                    // 981
		]);                                                                                                                 // 982
	                                                                                                                     // 983
		var width = $test.width();                                                                                          // 984
		$test.remove();                                                                                                     // 985
	                                                                                                                     // 986
		return width;                                                                                                       // 987
	};                                                                                                                   // 988
	                                                                                                                     // 989
	/**                                                                                                                  // 990
	 * Sets up an input to grow horizontally as the user                                                                 // 991
	 * types. If the value is changed manually, you can                                                                  // 992
	 * trigger the "update" handler to resize:                                                                           // 993
	 *                                                                                                                   // 994
	 * $input.trigger('update');                                                                                         // 995
	 *                                                                                                                   // 996
	 * @param {object} $input                                                                                            // 997
	 */                                                                                                                  // 998
	var autoGrow = function($input) {                                                                                    // 999
		var currentWidth = null;                                                                                            // 1000
	                                                                                                                     // 1001
		var update = function(e, options) {                                                                                 // 1002
			var value, keyCode, printable, placeholder, width;                                                                 // 1003
			var shift, character, selection;                                                                                   // 1004
			e = e || window.event || {};                                                                                       // 1005
			options = options || {};                                                                                           // 1006
	                                                                                                                     // 1007
			if (e.metaKey || e.altKey) return;                                                                                 // 1008
			if (!options.force && $input.data('grow') === false) return;                                                       // 1009
	                                                                                                                     // 1010
			value = $input.val();                                                                                              // 1011
			if (e.type && e.type.toLowerCase() === 'keydown') {                                                                // 1012
				keyCode = e.keyCode;                                                                                              // 1013
				printable = (                                                                                                     // 1014
					(keyCode >= 97 && keyCode <= 122) || // a-z                                                                      // 1015
					(keyCode >= 65 && keyCode <= 90)  || // A-Z                                                                      // 1016
					(keyCode >= 48 && keyCode <= 57)  || // 0-9                                                                      // 1017
					keyCode === 32 // space                                                                                          // 1018
				);                                                                                                                // 1019
	                                                                                                                     // 1020
				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {                                                        // 1021
					selection = getSelection($input[0]);                                                                             // 1022
					if (selection.length) {                                                                                          // 1023
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);              // 1024
					} else if (keyCode === KEY_BACKSPACE && selection.start) {                                                       // 1025
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);                         // 1026
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {                                   // 1027
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);                             // 1028
					}                                                                                                                // 1029
				} else if (printable) {                                                                                           // 1030
					shift = e.shiftKey;                                                                                              // 1031
					character = String.fromCharCode(e.keyCode);                                                                      // 1032
					if (shift) character = character.toUpperCase();                                                                  // 1033
					else character = character.toLowerCase();                                                                        // 1034
					value += character;                                                                                              // 1035
				}                                                                                                                 // 1036
			}                                                                                                                  // 1037
	                                                                                                                     // 1038
			placeholder = $input.attr('placeholder');                                                                          // 1039
			if (!value && placeholder) {                                                                                       // 1040
				value = placeholder;                                                                                              // 1041
			}                                                                                                                  // 1042
	                                                                                                                     // 1043
			width = measureString(value, $input) + 4;                                                                          // 1044
			if (width !== currentWidth) {                                                                                      // 1045
				currentWidth = width;                                                                                             // 1046
				$input.width(width);                                                                                              // 1047
				$input.triggerHandler('resize');                                                                                  // 1048
			}                                                                                                                  // 1049
		};                                                                                                                  // 1050
	                                                                                                                     // 1051
		$input.on('keydown keyup update blur', update);                                                                     // 1052
		update();                                                                                                           // 1053
	};                                                                                                                   // 1054
	                                                                                                                     // 1055
	var Selectize = function($input, settings) {                                                                         // 1056
		var key, i, n, dir, input, self = this;                                                                             // 1057
		input = $input[0];                                                                                                  // 1058
		input.selectize = self;                                                                                             // 1059
	                                                                                                                     // 1060
		// detect rtl environment                                                                                           // 1061
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);                                // 1062
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';                                                       // 1064
	                                                                                                                     // 1065
		// setup default state                                                                                              // 1066
		$.extend(self, {                                                                                                    // 1067
			order            : 0,                                                                                              // 1068
			settings         : settings,                                                                                       // 1069
			$input           : $input,                                                                                         // 1070
			tabIndex         : $input.attr('tabindex') || '',                                                                  // 1071
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,                              // 1072
			rtl              : /rtl/i.test(dir),                                                                               // 1073
	                                                                                                                     // 1074
			eventNS          : '.selectize' + (++Selectize.count),                                                             // 1075
			highlightedValue : null,                                                                                           // 1076
			isOpen           : false,                                                                                          // 1077
			isDisabled       : false,                                                                                          // 1078
			isRequired       : $input.is('[required]'),                                                                        // 1079
			isInvalid        : false,                                                                                          // 1080
			isLocked         : false,                                                                                          // 1081
			isFocused        : false,                                                                                          // 1082
			isInputHidden    : false,                                                                                          // 1083
			isSetup          : false,                                                                                          // 1084
			isShiftDown      : false,                                                                                          // 1085
			isCmdDown        : false,                                                                                          // 1086
			isCtrlDown       : false,                                                                                          // 1087
			ignoreFocus      : false,                                                                                          // 1088
			ignoreBlur       : false,                                                                                          // 1089
			ignoreHover      : false,                                                                                          // 1090
			hasOptions       : false,                                                                                          // 1091
			currentResults   : null,                                                                                           // 1092
			lastValue        : '',                                                                                             // 1093
			caretPos         : 0,                                                                                              // 1094
			loading          : 0,                                                                                              // 1095
			loadedSearches   : {},                                                                                             // 1096
	                                                                                                                     // 1097
			$activeOption    : null,                                                                                           // 1098
			$activeItems     : [],                                                                                             // 1099
	                                                                                                                     // 1100
			optgroups        : {},                                                                                             // 1101
			options          : {},                                                                                             // 1102
			userOptions      : {},                                                                                             // 1103
			items            : [],                                                                                             // 1104
			renderCache      : {},                                                                                             // 1105
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});                                                                                                                 // 1107
	                                                                                                                     // 1108
		// search system                                                                                                    // 1109
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});                                          // 1110
	                                                                                                                     // 1111
		// build options table                                                                                              // 1112
		if (self.settings.options) {                                                                                        // 1113
			for (i = 0, n = self.settings.options.length; i < n; i++) {                                                        // 1114
				self.registerOption(self.settings.options[i]);                                                                    // 1115
			}                                                                                                                  // 1116
			delete self.settings.options;                                                                                      // 1117
		}                                                                                                                   // 1118
	                                                                                                                     // 1119
		// build optgroup table                                                                                             // 1120
		if (self.settings.optgroups) {                                                                                      // 1121
			for (i = 0, n = self.settings.optgroups.length; i < n; i++) {                                                      // 1122
				self.registerOptionGroup(self.settings.optgroups[i]);                                                             // 1123
			}                                                                                                                  // 1124
			delete self.settings.optgroups;                                                                                    // 1125
		}                                                                                                                   // 1126
	                                                                                                                     // 1127
		// option-dependent defaults                                                                                        // 1128
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');                     // 1129
		if (typeof self.settings.hideSelected !== 'boolean') {                                                              // 1130
			self.settings.hideSelected = self.settings.mode === 'multi';                                                       // 1131
		}                                                                                                                   // 1132
	                                                                                                                     // 1133
		self.initializePlugins(self.settings.plugins);                                                                      // 1134
		self.setupCallbacks();                                                                                              // 1135
		self.setupTemplates();                                                                                              // 1136
		self.setup();                                                                                                       // 1137
	};                                                                                                                   // 1138
	                                                                                                                     // 1139
	// mixins                                                                                                            // 1140
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -                         // 1141
	                                                                                                                     // 1142
	MicroEvent.mixin(Selectize);                                                                                         // 1143
	MicroPlugin.mixin(Selectize);                                                                                        // 1144
	                                                                                                                     // 1145
	// methods                                                                                                           // 1146
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -                         // 1147
	                                                                                                                     // 1148
	$.extend(Selectize.prototype, {                                                                                      // 1149
	                                                                                                                     // 1150
		/**                                                                                                                 // 1151
		 * Creates all elements and sets up event bindings.                                                                 // 1152
		 */                                                                                                                 // 1153
		setup: function() {                                                                                                 // 1154
			var self      = this;                                                                                              // 1155
			var settings  = self.settings;                                                                                     // 1156
			var eventNS   = self.eventNS;                                                                                      // 1157
			var $window   = $(window);                                                                                         // 1158
			var $document = $(document);                                                                                       // 1159
			var $input    = self.$input;                                                                                       // 1160
	                                                                                                                     // 1161
			var $wrapper;                                                                                                      // 1162
			var $control;                                                                                                      // 1163
			var $control_input;                                                                                                // 1164
			var $dropdown;                                                                                                     // 1165
			var $dropdown_content;                                                                                             // 1166
			var $dropdown_parent;                                                                                              // 1167
			var inputMode;                                                                                                     // 1168
			var timeout_blur;                                                                                                  // 1169
			var timeout_focus;                                                                                                 // 1170
			var classes;                                                                                                       // 1171
			var classes_plugins;                                                                                               // 1172
	                                                                                                                     // 1173
			inputMode         = self.settings.mode;                                                                            // 1174
			classes           = $input.attr('class') || '';                                                                    // 1175
	                                                                                                                     // 1176
			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);              // 1177
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);                 // 1178
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);                                                        // 1180
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);                        // 1182
	                                                                                                                     // 1183
			if(self.settings.copyClassesToDropdown) {                                                                          // 1184
				$dropdown.addClass(classes);                                                                                      // 1185
			}                                                                                                                  // 1186
	                                                                                                                     // 1187
			$wrapper.css({                                                                                                     // 1188
				width: $input[0].style.width                                                                                      // 1189
			});                                                                                                                // 1190
	                                                                                                                     // 1191
			if (self.plugins.names.length) {                                                                                   // 1192
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');                                                // 1193
				$wrapper.addClass(classes_plugins);                                                                               // 1194
				$dropdown.addClass(classes_plugins);                                                                              // 1195
			}                                                                                                                  // 1196
	                                                                                                                     // 1197
			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {                        // 1198
				$input.attr('multiple', 'multiple');                                                                              // 1199
			}                                                                                                                  // 1200
	                                                                                                                     // 1201
			if (self.settings.placeholder) {                                                                                   // 1202
				$control_input.attr('placeholder', settings.placeholder);                                                         // 1203
			}                                                                                                                  // 1204
	                                                                                                                     // 1205
			// if splitOn was not passed in, construct it from the delimiter to allow pasting universally                      // 1206
			if (!self.settings.splitOn && self.settings.delimiter) {                                                           // 1207
				var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                         // 1208
				self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');                                          // 1209
			}                                                                                                                  // 1210
	                                                                                                                     // 1211
			if ($input.attr('autocorrect')) {                                                                                  // 1212
				$control_input.attr('autocorrect', $input.attr('autocorrect'));                                                   // 1213
			}                                                                                                                  // 1214
	                                                                                                                     // 1215
			if ($input.attr('autocapitalize')) {                                                                               // 1216
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));                                             // 1217
			}                                                                                                                  // 1218
	                                                                                                                     // 1219
			self.$wrapper          = $wrapper;                                                                                 // 1220
			self.$control          = $control;                                                                                 // 1221
			self.$control_input    = $control_input;                                                                           // 1222
			self.$dropdown         = $dropdown;                                                                                // 1223
			self.$dropdown_content = $dropdown_content;                                                                        // 1224
	                                                                                                                     // 1225
			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);                                                                                          // 1229
	                                                                                                                     // 1230
			$control.on({                                                                                                      // 1231
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },                                       // 1232
				click     : function() { return self.onClick.apply(self, arguments); }                                            // 1233
			});                                                                                                                // 1234
	                                                                                                                     // 1235
			$control_input.on({                                                                                                // 1236
				mousedown : function(e) { e.stopPropagation(); },                                                                 // 1237
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },                                         // 1238
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },                                           // 1239
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },                                        // 1240
				resize    : function() { self.positionDropdown.apply(self, []); },                                                // 1241
				blur      : function() { return self.onBlur.apply(self, arguments); },                                            // 1242
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },                  // 1243
				paste     : function() { return self.onPaste.apply(self, arguments); }                                            // 1244
			});                                                                                                                // 1245
	                                                                                                                     // 1246
			$document.on('keydown' + eventNS, function(e) {                                                                    // 1247
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];                                                               // 1248
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];                                                               // 1249
				self.isShiftDown = e.shiftKey;                                                                                    // 1250
			});                                                                                                                // 1251
	                                                                                                                     // 1252
			$document.on('keyup' + eventNS, function(e) {                                                                      // 1253
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;                                                              // 1254
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;                                                            // 1255
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;                                                                // 1256
			});                                                                                                                // 1257
	                                                                                                                     // 1258
			$document.on('mousedown' + eventNS, function(e) {                                                                  // 1259
				if (self.isFocused) {                                                                                             // 1260
					// prevent events on the dropdown scrollbar from causing the control to blur                                     // 1261
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {                               // 1262
						return false;                                                                                                   // 1263
					}                                                                                                                // 1264
					// blur on click outside                                                                                         // 1265
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {                                      // 1266
						self.blur(e.target);                                                                                            // 1267
					}                                                                                                                // 1268
				}                                                                                                                 // 1269
			});                                                                                                                // 1270
	                                                                                                                     // 1271
			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {                                        // 1272
				if (self.isOpen) {                                                                                                // 1273
					self.positionDropdown.apply(self, arguments);                                                                    // 1274
				}                                                                                                                 // 1275
			});                                                                                                                // 1276
			$window.on('mousemove' + eventNS, function() {                                                                     // 1277
				self.ignoreHover = false;                                                                                         // 1278
			});                                                                                                                // 1279
	                                                                                                                     // 1280
			// store original children and tab index so that they can be                                                       // 1281
			// restored when the destroy() method is called.                                                                   // 1282
			this.revertSettings = {                                                                                            // 1283
				$children : $input.children().detach(),                                                                           // 1284
				tabindex  : $input.attr('tabindex')                                                                               // 1285
			};                                                                                                                 // 1286
	                                                                                                                     // 1287
			$input.attr('tabindex', -1).hide().after(self.$wrapper);                                                           // 1288
	                                                                                                                     // 1289
			if ($.isArray(settings.items)) {                                                                                   // 1290
				self.setValue(settings.items);                                                                                    // 1291
				delete settings.items;                                                                                            // 1292
			}                                                                                                                  // 1293
	                                                                                                                     // 1294
			// feature detect for the validation API                                                                           // 1295
			if (SUPPORTS_VALIDITY_API) {                                                                                       // 1296
				$input.on('invalid' + eventNS, function(e) {                                                                      // 1297
					e.preventDefault();                                                                                              // 1298
					self.isInvalid = true;                                                                                           // 1299
					self.refreshState();                                                                                             // 1300
				});                                                                                                               // 1301
			}                                                                                                                  // 1302
	                                                                                                                     // 1303
			self.updateOriginalInput();                                                                                        // 1304
			self.refreshItems();                                                                                               // 1305
			self.refreshState();                                                                                               // 1306
			self.updatePlaceholder();                                                                                          // 1307
			self.isSetup = true;                                                                                               // 1308
	                                                                                                                     // 1309
			if ($input.is(':disabled')) {                                                                                      // 1310
				self.disable();                                                                                                   // 1311
			}                                                                                                                  // 1312
	                                                                                                                     // 1313
			self.on('change', this.onChange);                                                                                  // 1314
	                                                                                                                     // 1315
			$input.data('selectize', self);                                                                                    // 1316
			$input.addClass('selectized');                                                                                     // 1317
			self.trigger('initialize');                                                                                        // 1318
	                                                                                                                     // 1319
			// preload options                                                                                                 // 1320
			if (settings.preload === true) {                                                                                   // 1321
				self.onSearchChange('');                                                                                          // 1322
			}                                                                                                                  // 1323
	                                                                                                                     // 1324
		},                                                                                                                  // 1325
	                                                                                                                     // 1326
		/**                                                                                                                 // 1327
		 * Sets up default rendering functions.                                                                             // 1328
		 */                                                                                                                 // 1329
		setupTemplates: function() {                                                                                        // 1330
			var self = this;                                                                                                   // 1331
			var field_label = self.settings.labelField;                                                                        // 1332
			var field_optgroup = self.settings.optgroupLabelField;                                                             // 1333
	                                                                                                                     // 1334
			var templates = {                                                                                                  // 1335
				'optgroup': function(data) {                                                                                      // 1336
					return '<div class="optgroup">' + data.html + '</div>';                                                          // 1337
				},                                                                                                                // 1338
				'optgroup_header': function(data, escape) {                                                                       // 1339
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';                                // 1340
				},                                                                                                                // 1341
				'option': function(data, escape) {                                                                                // 1342
					return '<div class="option">' + escape(data[field_label]) + '</div>';                                            // 1343
				},                                                                                                                // 1344
				'item': function(data, escape) {                                                                                  // 1345
					return '<div class="item">' + escape(data[field_label]) + '</div>';                                              // 1346
				},                                                                                                                // 1347
				'option_create': function(data, escape) {                                                                         // 1348
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';                      // 1349
				}                                                                                                                 // 1350
			};                                                                                                                 // 1351
	                                                                                                                     // 1352
			self.settings.render = $.extend({}, templates, self.settings.render);                                              // 1353
		},                                                                                                                  // 1354
	                                                                                                                     // 1355
		/**                                                                                                                 // 1356
		 * Maps fired events to callbacks provided                                                                          // 1357
		 * in the settings used when creating the control.                                                                  // 1358
		 */                                                                                                                 // 1359
		setupCallbacks: function() {                                                                                        // 1360
			var key, fn, callbacks = {                                                                                         // 1361
				'initialize'      : 'onInitialize',                                                                               // 1362
				'change'          : 'onChange',                                                                                   // 1363
				'item_add'        : 'onItemAdd',                                                                                  // 1364
				'item_remove'     : 'onItemRemove',                                                                               // 1365
				'clear'           : 'onClear',                                                                                    // 1366
				'option_add'      : 'onOptionAdd',                                                                                // 1367
				'option_remove'   : 'onOptionRemove',                                                                             // 1368
				'option_clear'    : 'onOptionClear',                                                                              // 1369
				'optgroup_add'    : 'onOptionGroupAdd',                                                                           // 1370
				'optgroup_remove' : 'onOptionGroupRemove',                                                                        // 1371
				'optgroup_clear'  : 'onOptionGroupClear',                                                                         // 1372
				'dropdown_open'   : 'onDropdownOpen',                                                                             // 1373
				'dropdown_close'  : 'onDropdownClose',                                                                            // 1374
				'type'            : 'onType',                                                                                     // 1375
				'load'            : 'onLoad',                                                                                     // 1376
				'focus'           : 'onFocus',                                                                                    // 1377
				'blur'            : 'onBlur'                                                                                      // 1378
			};                                                                                                                 // 1379
	                                                                                                                     // 1380
			for (key in callbacks) {                                                                                           // 1381
				if (callbacks.hasOwnProperty(key)) {                                                                              // 1382
					fn = this.settings[callbacks[key]];                                                                              // 1383
					if (fn) this.on(key, fn);                                                                                        // 1384
				}                                                                                                                 // 1385
			}                                                                                                                  // 1386
		},                                                                                                                  // 1387
	                                                                                                                     // 1388
		/**                                                                                                                 // 1389
		 * Triggered when the main control element                                                                          // 1390
		 * has a click event.                                                                                               // 1391
		 *                                                                                                                  // 1392
		 * @param {object} e                                                                                                // 1393
		 * @return {boolean}                                                                                                // 1394
		 */                                                                                                                 // 1395
		onClick: function(e) {                                                                                              // 1396
			var self = this;                                                                                                   // 1397
	                                                                                                                     // 1398
			// necessary for mobile webkit devices (manual focus triggering                                                    // 1399
			// is ignored unless invoked within a click event)                                                                 // 1400
			if (!self.isFocused) {                                                                                             // 1401
				self.focus();                                                                                                     // 1402
				e.preventDefault();                                                                                               // 1403
			}                                                                                                                  // 1404
		},                                                                                                                  // 1405
	                                                                                                                     // 1406
		/**                                                                                                                 // 1407
		 * Triggered when the main control element                                                                          // 1408
		 * has a mouse down event.                                                                                          // 1409
		 *                                                                                                                  // 1410
		 * @param {object} e                                                                                                // 1411
		 * @return {boolean}                                                                                                // 1412
		 */                                                                                                                 // 1413
		onMouseDown: function(e) {                                                                                          // 1414
			var self = this;                                                                                                   // 1415
			var defaultPrevented = e.isDefaultPrevented();                                                                     // 1416
			var $target = $(e.target);                                                                                         // 1417
	                                                                                                                     // 1418
			if (self.isFocused) {                                                                                              // 1419
				// retain focus by preventing native handling. if the                                                             // 1420
				// event target is the input it should not be modified.                                                           // 1421
				// otherwise, text selection within the input won't work.                                                         // 1422
				if (e.target !== self.$control_input[0]) {                                                                        // 1423
					if (self.settings.mode === 'single') {                                                                           // 1424
						// toggle dropdown                                                                                              // 1425
						self.isOpen ? self.close() : self.open();                                                                       // 1426
					} else if (!defaultPrevented) {                                                                                  // 1427
						self.setActiveItem(null);                                                                                       // 1428
					}                                                                                                                // 1429
					return false;                                                                                                    // 1430
				}                                                                                                                 // 1431
			} else {                                                                                                           // 1432
				// give control focus                                                                                             // 1433
				if (!defaultPrevented) {                                                                                          // 1434
					window.setTimeout(function() {                                                                                   // 1435
						self.focus();                                                                                                   // 1436
					}, 0);                                                                                                           // 1437
				}                                                                                                                 // 1438
			}                                                                                                                  // 1439
		},                                                                                                                  // 1440
	                                                                                                                     // 1441
		/**                                                                                                                 // 1442
		 * Triggered when the value of the control has been changed.                                                        // 1443
		 * This should propagate the event to the original DOM                                                              // 1444
		 * input / select element.                                                                                          // 1445
		 */                                                                                                                 // 1446
		onChange: function() {                                                                                              // 1447
			this.$input.trigger('change');                                                                                     // 1448
		},                                                                                                                  // 1449
	                                                                                                                     // 1450
		/**                                                                                                                 // 1451
		 * Triggered on <input> paste.                                                                                      // 1452
		 *                                                                                                                  // 1453
		 * @param {object} e                                                                                                // 1454
		 * @returns {boolean}                                                                                               // 1455
		 */                                                                                                                 // 1456
		onPaste: function(e) {                                                                                              // 1457
			var self = this;                                                                                                   // 1458
			if (self.isFull() || self.isInputHidden || self.isLocked) {                                                        // 1459
				e.preventDefault();                                                                                               // 1460
			} else {                                                                                                           // 1461
				// If a regex or string is included, this will split the pasted                                                   // 1462
				// input and create Items for each separate value                                                                 // 1463
				if (self.settings.splitOn) {                                                                                      // 1464
					setTimeout(function() {                                                                                          // 1465
						var splitInput = $.trim(self.$control_input.val() || '').split(self.settings.splitOn);                          // 1466
						for (var i = 0, n = splitInput.length; i < n; i++) {                                                            // 1467
							self.createItem(splitInput[i]);                                                                                // 1468
						}                                                                                                               // 1469
					}, 0);                                                                                                           // 1470
				}                                                                                                                 // 1471
			}                                                                                                                  // 1472
		},                                                                                                                  // 1473
	                                                                                                                     // 1474
		/**                                                                                                                 // 1475
		 * Triggered on <input> keypress.                                                                                   // 1476
		 *                                                                                                                  // 1477
		 * @param {object} e                                                                                                // 1478
		 * @returns {boolean}                                                                                               // 1479
		 */                                                                                                                 // 1480
		onKeyPress: function(e) {                                                                                           // 1481
			if (this.isLocked) return e && e.preventDefault();                                                                 // 1482
			var character = String.fromCharCode(e.keyCode || e.which);                                                         // 1483
			if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {             // 1484
				this.createItem();                                                                                                // 1485
				e.preventDefault();                                                                                               // 1486
				return false;                                                                                                     // 1487
			}                                                                                                                  // 1488
		},                                                                                                                  // 1489
	                                                                                                                     // 1490
		/**                                                                                                                 // 1491
		 * Triggered on <input> keydown.                                                                                    // 1492
		 *                                                                                                                  // 1493
		 * @param {object} e                                                                                                // 1494
		 * @returns {boolean}                                                                                               // 1495
		 */                                                                                                                 // 1496
		onKeyDown: function(e) {                                                                                            // 1497
			var isInput = e.target === this.$control_input[0];                                                                 // 1498
			var self = this;                                                                                                   // 1499
	                                                                                                                     // 1500
			if (self.isLocked) {                                                                                               // 1501
				if (e.keyCode !== KEY_TAB) {                                                                                      // 1502
					e.preventDefault();                                                                                              // 1503
				}                                                                                                                 // 1504
				return;                                                                                                           // 1505
			}                                                                                                                  // 1506
	                                                                                                                     // 1507
			switch (e.keyCode) {                                                                                               // 1508
				case KEY_A:                                                                                                       // 1509
					if (self.isCmdDown) {                                                                                            // 1510
						self.selectAll();                                                                                               // 1511
						return;                                                                                                         // 1512
					}                                                                                                                // 1513
					break;                                                                                                           // 1514
				case KEY_ESC:                                                                                                     // 1515
					if (self.isOpen) {                                                                                               // 1516
						e.preventDefault();                                                                                             // 1517
						e.stopPropagation();                                                                                            // 1518
						self.close();                                                                                                   // 1519
					}                                                                                                                // 1520
					return;                                                                                                          // 1521
				case KEY_N:                                                                                                       // 1522
					if (!e.ctrlKey || e.altKey) break;                                                                               // 1523
				case KEY_DOWN:                                                                                                    // 1524
					if (!self.isOpen && self.hasOptions) {                                                                           // 1525
						self.open();                                                                                                    // 1526
					} else if (self.$activeOption) {                                                                                 // 1527
						self.ignoreHover = true;                                                                                        // 1528
						var $next = self.getAdjacentOption(self.$activeOption, 1);                                                      // 1529
						if ($next.length) self.setActiveOption($next, true, true);                                                      // 1530
					}                                                                                                                // 1531
					e.preventDefault();                                                                                              // 1532
					return;                                                                                                          // 1533
				case KEY_P:                                                                                                       // 1534
					if (!e.ctrlKey || e.altKey) break;                                                                               // 1535
				case KEY_UP:                                                                                                      // 1536
					if (self.$activeOption) {                                                                                        // 1537
						self.ignoreHover = true;                                                                                        // 1538
						var $prev = self.getAdjacentOption(self.$activeOption, -1);                                                     // 1539
						if ($prev.length) self.setActiveOption($prev, true, true);                                                      // 1540
					}                                                                                                                // 1541
					e.preventDefault();                                                                                              // 1542
					return;                                                                                                          // 1543
				case KEY_RETURN:                                                                                                  // 1544
					if (self.isOpen && self.$activeOption) {                                                                         // 1545
						self.onOptionSelect({currentTarget: self.$activeOption});                                                       // 1546
						e.preventDefault();                                                                                             // 1547
					}                                                                                                                // 1548
					return;                                                                                                          // 1549
				case KEY_LEFT:                                                                                                    // 1550
					self.advanceSelection(-1, e);                                                                                    // 1551
					return;                                                                                                          // 1552
				case KEY_RIGHT:                                                                                                   // 1553
					self.advanceSelection(1, e);                                                                                     // 1554
					return;                                                                                                          // 1555
				case KEY_TAB:                                                                                                     // 1556
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {                                            // 1557
						self.onOptionSelect({currentTarget: self.$activeOption});                                                       // 1558
	                                                                                                                     // 1559
						// Default behaviour is to jump to the next field, we only want this                                            // 1560
						// if the current field doesn't accept any more entries                                                         // 1561
						if (!self.isFull()) {                                                                                           // 1562
							e.preventDefault();                                                                                            // 1563
						}                                                                                                               // 1564
					}                                                                                                                // 1565
					if (self.settings.create && self.createItem()) {                                                                 // 1566
						e.preventDefault();                                                                                             // 1567
					}                                                                                                                // 1568
					return;                                                                                                          // 1569
				case KEY_BACKSPACE:                                                                                               // 1570
				case KEY_DELETE:                                                                                                  // 1571
					self.deleteSelection(e);                                                                                         // 1572
					return;                                                                                                          // 1573
			}                                                                                                                  // 1574
	                                                                                                                     // 1575
			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {                                  // 1576
				e.preventDefault();                                                                                               // 1577
				return;                                                                                                           // 1578
			}                                                                                                                  // 1579
		},                                                                                                                  // 1580
	                                                                                                                     // 1581
		/**                                                                                                                 // 1582
		 * Triggered on <input> keyup.                                                                                      // 1583
		 *                                                                                                                  // 1584
		 * @param {object} e                                                                                                // 1585
		 * @returns {boolean}                                                                                               // 1586
		 */                                                                                                                 // 1587
		onKeyUp: function(e) {                                                                                              // 1588
			var self = this;                                                                                                   // 1589
	                                                                                                                     // 1590
			if (self.isLocked) return e && e.preventDefault();                                                                 // 1591
			var value = self.$control_input.val() || '';                                                                       // 1592
			if (self.lastValue !== value) {                                                                                    // 1593
				self.lastValue = value;                                                                                           // 1594
				self.onSearchChange(value);                                                                                       // 1595
				self.refreshOptions();                                                                                            // 1596
				self.trigger('type', value);                                                                                      // 1597
			}                                                                                                                  // 1598
		},                                                                                                                  // 1599
	                                                                                                                     // 1600
		/**                                                                                                                 // 1601
		 * Invokes the user-provide option provider / loader.                                                               // 1602
		 *                                                                                                                  // 1603
		 * Note: this function is debounced in the Selectize                                                                // 1604
		 * constructor (by `settings.loadDelay` milliseconds)                                                               // 1605
		 *                                                                                                                  // 1606
		 * @param {string} value                                                                                            // 1607
		 */                                                                                                                 // 1608
		onSearchChange: function(value) {                                                                                   // 1609
			var self = this;                                                                                                   // 1610
			var fn = self.settings.load;                                                                                       // 1611
			if (!fn) return;                                                                                                   // 1612
			if (self.loadedSearches.hasOwnProperty(value)) return;                                                             // 1613
			self.loadedSearches[value] = true;                                                                                 // 1614
			self.load(function(callback) {                                                                                     // 1615
				fn.apply(self, [value, callback]);                                                                                // 1616
			});                                                                                                                // 1617
		},                                                                                                                  // 1618
	                                                                                                                     // 1619
		/**                                                                                                                 // 1620
		 * Triggered on <input> focus.                                                                                      // 1621
		 *                                                                                                                  // 1622
		 * @param {object} e (optional)                                                                                     // 1623
		 * @returns {boolean}                                                                                               // 1624
		 */                                                                                                                 // 1625
		onFocus: function(e) {                                                                                              // 1626
			var self = this;                                                                                                   // 1627
			var wasFocused = self.isFocused;                                                                                   // 1628
	                                                                                                                     // 1629
			if (self.isDisabled) {                                                                                             // 1630
				self.blur();                                                                                                      // 1631
				e && e.preventDefault();                                                                                          // 1632
				return false;                                                                                                     // 1633
			}                                                                                                                  // 1634
	                                                                                                                     // 1635
			if (self.ignoreFocus) return;                                                                                      // 1636
			self.isFocused = true;                                                                                             // 1637
			if (self.settings.preload === 'focus') self.onSearchChange('');                                                    // 1638
	                                                                                                                     // 1639
			if (!wasFocused) self.trigger('focus');                                                                            // 1640
	                                                                                                                     // 1641
			if (!self.$activeItems.length) {                                                                                   // 1642
				self.showInput();                                                                                                 // 1643
				self.setActiveItem(null);                                                                                         // 1644
				self.refreshOptions(!!self.settings.openOnFocus);                                                                 // 1645
			}                                                                                                                  // 1646
	                                                                                                                     // 1647
			self.refreshState();                                                                                               // 1648
		},                                                                                                                  // 1649
	                                                                                                                     // 1650
		/**                                                                                                                 // 1651
		 * Triggered on <input> blur.                                                                                       // 1652
		 *                                                                                                                  // 1653
		 * @param {object} e                                                                                                // 1654
		 * @param {Element} dest                                                                                            // 1655
		 */                                                                                                                 // 1656
		onBlur: function(e, dest) {                                                                                         // 1657
			var self = this;                                                                                                   // 1658
			if (!self.isFocused) return;                                                                                       // 1659
			self.isFocused = false;                                                                                            // 1660
	                                                                                                                     // 1661
			if (self.ignoreFocus) {                                                                                            // 1662
				return;                                                                                                           // 1663
			} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {                             // 1664
				// necessary to prevent IE closing the dropdown when the scrollbar is clicked                                     // 1665
				self.ignoreBlur = true;                                                                                           // 1666
				self.onFocus(e);                                                                                                  // 1667
				return;                                                                                                           // 1668
			}                                                                                                                  // 1669
	                                                                                                                     // 1670
			var deactivate = function() {                                                                                      // 1671
				self.close();                                                                                                     // 1672
				self.setTextboxValue('');                                                                                         // 1673
				self.setActiveItem(null);                                                                                         // 1674
				self.setActiveOption(null);                                                                                       // 1675
				self.setCaret(self.items.length);                                                                                 // 1676
				self.refreshState();                                                                                              // 1677
	                                                                                                                     // 1678
				// IE11 bug: element still marked as active                                                                       // 1679
				(dest || document.body).focus();                                                                                  // 1680
	                                                                                                                     // 1681
				self.ignoreFocus = false;                                                                                         // 1682
				self.trigger('blur');                                                                                             // 1683
			};                                                                                                                 // 1684
	                                                                                                                     // 1685
			self.ignoreFocus = true;                                                                                           // 1686
			if (self.settings.create && self.settings.createOnBlur) {                                                          // 1687
				self.createItem(null, false, deactivate);                                                                         // 1688
			} else {                                                                                                           // 1689
				deactivate();                                                                                                     // 1690
			}                                                                                                                  // 1691
		},                                                                                                                  // 1692
	                                                                                                                     // 1693
		/**                                                                                                                 // 1694
		 * Triggered when the user rolls over                                                                               // 1695
		 * an option in the autocomplete dropdown menu.                                                                     // 1696
		 *                                                                                                                  // 1697
		 * @param {object} e                                                                                                // 1698
		 * @returns {boolean}                                                                                               // 1699
		 */                                                                                                                 // 1700
		onOptionHover: function(e) {                                                                                        // 1701
			if (this.ignoreHover) return;                                                                                      // 1702
			this.setActiveOption(e.currentTarget, false);                                                                      // 1703
		},                                                                                                                  // 1704
	                                                                                                                     // 1705
		/**                                                                                                                 // 1706
		 * Triggered when the user clicks on an option                                                                      // 1707
		 * in the autocomplete dropdown menu.                                                                               // 1708
		 *                                                                                                                  // 1709
		 * @param {object} e                                                                                                // 1710
		 * @returns {boolean}                                                                                               // 1711
		 */                                                                                                                 // 1712
		onOptionSelect: function(e) {                                                                                       // 1713
			var value, $target, $option, self = this;                                                                          // 1714
	                                                                                                                     // 1715
			if (e.preventDefault) {                                                                                            // 1716
				e.preventDefault();                                                                                               // 1717
				e.stopPropagation();                                                                                              // 1718
			}                                                                                                                  // 1719
	                                                                                                                     // 1720
			$target = $(e.currentTarget);                                                                                      // 1721
			if ($target.hasClass('create')) {                                                                                  // 1722
				self.createItem(null, function() {                                                                                // 1723
					if (self.settings.closeAfterSelect) {                                                                            // 1724
						self.close();                                                                                                   // 1725
					}                                                                                                                // 1726
				});                                                                                                               // 1727
			} else {                                                                                                           // 1728
				value = $target.attr('data-value');                                                                               // 1729
				if (typeof value !== 'undefined') {                                                                               // 1730
					self.lastQuery = null;                                                                                           // 1731
					self.setTextboxValue('');                                                                                        // 1732
					self.addItem(value);                                                                                             // 1733
					if (self.settings.closeAfterSelect) {                                                                            // 1734
						self.close();                                                                                                   // 1735
					} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {                                      // 1736
						self.setActiveOption(self.getOption(value));                                                                    // 1737
					}                                                                                                                // 1738
				}                                                                                                                 // 1739
			}                                                                                                                  // 1740
		},                                                                                                                  // 1741
	                                                                                                                     // 1742
		/**                                                                                                                 // 1743
		 * Triggered when the user clicks on an item                                                                        // 1744
		 * that has been selected.                                                                                          // 1745
		 *                                                                                                                  // 1746
		 * @param {object} e                                                                                                // 1747
		 * @returns {boolean}                                                                                               // 1748
		 */                                                                                                                 // 1749
		onItemSelect: function(e) {                                                                                         // 1750
			var self = this;                                                                                                   // 1751
	                                                                                                                     // 1752
			if (self.isLocked) return;                                                                                         // 1753
			if (self.settings.mode === 'multi') {                                                                              // 1754
				e.preventDefault();                                                                                               // 1755
				self.setActiveItem(e.currentTarget, e);                                                                           // 1756
			}                                                                                                                  // 1757
		},                                                                                                                  // 1758
	                                                                                                                     // 1759
		/**                                                                                                                 // 1760
		 * Invokes the provided method that provides                                                                        // 1761
		 * results to a callback---which are then added                                                                     // 1762
		 * as options to the control.                                                                                       // 1763
		 *                                                                                                                  // 1764
		 * @param {function} fn                                                                                             // 1765
		 */                                                                                                                 // 1766
		load: function(fn) {                                                                                                // 1767
			var self = this;                                                                                                   // 1768
			var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);                                                 // 1769
	                                                                                                                     // 1770
			self.loading++;                                                                                                    // 1771
			fn.apply(self, [function(results) {                                                                                // 1772
				self.loading = Math.max(self.loading - 1, 0);                                                                     // 1773
				if (results && results.length) {                                                                                  // 1774
					self.addOption(results);                                                                                         // 1775
					self.refreshOptions(self.isFocused && !self.isInputHidden);                                                      // 1776
				}                                                                                                                 // 1777
				if (!self.loading) {                                                                                              // 1778
					$wrapper.removeClass(self.settings.loadingClass);                                                                // 1779
				}                                                                                                                 // 1780
				self.trigger('load', results);                                                                                    // 1781
			}]);                                                                                                               // 1782
		},                                                                                                                  // 1783
	                                                                                                                     // 1784
		/**                                                                                                                 // 1785
		 * Sets the input field of the control to the specified value.                                                      // 1786
		 *                                                                                                                  // 1787
		 * @param {string} value                                                                                            // 1788
		 */                                                                                                                 // 1789
		setTextboxValue: function(value) {                                                                                  // 1790
			var $input = this.$control_input;                                                                                  // 1791
			var changed = $input.val() !== value;                                                                              // 1792
			if (changed) {                                                                                                     // 1793
				$input.val(value).triggerHandler('update');                                                                       // 1794
				this.lastValue = value;                                                                                           // 1795
			}                                                                                                                  // 1796
		},                                                                                                                  // 1797
	                                                                                                                     // 1798
		/**                                                                                                                 // 1799
		 * Returns the value of the control. If multiple items                                                              // 1800
		 * can be selected (e.g. <select multiple>), this returns                                                           // 1801
		 * an array. If only one item can be selected, this                                                                 // 1802
		 * returns a string.                                                                                                // 1803
		 *                                                                                                                  // 1804
		 * @returns {mixed}                                                                                                 // 1805
		 */                                                                                                                 // 1806
		getValue: function() {                                                                                              // 1807
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {                                                 // 1808
				return this.items;                                                                                                // 1809
			} else {                                                                                                           // 1810
				return this.items.join(this.settings.delimiter);                                                                  // 1811
			}                                                                                                                  // 1812
		},                                                                                                                  // 1813
	                                                                                                                     // 1814
		/**                                                                                                                 // 1815
		 * Resets the selected items to the given value.                                                                    // 1816
		 *                                                                                                                  // 1817
		 * @param {mixed} value                                                                                             // 1818
		 */                                                                                                                 // 1819
		setValue: function(value, silent) {                                                                                 // 1820
			var events = silent ? [] : ['change'];                                                                             // 1821
	                                                                                                                     // 1822
			debounce_events(this, events, function() {                                                                         // 1823
				this.clear(silent);                                                                                               // 1824
				this.addItems(value, silent);                                                                                     // 1825
			});                                                                                                                // 1826
		},                                                                                                                  // 1827
	                                                                                                                     // 1828
		/**                                                                                                                 // 1829
		 * Sets the selected item.                                                                                          // 1830
		 *                                                                                                                  // 1831
		 * @param {object} $item                                                                                            // 1832
		 * @param {object} e (optional)                                                                                     // 1833
		 */                                                                                                                 // 1834
		setActiveItem: function($item, e) {                                                                                 // 1835
			var self = this;                                                                                                   // 1836
			var eventName;                                                                                                     // 1837
			var i, idx, begin, end, item, swap;                                                                                // 1838
			var $last;                                                                                                         // 1839
	                                                                                                                     // 1840
			if (self.settings.mode === 'single') return;                                                                       // 1841
			$item = $($item);                                                                                                  // 1842
	                                                                                                                     // 1843
			// clear the active selection                                                                                      // 1844
			if (!$item.length) {                                                                                               // 1845
				$(self.$activeItems).removeClass('active');                                                                       // 1846
				self.$activeItems = [];                                                                                           // 1847
				if (self.isFocused) {                                                                                             // 1848
					self.showInput();                                                                                                // 1849
				}                                                                                                                 // 1850
				return;                                                                                                           // 1851
			}                                                                                                                  // 1852
	                                                                                                                     // 1853
			// modify selection                                                                                                // 1854
			eventName = e && e.type.toLowerCase();                                                                             // 1855
	                                                                                                                     // 1856
			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {                                   // 1857
				$last = self.$control.children('.active:last');                                                                   // 1858
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);                                   // 1859
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);                                   // 1860
				if (begin > end) {                                                                                                // 1861
					swap  = begin;                                                                                                   // 1862
					begin = end;                                                                                                     // 1863
					end   = swap;                                                                                                    // 1864
				}                                                                                                                 // 1865
				for (i = begin; i <= end; i++) {                                                                                  // 1866
					item = self.$control[0].childNodes[i];                                                                           // 1867
					if (self.$activeItems.indexOf(item) === -1) {                                                                    // 1868
						$(item).addClass('active');                                                                                     // 1869
						self.$activeItems.push(item);                                                                                   // 1870
					}                                                                                                                // 1871
				}                                                                                                                 // 1872
				e.preventDefault();                                                                                               // 1873
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {      // 1874
				if ($item.hasClass('active')) {                                                                                   // 1875
					idx = self.$activeItems.indexOf($item[0]);                                                                       // 1876
					self.$activeItems.splice(idx, 1);                                                                                // 1877
					$item.removeClass('active');                                                                                     // 1878
				} else {                                                                                                          // 1879
					self.$activeItems.push($item.addClass('active')[0]);                                                             // 1880
				}                                                                                                                 // 1881
			} else {                                                                                                           // 1882
				$(self.$activeItems).removeClass('active');                                                                       // 1883
				self.$activeItems = [$item.addClass('active')[0]];                                                                // 1884
			}                                                                                                                  // 1885
	                                                                                                                     // 1886
			// ensure control has focus                                                                                        // 1887
			self.hideInput();                                                                                                  // 1888
			if (!this.isFocused) {                                                                                             // 1889
				self.focus();                                                                                                     // 1890
			}                                                                                                                  // 1891
		},                                                                                                                  // 1892
	                                                                                                                     // 1893
		/**                                                                                                                 // 1894
		 * Sets the selected item in the dropdown menu                                                                      // 1895
		 * of available options.                                                                                            // 1896
		 *                                                                                                                  // 1897
		 * @param {object} $object                                                                                          // 1898
		 * @param {boolean} scroll                                                                                          // 1899
		 * @param {boolean} animate                                                                                         // 1900
		 */                                                                                                                 // 1901
		setActiveOption: function($option, scroll, animate) {                                                               // 1902
			var height_menu, height_item, y;                                                                                   // 1903
			var scroll_top, scroll_bottom;                                                                                     // 1904
			var self = this;                                                                                                   // 1905
	                                                                                                                     // 1906
			if (self.$activeOption) self.$activeOption.removeClass('active');                                                  // 1907
			self.$activeOption = null;                                                                                         // 1908
	                                                                                                                     // 1909
			$option = $($option);                                                                                              // 1910
			if (!$option.length) return;                                                                                       // 1911
	                                                                                                                     // 1912
			self.$activeOption = $option.addClass('active');                                                                   // 1913
	                                                                                                                     // 1914
			if (scroll || !isset(scroll)) {                                                                                    // 1915
	                                                                                                                     // 1916
				height_menu   = self.$dropdown_content.height();                                                                  // 1917
				height_item   = self.$activeOption.outerHeight(true);                                                             // 1918
				scroll        = self.$dropdown_content.scrollTop() || 0;                                                          // 1919
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;                   // 1920
				scroll_top    = y;                                                                                                // 1921
				scroll_bottom = y - height_menu + height_item;                                                                    // 1922
	                                                                                                                     // 1923
				if (y + height_item > height_menu + scroll) {                                                                     // 1924
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);   // 1925
				} else if (y < scroll) {                                                                                          // 1926
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);      // 1927
				}                                                                                                                 // 1928
	                                                                                                                     // 1929
			}                                                                                                                  // 1930
		},                                                                                                                  // 1931
	                                                                                                                     // 1932
		/**                                                                                                                 // 1933
		 * Selects all items (CTRL + A).                                                                                    // 1934
		 */                                                                                                                 // 1935
		selectAll: function() {                                                                                             // 1936
			var self = this;                                                                                                   // 1937
			if (self.settings.mode === 'single') return;                                                                       // 1938
	                                                                                                                     // 1939
			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));         // 1940
			if (self.$activeItems.length) {                                                                                    // 1941
				self.hideInput();                                                                                                 // 1942
				self.close();                                                                                                     // 1943
			}                                                                                                                  // 1944
			self.focus();                                                                                                      // 1945
		},                                                                                                                  // 1946
	                                                                                                                     // 1947
		/**                                                                                                                 // 1948
		 * Hides the input element out of view, while                                                                       // 1949
		 * retaining its focus.                                                                                             // 1950
		 */                                                                                                                 // 1951
		hideInput: function() {                                                                                             // 1952
			var self = this;                                                                                                   // 1953
	                                                                                                                     // 1954
			self.setTextboxValue('');                                                                                          // 1955
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});                      // 1956
			self.isInputHidden = true;                                                                                         // 1957
		},                                                                                                                  // 1958
	                                                                                                                     // 1959
		/**                                                                                                                 // 1960
		 * Restores input visibility.                                                                                       // 1961
		 */                                                                                                                 // 1962
		showInput: function() {                                                                                             // 1963
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});                                              // 1964
			this.isInputHidden = false;                                                                                        // 1965
		},                                                                                                                  // 1966
	                                                                                                                     // 1967
		/**                                                                                                                 // 1968
		 * Gives the control focus.                                                                                         // 1969
		 */                                                                                                                 // 1970
		focus: function() {                                                                                                 // 1971
			var self = this;                                                                                                   // 1972
			if (self.isDisabled) return;                                                                                       // 1973
	                                                                                                                     // 1974
			self.ignoreFocus = true;                                                                                           // 1975
			self.$control_input[0].focus();                                                                                    // 1976
			window.setTimeout(function() {                                                                                     // 1977
				self.ignoreFocus = false;                                                                                         // 1978
				self.onFocus();                                                                                                   // 1979
			}, 0);                                                                                                             // 1980
		},                                                                                                                  // 1981
	                                                                                                                     // 1982
		/**                                                                                                                 // 1983
		 * Forces the control out of focus.                                                                                 // 1984
		 *                                                                                                                  // 1985
		 * @param {Element} dest                                                                                            // 1986
		 */                                                                                                                 // 1987
		blur: function(dest) {                                                                                              // 1988
			this.$control_input[0].blur();                                                                                     // 1989
			this.onBlur(null, dest);                                                                                           // 1990
		},                                                                                                                  // 1991
	                                                                                                                     // 1992
		/**                                                                                                                 // 1993
		 * Returns a function that scores an object                                                                         // 1994
		 * to show how good of a match it is to the                                                                         // 1995
		 * provided query.                                                                                                  // 1996
		 *                                                                                                                  // 1997
		 * @param {string} query                                                                                            // 1998
		 * @param {object} options                                                                                          // 1999
		 * @return {function}                                                                                               // 2000
		 */                                                                                                                 // 2001
		getScoreFunction: function(query) {                                                                                 // 2002
			return this.sifter.getScoreFunction(query, this.getSearchOptions());                                               // 2003
		},                                                                                                                  // 2004
	                                                                                                                     // 2005
		/**                                                                                                                 // 2006
		 * Returns search options for sifter (the system                                                                    // 2007
		 * for scoring and sorting results).                                                                                // 2008
		 *                                                                                                                  // 2009
		 * @see https://github.com/brianreavis/sifter.js                                                                    // 2010
		 * @return {object}                                                                                                 // 2011
		 */                                                                                                                 // 2012
		getSearchOptions: function() {                                                                                      // 2013
			var settings = this.settings;                                                                                      // 2014
			var sort = settings.sortField;                                                                                     // 2015
			if (typeof sort === 'string') {                                                                                    // 2016
				sort = [{field: sort}];                                                                                           // 2017
			}                                                                                                                  // 2018
	                                                                                                                     // 2019
			return {                                                                                                           // 2020
				fields      : settings.searchField,                                                                               // 2021
				conjunction : settings.searchConjunction,                                                                         // 2022
				sort        : sort                                                                                                // 2023
			};                                                                                                                 // 2024
		},                                                                                                                  // 2025
	                                                                                                                     // 2026
		/**                                                                                                                 // 2027
		 * Searches through available options and returns                                                                   // 2028
		 * a sorted array of matches.                                                                                       // 2029
		 *                                                                                                                  // 2030
		 * Returns an object containing:                                                                                    // 2031
		 *                                                                                                                  // 2032
		 *   - query {string}                                                                                               // 2033
		 *   - tokens {array}                                                                                               // 2034
		 *   - total {int}                                                                                                  // 2035
		 *   - items {array}                                                                                                // 2036
		 *                                                                                                                  // 2037
		 * @param {string} query                                                                                            // 2038
		 * @returns {object}                                                                                                // 2039
		 */                                                                                                                 // 2040
		search: function(query) {                                                                                           // 2041
			var i, value, score, result, calculateScore;                                                                       // 2042
			var self     = this;                                                                                               // 2043
			var settings = self.settings;                                                                                      // 2044
			var options  = this.getSearchOptions();                                                                            // 2045
	                                                                                                                     // 2046
			// validate user-provided result scoring function                                                                  // 2047
			if (settings.score) {                                                                                              // 2048
				calculateScore = self.settings.score.apply(this, [query]);                                                        // 2049
				if (typeof calculateScore !== 'function') {                                                                       // 2050
					throw new Error('Selectize "score" setting must be a function that returns a function');                         // 2051
				}                                                                                                                 // 2052
			}                                                                                                                  // 2053
	                                                                                                                     // 2054
			// perform search                                                                                                  // 2055
			if (query !== self.lastQuery) {                                                                                    // 2056
				self.lastQuery = query;                                                                                           // 2057
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));                                   // 2058
				self.currentResults = result;                                                                                     // 2059
			} else {                                                                                                           // 2060
				result = $.extend(true, {}, self.currentResults);                                                                 // 2061
			}                                                                                                                  // 2062
	                                                                                                                     // 2063
			// filter out selected items                                                                                       // 2064
			if (settings.hideSelected) {                                                                                       // 2065
				for (i = result.items.length - 1; i >= 0; i--) {                                                                  // 2066
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {                                                   // 2067
						result.items.splice(i, 1);                                                                                      // 2068
					}                                                                                                                // 2069
				}                                                                                                                 // 2070
			}                                                                                                                  // 2071
	                                                                                                                     // 2072
			return result;                                                                                                     // 2073
		},                                                                                                                  // 2074
	                                                                                                                     // 2075
		/**                                                                                                                 // 2076
		 * Refreshes the list of available options shown                                                                    // 2077
		 * in the autocomplete dropdown menu.                                                                               // 2078
		 *                                                                                                                  // 2079
		 * @param {boolean} triggerDropdown                                                                                 // 2080
		 */                                                                                                                 // 2081
		refreshOptions: function(triggerDropdown) {                                                                         // 2082
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;                                                                              // 2084
	                                                                                                                     // 2085
			if (typeof triggerDropdown === 'undefined') {                                                                      // 2086
				triggerDropdown = true;                                                                                           // 2087
			}                                                                                                                  // 2088
	                                                                                                                     // 2089
			var self              = this;                                                                                      // 2090
			var query             = $.trim(self.$control_input.val());                                                         // 2091
			var results           = self.search(query);                                                                        // 2092
			var $dropdown_content = self.$dropdown_content;                                                                    // 2093
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));                     // 2094
	                                                                                                                     // 2095
			// build markup                                                                                                    // 2096
			n = results.items.length;                                                                                          // 2097
			if (typeof self.settings.maxOptions === 'number') {                                                                // 2098
				n = Math.min(n, self.settings.maxOptions);                                                                        // 2099
			}                                                                                                                  // 2100
	                                                                                                                     // 2101
			// render and group available options individually                                                                 // 2102
			groups = {};                                                                                                       // 2103
			groups_order = [];                                                                                                 // 2104
	                                                                                                                     // 2105
			for (i = 0; i < n; i++) {                                                                                          // 2106
				option      = self.options[results.items[i].id];                                                                  // 2107
				option_html = self.render('option', option);                                                                      // 2108
				optgroup    = option[self.settings.optgroupField] || '';                                                          // 2109
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];                                                        // 2110
	                                                                                                                     // 2111
				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {                                                      // 2112
					optgroup = optgroups[j];                                                                                         // 2113
					if (!self.optgroups.hasOwnProperty(optgroup)) {                                                                  // 2114
						optgroup = '';                                                                                                  // 2115
					}                                                                                                                // 2116
					if (!groups.hasOwnProperty(optgroup)) {                                                                          // 2117
						groups[optgroup] = [];                                                                                          // 2118
						groups_order.push(optgroup);                                                                                    // 2119
					}                                                                                                                // 2120
					groups[optgroup].push(option_html);                                                                              // 2121
				}                                                                                                                 // 2122
			}                                                                                                                  // 2123
	                                                                                                                     // 2124
			// sort optgroups                                                                                                  // 2125
			if (this.settings.lockOptgroupOrder) {                                                                             // 2126
				groups_order.sort(function(a, b) {                                                                                // 2127
					var a_order = self.optgroups[a].$order || 0;                                                                     // 2128
					var b_order = self.optgroups[b].$order || 0;                                                                     // 2129
					return a_order - b_order;                                                                                        // 2130
				});                                                                                                               // 2131
			}                                                                                                                  // 2132
	                                                                                                                     // 2133
			// render optgroup headers & join groups                                                                           // 2134
			html = [];                                                                                                         // 2135
			for (i = 0, n = groups_order.length; i < n; i++) {                                                                 // 2136
				optgroup = groups_order[i];                                                                                       // 2137
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].length) {                                         // 2138
					// render the optgroup header and options within it,                                                             // 2139
					// then pass it to the wrapper template                                                                          // 2140
					html_children = self.render('optgroup_header', self.optgroups[optgroup]) || '';                                  // 2141
					html_children += groups[optgroup].join('');                                                                      // 2142
					html.push(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {                                       // 2143
						html: html_children                                                                                             // 2144
					})));                                                                                                            // 2145
				} else {                                                                                                          // 2146
					html.push(groups[optgroup].join(''));                                                                            // 2147
				}                                                                                                                 // 2148
			}                                                                                                                  // 2149
	                                                                                                                     // 2150
			$dropdown_content.html(html.join(''));                                                                             // 2151
	                                                                                                                     // 2152
			// highlight matching terms inline                                                                                 // 2153
			if (self.settings.highlight && results.query.length && results.tokens.length) {                                    // 2154
				for (i = 0, n = results.tokens.length; i < n; i++) {                                                              // 2155
					highlight($dropdown_content, results.tokens[i].regex);                                                           // 2156
				}                                                                                                                 // 2157
			}                                                                                                                  // 2158
	                                                                                                                     // 2159
			// add "selected" class to selected options                                                                        // 2160
			if (!self.settings.hideSelected) {                                                                                 // 2161
				for (i = 0, n = self.items.length; i < n; i++) {                                                                  // 2162
					self.getOption(self.items[i]).addClass('selected');                                                              // 2163
				}                                                                                                                 // 2164
			}                                                                                                                  // 2165
	                                                                                                                     // 2166
			// add create option                                                                                               // 2167
			has_create_option = self.canCreate(query);                                                                         // 2168
			if (has_create_option) {                                                                                           // 2169
				$dropdown_content.prepend(self.render('option_create', {input: query}));                                          // 2170
				$create = $($dropdown_content[0].childNodes[0]);                                                                  // 2171
			}                                                                                                                  // 2172
	                                                                                                                     // 2173
			// activate                                                                                                        // 2174
			self.hasOptions = results.items.length > 0 || has_create_option;                                                   // 2175
			if (self.hasOptions) {                                                                                             // 2176
				if (results.items.length > 0) {                                                                                   // 2177
					$active_before = active_before && self.getOption(active_before);                                                 // 2178
					if ($active_before && $active_before.length) {                                                                   // 2179
						$active = $active_before;                                                                                       // 2180
					} else if (self.settings.mode === 'single' && self.items.length) {                                               // 2181
						$active = self.getOption(self.items[0]);                                                                        // 2182
					}                                                                                                                // 2183
					if (!$active || !$active.length) {                                                                               // 2184
						if ($create && !self.settings.addPrecedence) {                                                                  // 2185
							$active = self.getAdjacentOption($create, 1);                                                                  // 2186
						} else {                                                                                                        // 2187
							$active = $dropdown_content.find('[data-selectable]:first');                                                   // 2188
						}                                                                                                               // 2189
					}                                                                                                                // 2190
				} else {                                                                                                          // 2191
					$active = $create;                                                                                               // 2192
				}                                                                                                                 // 2193
				self.setActiveOption($active);                                                                                    // 2194
				if (triggerDropdown && !self.isOpen) { self.open(); }                                                             // 2195
			} else {                                                                                                           // 2196
				self.setActiveOption(null);                                                                                       // 2197
				if (triggerDropdown && self.isOpen) { self.close(); }                                                             // 2198
			}                                                                                                                  // 2199
		},                                                                                                                  // 2200
	                                                                                                                     // 2201
		/**                                                                                                                 // 2202
		 * Adds an available option. If it already exists,                                                                  // 2203
		 * nothing will happen. Note: this does not refresh                                                                 // 2204
		 * the options list dropdown (use `refreshOptions`                                                                  // 2205
		 * for that).                                                                                                       // 2206
		 *                                                                                                                  // 2207
		 * Usage:                                                                                                           // 2208
		 *                                                                                                                  // 2209
		 *   this.addOption(data)                                                                                           // 2210
		 *                                                                                                                  // 2211
		 * @param {object|array} data                                                                                       // 2212
		 */                                                                                                                 // 2213
		addOption: function(data) {                                                                                         // 2214
			var i, n, value, self = this;                                                                                      // 2215
	                                                                                                                     // 2216
			if ($.isArray(data)) {                                                                                             // 2217
				for (i = 0, n = data.length; i < n; i++) {                                                                        // 2218
					self.addOption(data[i]);                                                                                         // 2219
				}                                                                                                                 // 2220
				return;                                                                                                           // 2221
			}                                                                                                                  // 2222
	                                                                                                                     // 2223
			if (value = self.registerOption(data)) {                                                                           // 2224
				self.userOptions[value] = true;                                                                                   // 2225
				self.lastQuery = null;                                                                                            // 2226
				self.trigger('option_add', value, data);                                                                          // 2227
			}                                                                                                                  // 2228
		},                                                                                                                  // 2229
	                                                                                                                     // 2230
		/**                                                                                                                 // 2231
		 * Registers an option to the pool of options.                                                                      // 2232
		 *                                                                                                                  // 2233
		 * @param {object} data                                                                                             // 2234
		 * @return {boolean|string}                                                                                         // 2235
		 */                                                                                                                 // 2236
		registerOption: function(data) {                                                                                    // 2237
			var key = hash_key(data[this.settings.valueField]);                                                                // 2238
			if (!key || this.options.hasOwnProperty(key)) return false;                                                        // 2239
			data.$order = data.$order || ++this.order;                                                                         // 2240
			this.options[key] = data;                                                                                          // 2241
			return key;                                                                                                        // 2242
		},                                                                                                                  // 2243
	                                                                                                                     // 2244
		/**                                                                                                                 // 2245
		 * Registers an option group to the pool of option groups.                                                          // 2246
		 *                                                                                                                  // 2247
		 * @param {object} data                                                                                             // 2248
		 * @return {boolean|string}                                                                                         // 2249
		 */                                                                                                                 // 2250
		registerOptionGroup: function(data) {                                                                               // 2251
			var key = hash_key(data[this.settings.optgroupValueField]);                                                        // 2252
			if (!key) return false;                                                                                            // 2253
	                                                                                                                     // 2254
			data.$order = data.$order || ++this.order;                                                                         // 2255
			this.optgroups[key] = data;                                                                                        // 2256
			return key;                                                                                                        // 2257
		},                                                                                                                  // 2258
	                                                                                                                     // 2259
		/**                                                                                                                 // 2260
		 * Registers a new optgroup for options                                                                             // 2261
		 * to be bucketed into.                                                                                             // 2262
		 *                                                                                                                  // 2263
		 * @param {string} id                                                                                               // 2264
		 * @param {object} data                                                                                             // 2265
		 */                                                                                                                 // 2266
		addOptionGroup: function(id, data) {                                                                                // 2267
			data[this.settings.optgroupValueField] = id;                                                                       // 2268
			if (id = this.registerOptionGroup(data)) {                                                                         // 2269
				this.trigger('optgroup_add', id, data);                                                                           // 2270
			}                                                                                                                  // 2271
		},                                                                                                                  // 2272
	                                                                                                                     // 2273
		/**                                                                                                                 // 2274
		 * Removes an existing option group.                                                                                // 2275
		 *                                                                                                                  // 2276
		 * @param {string} id                                                                                               // 2277
		 */                                                                                                                 // 2278
		removeOptionGroup: function(id) {                                                                                   // 2279
			if (this.optgroups.hasOwnProperty(id)) {                                                                           // 2280
				delete this.optgroups[id];                                                                                        // 2281
				this.renderCache = {};                                                                                            // 2282
				this.trigger('optgroup_remove', id);                                                                              // 2283
			}                                                                                                                  // 2284
		},                                                                                                                  // 2285
	                                                                                                                     // 2286
		/**                                                                                                                 // 2287
		 * Clears all existing option groups.                                                                               // 2288
		 */                                                                                                                 // 2289
		clearOptionGroups: function() {                                                                                     // 2290
			this.optgroups = {};                                                                                               // 2291
			this.renderCache = {};                                                                                             // 2292
			this.trigger('optgroup_clear');                                                                                    // 2293
		},                                                                                                                  // 2294
	                                                                                                                     // 2295
		/**                                                                                                                 // 2296
		 * Updates an option available for selection. If                                                                    // 2297
		 * it is visible in the selected items or options                                                                   // 2298
		 * dropdown, it will be re-rendered automatically.                                                                  // 2299
		 *                                                                                                                  // 2300
		 * @param {string} value                                                                                            // 2301
		 * @param {object} data                                                                                             // 2302
		 */                                                                                                                 // 2303
		updateOption: function(value, data) {                                                                               // 2304
			var self = this;                                                                                                   // 2305
			var $item, $item_new;                                                                                              // 2306
			var value_new, index_item, cache_items, cache_options, order_old;                                                  // 2307
	                                                                                                                     // 2308
			value     = hash_key(value);                                                                                       // 2309
			value_new = hash_key(data[self.settings.valueField]);                                                              // 2310
	                                                                                                                     // 2311
			// sanity checks                                                                                                   // 2312
			if (value === null) return;                                                                                        // 2313
			if (!self.options.hasOwnProperty(value)) return;                                                                   // 2314
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');                            // 2315
	                                                                                                                     // 2316
			order_old = self.options[value].$order;                                                                            // 2317
	                                                                                                                     // 2318
			// update references                                                                                               // 2319
			if (value_new !== value) {                                                                                         // 2320
				delete self.options[value];                                                                                       // 2321
				index_item = self.items.indexOf(value);                                                                           // 2322
				if (index_item !== -1) {                                                                                          // 2323
					self.items.splice(index_item, 1, value_new);                                                                     // 2324
				}                                                                                                                 // 2325
			}                                                                                                                  // 2326
			data.$order = data.$order || order_old;                                                                            // 2327
			self.options[value_new] = data;                                                                                    // 2328
	                                                                                                                     // 2329
			// invalidate render cache                                                                                         // 2330
			cache_items = self.renderCache['item'];                                                                            // 2331
			cache_options = self.renderCache['option'];                                                                        // 2332
	                                                                                                                     // 2333
			if (cache_items) {                                                                                                 // 2334
				delete cache_items[value];                                                                                        // 2335
				delete cache_items[value_new];                                                                                    // 2336
			}                                                                                                                  // 2337
			if (cache_options) {                                                                                               // 2338
				delete cache_options[value];                                                                                      // 2339
				delete cache_options[value_new];                                                                                  // 2340
			}                                                                                                                  // 2341
	                                                                                                                     // 2342
			// update the item if it's selected                                                                                // 2343
			if (self.items.indexOf(value_new) !== -1) {                                                                        // 2344
				$item = self.getItem(value);                                                                                      // 2345
				$item_new = $(self.render('item', data));                                                                         // 2346
				if ($item.hasClass('active')) $item_new.addClass('active');                                                       // 2347
				$item.replaceWith($item_new);                                                                                     // 2348
			}                                                                                                                  // 2349
	                                                                                                                     // 2350
			// invalidate last query because we might have updated the sortField                                               // 2351
			self.lastQuery = null;                                                                                             // 2352
	                                                                                                                     // 2353
			// update dropdown contents                                                                                        // 2354
			if (self.isOpen) {                                                                                                 // 2355
				self.refreshOptions(false);                                                                                       // 2356
			}                                                                                                                  // 2357
		},                                                                                                                  // 2358
	                                                                                                                     // 2359
		/**                                                                                                                 // 2360
		 * Removes a single option.                                                                                         // 2361
		 *                                                                                                                  // 2362
		 * @param {string} value                                                                                            // 2363
		 * @param {boolean} silent                                                                                          // 2364
		 */                                                                                                                 // 2365
		removeOption: function(value, silent) {                                                                             // 2366
			var self = this;                                                                                                   // 2367
			value = hash_key(value);                                                                                           // 2368
	                                                                                                                     // 2369
			var cache_items = self.renderCache['item'];                                                                        // 2370
			var cache_options = self.renderCache['option'];                                                                    // 2371
			if (cache_items) delete cache_items[value];                                                                        // 2372
			if (cache_options) delete cache_options[value];                                                                    // 2373
	                                                                                                                     // 2374
			delete self.userOptions[value];                                                                                    // 2375
			delete self.options[value];                                                                                        // 2376
			self.lastQuery = null;                                                                                             // 2377
			self.trigger('option_remove', value);                                                                              // 2378
			self.removeItem(value, silent);                                                                                    // 2379
		},                                                                                                                  // 2380
	                                                                                                                     // 2381
		/**                                                                                                                 // 2382
		 * Clears all options.                                                                                              // 2383
		 */                                                                                                                 // 2384
		clearOptions: function() {                                                                                          // 2385
			var self = this;                                                                                                   // 2386
	                                                                                                                     // 2387
			self.loadedSearches = {};                                                                                          // 2388
			self.userOptions = {};                                                                                             // 2389
			self.renderCache = {};                                                                                             // 2390
			self.options = self.sifter.items = {};                                                                             // 2391
			self.lastQuery = null;                                                                                             // 2392
			self.trigger('option_clear');                                                                                      // 2393
			self.clear();                                                                                                      // 2394
		},                                                                                                                  // 2395
	                                                                                                                     // 2396
		/**                                                                                                                 // 2397
		 * Returns the jQuery element of the option                                                                         // 2398
		 * matching the given value.                                                                                        // 2399
		 *                                                                                                                  // 2400
		 * @param {string} value                                                                                            // 2401
		 * @returns {object}                                                                                                // 2402
		 */                                                                                                                 // 2403
		getOption: function(value) {                                                                                        // 2404
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));                          // 2405
		},                                                                                                                  // 2406
	                                                                                                                     // 2407
		/**                                                                                                                 // 2408
		 * Returns the jQuery element of the next or                                                                        // 2409
		 * previous selectable option.                                                                                      // 2410
		 *                                                                                                                  // 2411
		 * @param {object} $option                                                                                          // 2412
		 * @param {int} direction  can be 1 for next or -1 for previous                                                     // 2413
		 * @return {object}                                                                                                 // 2414
		 */                                                                                                                 // 2415
		getAdjacentOption: function($option, direction) {                                                                   // 2416
			var $options = this.$dropdown.find('[data-selectable]');                                                           // 2417
			var index    = $options.index($option) + direction;                                                                // 2418
	                                                                                                                     // 2419
			return index >= 0 && index < $options.length ? $options.eq(index) : $();                                           // 2420
		},                                                                                                                  // 2421
	                                                                                                                     // 2422
		/**                                                                                                                 // 2423
		 * Finds the first element with a "data-value" attribute                                                            // 2424
		 * that matches the given value.                                                                                    // 2425
		 *                                                                                                                  // 2426
		 * @param {mixed} value                                                                                             // 2427
		 * @param {object} $els                                                                                             // 2428
		 * @return {object}                                                                                                 // 2429
		 */                                                                                                                 // 2430
		getElementWithValue: function(value, $els) {                                                                        // 2431
			value = hash_key(value);                                                                                           // 2432
	                                                                                                                     // 2433
			if (typeof value !== 'undefined' && value !== null) {                                                              // 2434
				for (var i = 0, n = $els.length; i < n; i++) {                                                                    // 2435
					if ($els[i].getAttribute('data-value') === value) {                                                              // 2436
						return $($els[i]);                                                                                              // 2437
					}                                                                                                                // 2438
				}                                                                                                                 // 2439
			}                                                                                                                  // 2440
	                                                                                                                     // 2441
			return $();                                                                                                        // 2442
		},                                                                                                                  // 2443
	                                                                                                                     // 2444
		/**                                                                                                                 // 2445
		 * Returns the jQuery element of the item                                                                           // 2446
		 * matching the given value.                                                                                        // 2447
		 *                                                                                                                  // 2448
		 * @param {string} value                                                                                            // 2449
		 * @returns {object}                                                                                                // 2450
		 */                                                                                                                 // 2451
		getItem: function(value) {                                                                                          // 2452
			return this.getElementWithValue(value, this.$control.children());                                                  // 2453
		},                                                                                                                  // 2454
	                                                                                                                     // 2455
		/**                                                                                                                 // 2456
		 * "Selects" multiple items at once. Adds them to the list                                                          // 2457
		 * at the current caret position.                                                                                   // 2458
		 *                                                                                                                  // 2459
		 * @param {string} value                                                                                            // 2460
		 * @param {boolean} silent                                                                                          // 2461
		 */                                                                                                                 // 2462
		addItems: function(values, silent) {                                                                                // 2463
			var items = $.isArray(values) ? values : [values];                                                                 // 2464
			for (var i = 0, n = items.length; i < n; i++) {                                                                    // 2465
				this.isPending = (i < n - 1);                                                                                     // 2466
				this.addItem(items[i], silent);                                                                                   // 2467
			}                                                                                                                  // 2468
		},                                                                                                                  // 2469
	                                                                                                                     // 2470
		/**                                                                                                                 // 2471
		 * "Selects" an item. Adds it to the list                                                                           // 2472
		 * at the current caret position.                                                                                   // 2473
		 *                                                                                                                  // 2474
		 * @param {string} value                                                                                            // 2475
		 * @param {boolean} silent                                                                                          // 2476
		 */                                                                                                                 // 2477
		addItem: function(value, silent) {                                                                                  // 2478
			var events = silent ? [] : ['change'];                                                                             // 2479
	                                                                                                                     // 2480
			debounce_events(this, events, function() {                                                                         // 2481
				var $item, $option, $options;                                                                                     // 2482
				var self = this;                                                                                                  // 2483
				var inputMode = self.settings.mode;                                                                               // 2484
				var i, active, value_next, wasFull;                                                                               // 2485
				value = hash_key(value);                                                                                          // 2486
	                                                                                                                     // 2487
				if (self.items.indexOf(value) !== -1) {                                                                           // 2488
					if (inputMode === 'single') self.close();                                                                        // 2489
					return;                                                                                                          // 2490
				}                                                                                                                 // 2491
	                                                                                                                     // 2492
				if (!self.options.hasOwnProperty(value)) return;                                                                  // 2493
				if (inputMode === 'single') self.clear(silent);                                                                   // 2494
				if (inputMode === 'multi' && self.isFull()) return;                                                               // 2495
	                                                                                                                     // 2496
				$item = $(self.render('item', self.options[value]));                                                              // 2497
				wasFull = self.isFull();                                                                                          // 2498
				self.items.splice(self.caretPos, 0, value);                                                                       // 2499
				self.insertAtCaret($item);                                                                                        // 2500
				if (!self.isPending || (!wasFull && self.isFull())) {                                                             // 2501
					self.refreshState();                                                                                             // 2502
				}                                                                                                                 // 2503
	                                                                                                                     // 2504
				if (self.isSetup) {                                                                                               // 2505
					$options = self.$dropdown_content.find('[data-selectable]');                                                     // 2506
	                                                                                                                     // 2507
					// update menu / remove the option (if this is not one item being added as part of series)                       // 2508
					if (!self.isPending) {                                                                                           // 2509
						$option = self.getOption(value);                                                                                // 2510
						value_next = self.getAdjacentOption($option, 1).attr('data-value');                                             // 2511
						self.refreshOptions(self.isFocused && inputMode !== 'single');                                                  // 2512
						if (value_next) {                                                                                               // 2513
							self.setActiveOption(self.getOption(value_next));                                                              // 2514
						}                                                                                                               // 2515
					}                                                                                                                // 2516
	                                                                                                                     // 2517
					// hide the menu if the maximum number of items have been selected or no options are left                        // 2518
					if (!$options.length || self.isFull()) {                                                                         // 2519
						self.close();                                                                                                   // 2520
					} else {                                                                                                         // 2521
						self.positionDropdown();                                                                                        // 2522
					}                                                                                                                // 2523
	                                                                                                                     // 2524
					self.updatePlaceholder();                                                                                        // 2525
					self.trigger('item_add', value, $item);                                                                          // 2526
					self.updateOriginalInput({silent: silent});                                                                      // 2527
				}                                                                                                                 // 2528
			});                                                                                                                // 2529
		},                                                                                                                  // 2530
	                                                                                                                     // 2531
		/**                                                                                                                 // 2532
		 * Removes the selected item matching                                                                               // 2533
		 * the provided value.                                                                                              // 2534
		 *                                                                                                                  // 2535
		 * @param {string} value                                                                                            // 2536
		 */                                                                                                                 // 2537
		removeItem: function(value, silent) {                                                                               // 2538
			var self = this;                                                                                                   // 2539
			var $item, i, idx;                                                                                                 // 2540
	                                                                                                                     // 2541
			$item = (typeof value === 'object') ? value : self.getItem(value);                                                 // 2542
			value = hash_key($item.attr('data-value'));                                                                        // 2543
			i = self.items.indexOf(value);                                                                                     // 2544
	                                                                                                                     // 2545
			if (i !== -1) {                                                                                                    // 2546
				$item.remove();                                                                                                   // 2547
				if ($item.hasClass('active')) {                                                                                   // 2548
					idx = self.$activeItems.indexOf($item[0]);                                                                       // 2549
					self.$activeItems.splice(idx, 1);                                                                                // 2550
				}                                                                                                                 // 2551
	                                                                                                                     // 2552
				self.items.splice(i, 1);                                                                                          // 2553
				self.lastQuery = null;                                                                                            // 2554
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {                                           // 2555
					self.removeOption(value, silent);                                                                                // 2556
				}                                                                                                                 // 2557
	                                                                                                                     // 2558
				if (i < self.caretPos) {                                                                                          // 2559
					self.setCaret(self.caretPos - 1);                                                                                // 2560
				}                                                                                                                 // 2561
	                                                                                                                     // 2562
				self.refreshState();                                                                                              // 2563
				self.updatePlaceholder();                                                                                         // 2564
				self.updateOriginalInput({silent: silent});                                                                       // 2565
				self.positionDropdown();                                                                                          // 2566
				self.trigger('item_remove', value, $item);                                                                        // 2567
			}                                                                                                                  // 2568
		},                                                                                                                  // 2569
	                                                                                                                     // 2570
		/**                                                                                                                 // 2571
		 * Invokes the `create` method provided in the                                                                      // 2572
		 * selectize options that should provide the data                                                                   // 2573
		 * for the new item, given the user input.                                                                          // 2574
		 *                                                                                                                  // 2575
		 * Once this completes, it will be added                                                                            // 2576
		 * to the item list.                                                                                                // 2577
		 *                                                                                                                  // 2578
		 * @param {string} value                                                                                            // 2579
		 * @param {boolean} [triggerDropdown]                                                                               // 2580
		 * @param {function} [callback]                                                                                     // 2581
		 * @return {boolean}                                                                                                // 2582
		 */                                                                                                                 // 2583
		createItem: function(input, triggerDropdown) {                                                                      // 2584
			var self  = this;                                                                                                  // 2585
			var caret = self.caretPos;                                                                                         // 2586
			input = input || $.trim(self.$control_input.val() || '');                                                          // 2587
	                                                                                                                     // 2588
			var callback = arguments[arguments.length - 1];                                                                    // 2589
			if (typeof callback !== 'function') callback = function() {};                                                      // 2590
	                                                                                                                     // 2591
			if (typeof triggerDropdown !== 'boolean') {                                                                        // 2592
				triggerDropdown = true;                                                                                           // 2593
			}                                                                                                                  // 2594
	                                                                                                                     // 2595
			if (!self.canCreate(input)) {                                                                                      // 2596
				callback();                                                                                                       // 2597
				return false;                                                                                                     // 2598
			}                                                                                                                  // 2599
	                                                                                                                     // 2600
			self.lock();                                                                                                       // 2601
	                                                                                                                     // 2602
			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {                // 2603
				var data = {};                                                                                                    // 2604
				data[self.settings.labelField] = input;                                                                           // 2605
				data[self.settings.valueField] = input;                                                                           // 2606
				return data;                                                                                                      // 2607
			};                                                                                                                 // 2608
	                                                                                                                     // 2609
			var create = once(function(data) {                                                                                 // 2610
				self.unlock();                                                                                                    // 2611
	                                                                                                                     // 2612
				if (!data || typeof data !== 'object') return callback();                                                         // 2613
				var value = hash_key(data[self.settings.valueField]);                                                             // 2614
				if (typeof value !== 'string') return callback();                                                                 // 2615
	                                                                                                                     // 2616
				self.setTextboxValue('');                                                                                         // 2617
				self.addOption(data);                                                                                             // 2618
				self.setCaret(caret);                                                                                             // 2619
				self.addItem(value);                                                                                              // 2620
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');                                          // 2621
				callback(data);                                                                                                   // 2622
			});                                                                                                                // 2623
	                                                                                                                     // 2624
			var output = setup.apply(this, [input, create]);                                                                   // 2625
			if (typeof output !== 'undefined') {                                                                               // 2626
				create(output);                                                                                                   // 2627
			}                                                                                                                  // 2628
	                                                                                                                     // 2629
			return true;                                                                                                       // 2630
		},                                                                                                                  // 2631
	                                                                                                                     // 2632
		/**                                                                                                                 // 2633
		 * Re-renders the selected item lists.                                                                              // 2634
		 */                                                                                                                 // 2635
		refreshItems: function() {                                                                                          // 2636
			this.lastQuery = null;                                                                                             // 2637
	                                                                                                                     // 2638
			if (this.isSetup) {                                                                                                // 2639
				this.addItem(this.items);                                                                                         // 2640
			}                                                                                                                  // 2641
	                                                                                                                     // 2642
			this.refreshState();                                                                                               // 2643
			this.updateOriginalInput();                                                                                        // 2644
		},                                                                                                                  // 2645
	                                                                                                                     // 2646
		/**                                                                                                                 // 2647
		 * Updates all state-dependent attributes                                                                           // 2648
		 * and CSS classes.                                                                                                 // 2649
		 */                                                                                                                 // 2650
		refreshState: function() {                                                                                          // 2651
			var invalid, self = this;                                                                                          // 2652
			if (self.isRequired) {                                                                                             // 2653
				if (self.items.length) self.isInvalid = false;                                                                    // 2654
				self.$control_input.prop('required', invalid);                                                                    // 2655
			}                                                                                                                  // 2656
			self.refreshClasses();                                                                                             // 2657
		},                                                                                                                  // 2658
	                                                                                                                     // 2659
		/**                                                                                                                 // 2660
		 * Updates all state-dependent CSS classes.                                                                         // 2661
		 */                                                                                                                 // 2662
		refreshClasses: function() {                                                                                        // 2663
			var self     = this;                                                                                               // 2664
			var isFull   = self.isFull();                                                                                      // 2665
			var isLocked = self.isLocked;                                                                                      // 2666
	                                                                                                                     // 2667
			self.$wrapper                                                                                                      // 2668
				.toggleClass('rtl', self.rtl);                                                                                    // 2669
	                                                                                                                     // 2670
			self.$control                                                                                                      // 2671
				.toggleClass('focus', self.isFocused)                                                                             // 2672
				.toggleClass('disabled', self.isDisabled)                                                                         // 2673
				.toggleClass('required', self.isRequired)                                                                         // 2674
				.toggleClass('invalid', self.isInvalid)                                                                           // 2675
				.toggleClass('locked', isLocked)                                                                                  // 2676
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)                                                     // 2677
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)                                               // 2678
				.toggleClass('dropdown-active', self.isOpen)                                                                      // 2679
				.toggleClass('has-options', !$.isEmptyObject(self.options))                                                       // 2680
				.toggleClass('has-items', self.items.length > 0);                                                                 // 2681
	                                                                                                                     // 2682
			self.$control_input.data('grow', !isFull && !isLocked);                                                            // 2683
		},                                                                                                                  // 2684
	                                                                                                                     // 2685
		/**                                                                                                                 // 2686
		 * Determines whether or not more items can be added                                                                // 2687
		 * to the control without exceeding the user-defined maximum.                                                       // 2688
		 *                                                                                                                  // 2689
		 * @returns {boolean}                                                                                               // 2690
		 */                                                                                                                 // 2691
		isFull: function() {                                                                                                // 2692
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;                             // 2693
		},                                                                                                                  // 2694
	                                                                                                                     // 2695
		/**                                                                                                                 // 2696
		 * Refreshes the original <select> or <input>                                                                       // 2697
		 * element to reflect the current state.                                                                            // 2698
		 */                                                                                                                 // 2699
		updateOriginalInput: function(opts) {                                                                               // 2700
			var i, n, options, label, self = this;                                                                             // 2701
			opts = opts || {};                                                                                                 // 2702
	                                                                                                                     // 2703
			if (self.tagType === TAG_SELECT) {                                                                                 // 2704
				options = [];                                                                                                     // 2705
				for (i = 0, n = self.items.length; i < n; i++) {                                                                  // 2706
					label = self.options[self.items[i]][self.settings.labelField] || '';                                             // 2707
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
				}                                                                                                                 // 2709
				if (!options.length && !this.$input.attr('multiple')) {                                                           // 2710
					options.push('<option value="" selected="selected"></option>');                                                  // 2711
				}                                                                                                                 // 2712
				self.$input.html(options.join(''));                                                                               // 2713
			} else {                                                                                                           // 2714
				self.$input.val(self.getValue());                                                                                 // 2715
				self.$input.attr('value',self.$input.val());                                                                      // 2716
			}                                                                                                                  // 2717
	                                                                                                                     // 2718
			if (self.isSetup) {                                                                                                // 2719
				if (!opts.silent) {                                                                                               // 2720
					self.trigger('change', self.$input.val());                                                                       // 2721
				}                                                                                                                 // 2722
			}                                                                                                                  // 2723
		},                                                                                                                  // 2724
	                                                                                                                     // 2725
		/**                                                                                                                 // 2726
		 * Shows/hide the input placeholder depending                                                                       // 2727
		 * on if there items in the list already.                                                                           // 2728
		 */                                                                                                                 // 2729
		updatePlaceholder: function() {                                                                                     // 2730
			if (!this.settings.placeholder) return;                                                                            // 2731
			var $input = this.$control_input;                                                                                  // 2732
	                                                                                                                     // 2733
			if (this.items.length) {                                                                                           // 2734
				$input.removeAttr('placeholder');                                                                                 // 2735
			} else {                                                                                                           // 2736
				$input.attr('placeholder', this.settings.placeholder);                                                            // 2737
			}                                                                                                                  // 2738
			$input.triggerHandler('update', {force: true});                                                                    // 2739
		},                                                                                                                  // 2740
	                                                                                                                     // 2741
		/**                                                                                                                 // 2742
		 * Shows the autocomplete dropdown containing                                                                       // 2743
		 * the available options.                                                                                           // 2744
		 */                                                                                                                 // 2745
		open: function() {                                                                                                  // 2746
			var self = this;                                                                                                   // 2747
	                                                                                                                     // 2748
			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;                     // 2749
			self.focus();                                                                                                      // 2750
			self.isOpen = true;                                                                                                // 2751
			self.refreshState();                                                                                               // 2752
			self.$dropdown.css({visibility: 'hidden', display: 'block'});                                                      // 2753
			self.positionDropdown();                                                                                           // 2754
			self.$dropdown.css({visibility: 'visible'});                                                                       // 2755
			self.trigger('dropdown_open', self.$dropdown);                                                                     // 2756
		},                                                                                                                  // 2757
	                                                                                                                     // 2758
		/**                                                                                                                 // 2759
		 * Closes the autocomplete dropdown menu.                                                                           // 2760
		 */                                                                                                                 // 2761
		close: function() {                                                                                                 // 2762
			var self = this;                                                                                                   // 2763
			var trigger = self.isOpen;                                                                                         // 2764
	                                                                                                                     // 2765
			if (self.settings.mode === 'single' && self.items.length) {                                                        // 2766
				self.hideInput();                                                                                                 // 2767
			}                                                                                                                  // 2768
	                                                                                                                     // 2769
			self.isOpen = false;                                                                                               // 2770
			self.$dropdown.hide();                                                                                             // 2771
			self.setActiveOption(null);                                                                                        // 2772
			self.refreshState();                                                                                               // 2773
	                                                                                                                     // 2774
			if (trigger) self.trigger('dropdown_close', self.$dropdown);                                                       // 2775
		},                                                                                                                  // 2776
	                                                                                                                     // 2777
		/**                                                                                                                 // 2778
		 * Calculates and applies the appropriate                                                                           // 2779
		 * position of the dropdown.                                                                                        // 2780
		 */                                                                                                                 // 2781
		positionDropdown: function() {                                                                                      // 2782
			var $control = this.$control;                                                                                      // 2783
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();                    // 2784
			offset.top += $control.outerHeight(true);                                                                          // 2785
	                                                                                                                     // 2786
			this.$dropdown.css({                                                                                               // 2787
				width : $control.outerWidth(),                                                                                    // 2788
				top   : offset.top,                                                                                               // 2789
				left  : offset.left                                                                                               // 2790
			});                                                                                                                // 2791
		},                                                                                                                  // 2792
	                                                                                                                     // 2793
		/**                                                                                                                 // 2794
		 * Resets / clears all selected items                                                                               // 2795
		 * from the control.                                                                                                // 2796
		 *                                                                                                                  // 2797
		 * @param {boolean} silent                                                                                          // 2798
		 */                                                                                                                 // 2799
		clear: function(silent) {                                                                                           // 2800
			var self = this;                                                                                                   // 2801
	                                                                                                                     // 2802
			if (!self.items.length) return;                                                                                    // 2803
			self.$control.children(':not(input)').remove();                                                                    // 2804
			self.items = [];                                                                                                   // 2805
			self.lastQuery = null;                                                                                             // 2806
			self.setCaret(0);                                                                                                  // 2807
			self.setActiveItem(null);                                                                                          // 2808
			self.updatePlaceholder();                                                                                          // 2809
			self.updateOriginalInput({silent: silent});                                                                        // 2810
			self.refreshState();                                                                                               // 2811
			self.showInput();                                                                                                  // 2812
			self.trigger('clear');                                                                                             // 2813
		},                                                                                                                  // 2814
	                                                                                                                     // 2815
		/**                                                                                                                 // 2816
		 * A helper method for inserting an element                                                                         // 2817
		 * at the current caret position.                                                                                   // 2818
		 *                                                                                                                  // 2819
		 * @param {object} $el                                                                                              // 2820
		 */                                                                                                                 // 2821
		insertAtCaret: function($el) {                                                                                      // 2822
			var caret = Math.min(this.caretPos, this.items.length);                                                            // 2823
			if (caret === 0) {                                                                                                 // 2824
				this.$control.prepend($el);                                                                                       // 2825
			} else {                                                                                                           // 2826
				$(this.$control[0].childNodes[caret]).before($el);                                                                // 2827
			}                                                                                                                  // 2828
			this.setCaret(caret + 1);                                                                                          // 2829
		},                                                                                                                  // 2830
	                                                                                                                     // 2831
		/**                                                                                                                 // 2832
		 * Removes the current selected item(s).                                                                            // 2833
		 *                                                                                                                  // 2834
		 * @param {object} e (optional)                                                                                     // 2835
		 * @returns {boolean}                                                                                               // 2836
		 */                                                                                                                 // 2837
		deleteSelection: function(e) {                                                                                      // 2838
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;                               // 2839
			var self = this;                                                                                                   // 2840
	                                                                                                                     // 2841
			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;                                                           // 2842
			selection = getSelection(self.$control_input[0]);                                                                  // 2843
	                                                                                                                     // 2844
			if (self.$activeOption && !self.settings.hideSelected) {                                                           // 2845
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');                                // 2846
			}                                                                                                                  // 2847
	                                                                                                                     // 2848
			// determine items that will be removed                                                                            // 2849
			values = [];                                                                                                       // 2850
	                                                                                                                     // 2851
			if (self.$activeItems.length) {                                                                                    // 2852
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));                                  // 2853
				caret = self.$control.children(':not(input)').index($tail);                                                       // 2854
				if (direction > 0) { caret++; }                                                                                   // 2855
	                                                                                                                     // 2856
				for (i = 0, n = self.$activeItems.length; i < n; i++) {                                                           // 2857
					values.push($(self.$activeItems[i]).attr('data-value'));                                                         // 2858
				}                                                                                                                 // 2859
				if (e) {                                                                                                          // 2860
					e.preventDefault();                                                                                              // 2861
					e.stopPropagation();                                                                                             // 2862
				}                                                                                                                 // 2863
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {                             // 2864
				if (direction < 0 && selection.start === 0 && selection.length === 0) {                                           // 2865
					values.push(self.items[self.caretPos - 1]);                                                                      // 2866
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {                               // 2867
					values.push(self.items[self.caretPos]);                                                                          // 2868
				}                                                                                                                 // 2869
			}                                                                                                                  // 2870
	                                                                                                                     // 2871
			// allow the callback to abort                                                                                     // 2872
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;                                                                                                     // 2874
			}                                                                                                                  // 2875
	                                                                                                                     // 2876
			// perform removal                                                                                                 // 2877
			if (typeof caret !== 'undefined') {                                                                                // 2878
				self.setCaret(caret);                                                                                             // 2879
			}                                                                                                                  // 2880
			while (values.length) {                                                                                            // 2881
				self.removeItem(values.pop());                                                                                    // 2882
			}                                                                                                                  // 2883
	                                                                                                                     // 2884
			self.showInput();                                                                                                  // 2885
			self.positionDropdown();                                                                                           // 2886
			self.refreshOptions(true);                                                                                         // 2887
	                                                                                                                     // 2888
			// select previous option                                                                                          // 2889
			if (option_select) {                                                                                               // 2890
				$option_select = self.getOption(option_select);                                                                   // 2891
				if ($option_select.length) {                                                                                      // 2892
					self.setActiveOption($option_select);                                                                            // 2893
				}                                                                                                                 // 2894
			}                                                                                                                  // 2895
	                                                                                                                     // 2896
			return true;                                                                                                       // 2897
		},                                                                                                                  // 2898
	                                                                                                                     // 2899
		/**                                                                                                                 // 2900
		 * Selects the previous / next item (depending                                                                      // 2901
		 * on the `direction` argument).                                                                                    // 2902
		 *                                                                                                                  // 2903
		 * > 0 - right                                                                                                      // 2904
		 * < 0 - left                                                                                                       // 2905
		 *                                                                                                                  // 2906
		 * @param {int} direction                                                                                           // 2907
		 * @param {object} e (optional)                                                                                     // 2908
		 */                                                                                                                 // 2909
		advanceSelection: function(direction, e) {                                                                          // 2910
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;                                                        // 2911
			var self = this;                                                                                                   // 2912
	                                                                                                                     // 2913
			if (direction === 0) return;                                                                                       // 2914
			if (self.rtl) direction *= -1;                                                                                     // 2915
	                                                                                                                     // 2916
			tail = direction > 0 ? 'last' : 'first';                                                                           // 2917
			selection = getSelection(self.$control_input[0]);                                                                  // 2918
	                                                                                                                     // 2919
			if (self.isFocused && !self.isInputHidden) {                                                                       // 2920
				valueLength = self.$control_input.val().length;                                                                   // 2921
				cursorAtEdge = direction < 0                                                                                      // 2922
					? selection.start === 0 && selection.length === 0                                                                // 2923
					: selection.start === valueLength;                                                                               // 2924
	                                                                                                                     // 2925
				if (cursorAtEdge && !valueLength) {                                                                               // 2926
					self.advanceCaret(direction, e);                                                                                 // 2927
				}                                                                                                                 // 2928
			} else {                                                                                                           // 2929
				$tail = self.$control.children('.active:' + tail);                                                                // 2930
				if ($tail.length) {                                                                                               // 2931
					idx = self.$control.children(':not(input)').index($tail);                                                        // 2932
					self.setActiveItem(null);                                                                                        // 2933
					self.setCaret(direction > 0 ? idx + 1 : idx);                                                                    // 2934
				}                                                                                                                 // 2935
			}                                                                                                                  // 2936
		},                                                                                                                  // 2937
	                                                                                                                     // 2938
		/**                                                                                                                 // 2939
		 * Moves the caret left / right.                                                                                    // 2940
		 *                                                                                                                  // 2941
		 * @param {int} direction                                                                                           // 2942
		 * @param {object} e (optional)                                                                                     // 2943
		 */                                                                                                                 // 2944
		advanceCaret: function(direction, e) {                                                                              // 2945
			var self = this, fn, $adj;                                                                                         // 2946
	                                                                                                                     // 2947
			if (direction === 0) return;                                                                                       // 2948
	                                                                                                                     // 2949
			fn = direction > 0 ? 'next' : 'prev';                                                                              // 2950
			if (self.isShiftDown) {                                                                                            // 2951
				$adj = self.$control_input[fn]();                                                                                 // 2952
				if ($adj.length) {                                                                                                // 2953
					self.hideInput();                                                                                                // 2954
					self.setActiveItem($adj);                                                                                        // 2955
					e && e.preventDefault();                                                                                         // 2956
				}                                                                                                                 // 2957
			} else {                                                                                                           // 2958
				self.setCaret(self.caretPos + direction);                                                                         // 2959
			}                                                                                                                  // 2960
		},                                                                                                                  // 2961
	                                                                                                                     // 2962
		/**                                                                                                                 // 2963
		 * Moves the caret to the specified index.                                                                          // 2964
		 *                                                                                                                  // 2965
		 * @param {int} i                                                                                                   // 2966
		 */                                                                                                                 // 2967
		setCaret: function(i) {                                                                                             // 2968
			var self = this;                                                                                                   // 2969
	                                                                                                                     // 2970
			if (self.settings.mode === 'single') {                                                                             // 2971
				i = self.items.length;                                                                                            // 2972
			} else {                                                                                                           // 2973
				i = Math.max(0, Math.min(self.items.length, i));                                                                  // 2974
			}                                                                                                                  // 2975
	                                                                                                                     // 2976
			if(!self.isPending) {                                                                                              // 2977
				// the input must be moved by leaving it in place and moving the                                                  // 2978
				// siblings, due to the fact that focus cannot be restored once lost                                              // 2979
				// on mobile webkit devices                                                                                       // 2980
				var j, n, fn, $children, $child;                                                                                  // 2981
				$children = self.$control.children(':not(input)');                                                                // 2982
				for (j = 0, n = $children.length; j < n; j++) {                                                                   // 2983
					$child = $($children[j]).detach();                                                                               // 2984
					if (j <  i) {                                                                                                    // 2985
						self.$control_input.before($child);                                                                             // 2986
					} else {                                                                                                         // 2987
						self.$control.append($child);                                                                                   // 2988
					}                                                                                                                // 2989
				}                                                                                                                 // 2990
			}                                                                                                                  // 2991
	                                                                                                                     // 2992
			self.caretPos = i;                                                                                                 // 2993
		},                                                                                                                  // 2994
	                                                                                                                     // 2995
		/**                                                                                                                 // 2996
		 * Disables user input on the control. Used while                                                                   // 2997
		 * items are being asynchronously created.                                                                          // 2998
		 */                                                                                                                 // 2999
		lock: function() {                                                                                                  // 3000
			this.close();                                                                                                      // 3001
			this.isLocked = true;                                                                                              // 3002
			this.refreshState();                                                                                               // 3003
		},                                                                                                                  // 3004
	                                                                                                                     // 3005
		/**                                                                                                                 // 3006
		 * Re-enables user input on the control.                                                                            // 3007
		 */                                                                                                                 // 3008
		unlock: function() {                                                                                                // 3009
			this.isLocked = false;                                                                                             // 3010
			this.refreshState();                                                                                               // 3011
		},                                                                                                                  // 3012
	                                                                                                                     // 3013
		/**                                                                                                                 // 3014
		 * Disables user input on the control completely.                                                                   // 3015
		 * While disabled, it cannot receive focus.                                                                         // 3016
		 */                                                                                                                 // 3017
		disable: function() {                                                                                               // 3018
			var self = this;                                                                                                   // 3019
			self.$input.prop('disabled', true);                                                                                // 3020
			self.$control_input.prop('disabled', true).prop('tabindex', -1);                                                   // 3021
			self.isDisabled = true;                                                                                            // 3022
			self.lock();                                                                                                       // 3023
		},                                                                                                                  // 3024
	                                                                                                                     // 3025
		/**                                                                                                                 // 3026
		 * Enables the control so that it can respond                                                                       // 3027
		 * to focus and user input.                                                                                         // 3028
		 */                                                                                                                 // 3029
		enable: function() {                                                                                                // 3030
			var self = this;                                                                                                   // 3031
			self.$input.prop('disabled', false);                                                                               // 3032
			self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);                                       // 3033
			self.isDisabled = false;                                                                                           // 3034
			self.unlock();                                                                                                     // 3035
		},                                                                                                                  // 3036
	                                                                                                                     // 3037
		/**                                                                                                                 // 3038
		 * Completely destroys the control and                                                                              // 3039
		 * unbinds all event listeners so that it can                                                                       // 3040
		 * be garbage collected.                                                                                            // 3041
		 */                                                                                                                 // 3042
		destroy: function() {                                                                                               // 3043
			var self = this;                                                                                                   // 3044
			var eventNS = self.eventNS;                                                                                        // 3045
			var revertSettings = self.revertSettings;                                                                          // 3046
	                                                                                                                     // 3047
			self.trigger('destroy');                                                                                           // 3048
			self.off();                                                                                                        // 3049
			self.$wrapper.remove();                                                                                            // 3050
			self.$dropdown.remove();                                                                                           // 3051
	                                                                                                                     // 3052
			self.$input                                                                                                        // 3053
				.html('')                                                                                                         // 3054
				.append(revertSettings.$children)                                                                                 // 3055
				.removeAttr('tabindex')                                                                                           // 3056
				.removeClass('selectized')                                                                                        // 3057
				.attr({tabindex: revertSettings.tabindex})                                                                        // 3058
				.show();                                                                                                          // 3059
	                                                                                                                     // 3060
			self.$control_input.removeData('grow');                                                                            // 3061
			self.$input.removeData('selectize');                                                                               // 3062
	                                                                                                                     // 3063
			$(window).off(eventNS);                                                                                            // 3064
			$(document).off(eventNS);                                                                                          // 3065
			$(document.body).off(eventNS);                                                                                     // 3066
	                                                                                                                     // 3067
			delete self.$input[0].selectize;                                                                                   // 3068
		},                                                                                                                  // 3069
	                                                                                                                     // 3070
		/**                                                                                                                 // 3071
		 * A helper method for rendering "item" and                                                                         // 3072
		 * "option" templates, given the data.                                                                              // 3073
		 *                                                                                                                  // 3074
		 * @param {string} templateName                                                                                     // 3075
		 * @param {object} data                                                                                             // 3076
		 * @returns {string}                                                                                                // 3077
		 */                                                                                                                 // 3078
		render: function(templateName, data) {                                                                              // 3079
			var value, id, label;                                                                                              // 3080
			var html = '';                                                                                                     // 3081
			var cache = false;                                                                                                 // 3082
			var self = this;                                                                                                   // 3083
			var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;                                        // 3084
	                                                                                                                     // 3085
			if (templateName === 'option' || templateName === 'item') {                                                        // 3086
				value = hash_key(data[self.settings.valueField]);                                                                 // 3087
				cache = !!value;                                                                                                  // 3088
			}                                                                                                                  // 3089
	                                                                                                                     // 3090
			// pull markup from cache if it exists                                                                             // 3091
			if (cache) {                                                                                                       // 3092
				if (!isset(self.renderCache[templateName])) {                                                                     // 3093
					self.renderCache[templateName] = {};                                                                             // 3094
				}                                                                                                                 // 3095
				if (self.renderCache[templateName].hasOwnProperty(value)) {                                                       // 3096
					return self.renderCache[templateName][value];                                                                    // 3097
				}                                                                                                                 // 3098
			}                                                                                                                  // 3099
	                                                                                                                     // 3100
			// render markup                                                                                                   // 3101
			html = self.settings.render[templateName].apply(this, [data, escape_html]);                                        // 3102
	                                                                                                                     // 3103
			// add mandatory attributes                                                                                        // 3104
			if (templateName === 'option' || templateName === 'option_create') {                                               // 3105
				html = html.replace(regex_tag, '<$1 data-selectable');                                                            // 3106
			}                                                                                                                  // 3107
			if (templateName === 'optgroup') {                                                                                 // 3108
				id = data[self.settings.optgroupValueField] || '';                                                                // 3109
				html = html.replace(regex_tag, '<$1 data-group="' + escape_replace(escape_html(id)) + '"');                       // 3110
			}                                                                                                                  // 3111
			if (templateName === 'option' || templateName === 'item') {                                                        // 3112
				html = html.replace(regex_tag, '<$1 data-value="' + escape_replace(escape_html(value || '')) + '"');              // 3113
			}                                                                                                                  // 3114
	                                                                                                                     // 3115
			// update cache                                                                                                    // 3116
			if (cache) {                                                                                                       // 3117
				self.renderCache[templateName][value] = html;                                                                     // 3118
			}                                                                                                                  // 3119
	                                                                                                                     // 3120
			return html;                                                                                                       // 3121
		},                                                                                                                  // 3122
	                                                                                                                     // 3123
		/**                                                                                                                 // 3124
		 * Clears the render cache for a template. If                                                                       // 3125
		 * no template is given, clears all render                                                                          // 3126
		 * caches.                                                                                                          // 3127
		 *                                                                                                                  // 3128
		 * @param {string} templateName                                                                                     // 3129
		 */                                                                                                                 // 3130
		clearCache: function(templateName) {                                                                                // 3131
			var self = this;                                                                                                   // 3132
			if (typeof templateName === 'undefined') {                                                                         // 3133
				self.renderCache = {};                                                                                            // 3134
			} else {                                                                                                           // 3135
				delete self.renderCache[templateName];                                                                            // 3136
			}                                                                                                                  // 3137
		},                                                                                                                  // 3138
	                                                                                                                     // 3139
		/**                                                                                                                 // 3140
		 * Determines whether or not to display the                                                                         // 3141
		 * create item prompt, given a user input.                                                                          // 3142
		 *                                                                                                                  // 3143
		 * @param {string} input                                                                                            // 3144
		 * @return {boolean}                                                                                                // 3145
		 */                                                                                                                 // 3146
		canCreate: function(input) {                                                                                        // 3147
			var self = this;                                                                                                   // 3148
			if (!self.settings.create) return false;                                                                           // 3149
			var filter = self.settings.createFilter;                                                                           // 3150
			return input.length                                                                                                // 3151
				&& (typeof filter !== 'function' || filter.apply(self, [input]))                                                  // 3152
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))                                                 // 3153
				&& (!(filter instanceof RegExp) || filter.test(input));                                                           // 3154
		}                                                                                                                   // 3155
	                                                                                                                     // 3156
	});                                                                                                                  // 3157
	                                                                                                                     // 3158
	                                                                                                                     // 3159
	Selectize.count = 0;                                                                                                 // 3160
	Selectize.defaults = {                                                                                               // 3161
		options: [],                                                                                                        // 3162
		optgroups: [],                                                                                                      // 3163
	                                                                                                                     // 3164
		plugins: [],                                                                                                        // 3165
		delimiter: ',',                                                                                                     // 3166
		splitOn: null, // regexp or string for splitting up values from a paste command                                     // 3167
		persist: true,                                                                                                      // 3168
		diacritics: true,                                                                                                   // 3169
		create: false,                                                                                                      // 3170
		createOnBlur: false,                                                                                                // 3171
		createFilter: null,                                                                                                 // 3172
		highlight: true,                                                                                                    // 3173
		openOnFocus: true,                                                                                                  // 3174
		maxOptions: 1000,                                                                                                   // 3175
		maxItems: null,                                                                                                     // 3176
		hideSelected: null,                                                                                                 // 3177
		addPrecedence: false,                                                                                               // 3178
		selectOnTab: false,                                                                                                 // 3179
		preload: false,                                                                                                     // 3180
		allowEmptyOption: false,                                                                                            // 3181
		closeAfterSelect: false,                                                                                            // 3182
	                                                                                                                     // 3183
		scrollDuration: 60,                                                                                                 // 3184
		loadThrottle: 300,                                                                                                  // 3185
		loadingClass: 'loading',                                                                                            // 3186
	                                                                                                                     // 3187
		dataAttr: 'data-data',                                                                                              // 3188
		optgroupField: 'optgroup',                                                                                          // 3189
		valueField: 'value',                                                                                                // 3190
		labelField: 'text',                                                                                                 // 3191
		optgroupLabelField: 'label',                                                                                        // 3192
		optgroupValueField: 'value',                                                                                        // 3193
		lockOptgroupOrder: false,                                                                                           // 3194
	                                                                                                                     // 3195
		sortField: '$order',                                                                                                // 3196
		searchField: ['text'],                                                                                              // 3197
		searchConjunction: 'and',                                                                                           // 3198
	                                                                                                                     // 3199
		mode: null,                                                                                                         // 3200
		wrapperClass: 'selectize-control',                                                                                  // 3201
		inputClass: 'selectize-input',                                                                                      // 3202
		dropdownClass: 'selectize-dropdown',                                                                                // 3203
		dropdownContentClass: 'selectize-dropdown-content',                                                                 // 3204
	                                                                                                                     // 3205
		dropdownParent: null,                                                                                               // 3206
	                                                                                                                     // 3207
		copyClassesToDropdown: true,                                                                                        // 3208
	                                                                                                                     // 3209
		/*                                                                                                                  // 3210
		load                 : null, // function(query, callback) { ... }                                                   // 3211
		score                : null, // function(search) { ... }                                                            // 3212
		onInitialize         : null, // function() { ... }                                                                  // 3213
		onChange             : null, // function(value) { ... }                                                             // 3214
		onItemAdd            : null, // function(value, $item) { ... }                                                      // 3215
		onItemRemove         : null, // function(value) { ... }                                                             // 3216
		onClear              : null, // function() { ... }                                                                  // 3217
		onOptionAdd          : null, // function(value, data) { ... }                                                       // 3218
		onOptionRemove       : null, // function(value) { ... }                                                             // 3219
		onOptionClear        : null, // function() { ... }                                                                  // 3220
		onOptionGroupAdd     : null, // function(id, data) { ... }                                                          // 3221
		onOptionGroupRemove  : null, // function(id) { ... }                                                                // 3222
		onOptionGroupClear   : null, // function() { ... }                                                                  // 3223
		onDropdownOpen       : null, // function($dropdown) { ... }                                                         // 3224
		onDropdownClose      : null, // function($dropdown) { ... }                                                         // 3225
		onType               : null, // function(str) { ... }                                                               // 3226
		onDelete             : null, // function(values) { ... }                                                            // 3227
		*/                                                                                                                  // 3228
	                                                                                                                     // 3229
		render: {                                                                                                           // 3230
			/*                                                                                                                 // 3231
			item: null,                                                                                                        // 3232
			optgroup: null,                                                                                                    // 3233
			optgroup_header: null,                                                                                             // 3234
			option: null,                                                                                                      // 3235
			option_create: null                                                                                                // 3236
			*/                                                                                                                 // 3237
		}                                                                                                                   // 3238
	};                                                                                                                   // 3239
	                                                                                                                     // 3240
	                                                                                                                     // 3241
	$.fn.selectize = function(settings_user) {                                                                           // 3242
		var defaults             = $.fn.selectize.defaults;                                                                 // 3243
		var settings             = $.extend({}, defaults, settings_user);                                                   // 3244
		var attr_data            = settings.dataAttr;                                                                       // 3245
		var field_label          = settings.labelField;                                                                     // 3246
		var field_value          = settings.valueField;                                                                     // 3247
		var field_optgroup       = settings.optgroupField;                                                                  // 3248
		var field_optgroup_label = settings.optgroupLabelField;                                                             // 3249
		var field_optgroup_value = settings.optgroupValueField;                                                             // 3250
	                                                                                                                     // 3251
		/**                                                                                                                 // 3252
		 * Initializes selectize from a <input type="text"> element.                                                        // 3253
		 *                                                                                                                  // 3254
		 * @param {object} $input                                                                                           // 3255
		 * @param {object} settings_element                                                                                 // 3256
		 */                                                                                                                 // 3257
		var init_textbox = function($input, settings_element) {                                                             // 3258
			var i, n, values, option;                                                                                          // 3259
	                                                                                                                     // 3260
			var data_raw = $input.attr(attr_data);                                                                             // 3261
	                                                                                                                     // 3262
			if (!data_raw) {                                                                                                   // 3263
				var value = $.trim($input.val() || '');                                                                           // 3264
				if (!settings.allowEmptyOption && !value.length) return;                                                          // 3265
				values = value.split(settings.delimiter);                                                                         // 3266
				for (i = 0, n = values.length; i < n; i++) {                                                                      // 3267
					option = {};                                                                                                     // 3268
					option[field_label] = values[i];                                                                                 // 3269
					option[field_value] = values[i];                                                                                 // 3270
					settings_element.options.push(option);                                                                           // 3271
				}                                                                                                                 // 3272
				settings_element.items = values;                                                                                  // 3273
			} else {                                                                                                           // 3274
				settings_element.options = JSON.parse(data_raw);                                                                  // 3275
				for (i = 0, n = settings_element.options.length; i < n; i++) {                                                    // 3276
					settings_element.items.push(settings_element.options[i][field_value]);                                           // 3277
				}                                                                                                                 // 3278
			}                                                                                                                  // 3279
		};                                                                                                                  // 3280
	                                                                                                                     // 3281
		/**                                                                                                                 // 3282
		 * Initializes selectize from a <select> element.                                                                   // 3283
		 *                                                                                                                  // 3284
		 * @param {object} $input                                                                                           // 3285
		 * @param {object} settings_element                                                                                 // 3286
		 */                                                                                                                 // 3287
		var init_select = function($input, settings_element) {                                                              // 3288
			var i, n, tagName, $children, order = 0;                                                                           // 3289
			var options = settings_element.options;                                                                            // 3290
			var optionsMap = {};                                                                                               // 3291
	                                                                                                                     // 3292
			var readData = function($el) {                                                                                     // 3293
				var data = attr_data && $el.attr(attr_data);                                                                      // 3294
				if (typeof data === 'string' && data.length) {                                                                    // 3295
					return JSON.parse(data);                                                                                         // 3296
				}                                                                                                                 // 3297
				return null;                                                                                                      // 3298
			};                                                                                                                 // 3299
	                                                                                                                     // 3300
			var addOption = function($option, group) {                                                                         // 3301
				$option = $($option);                                                                                             // 3302
	                                                                                                                     // 3303
				var value = hash_key($option.attr('value'));                                                                      // 3304
				if (!value && !settings.allowEmptyOption) return;                                                                 // 3305
	                                                                                                                     // 3306
				// if the option already exists, it's probably been                                                               // 3307
				// duplicated in another optgroup. in this case, push                                                             // 3308
				// the current group to the "optgroup" property on the                                                            // 3309
				// existing option so that it's rendered in both places.                                                          // 3310
				if (optionsMap.hasOwnProperty(value)) {                                                                           // 3311
					if (group) {                                                                                                     // 3312
						var arr = optionsMap[value][field_optgroup];                                                                    // 3313
						if (!arr) {                                                                                                     // 3314
							optionsMap[value][field_optgroup] = group;                                                                     // 3315
						} else if (!$.isArray(arr)) {                                                                                   // 3316
							optionsMap[value][field_optgroup] = [arr, group];                                                              // 3317
						} else {                                                                                                        // 3318
							arr.push(group);                                                                                               // 3319
						}                                                                                                               // 3320
					}                                                                                                                // 3321
					return;                                                                                                          // 3322
				}                                                                                                                 // 3323
	                                                                                                                     // 3324
				var option             = readData($option) || {};                                                                 // 3325
				option[field_label]    = option[field_label] || $option.text();                                                   // 3326
				option[field_value]    = option[field_value] || value;                                                            // 3327
				option[field_optgroup] = option[field_optgroup] || group;                                                         // 3328
	                                                                                                                     // 3329
				optionsMap[value] = option;                                                                                       // 3330
				options.push(option);                                                                                             // 3331
	                                                                                                                     // 3332
				if ($option.is(':selected')) {                                                                                    // 3333
					settings_element.items.push(value);                                                                              // 3334
				}                                                                                                                 // 3335
			};                                                                                                                 // 3336
	                                                                                                                     // 3337
			var addGroup = function($optgroup) {                                                                               // 3338
				var i, n, id, optgroup, $options;                                                                                 // 3339
	                                                                                                                     // 3340
				$optgroup = $($optgroup);                                                                                         // 3341
				id = $optgroup.attr('label');                                                                                     // 3342
	                                                                                                                     // 3343
				if (id) {                                                                                                         // 3344
					optgroup = readData($optgroup) || {};                                                                            // 3345
					optgroup[field_optgroup_label] = id;                                                                             // 3346
					optgroup[field_optgroup_value] = id;                                                                             // 3347
					settings_element.optgroups.push(optgroup);                                                                       // 3348
				}                                                                                                                 // 3349
	                                                                                                                     // 3350
				$options = $('option', $optgroup);                                                                                // 3351
				for (i = 0, n = $options.length; i < n; i++) {                                                                    // 3352
					addOption($options[i], id);                                                                                      // 3353
				}                                                                                                                 // 3354
			};                                                                                                                 // 3355
	                                                                                                                     // 3356
			settings_element.maxItems = $input.attr('multiple') ? null : 1;                                                    // 3357
	                                                                                                                     // 3358
			$children = $input.children();                                                                                     // 3359
			for (i = 0, n = $children.length; i < n; i++) {                                                                    // 3360
				tagName = $children[i].tagName.toLowerCase();                                                                     // 3361
				if (tagName === 'optgroup') {                                                                                     // 3362
					addGroup($children[i]);                                                                                          // 3363
				} else if (tagName === 'option') {                                                                                // 3364
					addOption($children[i]);                                                                                         // 3365
				}                                                                                                                 // 3366
			}                                                                                                                  // 3367
		};                                                                                                                  // 3368
	                                                                                                                     // 3369
		return this.each(function() {                                                                                       // 3370
			if (this.selectize) return;                                                                                        // 3371
	                                                                                                                     // 3372
			var instance;                                                                                                      // 3373
			var $input = $(this);                                                                                              // 3374
			var tag_name = this.tagName.toLowerCase();                                                                         // 3375
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');                                   // 3376
			if (!placeholder && !settings.allowEmptyOption) {                                                                  // 3377
				placeholder = $input.children('option[value=""]').text();                                                         // 3378
			}                                                                                                                  // 3379
	                                                                                                                     // 3380
			var settings_element = {                                                                                           // 3381
				'placeholder' : placeholder,                                                                                      // 3382
				'options'     : [],                                                                                               // 3383
				'optgroups'   : [],                                                                                               // 3384
				'items'       : []                                                                                                // 3385
			};                                                                                                                 // 3386
	                                                                                                                     // 3387
			if (tag_name === 'select') {                                                                                       // 3388
				init_select($input, settings_element);                                                                            // 3389
			} else {                                                                                                           // 3390
				init_textbox($input, settings_element);                                                                           // 3391
			}                                                                                                                  // 3392
	                                                                                                                     // 3393
			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));                   // 3394
		});                                                                                                                 // 3395
	};                                                                                                                   // 3396
	                                                                                                                     // 3397
	$.fn.selectize.defaults = Selectize.defaults;                                                                        // 3398
	$.fn.selectize.support = {                                                                                           // 3399
		validity: SUPPORTS_VALIDITY_API                                                                                     // 3400
	};                                                                                                                   // 3401
	                                                                                                                     // 3402
	                                                                                                                     // 3403
	Selectize.define('drag_drop', function(options) {                                                                    // 3404
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');                       // 3405
		if (this.settings.mode !== 'multi') return;                                                                         // 3406
		var self = this;                                                                                                    // 3407
	                                                                                                                     // 3408
		self.lock = (function() {                                                                                           // 3409
			var original = self.lock;                                                                                          // 3410
			return function() {                                                                                                // 3411
				var sortable = self.$control.data('sortable');                                                                    // 3412
				if (sortable) sortable.disable();                                                                                 // 3413
				return original.apply(self, arguments);                                                                           // 3414
			};                                                                                                                 // 3415
		})();                                                                                                               // 3416
	                                                                                                                     // 3417
		self.unlock = (function() {                                                                                         // 3418
			var original = self.unlock;                                                                                        // 3419
			return function() {                                                                                                // 3420
				var sortable = self.$control.data('sortable');                                                                    // 3421
				if (sortable) sortable.enable();                                                                                  // 3422
				return original.apply(self, arguments);                                                                           // 3423
			};                                                                                                                 // 3424
		})();                                                                                                               // 3425
	                                                                                                                     // 3426
		self.setup = (function() {                                                                                          // 3427
			var original = self.setup;                                                                                         // 3428
			return function() {                                                                                                // 3429
				original.apply(this, arguments);                                                                                  // 3430
	                                                                                                                     // 3431
				var $control = self.$control.sortable({                                                                           // 3432
					items: '[data-value]',                                                                                           // 3433
					forcePlaceholderSize: true,                                                                                      // 3434
					disabled: self.isLocked,                                                                                         // 3435
					start: function(e, ui) {                                                                                         // 3436
						ui.placeholder.css('width', ui.helper.css('width'));                                                            // 3437
						$control.css({overflow: 'visible'});                                                                            // 3438
					},                                                                                                               // 3439
					stop: function() {                                                                                               // 3440
						$control.css({overflow: 'hidden'});                                                                             // 3441
						var active = self.$activeItems ? self.$activeItems.slice() : null;                                              // 3442
						var values = [];                                                                                                // 3443
						$control.children('[data-value]').each(function() {                                                             // 3444
							values.push($(this).attr('data-value'));                                                                       // 3445
						});                                                                                                             // 3446
						self.setValue(values);                                                                                          // 3447
						self.setActiveItem(active);                                                                                     // 3448
					}                                                                                                                // 3449
				});                                                                                                               // 3450
			};                                                                                                                 // 3451
		})();                                                                                                               // 3452
	                                                                                                                     // 3453
	});                                                                                                                  // 3454
	                                                                                                                     // 3455
	Selectize.define('dropdown_header', function(options) {                                                              // 3456
		var self = this;                                                                                                    // 3457
	                                                                                                                     // 3458
		options = $.extend({                                                                                                // 3459
			title         : 'Untitled',                                                                                        // 3460
			headerClass   : 'selectize-dropdown-header',                                                                       // 3461
			titleRowClass : 'selectize-dropdown-header-title',                                                                 // 3462
			labelClass    : 'selectize-dropdown-header-label',                                                                 // 3463
			closeClass    : 'selectize-dropdown-header-close',                                                                 // 3464
	                                                                                                                     // 3465
			html: function(data) {                                                                                             // 3466
				return (                                                                                                          // 3467
					'<div class="' + data.headerClass + '">' +                                                                       // 3468
						'<div class="' + data.titleRowClass + '">' +                                                                    // 3469
							'<span class="' + data.labelClass + '">' + data.title + '</span>' +                                            // 3470
							'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +                                   // 3471
						'</div>' +                                                                                                      // 3472
					'</div>'                                                                                                         // 3473
				);                                                                                                                // 3474
			}                                                                                                                  // 3475
		}, options);                                                                                                        // 3476
	                                                                                                                     // 3477
		self.setup = (function() {                                                                                          // 3478
			var original = self.setup;                                                                                         // 3479
			return function() {                                                                                                // 3480
				original.apply(self, arguments);                                                                                  // 3481
				self.$dropdown_header = $(options.html(options));                                                                 // 3482
				self.$dropdown.prepend(self.$dropdown_header);                                                                    // 3483
			};                                                                                                                 // 3484
		})();                                                                                                               // 3485
	                                                                                                                     // 3486
	});                                                                                                                  // 3487
	                                                                                                                     // 3488
	Selectize.define('optgroup_columns', function(options) {                                                             // 3489
		var self = this;                                                                                                    // 3490
	                                                                                                                     // 3491
		options = $.extend({                                                                                                // 3492
			equalizeWidth  : true,                                                                                             // 3493
			equalizeHeight : true                                                                                              // 3494
		}, options);                                                                                                        // 3495
	                                                                                                                     // 3496
		this.getAdjacentOption = function($option, direction) {                                                             // 3497
			var $options = $option.closest('[data-group]').find('[data-selectable]');                                          // 3498
			var index    = $options.index($option) + direction;                                                                // 3499
	                                                                                                                     // 3500
			return index >= 0 && index < $options.length ? $options.eq(index) : $();                                           // 3501
		};                                                                                                                  // 3502
	                                                                                                                     // 3503
		this.onKeyDown = (function() {                                                                                      // 3504
			var original = self.onKeyDown;                                                                                     // 3505
			return function(e) {                                                                                               // 3506
				var index, $option, $options, $optgroup;                                                                          // 3507
	                                                                                                                     // 3508
				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {                                         // 3509
					self.ignoreHover = true;                                                                                         // 3510
					$optgroup = this.$activeOption.closest('[data-group]');                                                          // 3511
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);                                           // 3512
	                                                                                                                     // 3513
					if(e.keyCode === KEY_LEFT) {                                                                                     // 3514
						$optgroup = $optgroup.prev('[data-group]');                                                                     // 3515
					} else {                                                                                                         // 3516
						$optgroup = $optgroup.next('[data-group]');                                                                     // 3517
					}                                                                                                                // 3518
	                                                                                                                     // 3519
					$options = $optgroup.find('[data-selectable]');                                                                  // 3520
					$option  = $options.eq(Math.min($options.length - 1, index));                                                    // 3521
					if ($option.length) {                                                                                            // 3522
						this.setActiveOption($option);                                                                                  // 3523
					}                                                                                                                // 3524
					return;                                                                                                          // 3525
				}                                                                                                                 // 3526
	                                                                                                                     // 3527
				return original.apply(this, arguments);                                                                           // 3528
			};                                                                                                                 // 3529
		})();                                                                                                               // 3530
	                                                                                                                     // 3531
		var getScrollbarWidth = function() {                                                                                // 3532
			var div;                                                                                                           // 3533
			var width = getScrollbarWidth.width;                                                                               // 3534
			var doc = document;                                                                                                // 3535
	                                                                                                                     // 3536
			if (typeof width === 'undefined') {                                                                                // 3537
				div = doc.createElement('div');                                                                                   // 3538
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;                                                                                             // 3540
				doc.body.appendChild(div);                                                                                        // 3541
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;                                              // 3542
				doc.body.removeChild(div);                                                                                        // 3543
			}                                                                                                                  // 3544
			return width;                                                                                                      // 3545
		};                                                                                                                  // 3546
	                                                                                                                     // 3547
		var equalizeSizes = function() {                                                                                    // 3548
			var i, n, height_max, width, width_last, width_parent, $optgroups;                                                 // 3549
	                                                                                                                     // 3550
			$optgroups = $('[data-group]', self.$dropdown_content);                                                            // 3551
			n = $optgroups.length;                                                                                             // 3552
			if (!n || !self.$dropdown_content.width()) return;                                                                 // 3553
	                                                                                                                     // 3554
			if (options.equalizeHeight) {                                                                                      // 3555
				height_max = 0;                                                                                                   // 3556
				for (i = 0; i < n; i++) {                                                                                         // 3557
					height_max = Math.max(height_max, $optgroups.eq(i).height());                                                    // 3558
				}                                                                                                                 // 3559
				$optgroups.css({height: height_max});                                                                             // 3560
			}                                                                                                                  // 3561
	                                                                                                                     // 3562
			if (options.equalizeWidth) {                                                                                       // 3563
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();                                         // 3564
				width = Math.round(width_parent / n);                                                                             // 3565
				$optgroups.css({width: width});                                                                                   // 3566
				if (n > 1) {                                                                                                      // 3567
					width_last = width_parent - width * (n - 1);                                                                     // 3568
					$optgroups.eq(n - 1).css({width: width_last});                                                                   // 3569
				}                                                                                                                 // 3570
			}                                                                                                                  // 3571
		};                                                                                                                  // 3572
	                                                                                                                     // 3573
		if (options.equalizeHeight || options.equalizeWidth) {                                                              // 3574
			hook.after(this, 'positionDropdown', equalizeSizes);                                                               // 3575
			hook.after(this, 'refreshOptions', equalizeSizes);                                                                 // 3576
		}                                                                                                                   // 3577
	                                                                                                                     // 3578
	                                                                                                                     // 3579
	});                                                                                                                  // 3580
	                                                                                                                     // 3581
	Selectize.define('remove_button', function(options) {                                                                // 3582
		if (this.settings.mode === 'single') return;                                                                        // 3583
	                                                                                                                     // 3584
		options = $.extend({                                                                                                // 3585
			label     : '&times;',                                                                                             // 3586
			title     : 'Remove',                                                                                              // 3587
			className : 'remove',                                                                                              // 3588
			append    : true                                                                                                   // 3589
		}, options);                                                                                                        // 3590
	                                                                                                                     // 3591
		var self = this;                                                                                                    // 3592
		var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	                                                                                                                     // 3594
		/**                                                                                                                 // 3595
		 * Appends an element as a child (with raw HTML).                                                                   // 3596
		 *                                                                                                                  // 3597
		 * @param {string} html_container                                                                                   // 3598
		 * @param {string} html_element                                                                                     // 3599
		 * @return {string}                                                                                                 // 3600
		 */                                                                                                                 // 3601
		var append = function(html_container, html_element) {                                                               // 3602
			var pos = html_container.search(/(<\/[^>]+>\s*)$/);                                                                // 3603
			return html_container.substring(0, pos) + html_element + html_container.substring(pos);                            // 3604
		};                                                                                                                  // 3605
	                                                                                                                     // 3606
		this.setup = (function() {                                                                                          // 3607
			var original = self.setup;                                                                                         // 3608
			return function() {                                                                                                // 3609
				// override the item rendering method to add the button to each                                                   // 3610
				if (options.append) {                                                                                             // 3611
					var render_item = self.settings.render.item;                                                                     // 3612
					self.settings.render.item = function(data) {                                                                     // 3613
						return append(render_item.apply(this, arguments), html);                                                        // 3614
					};                                                                                                               // 3615
				}                                                                                                                 // 3616
	                                                                                                                     // 3617
				original.apply(this, arguments);                                                                                  // 3618
	                                                                                                                     // 3619
				// add event listener                                                                                             // 3620
				this.$control.on('click', '.' + options.className, function(e) {                                                  // 3621
					e.preventDefault();                                                                                              // 3622
					if (self.isLocked) return;                                                                                       // 3623
	                                                                                                                     // 3624
					var $item = $(e.currentTarget).parent();                                                                         // 3625
					self.setActiveItem($item);                                                                                       // 3626
					if (self.deleteSelection()) {                                                                                    // 3627
						self.setCaret(self.items.length);                                                                               // 3628
					}                                                                                                                // 3629
				});                                                                                                               // 3630
	                                                                                                                     // 3631
			};                                                                                                                 // 3632
		})();                                                                                                               // 3633
	                                                                                                                     // 3634
	});                                                                                                                  // 3635
	                                                                                                                     // 3636
	Selectize.define('restore_on_backspace', function(options) {                                                         // 3637
		var self = this;                                                                                                    // 3638
	                                                                                                                     // 3639
		options.text = options.text || function(option) {                                                                   // 3640
			return option[this.settings.labelField];                                                                           // 3641
		};                                                                                                                  // 3642
	                                                                                                                     // 3643
		this.onKeyDown = (function() {                                                                                      // 3644
			var original = self.onKeyDown;                                                                                     // 3645
			return function(e) {                                                                                               // 3646
				var index, option;                                                                                                // 3647
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {               // 3648
					index = this.caretPos - 1;                                                                                       // 3649
					if (index >= 0 && index < this.items.length) {                                                                   // 3650
						option = this.options[this.items[index]];                                                                       // 3651
						if (this.deleteSelection(e)) {                                                                                  // 3652
							this.setTextboxValue(options.text.apply(this, [option]));                                                      // 3653
							this.refreshOptions(true);                                                                                     // 3654
						}                                                                                                               // 3655
						e.preventDefault();                                                                                             // 3656
						return;                                                                                                         // 3657
					}                                                                                                                // 3658
				}                                                                                                                 // 3659
				return original.apply(this, arguments);                                                                           // 3660
			};                                                                                                                 // 3661
		})();                                                                                                               // 3662
	});                                                                                                                  // 3663
	                                                                                                                     // 3664
                                                                                                                      // 3665
	return Selectize;                                                                                                    // 3666
}));                                                                                                                  // 3667
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jeremy:selectize'] = {};

})();
