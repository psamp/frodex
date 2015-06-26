;(function (){
  
  'use strict';

  angular.module('Frodex')

  .service('UserService', ['PARSE', '$http',

      function (PARSE, $http) {

        var userJoinEndpoint = PARSE.URL + '/users',
            userLoginEndpoint = PARSE.URL + '/login?';

        var User = function (options) {
          this.email = options.email;
          this.username = options.username;
          this.password = options.password;
        };

        var UserReturn = function (options) {
          this.username = options.username;
          this.password = options.password;
        };

        // create user

        this.userRegister = function (newAccount) {

          var u = new User(newAccount);
          return $http.post(userJoinEndpoint, u, PARSE.CONFIG);
        };

        // user login

        this.userLogin = function (u) {

          var values = 'username=' + u.username + '&password=' + u.password;

          return $http.get(userLoginEndpoint + values, PARSE.CONFIG);

        };
      
    }
  ]);

}());