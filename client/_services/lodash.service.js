(function () {
  'use strict';

  angular.module('app.services').factory('_', lodashService);

  function lodashService($window) {
    return $window._;
  }

}());
