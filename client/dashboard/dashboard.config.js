(function () {
  'use strict';

  angular.module('app').config(config);

  function config($stateProvider) {

    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.html',
      controller: 'Dashboard as vm'
    });

  }

}());
