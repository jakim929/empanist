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
var moment = Package['momentjs:moment'].moment;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Utility;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/utilities/utility.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility = {}                                                                                                           // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/utilities/initialize-select.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility.initializeSelect = function() {                                                                                // 1
  var template = this                                                                                                  // 2
  var select = template.$('select')                                                                                    // 3
  select.material_select()                                                                                             // 4
                                                                                                                       // 5
  var initialize = _.debounce(function () {                                                                            // 6
    select.material_select()                                                                                           // 7
  }, 500)                                                                                                              // 8
                                                                                                                       // 9
  template.autorun(function () {                                                                                       // 10
    // reinitialize select when data changes                                                                           // 11
    Template.currentData()                                                                                             // 12
    initialize()                                                                                                       // 13
  })                                                                                                                   // 14
}                                                                                                                      // 15
                                                                                                                       // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/utilities/dsk.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility.dsk = function() {                                                                                             // 1
  return {                                                                                                             // 2
    'data-schema-key': this.atts['data-schema-key']                                                                    // 3
  };                                                                                                                   // 4
};                                                                                                                     // 5
                                                                                                                       // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/utilities/selected-atts-adjust.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility.selectedAttsAdjust = function() {                                                                              // 1
  var atts = _.clone(this.atts)                                                                                        // 2
                                                                                                                       // 3
  if (this.selected) {                                                                                                 // 4
    atts.checked = ""                                                                                                  // 5
  }                                                                                                                    // 6
                                                                                                                       // 7
  atts.id = atts.id + "_" + this._id                                                                                   // 8
  delete atts['data-schema-key']                                                                                       // 9
  return atts                                                                                                          // 10
}                                                                                                                      // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/utilities/atts-toggle-invalid-class.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility.attsToggleInvalidClass = function() {                                                                          // 1
  var atts    = _.clone(this.atts);                                                                                    // 2
  var context = AutoForm.getFormSchema().namedContext(AutoForm.getFormId());                                           // 3
                                                                                                                       // 4
  if (context.keyIsInvalid(atts.name)) {                                                                               // 5
    atts = AutoForm.Utility.addClass(atts, 'invalid');                                                                 // 6
  }                                                                                                                    // 7
                                                                                                                       // 8
  return atts;                                                                                                         // 9
}                                                                                                                      // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/utilities/atts-check-selected.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility.attsCheckSelected = function() {                                                                               // 1
  var atts = Utility.attsToggleInvalidClass.call(this);                                                                // 2
  if (this.selected) {                                                                                                 // 3
    atts.checked = '';                                                                                                 // 4
  }                                                                                                                    // 5
  return atts;                                                                                                         // 6
};                                                                                                                     // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/utilities/option-atts.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility.optionAtts = function() {                                                                                      // 1
  var atts, item;                                                                                                      // 2
  item = this;                                                                                                         // 3
  atts = {                                                                                                             // 4
    value: item.value                                                                                                  // 5
  };                                                                                                                   // 6
  if (item.selected) {                                                                                                 // 7
    atts.selected = '';                                                                                                // 8
  }                                                                                                                    // 9
  return atts;                                                                                                         // 10
};                                                                                                                     // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/boolean-checkbox/template.boolean-checkbox.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afCheckbox_materialize");                                                                        // 2
Template["afCheckbox_materialize"] = new Template("Template.afCheckbox_materialize", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.P("\n    ", HTML.INPUT(HTML.Attrs({                                                                      // 5
    type: "checkbox",                                                                                                  // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  })), "\n    ", HTML.LABEL({                                                                                          // 12
    "for": function() {                                                                                                // 13
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 14
    }                                                                                                                  // 15
  }, Blaze.View("lookup:afFieldLabelText", function() {                                                                // 16
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 17
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 18
    }));                                                                                                               // 19
  })), "\n  ");                                                                                                        // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/boolean-checkbox/boolean-checkbox.js                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afCheckbox_materialize.helpers({                                                                              // 1
 atts: Utility.attsToggleInvalidClass                                                                                  // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/boolean-radios/template.boolean-radios.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afBooleanRadioGroup_materialize");                                                               // 2
Template["afBooleanRadioGroup_materialize"] = new Template("Template.afBooleanRadioGroup_materialize", (function() {   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    "class": function() {                                                                                              // 6
      return [ "af-radio-group ", Spacebars.mustache(view.lookup("rowColumnAtts")) ];                                  // 7
    }                                                                                                                  // 8
  }, function() {                                                                                                      // 9
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 10
  }), "\n    ", HTML.P({                                                                                               // 11
    "class": function() {                                                                                              // 12
      return Spacebars.mustache(view.lookup("falseColumnAtts"));                                                       // 13
    }                                                                                                                  // 14
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                               // 15
    id: function() {                                                                                                   // 16
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_false" ];                               // 17
    },                                                                                                                 // 18
    type: "radio",                                                                                                     // 19
    value: "false"                                                                                                     // 20
  }, function() {                                                                                                      // 21
    return Spacebars.attrMustache(view.lookup("falseAtts"));                                                           // 22
  })), "\n      ", HTML.LABEL({                                                                                        // 23
    "for": function() {                                                                                                // 24
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_false" ];                               // 25
    }                                                                                                                  // 26
  }, Spacebars.With(function() {                                                                                       // 27
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "falseLabel"));                                           // 28
  }, function() {                                                                                                      // 29
    return Blaze.View("lookup:.", function() {                                                                         // 30
      return Spacebars.mustache(view.lookup("."));                                                                     // 31
    });                                                                                                                // 32
  }, function() {                                                                                                      // 33
    return "False";                                                                                                    // 34
  })), "\n    "), "\n    ", HTML.P({                                                                                   // 35
    "class": function() {                                                                                              // 36
      return Spacebars.mustache(view.lookup("trueColumnAtts"));                                                        // 37
    }                                                                                                                  // 38
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                               // 39
    id: function() {                                                                                                   // 40
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_true" ];                                // 41
    },                                                                                                                 // 42
    type: "radio",                                                                                                     // 43
    value: "true"                                                                                                      // 44
  }, function() {                                                                                                      // 45
    return Spacebars.attrMustache(view.lookup("trueAtts"));                                                            // 46
  })), "\n      ", HTML.LABEL({                                                                                        // 47
    "for": function() {                                                                                                // 48
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_true" ];                                // 49
    }                                                                                                                  // 50
  }, Spacebars.With(function() {                                                                                       // 51
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "trueLabel"));                                            // 52
  }, function() {                                                                                                      // 53
    return Blaze.View("lookup:.", function() {                                                                         // 54
      return Spacebars.mustache(view.lookup("."));                                                                     // 55
    });                                                                                                                // 56
  }, function() {                                                                                                      // 57
    return "True";                                                                                                     // 58
  })), "\n    "), "\n  ");                                                                                             // 59
}));                                                                                                                   // 60
                                                                                                                       // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/boolean-radios/boolean-radios.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afBooleanRadioGroup_materialize.helpers({                                                                     // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
