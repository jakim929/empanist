import { Meteor } from 'meteor/meteor';
import { Accounts } from '../collections/account.js'

Meteor.startup(() => {
  // code to run on server at startup
  // var options = {
  //   keepHistory: 1000 * 60 * 5,
  //   localSearch: true
  // };
  //
  // function buildRegExp(searchText) {
  //   var words = searchText.trim().split(/[ \-\:]+/);
  //   var exps = _.map(words, function(word) {
  //     return "(?=.*" + word + ")";
  //   });
  //   var fullExp = exps.join('') + ".+";
  //   return new RegExp(fullExp, "i");
  // }
  //
  // SearchSource.defineSource('accounts', function(searchText, options) {
  //   var options = {sort: {isoScore: -1}, limit: 20};
  //   if(searchText) {
  //     var regExp = buildRegExp(searchText);
  //     var selector = {packageName: regExp, description: regExp};
  //     return Accounts.find(selector, options).fetch();
  //   } else {
  //     return Accounts.find({}, options).fetch();
  //   }
  // });
});
