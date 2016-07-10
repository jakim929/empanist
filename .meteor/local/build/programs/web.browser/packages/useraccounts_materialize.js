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
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Accounts = Package['accounts-base'].Accounts;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_error.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atError");                                                                                       // 2
Template["atError"] = new Template("Template.atError", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-error card-panel red lighten-2"                                                                       // 6
  }, "\n    ", Blaze.Each(function() {                                                                                 // 7
    return Spacebars.call(view.lookup("error"));                                                                       // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.SPAN({                                                                                   // 10
      "class": ""                                                                                                      // 11
    }, HTML.I({                                                                                                        // 12
      "class": "mdi-alert-warning"                                                                                     // 13
    }), " ", Blaze.View("lookup:errorText", function() {                                                               // 14
      return Spacebars.mustache(view.lookup("errorText"));                                                             // 15
    })), "\n    " ];                                                                                                   // 16
  }), "\n  ");                                                                                                         // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_error.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atError.helpers(AccountsTemplates.atErrorHelpers);                                                            // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_form.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atForm");                                                                                        // 2
Template["atForm"] = new Template("Template.atForm", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.Unless(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("hide"));                                                                        // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      "class": "at-form"                                                                                               // 9
    }, "\n      ", Blaze.If(function() {                                                                               // 10
      return Spacebars.call(view.lookup("showTitle"));                                                                 // 11
    }, function() {                                                                                                    // 12
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atTitle")), "\n      " ];                          // 13
    }), "\n      ", Blaze.If(function() {                                                                              // 14
      return Spacebars.call(view.lookup("showOauthServices"));                                                         // 15
    }, function() {                                                                                                    // 16
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atOauth")), "\n      " ];                          // 17
    }), "\n      ", Blaze.If(function() {                                                                              // 18
      return Spacebars.call(view.lookup("showServicesSeparator"));                                                     // 19
    }, function() {                                                                                                    // 20
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atSep")), "\n      " ];                            // 21
    }), "\n      ", Blaze.If(function() {                                                                              // 22
      return Spacebars.call(view.lookup("showError"));                                                                 // 23
    }, function() {                                                                                                    // 24
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atError")), "\n      " ];                          // 25
    }), "\n      ", Blaze.If(function() {                                                                              // 26
      return Spacebars.call(view.lookup("showResult"));                                                                // 27
    }, function() {                                                                                                    // 28
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atResult")), "\n      " ];                         // 29
    }), "\n      ", Blaze.If(function() {                                                                              // 30
      return Spacebars.call(view.lookup("showMessage"));                                                               // 31
    }, function() {                                                                                                    // 32
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atMessage")), "\n      " ];                        // 33
    }), "\n      ", Blaze.If(function() {                                                                              // 34
      return Spacebars.call(view.lookup("showPwdForm"));                                                               // 35
    }, function() {                                                                                                    // 36
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atPwdForm")), "\n      " ];                        // 37
    }), "\n      ", Blaze.If(function() {                                                                              // 38
      return Spacebars.call(view.lookup("showTermsLink"));                                                             // 39
    }, function() {                                                                                                    // 40
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atTermsLink")), "\n      " ];                      // 41
    }), "\n      ", Blaze.If(function() {                                                                              // 42
      return Spacebars.call(view.lookup("showSignInLink"));                                                            // 43
    }, function() {                                                                                                    // 44
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atSigninLink")), "\n      " ];                     // 45
    }), "\n      ", Blaze.If(function() {                                                                              // 46
      return Spacebars.call(view.lookup("showSignUpLink"));                                                            // 47
    }, function() {                                                                                                    // 48
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atSignupLink")), "\n      " ];                     // 49
    }), "\n      ", Blaze.If(function() {                                                                              // 50
      return Spacebars.call(view.lookup("showResendVerificationEmailLink"));                                           // 51
    }, function() {                                                                                                    // 52
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atResendVerificationEmailLink")), "\n      " ];    // 53
    }), "\n    "), "\n  " ];                                                                                           // 54
  });                                                                                                                  // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_form.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atForm.helpers(AccountsTemplates.atFormHelpers);                                                              // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_input.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atInput");                                                                                       // 2
