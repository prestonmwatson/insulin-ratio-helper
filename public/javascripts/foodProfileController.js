(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('FoodProfileController', function($http, ratioFactory) {
    $http({
      method: 'GET',
      url: '/foods/5761ce4a1d0ce782a3c867e5'
    }).then(function successCallback(response) {
      console.log('success', response.data);
    });

      self.foodInfo = response.data;
      console.log(self.foodInfo);
    }, function errorCallback(response) {

  });
})();
