(function(window, $ ){
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  $mapster.mapster('addMarker' , {
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
  $mapster.mapster('addMarker' , {
    lat: 37.891350,
    lng: -122.535883,
    draggable: true,
    id:2,
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

  console.log($mapster.mapster('getMarkers'))
}(window, jQuery)); 