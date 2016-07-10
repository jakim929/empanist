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
var check = Package.check.check;
var Match = Package.check.Match;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var _ = Package.underscore._;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Accounts = Package['accounts-base'].Accounts;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/useraccounts_flow-routing/lib/core.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* global                                                                                                            // 1
  AccountsTemplates: false,                                                                                          // 2
  BlazeLayout: false,                                                                                                // 3
  FlowRouter: false                                                                                                  // 4
*/                                                                                                                   // 5
'use strict';                                                                                                        // 6
                                                                                                                     // 7
// ---------------------------------------------------------------------------------                                 // 8
                                                                                                                     // 9
// Patterns for methods" parameters                                                                                  // 10
                                                                                                                     // 11
// ---------------------------------------------------------------------------------                                 // 12
                                                                                                                     // 13
// Add new configuration options                                                                                     // 14
_.extend(AccountsTemplates.CONFIG_PAT, {                                                                             // 15
  defaultLayoutType: Match.Optional(String),                                                                         // 16
  defaultLayout: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction))),                                     // 17
  defaultTemplate: Match.Optional(String),                                                                           // 18
  defaultLayoutRegions: Match.Optional(Object),                                                                      // 19
  defaultContentRegion: Match.Optional(String),                                                                      // 20
  renderLayout: Match.Optional(Object),                                                                              // 21
  contentRange: Match.Optional(String),                                                                              // 22
});                                                                                                                  // 23
                                                                                                                     // 24
// Route configuration pattern to be checked with check                                                              // 25
var ROUTE_PAT = {                                                                                                    // 26
  name: Match.Optional(String),                                                                                      // 27
  path: Match.Optional(String),                                                                                      // 28
  template: Match.Optional(String),                                                                                  // 29
  layoutTemplate: Match.Optional(String),                                                                            // 30
  renderLayout: Match.Optional(Object),                                                                              // 31
  contentRange: Match.Optional(String),                                                                              // 32
  redirect: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction))),                                          // 33
};                                                                                                                   // 34
                                                                                                                     // 35
/*                                                                                                                   // 36
  Routes configuration can be done by calling AccountsTemplates.configureRoute with the route name and the           // 37
  following options in a separate object. E.g. AccountsTemplates.configureRoute("gingIn", option);                   // 38
    name:           String (optional). A unique route"s name to be passed to iron-router                             // 39
    path:           String (optional). A unique route"s path to be passed to iron-router                             // 40
    template:       String (optional). The name of the template to be rendered                                       // 41
    layoutTemplate: String (optional). The name of the layout to be used                                             // 42
    redirect:       String (optional). The name of the route (or its path) where to redirect after form submit       // 43
*/                                                                                                                   // 44
                                                                                                                     // 45
                                                                                                                     // 46
// Allowed routes along with theirs default configuration values                                                     // 47
AccountsTemplates.ROUTE_DEFAULT = {                                                                                  // 48
  changePwd:      { name: "atChangePwd",      path: "/change-password"},                                             // 49
  enrollAccount:  { name: "atEnrollAccount",  path: "/enroll-account"},                                              // 50
  ensureSignedIn: { name: "atEnsureSignedIn", path: null},                                                           // 51
  forgotPwd:      { name: "atForgotPwd",      path: "/forgot-password"},                                             // 52
  resetPwd:       { name: "atResetPwd",       path: "/reset-password"},                                              // 53
  signIn:         { name: "atSignIn",         path: "/sign-in"},                                                     // 54
  signUp:         { name: "atSignUp",         path: "/sign-up"},                                                     // 55
  verifyEmail:    { name: "atVerifyEmail",    path: "/verify-email"},                                                // 56
  resendVerificationEmail: { name: "atResendVerificationEmail", path: "/send-again"}                                 // 57
};                                                                                                                   // 58
                                                                                                                     // 59
// Current configuration values                                                                                      // 60
AccountsTemplates.options.defaultLayoutRegions = {};                                                                 // 61
// Redirects                                                                                                         // 62
AccountsTemplates.options.homeRoutePath = "/";                                                                       // 63
AccountsTemplates.options.redirectTimeout = 2000; // 2 seconds                                                       // 64
                                                                                                                     // 65
