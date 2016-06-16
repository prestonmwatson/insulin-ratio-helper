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
        url: '/1',
        templateUrl: '/templates/_foodProfileView.html',
      }).state('restaurants', {
        url: '/restaurants',
        templateUrl: '/templates/_restaurantView.html',
      }).state('categories', {
        url: '/categories',
        templateUrl: '/templates/_categoryView.html',
      });
  });

  app.factory('ratioFactory', function() {
    return {
      ratio: 0,
      getRatio: function(){
        return this.ratio;
        }
      }

  });


})();
