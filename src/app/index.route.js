(function() {
  'use strict';

  angular
    .module('ngStarters')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'signup@home': {
            templateUrl: 'app/main/views/signup.tpl.html',
            controller: 'RegistrationController',
            controllerAs: 'register'
          },
          'signin@home': {
            templateUrl: 'app/main/views/signin.tpl.html',
            controller: 'RegistrationController',
            controllerAs: 'register'
          }
        }
      })
      .state('vendor', {
        url: '/vendor',
        templateUrl: 'app/partials/vendor/vendor.tpl.html',
        controller: 'VendorController',
        controllerAs: 'vendor'
      })
      .state('client', {
        url: '/client',
        templateUrl: 'app/partials/client/client.tpl.html',
        controller: 'ClientController',
        controllerAs: 'client'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
