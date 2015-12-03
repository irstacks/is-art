'use strict';

/**
 * @ngdoc function
 * @name isArtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the isArtApp
 */
angular.module('isArtApp')
  .controller('MainCtrl', function ($scope, SelfieList, StaticImages) {

    // selfies
    $scope.selfies = SelfieList.SELFIES;
      $scope.selfieCount = $scope.selfies.length;
      $scope.first = $scope.selfies[0];
      $scope.last = $scope.selfies[$scope.selfieCount -1];

    // static art
    $scope.atsImages = StaticImages.ATS;
    $scope.constructionImages = StaticImages.CONSTRUCTION;
    $scope.outsideImages = StaticImages.OUTSIDE;

  });
