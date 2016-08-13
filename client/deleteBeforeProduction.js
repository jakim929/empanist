Template.TestLayout.events({
  'click button.add-fake-users' (event, template){


    Session.set('numberOfUsers', $('#numberOfUsers')[0].value);

    var insertTimer = setInterval(function(){
      Meteor.call('insertRandomData', 1);
      Session.set('numberOfUsers', (Session.get('numberOfUsers')-1));
      console.log(Session.get('numberOfUsers'), "left...");
    }, 500);

    Session.set('insertTimer', insertTimer);

    Tracker.autorun(function (insertTimer) {
      if (Session.get("numberOfUsers") > 0)
        return;
      console.log("Clearing Timer...")
      clearInterval(Session.get('insertTimer'));
      console.log("Insert Finished.")
    });



  }
})
