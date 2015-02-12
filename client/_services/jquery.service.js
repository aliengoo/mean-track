(function () {
  'use strict';

  angular.module('app.services').factory('$', jQueryService);

  function jQueryService($window) {
    return $window.jQuery;
  }

}());
