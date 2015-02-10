(function () {
  'use strict';

  angular.module('app').directive('mtTextInput', mtTextInput);

  function mtTextInput() {
    var exports = {
      restrict: 'E',
      templateUrl: 'mt-text-input/mt-text-input.html',
      scope: {
        label : '@',
        name : '@',
        m : '=',
        r : '='
      },
      link: link
    };

    return exports;

    function link($s, $e, $a) {
    }
  }

}());
