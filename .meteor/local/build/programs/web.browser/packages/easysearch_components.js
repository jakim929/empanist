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
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Random = Package.random.Random;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Template = Package['peerlibrary:blaze-components'].Template;
var BlazeComponent = Package['peerlibrary:blaze-components'].BlazeComponent;
var BlazeComponentDebug = Package['peerlibrary:blaze-components'].BlazeComponentDebug;
var EasySearch = Package['easysearch:core'].EasySearch;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var BaseComponent, SingleIndexComponent;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:components":{"lib":{"base.js":["babel-runtime/helpers/toConsumableArray","babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/base.js                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');                                //
                                                                                                             //
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);                                       //
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _createClass2 = require('babel-runtime/helpers/createClass');                                            //
                                                                                                             //
var _createClass3 = _interopRequireDefault(_createClass2);                                                   //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The BaseComponent holds the base logic for EasySearch Components.                                         //
 *                                                                                                           //
 * @type {BaseComponent}                                                                                     //
 */                                                                                                          //
BaseComponent = function (_BlazeComponent) {                                                                 // 6
  (0, _inherits3['default'])(BaseComponent, _BlazeComponent);                                                // 6
                                                                                                             //
  function BaseComponent() {                                                                                 // 6
    (0, _classCallCheck3['default'])(this, BaseComponent);                                                   // 6
    return (0, _possibleConstructorReturn3['default'])(this, _BlazeComponent.apply(this, arguments));        // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Setup component on created.                                                                             //
   */                                                                                                        //
                                                                                                             //
  BaseComponent.prototype.onCreated = function () {                                                          // 6
    function onCreated() {                                                                                   // 6
      var _ref;                                                                                              // 28
                                                                                                             //
      var index = this.getData().index,                                                                      // 29
          indexes = [index];                                                                                 // 29
                                                                                                             //
      if (!index) {                                                                                          // 32
        indexes = this.getData().indexes;                                                                    // 33
      }                                                                                                      // 34
                                                                                                             //
      if (_.isEmpty(indexes)) {                                                                              // 36
        throw new Meteor.Error('no-index', 'Please provide an index for your component');                    // 37
      }                                                                                                      // 38
                                                                                                             //
      if (indexes.filter(function (index) {                                                                  // 40
        return index instanceof EasySearch.Index;                                                            // 40
      }).length != indexes.length) {                                                                         // 40
        throw new Meteor.Error('invalid-configuration', 'Did not receive an index or an array of indexes: "' + indexes.toString() + '"');
      }                                                                                                      // 45
                                                                                                             //
      this.indexes = indexes;                                                                                // 47
      this.options = _.defaults({}, (_ref = _).omit.apply(_ref, [this.getData()].concat((0, _toConsumableArray3['default'])(BaseComponent.reserveredProperties))), this.defaultOptions);
                                                                                                             //
      check(this.name, Match.Optional(String));                                                              // 50
      check(this.options, Object);                                                                           // 51
                                                                                                             //
      this.eachIndex(function (index, name) {                                                                // 53
        if (!index.getComponentDict(name)) {                                                                 // 54
          index.registerComponent(name);                                                                     // 55
        }                                                                                                    // 56
      });                                                                                                    // 57
    }                                                                                                        // 58
                                                                                                             //
    return onCreated;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the default options.                                                                             //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  /**                                                                                                        //
   * Search the component.                                                                                   //
   *                                                                                                         //
   * @param {String} searchString String to search for                                                       //
   */                                                                                                        //
                                                                                                             //
  BaseComponent.prototype.search = function () {                                                             // 6
    function search(searchString) {                                                                          // 6
      check(searchString, String);                                                                           // 75
                                                                                                             //
      var showDocuments = !this.getData().noDocumentsOnEmpty || 0 < searchString.length;                     // 77
                                                                                                             //
      this.eachIndex(function (index, name) {                                                                // 79
        index.getComponentDict(name).set('showDocuments', showDocuments);                                    // 80
                                                                                                             //
        if (showDocuments) {                                                                                 // 82
          index.getComponentMethods(name).search(searchString);                                              // 83
        }                                                                                                    // 84
      });                                                                                                    // 85
    }                                                                                                        // 86
                                                                                                             //
    return search;                                                                                           // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the data.                                                                                        //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  BaseComponent.prototype.getData = function () {                                                            // 6
    function getData() {                                                                                     // 6
      return this.data() || {};                                                                              // 94
    }                                                                                                        // 95
                                                                                                             //
    return getData;                                                                                          // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the dictionaries.                                                                                //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  /**                                                                                                        //
   * Loop through each index and apply a function                                                            //
   *                                                                                                         //
   * @param {Function} func   Function to run                                                                //
   * @param {String}   method Lodash method name                                                             //
   *                                                                                                         //
   * @return mixed                                                                                           //
   */                                                                                                        //
                                                                                                             //
  BaseComponent.prototype.eachIndex = function () {                                                          // 6
    function eachIndex(func) {                                                                               // 6
      var method = arguments.length <= 1 || arguments[1] === undefined ? 'each' : arguments[1];              // 116
                                                                                                             //
      var componentScope = this,                                                                             // 117
          logic = this.getData().logic;                                                                      // 117
                                                                                                             //
      if (!_.isEmpty(logic)) {                                                                               // 120
        method = 'OR' === logic ? 'some' : 'every';                                                          // 121
      }                                                                                                      // 122
                                                                                                             //
      return _[method](this.indexes, function (index) {                                                      // 124
        return func.apply(this, [index, componentScope.name]);                                               // 125
      });                                                                                                    // 126
    }                                                                                                        // 127
                                                                                                             //
    return eachIndex;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  (0, _createClass3['default'])(BaseComponent, [{                                                            // 6
    key: 'name',                                                                                             // 6
                                                                                                             //
    /**                                                                                                      //
     * Return the name of the component.                                                                     //
     *                                                                                                       //
     * @returns {String}                                                                                     //
     */                                                                                                      //
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return this.getData().name;                                                                          // 13
      }                                                                                                      // 14
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
                                                                                                             //
    /**                                                                                                      //
     * Return an array of properties that are reserved to the base component.                                //
     *                                                                                                       //
     * @returns {String[]}                                                                                   //
     */                                                                                                      //
                                                                                                             //
  }, {                                                                                                       // 6
    key: 'defaultOptions',                                                                                   // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return {};                                                                                           // 66
      }                                                                                                      // 67
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }, {                                                                                                       // 6
    key: 'dicts',                                                                                            // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return this.eachIndex(function (index, name) {                                                       // 103
          return index.getComponentDict(name);                                                               // 104
        }, 'map');                                                                                           // 105
      }                                                                                                      // 106
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }], [{                                                                                                     // 6
    key: 'reserveredProperties',                                                                             // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return ['index', 'indexes', 'name', 'attributes'];                                                   // 22
      }                                                                                                      // 23
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }]);                                                                                                       // 6
  return BaseComponent;                                                                                      // 6
}(BlazeComponent);                                                                                           // 6
                                                                                                             //
EasySearch.BaseComponent = BaseComponent;                                                                    // 130
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"single-index.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/single-index.js                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _createClass2 = require('babel-runtime/helpers/createClass');                                            //
                                                                                                             //
