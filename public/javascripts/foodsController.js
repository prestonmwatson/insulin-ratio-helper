(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('FoodsController', function($http, ratioFactory) {
    var foodList = [];

    var self = this;

    $http({
      method: 'GET',
      url: '/foods'
    }).then(function successCallback(response) {
      console.log('success', response.data);
      console.log(response.data[0].carbs);
      console.log(ratioFactory.ratio);
      var chickCarbs = response.data[0].carbs;
      console.log(chickCarbs/ratioFactory.ratio);

      self.foodList = response.data;
      console.log(self.foodList);
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

        self.cards.push({
          question: self.newFood.name
        });

      }, function errorCallback(response) {
          console.log('error', response);
      });

      this.newFood.name = '';
    };

    return this;
  });
})();
