Router.route('/', function () {
    this.render('loginTemplate');
});
Router.route('/meeting', function () {
    this.render('meetingTemplate');
});
Router.route('/survey', function () {
    this.render('surveyTemplate');
});
Router.route('/settings', function () {
    this.render('settingsTemplate');
});
Router.route('/register', function () {
    this.render('resgisterTemplate');
});
Router.route('/learnmore', function () {
    this.render('learnmoreTemplate');
});
Router.route('/home', function () {
    this.render('home');
});