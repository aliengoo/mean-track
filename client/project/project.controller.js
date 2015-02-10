(function () {
  'use strict';

  angular.module('app').controller('Project', Project);

  function Project(project) {
    /*jshint validthis:true */
    var vm = this;
    vm.project = project;
  }

}());
