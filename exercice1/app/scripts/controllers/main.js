'use strict';

/**
 * @ngdoc function
 * @name exercice1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exercice1App
 */
angular.module('exercice1App')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.helloWorld = "Hello";
    $scope.name = "truc";
  });
