/*
Component name: Simple Router
Author: Nicolás Epíscopo
Dependencies: simple-double-bind
*/
;(function(global, undefined){
  'use strict';

  global.simpleRouting = (function(){
    //Private behaviour
    var routes = [];
    var state = {
      path : ''
    }

    global.onhashchange = function(){
      go(window.location.hash.replace('#',''));
    }

    Object.observe(state, function(changes){
      var route = routes.find(function(route){
        return route.path === state.path;
      });
      if(route){
        return route.fn();
      }
      console.warn('Page named ' + state.path + ' not found.')
    });

    // Public behaviour
    return {
      go: go,
      add: add
    }

    // Functions for public behaviour

    function go(path){
      state.path = path;
      window.location.hash = path;
      return this;
    }

    function add(path, fn){
      try{
        routes.push({path: path, fn: fn});
      }catch(e){
        console.error(e);
      }
      return this;
    }
  })();
})(window);
