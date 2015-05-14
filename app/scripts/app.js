'use strict';

/**
 * @ngdoc overview
 * @name angularScreenApp
 * @description
 * # angularScreenApp
 *
 * Main module of the application.
 */
angular
  .module('angularScreenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant("URL_CONSTANT", {
    "USER_DETAILS_URL": "/scripts/services/user.json",
    "STORES_DETAILS_URL": "/scripts/services/stores.json"
});