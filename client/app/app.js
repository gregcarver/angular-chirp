
var app=angular.module('myApp', ["ngRoute",]);
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
    });
});
app.controller("HttpPostController",function($scope,$http){
    console.log('im loaded')
    $scope.Poster=function(){
        console.log('i clicked');
        var data=({
            user : $scope.user,
            message : $scope.message,
        });
        $http.post('http://localhost:3000/api/chirps',data)
            .then(function(response){
            });
            $scope.message="";
            $scope.user="";
    };
});
app.controller("HttpGetController",function($scope,$http){
        $http.get('http://localhost:3000/api/chirps',data)
            .then(function(response){
                console.log(response.data)
                $scope.chirps=response.data
            }
);
});






    //        .success(function(data){
    //     console.log(data)
    //     $scope.chirps=data;
    // })
    // .error(function(data){
    //     alert('Fill in text fields')
    // });
    // 
    // angular.module('MyPosts', [])
//   .controller('HttpGetController', ['$scope', '$http', function ($scope, $http) {
//       $scope.name = {};
//       $scope.message = [];

//       $scope.search = function () {
//           $http.get('/your/url/search', { params: name },
//             function (response) { $scope.message = response; },
//             function (failure) { console.log("failed :(", failure); });
//       }
    
//   }]);
// ,"myPosts","myGets"
//var post=angular.module('myPosts',[]
//var getMod=angular.module('myGets',[]);