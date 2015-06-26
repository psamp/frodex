;(function (){
  
  'use strict';

  angular.module('Frodex')

  .controller('Register', ['$scope', '$location', 'UserService',

      function ($scope, $location, UserService) {

        // user signup

        $scope.addUser = function (account) {
          UserService.userRegister(account).success( function (data) {

            $location.path('/');
            $scope.user = {};
          }); 
        };
      
      }

    ]);

}());