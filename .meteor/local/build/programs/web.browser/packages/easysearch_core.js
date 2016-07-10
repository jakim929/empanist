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
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Index, Engine, ReactiveEngine, Cursor, SearchCollection, MongoDBEngine, MinimongoEngine, MongoTextIndexEngine, EasySearch;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:core":{"lib":{"core":{"index.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/core/index.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _createClass2 = require('babel-runtime/helpers/createClass');                                                    //
                                                                                                                     //
var _createClass3 = _interopRequireDefault(_createClass2);                                                           //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * An Index represents the main entry point for searching with EasySearch. It relies on                              //
 * the given engine to have the search functionality and defines the data that should be searchable.                 //
 *                                                                                                                   //
 * @type {Index}                                                                                                     //
 */                                                                                                                  //
Index = function () {                                                                                                // 7
  /**                                                                                                                //
   * Constructor                                                                                                     //
   *                                                                                                                 //
   * @param {Object} config Configuration                                                                            //
   *                                                                                                                 //
   * @constructor                                                                                                    //
   */                                                                                                                //
                                                                                                                     //
  function Index(config) {                                                                                           // 15
    (0, _classCallCheck3['default'])(this, Index);                                                                   // 15
                                                                                                                     //
    check(config, Object);                                                                                           // 16
    check(config.collection, Meteor.Collection);                                                                     // 17
    check(config.fields, [String]);                                                                                  // 18
                                                                                                                     //
    if (!(config.engine instanceof Engine)) {                                                                        // 20
      throw new Meteor.Error('invalid-engine', 'engine needs to be instanceof Engine');                              // 21
    }                                                                                                                // 22
                                                                                                                     //
    if (!config.name) config.name = (config.collection._name || '').toLowerCase();                                   // 24
                                                                                                                     //
    this.config = _.extend(Index.defaultConfiguration, config);                                                      // 27
    this.defaultSearchOptions = _.defaults({}, this.config.defaultSearchOptions, { limit: 10, skip: 0, props: {} });
                                                                                                                     //
    // Engine specific code on index creation                                                                        //
    config.engine.onIndexCreate(this.config);                                                                        // 31
  }                                                                                                                  // 32
                                                                                                                     //
  /**                                                                                                                //
   * Default configuration for an index.                                                                             //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  /**                                                                                                                //
   * Search the index.                                                                                               //
   *                                                                                                                 //
   * @param {Object|String} searchDefinition Search definition                                                       //
   * @param {Object}        options          Options                                                                 //
   *                                                                                                                 //
   * @returns {Cursor}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
  Index.prototype.search = function () {                                                                             // 7
    function search(searchDefinition) {                                                                              // 7
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];                         // 54
                                                                                                                     //
      this.config.engine.checkSearchParam(searchDefinition, this.config);                                            // 55
                                                                                                                     //
      check(options, {                                                                                               // 57
        limit: Match.Optional(Number),                                                                               // 58
        skip: Match.Optional(Number),                                                                                // 59
        props: Match.Optional(Object)                                                                                // 60
      });                                                                                                            // 57
                                                                                                                     //
      options = {                                                                                                    // 63
        search: this._getSearchOptions(options),                                                                     // 64
        index: this.config                                                                                           // 65
      };                                                                                                             // 63
                                                                                                                     //
      if (!this.config.permission(options.search)) {                                                                 // 68
        throw new Meteor.Error('not-allowed', "Not allowed to search this index!");                                  // 69
      }                                                                                                              // 70
                                                                                                                     //
      return this.config.engine.search(searchDefinition, options);                                                   // 72
    }                                                                                                                // 73
                                                                                                                     //
    return search;                                                                                                   // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Returns the search options based on the given options.                                                          //
   *                                                                                                                 //
   * @param {Object} options Options to use                                                                          //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Index.prototype._getSearchOptions = function () {                                                                  // 7
    function _getSearchOptions(options) {                                                                            // 7
      return _.defaults(Meteor.userId ? { userId: Meteor.userId() } : {}, options, this.defaultSearchOptions);       // 83
    }                                                                                                                // 84
                                                                                                                     //
    return _getSearchOptions;                                                                                        // 7
  }();                                                                                                               // 7
                                                                                                                     //
  (0, _createClass3['default'])(Index, null, [{                                                                      // 7
    key: 'defaultConfiguration',                                                                                     // 7
    get: function () {                                                                                               // 7
      function get() {                                                                                               // 7
        return {                                                                                                     // 40
          permission: function () {                                                                                  // 41
            function permission() {                                                                                  // 41
              return true;                                                                                           // 41
            }                                                                                                        // 41
                                                                                                                     //
            return permission;                                                                                       // 41
          }(),                                                                                                       // 41
          defaultSearchOptions: {}                                                                                   // 42
        };                                                                                                           // 40
      }                                                                                                              // 44
                                                                                                                     //
      return get;                                                                                                    // 7
    }()                                                                                                              // 7
  }]);                                                                                                               // 7
  return Index;                                                                                                      // 7
}();                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"engine.js":["babel-runtime/helpers/classCallCheck",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/core/engine.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * An Engine is the technology used for searching with EasySearch, with                                              //
 * customizable configuration to how it interacts with the data from the Index.                                      //
 *                                                                                                                   //
 * @type {Engine}                                                                                                    //
 */                                                                                                                  //
Engine = function () {                                                                                               // 7
  /**                                                                                                                //
   * Constructor                                                                                                     //
   *                                                                                                                 //
   * @param {Object} config configuration                                                                            //
   *                                                                                                                 //
   * @constructor                                                                                                    //
   */                                                                                                                //
                                                                                                                     //
  function Engine() {                                                                                                // 15
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];                            // 15
    (0, _classCallCheck3['default'])(this, Engine);                                                                  // 15
                                                                                                                     //
    if (this.constructor === Engine) {                                                                               // 16
      throw new Error('Cannot initialize instance of Engine');                                                       // 17
    }                                                                                                                // 18
                                                                                                                     //
    if (!_.isFunction(this.search)) {                                                                                // 20
      throw new Error('Engine needs to implement search method');                                                    // 21
    }                                                                                                                // 22
                                                                                                                     //
    this.config = _.defaults({}, config, this.defaultConfiguration());                                               // 24
  }                                                                                                                  // 25
                                                                                                                     //
  /**                                                                                                                //
   * Return default configuration.                                                                                   //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Engine.prototype.defaultConfiguration = function () {                                                              // 7
    function defaultConfiguration() {                                                                                // 7
      return {};                                                                                                     // 33
    }                                                                                                                // 34
                                                                                                                     //
    return defaultConfiguration;                                                                                     // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Call a configuration method with the engine scope.                                                              //
   *                                                                                                                 //
   * @param {String} methodName Method name                                                                          //
   * @param {Object} args       Arguments for the method                                                             //
   *                                                                                                                 //
   * @returns {*}                                                                                                    //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Engine.prototype.callConfigMethod = function () {                                                                  // 7
    function callConfigMethod(methodName) {                                                                          // 7
      check(methodName, String);                                                                                     // 45
                                                                                                                     //
      var func = this.config[methodName];                                                                            // 47
                                                                                                                     //
      if (func) {                                                                                                    // 49
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {    // 49
          args[_key - 1] = arguments[_key];                                                                          // 44
        }                                                                                                            // 49
                                                                                                                     //
        return func.apply(this, args);                                                                               // 50
      }                                                                                                              // 51
    }                                                                                                                // 52
                                                                                                                     //
    return callConfigMethod;                                                                                         // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Check the given search parameter for validity                                                                   //
   *                                                                                                                 //
   * @param search                                                                                                   //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Engine.prototype.checkSearchParam = function () {                                                                  // 7
    function checkSearchParam(search) {                                                                              // 7
      check(search, String);                                                                                         // 60
    }                                                                                                                // 61
                                                                                                                     //
    return checkSearchParam;                                                                                         // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   *Code to run on index creation                                                                                    //
   *                                                                                                                 //
   * @param {Object} indexConfig Index configuraction                                                                //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Engine.prototype.onIndexCreate = function () {                                                                     // 7
    function onIndexCreate(indexConfig) {                                                                            // 7
      if (!indexConfig.allowedFields) {                                                                              // 69
        indexConfig.allowedFields = indexConfig.fields;                                                              // 70
      }                                                                                                              // 71
    }                                                                                                                // 72
                                                                                                                     //
    return onIndexCreate;                                                                                            // 7
  }();                                                                                                               // 7
                                                                                                                     //
  return Engine;                                                                                                     // 7
}();                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"reactive-engine.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/core/reactive-engine.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * A ReactiveEngine handles the reactive logic, such as subscribing                                                  //
 * and publishing documents into a self contained collection.                                                        //
 *                                                                                                                   //
 * @type {ReactiveEngine}                                                                                            //
 */                                                                                                                  //
ReactiveEngine = function (_Engine) {                                                                                // 7
  (0, _inherits3['default'])(ReactiveEngine, _Engine);                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Constructor.                                                                                                    //
   *                                                                                                                 //
   * @param {Object} config Configuration                                                                            //
   *                                                                                                                 //
   * @constructor                                                                                                    //
   */                                                                                                                //
                                                                                                                     //
  function ReactiveEngine(config) {                                                                                  // 15
    (0, _classCallCheck3['default'])(this, ReactiveEngine);                                                          // 15
                                                                                                                     //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _Engine.call(this, config));                       // 15
                                                                                                                     //
    if (_this === _this.constructor) {                                                                               // 18
      throw new Error('Cannot initialize instance of ReactiveEngine');                                               // 19
    }                                                                                                                // 20
                                                                                                                     //
    if (!_.isFunction(_this.getSearchCursor)) {                                                                      // 22
      throw new Error('Reactive engine needs to implement getSearchCursor method');                                  // 23
    }                                                                                                                // 24
    return _this;                                                                                                    // 15
  }                                                                                                                  // 25
                                                                                                                     //
  /**                                                                                                                //
   * Return default configuration.                                                                                   //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  ReactiveEngine.prototype.defaultConfiguration = function () {                                                      // 7
    function defaultConfiguration() {                                                                                // 7
      return _.defaults({}, {                                                                                        // 33
        transform: function () {                                                                                     // 34
          function transform(doc) {                                                                                  // 34
            return doc;                                                                                              // 34
          }                                                                                                          // 34
                                                                                                                     //
          return transform;                                                                                          // 34
        }(),                                                                                                         // 34
        beforePublish: function () {                                                                                 // 35
          function beforePublish(event, doc) {                                                                       // 35
            return doc;                                                                                              // 35
          }                                                                                                          // 35
                                                                                                                     //
          return beforePublish;                                                                                      // 35
        }()                                                                                                          // 35
      }, _Engine.prototype.defaultConfiguration.call(this));                                                         // 33
    }                                                                                                                // 37
                                                                                                                     //
    return defaultConfiguration;                                                                                     // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Code to run on index creation                                                                                   //
   *                                                                                                                 //
   * @param {Object} indexConfig Index configuration                                                                 //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  ReactiveEngine.prototype.onIndexCreate = function () {                                                             // 7
    function onIndexCreate(indexConfig) {                                                                            // 7
      _Engine.prototype.onIndexCreate.call(this, indexConfig);                                                       // 45
      indexConfig.searchCollection = new SearchCollection(indexConfig, this);                                        // 46
      indexConfig.mongoCollection = indexConfig.searchCollection._collection;                                        // 47
    }                                                                                                                // 48
                                                                                                                     //
    return onIndexCreate;                                                                                            // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Transform the search definition.                                                                                //
   *                                                                                                                 //
   * @param {String|Object} searchDefinition Search definition                                                       //
   * @param {Object}        options          Search and index options                                                //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  ReactiveEngine.prototype.transformSearchDefinition = function () {                                                 // 7
    function transformSearchDefinition(searchDefinition, options) {                                                  // 7
      if (_.isString(searchDefinition)) {                                                                            // 59
        (function () {                                                                                               // 59
          var obj = {};                                                                                              // 60
                                                                                                                     //
          _.each(options.index.fields, function (field) {                                                            // 62
            obj[field] = searchDefinition;                                                                           // 63
          });                                                                                                        // 64
                                                                                                                     //
          searchDefinition = obj;                                                                                    // 66
        })();                                                                                                        // 59
      }                                                                                                              // 67
                                                                                                                     //
      return searchDefinition;                                                                                       // 69
    }                                                                                                                // 70
                                                                                                                     //
    return transformSearchDefinition;                                                                                // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Check the given search parameter for validity                                                                   //
   *                                                                                                                 //
   * @param search                                                                                                   //
   * @param indexOptions                                                                                             //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  ReactiveEngine.prototype.checkSearchParam = function () {                                                          // 7
    function checkSearchParam(search, indexOptions) {                                                                // 7
      check(search, Match.OneOf(String, Object));                                                                    // 79
                                                                                                                     //
      if (_.isObject(search)) {                                                                                      // 81
        _.each(search, function (val, field) {                                                                       // 82
          check(val, String);                                                                                        // 83
                                                                                                                     //
          if (-1 === _.indexOf(indexOptions.allowedFields, field)) {                                                 // 85
            throw new Meteor.Error('Not allowed to search over field "' + field + '"');                              // 86
          }                                                                                                          // 87
        });                                                                                                          // 88
      }                                                                                                              // 89
    }                                                                                                                // 90
                                                                                                                     //
    return checkSearchParam;                                                                                         // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Reactively search on the collection.                                                                            //
   *                                                                                                                 //
   * @param {Object} searchDefinition Search definition                                                              //
   * @param {Object} options          Options                                                                        //
   *                                                                                                                 //
   * @returns {Cursor}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  ReactiveEngine.prototype.search = function () {                                                                    // 7
    function search(searchDefinition, options) {                                                                     // 7
      if (Meteor.isClient) {                                                                                         // 101
        return options.index.searchCollection.find(searchDefinition, options.search);                                // 102
      } else {                                                                                                       // 103
        return this.getSearchCursor(this.transformSearchDefinition(searchDefinition, options), options);             // 104
      }                                                                                                              // 108
    }                                                                                                                // 109
                                                                                                                     //
    return search;                                                                                                   // 7
  }();                                                                                                               // 7
                                                                                                                     //
  return ReactiveEngine;                                                                                             // 7
}(Engine);                                                                                                           // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"cursor.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/core/cursor.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _createClass2 = require("babel-runtime/helpers/createClass");                                                    //
                                                                                                                     //
var _createClass3 = _interopRequireDefault(_createClass2);                                                           //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * A Cursor represents a pointer to the search results. Since it's specific                                          //
 * to EasySearch it can also be used to check for valid return values.                                               //
 *                                                                                                                   //
 * @type {Cursor}                                                                                                    //
 */                                                                                                                  //
Cursor = function () {                                                                                               // 7
  /**                                                                                                                //
   * Constructor                                                                                                     //
   *                                                                                                                 //
   * @param {Mongo.Cursor} mongoCursor   Referenced mongo cursor                                                     //
   * @param {Number}       count         Count of all documents found                                                //
   * @param {Boolean}      isReady       Cursor is ready                                                             //
   * @param {Object}       publishHandle Publish handle to stop if on client                                         //
   *                                                                                                                 //
   * @constructor                                                                                                    //
   *                                                                                                                 //
   */                                                                                                                //
                                                                                                                     //
  function Cursor(mongoCursor, count) {                                                                              // 19
    var isReady = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];                         // 19
    var publishHandle = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];                   // 19
    (0, _classCallCheck3["default"])(this, Cursor);                                                                  // 19
                                                                                                                     //
    check(mongoCursor.fetch, Function);                                                                              // 20
    check(count, Number);                                                                                            // 21
    check(isReady, Match.Optional(Boolean));                                                                         // 22
    check(publishHandle, Match.OneOf(null, Object));                                                                 // 23
                                                                                                                     //
    this._mongoCursor = mongoCursor;                                                                                 // 25
    this._count = count;                                                                                             // 26
    this._isReady = isReady;                                                                                         // 27
    this._publishHandle = publishHandle;                                                                             // 28
  }                                                                                                                  // 29
                                                                                                                     //
  /**                                                                                                                //
   * Fetch the search results.                                                                                       //
   *                                                                                                                 //
   * @returns {[Object]}                                                                                             //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Cursor.prototype.fetch = function () {                                                                             // 7
    function fetch() {                                                                                               // 7
      return this._mongoCursor.fetch();                                                                              // 37
    }                                                                                                                // 38
                                                                                                                     //
    return fetch;                                                                                                    // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Stop the subscription handle associated with the cursor.                                                        //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Cursor.prototype.stop = function () {                                                                              // 7
    function stop() {                                                                                                // 7
      if (this._publishHandle) {                                                                                     // 44
        return this._publishHandle.stop();                                                                           // 45
      }                                                                                                              // 46
    }                                                                                                                // 47
                                                                                                                     //
    return stop;                                                                                                     // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Return count of all documents found                                                                             //
   *                                                                                                                 //
   * @returns {Number}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Cursor.prototype.count = function () {                                                                             // 7
    function count() {                                                                                               // 7
      return this._count;                                                                                            // 55
    }                                                                                                                // 56
                                                                                                                     //
    return count;                                                                                                    // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Return if the cursor is ready.                                                                                  //
   *                                                                                                                 //
   * @returns {Boolean}                                                                                              //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  Cursor.prototype.isReady = function () {                                                                           // 7
    function isReady() {                                                                                             // 7
      return this._isReady;                                                                                          // 64
    }                                                                                                                // 65
                                                                                                                     //
    return isReady;                                                                                                  // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Return the raw mongo cursor.                                                                                    //
   *                                                                                                                 //
   * @returns {Mongo.Cursor}                                                                                         //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  (0, _createClass3["default"])(Cursor, [{                                                                           // 7
    key: "mongoCursor",                                                                                              // 7
    get: function () {                                                                                               // 7
      function get() {                                                                                               // 7
        return this._mongoCursor;                                                                                    // 73
      }                                                                                                              // 74
                                                                                                                     //
      return get;                                                                                                    // 7
    }()                                                                                                              // 7
                                                                                                                     //
    /**                                                                                                              //
     * Return a fake empty cursor, without data.                                                                     //
     *                                                                                                               //
     * @returns {Object}                                                                                             //
     */                                                                                                              //
                                                                                                                     //
  }], [{                                                                                                             // 7
    key: "emptyCursor",                                                                                              // 7
    get: function () {                                                                                               // 7
      function get() {                                                                                               // 7
        return { fetch: function () {                                                                                // 82
            function fetch() {                                                                                       // 82
              return [];                                                                                             // 82
            }                                                                                                        // 82
                                                                                                                     //
            return fetch;                                                                                            // 82
          }(), observe: function () {                                                                                // 82
            function observe() {                                                                                     // 82
              return { stop: function () {                                                                           // 82
                  function stop() {                                                                                  // 82
                    return null;                                                                                     // 82
                  }                                                                                                  // 82
                                                                                                                     //
                  return stop;                                                                                       // 82
                }() };                                                                                               // 82
            }                                                                                                        // 82
                                                                                                                     //
            return observe;                                                                                          // 82
          }(), stop: function () {                                                                                   // 82
            function stop() {}                                                                                       // 82
                                                                                                                     //
            return stop;                                                                                             // 82
          }() };                                                                                                     // 82
      }                                                                                                              // 83
                                                                                                                     //
      return get;                                                                                                    // 7
    }()                                                                                                              // 7
  }]);                                                                                                               // 7
  return Cursor;                                                                                                     // 7
}();                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"search-collection.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/core/search-collection.js                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _createClass2 = require('babel-runtime/helpers/createClass');                                                    //
                                                                                                                     //
