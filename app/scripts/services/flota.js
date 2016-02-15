;(function(){
  'use strict';

  // Routing and bootstrapping
  app.service.flota = (function(){
    return {
      get : get
    }

    function get(callback){
      $.ajax("scripts/data/flota.json").then(callback);
    }
  })();

})();