// Known routes used to filter out previous path for redirects...                                                    // 66
AccountsTemplates.knownRoutes = [];                                                                                  // 67
                                                                                                                     // 68
// Configured routes                                                                                                 // 69
AccountsTemplates.routes = {};                                                                                       // 70
                                                                                                                     // 71
AccountsTemplates.configureRoute = function(route, options) {                                                        // 72
  check(route, String);                                                                                              // 73
  check(options, Match.OneOf(undefined, Match.ObjectIncluding(ROUTE_PAT)));                                          // 74
  options = _.clone(options);                                                                                        // 75
  // Route Configuration can be done only before initialization                                                      // 76
  if (this._initialized) {                                                                                           // 77
    throw new Error("Route Configuration can be done only before AccountsTemplates.init!");                          // 78
  }                                                                                                                  // 79
  // Only allowed routes can be configured                                                                           // 80
  if (!(route in this.ROUTE_DEFAULT)) {                                                                              // 81
    throw new Error("Unknown Route!");                                                                               // 82
  }                                                                                                                  // 83
  // Allow route configuration only once                                                                             // 84
  if (route in this.routes) {                                                                                        // 85
    throw new Error("Route already configured!");                                                                    // 86
  }                                                                                                                  // 87
                                                                                                                     // 88
  // Possibly adds a initial / to the provided path                                                                  // 89
  if (options && options.path && options.path[0] !== "/") {                                                          // 90
    options.path = "/" + options.path;                                                                               // 91
  }                                                                                                                  // 92
                                                                                                                     // 93
  // Updates the current configuration                                                                               // 94
  options = _.defaults(options || {}, this.ROUTE_DEFAULT[route]);                                                    // 95
                                                                                                                     // 96
  // Store route options                                                                                             // 97
  this.routes[route] = options;                                                                                      // 98
                                                                                                                     // 99
  // Known routes are used to filter out previous path for redirects...                                              // 100
  AccountsTemplates.knownRoutes.push(options.name);                                                                  // 101
                                                                                                                     // 102
  if (Meteor.isServer) {                                                                                             // 103
    // Configures "reset password" email link                                                                        // 104
    if (route === "resetPwd") {                                                                                      // 105
      var resetPwdPath = options.path.substr(1);                                                                     // 106
      Accounts.urls.resetPassword = function(token) {                                                                // 107
        return Meteor.absoluteUrl(resetPwdPath + "/" + token);                                                       // 108
      };                                                                                                             // 109
    }                                                                                                                // 110
    // Configures "enroll account" email link                                                                        // 111
    if (route === "enrollAccount") {                                                                                 // 112
      var enrollAccountPath = options.path.substr(1);                                                                // 113
      Accounts.urls.enrollAccount = function(token) {                                                                // 114
        return Meteor.absoluteUrl(enrollAccountPath + "/" + token);                                                  // 115
      };                                                                                                             // 116
    }                                                                                                                // 117
    // Configures "verify email" email link                                                                          // 118
    if (route === "verifyEmail") {                                                                                   // 119
      var verifyEmailPath = options.path.substr(1);                                                                  // 120
      Accounts.urls.verifyEmail = function(token) {                                                                  // 121
        return Meteor.absoluteUrl(verifyEmailPath + "/" + token);                                                    // 122
      };                                                                                                             // 123
    }                                                                                                                // 124
  }                                                                                                                  // 125
                                                                                                                     // 126
  if (route === "ensureSignedIn") {                                                                                  // 127
    return;                                                                                                          // 128
  }                                                                                                                  // 129
  if (route === "changePwd" && !AccountsTemplates.options.enablePasswordChange) {                                    // 130
    throw new Error("changePwd route configured but enablePasswordChange set to false!");                            // 131
  }                                                                                                                  // 132
  if (route === "forgotPwd" && !AccountsTemplates.options.showForgotPasswordLink) {                                  // 133
    throw new Error("forgotPwd route configured but showForgotPasswordLink set to false!");                          // 134
  }                                                                                                                  // 135
  if (route === "signUp" && AccountsTemplates.options.forbidClientAccountCreation) {                                 // 136
    throw new Error("signUp route configured but forbidClientAccountCreation set to true!");                         // 137
  }                                                                                                                  // 138
                                                                                                                     // 139
  // Use BlazeLayout by default                                                                                      // 140
  var defaultLayoutType = AccountsTemplates.options.defaultLayoutType || 'blaze';                                    // 141
  // fullPageAtForm template unless user specified a different site-wide default                                     // 142
  var defaultTemplate = AccountsTemplates.options.defaultTemplate || "fullPageAtForm";                               // 143
  // Determines the default layout to be used in case no specific one is                                             // 144
  // specified for single routes                                                                                     // 145
  var defaultLayout = AccountsTemplates.options.defaultLayout;                                                       // 146
  var defaultLayoutRegions = AccountsTemplates.options.defaultLayoutRegions;                                         // 147
  var defaultContentRegion = AccountsTemplates.options.defaultContentRegion;                                         // 148
                                                                                                                     // 149
  var name = options.name; // Default provided...                                                                    // 150
  var path = options.path; // Default provided...                                                                    // 151
  var layoutType = options.layoutType || defaultLayoutType;                                                          // 152
  var template = options.template || defaultTemplate;                                                                // 153
  var layoutTemplate = options.layoutTemplate || defaultLayout;                                                      // 154
  var contentRegion = options.contentRegion || defaultContentRegion;                                                 // 155
  var layoutRegions = _.clone(options.layoutRegions || defaultLayoutRegions || {});                                  // 156
                                                                                                                     // 157
  if (layoutType === "blaze") {                                                                                      // 158
                                                                                                                     // 159
    // Ensure that we have the required packages to render Blaze templates                                           // 160
                                                                                                                     // 161
    if (Package['kadira:blaze-layout']) {                                                                            // 162
      var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;                                                  // 163
    } else {                                                                                                         // 164
      throw new Error("useraccounts:flow-routing requires that your project includes kadira:blaze-layout package.");
    }                                                                                                                // 166
                                                                                                                     // 167
    // Strings are assumed to be Blaze template names                                                                // 168
    layoutRegions[contentRegion] = template;                                                                         // 169
  }                                                                                                                  // 170
                                                                                                                     // 171
  if (layoutType === "blaze-to-react") {                                                                             // 172
                                                                                                                     // 173
    // Ensure that we have the required packages to render Blaze templates                                           // 174
    //                                                                                                               // 175
    // For now we need to render the main template using BlazeToReact                                                // 176
                                                                                                                     // 177
    if (Package['react-runtime']) {                                                                                  // 178
      var React = Package['react-runtime'].React;                                                                    // 179
    } else {                                                                                                         // 180
      throw new Error("layoutTemplate is a React element but React runtime package is not found");                   // 181
    }                                                                                                                // 182
                                                                                                                     // 183
    if (Package['kadira:react-layout']) {                                                                            // 184
      var ReactLayout = Package['kadira:react-layout'].ReactLayout;                                                  // 185
    } else {                                                                                                         // 186
      throw new Error("useraccounts:flow-routing requires that your project includes kadira:react-layout package.");
    }                                                                                                                // 188
                                                                                                                     // 189
    if (Package['gwendall:blaze-to-react']) {                                                                        // 190
      var BlazeToReact = Package['gwendall:blaze-to-react'].BlazeToReact;                                            // 191
    } else {                                                                                                         // 192
      throw new Error("useraccounts:flow-routing requires that your project includes the gwendall:blaze-to-react package.");
    }                                                                                                                // 194
                                                                                                                     // 195
    layoutRegions[contentRegion] = React.createElement(BlazeToReact, { blazeTemplate: template });                   // 196
  }                                                                                                                  // 197
                                                                                                                     // 198
  function doLayout() {                                                                                              // 199
    if (layoutType === "blaze-to-react") {                                                                           // 200
                                                                                                                     // 201
      // The layout template is a React Class.                                                                       // 202
      // We need to render using ReactLayout and BlazeToReact                                                        // 203
                                                                                                                     // 204
      ReactLayout.render(layoutTemplate, layoutRegions);                                                             // 205
    } else {                                                                                                         // 206
      // Render using BlazeLayout                                                                                    // 207
      BlazeLayout.render(layoutTemplate, layoutRegions);                                                             // 208
    }                                                                                                                // 209
  }                                                                                                                  // 210
                                                                                                                     // 211
  // Possibly adds token parameter                                                                                   // 212
  if (_.contains(["enrollAccount", "resetPwd", "verifyEmail"], route)) {                                             // 213
    path += "/:paramToken";                                                                                          // 214
    if (route === "verifyEmail") {                                                                                   // 215
      FlowRouter.route(path, {                                                                                       // 216
        name: name,                                                                                                  // 217
        triggersEnter: [                                                                                             // 218
          function() {                                                                                               // 219
            AccountsTemplates.setState(route);                                                                       // 220
            AccountsTemplates.setDisabled(true);                                                                     // 221
          }                                                                                                          // 222
        ],                                                                                                           // 223
        action: function(params) {                                                                                   // 224
          doLayout();                                                                                                // 225
                                                                                                                     // 226
          var token = params.paramToken;                                                                             // 227
          if (Meteor.isClient) {                                                                                     // 228
             Accounts.verifyEmail(token, function(error) {                                                           // 229
               AccountsTemplates.setDisabled(false);                                                                 // 230
               AccountsTemplates.submitCallback(error, route, function() {                                           // 231
                 AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.emailVerified);             // 232
               });                                                                                                   // 233
             });                                                                                                     // 234
          }                                                                                                          // 235
        }                                                                                                            // 236
      });                                                                                                            // 237
    } else {                                                                                                         // 238
      FlowRouter.route(path, {                                                                                       // 239
        name: name,                                                                                                  // 240
        triggersEnter: [                                                                                             // 241
          function() {                                                                                               // 242
            AccountsTemplates.setState(route);                                                                       // 243
          }                                                                                                          // 244
        ],                                                                                                           // 245
        action: function(params) {                                                                                   // 246
          doLayout();                                                                                                // 247
        }                                                                                                            // 248
      });                                                                                                            // 249
    }                                                                                                                // 250
  } else {                                                                                                           // 251
    FlowRouter.route(path, {                                                                                         // 252
      name: name,                                                                                                    // 253
      triggersEnter: [                                                                                               // 254
        function() {                                                                                                 // 255
          var redirect = false;                                                                                      // 256
          if (route === 'changePwd') {                                                                               // 257
            if (!Meteor.loggingIn() && !Meteor.userId()) {                                                           // 258
              redirect = true;                                                                                       // 259
            }                                                                                                        // 260
          } else if (Meteor.userId()) {                                                                              // 261
            redirect = true;                                                                                         // 262
          }                                                                                                          // 263
          if (redirect) {                                                                                            // 264
            AccountsTemplates.postSubmitRedirect(route);                                                             // 265
          } else {                                                                                                   // 266
            AccountsTemplates.setState(route);                                                                       // 267
          }                                                                                                          // 268
        }                                                                                                            // 269
      ],                                                                                                             // 270
      action: function() {                                                                                           // 271
        doLayout();                                                                                                  // 272
      }                                                                                                              // 273
    });                                                                                                              // 274
  }                                                                                                                  // 275
};                                                                                                                   // 276
                                                                                                                     // 277
                                                                                                                     // 278
