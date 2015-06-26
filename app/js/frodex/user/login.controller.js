;(function (){
  
  'use strict';

  angular.module('Frodex')

  .controller('Login', ['$scope', '$location', 'UserService',

      function ($scope, $location, UserService) {

        // user login

        $scope.userSignin = function (login) {

          UserService.userLogin(login).success(function (data) {

            Cookies.set('session_token', data.sessionToken);
            $location.path('/dashboard');
            $scope.user = {};

          });
        };
      
      }

    ]);

}());