var _createClass3 = _interopRequireDefault(_createClass2);                                                   //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The SingleIndexComponent holds logic for components that only can use one index.                          //
 *                                                                                                           //
 * @type {SingleIndexComponent}                                                                              //
 */                                                                                                          //
SingleIndexComponent = function (_BaseComponent) {                                                           // 6
  (0, _inherits3['default'])(SingleIndexComponent, _BaseComponent);                                          // 6
                                                                                                             //
  function SingleIndexComponent() {                                                                          // 6
    (0, _classCallCheck3['default'])(this, SingleIndexComponent);                                            // 6
    return (0, _possibleConstructorReturn3['default'])(this, _BaseComponent.apply(this, arguments));         // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Setup component on created.                                                                             //
   */                                                                                                        //
                                                                                                             //
  SingleIndexComponent.prototype.onCreated = function () {                                                   // 6
    function onCreated() {                                                                                   // 6
      _BaseComponent.prototype.onCreated.call(this);                                                         // 11
                                                                                                             //
      if (this.indexes.length > 1) {                                                                         // 13
        throw new Meteor.Error('only-single-index', 'Can only specify one index');                           // 14
      }                                                                                                      // 15
    }                                                                                                        // 16
                                                                                                             //
    return onCreated;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the index                                                                                        //
   *                                                                                                         //
   * @returns {Index}                                                                                        //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  (0, _createClass3['default'])(SingleIndexComponent, [{                                                     // 6
    key: 'index',                                                                                            // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return _.first(this.indexes);                                                                        // 24
      }                                                                                                      // 25
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
                                                                                                             //
    /**                                                                                                      //
     * Return the dictionary.                                                                                //
     *                                                                                                       //
     * @returns {Object}                                                                                     //
     */                                                                                                      //
                                                                                                             //
  }, {                                                                                                       // 6
    key: 'dict',                                                                                             // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return _.first(this.dicts);                                                                          // 33
      }                                                                                                      // 34
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }]);                                                                                                       // 6
  return SingleIndexComponent;                                                                               // 6
}(BaseComponent);                                                                                            // 6
                                                                                                             //
EasySearch.SingleIndexComponent = SingleIndexComponent;                                                      // 37
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"component-methods.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/component-methods.js                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
EasySearch._getComponentMethods = function (dict, index) {                                                   // 1
  return {                                                                                                   // 2
    /**                                                                                                      //
     * Search a component for the given search string.                                                       //
     *                                                                                                       //
     * @param {Object|String} searchDefinition Search definition                                             //
     */                                                                                                      //
    search: function () {                                                                                    // 8
      function search(searchDefinition) {                                                                    // 8
        dict.set('searchOptions', {                                                                          // 9
          props: (dict.get('searchOptions') || {}).props                                                     // 10
        });                                                                                                  // 9
                                                                                                             //
        dict.set('searchDefinition', searchDefinition);                                                      // 13
        dict.set('stopPublication', true);                                                                   // 14
      }                                                                                                      // 15
                                                                                                             //
      return search;                                                                                         // 8
    }(),                                                                                                     // 8
    /**                                                                                                      //
     * Return the EasySearch.Cursor for the current search.                                                  //
     *                                                                                                       //
     * @returns {Cursor}                                                                                     //
     */                                                                                                      //
    getCursor: function () {                                                                                 // 21
      function getCursor() {                                                                                 // 21
        var searchDefinition = dict.get('searchDefinition') || '',                                           // 22
            options = dict.get('searchOptions'),                                                             // 22
            showDocuments = dict.get('showDocuments');                                                       // 22
                                                                                                             //
        check(options, Match.Optional(Object));                                                              // 26
                                                                                                             //
        if (false === showDocuments) {                                                                       // 28
          dict.set('count', 0);                                                                              // 29
          dict.set('searching', false);                                                                      // 30
          dict.set('limit', 0);                                                                              // 31
          dict.set('skip', 0);                                                                               // 32
          dict.set('currentCount', 0);                                                                       // 33
          dict.set('stopPublication', false);                                                                // 34
                                                                                                             //
          return EasySearch.Cursor.emptyCursor;                                                              // 36
        }                                                                                                    // 37
                                                                                                             //
        var cursor = index.search(searchDefinition, options),                                                // 39
            searchOptions = index._getSearchOptions(options);                                                // 39
                                                                                                             //
        dict.set('count', cursor.count());                                                                   // 42
        dict.set('searching', !cursor.isReady());                                                            // 43
        dict.set('limit', searchOptions.limit);                                                              // 44
        dict.set('skip', searchOptions.skip);                                                                // 45
        dict.set('currentCount', cursor.mongoCursor.count());                                                // 46
        dict.set('stopPublication', false);                                                                  // 47
                                                                                                             //
        return cursor;                                                                                       // 49
      }                                                                                                      // 50
                                                                                                             //
      return getCursor;                                                                                      // 21
    }(),                                                                                                     // 21
    /**                                                                                                      //
     * Return true if the current search string is empty.                                                    //
     *                                                                                                       //
     * @returns {boolean}                                                                                    //
     */                                                                                                      //
    searchIsEmpty: function () {                                                                             // 56
      function searchIsEmpty() {                                                                             // 56
        var searchDefinition = dict.get('searchDefinition');                                                 // 57
                                                                                                             //
        return !searchDefinition || _.isString(searchDefinition) && 0 === searchDefinition.trim().length;    // 59
      }                                                                                                      // 60
                                                                                                             //
      return searchIsEmpty;                                                                                  // 56
    }(),                                                                                                     // 56
    /**                                                                                                      //
     * Return true if the component has no results.                                                          //
     *                                                                                                       //
     * @returns {boolean}                                                                                    //
     */                                                                                                      //
    hasNoResults: function () {                                                                              // 66
      function hasNoResults() {                                                                              // 66
        var count = dict.get('count'),                                                                       // 67
            showDocuments = dict.get('showDocuments');                                                       // 67
                                                                                                             //
        return false !== showDocuments && !dict.get('searching') && (!_.isNumber(count) || 0 === count);     // 70
      }                                                                                                      // 73
                                                                                                             //
      return hasNoResults;                                                                                   // 66
    }(),                                                                                                     // 66
    /**                                                                                                      //
     * Return true if the component is being searched.                                                       //
     *                                                                                                       //
     * @returns {boolean}                                                                                    //
     */                                                                                                      //
    isSearching: function () {                                                                               // 79
      function isSearching() {                                                                               // 79
        return !!dict.get('searching');                                                                      // 80
      }                                                                                                      // 81
                                                                                                             //
      return isSearching;                                                                                    // 79
    }(),                                                                                                     // 79
    /**                                                                                                      //
     * Return true if the component has more documents than displayed right now.                             //
     *                                                                                                       //
     * @returns {boolean}                                                                                    //
     */                                                                                                      //
    hasMoreDocuments: function () {                                                                          // 87
      function hasMoreDocuments() {                                                                          // 87
        return dict.get('currentCount') < dict.get('count');                                                 // 88
      }                                                                                                      // 89
                                                                                                             //
      return hasMoreDocuments;                                                                               // 87
    }(),                                                                                                     // 87
    /**                                                                                                      //
     * Load more documents for the component.                                                                //
     *                                                                                                       //
     * @param {Number} count Count of docs                                                                   //
     */                                                                                                      //
    loadMore: function () {                                                                                  // 95
      function loadMore(count) {                                                                             // 95
        check(count, Number);                                                                                // 96
                                                                                                             //
        var currentCount = dict.get('currentCount'),                                                         // 98
            options = dict.get('searchOptions') || {};                                                       // 98
                                                                                                             //
        options.limit = currentCount + count;                                                                // 101
        dict.set('searchOptions', options);                                                                  // 102
      }                                                                                                      // 103
                                                                                                             //
      return loadMore;                                                                                       // 95
    }(),                                                                                                     // 95
    /**                                                                                                      //
     * Paginate through documents for the given page.                                                        //
     *                                                                                                       //
     * @param {Number} page Page number                                                                      //
     */                                                                                                      //
    paginate: function () {                                                                                  // 109
      function paginate(page) {                                                                              // 109
        check(page, Number);                                                                                 // 110
                                                                                                             //
        var options = dict.get('searchOptions') || {},                                                       // 112
            limit = dict.get('limit');                                                                       // 112
                                                                                                             //
        options.skip = limit * (page - 1);                                                                   // 115
        dict.set('searchOptions', options);                                                                  // 116
        dict.set('stopPublication', true);                                                                   // 117
      }                                                                                                      // 118
                                                                                                             //
      return paginate;                                                                                       // 109
    }(),                                                                                                     // 109
    /**                                                                                                      //
     * Add custom properties for search.                                                                     //
     */                                                                                                      //
    addProps: function () {                                                                                  // 122
      function addProps() {                                                                                  // 122
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {               // 122
          args[_key] = arguments[_key];                                                                      // 122
        }                                                                                                    // 122
                                                                                                             //
        var options = dict.get('searchOptions') || {};                                                       // 123
                                                                                                             //
        options.props = options.props || {};                                                                 // 125
                                                                                                             //
        if (_.isObject(args[0])) {                                                                           // 127
          options.props = _.extend(options.props, args[0]);                                                  // 128
        } else if (_.isString(args[0])) {                                                                    // 129
          options.props[args[0]] = args[1];                                                                  // 130
        }                                                                                                    // 131
                                                                                                             //
        dict.set('searchOptions', options);                                                                  // 133
      }                                                                                                      // 134
                                                                                                             //
      return addProps;                                                                                       // 122
    }(),                                                                                                     // 122
    /**                                                                                                      //
     * Remove custom properties for search.                                                                  //
     */                                                                                                      //
    removeProps: function () {                                                                               // 138
      function removeProps() {                                                                               // 138
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {         // 138
          args[_key2] = arguments[_key2];                                                                    // 138
        }                                                                                                    // 138
                                                                                                             //
        var options = dict.get('searchOptions') || {};                                                       // 139
                                                                                                             //
        if (!_.isEmpty(args)) {                                                                              // 141
          options.props = _.omit(options.props, args) || {};                                                 // 142
        } else {                                                                                             // 143
          options.props = {};                                                                                // 144
        }                                                                                                    // 145
                                                                                                             //
        dict.set('searchOptions', options);                                                                  // 147
      }                                                                                                      // 148
                                                                                                             //
      return removeProps;                                                                                    // 138
    }()                                                                                                      // 138
  };                                                                                                         // 2
};                                                                                                           // 150
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"core.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/core.js                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _createClass2 = require('babel-runtime/helpers/createClass');                                            //
                                                                                                             //
