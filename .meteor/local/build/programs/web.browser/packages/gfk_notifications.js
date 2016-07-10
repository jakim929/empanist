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
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Notifications;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/gfk_notifications/globals.js                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* global Notifications:true */                                                                                      // 1
/*jshint strict: false */                                                                                            // 2
                                                                                                                     // 3
//The purpose of this file is to be the one file where globals are declared.  This let's all other files use strict.
// More info: https://github.com/meteor/meteor/issues/2437                                                           // 5
                                                                                                                     // 6
                                                                                                                     // 7
Notifications = {};                                                                                                  // 8
                                                                                                                     // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/gfk_notifications/template.notifications.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notifications");                                                                               // 2
Template["notifications"] = new Template("Template.notifications", (function() {                                     // 3
  var view = this;                                                                                                   // 4
  return HTML.UL({                                                                                                   // 5
    "class": "notifications"                                                                                         // 6
  }, "\n       ", Blaze.Each(function() {                                                                            // 7
    return Spacebars.call(view.lookup("notifications"));                                                             // 8
  }, function() {                                                                                                    // 9
    return [ "\n           ", Spacebars.include(view.lookupTemplate("notification")), "\n       " ];                 // 10
  }), "\n    ");                                                                                                     // 11
}));                                                                                                                 // 12
                                                                                                                     // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/gfk_notifications/notifications.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* global Notifications:true */                                                                                      // 1
"use strict";                                                                                                        // 2
                                                                                                                     // 3