Template["atInput"] = new Template("Template.atInput", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      template: Spacebars.call(view.lookup("templateName"))                                                            // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(function() {                                                                              // 10
      return Spacebars.call(Template.__dynamic);                                                                       // 11
    });                                                                                                                // 12
  });                                                                                                                  // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
Template.__checkName("atTextInput");                                                                                   // 16
Template["atTextInput"] = new Template("Template.atTextInput", (function() {                                           // 17
  var view = this;                                                                                                     // 18
  return HTML.DIV({                                                                                                    // 19
    "class": "row"                                                                                                     // 20
  }, "\n    ", HTML.DIV({                                                                                              // 21
    "class": "at-input input-field col s12"                                                                            // 22
  }, "\n      ", Blaze.If(function() {                                                                                 // 23
    return Spacebars.call(view.lookup("showLabels"));                                                                  // 24
  }, function() {                                                                                                      // 25
    return [ "\n        ", HTML.LABEL({                                                                                // 26
      "for": function() {                                                                                              // 27
        return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                // 28
      }                                                                                                                // 29
    }, "\n          ", Blaze.View("lookup:displayName", function() {                                                   // 30
      return Spacebars.mustache(view.lookup("displayName"));                                                           // 31
    }), " ", Blaze.Unless(function() {                                                                                 // 32
      return Spacebars.call(view.lookup("required"));                                                                  // 33
    }, function() {                                                                                                    // 34
      return Blaze.View("lookup:optionalText", function() {                                                            // 35
        return Spacebars.mustache(view.lookup("optionalText"));                                                        // 36
      });                                                                                                              // 37
    }), "\n        "), "\n      " ];                                                                                   // 38
  }), "\n      ", HTML.INPUT({                                                                                         // 39
    "class": function() {                                                                                              // 40
      return [ "validate ", Blaze.If(function() {                                                                      // 41
        return Spacebars.call(view.lookup("hasError"));                                                                // 42
      }, function() {                                                                                                  // 43
        return "invalid";                                                                                              // 44
      }), " ", Blaze.If(function() {                                                                                   // 45
        return Spacebars.call(view.lookup("hasSuccess"));                                                              // 46
      }, function() {                                                                                                  // 47
        return "valid";                                                                                                // 48
      }) ];                                                                                                            // 49
    },                                                                                                                 // 50
    type: function() {                                                                                                 // 51
      return Spacebars.mustache(view.lookup("type"));                                                                  // 52
    },                                                                                                                 // 53
    id: function() {                                                                                                   // 54
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 55
    },                                                                                                                 // 56
    name: function() {                                                                                                 // 57
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 58
    },                                                                                                                 // 59
    placeholder: function() {                                                                                          // 60
      return Blaze.Unless(function() {                                                                                 // 61
        return Spacebars.call(view.lookup("showLabels"));                                                              // 62
      }, function() {                                                                                                  // 63
        return [ " ", Blaze.View("lookup:placeholder", function() {                                                    // 64
          return Spacebars.mustache(view.lookup("placeholder"));                                                       // 65
        }), " " ];                                                                                                     // 66
      });                                                                                                              // 67
    },                                                                                                                 // 68
    autocapitalize: "none",                                                                                            // 69
    autocorrect: "off"                                                                                                 // 70
  }), "\n      ", Blaze.If(function() {                                                                                // 71
    return Spacebars.call(view.lookup("hasIcon"));                                                                     // 72
  }, function() {                                                                                                      // 73
    return [ "\n          ", HTML.SPAN({                                                                               // 74
      "class": function() {                                                                                            // 75
        return Spacebars.mustache(view.lookup("iconClass"));                                                           // 76
      }                                                                                                                // 77
    }), "\n      " ];                                                                                                  // 78
  }), "\n      ", Blaze.If(function() {                                                                                // 79
    return Spacebars.call(view.lookup("hasError"));                                                                    // 80
  }, function() {                                                                                                      // 81
    return [ "\n        ", HTML.SPAN({                                                                                 // 82
      "class": "red-text"                                                                                              // 83
    }, Blaze.View("lookup:errorText", function() {                                                                     // 84
      return Spacebars.mustache(view.lookup("errorText"));                                                             // 85
    })), "\n      " ];                                                                                                 // 86
  }), "\n    "), "\n  ");                                                                                              // 87
}));                                                                                                                   // 88
                                                                                                                       // 89
