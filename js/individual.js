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
var indiDashView = app.views.create('#view-indiDash', {
  url: '/indiDash/'
});
var individualProfileView = app.views.create('#view-individualProfile', {
  url: '/individualProfile/'
});
var indiInfoView = app.views.create('#view-indiInfo', {
  url: '/indiInfo/'
});
