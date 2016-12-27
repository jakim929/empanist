
Template.SettingTabs.onRendered(function(){
  $('ul.tabs').tabs();
})

Template.SettingsTopCard.helpers({
	basicInfo: function () {
		var account = BasicProfiles.findOne({ userId: Meteor.userId()});
		console.log(account)
		return account
	},
	role: function () {
		var role = AccompanistProfiles.findOne({ userId: Meteor.userId()});
		if(role == undefined){
			return "Artist"
		} else{
			return "Accompanist"
		}
	}
})

Template.SettingsCard.onRendered(function(){
	$('.collapsible').collapsible();
})