Template.__checkName("atCheckboxInput");                                                                               // 90
Template["atCheckboxInput"] = new Template("Template.atCheckboxInput", (function() {                                   // 91
  var view = this;                                                                                                     // 92
  return HTML.DIV({                                                                                                    // 93
    "class": "at-input"                                                                                                // 94
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                               // 95
    type: function() {                                                                                                 // 96
      return Spacebars.mustache(view.lookup("type"));                                                                  // 97
    },                                                                                                                 // 98
    id: function() {                                                                                                   // 99
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 100
    },                                                                                                                 // 101
    name: function() {                                                                                                 // 102
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 103
    }                                                                                                                  // 104
  }, function() {                                                                                                      // 105
    return Spacebars.attrMustache(view.lookup("disabled"));                                                            // 106
  })), "\n      ", HTML.LABEL({                                                                                        // 107
    "for": function() {                                                                                                // 108
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 109
    }                                                                                                                  // 110
  }, Blaze.View("lookup:displayName", function() {                                                                     // 111
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 112
  })), "\n  ");                                                                                                        // 113
}));                                                                                                                   // 114
                                                                                                                       // 115
Template.__checkName("atSelectInput");                                                                                 // 116
Template["atSelectInput"] = new Template("Template.atSelectInput", (function() {                                       // 117
  var view = this;                                                                                                     // 118
  return HTML.DIV({                                                                                                    // 119
    "class": "at-input"                                                                                                // 120
  }, "\n    ", HTML.LABEL({                                                                                            // 121
    "for": function() {                                                                                                // 122
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 123
    }                                                                                                                  // 124
  }, Blaze.View("lookup:displayName", function() {                                                                     // 125
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 126
  })), "\n    ", HTML.SELECT({                                                                                         // 127
    id: function() {                                                                                                   // 128
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 129
    },                                                                                                                 // 130
    name: function() {                                                                                                 // 131
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 132
    }                                                                                                                  // 133
  }, "\n      ", Blaze.Each(function() {                                                                               // 134
    return Spacebars.call(view.lookup("values"));                                                                      // 135
  }, function() {                                                                                                      // 136
    return [ "\n        ", HTML.OPTION({                                                                               // 137
      value: function() {                                                                                              // 138
        return Spacebars.mustache(view.lookup("value"));                                                               // 139
      }                                                                                                                // 140
    }, Blaze.View("lookup:text", function() {                                                                          // 141
      return Spacebars.mustache(view.lookup("text"));                                                                  // 142
    })), "\n      " ];                                                                                                 // 143
  }), "\n    "), "\n  ");                                                                                              // 144
}));                                                                                                                   // 145
                                                                                                                       // 146
