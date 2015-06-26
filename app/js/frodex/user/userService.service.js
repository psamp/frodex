;(function (){
  
  'use strict';

  angular.module('Frodex')

  .service('UserService', ['PARSE', '$http',

      function (PARSE, $http) {

        var endpoint = PARSE.URL + '/users';

        var User = function (options) {
          this.email = options.email;
          this.username = options.username;
          this.password = options.password;
        };

        // create user

        this.userRegister = function (newAccount) {

          var u = new User(newAccount);
          console.log(u);
          return $http.post(endpoint, u, PARSE.CONFIG);
        };
      
    }
  ]);

}());