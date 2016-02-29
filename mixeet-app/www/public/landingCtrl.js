mixeet.controller('landingCtrl', function($scope, $interval, $location, $state, $http, $rootScope){
	
	if($location.search().token){
		var auth = {token:$location.search().token};
		localStorage.setItem("auth", JSON.stringify(auth));
		//$state.go("home");
		window.location = "/";		
	}

	//CONTROLAR QUE NO ENTREN AQUI SI ESTAN LOGUEADOS
	if(localStorage.getItem("auth")){
		window.location = "/";
	}


	function signin(){
		window.location = "/users/signin";
	}

	$scope.signin = signin;

	

	$scope.suggestions = [
		{
			title: 'at a party with your friends a saturday night'
		},
		{
			title: 'at a romantic dinner with your couple'
		},
		{
			title: 'at your favorite restaurant with your family'
		},
		{
			title: 'when you wake up alone a monday morning'
		}
	];

	$scope.sugg1 = true;
	$scope.sugg2 = false;
	$scope.sugg3 = false;
	$scope.sugg4 = false;



	/* MOLTO SHIT */

	$interval(function(){
		if($scope.sugg1){
			$scope.sugg1 = false;
			$scope.sugg2 = true;
			$scope.sugg3 = false;
			$scope.sugg4 = false;
		} 
		else if($scope.sugg2){
			$scope.sugg1 = false;
			$scope.sugg2 = false;
			$scope.sugg3 = true;
			$scope.sugg4 = false;
		} 
		else if($scope.sugg3){
			$scope.sugg1 = false;
			$scope.sugg2 = false;
			$scope.sugg3 = false;
			$scope.sugg4 = true;
		} 
		else if($scope.sugg4){
			$scope.sugg1 = true;
			$scope.sugg2 = false;
			$scope.sugg3 = false;
			$scope.sugg4 = false;
		} 
	}, 3500);

	// SLIDER OPTIONS
	$(document).ready(function() {

	    $('.collapsible').collapsible();
	    $('.slider').slider({
	        full_width: false,
	        indicators: false
	    });
	    $('.materialboxed').materialbox();
	});


		


});