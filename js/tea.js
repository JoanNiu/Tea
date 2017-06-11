/**
 * Created by bjwsl-001 on 2017/5/16.
 */
var app=angular.module("myApp",["ng","ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/start",{templateUrl:"tpl/start.html"})
        .when("/main",{templateUrl:"tpl/main.html",controller:"mainCtrl"})
        .when("/detail/:did",{templateUrl:"tpl/detail.html",controller:"detailCtrl"})
        .when("/order/:did",{templateUrl:"tpl/order.html",controller:"orderCtrl"})
        .when("/myorder/:phone",{templateUrl:"tpl/myorder.html",controller:"myorderCtrl"})
        .otherwise({redirectTo:"/start"});
});

//创建总控制器
app.controller("parentCtrl",["$scope","$location",function($scope,$location){
    $scope.jump=function(desPath){
        $location.path(desPath);
    };
}]);

//发送post请求的头部
app.run(function($http){
   $http.defaults.headers.post={
       "Content-Type":"application/x-www-form-urlencoded"
   }
});


//创建main页面的控制器
app.controller("mainCtrl",["$scope","$http",function($scope,$http){
    $scope.start=3;
    $http.get("data/main.php?start="+$scope.start).success(function(data){
        $scope.result=angular.fromJson(data);
        //console.log($scope.result);
    });
    $scope.more=function(){
        $scope.start+=3;
        $http.get("data/main.php?start="+$scope.start).success(function(data){
            $scope.result=angular.fromJson(data);
            //console.log($scope.result);
        });
    };
    $scope.search=function(){
        //console.log($scope.key);
        $http.get("data/main_search.php?kw="+$scope.key).success(function(data){
            $scope.result=angular.fromJson(data);
            //console.log($scope.result);
        });
    }
}]);
//创建detail页面的控制器
app.controller("detailCtrl",["$scope","$http","$routeParams",function($scope,$http,$routeParams){
    $scope.did=$routeParams.did;
    $http.get("data/detail.php?did="+$scope.did).success(function(data){
        $scope.result=angular.fromJson(data);
        console.log($scope.result);
        console.log($scope.result.did);
    });

}]);
//创建myorder页面的控制器
app.controller("myorderCtrl",["$scope","$http","$routeParams","$rootScope",function($scope,$http,$routeParams,$rootScope){
    $rootScope.phone=$routeParams.phone;
    console.log($rootScope.phone);
        $http.get("data/myorder.php?phone="+$scope.phone).success(function(data){
            $scope.result=angular.fromJson(data);
            console.log($scope.result);
        });
}]);
//创建order页面的控制器
app.controller("orderCtrl",["$scope","$routeParams","$http","$httpParamSerializer",function($scope,$routeParams,$http,$httpParamSerializer){
    $scope.did=$routeParams.did;
    console.log($scope.did);
    $scope.orderSubmit=function(){
        console.log($scope.did,$scope.gender,$scope.phone,$scope.uname,$scope.addr);
        $http.post("data/insert_order.php",$httpParamSerializer({
            did:$scope.did,
            gender:$scope.gender,
            phone:$scope.phone,
            user_name:$scope.uname,
            addr:$scope.addr
        })).success(function(data){
            $scope.result=angular.fromJson(data);
            console.log($scope.result);
        });
        $("#order").animate({height:0},300);
        $("#orderSuccess").css('display','block');
    };
}]);

//创建footer页面的控制器
app.controller("footerCtrl",["$scope",function($scope){

}]);