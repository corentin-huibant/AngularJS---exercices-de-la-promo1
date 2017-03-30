var app = angular.module('myApp', []); //lancement de angular à travers la variable myApp

app.controller('myController', function($scope) { //sur une fonction $scope au sein du controller myController
    $scope.test2 = { //l'objet test2 subit les instructions
        pattern: /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/ //pattern qui l'oblige à tester sur la regex suivante
    };
});

