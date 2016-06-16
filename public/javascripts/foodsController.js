(function() {
  var app = angular.module('InsulinRatioApp');

  app.controller('FoodsController', function($http, ratioFactory) {
    var foodList = [];

    var self = this;

    $http({
      method: 'GET',
      url: '/foods'
    }).then(function successCallback(response) {
      console.log('success');
      console.log(ratioFactory.ratio);
      var chickCarbs = response.data[0].carbs;
      var chickenRatio = chickCarbs/ratioFactory.ratio;
      for (var i = 0; i < foodList.length; i++) {
      var foodRatio = data[i].carbs/ratioFactory.ratio;
      console.log(foodRatio);
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
