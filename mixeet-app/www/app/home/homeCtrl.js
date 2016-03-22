webAppController.homeCtrl = function($scope, $timeout, $http, $rootScope, geolocation, access){
	
	
	var geocoder;
	$scope.init = function(){
		geocoder = new google.maps.Geocoder();	
			
	}	
	
	$scope.locationExtended = false;
	$scope.climateExtended = false;
	$scope.friendsExtended = false;

	$scope.onEdit = false;

	$scope.editName = function(){
		$scope.onEdit = true;
		$scope.editableName = $scope.usr.name;
	}

	$scope.saveName = function(){
		$scope.onEdit = false;
		$scope.usr.name = $scope.editableName;

		access.authPost("/users/me/modify", {name:$scope.editableName}, function(res){	
			}, function(err){
				localStorage.removeItem("auth");	
				window.location = "/landing";
				console.log(err);
		});

	}

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
        

	


};