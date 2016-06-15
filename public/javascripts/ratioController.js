(function() {
  var app = angular.module('InsulinRatioApp');

    app.controller('RatioController', ['$scope', function($scope, ratio) {

      $scope.master = {};
      $scope.vis = false;
      $scope.submitted = false;

      $scope.update = function(insulin) {

        $scope.master = angular.copy(insulin);
        $scope.vis = !$scope.vis;
        $scope.submitted = !$scope.submitted;
      };

      $scope.reset = function() {
        $scope.insulin = angular.copy($scope.master);
      };

      $scope.reset();
    }]);

    // app.factory('ratio', ['$window', function(ratio) {


    //   };
    // }]);


  })();

