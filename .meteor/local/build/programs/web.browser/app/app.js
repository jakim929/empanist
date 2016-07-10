var require = meteorInstall({"client":{"layouts":{"template.AccompanistDashboard.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.AccompanistDashboard.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("AccompanistDashboard");                                                                          // 2
Template["AccompanistDashboard"] = new Template("Template.AccompanistDashboard", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw("<header>\n    </header>\n    "), HTML.MAIN("\n        ", HTML.Raw("<br>"), "\n        ", Spacebars.include(view.lookupTemplate("notifications")), "\n        ", Spacebars.include(view.lookupTemplate("TabStructure")), "\n\n    ") ];
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("EditAccompanistProfiles");                                                                       // 8
Template["EditAccompanistProfiles"] = new Template("Template.EditAccompanistProfiles", (function() {                   // 9
  var view = this;                                                                                                     // 10
  return HTML.Raw('<button><a href="/newaccomp">Edit Accompanist Profile</a></button>\n  <button name="requestNotification">Press</button>');
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("TabStructure");                                                                                  // 14
Template["TabStructure"] = new Template("Template.TabStructure", (function() {                                         // 15
  var view = this;                                                                                                     // 16
  return HTML.DIV({                                                                                                    // 17
    "class": "row"                                                                                                     // 18
  }, HTML.Raw('\n    <div class="col s12">\n      <ul class="tabs">\n        <li class="tab col s3"><a href="#test1">Booking Requests</a></li>\n        <li class="tab col s3"><a href="#test2">Profile</a></li>\n        <li class="tab col s3"><a href="#test3">Analytics</a></li>\n        <li class="tab col s3"><a href="#test4">Settings</a></li>\n      </ul>\n    </div>\n    '), HTML.DIV({
    id: "test1",                                                                                                       // 20
    "class": "col s12"                                                                                                 // 21
  }, Spacebars.include(view.lookupTemplate("CollapsibleStructure"))), "\n    ", HTML.DIV({                             // 22
    id: "test2",                                                                                                       // 23
    "class": "col s12"                                                                                                 // 24
  }, Blaze.If(function() {                                                                                             // 25
    return Spacebars.dataMustache(view.lookup("isInRole"), "accompanist");                                             // 26
  }, function() {                                                                                                      // 27
    return Blaze._TemplateWith(function() {                                                                            // 28
      return {                                                                                                         // 29
        template: Spacebars.call("accompanistProfileTemplate"),                                                        // 30
        data: Spacebars.call(view.lookup("myAccompanistProfile"))                                                      // 31
      };                                                                                                               // 32
    }, function() {                                                                                                    // 33
      return Spacebars.include(function() {                                                                            // 34
        return Spacebars.call(Template.__dynamic);                                                                     // 35
      });                                                                                                              // 36
    });                                                                                                                // 37
  })), "\n    ", HTML.DIV({                                                                                            // 38
    id: "test3",                                                                                                       // 39
    "class": "col s12"                                                                                                 // 40
  }, Spacebars.include(view.lookupTemplate("NewAccompLayout"))), HTML.Raw('\n    <div id="test4" class="col s12">Settings</div>\n  '));
}));                                                                                                                   // 42
                                                                                                                       // 43
Template.__checkName("CollapsibleStructure");                                                                          // 44
Template["CollapsibleStructure"] = new Template("Template.CollapsibleStructure", (function() {                         // 45
  var view = this;                                                                                                     // 46
  return Spacebars.With(function() {                                                                                   // 47
    return Spacebars.call(view.lookup("receivedBookingRequests"));                                                     // 48
  }, function() {                                                                                                      // 49
    return [ "\n    ", HTML.UL({                                                                                       // 50
      "class": "collapsible",                                                                                          // 51
      "data-collapsible": "expandable"                                                                                 // 52
    }, "\n      ", HTML.LI("\n        ", HTML.DIV({                                                                    // 53
      "class": "collapsible-header active"                                                                             // 54
    }, HTML.I({                                                                                                        // 55
      "class": "material-icons"                                                                                        // 56
    }, "people"), "Pending Bookings (", Blaze.View("lookup:..pending.length", function() {                             // 57
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "pending", "length"));                                 // 58
    }), ")"), "\n        ", HTML.DIV({                                                                                 // 59
      "class": "collapsible-body"                                                                                      // 60
    }, Blaze._TemplateWith(function() {                                                                                // 61
      return {                                                                                                         // 62
        template: Spacebars.call("bookingList"),                                                                       // 63
        data: Spacebars.call(Spacebars.dot(view.lookup("."), "pending"))                                               // 64
      };                                                                                                               // 65
    }, function() {                                                                                                    // 66
      return Spacebars.include(function() {                                                                            // 67
        return Spacebars.call(Template.__dynamic);                                                                     // 68
      });                                                                                                              // 69
    })), "\n      "), "\n\n      ", HTML.LI("\n        ", HTML.DIV({                                                   // 70
      "class": "collapsible-header active"                                                                             // 71
    }, HTML.I({                                                                                                        // 72
      "class": "material-icons"                                                                                        // 73
    }, "filter_drama"), "Ongoing Bookings (", Blaze.View("lookup:..ongoing.length", function() {                       // 74
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "ongoing", "length"));                                 // 75
    }), ")"), "\n        ", HTML.DIV({                                                                                 // 76
      "class": "collapsible-body"                                                                                      // 77
    }, Blaze._TemplateWith(function() {                                                                                // 78
      return {                                                                                                         // 79
        template: Spacebars.call("bookingList"),                                                                       // 80
        data: Spacebars.call(Spacebars.dot(view.lookup("."), "ongoing"))                                               // 81
      };                                                                                                               // 82
    }, function() {                                                                                                    // 83
      return Spacebars.include(function() {                                                                            // 84
        return Spacebars.call(Template.__dynamic);                                                                     // 85
      });                                                                                                              // 86
    })), "\n      "), "\n\n      ", HTML.LI("\n        ", HTML.DIV({                                                   // 87
      "class": "collapsible-header active"                                                                             // 88
    }, HTML.I({                                                                                                        // 89
      "class": "material-icons"                                                                                        // 90
    }, "filter_drama"), "Previous Bookings (", Blaze.View("lookup:..completed.length", function() {                    // 91
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "completed", "length"));                               // 92
    }), ")"), "\n        ", HTML.DIV({                                                                                 // 93
      "class": "collapsible-body"                                                                                      // 94
    }, Blaze._TemplateWith(function() {                                                                                // 95
      return {                                                                                                         // 96
        template: Spacebars.call("bookingList"),                                                                       // 97
        data: Spacebars.call(Spacebars.dot(view.lookup("."), "completed"))                                             // 98
      };                                                                                                               // 99
    }, function() {                                                                                                    // 100
      return Spacebars.include(function() {                                                                            // 101
        return Spacebars.call(Template.__dynamic);                                                                     // 102
      });                                                                                                              // 103
    })), "\n      "), "\n\n      ", HTML.LI("\n        ", HTML.DIV({                                                   // 104
      "class": "collapsible-header active"                                                                             // 105
    }, HTML.I({                                                                                                        // 106
      "class": "material-icons"                                                                                        // 107
    }, "filter_drama"), "Cancelled Bookings (", Blaze.View("lookup:..cancelled.length", function() {                   // 108
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "cancelled", "length"));                               // 109
    }), ")"), "\n        ", HTML.DIV({                                                                                 // 110
      "class": "collapsible-body"                                                                                      // 111
    }, Blaze._TemplateWith(function() {                                                                                // 112
      return {                                                                                                         // 113
        template: Spacebars.call("bookingList"),                                                                       // 114
        data: Spacebars.call(Spacebars.dot(view.lookup("."), "cancelled"))                                             // 115
      };                                                                                                               // 116
    }, function() {                                                                                                    // 117
      return Spacebars.include(function() {                                                                            // 118
        return Spacebars.call(Template.__dynamic);                                                                     // 119
      });                                                                                                              // 120
    })), "\n      "), "\n    "), "\n  " ];                                                                             // 121
  }, function() {                                                                                                      // 122
    return "\n  You currently have no bookings... Here's how you can increase your profile.\n  ";                      // 123
  });                                                                                                                  // 124
}));                                                                                                                   // 125
                                                                                                                       // 126
Template.__checkName("request");                                                                                       // 127
Template["request"] = new Template("Template.request", (function() {                                                   // 128
  var view = this;                                                                                                     // 129
  return HTML.LI({                                                                                                     // 130
    "class": "collection-item avatar"                                                                                  // 131
  }, HTML.Raw('\n      <img src="/images/profile.png" alt="" class="circle">\n      '), Spacebars.With(function() {    // 132
    return Spacebars.dataMustache(view.lookup("basicProfileById"), view.lookup("musician"));                           // 133
  }, function() {                                                                                                      // 134
    return [ "\n        ", HTML.SPAN({                                                                                 // 135
      "class": "title"                                                                                                 // 136
    }, HTML.A({                                                                                                        // 137
      href: function() {                                                                                               // 138
        return Spacebars.mustache(view.lookup("getProfileRoute"), view.lookup("_id"));                                 // 139
      }                                                                                                                // 140
    }, Blaze.View("lookup:name", function() {                                                                          // 141
      return Spacebars.mustache(view.lookup("name"));                                                                  // 142
    }))), "\n      " ];                                                                                                // 143
  }), "\n      ", Spacebars.With(function() {                                                                          // 144
    return Spacebars.dataMustache(view.lookup("musicProfileById"), view.lookup("musician"));                           // 145
  }, function() {                                                                                                      // 146
    return [ "\n        ", HTML.P({                                                                                    // 147
      "class": "no-padding"                                                                                            // 148
    }, Blaze.View("lookup:instrument", function() {                                                                    // 149
      return Spacebars.mustache(view.lookup("instrument"));                                                            // 150
    }), " "), "\n      " ];                                                                                            // 151
  }), "\n        ", HTML.P({                                                                                           // 152
    "class": "no-padding"                                                                                              // 153
  }, Blaze.View("lookup:formatDuration", function() {                                                                  // 154
    return Spacebars.mustache(view.lookup("formatDuration"), Spacebars.dot(view.lookup("."), "startDate"), Spacebars.dot(view.lookup("."), "endDate"));
  })), "\n      ", HTML.A({                                                                                            // 156
    href: function() {                                                                                                 // 157
      return Spacebars.mustache(view.lookup("getBookingRoute"), view.lookup("_id"));                                   // 158
    },                                                                                                                 // 159
    "class": "secondary-content modal-trigger waves-effect waves-light review-booking"                                 // 160
  }, HTML.Raw('<i class="material-icons">grade</i>')), "\n    ");                                                      // 161
}));                                                                                                                   // 162
                                                                                                                       // 163
Template.__checkName("bookingList");                                                                                   // 164
Template["bookingList"] = new Template("Template.bookingList", (function() {                                           // 165
  var view = this;                                                                                                     // 166
  return HTML.UL({                                                                                                     // 167
    "class": "collection"                                                                                              // 168
  }, "\n    ", Blaze.Each(function() {                                                                                 // 169
    return Spacebars.call(view.lookup("."));                                                                           // 170
  }, function() {                                                                                                      // 171
    return [ "\n     ", Blaze._TemplateWith(function() {                                                               // 172
      return {                                                                                                         // 173
        template: Spacebars.call("request"),                                                                           // 174
        data: Spacebars.call(view.lookup("."))                                                                         // 175
      };                                                                                                               // 176
    }, function() {                                                                                                    // 177
      return Spacebars.include(function() {                                                                            // 178
        return Spacebars.call(Template.__dynamic);                                                                     // 179
      });                                                                                                              // 180
    }), "\n    " ];                                                                                                    // 181
  }), "\n  ");                                                                                                         // 182
}));                                                                                                                   // 183
                                                                                                                       // 184
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.AddInfoLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.AddInfoLayout.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("upsertAccompanistForm");                                                                         // 2
Template["upsertAccompanistForm"] = new Template("Template.upsertAccompanistForm", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "smallMargin"                                                                                             // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 7
    return {                                                                                                           // 8
      collection: Spacebars.call("AccompanistProfiles"),                                                               // 9
      doc: Spacebars.call(view.lookup("currentAccompanistProfiles")),                                                  // 10
      id: Spacebars.call("upsertAccompanistForm"),                                                                     // 11
      type: Spacebars.call(view.lookup("formType"))                                                                    // 12
    };                                                                                                                 // 13
  }, function() {                                                                                                      // 14
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 15
      return [ "\n      ", HTML.Comment(' {{> afQuickField name="repertoire"}} '), "\n      ", Blaze._TemplateWith(function() {
        return {                                                                                                       // 17
          name: Spacebars.call("repertoire"),                                                                          // 18
          template: Spacebars.call("repertoireCustomArrayField")                                                       // 19
        };                                                                                                             // 20
      }, function() {                                                                                                  // 21
        return Spacebars.include(view.lookupTemplate("afArrayField"));                                                 // 22
      }), " \n      ", Blaze._TemplateWith(function() {                                                                // 23
        return {                                                                                                       // 24
          name: Spacebars.call("charge")                                                                               // 25
        };                                                                                                             // 26
      }, function() {                                                                                                  // 27
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 28
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 29
        return {                                                                                                       // 30
          name: Spacebars.call("working_hours")                                                                        // 31
        };                                                                                                             // 32
      }, function() {                                                                                                  // 33
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 34
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 35
        return {                                                                                                       // 36
          name: Spacebars.call("working_days")                                                                         // 37
        };                                                                                                             // 38
      }, function() {                                                                                                  // 39
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 40
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 41
        return {                                                                                                       // 42
          name: Spacebars.call("startDate")                                                                            // 43
        };                                                                                                             // 44
      }, function() {                                                                                                  // 45
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 46
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 47
        return {                                                                                                       // 48
          name: Spacebars.call("endDate")                                                                              // 49
        };                                                                                                             // 50
      }, function() {                                                                                                  // 51
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 52
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 53
        return {                                                                                                       // 54
          name: Spacebars.call("session_location")                                                                     // 55
        };                                                                                                             // 56
      }, function() {                                                                                                  // 57
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 58
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 59
        return {                                                                                                       // 60
          name: Spacebars.call("mylocation"),                                                                          // 61
          "class": Spacebars.call("autocomplete"),                                                                     // 62
          id: Spacebars.call("autocomplete")                                                                           // 63
        };                                                                                                             // 64
      }, function() {                                                                                                  // 65
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 66
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 67
        return {                                                                                                       // 68
          name: Spacebars.call("one_liner")                                                                            // 69
        };                                                                                                             // 70
      }, function() {                                                                                                  // 71
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 72
      }), "\n    ", HTML.BR(), "\n    ", HTML.BUTTON({                                                                 // 73
        type: "submit",                                                                                                // 74
        "class": "btn btn-primary"                                                                                     // 75
      }, Blaze.View("lookup:formType", function() {                                                                    // 76
        return Spacebars.mustache(view.lookup("formType"));                                                            // 77
      }), " Accompanist Profile"), "\n    " ];                                                                         // 78
    });                                                                                                                // 79
  }), "\n  ");                                                                                                         // 80
}));                                                                                                                   // 81
                                                                                                                       // 82
Template.__checkName("afArrayField_repertoireCustomArrayField");                                                       // 83
Template["afArrayField_repertoireCustomArrayField"] = new Template("Template.afArrayField_repertoireCustomArrayField", (function() {
  var view = this;                                                                                                     // 85
  return [ Blaze.If(function() {                                                                                       // 86
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 87
      name: Spacebars.dot(view.lookup("atts"), "name")                                                                 // 88
    }));                                                                                                               // 89
  }, function() {                                                                                                      // 90
    return [ "\n    ", HTML.SPAN(Blaze.View("lookup:afFieldMessage", function() {                                      // 91
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 92
        name: Spacebars.dot(view.lookup("atts"), "name")                                                               // 93
      })));                                                                                                            // 94
    })), "\n  " ];                                                                                                     // 95
  }), "\n  ", HTML.DIV({                                                                                               // 96
    "class": "card grey lighten-5 z-depth-0"                                                                           // 97
  }, "\n    ", HTML.DIV({                                                                                              // 98
    "class": "card-content"                                                                                            // 99
  }, "\n      ", HTML.Raw("<h5>\n        Repertoire \n      </h5>"), "\n      ", Blaze._TemplateWith(function() {      // 100
    return {                                                                                                           // 101
      name: Spacebars.call(Spacebars.dot(view.lookup("atts"), "name")),                                                // 102
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 103
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 104
    };                                                                                                                 // 105
  }, function() {                                                                                                      // 106
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 107
      return [ "\n        ", Blaze.If(function() {                                                                     // 108
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 109
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 110
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 111
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 112
        }));                                                                                                           // 113
      }, function() {                                                                                                  // 114
        return [ "\n          ", HTML.SPAN({                                                                           // 115
          "class": "autoform-remove-item"                                                                              // 116
        }, HTML.I({                                                                                                    // 117
          "class": "material-icons right"                                                                              // 118
        }, "close")), "\n        " ];                                                                                  // 119
      }), "\n        ", HTML.BR(), "\n        ", HTML.DIV({                                                            // 120
        "class": "input-field col s12"                                                                                 // 121
      }, "\n            ", Blaze._TemplateWith(function() {                                                            // 122
        return {                                                                                                       // 123
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "repertoire")),                              // 124
          id: Spacebars.call("comp.name"),                                                                             // 125
          type: Spacebars.call("text")                                                                                 // 126
        };                                                                                                             // 127
      }, function() {                                                                                                  // 128
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 129
      }), "\n          ", HTML.LABEL({                                                                                 // 130
        "for": "comp.name"                                                                                             // 131
      }, "Repertoire"), "\n        "), "\n      " ];                                                                   // 132
    });                                                                                                                // 133
  }), "\n    "), "\n  ", Blaze.If(function() {                                                                         // 134
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 135
      name: Spacebars.dot(view.lookup("atts"), "name"),                                                                // 136
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 137
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 138
    }));                                                                                                               // 139
  }, function() {                                                                                                      // 140
    return [ "\n    ", HTML.CENTER("\n      ", HTML.BUTTON({                                                           // 141
      type: "button",                                                                                                  // 142
      "class": "add-btn autoform-add-item grey",                                                                       // 143
      "data-autoform-field": function() {                                                                              // 144
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "name"));                                         // 145
      },                                                                                                               // 146
      "data-autoform-mincount": function() {                                                                           // 147
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "minCount"));                                     // 148
      },                                                                                                               // 149
      "data-autoform-maxcount": function() {                                                                           // 150
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "maxCount"));                                     // 151
      }                                                                                                                // 152
    }, "\n          Add Repertoire\n      "), "\n    "), "\n  " ];                                                     // 153
  }), "\n  ") ];                                                                                                       // 154
}));                                                                                                                   // 155
                                                                                                                       // 156
Template.__checkName("upsertBasicProfileForm");                                                                        // 157
Template["upsertBasicProfileForm"] = new Template("Template.upsertBasicProfileForm", (function() {                     // 158
  var view = this;                                                                                                     // 159
  return Blaze.If(function() {                                                                                         // 160
    return Spacebars.dataMustache(view.lookup("isInRole"), "makeBasicProfile");                                        // 161
  }, function() {                                                                                                      // 162
    return [ "\n    ", HTML.DIV({                                                                                      // 163
      "class": "smallMargin"                                                                                           // 164
    }, "\n      ", HTML.H3("Basic Profile"), "\n      ", Blaze._TemplateWith(function() {                              // 165
      return {                                                                                                         // 166
        collection: Spacebars.call("BasicProfiles"),                                                                   // 167
        doc: Spacebars.call(view.lookup("currentBasicProfile")),                                                       // 168
        id: Spacebars.call("upsertBasicProfileForm"),                                                                  // 169
        type: Spacebars.call(view.lookup("formType"))                                                                  // 170
      };                                                                                                               // 171
    }, function() {                                                                                                    // 172
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                           // 173
        return [ "\n          ", HTML.DIV({                                                                            // 174
          "class": "row"                                                                                               // 175
        }, "\n            ", HTML.DIV({                                                                                // 176
          "class": "input-field col s6"                                                                                // 177
        }, "\n              ", HTML.I({                                                                                // 178
          "class": "material-icons prefix"                                                                             // 179
        }, "account_circle"), "\n              ", Blaze._TemplateWith(function() {                                     // 180
          return {                                                                                                     // 181
            name: Spacebars.call("name"),                                                                              // 182
            id: Spacebars.call("icon_prefix"),                                                                         // 183
            type: Spacebars.call("text")                                                                               // 184
          };                                                                                                           // 185
        }, function() {                                                                                                // 186
          return Spacebars.include(view.lookupTemplate("afFieldInput"));                                               // 187
        }), "\n              ", HTML.LABEL({                                                                           // 188
          "for": "icon_prefix"                                                                                         // 189
        }, "Full Name"), "\n            "), "\n             ", HTML.DIV({                                              // 190
          "class": "input-field col s6"                                                                                // 191
        }, "\n              ", HTML.I({                                                                                // 192
          "class": "material-icons prefix"                                                                             // 193
        }, "phone"), "\n              ", Blaze._TemplateWith(function() {                                              // 194
          return {                                                                                                     // 195
            name: Spacebars.call("phone"),                                                                             // 196
            id: Spacebars.call("icon_prefix"),                                                                         // 197
            type: Spacebars.call("text")                                                                               // 198
          };                                                                                                           // 199
        }, function() {                                                                                                // 200
          return Spacebars.include(view.lookupTemplate("afFieldInput"));                                               // 201
        }), "\n              ", HTML.LABEL({                                                                           // 202
          "for": "icon_telephone"                                                                                      // 203
        }, "Telephone"), "\n            "), "\n          "), "\n          ", HTML.DIV({                                // 204
          "class": "input-field col s6"                                                                                // 205
        }, "\n            ", HTML.I({                                                                                  // 206
          "class": "material-icons prefix"                                                                             // 207
        }, "child_friendly"), "\n              ", Blaze._TemplateWith(function() {                                     // 208
          return {                                                                                                     // 209
            name: Spacebars.call("birthDate"),                                                                         // 210
            id: Spacebars.call("icon_prefix"),                                                                         // 211
            type: Spacebars.call("date")                                                                               // 212
          };                                                                                                           // 213
        }, function() {                                                                                                // 214
          return Spacebars.include(view.lookupTemplate("afFieldInput"));                                               // 215
        }), "\n          "), "\n          ", HTML.DIV({                                                                // 216
          "class": "input-field col s6"                                                                                // 217
        }, "\n            ", HTML.I({                                                                                  // 218
          "class": "material-icons prefix"                                                                             // 219
        }, "business_center"), "\n              ", Blaze._TemplateWith(function() {                                    // 220
          return {                                                                                                     // 221
            name: Spacebars.call("affiliation"),                                                                       // 222
            id: Spacebars.call("icon_prefix"),                                                                         // 223
            type: Spacebars.call("text")                                                                               // 224
          };                                                                                                           // 225
        }, function() {                                                                                                // 226
          return Spacebars.include(view.lookupTemplate("afFieldInput"));                                               // 227
        }), "\n            ", HTML.LABEL("Affiliation"), "   \n          "), "\n      ", HTML.BR(), "\n      ", HTML.BUTTON({
          type: "submit",                                                                                              // 229
          "class": "btn btn-primary"                                                                                   // 230
        }, "Save"), "\n      " ];                                                                                      // 231
      });                                                                                                              // 232
    }), "\n    "), "\n  " ];                                                                                           // 233
  });                                                                                                                  // 234
}));                                                                                                                   // 235
                                                                                                                       // 236
Template.__checkName("upsertMusicProfileForm");                                                                        // 237
Template["upsertMusicProfileForm"] = new Template("Template.upsertMusicProfileForm", (function() {                     // 238
  var view = this;                                                                                                     // 239
  return Blaze.If(function() {                                                                                         // 240
    return Spacebars.dataMustache(view.lookup("isInRole"), "makeMusicProfile");                                        // 241
  }, function() {                                                                                                      // 242
    return [ "\n    ", HTML.DIV({                                                                                      // 243
      "class": "smallMargin"                                                                                           // 244
    }, "\n      ", Blaze._TemplateWith(function() {                                                                    // 245
      return {                                                                                                         // 246
        collection: Spacebars.call("MusicProfiles"),                                                                   // 247
        doc: Spacebars.call(view.lookup("currentProfile")),                                                            // 248
        id: Spacebars.call("upsertMusicProfileForm"),                                                                  // 249
        type: Spacebars.call(view.lookup("formType"))                                                                  // 250
      };                                                                                                               // 251
    }, function() {                                                                                                    // 252
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                           // 253
        return [ "\n\n      ", HTML.DIV({                                                                              // 254
          "class": "card grey lighten-5 z-depth-0"                                                                     // 255
        }, "\n        ", HTML.DIV({                                                                                    // 256
          "class": "card-content"                                                                                      // 257
        }, "\n          ", HTML.H5("\n            ", HTML.I({                                                          // 258
          id: "align_text",                                                                                            // 259
          "class": "medium material-icons"                                                                             // 260
        }, "brush"), "\n            Instruments you master\n          "), "\n          ", Blaze._TemplateWith(function() {
          return {                                                                                                     // 262
            name: Spacebars.call("instrument"),                                                                        // 263
            type: Spacebars.call("selectize"),                                                                         // 264
            options: Spacebars.call(view.lookup("instrumentList"))                                                     // 265
          };                                                                                                           // 266
        }, function() {                                                                                                // 267
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                               // 268
        }), "\n          ", Blaze._TemplateWith(function() {                                                           // 269
          return {                                                                                                     // 270
            name: Spacebars.call("yearsPlayed")                                                                        // 271
          };                                                                                                           // 272
        }, function() {                                                                                                // 273
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                               // 274
        }), "\n        "), "\n      "), "\n          \n        ", Blaze._TemplateWith(function() {                     // 275
          return {                                                                                                     // 276
            name: Spacebars.call("awards"),                                                                            // 277
            template: Spacebars.call("awardsCustomArrayField")                                                         // 278
          };                                                                                                           // 279
        }, function() {                                                                                                // 280
          return Spacebars.include(view.lookupTemplate("afArrayField"));                                               // 281
        }), "   \n        ", Blaze._TemplateWith(function() {                                                          // 282
          return {                                                                                                     // 283
            name: Spacebars.call("musicPrograms"),                                                                     // 284
            template: Spacebars.call("musicCustomArrayField")                                                          // 285
          };                                                                                                           // 286
        }, function() {                                                                                                // 287
          return Spacebars.include(view.lookupTemplate("afArrayField"));                                               // 288
        }), " \n        ", Blaze._TemplateWith(function() {                                                            // 289
          return {                                                                                                     // 290
            name: Spacebars.call("orchestras"),                                                                        // 291
            template: Spacebars.call("orchestraCustomArrayField")                                                      // 292
          };                                                                                                           // 293
        }, function() {                                                                                                // 294
          return Spacebars.include(view.lookupTemplate("afArrayField"));                                               // 295
        }), "\n\n      ", HTML.BR(), "\n      ", HTML.BUTTON({                                                         // 296
          type: "submit",                                                                                              // 297
          "class": "btn btn-primary"                                                                                   // 298
        }, "Save"), "\n      " ];                                                                                      // 299
      });                                                                                                              // 300
    }), "\n    "), "\n  " ];                                                                                           // 301
  });                                                                                                                  // 302
}));                                                                                                                   // 303
                                                                                                                       // 304
