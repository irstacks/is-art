'use strict';

/**
 * @ngdoc overview
 * @name isArtApp
 * @description
 * # isArtApp
 *
 * Main module of the application.
 */
angular
  .module('isArtApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/self-portrait');
    $stateProvider
      .state('main', {
        url: '/self-portrait',
        // abstract: true,
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      })
      .state('main.gif', {
        url: '/gif',
        templateUrl: '../views/gif.html',
        controller: 'MainCtrl'
      });
  });
