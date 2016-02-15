;(function(){
  'use strict';

  // Routing and bootstrapping
  app.controller.contacto = function(){

    return app.template.render('main', 'templates/contacto.tpl.html').then(function(){
      $("#contacto").submit(function(){
        console.log("El formulario de contacto se envió con: " + JSON.stringify(app.doubleBind.get('contacto')));
        var message = "El mensaje ha sido enviado, muy pronto nos estaremos poniendo en contacto con usted.";
        app.template.render('messages', 'templates/messages/success.tpl.html', {message: message}).then(function(){
          setTimeout(function(){
            $(".alert").alert('close');
          }, 2000);
        });
        $("#contacto")[0].reset();
        return false;
      });
    });
  };

})();
