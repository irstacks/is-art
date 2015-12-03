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

    $urlRouterProvider.otherwise('/self-portrait');
    $stateProvider

      .state('base', {
        abstract: true,
        url: '/',
        templateUrl: '../views/base.html',
        controller: 'MainCtrl'
      })
        .state('base.arrangements', {
          abstract: true,
          url: 'arrangements',
          templateUrl: '../views/arrangements.html'
        })
          .state('base.arrangements.ats', {
            url: '/ats',
            templateUrl: '../views/arrangements-ats.html'
          })
          .state('base.arrangements.outside', {
            url: '/outside',
            templateUrl: '../views/arrangements-outside.html'
          })

        .state('base.photographs', {
          abstract: true,
          url: 'photographs',
          templateUrl: '../views/photographs.html'
        })
          .state('base.photographs.construction', {
            url: '/construction',
            templateUrl: '../views/photographs-construction.html'
          })

        .state('base.self-portrait', {
          url: 'self-portrait',
          // abstract: true,
          templateUrl: '../views/self-portrait.html'
          // controller: 'MainCtrl'
        })
        .state('base.self-portrait.gif', {
          url: '/gif',
          templateUrl: '../views/gif.html'
          // controller: 'MainCtrl' // inherits
        });
  });