Template.__checkName("afArrayField_awardsCustomArrayField");                                                           // 305
Template["afArrayField_awardsCustomArrayField"] = new Template("Template.afArrayField_awardsCustomArrayField", (function() {
  var view = this;                                                                                                     // 307
  return [ Blaze.If(function() {                                                                                       // 308
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 309
      name: Spacebars.dot(view.lookup("atts"), "name")                                                                 // 310
    }));                                                                                                               // 311
  }, function() {                                                                                                      // 312
    return [ "\n    ", HTML.SPAN(Blaze.View("lookup:afFieldMessage", function() {                                      // 313
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 314
        name: Spacebars.dot(view.lookup("atts"), "name")                                                               // 315
      })));                                                                                                            // 316
    })), "\n  " ];                                                                                                     // 317
  }), "\n  ", HTML.DIV({                                                                                               // 318
    "class": "card grey lighten-5 z-depth-0"                                                                           // 319
  }, "\n    ", HTML.DIV({                                                                                              // 320
    "class": "card-content"                                                                                            // 321
  }, "\n      ", HTML.Raw('<h5>\n        <i id="align_text" class="medium material-icons">verified_user</i>\n        Honors &amp; Awards \n      </h5>'), "\n      ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 323
      name: Spacebars.call(Spacebars.dot(view.lookup("atts"), "name")),                                                // 324
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 325
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 326
    };                                                                                                                 // 327
  }, function() {                                                                                                      // 328
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 329
      return [ "\n            ", HTML.DIV({                                                                            // 330
        "class": "row"                                                                                                 // 331
      }, "\n              ", Blaze.If(function() {                                                                     // 332
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 333
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 334
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 335
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 336
        }));                                                                                                           // 337
      }, function() {                                                                                                  // 338
        return [ "\n              ", HTML.SPAN({                                                                       // 339
          "class": "autoform-remove-item"                                                                              // 340
        }, HTML.I({                                                                                                    // 341
          "class": "material-icons right"                                                                              // 342
        }, "close")), "\n              " ];                                                                            // 343
      }), "\n            ", HTML.BR(), "\n              ", HTML.DIV({                                                  // 344
        "class": "input-field col s6"                                                                                  // 345
      }, "\n                  ", Blaze._TemplateWith(function() {                                                      // 346
        return {                                                                                                       // 347
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "name")),                                    // 348
          id: Spacebars.call("comp.name"),                                                                             // 349
          type: Spacebars.call("text")                                                                                 // 350
        };                                                                                                             // 351
      }, function() {                                                                                                  // 352
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 353
      }), "\n                ", HTML.LABEL({                                                                           // 354
        "for": "comp.name"                                                                                             // 355
      }, "Competition Name"), "\n              "), "\n               ", HTML.DIV({                                     // 356
        "class": "input-field col s6"                                                                                  // 357
      }, "\n                  ", Blaze._TemplateWith(function() {                                                      // 358
        return {                                                                                                       // 359
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "award")),                                   // 360
          id: Spacebars.call("icon_name"),                                                                             // 361
          type: Spacebars.call("text")                                                                                 // 362
        };                                                                                                             // 363
      }, function() {                                                                                                  // 364
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 365
      }), "\n                ", HTML.LABEL({                                                                           // 366
        "for": "icon_name"                                                                                             // 367
      }, "Award Title"), "\n              "), "\n            "), "\n            ", HTML.DIV({                          // 368
        "class": "input-field col s6"                                                                                  // 369
      }, "\n              ", Blaze._TemplateWith(function() {                                                          // 370
        return {                                                                                                       // 371
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "date")),                                    // 372
          type: Spacebars.call("date")                                                                                 // 373
        };                                                                                                             // 374
      }, function() {                                                                                                  // 375
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 376
      }), "\n            "), "\n      " ];                                                                             // 377
    });                                                                                                                // 378
  }), "\n   "), "\n  ", Blaze.If(function() {                                                                          // 379
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 380
      name: Spacebars.dot(view.lookup("atts"), "name"),                                                                // 381
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 382
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 383
    }));                                                                                                               // 384
  }, function() {                                                                                                      // 385
    return [ "\n    ", HTML.CENTER("\n      ", HTML.BUTTON({                                                           // 386
      type: "button",                                                                                                  // 387
      "class": "add-btn autoform-add-item grey",                                                                       // 388
      "data-autoform-field": function() {                                                                              // 389
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "name"));                                         // 390
      },                                                                                                               // 391
      "data-autoform-mincount": function() {                                                                           // 392
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "minCount"));                                     // 393
      },                                                                                                               // 394
      "data-autoform-maxcount": function() {                                                                           // 395
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "maxCount"));                                     // 396
      }                                                                                                                // 397
    }, "\n          Add Award\n      "), "\n    "), "\n  " ];                                                          // 398
  }), "\n  ") ];                                                                                                       // 399
}));                                                                                                                   // 400
                                                                                                                       // 401
Template.__checkName("afArrayField_musicCustomArrayField");                                                            // 402
Template["afArrayField_musicCustomArrayField"] = new Template("Template.afArrayField_musicCustomArrayField", (function() {
  var view = this;                                                                                                     // 404
  return [ Blaze.If(function() {                                                                                       // 405
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 406
      name: Spacebars.dot(view.lookup("atts"), "name")                                                                 // 407
    }));                                                                                                               // 408
  }, function() {                                                                                                      // 409
    return [ "\n    ", HTML.SPAN(Blaze.View("lookup:afFieldMessage", function() {                                      // 410
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 411
        name: Spacebars.dot(view.lookup("atts"), "name")                                                               // 412
      })));                                                                                                            // 413
    })), "\n  " ];                                                                                                     // 414
  }), "\n  ", HTML.DIV({                                                                                               // 415
    "class": "card grey lighten-5 z-depth-0"                                                                           // 416
  }, "\n    ", HTML.DIV({                                                                                              // 417
    "class": "card-content"                                                                                            // 418
  }, "\n      ", HTML.Raw('<h5>\n      <i id="align_text" class="medium material-icons">music_note</i>\n      Music Programs \n      </h5>'), "\n      ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 420
      name: Spacebars.call(Spacebars.dot(view.lookup("atts"), "name")),                                                // 421
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 422
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 423
    };                                                                                                                 // 424
  }, function() {                                                                                                      // 425
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 426
      return [ "\n            ", HTML.DIV({                                                                            // 427
        "class": "row"                                                                                                 // 428
      }, "\n              ", Blaze.If(function() {                                                                     // 429
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 430
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 431
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 432
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 433
        }));                                                                                                           // 434
      }, function() {                                                                                                  // 435
        return [ "\n              ", HTML.SPAN({                                                                       // 436
          "class": "autoform-remove-item"                                                                              // 437
        }, HTML.I({                                                                                                    // 438
          "class": "material-icons right"                                                                              // 439
        }, "close")), "\n              " ];                                                                            // 440
      }), "\n            ", HTML.BR(), "\n              ", HTML.DIV({                                                  // 441
        "class": "input-field col s6"                                                                                  // 442
      }, "\n                  ", Blaze._TemplateWith(function() {                                                      // 443
        return {                                                                                                       // 444
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "programName")),                             // 445
          id: Spacebars.call("comp.name"),                                                                             // 446
          type: Spacebars.call("text")                                                                                 // 447
        };                                                                                                             // 448
      }, function() {                                                                                                  // 449
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 450
      }), "\n                ", HTML.LABEL({                                                                           // 451
        "for": "comp.name"                                                                                             // 452
      }, "Program Name"), "\n              "), "\n            "), "\n            ", HTML.DIV({                         // 453
        "class": "row"                                                                                                 // 454
      }, "\n              ", HTML.DIV({                                                                                // 455
        "class": "input-field col s6"                                                                                  // 456
      }, "\n                ", Blaze._TemplateWith(function() {                                                        // 457
        return {                                                                                                       // 458
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "startDate")),                               // 459
          type: Spacebars.call("date")                                                                                 // 460
        };                                                                                                             // 461
      }, function() {                                                                                                  // 462
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 463
      }), "\n              "), "\n               ", HTML.DIV({                                                         // 464
        "class": "input-field col s6"                                                                                  // 465
      }, "\n                ", Blaze._TemplateWith(function() {                                                        // 466
        return {                                                                                                       // 467
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "endDate")),                                 // 468
          type: Spacebars.call("date")                                                                                 // 469
        };                                                                                                             // 470
      }, function() {                                                                                                  // 471
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 472
      }), "\n              "), "\n            "), "\n      " ];                                                        // 473
    });                                                                                                                // 474
  }), "\n   "), "\n  ", Blaze.If(function() {                                                                          // 475
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 476
      name: Spacebars.dot(view.lookup("atts"), "name"),                                                                // 477
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 478
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 479
    }));                                                                                                               // 480
  }, function() {                                                                                                      // 481
    return [ "\n    ", HTML.CENTER("\n      ", HTML.BUTTON({                                                           // 482
      type: "button",                                                                                                  // 483
      "class": "add-btn autoform-add-item grey",                                                                       // 484
      "data-autoform-field": function() {                                                                              // 485
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "name"));                                         // 486
      },                                                                                                               // 487
      "data-autoform-mincount": function() {                                                                           // 488
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "minCount"));                                     // 489
      },                                                                                                               // 490
      "data-autoform-maxcount": function() {                                                                           // 491
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "maxCount"));                                     // 492
      }                                                                                                                // 493
    }, "\n          Add Music Program\n      "), "\n    "), "\n  " ];                                                  // 494
  }), "\n  ") ];                                                                                                       // 495
}));                                                                                                                   // 496
                                                                                                                       // 497
Template.__checkName("afArrayField_orchestraCustomArrayField");                                                        // 498
Template["afArrayField_orchestraCustomArrayField"] = new Template("Template.afArrayField_orchestraCustomArrayField", (function() {
  var view = this;                                                                                                     // 500
  return [ Blaze.If(function() {                                                                                       // 501
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 502
      name: Spacebars.dot(view.lookup("atts"), "name")                                                                 // 503
    }));                                                                                                               // 504
  }, function() {                                                                                                      // 505
    return [ "\n    ", HTML.SPAN(Blaze.View("lookup:afFieldMessage", function() {                                      // 506
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 507
        name: Spacebars.dot(view.lookup("atts"), "name")                                                               // 508
      })));                                                                                                            // 509
    })), "\n  " ];                                                                                                     // 510
  }), "\n  ", HTML.DIV({                                                                                               // 511
    "class": "card grey lighten-5 z-depth-0"                                                                           // 512
  }, "\n    ", HTML.DIV({                                                                                              // 513
    "class": "card-content"                                                                                            // 514
  }, "\n      ", HTML.Raw('<h5>\n        <i id="align_text" class="medium material-icons">group_work</i>\n        Orchestras Participated in \n      </h5>'), "\n      ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 516
      name: Spacebars.call(Spacebars.dot(view.lookup("atts"), "name")),                                                // 517
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 518
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 519
    };                                                                                                                 // 520
  }, function() {                                                                                                      // 521
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 522
      return [ "\n            ", HTML.DIV({                                                                            // 523
        "class": "row"                                                                                                 // 524
      }, "\n              ", Blaze.If(function() {                                                                     // 525
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 526
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 527
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 528
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 529
        }));                                                                                                           // 530
      }, function() {                                                                                                  // 531
        return [ "\n              ", HTML.SPAN({                                                                       // 532
          "class": "autoform-remove-item"                                                                              // 533
        }, HTML.I({                                                                                                    // 534
          "class": "material-icons right"                                                                              // 535
        }, "close")), "\n              " ];                                                                            // 536
      }), "\n              ", HTML.BR(), "\n              ", HTML.DIV({                                                // 537
        "class": "input-field col s6"                                                                                  // 538
      }, "\n                  ", Blaze._TemplateWith(function() {                                                      // 539
        return {                                                                                                       // 540
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "name")),                                    // 541
          id: Spacebars.call("comp.name"),                                                                             // 542
          type: Spacebars.call("text")                                                                                 // 543
        };                                                                                                             // 544
      }, function() {                                                                                                  // 545
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 546
      }), "\n                ", HTML.LABEL({                                                                           // 547
        "for": "comp.name"                                                                                             // 548
      }, "Orchestra Name"), "\n              "), "\n              ", HTML.DIV({                                        // 549
        "class": "input-field col s6"                                                                                  // 550
      }, "\n                  ", Blaze._TemplateWith(function() {                                                      // 551
        return {                                                                                                       // 552
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "position")),                                // 553
          id: Spacebars.call("comp.name"),                                                                             // 554
          type: Spacebars.call("text")                                                                                 // 555
        };                                                                                                             // 556
      }, function() {                                                                                                  // 557
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 558
      }), "\n                ", HTML.LABEL({                                                                           // 559
        "for": "comp.name"                                                                                             // 560
      }, "Position"), "\n              "), "\n            "), "\n            ", HTML.DIV({                             // 561
        "class": "row"                                                                                                 // 562
      }, "\n              ", HTML.DIV({                                                                                // 563
        "class": "input-field col s6"                                                                                  // 564
      }, "\n                ", Blaze._TemplateWith(function() {                                                        // 565
        return {                                                                                                       // 566
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "startDate")),                               // 567
          type: Spacebars.call("date")                                                                                 // 568
        };                                                                                                             // 569
      }, function() {                                                                                                  // 570
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 571
      }), "\n              "), "\n               ", HTML.DIV({                                                         // 572
        "class": "input-field col s6"                                                                                  // 573
      }, "\n                ", Blaze._TemplateWith(function() {                                                        // 574
        return {                                                                                                       // 575
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "endDate")),                                 // 576
          type: Spacebars.call("date")                                                                                 // 577
        };                                                                                                             // 578
      }, function() {                                                                                                  // 579
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 580
      }), "\n              "), "\n            "), "\n      " ];                                                        // 581
    });                                                                                                                // 582
  }), "\n   "), "\n  ", Blaze.If(function() {                                                                          // 583
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 584
      name: Spacebars.dot(view.lookup("atts"), "name"),                                                                // 585
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 586
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 587
    }));                                                                                                               // 588
  }, function() {                                                                                                      // 589
    return [ "\n    ", HTML.CENTER("\n      ", HTML.BUTTON({                                                           // 590
      type: "button",                                                                                                  // 591
      "class": "add-btn autoform-add-item grey",                                                                       // 592
      "data-autoform-field": function() {                                                                              // 593
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "name"));                                         // 594
      },                                                                                                               // 595
      "data-autoform-mincount": function() {                                                                           // 596
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "minCount"));                                     // 597
      },                                                                                                               // 598
      "data-autoform-maxcount": function() {                                                                           // 599
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "maxCount"));                                     // 600
      }                                                                                                                // 601
    }, "\n          Add Orchestra\n      "), "\n    "), "\n  " ];                                                      // 602
  }), "\n  ") ];                                                                                                       // 603
}));                                                                                                                   // 604
                                                                                                                       // 605
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.BookingRequestLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.BookingRequestLayout.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("BookingRequestLayout");                                                                          // 2
Template["BookingRequestLayout"] = new Template("Template.BookingRequestLayout", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw("<header>\n    </header>\n    "), HTML.MAIN("\n      ", Blaze._TemplateWith(function() {           // 5
    return {                                                                                                           // 6
      template: Spacebars.call("BookingRequest"),                                                                      // 7
      data: Spacebars.call(view.lookup("routeTransaction"))                                                            // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return Spacebars.include(function() {                                                                              // 11
      return Spacebars.call(Template.__dynamic);                                                                       // 12
    });                                                                                                                // 13
  }), "\n    ") ];                                                                                                     // 14
}));                                                                                                                   // 15
                                                                                                                       // 16
Template.__checkName("ConfirmBookingPagination");                                                                      // 17
Template["ConfirmBookingPagination"] = new Template("Template.ConfirmBookingPagination", (function() {                 // 18
  var view = this;                                                                                                     // 19
  return HTML.Raw('<ul class="pagination">\n    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>\n    <li class="active"><a href="#!">Repertoire</a></li>\n    <li class="waves-effect"><a href="#!">Sessions</a></li>\n    <li class="waves-effect"><a href="#!">Payment</a></li>\n    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>\n  </ul>');
}));                                                                                                                   // 21
                                                                                                                       // 22
Template.__checkName("BookingRequest");                                                                                // 23
Template["BookingRequest"] = new Template("Template.BookingRequest", (function() {                                     // 24
  var view = this;                                                                                                     // 25
  return [ Spacebars.With(function() {                                                                                 // 26
    return Spacebars.dataMustache(view.lookup("basicProfileById"), view.lookup("musician"));                           // 27
  }, function() {                                                                                                      // 28
    return [ "\n      ", HTML.H4("Review Your Booking With ", Blaze.View("lookup:name", function() {                   // 29
      return Spacebars.mustache(view.lookup("name"));                                                                  // 30
    })), "\n      " ];                                                                                                 // 31
  }), "\n\n      ", HTML.DIV({                                                                                         // 32
    "class": "row"                                                                                                     // 33
  }, "\n        ", HTML.DIV({                                                                                          // 34
    "class": "col s12 m7 l7"                                                                                           // 35
  }, "\n          ", HTML.DIV({                                                                                        // 36
    "class": "center"                                                                                                  // 37
  }, "\n              ", Spacebars.include(view.lookupTemplate("ConfirmBookingPagination")), "\n          "), "\n          ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 39
      template: Spacebars.call(view.lookup("currentStep"))                                                             // 40
    };                                                                                                                 // 41
  }, function() {                                                                                                      // 42
    return Spacebars.include(function() {                                                                              // 43
      return Spacebars.call(Template.__dynamic);                                                                       // 44
    });                                                                                                                // 45
  }), "\n        "), "\n\n        ", HTML.DIV({                                                                        // 46
    "class": "col hide-on-small-only m5 l5"                                                                            // 47
  }, "\n          ", HTML.DIV({                                                                                        // 48
    "class": "card grey lighten-5 z-depth-0"                                                                           // 49
  }, "\n            ", HTML.DIV({                                                                                      // 50
    "class": "card-content center"                                                                                     // 51
  }, "\n              ", HTML.SPAN({                                                                                   // 52
    "class": "black-text"                                                                                              // 53
  }, "\n                ", HTML.Raw("<h5>Booking Summary</h5>"), HTML.Raw("<br>"), "\n                ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("basicProfileById"), view.lookup("musician"));                           // 55
  }, function() {                                                                                                      // 56
    return [ "\n                  ", Blaze.View("lookup:name", function() {                                            // 57
      return Spacebars.mustache(view.lookup("name"));                                                                  // 58
    }), " will be playing 3 pieces on the\n                " ];                                                        // 59
  }), "\n                ", Spacebars.With(function() {                                                                // 60
    return Spacebars.dataMustache(view.lookup("musicProfileById"), view.lookup("musician"));                           // 61
  }, function() {                                                                                                      // 62
    return [ "\n                  ", Blaze.View("lookup:instrument", function() {                                      // 63
      return Spacebars.mustache(view.lookup("instrument"));                                                            // 64
    }), "\n                " ];                                                                                        // 65
  }), "\n                for a final performance on ", Blaze.View("lookup:formatDate", function() {                    // 66
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("endDate"));                                      // 67
  }), ". ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n                 You will rehearse together a minimum of 5 sessions between ", Blaze.View("lookup:formatDuration", function() {
    return Spacebars.mustache(view.lookup("formatDuration"), view.lookup("startDate"), view.lookup("endDate"));        // 69
  }), ". ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n                Your first session will be on the\n             "), "\n            "), "\n          "), "\n        "), "\n      ") ];
}));                                                                                                                   // 71
                                                                                                                       // 72
