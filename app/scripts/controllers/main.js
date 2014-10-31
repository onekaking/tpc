'use strict';

/**
 * @ngdoc function
 * @name tpcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tpcApp
 */
angular.module('tpcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