AccountsTemplates.getRouteName = function(route) {                                                                   // 279
  if (route in this.routes) {                                                                                        // 280
    return this.routes[route].name;                                                                                  // 281
  }                                                                                                                  // 282
  return null;                                                                                                       // 283
};                                                                                                                   // 284
                                                                                                                     // 285
AccountsTemplates.getRoutePath = function(route) {                                                                   // 286
  if (route in this.routes) {                                                                                        // 287
    return this.routes[route].path;                                                                                  // 288
  }                                                                                                                  // 289
  return "#";                                                                                                        // 290
};                                                                                                                   // 291
                                                                                                                     // 292
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/useraccounts_flow-routing/lib/client/client.js                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* global                                                                                                            // 1
  AccountsTemplates: false,                                                                                          // 2
  BlazeLayout: false,                                                                                                // 3
  grecaptcha: false,                                                                                                 // 4
  FlowRouter: false,                                                                                                 // 5
  $: false                                                                                                           // 6
*/                                                                                                                   // 7
'use strict';                                                                                                        // 8
                                                                                                                     // 9
                                                                                                                     // 10
// Previous path used for redirect after form submit                                                                 // 11
AccountsTemplates._prevPath = null;                                                                                  // 12
                                                                                                                     // 13
// Possibly keeps reference to the handle for the timed out redirect                                                 // 14
// set on some routes                                                                                                // 15
AccountsTemplates.timedOutRedirect = null;                                                                           // 16
                                                                                                                     // 17
                                                                                                                     // 18