Template.afBooleanRadioGroup_materialize.helpers({                                                                     // 5
  falseAtts: function() {                                                                                              // 6
    var atts;                                                                                                          // 7
    atts = _.omit(this.atts, 'id', 'trueLabel', 'falseLabel', 'data-schema-key');                                      // 8
    if (this.value === false) {                                                                                        // 9
      atts.checked = '';                                                                                               // 10
    }                                                                                                                  // 11
    return atts;                                                                                                       // 12
  },                                                                                                                   // 13
  trueAtts: function() {                                                                                               // 14
    var atts;                                                                                                          // 15
    atts = _.omit(this.atts, 'id', 'trueLabel', 'falseLabel', 'data-schema-key');                                      // 16
    if (this.value === true) {                                                                                         // 17
      atts.checked = '';                                                                                               // 18
    }                                                                                                                  // 19
    return atts;                                                                                                       // 20
  },                                                                                                                   // 21
  dsk: function() {                                                                                                    // 22
    return {                                                                                                           // 23
      'data-schema-key': this.atts['data-schema-key']                                                                  // 24
    };                                                                                                                 // 25
  }                                                                                                                    // 26
});                                                                                                                    // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/boolean-select/template.boolean-select.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afBooleanSelect_materialize");                                                                   // 2
Template["afBooleanSelect_materialize"] = new Template("Template.afBooleanSelect_materialize", (function() {           // 3
  var view = this;                                                                                                     // 4
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 6
  }), "\n    ", Blaze.Each(function() {                                                                                // 7
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.OPTION(HTML.Attrs(function() {                                                           // 10
      return Spacebars.attrMustache(view.lookup("optionAtts"));                                                        // 11
    }), Blaze.View("lookup:..label", function() {                                                                      // 12
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 13
    })), "\n    " ];                                                                                                   // 14
  }), "\n  ");                                                                                                         // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/boolean-select/boolean-select.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afBooleanSelect_materialize.helpers({                                                                         // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
Template.afBooleanSelect_materialize.helpers({                                                                         // 5
  optionAtts: Utility.optionAtts                                                                                       // 6
});                                                                                                                    // 7
                                                                                                                       // 8
Template.afBooleanSelect_materialize.onRendered(Utility.initializeSelect);                                             // 9
                                                                                                                       // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/button/template.button.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputButton_materialize");                                                                     // 2
