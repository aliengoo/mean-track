(function () {
  'use strict';

  angular.module('app.services').factory('modelService', modelService);

  function modelService($) {
    var exports = {
      find : find
    };

    return exports;

    ///////////////
    function find(linkElement){
      var ngModelElement = $(linkElement).find('[ng-model]');

      var ngModel;

      if (ngModelElement) {
        ngModel = angular.element(ngModelElement).controller('ngModel');
      }

      return ngModel;
    }
  }

}());