AccountsTemplates.clearState = function() {                                                                          // 19
  _.each(this._fields, function(field) {                                                                             // 20
    field.clearStatus();                                                                                             // 21
  });                                                                                                                // 22
  var form = this.state.form;                                                                                        // 23
  form.set('error', null);                                                                                           // 24
  form.set('result', null);                                                                                          // 25
  form.set('message', null);                                                                                         // 26
                                                                                                                     // 27
  AccountsTemplates.setDisabled(false);                                                                              // 28
                                                                                                                     // 29
  // Possibly clears timed out redirects                                                                             // 30
  if (AccountsTemplates.timedOutRedirect !== null) {                                                                 // 31
    Meteor.clearTimeout(AccountsTemplates.timedOutRedirect);                                                         // 32
    AccountsTemplates.timedOutRedirect = null;                                                                       // 33
  }                                                                                                                  // 34
};                                                                                                                   // 35
                                                                                                                     // 36
AccountsTemplates.getparamToken = function() {                                                                       // 37
  return FlowRouter.getParam('paramToken');                                                                          // 38
};                                                                                                                   // 39
                                                                                                                     // 40
// Getter for previous route's path                                                                                  // 41
AccountsTemplates.getPrevPath = function() {                                                                         // 42
  return this._prevPath;                                                                                             // 43
};                                                                                                                   // 44
                                                                                                                     // 45
