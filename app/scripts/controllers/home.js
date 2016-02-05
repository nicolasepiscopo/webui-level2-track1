;(function(){
  'use strict';

  app.controller.form = function(){
    
  }

  // Routing and bootstrapping
  app.controller.home = function(){
    app.template.render('header', 'templates/header.tpl.html');
    app.template.render('main', 'templates/home.tpl.html').then(function(){
      app.template.render('carousel', 'templates/carousel.tpl.html');
      app.template.render('reserva', 'templates/reserva.tpl.html').then(app.controller.form);
    });
  }

})();
