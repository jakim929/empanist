
Meteor.startup(function(){
    Meteor.Mailgun.config({
      username: 'postmaster@empanist.com',
      password: 'e7e7022a6a007f6034c0ecff7c803fe8'
    });
  });