(function(window, google) {

  var Mapster = (function() {
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
    }
    Mapster.prototype = {
      infoWindows:[],
      zoom: function(level) {
        if(level) {
          this.gMap.setZoom(level);
        } else {
          return this.gMap.getZoom();
        }
      },
      _on: function(opts) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.event, function(e){
          opts.callback.call(self, e);
        });
      },
      addMarker: function(opts) {
        var marker;
        var infoWindow;
        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        }
        marker = this._createMarker(opts);
        if (opts.event) {
          this._on({
            obj: marker,
            event: opts.event.name,
            callback: opts.event.callback
          })
        }
        if (opts.infoOpen){
          infoWindow = new google.maps.InfoWindow({
            content: opts.content
          });
          this.infoWindows.push(infoWindow);
          infoWindow.open(this.gMap, marker);
        }
        if (opts.content) {
          this._on({
            obj: marker,
            event: 'click',
            callback: function(e) {              
              if (!infoWindow){
                infoWindow = new google.maps.InfoWindow({
                  content: opts.content
                });
                this.infoWindows.push(infoWindow);
              } 
              if(!infoWindow.getMap()){
                if(this.infoWindows.length){
                  for (var item in this.infoWindows){
                      this.infoWindows[item].close();
                  }   
                } 
                infoWindow.open(this.gMap, marker);
              } else {
                infoWindow.close();
              }
            }
          });
        }
        return marker;
      },
      _createMarker: function(opts) {
        opts.map = this.gMap;
        return new google.maps.Marker(opts);
      }
    }
    return Mapster;
  }());

  Mapster.create = function(element, opts) {
    return new Mapster(element, opts);
  };

  window.Mapster = Mapster;
}(window, google));