Template["afInputButton_materialize"] = new Template("Template.afInputButton_materialize", (function() {               // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "button",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("attsPlusBtnClassMaterializeCss"), view.lookup("atts"));                 // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/color/template.color.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputColor_materialize");                                                                      // 2
Template["afInputColor_materialize"] = new Template("Template.afInputColor_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "color",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/color/color.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputColor_materialize.helpers({                                                                            // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/contenteditable/template.contenteditable.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afContenteditable_materialize");                                                                 // 2
Template["afContenteditable_materialize"] = new Template("Template.afContenteditable_materialize", (function() {       // 3
  var view = this;                                                                                                     // 4
  return [ Blaze.View("lookup:getValue", function() {                                                                  // 5
    return Spacebars.mustache(view.lookup("getValue"), Spacebars.dot(view.lookup("."), "value"));                      // 6
  }), "\n  ", HTML.DIV(HTML.Attrs({                                                                                    // 7
    contenteditable: "true"                                                                                            // 8
  }, function() {                                                                                                      // 9
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 10
  })) ];                                                                                                               // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/date/template.date.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputDate_materialize");                                                                       // 2
Template["afInputDate_materialize"] = new Template("Template.afInputDate_materialize", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "date",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/date/date.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputDate_materialize.helpers({                                                                             // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/datetime/template.datetime.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputDateTime_materialize");                                                                   // 2
Template["afInputDateTime_materialize"] = new Template("Template.afInputDateTime_materialize", (function() {           // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "datetime",                                                                                                  // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/datetime/datetime.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputDateTime_materialize.helpers({                                                                         // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/datetime-local/template.datetime-local.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputDateTimeLocal_materialize");                                                              // 2
Template["afInputDateTimeLocal_materialize"] = new Template("Template.afInputDateTimeLocal_materialize", (function() {
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "datetime-local",                                                                                            // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/datetime-local/datetime-local.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputDateTimeLocal_materialize.helpers({                                                                    // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/email/template.email.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputEmail_materialize");                                                                      // 2
Template["afInputEmail_materialize"] = new Template("Template.afInputEmail_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "email",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/email/email.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputEmail_materialize.helpers({                                                                            // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/file/template.file.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputFile_materialize");                                                                       // 2
Template["afInputFile_materialize"] = new Template("Template.afInputFile_materialize", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "file",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/hidden/template.hidden.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputHidden_materialize");                                                                     // 2
Template["afInputHidden_materialize"] = new Template("Template.afInputHidden_materialize", (function() {               // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "hidden",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/icon/template.icon.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afIcon_materialize");                                                                            // 2
Template["afIcon_materialize"] = new Template("Template.afIcon_materialize", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return HTML.I({                                                                                                      // 5
    "class": "material-icons prefix"                                                                                   // 6
  }, Blaze.View("lookup:..icon", function() {                                                                          // 7
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "icon"));                                                // 8
  }));                                                                                                                 // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/image/template.image.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputImage_materialize");                                                                      // 2
Template["afInputImage_materialize"] = new Template("Template.afInputImage_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "image",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/month/template.month.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputMonth_materialize");                                                                      // 2
Template["afInputMonth_materialize"] = new Template("Template.afInputMonth_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "month",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/month/month.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputMonth_materialize.helpers({                                                                            // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/number/template.number.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputNumber_materialize");                                                                     // 2
Template["afInputNumber_materialize"] = new Template("Template.afInputNumber_materialize", (function() {               // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "number",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/number/number.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputNumber_materialize.helpers({                                                                           // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/password/template.password.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputPassword_materialize");                                                                   // 2
Template["afInputPassword_materialize"] = new Template("Template.afInputPassword_materialize", (function() {           // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "password",                                                                                                  // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/password/password.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputPassword_materialize.helpers({                                                                         // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
Template.afInputPassword_materialize.rendered = function() {                                                           // 5
    this.$('textarea').characterCounter();                                                                             // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/radio/template.radio.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afRadio_materialize");                                                                           // 2
Template["afRadio_materialize"] = new Template("Template.afRadio_materialize", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return HTML.P("\n    ", HTML.INPUT(HTML.Attrs({                                                                      // 5
    type: "radio",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  })), "\n    ", HTML.LABEL({                                                                                          // 12
    "for": function() {                                                                                                // 13
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 14
    }                                                                                                                  // 15
  }, Blaze.View("lookup:afFieldLabelText", function() {                                                                // 16
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 17
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 18
    }));                                                                                                               // 19
  })), "\n  ");                                                                                                        // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/radio/radio.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afRadio_materialize.helpers({                                                                                 // 1
  atts:     Utility.attsCheckSelected,                                                                                 // 2
  dsk:      Utility.dsk,                                                                                               // 3
});                                                                                                                    // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/range/template.range.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputRange_materialize");                                                                      // 2
Template["afInputRange_materialize"] = new Template("Template.afInputRange_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.P({                                                                                                      // 5
    "class": "range-field"                                                                                             // 6
  }, "\n    ", HTML.INPUT(HTML.Attrs({                                                                                 // 7
    type: "range",                                                                                                     // 8
    value: function() {                                                                                                // 9
      return Spacebars.mustache(view.lookup("value"));                                                                 // 10
    }                                                                                                                  // 11
  }, function() {                                                                                                      // 12
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 13
  })), "\n  ");                                                                                                        // 14
}));                                                                                                                   // 15
                                                                                                                       // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/reset/template.reset.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputReset_materialize");                                                                      // 2
Template["afInputReset_materialize"] = new Template("Template.afInputReset_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "reset",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("attsPlusBtnClassMaterializeCss"), view.lookup("atts"));                 // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/search/template.search.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputSearch_materialize");                                                                     // 2
Template["afInputSearch_materialize"] = new Template("Template.afInputSearch_materialize", (function() {               // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "search",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select/template.select.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afSelect_materialize");                                                                          // 2
Template["afSelect_materialize"] = new Template("Template.afSelect_materialize", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 6
  }), "\n    ", Blaze.Each(function() {                                                                                // 7
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", Blaze.If(function() {                                                                         // 10
      return Spacebars.call(Spacebars.dot(view.lookup("."), "optgroup"));                                              // 11
    }, function() {                                                                                                    // 12
      return [ "\n        ", HTML.OPTGROUP({                                                                           // 13
        label: function() {                                                                                            // 14
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "optgroup"));                                      // 15
        }                                                                                                              // 16
      }, "\n          ", Blaze.Each(function() {                                                                       // 17
        return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                               // 18
      }, function() {                                                                                                  // 19
        return [ "\n          ", HTML.OPTION(HTML.Attrs(function() {                                                   // 20
          return Spacebars.attrMustache(view.lookup("optionAtts"));                                                    // 21
        }), Blaze.View("lookup:..label", function() {                                                                  // 22
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                         // 23
        })), "\n          " ];                                                                                         // 24
      }), "\n        "), "\n      " ];                                                                                 // 25
    }, function() {                                                                                                    // 26
      return [ "\n        ", HTML.OPTION(HTML.Attrs(function() {                                                       // 27
        return Spacebars.attrMustache(view.lookup("optionAtts"));                                                      // 28
      }), Blaze.View("lookup:..label", function() {                                                                    // 29
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                           // 30
      })), "\n      " ];                                                                                               // 31
    }), "\n    " ];                                                                                                    // 32
  }), "\n  ");                                                                                                         // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select/select.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afSelect_materialize.helpers({                                                                                // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
Template.afSelect_materialize.helpers({                                                                                // 4
  optionAtts: Utility.optionAtts                                                                                       // 5
});                                                                                                                    // 6
                                                                                                                       // 7
Template.afSelect_materialize.onRendered(Utility.initializeSelect);                                                    // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-checkbox/template.select-checkbox.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afCheckboxGroup_materialize");                                                                   // 2
Template["afCheckboxGroup_materialize"] = new Template("Template.afCheckboxGroup_materialize", (function() {           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    "class": "af-checkbox-group collection"                                                                            // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n    ", Blaze.Each(function() {                                                                                // 9
    return Spacebars.call(view.lookup("items"));                                                                       // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", HTML.P("\n      ", HTML.INPUT(HTML.Attrs({                                                      // 12
      type: "checkbox",                                                                                                // 13
      value: function() {                                                                                              // 14
        return Spacebars.mustache(view.lookup("value"));                                                               // 15
      }                                                                                                                // 16
    }, function() {                                                                                                    // 17
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 18
    })), "\n      ", HTML.LABEL({                                                                                      // 19
      "for": function() {                                                                                              // 20
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 21
      }                                                                                                                // 22
    }, Blaze.View("lookup:label", function() {                                                                         // 23
      return Spacebars.mustache(view.lookup("label"));                                                                 // 24
    })), "\n    "), "\n    " ];                                                                                        // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-checkbox/select-checkbox.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afCheckboxGroup_materialize.helpers({                                                                         // 1
  dsk:      Utility.dsk,                                                                                               // 2
  itemAtts: Utility.selectedAttsAdjust,                                                                                // 3
})                                                                                                                     // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-checkbox-inline/template.select-checkbox-inline.js         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afCheckboxGroupInline_materialize");                                                             // 2
Template["afCheckboxGroupInline_materialize"] = new Template("Template.afCheckboxGroupInline_materialize", (function() {
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    "class": "af-checkbox-group"                                                                                       // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n    ", Blaze.Each(function() {                                                                                // 9
    return Spacebars.call(view.lookup("items"));                                                                       // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", HTML.P("\n      ", HTML.INPUT(HTML.Attrs({                                                      // 12
      type: "checkbox",                                                                                                // 13
      value: function() {                                                                                              // 14
        return Spacebars.mustache(view.lookup("value"));                                                               // 15
      }                                                                                                                // 16
    }, function() {                                                                                                    // 17
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 18
    })), "\n      ", HTML.LABEL({                                                                                      // 19
      "for": function() {                                                                                              // 20
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 21
      }                                                                                                                // 22
    }, Blaze.View("lookup:label", function() {                                                                         // 23
      return Spacebars.mustache(view.lookup("label"));                                                                 // 24
    })), "\n    "), "\n    " ];                                                                                        // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-checkbox-inline/select-checkbox-inline.js                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afCheckboxGroupInline_materialize.helpers({                                                                   // 1
  dsk:      Utility.dsk,                                                                                               // 2
  itemAtts: Utility.selectedAttsAdjust                                                                                 // 3
})                                                                                                                     // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-multiple/template.select-multiple.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afSelectMultiple_materialize");                                                                  // 2
Template["afSelectMultiple_materialize"] = new Template("Template.afSelectMultiple_materialize", (function() {         // 3
  var view = this;                                                                                                     // 4
  return HTML.SELECT(HTML.Attrs({                                                                                      // 5
    multiple: ""                                                                                                       // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 8
  }), "\n    ", Blaze.Each(function() {                                                                                // 9
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 10
  }, function() {                                                                                                      // 11
    return [ "\n      ", Blaze.If(function() {                                                                         // 12
      return Spacebars.call(Spacebars.dot(view.lookup("."), "optgroup"));                                              // 13
    }, function() {                                                                                                    // 14
      return [ "\n        ", HTML.OPTGROUP({                                                                           // 15
        label: function() {                                                                                            // 16
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "optgroup"));                                      // 17
        }                                                                                                              // 18
      }, "\n          ", Blaze.Each(function() {                                                                       // 19
        return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                               // 20
      }, function() {                                                                                                  // 21
        return [ "\n            ", HTML.OPTION(HTML.Attrs(function() {                                                 // 22
          return Spacebars.attrMustache(view.lookup("optionAtts"));                                                    // 23
        }), Blaze.View("lookup:..label", function() {                                                                  // 24
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                         // 25
        })), "\n          " ];                                                                                         // 26
      }), "\n        "), "\n      " ];                                                                                 // 27
    }, function() {                                                                                                    // 28
      return [ "\n        ", HTML.OPTION(HTML.Attrs(function() {                                                       // 29
        return Spacebars.attrMustache(view.lookup("optionAtts"));                                                      // 30
      }), Blaze.View("lookup:..label", function() {                                                                    // 31
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                           // 32
      })), "\n      " ];                                                                                               // 33
    }), "\n    " ];                                                                                                    // 34
  }), "\n  ");                                                                                                         // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-multiple/select-multiple.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afSelectMultiple_materialize.helpers({                                                                        // 1
  optionAtts: Utility.optionAtts                                                                                       // 2
});                                                                                                                    // 3
                                                                                                                       // 4
Template.afSelectMultiple_materialize.helpers({                                                                        // 5
  atts: function() {                                                                                                   // 6
    var atts = Utility.attsToggleInvalidClass.call(this);                                                              // 7
    return AutoForm.Utility.addClass(atts, 'browser-default');                                                         // 8
  }                                                                                                                    // 9
});                                                                                                                    // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-radio/template.select-radio.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afRadioGroup_materialize");                                                                      // 2
Template["afRadioGroup_materialize"] = new Template("Template.afRadioGroup_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    "class": "af-radio-group"                                                                                          // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n    ", Blaze.Each(function() {                                                                                // 9
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", HTML.P("\n      ", HTML.INPUT(HTML.Attrs({                                                      // 12
      type: "radio",                                                                                                   // 13
      value: function() {                                                                                              // 14
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 15
      }                                                                                                                // 16
    }, function() {                                                                                                    // 17
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 18
    })), "\n      ", HTML.LABEL({                                                                                      // 19
      "for": function() {                                                                                              // 20
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 21
      }                                                                                                                // 22
    }, Blaze.View("lookup:..label", function() {                                                                       // 23
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 24
    })), "\n    "), "\n    " ];                                                                                        // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-radio/select-radio.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afRadioGroup_materialize.helpers({                                                                            // 1
  dsk:      Utility.dsk,                                                                                               // 2
  itemAtts: Utility.selectedAttsAdjust                                                                                 // 3
})                                                                                                                     // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-radio-inline/template.select-radio-inline.js               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afRadioGroupInline_materialize");                                                                // 2
Template["afRadioGroupInline_materialize"] = new Template("Template.afRadioGroupInline_materialize", (function() {     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    "class": "af-radio-group"                                                                                          // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n        ", HTML.P("\n            ", Blaze.Each(function() {                                                   // 9
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 10
  }, function() {                                                                                                      // 11
    return [ "\n                ", HTML.SPAN("\n                    ", HTML.INPUT(HTML.Attrs({                         // 12
      type: "radio",                                                                                                   // 13
      value: function() {                                                                                              // 14
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 15
      }                                                                                                                // 16
    }, function() {                                                                                                    // 17
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 18
    })), "\n                    ", HTML.LABEL({                                                                        // 19
      "for": function() {                                                                                              // 20
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 21
      }                                                                                                                // 22
    }, Blaze.View("lookup:..label", function() {                                                                       // 23
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 24
    })), "\n                "), "\n            " ];                                                                    // 25
  }), "\n        "), "\n    ");                                                                                        // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/select-radio-inline/select-radio-inline.js                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afRadioGroupInline_materialize.helpers({                                                                      // 1
  dsk:      Utility.dsk,                                                                                               // 2
  itemAtts: Utility.selectedAttsAdjust                                                                                 // 3
})                                                                                                                     // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/submit/template.submit.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputSubmit_materialize");                                                                     // 2
Template["afInputSubmit_materialize"] = new Template("Template.afInputSubmit_materialize", (function() {               // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "submit",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("attsPlusBtnClassMaterializeCss"), view.lookup("atts"));                 // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/tel/template.tel.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputTel_materialize");                                                                        // 2
Template["afInputTel_materialize"] = new Template("Template.afInputTel_materialize", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "tel",                                                                                                       // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/tel/tel.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputTel_materialize.helpers({                                                                              // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/text/template.text.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputText_materialize");                                                                       // 2
Template["afInputText_materialize"] = new Template("Template.afInputText_materialize", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "text",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(view.lookup("value"));                                                                 // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/text/text.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputText_materialize.helpers({                                                                             // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
})                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/textarea/template.textarea.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afTextarea_materialize");                                                                        // 2
Template["afTextarea_materialize"] = new Template("Template.afTextarea_materialize", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.TEXTAREA(HTML.Attrs(function() {                                                                         // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 6
  }, {                                                                                                                 // 7
    value: function() {                                                                                                // 8
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 9
    }                                                                                                                  // 10
  }));                                                                                                                 // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/textarea/textarea.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afTextarea_materialize.helpers({                                                                              // 1
  atts: function() {                                                                                                   // 2
    var atts = Utility.attsToggleInvalidClass.call(this);                                                              // 3
    return AutoForm.Utility.addClass(atts, "materialize-textarea");                                                    // 4
  }                                                                                                                    // 5
});                                                                                                                    // 6
                                                                                                                       // 7
Template.afTextarea_materialize.rendered = function() {                                                                // 8
    this.$('textarea').characterCounter();                                                                             // 9
};                                                                                                                     // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/time/template.time.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputTime_materialize");                                                                       // 2
Template["afInputTime_materialize"] = new Template("Template.afInputTime_materialize", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "time",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/time/time.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputTime_materialize.helpers({                                                                             // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/url/template.url.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputUrl_materialize");                                                                        // 2
Template["afInputUrl_materialize"] = new Template("Template.afInputUrl_materialize", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "url",                                                                                                       // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/url/url.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputUrl_materialize.helpers({                                                                              // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/week/template.week.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputWeek_materialize");                                                                       // 2
Template["afInputWeek_materialize"] = new Template("Template.afInputWeek_materialize", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "week",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/week/week.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputWeek_materialize.helpers({                                                                             // 1
  atts: Utility.attsToggleInvalidClass                                                                                 // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/switch/template.switch.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afSwitch");                                                                                      // 2
Template["afSwitch"] = new Template("Template.afSwitch", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "switch"                                                                                                  // 6
  }, "\n    ", HTML.LABEL({                                                                                            // 7
    "for": function() {                                                                                                // 8
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 9
    }                                                                                                                  // 10
  }, "\n      ", Spacebars.With(function() {                                                                           // 11
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "falseLabel"));                                           // 12
  }, function() {                                                                                                      // 13
    return Blaze.View("lookup:.", function() {                                                                         // 14
      return Spacebars.mustache(view.lookup("."));                                                                     // 15
    });                                                                                                                // 16
  }, function() {                                                                                                      // 17
    return "Off";                                                                                                      // 18
  }), "\n      ", HTML.INPUT(HTML.Attrs({                                                                              // 19
    type: "checkbox",                                                                                                  // 20
    value: function() {                                                                                                // 21
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 22
    }                                                                                                                  // 23
  }, function() {                                                                                                      // 24
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 25
  })), "\n      ", HTML.Raw('<span class="lever"></span>'), "\n      ", Spacebars.With(function() {                    // 26
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "trueLabel"));                                            // 27
  }, function() {                                                                                                      // 28
    return Blaze.View("lookup:.", function() {                                                                         // 29
      return Spacebars.mustache(view.lookup("."));                                                                     // 30
    });                                                                                                                // 31
  }, function() {                                                                                                      // 32
    return "On";                                                                                                       // 33
  }), "\n    "), "\n  ");                                                                                              // 34
}));                                                                                                                   // 35
                                                                                                                       // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/switch/switch.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AutoForm.addInputType('switch', {                                                                                      // 1
  template: 'afSwitch',                                                                                                // 2
  valueIn: function(value) {                                                                                           // 3
    return value;                                                                                                      // 4
  },                                                                                                                   // 5
  valueOut: function() {                                                                                               // 6
    var checked, input, ref, ref1, result;                                                                             // 7
    input = this[0];                                                                                                   // 8
    checked = input.checked;                                                                                           // 9
    if (checked) {                                                                                                     // 10
      result = ((ref = input.attributes.trueValue) != null ? ref.value : void 0) || true;                              // 11
    } else {                                                                                                           // 12
      result = ((ref1 = input.attributes.falseValue) != null ? ref1.value : void 0) || false;                          // 13
    }                                                                                                                  // 14
    return result;                                                                                                     // 15
  }                                                                                                                    // 16
});                                                                                                                    // 17
                                                                                                                       // 18
