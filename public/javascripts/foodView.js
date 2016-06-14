(function() {

  var app = angular.module('InsulinRatioApp');

  app.directive('food', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl =  "/templates/_foodView.html";
    directive.scope = {
      question: '@'
    };

    return directive;
  });

})();
