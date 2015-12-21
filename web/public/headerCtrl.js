mixeet.controller('headerCtrl', function($scope, access){

	/* GO TO LOCATION */
	$scope.goTo = function(page){
		window.location = "/"+page;
	}

	/* WHICH SECTION IS SELECTED? */
	$scope.sectionSelected = "My Profile";
	$scope.sectionConcreteSelected = '';


	$scope.profileSelected = true;
	$scope.collectionSelected = false;
	$scope.eventsSelected = false;
	$scope.achievementsSelected = false;

	$scope.listsSelected = false;
	$scope.genresSelected = false;
	$scope.artistsSelected = false;
	$scope.alphaSelected = false;

	$scope.allSelected = false;
	$scope.friendSelected = false;
	$scope.favoriteSelected = false;

	$scope.allfalseC = function(){
		$scope.listsSelected = false; $scope.genresSelected = false; $scope.artistsSelected = false; $scope.alphaSelected = false;
	}

	$scope.allfalseE = function(){
		$scope.allSelected = false; $scope.friendSelected = false; $scope.favoriteSelected = false;
	}

	$scope.pulseLogo = function(){
		$('#pulse-logo').addClass('animated pulse');
		
	}



	$scope.selectConcreteSection = function(name){
		if(name == 'lists'){
			$scope.sectionConcreteSelected = 'My Lists';
			$scope.listsSelected = true;

			$scope.genresSelected = false;
			$scope.artistsSelected = false;
			$scope.alphaSelected = false;
		}
		else if(name == 'genres'){
			$scope.sectionConcreteSelected = 'Genres';
			$scope.genresSelected = true;

			$scope.listsSelected = false;
			$scope.artistsSelected = false;
			$scope.alphaSelected = false;
		}
		else if(name == 'artists'){
			$scope.sectionConcreteSelected = 'Artists';
			$scope.artistsSelected = true;

			$scope.listsSelected = false;
			$scope.genresSelected = false;
			$scope.alphaSelected = false;
		}
		else if(name == 'alpha'){
			$scope.sectionConcreteSelected = 'Alphabetical';
			$scope.alphaSelected = true;

			$scope.listsSelected = false;
			$scope.genresSelected = false;
			$scope.artistsSelected = false;
		}
		else if(name == 'all'){
			$scope.sectionConcreteSelected = 'All';
			$scope.allSelected = true;

			$scope.friendSelected = false;
			$scope.favoriteSelected = false;
		}
		else if(name == 'friends'){
			$scope.sectionConcreteSelected = 'Friends';
			$scope.friendSelected = true;

			$scope.allSelected = false;
			$scope.favoriteSelected = false;
		}
		else if(name == 'favorites'){
			$scope.sectionConcreteSelected = 'Favorites';
			$scope.favoriteSelected = true;

			$scope.friendSelected = false;
			$scope.allSelected = false;
		}
	}

	$scope.selectSection = function(name){
		if(name == 'myprofile'){
			$scope.sectionSelected = "My Profile";
			$scope.profileSelected = true;

			$scope.allfalseC();
			$scope.allfalseE();

			$scope.achievementsSelected = false;
			$scope.collectionSelected = false;
			$scope.eventsSelected = false;
			$scope.listsSelected = false;
		}
		else if(name == 'myachievements'){
			$scope.sectionSelected = "My Achievements";
			$scope.achievementsSelected = true;

			$scope.allfalseC();
			$scope.allfalseE();

			$scope.profileSelected = false;
			$scope.collectionSelected = false;
			$scope.eventsSelected = false;
			$scope.listsSelected = false;

			
		}
		else if(name == 'mycollections'){
			$scope.sectionSelected = "My Collection";
			$scope.collectionSelected = true;

			$scope.allfalseE();

			$scope.profileSelected = false;
			$scope.achievementsSelected = false;
			$scope.eventsSelected = false;
		}
		else if(name == "myevents"){
			$scope.sectionSelected = "My Events";
			$scope.eventsSelected = true;

			$scope.allfalseC();

			$scope.profileSelected = false;
			$scope.achievementsSelected = false;
			$scope.collectionSelected = false;
			$scope.listsSelected = false;
		}
	}

	
	// OBTENCIÓN DE DATOS DEL USUARIO (NOMBRE, EMAIL E IMAGEN)

	access.authGet("/users/me", function(res){
			$scope.usr = res;
			//OBTENER SOLO EL NOMBRE, SIN APELLIDOS
			var res = $scope.usr.name.split(" ");
			$scope.usrname = res[0];
		}, function(err){
			localStorage.removeItem("auth");	
			window.location = "/landing";
		});


});