Template.__checkName("atRadioInput");                                                                                  // 147
Template["atRadioInput"] = new Template("Template.atRadioInput", (function() {                                         // 148
  var view = this;                                                                                                     // 149
  return [ HTML.DIV({                                                                                                  // 150
    "class": "at-input"                                                                                                // 151
  }, "\n    ", HTML.LABEL(Blaze.View("lookup:displayName", function() {                                                // 152
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 153
  })), "\n  "), "\n  ", Blaze.Each(function() {                                                                        // 154
    return Spacebars.call(view.lookup("values"));                                                                      // 155
  }, function() {                                                                                                      // 156
    return [ "\n    ", HTML.DIV({                                                                                      // 157
      "class": "at-input"                                                                                              // 158
    }, "\n      ", HTML.INPUT({                                                                                        // 159
      id: function() {                                                                                                 // 160
        return [ "at-field-", Spacebars.mustache(view.lookup("id")), "-choice-", Spacebars.mustache(view.lookup("value")) ];
      },                                                                                                               // 162
      type: "radio",                                                                                                   // 163
      name: function() {                                                                                               // 164
        return [ "at-field-", Spacebars.mustache(view.lookup("id")) ];                                                 // 165
      },                                                                                                               // 166
      value: function() {                                                                                              // 167
        return Spacebars.mustache(view.lookup("value"));                                                               // 168
      }                                                                                                                // 169
    }), "\n      ", HTML.LABEL({                                                                                       // 170
      "for": function() {                                                                                              // 171
        return [ "at-field-", Spacebars.mustache(view.lookup("id")), "-choice-", Spacebars.mustache(view.lookup("value")) ];
      }                                                                                                                // 173
    }, Blaze.View("lookup:text", function() {                                                                          // 174
      return Spacebars.mustache(view.lookup("text"));                                                                  // 175
    })), "\n    "), "\n  " ];                                                                                          // 176
  }) ];                                                                                                                // 177
}));                                                                                                                   // 178
                                                                                                                       // 179
Template.__checkName("atHiddenInput");                                                                                 // 180
Template["atHiddenInput"] = new Template("Template.atHiddenInput", (function() {                                       // 181
  var view = this;                                                                                                     // 182
  return HTML.INPUT({                                                                                                  // 183
    type: "hidden",                                                                                                    // 184
    id: function() {                                                                                                   // 185
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 186
    },                                                                                                                 // 187
    name: function() {                                                                                                 // 188
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                                  // 189
    }                                                                                                                  // 190
  });                                                                                                                  // 191
}));                                                                                                                   // 192
                                                                                                                       // 193
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_input.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
_.each(AccountsTemplates.atInputRendered, function(callback){                                                          // 1
  Template.atInput.onRendered(callback);                                                                               // 2
  Template.atHiddenInput.onRendered(callback);                                                                         // 3
});                                                                                                                    // 4
                                                                                                                       // 5
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 6
Template.atInput.helpers(AccountsTemplates.atInputHelpers);                                                            // 7
                                                                                                                       // 8
// Simply 'inherites' events from AccountsTemplates                                                                    // 9
Template.atInput.events(AccountsTemplates.atInputEvents);                                                              // 10
                                                                                                                       // 11
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 12
Template.atTextInput.helpers(AccountsTemplates.atInputHelpers);                                                        // 13
                                                                                                                       // 14
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 15
Template.atCheckboxInput.helpers(AccountsTemplates.atInputHelpers);                                                    // 16
                                                                                                                       // 17
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 18
Template.atSelectInput.helpers(AccountsTemplates.atInputHelpers);                                                      // 19
                                                                                                                       // 20
Template.atSelectInput.onRendered(function () {                                                                        // 21
  $('#at-field-'+ this.data._id).material_select();                                                                    // 22
});                                                                                                                    // 23
                                                                                                                       // 24
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 25
Template.atRadioInput.helpers(AccountsTemplates.atInputHelpers);                                                       // 26
                                                                                                                       // 27
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 28
Template.atHiddenInput.helpers(AccountsTemplates.atInputHelpers);                                                      // 29
                                                                                                                       // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_message.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atMessage");                                                                                     // 2
Template["atMessage"] = new Template("Template.atMessage", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-message"                                                                                              // 6
  }, "\n    ", Blaze.View("lookup:message", function() {                                                               // 7
    return Spacebars.mustache(view.lookup("message"));                                                                 // 8
  }), "\n  ");                                                                                                         // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_message.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atMessage.helpers(AccountsTemplates.atMessageHelpers);                                                        // 2
                                                                                                                       // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_nav_button.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atNavButton");                                                                                   // 2