Template.afSwitch.onRendered(function() {                                                                              // 19
  var input;                                                                                                           // 20
  input = this.$('input');                                                                                             // 21
  return this.autorun((function(_this) {                                                                               // 22
    return function() {                                                                                                // 23
      var data, trueValue;                                                                                             // 24
      data = Template.currentData();                                                                                   // 25
      trueValue = _this.data.atts.trueValue || true;                                                                   // 26
      return input.prop('checked', data.value === trueValue);                                                          // 27
    };                                                                                                                 // 28
  })(this));                                                                                                           // 29
});                                                                                                                    // 30
                                                                                                                       // 31
Template.afSwitch.helpers({                                                                                            // 32
  atts: function() {                                                                                                   // 33
    return _.extend(this.atts, {                                                                                       // 34
      id: this.atts.name                                                                                               // 35
    });                                                                                                                // 36
  }                                                                                                                    // 37
});                                                                                                                    // 38
                                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/pickadate/template.pickadate.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afPickadate");                                                                                   // 2
Template["afPickadate"] = new Template("Template.afPickadate", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "date",                                                                                                      // 6
    "data-value": function() {                                                                                         // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    },                                                                                                                 // 9
    value: function() {                                                                                                // 10
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 11
    },                                                                                                                 // 12
    checked: "checked/"                                                                                                // 13
  }, function() {                                                                                                      // 14
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 15
  }));                                                                                                                 // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/pickadate/pickadate.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var DEFAULT_PICKADATE_FORMAT_SUBMIT = 'yyyy/mm/dd';                                                                    // 1
                                                                                                                       // 2
