(function () {
  'use strict';

  angular.module('app.directives').directive('mgFormGroup', mgFormGroup);

  function mgFormGroup(modelService) {
    var exports = {
      restrict: 'E',
      templateUrl: 'mt-form-group/mt-form-group.html',
      transclude: true,
      scope: {
        label : '@'
      },
      link: link
    };

    return exports;

    function link(scope, element, meh1, meh2, transcludeFn) {

      scope.ngModel = modelService.find(element);

      transcludeFn(scope.$parent, function (clone) {

        // move input, select text area
        var transcludeInputHere = $(element).find('transclude-input-here');
        transcludeInputHere.append($(clone)('input, select, textarea'));

        // move messages is available
        var transcludeMessagesHere = $(element).find('transclude-element-here');
        transcludeMessagesHere.append($(clone).find('[ng-message]'));
      });
    }
  }

}());
