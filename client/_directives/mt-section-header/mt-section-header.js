(function () {
  'use strict';

  angular.module('app.directives').directive('mtSectionHeader', mtSectionHeader);

  function mtSectionHeader() {
    var exports = {
      restrict: 'E',
      template: '<header><h2 ng-transclude></h2></header>',
      transclude: true
    };

    return exports;
  }

}());
