(function(window, google, mapster){
  
  //map options
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');

  //map
  var map = new mapster.create(element, options);
  map.zoom(10);
  console.log( map.zoom())
}(window, google, window.Mapster || (window.Mapster = {})));