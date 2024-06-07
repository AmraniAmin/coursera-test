(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageColor = "";

        $scope.checkIfTooMuch = function () {
            // Utilisation de trim() pour supprimer les espaces avant de vérifier si la chaîne est vide
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Veuillez d'abord saisir les données";
                $scope.messageColor = "red";
                return;
            }

            var itemsArray = $scope.lunchItems.split(',');
            // Filtrer les éléments vides après avoir appliqué trim() sur chaque élément
            var validItems = itemsArray.filter(item => item.trim().length > 0);

            if (validItems.length <= 3) {
                $scope.message = "Profitez !";
                $scope.messageColor = "green";
            } else {
                $scope.message = "Trop !";
                $scope.messageColor = "green";
            }
        };
    }
})();