Template["atNavButton"] = new Template("Template.atNavButton", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.A({                                                                                                      // 5
    id: "at-nav-button",                                                                                               // 6
    "class": "waves-effect waves-light btn"                                                                            // 7
  }, Blaze.View("lookup:text", function() {                                                                            // 8
    return Spacebars.mustache(view.lookup("text"));                                                                    // 9
  }));                                                                                                                 // 10
}));                                                                                                                   // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_nav_button.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atNavButton.helpers(AccountsTemplates.atNavButtonHelpers);                                                    // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atNavButton.events(AccountsTemplates.atNavButtonEvents);                                                      // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_oauth.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atOauth");                                                                                       // 2
Template["atOauth"] = new Template("Template.atOauth", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-oauth center-align"                                                                                   // 6
  }, "\n    ", Blaze.Each(function() {                                                                                 // 7
    return Spacebars.call(view.lookup("oauthService"));                                                                // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("atSocial")), "\n    " ];                               // 10
  }), "\n  ");                                                                                                         // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_oauth.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atOauth.helpers(AccountsTemplates.atOauthHelpers);                                                            // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_pwd_form.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atPwdForm");                                                                                     // 2
Template["atPwdForm"] = new Template("Template.atPwdForm", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-pwd-form"                                                                                             // 6
  }, "\n    ", HTML.FORM({                                                                                             // 7
    role: "form",                                                                                                      // 8
    id: "at-pwd-form",                                                                                                 // 9
    "class": function() {                                                                                              // 10
      return Spacebars.mustache(view.lookup("disabled"));                                                              // 11
    },                                                                                                                 // 12
    novalidate: "",                                                                                                    // 13
    action: "#",                                                                                                       // 14
    method: "POST"                                                                                                     // 15
  }, "\n      ", Blaze.Each(function() {                                                                               // 16
    return Spacebars.call(view.lookup("fields"));                                                                      // 17
  }, function() {                                                                                                      // 18
    return [ "\n        ", Spacebars.include(view.lookupTemplate("atInput")), "\n      " ];                            // 19
  }), "\n      ", Blaze.If(function() {                                                                                // 20
    return Spacebars.call(view.lookup("showReCaptcha"));                                                               // 21
  }, function() {                                                                                                      // 22
    return [ "\n        ", Spacebars.include(view.lookupTemplate("atReCaptcha")), "\n      " ];                        // 23
  }), "\n      ", Blaze.If(function() {                                                                                // 24
    return Spacebars.call(view.lookup("showForgotPasswordLink"));                                                      // 25
  }, function() {                                                                                                      // 26
    return [ "\n        ", Spacebars.include(view.lookupTemplate("atPwdLink")), "\n      " ];                          // 27
  }), "\n      ", Spacebars.include(view.lookupTemplate("atPwdFormBtn")), "\n    "), "\n  ");                          // 28
}));                                                                                                                   // 29
                                                                                                                       // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_pwd_form.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atPwdForm.helpers(AccountsTemplates.atPwdFormHelpers);                                                        // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atPwdForm.events(AccountsTemplates.atPwdFormEvents);                                                          // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_pwd_form_btn.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atPwdFormBtn");                                                                                  // 2
Template["atPwdFormBtn"] = new Template("Template.atPwdFormBtn", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "row"                                                                                                     // 6
  }, "    \n    ", HTML.BUTTON({                                                                                       // 7
    type: "submit",                                                                                                    // 8
    "class": function() {                                                                                              // 9
      return [ "at-btn submit ", Spacebars.mustache(view.lookup("submitDisabled")), " waves-effect waves-light btn" ];
    },                                                                                                                 // 11
    id: "at-btn"                                                                                                       // 12
  }, "\n      ", Blaze.View("lookup:buttonText", function() {                                                          // 13
    return Spacebars.mustache(view.lookup("buttonText"));                                                              // 14
  }), "\n    "), "\n  ");                                                                                              // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_pwd_form_btn.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atPwdFormBtn.helpers(AccountsTemplates.atPwdFormBtnHelpers);                                                  // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_pwd_link.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atPwdLink");                                                                                     // 2
