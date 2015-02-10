(function () {
  'use strict';

  angular.module('app').config(config);

  function config($stateProvider) {

    $stateProvider.state('search', {
      url: '/search',
      templateUrl: 'search/search.html',
      controller: 'Search as vm'
    });

  }

}());