Template.__checkName("repertoireSection");                                                                             // 73
Template["repertoireSection"] = new Template("Template.repertoireSection", (function() {                               // 74
  var view = this;                                                                                                     // 75
  return HTML.DIV({                                                                                                    // 76
    id: "repertoire",                                                                                                  // 77
    "class": "section scrollspy"                                                                                       // 78
  }, "\n    ", HTML.DIV({                                                                                              // 79
    "class": "card grey lighten-5 z-depth-0"                                                                           // 80
  }, "\n      ", HTML.DIV({                                                                                            // 81
    "class": "card-content"                                                                                            // 82
  }, "\n        ", HTML.SPAN({                                                                                         // 83
    "class": "black-text"                                                                                              // 84
  }, "\n          ", Spacebars.With(function() {                                                                       // 85
    return Spacebars.call(view.lookup("routeTransaction"));                                                            // 86
  }, function() {                                                                                                      // 87
    return [ "\n            ", HTML.H5("Repertoire"), HTML.BR(), "\n              ", HTML.TABLE({                      // 88
      "class": "striped centered"                                                                                      // 89
    }, "\n                ", HTML.TBODY("\n                  ", Blaze.Each(function() {                                // 90
      return Spacebars.call(view.lookup("repertoire"));                                                                // 91
    }, function() {                                                                                                    // 92
      return [ "\n                  ", HTML.TR("\n                    ", HTML.TD(Blaze.View("lookup:.", function() {   // 93
        return Spacebars.mustache(view.lookup("."));                                                                   // 94
      })), "\n                  "), "\n                  " ];                                                          // 95
    }), "\n                "), "\n              "), "\n\n            ", HTML.BR(), HTML.BR(), "\n            ", HTML.DIV({
      "class": "check-repertoire-confirm"                                                                              // 97
    }, "\n              ", HTML.INPUT({                                                                                // 98
      type: "checkbox",                                                                                                // 99
      id: "repertoire-confirm"                                                                                         // 100
    }), "\n              ", HTML.LABEL({                                                                               // 101
      "for": "repertoire-confirm"                                                                                      // 102
    }, "I can accompany the musician on the repertoire above."), "\n            "), "\n          " ];                  // 103
  }), "\n       "), "\n      "), "\n      ", HTML.DIV({                                                                // 104
    "class": "card-action"                                                                                             // 105
  }, "\n          ", HTML.A({                                                                                          // 106
    "class": function() {                                                                                              // 107
      return Spacebars.mustache(view.lookup("getRepertoireConfirmButtonClass"));                                       // 108
    }                                                                                                                  // 109
  }, "Next"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n      "), "\n    "), "\n  ");                                     // 110
}));                                                                                                                   // 111
                                                                                                                       // 112
Template.__checkName("sessionsSection");                                                                               // 113
Template["sessionsSection"] = new Template("Template.sessionsSection", (function() {                                   // 114
  var view = this;                                                                                                     // 115
  return Spacebars.With(function() {                                                                                   // 116
    return Spacebars.call(view.lookup("routeTransaction"));                                                            // 117
  }, function() {                                                                                                      // 118
    return [ "\n  ", HTML.DIV({                                                                                        // 119
      id: "sessions",                                                                                                  // 120
      "class": "section scrollspy"                                                                                     // 121
    }, "\n    ", HTML.DIV({                                                                                            // 122
      "class": "card grey lighten-5 z-depth-0"                                                                         // 123
    }, "\n      ", HTML.DIV({                                                                                          // 124
      "class": "card-content"                                                                                          // 125
    }, "\n        ", HTML.SPAN({                                                                                       // 126
      "class": "black-text"                                                                                            // 127
    }, "\n          ", HTML.H5("Sessions"), HTML.BR(), "\n          5 Sessions Between ", Blaze.View("lookup:formatDuration", function() {
      return Spacebars.mustache(view.lookup("formatDuration"), view.lookup("startDate"), view.lookup("endDate"));      // 129
    }), "\n          ", HTML.BR(), "\n          ", HTML.BR(), "\n          ", Spacebars.include(view.lookupTemplate("upsertSessionResponse")), "\n\n          ", HTML.DIV({
      "class": "check-session-confirm"                                                                                 // 131
    }, "\n            ", HTML.INPUT({                                                                                  // 132
      type: "checkbox",                                                                                                // 133
      id: "session-confirm"                                                                                            // 134
    }), "\n            ", HTML.LABEL({                                                                                 // 135
      "for": "session-confirm"                                                                                         // 136
    }, "Confirm 5 sessions between ", Blaze.View("lookup:formatDuration", function() {                                 // 137
      return Spacebars.mustache(view.lookup("formatDuration"), view.lookup("startDate"), view.lookup("endDate"));      // 138
    }), "."), "\n          "), "\n       "), "\n      "), "\n      ", HTML.DIV({                                       // 139
      "class": "card-action"                                                                                           // 140
    }, "\n          ", HTML.A({                                                                                        // 141
      "class": function() {                                                                                            // 142
        return Spacebars.mustache(view.lookup("getSessionConfirmButtonClass"));                                        // 143
      }                                                                                                                // 144
    }, "Next"), HTML.BR(), HTML.BR(), "\n      "), "\n    "), "\n  "), "\n  " ];                                       // 145
  });                                                                                                                  // 146
}));                                                                                                                   // 147
                                                                                                                       // 148
Template.__checkName("paymentSection");                                                                                // 149
Template["paymentSection"] = new Template("Template.paymentSection", (function() {                                     // 150
  var view = this;                                                                                                     // 151
  return Spacebars.With(function() {                                                                                   // 152
    return Spacebars.call(view.lookup("routeTransaction"));                                                            // 153
  }, function() {                                                                                                      // 154
    return [ "\n  ", HTML.DIV({                                                                                        // 155
      id: "sessions",                                                                                                  // 156
      "class": "section scrollspy"                                                                                     // 157
    }, "\n    ", HTML.DIV({                                                                                            // 158
      "class": "card grey lighten-5 z-depth-0"                                                                         // 159
    }, "\n      ", HTML.DIV({                                                                                          // 160
      "class": "card-content"                                                                                          // 161
    }, "\n        ", HTML.SPAN({                                                                                       // 162
      "class": "black-text"                                                                                            // 163
    }, "\n          ", HTML.H5("Payment"), HTML.BR(), "\n\n          Total payment for the 5 hour booking at $", Blaze.View("lookup:getHourlyCharge", function() {
      return Spacebars.mustache(view.lookup("getHourlyCharge"), view.lookup("musician"));                              // 165
    }), " per hour is $", Blaze.View("lookup:getTotalEstimated", function() {                                          // 166
      return Spacebars.mustache(view.lookup("getTotalEstimated"), view.lookup("musician"), 5);                         // 167
    }), ". You will receive payment after each completed session.\n          ", HTML.BR(), " ", HTML.BR(), " The musician may add more hours during the booking.\n          ", HTML.BR(), " ", HTML.BR(), "\n\n          ", HTML.DIV({
      "class": "check-payment-confirm"                                                                                 // 169
    }, "\n            ", HTML.INPUT({                                                                                  // 170
      type: "checkbox",                                                                                                // 171
      id: "payment-confirm"                                                                                            // 172
    }), "\n            ", HTML.LABEL({                                                                                 // 173
      "for": "payment-confirm"                                                                                         // 174
    }, "Confirm Payment"), "\n          "), "\n       "), "\n      "), "\n      ", HTML.DIV({                          // 175
      "class": "card-action"                                                                                           // 176
    }, "\n        ", HTML.A({                                                                                          // 177
      "class": function() {                                                                                            // 178
        return Spacebars.mustache(view.lookup("getFinalConfirmButtonClass"));                                          // 179
      }                                                                                                                // 180
    }, "Confirm Booking"), HTML.BR(), HTML.BR(), "\n      "), "\n    "), "\n  "), "\n  " ];                            // 181
  });                                                                                                                  // 182
}));                                                                                                                   // 183
                                                                                                                       // 184
Template.__checkName("upsertSessionResponse");                                                                         // 185
Template["upsertSessionResponse"] = new Template("Template.upsertSessionResponse", (function() {                       // 186
  var view = this;                                                                                                     // 187
  return Blaze._TemplateWith(function() {                                                                              // 188
    return {                                                                                                           // 189
      collection: Spacebars.call("Sessions"),                                                                          // 190
      id: Spacebars.call("upsertSessionResponse"),                                                                     // 191
      doc: Spacebars.call(view.lookup("currentResponse")),                                                             // 192
      type: Spacebars.call(view.lookup("formType"))                                                                    // 193
    };                                                                                                                 // 194
  }, function() {                                                                                                      // 195
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 196
      return [ "\n    ", HTML.FIELDSET("\n      ", HTML.LEGEND("Confirm Your First Session"), "\n        ", Blaze._TemplateWith(function() {
        return {                                                                                                       // 198
          name: Spacebars.call("startTime"),                                                                           // 199
          type: Spacebars.call("select-radio"),                                                                        // 200
          options: Spacebars.call(view.lookup("optionArray"))                                                          // 201
        };                                                                                                             // 202
      }, function() {                                                                                                  // 203
        return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                 // 204
      }), "\n    "), "\n    ", HTML.BR(), "\n  " ];                                                                    // 205
    });                                                                                                                // 206
  });                                                                                                                  // 207
}));                                                                                                                   // 208
                                                                                                                       // 209
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.BookingsLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.BookingsLayout.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("BookingsLayout");                                                                                // 2
Template["BookingsLayout"] = new Template("Template.BookingsLayout", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw("<header>\n        <h1> Your Bookings </h1>\n    </header>\n    "), HTML.MAIN("\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("sentBookingRequests"));                                                         // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", Blaze._TemplateWith(function() {                                                            // 8
      return {                                                                                                         // 9
        template: Spacebars.call("SentBookingRequests"),                                                               // 10
        data: Spacebars.call(view.lookup("."))                                                                         // 11
      };                                                                                                               // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(function() {                                                                            // 14
        return Spacebars.call(Template.__dynamic);                                                                     // 15
      });                                                                                                              // 16
    }), "\n      " ];                                                                                                  // 17
  }), "\n    ") ];                                                                                                     // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
Template.__checkName("SentBookings");                                                                                  // 21
Template["SentBookings"] = new Template("Template.SentBookings", (function() {                                         // 22
  var view = this;                                                                                                     // 23
  return [ HTML.Raw("<h2>Booking</h2>\n      "), Spacebars.With(function() {                                           // 24
    return Spacebars.dataMustache(view.lookup("accountById"), view.lookup("accompanist"));                             // 25
  }, function() {                                                                                                      // 26
    return [ "\n      Accompanist: ", Blaze.View("lookup:name", function() {                                           // 27
      return Spacebars.mustache(view.lookup("name"));                                                                  // 28
    }), HTML.BR(), "\n      " ];                                                                                       // 29
  }), HTML.Raw("\n      Planned Repertoire: <br>\n      "), Blaze.Each(function() {                                    // 30
    return Spacebars.call(view.lookup("repertoire"));                                                                  // 31
  }, function() {                                                                                                      // 32
    return [ "\n        ", Blaze.View("lookup:.", function() {                                                         // 33
      return Spacebars.mustache(view.lookup("."));                                                                     // 34
    }), HTML.BR(), "\n      " ];                                                                                       // 35
  }), "\n      Status: ", Blaze.View("lookup:status", function() {                                                     // 36
    return Spacebars.mustache(view.lookup("status"));                                                                  // 37
  }), HTML.Raw(" <br>\n      Start Date: "), Blaze.View("lookup:startDate", function() {                               // 38
    return Spacebars.mustache(view.lookup("startDate"));                                                               // 39
  }), HTML.Raw(" <br>\n      End Date: "), Blaze.View("lookup:endDate", function() {                                   // 40
    return Spacebars.mustache(view.lookup("endDate"));                                                                 // 41
  }), HTML.Raw(" <br>") ];                                                                                             // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.HomeLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.HomeLayout.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("HomeLayout");                                                                                    // 2
Template["HomeLayout"] = new Template("Template.HomeLayout", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<img src="http://www.mrwallpaper.com/wallpapers/tropical-beach-paradise-hd.jpg" id="bg" alt="">\n\n    '), HTML.MAIN("\n      ", HTML.Raw('<div class="home_text">\n        <div class="container">\n          <h2> James the Savior </h2>\n        </div>\n      </div>'), "\n      ", Spacebars.include(view.lookupTemplate("search")), "\n      ", Spacebars.include(view.lookupTemplate("makeAdmin")), "\n\n    ") ];
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("search");                                                                                        // 8
Template["search"] = new Template("Template.search", (function() {                                                     // 9
  var view = this;                                                                                                     // 10
  return HTML.Raw('<div class="search_bar">\n    <div class="container">\n  	   <div class="row">\n          <div class="span12">\n              <div class="blur">\n                <form class="col s12" id="searchform">\n    					   <div class="input-field col s4">\n                    <input name="address" class="autocomplete" id="autocomplete" type="text">\n                    <label>My Location</label>\n                  </div>\n\n                  <div class="input-field col s3">\n                    <input name="start_date" class="datepicker" type="date" placeholder="Start Date">\n                  </div>\n\n                  <div class="input-field col s3">\n                    <input name="end_date" class="datepicker" type="date" placeholder="Event Date">\n                  </div>\n\n                  <div class="input-field col s1">\n                    <button type="submit" class="btn btn-primary">Search</button>\n                  </div>\n                </form>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>');
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("makeAdmin");                                                                                     // 14
Template["makeAdmin"] = new Template("Template.makeAdmin", (function() {                                               // 15
  var view = this;                                                                                                     // 16
  return HTML.Raw("<button>Divinify</button>");                                                                        // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.MainLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.MainLayout.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("MainLayout");                                                                                    // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<head>\n		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n	    <link rel="stylesheet" href="styles/custom.css">\n	</head>\n	'), HTML.BODY("\n		", HTML.DIV({
    "class": "nav"                                                                                                     // 6
  }, "\n			", Blaze._TemplateWith(function() {                                                                         // 7
    return {                                                                                                           // 8
      template: Spacebars.call(view.lookup("nav"))                                                                     // 9
    };                                                                                                                 // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(function() {                                                                              // 12
      return Spacebars.call(Template.__dynamic);                                                                       // 13
    });                                                                                                                // 14
  }), "\n		"), "\n\n	    ", HTML.DIV({                                                                                 // 15
    "class": "container"                                                                                               // 16
  }, "\n	   		", Blaze._TemplateWith(function() {                                                                      // 17
    return {                                                                                                           // 18
      template: Spacebars.call(view.lookup("main"))                                                                    // 19
    };                                                                                                                 // 20
  }, function() {                                                                                                      // 21
    return Spacebars.include(function() {                                                                              // 22
      return Spacebars.call(Template.__dynamic);                                                                       // 23
    });                                                                                                                // 24
  }), "\n	   	"), "\n   	") ];                                                                                         // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Navbar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.Navbar.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Navbar");                                                                                        // 2
Template["Navbar"] = new Template("Template.Navbar", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    "class": "navbar-fixed"                                                                                            // 6
  }, "\n		", HTML.NAV({                                                                                                // 7
    "class": "purple lighten-2 z-depth-0"                                                                              // 8
  }, "\n			", HTML.DIV({                                                                                               // 9
    "class": "nav-wrapper container"                                                                                   // 10
  }, "\n				", HTML.Raw('<a href="/" class="brand-logo left">Empanist</a>'), "\n				", HTML.UL({                       // 11
    id: "nav-mobile",                                                                                                  // 12
    "class": "right valign-wrapper hide-on-med-and-down"                                                               // 13
  }, "\n						", Blaze.Each(function() {                                                                               // 14
    return Spacebars.call(view.lookup("navbarFields"));                                                                // 15
  }, function() {                                                                                                      // 16
    return [ "\n							", HTML.LI(Blaze._TemplateWith(function() {                                                     // 17
      return {                                                                                                         // 18
        template: Spacebars.call(view.lookup("."))                                                                     // 19
      };                                                                                                               // 20
    }, function() {                                                                                                    // 21
      return Spacebars.include(function() {                                                                            // 22
        return Spacebars.call(Template.__dynamic);                                                                     // 23
      });                                                                                                              // 24
    })), "\n						" ];                                                                                                 // 25
  }), "\n				"), "\n			"), "\n		"), "\n	"), HTML.Raw("\n\n<!-- Modal Contents -->\n\n  "), HTML.DIV({                  // 26
    id: "signUp",                                                                                                      // 27
    "class": "modal"                                                                                                   // 28
  }, "\n    ", HTML.DIV({                                                                                              // 29
    "class": "modal-content"                                                                                           // 30
  }, "\n      ", Spacebars.include(view.lookupTemplate("atForm")), "\n    "), "\n  "), "\n\n  ", HTML.DIV({            // 31
    id: "login",                                                                                                       // 32
    "class": "modal"                                                                                                   // 33
  }, "\n    ", HTML.DIV({                                                                                              // 34
    "class": "modal-content"                                                                                           // 35
  }, "\n      ", Spacebars.include(view.lookupTemplate("atForm")), "\n    "), "\n  ") ];                               // 36
}));                                                                                                                   // 37
                                                                                                                       // 38
Template.__checkName("modalSignUp");                                                                                   // 39
Template["modalSignUp"] = new Template("Template.modalSignUp", (function() {                                           // 40
  var view = this;                                                                                                     // 41
  return HTML.Raw('<a class="waves-effect waves-light modal-trigger " href="#signUp">Sign Up</a>');                    // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
Template.__checkName("modalLogin");                                                                                    // 45
Template["modalLogin"] = new Template("Template.modalLogin", (function() {                                             // 46
  var view = this;                                                                                                     // 47
  return HTML.Raw('<a class="waves-effect waves-light modal-trigger" href="#login">Login</a>');                        // 48
}));                                                                                                                   // 49
                                                                                                                       // 50
Template.__checkName("navbarAccount");                                                                                 // 51
Template["navbarAccount"] = new Template("Template.navbarAccount", (function() {                                       // 52
  var view = this;                                                                                                     // 53
  return [ HTML.A({                                                                                                    // 54
    "class": "dropdown-button valign-wrapper",                                                                         // 55
    "data-activates": "accountDropdown"                                                                                // 56
  }, "Account", HTML.Raw("&nbsp;"), HTML.Raw("&nbsp;"), HTML.Raw("&nbsp;"), HTML.Raw("&nbsp;"), HTML.IMG({             // 57
    src: function() {                                                                                                  // 58
      return Spacebars.mustache(view.lookup("profilePic"));                                                            // 59
    },                                                                                                                 // 60
    alt: "",                                                                                                           // 61
    width: "37px",                                                                                                     // 62
    height: "37px",                                                                                                    // 63
    style: "border:2px solid white",                                                                                   // 64
    "class": "circle right valign white-border"                                                                        // 65
  }), "\n		"), "\n\n  ", HTML.UL({                                                                                     // 66
    id: "accountDropdown",                                                                                             // 67
    "class": "dropdown-content",                                                                                       // 68
    style: "width: auto !important;"                                                                                   // 69
  }, "\n    ", HTML.LI(HTML.A({                                                                                        // 70
    href: function() {                                                                                                 // 71
      return Spacebars.mustache(view.lookup("getProfileRoute"));                                                       // 72
    }                                                                                                                  // 73
  }, "My Profile")), "\n    ", HTML.Raw('<li class="divider"></li>'), "\n    ", HTML.Raw('<li><a class="logout">Logout</a></li>'), "\n  ") ];
}));                                                                                                                   // 75
                                                                                                                       // 76
Template.__checkName("myProfile");                                                                                     // 77
Template["myProfile"] = new Template("Template.myProfile", (function() {                                               // 78
  var view = this;                                                                                                     // 79
  return HTML.A({                                                                                                      // 80
    href: function() {                                                                                                 // 81
      return Spacebars.mustache(view.lookup("getProfileRoute"));                                                       // 82
    }                                                                                                                  // 83
  }, "My Profile");                                                                                                    // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
Template.__checkName("accompanistDashboard");                                                                          // 87
Template["accompanistDashboard"] = new Template("Template.accompanistDashboard", (function() {                         // 88
  var view = this;                                                                                                     // 89
  return HTML.Raw('<a href="/accompanistDashboard">Dashboard<i class="material-icons right">dashboard</i></a>');       // 90
}));                                                                                                                   // 91
                                                                                                                       // 92
Template.__checkName("bookings");                                                                                      // 93
Template["bookings"] = new Template("Template.bookings", (function() {                                                 // 94
  var view = this;                                                                                                     // 95
  return HTML.Raw('<a href="/bookings">Bookings<i class="material-icons right">book</i></a>');                         // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
Template.__checkName("becomeAnAccompanist");                                                                           // 99
Template["becomeAnAccompanist"] = new Template("Template.becomeAnAccompanist", (function() {                           // 100
  var view = this;                                                                                                     // 101
  return HTML.Raw('<a class="waves-effect waves-light btn" href="/newaccomp">Become an Accompanist</a>');              // 102
}));                                                                                                                   // 103
                                                                                                                       // 104
Template.__checkName("addProfile");                                                                                    // 105
Template["addProfile"] = new Template("Template.addProfile", (function() {                                             // 106
  var view = this;                                                                                                     // 107
  return HTML.Raw('<a href="/addinfo">Add Profile</a>');                                                               // 108
}));                                                                                                                   // 109
                                                                                                                       // 110
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NewAccompLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.NewAccompLayout.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("NewAccompLayout");                                                                               // 2
Template["NewAccompLayout"] = new Template("Template.NewAccompLayout", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.MAIN("\n  \n    ", Spacebars.include(view.lookupTemplate("NewAccompanist")), "\n        \n    ");        // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("NewAccompanist");                                                                                // 8
Template["NewAccompanist"] = new Template("Template.NewAccompanist", (function() {                                     // 9
  var view = this;                                                                                                     // 10
  return HTML.DIV({                                                                                                    // 11
    "class": "smallMargin"                                                                                             // 12
  }, HTML.Raw("\n    <h3>Become an accompanist</h3>\n    "), HTML.UL({                                                 // 13
    "class": "collection"                                                                                              // 14
  }, "\n        \n        ", HTML.LI({                                                                                 // 15
    "class": "collection-item"                                                                                         // 16
  }, "\n          ", HTML.DIV("\n            ", HTML.Raw('<p class="step_number"> STEP 1 </p>'), "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("basicProfileExists"));                                                          // 18
  }, function() {                                                                                                      // 19
    return [ "\n            ", HTML.I({                                                                                // 20
      "class": "small material-icons secondary-content"                                                                // 21
    }, "check_circle"), "\n            " ];                                                                            // 22
  }), "\n            ", HTML.Raw('<p class="step_main">Lets clarify some basics</p>'), "\n            ", HTML.Raw('<p class="step_info">Name, location, number, and more</p>'), "\n            ", HTML.Raw("<br>"), "\n            ", Blaze.Unless(function() {
    return Spacebars.dataMustache(view.lookup("and"), view.lookup("musicProfileExists"), view.lookup("accompanistProfileExists"));
  }, function() {                                                                                                      // 25
    return [ "\n              ", Blaze.Unless(function() {                                                             // 26
      return Spacebars.call(view.lookup("basicProfileExists"));                                                        // 27
    }, function() {                                                                                                    // 28
      return [ "\n                ", HTML.A({                                                                          // 29
        "class": "waves-effect waves-light btn",                                                                       // 30
        href: "/newaccomp/step1"                                                                                       // 31
      }, "\n                  Continue\n                "), "\n              " ];                                      // 32
    }, function() {                                                                                                    // 33
      return [ "\n                ", HTML.A({                                                                          // 34
        href: "/newaccomp/step1"                                                                                       // 35
      }, "\n                  Edit\n                "), "\n              " ];                                          // 36
    }), "\n            " ];                                                                                            // 37
  }), "\n          "), "\n        "), "\n\n        ", HTML.LI({                                                        // 38
    "class": "collection-item"                                                                                         // 39
  }, "\n          ", HTML.DIV("\n            ", HTML.Raw('<p class="step_number"> STEP 2 </p>'), "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("musicProfileExists"));                                                          // 41
  }, function() {                                                                                                      // 42
    return [ "\n            ", HTML.I({                                                                                // 43
      "class": "small material-icons secondary-content"                                                                // 44
    }, "check_circle"), " \n            " ];                                                                           // 45
  }), "\n            ", HTML.Raw('<p class="step_main">Show off your skills</p>'), "\n            ", HTML.Raw('<p class="step_info">Awards, competitions, orchestras, instruments</p>'), "\n            ", HTML.Raw("<br>"), "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("basicProfileExists"));                                                          // 47
  }, function() {                                                                                                      // 48
    return [ "\n              ", Blaze.Unless(function() {                                                             // 49
      return Spacebars.call(view.lookup("musicProfileExists"));                                                        // 50
    }, function() {                                                                                                    // 51
      return [ "\n                ", Blaze.Unless(function() {                                                         // 52
        return Spacebars.call(view.lookup("accompanistProfileExists"));                                                // 53
      }, function() {                                                                                                  // 54
        return [ "\n                  ", HTML.A({                                                                      // 55
          href: "/newaccomp/step2",                                                                                    // 56
          "class": "waves-effect waves-light btn"                                                                      // 57
        }, "\n                    Continue\n                  "), "\n                " ];                              // 58
      }), "\n              " ];                                                                                        // 59
    }, function() {                                                                                                    // 60
      return [ "\n                ", HTML.A({                                                                          // 61
        href: "/newaccomp/step2"                                                                                       // 62
      }, "\n                  Edit\n                "), "\n              " ];                                          // 63
    }), "\n            " ];                                                                                            // 64
  }), "\n          "), "\n        "), "\n\n        ", HTML.LI({                                                        // 65
    "class": "collection-item"                                                                                         // 66
  }, "\n          ", HTML.DIV("\n            ", HTML.Raw('<p class="step_number"> STEP 3 </p>'), " \n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("accompanistProfileExists"));                                                    // 68
  }, function() {                                                                                                      // 69
    return [ "\n              ", HTML.I({                                                                              // 70
      "class": "small material-icons secondary-content"                                                                // 71
    }, "check_circle"), "\n            " ];                                                                            // 72
  }), "\n            ", HTML.Raw('<p class="step_main">Get ready to accompany!</p>'), "\n            ", HTML.Raw('<p class="step_info">Time and day preferance, hourly charge, and more</p>'), "\n            ", HTML.Raw("<br>"), "\n            ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("and"), view.lookup("basicProfileExists"), view.lookup("musicProfileExists"));
  }, function() {                                                                                                      // 75
    return [ "\n              ", Blaze.Unless(function() {                                                             // 76
      return Spacebars.call(view.lookup("accompanistProfileExists"));                                                  // 77
    }, function() {                                                                                                    // 78
      return [ "\n                ", HTML.A({                                                                          // 79
        href: "/newaccomp/step3",                                                                                      // 80
        "class": "waves-effect waves-light btn"                                                                        // 81
      }, "\n                  Continue\n                "), "\n                " ];                                    // 82
    }, function() {                                                                                                    // 83
      return [ "\n                ", HTML.A({                                                                          // 84
        href: "/newaccomp/step3"                                                                                       // 85
      }, "\n                  Edit\n                "), "\n              " ];                                          // 86
    }), "\n            " ];                                                                                            // 87
  }), "\n          "), "\n        "), "\n\n      "), "\n  ");                                                          // 88
}));                                                                                                                   // 89
                                                                                                                       // 90
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.PaymentLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.PaymentLayout.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("PaymentLayout");                                                                                 // 2
Template["PaymentLayout"] = new Template("Template.PaymentLayout", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw("<header>\n        <h1> Payment </h1>\n    </header>\n    "), HTML.MAIN("\n      ", Spacebars.include(view.lookupTemplate("StripeCheckout")), "\n    ") ];
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("StripeCheckout");                                                                                // 8
Template["StripeCheckout"] = new Template("Template.StripeCheckout", (function() {                                     // 9
  var view = this;                                                                                                     // 10
  return HTML.FORM({                                                                                                   // 11
    action: "",                                                                                                        // 12
    method: "POST"                                                                                                     // 13
  }, "\n    ", HTML.SCRIPT({                                                                                           // 14
    src: "https://checkout.stripe.com/checkout.js",                                                                    // 15
    "class": "stripe-button",                                                                                          // 16
    "data-key": "pk_test_F5YQcuYeHVN8GBYmoCxcmPyC",                                                                    // 17
    "data-amount": "999",                                                                                              // 18
    "data-name": "Empanist",                                                                                           // 19
    "data-zip-code": "true",                                                                                           // 20
    "data-description": "Widget",                                                                                      // 21
    "data-image": "/img/documentation/checkout/marketplace.png",                                                       // 22
    "data-locale": "auto"                                                                                              // 23
  }, "\n    "), "\n  ");                                                                                               // 24
}));                                                                                                                   // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ProfileLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.ProfileLayout.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ProfileLayout");                                                                                 // 2
Template["ProfileLayout"] = new Template("Template.ProfileLayout", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.MAIN(HTML.Raw('\n      <!-- Change parallax img according to what user inserts!! -->\n      <div class="parallax-container">\n        <div class="parallax">\n          <img src="http://materializecss.com/images/parallax1.jpg">\n        </div>\n      </div>\n\n          '), Blaze.If(function() {
    return Spacebars.call(view.lookup("validId"));                                                                     // 6
  }, function() {                                                                                                      // 7
    return [ "\n            ", Blaze.If(function() {                                                                   // 8
      return Spacebars.call(view.lookup("isOwnProfile"));                                                              // 9
    }, function() {                                                                                                    // 10
      return [ "\n              ", Blaze._TemplateWith(function() {                                                    // 11
        return {                                                                                                       // 12
          template: Spacebars.call("accountTemplate"),                                                                 // 13
          data: Spacebars.call(view.lookup("myBasicProfile"))                                                          // 14
        };                                                                                                             // 15
      }, function() {                                                                                                  // 16
        return Spacebars.include(function() {                                                                          // 17
          return Spacebars.call(Template.__dynamic);                                                                   // 18
        });                                                                                                            // 19
      }), "\n              ", Blaze._TemplateWith(function() {                                                         // 20
        return {                                                                                                       // 21
          template: Spacebars.call("profileTemplate"),                                                                 // 22
          data: Spacebars.call(view.lookup("myMusicProfile"))                                                          // 23
        };                                                                                                             // 24
      }, function() {                                                                                                  // 25
        return Spacebars.include(function() {                                                                          // 26
          return Spacebars.call(Template.__dynamic);                                                                   // 27
        });                                                                                                            // 28
      }), "\n            " ];                                                                                          // 29
    }, function() {                                                                                                    // 30
      return [ "\n              ", Blaze.If(function() {                                                               // 31
        return Spacebars.call(view.lookup("isAccompanist"));                                                           // 32
      }, function() {                                                                                                  // 33
        return [ " \n              ", HTML.DIV({                                                                       // 34
          "class": "smallMargin"                                                                                       // 35
        }, "\n                ", Blaze._TemplateWith(function() {                                                      // 36
          return {                                                                                                     // 37
            template: Spacebars.call("accountTemplate"),                                                               // 38
            data: Spacebars.call(view.lookup("routeBasicProfile"))                                                     // 39
          };                                                                                                           // 40
        }, function() {                                                                                                // 41
          return Spacebars.include(function() {                                                                        // 42
            return Spacebars.call(Template.__dynamic);                                                                 // 43
          });                                                                                                          // 44
        }), "\n                ", Blaze._TemplateWith(function() {                                                     // 45
          return {                                                                                                     // 46
            template: Spacebars.call("accompanistProfileTemplate"),                                                    // 47
            data: Spacebars.call(view.lookup("routeAccompanistProfile"))                                               // 48
          };                                                                                                           // 49
        }, function() {                                                                                                // 50
          return Spacebars.include(function() {                                                                        // 51
            return Spacebars.call(Template.__dynamic);                                                                 // 52
          });                                                                                                          // 53
        }), "\n                ", Blaze._TemplateWith(function() {                                                     // 54
          return {                                                                                                     // 55
            template: Spacebars.call("profileTemplate"),                                                               // 56
            data: Spacebars.call(view.lookup("routeMusicProfile"))                                                     // 57
          };                                                                                                           // 58
        }, function() {                                                                                                // 59
          return Spacebars.include(function() {                                                                        // 60
            return Spacebars.call(Template.__dynamic);                                                                 // 61
          });                                                                                                          // 62
        }), "\n                ", HTML.Comment(" uncomment below when you add booking template "), "\n                ", HTML.Comment(" {{> bookAccompanist}} "), "\n              "), "\n              " ];
      }, function() {                                                                                                  // 64
        return [ "\n                ", Blaze._TemplateWith(function() {                                                // 65
          return {                                                                                                     // 66
            template: Spacebars.call("accountTemplate"),                                                               // 67
            data: Spacebars.call(view.lookup("routeBasicProfile"))                                                     // 68
          };                                                                                                           // 69
        }, function() {                                                                                                // 70
          return Spacebars.include(function() {                                                                        // 71
            return Spacebars.call(Template.__dynamic);                                                                 // 72
          });                                                                                                          // 73
        }), "\n                ", Blaze._TemplateWith(function() {                                                     // 74
          return {                                                                                                     // 75
            template: Spacebars.call("profileTemplate"),                                                               // 76
            data: Spacebars.call(view.lookup("routeMusicProfile"))                                                     // 77
          };                                                                                                           // 78
        }, function() {                                                                                                // 79
          return Spacebars.include(function() {                                                                        // 80
            return Spacebars.call(Template.__dynamic);                                                                 // 81
          });                                                                                                          // 82
        }), "\n              " ];                                                                                      // 83
      }), "\n            " ];                                                                                          // 84
    }), "\n          " ];                                                                                              // 85
  }, function() {                                                                                                      // 86
    return [ "\n            ", Spacebars.include(view.lookupTemplate("invalidId")), "\n          " ];                  // 87
  }), "\n    ");                                                                                                       // 88
}));                                                                                                                   // 89
                                                                                                                       // 90
