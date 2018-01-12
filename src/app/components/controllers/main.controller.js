(function() {
  'use strict';

  angular
    .module('ngStarters')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];
  }
})();
