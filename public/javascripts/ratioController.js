(function() {
  var app = angular.module('InsulinRatioApp');

    app.controller('RatioController', ['$scope', 'ratioFactory', function($scope, ratioFactory) {

      $scope.master = {};
      $scope.vis = false;
      $scope.submitted = false;

      $scope.update = function(insulin) {
        $scope.master = angular.copy(insulin);
        $scope.vis = !$scope.vis;
        $scope.submitted = !$scope.submitted;
        ratioFactory.ratio = insulin.ratio;
        console.log(ratioFactory.ratio);


      };

      $scope.reset = function() {
        $scope.insulin = angular.copy($scope.master);
      };

      $scope.reset();
    }]);


  })();