Template.__checkName("invalidId");                                                                                     // 91
Template["invalidId"] = new Template("Template.invalidId", (function() {                                               // 92
  var view = this;                                                                                                     // 93
  return HTML.Raw("<h2>Invalid ID</h2>");                                                                              // 94
}));                                                                                                                   // 95
                                                                                                                       // 96
Template.__checkName("accountTemplate");                                                                               // 97
Template["accountTemplate"] = new Template("Template.accountTemplate", (function() {                                   // 98
  var view = this;                                                                                                     // 99
  return HTML.DIV({                                                                                                    // 100
    id: "first-card-container",                                                                                        // 101
    "class": "card grey lighten-5 z-depth-0"                                                                           // 102
  }, HTML.Raw('\n<!-- <<<<<<< HEAD\n    \n    <div id="first-card-text" class="card-content">\n\n      <img id="profileImg" class="materialboxed" src="http://whiskeyreviewer.com/wp-content/uploads/2015/07/amanda_cerny_1.jpg">\n     \n      \n      <span class="black-text activator">\n        <div class="details">\n          <h5 class="bold">{{name}}</h5>\n          <h6>{{affiliation}}</h6> \n          {{#if isOwnProfile}}\n          <h10>{{formatBirthDate this.birthDate}}</h10> <br>\n          <h10>{{phone}}</h10> <br>\n======= -->\n\n    '), HTML.DIV({
    id: "first-card-text",                                                                                             // 104
    "class": "card-content"                                                                                            // 105
  }, "\n\n      ", HTML.DIV({                                                                                          // 106
    id: "profileImg",                                                                                                  // 107
    "class": "profImg-left"                                                                                            // 108
  }, "\n        ", HTML.A({                                                                                            // 109
    "class": "waves-effect waves-light modal-trigger",                                                                 // 110
    href: "#changeProfileModal"                                                                                        // 111
  }, "\n          ", HTML.IMG({                                                                                        // 112
    "class": "materialboxed",                                                                                          // 113
    src: function() {                                                                                                  // 114
      return Spacebars.mustache(view.lookup("profilePic"));                                                            // 115
    }                                                                                                                  // 116
  }), "\n        "), "\n      "), "\n\n      ", HTML.DIV({                                                             // 117
    id: "changeProfileModal",                                                                                          // 118
    "class": "modal"                                                                                                   // 119
  }, "\n        ", HTML.DIV({                                                                                          // 120
    "class": "modal-content"                                                                                           // 121
  }, "\n          ", HTML.Raw("<h4>Change Profile Picture</h4>"), "\n          ", Spacebars.include(view.lookupTemplate("upload")), "\n        "), "\n        ", HTML.Raw('<div class="modal-footer">\n          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>\n        </div>'), "\n      "), "\n\n      ", HTML.SPAN({
    "class": "black-text activator"                                                                                    // 123
  }, "\n        ", HTML.DIV({                                                                                          // 124
    "class": "details"                                                                                                 // 125
  }, "\n          ", HTML.H5({                                                                                         // 126
    "class": "bold"                                                                                                    // 127
  }, Blaze.View("lookup:name", function() {                                                                            // 128
    return Spacebars.mustache(view.lookup("name"));                                                                    // 129
  })), "\n          ", HTML.H6(Blaze.View("lookup:affiliation", function() {                                           // 130
    return Spacebars.mustache(view.lookup("affiliation"));                                                             // 131
  })), "\n\n          ", Blaze.If(function() {                                                                         // 132
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 133
  }, function() {                                                                                                      // 134
    return [ "\n          ", HTML.getTag("h10")(Blaze.View("lookup:formatBirthDate", function() {                      // 135
      return Spacebars.mustache(view.lookup("formatBirthDate"), Spacebars.dot(view.lookup("."), "birthDate"));         // 136
    })), " ", HTML.BR(), "\n          ", HTML.getTag("h10")(Blaze.View("lookup:phone", function() {                    // 137
      return Spacebars.mustache(view.lookup("phone"));                                                                 // 138
    })), " ", HTML.BR(), "\n          ", HTML.H4("Transactions"), "\n          ", Blaze._TemplateWith(function() {     // 139
      return {                                                                                                         // 140
        id: Spacebars.call("quickform1"),                                                                              // 141
        collection: Spacebars.call("Transactions"),                                                                    // 142
        type: Spacebars.call("insert")                                                                                 // 143
      };                                                                                                               // 144
    }, function() {                                                                                                    // 145
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                      // 146
    }), "\n          ", HTML.BR(), HTML.BR(), HTML.BR(), "\n          ", HTML.H4("Sessions"), "\n          ", Blaze._TemplateWith(function() {
      return {                                                                                                         // 148
        id: Spacebars.call("quickform3"),                                                                              // 149
        collection: Spacebars.call("Sessions"),                                                                        // 150
        type: Spacebars.call("insert")                                                                                 // 151
      };                                                                                                               // 152
    }, function() {                                                                                                    // 153
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                      // 154
    }), "\n          ", HTML.BR(), HTML.BR(), HTML.BR(), "\n\n", HTML.Comment('           <i class="material-icons right">mode_edit</i>\n          <br>\n>>>>>>> b8ceeb12260e5bbcece025c76bc23a4548473b5d '), "\n          " ];
  }), "\n        "), "\n        ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n        ", HTML.Raw('<i class="material-icons right">mode_edit</i>'), "\n      "), "\n    "), "\n\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 157
  }, function() {                                                                                                      // 158
    return [ "\n      ", HTML.DIV({                                                                                    // 159
      "class": "card-reveal grey lighten-5 z-depth-0"                                                                  // 160
    }, "\n        ", HTML.SPAN({                                                                                       // 161
      "class": "card-title grey-text text-darken-4"                                                                    // 162
    }, HTML.I({                                                                                                        // 163
      "class": "material-icons right"                                                                                  // 164
    }, "close")), "\n        ", Spacebars.include(view.lookupTemplate("upsertBasicProfileForm")), "\n      "), "\n    " ];
  }), "\n\n  ");                                                                                                       // 166
}));                                                                                                                   // 167
                                                                                                                       // 168
Template.__checkName("profileTemplate");                                                                               // 169
Template["profileTemplate"] = new Template("Template.profileTemplate", (function() {                                   // 170
  var view = this;                                                                                                     // 171
  return HTML.SECTION({                                                                                                // 172
    "class": "myprofile"                                                                                               // 173
  }, "\n        ", HTML.DIV({                                                                                          // 174
    "class": "card grey lighten-5 z-depth-0"                                                                           // 175
  }, "\n          ", HTML.DIV({                                                                                        // 176
    "class": "card-content"                                                                                            // 177
  }, "\n            ", HTML.SPAN({                                                                                     // 178
    "class": "black-text activator"                                                                                    // 179
  }, "\n              ", HTML.Raw('<h5>\n                <i id="align_text" class="medium material-icons">add_shopping_cart</i>\n                Instruments Mastered\n              </h5>'), HTML.Raw("<br>"), "\n                ", HTML.getTag("h10")("Instruments Mastered: ", Blaze.View("lookup:instrument", function() {
    return Spacebars.mustache(view.lookup("instrument"));                                                              // 181
  })), " ", HTML.Raw("<br>"), "\n              ", HTML.getTag("h10")("Years Played: ", Blaze.View("lookup:yearsPlayed", function() {
    return Spacebars.mustache(view.lookup("yearsPlayed"));                                                             // 183
  })), "\n\n               ", Blaze.If(function() {                                                                    // 184
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 185
  }, function() {                                                                                                      // 186
    return [ "\n                  ", HTML.I({                                                                          // 187
      "class": "material-icons right"                                                                                  // 188
    }, "mode_edit"), "\n                " ];                                                                           // 189
  }), "\n\n           "), "\n          "), "\n\n          ", Blaze.If(function() {                                     // 190
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 191
  }, function() {                                                                                                      // 192
    return [ "\n            ", HTML.DIV({                                                                              // 193
      "class": "card-reveal grey lighten-5 z-depth-0"                                                                  // 194
    }, "\n              ", HTML.SPAN({                                                                                 // 195
      "class": "card-title grey-text text-darken-4"                                                                    // 196
    }, HTML.I({                                                                                                        // 197
      "class": "material-icons right"                                                                                  // 198
    }, "close")), "\n              ", Spacebars.include(view.lookupTemplate("upsertInstrumentForm")), "\n            "), "\n          " ];
  }), "\n        "), "\n\n\n        ", HTML.DIV({                                                                      // 200
    "class": "card grey lighten-5 z-depth-0"                                                                           // 201
  }, "\n          ", HTML.DIV({                                                                                        // 202
    "class": "card-content"                                                                                            // 203
  }, "\n            ", HTML.SPAN({                                                                                     // 204
    "class": "black-text activator"                                                                                    // 205
  }, "\n            ", HTML.Raw('<h5>\n              <i id="align_text" class="medium material-icons">verified_user</i>\n              Honors &amp; Awards\n            </h5>'), "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("awards"));                                                                      // 207
  }, function() {                                                                                                      // 208
    return [ "\n              ", HTML.SPAN({                                                                           // 209
      "class": "right"                                                                                                 // 210
    }, Blaze.View("lookup:formatDate", function() {                                                                    // 211
      return Spacebars.mustache(view.lookup("formatDate"), Spacebars.dot(view.lookup("."), "date"));                   // 212
    })), "\n              ", HTML.P({                                                                                  // 213
      "class": "bold"                                                                                                  // 214
    }, Blaze.View("lookup:name", function() {                                                                          // 215
      return Spacebars.mustache(view.lookup("name"));                                                                  // 216
    })), "\n              ", Blaze.View("lookup:award", function() {                                                   // 217
      return Spacebars.mustache(view.lookup("award"));                                                                 // 218
    }), "\n              ", HTML.BR(), HTML.BR(), "\n            " ];                                                  // 219
  }), "\n\n            ", Blaze.If(function() {                                                                        // 220
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 221
  }, function() {                                                                                                      // 222
    return [ "\n              ", HTML.I({                                                                              // 223
      "class": "material-icons right"                                                                                  // 224
    }, "mode_edit"), "\n            " ];                                                                               // 225
  }), "\n            ", HTML.Raw("<br>"), "\n\n           "), "\n          "), "\n\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 227
  }, function() {                                                                                                      // 228
    return [ "\n            ", HTML.DIV({                                                                              // 229
      "class": "card-reveal grey lighten-5 z-depth-0"                                                                  // 230
    }, "\n              ", HTML.SPAN({                                                                                 // 231
      "class": "card-title grey-text text-darken-4"                                                                    // 232
    }, HTML.I({                                                                                                        // 233
      "class": "material-icons right"                                                                                  // 234
    }, "close")), "\n              ", Spacebars.include(view.lookupTemplate("upsertAwardsForm")), "\n            "), "\n          " ];
  }), "\n\n        "), "\n\n        ", HTML.DIV({                                                                      // 236
    "class": "card grey lighten-5 z-depth-0"                                                                           // 237
  }, "\n          ", HTML.DIV({                                                                                        // 238
    "class": "card-content"                                                                                            // 239
  }, "\n            ", HTML.SPAN({                                                                                     // 240
    "class": "black-text activator"                                                                                    // 241
  }, "\n            ", HTML.Raw('<h5>\n              <i id="align_text" class="medium material-icons">music_note</i>\n              Music Programs\n            </h5>'), "\n              ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("musicPrograms"));                                                               // 243
  }, function() {                                                                                                      // 244
    return [ "\n                ", HTML.SPAN({                                                                         // 245
      "class": "right"                                                                                                 // 246
    }, Blaze.View("lookup:formatDuration", function() {                                                                // 247
      return Spacebars.mustache(view.lookup("formatDuration"), Spacebars.dot(view.lookup("."), "startDate"), Spacebars.dot(view.lookup("."), "endDate"));
    })), "\n                ", Blaze.View("lookup:programName", function() {                                           // 249
      return Spacebars.mustache(view.lookup("programName"));                                                           // 250
    }), "\n                ", HTML.BR(), HTML.BR(), "\n              " ];                                              // 251
  }), "\n\n              ", Blaze.If(function() {                                                                      // 252
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 253
  }, function() {                                                                                                      // 254
    return [ "\n                ", HTML.I({                                                                            // 255
      "class": "material-icons right"                                                                                  // 256
    }, "mode_edit"), "\n              " ];                                                                             // 257
  }), "\n              ", HTML.Raw("<br>"), "\n\n           "), "\n          "), "\n\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 259
  }, function() {                                                                                                      // 260
    return [ "\n            ", HTML.DIV({                                                                              // 261
      "class": "card-reveal grey lighten-5 z-depth-0"                                                                  // 262
    }, "\n              ", HTML.SPAN({                                                                                 // 263
      "class": "card-title grey-text text-darken-4"                                                                    // 264
    }, HTML.I({                                                                                                        // 265
      "class": "material-icons right"                                                                                  // 266
    }, "close")), "\n              ", Spacebars.include(view.lookupTemplate("upsertProgramsForm")), "\n            "), "\n          " ];
  }), "\n\n        "), "\n\n        ", HTML.DIV({                                                                      // 268
    "class": "card grey lighten-5 z-depth-0"                                                                           // 269
  }, "\n          ", HTML.DIV({                                                                                        // 270
    "class": "card-content"                                                                                            // 271
  }, "\n            ", HTML.SPAN({                                                                                     // 272
    "class": "black-text activator"                                                                                    // 273
  }, "\n            ", HTML.Raw('<h5>\n              <i id="align_text" class="medium material-icons">group_work</i>\n              Orchestras Participated in\n            </h5>'), "\n              ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("orchestras"));                                                                  // 275
  }, function() {                                                                                                      // 276
    return [ "\n                ", HTML.SPAN({                                                                         // 277
      "class": "right"                                                                                                 // 278
    }, Blaze.View("lookup:formatDuration", function() {                                                                // 279
      return Spacebars.mustache(view.lookup("formatDuration"), Spacebars.dot(view.lookup("."), "startDate"), Spacebars.dot(view.lookup("."), "endDate"));
    })), "\n                ", HTML.P({                                                                                // 281
      "class": "bold"                                                                                                  // 282
    }, Blaze.View("lookup:name", function() {                                                                          // 283
      return Spacebars.mustache(view.lookup("name"));                                                                  // 284
    })), "\n                ", Blaze.View("lookup:position", function() {                                              // 285
      return Spacebars.mustache(view.lookup("position"));                                                              // 286
    }), "\n                ", HTML.BR(), HTML.BR(), "\n              " ];                                              // 287
  }), "\n\n            ", Blaze.If(function() {                                                                        // 288
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 289
  }, function() {                                                                                                      // 290
    return [ "\n              ", HTML.I({                                                                              // 291
      "class": "material-icons right"                                                                                  // 292
    }, "mode_edit"), "\n            " ];                                                                               // 293
  }), "\n            ", HTML.Raw("<br>"), "\n\n           "), "\n          "), "\n\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isOwnProfile"));                                                                // 295
  }, function() {                                                                                                      // 296
    return [ "\n            ", HTML.DIV({                                                                              // 297
      "class": "card-reveal grey lighten-5 z-depth-0"                                                                  // 298
    }, "\n              ", HTML.SPAN({                                                                                 // 299
      "class": "card-title grey-text text-darken-4"                                                                    // 300
    }, HTML.I({                                                                                                        // 301
      "class": "material-icons right"                                                                                  // 302
    }, "close")), "\n              ", Spacebars.include(view.lookupTemplate("upsertOrchestraForm")), "\n            "), "\n          " ];
  }), "\n        "), "\n\n  ");                                                                                        // 304
}));                                                                                                                   // 305
                                                                                                                       // 306
Template.__checkName("accompanistProfileTemplate");                                                                    // 307
Template["accompanistProfileTemplate"] = new Template("Template.accompanistProfileTemplate", (function() {             // 308
  var view = this;                                                                                                     // 309
  return HTML.DIV({                                                                                                    // 310
    "class": "card grey lighten-5 z-depth-0"                                                                           // 311
  }, "\n    ", HTML.DIV({                                                                                              // 312
    "class": "card-content"                                                                                            // 313
  }, "\n      ", HTML.SPAN({                                                                                           // 314
    "class": "black-text activator"                                                                                    // 315
  }, "\n        ", HTML.Raw("<!--\n        <h5>Repertoire: </h5>\n        {{#each repertoire}}\n          {{this}}<br>\n        {{/each}}\n           <hr> -->"), "\n        ", HTML.DIV({
    "class": "accopmCard-left"                                                                                         // 317
  }, "\n          ", HTML.getTag("h10")("\n            ", HTML.I({                                                     // 318
    id: "align_text",                                                                                                  // 319
    "class": "small material-icons"                                                                                    // 320
  }, "attach_money"), "\n            ", Blaze.View("lookup:charge", function() {                                       // 321
    return Spacebars.mustache(view.lookup("charge"));                                                                  // 322
  }), "/hr\n          "), "\n          ", HTML.Raw("<br>"), "\n          ", HTML.getTag("h10")("\n              ", HTML.I({
    id: "align_text",                                                                                                  // 324
    "class": "small material-icons"                                                                                    // 325
  }, "access_time"), "\n              ", Blaze.Each(function() {                                                       // 326
    return Spacebars.call(view.lookup("working_hours"));                                                               // 327
  }, function() {                                                                                                      // 328
    return [ Blaze.View("lookup:.", function() {                                                                       // 329
      return Spacebars.mustache(view.lookup("."));                                                                     // 330
    }), "/" ];                                                                                                         // 331
  }), "\n          "), "\n        "), "\n        ", HTML.DIV({                                                         // 332
    "class": "accopmCard-right"                                                                                        // 333
  }, "\n          ", HTML.getTag("h10")("\n            ", HTML.I({                                                     // 334
    id: "align_text",                                                                                                  // 335
    "class": "small material-icons"                                                                                    // 336
  }, "event"), "\n            ", Blaze.Each(function() {                                                               // 337
    return Spacebars.call(view.lookup("working_days"));                                                                // 338
  }, function() {                                                                                                      // 339
    return [ Blaze.View("lookup:formatDay", function() {                                                               // 340
      return Spacebars.mustache(view.lookup("formatDay"), view.lookup("."));                                           // 341
    }), "/" ];                                                                                                         // 342
  }), "\n          "), "\n          ", HTML.Raw("<br>"), "\n          ", HTML.getTag("h10")("\n            ", HTML.I({
    id: "align_text",                                                                                                  // 344
    "class": "small material-icons"                                                                                    // 345
  }, "location_on"), "\n            ", Blaze.View("lookup:mylocation", function() {                                    // 346
    return Spacebars.mustache(view.lookup("mylocation"));                                                              // 347
  }), "\n          "), "\n          ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n        "), "\n        ", HTML.P({       // 348
    "class": "center_horizontal"                                                                                       // 349
  }, Blaze.View("lookup:one_liner", function() {                                                                       // 350
    return Spacebars.mustache(view.lookup("one_liner"));                                                               // 351
  })), "\n      "), "\n    "), "\n  ");                                                                                // 352
}));                                                                                                                   // 353
                                                                                                                       // 354
Template.__checkName("upsertInstrumentForm");                                                                          // 355
Template["upsertInstrumentForm"] = new Template("Template.upsertInstrumentForm", (function() {                         // 356
  var view = this;                                                                                                     // 357
  return Blaze.If(function() {                                                                                         // 358
    return Spacebars.dataMustache(view.lookup("isInRole"), "makeMusicProfile");                                        // 359
  }, function() {                                                                                                      // 360
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 361
      return {                                                                                                         // 362
        collection: Spacebars.call("MusicProfiles"),                                                                   // 363
        doc: Spacebars.call(view.lookup("currentProfile")),                                                            // 364
        id: Spacebars.call("upsertInstraForm"),                                                                        // 365
        type: Spacebars.call(view.lookup("formType"))                                                                  // 366
      };                                                                                                               // 367
    }, function() {                                                                                                    // 368
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                           // 369
        return [ "\n      ", HTML.FIELDSET("\n        ", Blaze._TemplateWith(function() {                              // 370
          return {                                                                                                     // 371
            name: Spacebars.call("instrument"),                                                                        // 372
            type: Spacebars.call("selectize"),                                                                         // 373
            options: Spacebars.call(view.lookup("instrumentList"))                                                     // 374
          };                                                                                                           // 375
        }, function() {                                                                                                // 376
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                               // 377
        }), "\n        ", Blaze._TemplateWith(function() {                                                             // 378
          return {                                                                                                     // 379
            name: Spacebars.call("yearsPlayed")                                                                        // 380
          };                                                                                                           // 381
        }, function() {                                                                                                // 382
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                               // 383
        }), "\n      "), "\n      ", HTML.BR(), "\n    ", HTML.BUTTON({                                                // 384
          type: "submit",                                                                                              // 385
          "class": "btn btn-primary"                                                                                   // 386
        }, "Save"), "\n    " ];                                                                                        // 387
      });                                                                                                              // 388
    }), "\n  " ];                                                                                                      // 389
  });                                                                                                                  // 390
}));                                                                                                                   // 391
                                                                                                                       // 392
