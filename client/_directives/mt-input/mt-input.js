(function () {
  'use strict';

  angular.module('app.directives').directive('mtInput', mtInput);

  function mtInput(_) {
    var exports = {
      restrict: 'E',
      template : function(element, attributes){
        var t = '<input type="text" ng-model="ngModel" class="form-control <%= classes %>" ng-required="ngRequired">';

        var templateFn = _.template(t);

        return templateFn({
          classes : attributes.classes
        });
      },
      scope : {
        ngModel : '=',
        ngRequired : '='
      }
    };

    return exports;
  }

}());
