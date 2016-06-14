(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('UsersController', function($http, $location, $window, UserService, AuthenticationService) {

  //Admin User Controller (login, logout)
    $scope.logIn = function logIn(username, password) {
        if (username !== undefined && password !== undefined) {

            UserService.logIn(username, password).success(function(data) {
                AuthenticationService.isLogged = true;
                $window.sessionStorage.token = data.token;
                $location.path("/admin");
            }).error(function(status, data) {
                console.log(status);
                console.log(data);
            });
        }
    }

    $scope.logout = function logout() {
      if (AuthenticationService.isLogged) {
        AuthenticationService.isLogged = false;
        delete $window.sessionStorage.token;
        $location.path("/");
      }
    }

    appServices.factory('AuthenticationService', function() {
      var auth = {
        isLogged: false
      }

      return auth;
    });

    appServices.factory('UserService', function($http) {
      return {
        logIn: function(username, password) {
            return $http.post(options.api.base_url + '/login', {username: username, password: password});
        },

        logOut: function() {

        }
      }
    });

    appServices.factory('TokenInterceptor', function ($q, $window, $location, AuthenticationService) {
      return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },

        requestError: function(rejection) {
            return $q.reject(rejection);
        },

        /* Set Authentication.isAuthenticated to true if 200 received */
        response: function (response) {
            if (response != null && response.status == 200 && $window.sessionStorage.token && !AuthenticationService.isAuthenticated) {
                AuthenticationService.isAuthenticated = true;
            }
            return response || $q.when(response);
        },

        /* Revoke client authentication if 401 is received */
        responseError: function(rejection) {
            if (rejection != null && rejection.status === 401 && ($window.sessionStorage.token || AuthenticationService.isAuthenticated)) {
                delete $window.sessionStorage.token;
                AuthenticationService.isAuthenticated = false;
                $location.path("/admin/login");
            }

            return $q.reject(rejection);
        }
      };
    });

    app.config(function ($httpProvider) {
      $httpProvider.interceptors.push('TokenInterceptor');
    });

    app.config(['$locationProvider', '$routeProvider',
      function($location, $routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/templates/_homeView.html',
            controller: '',
            access: { requiredLogin: false }
        }).
        when('/login', {
            templateUrl: '/templates/_logInView.html',
            controller: 'UsersController',
            access: { requiredLogin: false }
        }).
        when('/signup', {
            templateUrl: '/templates/_signUpView.html',
            controller: 'UsersController',
            access: { requiredLogin: false }
        }).
        when('/profile', {
            templateUrl: '/templates/_profileView.html',
            controller: 'UsersController',
            access: { requiredLogin: true }
        }).
        when('/search', {
            templateUrl: '/templates/_searchView.html',
            controller: 'FoodsController',
            access: { requiredLogin: true }
        }).
        when('/food/:id', {
            templateUrl: '/templates/_foodProfileView.html',
            controller: 'FoodsController',
            access: { requiredLogin: true }
        }).
        otherwise({
            redirectTo: '/'
        });
      }]);

  app.run(function($rootScope, $location, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged) {
            $location.path("/admin/login");
        }
    });
  });




  });
})();




