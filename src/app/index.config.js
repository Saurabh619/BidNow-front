(function() {
  'use strict';

  angular
    .module('ngStarters')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
