(function () {
  'use strict';

  angular.module('app.directives').directive('mtPage', mtPage);

  function mtPage() {
    var exports = {
      restrict: 'E',
      template: '<div class="container" ng-transclude></div>',
      transclude: true
    };

    return exports;
  }

}());
