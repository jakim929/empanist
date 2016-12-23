FlowRouter.route('/', {
    name: 'home',
    action() {
      BlazeLayout.render('MainLayout', {main: 'HomeLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/addinfo', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'addInfo',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'AddInfoLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/images', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'images',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'ImagesLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/newaccomp', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'NewAccompLayout',
    action() {
        // pass form the form type from the link
    	BlazeLayout.render('MainLayout', {main_no_container: 'NewAccompLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/newaccomp/step1', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'NewAccompLayout',
    action() {
        // pass form the form type from the link
        BlazeLayout.render('MainLayout', {main_no_container: 'basicNewAccomp', nav: 'Navbar'});
    }
});


FlowRouter.route('/newaccomp/step2', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'NewAccompLayout',
    action() {
        // pass form the form type from the link
        BlazeLayout.render('MainLayout', {main_no_container: 'upsertMusicProfileForm', nav: 'Navbar'});
    }
});
FlowRouter.route('/newaccomp/step3', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'NewAccompLayout',
    action() {
        // pass form the form type from the link
        BlazeLayout.render('MainLayout', {main_no_container: 'upsertAccompanistForm', nav: 'Navbar'});
    }
});

FlowRouter.route('/accompanistDashboard', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'accompanistDashboard',
    action() {
      BlazeLayout.render('MainLayout', {main: 'AccompanistDashboard', nav: 'Navbar'})
    }
});

FlowRouter.route('/bookingRequest/:transactionId', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'bookingRequest',
    action(params, queryParams) {
      BlazeLayout.render('MainLayout', {main: 'BookingRequestLayout', nav: 'Navbar'})
    }
});

FlowRouter.route('/bookAccompanist/:profileId', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'bookAccompanist',
    action(params, queryParams) {
      BlazeLayout.render('MainLayout', {main: 'BookAccompanistLayout', nav: 'Navbar'})
    }
});

FlowRouter.route('/results/', {
    name: 'results',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'ResultsLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/payment', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'payment',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'PaymentLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/bookings', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'bookings',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'BookingsLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/reservation', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'reservation',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'ReservationLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/sessions', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'sessions',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'SessionsLayout', nav: 'Navbar'});
    }
});

FlowRouter.route('/profile/:profileId', {
    name: 'profile',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'ProfileLayout', nav: 'Navbar'});
    }
});


FlowRouter.route('/success/:transactionId', {
    name: 'success',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'SuccessLayout', nav: 'Navbar'});
    }
});




// Testing UI Elements
FlowRouter.route('/test', {
    action() {
    	BlazeLayout.render('MainLayout', {main: 'TestLayout'});
    }
});
