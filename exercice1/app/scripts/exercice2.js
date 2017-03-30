var app = angular.module('myApp', []);

app.controller('myController', function($scope, $window) {
    $scope.test = function() {
        $window.alert('non');
    };
});