var _createClass3 = _interopRequireDefault(_createClass2);                                                   //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * Extend EasySearch.Index with component functionality.                                                     //
 *                                                                                                           //
 * @type {Index}                                                                                             //
 */                                                                                                          //
EasySearch.Index = function (_EasySearch$Index) {                                                            // 6
  (0, _inherits3['default'])(Index, _EasySearch$Index);                                                      // 6
                                                                                                             //
  /**                                                                                                        //
   * Constructor.                                                                                            //
   */                                                                                                        //
                                                                                                             //
  function Index() {                                                                                         // 10
    (0, _classCallCheck3['default'])(this, Index);                                                           // 10
                                                                                                             //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _EasySearch$Index.apply(this, arguments));
                                                                                                             //
    _this.components = {};                                                                                   // 12
    return _this;                                                                                            // 10
  }                                                                                                          // 13
                                                                                                             //
  /**                                                                                                        //
   * Return static default name for components.                                                              //
   *                                                                                                         //
   * @returns {String}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  /**                                                                                                        //
   * Register a component on the index.                                                                      //
   *                                                                                                         //
   * @param {String} componentName Optional name of the component                                            //
   */                                                                                                        //
                                                                                                             //
  Index.prototype.registerComponent = function () {                                                          // 6
    function registerComponent() {                                                                           // 6
      var componentName = arguments.length <= 0 || arguments[0] === undefined ? EasySearch.Index.COMPONENT_DEFAULT_NAME : arguments[0];
                                                                                                             //
      this.components[componentName] = new ReactiveDict('easySearchComponent_' + this.config.name + '_' + componentName + '_' + Random.id());
    }                                                                                                        // 31
                                                                                                             //
    return registerComponent;                                                                                // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Get the reactive dictionary for a component.                                                            //
   *                                                                                                         //
   * @param {String} componentName Optional name of the component                                            //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  Index.prototype.getComponentDict = function () {                                                           // 6
    function getComponentDict() {                                                                            // 6
      var componentName = arguments.length <= 0 || arguments[0] === undefined ? EasySearch.Index.COMPONENT_DEFAULT_NAME : arguments[0];
                                                                                                             //
      return this.components[componentName];                                                                 // 39
    }                                                                                                        // 40
                                                                                                             //
    return getComponentDict;                                                                                 // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Get component methods that are useful for implementing search behaviour.                                //
   *                                                                                                         //
   * @param componentName                                                                                    //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  Index.prototype.getComponentMethods = function () {                                                        // 6
    function getComponentMethods() {                                                                         // 6
      var componentName = arguments.length <= 0 || arguments[0] === undefined ? EasySearch.Index.COMPONENT_DEFAULT_NAME : arguments[0];
                                                                                                             //
      var dict = this.getComponentDict(componentName);                                                       // 48
                                                                                                             //
      if (!dict) {                                                                                           // 50
        throw new Meteor.Error('no-component', 'Component with name \'' + componentName + '\' not found');   // 51
      }                                                                                                      // 52
                                                                                                             //
      return EasySearch._getComponentMethods(dict, this);                                                    // 54
    }                                                                                                        // 55
                                                                                                             //
    return getComponentMethods;                                                                              // 6
  }();                                                                                                       // 6
                                                                                                             //
  (0, _createClass3['default'])(Index, null, [{                                                              // 6
    key: 'COMPONENT_DEFAULT_NAME',                                                                           // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return '__default';                                                                                  // 21
      }                                                                                                      // 22
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }]);                                                                                                       // 6
  return Index;                                                                                              // 6
}(EasySearch.Index);                                                                                         // 6
                                                                                                             //
/**                                                                                                          //
 * Return true if the current page is valid.                                                                 //
 *                                                                                                           //
 * @param {Number} totalPagesLength Count of all pages available                                             //
 * @param {Number} currentPage      Current page to check                                                    //
 *                                                                                                           //
 * @returns {boolean}                                                                                        //
 */                                                                                                          //
function isValidPage(totalPagesLength, currentPage) {                                                        // 66
  return currentPage <= totalPagesLength && currentPage > 0;                                                 // 67
}                                                                                                            // 68
                                                                                                             //
