/*
Component name: Simple Router
Author: Nicolás Epíscopo
Dependencies: handlebars, simple-double-bind
*/
;(function(global, undefined){
  'use strict';

  global.simpleTemplate = (function(){
    //Private behaviour

    // Public behaviour
    return {
      render: function(holder, templatePath, data){

        var jsonData = {};

        if(!data){
          jsonData = {};
        }else{
          jsonData = data;
        }

        return $.get(templatePath, function (data) {
          var template=Handlebars.compile(data);
          $('#'+holder+"-holder").html(template(jsonData));
          app.doubleBind.initialize();
        }, 'html');
      },
      helper: function(name, callback){
        Handlebars.registerHelper(name, callback);
      }
    }
  })();
})(window);
