(function() {
  var app = angular.module('InsulinRatioApp');

    app.controller('RatioController', ['$scope', 'ratioFactory', function($scope, ratioFactory) {

      $scope.master = {};
      $scope.vis = false;
      $scope.submitted = false;
      $scope.ratio = ratioFactory.getRatio();


      $scope.update = function(insulin) {
        $scope.master = angular.copy(insulin);
        $scope.vis = !$scope.vis;
        $scope.submitted = !$scope.submitted;
        ratioFactory.ratio = insulin.ratio;
        $scope.ratio = ratioFactory.getRatio();
        console.log(ratioFactory.getRatio());

        // $scope.ratioFactory.ratio;
      };

      $scope.reset = function() {
        $scope.insulin = angular.copy($scope.master);
      };

      $scope.reset();



      }]);


  })();

