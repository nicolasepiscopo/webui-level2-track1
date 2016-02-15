/*
Component name: Simple Double Bind
Author: Nicolás Epíscopo
Dependencies: jQuery
*/
;(function(global, undefined){
  'use strict';

  global.simpleDoubleBind = (function(){
    //Private behaviour
    var binds = [];

    return {
      initialize: initialize,
      get: get
    }

    function initialize(){
      binds = [];

      setTimeout(function(){

        $("[data-sdb-model]").change(callback);
        $("[data-sdb-model][type='text']").keyup(callback);

        function callback(){
          var model = $(this).data("sdb-model");
          if($(this).val()){
            if(($(this).attr("type")=="checkbox")||($(this).attr("type")=="radio")){
              binds[model] = ($(this).is(":checked"))? $(this).val() : false;
            }else{
              binds[model] = $(this).val();
            }
          }else{
            binds[model] = $(this).html();
          }
          var changed = $(this)[0];
          $("[data-sdb-model='"+model+"']").each(function(){
            if($(this)[0]!=changed){
              if($(this).val()){
                $(this).val(binds[model]);
              }else {
                $(this).html(binds[model]);
              }
            }
          });
        };
      }, 10);
    }

    function get(model){
      binds = [];
      $("[data-sdb-model]").change();
      $("[data-sdb-model][type='text']").keyup();
      Object.keys(binds).forEach(function(key){
        var splitted = key.split('.');
        var value = binds[key];
        if(splitted.length>1){
          //It's an object
          delete binds[key];
          let objectKey = splitted[0];
          if(!binds[objectKey]){
            binds[objectKey] = {};
          }
          binds[objectKey][splitted[1]] = value;
        }
        // else: It's a simple property
      });
      return binds[model];
    }

  })();
})(window);
