/*
Component name: Simple Router
Author: Nicolás Epíscopo
Dependencies: jquery-loadTemplate
*/
;(function(global, undefined){
  'use strict';

  global.simpleTemplate = (function(){
    //Private behaviour

    // Public behaviour
    return {
      render: function(holder, templatePath, data){
        if(!data){
          data = {};
        }
        return new Promise(function(resolve, reject){
          try{
            $('#'+holder+"-holder").loadTemplate(templatePath, data);
            setTimeout(resolve, 100);
          }catch(e){
            console.error('It seems that you didn\'t import the loadTemplate jQuery library.');
            if(reject)
              reject();
          }
        });
      }
    }
  })();
})(window);
