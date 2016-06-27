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

FlowRouter.route('/newaccomp', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'NewAccompLayout',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'NewAccompLayout', nav: 'Navbar'});
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
    action() {
    	BlazeLayout.render('MainLayout', {main: 'BookingsLayout', nav: 'Navbar'});
    }
});


FlowRouter.route('/profile/:profileId', {
    name: 'profile',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'ProfileLayout', nav: 'Navbar'});
    }
});

// Testing UI Elements
FlowRouter.route('/test', {
    name: 'payment',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'TestLayout', nav: 'Navbar'});
    }
});
