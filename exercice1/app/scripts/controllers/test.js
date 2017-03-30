var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'exercice3-b.html'
                     })
                    .when('/subject', {
                        templateUrl: 'exercice3-c.html', 
                        controller: 'triCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
});
app.controller('myCtrl', function ($scope) {
    $scope.name = 'Votre nom';
    $scope.mail = 'email@domaine.fr';
    $scope.subject = 'Le sujet de votre message';
    $scope.text = 'Entrez votre texte';
    $scope.testText = {
        pattern: /^\D+[-]?\D+/i
    };
    $scope.testMail = {
        pattern: /^[\w\-\.]+[a-z0-9]@[\w\-\.]+[a-z0-9]\.[a-z]{2,}/i
    };
    $scope.list = [];
    $scope.valid = function valid() {
        if ($scope.subject) {
            $scope.list.push({sujet: this.subject, nom: this.name, email: this.mail, texte: this.text}, );
        }
    };
});
app.directive("information", function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div>' +
                '<a id="sub" ng-click="clik()">{{test.sujet}}</a>' +
                '<subformation></subformation>' +
                '<br>', /*  +*/
        link: function ($scope) {
            $scope.clik = function clik() {
                $scope.showin = !$scope.showin;
            };
        }
    };
});
app.directive("subformation", function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div>' +
                    '<br>' +
                    '<p class="body" ng-show="showin">{{test.sujet}}</p>' +
                    '<br>' +
                    '<p class="body" ng-show="showin">{{test.nom}}</p>' +
                    '<br>' +
                    '<p class="body" ng-show="showin">{{test.email}}</p>' +
                    '<br>' +
                    '<p class="body" ng-show="showin">{{test.texte}}</p>' +
                    '</div>' +
                    '<br>'
       };
});