AutoForm.addInputType('pickadate', {                                                                                   // 3
  template: 'afPickadate',                                                                                             // 4
  valueIn: function(val, atts) {                                                                                       // 5
    var result, timezoneId;                                                                                            // 6
    result = val;                                                                                                      // 7
    timezoneId = atts.timezoneId;                                                                                      // 8
    if (typeof timezoneId === 'string') {                                                                              // 9
      if (typeof moment.tz !== 'function') {                                                                           // 10
        throw new Error('If you specify a timezoneId, make sure that you\'ve added a moment-timezone package to your app');
      }                                                                                                                // 12
      if (val instanceof Date) {                                                                                       // 13
        result = moment(                                                                                               // 14
          AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(val, timezoneId),                                    // 15
          'YYYY-MM-DD[T]HH:mm:ss.SSS'                                                                                  // 16
        ).toDate();                                                                                                    // 17
      }                                                                                                                // 18
    }                                                                                                                  // 19
    return result;                                                                                                     // 20
  },                                                                                                                   // 21
  valueOut: function() {                                                                                               // 22
    var picker = this.pickadate('picker');                                                                             // 23
    var item   = picker && picker.get('select');                                                                       // 24
    return item && item.obj;                                                                                           // 25
  },                                                                                                                   // 26
  valueConverters: {                                                                                                   // 27
    'string': function(val) {                                                                                          // 28
      if (val instanceof Date) {                                                                                       // 29
        return val.toString();                                                                                         // 30
      } else {                                                                                                         // 31
        return val;                                                                                                    // 32
      }                                                                                                                // 33
    },                                                                                                                 // 34
    'stringArray': function(val) {                                                                                     // 35
      if (val instanceof Date) {                                                                                       // 36
        return [val.toString()];                                                                                       // 37
      }                                                                                                                // 38
      return val;                                                                                                      // 39
    },                                                                                                                 // 40
    'number': function(val) {                                                                                          // 41
      if (val instanceof Date) {                                                                                       // 42
        return val.getTime();                                                                                          // 43
      } else {                                                                                                         // 44
        return val;                                                                                                    // 45
      }                                                                                                                // 46
    },                                                                                                                 // 47
    'numberArray': function(val) {                                                                                     // 48
      if (val instanceof Date) {                                                                                       // 49
        return [val.getTime()];                                                                                        // 50
      }                                                                                                                // 51
      return val;                                                                                                      // 52
    },                                                                                                                 // 53
    'dateArray': function(val) {                                                                                       // 54
      if (val instanceof Date) {                                                                                       // 55
        return [val];                                                                                                  // 56
      }                                                                                                                // 57
      return val;                                                                                                      // 58
    }                                                                                                                  // 59
  },                                                                                                                   // 60
  contextAdjust: function(context) {                                                                                   // 61
    if (context.atts.timezoneId) {                                                                                     // 62
      context.atts["data-timezone-id"] = context.atts.timezoneId;                                                      // 63
    }                                                                                                                  // 64
    delete context.atts.timezoneId;                                                                                    // 65
    return context;                                                                                                    // 66
  }                                                                                                                    // 67
});                                                                                                                    // 68
                                                                                                                       // 69
