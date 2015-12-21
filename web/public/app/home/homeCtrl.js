mixeet.controller('homeCtrl', function($scope, $timeout, $http, $rootScope, geolocation, access){
	
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
	var geocoder;
	$scope.init = function(){
		geocoder = new google.maps.Geocoder();	
			
	}	
	
	$scope.locationExtended = false;
	$scope.climateExtended = false;
	$scope.friendsExtended = false;

/*	$scope.modifyLocation = function(loc){
		$http.post("/users/location",{
				email:$scope.usr.email, 
				name:$scope.usr.name,
				image:$scope.usr.image,
				location:loc
		}).success(function(res){
				console.log(res);
		}).error(function(error){
				//can be a validation error, a 'email already in use' error or a server error...
				console.log(error)			
		});
	}*/

	$scope.signout = function(){
		localStorage.removeItem("auth");	
		window.location = "/landing";
	}

	$scope.captureUserLocation = function() {
	    geolocation.getCurrentPosition()
	    	.then(
	    		function(result){
	    			$scope.lat = result.coords.latitude;
					$scope.lng = result.coords.longitude;

					var a = parseFloat(result.coords.latitude);
					var b = parseFloat(result.coords.longitude);

					var latlng = {lat: a, lng: b};
					geocoder.geocode({'location': latlng}, function(results, status) {
						if (status === google.maps.GeocoderStatus.OK) {
							//$scope.shit = results[1].address_components[1].long_name;
							//document.getElementById('city').innerHTML = results[1].address_components[1].long_name;
							//document.getElementById('cityPhrase').className = "isVisible";

							//document.getElementById('notCityPhrase').className = "notVisible";
							//$scope.modifyLocation(results[1].address_components[1].long_name);
							var loc = results[1].address_components[1].long_name;
							$scope.usr.location = loc;
							access.authPost("/users/location/new", {location:loc}, function(res){
								
								}, function(err){
									localStorage.removeItem("auth");	
									window.location = "/landing";
							});
							
						}
						else console.log('Geocode was not successful for the following reason: ' + status);
					
					});
	    		},
	    		function(error){
	    			console.log(error);
	    		}
	   	);

	}






	$(document).ready(function(){
    $('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	  });
        

	


});