Template.__checkName("upsertAwardsForm");                                                                              // 393
Template["upsertAwardsForm"] = new Template("Template.upsertAwardsForm", (function() {                                 // 394
  var view = this;                                                                                                     // 395
  return Blaze.If(function() {                                                                                         // 396
    return Spacebars.dataMustache(view.lookup("isInRole"), "makeMusicProfile");                                        // 397
  }, function() {                                                                                                      // 398
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 399
      return {                                                                                                         // 400
        collection: Spacebars.call("MusicProfiles"),                                                                   // 401
        doc: Spacebars.call(view.lookup("currentProfile")),                                                            // 402
        id: Spacebars.call("upsertAwardsForm"),                                                                        // 403
        type: Spacebars.call(view.lookup("formType"))                                                                  // 404
      };                                                                                                               // 405
    }, function() {                                                                                                    // 406
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                           // 407
        return [ "\n      ", HTML.FIELDSET("\n        ", Blaze._TemplateWith(function() {                              // 408
          return {                                                                                                     // 409
            name: Spacebars.call("awards")                                                                             // 410
          };                                                                                                           // 411
        }, function() {                                                                                                // 412
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                               // 413
        }), "\n      "), "\n      ", HTML.BR(), "\n    ", HTML.BUTTON({                                                // 414
          type: "submit",                                                                                              // 415
          "class": "btn btn-primary"                                                                                   // 416
        }, "Save"), "\n    " ];                                                                                        // 417
      });                                                                                                              // 418
    }), "\n  " ];                                                                                                      // 419
  });                                                                                                                  // 420
}));                                                                                                                   // 421
                                                                                                                       // 422
Template.__checkName("upsertProgramsForm");                                                                            // 423
Template["upsertProgramsForm"] = new Template("Template.upsertProgramsForm", (function() {                             // 424
  var view = this;                                                                                                     // 425
  return Blaze.If(function() {                                                                                         // 426
    return Spacebars.dataMustache(view.lookup("isInRole"), "makeMusicProfile");                                        // 427
  }, function() {                                                                                                      // 428
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 429
      return {                                                                                                         // 430
        collection: Spacebars.call("MusicProfiles"),                                                                   // 431
        doc: Spacebars.call(view.lookup("currentProfile")),                                                            // 432
        id: Spacebars.call("upsertProgramsForm"),                                                                      // 433
        type: Spacebars.call(view.lookup("formType"))                                                                  // 434
      };                                                                                                               // 435
    }, function() {                                                                                                    // 436
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                           // 437
        return [ "\n      ", HTML.FIELDSET("\n        ", Blaze._TemplateWith(function() {                              // 438
          return {                                                                                                     // 439
            name: Spacebars.call("musicPrograms")                                                                      // 440
          };                                                                                                           // 441
        }, function() {                                                                                                // 442
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                               // 443
        }), "\n      "), "\n      ", HTML.BR(), "\n    ", HTML.BUTTON({                                                // 444
          type: "submit",                                                                                              // 445
          "class": "btn btn-primary"                                                                                   // 446
        }, "Save"), "\n    " ];                                                                                        // 447
      });                                                                                                              // 448
    }), "\n  " ];                                                                                                      // 449
  });                                                                                                                  // 450
}));                                                                                                                   // 451
                                                                                                                       // 452