Template['afPickadate'].rendered = function() {                                                                        // 70
  var input, opts, picker, userOptions;                                                                                // 71
  userOptions = this.data.atts.pickadateOptions || {};                                                                 // 72
  opts = _.defaults(userOptions, {                                                                                     // 73
    format: DEFAULT_PICKADATE_FORMAT_SUBMIT,                                                                           // 74
    hiddenName: true,                                                                                                  // 75
    closeOnSelect: true                                                                                                // 76
  });                                                                                                                  // 77
  input = this.$('input').pickadate(opts);                                                                             // 78
  picker = input.pickadate('picker');                                                                                  // 79
  this.$('input').on('change', function() {                                                                            // 80
    return $(this).pickadate('picker').close();                                                                        // 81
  });                                                                                                                  // 82
  if (this.data.value) {                                                                                               // 83
    this.$('input').parent().find('label').addClass('active');                                                         // 84
  }                                                                                                                    // 85
  this.autorun(function() {                                                                                            // 86
    var data;                                                                                                          // 87
    data = Template.currentData();                                                                                     // 88
    if (data.value instanceof Date) {                                                                                  // 89
      picker.set('select', data.value);                                                                                // 90
    }                                                                                                                  // 91
    if (data.min instanceof Date) {                                                                                    // 92
      picker.set('min', data.min);                                                                                     // 93
    }                                                                                                                  // 94
    if (data.max instanceof Date) {                                                                                    // 95
      return picker.set('max', data.max);                                                                              // 96
    }                                                                                                                  // 97
  });                                                                                                                  // 98
};                                                                                                                     // 99
                                                                                                                       // 100
Template.afPickadate.helpers({                                                                                         // 101
  atts: function() {                                                                                                   // 102
    var atts;                                                                                                          // 103
    atts = _.clone(this.atts);                                                                                         // 104
    delete atts.dateTimePickerOptions;                                                                                 // 105
    delete atts.pickadateOptions;                                                                                      // 106
    return atts;                                                                                                       // 107
  }                                                                                                                    // 108
});                                                                                                                    // 109
                                                                                                                       // 110
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/label/template.label.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afLabel_materialize");                                                                           // 2
Template["afLabel_materialize"] = new Template("Template.afLabel_materialize", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return HTML.LABEL(HTML.Attrs({                                                                                       // 5
    "for": function() {                                                                                                // 6
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 7
    }                                                                                                                  // 8
  }, function() {                                                                                                      // 9
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 10
  }), "\n    ", Blaze.If(function() {                                                                                  // 11
    return Spacebars.call(Spacebars.dot(view.lookup("."), "labelText"));                                               // 12
  }, function() {                                                                                                      // 13
    return [ Blaze.View("lookup:..labelText", function() {                                                             // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "labelText"));                                         // 15
    }), "\n    " ];                                                                                                    // 16
  }, function() {                                                                                                      // 17
    return [ Blaze.View("lookup:afFieldLabelText", function() {                                                        // 18
      return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                        // 19
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 20
      }));                                                                                                             // 21
    }), "\n    " ];                                                                                                    // 22
  }), "\n  ");                                                                                                         // 23
}));                                                                                                                   // 24
                                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/inputTypes/label/label.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afLabel_materialize.helpers({                                                                                 // 1
  atts: function() {                                                                                                   // 2
    var labelAtts;                                                                                                     // 3
    labelAtts = this.afFieldLabelAtts;                                                                                 // 4
    return labelAtts;                                                                                                  // 5
  }                                                                                                                    // 6
});                                                                                                                    // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/autoForm/template.autoForm.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("autoForm_materialize");                                                                          // 2
Template["autoForm_materialize"] = new Template("Template.autoForm_materialize", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze.Unless(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("afDestroyUpdateForm"));                                                         // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.FORM(HTML.Attrs(function() {                                                               // 8
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 9
    }), "\n      ", HTML.DIV({                                                                                         // 10
      "class": "row"                                                                                                   // 11
    }, "\n        ", Spacebars.With(function() {                                                                       // 12
      return Spacebars.dataMustache(view.lookup("innerContext"), view.lookup(".."));                                   // 13
    }, function() {                                                                                                    // 14
      return [ "\n          ", Blaze._InOuterTemplateScope(view, function() {                                          // 15
        return Blaze._TemplateWith(function() {                                                                        // 16
          return Spacebars.call(view.lookup("."));                                                                     // 17
        }, function() {                                                                                                // 18
          return Spacebars.include(function() {                                                                        // 19
            return Spacebars.call(view.templateContentBlock);                                                          // 20
          });                                                                                                          // 21
        });                                                                                                            // 22
      }), "\n        " ];                                                                                              // 23
    }), "\n      "), "\n    "), "\n  " ];                                                                              // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/quickForm/template.quickForm.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("quickForm_materialize");                                                                         // 2