/**                                                                                                          //
 * Helper method to get the pages for pagination as an array.                                                //
 *                                                                                                           //
 * @param totalCount   Total count of results                                                                //
 * @param pageCount    Count of results per page                                                             //
 * @param currentPage  Current page                                                                          //
 * @param prevAndNext  True if Next and Previous buttons should appear                                       //
 * @param maxPages     Maximum count of pages to show                                                        //
 *                                                                                                           //
 * @private                                                                                                  //
 *                                                                                                           //
 * @returns {Array}                                                                                          //
 */                                                                                                          //
EasySearch._getPagesForPagination = function (_ref) {                                                        // 83
  var totalCount = _ref.totalCount;                                                                          // 83
  var pageCount = _ref.pageCount;                                                                            // 83
  var currentPage = _ref.currentPage;                                                                        // 83
  var prevAndNext = _ref.prevAndNext;                                                                        // 83
  var maxPages = _ref.maxPages;                                                                              // 83
                                                                                                             //
  var pages = _.range(1, Math.ceil(totalCount / pageCount) + 1),                                             // 84
      pagesLength = pages.length;                                                                            // 84
                                                                                                             //
  if (!isValidPage(pagesLength, currentPage)) {                                                              // 87
    throw new Meteor.Error('invalid-page', 'Current page is not in valid range');                            // 88
  }                                                                                                          // 89
                                                                                                             //
  if (maxPages) {                                                                                            // 91
    var startSlice = currentPage > maxPages / 2 ? currentPage - 1 - Math.floor(maxPages / 2) : 0,            // 92
        endSlice = startSlice + maxPages;                                                                    // 92
                                                                                                             //
    if (endSlice > pagesLength) {                                                                            // 95
      pages = pages.slice(-maxPages);                                                                        // 96
    } else {                                                                                                 // 97
      pages = pages.slice(startSlice, startSlice + maxPages);                                                // 98
    }                                                                                                        // 99
  }                                                                                                          // 100
                                                                                                             //
  var pageData = _.map(pages, function (page) {                                                              // 102
    var isCurrentPage = page === currentPage;                                                                // 103
    return { page: page, content: page.toString(), current: isCurrentPage, disabled: isCurrentPage };        // 104
  });                                                                                                        // 105
                                                                                                             //
  if (prevAndNext) {                                                                                         // 107
    // Previous                                                                                              //
    var prevPage = isValidPage(pagesLength, currentPage - 1) ? currentPage - 1 : null;                       // 109
    pageData.unshift({ page: prevPage, content: 'Prev', current: false, disabled: 1 === currentPage });      // 110
    // Next                                                                                                  //
    var nextPage = isValidPage(pagesLength, currentPage + 1) ? currentPage + 1 : null;                       // 112
    pageData.push({ page: nextPage, content: 'Next', current: false, disabled: null == nextPage || pagesLength + 1 === currentPage });
  }                                                                                                          // 116
                                                                                                             //
  return pageData;                                                                                           // 118
};                                                                                                           // 119
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"input":{"template.input.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/input/template.input.js                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.Input");                                                                    // 2
Template["EasySearch.Input"] = new Template("Template.EasySearch.Input", (function() {                       // 3
  var view = this;                                                                                           // 4
  return HTML.INPUT(HTML.Attrs(function() {                                                                  // 5
    return Spacebars.attrMustache(view.lookup("inputAttributes"));                                           // 6
  }));                                                                                                       // 7
}));                                                                                                         // 8
                                                                                                             // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"input.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/input/input.js                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _createClass2 = require('babel-runtime/helpers/createClass');                                            //
                                                                                                             //
var _createClass3 = _interopRequireDefault(_createClass2);                                                   //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The InputComponent lets you search through configured indexes.                                            //
 *                                                                                                           //
 * @type {InputComponent}                                                                                    //
 */                                                                                                          //
EasySearch.InputComponent = function (_BaseComponent) {                                                      // 6
  (0, _inherits3['default'])(InputComponent, _BaseComponent);                                                // 6
                                                                                                             //
  function InputComponent() {                                                                                // 6
    (0, _classCallCheck3['default'])(this, InputComponent);                                                  // 6
    return (0, _possibleConstructorReturn3['default'])(this, _BaseComponent.apply(this, arguments));         // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Setup input onCreated.                                                                                  //
   */                                                                                                        //
                                                                                                             //
  InputComponent.prototype.onCreated = function () {                                                         // 6
    function onCreated() {                                                                                   // 6
      var _BaseComponent$protot,                                                                             // 10
          _this2 = this;                                                                                     // 10
                                                                                                             //
      (_BaseComponent$protot = _BaseComponent.prototype.onCreated).call.apply(_BaseComponent$protot, [this].concat(Array.prototype.slice.call(arguments)));
                                                                                                             //
      this.search(this.inputAttributes().value);                                                             // 13
                                                                                                             //
      // create a reactive dependency to the cursor                                                          //
      this.debouncedSearch = _.debounce(function (searchString) {                                            // 16
        searchString = searchString.trim();                                                                  // 17
                                                                                                             //
        if (_this2.searchString !== searchString) {                                                          // 19
          _this2.searchString = searchString;                                                                // 20
                                                                                                             //
          _this2.eachIndex(function (index, name) {                                                          // 22
            index.getComponentDict(name).set('currentPage', 1);                                              // 23
          });                                                                                                // 24
                                                                                                             //
          _this2.search(searchString);                                                                       // 26
        }                                                                                                    // 27
      }, this.options.timeout);                                                                              // 29
    }                                                                                                        // 30
                                                                                                             //
    return onCreated;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Event map.                                                                                              //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  InputComponent.prototype.events = function () {                                                            // 6
    function events() {                                                                                      // 6
      return [{                                                                                              // 38
        'keyup input': function () {                                                                         // 39
          function keyupInput(e) {                                                                           // 39
            if ('enter' == this.getData().event && e.keyCode != 13) {                                        // 40
              return;                                                                                        // 41
            }                                                                                                // 42
                                                                                                             //
            this.debouncedSearch($(e.target).val());                                                         // 44
          }                                                                                                  // 45
                                                                                                             //
          return keyupInput;                                                                                 // 39
        }()                                                                                                  // 39
      }];                                                                                                    // 38
    }                                                                                                        // 47
                                                                                                             //
    return events;                                                                                           // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the attributes to set on the input (class, id).                                                  //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  InputComponent.prototype.inputAttributes = function () {                                                   // 6
    function inputAttributes() {                                                                             // 6
      return _.defaults({}, this.getData().attributes, InputComponent.defaultAttributes);                    // 55
    }                                                                                                        // 56
                                                                                                             //
    return inputAttributes;                                                                                  // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the default attributes.                                                                          //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  (0, _createClass3['default'])(InputComponent, [{                                                           // 6
    key: 'defaultOptions',                                                                                   // 6
                                                                                                             //
                                                                                                             //
    /**                                                                                                      //
     * Return the default options.                                                                           //
     *                                                                                                       //
     * @returns {Object}                                                                                     //
     */                                                                                                      //
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return {                                                                                             // 76
          timeout: 50                                                                                        // 77
        };                                                                                                   // 76
      }                                                                                                      // 79
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }], [{                                                                                                     // 6
    key: 'defaultAttributes',                                                                                // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return {                                                                                             // 64
          type: 'text',                                                                                      // 65
          value: ''                                                                                          // 66
        };                                                                                                   // 64
      }                                                                                                      // 68
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }]);                                                                                                       // 6
  return InputComponent;                                                                                     // 6
}(BaseComponent);                                                                                            // 6
                                                                                                             //
