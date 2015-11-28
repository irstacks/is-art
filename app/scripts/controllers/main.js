'use strict';

/**
 * @ngdoc function
 * @name isArtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the isArtApp
 */
angular.module('isArtApp')
  .controller('MainCtrl', function ($scope, SelfieList) {

    $scope.testes = 'successy';

    $scope.selfies = SelfieList.SELFIES;

    $scope.selfieCount = $scope.selfies.length;
    $scope.first = $scope.selfies[0];
    $scope.last = $scope.selfies[$scope.selfieCount -1];

  });
