import { MusicProfiles } from '../collections/musicProfile.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'
import { Accounts } from '../collections/account.js'

window.MusicProfiles = MusicProfiles
window.AccompanistProfile = AccompanistProfile
window.Accounts = Accounts


// Global Template Helpers

Template.registerHelper( 'profileDoc', () => {
    event.preventDefault();
    return MusicProfiles.findOne({ userId: Meteor.userId()});
});

Template.registerHelper( 'accountDoc', () => {
  	event.preventDefault();
    return Accounts.findOne({ _id: Meteor.userId()});
  });

Template.registerHelper( 'accompanistProfileDoc', () => {
    event.preventDefault();
    return AccompanistProfile.findOne({ userId: Meteor.userId()});
});

// Local Template Helpers

Template.makeUpdateAccompForm.helpers ({
  NewAccompSchema: function () {
  	event.preventDefault();
  	return Schema.AccompanistProfileSchema;
  }
});

// add info from account.js and make it work for accompanist search results as well
Template.ProfileLayout.helpers({  
  myprofile: ()=> {
    return MusicProfiles.find({userId: Meteor.userId()});
  }
});

Template.search.events({

'submit form': function(){
    event.preventDefault();
   
    //Constants submitted from the Home search bar
   	const geo_location = event.target.geo_location.value
   	const start_date = event.target.start_date.value
   	const end_date = event.target.end_date.value
 
  	Session.set('geo_location', geo_location)
    Session.set('start_date', start_date)
  	Session.set('end_date', end_date)

}
});

 	Template.search.helpers({
	accompanists: ()=> {
		var gl = Session.get('geo_location')
		var sd = Session.get('start_date') 
		var ed = Session.get('end_date') 
	
		var new_sd = new Date(sd)
		var new_ed = new Date(ed)

		// fix location (Rad + Google API)
		if (gl && sd && ed) {
			return AccompanistProfile.find({mylocation: gl, startDate:  {$lte: new_sd, $lte: new_ed}, endDate: {$gte: new_sd, $gte: new_ed}}).fetch()
		}
    // return No results found if null!!!!!!!!
    	return null
  }

  // end session?

});

// For Debugging
  SimpleSchema.debug = true;