EasySearch.InputComponent.register('EasySearch.Input');                                                      // 82
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"field-input":{"template.field-input.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/field-input/template.field-input.js                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.FieldInput");                                                               // 2
Template["EasySearch.FieldInput"] = new Template("Template.EasySearch.FieldInput", (function() {             // 3
  var view = this;                                                                                           // 4
  return HTML.INPUT(HTML.Attrs(function() {                                                                  // 5
    return Spacebars.attrMustache(view.lookup("inputAttributes"));                                           // 6
  }));                                                                                                       // 7
}));                                                                                                         // 8
                                                                                                             // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"field-input.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/field-input/field-input.js                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The FieldInputComponent lets you search through configured indexes for a specified fild.                  //
 *                                                                                                           //
 * @type {FieldInputComponent}                                                                               //
 */                                                                                                          //
EasySearch.FieldInputComponent = function (_EasySearch$InputComp) {                                          // 6
  (0, _inherits3['default'])(FieldInputComponent, _EasySearch$InputComp);                                    // 6
                                                                                                             //
  function FieldInputComponent() {                                                                           // 6
    (0, _classCallCheck3['default'])(this, FieldInputComponent);                                             // 6
    return (0, _possibleConstructorReturn3['default'])(this, _EasySearch$InputComp.apply(this, arguments));  // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Setup component on created.                                                                             //
   */                                                                                                        //
                                                                                                             //
  FieldInputComponent.prototype.onCreated = function () {                                                    // 6
    function onCreated() {                                                                                   // 6
      _EasySearch$InputComp.prototype.onCreated.call(this);                                                  // 11
                                                                                                             //
      if (_.isEmpty(this.getData().field)) {                                                                 // 13
        throw new Meteor.Error('no-field', 'Please provide a field for your field input component');         // 14
      }                                                                                                      // 15
    }                                                                                                        // 16
                                                                                                             //
    return onCreated;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Search the component.                                                                                   //
   *                                                                                                         //
   * @param {String} searchString String to search for                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  FieldInputComponent.prototype.search = function () {                                                       // 6
    function search(searchString) {                                                                          // 6
      var _this2 = this;                                                                                     // 23
                                                                                                             //
      check(searchString, String);                                                                           // 24
                                                                                                             //
      this.eachIndex(function (index, name) {                                                                // 26
        var searchDefinition = index.getComponentDict(name).get('searchDefinition') || {};                   // 27
                                                                                                             //
        if (_.isString(searchDefinition)) {                                                                  // 29
          throw new Meteor.Error('You can either EasySearch.FieldInput or EasySearch.Input');                // 30
        }                                                                                                    // 31
                                                                                                             //
        if (_this2.options.field) {                                                                          // 33
          searchDefinition[_this2.options.field] = searchString;                                             // 34
          index.getComponentMethods(name).search(searchDefinition);                                          // 35
        }                                                                                                    // 36
      });                                                                                                    // 37
    }                                                                                                        // 38
                                                                                                             //
    return search;                                                                                           // 6
  }();                                                                                                       // 6
                                                                                                             //
  return FieldInputComponent;                                                                                // 6
}(EasySearch.InputComponent);                                                                                // 6
                                                                                                             //
EasySearch.FieldInputComponent.register('EasySearch.FieldInput');                                            // 41
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"each":{"template.each.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/each/template.each.js                                                  //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.Each");                                                                     // 2
Template["EasySearch.Each"] = new Template("Template.EasySearch.Each", (function() {                         // 3
  var view = this;                                                                                           // 4
  return Blaze.Each(function() {                                                                             // 5
    return Spacebars.call(view.lookup("doc"));                                                               // 6
  }, function() {                                                                                            // 7
    return [ "\n      ", Blaze._InOuterTemplateScope(view, function() {                                      // 8
      return Blaze._TemplateWith(function() {                                                                // 9
        return Spacebars.call(view.lookup("."));                                                             // 10
      }, function() {                                                                                        // 11
        return Spacebars.include(function() {                                                                // 12
          return Spacebars.call(view.templateContentBlock);                                                  // 13
        });                                                                                                  // 14
      });                                                                                                    // 15
    }), "\n    " ];                                                                                          // 16
  });                                                                                                        // 17
}));                                                                                                         // 18
                                                                                                             // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"each.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/each/each.js                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The EachComponent allows to loop through the search results found.                                        //
 *                                                                                                           //
 * @type {EachComponent}                                                                                     //
 */                                                                                                          //
EasySearch.EachComponent = function (_SingleIndexComponent) {                                                // 6
  (0, _inherits3['default'])(EachComponent, _SingleIndexComponent);                                          // 6
                                                                                                             //
  function EachComponent() {                                                                                 // 6
    (0, _classCallCheck3['default'])(this, EachComponent);                                                   // 6
    return (0, _possibleConstructorReturn3['default'])(this, _SingleIndexComponent.apply(this, arguments));  // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the mongo cursor for the search.                                                                 //
   *                                                                                                         //
   * @returns {Mongo.Cursor}                                                                                 //
   */                                                                                                        //
                                                                                                             //
  EachComponent.prototype.doc = function () {                                                                // 6
    function doc() {                                                                                         // 6
      var stopPublication = this.index.getComponentDict(this.name).get('stopPublication');                   // 13
                                                                                                             //
      this.cursor && stopPublication && this.cursor.stop();                                                  // 18
                                                                                                             //
      this.cursor = this.index.getComponentMethods(this.name).getCursor();                                   // 20
                                                                                                             //
      return this.cursor.mongoCursor;                                                                        // 25
    }                                                                                                        // 26
                                                                                                             //
    return doc;                                                                                              // 6
  }();                                                                                                       // 6
                                                                                                             //
  return EachComponent;                                                                                      // 6
}(SingleIndexComponent);                                                                                     // 6
                                                                                                             //
EasySearch.EachComponent.register('EasySearch.Each');                                                        // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"if-input-empty":{"template.if-input-empty.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/if-input-empty/template.if-input-empty.js                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.IfInputEmpty");                                                             // 2
Template["EasySearch.IfInputEmpty"] = new Template("Template.EasySearch.IfInputEmpty", (function() {         // 3
  var view = this;                                                                                           // 4
  return Blaze.If(function() {                                                                               // 5
    return Spacebars.call(view.lookup("inputEmpty"));                                                        // 6
  }, function() {                                                                                            // 7
    return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {                                    // 8
      return Spacebars.include(function() {                                                                  // 9
        return Spacebars.call(view.templateContentBlock);                                                    // 10
      });                                                                                                    // 11
    }), "\n    " ];                                                                                          // 12
  }, function() {                                                                                            // 13
    return [ "\n        ", Blaze.If(function() {                                                             // 14
      return Spacebars.call(view.templateElseBlock);                                                         // 15
    }, function() {                                                                                          // 16
      return [ "\n            ", Blaze._InOuterTemplateScope(view, function() {                              // 17
        return Spacebars.include(function() {                                                                // 18
          return Spacebars.call(view.templateElseBlock);                                                     // 19
        });                                                                                                  // 20
      }), "\n        " ];                                                                                    // 21
    }), "\n    " ];                                                                                          // 22
  });                                                                                                        // 23
}));                                                                                                         // 24
                                                                                                             // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"if-input-empty.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/if-input-empty/if-input-empty.js                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The IfInputEmptyComponent lets you display content when the input is empty.                               //
 *                                                                                                           //
 * @type {IfInputEmptyComponent}                                                                             //
 */                                                                                                          //
EasySearch.IfInputEmptyComponent = function (_BaseComponent) {                                               // 6
  (0, _inherits3['default'])(IfInputEmptyComponent, _BaseComponent);                                         // 6
                                                                                                             //
  function IfInputEmptyComponent() {                                                                         // 6
    (0, _classCallCheck3['default'])(this, IfInputEmptyComponent);                                           // 6
    return (0, _possibleConstructorReturn3['default'])(this, _BaseComponent.apply(this, arguments));         // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Return true if the input is empty.                                                                      //
   *                                                                                                         //
   * @returns {boolean}                                                                                      //
   */                                                                                                        //
                                                                                                             //
  IfInputEmptyComponent.prototype.inputEmpty = function () {                                                 // 6
    function inputEmpty() {                                                                                  // 6
      return !!this.eachIndex(function (index, name) {                                                       // 13
        return index.getComponentMethods(name).searchIsEmpty();                                              // 14
      }, 'every');                                                                                           // 15
    }                                                                                                        // 16
                                                                                                             //
    return inputEmpty;                                                                                       // 6
  }();                                                                                                       // 6
                                                                                                             //
  return IfInputEmptyComponent;                                                                              // 6
}(BaseComponent);                                                                                            // 6
                                                                                                             //
EasySearch.IfInputEmptyComponent.register('EasySearch.IfInputEmpty');                                        // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"if-no-results":{"template.if-no-results.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/if-no-results/template.if-no-results.js                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.IfNoResults");                                                              // 2
Template["EasySearch.IfNoResults"] = new Template("Template.EasySearch.IfNoResults", (function() {           // 3
  var view = this;                                                                                           // 4
  return Blaze.If(function() {                                                                               // 5
    return Spacebars.call(view.lookup("noResults"));                                                         // 6
  }, function() {                                                                                            // 7
    return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {                                    // 8
      return Spacebars.include(function() {                                                                  // 9
        return Spacebars.call(view.templateContentBlock);                                                    // 10
      });                                                                                                    // 11
    }), "\n    " ];                                                                                          // 12
  }, function() {                                                                                            // 13
    return [ "\n        ", Blaze.If(function() {                                                             // 14
      return Spacebars.call(view.templateElseBlock);                                                         // 15
    }, function() {                                                                                          // 16
      return [ "\n            ", Blaze._InOuterTemplateScope(view, function() {                              // 17
        return Spacebars.include(function() {                                                                // 18
          return Spacebars.call(view.templateElseBlock);                                                     // 19
        });                                                                                                  // 20
      }), "\n        " ];                                                                                    // 21
    }), "\n    " ];                                                                                          // 22
  });                                                                                                        // 23
}));                                                                                                         // 24
                                                                                                             // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"if-no-results.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/if-no-results/if-no-results.js                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The IfNoResultsComponent lets you display content when there are no results.                              //
 *                                                                                                           //
 * @type {IfNoResultsComponent}                                                                              //
 */                                                                                                          //
