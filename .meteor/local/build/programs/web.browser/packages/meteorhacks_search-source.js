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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var EJSON = Package.ejson.EJSON;
var check = Package.check.check;
var Match = Package.check.Match;
var DDP = Package['ddp-client'].DDP;

/* Package-scope variables */
var SearchSource;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteorhacks_search-source/lib/client.js                                      //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
SearchSource = function SearchSource(source, fields, options) {                          // 1
  this.source = source;                                                                  // 2
  this.searchFields = fields;                                                            // 3
  this.currentQuery = null;                                                              // 4
  this.options = options || {};                                                          // 5
                                                                                         // 6
  this.status =  new ReactiveVar({loaded: true});                                        // 7
  this.metaData = new ReactiveVar({});                                                   // 8
  this.history = {};                                                                     // 9
  this.store = new Mongo.Collection(null);                                               // 10
                                                                                         // 11
  this._storeDep = new Tracker.Dependency();                                             // 12
  this._currentQueryDep = new Tracker.Dependency();                                      // 13
  this._currentVersion = 0;                                                              // 14
  this._loadedVersion = 0;                                                               // 15
}                                                                                        // 16
                                                                                         // 17
SearchSource.prototype._loadData = function(query, options) {                            // 18
  var self = this;                                                                       // 19
  var version = 0;                                                                       // 20
  var historyKey = query + EJSON.stringify(options);                                     // 21
  if(this._canUseHistory(historyKey)) {                                                  // 22
    this._updateStore(this.history[historyKey].data);                                    // 23
    this.metaData.set(this.history[historyKey].metadata);                                // 24
    self._storeDep.changed();                                                            // 25
  } else {                                                                               // 26
    this.status.set({loading: true});                                                    // 27
    version = ++this._currentVersion;                                                    // 28
    this._fetch(this.source, query, options, handleData);                                // 29
  }                                                                                      // 30
                                                                                         // 31
  function handleData(err, payload) {                                                    // 32
    if(err) {                                                                            // 33
      self.status.set({error: err});                                                     // 34
      throw err;                                                                         // 35
    } else {                                                                             // 36
      if(payload instanceof Array) {                                                     // 37
        var data = payload;                                                              // 38
        var metadata = {};                                                               // 39
      } else {                                                                           // 40
        var data = payload.data;                                                         // 41
        var metadata = payload.metadata;                                                 // 42
        self.metaData.set(payload.metadata || {});                                       // 43
      }                                                                                  // 44
                                                                                         // 45
      if(self.options.keepHistory) {                                                     // 46
        self.history[historyKey] = {data: data, loaded: new Date(), metadata: metadata};
      }                                                                                  // 48
                                                                                         // 49
      if(version > self._loadedVersion) {                                                // 50
        self._updateStore(data);                                                         // 51
        self._loadedVersion = version;                                                   // 52
      }                                                                                  // 53
                                                                                         // 54
      if(version == self._currentVersion) {                                              // 55
        self.status.set({loaded: true});                                                 // 56
      }                                                                                  // 57
                                                                                         // 58
      self._storeDep.changed();                                                          // 59
    }                                                                                    // 60
  }                                                                                      // 61
};                                                                                       // 62
                                                                                         // 63
SearchSource.prototype._canUseHistory = function(historyKey) {                           // 64
  var historyItem = this.history[historyKey];                                            // 65
  if(this.options.keepHistory && historyItem) {                                          // 66
    var diff = Date.now() - historyItem.loaded.getTime();                                // 67
    return diff < this.options.keepHistory;                                              // 68
  }                                                                                      // 69
                                                                                         // 70
  return false;                                                                          // 71
};                                                                                       // 72
                                                                                         // 73
SearchSource.prototype._updateStore = function(data) {                                   // 74
  var self = this;                                                                       // 75
  var storeIds = _.pluck(this.store.find().fetch(), "_id");                              // 76
  var currentIds = [];                                                                   // 77
  data.forEach(function(item) {                                                          // 78
    currentIds.push(item._id);                                                           // 79
    self.store.update(item._id, item, {upsert: true});                                   // 80
  });                                                                                    // 81
                                                                                         // 82
  // Remove items in client DB that we no longer need                                    // 83
  var currentIdMappings  = {};                                                           // 84
  _.each(currentIds, function(currentId) {                                               // 85
    // to support Object Ids                                                             // 86
    var str = (currentId._str)? currentId._str : currentId;                              // 87
    currentIdMappings[str] = true;                                                       // 88
  });                                                                                    // 89
                                                                                         // 90
  _.each(storeIds, function(storeId) {                                                   // 91
    // to support Object Ids                                                             // 92
    var str = (storeId._str)? storeId._str : storeId;                                    // 93
    if(!currentIdMappings[str]) {                                                        // 94
      self.store.remove(storeId);                                                        // 95
    }                                                                                    // 96
  });                                                                                    // 97
};                                                                                       // 98
                                                                                         // 99
SearchSource.prototype.search = function(query, options) {                               // 100
  this.currentQuery = query;                                                             // 101
  this._currentQueryDep.changed();                                                       // 102
                                                                                         // 103
  this._loadData(query, options);                                                        // 104
                                                                                         // 105
  if(this.options.localSearch) {                                                         // 106
    this._storeDep.changed();                                                            // 107
  }                                                                                      // 108
};                                                                                       // 109
                                                                                         // 110
