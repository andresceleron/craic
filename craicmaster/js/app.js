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

//------------FACEBOOK LOGIN----------------------------------------------
    
    
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
       window.location.href = 'individualDash.html';
      $('#loginimage').hide();
      
    document.getElementById('loginFB').style.display = "none";
      //showFbLogin(false);
    } else {
      // The person is not logged into your app or we are unable to tell.
     
    document.getElementById('logOutFB').style.display = "none";
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Wheres the Craic app wih your Facebook account.';
        
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1124412714359702',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.10' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
   
   console.log('Welcome!  Fetching your information.... ');

   FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
       console.log(response.id);
       userID = response.id;
       console.log(userID);
       authorName = response.name;
       
       var image= "https://graph.facebook.com/" + response.id +"/picture?type=normal";
      
       document.getElementById('status').innerHTML =
        'Welcome to Wheres The Craic App, ' + response.name + '! :) ';
    

       document.getElementById("profileImage").innerHTML= "<img src=" + image + ">";
               
       
       
    });
         }
function logoutPerson(){

FB.logout(function(response) { 
    window.location.href = 'index.html';
    //location.reload();//refresh
   // Person is now logged out
});
}
