(function(window, google) {

  var Mapster = (function() {
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
    }
    Mapster.prototype = {
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
        var infoWidow;
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
        if (opts.content) {
          this._on({
            obj: marker,
            event: 'click',
            callback: function(e) {       
              if (!infoWidow){
                infoWidow = new google.maps.InfoWindow({
                  content: opts.content
                });
              } 
              if(!infoWidow.getMap()){
                infoWidow.open(this.gMap, marker);
              } else {
                infoWidow.close();
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