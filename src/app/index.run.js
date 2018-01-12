(function() {
  'use strict';

  angular
    .module('ngStarters')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
