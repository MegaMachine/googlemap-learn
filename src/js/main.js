(function(window, google, mapster){
  
  //map options
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');

  //map
  var map = new mapster.create(element, options);
  map.addMarker(37.791350, -122.435883, '../img/icons/map-pin.png');
  // var marker = new google.maps.Marker({
  //   position: {
  //     lat: 37.791350,
  //     lng: -122.435883
  //   },
  //   map: map.gMap,
  //   icon: '../img/icons/map-pin.png'
  // })

}(window, google, window.Mapster || (window.Mapster = {}))); 