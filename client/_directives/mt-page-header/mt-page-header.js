(function () {
  'use strict';

  angular.module('app.directives').directive('mtPageHeader', mtPageHeader);

  function mtPageHeader() {
    var exports = {
      restrict: 'E',
      template: '<header class="page-header"><h1 ng-transclude></h1></header>',
      transclude: true
    };

    return exports;
  }

}());
