(function () {

'use strict';

var x= "hello";


angular.module('myFirstApp', [])
.controller('MyFristController', function($scope){
    $scope.name= "Amin";
    $scope.syHello = function(){
        return "Hello Cousera!"
    }

});
    
})(); 