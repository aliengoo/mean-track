(function () {
  'use strict';

  angular.module('app.services').factory('momentService', momentService);

  function momentService($window) {
    return $window.moment;
  }

}());
