(function () {
  'use strict';

  angular.module('app').config(config);

  function config($stateProvider) {

    $stateProvider.state('board', {
      url: '/board',
      templateUrl: 'board/board.html',
      controller: 'Board as vm'
    });

  }

}());
