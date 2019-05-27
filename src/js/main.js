(function(window, google, mapster){
  
  //map options
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');

  //map
  var map = new mapster.create(element, options);
  var marker1 = map.addMarker({
    lat: 37.791350,
    lng: -122.435883,
    draggable: false,
    id:1,
    content:'I like food',
    icon: '../img/icons/map-pin.png'
  });
  var marker2 = map.addMarker({
    lat: 37.891350,
    lng: -122.535883,
    draggable: false,
    id:2,
    content:'I like food',
    icon: '../img/icons/map-pin.png'
  });

  // var found = map.findBy(function(marker, index){
  //   console.log(index);
  //   return marker.id === 0;
  // });
  map.removeBy(function(marker){
    return marker.id === 2;
  })
  console.log(map.markers)
}(window, google, window.Mapster || (window.Mapster = {}))); 