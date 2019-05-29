(function(window, google, $ ){
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  // $mapster.mapster('addMarker' , {
  //   lat: 37.791350,
  //   lng: -122.435883,
  //   draggable: true,
  //   id:1,
  //   events: [
  //     {
  //       name: 'click',
  //       callback: function(e, marker){
  //         console.log(e);
  //         console.log(marker);
  //         console.log(this)
  //       }
  //     },{
  //       name: 'dragend',
  //       callback: function(){
  //         alert('dragged');
  //       }
  //     }
  //   ],
  //   icon: '../img/icons/map-pin.png'
  // });
  // $mapster.mapster('setPano', '#pip-pano', {
  //   position: {
  //     lat: 37.791350,
  //     lng: -122.435883,
  //   },
  //   pov: {
  //     heading: 200, // horisontal camera view 
  //     pitch: 0  // vertical camera view
  //   },
  //   events:[
  //     {
  //       name: 'position_changed',
  //       callback: function(){
  //         console.log('changed position');
  //       }
  //     },
  //     {
  //       name: 'pov_changed',
  //       callback: function(){
  //         console.log('changed pov');
  //       }
  //     },
  //     {
  //       name: 'links_changed',
  //       callback: function(e, panorama){
  //         console.log(panorama.getLinks())
  //       }
  //     }
  //   ]
  // });
  // $mapster.mapster('addMarker', {
  //   location: 'Golden Gate Bridge, San Jrancisco, CA'
  // })
  $mapster.mapster('getCurrentPosition', function(position){
    console.log(this);
    $mapster.mapster('addMarker', {
      lat: position.coords.latitude,
      lng: position.coords.latitude
    });
    setTimeout(function(){
      $mapster.mapster('centeredMap', {
        lat: position.coords.latitude,
        lng: position.coords.latitude
      });
    },2000)
  });

}(window, google, jQuery)); 