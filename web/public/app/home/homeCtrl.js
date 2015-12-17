mixeet.controller('homeCtrl', function($scope, $timeout, $http, $rootScope, access){
	
	/*var auth = JSON.parse(localStorage.getItem("auth"));
	$http.get("/users/me",
		{headers: {
			"authorization": "bearer "+auth.token
		}}).success(function(res){
			$scope.usr = res;
			
		}).error(function(err){
			localStorage.removeItem("auth");	
			window.location = "/landing";	
	});*/

	access.authGet("/users/me", function(res){
			$scope.usr = res;
		}, function(err){
			localStorage.removeItem("auth");	
			window.location = "/landing";
		});


});