var _createClass3 = _interopRequireDefault(_createClass2);                                                           //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * A search collection represents a reactive collection on the client,                                               //
 * which is used by the ReactiveEngine for searching.                                                                //
 *                                                                                                                   //
 * @type {SearchCollection}                                                                                          //
 */                                                                                                                  //
SearchCollection = function () {                                                                                     // 7
  /**                                                                                                                //
   * Constructor                                                                                                     //
   *                                                                                                                 //
   * @param {Object}         indexConfiguration Index configuration                                                  //
   * @param {ReactiveEngine} engine             Reactive Engine                                                      //
   *                                                                                                                 //
   * @constructor                                                                                                    //
   */                                                                                                                //
                                                                                                                     //
  function SearchCollection(indexConfiguration, engine) {                                                            // 16
    (0, _classCallCheck3['default'])(this, SearchCollection);                                                        // 16
                                                                                                                     //
    check(indexConfiguration, Object);                                                                               // 17
    check(indexConfiguration.name, Match.OneOf(String, null));                                                       // 18
                                                                                                                     //
    if (!(engine instanceof ReactiveEngine)) {                                                                       // 20
      throw new Meteor.Error('invalid-engine', 'engine needs to be instanceof ReactiveEngine');                      // 21
    }                                                                                                                // 22
                                                                                                                     //
    this._indexConfiguration = indexConfiguration;                                                                   // 24
    this._name = indexConfiguration.name + '/easySearch';                                                            // 25
    this._engine = engine;                                                                                           // 26
                                                                                                                     //
    if (Meteor.isClient) {                                                                                           // 28
      this._collection = new Meteor.Collection(this._name);                                                          // 29
    } else if (Meteor.isServer) {                                                                                    // 30
      this._setUpPublication();                                                                                      // 31
    }                                                                                                                // 32
  }                                                                                                                  // 33
                                                                                                                     //
  /**                                                                                                                //
   * Get name                                                                                                        //
   *                                                                                                                 //
   * @returns {String}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  /**                                                                                                                //
   * Find documents on the client.                                                                                   //
   *                                                                                                                 //
   * @param {Object} searchDefinition Search definition                                                              //
   * @param {Object} options          Options                                                                        //
   *                                                                                                                 //
   * @returns {Cursor}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
  SearchCollection.prototype.find = function () {                                                                    // 7
    function find(searchDefinition, options) {                                                                       // 7
      if (!Meteor.isClient) {                                                                                        // 62
        throw new Error('find can only be used on client');                                                          // 63
      }                                                                                                              // 64
                                                                                                                     //
      var publishHandle = Meteor.subscribe(this.name, searchDefinition, options);                                    // 66
                                                                                                                     //
      var count = this._getCount(searchDefinition);                                                                  // 68
      var mongoCursor = this._getMongoCursor(searchDefinition, options);                                             // 69
                                                                                                                     //
      if (!_.isNumber(count)) {                                                                                      // 71
        return new Cursor(mongoCursor, 0, false);                                                                    // 72
      }                                                                                                              // 73
                                                                                                                     //
      return new Cursor(mongoCursor, count, true, publishHandle);                                                    // 75
    }                                                                                                                // 76
                                                                                                                     //
    return find;                                                                                                     // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Get the count of the cursor.                                                                                    //
   *                                                                                                                 //
   * @params {Object} searchDefinition Search definition                                                             //
   *                                                                                                                 //
   * @returns {Cursor.count}                                                                                         //
   *                                                                                                                 //
   * @private                                                                                                        //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  SearchCollection.prototype._getCount = function () {                                                               // 7
    function _getCount(searchDefinition) {                                                                           // 7
      var countDoc = this._collection.findOne('searchCount' + JSON.stringify(searchDefinition));                     // 88
                                                                                                                     //
      if (countDoc) {                                                                                                // 90
        return countDoc.count;                                                                                       // 91
      }                                                                                                              // 92
    }                                                                                                                // 93
                                                                                                                     //
    return _getCount;                                                                                                // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Get the mongo cursor.                                                                                           //
   *                                                                                                                 //
   * @param {Object} searchDefinition Search definition                                                              //
   * @param {Object} options          Search options                                                                 //
   *                                                                                                                 //
   * @returns {Cursor}                                                                                               //
   * @private                                                                                                        //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  SearchCollection.prototype._getMongoCursor = function () {                                                         // 7
    function _getMongoCursor(searchDefinition, options) {                                                            // 7
      var _this = this;                                                                                              // 104
                                                                                                                     //
      return this._collection.find({ __searchDefinition: JSON.stringify(searchDefinition), __searchOptions: JSON.stringify(options.props) }, {
        transform: function () {                                                                                     // 108
          function transform(doc) {                                                                                  // 108
            delete doc.__searchDefinition;                                                                           // 109
            delete doc.__searchOptions;                                                                              // 110
            delete doc.__sortPosition;                                                                               // 111
                                                                                                                     //
            doc = _this.engine.config.transform(doc);                                                                // 113
                                                                                                                     //
            return doc;                                                                                              // 115
          }                                                                                                          // 116
                                                                                                                     //
          return transform;                                                                                          // 108
        }(),                                                                                                         // 108
        sort: ['__sortPosition']                                                                                     // 117
      });                                                                                                            // 107
    }                                                                                                                // 120
                                                                                                                     //
    return _getMongoCursor;                                                                                          // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Return a unique document id for publication.                                                                    //
   *                                                                                                                 //
   * @param {Document} doc                                                                                           //
   *                                                                                                                 //
   * @returns string                                                                                                 //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  SearchCollection.prototype.generateId = function () {                                                              // 7
    function generateId(doc) {                                                                                       // 7
      return doc._id + doc.__searchDefinition + doc.__searchOptions;                                                 // 130
    }                                                                                                                // 131
                                                                                                                     //
    return generateId;                                                                                               // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Add custom fields to the given document                                                                         //
   *                                                                                                                 //
   * @param {Document} doc                                                                                           //
   * @param {Object}   data                                                                                          //
   * @returns {*}                                                                                                    //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  SearchCollection.prototype.addCustomFields = function () {                                                         // 7
    function addCustomFields(doc, data) {                                                                            // 7
      _.forEach(data, function (val, key) {                                                                          // 141
        doc['__' + key] = val;                                                                                       // 142
      });                                                                                                            // 143
                                                                                                                     //
      return doc;                                                                                                    // 145
    }                                                                                                                // 146
                                                                                                                     //
    return addCustomFields;                                                                                          // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Set up publication.                                                                                             //
   *                                                                                                                 //
   * @private                                                                                                        //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  SearchCollection.prototype._setUpPublication = function () {                                                       // 7
    function _setUpPublication() {                                                                                   // 7
      var collectionScope = this,                                                                                    // 154
          collectionName = this.name;                                                                                // 154
                                                                                                                     //
      Meteor.publish(collectionName, function (searchDefinition, options) {                                          // 157
        var _this2 = this;                                                                                           // 157
                                                                                                                     //
        check(searchDefinition, Match.OneOf(String, Object));                                                        // 158
        check(options, Object);                                                                                      // 159
                                                                                                                     //
        var definitionString = JSON.stringify(searchDefinition),                                                     // 161
            optionsString = JSON.stringify(options.props);                                                           // 161
                                                                                                                     //
        options.userId = this.userId;                                                                                // 164
        options.publicationScope = this;                                                                             // 165
                                                                                                                     //
        if (!collectionScope._indexConfiguration.permission(options)) {                                              // 167
          throw new Meteor.Error('not-allowed', "You're not allowed to search this index!");                         // 168
        }                                                                                                            // 169
                                                                                                                     //
        collectionScope.engine.checkSearchParam(searchDefinition, collectionScope._indexConfiguration);              // 171
                                                                                                                     //
        var cursor = collectionScope.engine.search(searchDefinition, {                                               // 173
          search: options,                                                                                           // 174
          index: collectionScope._indexConfiguration                                                                 // 175
        });                                                                                                          // 173
                                                                                                                     //
        var count = cursor.count();                                                                                  // 178
                                                                                                                     //
        this.added(collectionName, 'searchCount' + definitionString, { count: count });                              // 180
                                                                                                                     //
        var resultsHandle = cursor.mongoCursor.observe({                                                             // 182
          addedAt: function () {                                                                                     // 183
            function addedAt(doc, atIndex, before) {                                                                 // 183
              doc = collectionScope.engine.config.beforePublish('addedAt', doc, atIndex, before);                    // 184
              doc = collectionScope.addCustomFields(doc, {                                                           // 185
                searchDefinition: definitionString,                                                                  // 186
                searchOptions: optionsString,                                                                        // 187
                sortPosition: atIndex,                                                                               // 188
                originalId: doc._id                                                                                  // 189
              });                                                                                                    // 185
                                                                                                                     //
              _this2.added(collectionName, collectionScope.generateId(doc), doc);                                    // 192
            }                                                                                                        // 193
                                                                                                                     //
            return addedAt;                                                                                          // 183
          }(),                                                                                                       // 183
          changedAt: function () {                                                                                   // 194
            function changedAt(doc, oldDoc, atIndex) {                                                               // 194
              doc = collectionScope.engine.config.beforePublish('changedAt', doc, oldDoc, atIndex);                  // 195
              doc = collectionScope.addCustomFields(doc, {                                                           // 196
                searchDefinition: definitionString,                                                                  // 197
                searchOptions: optionsString,                                                                        // 198
                sortPosition: atIndex,                                                                               // 199
                originalId: doc._id                                                                                  // 200
              });                                                                                                    // 196
                                                                                                                     //
              _this2.changed(collectionName, collectionScope.generateId(doc), doc);                                  // 203
            }                                                                                                        // 204
                                                                                                                     //
            return changedAt;                                                                                        // 194
          }(),                                                                                                       // 194
          movedTo: function () {                                                                                     // 205
            function movedTo(doc, fromIndex, toIndex, before) {                                                      // 205
              doc = collectionScope.engine.config.beforePublish('movedTo', doc, fromIndex, toIndex, before);         // 206
              doc = collectionScope.addCustomFields(doc, {                                                           // 207
                searchDefinition: definitionString,                                                                  // 208
                searchOptions: optionsString,                                                                        // 209
                sortPosition: toIndex                                                                                // 210
              });                                                                                                    // 207
                                                                                                                     //
              var beforeDoc = collectionScope._indexConfiguration.collection.findOne(before);                        // 213
                                                                                                                     //
              if (beforeDoc) {                                                                                       // 215
                beforeDoc = collectionScope.addCustomFields(beforeDoc, {                                             // 216
                  searchDefinition: definitionString,                                                                // 217
                  searchOptions: optionsString,                                                                      // 218
                  sortPosition: fromIndex                                                                            // 219
                });                                                                                                  // 216
                _this2.changed(collectionName, collectionScope.generateId(beforeDoc), beforeDoc);                    // 221
              }                                                                                                      // 222
                                                                                                                     //
              _this2.changed(collectionName, collectionScope.generateId(doc), doc);                                  // 224
            }                                                                                                        // 225
                                                                                                                     //
            return movedTo;                                                                                          // 205
          }(),                                                                                                       // 205
          removedAt: function () {                                                                                   // 226
            function removedAt(doc, atIndex) {                                                                       // 226
              doc = collectionScope.engine.config.beforePublish('removedAt', doc, atIndex);                          // 227
              doc = collectionScope.addCustomFields(doc, { searchDefinition: definitionString, searchOptions: optionsString });
              _this2.removed(collectionName, collectionScope.generateId(doc));                                       // 229
            }                                                                                                        // 230
                                                                                                                     //
            return removedAt;                                                                                        // 226
          }()                                                                                                        // 226
        });                                                                                                          // 182
                                                                                                                     //
        this.onStop(function () {                                                                                    // 233
          resultsHandle.stop();                                                                                      // 234
        });                                                                                                          // 235
                                                                                                                     //
        this.ready();                                                                                                // 237
      });                                                                                                            // 238
    }                                                                                                                // 239
                                                                                                                     //
    return _setUpPublication;                                                                                        // 7
  }();                                                                                                               // 7
                                                                                                                     //
  (0, _createClass3['default'])(SearchCollection, [{                                                                 // 7
    key: 'name',                                                                                                     // 7
    get: function () {                                                                                               // 7
      function get() {                                                                                               // 7
        return this._name;                                                                                           // 41
      }                                                                                                              // 42
                                                                                                                     //
      return get;                                                                                                    // 7
    }()                                                                                                              // 7
                                                                                                                     //
    /**                                                                                                              //
     * Get engine                                                                                                    //
     *                                                                                                               //
     * @returns {ReactiveEngine}                                                                                     //
     */                                                                                                              //
                                                                                                                     //
  }, {                                                                                                               // 7
    key: 'engine',                                                                                                   // 7
    get: function () {                                                                                               // 7
      function get() {                                                                                               // 7
        return this._engine;                                                                                         // 50
      }                                                                                                              // 51
                                                                                                                     //
      return get;                                                                                                    // 7
    }()                                                                                                              // 7
  }]);                                                                                                               // 7
  return SearchCollection;                                                                                           // 7
}();                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"engines":{"mongo-db.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/engines/mongo-db.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * The MongoDBEngine lets you search the index on the server side with MongoDB. Subscriptions and publications       //
 * are handled within the Engine.                                                                                    //
 *                                                                                                                   //
 * @type {MongoDBEngine}                                                                                             //
 */                                                                                                                  //
MongoDBEngine = function (_ReactiveEngine) {                                                                         // 7
  (0, _inherits3['default'])(MongoDBEngine, _ReactiveEngine);                                                        // 7
                                                                                                                     //
  function MongoDBEngine() {                                                                                         // 7
    (0, _classCallCheck3['default'])(this, MongoDBEngine);                                                           // 7
    return (0, _possibleConstructorReturn3['default'])(this, _ReactiveEngine.apply(this, arguments));                // 7
  }                                                                                                                  // 7
                                                                                                                     //
  /**                                                                                                                //
   * Return default configuration.                                                                                   //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
  MongoDBEngine.prototype.defaultConfiguration = function () {                                                       // 7
    function defaultConfiguration() {                                                                                // 7
      return _.defaults({}, MongoDBEngine.defaultMongoConfiguration(this), _ReactiveEngine.prototype.defaultConfiguration.call(this));
    }                                                                                                                // 15
                                                                                                                     //
    return defaultConfiguration;                                                                                     // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Default mongo configuration, used in constructor and MinimongoEngine to get the configuration.                  //
   *                                                                                                                 //
   * @param {Object} engineScope Scope of the engine                                                                 //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  MongoDBEngine.defaultMongoConfiguration = function () {                                                            // 7
    function defaultMongoConfiguration(engineScope) {                                                                // 7
      return {                                                                                                       // 25
        aggregation: '$or',                                                                                          // 26
        selector: function () {                                                                                      // 27
          function selector(searchObject, options, aggregation) {                                                    // 25
            var selector = {};                                                                                       // 28
                                                                                                                     //
            selector[aggregation] = [];                                                                              // 30
                                                                                                                     //
            _.each(searchObject, function (searchString, field) {                                                    // 32
              var fieldSelector = engineScope.callConfigMethod('selectorPerField', field, searchString, options);    // 33
                                                                                                                     //
              if (fieldSelector) {                                                                                   // 37
                selector[aggregation].push(fieldSelector);                                                           // 38
              }                                                                                                      // 39
            });                                                                                                      // 40
                                                                                                                     //
            return selector;                                                                                         // 42
          }                                                                                                          // 43
                                                                                                                     //
          return selector;                                                                                           // 25
        }(),                                                                                                         // 25
        selectorPerField: function () {                                                                              // 44
          function selectorPerField(field, searchString) {                                                           // 25
            var selector = {};                                                                                       // 45
                                                                                                                     //
            selector[field] = { '$regex': '.*' + searchString + '.*', '$options': 'i' };                             // 47
                                                                                                                     //
            return selector;                                                                                         // 49
          }                                                                                                          // 50
                                                                                                                     //
          return selectorPerField;                                                                                   // 25
        }(),                                                                                                         // 25
        sort: function () {                                                                                          // 51
          function sort(searchObject, options) {                                                                     // 25
            return options.index.fields;                                                                             // 52
          }                                                                                                          // 53
                                                                                                                     //
          return sort;                                                                                               // 25
        }()                                                                                                          // 25
      };                                                                                                             // 25
    }                                                                                                                // 55
                                                                                                                     //
    return defaultMongoConfiguration;                                                                                // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Return the find options for the mongo find query.                                                               //
   *                                                                                                                 //
   * @param {String} searchDefinition Search definition                                                              //
   * @param {Object} options          Search and index options                                                       //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  MongoDBEngine.prototype.getFindOptions = function () {                                                             // 7
    function getFindOptions(searchDefinition, options) {                                                             // 7
      return {                                                                                                       // 64
        sort: this.callConfigMethod('sort', searchDefinition, options),                                              // 65
        limit: options.search.limit,                                                                                 // 66
        skip: options.search.skip,                                                                                   // 67
        fields: this.callConfigMethod('fields', searchDefinition, options)                                           // 68
      };                                                                                                             // 64
    }                                                                                                                // 70
                                                                                                                     //
    return getFindOptions;                                                                                           // 7
  }();                                                                                                               // 7
                                                                                                                     //
  /**                                                                                                                //
   * Return the reactive search cursor.                                                                              //
   *                                                                                                                 //
   * @param {String} searchDefinition Search definition                                                              //
   * @param {Object} options          Search and index options                                                       //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  MongoDBEngine.prototype.getSearchCursor = function () {                                                            // 7
    function getSearchCursor(searchDefinition, options) {                                                            // 7
      var selector = this.callConfigMethod('selector', searchDefinition, options, this.config.aggregation),          // 79
          findOptions = this.getFindOptions(searchDefinition, options),                                              // 79
          collection = options.index.collection;                                                                     // 79
                                                                                                                     //
      check(options, Object);                                                                                        // 83
      check(selector, Object);                                                                                       // 84
      check(findOptions, Object);                                                                                    // 85
                                                                                                                     //
      return new Cursor(collection.find(selector, findOptions), collection.find(selector).count());                  // 87
    }                                                                                                                // 91
                                                                                                                     //
    return getSearchCursor;                                                                                          // 7
  }();                                                                                                               // 7
                                                                                                                     //
  return MongoDBEngine;                                                                                              // 7
}(ReactiveEngine);                                                                                                   // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"minimongo.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/engines/minimongo.js                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * The MinimongEngine lets you search the index on the client-side.                                                  //
 *                                                                                                                   //
 * @type {MinimongoEngine}                                                                                           //
 */                                                                                                                  //
MinimongoEngine = function (_Engine) {                                                                               // 6
  (0, _inherits3['default'])(MinimongoEngine, _Engine);                                                              // 6
                                                                                                                     //
  function MinimongoEngine() {                                                                                       // 6
    (0, _classCallCheck3['default'])(this, MinimongoEngine);                                                         // 6
    return (0, _possibleConstructorReturn3['default'])(this, _Engine.apply(this, arguments));                        // 6
  }                                                                                                                  // 6
                                                                                                                     //
  /**                                                                                                                //
   * Return default configuration.                                                                                   //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
  MinimongoEngine.prototype.defaultConfiguration = function () {                                                     // 6
    function defaultConfiguration() {                                                                                // 6
      return _.defaults({}, MongoDBEngine.defaultMongoConfiguration(this), _Engine.prototype.defaultConfiguration.call(this));
    }                                                                                                                // 14
                                                                                                                     //
    return defaultConfiguration;                                                                                     // 6
  }();                                                                                                               // 6
                                                                                                                     //
  /**                                                                                                                //
   * Search the index.                                                                                               //
   *                                                                                                                 //
   * @param {Object} searchDefinition Search definition                                                              //
   * @param {Object} options          Object of options                                                              //
   *                                                                                                                 //
   * @returns {cursor}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  MinimongoEngine.prototype.search = function () {                                                                   // 6
    function search(searchDefinition, options) {                                                                     // 6
      if (!Meteor.isClient) {                                                                                        // 25
        throw new Meteor.Error('only-client', 'Minimongo can only be used on the client');                           // 26
      }                                                                                                              // 27
                                                                                                                     //
      searchDefinition = this.transformSearchDefinition(searchDefinition, options);                                  // 29
                                                                                                                     //
      // check() calls are in getSearchCursor method                                                                 //
      return MongoDBEngine.prototype.getSearchCursor.apply(this, [searchDefinition, options]);                       // 32
    }                                                                                                                // 33
                                                                                                                     //
    return search;                                                                                                   // 6
  }();                                                                                                               // 6
                                                                                                                     //
  return MinimongoEngine;                                                                                            // 6
}(Engine);                                                                                                           // 6
                                                                                                                     //
MinimongoEngine.prototype.checkSearchParam = ReactiveEngine.prototype.checkSearchParam;                              // 36
MinimongoEngine.prototype.transformSearchDefinition = ReactiveEngine.prototype.transformSearchDefinition;            // 37
                                                                                                                     //
MinimongoEngine.prototype.getFindOptions = function () {                                                             // 39
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                             // 39
    args[_key] = arguments[_key];                                                                                    // 39
  }                                                                                                                  // 39
                                                                                                                     //
  var findOptions = MongoDBEngine.prototype.getFindOptions.apply(this, args);                                        // 40
                                                                                                                     //
  findOptions.transform = this.config.transform;                                                                     // 42
                                                                                                                     //
  return findOptions;                                                                                                // 44
};                                                                                                                   // 45
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"mongo-text-index.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/engines/mongo-text-index.js                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                    //
                                                                                                                     //
/**                                                                                                                  //
 * The MongoTextIndexEngine lets you search the index with Mongo text indexes.                                       //
 *                                                                                                                   //
 * @type {MongoTextIndexEngine}                                                                                      //
 */                                                                                                                  //
MongoTextIndexEngine = function (_ReactiveEngine) {                                                                  // 6
  (0, _inherits3['default'])(MongoTextIndexEngine, _ReactiveEngine);                                                 // 6
                                                                                                                     //
  function MongoTextIndexEngine() {                                                                                  // 6
    (0, _classCallCheck3['default'])(this, MongoTextIndexEngine);                                                    // 6
    return (0, _possibleConstructorReturn3['default'])(this, _ReactiveEngine.apply(this, arguments));                // 6
  }                                                                                                                  // 6
                                                                                                                     //
  /**                                                                                                                //
   * Return default configuration.                                                                                   //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
  MongoTextIndexEngine.prototype.defaultConfiguration = function () {                                                // 6
    function defaultConfiguration() {                                                                                // 6
      var mongoConfiguration = MongoDBEngine.defaultMongoConfiguration(this);                                        // 13
                                                                                                                     //
      mongoConfiguration.selector = function (searchString) {                                                        // 15
        if (searchString.trim()) {                                                                                   // 16
          return { $text: { $search: searchString } };                                                               // 17
        }                                                                                                            // 18
                                                                                                                     //
        return {};                                                                                                   // 20
      };                                                                                                             // 21
                                                                                                                     //
      return _.defaults({}, mongoConfiguration, _ReactiveEngine.prototype.defaultConfiguration.call(this));          // 23
    }                                                                                                                // 24
                                                                                                                     //
    return defaultConfiguration;                                                                                     // 6
  }();                                                                                                               // 6
                                                                                                                     //
  /**                                                                                                                //
   * Setup the index on creation.                                                                                    //
   *                                                                                                                 //
   * @param {Object} indexConfig Index configuration                                                                 //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  MongoTextIndexEngine.prototype.onIndexCreate = function () {                                                       // 6
    function onIndexCreate(indexConfig) {                                                                            // 6
      _ReactiveEngine.prototype.onIndexCreate.call(this, indexConfig);                                               // 32
                                                                                                                     //
      if (Meteor.isServer) {                                                                                         // 34
        (function () {                                                                                               // 34
          var textIndexesConfig = {};                                                                                // 35
                                                                                                                     //
          _.each(indexConfig.fields, function (field) {                                                              // 37
            textIndexesConfig[field] = 'text';                                                                       // 38
          });                                                                                                        // 39
                                                                                                                     //
          if (indexConfig.weights) {                                                                                 // 41
            textIndexesConfig.weights = options.weights();                                                           // 42
          }                                                                                                          // 43
                                                                                                                     //
          indexConfig.collection._ensureIndex(textIndexesConfig);                                                    // 45
        })();                                                                                                        // 34
      }                                                                                                              // 46
    }                                                                                                                // 47
                                                                                                                     //
    return onIndexCreate;                                                                                            // 6
  }();                                                                                                               // 6
                                                                                                                     //
  /**                                                                                                                //
   * Transform the search definition.                                                                                //
   *                                                                                                                 //
   * @param {String|Object} searchDefinition Search definition                                                       //
   * @param {Object}        options          Search and index options                                                //
   *                                                                                                                 //
   * @returns {Object}                                                                                               //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  MongoTextIndexEngine.prototype.transformSearchDefinition = function () {                                           // 6
    function transformSearchDefinition(searchDefinition, options) {                                                  // 6
      return searchDefinition;                                                                                       // 58
    }                                                                                                                // 59
                                                                                                                     //
    return transformSearchDefinition;                                                                                // 6
  }();                                                                                                               // 6
                                                                                                                     //
  /**                                                                                                                //
   * Check the given search parameter for validity                                                                   //
   *                                                                                                                 //
   * @param search                                                                                                   //
   */                                                                                                                //
                                                                                                                     //
                                                                                                                     //
  MongoTextIndexEngine.prototype.checkSearchParam = function () {                                                    // 6
    function checkSearchParam(search) {                                                                              // 6
      check(search, String);                                                                                         // 67
    }                                                                                                                // 68
                                                                                                                     //
    return checkSearchParam;                                                                                         // 6
  }();                                                                                                               // 6
                                                                                                                     //
  return MongoTextIndexEngine;                                                                                       // 6
}(ReactiveEngine);                                                                                                   // 6
                                                                                                                     //
// Explicitely inherit getSearchCursor method functionality                                                          //
MongoTextIndexEngine.prototype.getSearchCursor = MongoDBEngine.prototype.getSearchCursor;                            // 72
MongoTextIndexEngine.prototype.getFindOptions = MongoDBEngine.prototype.getFindOptions;                              // 73
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"globals.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/easysearch_core/lib/globals.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
EasySearch = {                                                                                                       // 1
  // Core                                                                                                            //
  Index: Index,                                                                                                      // 3
  Engine: Engine,                                                                                                    // 4
  ReactiveEngine: ReactiveEngine,                                                                                    // 5
  Cursor: Cursor,                                                                                                    // 6
  // Engines                                                                                                         //
  MongoDB: MongoDBEngine,                                                                                            // 8
  Minimongo: MinimongoEngine,                                                                                        // 9
  MongoTextIndex: MongoTextIndexEngine                                                                               // 10
};                                                                                                                   // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/easysearch:core/lib/core/index.js");
require("./node_modules/meteor/easysearch:core/lib/core/engine.js");
require("./node_modules/meteor/easysearch:core/lib/core/reactive-engine.js");
require("./node_modules/meteor/easysearch:core/lib/core/cursor.js");
require("./node_modules/meteor/easysearch:core/lib/core/search-collection.js");
require("./node_modules/meteor/easysearch:core/lib/engines/mongo-db.js");
require("./node_modules/meteor/easysearch:core/lib/engines/minimongo.js");
require("./node_modules/meteor/easysearch:core/lib/engines/mongo-text-index.js");
require("./node_modules/meteor/easysearch:core/lib/globals.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['easysearch:core'] = {}, {
  EasySearch: EasySearch
});

})();
