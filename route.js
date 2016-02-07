/* global Router */




// Login register & learnmore
Router.route('/', function () {
    this.render('loginTemplate');
});
Router.route('/register', function () {
    this.render('resgisterTemplate');
});
Router.route('/learnmore', function () {
    this.render('learnmoreTemplate');
});

// Page d'accueil
Router.route('/home', function () {
    this.render('home');
});

// Partie RDV
Router.route('/meeting', function () {
    this.render('meetingTemplate');
});
Router.route('/plannifierRDV',function(){
    this.render('plannifierRDV');
});
Router.route('/consulterRDV',function(){
    this.render('consulterRDV');
});
Router.route('/historiqueRDV',function(){
    this.render('historiqueRDV');
});

// Partie settings
Router.route('/settings', function () {
    this.render('settingsTemplate');
});
Router.route('/modifierProfile',function(){
    this.render('modifierProfile');
});
Router.route('/configurationEmail',function(){
    this.render('configurationEmail');
});
Router.route('/configurationPassword',function(){
    this.render('configurationPassword');
});

// Partie sondages
Router.route('/survey', function () {
    this.render('surveyTemplate');
});
Router.route('/creationSondage',function(){
    this.render('creationSondage');
});
Router.route('/vosSondages',function(){
    this.render('vosSondages');
});
Router.route('/historiqueSondages',function(){
    this.render('historiqueSondages');
});