EasySearch.IfNoResultsComponent = function (_BaseComponent) {                                                // 6
  (0, _inherits3['default'])(IfNoResultsComponent, _BaseComponent);                                          // 6
                                                                                                             //
  function IfNoResultsComponent() {                                                                          // 6
    (0, _classCallCheck3['default'])(this, IfNoResultsComponent);                                            // 6
    return (0, _possibleConstructorReturn3['default'])(this, _BaseComponent.apply(this, arguments));         // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Return true if there are no results.                                                                    //
   *                                                                                                         //
   * @returns {boolean}                                                                                      //
   */                                                                                                        //
                                                                                                             //
  IfNoResultsComponent.prototype.noResults = function () {                                                   // 6
    function noResults() {                                                                                   // 6
      return !!this.eachIndex(function (index, name) {                                                       // 13
        return index.getComponentMethods(name).hasNoResults();                                               // 14
      }, 'every');                                                                                           // 15
    }                                                                                                        // 16
                                                                                                             //
    return noResults;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  return IfNoResultsComponent;                                                                               // 6
}(BaseComponent);                                                                                            // 6
                                                                                                             //
EasySearch.IfNoResultsComponent.register('EasySearch.IfNoResults');                                          // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"if-searching":{"template.if-searching.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/if-searching/template.if-searching.js                                  //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.IfSearching");                                                              // 2
Template["EasySearch.IfSearching"] = new Template("Template.EasySearch.IfSearching", (function() {           // 3
  var view = this;                                                                                           // 4
  return Blaze.If(function() {                                                                               // 5
    return Spacebars.call(view.lookup("searching"));                                                         // 6
  }, function() {                                                                                            // 7
    return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {                                    // 8
      return Spacebars.include(function() {                                                                  // 9
        return Spacebars.call(view.templateContentBlock);                                                    // 10
      });                                                                                                    // 11
    }), "\n    " ];                                                                                          // 12
  }, function() {                                                                                            // 13
    return [ "\n        ", Blaze.If(function() {                                                             // 14
      return Spacebars.call(view.templateElseBlock);                                                         // 15
    }, function() {                                                                                          // 16
      return [ "\n            ", Blaze._InOuterTemplateScope(view, function() {                              // 17
        return Spacebars.include(function() {                                                                // 18
          return Spacebars.call(view.templateElseBlock);                                                     // 19
        });                                                                                                  // 20
      }), "\n        " ];                                                                                    // 21
    }), "\n    " ];                                                                                          // 22
  });                                                                                                        // 23
}));                                                                                                         // 24
                                                                                                             // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"if-searching.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/if-searching/if-searching.js                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The IfSearchingComponent lets you display content when the component is being searched.                   //
 *                                                                                                           //
 * @type {IfSearchingComponent}                                                                              //
 */                                                                                                          //
