(function () {
  'use strict';

  angular.module('app').config(config);

  function config($stateProvider) {

    $stateProvider.state('project', {
      url: '/project',
      templateUrl: 'project/project.html',
      controller: 'Project as vm',
      resolve : {
        project : function($q){
          return $q.when({});
        }
      }
    }).state('project', {
      url: '/project/:id',
      templateUrl: 'project/project.html',
      controller: 'Project as vm',
      resolve : {
        project : function($stateParams, $resource) {
          return $resource('/project/:id', {
            id : $stateParams
          }).$promise;
        }
      }
    }).state('projects', {
      url: '/projects',
      templateUrl: 'projects/projects.html',
      controller: 'Projects as vm'
    });


  }

}());
