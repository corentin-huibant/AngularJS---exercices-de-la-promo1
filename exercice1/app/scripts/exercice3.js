var app = angular.module('myApp', ['ngRoute']) //entre crochets, annonce des modules utilisés dans le code. En l'occurence, ngRoute.
        .run(function($rootScope){ //la méthode .run permet de charger dès le départ la fonction qui prend en paramètre $rootScope
            $rootScope.list = []; //Au contraire de $scope qui en est réduit à son contexte, $rootscope permet de partager les données sur plusieurs contextes (ou controller)
}); // En l'occurence, ici, on veut que ce soit la list comprenant nos objets qui soit partagée
app.config(function ($routeProvider) { //configuration de nos routes.
            $routeProvider
                    .when('/', { //sur l'url d'origine
                        templateUrl: 'exercice3-b.html' //on insère le template exercice3-b grace à la directive "ng-view"
                     })
                    .when('/subject/:id', { //sur l'url /subject dont on ajoute le paramètre id (ou n'importe quel nom)
                        templateUrl: 'exercice3-c.html', // on insère le template exercice3-c grace à la directive "ng-view"
                        controller: 'postsCtrl' //en récupérant les informations du controleur postsCtrl
                    })
                    .otherwise({
                        redirectTo: '/' // sinon, si l'url n'est pas bon, il redirige sur l'url d'origine
                    });
});
app.controller('myCtrl', function ($scope) { //déclaration du premier controleur appelée myCtrl
    $scope.name = 'Votre nom'; //on insère une chaine de caractères dans une directive ng-model grace à l'objet $scope
    $scope.mail = 'email@domaine.fr'; //on insère une chaine de caractères dans une directive ng-model grace à l'objet $scope
    $scope.subject = 'Le sujet de votre message'; //on insère une chaine de caractères dans une directive ng-model grace à l'objet $scope
    $scope.text = 'Entrez votre texte'; //on insère une chaine de caractères dans une directive ng-model grace à l'objet $scope
    $scope.testText = { //sur testText
        pattern: /^\D+[-]?\D+/i //on vérifie le regex suivant (en l'occurence, un regex pour les noms) via la variable ng-pattern
    };
    $scope.testMail = { //sur testMail
        pattern: /^[\w\-\.]+[a-z0-9]@[\w\-\.]+[a-z0-9]\.[a-z]{2,}/i //on vérifie le regex suivant via la variable ng-pattern
    };
    $scope.valid = function() { //sur le bouton "ng-click=valid()"...
        if ($scope.subject) { //Si le ng-model subject est rempli
            $scope.list.push({sujet: this.subject, nom: this.name, email: this.mail, texte: this.text}); //présenter à la vue la liste qui a pour objet {sujet: this.subject, nom: this.name, email: this.mail, texte: this.text}
        }
    };
});
app.directive("information", function () { //création d'une directive appelée "information", du nom de la balise "information"
    return { //je retourne :
        restrict: 'E', //un élément
        transclude: true, // qui s'insère/s'inclue dans la balise "information"
        template: '<div>' + //selon le template suivant :
                '<a href="#!/subject/{{$index}}" id="sub">{{test.sujet}}</a>' + //$index itère dans l'élèment (répété). On utilise {{}} car il s'agit d'un élément du modèle
                '<br>'
    };
});
/*Créateur d'un deuxième controleur du nom de 'postsCtrl' qui prend en paramètre $routeParams et $scope (mettre absolument avant le $scope sinon ça ne fonctionne pas).
Le service $routeParams analyse les paramètres de l'url (en l'occurence, on lui demande de récupérer notre paramètre du nom de id lors de l'itération du $index)*/
app.controller('postsCtrl', ['$routeParams', '$scope', function($routeParams, $scope) { 
    $scope.nom = function() { //création d'une fonction
        return $scope.list[$routeParams.id].nom; //retour (d'une valeur précise)(le nom de cette cellule précise) qui fait le lien du modèle à la vue via [récupération de l'id via routeParams]
    };
    $scope.email = function() {
        return $scope.list[$routeParams.id].email;
    };
    $scope.sujet = function() {
        return $scope.list[$routeParams.id].sujet;
    };
    $scope.texte = function() {
        return $scope.list[$routeParams.id].texte;
    };
}]);
