(function(window, google, mapster){
  //map options
  var options = mapster.MAP_OPTIONS;

  //maps wrapper
  var element1 = document.getElementById('map-canvas1');
  var element2 = document.getElementById('map-canvas2');

  if(element1){
    var map1 = new mapster.create(element1, options);

    var marker1 = map1.addMarker({
      lat: 49.8425738,
      lng: 24.0180441,  
      draggable: false,
      id:1,
      infoOpen: true,
      content:infoWindowContent({
        street: 'вул. Коноплівська, 77а',
        phone: '+380 98 32 08 128, +380 98 32 08 128',
        email: 'ua.legalaid@gmail.com'
      }),
      icon: '../img/icons/map-pin.png'
    });
  
    var marker2 = map1.addMarker({
      lat: 49.8401135,
      lng: 24.0249235,  
      draggable: false,
      id:2,
      content:infoWindowContent({
        street: 'вул. Коноплівська, 77а',
        phone: '+380 98 32 08 128, +380 98 32 08 128',
        email: 'ua.legalaid@gmail.com'
      }),
      icon: '../img/icons/map-pin.png'
    });
  }

  if(element2){
    var map1 = new mapster.create(element2, options);

    var marker1 = map1.addMarker({
      lat: 49.8425738,
      lng: 24.0180441,  
      draggable: false,
      id:1,
      content:infoWindowContent({
        street: 'вул. Коноплівська, 77а',
        phone: '+380 98 32 08 128, +380 98 32 08 128',
        email: 'ua.legalaid@gmail.com'
      }),
      icon: '../img/icons/map-pin.png'
    });
    
    var marker2 = map1.addMarker({
      lat: 49.8401135,
      lng: 24.0249235,  
      draggable: false,
      id:2,
      infoOpen: true,
      content:infoWindowContent({
        street: 'вул. Коноплівська, 77а',
        phone: '+380 98 32 08 128, +380 98 32 08 128',
        email: 'ua.legalaid@gmail.com'
      }),
      icon: '../img/icons/map-pin.png'
    });
  }
  
  function infoWindowContent(obj){
    return '<div class="custom-infowindow">'
    +'<div class="custom-infowindow-title">'
    +'<p>Адреса офісу</p>'
    +'</div>'
    +'<div class="custom-infowindow-list">'
    +'<ul>'
    +'<li><img src="../../img/icons/map-pin.png" alt="pin"/><span>'+ obj.street +'</span></li>'
    +'<li><img src="../../img/icons/phone.png" alt="phone"/><span>'+ obj.phone +'</span></li>'
    +'<li><img src="../../img/icons/email.png" alt="email"/><span>'+ obj.email +'</span></li>'
    +'</ul>'
    +'</div>'
    +'</div>';
  }

}(window, google, window.Mapster || (window.Mapster = {}))); 