Template.__checkName("upsertOrchestraForm");                                                                           // 453
Template["upsertOrchestraForm"] = new Template("Template.upsertOrchestraForm", (function() {                           // 454
  var view = this;                                                                                                     // 455
  return Blaze.If(function() {                                                                                         // 456
    return Spacebars.dataMustache(view.lookup("isInRole"), "makeMusicProfile");                                        // 457
  }, function() {                                                                                                      // 458
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 459
      return {                                                                                                         // 460
        collection: Spacebars.call("MusicProfiles"),                                                                   // 461
        doc: Spacebars.call(view.lookup("currentProfile")),                                                            // 462
        id: Spacebars.call("upsertOrchestraForm"),                                                                     // 463
        type: Spacebars.call(view.lookup("formType"))                                                                  // 464
      };                                                                                                               // 465
    }, function() {                                                                                                    // 466
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                           // 467
        return [ "\n      ", HTML.FIELDSET("\n        ", Blaze._TemplateWith(function() {                              // 468
          return {                                                                                                     // 469
            name: Spacebars.call("orchestras")                                                                         // 470
          };                                                                                                           // 471
        }, function() {                                                                                                // 472
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                               // 473
        }), "\n      "), "\n      ", HTML.BR(), "\n    ", HTML.BUTTON({                                                // 474
          type: "submit",                                                                                              // 475
          "class": "btn btn-primary"                                                                                   // 476
        }, "{Save"), "\n    " ];                                                                                       // 477
      });                                                                                                              // 478
    }), "\n  " ];                                                                                                      // 479
  });                                                                                                                  // 480
}));                                                                                                                   // 481
                                                                                                                       // 482
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ResultsLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.ResultsLayout.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ResultsLayout");                                                                                 // 2
Template["ResultsLayout"] = new Template("Template.ResultsLayout", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw("<header>\n        <h1> Search Results </h1>\n    </header>\n    "), HTML.MAIN("\n		", Spacebars.include(view.lookupTemplate("advancedSearch")), "\n		", Spacebars.include(view.lookupTemplate("results")), "\n    ") ];
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("results");                                                                                       // 8
Template["results"] = new Template("Template.results", (function() {                                                   // 9
  var view = this;                                                                                                     // 10
  return Blaze.Each(function() {                                                                                       // 11
    return Spacebars.call(view.lookup("accompanists"));                                                                // 12
  }, function() {                                                                                                      // 13
    return [ "\n\n		", HTML.H5("Name: ", Blaze.View("lookup:accompname.name", function() {                             // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("accompname"), "name"));                                     // 15
    })), "\n		", HTML.H5("Affiliation: ", Blaze.View("lookup:accompname.affiliation", function() {                     // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("accompname"), "affiliation"));                              // 17
    })), "\n		\n		", HTML.H5("Session Location: ", Blaze.View("lookup:mylocation", function() {                        // 18
      return Spacebars.mustache(view.lookup("mylocation"));                                                            // 19
    })), "\n		", HTML.H5("Charge: $", Blaze.View("lookup:charge", function() {                                         // 20
      return Spacebars.mustache(view.lookup("charge"));                                                                // 21
    }), "/Hour"), "\n		", HTML.H5("Session Time Pref: ", Blaze.View("lookup:working_hours", function() {               // 22
      return Spacebars.mustache(view.lookup("working_hours"));                                                         // 23
    })), "\n		", HTML.H5("Working Days: ", Blaze.View("lookup:working_days", function() {                              // 24
      return Spacebars.mustache(view.lookup("working_days"));                                                          // 25
    })), "\n		", HTML.H5("About: ", Blaze.View("lookup:one_liner", function() {                                        // 26
      return Spacebars.mustache(view.lookup("one_liner"));                                                             // 27
    })), "\n		", HTML.A({                                                                                              // 28
      href: function() {                                                                                               // 29
        return Spacebars.mustache(view.lookup("getProfileRoute"), view.lookup("Id"));                                  // 30
      }                                                                                                                // 31
    }, "View Profile"), "\n		", HTML.HR(), "\n	" ];                                                                    // 32
  });                                                                                                                  // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
Template.__checkName("advancedSearch");                                                                                // 36
Template["advancedSearch"] = new Template("Template.advancedSearch", (function() {                                     // 37
  var view = this;                                                                                                     // 38
  return HTML.DIV({                                                                                                    // 39
    "class": "container"                                                                                               // 40
  }, "\n		", HTML.DIV({                                                                                                // 41
    "class": "row"                                                                                                     // 42
  }, "\n	        ", HTML.DIV({                                                                                         // 43
    "class": "span12"                                                                                                  // 44
  }, "\n	            ", HTML.getTag("h8")("Advanced Search"), "\n	            ", HTML.Raw('<form id="searchform">\n	            	<!-- make it auto complete city for user -->\n  					<input name="address" class="autocomplete" id="autocomplete" placeholder="Session location" type="text">\n	               <!-- add 30min drive raduis button -->\n	                <input name="start_date" class="span5" type="date" placeholder="First day of session">\n\n	               	<input name="end_date" class="span5" type="date" placeholder="Event day">\n\n	                <button type="submit" class="btn btn-primary"> Search</button>\n	            </form>'), "\n	        "), "\n	    "), "\n	");
}));                                                                                                                   // 46
                                                                                                                       // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.TestLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.TestLayout.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("TestLayout");                                                                                    // 2
Template["TestLayout"] = new Template("Template.TestLayout", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<header>\n        <link rel="stylesheet" href="../style.css">\n        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n      </header>\n\n\n      '), HTML.MAIN("\n\n        ", Spacebars.include(view.lookupTemplate("upload")), "\n        ", HTML.Raw('<div class="container">\n\n\n\n        </div>'), "\n      ") ];
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("upload");                                                                                        // 8
Template["upload"] = new Template("Template.upload", (function() {                                                     // 9
  var view = this;                                                                                                     // 10
  return [ HTML.Raw('<h4 class="page-header">Upload a File to Amazon S3</h4>\n  '), Spacebars.include(view.lookupTemplate("uploader")), "\n  ", Spacebars.include(view.lookupTemplate("files")) ];
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("files");                                                                                         // 14
Template["files"] = new Template("Template.files", (function() {                                                       // 15
  var view = this;                                                                                                     // 16
  return HTML.DIV({                                                                                                    // 17
    "class": "files"                                                                                                   // 18
  }, "\n    ", Blaze.Each(function() {                                                                                 // 19
    return Spacebars.call(view.lookup("files"));                                                                       // 20
  }, function() {                                                                                                      // 21
    return [ "\n      ", Spacebars.include(view.lookupTemplate("file")), "\n    " ];                                   // 22
  }, function() {                                                                                                      // 23
    return [ "\n      ", HTML.P({                                                                                      // 24
      "class": "alert alert-warning"                                                                                   // 25
    }, "No files uploaded yet!"), "\n    " ];                                                                          // 26
  }), "\n  ");                                                                                                         // 27
}));                                                                                                                   // 28
                                                                                                                       // 29
Template.__checkName("file");                                                                                          // 30
Template["file"] = new Template("Template.file", (function() {                                                         // 31
  var view = this;                                                                                                     // 32
  return HTML.DIV({                                                                                                    // 33
    "class": "file"                                                                                                    // 34
  }, "\n    ", HTML.DIV({                                                                                              // 35
    "class": "preview"                                                                                                 // 36
  }, "\n      ", HTML.A({                                                                                              // 37
    href: function() {                                                                                                 // 38
      return Spacebars.mustache(view.lookup("url"));                                                                   // 39
    },                                                                                                                 // 40
    target: "_blank"                                                                                                   // 41
  }), "\n      ", Blaze.If(function() {                                                                                // 42
    return Spacebars.dataMustache(view.lookup("isImage"), view.lookup("url"));                                         // 43
  }, function() {                                                                                                      // 44
    return [ "\n        ", HTML.IMG({                                                                                  // 45
      src: function() {                                                                                                // 46
        return Spacebars.mustache(view.lookup("url"));                                                                 // 47
      },                                                                                                               // 48
      alt: function() {                                                                                                // 49
        return Spacebars.mustache(view.lookup("url"));                                                                 // 50
      },                                                                                                               // 51
      height: "100px"                                                                                                  // 52
    }), "\n      " ];                                                                                                  // 53
  }, function() {                                                                                                      // 54
    return [ "\n        ", HTML.I({                                                                                    // 55
      "class": "fa fa-file-o"                                                                                          // 56
    }), "\n      " ];                                                                                                  // 57
  }), "\n    "), "\n    ", HTML.DIV({                                                                                  // 58
    "class": "delete"                                                                                                  // 59
  }, "\n      ", HTML.BUTTON({                                                                                         // 60
    "class": "delete_button",                                                                                          // 61
    value: function() {                                                                                                // 62
      return Spacebars.mustache(view.lookup("_id"));                                                                   // 63
    }                                                                                                                  // 64
  }, "Delete"), "\n    "), "\n    ", HTML.INPUT({                                                                      // 65
    type: "text",                                                                                                      // 66
    "class": "form-control",                                                                                           // 67
    value: function() {                                                                                                // 68
      return Spacebars.mustache(view.lookup("url"));                                                                   // 69
    }                                                                                                                  // 70
  }), "\n  ");                                                                                                         // 71
}));                                                                                                                   // 72
                                                                                                                       // 73
Template.__checkName("uploader");                                                                                      // 74
Template["uploader"] = new Template("Template.uploader", (function() {                                                 // 75
  var view = this;                                                                                                     // 76
  return HTML.Raw('<div class="container">\n    <p class="alert alert-success text-center">\n      <span>Click or Drag a File Here to Upload</span>\n    </p>\n    <form action="#">\n      <div class="file-field input-field">\n        <div class="btn">\n          <span>File</span>\n          <input type="file">\n        </div>\n        <div class="file-path-wrapper">\n          <input class="file-path validate" type="text">\n        </div>\n      </div>\n    </form>\n  </div>');
}));                                                                                                                   // 78
                                                                                                                       // 79
Template.__checkName("tester");                                                                                        // 80
Template["tester"] = new Template("Template.tester", (function() {                                                     // 81
  var view = this;                                                                                                     // 82
  return HTML.Raw('<div class="row">\n    <div class="col s12 m6">\n      <div class="card blue-grey darken-1">\n        <div class="row">\n          <div class="card-content white-text valign-wrapper">\n            <div class="col s2">\n              <a href="#!" class="valign">Account     </a>\n            </div>\n            <div class="col s10">\n            <img src="https://avatars1.githubusercontent.com/u/49341?v=3&amp;s=40" alt="" class="circle valign responsive-img">\n            </div>\n\n\n          </div>\n          <div class="card-action">\n            <a href="#">This is a link</a>\n            <a href="#">This is a link</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>');
}));                                                                                                                   // 84
                                                                                                                       // 85
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"googlePlaces.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/googlePlaces.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
GoogleMaps.init({                                                                                                      // 1
  'sensor': false,                                                                                                     // 2
  'key': 'AIzaSyBborL-F_GWmjbUgtTw2P1QwPHYrDJIaCo', //optional                                                         // 3
  'language': 'en', //optional                                                                                         // 4
  'libraries': 'places'                                                                                                // 5
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"modules":{"_modules.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/modules/_modules.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Modules.client = {};                                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"upload-to-amazon-s3.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/modules/upload-to-amazon-s3.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var template = void 0;                                                                                                 // 1
                                                                                                                       //
var _getFileFromInput = function _getFileFromInput(event) {                                                            // 3
  return event.target.files[0];                                                                                        // 3
};                                                                                                                     // 3
                                                                                                                       //
var _setPlaceholderText = function _setPlaceholderText() {                                                             // 5
  var string = arguments.length <= 0 || arguments[0] === undefined ? "Click or Drag a File Here to Upload" : arguments[0];
                                                                                                                       //
  template.find(".alert span").innerText = string;                                                                     // 6
};                                                                                                                     // 7
                                                                                                                       //
var _addUrlToDatabase = function _addUrlToDatabase(url, type) {                                                        // 9
  Meteor.call("storeUrlInDatabase", url, type, function (error) {                                                      // 10
    if (error) {                                                                                                       // 11
      Bert.alert(error.reason, "warning");                                                                             // 12
      _setPlaceholderText();                                                                                           // 13
    } else {                                                                                                           // 14
      Bert.alert("File uploaded to Amazon S3!", "success");                                                            // 15
      _setPlaceholderText();                                                                                           // 16
    }                                                                                                                  // 17
  });                                                                                                                  // 18
};                                                                                                                     // 19
                                                                                                                       //
var _uploadFileToAmazon = function _uploadFileToAmazon(file, type) {                                                   // 22
  var uploader = new Slingshot.Upload("uploadToAmazonS3");                                                             // 23
                                                                                                                       //
  uploader.send(file, function (error, url) {                                                                          // 25
    if (error) {                                                                                                       // 26
      Bert.alert(error.message, "warning");                                                                            // 27
      _setPlaceholderText();                                                                                           // 28
    } else {                                                                                                           // 29
      _addUrlToDatabase(url, type);                                                                                    // 30
    }                                                                                                                  // 31
  });                                                                                                                  // 32
};                                                                                                                     // 33
                                                                                                                       //
var upload = function upload(options) {                                                                                // 35
  template = options.template;                                                                                         // 36
  var file = _getFileFromInput(options.event);                                                                         // 37
                                                                                                                       //
  _setPlaceholderText("Uploading " + file.name + "...");                                                               // 39
  _uploadFileToAmazon(file, options.type);                                                                             // 40
};                                                                                                                     // 41
                                                                                                                       //
Modules.client.uploadToAmazonS3 = upload;                                                                              // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":["../collections/musicProfiles.js","../collections/accompanistProfiles.js","../collections/basicProfiles.js","../collections/competitions.js","../collections/transactions.js","../collections/testData.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var MusicProfiles;module.import('../collections/musicProfiles.js',{"MusicProfiles":function(v){MusicProfiles=v}});var AccompanistProfiles;module.import('../collections/accompanistProfiles.js',{"AccompanistProfiles":function(v){AccompanistProfiles=v}});var BasicProfiles;module.import('../collections/basicProfiles.js',{"BasicProfiles":function(v){BasicProfiles=v}});var MusicCompetitions;module.import('../collections/competitions.js',{"MusicCompetitions":function(v){MusicCompetitions=v}});var Transactions;module.import('../collections/transactions.js',{"Transactions":function(v){Transactions=v}});var TestAccountData;module.import('../collections/testData.js',{"TestAccountData":function(v){TestAccountData=v}});
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       // 5
                                                                                                                       //
                                                                                                                       // 7
                                                                                                                       //
window.MusicProfiles = MusicProfiles;                                                                                  // 9
window.AccompanistProfiles = AccompanistProfiles;                                                                      // 10
window.BasicProfiles = BasicProfiles;                                                                                  // 11
window.MusicCompetitions = MusicCompetitions;                                                                          // 12
window.Transactions = Transactions;                                                                                    // 13
                                                                                                                       //
// Template Inheritance                                                                                                //
                                                                                                                       //
// Autoform Settings                                                                                                   //
                                                                                                                       //
AutoForm.setDefaultTemplate('materialize');                                                                            // 20
                                                                                                                       //
// Accounts                                                                                                            //
                                                                                                                       //
AccountsTemplates.configure({                                                                                          // 24
  defaultLayoutType: 'blaze', // Optional, the default is 'blaze'                                                      // 25
  defaultLayout: 'MainLayout',                                                                                         // 26
  defaultLayoutRegions: {                                                                                              // 27
    nav: 'Navbar'                                                                                                      // 28
  },                                                                                                                   // 27
  defaultContentRegion: 'main',                                                                                        // 30
                                                                                                                       //
  onSubmitHook: function () {                                                                                          // 32
    function onSubmitHook(error, state) {                                                                              // 32
      if (!error) {                                                                                                    // 33
        if (state === "signIn") {                                                                                      // 34
          $('#signUp').closeModal();                                                                                   // 35
          $('#login').closeModal();                                                                                    // 36
        }                                                                                                              // 37
        if (state === "signUp") {                                                                                      // 38
          $('#signUp').closeModal();                                                                                   // 39
          $('#login').closeModal();                                                                                    // 40
        }                                                                                                              // 41
      }                                                                                                                // 42
    }                                                                                                                  // 43
                                                                                                                       //
    return onSubmitHook;                                                                                               // 32
  }()                                                                                                                  // 32
});                                                                                                                    // 24
                                                                                                                       //
AccountsTemplates.configureRoute('signIn');                                                                            // 46
AccountsTemplates.configureRoute('signUp');                                                                            // 47
                                                                                                                       //
// Javascript Component Initialization                                                                                 //
                                                                                                                       //
Template.Navbar.onRendered(function () {                                                                               // 51
  $(document).ready(function () {                                                                                      // 52
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered                     //
    $(".dropdown-button").dropdown();                                                                                  // 54
  });                                                                                                                  // 55
});                                                                                                                    // 56
                                                                                                                       //
// Template.upsertBasicProfileForm.onRendered(function () {                                                            //
                                                                                                                       //
//   // Materialize date picker desing                                                                                 //
//   $('.datepicker').pickadate({                                                                                      //
//     selectMonths: true, // Creates a dropdown to control month                                                      //
//     selectYears: 15 // Creates a dropdown of 15 years to control year                                               //
//   });                                                                                                               //
// });                                                                                                                 //
                                                                                                                       //
Template.navbarAccount.onRendered(function () {                                                                        // 68
  $(document).ready(function () {                                                                                      // 69
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered                     //
    $(".dropdown-button").dropdown({                                                                                   // 71
      inDuration: 300,                                                                                                 // 72
      outDuration: 225,                                                                                                // 73
      constrain_width: true, // Does not change width of dropdown to that of the activator                             // 74
      hover: true, // Activate on click                                                                                // 75
      alignment: "right", // Aligns dropdown to left or right edge (works with constrain_width)                        // 76
      gutter: 0, // Spacing from edge                                                                                  // 77
      belowOrigin: true                                                                                                // 78
    });                                                                                                                // 71
  });                                                                                                                  // 80
});                                                                                                                    // 81
                                                                                                                       //
Template.modalLogin.onRendered(function () {                                                                           // 83
  $(document).ready(function () {                                                                                      // 84
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered                     //
    $('.modal-trigger').leanModal();                                                                                   // 86
  });                                                                                                                  // 87
});                                                                                                                    // 88
                                                                                                                       //
Template.modalSignUp.onRendered(function () {                                                                          // 90
  $(document).ready(function () {                                                                                      // 91
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered                     //
    $('.modal-trigger').leanModal();                                                                                   // 93
  });                                                                                                                  // 94
});                                                                                                                    // 95
                                                                                                                       //
Template.ProfileLayout.onRendered(function () {                                                                        // 97
  $(document).ready(function () {                                                                                      // 98
    $('.materialboxed').materialbox();                                                                                 // 99
  });                                                                                                                  // 100
});                                                                                                                    // 101
                                                                                                                       //
Template.CollapsibleStructure.onRendered(function () {                                                                 // 103
  $('.collapsible').collapsible({                                                                                      // 104
    accordion: false                                                                                                   // 105
  });                                                                                                                  // 104
});                                                                                                                    // 107
                                                                                                                       //
Template.TabStructure.onRendered(function () {                                                                         // 109
  $('ul.tabs').tabs();                                                                                                 // 110
});                                                                                                                    // 111
                                                                                                                       //
Template.NewAccompLayout.onRendered(function () {                                                                      // 113
  // Initialize collapse button                                                                                        //
  $(".button-collapse").sideNav();                                                                                     // 115
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)                               //
  //$('.collapsible').collapsible();                                                                                   //
});                                                                                                                    // 118
                                                                                                                       //
Template.ProfileLayout.onRendered(function () {                                                                        // 120
  // parallax                                                                                                          //
  $(".parallax").parallax();                                                                                           // 122
                                                                                                                       //
  // resize card with card-reveal                                                                                      //
  $(document).ready(function () {                                                                                      // 125
    $(document).on('click.card', '.card', function (e) {                                                               // 126
      if ($(this).find('> .card-reveal').length) {                                                                     // 127
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {        // 128
          // Make Reveal animate down and display none                                                                 //
          $(this).find('.card-reveal').velocity({ translateY: 0 }, {                                                   // 130
            duration: 225,                                                                                             // 132
            queue: false,                                                                                              // 133
            easing: 'easeInOutQuad',                                                                                   // 134
            complete: function () {                                                                                    // 135
              function complete() {                                                                                    // 135
                $(this).css({ display: 'none' });                                                                      // 135
              }                                                                                                        // 135
                                                                                                                       //
              return complete;                                                                                         // 135
            }()                                                                                                        // 135
          });                                                                                                          // 131
          $(this).velocity({ height: $(this).data('height') }, { duration: 225 });                                     // 138
        } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {                 // 139
          $(e.target).closest('.card').css('overflow', 'hidden');                                                      // 142
          $(this).data('height', $(this).css('height')).find('.card-reveal').css({ display: 'block', height: 'auto' }).velocity("stop", false).velocity({ translateY: '-100%' }, { duration: 300, queue: false, easing: 'easeInOutQuad' });
          $(this).velocity({ height: $(this).find('.card-reveal').height() + 40 }, { duration: 300 });                 // 144
        }                                                                                                              // 145
      }                                                                                                                // 146
      $('.card-reveal').closest('.card').css('overflow', 'hidden');                                                    // 147
    });                                                                                                                // 148
  });                                                                                                                  // 149
});                                                                                                                    // 150
                                                                                                                       //
Template.search.onRendered(function () {                                                                               // 152
  // Enter acts as tabs till time to submit form                                                                       //
  $(document).ready(function () {                                                                                      // 154
    $('#searchform input').keydown(function (e) {                                                                      // 155
      if (e.keyCode == 13) {                                                                                           // 156
        if ($(':input:eq(' + ($(':input').index(this) + 1) + ')').attr('type') == 'submit') {                          // 157
          return true;                                                                                                 // 158
        }                                                                                                              // 159
        $(':input:eq(' + ($(':input').index(this) + 1) + ')').focus();                                                 // 160
        return false;                                                                                                  // 161
      }                                                                                                                // 162
    });                                                                                                                // 163
  });                                                                                                                  // 164
                                                                                                                       //
  // Materialize date picker desing                                                                                    //
  $('.datepicker').pickadate({                                                                                         // 167
    selectMonths: true, // Creates a dropdown to control month                                                         // 168
    selectYears: 15 // Creates a dropdown of 15 years to control year                                                  // 169
  });                                                                                                                  // 167
});                                                                                                                    // 171
                                                                                                                       //
// On creation                                                                                                         //
                                                                                                                       //
// ==Global Template Helpers==                                                                                         //
                                                                                                                       //
Template.registerHelper('navbarFields', function () {                                                                  // 180
  // Logged In                                                                                                         //
  if (Meteor.user()) {                                                                                                 // 182
    // Accompanist                                                                                                     //
    if (Roles.userIsInRole(Meteor.userId(), 'accompanist')) {                                                          // 184
      console.log("Navbar Config 1");                                                                                  // 185
      return ['accompanistDashboard', 'bookings', 'navbarAccount'];                                                    // 186
    }                                                                                                                  // 187
    // Not Accompanist                                                                                                 //
    return ['becomeAnAccompanist', 'bookings', 'navbarAccount'];                                                       // 189
    // Not Logged In                                                                                                   //
  } else {                                                                                                             // 191
      return ['becomeAnAccompanist', 'modalSignUp', 'modalLogin'];                                                     // 192
    }                                                                                                                  // 193
});                                                                                                                    // 194
                                                                                                                       //
// Get Current User's Account                                                                                          //
Template.registerHelper('myBasicProfile', function () {                                                                // 197
  return BasicProfiles.findOne({ userId: Meteor.userId() });                                                           // 198
});                                                                                                                    // 199
                                                                                                                       //
// Get Current User's Music Profile                                                                                    //
Template.registerHelper('myMusicProfile', function () {                                                                // 202
  return MusicProfiles.findOne({ userId: Meteor.userId() });                                                           // 203
});                                                                                                                    // 204
                                                                                                                       //
// Get Current Route's Accompanist Profile                                                                             //
Template.registerHelper('myAccompanistProfile', function () {                                                          // 207
  return AccompanistProfiles.findOne({ Id: Meteor.userId() });                                                         // 208
});                                                                                                                    // 209
                                                                                                                       //
Template.registerHelper('routeBasicProfile', function () {                                                             // 211
  return BasicProfiles.findOne({ userId: FlowRouter.getParam("profileId") });                                          // 212
});                                                                                                                    // 213
                                                                                                                       //
// Get Current Route's Music Profile                                                                                   //
Template.registerHelper('routeMusicProfile', function () {                                                             // 216
  return MusicProfiles.findOne({ userId: FlowRouter.getParam("profileId") });                                          // 217
});                                                                                                                    // 218
                                                                                                                       //
// Get Current Route's Accompanist Profile                                                                             //
Template.registerHelper('routeAccompanistProfile', function () {                                                       // 221
  return AccompanistProfiles.findOne({ Id: FlowRouter.getParam("profileId") });                                        // 222
});                                                                                                                    // 223
                                                                                                                       //
Template.registerHelper('sentBookingRequests', function () {                                                           // 225
  return Transactions.find({ musician: Meteor.userId() }).fetch();                                                     // 226
});                                                                                                                    // 227
                                                                                                                       //
Template.registerHelper('receivedBookingRequests', function (arg) {                                                    // 229
  var splitRequests = { pending: [], ongoing: [], completed: [], cancelled: [] };                                      // 230
  Transactions.find({ accompanist: Meteor.userId() }).forEach(function (doc) {                                         // 231
    if (doc.status == "Pending") {                                                                                     // 232
      splitRequests.pending.push(doc);                                                                                 // 233
    } else if (doc.status == "Ongoing") {                                                                              // 234
      splitRequests.ongoing.push(doc);                                                                                 // 235
    } else if (doc.status == "Completed") {                                                                            // 236
      splitRequests.completed.push(doc);                                                                               // 237
    } else {                                                                                                           // 238
      splitRequests.cancelled.push(doc);                                                                               // 239
    }                                                                                                                  // 240
  });                                                                                                                  // 241
  return splitRequests;                                                                                                // 242
});                                                                                                                    // 243
                                                                                                                       //
Template.registerHelper('formatDate', function (date) {                                                                // 245
  return moment(date).format('MMM DD, YYYY');                                                                          // 246
});                                                                                                                    // 247
                                                                                                                       //
Template.registerHelper('formatBirthDate', function (date) {                                                           // 249
  return moment(date).format('MMM, YYYY');                                                                             // 250
});                                                                                                                    // 251
                                                                                                                       //
// Slice day string and capitalize it's first letter                                                                   //
// All fixed in schema, only need the slicing functionality                                                            //
Template.registerHelper('formatDay', function (day) {                                                                  // 255
  var Day = day.substr(0, 3);                                                                                          // 256
  var new_day = Day.charAt(0).toUpperCase() + Day.slice(1);                                                            // 257
  return new_day;                                                                                                      // 258
});                                                                                                                    // 259
                                                                                                                       //
Template.registerHelper('formatDuration', function (date1, date2) {                                                    // 261
  var start = moment(date1);                                                                                           // 262
  var end = moment(date2);                                                                                             // 263
  if (start.year() == end.year()) {                                                                                    // 264
    // Year is the same                                                                                                //
    if (start.month() == end.month()) {                                                                                // 266
      return start.format('MMM DD - ') + end.format('DD, YYYY');                                                       // 267
    }                                                                                                                  // 268
    return start.format('MMM DD - ') + end.format('MMM DD, YYYY');                                                     // 269
  }                                                                                                                    // 270
  return start.format('MMM DD, YYYY - ') + end.format('MMM DD, YYYY');                                                 // 271
});                                                                                                                    // 272
                                                                                                                       //
Template.registerHelper('basicProfileById', function (id) {                                                            // 274
  return BasicProfiles.findOne({ userId: id });                                                                        // 275
});                                                                                                                    // 276
                                                                                                                       //
Template.registerHelper('musicProfileById', function (id) {                                                            // 278
  return MusicProfiles.findOne({ userId: id });                                                                        // 279
});                                                                                                                    // 280
                                                                                                                       //
Template.registerHelper('accompanistProfileById', function (id) {                                                      // 282
  return AccompanistProfiles.findOne({ Id: id });                                                                      // 283
});                                                                                                                    // 284
                                                                                                                       //
Template.registerHelper('routeTransaction', function () {                                                              // 286
  return Transactions.findOne({ _id: FlowRouter.getParam("transactionId") });                                          // 287
});                                                                                                                    // 288
                                                                                                                       //
Template.registerHelper('isOwnProfile', function () {                                                                  // 290
  return FlowRouter.getParam("profileId") == Meteor.userId();                                                          // 291
});                                                                                                                    // 292
                                                                                                                       //
Template.registerHelper('and', function (a, b) {                                                                       // 294
  return a && b;                                                                                                       // 295
});                                                                                                                    // 296
Template.registerHelper('or', function (a, b) {                                                                        // 297
  return a || b;                                                                                                       // 298
});                                                                                                                    // 299
                                                                                                                       //
Template.registerHelper('basicProfileExists', function () {                                                            // 301
  return undefined !== BasicProfiles.findOne({ userId: Meteor.userId() });                                             // 302
});                                                                                                                    // 303
                                                                                                                       //
Template.registerHelper('musicProfileExists', function () {                                                            // 305
  return undefined !== MusicProfiles.findOne({ userId: Meteor.userId() });                                             // 306
});                                                                                                                    // 307
                                                                                                                       //
Template.registerHelper('accompanistProfileExists', function () {                                                      // 309
  return undefined !== AccompanistProfiles.findOne({ Id: Meteor.userId() });                                           // 310
});                                                                                                                    // 311
                                                                                                                       //
Template.registerHelper('isAccompanist', function () {                                                                 // 313
  var x = AccompanistProfiles.findOne({ Id: FlowRouter.getParam("profileId") });                                       // 314
  return x !== null;                                                                                                   // 315
});                                                                                                                    // 316
                                                                                                                       //
Template.registerHelper('validId', function () {                                                                       // 318
  if (BasicProfiles.findOne({ userId: FlowRouter.getParam("profileId") })) {                                           // 319
    return true;                                                                                                       // 320
  } else {                                                                                                             // 321
    return false;                                                                                                      // 322
  }                                                                                                                    // 323
});                                                                                                                    // 324
                                                                                                                       //
Template.registerHelper('userId', function () {                                                                        // 326
  event.preventDefault();                                                                                              // 327
  return Meteor.userId();                                                                                              // 328
});                                                                                                                    // 329
                                                                                                                       //
// Old Global Template Helpers                                                                                         //
                                                                                                                       //
Template.registerHelper('defaultTransaction', function () {                                                            // 335
  return { musician: Meteor.userId(),                                                                                  // 336
    accompanist: FlowRouter.getParam("profileId"),                                                                     // 337
    status: 'Pending' };                                                                                               // 338
});                                                                                                                    // 339
                                                                                                                       //
Template.registerHelper('getProfileRoute', function () {                                                               // 343
  var id = arguments.length <= 0 || arguments[0] === undefined ? Meteor.userId() : arguments[0];                       // 343
                                                                                                                       //
  return "/profile/" + id;                                                                                             // 344
});                                                                                                                    // 345
                                                                                                                       //
Template.registerHelper('getBookingRoute', function (bookingId) {                                                      // 347
  return "/bookingRequest/" + bookingId;                                                                               // 348
});                                                                                                                    // 349
                                                                                                                       //
Template.registerHelper('transactionById', function () {                                                               // 352
  var id = arguments.length <= 0 || arguments[0] === undefined ? FlowRouter.getParam("transactionId") : arguments[0];  // 352
                                                                                                                       //
  event.preventDefault();                                                                                              // 353
  // Only return if the user is the accompanist listed                                                                 //
  return Transactions.findOne({ _id: id, accompanist: Meteor.userId() });                                              // 355
});                                                                                                                    // 356
                                                                                                                       //
Template.registerHelper('musicCompetitionsDoc', function () {                                                          // 359
  event.preventDefault();                                                                                              // 360
  // array =  MusicCompetitions.find().fetch();                                                                        //
  return [{ label: "First Manhattan International Music Competition", value: "First Manhattan International Music Competition" }];
});                                                                                                                    // 363
                                                                                                                       //
// Local Template On Created                                                                                           //
                                                                                                                       //
Template.upsertMusicProfileForm.onCreated(function () {                                                                // 368
  this.formType = new ReactiveVar('insert');                                                                           // 369
});                                                                                                                    // 370
                                                                                                                       //
Template.upsertBasicProfileForm.onCreated(function () {                                                                // 372
  this.formType = new ReactiveVar('insert');                                                                           // 373
});                                                                                                                    // 374
                                                                                                                       //
Template.upsertAccompanistForm.onCreated(function () {                                                                 // 376
  this.formType = new ReactiveVar('insert');                                                                           // 377
});                                                                                                                    // 378
                                                                                                                       //
Template.upsertInstrumentForm.onCreated(function () {                                                                  // 380
  this.formType = new ReactiveVar('insert');                                                                           // 381
});                                                                                                                    // 382
                                                                                                                       //
Template.upsertAwardsForm.onCreated(function () {                                                                      // 384
  this.formType = new ReactiveVar('insert');                                                                           // 385
});                                                                                                                    // 386
                                                                                                                       //
Template.upsertProgramsForm.onCreated(function () {                                                                    // 388
  this.formType = new ReactiveVar('insert');                                                                           // 389
});                                                                                                                    // 390
                                                                                                                       //
Template.upsertOrchestraForm.onCreated(function () {                                                                   // 392
  this.formType = new ReactiveVar('insert');                                                                           // 393
});                                                                                                                    // 394
                                                                                                                       //
// Local Template Helpers                                                                                              //
                                                                                                                       //
Template.upsertOrchestraForm.helpers({                                                                                 // 398
  // Helps set up fields for deciding between "insert" and "update"                                                    //
  currentProfile: function () {                                                                                        // 400
    function currentProfile() {                                                                                        // 400
      var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId() });                                         // 401
      if (currentProfile) {                                                                                            // 402
        Template.instance().formType.set('update');                                                                    // 403
        return currentProfile;                                                                                         // 404
      }                                                                                                                // 405
    }                                                                                                                  // 406
                                                                                                                       //
    return currentProfile;                                                                                             // 400
  }(),                                                                                                                 // 400
                                                                                                                       //
  formType: function () {                                                                                              // 408
    function formType() {                                                                                              // 408
      var formType = Template.instance().formType.get();                                                               // 409
      return formType;                                                                                                 // 410
    }                                                                                                                  // 411
                                                                                                                       //
    return formType;                                                                                                   // 408
  }()                                                                                                                  // 408
});                                                                                                                    // 398
                                                                                                                       //
Template.upsertProgramsForm.helpers({                                                                                  // 414
  // Helps set up fields for deciding between "insert" and "update"                                                    //
  currentProfile: function () {                                                                                        // 416
    function currentProfile() {                                                                                        // 416
      var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId() });                                         // 417
      if (currentProfile) {                                                                                            // 418
        Template.instance().formType.set('update');                                                                    // 419
        return currentProfile;                                                                                         // 420
      }                                                                                                                // 421
    }                                                                                                                  // 422
                                                                                                                       //
    return currentProfile;                                                                                             // 416
  }(),                                                                                                                 // 416
                                                                                                                       //
  formType: function () {                                                                                              // 424
    function formType() {                                                                                              // 424
      var formType = Template.instance().formType.get();                                                               // 425
      return formType;                                                                                                 // 426
    }                                                                                                                  // 427
                                                                                                                       //
    return formType;                                                                                                   // 424
  }()                                                                                                                  // 424
});                                                                                                                    // 414
                                                                                                                       //
Template.upsertAwardsForm.helpers({                                                                                    // 430
  // Helps set up fields for deciding between "insert" and "update"                                                    //
  currentProfile: function () {                                                                                        // 432
    function currentProfile() {                                                                                        // 432
      var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId() });                                         // 433
      if (currentProfile) {                                                                                            // 434
        Template.instance().formType.set('update');                                                                    // 435
        return currentProfile;                                                                                         // 436
      }                                                                                                                // 437
    }                                                                                                                  // 438
                                                                                                                       //
    return currentProfile;                                                                                             // 432
  }(),                                                                                                                 // 432
                                                                                                                       //
  formType: function () {                                                                                              // 440
    function formType() {                                                                                              // 440
      var formType = Template.instance().formType.get();                                                               // 441
      return formType;                                                                                                 // 442
    }                                                                                                                  // 443
                                                                                                                       //
    return formType;                                                                                                   // 440
  }()                                                                                                                  // 440
});                                                                                                                    // 430
                                                                                                                       //
Template.upsertMusicProfileForm.helpers({                                                                              // 446
  // Helps set up fields for deciding between "insert" and "update"                                                    //
  currentProfile: function () {                                                                                        // 448
    function currentProfile() {                                                                                        // 448
      var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId() });                                         // 449
      if (currentProfile) {                                                                                            // 450
        Template.instance().formType.set('update');                                                                    // 451
        return currentProfile;                                                                                         // 452
      }                                                                                                                // 453
    }                                                                                                                  // 454
                                                                                                                       //
    return currentProfile;                                                                                             // 448
  }(),                                                                                                                 // 448
                                                                                                                       //
  formType: function () {                                                                                              // 456
    function formType() {                                                                                              // 456
      var formType = Template.instance().formType.get();                                                               // 457
      return formType;                                                                                                 // 458
    }                                                                                                                  // 459
                                                                                                                       //
    return formType;                                                                                                   // 456
  }(),                                                                                                                 // 456
                                                                                                                       //
  instrumentList: function () {                                                                                        // 461
    function instrumentList() {                                                                                        // 461
      return ["Voice", "Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone", "Zither"].map(function (obj) {
        return { label: obj, value: obj };                                                                             // 463
      });                                                                                                              // 463
    }                                                                                                                  // 464
                                                                                                                       //
    return instrumentList;                                                                                             // 461
  }()                                                                                                                  // 461
});                                                                                                                    // 446
                                                                                                                       //
Template.upsertInstrumentForm.helpers({                                                                                // 467
  // Helps set up fields for deciding between "insert" and "update"                                                    //
  currentProfile: function () {                                                                                        // 469
    function currentProfile() {                                                                                        // 469
      var currentProfile = MusicProfiles.findOne({ userId: Meteor.userId() });                                         // 470
      if (currentProfile) {                                                                                            // 471
        Template.instance().formType.set('update');                                                                    // 472
        return currentProfile;                                                                                         // 473
      }                                                                                                                // 474
    }                                                                                                                  // 475
                                                                                                                       //
    return currentProfile;                                                                                             // 469
  }(),                                                                                                                 // 469
                                                                                                                       //
  formType: function () {                                                                                              // 477
    function formType() {                                                                                              // 477
      var formType = Template.instance().formType.get();                                                               // 478
      return formType;                                                                                                 // 479
    }                                                                                                                  // 480
                                                                                                                       //
    return formType;                                                                                                   // 477
  }(),                                                                                                                 // 477
                                                                                                                       //
  instrumentList: function () {                                                                                        // 482
    function instrumentList() {                                                                                        // 482
      return ["Voice", "Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone", "Zither"].map(function (obj) {
        return { label: obj, value: obj };                                                                             // 484
      });                                                                                                              // 484
    }                                                                                                                  // 485
                                                                                                                       //
    return instrumentList;                                                                                             // 482
  }()                                                                                                                  // 482
});                                                                                                                    // 467
                                                                                                                       //
Template.upsertBasicProfileForm.helpers({                                                                              // 488
  // Helps set up fields for deciding between "insert" and "update"                                                    //
  currentBasicProfile: function () {                                                                                   // 490
    function currentBasicProfile() {                                                                                   // 490
      var currentAccount = BasicProfiles.findOne({ userId: Meteor.userId() });                                         // 491
      if (currentAccount) {                                                                                            // 492
        Template.instance().formType.set('update');                                                                    // 493
        return currentAccount;                                                                                         // 494
      }                                                                                                                // 495
    }                                                                                                                  // 496
                                                                                                                       //
    return currentBasicProfile;                                                                                        // 490
  }(),                                                                                                                 // 490
                                                                                                                       //
  formType: function () {                                                                                              // 498
    function formType() {                                                                                              // 498
      var formType = Template.instance().formType.get();                                                               // 499
      return formType;                                                                                                 // 500
    }                                                                                                                  // 501
                                                                                                                       //
    return formType;                                                                                                   // 498
  }()                                                                                                                  // 498
});                                                                                                                    // 488
                                                                                                                       //
Template.upsertAccompanistForm.helpers({                                                                               // 504
  // Helps set up fields for deciding between "insert" and "update"                                                    //
  currentAccompanistProfiles: function () {                                                                            // 506
    function currentAccompanistProfiles() {                                                                            // 506
      var currentAccompanistProfiles = AccompanistProfiles.findOne({ Id: Meteor.userId() });                           // 507
      if (currentAccompanistProfiles) {                                                                                // 508
        Template.instance().formType.set('update');                                                                    // 509
        return currentAccompanistProfiles;                                                                             // 510
      }                                                                                                                // 511
    }                                                                                                                  // 512
                                                                                                                       //
    return currentAccompanistProfiles;                                                                                 // 506
  }(),                                                                                                                 // 506
                                                                                                                       //
  formType: function () {                                                                                              // 514
    function formType() {                                                                                              // 514
      var formType = Template.instance().formType.get();                                                               // 515
      return formType;                                                                                                 // 516
    }                                                                                                                  // 517
                                                                                                                       //
    return formType;                                                                                                   // 514
  }()                                                                                                                  // 514
});                                                                                                                    // 504
                                                                                                                       //
Template.results.helpers({                                                                                             // 521
                                                                                                                       //
  accompanists: function () {                                                                                          // 523
    function accompanists() {                                                                                          // 523
      //var coords = Session.get('coords')                                                                             //
                                                                                                                       //
      var address = FlowRouter.getQueryParam("address");                                                               // 526
      var start_date = FlowRouter.getQueryParam("start_date");                                                         // 527
      var end_date = FlowRouter.getQueryParam("end_date");                                                             // 528
                                                                                                                       //
      Meteor.call('getGeocode', address, function (err, result) {                                                      // 530
        console.log("Meteor call worked");                                                                             // 531
                                                                                                                       //
        if (result !== null) {                                                                                         // 533
          var lat = Number(result[0].latitude);                                                                        // 534
          var lng = Number(result[0].longitude);                                                                       // 535
          var coords = [lng, lat];                                                                                     // 536
        }                                                                                                              // 537
                                                                                                                       //
        //convert dates to dates that can be compared with Mongo schema                                                //
        var sd = new Date(start_date);                                                                                 // 540
        var ed = new Date(end_date);                                                                                   // 541
                                                                                                                       //
        if (coords !== undefined && moment(sd).isValid() && moment(ed).isValid()) {                                    // 543
          var results = AccompanistProfiles.find({                                                                     // 544
            loc: { $near: {                                                                                            // 545
                $geometry: { type: "Point", coordinates: coords },                                                     // 548
                $maxDistance: 20000                                                                                    // 549
              }                                                                                                        // 547
            },                                                                                                         // 546
            startDate: { $lte: sd, $lte: ed },                                                                         // 552
            endDate: { $gte: sd, $gte: ed } }).fetch();                                                                // 553
        } else if (moment(sd).isValid() && moment(ed).isValid()) {                                                     // 554
          var results = AccompanistProfiles.find({                                                                     // 557
            startDate: { $lte: sd, $lte: ed },                                                                         // 559
            endDate: { $gte: sd, $gte: ed } }).fetch();                                                                // 560
        } else if (moment(ed).isValid()) {                                                                             // 561
          var results = AccompanistProfiles.find({                                                                     // 564
            startDate: { $lte: ed },                                                                                   // 566
            endDate: { $gte: ed } }).fetch();                                                                          // 567
        } else if (moment(sd).isValid()) {                                                                             // 568
          var results = AccompanistProfiles.find({                                                                     // 571
            startDate: { $lte: sd },                                                                                   // 573
            endDate: { $gte: sd } }).fetch();                                                                          // 574
        } else if (coords !== undefined) {                                                                             // 575
          var results = AccompanistProfiles.find({                                                                     // 578
            loc: { $near: {                                                                                            // 579
                $geometry: { type: "Point", coordinates: coords },                                                     // 582
                $maxDistance: 20000                                                                                    // 583
              }                                                                                                        // 581
            } }).fetch();                                                                                              // 580
        } else {                                                                                                       // 586
          var results = null;                                                                                          // 589
        }                                                                                                              // 590
                                                                                                                       //
        Session.set('results', results);                                                                               // 592
      });                                                                                                              // 593
                                                                                                                       //
      return Session.get('results');                                                                                   // 595
    }                                                                                                                  // 596
                                                                                                                       //
    return accompanists;                                                                                               // 523
  }(),                                                                                                                 // 523
  accompname: function () {                                                                                            // 597
    function accompname() {                                                                                            // 597
      var names = BasicProfiles.findOne({ userId: this.Id });                                                          // 598
      return names;                                                                                                    // 599
    }                                                                                                                  // 600
                                                                                                                       //
    return accompname;                                                                                                 // 597
  }()                                                                                                                  // 597
                                                                                                                       //
});                                                                                                                    // 521
                                                                                                                       //
// Events                                                                                                              //
                                                                                                                       //
Template.search.events({                                                                                               // 606
  'submit form': function () {                                                                                         // 607
    function submitForm() {                                                                                            // 607
      console.log("Form Submitted");                                                                                   // 608
      FlowRouter.go('results?');                                                                                       // 609
    }                                                                                                                  // 610
                                                                                                                       //
    return submitForm;                                                                                                 // 607
  }()                                                                                                                  // 607
});                                                                                                                    // 606
                                                                                                                       //
// Google search autocomplete                                                                                          //
Template.search.events({                                                                                               // 614
  'click #autocomplete': function () {                                                                                 // 615
    function clickAutocomplete(e, search) {                                                                            // 615
      initAutoComplete();                                                                                              // 616
    }                                                                                                                  // 617
                                                                                                                       //
    return clickAutocomplete;                                                                                          // 615
  }()                                                                                                                  // 615
});                                                                                                                    // 614
                                                                                                                       //
Template.NewAccompLayout.events({                                                                                      // 620
  'click #autocomplete': function () {                                                                                 // 621
    function clickAutocomplete(e, NewAccompLayout) {                                                                   // 621
      initAutoComplete();                                                                                              // 622
    }                                                                                                                  // 623
                                                                                                                       //
    return clickAutocomplete;                                                                                          // 621
  }()                                                                                                                  // 621
});                                                                                                                    // 620
                                                                                                                       //
var initAutoComplete = function initAutoComplete() {                                                                   // 626
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { types: ['geocode'] });
};                                                                                                                     // 630
                                                                                                                       //
Template.EditAccompanistProfiles.events({                                                                              // 632
  'click button': function () {                                                                                        // 633
    function clickButton() {                                                                                           // 633
      Notifications.info('Test', 'Working Notification');                                                              // 634
    }                                                                                                                  // 635
                                                                                                                       //
    return clickButton;                                                                                                // 633
  }()                                                                                                                  // 633
});                                                                                                                    // 632
                                                                                                                       //
Template.BookingRequest.events({                                                                                       // 638
  'click button': function () {                                                                                        // 639
    function clickButton() {                                                                                           // 639
      Transactions.update({ _id: FlowRouter.getParam("transactionId") }, { $set: { status: "Confirmed" } });           // 640
      Notifications.info('Successful Confirmation', 'You successfully confirmed your booking!');                       // 641
    }                                                                                                                  // 642
                                                                                                                       //
    return clickButton;                                                                                                // 639
  }()                                                                                                                  // 639
});                                                                                                                    // 638
                                                                                                                       //
Template.makeAdmin.events({                                                                                            // 645
  'click button': function () {                                                                                        // 646
    function clickButton() {                                                                                           // 646
      userId = Meteor.userId();                                                                                        // 647
      Meteor.call('divinify', userId);                                                                                 // 648
    }                                                                                                                  // 649
                                                                                                                       //
    return clickButton;                                                                                                // 646
  }()                                                                                                                  // 646
});                                                                                                                    // 645
                                                                                                                       //
// Decide Modal Login/SignUp Popup                                                                                     //
Template.modalLogin.events({                                                                                           // 653
  'click .modal-trigger': function () {                                                                                // 654
    function clickModalTrigger() {                                                                                     // 654
      AccountsTemplates.setState('signIn');                                                                            // 655
    }                                                                                                                  // 656
                                                                                                                       //
    return clickModalTrigger;                                                                                          // 654
  }()                                                                                                                  // 654
});                                                                                                                    // 653
                                                                                                                       //
