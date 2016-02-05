;(function(){
  'use strict';

  // Routing and bootstrapping
  app.routing
  .add('/', app.controller.home)
  .add('/flota', app.controller.flota)
  .go('/');

})();
