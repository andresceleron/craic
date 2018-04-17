	  //Global variables
	  var map;
	  var lat; 
	  var lng;		  
	  var Dublin = {lat: 53.3369950, lng: -6.2655380};
      var infoWindow;

        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: Dublin,
            zoom: 15,
            mapTypeId: 'roadmap',
			streetViewControl: true,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
          });
         infoWindow = new google.maps.InfoWindow();
        }
		
       function searchLocationsNear(center) {
         //clearLocations();
		 lat = map.getCenter().lat();
		 lng =map.getCenter().lng();
         var searchUrl = '/craicmaster/php/craicLocator.php?lat=' + lat + '&lng=' + lng;
         downloadUrl(searchUrl, function(data) {
			 var xml = parseXml(data);

			var id, name, address, distance, latitud, longitud;
			x = xml.getElementsByTagName("name");
			for (i = 0; i < x.length; i++) {
				id = xml.getElementsByTagName("id")[i].childNodes[0].nodeValue;
				name = xml.getElementsByTagName("name")[i].childNodes[0].nodeValue;
				address = xml.getElementsByTagName("address")[i].childNodes[0].nodeValue;
				distance = xml.getElementsByTagName("distance")[i].childNodes[0].nodeValue;
				latitud = xml.getElementsByTagName("lat")[i].childNodes[0].nodeValue;
				longitud = xml.getElementsByTagName("lng")[i].childNodes[0].nodeValue;
				
				// send for every craic found to create the marker....				
				drawCraicMarkers(name, address, latitud, longitud);
			
				 }
		  }); 
        };
	
		//https://developers.google.com/maps/documentation/javascript/custom-markers?hl=es-419	
	   function drawCraicMarkers(name, address, latitud, longitud){
		
			//myLatLng = {lat: 53.3369950, lng: -6.2655380};
			LatLngPos = {lat : parseFloat( latitud ),lng : parseFloat( longitud )};
			
			var iconBase = 'http://localhost//craicmaster//img/'; 
			var icons = {
			  FoodandDrinks: iconBase + 'foodLogo.png',
			  Music: iconBase + 'musiclogo.png',
			  Arts: iconBase + 'artlogo.png',
			  SportsWellness: iconBase + 'sportslogo2.png',
			  Education: iconBase + 'educationlogo.png',
			  Networking: iconBase + 'networklogo.png'
			  };

			//Habria que capturar la hubicacion actual de la persona 
			//http://maps.google.com/maps?saddr={start_address}&daddr={destination_address}
			
            var start = '30-34+Westmoreland+St,+Dublin,+D02+HK35';
			var comollegar = "http://maps.google.com/maps?saddr={"+start+"}&daddr={"+address+"}";
				
			var contentString1 = 
				'<div id=name>'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h2 id="firstHeading" class="firstHeading">' + name + '</h2>'+
				'<div id="bodyContent">'+
				'<p><b>' + address + '</b><br>' + 
				'<a href="http://lastapasdelola.com/?title=LasTapasdeLola"</a> '+
				'Website </a> - '+
				'<a href=' + comollegar +'</a> '+
				'Directions: </a> '+
				'</div>'+
				'</div>';

			var infowindow1 = new google.maps.InfoWindow({
			  content: contentString1
			});

			// Create a marker and set its position.
			var marker = new google.maps.Marker({
			  map: map,
			  position: LatLngPos,
			  title: 'Here is a Craic!'
			  //icon: icons.Music 
			});
			 //
			marker.addListener('click', function() {
			  infowindow1.open(map, marker);
			}); 
      }
   
       function downloadUrl(url, callback) {
          var request = window.ActiveXObject ?
              new ActiveXObject('Microsoft.XMLHTTP') :
              new XMLHttpRequest;

          request.onreadystatechange = function() {
            if (request.readyState == 4) {
              request.onreadystatechange = doNothing;
              callback(request.responseText, request.status);
            }
          };
		  request.open('GET', url, true);
          request.send();  //null
       }

       function parseXml(str) {
          if (window.ActiveXObject) {
            var doc = new ActiveXObject('Microsoft.XMLDOM');
            doc.loadXML(str);
			
            return doc;
          } else if (window.DOMParser) {   // esto es lo quwe crea, un DOMParser
	           return (new DOMParser).parseFromString(str, 'text/xml');
          }
       }

       function doNothing() {}
