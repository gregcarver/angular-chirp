var app=angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"../views/home.html"
    })   
    .when("/list",{
        templateUrl:"../views/list.html"
    })
    .when("/add",{
        templateUrl:"../views/add.html"
    })

})
/*var con=angular.module('myController',[]);
con.controller('listController',['$scope',function($scope){
    $scope.greetings=
}]);*/




var nav=angular.module('myNav',[]);
nav.controller('Navigate',['$scope', '$location',function($scope,$location){
    $scope.clicked=function(){
        $location.path('/views/add.html')
    }
}]);
