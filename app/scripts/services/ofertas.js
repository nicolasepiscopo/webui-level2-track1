;(function(){
  'use strict';

  // Routing and bootstrapping
  app.service.ofertas = (function(){
    return {
      get : get
    }

    function get(callback){
      $.ajax("scripts/data/ofertas.json").then(callback);
    }
  })();

})();
