FlowRouter.route('/', {
    name: 'home',
    action() {
              BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
    }
});

FlowRouter.route('/addinfo', {
    name: 'addInfo',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'AddInfoLayout'});
    }
});

FlowRouter.route('/newaccomp', {
    name: 'NewAccompLayout',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'NewAccompLayout'});
    }
});

FlowRouter.route('/accompanistDashboard', {
    name: 'accompanistDashboard',
    action() {
      BlazeLayout.render('MainLayout', {main: 'AccompanistDashboard'})
    }
});

FlowRouter.route('/bookingRequest/:transactionId', {
    name: 'bookingRequest',
    action(params, queryParams) {
      BlazeLayout.render('MainLayout', {main: 'BookingRequestLayout'})
    }
});

FlowRouter.route('/results', {
    name: 'results',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'ResultsLayout'});
    }
});

FlowRouter.route('/payment', {
    name: 'payment',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'PaymentLayout'});
    }
});

FlowRouter.route('/bookings', {
    name: 'bookings',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'BookingsLayout'});
    }
});


FlowRouter.route('/profile/:profileId', {
    name: 'profile',
    action(params, queryParams) {
    	BlazeLayout.render('MainLayout', {main: 'ProfileLayout'});
    }
});