SearchSource.prototype.getData = function(options, getCursor) {                          // 111
  options = options || {};                                                               // 112
  var self = this;                                                                       // 113
  this._storeDep.depend();                                                               // 114
  var selector = {$or: []};                                                              // 115
                                                                                         // 116
  var regExp = this._buildRegExp(self.currentQuery);                                     // 117
                                                                                         // 118
  // only do client side searching if we are on the loading state                        // 119
  // once loaded, we need to send all of them                                            // 120
  if(this.getStatus().loading) {                                                         // 121
    self.searchFields.forEach(function(field) {                                          // 122
      var singleQuery = {};                                                              // 123
      singleQuery[field] = regExp;                                                       // 124
      selector['$or'].push(singleQuery);                                                 // 125
    });                                                                                  // 126
  } else {                                                                               // 127
    selector = {};                                                                       // 128
  }                                                                                      // 129
                                                                                         // 130
  function transform(doc) {                                                              // 131
    if(options.transform) {                                                              // 132
      self.searchFields.forEach(function(field) {                                        // 133
        if(self.currentQuery && doc[field]) {                                            // 134
          doc[field] = options.transform(doc[field], regExp, field, self.currentQuery);  // 135
        }                                                                                // 136
      });                                                                                // 137
    }                                                                                    // 138
    if(options.docTransform) {                                                           // 139
      return options.docTransform(doc);                                                  // 140
    }                                                                                    // 141
                                                                                         // 142
    return doc;                                                                          // 143
  }                                                                                      // 144
                                                                                         // 145
  var cursor = this.store.find(selector, {                                               // 146
    sort: options.sort,                                                                  // 147
    limit: options.limit,                                                                // 148
    transform: transform                                                                 // 149
  });                                                                                    // 150
                                                                                         // 151
  if(getCursor) {                                                                        // 152
    return cursor;                                                                       // 153
  }                                                                                      // 154
                                                                                         // 155
  return cursor.fetch();                                                                 // 156
};                                                                                       // 157
                                                                                         // 158
SearchSource.prototype._fetch = function(source, query, options, callback) {             // 159
  if(typeof this.fetchData == 'function') {                                              // 160
    this.fetchData(query, options, callback);                                            // 161
  } else if(Meteor.status().connected) {                                                 // 162
    this._fetchDDP.apply(this, arguments);                                               // 163
  } else {                                                                               // 164
    this._fetchHttp.apply(this, arguments);                                              // 165
  }                                                                                      // 166
};                                                                                       // 167
                                                                                         // 168
SearchSource.prototype._fetchDDP = function(source, query, options, callback) {          // 169
  Meteor.call("search.source", this.source, query, options, callback);                   // 170
};                                                                                       // 171
                                                                                         // 172
SearchSource.prototype._fetchHttp = function(source, query, options, callback) {         // 173
  var payload = {                                                                        // 174
    source: source,                                                                      // 175
    query: query,                                                                        // 176
    options: options                                                                     // 177
  };                                                                                     // 178
                                                                                         // 179
  var headers = {                                                                        // 180
    "Content-Type": "text/ejson"                                                         // 181
  };                                                                                     // 182
                                                                                         // 183
  HTTP.post('/_search-source', {                                                         // 184
    content: EJSON.stringify(payload),                                                   // 185
    headers: headers                                                                     // 186
  }, function(err, res) {                                                                // 187
    if(err) {                                                                            // 188
      callback(err);                                                                     // 189
    } else {                                                                             // 190
      var response = EJSON.parse(res.content);                                           // 191
      if(response.error) {                                                               // 192
        callback(response.error);                                                        // 193
      } else {                                                                           // 194
        callback(null, response.data);                                                   // 195
      }                                                                                  // 196
    }                                                                                    // 197
  });                                                                                    // 198
};                                                                                       // 199
                                                                                         // 200
SearchSource.prototype.getMetadata = function() {                                        // 201
  return this.metaData.get();                                                            // 202
};                                                                                       // 203
                                                                                         // 204
SearchSource.prototype.getCurrentQuery = function() {                                    // 205
  this._currentQueryDep.depend();                                                        // 206
  return this.currentQuery;                                                              // 207
}                                                                                        // 208
                                                                                         // 209
SearchSource.prototype.getStatus = function() {                                          // 210
  return this.status.get();                                                              // 211
};                                                                                       // 212
                                                                                         // 213
SearchSource.prototype.cleanHistory = function() {                                       // 214
  this.history = {};                                                                     // 215
};                                                                                       // 216
                                                                                         // 217
SearchSource.prototype._buildRegExp = function(query) {                                  // 218
  query = query || "";                                                                   // 219
                                                                                         // 220
  var afterFilteredRegExpChars = query.replace(this._getRegExpFilterRegExp(), "\\$&");   // 221
  var parts = afterFilteredRegExpChars.trim().split(' ');                                // 222
                                                                                         // 223
  return new RegExp("(" + parts.join('|') + ")", "ig");                                  // 224
};                                                                                       // 225
                                                                                         // 226
SearchSource.prototype._getRegExpFilterRegExp = _.once(function() {                      // 227
  var regExpChars = [                                                                    // 228
    "\\", "^", "$", "*", "+", "?", ".",                                                  // 229
     "(", ")", ":", "|", "{", "}", "[", "]",                                             // 230
     "=", "!", ","                                                                       // 231
  ];                                                                                     // 232
  var regExpCharsReplace = _.map(regExpChars, function(c) {                              // 233
    return "\\" + c;                                                                     // 234
  }).join("|");                                                                          // 235
  return new RegExp("(" + regExpCharsReplace + ")", "g");                                // 236
});                                                                                      // 237
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteorhacks:search-source'] = {}, {
  SearchSource: SearchSource
});

})();
