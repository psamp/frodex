;(function (){
  
  'use strict';

  angular.module('Frodex')

  .controller('Register', ['$scope', '$location', 'UserService', 'PARSE',

      function ($scope, $location, UserService, PARSE) {

        // user signup

        $scope.addUser = function (account) {
          UserService.userRegister(account).success( function (u) {
            console.log(u);
            $location.path('/dashboard');
            $scope.user = {};
          });
        };
      
      }

    ]);

}());