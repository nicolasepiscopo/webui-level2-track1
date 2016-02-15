;(function(){
  'use strict';

  // Routing and bootstrapping
  app.routing
  .add('/', app.controller.home)
  .add('/flota', app.controller.flota)
  .add('/search', app.controller.search)
  .add('/contacto', app.controller.contacto)
  .add('/ofertas', app.controller.ofertas)
  .add('/acerca-de', app.controller.acercaDe)
  .go('/');

})();
