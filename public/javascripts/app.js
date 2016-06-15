(function() {

  var app = angular.module('InsulinRatioApp', ['ui.router']);

  // Configure different application states
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/_homeView.html'
      }).state('foods', {
        url: '/foods',
        templateUrl: '/templates/_searchView.html'
      }).state('foods.view', {
        url: '/{foodId:[0]}',
        templateUrl: '/templates/_profileView.html',
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
