(function () {
  'use strict';

  angular.module('app').factory('projectService', projectService);

  function projectService($http, $q) {
    var exports = {
      get : get
    };

    return exports;

    ///////////////
    function get(id) {
      return $http.get('project/' + id);
    }

  }

}());