Template.modalSignUp.events({                                                                                          // 659
  'click .modal-trigger': function () {                                                                                // 660
    function clickModalTrigger() {                                                                                     // 660
      AccountsTemplates.setState('signUp');                                                                            // 661
    }                                                                                                                  // 662
                                                                                                                       //
    return clickModalTrigger;                                                                                          // 660
  }()                                                                                                                  // 660
});                                                                                                                    // 659
                                                                                                                       //
// Logout from the navbar                                                                                              //
Template.Navbar.events({                                                                                               // 666
  'click .logout': function () {                                                                                       // 667
    function clickLogout() {                                                                                           // 667
      AccountsTemplates.logout();                                                                                      // 668
    }                                                                                                                  // 669
                                                                                                                       //
    return clickLogout;                                                                                                // 667
  }()                                                                                                                  // 667
});                                                                                                                    // 666
                                                                                                                       //
// For Debugging                                                                                                       //
SimpleSchema.debug = true;                                                                                             // 675
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"routes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/routes.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
FlowRouter.route('/', {                                                                                                // 1
    name: 'home',                                                                                                      // 2
    action: function () {                                                                                              // 3
        function action() {                                                                                            // 1
            BlazeLayout.render('MainLayout', { main: 'HomeLayout', nav: 'Navbar' });                                   // 4
        }                                                                                                              // 5
                                                                                                                       //
        return action;                                                                                                 // 1
    }()                                                                                                                // 1
});                                                                                                                    // 1
                                                                                                                       //
FlowRouter.route('/addinfo', {                                                                                         // 8
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 9
    name: 'addInfo',                                                                                                   // 10
    action: function () {                                                                                              // 11
        function action() {                                                                                            // 8
            BlazeLayout.render('MainLayout', { main: 'AddInfoLayout', nav: 'Navbar' });                                // 12
        }                                                                                                              // 13
                                                                                                                       //
        return action;                                                                                                 // 8
    }()                                                                                                                // 8
});                                                                                                                    // 8
                                                                                                                       //
FlowRouter.route('/newaccomp', {                                                                                       // 16
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 17
    name: 'NewAccompLayout',                                                                                           // 18
    action: function () {                                                                                              // 19
        function action() {                                                                                            // 16
            // pass form the form type from the link                                                                   //
            BlazeLayout.render('MainLayout', { main: 'NewAccompLayout', nav: 'Navbar' });                              // 21
        }                                                                                                              // 22
                                                                                                                       //
        return action;                                                                                                 // 16
    }()                                                                                                                // 16
});                                                                                                                    // 16
                                                                                                                       //
FlowRouter.route('/newaccomp/step1', {                                                                                 // 25
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 26
    name: 'NewAccompLayout',                                                                                           // 27
    action: function () {                                                                                              // 28
        function action() {                                                                                            // 25
            // pass form the form type from the link                                                                   //
            BlazeLayout.render('MainLayout', { main: 'upsertBasicProfileForm', nav: 'Navbar' });                       // 30
        }                                                                                                              // 31
                                                                                                                       //
        return action;                                                                                                 // 25
    }()                                                                                                                // 25
});                                                                                                                    // 25
FlowRouter.route('/newaccomp/step2', {                                                                                 // 33
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 34
    name: 'NewAccompLayout',                                                                                           // 35
    action: function () {                                                                                              // 36
        function action() {                                                                                            // 33
            // pass form the form type from the link                                                                   //
            BlazeLayout.render('MainLayout', { main: 'upsertMusicProfileForm', nav: 'Navbar' });                       // 38
        }                                                                                                              // 39
                                                                                                                       //
        return action;                                                                                                 // 33
    }()                                                                                                                // 33
});                                                                                                                    // 33
FlowRouter.route('/newaccomp/step3', {                                                                                 // 41
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 42
    name: 'NewAccompLayout',                                                                                           // 43
    action: function () {                                                                                              // 44
        function action() {                                                                                            // 41
            // pass form the form type from the link                                                                   //
            BlazeLayout.render('MainLayout', { main: 'upsertAccompanistForm', nav: 'Navbar' });                        // 46
        }                                                                                                              // 47
                                                                                                                       //
        return action;                                                                                                 // 41
    }()                                                                                                                // 41
});                                                                                                                    // 41
                                                                                                                       //
FlowRouter.route('/accompanistDashboard', {                                                                            // 50
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 51
    name: 'accompanistDashboard',                                                                                      // 52
    action: function () {                                                                                              // 53
        function action() {                                                                                            // 50
            BlazeLayout.render('MainLayout', { main: 'AccompanistDashboard', nav: 'Navbar' });                         // 54
        }                                                                                                              // 55
                                                                                                                       //
        return action;                                                                                                 // 50
    }()                                                                                                                // 50
});                                                                                                                    // 50
                                                                                                                       //
FlowRouter.route('/bookingRequest/:transactionId', {                                                                   // 58
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 59
    name: 'bookingRequest',                                                                                            // 60
    action: function () {                                                                                              // 61
        function action(params, queryParams) {                                                                         // 58
            BlazeLayout.render('MainLayout', { main: 'BookingRequestLayout', nav: 'Navbar' });                         // 62
        }                                                                                                              // 63
                                                                                                                       //
        return action;                                                                                                 // 58
    }()                                                                                                                // 58
});                                                                                                                    // 58
                                                                                                                       //
FlowRouter.route('/results/', {                                                                                        // 66
    name: 'results',                                                                                                   // 67
    action: function () {                                                                                              // 68
        function action(params, queryParams) {                                                                         // 66
            BlazeLayout.render('MainLayout', { main: 'ResultsLayout', nav: 'Navbar' });                                // 69
        }                                                                                                              // 70
                                                                                                                       //
        return action;                                                                                                 // 66
    }()                                                                                                                // 66
});                                                                                                                    // 66
                                                                                                                       //
FlowRouter.route('/payment', {                                                                                         // 73
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 74
    name: 'payment',                                                                                                   // 75
    action: function () {                                                                                              // 76
        function action() {                                                                                            // 73
            BlazeLayout.render('MainLayout', { main: 'PaymentLayout', nav: 'Navbar' });                                // 77
        }                                                                                                              // 78
                                                                                                                       //
        return action;                                                                                                 // 73
    }()                                                                                                                // 73
});                                                                                                                    // 73
                                                                                                                       //
FlowRouter.route('/bookings', {                                                                                        // 81
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                                 // 82
    name: 'bookings',                                                                                                  // 83
    action: function () {                                                                                              // 84
        function action() {                                                                                            // 81
            BlazeLayout.render('MainLayout', { main: 'BookingsLayout', nav: 'Navbar' });                               // 85
        }                                                                                                              // 86
                                                                                                                       //
        return action;                                                                                                 // 81
    }()                                                                                                                // 81
});                                                                                                                    // 81
                                                                                                                       //
FlowRouter.route('/profile/:profileId', {                                                                              // 89
    name: 'profile',                                                                                                   // 90
    action: function () {                                                                                              // 91
        function action(params, queryParams) {                                                                         // 89
            BlazeLayout.render('MainLayout', { main: 'ProfileLayout', nav: 'Navbar' });                                // 92
        }                                                                                                              // 93
                                                                                                                       //
        return action;                                                                                                 // 89
    }()                                                                                                                // 89
});                                                                                                                    // 89
                                                                                                                       //
// Testing UI Elements                                                                                                 //
FlowRouter.route('/test', {                                                                                            // 98
    action: function () {                                                                                              // 99
        function action() {                                                                                            // 98
            BlazeLayout.render('TestLayout');                                                                          // 100
        }                                                                                                              // 101
                                                                                                                       //
        return action;                                                                                                 // 98
    }()                                                                                                                // 98
});                                                                                                                    // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"both":{"modules":{"_modules.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/modules/_modules.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Modules = {};                                                                                                          // 1
Modules.both = {};                                                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"check-url-validity.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/modules/check-url-validity.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _fileExistsInDatabase = function _fileExistsInDatabase(url) {                                                      // 1
  return Images.findOne({ "url": url, "userId": Meteor.userId() }, { fields: { "_id": 1 } });                          // 2
};                                                                                                                     // 3
                                                                                                                       //
var _isNotAmazonUrl = function _isNotAmazonUrl(url) {                                                                  // 5
  return url.indexOf('s3.amazonaws.com') < 0;                                                                          // 6
};                                                                                                                     // 7
                                                                                                                       //
var _validateUrl = function _validateUrl(url) {                                                                        // 9
  if (_fileExistsInDatabase(url)) {                                                                                    // 10
    return { valid: false, error: "Sorry, this file already exists!" };                                                // 11
  }                                                                                                                    // 12
                                                                                                                       //
  if (_isNotAmazonUrl(url)) {                                                                                          // 14
    return { valid: false, error: "Sorry, this isn't a valid URL!" };                                                  // 15
  }                                                                                                                    // 16
                                                                                                                       //
  return { valid: true };                                                                                              // 18
};                                                                                                                     // 19
                                                                                                                       //
var validate = function validate(url) {                                                                                // 21
  var test = _validateUrl(url);                                                                                        // 22
                                                                                                                       //
  if (!test.valid) {                                                                                                   // 24
    throw new Meteor.Error("file-error", test.error);                                                                  // 25
  }                                                                                                                    // 26
};                                                                                                                     // 27
                                                                                                                       //
Modules.both.checkUrlValidity = validate;                                                                              // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"collections":{"accompanistProfiles.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/accompanistProfiles.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({AccompanistProfiles:function(){return AccompanistProfiles}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                       //
var AccompanistProfiles = new Mongo.Collection('accompanistProfiles');                                                 // 3
                                                                                                                       //
AccompanistProfileSchema = new SimpleSchema({                                                                          // 5
  Id: {                                                                                                                // 6
    type: String,                                                                                                      // 7
    label: "Accompanist User ID",                                                                                      // 8
    autoform: {                                                                                                        // 9
      type: "hidden"                                                                                                   // 10
    },                                                                                                                 // 9
    autoValue: function () {                                                                                           // 12
      function autoValue() {                                                                                           // 12
        return this.userId;                                                                                            // 13
      }                                                                                                                // 14
                                                                                                                       //
      return autoValue;                                                                                                // 12
    }()                                                                                                                // 12
  },                                                                                                                   // 6
                                                                                                                       //
  repertoire: {                                                                                                        // 17
    type: [String],                                                                                                    // 18
    label: "Repertoire"                                                                                                // 19
  },                                                                                                                   // 17
                                                                                                                       //
  charge: {                                                                                                            // 22
    type: Number,                                                                                                      // 23
    label: "Hourly Charge",                                                                                            // 24
    autoform: {                                                                                                        // 25
      options: [{ label: "$20", value: 20 }, { label: "$40", value: 40 }, { label: "$60", value: 60 }]                 // 26
    }                                                                                                                  // 25
  },                                                                                                                   // 22
                                                                                                                       //
  working_hours: {                                                                                                     // 34
    type: [String],                                                                                                    // 35
    label: "Times you prefer working",                                                                                 // 36
    autoform: {                                                                                                        // 37
      type: "select-checkbox-inline",                                                                                  // 38
      options: [{ label: "Morning (8am - 12pm)", value: "Morning" }, { label: "Afternoon (12pm - 6pm)", value: "Afternoon" }, { label: "Night (6pm - 11pm)", value: "Night" }]
    }                                                                                                                  // 37
  },                                                                                                                   // 34
                                                                                                                       //
  working_days: {                                                                                                      // 47
    type: [String],                                                                                                    // 48
    //noselect:true,                                                                                                   //
    label: "Days you want to accompany",                                                                               // 50
    autoform: {                                                                                                        // 51
      type: "select-checkbox-inline",                                                                                  // 52
      options: [{ label: "Monday", value: "Monday" }, { label: "Tuesday", value: "Tuesday" }, { label: "Wednesday", value: "Wednesday" }, { label: "Thursday", value: "Thursday" }, { label: "Friday", value: "Friday" }, { label: "Saturday", value: "Saturday" }, { label: "Sunday", value: "Sunday" }]
    }                                                                                                                  // 51
  },                                                                                                                   // 47
                                                                                                                       //
  session_location: {                                                                                                  // 65
    type: String,                                                                                                      // 66
    label: "Session's Location",                                                                                       // 67
    autoform: {                                                                                                        // 68
      options: [{ label: "My Place", value: "My Place" }, { label: "Student's Place", value: "Student's Place" }, { label: "Doesn't matter", value: "Doesn't matter" }]
    }                                                                                                                  // 68
  },                                                                                                                   // 65
                                                                                                                       //
  startDate: {                                                                                                         // 77
    type: Date,                                                                                                        // 78
    label: "Start Date"                                                                                                // 79
  },                                                                                                                   // 77
                                                                                                                       //
  endDate: {                                                                                                           // 82
    type: Date,                                                                                                        // 83
    label: "End Date"                                                                                                  // 84
  },                                                                                                                   // 82
                                                                                                                       //
  // make this show up only if the accomp said he's willing to give sessoins in his place                              //
  mylocation: {                                                                                                        // 88
    type: String,                                                                                                      // 89
    label: "mylocation"                                                                                                // 90
  },                                                                                                                   // 88
                                                                                                                       //
  geolocation: {                                                                                                       // 93
    type: Object,                                                                                                      // 94
    blackbox: true,                                                                                                    // 95
    label: 'geolocation',                                                                                              // 96
    autoform: {                                                                                                        // 97
      type: "hidden",                                                                                                  // 98
      label: false                                                                                                     // 99
    },                                                                                                                 // 97
    optional: true                                                                                                     // 101
  },                                                                                                                   // 93
                                                                                                                       //
  loc: {                                                                                                               // 104
    type: Object,                                                                                                      // 105
    index: '2dsphere',                                                                                                 // 106
    label: "Location",                                                                                                 // 107
    //blackbox: true,                                                                                                  //
    autoform: {                                                                                                        // 109
      type: "hidden",                                                                                                  // 110
      omit: true                                                                                                       // 111
    },                                                                                                                 // 109
    optional: true                                                                                                     // 113
  },                                                                                                                   // 104
                                                                                                                       //
  "loc.type": {                                                                                                        // 116
    type: String,                                                                                                      // 117
    allowedValues: ["Point"],                                                                                          // 118
    label: "Start location type"                                                                                       // 119
  },                                                                                                                   // 116
                                                                                                                       //
  "loc.coordinates": {                                                                                                 // 122
    type: [Number],                                                                                                    // 123
    //minCount: 2,                                                                                                     //
    //maxCount: 2,                                                                                                     //
    decimal: true                                                                                                      // 126
  },                                                                                                                   // 122
                                                                                                                       //
  one_liner: {                                                                                                         // 129
    type: String,                                                                                                      // 130
    label: "Describe yourself in one sentence"                                                                         // 131
  }                                                                                                                    // 129
                                                                                                                       //
});                                                                                                                    // 5
                                                                                                                       //
AccompanistProfiles.attachSchema(AccompanistProfileSchema);                                                            // 137
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"basicProfiles.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/basicProfiles.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({BasicProfiles:function(){return BasicProfiles}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                       //
var BasicProfiles = new Mongo.Collection('basicProfiles');                                                             // 3
                                                                                                                       //
PaymentMethodSchema = new SimpleSchema({                                                                               // 5
  paymentType: {                                                                                                       // 6
    type: String,                                                                                                      // 7
    label: "Payment Type"                                                                                              // 8
  }                                                                                                                    // 6
});                                                                                                                    // 5
                                                                                                                       //
BasicProfileSchema = new SimpleSchema({                                                                                // 12
  userId: {                                                                                                            // 13
    type: String,                                                                                                      // 14
    label: "User ID",                                                                                                  // 15
    autoform: {                                                                                                        // 16
      type: "hidden"                                                                                                   // 17
    },                                                                                                                 // 16
    autoValue: function () {                                                                                           // 19
      function autoValue() {                                                                                           // 19
        return this.userId;                                                                                            // 20
      }                                                                                                                // 21
                                                                                                                       //
      return autoValue;                                                                                                // 19
    }()                                                                                                                // 19
  },                                                                                                                   // 13
                                                                                                                       //
  name: {                                                                                                              // 24
    type: String,                                                                                                      // 25
    label: "Name"                                                                                                      // 26
  },                                                                                                                   // 24
                                                                                                                       //
  birthDate: {                                                                                                         // 29
    type: Date                                                                                                         // 30
  },                                                                                                                   // 29
  // label: "Date of Birth"                                                                                            //
  //                                                                                                                   //
  phone: {                                                                                                             // 34
    type: String,                                                                                                      // 35
    label: "Phone Number"                                                                                              // 36
  },                                                                                                                   // 34
                                                                                                                       //
  affiliation: {                                                                                                       // 39
    type: String,                                                                                                      // 40
    label: "Affiliation"                                                                                               // 41
  }                                                                                                                    // 39
});                                                                                                                    // 12
                                                                                                                       //
BasicProfiles.attachSchema(BasicProfileSchema);                                                                        // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"competitions.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/competitions.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({MusicCompetitions:function(){return MusicCompetitions},TagsCollection:function(){return TagsCollection}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                       //
var MusicCompetitions = new Mongo.Collection('musicCompetitions');                                                     // 3
var TagsCollection = new Mongo.Collection('tagsCollection');                                                           // 4
                                                                                                                       //
MusicCompetitionSchema = new SimpleSchema({                                                                            // 6
  name: {                                                                                                              // 7
    type: String,                                                                                                      // 8
    label: "Competition Name"                                                                                          // 9
  },                                                                                                                   // 7
  alias: {                                                                                                             // 11
    type: [String],                                                                                                    // 12
    label: "Other Names"                                                                                               // 13
  },                                                                                                                   // 11
  reputation: {                                                                                                        // 15
    type: Number,                                                                                                      // 16
    label: "Competition Reputation",                                                                                   // 17
    min: 1,                                                                                                            // 18
    max: 3                                                                                                             // 19
  }                                                                                                                    // 15
                                                                                                                       //
});                                                                                                                    // 6
                                                                                                                       //
MusicCompetitions.attachSchema(MusicCompetitionSchema);                                                                // 24
                                                                                                                       //
TagsSchema = new SimpleSchema({                                                                                        // 26
  tags: {                                                                                                              // 27
    type: [Object]                                                                                                     // 28
  },                                                                                                                   // 27
  "tags.$._id": {                                                                                                      // 30
    type: String                                                                                                       // 31
  },                                                                                                                   // 30
  "tags.$.name": {                                                                                                     // 33
    type: String                                                                                                       // 34
  }                                                                                                                    // 33
});                                                                                                                    // 26
                                                                                                                       //
TagsCollection.attachSchema(TagsSchema);                                                                               // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"images.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/images.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});                                                // 1
                                                                                                                       //
Images = new Mongo.Collection('images');                                                                               // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"musicProfiles.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/musicProfiles.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({MusicProfiles:function(){return MusicProfiles}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                       //
var MusicProfiles = new Mongo.Collection('musicProfiles');                                                             // 3
                                                                                                                       //
OrchestraSchema = new SimpleSchema({                                                                                   // 5
  name: {                                                                                                              // 6
    type: String,                                                                                                      // 7
    label: "Orchestra Name"                                                                                            // 8
  },                                                                                                                   // 6
                                                                                                                       //
  position: {                                                                                                          // 11
    type: String,                                                                                                      // 12
    label: "Position in Orchestra"                                                                                     // 13
  },                                                                                                                   // 11
                                                                                                                       //
  startDate: {                                                                                                         // 16
    type: Date,                                                                                                        // 17
    label: "Beginning Date"                                                                                            // 18
  },                                                                                                                   // 16
                                                                                                                       //
  endDate: {                                                                                                           // 21
    type: Date,                                                                                                        // 22
    label: "Ending Date"                                                                                               // 23
  }                                                                                                                    // 21
});                                                                                                                    // 5
                                                                                                                       //
AwardSchema = new SimpleSchema({                                                                                       // 27
  name: {                                                                                                              // 28
    type: String,                                                                                                      // 29
    label: "Competition Name"                                                                                          // 30
  },                                                                                                                   // 28
                                                                                                                       //
  award: {                                                                                                             // 33
    type: String,                                                                                                      // 34
    label: "Award Title"                                                                                               // 35
  },                                                                                                                   // 33
  date: {                                                                                                              // 37
    type: Date,                                                                                                        // 38
    label: "Date Received"                                                                                             // 39
  }                                                                                                                    // 37
});                                                                                                                    // 27
                                                                                                                       //
MusicProgramSchema = new SimpleSchema({                                                                                // 43
                                                                                                                       //
  programName: {                                                                                                       // 45
    type: String,                                                                                                      // 46
    label: "Program Name"                                                                                              // 47
  },                                                                                                                   // 45
                                                                                                                       //
  startDate: {                                                                                                         // 50
    type: Date,                                                                                                        // 51
    label: "Start Date"                                                                                                // 52
  },                                                                                                                   // 50
                                                                                                                       //
  endDate: {                                                                                                           // 55
    type: Date,                                                                                                        // 56
    label: "End Date"                                                                                                  // 57
  }                                                                                                                    // 55
});                                                                                                                    // 43
                                                                                                                       //
MusicProfileSchema = new SimpleSchema({                                                                                // 63
  userId: {                                                                                                            // 64
    type: String,                                                                                                      // 65
    label: "User ID",                                                                                                  // 66
    autoform: {                                                                                                        // 67
      type: "hidden"                                                                                                   // 68
    },                                                                                                                 // 67
    autoValue: function () {                                                                                           // 70
      function autoValue() {                                                                                           // 70
        return this.userId;                                                                                            // 71
      }                                                                                                                // 72
                                                                                                                       //
      return autoValue;                                                                                                // 70
    }()                                                                                                                // 70
  },                                                                                                                   // 64
                                                                                                                       //
  instrument: {                                                                                                        // 75
    type: String,                                                                                                      // 76
    label: "Instrument Played",                                                                                        // 77
    optional: true                                                                                                     // 78
  },                                                                                                                   // 75
                                                                                                                       //
  yearsPlayed: {                                                                                                       // 81
    type: Number,                                                                                                      // 82
    label: "Years Played",                                                                                             // 83
    optional: true                                                                                                     // 84
  },                                                                                                                   // 81
                                                                                                                       //
  awards: {                                                                                                            // 87
    type: [AwardSchema],                                                                                               // 88
    label: "Awards Won",                                                                                               // 89
    optional: true,                                                                                                    // 90
    blackbox: true                                                                                                     // 91
  },                                                                                                                   // 87
                                                                                                                       //
  musicPrograms: {                                                                                                     // 94
    type: [MusicProgramSchema],                                                                                        // 95
    label: "Music Programs Participated in",                                                                           // 96
    optional: true                                                                                                     // 97
  },                                                                                                                   // 94
                                                                                                                       //
  orchestras: {                                                                                                        // 100
    type: [OrchestraSchema],                                                                                           // 101
    label: "Orchestras Played At",                                                                                     // 102
    optional: true                                                                                                     // 103
  }                                                                                                                    // 100
                                                                                                                       //
});                                                                                                                    // 63
                                                                                                                       //
