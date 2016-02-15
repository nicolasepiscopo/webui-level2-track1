;(function(){
  'use strict';

  // Routing and bootstrapping
  app.controller.ofertas = function(){

    app.service.ofertas.get(function (data){
      app.template.render('main', 'templates/ofertas.tpl.html', data);
    });
  };

})();
