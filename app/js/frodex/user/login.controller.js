;(function (){
  
  'use strict';

  angular.module('Frodex')

  .controller('Login', ['$scope', '$location', 'UserService',

      function ($scope, $location, UserService) {

        // user login

        $scope.userSignin = function (login) {

          $scope.showError = false;

          UserService.userLogin(login).success(function (data) {

            Cookies.set('session_token', data.sessionToken);
            $location.path('/dashboard');
            $scope.user = {};

          }).error( function (data) {
            $scope.showError = true;
            $scope.errorMssg = data.error + '.' + ' register for an account or reload this page and try again.';
            $location.path('/');
          });
        };
      
      }

    ]);

}());