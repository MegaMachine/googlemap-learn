(function(window, google, mapster){
  
  //map options
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');

  //map
  var map = new mapster.create(element, options);
  for(var i = 0; i < 40; i++){
    var marker1 = map.addMarker({
      lat: 37.791350 + Math.random(),
      lng: -122.435883 + Math.random() * 2,
      draggable: false,
      id:i,
      content:'I like food',
      icon: '../img/icons/map-pin.png'
    });
  }

  // var marker2 = map.addMarker({
  //   lat: 37.891350,
  //   lng: -122.535883,
  //   draggable: false,
  //   id:2,
  //   content:'I like food',
  //   icon: '../img/icons/map-pin.png'
  // });

  var found = map.findBy(function(marker, index){
    return marker.id === 5;
  });
  map.removeBy(function(marker){
    return marker.id === 5;
  })
  console.log(found)
}(window, google, window.Mapster || (window.Mapster = {}))); 