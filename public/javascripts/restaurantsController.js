(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('RestaurantController', function($http) {
    var restaurantList = [];

    var self = this;

    $http({
      method: 'GET',
      url: '/foods'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.restaurantList = response.data;
      console.log(self.restaurantList);
    }, function errorCallback(response) {

    });

    return this;
  });
})();
