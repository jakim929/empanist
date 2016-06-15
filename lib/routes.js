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

FlowRouter.route('/results', {
    name: 'results',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'ResultsLayout'});
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'ProfileLayout'});
    }
});
