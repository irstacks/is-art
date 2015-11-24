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
    // var fs = require('fs');
    // function getFiles (dir, files_){
    //     files_ = files_ || [];
    //     var files = fs.readdirSync(dir);
    //     for (var i in files){
    //         var name = dir + '/' + files[i];
    //         if (fs.statSync(name).isDirectory()){
    //             getFiles(name, files_);
    //         } else {
    //             files_.push(name);
    //         }
    //     }
    //     return files_;
    // }

    // console.log(getFiles('../images'))
  });
