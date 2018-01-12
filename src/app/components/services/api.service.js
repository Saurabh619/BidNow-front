(function() {
  'use strict';

  angular.module('ngStarters').service('APIService', APIService);

  APIService.$inject = ['$log', '$q', '$http', '$cookies'];
  /** @ngInject */
  function APIService($log, $q, $http, $cookies) {
    return {

      // create vendors
      // vendor Login
      // vendor inventory/cars upload
      // create client
      // client login
      // create bid using client and car(vendor) ids
      // get cars
      // get cars by clientId
      // get cars by vendorId
      // get bids by vendorId
      // get bids by carId
      // get bids by clientId

      create_bid: function(carId, bidValue) {

        console.log(carId, bidValue);

        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/bids';
        var requestData = {
          "val": bidValue,
          "clientId": "5a589b26f5901b1972423ab5",
          "carId": carId
        }
        var headers = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        $http.post(baseURL, requestData, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },

      rent_car: function(name){
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/cars/rent';
        var requestData = {
          "name": name,
          "clientId": "5a589b26f5901b1972423ab5"
        }
        var headers = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        $http.post(baseURL, requestData, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },

      get_bids_by_carId: function(carId) {
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/bids';
        var headers = {
          headers: {
            'Accept': 'application/json'
          }
        }

        $http.get(baseURL, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },

      get_cars_on_rent: function(){
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/cars?filter[where][allowRent]=true';
        var headers = {
          headers: {
            'Accept': 'application/json'
          }
        }

        $http.get(baseURL, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },

      get_cars: function(clientId) {
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/cars';
        var headers = {
          headers: {
            'Accept': 'application/json'
          }
        }

        $http.get(baseURL, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      }


    }
  }
})();
