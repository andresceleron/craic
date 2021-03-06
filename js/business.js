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
var bussdashView = app.views.create('#view-bussdash', {
  url: '/bussdash/'
});
var specificView = app.views.create('#view-specific', {
  url: '/specific/'
});
var dailyView = app.views.create('#view-daily', {
  url: '/daily/'
});
var businessprofileView = app.views.create('#view-businessprofile', {
  url: '/businessprofile/'
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