Template["atPwdLink"] = new Template("Template.atPwdLink", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-pwd-link"                                                                                             // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                            // 7
    return Spacebars.mustache(view.lookup("preText"));                                                                 // 8
  }), "\n      ", HTML.A({                                                                                             // 9
    href: function() {                                                                                                 // 10
      return Spacebars.mustache(view.lookup("forgotPwdLink"));                                                         // 11
    },                                                                                                                 // 12
    id: "at-forgotPwd",                                                                                                // 13
    "class": function() {                                                                                              // 14
      return [ "at-link at-pwd ", Spacebars.mustache(view.lookup("disabled")) ];                                       // 15
    }                                                                                                                  // 16
  }, Blaze.View("lookup:linkText", function() {                                                                        // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                                // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                          // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                                // 20
  }), "\n    "), "\n  ");                                                                                              // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_pwd_link.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atPwdLink.helpers(AccountsTemplates.atPwdLinkHelpers);                                                        // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atPwdLink.events(AccountsTemplates.atPwdLinkEvents);                                                          // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_reCaptcha.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atReCaptcha");                                                                                   // 2
Template["atReCaptcha"] = new Template("Template.atReCaptcha", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "row"                                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "g-recaptcha",                                                                                            // 8
    "data-sitekey": function() {                                                                                       // 9
      return Spacebars.mustache(view.lookup("key"));                                                                   // 10
    },                                                                                                                 // 11
    "data-theme": function() {                                                                                         // 12
      return Spacebars.mustache(view.lookup("theme"));                                                                 // 13
    },                                                                                                                 // 14
    "data-type": function() {                                                                                          // 15
      return Spacebars.mustache(view.lookup("data_type"));                                                             // 16
    }                                                                                                                  // 17
  }), "\n  ");                                                                                                         // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_reCaptcha.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' rendered callback from AccountsTemplates                                                         // 1
Template.atReCaptcha.rendered = AccountsTemplates.atReCaptchaRendered;                                                 // 2
                                                                                                                       // 3
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 4
Template.atReCaptcha.helpers(AccountsTemplates.atReCaptchaHelpers);                                                    // 5
                                                                                                                       // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_result.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atResult");                                                                                      // 2
Template["atResult"] = new Template("Template.atResult", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-result"                                                                                               // 6
  }, "\n    ", Blaze.View("lookup:result", function() {                                                                // 7
    return Spacebars.mustache(view.lookup("result"));                                                                  // 8
  }), "\n  ");                                                                                                         // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_result.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atResult.helpers(AccountsTemplates.atResultHelpers);                                                          // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_sep.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atSep");                                                                                         // 2
Template["atSep"] = new Template("Template.atSep", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-sep row center-align"                                                                                 // 6
  }, "\n    ", HTML.STRONG(Blaze.View("lookup:sepText", function() {                                                   // 7
    return Spacebars.mustache(view.lookup("sepText"));                                                                 // 8
  })), "\n  ");                                                                                                        // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_sep.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atSep.helpers(AccountsTemplates.atSepHelpers);                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_signin_link.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atSigninLink");                                                                                  // 2
Template["atSigninLink"] = new Template("Template.atSigninLink", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-signin-link"                                                                                          // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                            // 7
    return Spacebars.mustache(view.lookup("preText"));                                                                 // 8
  }), "\n      ", HTML.A({                                                                                             // 9
    href: function() {                                                                                                 // 10
      return Spacebars.mustache(view.lookup("signInLink"));                                                            // 11
    },                                                                                                                 // 12
    id: "at-signIn",                                                                                                   // 13
    "class": function() {                                                                                              // 14
      return [ "at-link at-signin ", Spacebars.mustache(view.lookup("disabled")) ];                                    // 15
    }                                                                                                                  // 16
  }, Blaze.View("lookup:linkText", function() {                                                                        // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                                // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                          // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                                // 20
  }), "\n    "), "\n  ");                                                                                              // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_signin_link.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atSigninLink.helpers(AccountsTemplates.atSigninLinkHelpers);                                                  // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atSigninLink.events(AccountsTemplates.atSigninLinkEvents);                                                    // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_signup_link.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atSignupLink");                                                                                  // 2
