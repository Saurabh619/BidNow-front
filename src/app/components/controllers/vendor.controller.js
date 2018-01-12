(function() {
  'use strict';

  angular
    .module('ngStarters')
    .controller('VendorController', VendorController);

  /** @ngInject */
  function VendorController($scope, $state, APIService) {

    $scope.cars = [
      {
        id: '123',
        name: '0Swift, 30kmph',
        image: 'not-found',
        lastbid: 0
      },
      {
        id: '135',
        name: '1Swift, 40kmph',
        image: 'not-found',
        lastbid: 0
      },
      {
        id: '246',
        name: '2Swift, 50kmph',
        image: 'not-found',
        lastbid: 0
      },
      {
        id: '357',
        name: '3Swift, 60kmph',
        image: 'not-found',
        lastbid: 0
      }
    ];


    $scope.getCarsList = function(vendorId){

      APIService.get_cars()
      .then(function(response){

        console.log(response);

        if (angular.isDefined(response.data)) {
          $scope.cars = response.data;
        }

      }).then(function(error){

        console.log(error);

      })
    }

    $scope.bidNow = function(carId, bidValue){

      APIService.create_bid(carId, bidValue)
      .then(function(response){

        console.log(response);

        for (var i = 0; i < $scope.cars.length; i++) {

          if(angular.equals($scope.cars[i]['id'], carId)){

            $scope.cars[i]['bidStatus'] = 'Success!';
          }

        }

      }).catch(function(error){

        console.log(error);

      })
    }

    $scope.getRentNotification = function(carId){

      APIService.get_cars_on_rent(carId)
      .then(function(response){

        console.log(response);

        for (var i = 0; i < $scope.cars.length; i++) {

          if(angular.equals($scope.cars[i]['id'], carId)){

            $scope.cars[i]['allowRent'] = true;
          }

        }

      }).catch(function(error){

        console.log(error);

      })
    }

    $scope.goTo = function(state){

      console.log('state changing to', state);
      $state.go(state);

    }


  }
})();
