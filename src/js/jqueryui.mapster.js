(function(window, google, Mapster){
  $.widget("mapster.mapster", {
    // default options
    options: { },

    // The constructor
    _create: function() {
      var element = this.element[0],
          options = this.options;
      this.map = Mapster.create(element, options)
    },

    // Called when created, and later when changing options
    _refresh: function() {
      
    },

    addMarker: function( options ) {
      var self = this;
      if(options.location) {
        this.map.geocode({
          address: options.location, //'Golden Gate Bridge, San Jrancisco, CA'
          success: function(results) {
            results.forEach(function(result){
              options.lat = result.geometry.location.lat();
              options.lng =  result.geometry.location.lng();
              self.map.addMarker(options);
            });
          },
          error: function(status) {
            console.error(status);
          }
        });
      } else {  
        this.map.addMarker(options);
      }
    },
    findMarker: function(callback){
      return this.map.findBy(callback)
    },
    removeMarker: function(callback){
      this.map.removeBy(callback);
    },
    getMarkers: function(){
      return this.map.markers.items;
    },
    setPano: function(selector, opts){
      var elements = $(selector),
          self = this;
      $.each(elements, function(key, element){
        self.map.setPano(element, opts);
      })
    },
    // Events bound via _on are removed automatically
    // revert other modifications here
    _destroy: function() {
      
    },

    // _setOptions is called with a hash of all options that are changing
    // always refresh when changing options
    _setOptions: function() {
      // _super and _superApply handle keeping the right this-context
      this._superApply( arguments );
      this._refresh();
    },

    // _setOption is called for each individual option that is changing
    _setOption: function( key, value ) {
      this._super( key, value );
    }
  });

}(window, google, Mapster));