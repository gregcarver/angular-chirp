
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
    })
    .when("/single/:id",{
        templateUrl:"../views/single.html"
    })
});
app.controller("HttpPostController",[ "$scope","$http",function($scope,$http){
    console.log('im loaded')
    $scope.Poster = function() {
        console.log('i clicked');
        var data= {
            user : $scope.user,
            message : $scope.message,
        };
        $http({ 
            method: 'POST', 
            url: 'http://localhost:3000/api/chirps', 
            data: data 
        })
        .then(function(response){
            $scope.message="";
            $scope.user="";
        });
    };
}]);
app.controller("HttpGetController",function($scope,$http,$location){
    console.log('i have been got')
        console.log('git clicked')
        $http.get('http://localhost:3000/api/chirps')
            .then(function(response){
                console.log(response.data)
                $scope.chirps=response.data
    });
        $scope.getId=function(id){
            console.log(id)
          //  console.log('clicked')
            $location.path("/single/" + id)
        };


});
app.controller("SingleController",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
     var id=$routeParams.id;
    $http.get('http://localhost:3000/api/chirps/'+id)
        .then(function(response){
        console.log(response)
        $scope.single=response.data
    });
        $scope.removeItem=function(){
        console.log('delete clicked')
    var data=({
        user : $scope.user,
        message : $scope.message,
        id: $scope.id
    })
        $http.delete('http://localhost:3000/api/chirps/'+id)
    .then(function(response){
        console.log(response.data)
    })
    }
}]);
//]

    //    $scope.removeItem=function(item){
    //         console.log('deleted')
    //         var index=$scope.chirps.indexOf(item);
    //         $scope.chirps.splice(index,1)
    //     }






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