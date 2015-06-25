;(function (){
  
  'use strict';

  var ig = 'https://api.instagram.com/v1/tags/naturalhairstyle/media/recent?client_id=63164feceed04cf39fd05e5230f10e8d';

  angular.module('Frodex', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id' : '3j9jaWVMuEl4gG7wrSsIULpmAzsBbhJzLA9ESI8p',
        'X-Parse-REST-API-Key' : 'g1JZfytXtixTSJYkNoiJrChQpgGHx00jeLzt5Qm0'
      }
    }
  })

  .config( [ '$routeProvider',

      function ($routeProvider) {

        $routeProvider.when('/codex', {
          templateUrl: 'js/frodex/codex.tpl.html',
          controller: ''
        })

        .when('/about', {
          templateUrl: 'js/frodex/about.tpl.html',
          controller: ''
        })

        .when('/', {
          templateUrl: 'js/frodex/home.tpl.html',
          controller: ''
        });
      
    }
]);

}());