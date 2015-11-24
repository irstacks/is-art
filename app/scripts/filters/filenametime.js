'use strict';

/**
 * @ngdoc filter
 * @name isArtApp.filter:FileNameTime
 * @function
 * @description
 * # FileNameTime
 * Filter in the isArtApp.
 */
angular.module('isArtApp')
  .filter('FileNameTime', function () { // 151124-0736.png
    return function (input) {
      var input = input;
      var output;

      var noImageType = input.replace('.png', '');
      // var formatted = timeFormat(stripped);
      output = noImageType;
      return output;
    };
  });