var constructor = (function() {                                                                                      // 4
    /***                                                                                                             // 5
     * Creates an instance of Notifications                                                                          // 6
     * @constructor                                                                                                  // 7
     */                                                                                                              // 8
    function Notifications(settings) {                                                                               // 9
        settings = settings || {};                                                                                   // 10
        _.defaults(settings, this.defaultSettings);                                                                  // 11
                                                                                                                     // 12
        this._notificationsCollection = new Mongo.Collection(null);                                                  // 13
        this._notificationTimeout = undefined;                                                                       // 14
        this.settings = settings;                                                                                    // 15
    }                                                                                                                // 16
                                                                                                                     // 17
    /***                                                                                                             // 18
     * Adds a notification                                                                                           // 19
     * @param {String} title of the notification                                                                     // 20
     * @param {String} message of the notification                                                                   // 21
     * @param {Object}  [options={}] Options object to use for notification                                          // 22
     * @param {String}  [options.type=defaultOptions.type] the type of the notification                              // 23
     * @param {Boolean} [options.userCloseable=defaultOptions.userCloseable] Whether the notification is user closeable
     * @param {Boolean} [options.clickBodyToClose=defaultOptions.clickBodyToClose] Whether the notification can be closed by clicking anywhere within its body. If turned off then the close button must clicked.
     * @param {Function} [options.closed] Call this handler (passing data context) on notification close             // 26
     * @param {Function} [options.timeout] No. of milliseconds to show this notification for.                        // 27
     */                                                                                                              // 28
    Notifications.prototype.addNotification = function (title, message, options) {                                   // 29
        options = options || {};                                                                                     // 30
        _.defaults(options, this.getDefaultOptions(options.type));                                                   // 31
                                                                                                                     // 32
        var notification = {};                                                                                       // 33
        notification.title = title;                                                                                  // 34
        notification.message = message;                                                                              // 35
        notification.type = options.type;                                                                            // 36
        notification.userCloseable = options.userCloseable;                                                          // 37
        notification.clickBodyToClose = options.clickBodyToClose;                                                    // 38
        notification.closed = options.closed;                                                                        // 39
                                                                                                                     // 40
        if (options.timeout) {                                                                                       // 41
            notification.expires = new Date().getTime() + options.timeout;                                           // 42
        }                                                                                                            // 43
                                                                                                                     // 44
        return this._add(notification);                                                                              // 45
    };                                                                                                               // 46
                                                                                                                     // 47
    /***                                                                                                             // 48
     * Wraps addNotification, sets type to error                                                                     // 49
     * @param {String} title of the notification                                                                     // 50
     * @param {String} message of the notification                                                                   // 51
     * @param {Object}  [options={}] Options object to use for notification                                          // 52
     * @param {Boolean} [options.userCloseable=defaultOptions.userCloseable] Whether the notification is user closeable
     * @param {Function} [options.closed] Call this handler (passing data context) on notification close             // 54
     * @returns {*}                                                                                                  // 55
     */                                                                                                              // 56
    Notifications.prototype.error = function (title, message, options) {                                             // 57
        options = options || {};                                                                                     // 58
        options.type = this.TYPES.ERROR;                                                                             // 59
        return this.addNotification(title, message, options);                                                        // 60
    };                                                                                                               // 61
                                                                                                                     // 62
    /***                                                                                                             // 63
     * Wraps addNotification, sets type to warning                                                                   // 64
     * @param {String} title of the notification                                                                     // 65
     * @param {String} message of the notification                                                                   // 66
     * @param {Object}  [options={}] Options object to use for notification                                          // 67
     * @param {Boolean} [options.userCloseable=defaultOptions.userCloseable] Whether the notification is user closeable
     * @param {Function} [options.closed] Call this handler (passing data context) on notification close             // 69
     * @returns {*}                                                                                                  // 70
     */                                                                                                              // 71
    Notifications.prototype.warn = function (title, message, options) {                                              // 72
        options = options || {};                                                                                     // 73
        options.type = this.TYPES.WARNING;                                                                           // 74
        return this.addNotification(title, message, options);                                                        // 75
    };                                                                                                               // 76
                                                                                                                     // 77
    /***                                                                                                             // 78
     * Wraps addNotification, sets type to info                                                                      // 79
     * @param {String} title of the notification                                                                     // 80
     * @param {String} message of the notification                                                                   // 81
     * @param {Object}  [options={}] Options object to use for notification                                          // 82
     * @param {Boolean} [options.userCloseable=defaultOptions.userCloseable] Whether the notification is user closeable
     * @param {Function} [options.closed] Call this handler (passing data context) on notification close             // 84
     * @returns {*}                                                                                                  // 85
     */                                                                                                              // 86
    Notifications.prototype.info = function (title, message, options) {                                              // 87
        options = options || {};                                                                                     // 88
        options.type = this.TYPES.INFO;                                                                              // 89
        return this.addNotification(title, message, options);                                                        // 90
    };                                                                                                               // 91
                                                                                                                     // 92
    /***                                                                                                             // 93
     * Wraps addNotification, sets type to success                                                                   // 94
     * @param {String} title of the notification                                                                     // 95
     * @param {String} message of the notification                                                                   // 96
     * @param {Object}  [options={}] Options object to use for notification                                          // 97
     * @param {Boolean} [options.userCloseable=defaultOptions.userCloseable] Whether the notification is user closeable
     * @param {Function} [options.closed] Call this handler (passing data context) on notification close             // 99
     * @returns {*}                                                                                                  // 100
     */                                                                                                              // 101
    Notifications.prototype.success = function (title, message, options) {                                           // 102
        options = options || {};                                                                                     // 103
        options.type = this.TYPES.SUCCESS;                                                                           // 104
        return this.addNotification(title, message, options);                                                        // 105
    };                                                                                                               // 106
                                                                                                                     // 107
    /***                                                                                                             // 108
     * Returns the NotificationsCollection Meteor.Collection                                                         // 109
     * @returns {object} NotificationsCollection                                                                     // 110
     * @private                                                                                                      // 111
     */                                                                                                              // 112
    Notifications.prototype._getNotificationsCollection = function () {                                              // 113
        return this._notificationsCollection;                                                                        // 114
    };                                                                                                               // 115
                                                                                                                     // 116
    /***                                                                                                             // 117
     * Does the actual add to the collection. And creates a Timeout if necessary.                                    // 118
     * @param {object} notification the object to be inserted into the collection                                    // 119
     * @private                                                                                                      // 120
     */                                                                                                              // 121
    Notifications.prototype._add = function (notification) {                                                         // 122
        var notificationsCollection = this._getNotificationsCollection();                                            // 123
        var firstExpiration = this._getFirstExpiredTimestamp();                                                      // 124
        var notificationID = notificationsCollection.insert(notification);                                           // 125
                                                                                                                     // 126
        if (notification.expires) {                                                                                  // 127
            if (this._notificationTimeout) {                                                                         // 128
                if (firstExpiration > notification.expires) {                                                        // 129
                    Meteor.clearTimeout(this._notificationTimeout);                                                  // 130
                    this._notificationTimeout = undefined;                                                           // 131
                }                                                                                                    // 132
            }                                                                                                        // 133
                                                                                                                     // 134
            if (!this._notificationTimeout) {                                                                        // 135
                this._createTimeout();                                                                               // 136
            }                                                                                                        // 137
        }                                                                                                            // 138
                                                                                                                     // 139
        return notificationID;                                                                                       // 140
    };                                                                                                               // 141
                                                                                                                     // 142
    /***                                                                                                             // 143
     * Returns the timestamp of the notification from the notificationsCollection that is first to expire            // 144
     * @returns {string} first to expire timestamp                                                                   // 145
     * @private                                                                                                      // 146
     */                                                                                                              // 147
    Notifications.prototype._getFirstExpiredTimestamp = function () {                                                // 148
        var notificationsCollection = this._getNotificationsCollection();                                            // 149
                                                                                                                     // 150
        var firstNotification = notificationsCollection.findOne({expires: {$gt: 0}}, {sort:[['expires', 'asc']]}, { reactive: false });
        var firstExpiredTimestamp = firstNotification ? firstNotification.expires : 0;                               // 152
                                                                                                                     // 153
        return firstExpiredTimestamp;                                                                                // 154
    };                                                                                                               // 155
                                                                                                                     // 156
    /***                                                                                                             // 157
     * creates a timeout for the first to expire notification.                                                       // 158
     * @private                                                                                                      // 159
     */                                                                                                              // 160
    Notifications.prototype._createTimeout = function () {                                                           // 161
        var self = this;                                                                                             // 162
        var firstExpiration = this._getFirstExpiredTimestamp();                                                      // 163
                                                                                                                     // 164
        if (firstExpiration) {                                                                                       // 165
            this._notificationTimeout = Meteor.setTimeout(function () {                                              // 166
                self.remove({expires: {$lte: firstExpiration}});                                                     // 167
                self._createTimeout();                                                                               // 168
            }, firstExpiration - new Date().getTime());                                                              // 169
        } else {                                                                                                     // 170
            this._notificationTimeout = undefined;                                                                   // 171
        }                                                                                                            // 172
    };                                                                                                               // 173
                                                                                                                     // 174
    /***                                                                                                             // 175
     * gets the proper notification defaults based on type                                                           // 176
     * @param {String} notificationType the type of the notification for which to get the defaultOptions             // 177
     */                                                                                                              // 178
    Notifications.prototype.getDefaultOptions = function (notificationType) {                                        // 179
        return this.defaultOptionsByType[notificationType] || this.defaultOptions;                                   // 180
    };                                                                                                               // 181
                                                                                                                     // 182
                                                                                                                     // 183
    /***                                                                                                             // 184
     * Gets the class containing the color for the notification                                                      // 185
     * @param {String} notificationType                                                                              // 186
     * @returns {string} classname to use for the notification                                                       // 187
     */                                                                                                              // 188
    Notifications.prototype.getNotificationClass = function (notificationType) {                                     // 189
        var notificationClass;                                                                                       // 190
                                                                                                                     // 191
        _.each(this.TYPES,  function (value, key) {                                                                  // 192
            if(value === notificationType) {                                                                         // 193
                notificationClass = key.toLowerCase();                                                               // 194
            }                                                                                                        // 195
        });                                                                                                          // 196
                                                                                                                     // 197
        return notificationClass;                                                                                    // 198
    };                                                                                                               // 199
                                                                                                                     // 200
    /***                                                                                                             // 201
     * Removes the notifications matching the selector                                                               // 202
     * @param selector                                                                                               // 203
     */                                                                                                              // 204
    Notifications.prototype.remove = function (selector) {                                                           // 205
        this._getNotificationsCollection().remove(selector);                                                         // 206
                                                                                                                     // 207
        if (this._notificationTimeout) {                                                                             // 208
            Meteor.clearTimeout(this._notificationTimeout);                                                          // 209
            this._notificationTimeout = undefined;                                                                   // 210
            this._createTimeout();                                                                                   // 211
        }                                                                                                            // 212
    };                                                                                                               // 213
                                                                                                                     // 214
    /***                                                                                                             // 215
     * Stores constants for the different notification types                                                         // 216
     * @type {{ERROR: number, WARNING: number, INFO: number, SUCCESS: number}}                                       // 217
     */                                                                                                              // 218
    Notifications.prototype.TYPES = {                                                                                // 219
        'ERROR': 1,                                                                                                  // 220
        'WARNING': 2,                                                                                                // 221
        'INFO': 3,                                                                                                   // 222
        'SUCCESS': 4                                                                                                 // 223
    };                                                                                                               // 224
                                                                                                                     // 225
    /***                                                                                                             // 226
     * Object with the default options for the notifications                                                         // 227
     * @type {{type: number, userCloseable: boolean, timeout: number, closed: function}}                             // 228
     */                                                                                                              // 229
    Notifications.prototype.defaultOptions = {                                                                       // 230
        type: Notifications.prototype.TYPES.INFO,                                                                    // 231
        userCloseable: true,                                                                                         // 232
        clickBodyToClose: true,                                                                                      // 233
        timeout: 0                                                                                                   // 234
    };                                                                                                               // 235
                                                                                                                     // 236
    /***                                                                                                             // 237
     * Object with the default options for the notifications for specific types                                      // 238
     * @type {{type: number, userCloseable: boolean, timeout: number, closed: function}}                             // 239
     */                                                                                                              // 240
    Notifications.prototype.defaultOptionsByType = {};                                                               // 241
                                                                                                                     // 242
                                                                                                                     // 243
    Notifications.prototype.defaultSettings = {                                                                      // 244
        hideAnimationProperties: {                                                                                   // 245
            height: 0,                                                                                               // 246
            opacity: 0,                                                                                              // 247
            paddingTop: 0,                                                                                           // 248
            paddingBottom: 0,                                                                                        // 249
            marginTop: 0                                                                                             // 250
        },                                                                                                           // 251
        animationSpeed: 400                                                                                          // 252
    };                                                                                                               // 253
                                                                                                                     // 254
    return Notifications;                                                                                            // 255
})();                                                                                                                // 256
                                                                                                                     // 257
