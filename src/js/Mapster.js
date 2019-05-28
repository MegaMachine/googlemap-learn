(function(window, google, List) {

  var Mapster = (function() {
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
      this.markers = List.create();
      if (opts.cluster) {
        this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.cluster.options);
      }
    }
    Mapster.prototype = {
      zoom: function(level) {
        if(level) {
          this.gMap.setZoom(level);
        } else {
          return this.gMap.getZoom();
        }
      },
      addMarker: function(opts) {
        var marker;
        var infoWidow;
        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        }
        marker = this._createMarker(opts);
        if(this.markerClusterer) {
          this.markerClusterer.addMarker(marker);
        }
        this.markers.add(marker);
        if (opts.events) {
          this._attachEvents(marker, opts.events);
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
      setPano: function(element, opts){
        var panorama = new google.maps.StreetViewPanorama(element, opts);
        this.gMap.setStreetView(panorama);
        if (opts.events) {
          this._attachEvents(panorama, opts.events);
        }
      },
      findBy: function(callback) {
        return this.markers.find(callback)
      },
      removeBy: function(callback) {
        var self = this;
        this.markers.find(callback, function(markers) {
          markers.forEach(function(marker){
            if(self.markerClusterer){
              self.markerClusterer.removeMarker(marker);
            } else {
              marker.setMap(null);
            }
          })
        });
      },
      _attachEvents: function(obj, events){
        var self = this;
        events.forEach(function(event){
          self._on({
            obj: obj,
            event: event.name,
            callback: event.callback
          })
        })
      },
      _on: function(opts) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.event, function(e){
          opts.callback.call(self, e, opts.obj);
        });
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
}(window, google, List));