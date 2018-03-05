//create client var
var client;

// load the map
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// load the tiles

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'

	}).addTo(mymap);

// track location script modified showPosition

function trackLocation(){
	if(navigator.geolocation){
	navigatior.geolocation.watchPosition(showPosition);
	}else{
	document.getElementById('mapid').innerHTML="Geolocation is not supported by this browser.";
	}
}



function showPosition(position){
	var lat = position.coords.latitude
	var lng = position.coords.longitude
	
	L.marker(latlng, {icon:testMarkerPink}).addTo(mymap);		
}
//document.getElementById('mapid').innerHTML="L.marker(latlng, {icon:testMarkerPink}).addTo(mymap).bindPopup("<b>"position.coords"</b>");"


// code to add custom markers
var testMarkerRed = L.AwesomeMarkers.icon({
	icon: 'play',
	markerColor: 'red'
});
var testMarkerPink = L.AwesomeMarkers.icon({
	icon: 'play',
	markerColor: 'pink'
});