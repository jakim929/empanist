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

/* Package-scope variables */
var Materialize, overlayID, $overlay, lStack, $caption, $curr_slide, curr_index, $index, $this, namesCount, createDayLabel, createWeekdayLabel, imageHeight, item_width, tweenedOpacity, zTranslation, y;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/materialize_materialize/dist/js/materialize.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Materialize v0.97.6 (http://materializecss.com)                                                                     // 2
 * Copyright 2014-2015 Materialize                                                                                     // 3
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)                                  // 4
 */                                                                                                                    // 5
// Check for jQuery.                                                                                                   // 6
if (typeof(jQuery) === 'undefined') {                                                                                  // 7
  var jQuery;                                                                                                          // 8
  // Check if require is a defined function.                                                                           // 9
  if (typeof(require) === 'function') {                                                                                // 10
    jQuery = $ = require('jquery');                                                                                    // 11
  // Else use the dollar sign alias.                                                                                   // 12
  } else {                                                                                                             // 13
    jQuery = $;                                                                                                        // 14
  }                                                                                                                    // 15
}                                                                                                                      // 16
;/*                                                                                                                    // 17
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/                                                       // 18
 *                                                                                                                     // 19
 * Uses the built in easing capabilities added In jQuery 1.1                                                           // 20
 * to offer multiple easing options                                                                                    // 21
 *                                                                                                                     // 22
 * TERMS OF USE - jQuery Easing                                                                                        // 23
 *                                                                                                                     // 24
 * Open source under the BSD License.                                                                                  // 25
 *                                                                                                                     // 26
 * Copyright © 2008 George McGinley Smith                                                                              // 27
 * All rights reserved.                                                                                                // 28
 *                                                                                                                     // 29
 * Redistribution and use in source and binary forms, with or without modification,                                    // 30
 * are permitted provided that the following conditions are met:                                                       // 31
 *                                                                                                                     // 32
 * Redistributions of source code must retain the above copyright notice, this list of                                 // 33
 * conditions and the following disclaimer.                                                                            // 34
 * Redistributions in binary form must reproduce the above copyright notice, this list                                 // 35
 * of conditions and the following disclaimer in the documentation and/or other materials                              // 36
 * provided with the distribution.                                                                                     // 37
 *                                                                                                                     // 38
 * Neither the name of the author nor the names of contributors may be used to endorse                                 // 39
 * or promote products derived from this software without specific prior written permission.                           // 40
 *                                                                                                                     // 41
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                                 // 42
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                             // 43
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                          // 44
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                           // 45
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                      // 46
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                         // 47
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                           // 48
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                       // 49
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                  // 50
 *                                                                                                                     // 51
*/                                                                                                                     // 52
                                                                                                                       // 53
// t: current time, b: begInnIng value, c: change In value, d: duration                                                // 54
jQuery.easing['jswing'] = jQuery.easing['swing'];                                                                      // 55
                                                                                                                       // 56
jQuery.extend( jQuery.easing,                                                                                          // 57
{                                                                                                                      // 58
	def: 'easeOutQuad',                                                                                                   // 59
	swing: function (x, t, b, c, d) {                                                                                     // 60
		//alert(jQuery.easing.default);                                                                                      // 61
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);                                                              // 62
	},                                                                                                                    // 63
	easeInQuad: function (x, t, b, c, d) {                                                                                // 64
		return c*(t/=d)*t + b;                                                                                               // 65
	},                                                                                                                    // 66
	easeOutQuad: function (x, t, b, c, d) {                                                                               // 67
		return -c *(t/=d)*(t-2) + b;                                                                                         // 68
	},                                                                                                                    // 69
	easeInOutQuad: function (x, t, b, c, d) {                                                                             // 70
		if ((t/=d/2) < 1) return c/2*t*t + b;                                                                                // 71
		return -c/2 * ((--t)*(t-2) - 1) + b;                                                                                 // 72
	},                                                                                                                    // 73
	easeInCubic: function (x, t, b, c, d) {                                                                               // 74
		return c*(t/=d)*t*t + b;                                                                                             // 75
	},                                                                                                                    // 76
	easeOutCubic: function (x, t, b, c, d) {                                                                              // 77
		return c*((t=t/d-1)*t*t + 1) + b;                                                                                    // 78
	},                                                                                                                    // 79
	easeInOutCubic: function (x, t, b, c, d) {                                                                            // 80
		if ((t/=d/2) < 1) return c/2*t*t*t + b;                                                                              // 81
		return c/2*((t-=2)*t*t + 2) + b;                                                                                     // 82
	},                                                                                                                    // 83
	easeInQuart: function (x, t, b, c, d) {                                                                               // 84
		return c*(t/=d)*t*t*t + b;                                                                                           // 85
	},                                                                                                                    // 86
	easeOutQuart: function (x, t, b, c, d) {                                                                              // 87
		return -c * ((t=t/d-1)*t*t*t - 1) + b;                                                                               // 88
	},                                                                                                                    // 89
	easeInOutQuart: function (x, t, b, c, d) {                                                                            // 90
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;                                                                            // 91
		return -c/2 * ((t-=2)*t*t*t - 2) + b;                                                                                // 92
	},                                                                                                                    // 93
	easeInQuint: function (x, t, b, c, d) {                                                                               // 94
		return c*(t/=d)*t*t*t*t + b;                                                                                         // 95
	},                                                                                                                    // 96
	easeOutQuint: function (x, t, b, c, d) {                                                                              // 97
		return c*((t=t/d-1)*t*t*t*t + 1) + b;                                                                                // 98
	},                                                                                                                    // 99
	easeInOutQuint: function (x, t, b, c, d) {                                                                            // 100
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;                                                                          // 101
		return c/2*((t-=2)*t*t*t*t + 2) + b;                                                                                 // 102
	},                                                                                                                    // 103
	easeInSine: function (x, t, b, c, d) {                                                                                // 104
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;                                                                     // 105
	},                                                                                                                    // 106
	easeOutSine: function (x, t, b, c, d) {                                                                               // 107
		return c * Math.sin(t/d * (Math.PI/2)) + b;                                                                          // 108
	},                                                                                                                    // 109
	easeInOutSine: function (x, t, b, c, d) {                                                                             // 110
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;                                                                       // 111
	},                                                                                                                    // 112
	easeInExpo: function (x, t, b, c, d) {                                                                                // 113
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;                                                             // 114
	},                                                                                                                    // 115
	easeOutExpo: function (x, t, b, c, d) {                                                                               // 116
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;                                                         // 117
	},                                                                                                                    // 118
	easeInOutExpo: function (x, t, b, c, d) {                                                                             // 119
		if (t==0) return b;                                                                                                  // 120
		if (t==d) return b+c;                                                                                                // 121
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;                                                        // 122
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;                                                                      // 123
	},                                                                                                                    // 124
	easeInCirc: function (x, t, b, c, d) {                                                                                // 125
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;                                                                       // 126
	},                                                                                                                    // 127
	easeOutCirc: function (x, t, b, c, d) {                                                                               // 128
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;                                                                           // 129
	},                                                                                                                    // 130
	easeInOutCirc: function (x, t, b, c, d) {                                                                             // 131
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;                                                        // 132
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;                                                                      // 133
	},                                                                                                                    // 134
	easeInElastic: function (x, t, b, c, d) {                                                                             // 135
		var s=1.70158;var p=0;var a=c;                                                                                       // 136
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                     // 137
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                             // 138
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                        // 139
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                                           // 140
	},                                                                                                                    // 141
	easeOutElastic: function (x, t, b, c, d) {                                                                            // 142
		var s=1.70158;var p=0;var a=c;                                                                                       // 143
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                     // 144
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                             // 145
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                        // 146
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;                                              // 147
	},                                                                                                                    // 148
	easeInOutElastic: function (x, t, b, c, d) {                                                                          // 149
		var s=1.70158;var p=0;var a=c;                                                                                       // 150
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);                                             // 151
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                             // 152
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                        // 153
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                             // 154
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;                                      // 155
	},                                                                                                                    // 156
	easeInBack: function (x, t, b, c, d, s) {                                                                             // 157
		if (s == undefined) s = 1.70158;                                                                                     // 158
		return c*(t/=d)*t*((s+1)*t - s) + b;                                                                                 // 159
	},                                                                                                                    // 160
	easeOutBack: function (x, t, b, c, d, s) {                                                                            // 161
		if (s == undefined) s = 1.70158;                                                                                     // 162
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;                                                                        // 163
	},                                                                                                                    // 164
	easeInOutBack: function (x, t, b, c, d, s) {                                                                          // 165
		if (s == undefined) s = 1.70158;                                                                                     // 166
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;                                                     // 167
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;                                                              // 168
	},                                                                                                                    // 169
	easeInBounce: function (x, t, b, c, d) {                                                                              // 170
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;                                                        // 171
	},                                                                                                                    // 172
	easeOutBounce: function (x, t, b, c, d) {                                                                             // 173
		if ((t/=d) < (1/2.75)) {                                                                                             // 174
			return c*(7.5625*t*t) + b;                                                                                          // 175
		} else if (t < (2/2.75)) {                                                                                           // 176
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;                                                                      // 177
		} else if (t < (2.5/2.75)) {                                                                                         // 178
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;                                                                   // 179
		} else {                                                                                                             // 180
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;                                                                // 181
		}                                                                                                                    // 182
	},                                                                                                                    // 183
	easeInOutBounce: function (x, t, b, c, d) {                                                                           // 184
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;                                           // 185
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;                                              // 186
	}                                                                                                                     // 187
});                                                                                                                    // 188
                                                                                                                       // 189
/*                                                                                                                     // 190
 *                                                                                                                     // 191
 * TERMS OF USE - EASING EQUATIONS                                                                                     // 192
 *                                                                                                                     // 193
 * Open source under the BSD License.                                                                                  // 194
 *                                                                                                                     // 195
 * Copyright © 2001 Robert Penner                                                                                      // 196
 * All rights reserved.                                                                                                // 197
 *                                                                                                                     // 198
 * Redistribution and use in source and binary forms, with or without modification,                                    // 199
 * are permitted provided that the following conditions are met:                                                       // 200
 *                                                                                                                     // 201
 * Redistributions of source code must retain the above copyright notice, this list of                                 // 202
 * conditions and the following disclaimer.                                                                            // 203
 * Redistributions in binary form must reproduce the above copyright notice, this list                                 // 204
 * of conditions and the following disclaimer in the documentation and/or other materials                              // 205
 * provided with the distribution.                                                                                     // 206
 *                                                                                                                     // 207
 * Neither the name of the author nor the names of contributors may be used to endorse                                 // 208
 * or promote products derived from this software without specific prior written permission.                           // 209
 *                                                                                                                     // 210
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                                 // 211
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                             // 212
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                          // 213
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                           // 214
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                      // 215
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                         // 216
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                           // 217
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                       // 218
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                  // 219
 *                                                                                                                     // 220
 */;    // Custom Easing                                                                                               // 221
    jQuery.extend( jQuery.easing,                                                                                      // 222
    {                                                                                                                  // 223
      easeInOutMaterial: function (x, t, b, c, d) {                                                                    // 224
        if ((t/=d/2) < 1) return c/2*t*t + b;                                                                          // 225
        return c/4*((t-=2)*t*t + 2) + b;                                                                               // 226
      }                                                                                                                // 227
    });                                                                                                                // 228
                                                                                                                       // 229
;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */               // 230
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */         // 232
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));
;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {                                                                  // 236
        define(['jquery', 'hammerjs'], factory);                                                                       // 237
    } else if (typeof exports === 'object') {                                                                          // 238
        factory(require('jquery'), require('hammerjs'));                                                               // 239
    } else {                                                                                                           // 240
        factory(jQuery, Hammer);                                                                                       // 241
    }                                                                                                                  // 242
}(function($, Hammer) {                                                                                                // 243
    function hammerify(el, options) {                                                                                  // 244
        var $el = $(el);                                                                                               // 245
        if(!$el.data("hammer")) {                                                                                      // 246
            $el.data("hammer", new Hammer($el[0], options));                                                           // 247
        }                                                                                                              // 248
    }                                                                                                                  // 249
                                                                                                                       // 250
    $.fn.hammer = function(options) {                                                                                  // 251
        return this.each(function() {                                                                                  // 252
            hammerify(this, options);                                                                                  // 253
        });                                                                                                            // 254
    };                                                                                                                 // 255
                                                                                                                       // 256
    // extend the emit method to also trigger jQuery events                                                            // 257
    Hammer.Manager.prototype.emit = (function(originalEmit) {                                                          // 258
        return function(type, data) {                                                                                  // 259
            originalEmit.call(this, type, data);                                                                       // 260
            $(this.element).trigger({                                                                                  // 261
                type: type,                                                                                            // 262
                gesture: data                                                                                          // 263
            });                                                                                                        // 264
        };                                                                                                             // 265
    })(Hammer.Manager.prototype.emit);                                                                                 // 266
}));                                                                                                                   // 267
;// Required for Meteor package, the use of window prevents export by Meteor                                           // 268
(function(window){                                                                                                     // 269
  if(window.Package){                                                                                                  // 270
    Materialize = {};                                                                                                  // 271
  } else {                                                                                                             // 272
    window.Materialize = {};                                                                                           // 273
  }                                                                                                                    // 274
})(window);                                                                                                            // 275
                                                                                                                       // 276
                                                                                                                       // 277
// Unique ID                                                                                                           // 278
Materialize.guid = (function() {                                                                                       // 279
  function s4() {                                                                                                      // 280
    return Math.floor((1 + Math.random()) * 0x10000)                                                                   // 281
      .toString(16)                                                                                                    // 282
      .substring(1);                                                                                                   // 283
  }                                                                                                                    // 284
  return function() {                                                                                                  // 285
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +                                                               // 286
           s4() + '-' + s4() + s4() + s4();                                                                            // 287
  };                                                                                                                   // 288
})();                                                                                                                  // 289
                                                                                                                       // 290
Materialize.elementOrParentIsFixed = function(element) {                                                               // 291
    var $element = $(element);                                                                                         // 292
    var $checkElements = $element.add($element.parents());                                                             // 293
    var isFixed = false;                                                                                               // 294
    $checkElements.each(function(){                                                                                    // 295
        if ($(this).css("position") === "fixed") {                                                                     // 296
            isFixed = true;                                                                                            // 297
            return false;                                                                                              // 298
        }                                                                                                              // 299
    });                                                                                                                // 300
    return isFixed;                                                                                                    // 301
};                                                                                                                     // 302
                                                                                                                       // 303
// Velocity has conflicts when loaded with jQuery, this will check for it                                              // 304
var Vel;                                                                                                               // 305
if ($) {                                                                                                               // 306
  Vel = $.Velocity;                                                                                                    // 307
} else if (jQuery) {                                                                                                   // 308
  Vel = jQuery.Velocity;                                                                                               // 309
} else {                                                                                                               // 310
  Vel = Velocity;                                                                                                      // 311
}                                                                                                                      // 312
;(function ($) {                                                                                                       // 313
  $.fn.collapsible = function(options) {                                                                               // 314
    var defaults = {                                                                                                   // 315
        accordion: undefined                                                                                           // 316
    };                                                                                                                 // 317
                                                                                                                       // 318
    options = $.extend(defaults, options);                                                                             // 319
                                                                                                                       // 320
                                                                                                                       // 321
    return this.each(function() {                                                                                      // 322
                                                                                                                       // 323
      var $this = $(this);                                                                                             // 324
                                                                                                                       // 325
      var $panel_headers = $(this).find('> li > .collapsible-header');                                                 // 326
                                                                                                                       // 327
      var collapsible_type = $this.data("collapsible");                                                                // 328
                                                                                                                       // 329
      // Turn off any existing event handlers                                                                          // 330
       $this.off('click.collapse', '> li > .collapsible-header');                                                      // 331
       $panel_headers.off('click.collapse');                                                                           // 332
                                                                                                                       // 333
                                                                                                                       // 334
       /****************                                                                                               // 335
       Helper Functions                                                                                                // 336
       ****************/                                                                                               // 337
                                                                                                                       // 338
      // Accordion Open                                                                                                // 339
      function accordionOpen(object) {                                                                                 // 340
        $panel_headers = $this.find('> li > .collapsible-header');                                                     // 341
        if (object.hasClass('active')) {                                                                               // 342
            object.parent().addClass('active');                                                                        // 343
        }                                                                                                              // 344
        else {                                                                                                         // 345
            object.parent().removeClass('active');                                                                     // 346
        }                                                                                                              // 347
        if (object.parent().hasClass('active')){                                                                       // 348
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                              // 350
        else{                                                                                                          // 351
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                              // 353
                                                                                                                       // 354
        $panel_headers.not(object).removeClass('active').parent().removeClass('active');                               // 355
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp(                    // 356
          {                                                                                                            // 357
            duration: 350,                                                                                             // 358
            easing: "easeOutQuart",                                                                                    // 359
            queue: false,                                                                                              // 360
            complete:                                                                                                  // 361
              function() {                                                                                             // 362
                $(this).css('height', '');                                                                             // 363
              }                                                                                                        // 364
          });                                                                                                          // 365
      }                                                                                                                // 366
                                                                                                                       // 367
      // Expandable Open                                                                                               // 368
      function expandableOpen(object) {                                                                                // 369
        if (object.hasClass('active')) {                                                                               // 370
            object.parent().addClass('active');                                                                        // 371
        }                                                                                                              // 372
        else {                                                                                                         // 373
            object.parent().removeClass('active');                                                                     // 374
        }                                                                                                              // 375
        if (object.parent().hasClass('active')){                                                                       // 376
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                              // 378
        else{                                                                                                          // 379
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                              // 381
      }                                                                                                                // 382
                                                                                                                       // 383
      /**                                                                                                              // 384
       * Check if object is children of panel header                                                                   // 385
       * @param  {Object}  object Jquery object                                                                        // 386
       * @return {Boolean} true if it is children                                                                      // 387
       */                                                                                                              // 388
      function isChildrenOfPanelHeader(object) {                                                                       // 389
                                                                                                                       // 390
        var panelHeader = getPanelHeader(object);                                                                      // 391
                                                                                                                       // 392
        return panelHeader.length > 0;                                                                                 // 393
      }                                                                                                                // 394
                                                                                                                       // 395
      /**                                                                                                              // 396
       * Get panel header from a children element                                                                      // 397
       * @param  {Object} object Jquery object                                                                         // 398
       * @return {Object} panel header object                                                                          // 399
       */                                                                                                              // 400
      function getPanelHeader(object) {                                                                                // 401
                                                                                                                       // 402
        return object.closest('li > .collapsible-header');                                                             // 403
      }                                                                                                                // 404
                                                                                                                       // 405
      /*****  End Helper Functions  *****/                                                                             // 406
                                                                                                                       // 407
                                                                                                                       // 408
                                                                                                                       // 409
      // Add click handler to only direct collapsible header children                                                  // 410
      $this.on('click.collapse', '> li > .collapsible-header', function(e) {                                           // 411
        var $header = $(this),                                                                                         // 412
            element = $(e.target);                                                                                     // 413
                                                                                                                       // 414
        if (isChildrenOfPanelHeader(element)) {                                                                        // 415
          element = getPanelHeader(element);                                                                           // 416
        }                                                                                                              // 417
                                                                                                                       // 418
        element.toggleClass('active');                                                                                 // 419
                                                                                                                       // 420
        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
          accordionOpen(element);                                                                                      // 422
        } else { // Handle Expandables                                                                                 // 423
          expandableOpen(element);                                                                                     // 424
                                                                                                                       // 425
          if ($header.hasClass('active')) {                                                                            // 426
            expandableOpen($header);                                                                                   // 427
          }                                                                                                            // 428
        }                                                                                                              // 429
      });                                                                                                              // 430
                                                                                                                       // 431
      // Open first active                                                                                             // 432
      var $panel_headers = $this.find('> li > .collapsible-header');                                                   // 433
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        accordionOpen($panel_headers.filter('.active').first());                                                       // 435
      }                                                                                                                // 436
      else { // Handle Expandables                                                                                     // 437
        $panel_headers.filter('.active').each(function() {                                                             // 438
          expandableOpen($(this));                                                                                     // 439
        });                                                                                                            // 440
      }                                                                                                                // 441
                                                                                                                       // 442
    });                                                                                                                // 443
  };                                                                                                                   // 444
                                                                                                                       // 445
  $(document).ready(function(){                                                                                        // 446
    $('.collapsible').collapsible();                                                                                   // 447
  });                                                                                                                  // 448
}( jQuery ));;(function ($) {                                                                                          // 449
                                                                                                                       // 450
  // Add posibility to scroll to selected option                                                                       // 451
  // usefull for select for example                                                                                    // 452
  $.fn.scrollTo = function(elem) {                                                                                     // 453
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);                              // 454
    return this;                                                                                                       // 455
  };                                                                                                                   // 456
                                                                                                                       // 457
  $.fn.dropdown = function (option) {                                                                                  // 458
    var defaults = {                                                                                                   // 459
      inDuration: 300,                                                                                                 // 460
      outDuration: 225,                                                                                                // 461
      constrain_width: true, // Constrains width of dropdown to the activator                                          // 462
      hover: false,                                                                                                    // 463
      gutter: 0, // Spacing from edge                                                                                  // 464
      belowOrigin: false,                                                                                              // 465
      alignment: 'left'                                                                                                // 466
    };                                                                                                                 // 467
                                                                                                                       // 468
    this.each(function(){                                                                                              // 469
    var origin = $(this);                                                                                              // 470
    var options = $.extend({}, defaults, option);                                                                      // 471
    var isFocused = false;                                                                                             // 472
                                                                                                                       // 473
    // Dropdown menu                                                                                                   // 474
    var activates = $("#"+ origin.attr('data-activates'));                                                             // 475
                                                                                                                       // 476
    function updateOptions() {                                                                                         // 477
      if (origin.data('induration') !== undefined)                                                                     // 478
        options.inDuration = origin.data('inDuration');                                                                // 479
      if (origin.data('outduration') !== undefined)                                                                    // 480
        options.outDuration = origin.data('outDuration');                                                              // 481
      if (origin.data('constrainwidth') !== undefined)                                                                 // 482
        options.constrain_width = origin.data('constrainwidth');                                                       // 483
      if (origin.data('hover') !== undefined)                                                                          // 484
        options.hover = origin.data('hover');                                                                          // 485
      if (origin.data('gutter') !== undefined)                                                                         // 486
        options.gutter = origin.data('gutter');                                                                        // 487
      if (origin.data('beloworigin') !== undefined)                                                                    // 488
        options.belowOrigin = origin.data('beloworigin');                                                              // 489
      if (origin.data('alignment') !== undefined)                                                                      // 490
        options.alignment = origin.data('alignment');                                                                  // 491
    }                                                                                                                  // 492
                                                                                                                       // 493
    updateOptions();                                                                                                   // 494
                                                                                                                       // 495
    // Attach dropdown to its activator                                                                                // 496
    origin.after(activates);                                                                                           // 497
                                                                                                                       // 498
    /*                                                                                                                 // 499
      Helper function to position and resize dropdown.                                                                 // 500
      Used in hover and click handler.                                                                                 // 501
    */                                                                                                                 // 502
    function placeDropdown(eventType) {                                                                                // 503
      // Check for simultaneous focus and click events.                                                                // 504
      if (eventType === 'focus') {                                                                                     // 505
        isFocused = true;                                                                                              // 506
      }                                                                                                                // 507
                                                                                                                       // 508
      // Check html data attributes                                                                                    // 509
      updateOptions();                                                                                                 // 510
                                                                                                                       // 511
      // Set Dropdown state                                                                                            // 512
      activates.addClass('active');                                                                                    // 513
      origin.addClass('active');                                                                                       // 514
                                                                                                                       // 515
      // Constrain width                                                                                               // 516
      if (options.constrain_width === true) {                                                                          // 517
        activates.css('width', origin.outerWidth());                                                                   // 518
                                                                                                                       // 519
      } else {                                                                                                         // 520
        activates.css('white-space', 'nowrap');                                                                        // 521
      }                                                                                                                // 522
                                                                                                                       // 523
      // Offscreen detection                                                                                           // 524
      var windowHeight = window.innerHeight;                                                                           // 525
      var originHeight = origin.innerHeight();                                                                         // 526
      var offsetLeft = origin.offset().left;                                                                           // 527
      var offsetTop = origin.offset().top - $(window).scrollTop();                                                     // 528
      var currAlignment = options.alignment;                                                                           // 529
      var gutterSpacing = 0;                                                                                           // 530
      var leftPosition = 0;                                                                                            // 531
                                                                                                                       // 532
      // Below Origin                                                                                                  // 533
      var verticalOffset = 0;                                                                                          // 534
      if (options.belowOrigin === true) {                                                                              // 535
        verticalOffset = originHeight;                                                                                 // 536
      }                                                                                                                // 537
                                                                                                                       // 538
      // Check for scrolling positioned container.                                                                     // 539
      var scrollOffset = 0;                                                                                            // 540
      var wrapper = origin.parent();                                                                                   // 541
      if (!wrapper.is('body') && wrapper[0].scrollHeight > wrapper[0].clientHeight) {                                  // 542
        scrollOffset = wrapper[0].scrollTop;                                                                           // 543
      }                                                                                                                // 544
                                                                                                                       // 545
                                                                                                                       // 546
      if (offsetLeft + activates.innerWidth() > $(window).width()) {                                                   // 547
        // Dropdown goes past screen on right, force right alignment                                                   // 548
        currAlignment = 'right';                                                                                       // 549
                                                                                                                       // 550
      } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {                                      // 551
        // Dropdown goes past screen on left, force left alignment                                                     // 552
        currAlignment = 'left';                                                                                        // 553
      }                                                                                                                // 554
      // Vertical bottom offscreen detection                                                                           // 555
      if (offsetTop + activates.innerHeight() > windowHeight) {                                                        // 556
        // If going upwards still goes offscreen, just crop height of dropdown.                                        // 557
        if (offsetTop + originHeight - activates.innerHeight() < 0) {                                                  // 558
          var adjustedHeight = windowHeight - offsetTop - verticalOffset;                                              // 559
          activates.css('max-height', adjustedHeight);                                                                 // 560
        } else {                                                                                                       // 561
          // Flow upwards.                                                                                             // 562
          if (!verticalOffset) {                                                                                       // 563
            verticalOffset += originHeight;                                                                            // 564
          }                                                                                                            // 565
          verticalOffset -= activates.innerHeight();                                                                   // 566
        }                                                                                                              // 567
      }                                                                                                                // 568
                                                                                                                       // 569
      // Handle edge alignment                                                                                         // 570
      if (currAlignment === 'left') {                                                                                  // 571
        gutterSpacing = options.gutter;                                                                                // 572
        leftPosition = origin.position().left + gutterSpacing;                                                         // 573
      }                                                                                                                // 574
      else if (currAlignment === 'right') {                                                                            // 575
        var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();                       // 576
        gutterSpacing = -options.gutter;                                                                               // 577
        leftPosition =  offsetRight + gutterSpacing;                                                                   // 578
      }                                                                                                                // 579
                                                                                                                       // 580
      // Position dropdown                                                                                             // 581
      activates.css({                                                                                                  // 582
        position: 'absolute',                                                                                          // 583
        top: origin.position().top + verticalOffset + scrollOffset,                                                    // 584
        left: leftPosition                                                                                             // 585
      });                                                                                                              // 586
                                                                                                                       // 587
                                                                                                                       // 588
      // Show dropdown                                                                                                 // 589
      activates.stop(true, true).css('opacity', 0)                                                                     // 590
        .slideDown({                                                                                                   // 591
        queue: false,                                                                                                  // 592
        duration: options.inDuration,                                                                                  // 593
        easing: 'easeOutCubic',                                                                                        // 594
        complete: function() {                                                                                         // 595
          $(this).css('height', '');                                                                                   // 596
        }                                                                                                              // 597
      })                                                                                                               // 598
        .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});                  // 599
    }                                                                                                                  // 600
                                                                                                                       // 601
    function hideDropdown() {                                                                                          // 602
      // Check for simultaneous focus and click events.                                                                // 603
      isFocused = false;                                                                                               // 604
      activates.fadeOut(options.outDuration);                                                                          // 605
      activates.removeClass('active');                                                                                 // 606
      origin.removeClass('active');                                                                                    // 607
      setTimeout(function() { activates.css('max-height', ''); }, options.outDuration);                                // 608
    }                                                                                                                  // 609
                                                                                                                       // 610
    // Hover                                                                                                           // 611
    if (options.hover) {                                                                                               // 612
      var open = false;                                                                                                // 613
      origin.unbind('click.' + origin.attr('id'));                                                                     // 614
      // Hover handler to show dropdown                                                                                // 615
      origin.on('mouseenter', function(e){ // Mouse over                                                               // 616
        if (open === false) {                                                                                          // 617
          placeDropdown();                                                                                             // 618
          open = true;                                                                                                 // 619
        }                                                                                                              // 620
      });                                                                                                              // 621
      origin.on('mouseleave', function(e){                                                                             // 622
        // If hover on origin then to something other than dropdown content, then close                                // 623
        var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element                   // 624
        if(!$(toEl).closest('.dropdown-content').is(activates)) {                                                      // 625
          activates.stop(true, true);                                                                                  // 626
          hideDropdown();                                                                                              // 627
          open = false;                                                                                                // 628
        }                                                                                                              // 629
      });                                                                                                              // 630
                                                                                                                       // 631
      activates.on('mouseleave', function(e){ // Mouse out                                                             // 632
        var toEl = e.toElement || e.relatedTarget;                                                                     // 633
        if(!$(toEl).closest('.dropdown-button').is(origin)) {                                                          // 634
          activates.stop(true, true);                                                                                  // 635
          hideDropdown();                                                                                              // 636
          open = false;                                                                                                // 637
        }                                                                                                              // 638
      });                                                                                                              // 639
                                                                                                                       // 640
    // Click                                                                                                           // 641
    } else {                                                                                                           // 642
      // Click handler to show dropdown                                                                                // 643
      origin.unbind('click.' + origin.attr('id'));                                                                     // 644
      origin.bind('click.'+origin.attr('id'), function(e){                                                             // 645
        if (!isFocused) {                                                                                              // 646
          if ( origin[0] == e.currentTarget &&                                                                         // 647
               !origin.hasClass('active') &&                                                                           // 648
               ($(e.target).closest('.dropdown-content').length === 0)) {                                              // 649
            e.preventDefault(); // Prevents button click from moving window                                            // 650
            placeDropdown('click');                                                                                    // 651
          }                                                                                                            // 652
          // If origin is clicked and menu is open, close menu                                                         // 653
          else if (origin.hasClass('active')) {                                                                        // 654
            hideDropdown();                                                                                            // 655
            $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));                // 656
          }                                                                                                            // 657
          // If menu open, add click close handler to document                                                         // 658
          if (activates.hasClass('active')) {                                                                          // 659
            $(document).bind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e) {    // 660
              if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length) ) {               // 661
                hideDropdown();                                                                                        // 662
                $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));            // 663
              }                                                                                                        // 664
            });                                                                                                        // 665
          }                                                                                                            // 666
        }                                                                                                              // 667
      });                                                                                                              // 668
                                                                                                                       // 669
    } // End else                                                                                                      // 670
                                                                                                                       // 671
    // Listen to open and close event - useful for select component                                                    // 672
    origin.on('open', function(e, eventType) {                                                                         // 673
      placeDropdown(eventType);                                                                                        // 674
    });                                                                                                                // 675
    origin.on('close', hideDropdown);                                                                                  // 676
                                                                                                                       // 677
                                                                                                                       // 678
   });                                                                                                                 // 679
  }; // End dropdown plugin                                                                                            // 680
                                                                                                                       // 681
  $(document).ready(function(){                                                                                        // 682
    $('.dropdown-button').dropdown();                                                                                  // 683
  });                                                                                                                  // 684
}( jQuery ));                                                                                                          // 685
;(function($) {                                                                                                        // 686
    var _stack = 0,                                                                                                    // 687
    _lastID = 0,                                                                                                       // 688
    _generateID = function() {                                                                                         // 689
      _lastID++;                                                                                                       // 690
      return 'materialize-lean-overlay-' + _lastID;                                                                    // 691
    };                                                                                                                 // 692
                                                                                                                       // 693
  $.fn.extend({                                                                                                        // 694
    openModal: function(options) {                                                                                     // 695
                                                                                                                       // 696
      var $body = $('body');                                                                                           // 697
      var oldWidth = $body.innerWidth();                                                                               // 698
      $body.css('overflow', 'hidden');                                                                                 // 699
      $body.width(oldWidth);                                                                                           // 700
                                                                                                                       // 701
      var defaults = {                                                                                                 // 702
        opacity: 0.5,                                                                                                  // 703
        in_duration: 350,                                                                                              // 704
        out_duration: 250,                                                                                             // 705
        ready: undefined,                                                                                              // 706
        complete: undefined,                                                                                           // 707
        dismissible: true,                                                                                             // 708
        starting_top: '4%'                                                                                             // 709
      },                                                                                                               // 710
      $modal = $(this);                                                                                                // 711
                                                                                                                       // 712
      if ($modal.hasClass('open')) {                                                                                   // 713
        return;                                                                                                        // 714
      }                                                                                                                // 715
                                                                                                                       // 716
      overlayID = _generateID();                                                                                       // 717
      $overlay = $('<div class="lean-overlay"></div>');                                                                // 718
      lStack = (++_stack);                                                                                             // 719
                                                                                                                       // 720
      // Store a reference of the overlay                                                                              // 721
      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);                                                // 722
      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);                                      // 723
      $modal.addClass('open');                                                                                         // 724
                                                                                                                       // 725
      $("body").append($overlay);                                                                                      // 726
                                                                                                                       // 727
      // Override defaults                                                                                             // 728
      options = $.extend(defaults, options);                                                                           // 729
                                                                                                                       // 730
      if (options.dismissible) {                                                                                       // 731
        $overlay.click(function() {                                                                                    // 732
          $modal.closeModal(options);                                                                                  // 733
        });                                                                                                            // 734
        // Return on ESC                                                                                               // 735
        $(document).on('keyup.leanModal' + overlayID, function(e) {                                                    // 736
          if (e.keyCode === 27) {   // ESC key                                                                         // 737
            $modal.closeModal(options);                                                                                // 738
          }                                                                                                            // 739
        });                                                                                                            // 740
      }                                                                                                                // 741
                                                                                                                       // 742
      $modal.find(".modal-close").on('click.close', function(e) {                                                      // 743
        $modal.closeModal(options);                                                                                    // 744
      });                                                                                                              // 745
                                                                                                                       // 746
      $overlay.css({ display : "block", opacity : 0 });                                                                // 747
                                                                                                                       // 748
      $modal.css({                                                                                                     // 749
        display : "block",                                                                                             // 750
        opacity: 0                                                                                                     // 751
      });                                                                                                              // 752
                                                                                                                       // 753
      $overlay.velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});
      $modal.data('associated-overlay', $overlay[0]);                                                                  // 755
                                                                                                                       // 756
      // Define Bottom Sheet animation                                                                                 // 757
      if ($modal.hasClass('bottom-sheet')) {                                                                           // 758
        $modal.velocity({bottom: "0", opacity: 1}, {                                                                   // 759
          duration: options.in_duration,                                                                               // 760
          queue: false,                                                                                                // 761
          ease: "easeOutCubic",                                                                                        // 762
          // Handle modal ready callback                                                                               // 763
          complete: function() {                                                                                       // 764
            if (typeof(options.ready) === "function") {                                                                // 765
              options.ready();                                                                                         // 766
            }                                                                                                          // 767
          }                                                                                                            // 768
        });                                                                                                            // 769
      }                                                                                                                // 770
      else {                                                                                                           // 771
        $.Velocity.hook($modal, "scaleX", 0.7);                                                                        // 772
        $modal.css({ top: options.starting_top });                                                                     // 773
        $modal.velocity({top: "10%", opacity: 1, scaleX: '1'}, {                                                       // 774
          duration: options.in_duration,                                                                               // 775
          queue: false,                                                                                                // 776
          ease: "easeOutCubic",                                                                                        // 777
          // Handle modal ready callback                                                                               // 778
          complete: function() {                                                                                       // 779
            if (typeof(options.ready) === "function") {                                                                // 780
              options.ready();                                                                                         // 781
            }                                                                                                          // 782
          }                                                                                                            // 783
        });                                                                                                            // 784
      }                                                                                                                // 785
                                                                                                                       // 786
                                                                                                                       // 787
    }                                                                                                                  // 788
  });                                                                                                                  // 789
                                                                                                                       // 790
  $.fn.extend({                                                                                                        // 791
    closeModal: function(options) {                                                                                    // 792
      var defaults = {                                                                                                 // 793
        out_duration: 250,                                                                                             // 794
        complete: undefined                                                                                            // 795
      },                                                                                                               // 796
      $modal = $(this),                                                                                                // 797
      overlayID = $modal.data('overlay-id'),                                                                           // 798
      $overlay = $('#' + overlayID);                                                                                   // 799
      $modal.removeClass('open');                                                                                      // 800
                                                                                                                       // 801
      options = $.extend(defaults, options);                                                                           // 802
                                                                                                                       // 803
      // Enable scrolling                                                                                              // 804
      $('body').css({                                                                                                  // 805
        overflow: '',                                                                                                  // 806
        width: ''                                                                                                      // 807
      });                                                                                                              // 808
                                                                                                                       // 809
      $modal.find('.modal-close').off('click.close');                                                                  // 810
      $(document).off('keyup.leanModal' + overlayID);                                                                  // 811
                                                                                                                       // 812
      $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});         // 813
                                                                                                                       // 814
                                                                                                                       // 815
      // Define Bottom Sheet animation                                                                                 // 816
      if ($modal.hasClass('bottom-sheet')) {                                                                           // 817
        $modal.velocity({bottom: "-100%", opacity: 0}, {                                                               // 818
          duration: options.out_duration,                                                                              // 819
          queue: false,                                                                                                // 820
          ease: "easeOutCubic",                                                                                        // 821
          // Handle modal ready callback                                                                               // 822
          complete: function() {                                                                                       // 823
            $overlay.css({display:"none"});                                                                            // 824
                                                                                                                       // 825
            // Call complete callback                                                                                  // 826
            if (typeof(options.complete) === "function") {                                                             // 827
              options.complete();                                                                                      // 828
            }                                                                                                          // 829
            $overlay.remove();                                                                                         // 830
            _stack--;                                                                                                  // 831
          }                                                                                                            // 832
        });                                                                                                            // 833
      }                                                                                                                // 834
      else {                                                                                                           // 835
        $modal.velocity(                                                                                               // 836
          { top: options.starting_top, opacity: 0, scaleX: 0.7}, {                                                     // 837
          duration: options.out_duration,                                                                              // 838
          complete:                                                                                                    // 839
            function() {                                                                                               // 840
                                                                                                                       // 841
              $(this).css('display', 'none');                                                                          // 842
              // Call complete callback                                                                                // 843
              if (typeof(options.complete) === "function") {                                                           // 844
                options.complete();                                                                                    // 845
              }                                                                                                        // 846
              $overlay.remove();                                                                                       // 847
              _stack--;                                                                                                // 848
            }                                                                                                          // 849
          }                                                                                                            // 850
        );                                                                                                             // 851
      }                                                                                                                // 852
    }                                                                                                                  // 853
  });                                                                                                                  // 854
                                                                                                                       // 855
  $.fn.extend({                                                                                                        // 856
    leanModal: function(option) {                                                                                      // 857
      return this.each(function() {                                                                                    // 858
                                                                                                                       // 859
        var defaults = {                                                                                               // 860
          starting_top: '4%'                                                                                           // 861
        },                                                                                                             // 862
        // Override defaults                                                                                           // 863
        options = $.extend(defaults, option);                                                                          // 864
                                                                                                                       // 865
        // Close Handlers                                                                                              // 866
        $(this).click(function(e) {                                                                                    // 867
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) /1.15;                                 // 868
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');                                         // 869
          $(modal_id).openModal(options);                                                                              // 870
          e.preventDefault();                                                                                          // 871
        }); // done set on click                                                                                       // 872
      }); // done return                                                                                               // 873
    }                                                                                                                  // 874
  });                                                                                                                  // 875
})(jQuery);                                                                                                            // 876
;(function ($) {                                                                                                       // 877
                                                                                                                       // 878
  $.fn.materialbox = function () {                                                                                     // 879
                                                                                                                       // 880
    return this.each(function() {                                                                                      // 881
                                                                                                                       // 882
      if ($(this).hasClass('initialized')) {                                                                           // 883
        return;                                                                                                        // 884
      }                                                                                                                // 885
                                                                                                                       // 886
      $(this).addClass('initialized');                                                                                 // 887
                                                                                                                       // 888
      var overlayActive = false;                                                                                       // 889
      var doneAnimating = true;                                                                                        // 890
      var inDuration = 275;                                                                                            // 891
      var outDuration = 200;                                                                                           // 892
      var origin = $(this);                                                                                            // 893
      var placeholder = $('<div></div>').addClass('material-placeholder');                                             // 894
      var originalWidth = 0;                                                                                           // 895
      var originalHeight = 0;                                                                                          // 896
      var ancestorsChanged;                                                                                            // 897
      var ancestor;                                                                                                    // 898
      origin.wrap(placeholder);                                                                                        // 899
                                                                                                                       // 900
                                                                                                                       // 901
      origin.on('click', function(){                                                                                   // 902
        var placeholder = origin.parent('.material-placeholder');                                                      // 903
        var windowWidth = window.innerWidth;                                                                           // 904
        var windowHeight = window.innerHeight;                                                                         // 905
        var originalWidth = origin.width();                                                                            // 906
        var originalHeight = origin.height();                                                                          // 907
                                                                                                                       // 908
                                                                                                                       // 909
        // If already modal, return to original                                                                        // 910
        if (doneAnimating === false) {                                                                                 // 911
          returnToOriginal();                                                                                          // 912
          return false;                                                                                                // 913
        }                                                                                                              // 914
        else if (overlayActive && doneAnimating===true) {                                                              // 915
          returnToOriginal();                                                                                          // 916
          return false;                                                                                                // 917
        }                                                                                                              // 918
                                                                                                                       // 919
                                                                                                                       // 920
        // Set states                                                                                                  // 921
        doneAnimating = false;                                                                                         // 922
        origin.addClass('active');                                                                                     // 923
        overlayActive = true;                                                                                          // 924
                                                                                                                       // 925
        // Set positioning for placeholder                                                                             // 926
        placeholder.css({                                                                                              // 927
          width: placeholder[0].getBoundingClientRect().width,                                                         // 928
          height: placeholder[0].getBoundingClientRect().height,                                                       // 929
          position: 'relative',                                                                                        // 930
          top: 0,                                                                                                      // 931
          left: 0                                                                                                      // 932
        });                                                                                                            // 933
                                                                                                                       // 934
        // Find ancestor with overflow: hidden; and remove it                                                          // 935
        ancestorsChanged = undefined;                                                                                  // 936
        ancestor = placeholder[0].parentNode;                                                                          // 937
        var count = 0;                                                                                                 // 938
        while (ancestor !== null && !$(ancestor).is(document)) {                                                       // 939
          var curr = $(ancestor);                                                                                      // 940
          if (curr.css('overflow') !== 'visible') {                                                                    // 941
            curr.css('overflow', 'visible');                                                                           // 942
            if (ancestorsChanged === undefined) {                                                                      // 943
              ancestorsChanged = curr;                                                                                 // 944
            }                                                                                                          // 945
            else {                                                                                                     // 946
              ancestorsChanged = ancestorsChanged.add(curr);                                                           // 947
            }                                                                                                          // 948
          }                                                                                                            // 949
          ancestor = ancestor.parentNode;                                                                              // 950
        }                                                                                                              // 951
                                                                                                                       // 952
        // Set css on origin                                                                                           // 953
        origin.css({position: 'absolute', 'z-index': 1000})                                                            // 954
        .data('width', originalWidth)                                                                                  // 955
        .data('height', originalHeight);                                                                               // 956
                                                                                                                       // 957
        // Add overlay                                                                                                 // 958
        var overlay = $('<div id="materialbox-overlay"></div>')                                                        // 959
          .css({                                                                                                       // 960
            opacity: 0                                                                                                 // 961
          })                                                                                                           // 962
          .click(function(){                                                                                           // 963
            if (doneAnimating === true)                                                                                // 964
            returnToOriginal();                                                                                        // 965
          });                                                                                                          // 966
          // Animate Overlay                                                                                           // 967
          // Put before in origin image to preserve z-index layering.                                                  // 968
          origin.before(overlay);                                                                                      // 969
          overlay.velocity({opacity: 1},                                                                               // 970
                           {duration: inDuration, queue: false, easing: 'easeOutQuad'} );                              // 971
                                                                                                                       // 972
        // Add and animate caption if it exists                                                                        // 973
        if (origin.data('caption') !== "") {                                                                           // 974
          var $photo_caption = $('<div class="materialbox-caption"></div>');                                           // 975
          $photo_caption.text(origin.data('caption'));                                                                 // 976
          $('body').append($photo_caption);                                                                            // 977
          $photo_caption.css({ "display": "inline" });                                                                 // 978
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});          // 979
        }                                                                                                              // 980
                                                                                                                       // 981
        // Resize Image                                                                                                // 982
        var ratio = 0;                                                                                                 // 983
        var widthPercent = originalWidth / windowWidth;                                                                // 984
        var heightPercent = originalHeight / windowHeight;                                                             // 985
        var newWidth = 0;                                                                                              // 986
        var newHeight = 0;                                                                                             // 987
                                                                                                                       // 988
        if (widthPercent > heightPercent) {                                                                            // 989
          ratio = originalHeight / originalWidth;                                                                      // 990
          newWidth = windowWidth * 0.9;                                                                                // 991
          newHeight = windowWidth * 0.9 * ratio;                                                                       // 992
        }                                                                                                              // 993
        else {                                                                                                         // 994
          ratio = originalWidth / originalHeight;                                                                      // 995
          newWidth = (windowHeight * 0.9) * ratio;                                                                     // 996
          newHeight = windowHeight * 0.9;                                                                              // 997
        }                                                                                                              // 998
                                                                                                                       // 999
        // Animate image + set z-index                                                                                 // 1000
        if(origin.hasClass('responsive-img')) {                                                                        // 1001
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,                 // 1002
            complete: function(){                                                                                      // 1003
              origin.css({left: 0, top: 0})                                                                            // 1004
              .velocity(                                                                                               // 1005
                {                                                                                                      // 1006
                  height: newHeight,                                                                                   // 1007
                  width: newWidth,                                                                                     // 1008
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },                                                                                                     // 1011
                {                                                                                                      // 1012
                  duration: inDuration,                                                                                // 1013
                  queue: false,                                                                                        // 1014
                  easing: 'easeOutQuad',                                                                               // 1015
                  complete: function(){doneAnimating = true;}                                                          // 1016
                }                                                                                                      // 1017
              );                                                                                                       // 1018
            } // End Complete                                                                                          // 1019
          }); // End Velocity                                                                                          // 1020
        }                                                                                                              // 1021
        else {                                                                                                         // 1022
          origin.css('left', 0)                                                                                        // 1023
          .css('top', 0)                                                                                               // 1024
          .velocity(                                                                                                   // 1025
            {                                                                                                          // 1026
              height: newHeight,                                                                                       // 1027
              width: newWidth,                                                                                         // 1028
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },                                                                                                         // 1031
            {                                                                                                          // 1032
              duration: inDuration,                                                                                    // 1033
              queue: false,                                                                                            // 1034
              easing: 'easeOutQuad',                                                                                   // 1035
              complete: function(){doneAnimating = true;}                                                              // 1036
            }                                                                                                          // 1037
            ); // End Velocity                                                                                         // 1038
        }                                                                                                              // 1039
                                                                                                                       // 1040
    }); // End origin on click                                                                                         // 1041
                                                                                                                       // 1042
                                                                                                                       // 1043
      // Return on scroll                                                                                              // 1044
      $(window).scroll(function() {                                                                                    // 1045
        if (overlayActive) {                                                                                           // 1046
          returnToOriginal();                                                                                          // 1047
        }                                                                                                              // 1048
      });                                                                                                              // 1049
                                                                                                                       // 1050
      // Return on ESC                                                                                                 // 1051
      $(document).keyup(function(e) {                                                                                  // 1052
                                                                                                                       // 1053
        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key                                                 // 1054
          if (overlayActive) {                                                                                         // 1055
            returnToOriginal();                                                                                        // 1056
          }                                                                                                            // 1057
        }                                                                                                              // 1058
      });                                                                                                              // 1059
                                                                                                                       // 1060
                                                                                                                       // 1061
      // This function returns the modaled image to the original spot                                                  // 1062
      function returnToOriginal() {                                                                                    // 1063
                                                                                                                       // 1064
          doneAnimating = false;                                                                                       // 1065
                                                                                                                       // 1066
          var placeholder = origin.parent('.material-placeholder');                                                    // 1067
          var windowWidth = window.innerWidth;                                                                         // 1068
          var windowHeight = window.innerHeight;                                                                       // 1069
          var originalWidth = origin.data('width');                                                                    // 1070
          var originalHeight = origin.data('height');                                                                  // 1071
                                                                                                                       // 1072
          origin.velocity("stop", true);                                                                               // 1073
          $('#materialbox-overlay').velocity("stop", true);                                                            // 1074
          $('.materialbox-caption').velocity("stop", true);                                                            // 1075
                                                                                                                       // 1076
                                                                                                                       // 1077
          $('#materialbox-overlay').velocity({opacity: 0}, {                                                           // 1078
            duration: outDuration, // Delay prevents animation overlapping                                             // 1079
            queue: false, easing: 'easeOutQuad',                                                                       // 1080
            complete: function(){                                                                                      // 1081
              // Remove Overlay                                                                                        // 1082
              overlayActive = false;                                                                                   // 1083
              $(this).remove();                                                                                        // 1084
            }                                                                                                          // 1085
          });                                                                                                          // 1086
                                                                                                                       // 1087
          // Resize Image                                                                                              // 1088
          origin.velocity(                                                                                             // 1089
            {                                                                                                          // 1090
              width: originalWidth,                                                                                    // 1091
              height: originalHeight,                                                                                  // 1092
              left: 0,                                                                                                 // 1093
              top: 0                                                                                                   // 1094
            },                                                                                                         // 1095
            {                                                                                                          // 1096
              duration: outDuration,                                                                                   // 1097
              queue: false, easing: 'easeOutQuad'                                                                      // 1098
            }                                                                                                          // 1099
          );                                                                                                           // 1100
                                                                                                                       // 1101
          // Remove Caption + reset css settings on image                                                              // 1102
          $('.materialbox-caption').velocity({opacity: 0}, {                                                           // 1103
            duration: outDuration, // Delay prevents animation overlapping                                             // 1104
            queue: false, easing: 'easeOutQuad',                                                                       // 1105
            complete: function(){                                                                                      // 1106
              placeholder.css({                                                                                        // 1107
                height: '',                                                                                            // 1108
                width: '',                                                                                             // 1109
                position: '',                                                                                          // 1110
                top: '',                                                                                               // 1111
                left: ''                                                                                               // 1112
              });                                                                                                      // 1113
                                                                                                                       // 1114
              origin.css({                                                                                             // 1115
                height: '',                                                                                            // 1116
                top: '',                                                                                               // 1117
                left: '',                                                                                              // 1118
                width: '',                                                                                             // 1119
                'max-width': '',                                                                                       // 1120
                position: '',                                                                                          // 1121
                'z-index': ''                                                                                          // 1122
              });                                                                                                      // 1123
                                                                                                                       // 1124
              // Remove class                                                                                          // 1125
              origin.removeClass('active');                                                                            // 1126
              doneAnimating = true;                                                                                    // 1127
              $(this).remove();                                                                                        // 1128
                                                                                                                       // 1129
              // Remove overflow overrides on ancestors                                                                // 1130
              if (ancestorsChanged) {                                                                                  // 1131
                ancestorsChanged.css('overflow', '');                                                                  // 1132
              }                                                                                                        // 1133
            }                                                                                                          // 1134
          });                                                                                                          // 1135
                                                                                                                       // 1136
        }                                                                                                              // 1137
        });                                                                                                            // 1138
};                                                                                                                     // 1139
                                                                                                                       // 1140
$(document).ready(function(){                                                                                          // 1141
  $('.materialboxed').materialbox();                                                                                   // 1142
});                                                                                                                    // 1143
                                                                                                                       // 1144
}( jQuery ));                                                                                                          // 1145
;(function ($) {                                                                                                       // 1146
                                                                                                                       // 1147
    $.fn.parallax = function () {                                                                                      // 1148
      var window_width = $(window).width();                                                                            // 1149
      // Parallax Scripts                                                                                              // 1150
      return this.each(function(i) {                                                                                   // 1151
        var $this = $(this);                                                                                           // 1152
        $this.addClass('parallax');                                                                                    // 1153
                                                                                                                       // 1154
        function updateParallax(initial) {                                                                             // 1155
          var container_height;                                                                                        // 1156
          if (window_width < 601) {                                                                                    // 1157
            container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();                 // 1158
          }                                                                                                            // 1159
          else {                                                                                                       // 1160
            container_height = ($this.height() > 0) ? $this.height() : 500;                                            // 1161
          }                                                                                                            // 1162
          var $img = $this.children("img").first();                                                                    // 1163
          var img_height = $img.height();                                                                              // 1164
          var parallax_dist = img_height - container_height;                                                           // 1165
          var bottom = $this.offset().top + container_height;                                                          // 1166
          var top = $this.offset().top;                                                                                // 1167
          var scrollTop = $(window).scrollTop();                                                                       // 1168
          var windowHeight = window.innerHeight;                                                                       // 1169
          var windowBottom = scrollTop + windowHeight;                                                                 // 1170
          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);                              // 1171
          var parallax = Math.round((parallax_dist * percentScrolled));                                                // 1172
                                                                                                                       // 1173
          if (initial) {                                                                                               // 1174
            $img.css('display', 'block');                                                                              // 1175
          }                                                                                                            // 1176
          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {                                            // 1177
            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");                                          // 1178
          }                                                                                                            // 1179
                                                                                                                       // 1180
        }                                                                                                              // 1181
                                                                                                                       // 1182
        // Wait for image load                                                                                         // 1183
        $this.children("img").one("load", function() {                                                                 // 1184
          updateParallax(true);                                                                                        // 1185
        }).each(function() {                                                                                           // 1186
          if(this.complete) $(this).load();                                                                            // 1187
        });                                                                                                            // 1188
                                                                                                                       // 1189
        $(window).scroll(function() {                                                                                  // 1190
          window_width = $(window).width();                                                                            // 1191
          updateParallax(false);                                                                                       // 1192
        });                                                                                                            // 1193
                                                                                                                       // 1194
        $(window).resize(function() {                                                                                  // 1195
          window_width = $(window).width();                                                                            // 1196
          updateParallax(false);                                                                                       // 1197
        });                                                                                                            // 1198
                                                                                                                       // 1199
      });                                                                                                              // 1200
                                                                                                                       // 1201
    };                                                                                                                 // 1202
}( jQuery ));;(function ($) {                                                                                          // 1203
                                                                                                                       // 1204
  var methods = {                                                                                                      // 1205
    init : function() {                                                                                                // 1206
      return this.each(function() {                                                                                    // 1207
                                                                                                                       // 1208
      // For each set of tabs, we want to keep track of                                                                // 1209
      // which tab is active and its associated content                                                                // 1210
      var $this = $(this),                                                                                             // 1211
          window_width = $(window).width();                                                                            // 1212
                                                                                                                       // 1213
      $this.width('100%');                                                                                             // 1214
      var $active, $content, $links = $this.find('li.tab a'),                                                          // 1215
          $tabs_width = $this.width(),                                                                                 // 1216
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,                                    // 1217
          $index = 0;                                                                                                  // 1218
                                                                                                                       // 1219
      // If the location.hash matches one of the links, use that as the active tab.                                    // 1220
      $active = $($links.filter('[href="'+location.hash+'"]'));                                                        // 1221
                                                                                                                       // 1222
      // If no match is found, use the first link or any with class 'active' as the initial active tab.                // 1223
      if ($active.length === 0) {                                                                                      // 1224
          $active = $(this).find('li.tab a.active').first();                                                           // 1225
      }                                                                                                                // 1226
      if ($active.length === 0) {                                                                                      // 1227
        $active = $(this).find('li.tab a').first();                                                                    // 1228
      }                                                                                                                // 1229
                                                                                                                       // 1230
      $active.addClass('active');                                                                                      // 1231
      $index = $links.index($active);                                                                                  // 1232
      if ($index < 0) {                                                                                                // 1233
        $index = 0;                                                                                                    // 1234
      }                                                                                                                // 1235
                                                                                                                       // 1236
      if ($active[0] !== undefined) {                                                                                  // 1237
        $content = $($active[0].hash);                                                                                 // 1238
      }                                                                                                                // 1239
                                                                                                                       // 1240
      // append indicator then set indicator width to tab width                                                        // 1241
      $this.append('<div class="indicator"></div>');                                                                   // 1242
      var $indicator = $this.find('.indicator');                                                                       // 1243
      if ($this.is(":visible")) {                                                                                      // 1244
        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});                                          // 1245
        $indicator.css({"left": $index * $tab_width});                                                                 // 1246
      }                                                                                                                // 1247
      $(window).resize(function () {                                                                                   // 1248
        $tabs_width = $this.width();                                                                                   // 1249
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;                                      // 1250
        if ($index < 0) {                                                                                              // 1251
          $index = 0;                                                                                                  // 1252
        }                                                                                                              // 1253
        if ($tab_width !== 0 && $tabs_width !== 0) {                                                                   // 1254
          $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});                                        // 1255
          $indicator.css({"left": $index * $tab_width});                                                               // 1256
        }                                                                                                              // 1257
      });                                                                                                              // 1258
                                                                                                                       // 1259
      // Hide the remaining content                                                                                    // 1260
      $links.not($active).each(function () {                                                                           // 1261
        $(this.hash).hide();                                                                                           // 1262
      });                                                                                                              // 1263
                                                                                                                       // 1264
                                                                                                                       // 1265
      // Bind the click event handler                                                                                  // 1266
      $this.on('click', 'a', function(e) {                                                                             // 1267
        if ($(this).parent().hasClass('disabled')) {                                                                   // 1268
          e.preventDefault();                                                                                          // 1269
          return;                                                                                                      // 1270
        }                                                                                                              // 1271
                                                                                                                       // 1272
        $tabs_width = $this.width();                                                                                   // 1273
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;                                      // 1274
                                                                                                                       // 1275
        // Make the old tab inactive.                                                                                  // 1276
        $active.removeClass('active');                                                                                 // 1277
        if ($content !== undefined) {                                                                                  // 1278
          $content.hide();                                                                                             // 1279
        }                                                                                                              // 1280
                                                                                                                       // 1281
        // Update the variables with the new link and content                                                          // 1282
        $active = $(this);                                                                                             // 1283
        $content = $(this.hash);                                                                                       // 1284
        $links = $this.find('li.tab a');                                                                               // 1285
                                                                                                                       // 1286
        // Make the tab active.                                                                                        // 1287
        $active.addClass('active');                                                                                    // 1288
        var $prev_index = $index;                                                                                      // 1289
        $index = $links.index($(this));                                                                                // 1290
        if ($index < 0) {                                                                                              // 1291
          $index = 0;                                                                                                  // 1292
        }                                                                                                              // 1293
        // Change url to current tab                                                                                   // 1294
        // window.location.hash = $active.attr('href');                                                                // 1295
                                                                                                                       // 1296
        if ($content !== undefined) {                                                                                  // 1297
          $content.show();                                                                                             // 1298
        }                                                                                                              // 1299
                                                                                                                       // 1300
        // Update indicator                                                                                            // 1301
        if (($index - $prev_index) >= 0) {                                                                             // 1302
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
                                                                                                                       // 1305
        }                                                                                                              // 1306
        else {                                                                                                         // 1307
          $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});   // 1308
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
        }                                                                                                              // 1310
                                                                                                                       // 1311
        // Prevent the anchor's default click action                                                                   // 1312
        e.preventDefault();                                                                                            // 1313
      });                                                                                                              // 1314
    });                                                                                                                // 1315
                                                                                                                       // 1316
    },                                                                                                                 // 1317
    select_tab : function( id ) {                                                                                      // 1318
      this.find('a[href="#' + id + '"]').trigger('click');                                                             // 1319
    }                                                                                                                  // 1320
  };                                                                                                                   // 1321
                                                                                                                       // 1322
  $.fn.tabs = function(methodOrOptions) {                                                                              // 1323
    if ( methods[methodOrOptions] ) {                                                                                  // 1324
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                      // 1325
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                           // 1326
      // Default to "init"                                                                                             // 1327
      return methods.init.apply( this, arguments );                                                                    // 1328
    } else {                                                                                                           // 1329
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );                                   // 1330
    }                                                                                                                  // 1331
  };                                                                                                                   // 1332
                                                                                                                       // 1333
  $(document).ready(function(){                                                                                        // 1334
    $('ul.tabs').tabs();                                                                                               // 1335
  });                                                                                                                  // 1336
}( jQuery ));                                                                                                          // 1337
;(function ($) {                                                                                                       // 1338
    $.fn.tooltip = function (options) {                                                                                // 1339
        var timeout = null,                                                                                            // 1340
        margin = 5;                                                                                                    // 1341
                                                                                                                       // 1342
      // Defaults                                                                                                      // 1343
      var defaults = {                                                                                                 // 1344
        delay: 350                                                                                                     // 1345
      };                                                                                                               // 1346
                                                                                                                       // 1347
      // Remove tooltip from the activator                                                                             // 1348
      if (options === "remove") {                                                                                      // 1349
        this.each(function(){                                                                                          // 1350
          $('#' + $(this).attr('data-tooltip-id')).remove();                                                           // 1351
          $(this).off('mouseenter.tooltip mouseleave.tooltip');                                                        // 1352
        });                                                                                                            // 1353
        return false;                                                                                                  // 1354
      }                                                                                                                // 1355
                                                                                                                       // 1356
      options = $.extend(defaults, options);                                                                           // 1357
                                                                                                                       // 1358
                                                                                                                       // 1359
      return this.each(function(){                                                                                     // 1360
        var tooltipId = Materialize.guid();                                                                            // 1361
        var origin = $(this);                                                                                          // 1362
        origin.attr('data-tooltip-id', tooltipId);                                                                     // 1363
                                                                                                                       // 1364
        // Create Text span                                                                                            // 1365
        var tooltip_text = $('<span></span>').text(origin.attr('data-tooltip'));                                       // 1366
                                                                                                                       // 1367
        // Create tooltip                                                                                              // 1368
        var newTooltip = $('<div></div>');                                                                             // 1369
        newTooltip.addClass('material-tooltip').append(tooltip_text)                                                   // 1370
          .appendTo($('body'))                                                                                         // 1371
          .attr('id', tooltipId);                                                                                      // 1372
                                                                                                                       // 1373
        var backdrop = $('<div></div>').addClass('backdrop');                                                          // 1374
        backdrop.appendTo(newTooltip);                                                                                 // 1375
        backdrop.css({ top: 0, left:0 });                                                                              // 1376
                                                                                                                       // 1377
                                                                                                                       // 1378
      //Destroy previously binded events                                                                               // 1379
      origin.off('mouseenter.tooltip mouseleave.tooltip');                                                             // 1380
      // Mouse In                                                                                                      // 1381
      var started = false, timeoutRef;                                                                                 // 1382
      origin.on({                                                                                                      // 1383
        'mouseenter.tooltip': function(e) {                                                                            // 1384
          var tooltip_delay = origin.attr('data-delay');                                                               // 1385
          tooltip_delay = (tooltip_delay === undefined || tooltip_delay === '') ?                                      // 1386
              options.delay : tooltip_delay;                                                                           // 1387
          timeoutRef = setTimeout(function(){                                                                          // 1388
            started = true;                                                                                            // 1389
            newTooltip.velocity('stop');                                                                               // 1390
            backdrop.velocity('stop');                                                                                 // 1391
            newTooltip.css({ display: 'block', left: '0px', top: '0px' });                                             // 1392
                                                                                                                       // 1393
            // Set Tooltip text                                                                                        // 1394
            newTooltip.children('span').text(origin.attr('data-tooltip'));                                             // 1395
                                                                                                                       // 1396
            // Tooltip positioning                                                                                     // 1397
            var originWidth = origin.outerWidth();                                                                     // 1398
            var originHeight = origin.outerHeight();                                                                   // 1399
            var tooltipPosition =  origin.attr('data-position');                                                       // 1400
            var tooltipHeight = newTooltip.outerHeight();                                                              // 1401
            var tooltipWidth = newTooltip.outerWidth();                                                                // 1402
            var tooltipVerticalMovement = '0px';                                                                       // 1403
            var tooltipHorizontalMovement = '0px';                                                                     // 1404
            var scale_factor = 8;                                                                                      // 1405
            var targetTop, targetLeft, newCoordinates;                                                                 // 1406
                                                                                                                       // 1407
            if (tooltipPosition === "top") {                                                                           // 1408
              // Top Position                                                                                          // 1409
              targetTop = origin.offset().top - tooltipHeight - margin;                                                // 1410
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;                                      // 1411
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);             // 1412
                                                                                                                       // 1413
              tooltipVerticalMovement = '-10px';                                                                       // 1414
              backdrop.css({                                                                                           // 1415
                borderRadius: '14px 14px 0 0',                                                                         // 1416
                transformOrigin: '50% 90%',                                                                            // 1417
                marginTop: tooltipHeight,                                                                              // 1418
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)                                                    // 1419
              });                                                                                                      // 1420
            }                                                                                                          // 1421
            // Left Position                                                                                           // 1422
            else if (tooltipPosition === "left") {                                                                     // 1423
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;                                      // 1424
              targetLeft =  origin.offset().left - tooltipWidth - margin;                                              // 1425
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);             // 1426
                                                                                                                       // 1427
              tooltipHorizontalMovement = '-10px';                                                                     // 1428
              backdrop.css({                                                                                           // 1429
                width: '14px',                                                                                         // 1430
                height: '14px',                                                                                        // 1431
                borderRadius: '14px 0 0 14px',                                                                         // 1432
                transformOrigin: '95% 50%',                                                                            // 1433
                marginTop: tooltipHeight/2,                                                                            // 1434
                marginLeft: tooltipWidth                                                                               // 1435
              });                                                                                                      // 1436
            }                                                                                                          // 1437
            // Right Position                                                                                          // 1438
            else if (tooltipPosition === "right") {                                                                    // 1439
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;                                      // 1440
              targetLeft = origin.offset().left + originWidth + margin;                                                // 1441
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);             // 1442
                                                                                                                       // 1443
              tooltipHorizontalMovement = '+10px';                                                                     // 1444
              backdrop.css({                                                                                           // 1445
                width: '14px',                                                                                         // 1446
                height: '14px',                                                                                        // 1447
                borderRadius: '0 14px 14px 0',                                                                         // 1448
                transformOrigin: '5% 50%',                                                                             // 1449
                marginTop: tooltipHeight/2,                                                                            // 1450
                marginLeft: '0px'                                                                                      // 1451
              });                                                                                                      // 1452
            }                                                                                                          // 1453
            else {                                                                                                     // 1454
              // Bottom Position                                                                                       // 1455
              targetTop = origin.offset().top + origin.outerHeight() + margin;                                         // 1456
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;                                      // 1457
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);             // 1458
              tooltipVerticalMovement = '+10px';                                                                       // 1459
              backdrop.css({                                                                                           // 1460
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)                                                    // 1461
              });                                                                                                      // 1462
            }                                                                                                          // 1463
                                                                                                                       // 1464
            // Set tooptip css placement                                                                               // 1465
            newTooltip.css({                                                                                           // 1466
              top: newCoordinates.y,                                                                                   // 1467
              left: newCoordinates.x                                                                                   // 1468
            });                                                                                                        // 1469
                                                                                                                       // 1470
            // Calculate Scale to fill                                                                                 // 1471
            scale_factor = tooltipWidth / 8;                                                                           // 1472
            if (scale_factor < 8) {                                                                                    // 1473
              scale_factor = 8;                                                                                        // 1474
            }                                                                                                          // 1475
            if (tooltipPosition === "right" || tooltipPosition === "left") {                                           // 1476
              scale_factor = tooltipWidth / 10;                                                                        // 1477
              if (scale_factor < 6)                                                                                    // 1478
                scale_factor = 6;                                                                                      // 1479
            }                                                                                                          // 1480
                                                                                                                       // 1481
            newTooltip.velocity({ marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});                                       // 1483
            backdrop.css({ display: 'block' })                                                                         // 1484
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})                                            // 1485
              .velocity({scale: scale_factor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});      // 1486
                                                                                                                       // 1487
                                                                                                                       // 1488
          }, tooltip_delay); // End Interval                                                                           // 1489
                                                                                                                       // 1490
        // Mouse Out                                                                                                   // 1491
        },                                                                                                             // 1492
        'mouseleave.tooltip': function(){                                                                              // 1493
          // Reset State                                                                                               // 1494
          started = false;                                                                                             // 1495
          clearTimeout(timeoutRef);                                                                                    // 1496
                                                                                                                       // 1497
          // Animate back                                                                                              // 1498
          setTimeout(function() {                                                                                      // 1499
            if (started != true) {                                                                                     // 1500
              newTooltip.velocity({                                                                                    // 1501
                opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false});                             // 1502
              backdrop.velocity({opacity: 0, scale: 1}, {                                                              // 1503
                duration:225,                                                                                          // 1504
                queue: false,                                                                                          // 1505
                complete: function(){                                                                                  // 1506
                  backdrop.css('display', 'none');                                                                     // 1507
                  newTooltip.css('display', 'none');                                                                   // 1508
                  started = false;}                                                                                    // 1509
              });                                                                                                      // 1510
            }                                                                                                          // 1511
          },225);                                                                                                      // 1512
        }                                                                                                              // 1513
        });                                                                                                            // 1514
    });                                                                                                                // 1515
  };                                                                                                                   // 1516
                                                                                                                       // 1517
  var repositionWithinScreen = function(x, y, width, height) {                                                         // 1518
    var newX = x                                                                                                       // 1519
    var newY = y;                                                                                                      // 1520
                                                                                                                       // 1521
    if (newX < 0) {                                                                                                    // 1522
      newX = 4;                                                                                                        // 1523
    } else if (newX + width > window.innerWidth) {                                                                     // 1524
      newX -= newX + width - window.innerWidth;                                                                        // 1525
    }                                                                                                                  // 1526
                                                                                                                       // 1527
    if (newY < 0) {                                                                                                    // 1528
      newY = 4;                                                                                                        // 1529
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {                                             // 1530
      newY -= newY + height - window.innerHeight;                                                                      // 1531
    }                                                                                                                  // 1532
                                                                                                                       // 1533
    return {x: newX, y: newY};                                                                                         // 1534
  };                                                                                                                   // 1535
                                                                                                                       // 1536
  $(document).ready(function(){                                                                                        // 1537
     $('.tooltipped').tooltip();                                                                                       // 1538
   });                                                                                                                 // 1539
}( jQuery ));                                                                                                          // 1540
;/*!                                                                                                                   // 1541
 * Waves v0.6.4                                                                                                        // 1542
 * http://fian.my.id/Waves                                                                                             // 1543
 *                                                                                                                     // 1544
 * Copyright 2014 Alfiana E. Sibuea and other contributors                                                             // 1545
 * Released under the MIT license                                                                                      // 1546
 * https://github.com/fians/Waves/blob/master/LICENSE                                                                  // 1547
 */                                                                                                                    // 1548
                                                                                                                       // 1549
;(function(window) {                                                                                                   // 1550
    'use strict';                                                                                                      // 1551
                                                                                                                       // 1552
    var Waves = Waves || {};                                                                                           // 1553
    var $$ = document.querySelectorAll.bind(document);                                                                 // 1554
                                                                                                                       // 1555
    // Find exact position of element                                                                                  // 1556
    function isWindow(obj) {                                                                                           // 1557
        return obj !== null && obj === obj.window;                                                                     // 1558
    }                                                                                                                  // 1559
                                                                                                                       // 1560
    function getWindow(elem) {                                                                                         // 1561
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;                                        // 1562
    }                                                                                                                  // 1563
                                                                                                                       // 1564
    function offset(elem) {                                                                                            // 1565
        var docElem, win,                                                                                              // 1566
            box = {top: 0, left: 0},                                                                                   // 1567
            doc = elem && elem.ownerDocument;                                                                          // 1568
                                                                                                                       // 1569
        docElem = doc.documentElement;                                                                                 // 1570
                                                                                                                       // 1571
        if (typeof elem.getBoundingClientRect !== typeof undefined) {                                                  // 1572
            box = elem.getBoundingClientRect();                                                                        // 1573
        }                                                                                                              // 1574
        win = getWindow(doc);                                                                                          // 1575
        return {                                                                                                       // 1576
            top: box.top + win.pageYOffset - docElem.clientTop,                                                        // 1577
            left: box.left + win.pageXOffset - docElem.clientLeft                                                      // 1578
        };                                                                                                             // 1579
    }                                                                                                                  // 1580
                                                                                                                       // 1581
    function convertStyle(obj) {                                                                                       // 1582
        var style = '';                                                                                                // 1583
                                                                                                                       // 1584
        for (var a in obj) {                                                                                           // 1585
            if (obj.hasOwnProperty(a)) {                                                                               // 1586
                style += (a + ':' + obj[a] + ';');                                                                     // 1587
            }                                                                                                          // 1588
        }                                                                                                              // 1589
                                                                                                                       // 1590
        return style;                                                                                                  // 1591
    }                                                                                                                  // 1592
                                                                                                                       // 1593
    var Effect = {                                                                                                     // 1594
                                                                                                                       // 1595
        // Effect delay                                                                                                // 1596
        duration: 750,                                                                                                 // 1597
                                                                                                                       // 1598
        show: function(e, element) {                                                                                   // 1599
                                                                                                                       // 1600
            // Disable right click                                                                                     // 1601
            if (e.button === 2) {                                                                                      // 1602
                return false;                                                                                          // 1603
            }                                                                                                          // 1604
                                                                                                                       // 1605
            var el = element || this;                                                                                  // 1606
                                                                                                                       // 1607
            // Create ripple                                                                                           // 1608
            var ripple = document.createElement('div');                                                                // 1609
            ripple.className = 'waves-ripple';                                                                         // 1610
            el.appendChild(ripple);                                                                                    // 1611
                                                                                                                       // 1612
            // Get click coordinate and element witdh                                                                  // 1613
            var pos         = offset(el);                                                                              // 1614
            var relativeY   = (e.pageY - pos.top);                                                                     // 1615
            var relativeX   = (e.pageX - pos.left);                                                                    // 1616
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';                                              // 1617
                                                                                                                       // 1618
            // Support for touch devices                                                                               // 1619
            if ('touches' in e) {                                                                                      // 1620
              relativeY   = (e.touches[0].pageY - pos.top);                                                            // 1621
              relativeX   = (e.touches[0].pageX - pos.left);                                                           // 1622
            }                                                                                                          // 1623
                                                                                                                       // 1624
            // Attach data to element                                                                                  // 1625
            ripple.setAttribute('data-hold', Date.now());                                                              // 1626
            ripple.setAttribute('data-scale', scale);                                                                  // 1627
            ripple.setAttribute('data-x', relativeX);                                                                  // 1628
            ripple.setAttribute('data-y', relativeY);                                                                  // 1629
                                                                                                                       // 1630
            // Set ripple position                                                                                     // 1631
            var rippleStyle = {                                                                                        // 1632
                'top': relativeY+'px',                                                                                 // 1633
                'left': relativeX+'px'                                                                                 // 1634
            };                                                                                                         // 1635
                                                                                                                       // 1636
            ripple.className = ripple.className + ' waves-notransition';                                               // 1637
            ripple.setAttribute('style', convertStyle(rippleStyle));                                                   // 1638
            ripple.className = ripple.className.replace('waves-notransition', '');                                     // 1639
                                                                                                                       // 1640
            // Scale the ripple                                                                                        // 1641
            rippleStyle['-webkit-transform'] = scale;                                                                  // 1642
            rippleStyle['-moz-transform'] = scale;                                                                     // 1643
            rippleStyle['-ms-transform'] = scale;                                                                      // 1644
            rippleStyle['-o-transform'] = scale;                                                                       // 1645
            rippleStyle.transform = scale;                                                                             // 1646
            rippleStyle.opacity   = '1';                                                                               // 1647
                                                                                                                       // 1648
            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';                                       // 1649
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';                                       // 1650
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';                                       // 1651
            rippleStyle['transition-duration']         = Effect.duration + 'ms';                                       // 1652
                                                                                                                       // 1653
            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';            // 1654
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';            // 1655
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';            // 1656
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';            // 1657
                                                                                                                       // 1658
            ripple.setAttribute('style', convertStyle(rippleStyle));                                                   // 1659
        },                                                                                                             // 1660
                                                                                                                       // 1661
        hide: function(e) {                                                                                            // 1662
            TouchHandler.touchup(e);                                                                                   // 1663
                                                                                                                       // 1664
            var el = this;                                                                                             // 1665
            var width = el.clientWidth * 1.4;                                                                          // 1666
                                                                                                                       // 1667
            // Get first ripple                                                                                        // 1668
            var ripple = null;                                                                                         // 1669
            var ripples = el.getElementsByClassName('waves-ripple');                                                   // 1670
            if (ripples.length > 0) {                                                                                  // 1671
                ripple = ripples[ripples.length - 1];                                                                  // 1672
            } else {                                                                                                   // 1673
                return false;                                                                                          // 1674
            }                                                                                                          // 1675
                                                                                                                       // 1676
            var relativeX   = ripple.getAttribute('data-x');                                                           // 1677
            var relativeY   = ripple.getAttribute('data-y');                                                           // 1678
            var scale       = ripple.getAttribute('data-scale');                                                       // 1679
                                                                                                                       // 1680
            // Get delay beetween mousedown and mouse leave                                                            // 1681
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));                                          // 1682
            var delay = 350 - diff;                                                                                    // 1683
                                                                                                                       // 1684
            if (delay < 0) {                                                                                           // 1685
                delay = 0;                                                                                             // 1686
            }                                                                                                          // 1687
                                                                                                                       // 1688
            // Fade out ripple after delay                                                                             // 1689
            setTimeout(function() {                                                                                    // 1690
                var style = {                                                                                          // 1691
                    'top': relativeY+'px',                                                                             // 1692
                    'left': relativeX+'px',                                                                            // 1693
                    'opacity': '0',                                                                                    // 1694
                                                                                                                       // 1695
                    // Duration                                                                                        // 1696
                    '-webkit-transition-duration': Effect.duration + 'ms',                                             // 1697
                    '-moz-transition-duration': Effect.duration + 'ms',                                                // 1698
                    '-o-transition-duration': Effect.duration + 'ms',                                                  // 1699
                    'transition-duration': Effect.duration + 'ms',                                                     // 1700
                    '-webkit-transform': scale,                                                                        // 1701
                    '-moz-transform': scale,                                                                           // 1702
                    '-ms-transform': scale,                                                                            // 1703
                    '-o-transform': scale,                                                                             // 1704
                    'transform': scale,                                                                                // 1705
                };                                                                                                     // 1706
                                                                                                                       // 1707
                ripple.setAttribute('style', convertStyle(style));                                                     // 1708
                                                                                                                       // 1709
                setTimeout(function() {                                                                                // 1710
                    try {                                                                                              // 1711
                        el.removeChild(ripple);                                                                        // 1712
                    } catch(e) {                                                                                       // 1713
                        return false;                                                                                  // 1714
                    }                                                                                                  // 1715
                }, Effect.duration);                                                                                   // 1716
            }, delay);                                                                                                 // 1717
        },                                                                                                             // 1718
                                                                                                                       // 1719
        // Little hack to make <input> can perform waves effect                                                        // 1720
        wrapInput: function(elements) {                                                                                // 1721
            for (var a = 0; a < elements.length; a++) {                                                                // 1722
                var el = elements[a];                                                                                  // 1723
                                                                                                                       // 1724
                if (el.tagName.toLowerCase() === 'input') {                                                            // 1725
                    var parent = el.parentNode;                                                                        // 1726
                                                                                                                       // 1727
                    // If input already have parent just pass through                                                  // 1728
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {     // 1729
                        continue;                                                                                      // 1730
                    }                                                                                                  // 1731
                                                                                                                       // 1732
                    // Put element class and style to the specified parent                                             // 1733
                    var wrapper = document.createElement('i');                                                         // 1734
                    wrapper.className = el.className + ' waves-input-wrapper';                                         // 1735
                                                                                                                       // 1736
                    var elementStyle = el.getAttribute('style');                                                       // 1737
                                                                                                                       // 1738
                    if (!elementStyle) {                                                                               // 1739
                        elementStyle = '';                                                                             // 1740
                    }                                                                                                  // 1741
                                                                                                                       // 1742
                    wrapper.setAttribute('style', elementStyle);                                                       // 1743
                                                                                                                       // 1744
                    el.className = 'waves-button-input';                                                               // 1745
                    el.removeAttribute('style');                                                                       // 1746
                                                                                                                       // 1747
                    // Put element as child                                                                            // 1748
                    parent.replaceChild(wrapper, el);                                                                  // 1749
                    wrapper.appendChild(el);                                                                           // 1750
                }                                                                                                      // 1751
            }                                                                                                          // 1752
        }                                                                                                              // 1753
    };                                                                                                                 // 1754
                                                                                                                       // 1755
                                                                                                                       // 1756
    /**                                                                                                                // 1757
     * Disable mousedown event for 500ms during and after touch                                                        // 1758
     */                                                                                                                // 1759
    var TouchHandler = {                                                                                               // 1760
        /* uses an integer rather than bool so there's no issues with                                                  // 1761
         * needing to clear timeouts if another touch event occurred                                                   // 1762
         * within the 500ms. Cannot mouseup between touchstart and                                                     // 1763
         * touchend, nor in the 500ms after touchend. */                                                               // 1764
        touches: 0,                                                                                                    // 1765
        allowEvent: function(e) {                                                                                      // 1766
            var allow = true;                                                                                          // 1767
                                                                                                                       // 1768
            if (e.type === 'touchstart') {                                                                             // 1769
                TouchHandler.touches += 1; //push                                                                      // 1770
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {                                            // 1771
                setTimeout(function() {                                                                                // 1772
                    if (TouchHandler.touches > 0) {                                                                    // 1773
                        TouchHandler.touches -= 1; //pop after 500ms                                                   // 1774
                    }                                                                                                  // 1775
                }, 500);                                                                                               // 1776
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {                                           // 1777
                allow = false;                                                                                         // 1778
            }                                                                                                          // 1779
                                                                                                                       // 1780
            return allow;                                                                                              // 1781
        },                                                                                                             // 1782
        touchup: function(e) {                                                                                         // 1783
            TouchHandler.allowEvent(e);                                                                                // 1784
        }                                                                                                              // 1785
    };                                                                                                                 // 1786
                                                                                                                       // 1787
                                                                                                                       // 1788
    /**                                                                                                                // 1789
     * Delegated click handler for .waves-effect element.                                                              // 1790
     * returns null when .waves-effect element not in "click tree"                                                     // 1791
     */                                                                                                                // 1792
    function getWavesEffectElement(e) {                                                                                // 1793
        if (TouchHandler.allowEvent(e) === false) {                                                                    // 1794
            return null;                                                                                               // 1795
        }                                                                                                              // 1796
                                                                                                                       // 1797
        var element = null;                                                                                            // 1798
        var target = e.target || e.srcElement;                                                                         // 1799
                                                                                                                       // 1800
        while (target.parentElement !== null) {                                                                        // 1801
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {                  // 1802
                element = target;                                                                                      // 1803
                break;                                                                                                 // 1804
            } else if (target.classList.contains('waves-effect')) {                                                    // 1805
                element = target;                                                                                      // 1806
                break;                                                                                                 // 1807
            }                                                                                                          // 1808
            target = target.parentElement;                                                                             // 1809
        }                                                                                                              // 1810
                                                                                                                       // 1811
        return element;                                                                                                // 1812
    }                                                                                                                  // 1813
                                                                                                                       // 1814
    /**                                                                                                                // 1815
     * Bubble the click and show effect if .waves-effect elem was found                                                // 1816
     */                                                                                                                // 1817
    function showEffect(e) {                                                                                           // 1818
        var element = getWavesEffectElement(e);                                                                        // 1819
                                                                                                                       // 1820
        if (element !== null) {                                                                                        // 1821
            Effect.show(e, element);                                                                                   // 1822
                                                                                                                       // 1823
            if ('ontouchstart' in window) {                                                                            // 1824
                element.addEventListener('touchend', Effect.hide, false);                                              // 1825
                element.addEventListener('touchcancel', Effect.hide, false);                                           // 1826
            }                                                                                                          // 1827
                                                                                                                       // 1828
            element.addEventListener('mouseup', Effect.hide, false);                                                   // 1829
            element.addEventListener('mouseleave', Effect.hide, false);                                                // 1830
        }                                                                                                              // 1831
    }                                                                                                                  // 1832
                                                                                                                       // 1833
    Waves.displayEffect = function(options) {                                                                          // 1834
        options = options || {};                                                                                       // 1835
                                                                                                                       // 1836
        if ('duration' in options) {                                                                                   // 1837
            Effect.duration = options.duration;                                                                        // 1838
        }                                                                                                              // 1839
                                                                                                                       // 1840
        //Wrap input inside <i> tag                                                                                    // 1841
        Effect.wrapInput($$('.waves-effect'));                                                                         // 1842
                                                                                                                       // 1843
        if ('ontouchstart' in window) {                                                                                // 1844
            document.body.addEventListener('touchstart', showEffect, false);                                           // 1845
        }                                                                                                              // 1846
                                                                                                                       // 1847
        document.body.addEventListener('mousedown', showEffect, false);                                                // 1848
    };                                                                                                                 // 1849
                                                                                                                       // 1850
    /**                                                                                                                // 1851
     * Attach Waves to an input element (or any element which doesn't                                                  // 1852
     * bubble mouseup/mousedown events).                                                                               // 1853
     *   Intended to be used with dynamically loaded forms/inputs, or                                                  // 1854
     * where the user doesn't want a delegated click handler.                                                          // 1855
     */                                                                                                                // 1856
    Waves.attach = function(element) {                                                                                 // 1857
        //FUTURE: automatically add waves classes and allow users                                                      // 1858
        // to specify them with an options param? Eg. light/classic/button                                             // 1859
        if (element.tagName.toLowerCase() === 'input') {                                                               // 1860
            Effect.wrapInput([element]);                                                                               // 1861
            element = element.parentElement;                                                                           // 1862
        }                                                                                                              // 1863
                                                                                                                       // 1864
        if ('ontouchstart' in window) {                                                                                // 1865
            element.addEventListener('touchstart', showEffect, false);                                                 // 1866
        }                                                                                                              // 1867
                                                                                                                       // 1868
        element.addEventListener('mousedown', showEffect, false);                                                      // 1869
    };                                                                                                                 // 1870
                                                                                                                       // 1871
    window.Waves = Waves;                                                                                              // 1872
                                                                                                                       // 1873
    document.addEventListener('DOMContentLoaded', function() {                                                         // 1874
        Waves.displayEffect();                                                                                         // 1875
    }, false);                                                                                                         // 1876
                                                                                                                       // 1877
})(window);                                                                                                            // 1878
;Materialize.toast = function (message, displayLength, className, completeCallback) {                                  // 1879
    className = className || "";                                                                                       // 1880
                                                                                                                       // 1881
    var container = document.getElementById('toast-container');                                                        // 1882
                                                                                                                       // 1883
    // Create toast container if it does not exist                                                                     // 1884
    if (container === null) {                                                                                          // 1885
        // create notification container                                                                               // 1886
        container = document.createElement('div');                                                                     // 1887
        container.id = 'toast-container';                                                                              // 1888
        document.body.appendChild(container);                                                                          // 1889
    }                                                                                                                  // 1890
                                                                                                                       // 1891
    // Select and append toast                                                                                         // 1892
    var newToast = createToast(message);                                                                               // 1893
                                                                                                                       // 1894
    // only append toast if message is not undefined                                                                   // 1895
    if(message){                                                                                                       // 1896
        container.appendChild(newToast);                                                                               // 1897
    }                                                                                                                  // 1898
                                                                                                                       // 1899
    newToast.style.top = '35px';                                                                                       // 1900
    newToast.style.opacity = 0;                                                                                        // 1901
                                                                                                                       // 1902
    // Animate toast in                                                                                                // 1903
    Vel(newToast, { "top" : "0px", opacity: 1 }, {duration: 300,                                                       // 1904
      easing: 'easeOutCubic',                                                                                          // 1905
      queue: false});                                                                                                  // 1906
                                                                                                                       // 1907
    // Allows timer to be pause while being panned                                                                     // 1908
    var timeLeft = displayLength;                                                                                      // 1909
    var counterInterval = setInterval (function(){                                                                     // 1910
                                                                                                                       // 1911
                                                                                                                       // 1912
      if (newToast.parentNode === null)                                                                                // 1913
        window.clearInterval(counterInterval);                                                                         // 1914
                                                                                                                       // 1915
      // If toast is not being dragged, decrease its time remaining                                                    // 1916
      if (!newToast.classList.contains('panning')) {                                                                   // 1917
        timeLeft -= 20;                                                                                                // 1918
      }                                                                                                                // 1919
                                                                                                                       // 1920
      if (timeLeft <= 0) {                                                                                             // 1921
        // Animate toast out                                                                                           // 1922
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,                                             // 1923
            easing: 'easeOutExpo',                                                                                     // 1924
            queue: false,                                                                                              // 1925
            complete: function(){                                                                                      // 1926
              // Call the optional callback                                                                            // 1927
              if(typeof(completeCallback) === "function")                                                              // 1928
                completeCallback();                                                                                    // 1929
              // Remove toast after it times out                                                                       // 1930
              this[0].parentNode.removeChild(this[0]);                                                                 // 1931
            }                                                                                                          // 1932
          });                                                                                                          // 1933
        window.clearInterval(counterInterval);                                                                         // 1934
      }                                                                                                                // 1935
    }, 20);                                                                                                            // 1936
                                                                                                                       // 1937
                                                                                                                       // 1938
                                                                                                                       // 1939
    function createToast(html) {                                                                                       // 1940
                                                                                                                       // 1941
        // Create toast                                                                                                // 1942
        var toast = document.createElement('div');                                                                     // 1943
        toast.classList.add('toast');                                                                                  // 1944
        if (className) {                                                                                               // 1945
            var classes = className.split(' ');                                                                        // 1946
                                                                                                                       // 1947
            for (var i = 0, count = classes.length; i < count; i++) {                                                  // 1948
                toast.classList.add(classes[i]);                                                                       // 1949
            }                                                                                                          // 1950
        }                                                                                                              // 1951
        // If type of parameter is HTML Element                                                                        // 1952
        if ( typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName==="string"
) {                                                                                                                    // 1954
          toast.appendChild(html);                                                                                     // 1955
        }                                                                                                              // 1956
        else if (html instanceof jQuery) {                                                                             // 1957
          // Check if it is jQuery object                                                                              // 1958
          toast.appendChild(html[0]);                                                                                  // 1959
        }                                                                                                              // 1960
        else {                                                                                                         // 1961
          // Insert as text;                                                                                           // 1962
          toast.innerHTML = html;                                                                                      // 1963
        }                                                                                                              // 1964
        // Bind hammer                                                                                                 // 1965
        var hammerHandler = new Hammer(toast, {prevent_default: false});                                               // 1966
        hammerHandler.on('pan', function(e) {                                                                          // 1967
          var deltaX = e.deltaX;                                                                                       // 1968
          var activationDistance = 80;                                                                                 // 1969
                                                                                                                       // 1970
          // Change toast state                                                                                        // 1971
          if (!toast.classList.contains('panning')){                                                                   // 1972
            toast.classList.add('panning');                                                                            // 1973
          }                                                                                                            // 1974
                                                                                                                       // 1975
          var opacityPercent = 1-Math.abs(deltaX / activationDistance);                                                // 1976
          if (opacityPercent < 0)                                                                                      // 1977
            opacityPercent = 0;                                                                                        // 1978
                                                                                                                       // 1979
          Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});   // 1980
                                                                                                                       // 1981
        });                                                                                                            // 1982
                                                                                                                       // 1983
        hammerHandler.on('panend', function(e) {                                                                       // 1984
          var deltaX = e.deltaX;                                                                                       // 1985
          var activationDistance = 80;                                                                                 // 1986
                                                                                                                       // 1987
          // If toast dragged past activation point                                                                    // 1988
          if (Math.abs(deltaX) > activationDistance) {                                                                 // 1989
            Vel(toast, {marginTop: '-40px'}, { duration: 375,                                                          // 1990
                easing: 'easeOutExpo',                                                                                 // 1991
                queue: false,                                                                                          // 1992
                complete: function(){                                                                                  // 1993
                  if(typeof(completeCallback) === "function") {                                                        // 1994
                    completeCallback();                                                                                // 1995
                  }                                                                                                    // 1996
                  toast.parentNode.removeChild(toast);                                                                 // 1997
                }                                                                                                      // 1998
            });                                                                                                        // 1999
                                                                                                                       // 2000
          } else {                                                                                                     // 2001
            toast.classList.remove('panning');                                                                         // 2002
            // Put toast back into original position                                                                   // 2003
            Vel(toast, { left: 0, opacity: 1 }, { duration: 300,                                                       // 2004
              easing: 'easeOutExpo',                                                                                   // 2005
              queue: false                                                                                             // 2006
            });                                                                                                        // 2007
                                                                                                                       // 2008
          }                                                                                                            // 2009
        });                                                                                                            // 2010
                                                                                                                       // 2011
        return toast;                                                                                                  // 2012
    }                                                                                                                  // 2013
};                                                                                                                     // 2014
;(function ($) {                                                                                                       // 2015
                                                                                                                       // 2016
  var methods = {                                                                                                      // 2017
    init : function(options) {                                                                                         // 2018
      var defaults = {                                                                                                 // 2019
        menuWidth: 240,                                                                                                // 2020
        edge: 'left',                                                                                                  // 2021
        closeOnClick: false                                                                                            // 2022
      };                                                                                                               // 2023
      options = $.extend(defaults, options);                                                                           // 2024
                                                                                                                       // 2025
      $(this).each(function(){                                                                                         // 2026
        var $this = $(this);                                                                                           // 2027
        var menu_id = $("#"+ $this.attr('data-activates'));                                                            // 2028
                                                                                                                       // 2029
        // Set to width                                                                                                // 2030
        if (options.menuWidth != 240) {                                                                                // 2031
          menu_id.css('width', options.menuWidth);                                                                     // 2032
        }                                                                                                              // 2033
                                                                                                                       // 2034
        // Add Touch Area                                                                                              // 2035
        var dragTarget = $('<div class="drag-target"></div>');                                                         // 2036
        $('body').append(dragTarget);                                                                                  // 2037
                                                                                                                       // 2038
        if (options.edge == 'left') {                                                                                  // 2039
          menu_id.css('transform', 'translateX(-100%)');                                                               // 2040
          dragTarget.css({'left': 0}); // Add Touch Area                                                               // 2041
        }                                                                                                              // 2042
        else {                                                                                                         // 2043
          menu_id.addClass('right-aligned') // Change text-alignment to right                                          // 2044
            .css('transform', 'translateX(100%)');                                                                     // 2045
          dragTarget.css({'right': 0}); // Add Touch Area                                                              // 2046
        }                                                                                                              // 2047
                                                                                                                       // 2048
        // If fixed sidenav, bring menu out                                                                            // 2049
        if (menu_id.hasClass('fixed')) {                                                                               // 2050
            if (window.innerWidth > 992) {                                                                             // 2051
              menu_id.css('transform', 'translateX(0)');                                                               // 2052
            }                                                                                                          // 2053
          }                                                                                                            // 2054
                                                                                                                       // 2055
        // Window resize to reset on large screens fixed                                                               // 2056
        if (menu_id.hasClass('fixed')) {                                                                               // 2057
          $(window).resize( function() {                                                                               // 2058
            if (window.innerWidth > 992) {                                                                             // 2059
              // Close menu if window is resized bigger than 992 and user has fixed sidenav                            // 2060
              if ($('#sidenav-overlay').length != 0 && menuOut) {                                                      // 2061
                removeMenu(true);                                                                                      // 2062
              }                                                                                                        // 2063
              else {                                                                                                   // 2064
                // menu_id.removeAttr('style');                                                                        // 2065
                menu_id.css('transform', 'translateX(0%)');                                                            // 2066
                // menu_id.css('width', options.menuWidth);                                                            // 2067
              }                                                                                                        // 2068
            }                                                                                                          // 2069
            else if (menuOut === false){                                                                               // 2070
              if (options.edge === 'left') {                                                                           // 2071
                menu_id.css('transform', 'translateX(-100%)');                                                         // 2072
              } else {                                                                                                 // 2073
                menu_id.css('transform', 'translateX(100%)');                                                          // 2074
              }                                                                                                        // 2075
                                                                                                                       // 2076
            }                                                                                                          // 2077
                                                                                                                       // 2078
          });                                                                                                          // 2079
        }                                                                                                              // 2080
                                                                                                                       // 2081
        // if closeOnClick, then add close event for all a tags in side sideNav                                        // 2082
        if (options.closeOnClick === true) {                                                                           // 2083
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){                                      // 2084
            removeMenu();                                                                                              // 2085
          });                                                                                                          // 2086
        }                                                                                                              // 2087
                                                                                                                       // 2088
        function removeMenu(restoreNav) {                                                                              // 2089
          panning = false;                                                                                             // 2090
          menuOut = false;                                                                                             // 2091
          // Reenable scrolling                                                                                        // 2092
          $('body').css({                                                                                              // 2093
            overflow: '',                                                                                              // 2094
            width: ''                                                                                                  // 2095
          });                                                                                                          // 2096
                                                                                                                       // 2097
          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200,                                                 // 2098
              queue: false, easing: 'easeOutQuad',                                                                     // 2099
            complete: function() {                                                                                     // 2100
              $(this).remove();                                                                                        // 2101
            } });                                                                                                      // 2102
          if (options.edge === 'left') {                                                                               // 2103
            // Reset phantom div                                                                                       // 2104
            dragTarget.css({width: '', right: '', left: '0'});                                                         // 2105
            menu_id.velocity(                                                                                          // 2106
              {'translateX': '-100%'},                                                                                 // 2107
              { duration: 200,                                                                                         // 2108
                queue: false,                                                                                          // 2109
                easing: 'easeOutCubic',                                                                                // 2110
                complete: function() {                                                                                 // 2111
                  if (restoreNav === true) {                                                                           // 2112
                    // Restore Fixed sidenav                                                                           // 2113
                    menu_id.removeAttr('style');                                                                       // 2114
                    menu_id.css('width', options.menuWidth);                                                           // 2115
                  }                                                                                                    // 2116
                }                                                                                                      // 2117
                                                                                                                       // 2118
            });                                                                                                        // 2119
          }                                                                                                            // 2120
          else {                                                                                                       // 2121
            // Reset phantom div                                                                                       // 2122
            dragTarget.css({width: '', right: '0', left: ''});                                                         // 2123
            menu_id.velocity(                                                                                          // 2124
              {'translateX': '100%'},                                                                                  // 2125
              { duration: 200,                                                                                         // 2126
                queue: false,                                                                                          // 2127
                easing: 'easeOutCubic',                                                                                // 2128
                complete: function() {                                                                                 // 2129
                  if (restoreNav === true) {                                                                           // 2130
                    // Restore Fixed sidenav                                                                           // 2131
                    menu_id.removeAttr('style');                                                                       // 2132
                    menu_id.css('width', options.menuWidth);                                                           // 2133
                  }                                                                                                    // 2134
                }                                                                                                      // 2135
              });                                                                                                      // 2136
          }                                                                                                            // 2137
        }                                                                                                              // 2138
                                                                                                                       // 2139
                                                                                                                       // 2140
                                                                                                                       // 2141
        // Touch Event                                                                                                 // 2142
        var panning = false;                                                                                           // 2143
        var menuOut = false;                                                                                           // 2144
                                                                                                                       // 2145
        dragTarget.on('click', function(){                                                                             // 2146
          removeMenu();                                                                                                // 2147
        });                                                                                                            // 2148
                                                                                                                       // 2149
        dragTarget.hammer({                                                                                            // 2150
          prevent_default: false                                                                                       // 2151
        }).bind('pan', function(e) {                                                                                   // 2152
                                                                                                                       // 2153
          if (e.gesture.pointerType == "touch") {                                                                      // 2154
                                                                                                                       // 2155
            var direction = e.gesture.direction;                                                                       // 2156
            var x = e.gesture.center.x;                                                                                // 2157
            var y = e.gesture.center.y;                                                                                // 2158
            var velocityX = e.gesture.velocityX;                                                                       // 2159
                                                                                                                       // 2160
            // Disable Scrolling                                                                                       // 2161
            var $body = $('body');                                                                                     // 2162
            var oldWidth = $body.innerWidth();                                                                         // 2163
            $body.css('overflow', 'hidden');                                                                           // 2164
            $body.width(oldWidth);                                                                                     // 2165
                                                                                                                       // 2166
            // If overlay does not exist, create one and if it is clicked, close menu                                  // 2167
            if ($('#sidenav-overlay').length === 0) {                                                                  // 2168
              var overlay = $('<div id="sidenav-overlay"></div>');                                                     // 2169
              overlay.css('opacity', 0).click( function(){                                                             // 2170
                removeMenu();                                                                                          // 2171
              });                                                                                                      // 2172
              $('body').append(overlay);                                                                               // 2173
            }                                                                                                          // 2174
                                                                                                                       // 2175
            // Keep within boundaries                                                                                  // 2176
            if (options.edge === 'left') {                                                                             // 2177
              if (x > options.menuWidth) { x = options.menuWidth; }                                                    // 2178
              else if (x < 0) { x = 0; }                                                                               // 2179
            }                                                                                                          // 2180
                                                                                                                       // 2181
            if (options.edge === 'left') {                                                                             // 2182
              // Left Direction                                                                                        // 2183
              if (x < (options.menuWidth / 2)) { menuOut = false; }                                                    // 2184
              // Right Direction                                                                                       // 2185
              else if (x >= (options.menuWidth / 2)) { menuOut = true; }                                               // 2186
              menu_id.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');                               // 2187
            }                                                                                                          // 2188
            else {                                                                                                     // 2189
              // Left Direction                                                                                        // 2190
              if (x < (window.innerWidth - options.menuWidth / 2)) {                                                   // 2191
                menuOut = true;                                                                                        // 2192
              }                                                                                                        // 2193
              // Right Direction                                                                                       // 2194
              else if (x >= (window.innerWidth - options.menuWidth / 2)) {                                             // 2195
               menuOut = false;                                                                                        // 2196
             }                                                                                                         // 2197
              var rightPos = (x - options.menuWidth / 2);                                                              // 2198
              if (rightPos < 0) {                                                                                      // 2199
                rightPos = 0;                                                                                          // 2200
              }                                                                                                        // 2201
                                                                                                                       // 2202
              menu_id.css('transform', 'translateX(' + rightPos + 'px)');                                              // 2203
            }                                                                                                          // 2204
                                                                                                                       // 2205
                                                                                                                       // 2206
            // Percentage overlay                                                                                      // 2207
            var overlayPerc;                                                                                           // 2208
            if (options.edge === 'left') {                                                                             // 2209
              overlayPerc = x / options.menuWidth;                                                                     // 2210
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
            }                                                                                                          // 2212
            else {                                                                                                     // 2213
              overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);                                     // 2214
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
            }                                                                                                          // 2216
          }                                                                                                            // 2217
                                                                                                                       // 2218
        }).bind('panend', function(e) {                                                                                // 2219
                                                                                                                       // 2220
          if (e.gesture.pointerType == "touch") {                                                                      // 2221
            var velocityX = e.gesture.velocityX;                                                                       // 2222
            var x = e.gesture.center.x;                                                                                // 2223
            var leftPos = x - options.menuWidth;                                                                       // 2224
            var rightPos = x - options.menuWidth / 2;                                                                  // 2225
            if (leftPos > 0 ) {                                                                                        // 2226
              leftPos = 0;                                                                                             // 2227
            }                                                                                                          // 2228
            if (rightPos < 0) {                                                                                        // 2229
              rightPos = 0;                                                                                            // 2230
            }                                                                                                          // 2231
            panning = false;                                                                                           // 2232
                                                                                                                       // 2233
            if (options.edge === 'left') {                                                                             // 2234
              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut                       // 2235
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {                                                 // 2236
                if (leftPos != 0) {                                                                                    // 2237
                  menu_id.velocity({'translateX': [0, leftPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                }                                                                                                      // 2239
                                                                                                                       // 2240
                // menu_id.css({'translateX': 0});                                                                     // 2241
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});    // 2242
                dragTarget.css({width: '50%', right: 0, left: ''});                                                    // 2243
              }                                                                                                        // 2244
              else if (!menuOut || velocityX > 0.3) {                                                                  // 2245
                // Enable Scrolling                                                                                    // 2246
                $('body').css({                                                                                        // 2247
                  overflow: '',                                                                                        // 2248
                  width: ''                                                                                            // 2249
                });                                                                                                    // 2250
                // Slide menu closed                                                                                   // 2251
                menu_id.velocity({'translateX': [-1 * options.menuWidth - 10, leftPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',     // 2253
                  complete: function () {                                                                              // 2254
                    $(this).remove();                                                                                  // 2255
                  }});                                                                                                 // 2256
                dragTarget.css({width: '10px', right: '', left: 0});                                                   // 2257
              }                                                                                                        // 2258
            }                                                                                                          // 2259
            else {                                                                                                     // 2260
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {                                                 // 2261
                menu_id.velocity({'translateX': [0, rightPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});    // 2263
                dragTarget.css({width: '50%', right: '', left: 0});                                                    // 2264
              }                                                                                                        // 2265
              else if (!menuOut || velocityX < -0.3) {                                                                 // 2266
                // Enable Scrolling                                                                                    // 2267
                $('body').css({                                                                                        // 2268
                  overflow: '',                                                                                        // 2269
                  width: ''                                                                                            // 2270
                });                                                                                                    // 2271
                                                                                                                       // 2272
                // Slide menu closed                                                                                   // 2273
                menu_id.velocity({'translateX': [options.menuWidth + 10, rightPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',     // 2275
                  complete: function () {                                                                              // 2276
                    $(this).remove();                                                                                  // 2277
                  }});                                                                                                 // 2278
                dragTarget.css({width: '10px', right: 0, left: ''});                                                   // 2279
              }                                                                                                        // 2280
            }                                                                                                          // 2281
                                                                                                                       // 2282
          }                                                                                                            // 2283
        });                                                                                                            // 2284
                                                                                                                       // 2285
          $this.click(function() {                                                                                     // 2286
            if (menuOut === true) {                                                                                    // 2287
              menuOut = false;                                                                                         // 2288
              panning = false;                                                                                         // 2289
              removeMenu();                                                                                            // 2290
            }                                                                                                          // 2291
            else {                                                                                                     // 2292
                                                                                                                       // 2293
              // Disable Scrolling                                                                                     // 2294
              var $body = $('body');                                                                                   // 2295
              var oldWidth = $body.innerWidth();                                                                       // 2296
              $body.css('overflow', 'hidden');                                                                         // 2297
              $body.width(oldWidth);                                                                                   // 2298
                                                                                                                       // 2299
              // Push current drag target on top of DOM tree                                                           // 2300
              $('body').append(dragTarget);                                                                            // 2301
                                                                                                                       // 2302
              if (options.edge === 'left') {                                                                           // 2303
                dragTarget.css({width: '50%', right: 0, left: ''});                                                    // 2304
                menu_id.velocity({'translateX': [0, -1 * options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }                                                                                                        // 2306
              else {                                                                                                   // 2307
                dragTarget.css({width: '50%', right: '', left: 0});                                                    // 2308
                menu_id.velocity({'translateX': [0, options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }                                                                                                        // 2310
                                                                                                                       // 2311
              var overlay = $('<div id="sidenav-overlay"></div>');                                                     // 2312
              overlay.css('opacity', 0)                                                                                // 2313
              .click(function(){                                                                                       // 2314
                menuOut = false;                                                                                       // 2315
                panning = false;                                                                                       // 2316
                removeMenu();                                                                                          // 2317
                overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',                    // 2318
                  complete: function() {                                                                               // 2319
                    $(this).remove();                                                                                  // 2320
                  } });                                                                                                // 2321
                                                                                                                       // 2322
              });                                                                                                      // 2323
              $('body').append(overlay);                                                                               // 2324
              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',                      // 2325
                complete: function () {                                                                                // 2326
                  menuOut = true;                                                                                      // 2327
                  panning = false;                                                                                     // 2328
                }                                                                                                      // 2329
              });                                                                                                      // 2330
            }                                                                                                          // 2331
                                                                                                                       // 2332
            return false;                                                                                              // 2333
          });                                                                                                          // 2334
      });                                                                                                              // 2335
                                                                                                                       // 2336
                                                                                                                       // 2337
    },                                                                                                                 // 2338
    show : function() {                                                                                                // 2339
      this.trigger('click');                                                                                           // 2340
    },                                                                                                                 // 2341
    hide : function() {                                                                                                // 2342
      $('#sidenav-overlay').trigger('click');                                                                          // 2343
    }                                                                                                                  // 2344
  };                                                                                                                   // 2345
                                                                                                                       // 2346
                                                                                                                       // 2347
    $.fn.sideNav = function(methodOrOptions) {                                                                         // 2348
      if ( methods[methodOrOptions] ) {                                                                                // 2349
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                    // 2350
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                         // 2351
        // Default to "init"                                                                                           // 2352
        return methods.init.apply( this, arguments );                                                                  // 2353
      } else {                                                                                                         // 2354
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );                                 // 2355
      }                                                                                                                // 2356
    }; // Plugin end                                                                                                   // 2357
}( jQuery ));                                                                                                          // 2358
;/**                                                                                                                   // 2359
 * Extend jquery with a scrollspy plugin.                                                                              // 2360
 * This watches the window scroll and fires events when elements are scrolled into viewport.                           // 2361
 *                                                                                                                     // 2362
 * throttle() and getTime() taken from Underscore.js                                                                   // 2363
 * https://github.com/jashkenas/underscore                                                                             // 2364
 *                                                                                                                     // 2365
 * @author Copyright 2013 John Smart                                                                                   // 2366
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE                                            // 2367
 * @see https://github.com/thesmart                                                                                    // 2368
 * @version 0.1.2                                                                                                      // 2369
 */                                                                                                                    // 2370
(function($) {                                                                                                         // 2371
                                                                                                                       // 2372
	var jWindow = $(window);                                                                                              // 2373
	var elements = [];                                                                                                    // 2374
	var elementsInView = [];                                                                                              // 2375
	var isSpying = false;                                                                                                 // 2376
	var ticks = 0;                                                                                                        // 2377
	var unique_id = 1;                                                                                                    // 2378
	var offset = {                                                                                                        // 2379
		top : 0,                                                                                                             // 2380
		right : 0,                                                                                                           // 2381
		bottom : 0,                                                                                                          // 2382
		left : 0,                                                                                                            // 2383
	}                                                                                                                     // 2384
                                                                                                                       // 2385
	/**                                                                                                                   // 2386
	 * Find elements that are within the boundary                                                                         // 2387
	 * @param {number} top                                                                                                // 2388
	 * @param {number} right                                                                                              // 2389
	 * @param {number} bottom                                                                                             // 2390
	 * @param {number} left                                                                                               // 2391
	 * @return {jQuery}		A collection of elements                                                                         // 2392
	 */                                                                                                                   // 2393
	function findElements(top, right, bottom, left) {                                                                     // 2394
		var hits = $();                                                                                                      // 2395
		$.each(elements, function(i, element) {                                                                              // 2396
			if (element.height() > 0) {                                                                                         // 2397
				var elTop = element.offset().top,                                                                                  // 2398
					elLeft = element.offset().left,                                                                                   // 2399
					elRight = elLeft + element.width(),                                                                               // 2400
					elBottom = elTop + element.height();                                                                              // 2401
                                                                                                                       // 2402
				var isIntersect = !(elLeft > right ||                                                                              // 2403
					elRight < left ||                                                                                                 // 2404
					elTop > bottom ||                                                                                                 // 2405
					elBottom < top);                                                                                                  // 2406
                                                                                                                       // 2407
				if (isIntersect) {                                                                                                 // 2408
					hits.push(element);                                                                                               // 2409
				}                                                                                                                  // 2410
			}                                                                                                                   // 2411
		});                                                                                                                  // 2412
                                                                                                                       // 2413
		return hits;                                                                                                         // 2414
	}                                                                                                                     // 2415
                                                                                                                       // 2416
                                                                                                                       // 2417
	/**                                                                                                                   // 2418
	 * Called when the user scrolls the window                                                                            // 2419
	 */                                                                                                                   // 2420
	function onScroll() {                                                                                                 // 2421
		// unique tick id                                                                                                    // 2422
		++ticks;                                                                                                             // 2423
                                                                                                                       // 2424
		// viewport rectangle                                                                                                // 2425
		var top = jWindow.scrollTop(),                                                                                       // 2426
			left = jWindow.scrollLeft(),                                                                                        // 2427
			right = left + jWindow.width(),                                                                                     // 2428
			bottom = top + jWindow.height();                                                                                    // 2429
                                                                                                                       // 2430
		// determine which elements are in view                                                                              // 2431
//        + 60 accounts for fixed nav                                                                                  // 2432
		var intersections = findElements(top+offset.top + 200, right+offset.right, bottom+offset.bottom, left+offset.left);  // 2433
		$.each(intersections, function(i, element) {                                                                         // 2434
                                                                                                                       // 2435
			var lastTick = element.data('scrollSpy:ticks');                                                                     // 2436
			if (typeof lastTick != 'number') {                                                                                  // 2437
				// entered into view                                                                                               // 2438
				element.triggerHandler('scrollSpy:enter');                                                                         // 2439
			}                                                                                                                   // 2440
                                                                                                                       // 2441
			// update tick id                                                                                                   // 2442
			element.data('scrollSpy:ticks', ticks);                                                                             // 2443
		});                                                                                                                  // 2444
                                                                                                                       // 2445
		// determine which elements are no longer in view                                                                    // 2446
		$.each(elementsInView, function(i, element) {                                                                        // 2447
			var lastTick = element.data('scrollSpy:ticks');                                                                     // 2448
			if (typeof lastTick == 'number' && lastTick !== ticks) {                                                            // 2449
				// exited from view                                                                                                // 2450
				element.triggerHandler('scrollSpy:exit');                                                                          // 2451
				element.data('scrollSpy:ticks', null);                                                                             // 2452
			}                                                                                                                   // 2453
		});                                                                                                                  // 2454
                                                                                                                       // 2455
		// remember elements in view for next tick                                                                           // 2456
		elementsInView = intersections;                                                                                      // 2457
	}                                                                                                                     // 2458
                                                                                                                       // 2459
	/**                                                                                                                   // 2460
	 * Called when window is resized                                                                                      // 2461
	*/                                                                                                                    // 2462
	function onWinSize() {                                                                                                // 2463
		jWindow.trigger('scrollSpy:winSize');                                                                                // 2464
	}                                                                                                                     // 2465
                                                                                                                       // 2466
	/**                                                                                                                   // 2467
	 * Get time in ms                                                                                                     // 2468
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE                                               // 2469
	 * @type {function}                                                                                                   // 2470
	 * @return {number}                                                                                                   // 2471
	 */                                                                                                                   // 2472
	var getTime = (Date.now || function () {                                                                              // 2473
		return new Date().getTime();                                                                                         // 2474
	});                                                                                                                   // 2475
                                                                                                                       // 2476
	/**                                                                                                                   // 2477
	 * Returns a function, that, when invoked, will only be triggered at most once                                        // 2478
	 * during a given window of time. Normally, the throttled function will run                                           // 2479
	 * as much as it can, without ever going more than once per `wait` duration;                                          // 2480
	 * but if you'd like to disable the execution on the leading edge, pass                                               // 2481
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.                                              // 2482
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE                                                // 2483
	 * @param {function} func                                                                                             // 2484
	 * @param {number} wait                                                                                               // 2485
	 * @param {Object=} options                                                                                           // 2486
	 * @returns {Function}                                                                                                // 2487
	 */                                                                                                                   // 2488
	function throttle(func, wait, options) {                                                                              // 2489
		var context, args, result;                                                                                           // 2490
		var timeout = null;                                                                                                  // 2491
		var previous = 0;                                                                                                    // 2492
		options || (options = {});                                                                                           // 2493
		var later = function () {                                                                                            // 2494
			previous = options.leading === false ? 0 : getTime();                                                               // 2495
			timeout = null;                                                                                                     // 2496
			result = func.apply(context, args);                                                                                 // 2497
			context = args = null;                                                                                              // 2498
		};                                                                                                                   // 2499
		return function () {                                                                                                 // 2500
			var now = getTime();                                                                                                // 2501
			if (!previous && options.leading === false) previous = now;                                                         // 2502
			var remaining = wait - (now - previous);                                                                            // 2503
			context = this;                                                                                                     // 2504
			args = arguments;                                                                                                   // 2505
			if (remaining <= 0) {                                                                                               // 2506
				clearTimeout(timeout);                                                                                             // 2507
				timeout = null;                                                                                                    // 2508
				previous = now;                                                                                                    // 2509
				result = func.apply(context, args);                                                                                // 2510
				context = args = null;                                                                                             // 2511
			} else if (!timeout && options.trailing !== false) {                                                                // 2512
				timeout = setTimeout(later, remaining);                                                                            // 2513
			}                                                                                                                   // 2514
			return result;                                                                                                      // 2515
		};                                                                                                                   // 2516
	};                                                                                                                    // 2517
                                                                                                                       // 2518
	/**                                                                                                                   // 2519
	 * Enables ScrollSpy using a selector                                                                                 // 2520
	 * @param {jQuery|string} selector  The elements collection, or a selector                                            // 2521
	 * @param {Object=} options	Optional.                                                                                 // 2522
        throttle : number -> scrollspy throttling. Default: 100 ms                                                     // 2523
        offsetTop : number -> offset from top. Default: 0                                                              // 2524
        offsetRight : number -> offset from right. Default: 0                                                          // 2525
        offsetBottom : number -> offset from bottom. Default: 0                                                        // 2526
        offsetLeft : number -> offset from left. Default: 0                                                            // 2527
	 * @returns {jQuery}                                                                                                  // 2528
	 */                                                                                                                   // 2529
	$.scrollSpy = function(selector, options) {                                                                           // 2530
		var visible = [];                                                                                                    // 2531
		selector = $(selector);                                                                                              // 2532
		selector.each(function(i, element) {                                                                                 // 2533
			elements.push($(element));                                                                                          // 2534
			$(element).data("scrollSpy:id", i);                                                                                 // 2535
			// Smooth scroll to section                                                                                         // 2536
		  $('a[href="#' + $(element).attr('id') + '"]').click(function(e) {                                                  // 2537
		    e.preventDefault();                                                                                              // 2538
		    var offset = $(this.hash).offset().top + 1;                                                                      // 2539
                                                                                                                       // 2540
//          offset - 200 allows elements near bottom of page to scroll                                                 // 2541
			                                                                                                                    // 2542
	    	$('html, body').animate({ scrollTop: offset - 200 }, {duration: 400, queue: false, easing: 'easeOutCubic'});     // 2543
			                                                                                                                    // 2544
		  });                                                                                                                // 2545
		});                                                                                                                  // 2546
		options = options || {                                                                                               // 2547
			throttle: 100                                                                                                       // 2548
		};                                                                                                                   // 2549
                                                                                                                       // 2550
		offset.top = options.offsetTop || 0;                                                                                 // 2551
		offset.right = options.offsetRight || 0;                                                                             // 2552
		offset.bottom = options.offsetBottom || 0;                                                                           // 2553
		offset.left = options.offsetLeft || 0;                                                                               // 2554
                                                                                                                       // 2555
		var throttledScroll = throttle(onScroll, options.throttle || 100);                                                   // 2556
		var readyScroll = function(){                                                                                        // 2557
			$(document).ready(throttledScroll);                                                                                 // 2558
		};                                                                                                                   // 2559
                                                                                                                       // 2560
		if (!isSpying) {                                                                                                     // 2561
			jWindow.on('scroll', readyScroll);                                                                                  // 2562
			jWindow.on('resize', readyScroll);                                                                                  // 2563
			isSpying = true;                                                                                                    // 2564
		}                                                                                                                    // 2565
                                                                                                                       // 2566
		// perform a scan once, after current execution context, and after dom is ready                                      // 2567
		setTimeout(readyScroll, 0);                                                                                          // 2568
                                                                                                                       // 2569
                                                                                                                       // 2570
		selector.on('scrollSpy:enter', function() {                                                                          // 2571
			visible = $.grep(visible, function(value) {                                                                         // 2572
	      return value.height() != 0;                                                                                     // 2573
	    });                                                                                                               // 2574
                                                                                                                       // 2575
			var $this = $(this);                                                                                                // 2576
                                                                                                                       // 2577
			if (visible[0]) {                                                                                                   // 2578
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');                                               // 2579
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {                                                // 2580
					visible.unshift($(this));                                                                                         // 2581
				}                                                                                                                  // 2582
				else {                                                                                                             // 2583
					visible.push($(this));                                                                                            // 2584
				}                                                                                                                  // 2585
			}                                                                                                                   // 2586
			else {                                                                                                              // 2587
				visible.push($(this));                                                                                             // 2588
			}                                                                                                                   // 2589
                                                                                                                       // 2590
                                                                                                                       // 2591
			$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');                                                   // 2592
		});                                                                                                                  // 2593
		selector.on('scrollSpy:exit', function() {                                                                           // 2594
			visible = $.grep(visible, function(value) {                                                                         // 2595
	      return value.height() != 0;                                                                                     // 2596
	    });                                                                                                               // 2597
                                                                                                                       // 2598
			if (visible[0]) {                                                                                                   // 2599
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');                                               // 2600
				var $this = $(this);                                                                                               // 2601
				visible = $.grep(visible, function(value) {                                                                        // 2602
	        return value.attr('id') != $this.attr('id');                                                                  // 2603
	      });                                                                                                             // 2604
	      if (visible[0]) { // Check if empty                                                                             // 2605
					$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');                                                 // 2606
	      }                                                                                                               // 2607
			}                                                                                                                   // 2608
		});                                                                                                                  // 2609
                                                                                                                       // 2610
		return selector;                                                                                                     // 2611
	};                                                                                                                    // 2612
                                                                                                                       // 2613
	/**                                                                                                                   // 2614
	 * Listen for window resize events                                                                                    // 2615
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms             // 2616
	 * @returns {jQuery}		$(window)                                                                                       // 2617
	 */                                                                                                                   // 2618
	$.winSizeSpy = function(options) {                                                                                    // 2619
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls                                           // 2620
		options = options || {                                                                                               // 2621
			throttle: 100                                                                                                       // 2622
		};                                                                                                                   // 2623
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));                                           // 2624
	};                                                                                                                    // 2625
                                                                                                                       // 2626
	/**                                                                                                                   // 2627
	 * Enables ScrollSpy on a collection of elements                                                                      // 2628
	 * e.g. $('.scrollSpy').scrollSpy()                                                                                   // 2629
	 * @param {Object=} options	Optional.                                                                                 // 2630
											throttle : number -> scrollspy throttling. Default: 100 ms                                                  // 2631
											offsetTop : number -> offset from top. Default: 0                                                           // 2632
											offsetRight : number -> offset from right. Default: 0                                                       // 2633
											offsetBottom : number -> offset from bottom. Default: 0                                                     // 2634
											offsetLeft : number -> offset from left. Default: 0                                                         // 2635
	 * @returns {jQuery}                                                                                                  // 2636
	 */                                                                                                                   // 2637
	$.fn.scrollSpy = function(options) {                                                                                  // 2638
		return $.scrollSpy($(this), options);                                                                                // 2639
	};                                                                                                                    // 2640
                                                                                                                       // 2641
})(jQuery);                                                                                                            // 2642
;(function ($) {                                                                                                       // 2643
  $(document).ready(function() {                                                                                       // 2644
                                                                                                                       // 2645
    // Function to update labels of text fields                                                                        // 2646
    Materialize.updateTextFields = function() {                                                                        // 2647
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {                                                                // 2649
        if ($(element).val().length > 0 || element.autofocus ||$(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
          $(this).siblings('label, i').addClass('active');                                                             // 2651
        }                                                                                                              // 2652
        else {                                                                                                         // 2653
          $(this).siblings('label, i').removeClass('active');                                                          // 2654
        }                                                                                                              // 2655
      });                                                                                                              // 2656
    };                                                                                                                 // 2657
                                                                                                                       // 2658
    // Text based inputs                                                                                               // 2659
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
                                                                                                                       // 2661
    // Add active if form auto complete                                                                                // 2662
    $(document).on('change', input_selector, function () {                                                             // 2663
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {                                    // 2664
        $(this).siblings('label').addClass('active');                                                                  // 2665
      }                                                                                                                // 2666
      validate_field($(this));                                                                                         // 2667
    });                                                                                                                // 2668
                                                                                                                       // 2669
    // Add active if input element has been pre-populated on document ready                                            // 2670
    $(document).ready(function() {                                                                                     // 2671
      Materialize.updateTextFields();                                                                                  // 2672
    });                                                                                                                // 2673
                                                                                                                       // 2674
    // HTML DOM FORM RESET handling                                                                                    // 2675
    $(document).on('reset', function(e) {                                                                              // 2676
      var formReset = $(e.target);                                                                                     // 2677
      if (formReset.is('form')) {                                                                                      // 2678
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');                                    // 2679
        formReset.find(input_selector).each(function () {                                                              // 2680
          if ($(this).attr('value') === '') {                                                                          // 2681
            $(this).siblings('label, i').removeClass('active');                                                        // 2682
          }                                                                                                            // 2683
        });                                                                                                            // 2684
                                                                                                                       // 2685
        // Reset select                                                                                                // 2686
        formReset.find('select.initialized').each(function () {                                                        // 2687
          var reset_text = formReset.find('option[selected]').text();                                                  // 2688
          formReset.siblings('input.select-dropdown').val(reset_text);                                                 // 2689
        });                                                                                                            // 2690
      }                                                                                                                // 2691
    });                                                                                                                // 2692
                                                                                                                       // 2693
    // Add active when element has focus                                                                               // 2694
    $(document).on('focus', input_selector, function () {                                                              // 2695
      $(this).siblings('label, i').addClass('active');                                                                 // 2696
    });                                                                                                                // 2697
                                                                                                                       // 2698
    $(document).on('blur', input_selector, function () {                                                               // 2699
      var $inputElement = $(this);                                                                                     // 2700
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        $inputElement.siblings('label, i').removeClass('active');                                                      // 2702
      }                                                                                                                // 2703
                                                                                                                       // 2704
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') !== undefined) {
        $inputElement.siblings('i').removeClass('active');                                                             // 2706
      }                                                                                                                // 2707
      validate_field($inputElement);                                                                                   // 2708
    });                                                                                                                // 2709
                                                                                                                       // 2710
    window.validate_field = function(object) {                                                                         // 2711
      var hasLength = object.attr('length') !== undefined;                                                             // 2712
      var lenAttr = parseInt(object.attr('length'));                                                                   // 2713
      var len = object.val().length;                                                                                   // 2714
                                                                                                                       // 2715
      if (object.val().length === 0 && object[0].validity.badInput === false) {                                        // 2716
        if (object.hasClass('validate')) {                                                                             // 2717
          object.removeClass('valid');                                                                                 // 2718
          object.removeClass('invalid');                                                                               // 2719
        }                                                                                                              // 2720
      }                                                                                                                // 2721
      else {                                                                                                           // 2722
        if (object.hasClass('validate')) {                                                                             // 2723
          // Check for character counter attributes                                                                    // 2724
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {         // 2725
            object.removeClass('invalid');                                                                             // 2726
            object.addClass('valid');                                                                                  // 2727
          }                                                                                                            // 2728
          else {                                                                                                       // 2729
            object.removeClass('valid');                                                                               // 2730
            object.addClass('invalid');                                                                                // 2731
          }                                                                                                            // 2732
        }                                                                                                              // 2733
      }                                                                                                                // 2734
    };                                                                                                                 // 2735
                                                                                                                       // 2736
    // Radio and Checkbox focus class                                                                                  // 2737
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';                                                    // 2738
    $(document).on('keyup.radio', radio_checkbox, function(e) {                                                        // 2739
      // TAB, check if tabbing to radio or checkbox.                                                                   // 2740
      if (e.which === 9) {                                                                                             // 2741
        $(this).addClass('tabbed');                                                                                    // 2742
        var $this = $(this);                                                                                           // 2743
        $this.one('blur', function(e) {                                                                                // 2744
                                                                                                                       // 2745
          $(this).removeClass('tabbed');                                                                               // 2746
        });                                                                                                            // 2747
        return;                                                                                                        // 2748
      }                                                                                                                // 2749
    });                                                                                                                // 2750
                                                                                                                       // 2751
    // Textarea Auto Resize                                                                                            // 2752
    var hiddenDiv = $('.hiddendiv').first();                                                                           // 2753
    if (!hiddenDiv.length) {                                                                                           // 2754
      hiddenDiv = $('<div class="hiddendiv common"></div>');                                                           // 2755
      $('body').append(hiddenDiv);                                                                                     // 2756
    }                                                                                                                  // 2757
    var text_area_selector = '.materialize-textarea';                                                                  // 2758
                                                                                                                       // 2759
    function textareaAutoResize($textarea) {                                                                           // 2760
      // Set font properties of hiddenDiv                                                                              // 2761
                                                                                                                       // 2762
      var fontFamily = $textarea.css('font-family');                                                                   // 2763
      var fontSize = $textarea.css('font-size');                                                                       // 2764
                                                                                                                       // 2765
      if (fontSize) { hiddenDiv.css('font-size', fontSize); }                                                          // 2766
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }                                                    // 2767
                                                                                                                       // 2768
      if ($textarea.attr('wrap') === "off") {                                                                          // 2769
        hiddenDiv.css('overflow-wrap', "normal")                                                                       // 2770
                 .css('white-space', "pre");                                                                           // 2771
      }                                                                                                                // 2772
                                                                                                                       // 2773
      hiddenDiv.text($textarea.val() + '\n');                                                                          // 2774
      var content = hiddenDiv.html().replace(/\n/g, '<br>');                                                           // 2775
      hiddenDiv.html(content);                                                                                         // 2776
                                                                                                                       // 2777
                                                                                                                       // 2778
      // When textarea is hidden, width goes crazy.                                                                    // 2779
      // Approximate with half of window size                                                                          // 2780
                                                                                                                       // 2781
      if ($textarea.is(':visible')) {                                                                                  // 2782
        hiddenDiv.css('width', $textarea.width());                                                                     // 2783
      }                                                                                                                // 2784
      else {                                                                                                           // 2785
        hiddenDiv.css('width', $(window).width()/2);                                                                   // 2786
      }                                                                                                                // 2787
                                                                                                                       // 2788
      $textarea.css('height', hiddenDiv.height());                                                                     // 2789
    }                                                                                                                  // 2790
                                                                                                                       // 2791
    $(text_area_selector).each(function () {                                                                           // 2792
      var $textarea = $(this);                                                                                         // 2793
      if ($textarea.val().length) {                                                                                    // 2794
        textareaAutoResize($textarea);                                                                                 // 2795
      }                                                                                                                // 2796
    });                                                                                                                // 2797
                                                                                                                       // 2798
    $('body').on('keyup keydown autoresize', text_area_selector, function () {                                         // 2799
      textareaAutoResize($(this));                                                                                     // 2800
    });                                                                                                                // 2801
                                                                                                                       // 2802
    // File Input Path                                                                                                 // 2803
    $(document).on('change', '.file-field input[type="file"]', function () {                                           // 2804
      var file_field = $(this).closest('.file-field');                                                                 // 2805
      var path_input = file_field.find('input.file-path');                                                             // 2806
      var files      = $(this)[0].files;                                                                               // 2807
      var file_names = [];                                                                                             // 2808
      for (var i = 0; i < files.length; i++) {                                                                         // 2809
        file_names.push(files[i].name);                                                                                // 2810
      }                                                                                                                // 2811
      path_input.val(file_names.join(", "));                                                                           // 2812
      path_input.trigger('change');                                                                                    // 2813
    });                                                                                                                // 2814
                                                                                                                       // 2815
    /****************                                                                                                  // 2816
    *  Range Input  *                                                                                                  // 2817
    ****************/                                                                                                  // 2818
                                                                                                                       // 2819
    var range_type = 'input[type=range]';                                                                              // 2820
    var range_mousedown = false;                                                                                       // 2821
    var left;                                                                                                          // 2822
                                                                                                                       // 2823
    $(range_type).each(function () {                                                                                   // 2824
      var thumb = $('<span class="thumb"><span class="value"></span></span>');                                         // 2825
      $(this).after(thumb);                                                                                            // 2826
    });                                                                                                                // 2827
                                                                                                                       // 2828
    var range_wrapper = '.range-field';                                                                                // 2829
    $(document).on('change', range_type, function(e) {                                                                 // 2830
      var thumb = $(this).siblings('.thumb');                                                                          // 2831
      thumb.find('.value').html($(this).val());                                                                        // 2832
    });                                                                                                                // 2833
                                                                                                                       // 2834
    $(document).on('input mousedown touchstart', range_type, function(e) {                                             // 2835
      var thumb = $(this).siblings('.thumb');                                                                          // 2836
      var width = $(this).outerWidth();                                                                                // 2837
                                                                                                                       // 2838
      // If thumb indicator does not exist yet, create it                                                              // 2839
      if (thumb.length <= 0) {                                                                                         // 2840
        thumb = $('<span class="thumb"><span class="value"></span></span>');                                           // 2841
        $(this).after(thumb);                                                                                          // 2842
      }                                                                                                                // 2843
                                                                                                                       // 2844
      // Set indicator value                                                                                           // 2845
      thumb.find('.value').html($(this).val());                                                                        // 2846
                                                                                                                       // 2847
      range_mousedown = true;                                                                                          // 2848
      $(this).addClass('active');                                                                                      // 2849
                                                                                                                       // 2850
      if (!thumb.hasClass('active')) {                                                                                 // 2851
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }                                                                                                                // 2853
                                                                                                                       // 2854
      if (e.type !== 'input') {                                                                                        // 2855
        if(e.pageX === undefined || e.pageX === null){//mobile                                                         // 2856
           left = e.originalEvent.touches[0].pageX - $(this).offset().left;                                            // 2857
        }                                                                                                              // 2858
        else{ // desktop                                                                                               // 2859
           left = e.pageX - $(this).offset().left;                                                                     // 2860
        }                                                                                                              // 2861
        if (left < 0) {                                                                                                // 2862
          left = 0;                                                                                                    // 2863
        }                                                                                                              // 2864
        else if (left > width) {                                                                                       // 2865
          left = width;                                                                                                // 2866
        }                                                                                                              // 2867
        thumb.addClass('active').css('left', left);                                                                    // 2868
      }                                                                                                                // 2869
                                                                                                                       // 2870
      thumb.find('.value').html($(this).val());                                                                        // 2871
    });                                                                                                                // 2872
                                                                                                                       // 2873
    $(document).on('mouseup touchend', range_wrapper, function() {                                                     // 2874
      range_mousedown = false;                                                                                         // 2875
      $(this).removeClass('active');                                                                                   // 2876
    });                                                                                                                // 2877
                                                                                                                       // 2878
    $(document).on('mousemove touchmove', range_wrapper, function(e) {                                                 // 2879
      var thumb = $(this).children('.thumb');                                                                          // 2880
      var left;                                                                                                        // 2881
      if (range_mousedown) {                                                                                           // 2882
        if (!thumb.hasClass('active')) {                                                                               // 2883
          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' });
        }                                                                                                              // 2885
        if (e.pageX === undefined || e.pageX === null) { //mobile                                                      // 2886
          left = e.originalEvent.touches[0].pageX - $(this).offset().left;                                             // 2887
        }                                                                                                              // 2888
        else{ // desktop                                                                                               // 2889
          left = e.pageX - $(this).offset().left;                                                                      // 2890
        }                                                                                                              // 2891
        var width = $(this).outerWidth();                                                                              // 2892
                                                                                                                       // 2893
        if (left < 0) {                                                                                                // 2894
          left = 0;                                                                                                    // 2895
        }                                                                                                              // 2896
        else if (left > width) {                                                                                       // 2897
          left = width;                                                                                                // 2898
        }                                                                                                              // 2899
        thumb.addClass('active').css('left', left);                                                                    // 2900
        thumb.find('.value').html(thumb.siblings(range_type).val());                                                   // 2901
      }                                                                                                                // 2902
    });                                                                                                                // 2903
                                                                                                                       // 2904
    $(document).on('mouseout touchleave', range_wrapper, function() {                                                  // 2905
      if (!range_mousedown) {                                                                                          // 2906
                                                                                                                       // 2907
        var thumb = $(this).children('.thumb');                                                                        // 2908
                                                                                                                       // 2909
        if (thumb.hasClass('active')) {                                                                                // 2910
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 });              // 2911
        }                                                                                                              // 2912
        thumb.removeClass('active');                                                                                   // 2913
      }                                                                                                                // 2914
    });                                                                                                                // 2915
  }); // End of $(document).ready                                                                                      // 2916
                                                                                                                       // 2917
  /*******************                                                                                                 // 2918
   *  Select Plugin  *                                                                                                 // 2919
   ******************/                                                                                                 // 2920
  $.fn.material_select = function (callback) {                                                                         // 2921
    $(this).each(function(){                                                                                           // 2922
      var $select = $(this);                                                                                           // 2923
                                                                                                                       // 2924
      if ($select.hasClass('browser-default')) {                                                                       // 2925
        return; // Continue to next (return false breaks out of entire loop)                                           // 2926
      }                                                                                                                // 2927
                                                                                                                       // 2928
      var multiple = $select.attr('multiple') ? true : false,                                                          // 2929
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt                     // 2930
                                                                                                                       // 2931
      if (lastID) {                                                                                                    // 2932
        $select.parent().find('span.caret').remove();                                                                  // 2933
        $select.parent().find('input').remove();                                                                       // 2934
                                                                                                                       // 2935
        $select.unwrap();                                                                                              // 2936
        $('ul#select-options-'+lastID).remove();                                                                       // 2937
      }                                                                                                                // 2938
                                                                                                                       // 2939
      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.                     // 2940
      if(callback === 'destroy') {                                                                                     // 2941
        $select.data('select-id', null).removeClass('initialized');                                                    // 2942
        return;                                                                                                        // 2943
      }                                                                                                                // 2944
                                                                                                                       // 2945
      var uniqueID = Materialize.guid();                                                                               // 2946
      $select.data('select-id', uniqueID);                                                                             // 2947
      var wrapper = $('<div class="select-wrapper"></div>');                                                           // 2948
      wrapper.addClass($select.attr('class'));                                                                         // 2949
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),                                                       // 2951
          valuesSelected = [],                                                                                         // 2952
          optionsHover = false;                                                                                        // 2953
                                                                                                                       // 2954
      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";                 // 2955
                                                                                                                       // 2956
      // Function that renders and appends the option taking into                                                      // 2957
      // account type and possible image icon.                                                                         // 2958
      var appendOptionWithIcon = function(select, option, type) {                                                      // 2959
        // Add disabled attr if disabled                                                                               // 2960
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';                                               // 2961
        var optgroupClass = (type === 'optgroup-option') ? 'optgroup-option ' : '';                                    // 2962
                                                                                                                       // 2963
        // add icons                                                                                                   // 2964
        var icon_url = option.data('icon');                                                                            // 2965
        var classes = option.attr('class');                                                                            // 2966
        if (!!icon_url) {                                                                                              // 2967
          var classString = '';                                                                                        // 2968
          if (!!classes) classString = ' class="' + classes + '"';                                                     // 2969
                                                                                                                       // 2970
          // Check for multiple type.                                                                                  // 2971
          if (type === 'multiple') {                                                                                   // 2972
            options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
          } else {                                                                                                     // 2974
            options.append($('<li class="' + disabledClass + optgroupClass + '"><img src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'));
          }                                                                                                            // 2976
          return true;                                                                                                 // 2977
        }                                                                                                              // 2978
                                                                                                                       // 2979
        // Check for multiple type.                                                                                    // 2980
        if (type === 'multiple') {                                                                                     // 2981
          options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
        } else {                                                                                                       // 2983
          options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + option.html() + '</span></li>'));
        }                                                                                                              // 2985
      };                                                                                                               // 2986
                                                                                                                       // 2987
      /* Create dropdown structure. */                                                                                 // 2988
      if (selectChildren.length) {                                                                                     // 2989
        selectChildren.each(function() {                                                                               // 2990
          if ($(this).is('option')) {                                                                                  // 2991
            // Direct descendant option.                                                                               // 2992
            if (multiple) {                                                                                            // 2993
              appendOptionWithIcon($select, $(this), 'multiple');                                                      // 2994
                                                                                                                       // 2995
            } else {                                                                                                   // 2996
              appendOptionWithIcon($select, $(this));                                                                  // 2997
            }                                                                                                          // 2998
          } else if ($(this).is('optgroup')) {                                                                         // 2999
            // Optgroup.                                                                                               // 3000
            var selectOptions = $(this).children('option');                                                            // 3001
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));                 // 3002
                                                                                                                       // 3003
            selectOptions.each(function() {                                                                            // 3004
              appendOptionWithIcon($select, $(this), 'optgroup-option');                                               // 3005
            });                                                                                                        // 3006
          }                                                                                                            // 3007
        });                                                                                                            // 3008
      }                                                                                                                // 3009
                                                                                                                       // 3010
      options.find('li:not(.optgroup)').each(function (i) {                                                            // 3011
        $(this).click(function (e) {                                                                                   // 3012
          // Check if option element is disabled                                                                       // 3013
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {                                        // 3014
            var selected = true;                                                                                       // 3015
                                                                                                                       // 3016
            if (multiple) {                                                                                            // 3017
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });                        // 3018
              selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select);                               // 3019
              $newSelect.trigger('focus');                                                                             // 3020
            } else {                                                                                                   // 3021
              options.find('li').removeClass('active');                                                                // 3022
              $(this).toggleClass('active');                                                                           // 3023
              $newSelect.val($(this).text());                                                                          // 3024
            }                                                                                                          // 3025
                                                                                                                       // 3026
            activateOption(options, $(this));                                                                          // 3027
            $select.find('option').eq(i).prop('selected', selected);                                                   // 3028
            // Trigger onchange() event                                                                                // 3029
            $select.trigger('change');                                                                                 // 3030
            if (typeof callback !== 'undefined') callback();                                                           // 3031
          }                                                                                                            // 3032
                                                                                                                       // 3033
          e.stopPropagation();                                                                                         // 3034
        });                                                                                                            // 3035
      });                                                                                                              // 3036
                                                                                                                       // 3037
      // Wrap Elements                                                                                                 // 3038
      $select.wrap(wrapper);                                                                                           // 3039
      // Add Select Display Element                                                                                    // 3040
      var dropdownIcon = $('<span class="caret">&#9660;</span>');                                                      // 3041
      if ($select.is(':disabled'))                                                                                     // 3042
        dropdownIcon.addClass('disabled');                                                                             // 3043
                                                                                                                       // 3044
      // escape double quotes                                                                                          // 3045
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');                                                          // 3046
                                                                                                                       // 3047
      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);                                                                                      // 3049
      $newSelect.before(dropdownIcon);                                                                                 // 3050
                                                                                                                       // 3051
      $newSelect.after(options);                                                                                       // 3052
      // Check if section element is disabled                                                                          // 3053
      if (!$select.is(':disabled')) {                                                                                  // 3054
        $newSelect.dropdown({'hover': false, 'closeOnClick': false});                                                  // 3055
      }                                                                                                                // 3056
                                                                                                                       // 3057
      // Copy tabindex                                                                                                 // 3058
      if ($select.attr('tabindex')) {                                                                                  // 3059
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));                                                   // 3060
      }                                                                                                                // 3061
                                                                                                                       // 3062
      $select.addClass('initialized');                                                                                 // 3063
                                                                                                                       // 3064
      $newSelect.on({                                                                                                  // 3065
        'focus': function (){                                                                                          // 3066
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {                                                // 3067
            $('input.select-dropdown').trigger('close');                                                               // 3068
          }                                                                                                            // 3069
          if (!options.is(':visible')) {                                                                               // 3070
            $(this).trigger('open', ['focus']);                                                                        // 3071
            var label = $(this).val();                                                                                 // 3072
            var selectedOption = options.find('li').filter(function() {                                                // 3073
              return $(this).text().toLowerCase() === label.toLowerCase();                                             // 3074
            })[0];                                                                                                     // 3075
            activateOption(options, selectedOption);                                                                   // 3076
          }                                                                                                            // 3077
        },                                                                                                             // 3078
        'click': function (e){                                                                                         // 3079
          e.stopPropagation();                                                                                         // 3080
        }                                                                                                              // 3081
      });                                                                                                              // 3082
                                                                                                                       // 3083
      $newSelect.on('blur', function() {                                                                               // 3084
        if (!multiple) {                                                                                               // 3085
          $(this).trigger('close');                                                                                    // 3086
        }                                                                                                              // 3087
        options.find('li.selected').removeClass('selected');                                                           // 3088
      });                                                                                                              // 3089
                                                                                                                       // 3090
      options.hover(function() {                                                                                       // 3091
        optionsHover = true;                                                                                           // 3092
      }, function () {                                                                                                 // 3093
        optionsHover = false;                                                                                          // 3094
      });                                                                                                              // 3095
                                                                                                                       // 3096
      $(window).on({                                                                                                   // 3097
        'click': function () {                                                                                         // 3098
          multiple && (optionsHover || $newSelect.trigger('close'));                                                   // 3099
        }                                                                                                              // 3100
      });                                                                                                              // 3101
                                                                                                                       // 3102
      // Add initial multiple selections.                                                                              // 3103
      if (multiple) {                                                                                                  // 3104
        $select.find("option:selected:not(:disabled)").each(function () {                                              // 3105
          var index = $(this).index();                                                                                 // 3106
                                                                                                                       // 3107
          toggleEntryFromArray(valuesSelected, index, $select);                                                        // 3108
          options.find("li").eq(index).find(":checkbox").prop("checked", true);                                        // 3109
        });                                                                                                            // 3110
      }                                                                                                                // 3111
                                                                                                                       // 3112
      // Make option as selected and scroll to selected position                                                       // 3113
      var activateOption = function(collection, newOption) {                                                           // 3114
        if (newOption) {                                                                                               // 3115
          collection.find('li.selected').removeClass('selected');                                                      // 3116
          var option = $(newOption);                                                                                   // 3117
          option.addClass('selected');                                                                                 // 3118
          options.scrollTo(option);                                                                                    // 3119
        }                                                                                                              // 3120
      };                                                                                                               // 3121
                                                                                                                       // 3122
      // Allow user to search by typing                                                                                // 3123
      // this array is cleared after 1 second                                                                          // 3124
      var filterQuery = [],                                                                                            // 3125
          onKeyDown = function(e){                                                                                     // 3126
            // TAB - switch to another input                                                                           // 3127
            if(e.which == 9){                                                                                          // 3128
              $newSelect.trigger('close');                                                                             // 3129
              return;                                                                                                  // 3130
            }                                                                                                          // 3131
                                                                                                                       // 3132
            // ARROW DOWN WHEN SELECT IS CLOSED - open select options                                                  // 3133
            if(e.which == 40 && !options.is(':visible')){                                                              // 3134
              $newSelect.trigger('open');                                                                              // 3135
              return;                                                                                                  // 3136
            }                                                                                                          // 3137
                                                                                                                       // 3138
            // ENTER WHEN SELECT IS CLOSED - submit form                                                               // 3139
            if(e.which == 13 && !options.is(':visible')){                                                              // 3140
              return;                                                                                                  // 3141
            }                                                                                                          // 3142
                                                                                                                       // 3143
            e.preventDefault();                                                                                        // 3144
                                                                                                                       // 3145
            // CASE WHEN USER TYPE LETTERS                                                                             // 3146
            var letter = String.fromCharCode(e.which).toLowerCase(),                                                   // 3147
                nonLetters = [9,13,27,38,40];                                                                          // 3148
            if (letter && (nonLetters.indexOf(e.which) === -1)) {                                                      // 3149
              filterQuery.push(letter);                                                                                // 3150
                                                                                                                       // 3151
              var string = filterQuery.join(''),                                                                       // 3152
                  newOption = options.find('li').filter(function() {                                                   // 3153
                    return $(this).text().toLowerCase().indexOf(string) === 0;                                         // 3154
                  })[0];                                                                                               // 3155
                                                                                                                       // 3156
              if (newOption) {                                                                                         // 3157
                activateOption(options, newOption);                                                                    // 3158
              }                                                                                                        // 3159
            }                                                                                                          // 3160
                                                                                                                       // 3161
            // ENTER - select option and close when select options are opened                                          // 3162
            if (e.which == 13) {                                                                                       // 3163
              var activeOption = options.find('li.selected:not(.disabled)')[0];                                        // 3164
              if(activeOption){                                                                                        // 3165
                $(activeOption).trigger('click');                                                                      // 3166
                if (!multiple) {                                                                                       // 3167
                  $newSelect.trigger('close');                                                                         // 3168
                }                                                                                                      // 3169
              }                                                                                                        // 3170
            }                                                                                                          // 3171
                                                                                                                       // 3172
            // ARROW DOWN - move to next not disabled option                                                           // 3173
            if (e.which == 40) {                                                                                       // 3174
              if (options.find('li.selected').length) {                                                                // 3175
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];                                  // 3176
              } else {                                                                                                 // 3177
                newOption = options.find('li:not(.disabled)')[0];                                                      // 3178
              }                                                                                                        // 3179
              activateOption(options, newOption);                                                                      // 3180
            }                                                                                                          // 3181
                                                                                                                       // 3182
            // ESC - close options                                                                                     // 3183
            if (e.which == 27) {                                                                                       // 3184
              $newSelect.trigger('close');                                                                             // 3185
            }                                                                                                          // 3186
                                                                                                                       // 3187
            // ARROW UP - move to previous not disabled option                                                         // 3188
            if (e.which == 38) {                                                                                       // 3189
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];                                    // 3190
              if(newOption)                                                                                            // 3191
                activateOption(options, newOption);                                                                    // 3192
            }                                                                                                          // 3193
                                                                                                                       // 3194
            // Automaticaly clean filter query so user can search again by starting letters                            // 3195
            setTimeout(function(){ filterQuery = []; }, 1000);                                                         // 3196
          };                                                                                                           // 3197
                                                                                                                       // 3198
      $newSelect.on('keydown', onKeyDown);                                                                             // 3199
    });                                                                                                                // 3200
                                                                                                                       // 3201
    function toggleEntryFromArray(entriesArray, entryIndex, select) {                                                  // 3202
      var index = entriesArray.indexOf(entryIndex),                                                                    // 3203
          notAdded = index === -1;                                                                                     // 3204
                                                                                                                       // 3205
      if (notAdded) {                                                                                                  // 3206
        entriesArray.push(entryIndex);                                                                                 // 3207
      } else {                                                                                                         // 3208
        entriesArray.splice(index, 1);                                                                                 // 3209
      }                                                                                                                // 3210
                                                                                                                       // 3211
      select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');                          // 3212
                                                                                                                       // 3213
      // use notAdded instead of true (to detect if the option is selected or not)                                     // 3214
      select.find('option').eq(entryIndex).prop('selected', notAdded);                                                 // 3215
      setValueToInput(entriesArray, select);                                                                           // 3216
                                                                                                                       // 3217
      return notAdded;                                                                                                 // 3218
    }                                                                                                                  // 3219
                                                                                                                       // 3220
    function setValueToInput(entriesArray, select) {                                                                   // 3221
      var value = '';                                                                                                  // 3222
                                                                                                                       // 3223
      for (var i = 0, count = entriesArray.length; i < count; i++) {                                                   // 3224
        var text = select.find('option').eq(entriesArray[i]).text();                                                   // 3225
                                                                                                                       // 3226
        i === 0 ? value += text : value += ', ' + text;                                                                // 3227
      }                                                                                                                // 3228
                                                                                                                       // 3229
      if (value === '') {                                                                                              // 3230
        value = select.find('option:disabled').eq(0).text();                                                           // 3231
      }                                                                                                                // 3232
                                                                                                                       // 3233
      select.siblings('input.select-dropdown').val(value);                                                             // 3234
    }                                                                                                                  // 3235
  };                                                                                                                   // 3236
                                                                                                                       // 3237
}( jQuery ));                                                                                                          // 3238
;(function ($) {                                                                                                       // 3239
                                                                                                                       // 3240
  var methods = {                                                                                                      // 3241
                                                                                                                       // 3242
    init : function(options) {                                                                                         // 3243
      var defaults = {                                                                                                 // 3244
        indicators: true,                                                                                              // 3245
        height: 400,                                                                                                   // 3246
        transition: 500,                                                                                               // 3247
        interval: 6000                                                                                                 // 3248
      };                                                                                                               // 3249
      options = $.extend(defaults, options);                                                                           // 3250
                                                                                                                       // 3251
      return this.each(function() {                                                                                    // 3252
                                                                                                                       // 3253
        // For each slider, we want to keep track of                                                                   // 3254
        // which slide is active and its associated content                                                            // 3255
        var $this = $(this);                                                                                           // 3256
        var $slider = $this.find('ul.slides').first();                                                                 // 3257
        var $slides = $slider.find('li');                                                                              // 3258
        var $active_index = $slider.find('.active').index();                                                           // 3259
        var $active, $indicators, $interval;                                                                           // 3260
        if ($active_index != -1) { $active = $slides.eq($active_index); }                                              // 3261
                                                                                                                       // 3262
        // Transitions the caption depending on alignment                                                              // 3263
        function captionTransition(caption, duration) {                                                                // 3264
          if (caption.hasClass("center-align")) {                                                                      // 3265
            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});                      // 3266
          }                                                                                                            // 3267
          else if (caption.hasClass("right-align")) {                                                                  // 3268
            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});                       // 3269
          }                                                                                                            // 3270
          else if (caption.hasClass("left-align")) {                                                                   // 3271
            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});                      // 3272
          }                                                                                                            // 3273
        }                                                                                                              // 3274
                                                                                                                       // 3275
        // This function will transition the slide to any index of the next slide                                      // 3276
        function moveToSlide(index) {                                                                                  // 3277
          // Wrap around indices.                                                                                      // 3278
          if (index >= $slides.length) index = 0;                                                                      // 3279
          else if (index < 0) index = $slides.length -1;                                                               // 3280
                                                                                                                       // 3281
          $active_index = $slider.find('.active').index();                                                             // 3282
                                                                                                                       // 3283
          // Only do if index changes                                                                                  // 3284
          if ($active_index != index) {                                                                                // 3285
            $active = $slides.eq($active_index);                                                                       // 3286
            $caption = $active.find('.caption');                                                                       // 3287
                                                                                                                       // 3288
            $active.removeClass('active');                                                                             // 3289
            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',         // 3290
                              complete: function() {                                                                   // 3291
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                              } });                                                                                    // 3293
            captionTransition($caption, options.transition);                                                           // 3294
                                                                                                                       // 3295
                                                                                                                       // 3296
            // Update indicators                                                                                       // 3297
            if (options.indicators) {                                                                                  // 3298
              $indicators.eq($active_index).removeClass('active');                                                     // 3299
            }                                                                                                          // 3300
                                                                                                                       // 3301
            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).addClass('active');                                                                      // 3304
                                                                                                                       // 3305
                                                                                                                       // 3306
            // Update indicators                                                                                       // 3307
            if (options.indicators) {                                                                                  // 3308
              $indicators.eq(index).addClass('active');                                                                // 3309
            }                                                                                                          // 3310
          }                                                                                                            // 3311
        }                                                                                                              // 3312
                                                                                                                       // 3313
        // Set height of slider                                                                                        // 3314
        // If fullscreen, do nothing                                                                                   // 3315
        if (!$this.hasClass('fullscreen')) {                                                                           // 3316
          if (options.indicators) {                                                                                    // 3317
            // Add height if indicators are present                                                                    // 3318
            $this.height(options.height + 40);                                                                         // 3319
          }                                                                                                            // 3320
          else {                                                                                                       // 3321
            $this.height(options.height);                                                                              // 3322
          }                                                                                                            // 3323
          $slider.height(options.height);                                                                              // 3324
        }                                                                                                              // 3325
                                                                                                                       // 3326
                                                                                                                       // 3327
        // Set initial positions of captions                                                                           // 3328
        $slides.find('.caption').each(function () {                                                                    // 3329
          captionTransition($(this), 0);                                                                               // 3330
        });                                                                                                            // 3331
                                                                                                                       // 3332
        // Move img src into background-image                                                                          // 3333
        $slides.find('img').each(function () {                                                                         // 3334
          var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          if ($(this).attr('src') !== placeholderBase64) {                                                             // 3336
            $(this).css('background-image', 'url(' + $(this).attr('src') + ')' );                                      // 3337
            $(this).attr('src', placeholderBase64);                                                                    // 3338
          }                                                                                                            // 3339
        });                                                                                                            // 3340
                                                                                                                       // 3341
        // dynamically add indicators                                                                                  // 3342
        if (options.indicators) {                                                                                      // 3343
          $indicators = $('<ul class="indicators"></ul>');                                                             // 3344
          $slides.each(function( index ) {                                                                             // 3345
            var $indicator = $('<li class="indicator-item"></li>');                                                    // 3346
                                                                                                                       // 3347
            // Handle clicks on indicators                                                                             // 3348
            $indicator.click(function () {                                                                             // 3349
              var $parent = $slider.parent();                                                                          // 3350
              var curr_index = $parent.find($(this)).index();                                                          // 3351
              moveToSlide(curr_index);                                                                                 // 3352
                                                                                                                       // 3353
              // reset interval                                                                                        // 3354
              clearInterval($interval);                                                                                // 3355
              $interval = setInterval(                                                                                 // 3356
                function(){                                                                                            // 3357
                  $active_index = $slider.find('.active').index();                                                     // 3358
                  if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                         // 3359
                  else $active_index += 1;                                                                             // 3360
                                                                                                                       // 3361
                  moveToSlide($active_index);                                                                          // 3362
                                                                                                                       // 3363
                }, options.transition + options.interval                                                               // 3364
              );                                                                                                       // 3365
            });                                                                                                        // 3366
            $indicators.append($indicator);                                                                            // 3367
          });                                                                                                          // 3368
          $this.append($indicators);                                                                                   // 3369
          $indicators = $this.find('ul.indicators').find('li.indicator-item');                                         // 3370
        }                                                                                                              // 3371
                                                                                                                       // 3372
        if ($active) {                                                                                                 // 3373
          $active.show();                                                                                              // 3374
        }                                                                                                              // 3375
        else {                                                                                                         // 3376
          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
                                                                                                                       // 3378
          $active_index = 0;                                                                                           // 3379
          $active = $slides.eq($active_index);                                                                         // 3380
                                                                                                                       // 3381
          // Update indicators                                                                                         // 3382
          if (options.indicators) {                                                                                    // 3383
            $indicators.eq($active_index).addClass('active');                                                          // 3384
          }                                                                                                            // 3385
        }                                                                                                              // 3386
                                                                                                                       // 3387
        // Adjust height to current slide                                                                              // 3388
        $active.find('img').each(function() {                                                                          // 3389
          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
        });                                                                                                            // 3391
                                                                                                                       // 3392
        // auto scroll                                                                                                 // 3393
        $interval = setInterval(                                                                                       // 3394
          function(){                                                                                                  // 3395
            $active_index = $slider.find('.active').index();                                                           // 3396
            moveToSlide($active_index + 1);                                                                            // 3397
                                                                                                                       // 3398
          }, options.transition + options.interval                                                                     // 3399
        );                                                                                                             // 3400
                                                                                                                       // 3401
                                                                                                                       // 3402
        // HammerJS, Swipe navigation                                                                                  // 3403
                                                                                                                       // 3404
        // Touch Event                                                                                                 // 3405
        var panning = false;                                                                                           // 3406
        var swipeLeft = false;                                                                                         // 3407
        var swipeRight = false;                                                                                        // 3408
                                                                                                                       // 3409
        $this.hammer({                                                                                                 // 3410
            prevent_default: false                                                                                     // 3411
        }).bind('pan', function(e) {                                                                                   // 3412
          if (e.gesture.pointerType === "touch") {                                                                     // 3413
                                                                                                                       // 3414
            // reset interval                                                                                          // 3415
            clearInterval($interval);                                                                                  // 3416
                                                                                                                       // 3417
            var direction = e.gesture.direction;                                                                       // 3418
            var x = e.gesture.deltaX;                                                                                  // 3419
            var velocityX = e.gesture.velocityX;                                                                       // 3420
                                                                                                                       // 3421
            $curr_slide = $slider.find('.active');                                                                     // 3422
            $curr_slide.velocity({ translateX: x                                                                       // 3423
                }, {duration: 50, queue: false, easing: 'easeOutQuad'});                                               // 3424
                                                                                                                       // 3425
            // Swipe Left                                                                                              // 3426
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {                              // 3427
              swipeRight = true;                                                                                       // 3428
            }                                                                                                          // 3429
            // Swipe Right                                                                                             // 3430
            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {                     // 3431
              swipeLeft = true;                                                                                        // 3432
            }                                                                                                          // 3433
                                                                                                                       // 3434
            // Make Slide Behind active slide visible                                                                  // 3435
            var next_slide;                                                                                            // 3436
            if (swipeLeft) {                                                                                           // 3437
              next_slide = $curr_slide.next();                                                                         // 3438
              if (next_slide.length === 0) {                                                                           // 3439
                next_slide = $slides.first();                                                                          // 3440
              }                                                                                                        // 3441
              next_slide.velocity({ opacity: 1                                                                         // 3442
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                            // 3443
            }                                                                                                          // 3444
            if (swipeRight) {                                                                                          // 3445
              next_slide = $curr_slide.prev();                                                                         // 3446
              if (next_slide.length === 0) {                                                                           // 3447
                next_slide = $slides.last();                                                                           // 3448
              }                                                                                                        // 3449
              next_slide.velocity({ opacity: 1                                                                         // 3450
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                            // 3451
            }                                                                                                          // 3452
                                                                                                                       // 3453
                                                                                                                       // 3454
          }                                                                                                            // 3455
                                                                                                                       // 3456
        }).bind('panend', function(e) {                                                                                // 3457
          if (e.gesture.pointerType === "touch") {                                                                     // 3458
                                                                                                                       // 3459
            $curr_slide = $slider.find('.active');                                                                     // 3460
            panning = false;                                                                                           // 3461
            curr_index = $slider.find('.active').index();                                                              // 3462
                                                                                                                       // 3463
            if (!swipeRight && !swipeLeft || $slides.length <=1) {                                                     // 3464
              // Return to original spot                                                                               // 3465
              $curr_slide.velocity({ translateX: 0                                                                     // 3466
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                            // 3467
            }                                                                                                          // 3468
            else if (swipeLeft) {                                                                                      // 3469
              moveToSlide(curr_index + 1);                                                                             // 3470
              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {                                                             // 3472
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});  // 3473
                                    } });                                                                              // 3474
            }                                                                                                          // 3475
            else if (swipeRight) {                                                                                     // 3476
              moveToSlide(curr_index - 1);                                                                             // 3477
              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {                                                             // 3479
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});  // 3480
                                    } });                                                                              // 3481
            }                                                                                                          // 3482
            swipeLeft = false;                                                                                         // 3483
            swipeRight = false;                                                                                        // 3484
                                                                                                                       // 3485
            // Restart interval                                                                                        // 3486
            clearInterval($interval);                                                                                  // 3487
            $interval = setInterval(                                                                                   // 3488
              function(){                                                                                              // 3489
                $active_index = $slider.find('.active').index();                                                       // 3490
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                           // 3491
                else $active_index += 1;                                                                               // 3492
                                                                                                                       // 3493
                moveToSlide($active_index);                                                                            // 3494
                                                                                                                       // 3495
              }, options.transition + options.interval                                                                 // 3496
            );                                                                                                         // 3497
          }                                                                                                            // 3498
        });                                                                                                            // 3499
                                                                                                                       // 3500
        $this.on('sliderPause', function() {                                                                           // 3501
          clearInterval($interval);                                                                                    // 3502
        });                                                                                                            // 3503
                                                                                                                       // 3504
        $this.on('sliderStart', function() {                                                                           // 3505
          clearInterval($interval);                                                                                    // 3506
          $interval = setInterval(                                                                                     // 3507
            function(){                                                                                                // 3508
              $active_index = $slider.find('.active').index();                                                         // 3509
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                             // 3510
              else $active_index += 1;                                                                                 // 3511
                                                                                                                       // 3512
              moveToSlide($active_index);                                                                              // 3513
                                                                                                                       // 3514
            }, options.transition + options.interval                                                                   // 3515
          );                                                                                                           // 3516
        });                                                                                                            // 3517
                                                                                                                       // 3518
        $this.on('sliderNext', function() {                                                                            // 3519
          $active_index = $slider.find('.active').index();                                                             // 3520
          moveToSlide($active_index + 1);                                                                              // 3521
        });                                                                                                            // 3522
                                                                                                                       // 3523
        $this.on('sliderPrev', function() {                                                                            // 3524
          $active_index = $slider.find('.active').index();                                                             // 3525
          moveToSlide($active_index - 1);                                                                              // 3526
        });                                                                                                            // 3527
                                                                                                                       // 3528
      });                                                                                                              // 3529
                                                                                                                       // 3530
                                                                                                                       // 3531
                                                                                                                       // 3532
    },                                                                                                                 // 3533
    pause : function() {                                                                                               // 3534
      $(this).trigger('sliderPause');                                                                                  // 3535
    },                                                                                                                 // 3536
    start : function() {                                                                                               // 3537
      $(this).trigger('sliderStart');                                                                                  // 3538
    },                                                                                                                 // 3539
    next : function() {                                                                                                // 3540
      $(this).trigger('sliderNext');                                                                                   // 3541
    },                                                                                                                 // 3542
    prev : function() {                                                                                                // 3543
      $(this).trigger('sliderPrev');                                                                                   // 3544
    }                                                                                                                  // 3545
  };                                                                                                                   // 3546
                                                                                                                       // 3547
                                                                                                                       // 3548
    $.fn.slider = function(methodOrOptions) {                                                                          // 3549
      if ( methods[methodOrOptions] ) {                                                                                // 3550
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                    // 3551
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                         // 3552
        // Default to "init"                                                                                           // 3553
        return methods.init.apply( this, arguments );                                                                  // 3554
      } else {                                                                                                         // 3555
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );                                 // 3556
      }                                                                                                                // 3557
    }; // Plugin end                                                                                                   // 3558
}( jQuery ));                                                                                                          // 3559
;(function ($) {                                                                                                       // 3560
  $(document).ready(function() {                                                                                       // 3561
                                                                                                                       // 3562
    $(document).on('click.card', '.card', function (e) {                                                               // 3563
      if ($(this).find('> .card-reveal').length) {                                                                     // 3564
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {        // 3565
          // Make Reveal animate down and display none                                                                 // 3566
          $(this).find('.card-reveal').velocity(                                                                       // 3567
            {translateY: 0}, {                                                                                         // 3568
              duration: 225,                                                                                           // 3569
              queue: false,                                                                                            // 3570
              easing: 'easeInOutQuad',                                                                                 // 3571
              complete: function() { $(this).css({ display: 'none'}); }                                                // 3572
            }                                                                                                          // 3573
          );                                                                                                           // 3574
        }                                                                                                              // 3575
        else if ($(e.target).is($('.card .activator')) ||                                                              // 3576
                 $(e.target).is($('.card .activator i')) ) {                                                           // 3577
          $(e.target).closest('.card').css('overflow', 'hidden');                                                      // 3578
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }                                                                                                              // 3580
      }                                                                                                                // 3581
                                                                                                                       // 3582
      $('.card-reveal').closest('.card').css('overflow', 'hidden');                                                    // 3583
                                                                                                                       // 3584
    });                                                                                                                // 3585
                                                                                                                       // 3586
  });                                                                                                                  // 3587
}( jQuery ));;(function ($) {                                                                                          // 3588
  $(document).ready(function() {                                                                                       // 3589
                                                                                                                       // 3590
    $(document).on('click.chip', '.chip .material-icons', function (e) {                                               // 3591
      $(this).parent().remove();                                                                                       // 3592
    });                                                                                                                // 3593
                                                                                                                       // 3594
  });                                                                                                                  // 3595
}( jQuery ));;(function ($) {                                                                                          // 3596
  $.fn.pushpin = function (options) {                                                                                  // 3597
                                                                                                                       // 3598
    var defaults = {                                                                                                   // 3599
      top: 0,                                                                                                          // 3600
      bottom: Infinity,                                                                                                // 3601
      offset: 0                                                                                                        // 3602
    };                                                                                                                 // 3603
    options = $.extend(defaults, options);                                                                             // 3604
                                                                                                                       // 3605
    $index = 0;                                                                                                        // 3606
    return this.each(function() {                                                                                      // 3607
      var $uniqueId = Materialize.guid(),                                                                              // 3608
          $this = $(this),                                                                                             // 3609
          $original_offset = $(this).offset().top;                                                                     // 3610
                                                                                                                       // 3611
      function removePinClasses(object) {                                                                              // 3612
        object.removeClass('pin-top');                                                                                 // 3613
        object.removeClass('pinned');                                                                                  // 3614
        object.removeClass('pin-bottom');                                                                              // 3615
      }                                                                                                                // 3616
                                                                                                                       // 3617
      function updateElements(objects, scrolled) {                                                                     // 3618
        objects.each(function () {                                                                                     // 3619
          // Add position fixed (because its between top and bottom)                                                   // 3620
          if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {                  // 3621
            removePinClasses($(this));                                                                                 // 3622
            $(this).css('top', options.offset);                                                                        // 3623
            $(this).addClass('pinned');                                                                                // 3624
          }                                                                                                            // 3625
                                                                                                                       // 3626
          // Add pin-top (when scrolled position is above top)                                                         // 3627
          if (scrolled < options.top && !$(this).hasClass('pin-top')) {                                                // 3628
            removePinClasses($(this));                                                                                 // 3629
            $(this).css('top', 0);                                                                                     // 3630
            $(this).addClass('pin-top');                                                                               // 3631
          }                                                                                                            // 3632
                                                                                                                       // 3633
          // Add pin-bottom (when scrolled position is below bottom)                                                   // 3634
          if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {                                          // 3635
            removePinClasses($(this));                                                                                 // 3636
            $(this).addClass('pin-bottom');                                                                            // 3637
            $(this).css('top', options.bottom - $original_offset);                                                     // 3638
          }                                                                                                            // 3639
        });                                                                                                            // 3640
      }                                                                                                                // 3641
                                                                                                                       // 3642
      updateElements($this, $(window).scrollTop());                                                                    // 3643
      $(window).on('scroll.' + $uniqueId, function () {                                                                // 3644
        var $scrolled = $(window).scrollTop() + options.offset;                                                        // 3645
        updateElements($this, $scrolled);                                                                              // 3646
      });                                                                                                              // 3647
                                                                                                                       // 3648
    });                                                                                                                // 3649
                                                                                                                       // 3650
  };                                                                                                                   // 3651
}( jQuery ));;(function ($) {                                                                                          // 3652
  $(document).ready(function() {                                                                                       // 3653
                                                                                                                       // 3654
    // jQuery reverse                                                                                                  // 3655
    $.fn.reverse = [].reverse;                                                                                         // 3656
                                                                                                                       // 3657
    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!                                          // 3658
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {               // 3659
      var $this = $(this);                                                                                             // 3660
      openFABMenu($this);                                                                                              // 3661
    });                                                                                                                // 3662
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {               // 3663
      var $this = $(this);                                                                                             // 3664
      closeFABMenu($this);                                                                                             // 3665
    });                                                                                                                // 3666
                                                                                                                       // 3667
    // Toggle-on-click behaviour.                                                                                      // 3668
    $(document).on('click.fixedActionBtn', '.fixed-action-btn.click-to-toggle > a', function(e) {                      // 3669
      var $this = $(this);                                                                                             // 3670
      var $menu = $this.parent();                                                                                      // 3671
      if ($menu.hasClass('active')) {                                                                                  // 3672
        closeFABMenu($menu);                                                                                           // 3673
      } else {                                                                                                         // 3674
        openFABMenu($menu);                                                                                            // 3675
      }                                                                                                                // 3676
    });                                                                                                                // 3677
                                                                                                                       // 3678
  });                                                                                                                  // 3679
                                                                                                                       // 3680
  $.fn.extend({                                                                                                        // 3681
    openFAB: function() {                                                                                              // 3682
      openFABMenu($(this));                                                                                            // 3683
    },                                                                                                                 // 3684
    closeFAB: function() {                                                                                             // 3685
      closeFABMenu($(this));                                                                                           // 3686
    }                                                                                                                  // 3687
  });                                                                                                                  // 3688
                                                                                                                       // 3689
                                                                                                                       // 3690
  var openFABMenu = function (btn) {                                                                                   // 3691
    $this = btn;                                                                                                       // 3692
    if ($this.hasClass('active') === false) {                                                                          // 3693
                                                                                                                       // 3694
      // Get direction option                                                                                          // 3695
      var horizontal = $this.hasClass('horizontal');                                                                   // 3696
      var offsetY, offsetX;                                                                                            // 3697
                                                                                                                       // 3698
      if (horizontal === true) {                                                                                       // 3699
        offsetX = 40;                                                                                                  // 3700
      } else {                                                                                                         // 3701
        offsetY = 40;                                                                                                  // 3702
      }                                                                                                                // 3703
                                                                                                                       // 3704
      $this.addClass('active');                                                                                        // 3705
      $this.find('ul .btn-floating').velocity(                                                                         // 3706
        { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},                         // 3707
        { duration: 0 });                                                                                              // 3708
                                                                                                                       // 3709
      var time = 0;                                                                                                    // 3710
      $this.find('ul .btn-floating').reverse().each( function () {                                                     // 3711
        $(this).velocity(                                                                                              // 3712
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},                                 // 3713
          { duration: 80, delay: time });                                                                              // 3714
        time += 40;                                                                                                    // 3715
      });                                                                                                              // 3716
    }                                                                                                                  // 3717
  };                                                                                                                   // 3718
                                                                                                                       // 3719
  var closeFABMenu = function (btn) {                                                                                  // 3720
    $this = btn;                                                                                                       // 3721
    // Get direction option                                                                                            // 3722
    var horizontal = $this.hasClass('horizontal');                                                                     // 3723
    var offsetY, offsetX;                                                                                              // 3724
                                                                                                                       // 3725
    if (horizontal === true) {                                                                                         // 3726
      offsetX = 40;                                                                                                    // 3727
    } else {                                                                                                           // 3728
      offsetY = 40;                                                                                                    // 3729
    }                                                                                                                  // 3730
                                                                                                                       // 3731
    $this.removeClass('active');                                                                                       // 3732
    var time = 0;                                                                                                      // 3733
    $this.find('ul .btn-floating').velocity("stop", true);                                                             // 3734
    $this.find('ul .btn-floating').velocity(                                                                           // 3735
      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},             // 3736
      { duration: 80 }                                                                                                 // 3737
    );                                                                                                                 // 3738
  };                                                                                                                   // 3739
                                                                                                                       // 3740
                                                                                                                       // 3741
}( jQuery ));                                                                                                          // 3742
;(function ($) {                                                                                                       // 3743
  // Image transition function                                                                                         // 3744
  Materialize.fadeInImage =  function(selector){                                                                       // 3745
    var element = $(selector);                                                                                         // 3746
    element.css({opacity: 0});                                                                                         // 3747
    $(element).velocity({opacity: 1}, {                                                                                // 3748
        duration: 650,                                                                                                 // 3749
        queue: false,                                                                                                  // 3750
        easing: 'easeOutSine'                                                                                          // 3751
      });                                                                                                              // 3752
    $(element).velocity({opacity: 1}, {                                                                                // 3753
          duration: 1300,                                                                                              // 3754
          queue: false,                                                                                                // 3755
          easing: 'swing',                                                                                             // 3756
          step: function(now, fx) {                                                                                    // 3757
              fx.start = 100;                                                                                          // 3758
              var grayscale_setting = now/100;                                                                         // 3759
              var brightness_setting = 150 - (100 - now)/1.75;                                                         // 3760
                                                                                                                       // 3761
              if (brightness_setting < 100) {                                                                          // 3762
                brightness_setting = 100;                                                                              // 3763
              }                                                                                                        // 3764
              if (now >= 0) {                                                                                          // 3765
                $(this).css({                                                                                          // 3766
                    "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",      // 3767
                    "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"               // 3768
                });                                                                                                    // 3769
              }                                                                                                        // 3770
          }                                                                                                            // 3771
      });                                                                                                              // 3772
  };                                                                                                                   // 3773
                                                                                                                       // 3774
  // Horizontal staggered list                                                                                         // 3775
  Materialize.showStaggeredList = function(selector) {                                                                 // 3776
    var time = 0;                                                                                                      // 3777
    $(selector).find('li').velocity(                                                                                   // 3778
        { translateX: "-100px"},                                                                                       // 3779
        { duration: 0 });                                                                                              // 3780
                                                                                                                       // 3781
    $(selector).find('li').each(function() {                                                                           // 3782
      $(this).velocity(                                                                                                // 3783
        { opacity: "1", translateX: "0"},                                                                              // 3784
        { duration: 800, delay: time, easing: [60, 10] });                                                             // 3785
      time += 120;                                                                                                     // 3786
    });                                                                                                                // 3787
  };                                                                                                                   // 3788
                                                                                                                       // 3789
                                                                                                                       // 3790
  $(document).ready(function() {                                                                                       // 3791
    // Hardcoded .staggered-list scrollFire                                                                            // 3792
    // var staggeredListOptions = [];                                                                                  // 3793
    // $('ul.staggered-list').each(function (i) {                                                                      // 3794
                                                                                                                       // 3795
    //   var label = 'scrollFire-' + i;                                                                                // 3796
    //   $(this).addClass(label);                                                                                      // 3797
    //   staggeredListOptions.push(                                                                                    // 3798
    //     {selector: 'ul.staggered-list.' + label,                                                                    // 3799
    //      offset: 200,                                                                                               // 3800
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});                                        // 3801
    // });                                                                                                             // 3802
    // scrollFire(staggeredListOptions);                                                                               // 3803
                                                                                                                       // 3804
    // HammerJS, Swipe navigation                                                                                      // 3805
                                                                                                                       // 3806
    // Touch Event                                                                                                     // 3807
    var swipeLeft = false;                                                                                             // 3808
    var swipeRight = false;                                                                                            // 3809
                                                                                                                       // 3810
                                                                                                                       // 3811
    // Dismissible Collections                                                                                         // 3812
    $('.dismissable').each(function() {                                                                                // 3813
      $(this).hammer({                                                                                                 // 3814
        prevent_default: false                                                                                         // 3815
      }).bind('pan', function(e) {                                                                                     // 3816
        if (e.gesture.pointerType === "touch") {                                                                       // 3817
          var $this = $(this);                                                                                         // 3818
          var direction = e.gesture.direction;                                                                         // 3819
          var x = e.gesture.deltaX;                                                                                    // 3820
          var velocityX = e.gesture.velocityX;                                                                         // 3821
                                                                                                                       // 3822
          $this.velocity({ translateX: x                                                                               // 3823
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});                                                 // 3824
                                                                                                                       // 3825
          // Swipe Left                                                                                                // 3826
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {                                // 3827
            swipeLeft = true;                                                                                          // 3828
          }                                                                                                            // 3829
                                                                                                                       // 3830
          // Swipe Right                                                                                               // 3831
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {                            // 3832
            swipeRight = true;                                                                                         // 3833
          }                                                                                                            // 3834
        }                                                                                                              // 3835
      }).bind('panend', function(e) {                                                                                  // 3836
        // Reset if collection is moved back into original position                                                    // 3837
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {                                                 // 3838
          swipeRight = false;                                                                                          // 3839
          swipeLeft = false;                                                                                           // 3840
        }                                                                                                              // 3841
                                                                                                                       // 3842
        if (e.gesture.pointerType === "touch") {                                                                       // 3843
          var $this = $(this);                                                                                         // 3844
          if (swipeLeft || swipeRight) {                                                                               // 3845
            var fullWidth;                                                                                             // 3846
            if (swipeLeft) { fullWidth = $this.innerWidth(); }                                                         // 3847
            else { fullWidth = -1 * $this.innerWidth(); }                                                              // 3848
                                                                                                                       // 3849
            $this.velocity({ translateX: fullWidth,                                                                    // 3850
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:                                        // 3851
              function() {                                                                                             // 3852
                $this.css('border', 'none');                                                                           // 3853
                $this.velocity({ height: 0, padding: 0,                                                                // 3854
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:                                    // 3855
                    function() { $this.remove(); }                                                                     // 3856
                  });                                                                                                  // 3857
              }                                                                                                        // 3858
            });                                                                                                        // 3859
          }                                                                                                            // 3860
          else {                                                                                                       // 3861
            $this.velocity({ translateX: 0,                                                                            // 3862
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});                                                // 3863
          }                                                                                                            // 3864
          swipeLeft = false;                                                                                           // 3865
          swipeRight = false;                                                                                          // 3866
        }                                                                                                              // 3867
      });                                                                                                              // 3868
                                                                                                                       // 3869
    });                                                                                                                // 3870
                                                                                                                       // 3871
                                                                                                                       // 3872
    // time = 0                                                                                                        // 3873
    // // Vertical Staggered list                                                                                      // 3874
    // $('ul.staggered-list.vertical li').velocity(                                                                    // 3875
    //     { translateY: "100px"},                                                                                     // 3876
    //     { duration: 0 });                                                                                           // 3877
                                                                                                                       // 3878
    // $('ul.staggered-list.vertical li').each(function() {                                                            // 3879
    //   $(this).velocity(                                                                                             // 3880
    //     { opacity: "1", translateY: "0"},                                                                           // 3881
    //     { duration: 800, delay: time, easing: [60, 25] });                                                          // 3882
    //   time += 120;                                                                                                  // 3883
    // });                                                                                                             // 3884
                                                                                                                       // 3885
    // // Fade in and Scale                                                                                            // 3886
    // $('.fade-in.scale').velocity(                                                                                   // 3887
    //     { scaleX: .4, scaleY: .4, translateX: -600},                                                                // 3888
    //     { duration: 0});                                                                                            // 3889
    // $('.fade-in').each(function() {                                                                                 // 3890
    //   $(this).velocity(                                                                                             // 3891
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},                                                       // 3892
    //     { duration: 800, easing: [60, 10] });                                                                       // 3893
    // });                                                                                                             // 3894
  });                                                                                                                  // 3895
}( jQuery ));                                                                                                          // 3896
;(function($) {                                                                                                        // 3897
                                                                                                                       // 3898
  // Input: Array of JSON objects {selector, offset, callback}                                                         // 3899
                                                                                                                       // 3900
  Materialize.scrollFire = function(options) {                                                                         // 3901
                                                                                                                       // 3902
    var didScroll = false;                                                                                             // 3903
                                                                                                                       // 3904
    window.addEventListener("scroll", function() {                                                                     // 3905
      didScroll = true;                                                                                                // 3906
    });                                                                                                                // 3907
                                                                                                                       // 3908
    // Rate limit to 100ms                                                                                             // 3909
    setInterval(function() {                                                                                           // 3910
      if(didScroll) {                                                                                                  // 3911
          didScroll = false;                                                                                           // 3912
                                                                                                                       // 3913
          var windowScroll = window.pageYOffset + window.innerHeight;                                                  // 3914
                                                                                                                       // 3915
          for (var i = 0 ; i < options.length; i++) {                                                                  // 3916
            // Get options from each line                                                                              // 3917
            var value = options[i];                                                                                    // 3918
            var selector = value.selector,                                                                             // 3919
                offset = value.offset,                                                                                 // 3920
                callback = value.callback;                                                                             // 3921
                                                                                                                       // 3922
            var currentElement = document.querySelector(selector);                                                     // 3923
            if ( currentElement !== null) {                                                                            // 3924
              var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;                     // 3925
                                                                                                                       // 3926
              if (windowScroll > (elementOffset + offset)) {                                                           // 3927
                if (value.done !== true) {                                                                             // 3928
                  if (typeof(callback) === 'function') {                                                               // 3929
                    callback.call(this);                                                                               // 3930
                  } else if (typeof(callback) === 'string') {                                                          // 3931
                    var callbackFunc = new Function(callback);                                                         // 3932
                    callbackFunc();                                                                                    // 3933
                  }                                                                                                    // 3934
                  value.done = true;                                                                                   // 3935
                }                                                                                                      // 3936
              }                                                                                                        // 3937
            }                                                                                                          // 3938
          }                                                                                                            // 3939
      }                                                                                                                // 3940
    }, 100);                                                                                                           // 3941
  };                                                                                                                   // 3942
                                                                                                                       // 3943
})(jQuery);                                                                                                            // 3944
;/*!                                                                                                                   // 3945
 * pickadate.js v3.5.0, 2014/04/13                                                                                     // 3946
 * By Amsul, http://amsul.ca                                                                                           // 3947
 * Hosted on http://amsul.github.io/pickadate.js                                                                       // 3948
 * Licensed under MIT                                                                                                  // 3949
 */                                                                                                                    // 3950
                                                                                                                       // 3951
(function ( factory ) {                                                                                                // 3952
                                                                                                                       // 3953
    // AMD.                                                                                                            // 3954
    if ( typeof define == 'function' && define.amd )                                                                   // 3955
        define( 'picker', ['jquery'], factory )                                                                        // 3956
                                                                                                                       // 3957
    // Node.js/browserify.                                                                                             // 3958
    else if ( typeof exports == 'object' )                                                                             // 3959
        module.exports = factory( require('jquery') )                                                                  // 3960
                                                                                                                       // 3961
    // Browser globals.                                                                                                // 3962
    else this.Picker = factory( jQuery )                                                                               // 3963
                                                                                                                       // 3964
}(function( $ ) {                                                                                                      // 3965
                                                                                                                       // 3966
var $window = $( window )                                                                                              // 3967
var $document = $( document )                                                                                          // 3968
var $html = $( document.documentElement )                                                                              // 3969
                                                                                                                       // 3970
                                                                                                                       // 3971
/**                                                                                                                    // 3972
 * The picker constructor that creates a blank picker.                                                                 // 3973
 */                                                                                                                    // 3974
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {                                                      // 3975
                                                                                                                       // 3976
    // If there’s no element, return the picker constructor.                                                           // 3977
    if ( !ELEMENT ) return PickerConstructor                                                                           // 3978
                                                                                                                       // 3979
                                                                                                                       // 3980
    var                                                                                                                // 3981
        IS_DEFAULT_THEME = false,                                                                                      // 3982
                                                                                                                       // 3983
                                                                                                                       // 3984
        // The state of the picker.                                                                                    // 3985
        STATE = {                                                                                                      // 3986
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )                                         // 3987
        },                                                                                                             // 3988
                                                                                                                       // 3989
                                                                                                                       // 3990
        // Merge the defaults and options passed.                                                                      // 3991
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},                      // 3992
                                                                                                                       // 3993
                                                                                                                       // 3994
        // Merge the default classes with the settings classes.                                                        // 3995
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),                                         // 3996
                                                                                                                       // 3997
                                                                                                                       // 3998
        // The element node wrapper into a jQuery object.                                                              // 3999
        $ELEMENT = $( ELEMENT ),                                                                                       // 4000
                                                                                                                       // 4001
                                                                                                                       // 4002
        // Pseudo picker constructor.                                                                                  // 4003
        PickerInstance = function() {                                                                                  // 4004
            return this.start()                                                                                        // 4005
        },                                                                                                             // 4006
                                                                                                                       // 4007
                                                                                                                       // 4008
        // The picker prototype.                                                                                       // 4009
        P = PickerInstance.prototype = {                                                                               // 4010
                                                                                                                       // 4011
            constructor: PickerInstance,                                                                               // 4012
                                                                                                                       // 4013
            $node: $ELEMENT,                                                                                           // 4014
                                                                                                                       // 4015
                                                                                                                       // 4016
            /**                                                                                                        // 4017
             * Initialize everything                                                                                   // 4018
             */                                                                                                        // 4019
            start: function() {                                                                                        // 4020
                                                                                                                       // 4021
                // If it’s already started, do nothing.                                                                // 4022
                if ( STATE && STATE.start ) return P                                                                   // 4023
                                                                                                                       // 4024
                                                                                                                       // 4025
                // Update the picker states.                                                                           // 4026
                STATE.methods = {}                                                                                     // 4027
                STATE.start = true                                                                                     // 4028
                STATE.open = false                                                                                     // 4029
                STATE.type = ELEMENT.type                                                                              // 4030
                                                                                                                       // 4031
                                                                                                                       // 4032
                // Confirm focus state, convert into text input to remove UA stylings,                                 // 4033
                // and set as readonly to prevent keyboard popup.                                                      // 4034
                ELEMENT.autofocus = ELEMENT == getActiveElement()                                                      // 4035
                ELEMENT.readOnly = !SETTINGS.editable                                                                  // 4036
                ELEMENT.id = ELEMENT.id || STATE.id                                                                    // 4037
                if ( ELEMENT.type != 'text' ) {                                                                        // 4038
                    ELEMENT.type = 'text'                                                                              // 4039
                }                                                                                                      // 4040
                                                                                                                       // 4041
                                                                                                                       // 4042
                // Create a new picker component with the settings.                                                    // 4043
                P.component = new COMPONENT(P, SETTINGS)                                                               // 4044
                                                                                                                       // 4045
                                                                                                                       // 4046
                // Create the picker root with a holder and then prepare it.                                           // 4047
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()                                                                                   // 4049
                                                                                                                       // 4050
                                                                                                                       // 4051
                // If there’s a format for the hidden input element, create the element.                               // 4052
                if ( SETTINGS.formatSubmit ) {                                                                         // 4053
                    prepareElementHidden()                                                                             // 4054
                }                                                                                                      // 4055
                                                                                                                       // 4056
                                                                                                                       // 4057
                // Prepare the input element.                                                                          // 4058
                prepareElement()                                                                                       // 4059
                                                                                                                       // 4060
                                                                                                                       // 4061
                // Insert the root as specified in the settings.                                                       // 4062
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )                                    // 4063
                else $ELEMENT.after( P.$root )                                                                         // 4064
                                                                                                                       // 4065
                                                                                                                       // 4066
                // Bind the default component and settings events.                                                     // 4067
                P.on({                                                                                                 // 4068
                    start: P.component.onStart,                                                                        // 4069
                    render: P.component.onRender,                                                                      // 4070
                    stop: P.component.onStop,                                                                          // 4071
                    open: P.component.onOpen,                                                                          // 4072
                    close: P.component.onClose,                                                                        // 4073
                    set: P.component.onSet                                                                             // 4074
                }).on({                                                                                                // 4075
                    start: SETTINGS.onStart,                                                                           // 4076
                    render: SETTINGS.onRender,                                                                         // 4077
                    stop: SETTINGS.onStop,                                                                             // 4078
                    open: SETTINGS.onOpen,                                                                             // 4079
                    close: SETTINGS.onClose,                                                                           // 4080
                    set: SETTINGS.onSet                                                                                // 4081
                })                                                                                                     // 4082
                                                                                                                       // 4083
                                                                                                                       // 4084
                // Once we’re all set, check the theme in use.                                                         // 4085
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )                                      // 4086
                                                                                                                       // 4087
                                                                                                                       // 4088
                // If the element has autofocus, open the picker.                                                      // 4089
                if ( ELEMENT.autofocus ) {                                                                             // 4090
                    P.open()                                                                                           // 4091
                }                                                                                                      // 4092
                                                                                                                       // 4093
                                                                                                                       // 4094
                // Trigger queued the “start” and “render” events.                                                     // 4095
                return P.trigger( 'start' ).trigger( 'render' )                                                        // 4096
            }, //start                                                                                                 // 4097
                                                                                                                       // 4098
                                                                                                                       // 4099
            /**                                                                                                        // 4100
             * Render a new picker                                                                                     // 4101
             */                                                                                                        // 4102
            render: function( entireComponent ) {                                                                      // 4103
                                                                                                                       // 4104
                // Insert a new component holder in the root or box.                                                   // 4105
                if ( entireComponent ) P.$root.html( createWrappedComponent() )                                        // 4106
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )                         // 4107
                                                                                                                       // 4108
                // Trigger the queued “render” events.                                                                 // 4109
                return P.trigger( 'render' )                                                                           // 4110
            }, //render                                                                                                // 4111
                                                                                                                       // 4112
                                                                                                                       // 4113
            /**                                                                                                        // 4114
             * Destroy everything                                                                                      // 4115
             */                                                                                                        // 4116
            stop: function() {                                                                                         // 4117
                                                                                                                       // 4118
                // If it’s already stopped, do nothing.                                                                // 4119
                if ( !STATE.start ) return P                                                                           // 4120
                                                                                                                       // 4121
                // Then close the picker.                                                                              // 4122
                P.close()                                                                                              // 4123
                                                                                                                       // 4124
                // Remove the hidden field.                                                                            // 4125
                if ( P._hidden ) {                                                                                     // 4126
                    P._hidden.parentNode.removeChild( P._hidden )                                                      // 4127
                }                                                                                                      // 4128
                                                                                                                       // 4129
                // Remove the root.                                                                                    // 4130
                P.$root.remove()                                                                                       // 4131
                                                                                                                       // 4132
                // Remove the input class, remove the stored data, and unbind                                          // 4133
                // the events (after a tick for IE - see `P.close`).                                                   // 4134
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )                                               // 4135
                setTimeout( function() {                                                                               // 4136
                    $ELEMENT.off( '.' + STATE.id )                                                                     // 4137
                }, 0)                                                                                                  // 4138
                                                                                                                       // 4139
                // Restore the element state                                                                           // 4140
                ELEMENT.type = STATE.type                                                                              // 4141
                ELEMENT.readOnly = false                                                                               // 4142
                                                                                                                       // 4143
                // Trigger the queued “stop” events.                                                                   // 4144
                P.trigger( 'stop' )                                                                                    // 4145
                                                                                                                       // 4146
                // Reset the picker states.                                                                            // 4147
                STATE.methods = {}                                                                                     // 4148
                STATE.start = false                                                                                    // 4149
                                                                                                                       // 4150
                return P                                                                                               // 4151
            }, //stop                                                                                                  // 4152
                                                                                                                       // 4153
                                                                                                                       // 4154
            /**                                                                                                        // 4155
             * Open up the picker                                                                                      // 4156
             */                                                                                                        // 4157
            open: function( dontGiveFocus ) {                                                                          // 4158
                                                                                                                       // 4159
                // If it’s already open, do nothing.                                                                   // 4160
                if ( STATE.open ) return P                                                                             // 4161
                                                                                                                       // 4162
                // Add the “active” class.                                                                             // 4163
                $ELEMENT.addClass( CLASSES.active )                                                                    // 4164
                aria( ELEMENT, 'expanded', true )                                                                      // 4165
                                                                                                                       // 4166
                // * A Firefox bug, when `html` has `overflow:hidden`, results in                                      // 4167
                //   killing transitions :(. So add the “opened” state on the next tick.                               // 4168
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289                                          // 4169
                setTimeout( function() {                                                                               // 4170
                                                                                                                       // 4171
                    // Add the “opened” class to the picker root.                                                      // 4172
                    P.$root.addClass( CLASSES.opened )                                                                 // 4173
                    aria( P.$root[0], 'hidden', false )                                                                // 4174
                                                                                                                       // 4175
                }, 0 )                                                                                                 // 4176
                                                                                                                       // 4177
                // If we have to give focus, bind the element and doc events.                                          // 4178
                if ( dontGiveFocus !== false ) {                                                                       // 4179
                                                                                                                       // 4180
                    // Set it as open.                                                                                 // 4181
                    STATE.open = true                                                                                  // 4182
                                                                                                                       // 4183
                    // Prevent the page from scrolling.                                                                // 4184
                    if ( IS_DEFAULT_THEME ) {                                                                          // 4185
                        $html.                                                                                         // 4186
                            css( 'overflow', 'hidden' ).                                                               // 4187
                            css( 'padding-right', '+=' + getScrollbarWidth() )                                         // 4188
                    }                                                                                                  // 4189
                                                                                                                       // 4190
                    // Pass focus to the root element’s jQuery object.                                                 // 4191
                    // * Workaround for iOS8 to bring the picker’s root into view.                                     // 4192
                    P.$root.eq(0).focus()                                                                              // 4193
                                                                                                                       // 4194
                    // Bind the document events.                                                                       // 4195
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {                    // 4196
                                                                                                                       // 4197
                        var target = event.target                                                                      // 4198
                                                                                                                       // 4199
                        // If the target of the event is not the element, close the picker picker.                     // 4200
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.           // 4201
                        //   Also, for Firefox, a click on an `option` element bubbles up directly                     // 4202
                        //   to the doc. So make sure the target wasn't the doc.                                       // 4203
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,            // 4204
                        //   which causes the picker to unexpectedly close when right-clicking it. So make             // 4205
                        //   sure the event wasn’t a right-click.                                                      // 4206
                        if ( target != ELEMENT && target != document && event.which != 3 ) {                           // 4207
                                                                                                                       // 4208
                            // If the target was the holder that covers the screen,                                    // 4209
                            // keep the element focused to maintain tabindex.                                          // 4210
                            P.close( target === P.$root.children()[0] )                                                // 4211
                        }                                                                                              // 4212
                                                                                                                       // 4213
                    }).on( 'keydown.' + STATE.id, function( event ) {                                                  // 4214
                                                                                                                       // 4215
                        var                                                                                            // 4216
                            // Get the keycode.                                                                        // 4217
                            keycode = event.keyCode,                                                                   // 4218
                                                                                                                       // 4219
                            // Translate that to a selection change.                                                   // 4220
                            keycodeToMove = P.component.key[ keycode ],                                                // 4221
                                                                                                                       // 4222
                            // Grab the target.                                                                        // 4223
                            target = event.target                                                                      // 4224
                                                                                                                       // 4225
                                                                                                                       // 4226
                        // On escape, close the picker and give focus.                                                 // 4227
                        if ( keycode == 27 ) {                                                                         // 4228
                            P.close( true )                                                                            // 4229
                        }                                                                                              // 4230
                                                                                                                       // 4231
                                                                                                                       // 4232
                        // Check if there is a key movement or “enter” keypress on the element.                        // 4233
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {                       // 4234
                                                                                                                       // 4235
                            // Prevent the default action to stop page movement.                                       // 4236
                            event.preventDefault()                                                                     // 4237
                                                                                                                       // 4238
                            // Trigger the key movement action.                                                        // 4239
                            if ( keycodeToMove ) {                                                                     // 4240
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }                                                                                          // 4242
                                                                                                                       // 4243
                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.            // 4244
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {      // 4245
                                P.set( 'select', P.component.item.highlight ).close()                                  // 4246
                            }                                                                                          // 4247
                        }                                                                                              // 4248
                                                                                                                       // 4249
                                                                                                                       // 4250
                        // If the target is within the root and “enter” is pressed,                                    // 4251
                        // prevent the default action and trigger a click on the target instead.                       // 4252
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {                                // 4253
                            event.preventDefault()                                                                     // 4254
                            target.click()                                                                             // 4255
                        }                                                                                              // 4256
                    })                                                                                                 // 4257
                }                                                                                                      // 4258
                                                                                                                       // 4259
                // Trigger the queued “open” events.                                                                   // 4260
                return P.trigger( 'open' )                                                                             // 4261
            }, //open                                                                                                  // 4262
                                                                                                                       // 4263
                                                                                                                       // 4264
            /**                                                                                                        // 4265
             * Close the picker                                                                                        // 4266
             */                                                                                                        // 4267
            close: function( giveFocus ) {                                                                             // 4268
                                                                                                                       // 4269
                // If we need to give focus, do it before changing states.                                             // 4270
                if ( giveFocus ) {                                                                                     // 4271
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|                    // 4272
                    // The focus is triggered *after* the close has completed - causing it                             // 4273
                    // to open again. So unbind and rebind the event at the next tick.                                 // 4274
                    P.$root.off( 'focus.toOpen' ).eq(0).focus()                                                        // 4275
                    setTimeout( function() {                                                                           // 4276
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )                                           // 4277
                    }, 0 )                                                                                             // 4278
                }                                                                                                      // 4279
                                                                                                                       // 4280
                // Remove the “active” class.                                                                          // 4281
                $ELEMENT.removeClass( CLASSES.active )                                                                 // 4282
                aria( ELEMENT, 'expanded', false )                                                                     // 4283
                                                                                                                       // 4284
                // * A Firefox bug, when `html` has `overflow:hidden`, results in                                      // 4285
                //   killing transitions :(. So remove the “opened” state on the next tick.                            // 4286
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289                                          // 4287
                setTimeout( function() {                                                                               // 4288
                                                                                                                       // 4289
                    // Remove the “opened” and “focused” class from the picker root.                                   // 4290
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )                                      // 4291
                    aria( P.$root[0], 'hidden', true )                                                                 // 4292
                                                                                                                       // 4293
                }, 0 )                                                                                                 // 4294
                                                                                                                       // 4295
                // If it’s already closed, do nothing more.                                                            // 4296
                if ( !STATE.open ) return P                                                                            // 4297
                                                                                                                       // 4298
                // Set it as closed.                                                                                   // 4299
                STATE.open = false                                                                                     // 4300
                                                                                                                       // 4301
                // Allow the page to scroll.                                                                           // 4302
                if ( IS_DEFAULT_THEME ) {                                                                              // 4303
                    $html.                                                                                             // 4304
                        css( 'overflow', '' ).                                                                         // 4305
                        css( 'padding-right', '-=' + getScrollbarWidth() )                                             // 4306
                }                                                                                                      // 4307
                                                                                                                       // 4308
                // Unbind the document events.                                                                         // 4309
                $document.off( '.' + STATE.id )                                                                        // 4310
                                                                                                                       // 4311
                // Trigger the queued “close” events.                                                                  // 4312
                return P.trigger( 'close' )                                                                            // 4313
            }, //close                                                                                                 // 4314
                                                                                                                       // 4315
                                                                                                                       // 4316
            /**                                                                                                        // 4317
             * Clear the values                                                                                        // 4318
             */                                                                                                        // 4319
            clear: function( options ) {                                                                               // 4320
                return P.set( 'clear', null, options )                                                                 // 4321
            }, //clear                                                                                                 // 4322
                                                                                                                       // 4323
                                                                                                                       // 4324
            /**                                                                                                        // 4325
             * Set something                                                                                           // 4326
             */                                                                                                        // 4327
            set: function( thing, value, options ) {                                                                   // 4328
                                                                                                                       // 4329
                var thingItem, thingValue,                                                                             // 4330
                    thingIsObject = $.isPlainObject( thing ),                                                          // 4331
                    thingObject = thingIsObject ? thing : {}                                                           // 4332
                                                                                                                       // 4333
                // Make sure we have usable options.                                                                   // 4334
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}                            // 4335
                                                                                                                       // 4336
                if ( thing ) {                                                                                         // 4337
                                                                                                                       // 4338
                    // If the thing isn’t an object, make it one.                                                      // 4339
                    if ( !thingIsObject ) {                                                                            // 4340
                        thingObject[ thing ] = value                                                                   // 4341
                    }                                                                                                  // 4342
                                                                                                                       // 4343
                    // Go through the things of items to set.                                                          // 4344
                    for ( thingItem in thingObject ) {                                                                 // 4345
                                                                                                                       // 4346
                        // Grab the value of the thing.                                                                // 4347
                        thingValue = thingObject[ thingItem ]                                                          // 4348
                                                                                                                       // 4349
                        // First, if the item exists and there’s a value, set it.                                      // 4350
                        if ( thingItem in P.component.item ) {                                                         // 4351
                            if ( thingValue === undefined ) thingValue = null                                          // 4352
                            P.component.set( thingItem, thingValue, options )                                          // 4353
                        }                                                                                              // 4354
                                                                                                                       // 4355
                        // Then, check to update the element value and broadcast a change.                             // 4356
                        if ( thingItem == 'select' || thingItem == 'clear' ) {                                         // 4357
                            $ELEMENT.                                                                                  // 4358
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).                // 4359
                                trigger( 'change' )                                                                    // 4360
                        }                                                                                              // 4361
                    }                                                                                                  // 4362
                                                                                                                       // 4363
                    // Render a new picker.                                                                            // 4364
                    P.render()                                                                                         // 4365
                }                                                                                                      // 4366
                                                                                                                       // 4367
                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.                // 4368
                return options.muted ? P : P.trigger( 'set', thingObject )                                             // 4369
            }, //set                                                                                                   // 4370
                                                                                                                       // 4371
                                                                                                                       // 4372
            /**                                                                                                        // 4373
             * Get something                                                                                           // 4374
             */                                                                                                        // 4375
            get: function( thing, format ) {                                                                           // 4376
                                                                                                                       // 4377
                // Make sure there’s something to get.                                                                 // 4378
                thing = thing || 'value'                                                                               // 4379
                                                                                                                       // 4380
                // If a picker state exists, return that.                                                              // 4381
                if ( STATE[ thing ] != null ) {                                                                        // 4382
                    return STATE[ thing ]                                                                              // 4383
                }                                                                                                      // 4384
                                                                                                                       // 4385
                // Return the submission value, if that.                                                               // 4386
                if ( thing == 'valueSubmit' ) {                                                                        // 4387
                    if ( P._hidden ) {                                                                                 // 4388
                        return P._hidden.value                                                                         // 4389
                    }                                                                                                  // 4390
                    thing = 'value'                                                                                    // 4391
                }                                                                                                      // 4392
                                                                                                                       // 4393
                // Return the value, if that.                                                                          // 4394
                if ( thing == 'value' ) {                                                                              // 4395
                    return ELEMENT.value                                                                               // 4396
                }                                                                                                      // 4397
                                                                                                                       // 4398
                // Check if a component item exists, return that.                                                      // 4399
                if ( thing in P.component.item ) {                                                                     // 4400
                    if ( typeof format == 'string' ) {                                                                 // 4401
                        var thingValue = P.component.get( thing )                                                      // 4402
                        return thingValue ?                                                                            // 4403
                            PickerConstructor._.trigger(                                                               // 4404
                                P.component.formats.toString,                                                          // 4405
                                P.component,                                                                           // 4406
                                [ format, thingValue ]                                                                 // 4407
                            ) : ''                                                                                     // 4408
                    }                                                                                                  // 4409
                    return P.component.get( thing )                                                                    // 4410
                }                                                                                                      // 4411
            }, //get                                                                                                   // 4412
                                                                                                                       // 4413
                                                                                                                       // 4414
                                                                                                                       // 4415
            /**                                                                                                        // 4416
             * Bind events on the things.                                                                              // 4417
             */                                                                                                        // 4418
            on: function( thing, method, internal ) {                                                                  // 4419
                                                                                                                       // 4420
                var thingName, thingMethod,                                                                            // 4421
                    thingIsObject = $.isPlainObject( thing ),                                                          // 4422
                    thingObject = thingIsObject ? thing : {}                                                           // 4423
                                                                                                                       // 4424
                if ( thing ) {                                                                                         // 4425
                                                                                                                       // 4426
                    // If the thing isn’t an object, make it one.                                                      // 4427
                    if ( !thingIsObject ) {                                                                            // 4428
                        thingObject[ thing ] = method                                                                  // 4429
                    }                                                                                                  // 4430
                                                                                                                       // 4431
                    // Go through the things to bind to.                                                               // 4432
                    for ( thingName in thingObject ) {                                                                 // 4433
                                                                                                                       // 4434
                        // Grab the method of the thing.                                                               // 4435
                        thingMethod = thingObject[ thingName ]                                                         // 4436
                                                                                                                       // 4437
                        // If it was an internal binding, prefix it.                                                   // 4438
                        if ( internal ) {                                                                              // 4439
                            thingName = '_' + thingName                                                                // 4440
                        }                                                                                              // 4441
                                                                                                                       // 4442
                        // Make sure the thing methods collection exists.                                              // 4443
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []                                  // 4444
                                                                                                                       // 4445
                        // Add the method to the relative method collection.                                           // 4446
                        STATE.methods[ thingName ].push( thingMethod )                                                 // 4447
                    }                                                                                                  // 4448
                }                                                                                                      // 4449
                                                                                                                       // 4450
                return P                                                                                               // 4451
            }, //on                                                                                                    // 4452
                                                                                                                       // 4453
                                                                                                                       // 4454
                                                                                                                       // 4455
            /**                                                                                                        // 4456
             * Unbind events on the things.                                                                            // 4457
             */                                                                                                        // 4458
            off: function() {                                                                                          // 4459
                var i, thingName,                                                                                      // 4460
                    names = arguments;                                                                                 // 4461
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {                                     // 4462
                    thingName = names[i]                                                                               // 4463
                    if ( thingName in STATE.methods ) {                                                                // 4464
                        delete STATE.methods[thingName]                                                                // 4465
                    }                                                                                                  // 4466
                }                                                                                                      // 4467
                return P                                                                                               // 4468
            },                                                                                                         // 4469
                                                                                                                       // 4470
                                                                                                                       // 4471
            /**                                                                                                        // 4472
             * Fire off method events.                                                                                 // 4473
             */                                                                                                        // 4474
            trigger: function( name, data ) {                                                                          // 4475
                var _trigger = function( name ) {                                                                      // 4476
                    var methodList = STATE.methods[ name ]                                                             // 4477
                    if ( methodList ) {                                                                                // 4478
                        methodList.map( function( method ) {                                                           // 4479
                            PickerConstructor._.trigger( method, P, [ data ] )                                         // 4480
                        })                                                                                             // 4481
                    }                                                                                                  // 4482
                }                                                                                                      // 4483
                _trigger( '_' + name )                                                                                 // 4484
                _trigger( name )                                                                                       // 4485
                return P                                                                                               // 4486
            } //trigger                                                                                                // 4487
        } //PickerInstance.prototype                                                                                   // 4488
                                                                                                                       // 4489
                                                                                                                       // 4490
    /**                                                                                                                // 4491
     * Wrap the picker holder components together.                                                                     // 4492
     */                                                                                                                // 4493
    function createWrappedComponent() {                                                                                // 4494
                                                                                                                       // 4495
        // Create a picker wrapper holder                                                                              // 4496
        return PickerConstructor._.node( 'div',                                                                        // 4497
                                                                                                                       // 4498
            // Create a picker wrapper node                                                                            // 4499
            PickerConstructor._.node( 'div',                                                                           // 4500
                                                                                                                       // 4501
                // Create a picker frame                                                                               // 4502
                PickerConstructor._.node( 'div',                                                                       // 4503
                                                                                                                       // 4504
                    // Create a picker box node                                                                        // 4505
                    PickerConstructor._.node( 'div',                                                                   // 4506
                                                                                                                       // 4507
                        // Create the components nodes.                                                                // 4508
                        P.component.nodes( STATE.open ),                                                               // 4509
                                                                                                                       // 4510
                        // The picker box class                                                                        // 4511
                        CLASSES.box                                                                                    // 4512
                    ),                                                                                                 // 4513
                                                                                                                       // 4514
                    // Picker wrap class                                                                               // 4515
                    CLASSES.wrap                                                                                       // 4516
                ),                                                                                                     // 4517
                                                                                                                       // 4518
                // Picker frame class                                                                                  // 4519
                CLASSES.frame                                                                                          // 4520
            ),                                                                                                         // 4521
                                                                                                                       // 4522
            // Picker holder class                                                                                     // 4523
            CLASSES.holder                                                                                             // 4524
        ) //endreturn                                                                                                  // 4525
    } //createWrappedComponent                                                                                         // 4526
                                                                                                                       // 4527
                                                                                                                       // 4528
                                                                                                                       // 4529
    /**                                                                                                                // 4530
     * Prepare the input element with all bindings.                                                                    // 4531
     */                                                                                                                // 4532
    function prepareElement() {                                                                                        // 4533
                                                                                                                       // 4534
        $ELEMENT.                                                                                                      // 4535
                                                                                                                       // 4536
            // Store the picker data by component name.                                                                // 4537
            data(NAME, P).                                                                                             // 4538
                                                                                                                       // 4539
            // Add the “input” class name.                                                                             // 4540
            addClass(CLASSES.input).                                                                                   // 4541
                                                                                                                       // 4542
            // Remove the tabindex.                                                                                    // 4543
            attr('tabindex', -1).                                                                                      // 4544
                                                                                                                       // 4545
            // If there’s a `data-value`, update the value of the element.                                             // 4546
            val( $ELEMENT.data('value') ?                                                                              // 4547
                P.get('select', SETTINGS.format) :                                                                     // 4548
                ELEMENT.value                                                                                          // 4549
            )                                                                                                          // 4550
                                                                                                                       // 4551
                                                                                                                       // 4552
        // Only bind keydown events if the element isn’t editable.                                                     // 4553
        if ( !SETTINGS.editable ) {                                                                                    // 4554
                                                                                                                       // 4555
            $ELEMENT.                                                                                                  // 4556
                                                                                                                       // 4557
                // On focus/click, focus onto the root to open it up.                                                  // 4558
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {                                    // 4559
                    event.preventDefault()                                                                             // 4560
                    P.$root.eq(0).focus()                                                                              // 4561
                }).                                                                                                    // 4562
                                                                                                                       // 4563
                // Handle keyboard event based on the picker being opened or not.                                      // 4564
                on( 'keydown.' + STATE.id, handleKeydownEvent )                                                        // 4565
        }                                                                                                              // 4566
                                                                                                                       // 4567
                                                                                                                       // 4568
        // Update the aria attributes.                                                                                 // 4569
        aria(ELEMENT, {                                                                                                // 4570
            haspopup: true,                                                                                            // 4571
            expanded: false,                                                                                           // 4572
            readonly: false,                                                                                           // 4573
            owns: ELEMENT.id + '_root'                                                                                 // 4574
        })                                                                                                             // 4575
    }                                                                                                                  // 4576
                                                                                                                       // 4577
                                                                                                                       // 4578
    /**                                                                                                                // 4579
     * Prepare the root picker element with all bindings.                                                              // 4580
     */                                                                                                                // 4581
    function prepareElementRoot() {                                                                                    // 4582
                                                                                                                       // 4583
        P.$root.                                                                                                       // 4584
                                                                                                                       // 4585
            on({                                                                                                       // 4586
                                                                                                                       // 4587
                // For iOS8.                                                                                           // 4588
                keydown: handleKeydownEvent,                                                                           // 4589
                                                                                                                       // 4590
                // When something within the root is focused, stop from bubbling                                       // 4591
                // to the doc and remove the “focused” state from the root.                                            // 4592
                focusin: function( event ) {                                                                           // 4593
                    P.$root.removeClass( CLASSES.focused )                                                             // 4594
                    event.stopPropagation()                                                                            // 4595
                },                                                                                                     // 4596
                                                                                                                       // 4597
                // When something within the root holder is clicked, stop it                                           // 4598
                // from bubbling to the doc.                                                                           // 4599
                'mousedown click': function( event ) {                                                                 // 4600
                                                                                                                       // 4601
                    var target = event.target                                                                          // 4602
                                                                                                                       // 4603
                    // Make sure the target isn’t the root holder so it can bubble up.                                 // 4604
                    if ( target != P.$root.children()[ 0 ] ) {                                                         // 4605
                                                                                                                       // 4606
                        event.stopPropagation()                                                                        // 4607
                                                                                                                       // 4608
                        // * For mousedown events, cancel the default action in order to                               // 4609
                        //   prevent cases where focus is shifted onto external elements                               // 4610
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).                 // 4611
                        //   Also, for Firefox, don’t prevent action on the `option` element.                          // 4612
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {
                                                                                                                       // 4614
                            event.preventDefault()                                                                     // 4615
                                                                                                                       // 4616
                            // Re-focus onto the root so that users can click away                                     // 4617
                            // from elements focused within the picker.                                                // 4618
                            P.$root.eq(0).focus()                                                                      // 4619
                        }                                                                                              // 4620
                    }                                                                                                  // 4621
                }                                                                                                      // 4622
            }).                                                                                                        // 4623
                                                                                                                       // 4624
            // Add/remove the “target” class on focus and blur.                                                        // 4625
            on({                                                                                                       // 4626
                focus: function() {                                                                                    // 4627
                    $ELEMENT.addClass( CLASSES.target )                                                                // 4628
                },                                                                                                     // 4629
                blur: function() {                                                                                     // 4630
                    $ELEMENT.removeClass( CLASSES.target )                                                             // 4631
                }                                                                                                      // 4632
            }).                                                                                                        // 4633
                                                                                                                       // 4634
            // Open the picker and adjust the root “focused” state                                                     // 4635
            on( 'focus.toOpen', handleFocusToOpenEvent ).                                                              // 4636
                                                                                                                       // 4637
            // If there’s a click on an actionable element, carry out the actions.                                     // 4638
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {                           // 4639
                                                                                                                       // 4640
                var $target = $( this ),                                                                               // 4641
                    targetData = $target.data(),                                                                       // 4642
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),  // 4643
                                                                                                                       // 4644
                    // * For IE, non-focusable elements can be active elements as well                                 // 4645
                    //   (http://stackoverflow.com/a/2684561).                                                         // 4646
                    activeElement = getActiveElement()                                                                 // 4647
                    activeElement = activeElement && ( activeElement.type || activeElement.href )                      // 4648
                                                                                                                       // 4649
                // If it’s disabled or nothing inside is actively focused, re-focus the element.                       // 4650
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {                   // 4651
                    P.$root.eq(0).focus()                                                                              // 4652
                }                                                                                                      // 4653
                                                                                                                       // 4654
                // If something is superficially changed, update the `highlight` based on the `nav`.                   // 4655
                if ( !targetDisabled && targetData.nav ) {                                                             // 4656
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )                          // 4657
                }                                                                                                      // 4658
                                                                                                                       // 4659
                // If something is picked, set `select` then close with focus.                                         // 4660
                else if ( !targetDisabled && 'pick' in targetData ) {                                                  // 4661
                    P.set( 'select', targetData.pick )                                                                 // 4662
                }                                                                                                      // 4663
                                                                                                                       // 4664
                // If a “clear” button is pressed, empty the values and close with focus.                              // 4665
                else if ( targetData.clear ) {                                                                         // 4666
                    P.clear().close( true )                                                                            // 4667
                }                                                                                                      // 4668
                                                                                                                       // 4669
                else if ( targetData.close ) {                                                                         // 4670
                    P.close( true )                                                                                    // 4671
                }                                                                                                      // 4672
                                                                                                                       // 4673
            }) //P.$root                                                                                               // 4674
                                                                                                                       // 4675
        aria( P.$root[0], 'hidden', true )                                                                             // 4676
    }                                                                                                                  // 4677
                                                                                                                       // 4678
                                                                                                                       // 4679
     /**                                                                                                               // 4680
      * Prepare the hidden input element along with all bindings.                                                      // 4681
      */                                                                                                               // 4682
    function prepareElementHidden() {                                                                                  // 4683
                                                                                                                       // 4684
        var name                                                                                                       // 4685
                                                                                                                       // 4686
        if ( SETTINGS.hiddenName === true ) {                                                                          // 4687
            name = ELEMENT.name                                                                                        // 4688
            ELEMENT.name = ''                                                                                          // 4689
        }                                                                                                              // 4690
        else {                                                                                                         // 4691
            name = [                                                                                                   // 4692
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',                                 // 4693
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'                           // 4694
            ]                                                                                                          // 4695
            name = name[0] + ELEMENT.name + name[1]                                                                    // 4696
        }                                                                                                              // 4697
                                                                                                                       // 4698
        P._hidden = $(                                                                                                 // 4699
            '<input ' +                                                                                                // 4700
            'type=hidden ' +                                                                                           // 4701
                                                                                                                       // 4702
            // Create the name using the original input’s with a prefix and suffix.                                    // 4703
            'name="' + name + '"' +                                                                                    // 4704
                                                                                                                       // 4705
            // If the element has a value, set the hidden value as well.                                               // 4706
            (                                                                                                          // 4707
                $ELEMENT.data('value') || ELEMENT.value ?                                                              // 4708
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :                                        // 4709
                    ''                                                                                                 // 4710
            ) +                                                                                                        // 4711
            '>'                                                                                                        // 4712
        )[0]                                                                                                           // 4713
                                                                                                                       // 4714
        $ELEMENT.                                                                                                      // 4715
                                                                                                                       // 4716
            // If the value changes, update the hidden input with the correct format.                                  // 4717
            on('change.' + STATE.id, function() {                                                                      // 4718
                P._hidden.value = ELEMENT.value ?                                                                      // 4719
                    P.get('select', SETTINGS.formatSubmit) :                                                           // 4720
                    ''                                                                                                 // 4721
            })                                                                                                         // 4722
                                                                                                                       // 4723
                                                                                                                       // 4724
        // Insert the hidden input as specified in the settings.                                                       // 4725
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )                                          // 4726
        else $ELEMENT.after( P._hidden )                                                                               // 4727
    }                                                                                                                  // 4728
                                                                                                                       // 4729
                                                                                                                       // 4730
    // For iOS8.                                                                                                       // 4731
    function handleKeydownEvent( event ) {                                                                             // 4732
                                                                                                                       // 4733
        var keycode = event.keyCode,                                                                                   // 4734
                                                                                                                       // 4735
            // Check if one of the delete keys was pressed.                                                            // 4736
            isKeycodeDelete = /^(8|46)$/.test(keycode)                                                                 // 4737
                                                                                                                       // 4738
        // For some reason IE clears the input value on “escape”.                                                      // 4739
        if ( keycode == 27 ) {                                                                                         // 4740
            P.close()                                                                                                  // 4741
            return false                                                                                               // 4742
        }                                                                                                              // 4743
                                                                                                                       // 4744
        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.                       // 4745
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {                           // 4746
                                                                                                                       // 4747
            // Prevent it from moving the page and bubbling to doc.                                                    // 4748
            event.preventDefault()                                                                                     // 4749
            event.stopPropagation()                                                                                    // 4750
                                                                                                                       // 4751
            // If `delete` was pressed, clear the values and close the picker.                                         // 4752
            // Otherwise open the picker.                                                                              // 4753
            if ( isKeycodeDelete ) { P.clear().close() }                                                               // 4754
            else { P.open() }                                                                                          // 4755
        }                                                                                                              // 4756
    }                                                                                                                  // 4757
                                                                                                                       // 4758
                                                                                                                       // 4759
    // Separated for IE                                                                                                // 4760
    function handleFocusToOpenEvent( event ) {                                                                         // 4761
                                                                                                                       // 4762
        // Stop the event from propagating to the doc.                                                                 // 4763
        event.stopPropagation()                                                                                        // 4764
                                                                                                                       // 4765
        // If it’s a focus event, add the “focused” class to the root.                                                 // 4766
        if ( event.type == 'focus' ) {                                                                                 // 4767
            P.$root.addClass( CLASSES.focused )                                                                        // 4768
        }                                                                                                              // 4769
                                                                                                                       // 4770
        // And then finally open the picker.                                                                           // 4771
        P.open()                                                                                                       // 4772
    }                                                                                                                  // 4773
                                                                                                                       // 4774
                                                                                                                       // 4775
    // Return a new picker instance.                                                                                   // 4776
    return new PickerInstance()                                                                                        // 4777
} //PickerConstructor                                                                                                  // 4778
                                                                                                                       // 4779
                                                                                                                       // 4780
                                                                                                                       // 4781
/**                                                                                                                    // 4782
 * The default classes and prefix to use for the HTML classes.                                                         // 4783
 */                                                                                                                    // 4784
PickerConstructor.klasses = function( prefix ) {                                                                       // 4785
    prefix = prefix || 'picker'                                                                                        // 4786
    return {                                                                                                           // 4787
                                                                                                                       // 4788
        picker: prefix,                                                                                                // 4789
        opened: prefix + '--opened',                                                                                   // 4790
        focused: prefix + '--focused',                                                                                 // 4791
                                                                                                                       // 4792
        input: prefix + '__input',                                                                                     // 4793
        active: prefix + '__input--active',                                                                            // 4794
        target: prefix + '__input--target',                                                                            // 4795
                                                                                                                       // 4796
        holder: prefix + '__holder',                                                                                   // 4797
                                                                                                                       // 4798
        frame: prefix + '__frame',                                                                                     // 4799
        wrap: prefix + '__wrap',                                                                                       // 4800
                                                                                                                       // 4801
        box: prefix + '__box'                                                                                          // 4802
    }                                                                                                                  // 4803
} //PickerConstructor.klasses                                                                                          // 4804
                                                                                                                       // 4805
                                                                                                                       // 4806
                                                                                                                       // 4807
/**                                                                                                                    // 4808
 * Check if the default theme is being used.                                                                           // 4809
 */                                                                                                                    // 4810
function isUsingDefaultTheme( element ) {                                                                              // 4811
                                                                                                                       // 4812
    var theme,                                                                                                         // 4813
        prop = 'position'                                                                                              // 4814
                                                                                                                       // 4815
    // For IE.                                                                                                         // 4816
    if ( element.currentStyle ) {                                                                                      // 4817
        theme = element.currentStyle[prop]                                                                             // 4818
    }                                                                                                                  // 4819
                                                                                                                       // 4820
    // For normal browsers.                                                                                            // 4821
    else if ( window.getComputedStyle ) {                                                                              // 4822
        theme = getComputedStyle( element )[prop]                                                                      // 4823
    }                                                                                                                  // 4824
                                                                                                                       // 4825
    return theme == 'fixed'                                                                                            // 4826
}                                                                                                                      // 4827
                                                                                                                       // 4828
                                                                                                                       // 4829
                                                                                                                       // 4830
/**                                                                                                                    // 4831
 * Get the width of the browser’s scrollbar.                                                                           // 4832
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js                                 // 4833
 */                                                                                                                    // 4834
function getScrollbarWidth() {                                                                                         // 4835
                                                                                                                       // 4836
    if ( $html.height() <= $window.height() ) {                                                                        // 4837
        return 0                                                                                                       // 4838
    }                                                                                                                  // 4839
                                                                                                                       // 4840
    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).                                                 // 4841
        appendTo( 'body' )                                                                                             // 4842
                                                                                                                       // 4843
    // Get the width without scrollbars.                                                                               // 4844
    var widthWithoutScroll = $outer[0].offsetWidth                                                                     // 4845
                                                                                                                       // 4846
    // Force adding scrollbars.                                                                                        // 4847
    $outer.css( 'overflow', 'scroll' )                                                                                 // 4848
                                                                                                                       // 4849
    // Add the inner div.                                                                                              // 4850
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )                                                  // 4851
                                                                                                                       // 4852
    // Get the width with scrollbars.                                                                                  // 4853
    var widthWithScroll = $inner[0].offsetWidth                                                                        // 4854
                                                                                                                       // 4855
    // Remove the divs.                                                                                                // 4856
    $outer.remove()                                                                                                    // 4857
                                                                                                                       // 4858
    // Return the difference between the widths.                                                                       // 4859
    return widthWithoutScroll - widthWithScroll                                                                        // 4860
}                                                                                                                      // 4861
                                                                                                                       // 4862
                                                                                                                       // 4863
                                                                                                                       // 4864
/**                                                                                                                    // 4865
 * PickerConstructor helper methods.                                                                                   // 4866
 */                                                                                                                    // 4867
PickerConstructor._ = {                                                                                                // 4868
                                                                                                                       // 4869
    /**                                                                                                                // 4870
     * Create a group of nodes. Expects:                                                                               // 4871
     * `                                                                                                               // 4872
        {                                                                                                              // 4873
            min:    {Integer},                                                                                         // 4874
            max:    {Integer},                                                                                         // 4875
            i:      {Integer},                                                                                         // 4876
            node:   {String},                                                                                          // 4877
            item:   {Function}                                                                                         // 4878
        }                                                                                                              // 4879
     * `                                                                                                               // 4880
     */                                                                                                                // 4881
    group: function( groupObject ) {                                                                                   // 4882
                                                                                                                       // 4883
        var                                                                                                            // 4884
            // Scope for the looped object                                                                             // 4885
            loopObjectScope,                                                                                           // 4886
                                                                                                                       // 4887
            // Create the nodes list                                                                                   // 4888
            nodesList = '',                                                                                            // 4889
                                                                                                                       // 4890
            // The counter starts from the `min`                                                                       // 4891
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )                                      // 4892
                                                                                                                       // 4893
                                                                                                                       // 4894
        // Loop from the `min` to `max`, incrementing by `i`                                                           // 4895
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {
                                                                                                                       // 4897
            // Trigger the `item` function within scope of the object                                                  // 4898
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )                // 4899
                                                                                                                       // 4900
            // Splice the subgroup and create nodes out of the sub nodes                                               // 4901
            nodesList += PickerConstructor._.node(                                                                     // 4902
                groupObject.node,                                                                                      // 4903
                loopObjectScope[ 0 ],   // the node                                                                    // 4904
                loopObjectScope[ 1 ],   // the classes                                                                 // 4905
                loopObjectScope[ 2 ]    // the attributes                                                              // 4906
            )                                                                                                          // 4907
        }                                                                                                              // 4908
                                                                                                                       // 4909
        // Return the list of nodes                                                                                    // 4910
        return nodesList                                                                                               // 4911
    }, //group                                                                                                         // 4912
                                                                                                                       // 4913
                                                                                                                       // 4914
    /**                                                                                                                // 4915
     * Create a dom node string                                                                                        // 4916
     */                                                                                                                // 4917
    node: function( wrapper, item, klass, attribute ) {                                                                // 4918
                                                                                                                       // 4919
        // If the item is false-y, just return an empty string                                                         // 4920
        if ( !item ) return ''                                                                                         // 4921
                                                                                                                       // 4922
        // If the item is an array, do a join                                                                          // 4923
        item = $.isArray( item ) ? item.join( '' ) : item                                                              // 4924
                                                                                                                       // 4925
        // Check for the class                                                                                         // 4926
        klass = klass ? ' class="' + klass + '"' : ''                                                                  // 4927
                                                                                                                       // 4928
        // Check for any attributes                                                                                    // 4929
        attribute = attribute ? ' ' + attribute : ''                                                                   // 4930
                                                                                                                       // 4931
        // Return the wrapped item                                                                                     // 4932
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'                                   // 4933
    }, //node                                                                                                          // 4934
                                                                                                                       // 4935
                                                                                                                       // 4936
    /**                                                                                                                // 4937
     * Lead numbers below 10 with a zero.                                                                              // 4938
     */                                                                                                                // 4939
    lead: function( number ) {                                                                                         // 4940
        return ( number < 10 ? '0': '' ) + number                                                                      // 4941
    },                                                                                                                 // 4942
                                                                                                                       // 4943
                                                                                                                       // 4944
    /**                                                                                                                // 4945
     * Trigger a function otherwise return the value.                                                                  // 4946
     */                                                                                                                // 4947
    trigger: function( callback, scope, args ) {                                                                       // 4948
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback                          // 4949
    },                                                                                                                 // 4950
                                                                                                                       // 4951
                                                                                                                       // 4952
    /**                                                                                                                // 4953
     * If the second character is a digit, length is 2 otherwise 1.                                                    // 4954
     */                                                                                                                // 4955
    digits: function( string ) {                                                                                       // 4956
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1                                                                    // 4957
    },                                                                                                                 // 4958
                                                                                                                       // 4959
                                                                                                                       // 4960
    /**                                                                                                                // 4961
     * Tell if something is a date object.                                                                             // 4962
     */                                                                                                                // 4963
    isDate: function( value ) {                                                                                        // 4964
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )                   // 4965
    },                                                                                                                 // 4966
                                                                                                                       // 4967
                                                                                                                       // 4968
    /**                                                                                                                // 4969
     * Tell if something is an integer.                                                                                // 4970
     */                                                                                                                // 4971
    isInteger: function( value ) {                                                                                     // 4972
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0                                   // 4973
    },                                                                                                                 // 4974
                                                                                                                       // 4975
                                                                                                                       // 4976
    /**                                                                                                                // 4977
     * Create ARIA attribute strings.                                                                                  // 4978
     */                                                                                                                // 4979
    ariaAttr: ariaAttr                                                                                                 // 4980
} //PickerConstructor._                                                                                                // 4981
                                                                                                                       // 4982
                                                                                                                       // 4983
                                                                                                                       // 4984
/**                                                                                                                    // 4985
 * Extend the picker with a component and defaults.                                                                    // 4986
 */                                                                                                                    // 4987
PickerConstructor.extend = function( name, Component ) {                                                               // 4988
                                                                                                                       // 4989
    // Extend jQuery.                                                                                                  // 4990
    $.fn[ name ] = function( options, action ) {                                                                       // 4991
                                                                                                                       // 4992
        // Grab the component data.                                                                                    // 4993
        var componentData = this.data( name )                                                                          // 4994
                                                                                                                       // 4995
        // If the picker is requested, return the data object.                                                         // 4996
        if ( options == 'picker' ) {                                                                                   // 4997
            return componentData                                                                                       // 4998
        }                                                                                                              // 4999
                                                                                                                       // 5000
        // If the component data exists and `options` is a string, carry out the action.                               // 5001
        if ( componentData && typeof options == 'string' ) {                                                           // 5002
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )                  // 5003
        }                                                                                                              // 5004
                                                                                                                       // 5005
        // Otherwise go through each matched element and if the component                                              // 5006
        // doesn’t exist, create a new picker using `this` element                                                     // 5007
        // and merging the defaults and options with a deep copy.                                                      // 5008
        return this.each( function() {                                                                                 // 5009
            var $this = $( this )                                                                                      // 5010
            if ( !$this.data( name ) ) {                                                                               // 5011
                new PickerConstructor( this, name, Component, options )                                                // 5012
            }                                                                                                          // 5013
        })                                                                                                             // 5014
    }                                                                                                                  // 5015
                                                                                                                       // 5016
    // Set the defaults.                                                                                               // 5017
    $.fn[ name ].defaults = Component.defaults                                                                         // 5018
} //PickerConstructor.extend                                                                                           // 5019
                                                                                                                       // 5020
                                                                                                                       // 5021
                                                                                                                       // 5022
function aria(element, attribute, value) {                                                                             // 5023
    if ( $.isPlainObject(attribute) ) {                                                                                // 5024
        for ( var key in attribute ) {                                                                                 // 5025
            ariaSet(element, key, attribute[key])                                                                      // 5026
        }                                                                                                              // 5027
    }                                                                                                                  // 5028
    else {                                                                                                             // 5029
        ariaSet(element, attribute, value)                                                                             // 5030
    }                                                                                                                  // 5031
}                                                                                                                      // 5032
function ariaSet(element, attribute, value) {                                                                          // 5033
    element.setAttribute(                                                                                              // 5034
        (attribute == 'role' ? '' : 'aria-') + attribute,                                                              // 5035
        value                                                                                                          // 5036
    )                                                                                                                  // 5037
}                                                                                                                      // 5038
function ariaAttr(attribute, data) {                                                                                   // 5039
    if ( !$.isPlainObject(attribute) ) {                                                                               // 5040
        attribute = { attribute: data }                                                                                // 5041
    }                                                                                                                  // 5042
    data = ''                                                                                                          // 5043
    for ( var key in attribute ) {                                                                                     // 5044
        var attr = (key == 'role' ? '' : 'aria-') + key,                                                               // 5045
            attrVal = attribute[key]                                                                                   // 5046
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'                                              // 5047
    }                                                                                                                  // 5048
    return data                                                                                                        // 5049
}                                                                                                                      // 5050
                                                                                                                       // 5051
// IE8 bug throws an error for activeElements within iframes.                                                          // 5052
function getActiveElement() {                                                                                          // 5053
    try {                                                                                                              // 5054
        return document.activeElement                                                                                  // 5055
    } catch ( err ) { }                                                                                                // 5056
}                                                                                                                      // 5057
                                                                                                                       // 5058
                                                                                                                       // 5059
                                                                                                                       // 5060
// Expose the picker constructor.                                                                                      // 5061
return PickerConstructor                                                                                               // 5062
                                                                                                                       // 5063
                                                                                                                       // 5064
}));                                                                                                                   // 5065
                                                                                                                       // 5066
                                                                                                                       // 5067
;/*!                                                                                                                   // 5068
 * Date picker for pickadate.js v3.5.0                                                                                 // 5069
 * http://amsul.github.io/pickadate.js/date.htm                                                                        // 5070
 */                                                                                                                    // 5071
                                                                                                                       // 5072
(function ( factory ) {                                                                                                // 5073
                                                                                                                       // 5074
    // AMD.                                                                                                            // 5075
    if ( typeof define == 'function' && define.amd )                                                                   // 5076
        define( ['picker', 'jquery'], factory )                                                                        // 5077
                                                                                                                       // 5078
    // Node.js/browserify.                                                                                             // 5079
    else if ( typeof exports == 'object' )                                                                             // 5080
        module.exports = factory( require('./picker.js'), require('jquery') )                                          // 5081
                                                                                                                       // 5082
    // Browser globals.                                                                                                // 5083
    else factory( Picker, jQuery )                                                                                     // 5084
                                                                                                                       // 5085
}(function( Picker, $ ) {                                                                                              // 5086
                                                                                                                       // 5087
                                                                                                                       // 5088
/**                                                                                                                    // 5089
 * Globals and constants                                                                                               // 5090
 */                                                                                                                    // 5091
var DAYS_IN_WEEK = 7,                                                                                                  // 5092
    WEEKS_IN_CALENDAR = 6,                                                                                             // 5093
    _ = Picker._                                                                                                       // 5094
                                                                                                                       // 5095
                                                                                                                       // 5096
                                                                                                                       // 5097
/**                                                                                                                    // 5098
 * The date picker constructor                                                                                         // 5099
 */                                                                                                                    // 5100
function DatePicker( picker, settings ) {                                                                              // 5101
                                                                                                                       // 5102
    var calendar = this,                                                                                               // 5103
        element = picker.$node[ 0 ],                                                                                   // 5104
        elementValue = element.value,                                                                                  // 5105
        elementDataValue = picker.$node.data( 'value' ),                                                               // 5106
        valueString = elementDataValue || elementValue,                                                                // 5107
        formatString = elementDataValue ? settings.formatSubmit : settings.format,                                     // 5108
        isRTL = function() {                                                                                           // 5109
                                                                                                                       // 5110
            return element.currentStyle ?                                                                              // 5111
                                                                                                                       // 5112
                // For IE.                                                                                             // 5113
                element.currentStyle.direction == 'rtl' :                                                              // 5114
                                                                                                                       // 5115
                // For normal browsers.                                                                                // 5116
                getComputedStyle( picker.$root[0] ).direction == 'rtl'                                                 // 5117
        }                                                                                                              // 5118
                                                                                                                       // 5119
    calendar.settings = settings                                                                                       // 5120
    calendar.$node = picker.$node                                                                                      // 5121
                                                                                                                       // 5122
    // The queue of methods that will be used to build item objects.                                                   // 5123
    calendar.queue = {                                                                                                 // 5124
        min: 'measure create',                                                                                         // 5125
        max: 'measure create',                                                                                         // 5126
        now: 'now create',                                                                                             // 5127
        select: 'parse create validate',                                                                               // 5128
        highlight: 'parse navigate create validate',                                                                   // 5129
        view: 'parse create validate viewset',                                                                         // 5130
        disable: 'deactivate',                                                                                         // 5131
        enable: 'activate'                                                                                             // 5132
    }                                                                                                                  // 5133
                                                                                                                       // 5134
    // The component's item object.                                                                                    // 5135
    calendar.item = {}                                                                                                 // 5136
                                                                                                                       // 5137
    calendar.item.clear = null                                                                                         // 5138
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )                                                      // 5139
    calendar.item.enable = -(function( collectionDisabled ) {                                                          // 5140
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1                                      // 5141
    })( calendar.item.disable )                                                                                        // 5142
                                                                                                                       // 5143
    calendar.                                                                                                          // 5144
        set( 'min', settings.min ).                                                                                    // 5145
        set( 'max', settings.max ).                                                                                    // 5146
        set( 'now' )                                                                                                   // 5147
                                                                                                                       // 5148
    // When there’s a value, set the `select`, which in turn                                                           // 5149
    // also sets the `highlight` and `view`.                                                                           // 5150
    if ( valueString ) {                                                                                               // 5151
        calendar.set( 'select', valueString, { format: formatString })                                                 // 5152
    }                                                                                                                  // 5153
                                                                                                                       // 5154
    // If there’s no value, default to highlighting “today”.                                                           // 5155
    else {                                                                                                             // 5156
        calendar.                                                                                                      // 5157
            set( 'select', null ).                                                                                     // 5158
            set( 'highlight', calendar.item.now )                                                                      // 5159
    }                                                                                                                  // 5160
                                                                                                                       // 5161
                                                                                                                       // 5162
    // The keycode to movement mapping.                                                                                // 5163
    calendar.key = {                                                                                                   // 5164
        40: 7, // Down                                                                                                 // 5165
        38: -7, // Up                                                                                                  // 5166
        39: function() { return isRTL() ? -1 : 1 }, // Right                                                           // 5167
        37: function() { return isRTL() ? 1 : -1 }, // Left                                                            // 5168
        go: function( timeChange ) {                                                                                   // 5169
            var highlightedObject = calendar.item.highlight,                                                           // 5170
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(                                                                                              // 5172
                'highlight',                                                                                           // 5173
                targetDate,                                                                                            // 5174
                { interval: timeChange }                                                                               // 5175
            )                                                                                                          // 5176
            this.render()                                                                                              // 5177
        }                                                                                                              // 5178
    }                                                                                                                  // 5179
                                                                                                                       // 5180
                                                                                                                       // 5181
    // Bind some picker events.                                                                                        // 5182
    picker.                                                                                                            // 5183
        on( 'render', function() {                                                                                     // 5184
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {                           // 5185
                var value = this.value                                                                                 // 5186
                if ( value ) {                                                                                         // 5187
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )    // 5188
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )                           // 5189
                }                                                                                                      // 5190
            })                                                                                                         // 5191
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {                            // 5192
                var value = this.value                                                                                 // 5193
                if ( value ) {                                                                                         // 5194
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )   // 5195
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )                            // 5196
                }                                                                                                      // 5197
            })                                                                                                         // 5198
        }, 1 ).                                                                                                        // 5199
        on( 'open', function() {                                                                                       // 5200
            var includeToday = ''                                                                                      // 5201
            if ( calendar.disabled( calendar.get('now') ) ) {                                                          // 5202
                includeToday = ':not(.' + settings.klass.buttonToday + ')'                                             // 5203
            }                                                                                                          // 5204
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )                        // 5205
        }, 1 ).                                                                                                        // 5206
        on( 'close', function() {                                                                                      // 5207
            picker.$root.find( 'button, select' ).attr( 'disabled', true )                                             // 5208
        }, 1 )                                                                                                         // 5209
                                                                                                                       // 5210
} //DatePicker                                                                                                         // 5211
                                                                                                                       // 5212
                                                                                                                       // 5213
/**                                                                                                                    // 5214
 * Set a datepicker item object.                                                                                       // 5215
 */                                                                                                                    // 5216
DatePicker.prototype.set = function( type, value, options ) {                                                          // 5217
                                                                                                                       // 5218
    var calendar = this,                                                                                               // 5219
        calendarItem = calendar.item                                                                                   // 5220
                                                                                                                       // 5221
    // If the value is `null` just set it immediately.                                                                 // 5222
    if ( value === null ) {                                                                                            // 5223
        if ( type == 'clear' ) type = 'select'                                                                         // 5224
        calendarItem[ type ] = value                                                                                   // 5225
        return calendar                                                                                                // 5226
    }                                                                                                                  // 5227
                                                                                                                       // 5228
    // Otherwise go through the queue of methods, and invoke the functions.                                            // 5229
    // Update this as the time unit, and set the final value as this item.                                             // 5230
    // * In the case of `enable`, keep the queue but set `disable` instead.                                            // 5231
    //   And in the case of `flip`, keep the queue but set `enable` instead.                                           // 5232
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )                                                             // 5234
        return value                                                                                                   // 5235
    }).pop()                                                                                                           // 5236
                                                                                                                       // 5237
    // Check if we need to cascade through more updates.                                                               // 5238
    if ( type == 'select' ) {                                                                                          // 5239
        calendar.set( 'highlight', calendarItem.select, options )                                                      // 5240
    }                                                                                                                  // 5241
    else if ( type == 'highlight' ) {                                                                                  // 5242
        calendar.set( 'view', calendarItem.highlight, options )                                                        // 5243
    }                                                                                                                  // 5244
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {                                                      // 5245
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {                                       // 5246
            calendar.set( 'select', calendarItem.select, options )                                                     // 5247
        }                                                                                                              // 5248
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {                                 // 5249
            calendar.set( 'highlight', calendarItem.highlight, options )                                               // 5250
        }                                                                                                              // 5251
    }                                                                                                                  // 5252
                                                                                                                       // 5253
    return calendar                                                                                                    // 5254
} //DatePicker.prototype.set                                                                                           // 5255
                                                                                                                       // 5256
                                                                                                                       // 5257
/**                                                                                                                    // 5258
 * Get a datepicker item object.                                                                                       // 5259
 */                                                                                                                    // 5260
DatePicker.prototype.get = function( type ) {                                                                          // 5261
    return this.item[ type ]                                                                                           // 5262
} //DatePicker.prototype.get                                                                                           // 5263
                                                                                                                       // 5264
                                                                                                                       // 5265
/**                                                                                                                    // 5266
 * Create a picker date object.                                                                                        // 5267
 */                                                                                                                    // 5268
DatePicker.prototype.create = function( type, value, options ) {                                                       // 5269
                                                                                                                       // 5270
    var isInfiniteValue,                                                                                               // 5271
        calendar = this                                                                                                // 5272
                                                                                                                       // 5273
    // If there’s no value, use the type as the value.                                                                 // 5274
    value = value === undefined ? type : value                                                                         // 5275
                                                                                                                       // 5276
                                                                                                                       // 5277
    // If it’s infinity, update the value.                                                                             // 5278
    if ( value == -Infinity || value == Infinity ) {                                                                   // 5279
        isInfiniteValue = value                                                                                        // 5280
    }                                                                                                                  // 5281
                                                                                                                       // 5282
    // If it’s an object, use the native date object.                                                                  // 5283
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {                                                // 5284
        value = value.obj                                                                                              // 5285
    }                                                                                                                  // 5286
                                                                                                                       // 5287
    // If it’s an array, convert it into a date and make sure                                                          // 5288
    // that it’s a valid date – otherwise default to today.                                                            // 5289
    else if ( $.isArray( value ) ) {                                                                                   // 5290
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )                                                         // 5291
        value = _.isDate( value ) ? value : calendar.create().obj                                                      // 5292
    }                                                                                                                  // 5293
                                                                                                                       // 5294
    // If it’s a number or date object, make a normalized date.                                                        // 5295
    else if ( _.isInteger( value ) || _.isDate( value ) ) {                                                            // 5296
        value = calendar.normalize( new Date( value ), options )                                                       // 5297
    }                                                                                                                  // 5298
                                                                                                                       // 5299
    // If it’s a literal true or any other case, set it to now.                                                        // 5300
    else /*if ( value === true )*/ {                                                                                   // 5301
        value = calendar.now( type, value, options )                                                                   // 5302
    }                                                                                                                  // 5303
                                                                                                                       // 5304
    // Return the compiled object.                                                                                     // 5305
    return {                                                                                                           // 5306
        year: isInfiniteValue || value.getFullYear(),                                                                  // 5307
        month: isInfiniteValue || value.getMonth(),                                                                    // 5308
        date: isInfiniteValue || value.getDate(),                                                                      // 5309
        day: isInfiniteValue || value.getDay(),                                                                        // 5310
        obj: isInfiniteValue || value,                                                                                 // 5311
        pick: isInfiniteValue || value.getTime()                                                                       // 5312
    }                                                                                                                  // 5313
} //DatePicker.prototype.create                                                                                        // 5314
                                                                                                                       // 5315
                                                                                                                       // 5316
/**                                                                                                                    // 5317
 * Create a range limit object using an array, date object,                                                            // 5318
 * literal “true”, or integer relative to another time.                                                                // 5319
 */                                                                                                                    // 5320
DatePicker.prototype.createRange = function( from, to ) {                                                              // 5321
                                                                                                                       // 5322
    var calendar = this,                                                                                               // 5323
        createDate = function( date ) {                                                                                // 5324
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {                                            // 5325
                return calendar.create( date )                                                                         // 5326
            }                                                                                                          // 5327
            return date                                                                                                // 5328
        }                                                                                                              // 5329
                                                                                                                       // 5330
    // Create objects if possible.                                                                                     // 5331
    if ( !_.isInteger( from ) ) {                                                                                      // 5332
        from = createDate( from )                                                                                      // 5333
    }                                                                                                                  // 5334
    if ( !_.isInteger( to ) ) {                                                                                        // 5335
        to = createDate( to )                                                                                          // 5336
    }                                                                                                                  // 5337
                                                                                                                       // 5338
    // Create relative dates.                                                                                          // 5339
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {                                                              // 5340
        from = [ to.year, to.month, to.date + from ];                                                                  // 5341
    }                                                                                                                  // 5342
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {                                                         // 5343
        to = [ from.year, from.month, from.date + to ];                                                                // 5344
    }                                                                                                                  // 5345
                                                                                                                       // 5346
    return {                                                                                                           // 5347
        from: createDate( from ),                                                                                      // 5348
        to: createDate( to )                                                                                           // 5349
    }                                                                                                                  // 5350
} //DatePicker.prototype.createRange                                                                                   // 5351
                                                                                                                       // 5352
                                                                                                                       // 5353
/**                                                                                                                    // 5354
 * Check if a date unit falls within a date range object.                                                              // 5355
 */                                                                                                                    // 5356
DatePicker.prototype.withinRange = function( range, dateUnit ) {                                                       // 5357
    range = this.createRange(range.from, range.to)                                                                     // 5358
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick                                          // 5359
}                                                                                                                      // 5360
                                                                                                                       // 5361
                                                                                                                       // 5362
/**                                                                                                                    // 5363
 * Check if two date range objects overlap.                                                                            // 5364
 */                                                                                                                    // 5365
DatePicker.prototype.overlapRanges = function( one, two ) {                                                            // 5366
                                                                                                                       // 5367
    var calendar = this                                                                                                // 5368
                                                                                                                       // 5369
    // Convert the ranges into comparable dates.                                                                       // 5370
    one = calendar.createRange( one.from, one.to )                                                                     // 5371
    two = calendar.createRange( two.from, two.to )                                                                     // 5372
                                                                                                                       // 5373
    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||                             // 5374
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )                                   // 5375
}                                                                                                                      // 5376
                                                                                                                       // 5377
                                                                                                                       // 5378
/**                                                                                                                    // 5379
 * Get the date today.                                                                                                 // 5380
 */                                                                                                                    // 5381
DatePicker.prototype.now = function( type, value, options ) {                                                          // 5382
    value = new Date()                                                                                                 // 5383
    if ( options && options.rel ) {                                                                                    // 5384
        value.setDate( value.getDate() + options.rel )                                                                 // 5385
    }                                                                                                                  // 5386
    return this.normalize( value, options )                                                                            // 5387
}                                                                                                                      // 5388
                                                                                                                       // 5389
                                                                                                                       // 5390
/**                                                                                                                    // 5391
 * Navigate to next/prev month.                                                                                        // 5392
 */                                                                                                                    // 5393
DatePicker.prototype.navigate = function( type, value, options ) {                                                     // 5394
                                                                                                                       // 5395
    var targetDateObject,                                                                                              // 5396
        targetYear,                                                                                                    // 5397
        targetMonth,                                                                                                   // 5398
        targetDate,                                                                                                    // 5399
        isTargetArray = $.isArray( value ),                                                                            // 5400
        isTargetObject = $.isPlainObject( value ),                                                                     // 5401
        viewsetObject = this.item.view/*,                                                                              // 5402
        safety = 100*/                                                                                                 // 5403
                                                                                                                       // 5404
                                                                                                                       // 5405
    if ( isTargetArray || isTargetObject ) {                                                                           // 5406
                                                                                                                       // 5407
        if ( isTargetObject ) {                                                                                        // 5408
            targetYear = value.year                                                                                    // 5409
            targetMonth = value.month                                                                                  // 5410
            targetDate = value.date                                                                                    // 5411
        }                                                                                                              // 5412
        else {                                                                                                         // 5413
            targetYear = +value[0]                                                                                     // 5414
            targetMonth = +value[1]                                                                                    // 5415
            targetDate = +value[2]                                                                                     // 5416
        }                                                                                                              // 5417
                                                                                                                       // 5418
        // If we’re navigating months but the view is in a different                                                   // 5419
        // month, navigate to the view’s year and month.                                                               // 5420
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {                        // 5421
            targetYear = viewsetObject.year                                                                            // 5422
            targetMonth = viewsetObject.month                                                                          // 5423
        }                                                                                                              // 5424
                                                                                                                       // 5425
        // Figure out the expected target year and month.                                                              // 5426
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )       // 5427
        targetYear = targetDateObject.getFullYear()                                                                    // 5428
        targetMonth = targetDateObject.getMonth()                                                                      // 5429
                                                                                                                       // 5430
        // If the month we’re going to doesn’t have enough days,                                                       // 5431
        // keep decreasing the date until we reach the month’s last date.                                              // 5432
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {           // 5433
            targetDate -= 1                                                                                            // 5434
            /*safety -= 1                                                                                              // 5435
            if ( !safety ) {                                                                                           // 5436
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/                                                                                                        // 5438
        }                                                                                                              // 5439
                                                                                                                       // 5440
        value = [ targetYear, targetMonth, targetDate ]                                                                // 5441
    }                                                                                                                  // 5442
                                                                                                                       // 5443
    return value                                                                                                       // 5444
} //DatePicker.prototype.navigate                                                                                      // 5445
                                                                                                                       // 5446
                                                                                                                       // 5447
/**                                                                                                                    // 5448
 * Normalize a date by setting the hours to midnight.                                                                  // 5449
 */                                                                                                                    // 5450
DatePicker.prototype.normalize = function( value/*, options*/ ) {                                                      // 5451
    value.setHours( 0, 0, 0, 0 )                                                                                       // 5452
    return value                                                                                                       // 5453
}                                                                                                                      // 5454
                                                                                                                       // 5455
                                                                                                                       // 5456
/**                                                                                                                    // 5457
 * Measure the range of dates.                                                                                         // 5458
 */                                                                                                                    // 5459
DatePicker.prototype.measure = function( type, value/*, options*/ ) {                                                  // 5460
                                                                                                                       // 5461
    var calendar = this                                                                                                // 5462
                                                                                                                       // 5463
    // If it’s anything false-y, remove the limits.                                                                    // 5464
    if ( !value ) {                                                                                                    // 5465
        value = type == 'min' ? -Infinity : Infinity                                                                   // 5466
    }                                                                                                                  // 5467
                                                                                                                       // 5468
    // If it’s a string, parse it.                                                                                     // 5469
    else if ( typeof value == 'string' ) {                                                                             // 5470
        value = calendar.parse( type, value )                                                                          // 5471
    }                                                                                                                  // 5472
                                                                                                                       // 5473
    // If it's an integer, get a date relative to today.                                                               // 5474
    else if ( _.isInteger( value ) ) {                                                                                 // 5475
        value = calendar.now( type, value, { rel: value } )                                                            // 5476
    }                                                                                                                  // 5477
                                                                                                                       // 5478
    return value                                                                                                       // 5479
} ///DatePicker.prototype.measure                                                                                      // 5480
                                                                                                                       // 5481
                                                                                                                       // 5482
/**                                                                                                                    // 5483
 * Create a viewset object based on navigation.                                                                        // 5484
 */                                                                                                                    // 5485
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {                                             // 5486
    return this.create([ dateObject.year, dateObject.month, 1 ])                                                       // 5487
}                                                                                                                      // 5488
                                                                                                                       // 5489
                                                                                                                       // 5490
/**                                                                                                                    // 5491
 * Validate a date as enabled and shift if needed.                                                                     // 5492
 */                                                                                                                    // 5493
DatePicker.prototype.validate = function( type, dateObject, options ) {                                                // 5494
                                                                                                                       // 5495
    var calendar = this,                                                                                               // 5496
                                                                                                                       // 5497
        // Keep a reference to the original date.                                                                      // 5498
        originalDateObject = dateObject,                                                                               // 5499
                                                                                                                       // 5500
        // Make sure we have an interval.                                                                              // 5501
        interval = options && options.interval ? options.interval : 1,                                                 // 5502
                                                                                                                       // 5503
        // Check if the calendar enabled dates are inverted.                                                           // 5504
        isFlippedBase = calendar.item.enable === -1,                                                                   // 5505
                                                                                                                       // 5506
        // Check if we have any enabled dates after/before now.                                                        // 5507
        hasEnabledBeforeTarget, hasEnabledAfterTarget,                                                                 // 5508
                                                                                                                       // 5509
        // The min & max limits.                                                                                       // 5510
        minLimitObject = calendar.item.min,                                                                            // 5511
        maxLimitObject = calendar.item.max,                                                                            // 5512
                                                                                                                       // 5513
        // Check if we’ve reached the limit during shifting.                                                           // 5514
        reachedMin, reachedMax,                                                                                        // 5515
                                                                                                                       // 5516
        // Check if the calendar is inverted and at least one weekday is enabled.                                      // 5517
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {                        // 5518
                                                                                                                       // 5519
            // If there’s a date, check where it is relative to the target.                                            // 5520
            if ( $.isArray( value ) ) {                                                                                // 5521
                var dateTime = calendar.create( value ).pick                                                           // 5522
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true                                        // 5523
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true                                    // 5524
            }                                                                                                          // 5525
                                                                                                                       // 5526
            // Return only integers for enabled weekdays.                                                              // 5527
            return _.isInteger( value )                                                                                // 5528
        }).length/*,                                                                                                   // 5529
                                                                                                                       // 5530
        safety = 100*/                                                                                                 // 5531
                                                                                                                       // 5532
                                                                                                                       // 5533
                                                                                                                       // 5534
    // Cases to validate for:                                                                                          // 5535
    // [1] Not inverted and date disabled.                                                                             // 5536
    // [2] Inverted and some dates enabled.                                                                            // 5537
    // [3] Not inverted and out of range.                                                                              // 5538
    //                                                                                                                 // 5539
    // Cases to **not** validate for:                                                                                  // 5540
    // • Navigating months.                                                                                            // 5541
    // • Not inverted and date enabled.                                                                                // 5542
    // • Inverted and all dates disabled.                                                                              // 5543
    // • ..and anything else.                                                                                          // 5544
    if ( !options || !options.nav ) if (                                                                               // 5545
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||                                               // 5546
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {                                                                                                                // 5549
                                                                                                                       // 5550
                                                                                                                       // 5551
        // When inverted, flip the direction if there aren’t any enabled weekdays                                      // 5552
        // and there are no enabled dates in the direction of the interval.                                            // 5553
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1                                                                                             // 5555
        }                                                                                                              // 5556
                                                                                                                       // 5557
                                                                                                                       // 5558
        // Keep looping until we reach an enabled date.                                                                // 5559
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {                                                      // 5560
                                                                                                                       // 5561
            /*safety -= 1                                                                                              // 5562
            if ( !safety ) {                                                                                           // 5563
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'                            // 5564
            }*/                                                                                                        // 5565
                                                                                                                       // 5566
                                                                                                                       // 5567
            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject                                                                        // 5570
                interval = interval > 0 ? 1 : -1                                                                       // 5571
            }                                                                                                          // 5572
                                                                                                                       // 5573
                                                                                                                       // 5574
            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {                                                            // 5576
                reachedMin = true                                                                                      // 5577
                interval = 1                                                                                           // 5578
                dateObject = calendar.create([                                                                         // 5579
                    minLimitObject.year,                                                                               // 5580
                    minLimitObject.month,                                                                              // 5581
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)                           // 5582
                ])                                                                                                     // 5583
            }                                                                                                          // 5584
            else if ( dateObject.pick >= maxLimitObject.pick ) {                                                       // 5585
                reachedMax = true                                                                                      // 5586
                interval = -1                                                                                          // 5587
                dateObject = calendar.create([                                                                         // 5588
                    maxLimitObject.year,                                                                               // 5589
                    maxLimitObject.month,                                                                              // 5590
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)                            // 5591
                ])                                                                                                     // 5592
            }                                                                                                          // 5593
                                                                                                                       // 5594
                                                                                                                       // 5595
            // If we’ve reached both limits, just break out of the loop.                                               // 5596
            if ( reachedMin && reachedMax ) {                                                                          // 5597
                break                                                                                                  // 5598
            }                                                                                                          // 5599
                                                                                                                       // 5600
                                                                                                                       // 5601
            // Finally, create the shifted date using the interval and keep looping.                                   // 5602
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])            // 5603
        }                                                                                                              // 5604
                                                                                                                       // 5605
    } //endif                                                                                                          // 5606
                                                                                                                       // 5607
                                                                                                                       // 5608
    // Return the date object settled on.                                                                              // 5609
    return dateObject                                                                                                  // 5610
} //DatePicker.prototype.validate                                                                                      // 5611
                                                                                                                       // 5612
                                                                                                                       // 5613
/**                                                                                                                    // 5614
 * Check if a date is disabled.                                                                                        // 5615
 */                                                                                                                    // 5616
DatePicker.prototype.disabled = function( dateToVerify ) {                                                             // 5617
                                                                                                                       // 5618
    var                                                                                                                // 5619
        calendar = this,                                                                                               // 5620
                                                                                                                       // 5621
        // Filter through the disabled dates to check if this is one.                                                  // 5622
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {                                    // 5623
                                                                                                                       // 5624
            // If the date is a number, match the weekday with 0index and `firstDay` check.                            // 5625
            if ( _.isInteger( dateToDisable ) ) {                                                                      // 5626
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7     // 5627
            }                                                                                                          // 5628
                                                                                                                       // 5629
            // If it’s an array or a native JS date, create and match the exact date.                                  // 5630
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {                                           // 5631
                return dateToVerify.pick === calendar.create( dateToDisable ).pick                                     // 5632
            }                                                                                                          // 5633
                                                                                                                       // 5634
            // If it’s an object, match a date within the “from” and “to” range.                                       // 5635
            if ( $.isPlainObject( dateToDisable ) ) {                                                                  // 5636
                return calendar.withinRange( dateToDisable, dateToVerify )                                             // 5637
            }                                                                                                          // 5638
        })                                                                                                             // 5639
                                                                                                                       // 5640
    // If this date matches a disabled date, confirm it’s not inverted.                                                // 5641
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {                    // 5642
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||                                         // 5643
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted                                                 // 5644
    }).length                                                                                                          // 5645
                                                                                                                       // 5646
    // Check the calendar “enabled” flag and respectively flip the                                                     // 5647
    // disabled state. Then also check if it’s beyond the min/max limits.                                              // 5648
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||                                         // 5649
        dateToVerify.pick < calendar.item.min.pick ||                                                                  // 5650
        dateToVerify.pick > calendar.item.max.pick                                                                     // 5651
                                                                                                                       // 5652
} //DatePicker.prototype.disabled                                                                                      // 5653
                                                                                                                       // 5654
                                                                                                                       // 5655
/**                                                                                                                    // 5656
 * Parse a string into a usable type.                                                                                  // 5657
 */                                                                                                                    // 5658
DatePicker.prototype.parse = function( type, value, options ) {                                                        // 5659
                                                                                                                       // 5660
    var calendar = this,                                                                                               // 5661
        parsingObject = {}                                                                                             // 5662
                                                                                                                       // 5663
    // If it’s already parsed, we’re good.                                                                             // 5664
    if ( !value || typeof value != 'string' ) {                                                                        // 5665
        return value                                                                                                   // 5666
    }                                                                                                                  // 5667
                                                                                                                       // 5668
    // We need a `.format` to parse the value with.                                                                    // 5669
    if ( !( options && options.format ) ) {                                                                            // 5670
        options = options || {}                                                                                        // 5671
        options.format = calendar.settings.format                                                                      // 5672
    }                                                                                                                  // 5673
                                                                                                                       // 5674
    // Convert the format into an array and then map through it.                                                       // 5675
    calendar.formats.toArray( options.format ).map( function( label ) {                                                // 5676
                                                                                                                       // 5677
        var                                                                                                            // 5678
            // Grab the formatting label.                                                                              // 5679
            formattingLabel = calendar.formats[ label ],                                                               // 5680
                                                                                                                       // 5681
            // The format length is from the formatting label function or the                                          // 5682
            // label length without the escaping exclamation (!) mark.                                                 // 5683
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length
                                                                                                                       // 5685
        // If there's a format label, split the value up to the format length.                                         // 5686
        // Then add it to the parsing object with appropriate label.                                                   // 5687
        if ( formattingLabel ) {                                                                                       // 5688
            parsingObject[ label ] = value.substr( 0, formatLength )                                                   // 5689
        }                                                                                                              // 5690
                                                                                                                       // 5691
        // Update the value as the substring from format length to end.                                                // 5692
        value = value.substr( formatLength )                                                                           // 5693
    })                                                                                                                 // 5694
                                                                                                                       // 5695
    // Compensate for month 0index.                                                                                    // 5696
    return [                                                                                                           // 5697
        parsingObject.yyyy || parsingObject.yy,                                                                        // 5698
        +( parsingObject.mm || parsingObject.m ) - 1,                                                                  // 5699
        parsingObject.dd || parsingObject.d                                                                            // 5700
    ]                                                                                                                  // 5701
} //DatePicker.prototype.parse                                                                                         // 5702
                                                                                                                       // 5703
                                                                                                                       // 5704
/**                                                                                                                    // 5705
 * Various formats to display the object in.                                                                           // 5706
 */                                                                                                                    // 5707
DatePicker.prototype.formats = (function() {                                                                           // 5708
                                                                                                                       // 5709
    // Return the length of the first word in a collection.                                                            // 5710
    function getWordLengthFromCollection( string, collection, dateObject ) {                                           // 5711
                                                                                                                       // 5712
        // Grab the first word from the string.                                                                        // 5713
        var word = string.match( /\w+/ )[ 0 ]                                                                          // 5714
                                                                                                                       // 5715
        // If there's no month index, add it to the date object                                                        // 5716
        if ( !dateObject.mm && !dateObject.m ) {                                                                       // 5717
            dateObject.m = collection.indexOf( word ) + 1                                                              // 5718
        }                                                                                                              // 5719
                                                                                                                       // 5720
        // Return the length of the word.                                                                              // 5721
        return word.length                                                                                             // 5722
    }                                                                                                                  // 5723
                                                                                                                       // 5724
    // Get the length of the first word in a string.                                                                   // 5725
    function getFirstWordLength( string ) {                                                                            // 5726
        return string.match( /\w+/ )[ 0 ].length                                                                       // 5727
    }                                                                                                                  // 5728
                                                                                                                       // 5729
    return {                                                                                                           // 5730
                                                                                                                       // 5731
        d: function( string, dateObject ) {                                                                            // 5732
                                                                                                                       // 5733
            // If there's string, then get the digits length.                                                          // 5734
            // Otherwise return the selected date.                                                                     // 5735
            return string ? _.digits( string ) : dateObject.date                                                       // 5736
        },                                                                                                             // 5737
        dd: function( string, dateObject ) {                                                                           // 5738
                                                                                                                       // 5739
            // If there's a string, then the length is always 2.                                                       // 5740
            // Otherwise return the selected date with a leading zero.                                                 // 5741
            return string ? 2 : _.lead( dateObject.date )                                                              // 5742
        },                                                                                                             // 5743
        ddd: function( string, dateObject ) {                                                                          // 5744
                                                                                                                       // 5745
            // If there's a string, then get the length of the first word.                                             // 5746
            // Otherwise return the short selected weekday.                                                            // 5747
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]               // 5748
        },                                                                                                             // 5749
        dddd: function( string, dateObject ) {                                                                         // 5750
                                                                                                                       // 5751
            // If there's a string, then get the length of the first word.                                             // 5752
            // Otherwise return the full selected weekday.                                                             // 5753
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]                // 5754
        },                                                                                                             // 5755
        m: function( string, dateObject ) {                                                                            // 5756
                                                                                                                       // 5757
            // If there's a string, then get the length of the digits                                                  // 5758
            // Otherwise return the selected month with 0index compensation.                                           // 5759
            return string ? _.digits( string ) : dateObject.month + 1                                                  // 5760
        },                                                                                                             // 5761
        mm: function( string, dateObject ) {                                                                           // 5762
                                                                                                                       // 5763
            // If there's a string, then the length is always 2.                                                       // 5764
            // Otherwise return the selected month with 0index and leading zero.                                       // 5765
            return string ? 2 : _.lead( dateObject.month + 1 )                                                         // 5766
        },                                                                                                             // 5767
        mmm: function( string, dateObject ) {                                                                          // 5768
                                                                                                                       // 5769
            var collection = this.settings.monthsShort                                                                 // 5770
                                                                                                                       // 5771
            // If there's a string, get length of the relevant month from the short                                    // 5772
            // months collection. Otherwise return the selected month from that collection.                            // 5773
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },                                                                                                             // 5775
        mmmm: function( string, dateObject ) {                                                                         // 5776
                                                                                                                       // 5777
            var collection = this.settings.monthsFull                                                                  // 5778
                                                                                                                       // 5779
            // If there's a string, get length of the relevant month from the full                                     // 5780
            // months collection. Otherwise return the selected month from that collection.                            // 5781
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },                                                                                                             // 5783
        yy: function( string, dateObject ) {                                                                           // 5784
                                                                                                                       // 5785
            // If there's a string, then the length is always 2.                                                       // 5786
            // Otherwise return the selected year by slicing out the first 2 digits.                                   // 5787
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )                                                    // 5788
        },                                                                                                             // 5789
        yyyy: function( string, dateObject ) {                                                                         // 5790
                                                                                                                       // 5791
            // If there's a string, then the length is always 4.                                                       // 5792
            // Otherwise return the selected year.                                                                     // 5793
            return string ? 4 : dateObject.year                                                                        // 5794
        },                                                                                                             // 5795
                                                                                                                       // 5796
        // Create an array by splitting the formatting string passed.                                                  // 5797
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },              // 5798
                                                                                                                       // 5799
        // Format an object into a string using the formatting options.                                                // 5800
        toString: function ( formatString, itemObject ) {                                                              // 5801
            var calendar = this                                                                                        // 5802
            return calendar.formats.toArray( formatString ).map( function( label ) {                                   // 5803
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )                                                                                              // 5805
        }                                                                                                              // 5806
    }                                                                                                                  // 5807
})() //DatePicker.prototype.formats                                                                                    // 5808
                                                                                                                       // 5809
                                                                                                                       // 5810
                                                                                                                       // 5811
                                                                                                                       // 5812
/**                                                                                                                    // 5813
 * Check if two date units are the exact.                                                                              // 5814
 */                                                                                                                    // 5815
DatePicker.prototype.isDateExact = function( one, two ) {                                                              // 5816
                                                                                                                       // 5817
    var calendar = this                                                                                                // 5818
                                                                                                                       // 5819
    // When we’re working with weekdays, do a direct comparison.                                                       // 5820
    if (                                                                                                               // 5821
        ( _.isInteger( one ) && _.isInteger( two ) ) ||                                                                // 5822
        ( typeof one == 'boolean' && typeof two == 'boolean' )                                                         // 5823
     ) {                                                                                                               // 5824
        return one === two                                                                                             // 5825
    }                                                                                                                  // 5826
                                                                                                                       // 5827
    // When we’re working with date representations, compare the “pick” value.                                         // 5828
    if (                                                                                                               // 5829
        ( _.isDate( one ) || $.isArray( one ) ) &&                                                                     // 5830
        ( _.isDate( two ) || $.isArray( two ) )                                                                        // 5831
    ) {                                                                                                                // 5832
        return calendar.create( one ).pick === calendar.create( two ).pick                                             // 5833
    }                                                                                                                  // 5834
                                                                                                                       // 5835
    // When we’re working with range objects, compare the “from” and “to”.                                             // 5836
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {                                                          // 5837
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )                    // 5838
    }                                                                                                                  // 5839
                                                                                                                       // 5840
    return false                                                                                                       // 5841
}                                                                                                                      // 5842
                                                                                                                       // 5843
                                                                                                                       // 5844
/**                                                                                                                    // 5845
 * Check if two date units overlap.                                                                                    // 5846
 */                                                                                                                    // 5847
DatePicker.prototype.isDateOverlap = function( one, two ) {                                                            // 5848
                                                                                                                       // 5849
    var calendar = this,                                                                                               // 5850
        firstDay = calendar.settings.firstDay ? 1 : 0                                                                  // 5851
                                                                                                                       // 5852
    // When we’re working with a weekday index, compare the days.                                                      // 5853
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {                                             // 5854
        one = one % 7 + firstDay                                                                                       // 5855
        return one === calendar.create( two ).day + 1                                                                  // 5856
    }                                                                                                                  // 5857
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {                                             // 5858
        two = two % 7 + firstDay                                                                                       // 5859
        return two === calendar.create( one ).day + 1                                                                  // 5860
    }                                                                                                                  // 5861
                                                                                                                       // 5862
    // When we’re working with range objects, check if the ranges overlap.                                             // 5863
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {                                                          // 5864
        return calendar.overlapRanges( one, two )                                                                      // 5865
    }                                                                                                                  // 5866
                                                                                                                       // 5867
    return false                                                                                                       // 5868
}                                                                                                                      // 5869
                                                                                                                       // 5870
                                                                                                                       // 5871
/**                                                                                                                    // 5872
 * Flip the “enabled” state.                                                                                           // 5873
 */                                                                                                                    // 5874
DatePicker.prototype.flipEnable = function(val) {                                                                      // 5875
    var itemObject = this.item                                                                                         // 5876
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)                                                      // 5877
}                                                                                                                      // 5878
                                                                                                                       // 5879
                                                                                                                       // 5880
/**                                                                                                                    // 5881
 * Mark a collection of dates as “disabled”.                                                                           // 5882
 */                                                                                                                    // 5883
DatePicker.prototype.deactivate = function( type, datesToDisable ) {                                                   // 5884
                                                                                                                       // 5885
    var calendar = this,                                                                                               // 5886
        disabledItems = calendar.item.disable.slice(0)                                                                 // 5887
                                                                                                                       // 5888
                                                                                                                       // 5889
    // If we’re flipping, that’s all we need to do.                                                                    // 5890
    if ( datesToDisable == 'flip' ) {                                                                                  // 5891
        calendar.flipEnable()                                                                                          // 5892
    }                                                                                                                  // 5893
                                                                                                                       // 5894
    else if ( datesToDisable === false ) {                                                                             // 5895
        calendar.flipEnable(1)                                                                                         // 5896
        disabledItems = []                                                                                             // 5897
    }                                                                                                                  // 5898
                                                                                                                       // 5899
    else if ( datesToDisable === true ) {                                                                              // 5900
        calendar.flipEnable(-1)                                                                                        // 5901
        disabledItems = []                                                                                             // 5902
    }                                                                                                                  // 5903
                                                                                                                       // 5904
    // Otherwise go through the dates to disable.                                                                      // 5905
    else {                                                                                                             // 5906
                                                                                                                       // 5907
        datesToDisable.map(function( unitToDisable ) {                                                                 // 5908
                                                                                                                       // 5909
            var matchFound                                                                                             // 5910
                                                                                                                       // 5911
            // When we have disabled items, check for matches.                                                         // 5912
            // If something is matched, immediately break out.                                                         // 5913
            for ( var index = 0; index < disabledItems.length; index += 1 ) {                                          // 5914
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {                                   // 5915
                    matchFound = true                                                                                  // 5916
                    break                                                                                              // 5917
                }                                                                                                      // 5918
            }                                                                                                          // 5919
                                                                                                                       // 5920
            // If nothing was found, add the validated unit to the collection.                                         // 5921
            if ( !matchFound ) {                                                                                       // 5922
                if (                                                                                                   // 5923
                    _.isInteger( unitToDisable ) ||                                                                    // 5924
                    _.isDate( unitToDisable ) ||                                                                       // 5925
                    $.isArray( unitToDisable ) ||                                                                      // 5926
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )                     // 5927
                ) {                                                                                                    // 5928
                    disabledItems.push( unitToDisable )                                                                // 5929
                }                                                                                                      // 5930
            }                                                                                                          // 5931
        })                                                                                                             // 5932
    }                                                                                                                  // 5933
                                                                                                                       // 5934
    // Return the updated collection.                                                                                  // 5935
    return disabledItems                                                                                               // 5936
} //DatePicker.prototype.deactivate                                                                                    // 5937
                                                                                                                       // 5938
                                                                                                                       // 5939
/**                                                                                                                    // 5940
 * Mark a collection of dates as “enabled”.                                                                            // 5941
 */                                                                                                                    // 5942
DatePicker.prototype.activate = function( type, datesToEnable ) {                                                      // 5943
                                                                                                                       // 5944
    var calendar = this,                                                                                               // 5945
        disabledItems = calendar.item.disable,                                                                         // 5946
        disabledItemsCount = disabledItems.length                                                                      // 5947
                                                                                                                       // 5948
    // If we’re flipping, that’s all we need to do.                                                                    // 5949
    if ( datesToEnable == 'flip' ) {                                                                                   // 5950
        calendar.flipEnable()                                                                                          // 5951
    }                                                                                                                  // 5952
                                                                                                                       // 5953
    else if ( datesToEnable === true ) {                                                                               // 5954
        calendar.flipEnable(1)                                                                                         // 5955
        disabledItems = []                                                                                             // 5956
    }                                                                                                                  // 5957
                                                                                                                       // 5958
    else if ( datesToEnable === false ) {                                                                              // 5959
        calendar.flipEnable(-1)                                                                                        // 5960
        disabledItems = []                                                                                             // 5961
    }                                                                                                                  // 5962
                                                                                                                       // 5963
    // Otherwise go through the disabled dates.                                                                        // 5964
    else {                                                                                                             // 5965
                                                                                                                       // 5966
        datesToEnable.map(function( unitToEnable ) {                                                                   // 5967
                                                                                                                       // 5968
            var matchFound,                                                                                            // 5969
                disabledUnit,                                                                                          // 5970
                index,                                                                                                 // 5971
                isExactRange                                                                                           // 5972
                                                                                                                       // 5973
            // Go through the disabled items and try to find a match.                                                  // 5974
            for ( index = 0; index < disabledItemsCount; index += 1 ) {                                                // 5975
                                                                                                                       // 5976
                disabledUnit = disabledItems[index]                                                                    // 5977
                                                                                                                       // 5978
                // When an exact match is found, remove it from the collection.                                        // 5979
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {                                            // 5980
                    matchFound = disabledItems[index] = null                                                           // 5981
                    isExactRange = true                                                                                // 5982
                    break                                                                                              // 5983
                }                                                                                                      // 5984
                                                                                                                       // 5985
                // When an overlapped match is found, add the “inverted” state to it.                                  // 5986
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {                                     // 5987
                    if ( $.isPlainObject( unitToEnable ) ) {                                                           // 5988
                        unitToEnable.inverted = true                                                                   // 5989
                        matchFound = unitToEnable                                                                      // 5990
                    }                                                                                                  // 5991
                    else if ( $.isArray( unitToEnable ) ) {                                                            // 5992
                        matchFound = unitToEnable                                                                      // 5993
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )                                            // 5994
                    }                                                                                                  // 5995
                    else if ( _.isDate( unitToEnable ) ) {                                                             // 5996
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }                                                                                                  // 5998
                    break                                                                                              // 5999
                }                                                                                                      // 6000
            }                                                                                                          // 6001
                                                                                                                       // 6002
            // If a match was found, remove a previous duplicate entry.                                                // 6003
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {                              // 6004
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {                                    // 6005
                    disabledItems[index] = null                                                                        // 6006
                    break                                                                                              // 6007
                }                                                                                                      // 6008
            }                                                                                                          // 6009
                                                                                                                       // 6010
            // In the event that we’re dealing with an exact range of dates,                                           // 6011
            // make sure there are no “inverted” dates because of it.                                                  // 6012
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {                            // 6013
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {                                  // 6014
                    disabledItems[index] = null                                                                        // 6015
                    break                                                                                              // 6016
                }                                                                                                      // 6017
            }                                                                                                          // 6018
                                                                                                                       // 6019
            // If something is still matched, add it into the collection.                                              // 6020
            if ( matchFound ) {                                                                                        // 6021
                disabledItems.push( matchFound )                                                                       // 6022
            }                                                                                                          // 6023
        })                                                                                                             // 6024
    }                                                                                                                  // 6025
                                                                                                                       // 6026
    // Return the updated collection.                                                                                  // 6027
    return disabledItems.filter(function( val ) { return val != null })                                                // 6028
} //DatePicker.prototype.activate                                                                                      // 6029
                                                                                                                       // 6030
                                                                                                                       // 6031
/**                                                                                                                    // 6032
 * Create a string for the nodes in the picker.                                                                        // 6033
 */                                                                                                                    // 6034
DatePicker.prototype.nodes = function( isOpen ) {                                                                      // 6035
                                                                                                                       // 6036
    var                                                                                                                // 6037
        calendar = this,                                                                                               // 6038
        settings = calendar.settings,                                                                                  // 6039
        calendarItem = calendar.item,                                                                                  // 6040
        nowObject = calendarItem.now,                                                                                  // 6041
        selectedObject = calendarItem.select,                                                                          // 6042
        highlightedObject = calendarItem.highlight,                                                                    // 6043
        viewsetObject = calendarItem.view,                                                                             // 6044
        disabledCollection = calendarItem.disable,                                                                     // 6045
        minLimitObject = calendarItem.min,                                                                             // 6046
        maxLimitObject = calendarItem.max,                                                                             // 6047
                                                                                                                       // 6048
                                                                                                                       // 6049
        // Create the calendar table head using a copy of weekday labels collection.                                   // 6050
        // * We do a copy so we don't mutate the original array.                                                       // 6051
        tableHead = (function( collection, fullCollection ) {                                                          // 6052
                                                                                                                       // 6053
            // If the first day should be Monday, move Sunday to the end.                                              // 6054
            if ( settings.firstDay ) {                                                                                 // 6055
                collection.push( collection.shift() )                                                                  // 6056
                fullCollection.push( fullCollection.shift() )                                                          // 6057
            }                                                                                                          // 6058
                                                                                                                       // 6059
            // Create and return the table head group.                                                                 // 6060
            return _.node(                                                                                             // 6061
                'thead',                                                                                               // 6062
                _.node(                                                                                                // 6063
                    'tr',                                                                                              // 6064
                    _.group({                                                                                          // 6065
                        min: 0,                                                                                        // 6066
                        max: DAYS_IN_WEEK - 1,                                                                         // 6067
                        i: 1,                                                                                          // 6068
                        node: 'th',                                                                                    // 6069
                        item: function( counter ) {                                                                    // 6070
                            return [                                                                                   // 6071
                                collection[ counter ],                                                                 // 6072
                                settings.klass.weekdays,                                                               // 6073
                                'scope=col title="' + fullCollection[ counter ] + '"'                                  // 6074
                            ]                                                                                          // 6075
                        }                                                                                              // 6076
                    })                                                                                                 // 6077
                )                                                                                                      // 6078
            ) //endreturn                                                                                              // 6079
                                                                                                                       // 6080
        // Materialize modified                                                                                        // 6081
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead
                                                                                                                       // 6083
                                                                                                                       // 6084
        // Create the nav for next/prev month.                                                                         // 6085
        createMonthNav = function( next ) {                                                                            // 6086
                                                                                                                       // 6087
            // Otherwise, return the created month tag.                                                                // 6088
            return _.node(                                                                                             // 6089
                'div',                                                                                                 // 6090
                ' ',                                                                                                   // 6091
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (                                               // 6092
                                                                                                                       // 6093
                    // If the focused month is outside the range, disabled the button.                                 // 6094
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''                                                              // 6097
                ),                                                                                                     // 6098
                'data-nav=' + ( next || -1 ) + ' ' +                                                                   // 6099
                _.ariaAttr({                                                                                           // 6100
                    role: 'button',                                                                                    // 6101
                    controls: calendar.$node[0].id + '_table'                                                          // 6102
                }) + ' ' +                                                                                             // 6103
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'                          // 6104
            ) //endreturn                                                                                              // 6105
        }, //createMonthNav                                                                                            // 6106
                                                                                                                       // 6107
                                                                                                                       // 6108
        // Create the month label.                                                                                     // 6109
        //Materialize modified                                                                                         // 6110
        createMonthLabel = function(override) {                                                                        // 6111
                                                                                                                       // 6112
            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull               // 6113
                                                                                                                       // 6114
             // Materialize modified                                                                                   // 6115
            if (override == "short_months") {                                                                          // 6116
              monthsCollection = settings.monthsShort;                                                                 // 6117
            }                                                                                                          // 6118
                                                                                                                       // 6119
            // If there are months to select, add a dropdown menu.                                                     // 6120
            if ( settings.selectMonths  && override == undefined) {                                                    // 6121
                                                                                                                       // 6122
                return _.node( 'select',                                                                               // 6123
                    _.group({                                                                                          // 6124
                        min: 0,                                                                                        // 6125
                        max: 11,                                                                                       // 6126
                        i: 1,                                                                                          // 6127
                        node: 'option',                                                                                // 6128
                        item: function( loopedMonth ) {                                                                // 6129
                                                                                                                       // 6130
                            return [                                                                                   // 6131
                                                                                                                       // 6132
                                // The looped month and no classes.                                                    // 6133
                                monthsCollection[ loopedMonth ], 0,                                                    // 6134
                                                                                                                       // 6135
                                // Set the value and selected index.                                                   // 6136
                                'value=' + loopedMonth +                                                               // 6137
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +                            // 6138
                                (                                                                                      // 6139
                                    (                                                                                  // 6140
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?                                                                                // 6143
                                    ' disabled' : ''                                                                   // 6144
                                )                                                                                      // 6145
                            ]                                                                                          // 6146
                        }                                                                                              // 6147
                    }),                                                                                                // 6148
                    settings.klass.selectMonth + ' browser-default',                                                   // 6149
                    ( isOpen ? '' : 'disabled' ) + ' ' +                                                               // 6150
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +                                  // 6151
                    'title="' + settings.labelMonthSelect + '"'                                                        // 6152
                )                                                                                                      // 6153
            }                                                                                                          // 6154
                                                                                                                       // 6155
            // Materialize modified                                                                                    // 6156
            if (override == "short_months")                                                                            // 6157
                if (selectedObject != null)                                                                            // 6158
                return _.node( 'div', monthsCollection[ selectedObject.month ] );                                      // 6159
                else return _.node( 'div', monthsCollection[ viewsetObject.month ] );                                  // 6160
                                                                                                                       // 6161
            // If there's a need for a month selector                                                                  // 6162
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )                      // 6163
        }, //createMonthLabel                                                                                          // 6164
                                                                                                                       // 6165
                                                                                                                       // 6166
        // Create the year label.                                                                                      // 6167
        // Materialize modified                                                                                        // 6168
        createYearLabel = function(override) {                                                                         // 6169
                                                                                                                       // 6170
            var focusedYear = viewsetObject.year,                                                                      // 6171
                                                                                                                       // 6172
            // If years selector is set to a literal "true", set it to 5. Otherwise                                    // 6173
            // divide in half to get half before and half after focused year.                                          // 6174
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )                           // 6175
                                                                                                                       // 6176
            // If there are years to select, add a dropdown menu.                                                      // 6177
            if ( numberYears ) {                                                                                       // 6178
                                                                                                                       // 6179
                var                                                                                                    // 6180
                    minYear = minLimitObject.year,                                                                     // 6181
                    maxYear = maxLimitObject.year,                                                                     // 6182
                    lowestYear = focusedYear - numberYears,                                                            // 6183
                    highestYear = focusedYear + numberYears                                                            // 6184
                                                                                                                       // 6185
                // If the min year is greater than the lowest year, increase the highest year                          // 6186
                // by the difference and set the lowest year to the min year.                                          // 6187
                if ( minYear > lowestYear ) {                                                                          // 6188
                    highestYear += minYear - lowestYear                                                                // 6189
                    lowestYear = minYear                                                                               // 6190
                }                                                                                                      // 6191
                                                                                                                       // 6192
                // If the max year is less than the highest year, decrease the lowest year                             // 6193
                // by the lower of the two: available and needed years. Then set the                                   // 6194
                // highest year to the max year.                                                                       // 6195
                if ( maxYear < highestYear ) {                                                                         // 6196
                                                                                                                       // 6197
                    var availableYears = lowestYear - minYear,                                                         // 6198
                        neededYears = highestYear - maxYear                                                            // 6199
                                                                                                                       // 6200
                    lowestYear -= availableYears > neededYears ? neededYears : availableYears                          // 6201
                    highestYear = maxYear                                                                              // 6202
                }                                                                                                      // 6203
                                                                                                                       // 6204
                if ( settings.selectYears  && override == undefined ) {                                                // 6205
                    return _.node( 'select',                                                                           // 6206
                        _.group({                                                                                      // 6207
                            min: lowestYear,                                                                           // 6208
                            max: highestYear,                                                                          // 6209
                            i: 1,                                                                                      // 6210
                            node: 'option',                                                                            // 6211
                            item: function( loopedYear ) {                                                             // 6212
                                return [                                                                               // 6213
                                                                                                                       // 6214
                                    // The looped year and no classes.                                                 // 6215
                                    loopedYear, 0,                                                                     // 6216
                                                                                                                       // 6217
                                    // Set the value and selected index.                                               // 6218
                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )           // 6219
                                ]                                                                                      // 6220
                            }                                                                                          // 6221
                        }),                                                                                            // 6222
                        settings.klass.selectYear + ' browser-default',                                                // 6223
                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'                                                     // 6225
                    )                                                                                                  // 6226
                }                                                                                                      // 6227
            }                                                                                                          // 6228
                                                                                                                       // 6229
            // Materialize modified                                                                                    // 6230
            if (override == "raw")                                                                                     // 6231
                return _.node( 'div', focusedYear )                                                                    // 6232
                                                                                                                       // 6233
            // Otherwise just return the year focused                                                                  // 6234
            return _.node( 'div', focusedYear, settings.klass.year )                                                   // 6235
        } //createYearLabel                                                                                            // 6236
                                                                                                                       // 6237
                                                                                                                       // 6238
        // Materialize modified                                                                                        // 6239
        createDayLabel = function() {                                                                                  // 6240
                if (selectedObject != null)                                                                            // 6241
                    return _.node( 'div', selectedObject.date)                                                         // 6242
                else return _.node( 'div', nowObject.date)                                                             // 6243
            }                                                                                                          // 6244
        createWeekdayLabel = function() {                                                                              // 6245
            var display_day;                                                                                           // 6246
                                                                                                                       // 6247
            if (selectedObject != null)                                                                                // 6248
                display_day = selectedObject.day;                                                                      // 6249
            else                                                                                                       // 6250
                display_day = nowObject.day;                                                                           // 6251
            var weekday = settings.weekdaysFull[ display_day ]                                                         // 6252
            return weekday                                                                                             // 6253
        }                                                                                                              // 6254
                                                                                                                       // 6255
                                                                                                                       // 6256
    // Create and return the entire calendar.                                                                          // 6257
return _.node(                                                                                                         // 6258
        // Date presentation View                                                                                      // 6259
        'div',                                                                                                         // 6260
            _.node(                                                                                                    // 6261
                'div',                                                                                                 // 6262
                createWeekdayLabel(),                                                                                  // 6263
                "picker__weekday-display"                                                                              // 6264
            )+                                                                                                         // 6265
            _.node(                                                                                                    // 6266
                // Div for short Month                                                                                 // 6267
                'div',                                                                                                 // 6268
                createMonthLabel("short_months"),                                                                      // 6269
                settings.klass.month_display                                                                           // 6270
            )+                                                                                                         // 6271
            _.node(                                                                                                    // 6272
                // Div for Day                                                                                         // 6273
                'div',                                                                                                 // 6274
                createDayLabel() ,                                                                                     // 6275
                settings.klass.day_display                                                                             // 6276
            )+                                                                                                         // 6277
            _.node(                                                                                                    // 6278
                // Div for Year                                                                                        // 6279
                'div',                                                                                                 // 6280
                createYearLabel("raw") ,                                                                               // 6281
                settings.klass.year_display                                                                            // 6282
            ),                                                                                                         // 6283
        settings.klass.date_display                                                                                    // 6284
    )+                                                                                                                 // 6285
    // Calendar container                                                                                              // 6286
    _.node('div',                                                                                                      // 6287
        _.node('div',                                                                                                  // 6288
        ( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +  // 6289
        createMonthNav() + createMonthNav( 1 ),                                                                        // 6290
        settings.klass.header                                                                                          // 6291
    ) + _.node(                                                                                                        // 6292
        'table',                                                                                                       // 6293
        tableHead +                                                                                                    // 6294
        _.node(                                                                                                        // 6295
            'tbody',                                                                                                   // 6296
            _.group({                                                                                                  // 6297
                min: 0,                                                                                                // 6298
                max: WEEKS_IN_CALENDAR - 1,                                                                            // 6299
                i: 1,                                                                                                  // 6300
                node: 'tr',                                                                                            // 6301
                item: function( rowCounter ) {                                                                         // 6302
                                                                                                                       // 6303
                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.          // 6304
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0
                                                                                                                       // 6306
                    return [                                                                                           // 6307
                        _.group({                                                                                      // 6308
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {                                                                          // 6310
                                return this.min + DAYS_IN_WEEK - 1                                                     // 6311
                            },                                                                                         // 6312
                            i: 1,                                                                                      // 6313
                            node: 'td',                                                                                // 6314
                            item: function( targetDate ) {                                                             // 6315
                                                                                                                       // 6316
                                // Convert the time date from a relative date to a target date.                        // 6317
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])
                                                                                                                       // 6319
                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,             // 6320
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,    // 6321
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )
                                                                                                                       // 6324
                                return [                                                                               // 6325
                                    _.node(                                                                            // 6326
                                        'div',                                                                         // 6327
                                        targetDate.date,                                                               // 6328
                                        (function( klasses ) {                                                         // 6329
                                                                                                                       // 6330
                                            // Add the `infocus` or `outfocus` classes based on month in view.         // 6331
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )
                                                                                                                       // 6333
                                            // Add the `today` class if needed.                                        // 6334
                                            if ( nowObject.pick == targetDate.pick ) {                                 // 6335
                                                klasses.push( settings.klass.now )                                     // 6336
                                            }                                                                          // 6337
                                                                                                                       // 6338
                                            // Add the `selected` class if something's selected and the time matches.  // 6339
                                            if ( isSelected ) {                                                        // 6340
                                                klasses.push( settings.klass.selected )                                // 6341
                                            }                                                                          // 6342
                                                                                                                       // 6343
                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {                                                     // 6345
                                                klasses.push( settings.klass.highlighted )                             // 6346
                                            }                                                                          // 6347
                                                                                                                       // 6348
                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {                                                        // 6350
                                                klasses.push( settings.klass.disabled )                                // 6351
                                            }                                                                          // 6352
                                                                                                                       // 6353
                                            return klasses.join( ' ' )                                                 // 6354
                                        })([ settings.klass.day ]),                                                    // 6355
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({                            // 6356
                                            role: 'gridcell',                                                          // 6357
                                            label: formattedDate,                                                      // 6358
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,                             // 6360
                                            disabled: isDisabled ? true : null                                         // 6361
                                        })                                                                             // 6362
                                    ),                                                                                 // 6363
                                    '',                                                                                // 6364
                                    _.ariaAttr({ role: 'presentation' })                                               // 6365
                                ] //endreturn                                                                          // 6366
                            }                                                                                          // 6367
                        })                                                                                             // 6368
                    ] //endreturn                                                                                      // 6369
                }                                                                                                      // 6370
            })                                                                                                         // 6371
        ),                                                                                                             // 6372
        settings.klass.table,                                                                                          // 6373
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({                                                 // 6374
            role: 'grid',                                                                                              // 6375
            controls: calendar.$node[0].id,                                                                            // 6376
            readonly: true                                                                                             // 6377
        })                                                                                                             // 6378
    )                                                                                                                  // 6379
    , settings.klass.calendar_container) // end calendar                                                               // 6380
                                                                                                                       // 6381
     +                                                                                                                 // 6382
                                                                                                                       // 6383
    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.                     // 6384
    _.node(                                                                                                            // 6385
        'div',                                                                                                         // 6386
        _.node( 'button', settings.today, "btn-flat picker__today",                                                    // 6387
            'type=button data-pick=' + nowObject.pick +                                                                // 6388
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +                                     // 6389
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +                                                         // 6390
        _.node( 'button', settings.clear, "btn-flat picker__clear",                                                    // 6391
            'type=button data-clear=1' +                                                                               // 6392
            ( isOpen ? '' : ' disabled' ) + ' ' +                                                                      // 6393
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +                                                         // 6394
        _.node('button', settings.close, "btn-flat picker__close",                                                     // 6395
            'type=button data-close=true ' +                                                                           // 6396
            ( isOpen ? '' : ' disabled' ) + ' ' +                                                                      // 6397
            _.ariaAttr({ controls: calendar.$node[0].id }) ),                                                          // 6398
        settings.klass.footer                                                                                          // 6399
    ) //endreturn                                                                                                      // 6400
} //DatePicker.prototype.nodes                                                                                         // 6401
                                                                                                                       // 6402
                                                                                                                       // 6403
                                                                                                                       // 6404
                                                                                                                       // 6405
/**                                                                                                                    // 6406
 * The date picker defaults.                                                                                           // 6407
 */                                                                                                                    // 6408
DatePicker.defaults = (function( prefix ) {                                                                            // 6409
                                                                                                                       // 6410
    return {                                                                                                           // 6411
                                                                                                                       // 6412
        // The title label to use for the month nav buttons                                                            // 6413
        labelMonthNext: 'Next month',                                                                                  // 6414
        labelMonthPrev: 'Previous month',                                                                              // 6415
                                                                                                                       // 6416
        // The title label to use for the dropdown selectors                                                           // 6417
        labelMonthSelect: 'Select a month',                                                                            // 6418
        labelYearSelect: 'Select a year',                                                                              // 6419
                                                                                                                       // 6420
        // Months and weekdays                                                                                         // 6421
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],           // 6423
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],                // 6424
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],                                            // 6425
                                                                                                                       // 6426
        // Materialize modified                                                                                        // 6427
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],                                                         // 6428
                                                                                                                       // 6429
        // Today and clear                                                                                             // 6430
        today: 'Today',                                                                                                // 6431
        clear: 'Clear',                                                                                                // 6432
        close: 'Close',                                                                                                // 6433
                                                                                                                       // 6434
        // The format to show on the `input` element                                                                   // 6435
        format: 'd mmmm, yyyy',                                                                                        // 6436
                                                                                                                       // 6437
        // Classes                                                                                                     // 6438
        klass: {                                                                                                       // 6439
                                                                                                                       // 6440
            table: prefix + 'table',                                                                                   // 6441
                                                                                                                       // 6442
            header: prefix + 'header',                                                                                 // 6443
                                                                                                                       // 6444
                                                                                                                       // 6445
            // Materialize Added klasses                                                                               // 6446
            date_display: prefix + 'date-display',                                                                     // 6447
            day_display: prefix + 'day-display',                                                                       // 6448
            month_display: prefix + 'month-display',                                                                   // 6449
            year_display: prefix + 'year-display',                                                                     // 6450
            calendar_container: prefix + 'calendar-container',                                                         // 6451
            // end                                                                                                     // 6452
                                                                                                                       // 6453
                                                                                                                       // 6454
                                                                                                                       // 6455
            navPrev: prefix + 'nav--prev',                                                                             // 6456
            navNext: prefix + 'nav--next',                                                                             // 6457
            navDisabled: prefix + 'nav--disabled',                                                                     // 6458
                                                                                                                       // 6459
            month: prefix + 'month',                                                                                   // 6460
            year: prefix + 'year',                                                                                     // 6461
                                                                                                                       // 6462
            selectMonth: prefix + 'select--month',                                                                     // 6463
            selectYear: prefix + 'select--year',                                                                       // 6464
                                                                                                                       // 6465
            weekdays: prefix + 'weekday',                                                                              // 6466
                                                                                                                       // 6467
            day: prefix + 'day',                                                                                       // 6468
            disabled: prefix + 'day--disabled',                                                                        // 6469
            selected: prefix + 'day--selected',                                                                        // 6470
            highlighted: prefix + 'day--highlighted',                                                                  // 6471
            now: prefix + 'day--today',                                                                                // 6472
            infocus: prefix + 'day--infocus',                                                                          // 6473
            outfocus: prefix + 'day--outfocus',                                                                        // 6474
                                                                                                                       // 6475
            footer: prefix + 'footer',                                                                                 // 6476
                                                                                                                       // 6477
            buttonClear: prefix + 'button--clear',                                                                     // 6478
            buttonToday: prefix + 'button--today',                                                                     // 6479
            buttonClose: prefix + 'button--close'                                                                      // 6480
        }                                                                                                              // 6481
    }                                                                                                                  // 6482
})( Picker.klasses().picker + '__' )                                                                                   // 6483
                                                                                                                       // 6484
                                                                                                                       // 6485
                                                                                                                       // 6486
                                                                                                                       // 6487
                                                                                                                       // 6488
/**                                                                                                                    // 6489
 * Extend the picker to add the date picker.                                                                           // 6490
 */                                                                                                                    // 6491
Picker.extend( 'pickadate', DatePicker )                                                                               // 6492
                                                                                                                       // 6493
                                                                                                                       // 6494
}));                                                                                                                   // 6495
                                                                                                                       // 6496
                                                                                                                       // 6497
;(function ($) {                                                                                                       // 6498
                                                                                                                       // 6499
  $.fn.characterCounter = function(){                                                                                  // 6500
    return this.each(function(){                                                                                       // 6501
      var $input = $(this);                                                                                            // 6502
      var $counterElement = $input.parent().find('span[class="character-counter"]');                                   // 6503
                                                                                                                       // 6504
      // character counter has already been added appended to the parent container                                     // 6505
      if ($counterElement.length) {                                                                                    // 6506
        return;                                                                                                        // 6507
      }                                                                                                                // 6508
                                                                                                                       // 6509
      var itHasLengthAttribute = $input.attr('length') !== undefined;                                                  // 6510
                                                                                                                       // 6511
      if(itHasLengthAttribute){                                                                                        // 6512
        $input.on('input', updateCounter);                                                                             // 6513
        $input.on('focus', updateCounter);                                                                             // 6514
        $input.on('blur', removeCounterElement);                                                                       // 6515
                                                                                                                       // 6516
        addCounterElement($input);                                                                                     // 6517
      }                                                                                                                // 6518
                                                                                                                       // 6519
    });                                                                                                                // 6520
  };                                                                                                                   // 6521
                                                                                                                       // 6522
  function updateCounter(){                                                                                            // 6523
    var maxLength     = +$(this).attr('length'),                                                                       // 6524
    actualLength      = +$(this).val().length,                                                                         // 6525
    isValidLength     = actualLength <= maxLength;                                                                     // 6526
                                                                                                                       // 6527
    $(this).parent().find('span[class="character-counter"]')                                                           // 6528
                    .html( actualLength + '/' + maxLength);                                                            // 6529
                                                                                                                       // 6530
    addInputStyle(isValidLength, $(this));                                                                             // 6531
  }                                                                                                                    // 6532
                                                                                                                       // 6533
  function addCounterElement($input) {                                                                                 // 6534
    var $counterElement = $input.parent().find('span[class="character-counter"]');                                     // 6535
                                                                                                                       // 6536
    if ($counterElement.length) {                                                                                      // 6537
      return;                                                                                                          // 6538
    }                                                                                                                  // 6539
                                                                                                                       // 6540
    $counterElement = $('<span/>')                                                                                     // 6541
                        .addClass('character-counter')                                                                 // 6542
                        .css('float','right')                                                                          // 6543
                        .css('font-size','12px')                                                                       // 6544
                        .css('height', 1);                                                                             // 6545
                                                                                                                       // 6546
    $input.parent().append($counterElement);                                                                           // 6547
  }                                                                                                                    // 6548
                                                                                                                       // 6549
  function removeCounterElement(){                                                                                     // 6550
    $(this).parent().find('span[class="character-counter"]').html('');                                                 // 6551
  }                                                                                                                    // 6552
                                                                                                                       // 6553
  function addInputStyle(isValidLength, $input){                                                                       // 6554
    var inputHasInvalidClass = $input.hasClass('invalid');                                                             // 6555
    if (isValidLength && inputHasInvalidClass) {                                                                       // 6556
      $input.removeClass('invalid');                                                                                   // 6557
    }                                                                                                                  // 6558
    else if(!isValidLength && !inputHasInvalidClass){                                                                  // 6559
      $input.removeClass('valid');                                                                                     // 6560
      $input.addClass('invalid');                                                                                      // 6561
    }                                                                                                                  // 6562
  }                                                                                                                    // 6563
                                                                                                                       // 6564
  $(document).ready(function(){                                                                                        // 6565
    $('input, textarea').characterCounter();                                                                           // 6566
  });                                                                                                                  // 6567
                                                                                                                       // 6568
}( jQuery ));                                                                                                          // 6569
;(function ($) {                                                                                                       // 6570
                                                                                                                       // 6571
  var methods = {                                                                                                      // 6572
                                                                                                                       // 6573
    init : function(options) {                                                                                         // 6574
      var defaults = {                                                                                                 // 6575
        time_constant: 200, // ms                                                                                      // 6576
        dist: -100, // zoom scale TODO: make this more intuitive as an option                                          // 6577
        shift: 0, // spacing for center image                                                                          // 6578
        padding: 0, // Padding between non center items                                                                // 6579
        full_width: false // Change to full width styles                                                               // 6580
      };                                                                                                               // 6581
      options = $.extend(defaults, options);                                                                           // 6582
                                                                                                                       // 6583
      return this.each(function() {                                                                                    // 6584
                                                                                                                       // 6585
        var images, offset, center, pressed, dim, count,                                                               // 6586
            reference, referenceY, amplitude, target, velocity,                                                        // 6587
            xform, frame, timestamp, ticker, dragged, vertical_dragged;                                                // 6588
                                                                                                                       // 6589
        // Initialize                                                                                                  // 6590
        var view = $(this);                                                                                            // 6591
        // Don't double initialize.                                                                                    // 6592
        if (view.hasClass('initialized')) {                                                                            // 6593
          return true;                                                                                                 // 6594
        }                                                                                                              // 6595
                                                                                                                       // 6596
        // Options                                                                                                     // 6597
        if (options.full_width) {                                                                                      // 6598
          options.dist = 0;                                                                                            // 6599
          imageHeight = view.find('.carousel-item img').first().load(function(){                                       // 6600
            view.css('height', $(this).height());                                                                      // 6601
          });                                                                                                          // 6602
        }                                                                                                              // 6603
                                                                                                                       // 6604
        view.addClass('initialized');                                                                                  // 6605
        pressed = false;                                                                                               // 6606
        offset = target = 0;                                                                                           // 6607
        images = [];                                                                                                   // 6608
        item_width = view.find('.carousel-item').first().innerWidth();                                                 // 6609
        dim = item_width * 2 + options.padding;                                                                        // 6610
                                                                                                                       // 6611
        view.find('.carousel-item').each(function () {                                                                 // 6612
          images.push($(this)[0]);                                                                                     // 6613
        });                                                                                                            // 6614
                                                                                                                       // 6615
        count = images.length;                                                                                         // 6616
                                                                                                                       // 6617
                                                                                                                       // 6618
        function setupEvents() {                                                                                       // 6619
          if (typeof window.ontouchstart !== 'undefined') {                                                            // 6620
            view[0].addEventListener('touchstart', tap);                                                               // 6621
            view[0].addEventListener('touchmove', drag);                                                               // 6622
            view[0].addEventListener('touchend', release);                                                             // 6623
          }                                                                                                            // 6624
          view[0].addEventListener('mousedown', tap);                                                                  // 6625
          view[0].addEventListener('mousemove', drag);                                                                 // 6626
          view[0].addEventListener('mouseup', release);                                                                // 6627
          view[0].addEventListener('click', click);                                                                    // 6628
        }                                                                                                              // 6629
                                                                                                                       // 6630
        function xpos(e) {                                                                                             // 6631
          // touch event                                                                                               // 6632
          if (e.targetTouches && (e.targetTouches.length >= 1)) {                                                      // 6633
            return e.targetTouches[0].clientX;                                                                         // 6634
          }                                                                                                            // 6635
                                                                                                                       // 6636
          // mouse event                                                                                               // 6637
          return e.clientX;                                                                                            // 6638
        }                                                                                                              // 6639
                                                                                                                       // 6640
        function ypos(e) {                                                                                             // 6641
          // touch event                                                                                               // 6642
          if (e.targetTouches && (e.targetTouches.length >= 1)) {                                                      // 6643
            return e.targetTouches[0].clientY;                                                                         // 6644
          }                                                                                                            // 6645
                                                                                                                       // 6646
          // mouse event                                                                                               // 6647
          return e.clientY;                                                                                            // 6648
        }                                                                                                              // 6649
                                                                                                                       // 6650
        function wrap(x) {                                                                                             // 6651
          return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;                                 // 6652
        }                                                                                                              // 6653
                                                                                                                       // 6654
        function scroll(x) {                                                                                           // 6655
          var i, half, delta, dir, tween, el, alignment, xTranslation;                                                 // 6656
                                                                                                                       // 6657
          offset = (typeof x === 'number') ? x : offset;                                                               // 6658
          center = Math.floor((offset + dim / 2) / dim);                                                               // 6659
          delta = offset - center * dim;                                                                               // 6660
          dir = (delta < 0) ? 1 : -1;                                                                                  // 6661
          tween = -dir * delta * 2 / dim;                                                                              // 6662
                                                                                                                       // 6663
          if (!options.full_width) {                                                                                   // 6664
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';                               // 6665
            alignment += 'translateY(' + (view[0].clientHeight - item_width) / 2 + 'px)';                              // 6666
          } else {                                                                                                     // 6667
            alignment = 'translateX(0)';                                                                               // 6668
          }                                                                                                            // 6669
                                                                                                                       // 6670
          // center                                                                                                    // 6671
          el = images[wrap(center)];                                                                                   // 6672
          el.style[xform] = alignment +                                                                                // 6673
            ' translateX(' + (-delta / 2) + 'px)' +                                                                    // 6674
            ' translateX(' + (dir * options.shift * tween * i) + 'px)' +                                               // 6675
            ' translateZ(' + (options.dist * tween) + 'px)';                                                           // 6676
          el.style.zIndex = 0;                                                                                         // 6677
          if (options.full_width) { tweenedOpacity = 1; }                                                              // 6678
          else { tweenedOpacity = 1 - 0.2 * tween; }                                                                   // 6679
          el.style.opacity = tweenedOpacity;                                                                           // 6680
          half = count >> 1;                                                                                           // 6681
                                                                                                                       // 6682
          for (i = 1; i <= half; ++i) {                                                                                // 6683
            // right side                                                                                              // 6684
            if (options.full_width) {                                                                                  // 6685
              zTranslation = options.dist;                                                                             // 6686
              tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;                                              // 6687
            } else {                                                                                                   // 6688
              zTranslation = options.dist * (i * 2 + tween * dir);                                                     // 6689
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);                                                        // 6690
            }                                                                                                          // 6691
            el = images[wrap(center + i)];                                                                             // 6692
            el.style[xform] = alignment +                                                                              // 6693
              ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +                                       // 6694
              ' translateZ(' + zTranslation + 'px)';                                                                   // 6695
            el.style.zIndex = -i;                                                                                      // 6696
            el.style.opacity = tweenedOpacity;                                                                         // 6697
                                                                                                                       // 6698
                                                                                                                       // 6699
            // left side                                                                                               // 6700
            if (options.full_width) {                                                                                  // 6701
              zTranslation = options.dist;                                                                             // 6702
              tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;                                              // 6703
            } else {                                                                                                   // 6704
              zTranslation = options.dist * (i * 2 - tween * dir);                                                     // 6705
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);                                                        // 6706
            }                                                                                                          // 6707
            el = images[wrap(center - i)];                                                                             // 6708
            el.style[xform] = alignment +                                                                              // 6709
              ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +                                     // 6710
              ' translateZ(' + zTranslation + 'px)';                                                                   // 6711
            el.style.zIndex = -i;                                                                                      // 6712
            el.style.opacity = tweenedOpacity;                                                                         // 6713
          }                                                                                                            // 6714
                                                                                                                       // 6715
          // center                                                                                                    // 6716
          el = images[wrap(center)];                                                                                   // 6717
          el.style[xform] = alignment +                                                                                // 6718
            ' translateX(' + (-delta / 2) + 'px)' +                                                                    // 6719
            ' translateX(' + (dir * options.shift * tween) + 'px)' +                                                   // 6720
            ' translateZ(' + (options.dist * tween) + 'px)';                                                           // 6721
          el.style.zIndex = 0;                                                                                         // 6722
          if (options.full_width) { tweenedOpacity = 1; }                                                              // 6723
          else { tweenedOpacity = 1 - 0.2 * tween; }                                                                   // 6724
          el.style.opacity = tweenedOpacity;                                                                           // 6725
        }                                                                                                              // 6726
                                                                                                                       // 6727
        function track() {                                                                                             // 6728
          var now, elapsed, delta, v;                                                                                  // 6729
                                                                                                                       // 6730
          now = Date.now();                                                                                            // 6731
          elapsed = now - timestamp;                                                                                   // 6732
          timestamp = now;                                                                                             // 6733
          delta = offset - frame;                                                                                      // 6734
          frame = offset;                                                                                              // 6735
                                                                                                                       // 6736
          v = 1000 * delta / (1 + elapsed);                                                                            // 6737
          velocity = 0.8 * v + 0.2 * velocity;                                                                         // 6738
        }                                                                                                              // 6739
                                                                                                                       // 6740
        function autoScroll() {                                                                                        // 6741
          var elapsed, delta;                                                                                          // 6742
                                                                                                                       // 6743
          if (amplitude) {                                                                                             // 6744
            elapsed = Date.now() - timestamp;                                                                          // 6745
            delta = amplitude * Math.exp(-elapsed / options.time_constant);                                            // 6746
            if (delta > 2 || delta < -2) {                                                                             // 6747
                scroll(target - delta);                                                                                // 6748
                requestAnimationFrame(autoScroll);                                                                     // 6749
            } else {                                                                                                   // 6750
                scroll(target);                                                                                        // 6751
            }                                                                                                          // 6752
          }                                                                                                            // 6753
        }                                                                                                              // 6754
                                                                                                                       // 6755
        function click(e) {                                                                                            // 6756
          // Disable clicks if carousel was dragged.                                                                   // 6757
          if (dragged) {                                                                                               // 6758
            e.preventDefault();                                                                                        // 6759
            e.stopPropagation();                                                                                       // 6760
            return false;                                                                                              // 6761
                                                                                                                       // 6762
          } else if (!options.full_width) {                                                                            // 6763
            var clickedIndex = $(e.target).closest('.carousel-item').index();                                          // 6764
            var diff = (center % count) - clickedIndex;                                                                // 6765
                                                                                                                       // 6766
            // Account for wraparound.                                                                                 // 6767
            if (diff < 0) {                                                                                            // 6768
              if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }                                          // 6769
                                                                                                                       // 6770
            } else if (diff > 0) {                                                                                     // 6771
              if (Math.abs(diff - count) < diff) { diff -= count; }                                                    // 6772
            }                                                                                                          // 6773
                                                                                                                       // 6774
            // Call prev or next accordingly.                                                                          // 6775
            if (diff < 0) {                                                                                            // 6776
              $(this).trigger('carouselNext', [Math.abs(diff)]);                                                       // 6777
                                                                                                                       // 6778
            } else if (diff > 0) {                                                                                     // 6779
              $(this).trigger('carouselPrev', [diff]);                                                                 // 6780
            }                                                                                                          // 6781
          }                                                                                                            // 6782
        }                                                                                                              // 6783
                                                                                                                       // 6784
        function tap(e) {                                                                                              // 6785
          pressed = true;                                                                                              // 6786
          dragged = false;                                                                                             // 6787
          vertical_dragged = false;                                                                                    // 6788
          reference = xpos(e);                                                                                         // 6789
          referenceY = ypos(e);                                                                                        // 6790
                                                                                                                       // 6791
          velocity = amplitude = 0;                                                                                    // 6792
          frame = offset;                                                                                              // 6793
          timestamp = Date.now();                                                                                      // 6794
          clearInterval(ticker);                                                                                       // 6795
          ticker = setInterval(track, 100);                                                                            // 6796
                                                                                                                       // 6797
        }                                                                                                              // 6798
                                                                                                                       // 6799
        function drag(e) {                                                                                             // 6800
          var x, delta, deltaY;                                                                                        // 6801
          if (pressed) {                                                                                               // 6802
            x = xpos(e);                                                                                               // 6803
            y = ypos(e);                                                                                               // 6804
            delta = reference - x;                                                                                     // 6805
            deltaY = Math.abs(referenceY - y);                                                                         // 6806
            if (deltaY < 30 && !vertical_dragged) {                                                                    // 6807
              // If vertical scrolling don't allow dragging.                                                           // 6808
              if (delta > 2 || delta < -2) {                                                                           // 6809
                dragged = true;                                                                                        // 6810
                reference = x;                                                                                         // 6811
                scroll(offset + delta);                                                                                // 6812
              }                                                                                                        // 6813
                                                                                                                       // 6814
            } else if (dragged) {                                                                                      // 6815
              // If dragging don't allow vertical scroll.                                                              // 6816
              e.preventDefault();                                                                                      // 6817
              e.stopPropagation();                                                                                     // 6818
              return false;                                                                                            // 6819
                                                                                                                       // 6820
            } else {                                                                                                   // 6821
              // Vertical scrolling.                                                                                   // 6822
              vertical_dragged = true;                                                                                 // 6823
            }                                                                                                          // 6824
          }                                                                                                            // 6825
                                                                                                                       // 6826
          if (dragged) {                                                                                               // 6827
            // If dragging don't allow vertical scroll.                                                                // 6828
            e.preventDefault();                                                                                        // 6829
            e.stopPropagation();                                                                                       // 6830
            return false;                                                                                              // 6831
          }                                                                                                            // 6832
        }                                                                                                              // 6833
                                                                                                                       // 6834
        function release(e) {                                                                                          // 6835
          pressed = false;                                                                                             // 6836
                                                                                                                       // 6837
          clearInterval(ticker);                                                                                       // 6838
          target = offset;                                                                                             // 6839
          if (velocity > 10 || velocity < -10) {                                                                       // 6840
            amplitude = 0.9 * velocity;                                                                                // 6841
            target = offset + amplitude;                                                                               // 6842
          }                                                                                                            // 6843
          target = Math.round(target / dim) * dim;                                                                     // 6844
          amplitude = target - offset;                                                                                 // 6845
          timestamp = Date.now();                                                                                      // 6846
          requestAnimationFrame(autoScroll);                                                                           // 6847
                                                                                                                       // 6848
          e.preventDefault();                                                                                          // 6849
          e.stopPropagation();                                                                                         // 6850
          return false;                                                                                                // 6851
        }                                                                                                              // 6852
                                                                                                                       // 6853
        xform = 'transform';                                                                                           // 6854
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {                                                         // 6855
          var e = prefix + 'Transform';                                                                                // 6856
          if (typeof document.body.style[e] !== 'undefined') {                                                         // 6857
            xform = e;                                                                                                 // 6858
            return false;                                                                                              // 6859
          }                                                                                                            // 6860
          return true;                                                                                                 // 6861
        });                                                                                                            // 6862
                                                                                                                       // 6863
                                                                                                                       // 6864
                                                                                                                       // 6865
        window.onresize = scroll;                                                                                      // 6866
                                                                                                                       // 6867
        setupEvents();                                                                                                 // 6868
        scroll(offset);                                                                                                // 6869
                                                                                                                       // 6870
        $(this).on('carouselNext', function(e, n) {                                                                    // 6871
          if (n === undefined) {                                                                                       // 6872
            n = 1;                                                                                                     // 6873
          }                                                                                                            // 6874
          target = offset + dim * n;                                                                                   // 6875
          if (offset !== target) {                                                                                     // 6876
            amplitude = target - offset;                                                                               // 6877
            timestamp = Date.now();                                                                                    // 6878
            requestAnimationFrame(autoScroll);                                                                         // 6879
          }                                                                                                            // 6880
        });                                                                                                            // 6881
                                                                                                                       // 6882
        $(this).on('carouselPrev', function(e, n) {                                                                    // 6883
          if (n === undefined) {                                                                                       // 6884
            n = 1;                                                                                                     // 6885
          }                                                                                                            // 6886
          target = offset - dim * n;                                                                                   // 6887
          if (offset !== target) {                                                                                     // 6888
            amplitude = target - offset;                                                                               // 6889
            timestamp = Date.now();                                                                                    // 6890
            requestAnimationFrame(autoScroll);                                                                         // 6891
          }                                                                                                            // 6892
        });                                                                                                            // 6893
                                                                                                                       // 6894
      });                                                                                                              // 6895
                                                                                                                       // 6896
                                                                                                                       // 6897
                                                                                                                       // 6898
    },                                                                                                                 // 6899
    next : function(n) {                                                                                               // 6900
      $(this).trigger('carouselNext', [n]);                                                                            // 6901
    },                                                                                                                 // 6902
    prev : function(n) {                                                                                               // 6903
      $(this).trigger('carouselPrev', [n]);                                                                            // 6904
    },                                                                                                                 // 6905
  };                                                                                                                   // 6906
                                                                                                                       // 6907
                                                                                                                       // 6908
    $.fn.carousel = function(methodOrOptions) {                                                                        // 6909
      if ( methods[methodOrOptions] ) {                                                                                // 6910
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                    // 6911
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                         // 6912
        // Default to "init"                                                                                           // 6913
        return methods.init.apply( this, arguments );                                                                  // 6914
      } else {                                                                                                         // 6915
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );                                // 6916
      }                                                                                                                // 6917
    }; // Plugin end                                                                                                   // 6918
}( jQuery ));                                                                                                          // 6919
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['materialize:materialize'] = {}, {
  Materialize: Materialize
});

})();
