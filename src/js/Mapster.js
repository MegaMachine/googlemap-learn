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
      _on: function(event, callback) {
        var self = this;
        google.maps.event.addListener(this.gMap, event, function(e){
          callback.call(self, e);
        });
      },
      addMarker: function(lat, lng, icon, draggable) {
        this._createMarker(lat, lng, icon, draggable);
      },
      _createMarker: function(lat, lng, icon, draggable) {
        var opts = {
          position: {
            lat: lat,
            lng: lng
          },
          draggable: draggable,
          map: this.gMap,
          icon: icon
        }
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