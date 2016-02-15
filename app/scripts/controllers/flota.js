;(function(){
  'use strict';

  // Routing and bootstrapping
  app.controller.flota = function(){
    return app.template.render('main', 'templates/flota.tpl.html').then(function(){
      app.service.flota.get(callback);
      function callback(data) {
        app.template.render('results', 'templates/results.tpl.html', data);
      }
    });
  };

})();
