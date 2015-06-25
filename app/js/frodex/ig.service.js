;(function (){
  
  'use strict';

  angular.module('Frodex')

  .service('IgService', ['$http', 

    function ($http) {

      var igEndpoint = 'https://api.instagram.com/v1/tags/naturalhairstyle/media/recent?client_id=63164feceed04cf39fd05e5230f10e8d';

      // get json for instagram search 'naturalhairstyle'

      this.getIgData = function () {
        
        $http.get(igEndpoint).success( function (data) {
          console.log(data);
        });
      
      };


    }
  ]);

}());