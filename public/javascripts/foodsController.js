(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('FoodsController', ['$http', '$scope', 'ratioFactory', function($http, $scope, ratioFactory) {
    var foodList = [];
    var self = this;

    $http({
      method: 'GET',
      url: '/foods'
    }).then(function successCallback(response) {
      console.log('success');
      console.log(ratioFactory.ratio);
      console.log(response.data)
      var list = response.data

      for (var i = 0; i < list.length; i++) {
        self.iterate(response.data[i]);
      }
        self.foodList = response.data;
    }, function errorCallback(response) {

    });

    this.addFood = function() {
      var self = this;

      $http({
        method: 'POST',
        url: '/foods',
        data: {
          name: self.newFood.name
        }
      }).then(function successCallback(response) {

        self.foodList.push({
          name: self.newFood.name
        });

      }, function errorCallback(response) {
          console.log('error', response);
      });

      this.newFood.name = '';
    };

    this.iterate = function(foodItem) {
      var insulinFoodRatio = foodItem.carbs/ratioFactory.ratio;
      // console.log(insulinFoodRatio);
      // console.log(insulinFoodRatio.toFixed(1));
      foodItem.ratio = insulinFoodRatio.toFixed(1);
      // var round = Math.round(foodItem.ratio);
    }

    return this;
  }]);
})();
