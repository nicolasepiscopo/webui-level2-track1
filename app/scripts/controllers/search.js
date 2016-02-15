;(function(){
  'use strict';

  // Routing and bootstrapping
  app.controller.search = function(){

    return app.template.render('main', 'templates/search.tpl.html').then(function(){
      app.service.flota.get(function(data){
        app.template.render('results', 'templates/results.tpl.html', {flota: [data.flota[0], data.flota[2]]});
      });
    });
  };

})();
