(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('FoodProfileController', function($http, ratioFactory) {
    $http({
      method: 'GET',
      url: '/foods'
    }).then(function successCallback(response) {
      console.log('success', response.data);
    });
      self.foodInfo = response.data;
      console.log(self.foodInfo);
    }, function errorCallback(response) {

  });
})();
