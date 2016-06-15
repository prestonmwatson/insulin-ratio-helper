(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('FoodProfileController', function($http, ratio) {
    $http({
      method: 'GET',
      url: '/foods/:id'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.foodList = response.data;
      console.log(self.foodList);
    }, function errorCallback(response) {

    });

  });
})();
