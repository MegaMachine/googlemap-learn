(function(window, google, mapster){
  
  //map options
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');

  //map
  var map = new google.maps.Map(element, options);

}(window, google, window.Mapster || (window.Mapster = {})));