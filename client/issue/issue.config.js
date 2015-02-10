(function () {
  'use strict';

  angular.module('app').config(config);

  function config($stateProvider) {

    $stateProvider.state('issue', {
      url: '/issue',
      templateUrl: 'issue/issue.html',
      controller: 'Issue as vm'
    });

  }

}());
