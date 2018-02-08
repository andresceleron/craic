// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection

  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var individualView = app.views.create('#view-individual', {
  url: '/individual/'
});
var businessView = app.views.create('#view-business', {
  url: '/business/'
});
var infoView = app.views.create('#view-info', {
  url: '/info/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