Template["atSignupLink"] = new Template("Template.atSignupLink", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-signup-link"                                                                                          // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                            // 7
    return Spacebars.mustache(view.lookup("preText"));                                                                 // 8
  }), "\n      ", HTML.A({                                                                                             // 9
    href: function() {                                                                                                 // 10
      return Spacebars.mustache(view.lookup("signUpLink"));                                                            // 11
    },                                                                                                                 // 12
    id: "at-signUp",                                                                                                   // 13
    "class": function() {                                                                                              // 14
      return [ "at-link at-signup ", Spacebars.mustache(view.lookup("disabled")) ];                                    // 15
    }                                                                                                                  // 16
  }, Blaze.View("lookup:linkText", function() {                                                                        // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                                // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                          // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                                // 20
  }), "\n    "), "\n  ");                                                                                              // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_signup_link.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atSignupLink.helpers(AccountsTemplates.atSignupLinkHelpers);                                                  // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atSignupLink.events(AccountsTemplates.atSignupLinkEvents);                                                    // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_social.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atSocial");                                                                                      // 2
Template["atSocial"] = new Template("Template.atSocial", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "row"                                                                                                     // 6
  }, "\n    ", HTML.BUTTON({                                                                                           // 7
    "class": function() {                                                                                              // 8
      return [ "at-social-btn ", Spacebars.mustache(view.lookup("disabled")), " waves-effect waves-light btn" ];       // 9
    },                                                                                                                 // 10
    id: function() {                                                                                                   // 11
      return [ "at-", Spacebars.mustache(view.lookup("name")) ];                                                       // 12
    },                                                                                                                 // 13
    name: function() {                                                                                                 // 14
      return Spacebars.mustache(view.lookup("name"));                                                                  // 15
    }                                                                                                                  // 16
  }, "\n      ", HTML.I({                                                                                              // 17
    "class": function() {                                                                                              // 18
      return [ Spacebars.mustache(view.lookup("iconClass")), " left" ];                                                // 19
    }                                                                                                                  // 20
  }), " ", Blaze.View("lookup:buttonText", function() {                                                                // 21
    return Spacebars.mustache(view.lookup("buttonText"));                                                              // 22
  }), "\n    "), "\n  ");                                                                                              // 23
}));                                                                                                                   // 24
                                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_social.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);                                                          // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atSocial.events(AccountsTemplates.atSocialEvents);                                                            // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_terms_link.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atTermsLink");                                                                                   // 2