EasySearch.IfSearchingComponent = function (_BaseComponent) {                                                // 6
  (0, _inherits3['default'])(IfSearchingComponent, _BaseComponent);                                          // 6
                                                                                                             //
  function IfSearchingComponent() {                                                                          // 6
    (0, _classCallCheck3['default'])(this, IfSearchingComponent);                                            // 6
    return (0, _possibleConstructorReturn3['default'])(this, _BaseComponent.apply(this, arguments));         // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Return true if the component is being searched.                                                         //
   *                                                                                                         //
   * @returns {boolean}                                                                                      //
   */                                                                                                        //
                                                                                                             //
  IfSearchingComponent.prototype.searching = function () {                                                   // 6
    function searching() {                                                                                   // 6
      return !!this.eachIndex(function (index, name) {                                                       // 13
        return index.getComponentMethods(name).isSearching();                                                // 14
      }, 'every');                                                                                           // 15
    }                                                                                                        // 16
                                                                                                             //
    return searching;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  return IfSearchingComponent;                                                                               // 6
}(BaseComponent);                                                                                            // 6
                                                                                                             //
EasySearch.IfSearchingComponent.register('EasySearch.IfSearching');                                          // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"load-more":{"template.load-more.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/load-more/template.load-more.js                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.LoadMore");                                                                 // 2
Template["EasySearch.LoadMore"] = new Template("Template.EasySearch.LoadMore", (function() {                 // 3
  var view = this;                                                                                           // 4
  return Blaze.If(function() {                                                                               // 5
    return Spacebars.call(view.lookup("moreDocuments"));                                                     // 6
  }, function() {                                                                                            // 7
    return [ "\n        ", HTML.BUTTON(HTML.Attrs(function() {                                               // 8
      return Spacebars.attrMustache(view.lookup("attributes"));                                              // 9
    }), Blaze.View("lookup:content", function() {                                                            // 10
      return Spacebars.mustache(view.lookup("content"));                                                     // 11
    })), "\n    " ];                                                                                         // 12
  });                                                                                                        // 13
}));                                                                                                         // 14
                                                                                                             // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"load-more.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/load-more/load-more.js                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _createClass2 = require('babel-runtime/helpers/createClass');                                            //
                                                                                                             //
var _createClass3 = _interopRequireDefault(_createClass2);                                                   //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The LoadMoreComponent lets you load more documents through a button.                                      //
 *                                                                                                           //
 * @type {LoadMoreComponent}                                                                                 //
 */                                                                                                          //
EasySearch.LoadMoreComponent = function (_SingleIndexComponent) {                                            // 6
  (0, _inherits3['default'])(LoadMoreComponent, _SingleIndexComponent);                                      // 6
                                                                                                             //
  function LoadMoreComponent() {                                                                             // 6
    (0, _classCallCheck3['default'])(this, LoadMoreComponent);                                               // 6
    return (0, _possibleConstructorReturn3['default'])(this, _SingleIndexComponent.apply(this, arguments));  // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Load more documents.                                                                                    //
   */                                                                                                        //
                                                                                                             //
  LoadMoreComponent.prototype.loadMore = function () {                                                       // 6
    function loadMore() {                                                                                    // 6
      this.index.getComponentMethods(this.name).loadMore(this.options.count);                                // 11
    }                                                                                                        // 15
                                                                                                             //
    return loadMore;                                                                                         // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Content of the component.                                                                               //
   *                                                                                                         //
   * @returns string                                                                                         //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  LoadMoreComponent.prototype.content = function () {                                                        // 6
    function content() {                                                                                     // 6
      return this.options.content;                                                                           // 23
    }                                                                                                        // 24
                                                                                                             //
    return content;                                                                                          // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Attributes of the component.                                                                            //
   *                                                                                                         //
   * @returns string                                                                                         //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  LoadMoreComponent.prototype.attributes = function () {                                                     // 6
    function attributes() {                                                                                  // 6
      return this.getData().attributes || {};                                                                // 32
    }                                                                                                        // 33
                                                                                                             //
    return attributes;                                                                                       // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return true if there are more documents to load.                                                        //
   *                                                                                                         //
   * @returns {Boolean}                                                                                      //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  LoadMoreComponent.prototype.moreDocuments = function () {                                                  // 6
    function moreDocuments() {                                                                               // 6
      return this.index.getComponentMethods(this.name).hasMoreDocuments();                                   // 41
    }                                                                                                        // 42
                                                                                                             //
    return moreDocuments;                                                                                    // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Event map.                                                                                              //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  LoadMoreComponent.prototype.events = function () {                                                         // 6
    function events() {                                                                                      // 6
      return [{                                                                                              // 50
        'click button': function () {                                                                        // 51
          function clickButton() {                                                                           // 51
            this.loadMore();                                                                                 // 52
          }                                                                                                  // 53
                                                                                                             //
          return clickButton;                                                                                // 51
        }()                                                                                                  // 51
      }];                                                                                                    // 50
    }                                                                                                        // 55
                                                                                                             //
    return events;                                                                                           // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the default options.                                                                             //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  (0, _createClass3['default'])(LoadMoreComponent, [{                                                        // 6
    key: 'defaultOptions',                                                                                   // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return {                                                                                             // 63
          content: 'Load more',                                                                              // 64
          count: 10                                                                                          // 65
        };                                                                                                   // 63
      }                                                                                                      // 67
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }]);                                                                                                       // 6
  return LoadMoreComponent;                                                                                  // 6
}(SingleIndexComponent);                                                                                     // 6
                                                                                                             //