Notifications = new constructor();                                                                                   // 258
                                                                                                                     // 259
Template.notifications.helpers({                                                                                     // 260
    notifications: function() {                                                                                      // 261
        return Notifications._getNotificationsCollection().find();                                                   // 262
    }                                                                                                                // 263
});                                                                                                                  // 264
                                                                                                                     // 265
Template.notifications.rendered = function () {                                                                      // 266
    this.firstNode._uihooks = {                                                                                      // 267
        insertElement: function (node, next) {                                                                       // 268
            var settings = Notifications.settings;                                                                   // 269
            $(node)                                                                                                  // 270
                .addClass('notificationHidden')                                                                      // 271
                .insertBefore(next)                                                                                  // 272
                .fadeIn({duration: settings.animationSpeed})                                                         // 273
                .promise()                                                                                           // 274
                .done(function () {                                                                                  // 275
                    $(this).removeClass('notificationHidden');                                                       // 276
                });                                                                                                  // 277
        },                                                                                                           // 278
        removeElement: function (node) {                                                                             // 279
            var settings = Notifications.settings;                                                                   // 280
            $(node).animate(settings.hideAnimationProperties, {                                                      // 281
                duration: settings.animationSpeed,                                                                   // 282
                complete: function () {                                                                              // 283
                    $(node).remove();                                                                                // 284
                }});                                                                                                 // 285
        }                                                                                                            // 286
    };                                                                                                               // 287
};                                                                                                                   // 288
                                                                                                                     // 289
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/gfk_notifications/template.notification.js                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notification");                                                                                // 2
Template["notification"] = new Template("Template.notification", (function() {                                       // 3
  var view = this;                                                                                                   // 4
  return HTML.LI({                                                                                                   // 5
    "class": function() {                                                                                            // 6
      return [ "notification ", Spacebars.mustache(view.lookup("notificationColor"), view.lookup("type")), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("userCloseable"));                                                         // 8
      }, function() {                                                                                                // 9
        return "closeable";                                                                                          // 10
      }) ];                                                                                                          // 11
    }                                                                                                                // 12
  }, "\n         ", HTML.DIV({                                                                                       // 13
    "class": "title"                                                                                                 // 14
  }, Blaze.View("lookup:title", function() {                                                                         // 15
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("title")));                                              // 16
  })), "\n         ", HTML.DIV({                                                                                     // 17
    "class": "message"                                                                                               // 18
  }, Blaze.View("lookup:message", function() {                                                                       // 19
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));                                            // 20
  })), "\n         ", Blaze.If(function() {                                                                          // 21
    return Spacebars.call(view.lookup("userCloseable"));                                                             // 22
  }, function() {                                                                                                    // 23
    return [ "\n                 ", HTML.DIV({                                                                       // 24
      "class": "closeButton"                                                                                         // 25
    }, HTML.CharRef({                                                                                                // 26
      html: "&times;",                                                                                               // 27
      str: "×"                                                                                                       // 28
    })), "\n         " ];                                                                                            // 29
  }), "\n     ");                                                                                                    // 30
}));                                                                                                                 // 31
                                                                                                                     // 32
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/gfk_notifications/notification.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
'use strict';                                                                                                        // 1
                                                                                                                     // 2
Template.notification.helpers({                                                                                      // 3
    notificationColor: function(notificationType) {                                                                  // 4
        return Notifications.getNotificationClass(notificationType);                                                 // 5
    }                                                                                                                // 6
});                                                                                                                  // 7
                                                                                                                     // 8
Template.notification.events = {                                                                                     // 9
    'click': function (event) {                                                                                      // 10
        if (this.userCloseable || this.expires < new Date()) {                                                       // 11
            // must the user click the close button?                                                                 // 12
            if (!this.clickBodyToClose && 0 > event.target.className.indexOf('closeButton')) {                       // 13
                return;                                                                                              // 14
            }                                                                                                        // 15
                                                                                                                     // 16
            Notifications.remove(this._id);                                                                          // 17
            if (this.closed) {                                                                                       // 18
              this.closed(this);                                                                                     // 19
            }                                                                                                        // 20
        }                                                                                                            // 21
    }                                                                                                                // 22
};                                                                                                                   // 23
                                                                                                                     // 24
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['gfk:notifications'] = {}, {
  Notifications: Notifications
});

})();