// Setter for previous route's path                                                                                  // 46
AccountsTemplates.setPrevPath = function(newPath) {                                                                  // 47
  check(newPath, String);                                                                                            // 48
  this._prevPath = newPath;                                                                                          // 49
};                                                                                                                   // 50
                                                                                                                     // 51
AccountsTemplates.ensureSignedIn = function(context, redirect) {                                                     // 52
  if (!Meteor.userId()) {                                                                                            // 53
    // if we're not already on an AT route                                                                           // 54
    if (!_.contains(AccountsTemplates.knownRoutes, context.route.name)) {                                            // 55
                                                                                                                     // 56
      AccountsTemplates.setState(AccountsTemplates.options.defaultState, function() {                                // 57
        var err = AccountsTemplates.texts.errors.mustBeLoggedIn;                                                     // 58
        AccountsTemplates.state.form.set("error", [err]);                                                            // 59
      });                                                                                                            // 60
                                                                                                                     // 61
      // redirect settings                                                                                           // 62
      AccountsTemplates.avoidRedirect = true;                                                                        // 63
      AccountsTemplates.avoidClearError = true;                                                                      // 64
      AccountsTemplates.redirectToPrevPath = true;                                                                   // 65
                                                                                                                     // 66
      // redirect to defined sign-in route and then redirect back                                                    // 67
      // to original route after successful sign in                                                                  // 68
      var signInRouteName = AccountsTemplates.getRouteName('signIn');                                                // 69
      if (signInRouteName) {                                                                                         // 70
        redirect(signInRouteName);                                                                                   // 71
      }                                                                                                              // 72
      else {                                                                                                         // 73
        throw Error('[ensureSignedIn] no signIn route configured!');                                                 // 74
      }                                                                                                              // 75
    }                                                                                                                // 76
  }                                                                                                                  // 77
};                                                                                                                   // 78
                                                                                                                     // 79
// Stores previous path on path change...                                                                            // 80
FlowRouter.triggers.exit([                                                                                           // 81
  function(context) {                                                                                                // 82
    var routeName = context.route.name;                                                                              // 83
    var knownRoute = _.contains(AccountsTemplates.knownRoutes, routeName);                                           // 84
    if (!knownRoute) {                                                                                               // 85
      AccountsTemplates.setPrevPath(context.path);                                                                   // 86
    }                                                                                                                // 87
  }                                                                                                                  // 88
]);                                                                                                                  // 89
                                                                                                                     // 90