EasySearch.LoadMoreComponent.register('EasySearch.LoadMore');                                                // 70
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"pagination":{"template.pagination.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/pagination/template.pagination.js                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("EasySearch.Pagination");                                                               // 2
Template["EasySearch.Pagination"] = new Template("Template.EasySearch.Pagination", (function() {             // 3
  var view = this;                                                                                           // 4
  return Blaze.If(function() {                                                                               // 5
    return Spacebars.call(view.lookup("moreDocuments"));                                                     // 6
  }, function() {                                                                                            // 7
    return [ "\n        ", Blaze.If(function() {                                                             // 8
      return Spacebars.call(view.lookup("customRenderPagination"));                                          // 9
    }, function() {                                                                                          // 10
      return [ "\n            ", Blaze._TemplateWith(function() {                                            // 11
        return {                                                                                             // 12
          template: Spacebars.call(view.lookup("customRenderPagination"))                                    // 13
        };                                                                                                   // 14
      }, function() {                                                                                        // 15
        return Spacebars.include(function() {                                                                // 16
          return Spacebars.call(Template.__dynamic);                                                         // 17
        });                                                                                                  // 18
      }), "\n        " ];                                                                                    // 19
    }, function() {                                                                                          // 20
      return [ "\n            ", HTML.UL({                                                                   // 21
        "class": "pagination"                                                                                // 22
      }, "\n                ", Blaze.Each(function() {                                                       // 23
        return Spacebars.call(view.lookup("page"));                                                          // 24
      }, function() {                                                                                        // 25
        return [ "\n                    ", HTML.LI({                                                         // 26
          "class": function() {                                                                              // 27
            return [ "page ", Spacebars.mustache(view.lookup("pageClasses"), view.lookup(".")) ];            // 28
          }                                                                                                  // 29
        }, "\n                        ", Blaze.View("lookup:content", function() {                           // 30
          return Spacebars.mustache(view.lookup("content"));                                                 // 31
        }), "\n                    "), "\n                " ];                                               // 32
      }), "\n            "), "\n        " ];                                                                 // 33
    }), "\n    " ];                                                                                          // 34
  });                                                                                                        // 35
}));                                                                                                         // 36
                                                                                                             // 37
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"pagination.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/easysearch_components/lib/pagination/pagination.js                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _createClass2 = require('babel-runtime/helpers/createClass');                                            //
                                                                                                             //
var _createClass3 = _interopRequireDefault(_createClass2);                                                   //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/**                                                                                                          //
 * The PaginationComponent lets you paginate through documents.                                              //
 *                                                                                                           //
 * @type {PaginationComponent}                                                                               //
 */                                                                                                          //
EasySearch.PaginationComponent = function (_SingleIndexComponent) {                                          // 6
  (0, _inherits3['default'])(PaginationComponent, _SingleIndexComponent);                                    // 6
                                                                                                             //
  function PaginationComponent() {                                                                           // 6
    (0, _classCallCheck3['default'])(this, PaginationComponent);                                             // 6
    return (0, _possibleConstructorReturn3['default'])(this, _SingleIndexComponent.apply(this, arguments));  // 6
  }                                                                                                          // 6
                                                                                                             //
  /**                                                                                                        //
   * Setup component on created.                                                                             //
   */                                                                                                        //
                                                                                                             //
  PaginationComponent.prototype.onCreated = function () {                                                    // 6
    function onCreated() {                                                                                   // 6
      _SingleIndexComponent.prototype.onCreated.call(this);                                                  // 11
      this.dict.set('currentPage', 1);                                                                       // 12
    }                                                                                                        // 13
                                                                                                             //
    return onCreated;                                                                                        // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Get pages for displaying the pagination.                                                                //
   *                                                                                                         //
   * @returns {Array}                                                                                        //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  PaginationComponent.prototype.page = function () {                                                         // 6
    function page() {                                                                                        // 6
      var totalCount = this.dict.get('count'),                                                               // 21
          pageCount = this.dict.get('limit'),                                                                // 21
          currentPage = this.dict.get('currentPage'),                                                        // 21
          maxPages = this.options.maxPages,                                                                  // 21
          prevAndNext = this.options.prevAndNext;                                                            // 21
                                                                                                             //
      if (!pageCount || !totalCount) {                                                                       // 27
        return [];                                                                                           // 28
      }                                                                                                      // 29
                                                                                                             //
      return this.options.transformPages(EasySearch._getPagesForPagination({ totalCount: totalCount, pageCount: pageCount, currentPage: currentPage, maxPages: maxPages, prevAndNext: prevAndNext }));
    }                                                                                                        // 34
                                                                                                             //
    return page;                                                                                             // 6
  }();                                                                                                       // 6
                                                                                                             //
  PaginationComponent.prototype.customRenderPagination = function () {                                       // 6
    function customRenderPagination() {                                                                      // 6
      return this.getData().customRenderPagination;                                                          // 37
    }                                                                                                        // 38
                                                                                                             //
    return customRenderPagination;                                                                           // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Paginate documents.                                                                                     //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  PaginationComponent.prototype.paginate = function () {                                                     // 6
    function paginate(page) {                                                                                // 6
      check(page, Number);                                                                                   // 44
                                                                                                             //
      this.index.getComponentMethods(this.name).paginate(page);                                              // 46
    }                                                                                                        // 47
                                                                                                             //
    return paginate;                                                                                         // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return page classes.                                                                                    //
   *                                                                                                         //
   * @param {Object} data Data for the current page                                                          //
   *                                                                                                         //
   * @returns {String}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  PaginationComponent.prototype.pageClasses = function () {                                                  // 6
    function pageClasses(data) {                                                                             // 6
      return ((data.disabled ? 'disabled' : '') + ' ' + (data.current ? 'current' : '')).trim();             // 57
    }                                                                                                        // 58
                                                                                                             //
    return pageClasses;                                                                                      // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return true if there are more documents to load.                                                        //
   *                                                                                                         //
   * @returns {Boolean}                                                                                      //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  PaginationComponent.prototype.moreDocuments = function () {                                                // 6
    function moreDocuments() {                                                                               // 6
      return this.index.getComponentMethods(this.name).hasMoreDocuments();                                   // 66
    }                                                                                                        // 67
                                                                                                             //
    return moreDocuments;                                                                                    // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Event map.                                                                                              //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  PaginationComponent.prototype.events = function () {                                                       // 6
    function events() {                                                                                      // 6
      return [{                                                                                              // 75
        'click .page:not(.disabled)': function () {                                                          // 76
          function clickPageNotDisabled(e) {                                                                 // 76
            var currentPage = this.currentData().page;                                                       // 77
            this.dict.set('currentPage', currentPage);                                                       // 78
            this.paginate(currentPage);                                                                      // 79
                                                                                                             //
            e.preventDefault();                                                                              // 81
          }                                                                                                  // 82
                                                                                                             //
          return clickPageNotDisabled;                                                                       // 76
        }()                                                                                                  // 76
      }];                                                                                                    // 75
    }                                                                                                        // 84
                                                                                                             //
    return events;                                                                                           // 6
  }();                                                                                                       // 6
                                                                                                             //
  /**                                                                                                        //
   * Return the default options.                                                                             //
   *                                                                                                         //
   * @returns {Object}                                                                                       //
   */                                                                                                        //
                                                                                                             //
                                                                                                             //
  (0, _createClass3['default'])(PaginationComponent, [{                                                      // 6
    key: 'defaultOptions',                                                                                   // 6
    get: function () {                                                                                       // 6
      function get() {                                                                                       // 6
        return {                                                                                             // 92
          prevAndNext: true,                                                                                 // 93
          maxPages: null,                                                                                    // 94
          transformPages: function () {                                                                      // 95
            function transformPages(pages) {                                                                 // 95
              return pages;                                                                                  // 95
            }                                                                                                // 95
                                                                                                             //
            return transformPages;                                                                           // 95
          }()                                                                                                // 95
        };                                                                                                   // 92
      }                                                                                                      // 97
                                                                                                             //
      return get;                                                                                            // 6
    }()                                                                                                      // 6
  }]);                                                                                                       // 6
  return PaginationComponent;                                                                                // 6
}(SingleIndexComponent);                                                                                     // 6
                                                                                                             //
EasySearch.PaginationComponent.register('EasySearch.Pagination');                                            // 100
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}}}},{"extensions":[".js",".json",".html"]});
require("./node_modules/meteor/easysearch:components/lib/base.js");
require("./node_modules/meteor/easysearch:components/lib/single-index.js");
require("./node_modules/meteor/easysearch:components/lib/component-methods.js");
require("./node_modules/meteor/easysearch:components/lib/core.js");
require("./node_modules/meteor/easysearch:components/lib/input/template.input.js");
require("./node_modules/meteor/easysearch:components/lib/input/input.js");
require("./node_modules/meteor/easysearch:components/lib/field-input/template.field-input.js");
require("./node_modules/meteor/easysearch:components/lib/field-input/field-input.js");
require("./node_modules/meteor/easysearch:components/lib/each/template.each.js");
require("./node_modules/meteor/easysearch:components/lib/each/each.js");
require("./node_modules/meteor/easysearch:components/lib/if-input-empty/template.if-input-empty.js");
require("./node_modules/meteor/easysearch:components/lib/if-input-empty/if-input-empty.js");
require("./node_modules/meteor/easysearch:components/lib/if-no-results/template.if-no-results.js");
require("./node_modules/meteor/easysearch:components/lib/if-no-results/if-no-results.js");
require("./node_modules/meteor/easysearch:components/lib/if-searching/template.if-searching.js");
require("./node_modules/meteor/easysearch:components/lib/if-searching/if-searching.js");
require("./node_modules/meteor/easysearch:components/lib/load-more/template.load-more.js");
require("./node_modules/meteor/easysearch:components/lib/load-more/load-more.js");
require("./node_modules/meteor/easysearch:components/lib/pagination/template.pagination.js");
require("./node_modules/meteor/easysearch:components/lib/pagination/pagination.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['easysearch:components'] = {}, {
  EasySearch: EasySearch
});

})();