MusicProfiles.attachSchema(MusicProfileSchema);                                                                        // 108
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"testData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/testData.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({TestAccountData:function(){return TestAccountData}});var TestAccountData = [{ "name": "Marshall Caldwell", "birthDate": "1999-12-15T23:15:28-08:00", "phone": "1-886-756-4707", "affiliation": "Volutpat Ornare Facilisis Limited", "userId": "guw10gqL8G1wV09y8" }, { "name": "Stuart Watts", "birthDate": "2001-06-13T10:22:34-07:00", "phone": "1-406-742-2081", "affiliation": "Neque PC", "userId": "nFk94gJH7v4Ae03K0" }, { "name": "Anika Barrett", "birthDate": "1988-12-04T02:21:27-08:00", "phone": "1-906-343-2676", "affiliation": "Vitae Mauris Sit Industries", "userId": "XaY92UpT3V6au06M3" }, { "name": "Christine Knight", "birthDate": "1996-01-30T12:30:44-08:00", "phone": "1-583-514-8245", "affiliation": "Tempus Institute", "userId": "okC97lYf4E6Mj83E8" }, { "name": "August Gill", "birthDate": "1997-05-03T14:19:36-07:00", "phone": "1-673-846-7487", "affiliation": "Sed Industries", "userId": "Eus21vjk8S5AG85e0" }, { "name": "Kaden Branch", "birthDate": "1997-03-31T11:21:25-08:00", "phone": "1-286-389-8464", "affiliation": "Dui Fusce Aliquam LLC", "userId": "sIy44Bxf9r9zT31d2" }, { "name": "Selma Leblanc", "birthDate": "1995-12-08T19:25:16-08:00", "phone": "1-612-658-7587", "affiliation": "Ut Dolor Ltd", "userId": "ZEn70nMZ5z8wc56A9" }, { "name": "Castor Todd", "birthDate": "1999-10-01T18:16:39-07:00", "phone": "1-133-787-4457", "affiliation": "Amet LLP", "userId": "kDQ35jVX0N4IS80j0" }, { "name": "Paul England", "birthDate": "1991-10-01T15:55:16-07:00", "phone": "1-632-220-9531", "affiliation": "Aliquet Libero Integer Associates", "userId": "zkq23Wnw2W8Ld74a5" }, { "name": "Quin Molina", "birthDate": "1988-10-14T23:23:39-07:00", "phone": "1-289-983-2366", "affiliation": "Elementum Lorem Ut LLP", "userId": "cCG05Qob9o5oN13b1" }, { "name": "Piper Bell", "birthDate": "1995-01-20T02:04:09-08:00", "phone": "1-622-452-5765", "affiliation": "Pede Consulting", "userId": "ujJ93oPL6U7Dt05N2" }, { "name": "Janna Sims", "birthDate": "1990-05-28T08:49:30-07:00", "phone": "1-123-198-2932", "affiliation": "Duis Elementum Dui LLP", "userId": "vmP93ijA8w7Xq57Q0" }, { "name": "Jacqueline Tran", "birthDate": "2000-12-28T19:53:05-08:00", "phone": "1-393-947-0839", "affiliation": "Iaculis Enim Sit LLP", "userId": "LjD15SHs5C3be17Z8" }, { "name": "Jerry Reese", "birthDate": "1985-03-18T17:21:36-08:00", "phone": "1-660-764-8105", "affiliation": "Per Inceptos Incorporated", "userId": "YQK13JPu2N2uq03m0" }, { "name": "Florence Greer", "birthDate": "1993-06-29T02:38:56-07:00", "phone": "1-291-988-8730", "affiliation": "Sagittis Semper Nam Industries", "userId": "INl64Rsu0G6Ia79Y6" }, { "name": "Michael Mathews", "birthDate": "2003-06-08T05:30:34-07:00", "phone": "1-351-792-1539", "affiliation": "Sit Amet Risus Company", "userId": "sKw71srx5g3ZB96S5" }, { "name": "Nayda Wilder", "birthDate": "1997-05-15T20:12:50-07:00", "phone": "1-334-673-0470", "affiliation": "Dis Parturient Montes LLC", "userId": "soU23GJu8w9EL99F1" }, { "name": "Gloria Hays", "birthDate": "2003-06-01T16:37:54-07:00", "phone": "1-728-321-8762", "affiliation": "Porttitor Tellus Non LLC", "userId": "QPx65KGs0U2kl16L3" }, { "name": "Audra Meadows", "birthDate": "1985-12-16T21:48:51-08:00", "phone": "1-956-121-2924", "affiliation": "Orci Consectetuer Inc.", "userId": "Omd06IBa7i1xC53Z2" }, { "name": "Wilma Wise", "birthDate": "1998-04-19T04:57:54-07:00", "phone": "1-389-567-2886", "affiliation": "Non Magna Nam Corp.", "userId": "Qpc26fzL6g2Ya05o5" }, { "name": "Sierra Harrison", "birthDate": "2004-01-01T00:38:50-08:00", "phone": "1-311-962-3143", "affiliation": "Dictum Mi Ac Ltd", "userId": "pko54uKt6U8KI24C8" }, { "name": "Dustin Cote", "birthDate": "1992-11-10T01:28:01-08:00", "phone": "1-816-898-1600", "affiliation": "Auctor Institute", "userId": "bqK72gGa3Y8cN86A1" }, { "name": "Burton Landry", "birthDate": "1987-03-14T13:29:21-08:00", "phone": "1-567-979-7277", "affiliation": "Neque Pellentesque Massa Incorporated", "userId": "PJK73XqR0c1Py67e9" }, { "name": "Blaze Ellis", "birthDate": "1989-03-19T22:29:49-08:00", "phone": "1-482-239-4671", "affiliation": "Nulla Interdum Curabitur Incorporated", "userId": "Eux02DIE1c9Ag06K9" }, { "name": "Diana Raymond", "birthDate": "1993-08-14T19:03:12-07:00", "phone": "1-695-629-3307", "affiliation": "Tellus Foundation", "userId": "FNU11LAt3s8gn76E4" }, { "name": "Sheila Randall", "birthDate": "1997-07-20T05:19:46-07:00", "phone": "1-872-694-1642", "affiliation": "Natoque Penatibus Corp.", "userId": "MJl05fif3f7FE45w3" }, { "name": "Yardley Hendrix", "birthDate": "1984-08-26T03:10:46-07:00", "phone": "1-585-310-7139", "affiliation": "Maecenas Libero Est Corporation", "userId": "GCv89xUI9b6LY64t2" }, { "name": "Sonia Kelley", "birthDate": "1988-05-14T15:01:51-07:00", "phone": "1-760-982-9479", "affiliation": "Congue Turpis Corp.", "userId": "oxI96gTx2L9ef91p6" }, { "name": "Ursa Rush", "birthDate": "1985-01-17T05:33:12-08:00", "phone": "1-306-249-1834", "affiliation": "Purus Gravida Sagittis Ltd", "userId": "DPl37Inq9s8jW14G8" }, { "name": "Gil Vazquez", "birthDate": "1989-06-16T20:41:48-07:00", "phone": "1-211-995-6614", "affiliation": "Volutpat Limited", "userId": "MnX74keF3O1mk61g0" }, { "name": "Kelly Griffin", "birthDate": "1991-01-24T19:51:22-08:00", "phone": "1-270-213-3655", "affiliation": "Pede Suspendisse Dui PC", "userId": "uqJ95tdE6x2rk60H4" }, { "name": "Troy Spencer", "birthDate": "1985-03-20T00:35:35-08:00", "phone": "1-686-846-0990", "affiliation": "Malesuada Company", "userId": "DNn68uOM9A7jW63w8" }, { "name": "Georgia Mckinney", "birthDate": "1989-10-03T19:41:15-07:00", "phone": "1-209-201-4736", "affiliation": "Primis In Corp.", "userId": "uRC62Rov0W2lm79a6" }, { "name": "Kamal Delaney", "birthDate": "1993-03-09T17:34:54-08:00", "phone": "1-420-845-2702", "affiliation": "Scelerisque Scelerisque Dui Foundation", "userId": "pzD59ALz1f7CF81m9" }, { "name": "Barbara Gomez", "birthDate": "1998-03-03T10:04:22-08:00", "phone": "1-330-946-5982", "affiliation": "Pretium Neque Morbi Associates", "userId": "ixz51TiY5f9HA89i3" }, { "name": "Tyler Mcclure", "birthDate": "1987-08-02T08:16:53-07:00", "phone": "1-803-851-6951", "affiliation": "Nam Consequat PC", "userId": "Hxv12Fkw2i4vO18d9" }, { "name": "Elizabeth Wooten", "birthDate": "2003-11-07T19:12:23-08:00", "phone": "1-545-228-2453", "affiliation": "Nunc Corporation", "userId": "Kow34xHe1Q4ip83I6" }, { "name": "Mohammad Beach", "birthDate": "1988-05-24T11:03:53-07:00", "phone": "1-983-425-8167", "affiliation": "Imperdiet Dictum Magna Limited", "userId": "CgH59UZB6z8dr24Q7" }, { "name": "Herman Saunders", "birthDate": "2004-05-06T17:36:38-07:00", "phone": "1-744-347-5888", "affiliation": "Parturient Montes LLC", "userId": "Ikf32Nje6H0Mv06v9" }, { "name": "Giselle Donovan", "birthDate": "1992-03-15T01:15:30-08:00", "phone": "1-602-610-2359", "affiliation": "Fusce Fermentum Limited", "userId": "MCG73Jla4g4HL41C6" }, { "name": "McKenzie Merrill", "birthDate": "1988-05-19T01:39:58-07:00", "phone": "1-405-922-2385", "affiliation": "Conubia Nostra Per Corp.", "userId": "kkb47cMQ6T0Vp89z7" }, { "name": "Jaime Clayton", "birthDate": "2000-04-25T00:34:19-07:00", "phone": "1-894-771-7649", "affiliation": "Nullam Velit LLP", "userId": "GHo45nwe6G4df58g9" }, { "name": "Ruby Bishop", "birthDate": "1986-03-12T05:25:28-08:00", "phone": "1-403-932-9444", "affiliation": "Pharetra Institute", "userId": "Uzd40gEr9t6QO69t1" }, { "name": "Rebecca Miller", "birthDate": "2003-03-17T19:50:42-08:00", "phone": "1-516-210-4671", "affiliation": "Ligula Aenean Associates", "userId": "zrP71aJg0I4Ps09o2" }, { "name": "MacKensie Hurst", "birthDate": "1994-09-18T21:48:56-07:00", "phone": "1-106-539-9515", "affiliation": "Morbi Ltd", "userId": "juR93XSm6C6wH33a8" }, { "name": "Dustin Gibbs", "birthDate": "1985-11-25T08:02:15-08:00", "phone": "1-502-920-2906", "affiliation": "Mi PC", "userId": "iGB15zhc8m0hp19k3" }, { "name": "Nissim Preston", "birthDate": "1991-06-11T16:39:05-07:00", "phone": "1-419-832-3712", "affiliation": "Augue Scelerisque Consulting", "userId": "mtu72nVr7U0rS78k3" }, { "name": "Tanner Gallagher", "birthDate": "2003-12-07T10:59:05-08:00", "phone": "1-391-634-8499", "affiliation": "Donec Felis Orci Institute", "userId": "oJO16onM6G8Ck43n9" }, { "name": "Castor Livingston", "birthDate": "2002-12-30T15:37:13-08:00", "phone": "1-805-836-6212", "affiliation": "Mauris Industries", "userId": "ydG22JeR6V1Rv95Y7" }, { "name": "Asher Peck", "birthDate": "1993-06-25T08:00:25-07:00", "phone": "1-959-801-5316", "affiliation": "In Condimentum Corp.", "userId": "Xef71Lak6c6wN86G6" }, { "name": "Ila Mccoy", "birthDate": "1997-07-26T09:33:55-07:00", "phone": "1-890-878-8247", "affiliation": "Dictum Magna Ut LLC", "userId": "pVi34lSh0J7jR78Y2" }, { "name": "Jared Walker", "birthDate": "2002-04-27T15:01:02-07:00", "phone": "1-204-732-7500", "affiliation": "Morbi Tristique Industries", "userId": "tSM47RUQ2o3LQ91Q1" }, { "name": "Callum Matthews", "birthDate": "2003-05-22T06:09:27-07:00", "phone": "1-307-292-4774", "affiliation": "Et Eros Proin LLC", "userId": "THf97eZl6k8DT66Y0" }, { "name": "Ann Griffith", "birthDate": "1994-01-31T15:01:51-08:00", "phone": "1-233-548-3510", "affiliation": "Sit Amet LLP", "userId": "xgS99GqJ2S5Ej63V3" }, { "name": "Drew Robbins", "birthDate": "1996-03-24T19:48:03-08:00", "phone": "1-389-637-9776", "affiliation": "Egestas A Industries", "userId": "YDW05ePE2Q0cm58m8" }, { "name": "Kasimir Guthrie", "birthDate": "2004-03-29T04:00:04-08:00", "phone": "1-628-351-2121", "affiliation": "Mi Ac Mattis Ltd", "userId": "Yjq61skL0b9oh02R4" }, { "name": "Lacy Spencer", "birthDate": "2002-01-19T17:40:46-08:00", "phone": "1-660-611-7919", "affiliation": "Enim Curabitur Ltd", "userId": "hMn88gSr0B6uo81q6" }, { "name": "Ramona Farley", "birthDate": "1993-03-20T20:09:20-08:00", "phone": "1-412-598-7807", "affiliation": "Consectetuer Industries", "userId": "WYz26bzd9z5Ar08t9" }, { "name": "Rana Gomez", "birthDate": "1997-02-26T04:32:05-08:00", "phone": "1-169-633-6218", "affiliation": "Amet Metus Aliquam Inc.", "userId": "CRp82hxL9K1sY96U3" }, { "name": "Uta William", "birthDate": "1987-02-01T19:46:27-08:00", "phone": "1-143-967-9135", "affiliation": "Eu PC", "userId": "xkc76thq5X2DP59H7" }, { "name": "Aretha Barry", "birthDate": "1991-07-16T15:12:08-07:00", "phone": "1-133-750-9846", "affiliation": "Libero Dui Incorporated", "userId": "pwE79cxu1M8qA24a3" }, { "name": "Aaron Moran", "birthDate": "1988-11-29T02:49:02-08:00", "phone": "1-435-874-8654", "affiliation": "Est Ac Facilisis Consulting", "userId": "JiQ35bui5b7hd91U9" }, { "name": "Hanae Maddox", "birthDate": "1989-10-01T07:15:52-07:00", "phone": "1-772-466-8976", "affiliation": "Sed Consulting", "userId": "IpJ81FMp9Z7zZ08x0" }, { "name": "Catherine Cabrera", "birthDate": "1996-10-16T06:28:14-07:00", "phone": "1-461-740-7106", "affiliation": "Sagittis Semper Nam Industries", "userId": "SRV06QKv4k8yw07h8" }, { "name": "Brandon Mccormick", "birthDate": "2001-05-25T23:22:42-07:00", "phone": "1-145-618-4490", "affiliation": "Eu Eleifend Incorporated", "userId": "Sxy42TBm0A7JB46e8" }, { "name": "Kasper Doyle", "birthDate": "1986-10-05T14:07:56-07:00", "phone": "1-571-989-3511", "affiliation": "Accumsan Ltd", "userId": "xIK66Faf1v1KJ72C1" }, { "name": "Quynn Gallegos", "birthDate": "1988-07-05T07:43:10-07:00", "phone": "1-234-801-0104", "affiliation": "Vestibulum Ante Ipsum Institute", "userId": "FOi63Pcj2n9aF49E3" }, { "name": "Rae Dorsey", "birthDate": "1993-10-01T10:26:46-07:00", "phone": "1-914-668-2523", "affiliation": "Quis Pede LLP", "userId": "HSr37gFs6o7iG77x4" }, { "name": "Rachel Ruiz", "birthDate": "2004-01-19T19:46:23-08:00", "phone": "1-933-931-1380", "affiliation": "Gravida Praesent Company", "userId": "CKM28nkj3p3VI43S5" }, { "name": "Holly Hays", "birthDate": "1986-11-03T22:18:15-08:00", "phone": "1-629-899-1809", "affiliation": "Lorem Eget Mollis Incorporated", "userId": "eVa84REP7c7AO13E0" }, { "name": "Lane York", "birthDate": "1986-11-08T13:25:18-08:00", "phone": "1-772-902-3447", "affiliation": "Arcu Sed Industries", "userId": "oAv28xZu1G2Hb81N7" }, { "name": "Clare Talley", "birthDate": "1986-10-16T09:41:39-07:00", "phone": "1-633-311-0297", "affiliation": "Laoreet Lectus Quis Institute", "userId": "wPH85KRt0s4Bu29v7" }, { "name": "Petra Ayers", "birthDate": "1999-04-05T14:05:27-07:00", "phone": "1-791-802-0722", "affiliation": "Id Company", "userId": "qfk09gpm8L6MS65B3" }, { "name": "Candace Santiago", "birthDate": "1986-10-13T21:58:40-07:00", "phone": "1-859-290-8638", "affiliation": "Tristique Senectus Incorporated", "userId": "wFW01qsU3w0DA94w2" }, { "name": "Fuller Mullins", "birthDate": "1997-10-22T04:07:18-07:00", "phone": "1-799-669-6229", "affiliation": "Eget Ipsum Donec Ltd", "userId": "Uvj03maV7B3ze09e8" }, { "name": "Jamal Beach", "birthDate": "1988-09-19T17:23:03-07:00", "phone": "1-748-607-5684", "affiliation": "Purus Maecenas Ltd", "userId": "QuB33WiX4v3bf88l6" }, { "name": "Tamara Brock", "birthDate": "1992-06-16T16:24:38-07:00", "phone": "1-190-731-5427", "affiliation": "Magnis Dis Parturient Foundation", "userId": "PYg20BGl2P6Jz17s9" }, { "name": "Todd Ferrell", "birthDate": "1998-08-14T00:24:05-07:00", "phone": "1-420-195-0783", "affiliation": "Commodo Auctor Velit Company", "userId": "mPi71yWN6h3wl41n3" }, { "name": "Thaddeus Charles", "birthDate": "1985-08-18T19:34:06-07:00", "phone": "1-735-262-2161", "affiliation": "Elementum Sem Vitae PC", "userId": "bcD74gtg0V9cQ33P8" }, { "name": "Amanda Henson", "birthDate": "1988-03-20T06:20:34-08:00", "phone": "1-951-967-4393", "affiliation": "Dolor Tempus Non Corp.", "userId": "Kwt84GZD0R2DY18W6" }, { "name": "Stacy Watts", "birthDate": "2001-02-02T00:19:50-08:00", "phone": "1-669-514-6842", "affiliation": "Eros LLC", "userId": "XRD37VpS1B4Bm66o0" }, { "name": "Sage Justice", "birthDate": "1991-05-17T14:23:48-07:00", "phone": "1-922-387-0547", "affiliation": "Malesuada Augue Corporation", "userId": "Rih82jfK7M7gn39V1" }, { "name": "Yolanda Shepherd", "birthDate": "1994-03-07T03:35:02-08:00", "phone": "1-527-133-6590", "affiliation": "Egestas Blandit Nam Inc.", "userId": "SOk32lyX3M7wJ20d1" }, { "name": "Carly Whitney", "birthDate": "1992-11-23T23:34:23-08:00", "phone": "1-716-836-4489", "affiliation": "Accumsan Consulting", "userId": "sMS15EyF1c3Wf78u1" }, { "name": "Rhoda Dickson", "birthDate": "2001-05-18T13:08:22-07:00", "phone": "1-182-772-5853", "affiliation": "Massa Industries", "userId": "TLe73XmG7e6gV81R7" }, { "name": "September Holder", "birthDate": "1996-01-01T15:02:01-08:00", "phone": "1-554-529-7380", "affiliation": "Libero Morbi Accumsan LLC", "userId": "RDR16YDi5k0Kh74d3" }, { "name": "Jasmine Cardenas", "birthDate": "1993-01-10T14:32:36-08:00", "phone": "1-268-664-2588", "affiliation": "Fusce Fermentum Institute", "userId": "ftS01Fgh1S8Aj90o1" }, { "name": "Raymond Burt", "birthDate": "1991-09-27T00:57:14-07:00", "phone": "1-343-942-6179", "affiliation": "Cras Convallis Convallis Foundation", "userId": "toR07JmR5a2HQ68d1" }, { "name": "Adam Pitts", "birthDate": "1988-11-17T20:02:42-08:00", "phone": "1-928-464-6684", "affiliation": "Eu Lacus Quisque Ltd", "userId": "aHI23meh6m4lN80A4" }, { "name": "Zachery Valdez", "birthDate": "2003-08-18T10:18:43-07:00", "phone": "1-473-955-0815", "affiliation": "Non Lorem Vitae Inc.", "userId": "uCM46MTQ3P9Iq94m9" }, { "name": "Aquila Kirk", "birthDate": "1998-06-08T06:27:50-07:00", "phone": "1-521-602-9034", "affiliation": "Phasellus Ornare Foundation", "userId": "oyQ69fuh3t0yq02H2" }, { "name": "Tyrone Cohen", "birthDate": "1997-04-05T16:57:14-08:00", "phone": "1-157-803-2407", "affiliation": "Phasellus Dapibus PC", "userId": "koX11Rov5J1rE05t2" }, { "name": "Lewis Washington", "birthDate": "1985-04-29T04:31:45-07:00", "phone": "1-263-573-1741", "affiliation": "Ornare Fusce Incorporated", "userId": "FPi89UxP2t3cJ69u7" }, { "name": "Hermione Francis", "birthDate": "1990-07-22T21:53:06-07:00", "phone": "1-284-230-7250", "affiliation": "Neque In PC", "userId": "DcO96OFG3N6dk99q1" }, { "name": "Emerald Cooley", "birthDate": "1987-06-19T21:34:52-07:00", "phone": "1-546-532-5597", "affiliation": "In Corporation", "userId": "icW54VKS5O1Ha12G0" }, { "name": "Lane Cherry", "birthDate": "2002-01-26T04:40:03-08:00", "phone": "1-822-242-3009", "affiliation": "Molestie Associates", "userId": "APv31yLQ1K8eX97B6" }, { "name": "Elijah Davis", "birthDate": "1992-07-09T08:10:30-07:00", "phone": "1-416-394-7710", "affiliation": "Malesuada Ut Incorporated", "userId": "TnI88bgC7v7IT46Z8" }, { "name": "Arden Mcgowan", "birthDate": "1984-08-22T12:51:27-07:00", "phone": "1-237-193-1527", "affiliation": "Cursus Et LLP", "userId": "Ane34VwS4t6mw87G1" }, { "name": "Rudyard Hammond", "birthDate": "1986-06-02T17:43:43-07:00", "phone": "1-329-623-5705", "affiliation": "Vel Mauris Integer Industries", "userId": "CQP42XMs9f7sw30Q3" }, { "name": "Malachi Oneill", "birthDate": "1989-06-30T09:44:27-07:00", "phone": "1-639-838-2143", "affiliation": "Magnis Dis Parturient Consulting", "userId": "DWH78KQL9q6oA40w8" }];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"transactions.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/transactions.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({Transactions:function(){return Transactions},Sessions:function(){return Sessions}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                       //
var Transactions = new Mongo.Collection('transactions');                                                               // 3
var Sessions = new Mongo.Collection('sessions');                                                                       // 4
                                                                                                                       //
TransactionSchema = new SimpleSchema({                                                                                 // 7
  musician: {                                                                                                          // 8
    type: String,                                                                                                      // 9
    label: "Musician ID"                                                                                               // 10
  },                                                                                                                   // 8
                                                                                                                       //
  // autoform: {                                                                                                       //
  //   type: "hidden"                                                                                                  //
  // }                                                                                                                 //
  accompanist: {                                                                                                       // 16
    type: String,                                                                                                      // 17
    label: "Accompanist ID"                                                                                            // 18
  },                                                                                                                   // 16
                                                                                                                       //
  // autoform: {                                                                                                       //
  //   type: "hidden"                                                                                                  //
  // }                                                                                                                 //
  repertoire: {                                                                                                        // 24
    type: [String],                                                                                                    // 25
    label: "Planned Repertoire"                                                                                        // 26
  },                                                                                                                   // 24
                                                                                                                       //
  status: {                                                                                                            // 29
    type: String,                                                                                                      // 30
    label: "Booking Status",                                                                                           // 31
    allowedValues: ['Pending', 'Ongoing', 'Completed', 'Rejected', 'Cancelled']                                        // 32
  },                                                                                                                   // 29
                                                                                                                       //
  // autoform: {                                                                                                       //
  //   type: "hidden"                                                                                                  //
  // }                                                                                                                 //
  startDate: {                                                                                                         // 38
    type: Date,                                                                                                        // 39
    label: "Start Date"                                                                                                // 40
  },                                                                                                                   // 38
                                                                                                                       //
  endDate: {                                                                                                           // 43
    type: Date,                                                                                                        // 44
    label: "End Date"                                                                                                  // 45
  },                                                                                                                   // 43
                                                                                                                       //
  rating: {                                                                                                            // 48
    type: Number,                                                                                                      // 49
    label: 'Booking Rating',                                                                                           // 50
    optional: true                                                                                                     // 51
  }                                                                                                                    // 48
});                                                                                                                    // 7
                                                                                                                       //
// autoform: {                                                                                                         //
//   type: "hidden"                                                                                                    //
// }                                                                                                                   //
SessionSchema = new SimpleSchema({                                                                                     // 59
                                                                                                                       //
  transaction: {                                                                                                       // 61
    type: String,                                                                                                      // 62
    label: "Transaction ID",                                                                                           // 63
    optional: true                                                                                                     // 64
  },                                                                                                                   // 61
                                                                                                                       //
  // autoform: {                                                                                                       //
  //   type: "hidden"                                                                                                  //
  // }                                                                                                                 //
  location: {                                                                                                          // 70
    type: String,                                                                                                      // 71
    label: 'Session Location'                                                                                          // 72
  },                                                                                                                   // 70
                                                                                                                       //
  suggestedTimes: {                                                                                                    // 75
    type: [Date],                                                                                                      // 76
    label: 'Suggested Times for Session'                                                                               // 77
  },                                                                                                                   // 75
                                                                                                                       //
  startTime: {                                                                                                         // 80
    type: Date,                                                                                                        // 81
    optional: true,                                                                                                    // 82
    label: 'Start Time'                                                                                                // 83
  },                                                                                                                   // 80
                                                                                                                       //
  duration: {                                                                                                          // 86
    type: Number,                                                                                                      // 87
    label: "Duration in Hours"                                                                                         // 88
  },                                                                                                                   // 86
                                                                                                                       //
  status: {                                                                                                            // 91
    type: String,                                                                                                      // 92
    label: 'Session Status',                                                                                           // 93
    allowedValues: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],                                                 // 94
    optional: true                                                                                                     // 95
  }                                                                                                                    // 91
                                                                                                                       //
});                                                                                                                    // 59
                                                                                                                       //
Sessions.attachSchema(SessionSchema);                                                                                  // 101
Transactions.attachSchema(TransactionSchema);                                                                          // 102
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/layouts/template.AccompanistDashboard.js");
require("./client/layouts/template.AddInfoLayout.js");
require("./client/layouts/template.BookingRequestLayout.js");
require("./client/layouts/template.BookingsLayout.js");
require("./client/layouts/template.HomeLayout.js");
require("./client/layouts/template.MainLayout.js");
require("./client/layouts/template.Navbar.js");
require("./client/layouts/template.NewAccompLayout.js");
require("./client/layouts/template.PaymentLayout.js");
require("./client/layouts/template.ProfileLayout.js");
require("./client/layouts/template.ResultsLayout.js");
require("./client/layouts/template.TestLayout.js");
require("./client/lib/googlePlaces.js");
require("./lib/routes.js");
require("./both/modules/_modules.js");
require("./both/modules/check-url-validity.js");
require("./client/modules/_modules.js");
require("./client/modules/upload-to-amazon-s3.js");
require("./collections/accompanistProfiles.js");
require("./collections/basicProfiles.js");
require("./collections/competitions.js");
require("./collections/images.js");
require("./collections/musicProfiles.js");
require("./collections/testData.js");
require("./collections/transactions.js");
require("./client/main.js");