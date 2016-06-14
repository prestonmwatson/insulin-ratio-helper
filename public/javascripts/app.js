(function() {

  var app = angular.module('InsulinRatioApp', ['ui.router']);

  // Configure different application states
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/_homeView.html'
      }).state('search', {
        url: '/search',
        templateUrl: '/templates/_searchView.html'
      }).state('profile', {
        url: '/profile',
        templateUrl: '/templates/_profileView.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: '/templates/_logInView.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '/templates/_signUpView.html'
      });
  });

})();