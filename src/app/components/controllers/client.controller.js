(function() {
  'use strict';

  angular
    .module('ngStarters')
    .controller('ClientController', ClientController);

  /** @ngInject */
  function ClientController($scope, $state, APIService) {

    $scope.cars = [];

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

    $scope.getBids = function(carId, index){

      APIService.get_bids_by_carId($scope.cars[index])
      .then(function(response){

        console.log(response);

        // console.log('yaha',response.data);
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i]['val'] && response.data[i+1]['val']) {
            if (response.data[i]['val'] < response.data[i+1]['val']) {
              $scope.lowestBid = response.data[i]['val'];
            }
          }
        }
        $scope.cars[index]['bid'] = response.data[-1]['val'];

      }).catch(function(error){

        console.log(error);

      })
    }

    $scope.rentNow = function(name){

      APIService.rent_car(name)
      .then(function(response){

        console.log(response);

        for (var i = 0; i < $scope.cars.length; i++) {

          if(angular.equals($scope.cars[i]['name'], name)){
            $scope.cars[i]['rentStatus'] = 'Request Submitted!';
          }

        }

      }).catch(function(error){

        console.log(error);

      })
    }

    $scope.goTo = function(state){
      $state.go(state);
      console.log('state changed to', state);
    }


  }
})();