Template["atTermsLink"] = new Template("Template.atTermsLink", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-terms-link at-wrap"                                                                                   // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:text", function() {                                               // 7
    return Spacebars.mustache(view.lookup("text"));                                                                    // 8
  }), "\n      ", Blaze.If(function() {                                                                                // 9
    return Spacebars.call(view.lookup("privacyUrl"));                                                                  // 10
  }, function() {                                                                                                      // 11
    return [ "\n        ", HTML.A({                                                                                    // 12
      href: function() {                                                                                               // 13
        return Spacebars.mustache(view.lookup("privacyUrl"));                                                          // 14
      },                                                                                                               // 15
      "class": function() {                                                                                            // 16
        return Spacebars.mustache(view.lookup("disabled"));                                                            // 17
      }                                                                                                                // 18
    }, Blaze.View("lookup:privacyLinkText", function() {                                                               // 19
      return Spacebars.mustache(view.lookup("privacyLinkText"));                                                       // 20
    })), "\n      " ];                                                                                                 // 21
  }), "\n      ", Blaze.If(function() {                                                                                // 22
    return Spacebars.call(view.lookup("showTermsAnd"));                                                                // 23
  }, function() {                                                                                                      // 24
    return [ "\n        ", Blaze.View("lookup:and", function() {                                                       // 25
      return Spacebars.mustache(view.lookup("and"));                                                                   // 26
    }), "\n      " ];                                                                                                  // 27
  }), "\n      ", Blaze.If(function() {                                                                                // 28
    return Spacebars.call(view.lookup("termsUrl"));                                                                    // 29
  }, function() {                                                                                                      // 30
    return [ "\n        ", HTML.A({                                                                                    // 31
      href: function() {                                                                                               // 32
        return Spacebars.mustache(view.lookup("termsUrl"));                                                            // 33
      },                                                                                                               // 34
      "class": function() {                                                                                            // 35
        return Spacebars.mustache(view.lookup("disabled"));                                                            // 36
      }                                                                                                                // 37
    }, Blaze.View("lookup:termsLinkText", function() {                                                                 // 38
      return Spacebars.mustache(view.lookup("termsLinkText"));                                                         // 39
    })), "\n      " ];                                                                                                 // 40
  }), "\n    "), "\n  ");                                                                                              // 41
}));                                                                                                                   // 42
                                                                                                                       // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_terms_link.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atTermsLink.helpers(AccountsTemplates.atTermsLinkHelpers);                                                    // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atTermsLink.events(AccountsTemplates.atTermsLinkEvents);                                                      // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_resend_verification_email_link.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atResendVerificationEmailLink");                                                                 // 2
Template["atResendVerificationEmailLink"] = new Template("Template.atResendVerificationEmailLink", (function() {       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-resend-verification-email-link at-wrap"                                                               // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                            // 7
    return Spacebars.mustache(view.lookup("preText"));                                                                 // 8
  }), "\n      ", HTML.A({                                                                                             // 9
    href: function() {                                                                                                 // 10
      return Spacebars.mustache(view.lookup("resendVerificationEmailLink"));                                           // 11
    },                                                                                                                 // 12
    id: "at-resend-verification-email",                                                                                // 13
    "class": function() {                                                                                              // 14
      return [ "at-link at-resend-verification-email ", Spacebars.mustache(view.lookup("disabled")) ];                 // 15
    }                                                                                                                  // 16
  }, Blaze.View("lookup:linkText", function() {                                                                        // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                                // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                          // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                                // 20
  }), "\n    "), "\n  ");                                                                                              // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_resend_verification_email_link.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atResendVerificationEmailLink.helpers(AccountsTemplates.atResendVerificationEmailLinkHelpers);                // 2
                                                                                                                       // 3
// Simply 'inherites' events from AccountsTemplates                                                                    // 4
Template.atResendVerificationEmailLink.events(AccountsTemplates.atResendVerificationEmailLinkEvents);                  // 5
                                                                                                                       // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.at_title.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("atTitle");                                                                                       // 2
Template["atTitle"] = new Template("Template.atTitle", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "at-title"                                                                                                // 6
  }, "\n    ", HTML.H3({                                                                                               // 7
    "class": "header"                                                                                                  // 8
  }, Blaze.View("lookup:title", function() {                                                                           // 9
    return Spacebars.mustache(view.lookup("title"));                                                                   // 10
  })), "\n  ");                                                                                                        // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/at_title.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Simply 'inherites' helpers from AccountsTemplates                                                                   // 1
Template.atTitle.helpers(AccountsTemplates.atTitleHelpers);                                                            // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_materialize/lib/template.full_page_at_form.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("fullPageAtForm");                                                                                // 2
Template["fullPageAtForm"] = new Template("Template.fullPageAtForm", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "row"                                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "col s12 m8 push-m2 push-l4 l4 z-depth-1"                                                                 // 8
  }, "\n      ", Spacebars.include(view.lookupTemplate("atForm")), "\n    "), "\n  ");                                 // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:materialize'] = {};

})();
