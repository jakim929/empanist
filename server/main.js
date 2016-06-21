import { Meteor } from 'meteor/meteor';
import { Accounts } from '../collections/account.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

Meteor.startup(() => {

});

Meteor.methods({
  getGeocode: function (arg) {
    var geo = new GeoCoder();
    var result = geo.geocode(arg);
    return result
  }
});