AccountsTemplates.linkClick = function(route) {                                                                      // 91
  if (AccountsTemplates.disabled()) {                                                                                // 92
    return;                                                                                                          // 93
  }                                                                                                                  // 94
  var path = AccountsTemplates.getRoutePath(route);                                                                  // 95
  if (path === '#' || AccountsTemplates.avoidRedirect || path === FlowRouter.current().path) {                       // 96
    AccountsTemplates.setState(route);                                                                               // 97
  } else {                                                                                                           // 98
    Meteor.defer(function() {                                                                                        // 99
      FlowRouter.go(path);                                                                                           // 100
    });                                                                                                              // 101
  }                                                                                                                  // 102
                                                                                                                     // 103
  if (AccountsTemplates.options.focusFirstInput) {                                                                   // 104
    var firstVisibleInput = _.find(this.getFields(), function(f) {                                                   // 105
      return _.contains(f.visible, route);                                                                           // 106
    });                                                                                                              // 107
    if (firstVisibleInput) {                                                                                         // 108
      $('input#at-field-' + firstVisibleInput._id).focus();                                                          // 109
    }                                                                                                                // 110
  }                                                                                                                  // 111
};                                                                                                                   // 112
                                                                                                                     // 113
AccountsTemplates.logout = function() {                                                                              // 114
  var onLogoutHook = AccountsTemplates.options.onLogoutHook;                                                         // 115
  var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                                       // 116
  Meteor.logout(function() {                                                                                         // 117
    if (onLogoutHook) {                                                                                              // 118
      onLogoutHook();                                                                                                // 119
    } else if (homeRoutePath) {                                                                                      // 120
      FlowRouter.redirect(homeRoutePath);                                                                            // 121
    }                                                                                                                // 122
  });                                                                                                                // 123
};                                                                                                                   // 124
                                                                                                                     // 125
AccountsTemplates.postSubmitRedirect = function(route) {                                                             // 126
  if (AccountsTemplates.avoidRedirect) {                                                                             // 127
    AccountsTemplates.avoidRedirect = false;                                                                         // 128
    if (AccountsTemplates.redirectToPrevPath) {                                                                      // 129
      FlowRouter.redirect(AccountsTemplates.getPrevPath());                                                          // 130
    }                                                                                                                // 131
  } else {                                                                                                           // 132
    var nextPath = AccountsTemplates.routes[route] && AccountsTemplates.routes[route].redirect;                      // 133
    if (nextPath) {                                                                                                  // 134
      if (_.isFunction(nextPath)) {                                                                                  // 135
        nextPath();                                                                                                  // 136
      } else {                                                                                                       // 137
        FlowRouter.go(nextPath);                                                                                     // 138
      }                                                                                                              // 139
    } else {                                                                                                         // 140
      var previousPath = AccountsTemplates.getPrevPath();                                                            // 141
      if (previousPath && FlowRouter.current().path !== previousPath) {                                              // 142
        FlowRouter.go(previousPath);                                                                                 // 143
      } else {                                                                                                       // 144
        var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                                 // 145
        if (homeRoutePath) {                                                                                         // 146
          FlowRouter.go(homeRoutePath);                                                                              // 147
        }                                                                                                            // 148
      }                                                                                                              // 149
    }                                                                                                                // 150
  }                                                                                                                  // 151
};                                                                                                                   // 152
                                                                                                                     // 153
