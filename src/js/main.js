(function(window, google, mapster){
  
  //map options
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');

  //map
  var map = new mapster.create(element, options);
    var marker1 = map.addMarker({
      lat: 37.791350,
      lng: -122.435883,
      draggable: true,
      id:1,
      events: [
        {
          name: 'click',
          callback: function(e, marker){
            console.log(e);
            console.log(marker);
            console.log(this)
          }
        },{
          name: 'dragend',
          callback: function(){
            alert('dragged');
          }
        }
      ],
      icon: '../img/icons/map-pin.png'
    });
}(window, google, window.Mapster || (window.Mapster = {}))); 