Template["quickForm_materialize"] = new Template("Template.quickForm_materialize", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return Spacebars.call(Spacebars.dot(view.lookup("."), "qfAutoFormContext"));                                       // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 8
      return [ "\n    ", Spacebars.include(view.lookupTemplate("afQuickFields")), "\n    ", Blaze.If(function() {      // 9
        return Spacebars.call(view.lookup("qfShouldRenderButton"));                                                    // 10
      }, function() {                                                                                                  // 11
        return [ "\n      ", HTML.DIV({                                                                                // 12
          "class": "row"                                                                                               // 13
        }, "\n        ", HTML.DIV({                                                                                    // 14
          "class": "col s12"                                                                                           // 15
        }, "\n          ", HTML.BUTTON(HTML.Attrs({                                                                    // 16
          type: "submit"                                                                                               // 17
        }, function() {                                                                                                // 18
          return Spacebars.attrMustache(view.lookup("submitButtonAtts"));                                              // 19
        }), "\n            ", Spacebars.With(function() {                                                              // 20
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "buttonContent"));                            // 21
        }, function() {                                                                                                // 22
          return [ "\n              ", Blaze.View("lookup:.", function() {                                             // 23
            return Spacebars.mustache(view.lookup("."));                                                               // 24
          }), "\n            " ];                                                                                      // 25
        }, function() {                                                                                                // 26
          return "\n              Submit\n            ";                                                               // 27
        }), "\n          "), "\n        "), "\n      "), "\n    " ];                                                   // 28
      }), "\n  " ];                                                                                                    // 29
    });                                                                                                                // 30
  });                                                                                                                  // 31
}));                                                                                                                   // 32
                                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/quickForm/quickForm.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template['quickForm_materialize'].helpers({                                                                            // 1
  submitButtonAtts: function() {                                                                                       // 2
    var atts, qfAtts;                                                                                                  // 3
    qfAtts = this.atts;                                                                                                // 4
    atts = {};                                                                                                         // 5
    if (typeof qfAtts.buttonClasses === 'string') {                                                                    // 6
      atts['class'] = qfAtts.buttonClasses;                                                                            // 7
    } else {                                                                                                           // 8
      atts['class'] = 'btn waves-effect waves-light';                                                                  // 9
    }                                                                                                                  // 10
    return atts;                                                                                                       // 11
  }                                                                                                                    // 12
});                                                                                                                    // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/afArrayField/template.afArrayField.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afArrayField_materialize");                                                                      // 2
Template["afArrayField_materialize"] = new Template("Template.afArrayField_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "collection"                                                                                              // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "collection-item"                                                                                         // 8
  }, "\n      ", Blaze.View("lookup:afFieldLabelText", function() {                                                    // 9
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 10
      name: Spacebars.dot(view.lookup("atts"), "name")                                                                 // 11
    }));                                                                                                               // 12
  }), "\n\n      ", Blaze.If(function() {                                                                              // 13
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 14
      name: Spacebars.dot(view.lookup("atts"), "name"),                                                                // 15
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 16
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 17
    }));                                                                                                               // 18
  }, function() {                                                                                                      // 19
    return [ "\n        ", HTML.BUTTON({                                                                               // 20
      type: "button",                                                                                                  // 21
      "class": "btn autoform-add-item",                                                                                // 22
      "data-autoform-field": function() {                                                                              // 23
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "name"));                                         // 24
      },                                                                                                               // 25
      "data-autoform-mincount": function() {                                                                           // 26
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "minCount"));                                     // 27
      },                                                                                                               // 28
      "data-autoform-maxcount": function() {                                                                           // 29
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "maxCount"));                                     // 30
      }                                                                                                                // 31
    }, "\n            Add ", HTML.I({                                                                                  // 32
      "class": "mdi-content-add"                                                                                       // 33
    }), "\n        "), "\n      " ];                                                                                   // 34
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                       // 35
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 36
      name: Spacebars.dot(view.lookup("atts"), "name")                                                                 // 37
    }));                                                                                                               // 38
  }, function() {                                                                                                      // 39
    return [ "\n      ", HTML.DIV({                                                                                    // 40
      "class": "collection-item"                                                                                       // 41
    }, "\n        ", HTML.SPAN({                                                                                       // 42
      "class": "red-text"                                                                                              // 43
    }, Blaze.View("lookup:afFieldMessage", function() {                                                                // 44
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 45
        name: Spacebars.dot(view.lookup("atts"), "name")                                                               // 46
      })));                                                                                                            // 47
    })), "\n      "), "\n    " ];                                                                                      // 48
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 49
    return {                                                                                                           // 50
      name: Spacebars.call(Spacebars.dot(view.lookup("atts"), "name")),                                                // 51
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 52
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 53
    };                                                                                                                 // 54
  }, function() {                                                                                                      // 55
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 56
      return [ "\n      ", HTML.DIV({                                                                                  // 57
        "class": "collection-item"                                                                                     // 58
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 59
        return {                                                                                                       // 60
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "name")),                                               // 61
          label: Spacebars.call(false),                                                                                // 62
          options: Spacebars.call(view.lookup("afOptionsFromSchema"))                                                  // 63
        };                                                                                                             // 64
      }, function() {                                                                                                  // 65
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 66
      }), "\n      "), "\n      ", Blaze.If(function() {                                                               // 67
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 68
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 69
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 70
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 71
        }));                                                                                                           // 72
      }, function() {                                                                                                  // 73
        return [ "\n        ", HTML.DIV({                                                                              // 74
          "class": "collection-item"                                                                                   // 75
        }, "\n          ", HTML.BUTTON({                                                                               // 76
          type: "button",                                                                                              // 77
          "class": "btn autoform-remove-item"                                                                          // 78
        }, "\n            Remove ", HTML.SPAN({                                                                        // 79
          "class": "mdi-content-clear"                                                                                 // 80
        }), "\n          "), "\n        "), "\n      " ];                                                              // 81
      }), "\n    " ];                                                                                                  // 82
    });                                                                                                                // 83
  }), "\n  ");                                                                                                         // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/afFormGroup/template.afFormGroup.js                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFormGroup_materialize");                                                                       // 2
Template["afFormGroup_materialize"] = new Template("Template.afFormGroup_materialize", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "row"                                                                                                     // 6
  }, "\n        ", HTML.DIV({                                                                                          // 7
    "class": function() {                                                                                              // 8
      return [ Blaze.If(function() {                                                                                   // 9
        return Spacebars.call(view.lookup("addInputField"));                                                           // 10
      }, function() {                                                                                                  // 11
        return "input-field";                                                                                          // 12
      }), " col s12" ];                                                                                                // 13
    }                                                                                                                  // 14
  }, "\n            ", Blaze.If(function() {                                                                           // 15
    return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts", "icon"));                                // 16
  }, function() {                                                                                                      // 17
    return [ "\n                ", Blaze._TemplateWith(function() {                                                    // 18
      return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                      // 19
    }, function() {                                                                                                    // 20
      return Spacebars.include(view.lookupTemplate("afIcon_materialize"));                                             // 21
    }), "\n            " ];                                                                                            // 22
  }), "\n            ", Blaze.If(function() {                                                                          // 23
    return Spacebars.call(view.lookup("skipLabel"));                                                                   // 24
  }, function() {                                                                                                      // 25
    return [ "\n                ", Blaze._TemplateWith(function() {                                                    // 26
      return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                      // 27
    }, function() {                                                                                                    // 28
      return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                   // 29
    }), "\n            " ];                                                                                            // 30
  }, function() {                                                                                                      // 31
    return [ "\n                ", Blaze._TemplateWith(function() {                                                    // 32
      return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                      // 33
    }, function() {                                                                                                    // 34
      return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                   // 35
    }), "\n                ", Blaze._TemplateWith(function() {                                                         // 36
      return Spacebars.call(view.lookup("."));                                                                         // 37
    }, function() {                                                                                                    // 38
      return Spacebars.include(view.lookupTemplate("afLabel_materialize"));                                            // 39
    }), "\n            " ];                                                                                            // 40
  }), "\n            ", Blaze.If(function() {                                                                          // 41
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 42
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 43
    }));                                                                                                               // 44
  }, function() {                                                                                                      // 45
    return [ "\n                ", HTML.DIV({                                                                          // 46
      "class": "red-text"                                                                                              // 47
    }, "\n                    ", HTML.I({                                                                              // 48
      "class": "mdi-alert-warning"                                                                                     // 49
    }), " ", Blaze.View("lookup:afFieldMessage", function() {                                                          // 50
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 51
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 52
      })));                                                                                                            // 53
    }), "\n                "), "\n            " ];                                                                     // 54
  }), "\n        "), "\n    ");                                                                                        // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/afFormGroup/afFormGroup.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afFormGroup_materialize.helpers({                                                                             // 1
    addInputField: function() {                                                                                        // 2
        var result, skipInputType, type;                                                                               // 3
        skipInputType = [                                                                                              // 4
            'checkbox',                                                                                                // 5
            'checkbox-group',                                                                                          // 6
            'boolean-checkbox',                                                                                        // 7
            'select-radio',                                                                                            // 8
            'select-checkbox-inline',                                                                                  // 9
            'select-radio-inline',                                                                                     // 10
            'boolean-radios',                                                                                          // 11
            'toggle',                                                                                                  // 12
            'switch'                                                                                                   // 13
        ];                                                                                                             // 14
        type = AutoForm.getInputType(this);                                                                            // 15
        result = !_.contains(skipInputType, type);                                                                     // 16
        return result;                                                                                                 // 17
    },                                                                                                                 // 18
    skipLabel: function() {                                                                                            // 19
        var result, skipLabelTypes, type;                                                                              // 20
        skipLabelTypes = [                                                                                             // 21
            'checkbox',                                                                                                // 22
            'checkbox-group',                                                                                          // 23
            'boolean-checkbox',                                                                                        // 24
            'select-radio',                                                                                            // 25
            'select-checkbox-inline',                                                                                  // 26
            'select-radio-inline',                                                                                     // 27
            'boolean-radio',                                                                                           // 28
            'toggle',                                                                                                  // 29
            'switch'                                                                                                   // 30
        ];                                                                                                             // 31
        type = AutoForm.getInputType(this);                                                                            // 32
        result = this.skipLabel || _.contains(skipLabelTypes, type);                                                   // 33
        return result;                                                                                                 // 34
    }                                                                                                                  // 35
});                                                                                                                    // 36
                                                                                                                       // 37
