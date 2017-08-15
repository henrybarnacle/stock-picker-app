'use strict';

/**
 * @ngdoc overview
 * @name stockPickerAppApp
 * @description
 * # stockPickerAppApp
 *
 * Main module of the application.
 */
angular
  .module('stockPickerAppApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');

  	$stateProvider
  	.state('main', {
  		url: '/',
  		templateUrl: 'views/main.html',
  		controller: 'MainCtrl as home'
  	})
}]);