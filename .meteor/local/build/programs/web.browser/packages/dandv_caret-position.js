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
var getCaretCoordinates;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/dandv_caret-position/packages/dandv_caret-position.js                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/dandv:caret-position/component/index.js                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/* jshint browser: true */                                                                                         // 1
                                                                                                                   // 2
// The properties that we copy into a mirrored div.                                                                // 3
// Note that some browsers, such as Firefox,                                                                       // 4
// do not concatenate properties, i.e. padding-top, bottom etc. -> padding,                                        // 5
// so we have to do every single property specifically.                                                            // 6
var properties = [                                                                                                 // 7
  'direction',  // RTL support                                                                                     // 8
  'boxSizing',                                                                                                     // 9
  'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does       // 10
  'height',                                                                                                        // 11
  'overflowX',                                                                                                     // 12
  'overflowY',  // copy the scrollbar for IE                                                                       // 13
                                                                                                                   // 14
  'borderTopWidth',                                                                                                // 15
  'borderRightWidth',                                                                                              // 16
  'borderBottomWidth',                                                                                             // 17
  'borderLeftWidth',                                                                                               // 18
                                                                                                                   // 19
  'paddingTop',                                                                                                    // 20
  'paddingRight',                                                                                                  // 21
  'paddingBottom',                                                                                                 // 22
  'paddingLeft',                                                                                                   // 23
                                                                                                                   // 24
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font                                                         // 25
  'fontStyle',                                                                                                     // 26
  'fontVariant',                                                                                                   // 27
  'fontWeight',                                                                                                    // 28
  'fontStretch',                                                                                                   // 29
  'fontSize',                                                                                                      // 30
  'fontSizeAdjust',                                                                                                // 31
  'lineHeight',                                                                                                    // 32
  'fontFamily',                                                                                                    // 33
                                                                                                                   // 34
  'textAlign',                                                                                                     // 35
  'textTransform',                                                                                                 // 36
  'textIndent',                                                                                                    // 37
  'textDecoration',  // might not make a difference, but better be safe                                            // 38
                                                                                                                   // 39
  'letterSpacing',                                                                                                 // 40
  'wordSpacing'                                                                                                    // 41
];                                                                                                                 // 42
                                                                                                                   // 43
var isFirefox = !(window.mozInnerScreenX == null);                                                                 // 44
                                                                                                                   // 45
var getCaretCoordinatesFn = function (element, position, recalculate) {                                            // 46
  // mirrored div                                                                                                  // 47
  var div = document.createElement('div');                                                                         // 48
  div.id = 'input-textarea-caret-position-mirror-div';                                                             // 49
  document.body.appendChild(div);                                                                                  // 50
                                                                                                                   // 51
  var style = div.style;                                                                                           // 52
  var computed = window.getComputedStyle? getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9
                                                                                                                   // 54
  // default textarea styles                                                                                       // 55
  style.whiteSpace = 'pre-wrap';                                                                                   // 56
  if (element.nodeName !== 'INPUT')                                                                                // 57
    style.wordWrap = 'break-word';  // only for textarea-s                                                         // 58
                                                                                                                   // 59
  // position off-screen                                                                                           // 60
  style.position = 'absolute';  // required to return coordinates properly                                         // 61
  style.visibility = 'hidden';  // not 'display: none' because we want rendering                                   // 62
                                                                                                                   // 63
  // transfer the element's properties to the div                                                                  // 64
  properties.forEach(function (prop) {                                                                             // 65
    style[prop] = computed[prop];                                                                                  // 66
  });                                                                                                              // 67
                                                                                                                   // 68
  if (isFirefox) {                                                                                                 // 69
    style.width = parseInt(computed.width) - 2 + 'px'  // Firefox adds 2 pixels to the padding - https://bugzilla.mozilla.org/show_bug.cgi?id=753662
    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275 // 71
    if (element.scrollHeight > parseInt(computed.height))                                                          // 72
      style.overflowY = 'scroll';                                                                                  // 73
  } else {                                                                                                         // 74
    style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'             // 75
  }                                                                                                                // 76
                                                                                                                   // 77
  div.textContent = element.value.substring(0, position);                                                          // 78
  // the second special handling for input type="text" vs textarea: spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
  if (element.nodeName === 'INPUT')                                                                                // 80
    div.textContent = div.textContent.replace(/\s/g, "\u00a0");                                                    // 81
                                                                                                                   // 82
  var span = document.createElement('span');                                                                       // 83
  // Wrapping must be replicated *exactly*, including when a long word gets                                        // 84
  // onto the next line, with whitespace at the end of the line before (#7).                                       // 85
  // The  *only* reliable way to do that is to copy the *entire* rest of the                                       // 86
  // textarea's content into the <span> created at the caret position.                                             // 87
  // for inputs, just '.' would be enough, but why bother?                                                         // 88
  span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
  div.appendChild(span);                                                                                           // 90
                                                                                                                   // 91
  var coordinates = {                                                                                              // 92
    top: span.offsetTop + parseInt(computed['borderTopWidth']),                                                    // 93
    left: span.offsetLeft + parseInt(computed['borderLeftWidth'])                                                  // 94
  };                                                                                                               // 95
                                                                                                                   // 96
  document.body.removeChild(div);                                                                                  // 97
                                                                                                                   // 98
  return coordinates;                                                                                              // 99
}                                                                                                                  // 100
                                                                                                                   // 101
if (typeof Package !== 'undefined') {                                                                              // 102
  getCaretCoordinates = getCaretCoordinatesFn;  // Meteor                                                          // 103
} else {                                                                                                           // 104
  module.exports = getCaretCoordinatesFn;    // Component                                                          // 105
}                                                                                                                  // 106
                                                                                                                   // 107
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 117
}).call(this);                                                                                                        // 118
                                                                                                                      // 119
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['dandv:caret-position'] = {}, {
  getCaretCoordinates: getCaretCoordinates
});

})();