Template.afFormGroup_materialize.rendered = function() {                                                               // 38
    var formId;                                                                                                        // 39
    formId = AutoForm.getFormId();                                                                                     // 40
    this.autorun((function(_this) {                                                                                    // 41
        return function() {                                                                                            // 42
            var value = AutoForm.getFieldValue(_this.data.name, formId);                                               // 43
            var inputValue = AutoForm.getInputValue(_this.find('input'));                                              // 44
            var type = AutoForm.getInputType(_this.data);                                                              // 45
            var placeholder = _this.data.afFieldInputAtts.placeholder;                                                 // 46
            var skipActiveLabelTypes = [                                                                               // 47
                'select',                                                                                              // 48
                'checkbox',                                                                                            // 49
                'checkbox-group',                                                                                      // 50
                'boolean-checkbox',                                                                                    // 51
                'select-radio',                                                                                        // 52
                'select-checkbox-inline',                                                                              // 53
                'select-radio-inline',                                                                                 // 54
                'boolean-radio',                                                                                       // 55
                'toggle',                                                                                              // 56
                'switch'                                                                                               // 57
            ];                                                                                                         // 58
                                                                                                                       // 59
            if (!_.contains(skipActiveLabelTypes, type)) {                                                             // 60
                if (!!value || !!inputValue || inputValue === 0 || !!placeholder) {                                    // 61
                    return _this.$('.input-field > label:not(:focus)').addClass('active');                             // 62
                } else {                                                                                               // 63
                    return _this.$('.input-field > label:not(:focus)').removeClass('active');                          // 64
                }                                                                                                      // 65
            }                                                                                                          // 66
        };                                                                                                             // 67
    })(this));                                                                                                         // 68
};                                                                                                                     // 69
                                                                                                                       // 70
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/afObjectField/template.afObjectField.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afObjectField_materialize");                                                                     // 2
Template["afObjectField_materialize"] = new Template("Template.afObjectField_materialize", (function() {               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "card-panel autoform-object-field"                                                                        // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "card-content"                                                                                            // 8
  }, "\n      ", Spacebars.With(function() {                                                                           // 9
    return Spacebars.dataMustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                      // 10
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 11
    }));                                                                                                               // 12
  }, function() {                                                                                                      // 13
    return [ "\n        ", HTML.DIV({                                                                                  // 14
      "class": "card-title"                                                                                            // 15
    }, "\n          ", Blaze.View("lookup:.", function() {                                                             // 16
      return Spacebars.mustache(view.lookup("."));                                                                     // 17
    }), "\n        "), "\n      " ];                                                                                   // 18
  }), "\n      ", Blaze.If(function() {                                                                                // 19
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 20
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 21
    }));                                                                                                               // 22
  }, function() {                                                                                                      // 23
    return [ "\n        ", HTML.DIV({                                                                                  // 24
      "class": "red-text"                                                                                              // 25
    }, Blaze.View("lookup:afFieldMessage", function() {                                                                // 26
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 27
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 28
      })));                                                                                                            // 29
    })), "\n      " ];                                                                                                 // 30
  }), "\n      ", Blaze._TemplateWith(function() {                                                                     // 31
    return {                                                                                                           // 32
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "name"))                                                    // 33
    };                                                                                                                 // 34
  }, function() {                                                                                                      // 35
    return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                    // 36
  }), "\n    "), "\n  ");                                                                                              // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk_autoform-materialize/components/afQuickField/template.afQuickField.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afQuickField_materialize");                                                                      // 2
Template["afQuickField_materialize"] = new Template("Template.afQuickField_materialize", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.dataMustache(view.lookup("isGroup"), Spacebars.kw({                                               // 6
      atts: view.lookup(".")                                                                                           // 7
    }));                                                                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.include(view.lookupTemplate("afObjectField_materialize")), "\n  " ];                  // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", Blaze.If(function() {                                                                           // 12
      return Spacebars.dataMustache(view.lookup("isFieldArray"), Spacebars.kw({                                        // 13
        atts: view.lookup(".")                                                                                         // 14
      }));                                                                                                             // 15
    }, function() {                                                                                                    // 16
      return [ "\n      ", Spacebars.include(view.lookupTemplate("afArrayField_materialize")), "\n    " ];             // 17
    }, function() {                                                                                                    // 18
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 19
        return Spacebars.call(view.lookup("groupAtts"));                                                               // 20
      }, function() {                                                                                                  // 21
        return Spacebars.include(view.lookupTemplate("afFormGroup_materialize"));                                      // 22
      }), "\n    " ];                                                                                                  // 23
    }), "\n  " ];                                                                                                      // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['gildaspk:autoform-materialize'] = {};

})();
