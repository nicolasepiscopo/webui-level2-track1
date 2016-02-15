;(function(){
  'use strict';

  // Routing and bootstrapping
  app.controller.home = function(){
    app.template.render('header', 'templates/header.tpl.html');
    app.template.render('footer', 'templates/footer.tpl.html');
    app.template.render('main', 'templates/home.tpl.html').then(function(){
      app.template.render('carousel', 'templates/carousel.tpl.html');
      app.template.render('reserva', 'templates/reserva.tpl.html').then(function(){
        //Data
        var ciudades = ["Buenos Aires", "Bahía Blanca", "La Plata", "Rosario", "Córdoba", "Mendoza"];
        //Initializing autocomplete
        $("#place").autocomplete(ciudades);
        //Call search form initializer
        searchForm();
      });
    });

    function searchForm() {
      //Search form initializer
      $("#reserva").submit(function(){
        var busqueda = app.doubleBind.get('busqueda');
        //var message  = "La reserva se ha realizado.";
        //app.template.render('messages', 'templates/messages/success.tpl.html', {message: message});
        console.log("Su búsqueda: " + JSON.stringify(busqueda));
        app.routing.go('/search');
        return false;
      });
    }
  }

})();
