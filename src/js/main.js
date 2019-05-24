(function(window, google, mapster){
  
  //map options
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');

  //map
  var map = new mapster.create(element, options);
  var marker1 = map.addMarker({
    lat: 49.8425738,
    lng: 24.0180441,  
    draggable: false,
    id:1,
    content:'I like food',
    icon: '../img/icons/map-pin.png'
  });
  var marker2 = map.addMarker({
    lat: 49.8401135,
    lng: 24.0249235,  
    draggable: false,
    id:2,
    content:'I like food',
    icon: '../img/icons/map-pin.png'
  });
  // var marker = new google.maps.Marker({
  //   position: {
  //     lat: 37.791350,
  //     lng: -122.435883
  //   },
  //   map: map.gMap,
  //   icon: '../img/icons/map-pin.png'
  // })

}(window, google, window.Mapster || (window.Mapster = {}))); 