AccountsTemplates.submitCallback = function(error, state, onSuccess) {                                               // 154
                                                                                                                     // 155
  var onSubmitHook = AccountsTemplates.options.onSubmitHook;                                                         // 156
  if (onSubmitHook) {                                                                                                // 157
    onSubmitHook(error, state);                                                                                      // 158
  }                                                                                                                  // 159
                                                                                                                     // 160
  if (error) {                                                                                                       // 161
    if (_.isObject(error.details)) {                                                                                 // 162
      if (error.error === 'validation-error') {                                                                      // 163
        // This error is a ValidationError from the mdg:validation-error package.                                    // 164
        // It has a well-defined error format                                                                        // 165
                                                                                                                     // 166
        // Record errors that don't correspond to fields in the form                                                 // 167
        var errorsWithoutField = [];                                                                                 // 168
                                                                                                                     // 169
        _.each(error.details, function(fieldError) {                                                                 // 170
          var field = AccountsTemplates.getField(fieldError.name);                                                   // 171
                                                                                                                     // 172
          if (field) {                                                                                               // 173
            // XXX in the future, this should have a way to do i18n                                                  // 174
            field.setError(fieldError.type);                                                                         // 175
          } else {                                                                                                   // 176
            errorsWithoutField.push(fieldError.type);                                                                // 177
          }                                                                                                          // 178
        });                                                                                                          // 179
                                                                                                                     // 180
        if (errorsWithoutField) {                                                                                    // 181
          AccountsTemplates.state.form.set('error', errorsWithoutField);                                             // 182
        }                                                                                                            // 183
      } else {                                                                                                       // 184
        // If error.details is an object, we may try to set fields errors from it                                    // 185
        _.each(error.details, function(error, fieldId) {                                                             // 186
          AccountsTemplates.getField(fieldId).setError(error);                                                       // 187
        });                                                                                                          // 188
      }                                                                                                              // 189
    } else {                                                                                                         // 190
      var err = 'error.accounts.Unknown error';                                                                      // 191
      if (error.reason) {                                                                                            // 192
        err = error.reason;                                                                                          // 193
      }                                                                                                              // 194
      if (err.substring(0, 15) !== 'error.accounts.') {                                                              // 195
        err = 'error.accounts.' + err;                                                                               // 196
      }                                                                                                              // 197
      AccountsTemplates.state.form.set('error', [err]);                                                              // 198
    }                                                                                                                // 199
    AccountsTemplates.setDisabled(false);                                                                            // 200
    // Possibly resets reCaptcha form                                                                                // 201
    if (state === 'signUp' && AccountsTemplates.options.showReCaptcha) {                                             // 202
      grecaptcha.reset();                                                                                            // 203
    }                                                                                                                // 204
  } else {                                                                                                           // 205
    if (onSuccess) {                                                                                                 // 206
      onSuccess();                                                                                                   // 207
    }                                                                                                                // 208
                                                                                                                     // 209
    if (_.contains(['enrollAccount', 'forgotPwd', 'resetPwd', 'verifyEmail'], state)) {                              // 210
      var redirectTimeout = AccountsTemplates.options.redirectTimeout;                                               // 211
      if (redirectTimeout > 0) {                                                                                     // 212
        AccountsTemplates.timedOutRedirect = Meteor.setTimeout(function() {                                          // 213
          AccountsTemplates.timedOutRedirect = null;                                                                 // 214
          AccountsTemplates.setDisabled(false);                                                                      // 215
          AccountsTemplates.postSubmitRedirect(state);                                                               // 216
        }, redirectTimeout);                                                                                         // 217
      }                                                                                                              // 218
    } else if (state) {                                                                                              // 219
      AccountsTemplates.setDisabled(false);                                                                          // 220
      AccountsTemplates.postSubmitRedirect(state);                                                                   // 221
    }                                                                                                                // 222
  }                                                                                                                  // 223
};                                                                                                                   // 224
                                                                                                                     // 225
// Initialization                                                                                                    // 226
if (FlowRouter && FlowRouter.initialize) {                                                                           // 227
  // In order for ensureSignIn triggers to work,                                                                     // 228
  // AccountsTemplates must be initialized before FlowRouter                                                         // 229
  // (this is now true since useraccounts:core is being executed first...)                                           // 230
  var oldInitialize = FlowRouter.initialize;                                                                         // 231
  FlowRouter.initialize = function() {                                                                               // 232
    AccountsTemplates._init();                                                                                       // 233
    oldInitialize.apply(this, arguments);                                                                            // 234
  };                                                                                                                 // 235
}                                                                                                                    // 236
                                                                                                                     // 237
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/useraccounts_flow-routing/lib/client/templates_helpers/at_input.js                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* global                                                                                                            // 1
  AccountsTemplates: false,                                                                                          // 2
  FlowRouter: false                                                                                                  // 3
*/                                                                                                                   // 4
'use strict';                                                                                                        // 5
                                                                                                                     // 6
AccountsTemplates.atInputRendered.push(function(){                                                                   // 7
  var fieldId = this.data._id;                                                                                       // 8
  var queryKey = this.data.options && this.data.options.queryKey || fieldId;                                         // 9
  var inputQueryVal = FlowRouter.getQueryParam(queryKey);                                                            // 10
  if (inputQueryVal) {                                                                                               // 11
    this.$("input#at-field-" + fieldId).val(inputQueryVal);                                                          // 12
  }                                                                                                                  // 13
});                                                                                                                  // 14
                                                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:flow-routing'] = {};

})();
