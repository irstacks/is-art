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
    $urlRouterProvider.otherwise('/');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/',
        // abstract: true,
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      });
  });
