mixeet.controller('headerCtrl', function($scope){	

	/* IS THERE A GAMEJAM? */
	$scope.sectionSelected = "Profile";
	var sProfile = document.getElementById("s-profile");
	var sCollection = document.getElementById("s-collection");
	var sEvents = document.getElementById("s-events");
	var sAchievements = document.getElementById("s-achievements");


	$scope.selectSection = function(section){
		if(section == 'profile'){
			$scope.sectionSelected = "Profile";
			sProfile.className = "sidebar-brand sectionS";
			sCollection.className = "";
			sEvents.className = "";
			sAchievements.className = "";
		}		
		else if(section == 'mycollection'){
			$scope.sectionSelected = "My Collection";
			sCollection.className = "sectionS";
			sProfile.className = "sidebar-brand";
			sEvents.className = "";
			sAchievements.className = "";
		}
		else if(section == 'myevents'){
			$scope.sectionSelected = "My Past Events";
			sEvents.className = "sectionS";
			sProfile.className = "sidebar-brand";
			sCollection.className = "";
			sAchievements.className = "";
		}
		else if(section == 'achievements'){
			$scope.sectionSelected = "My Achievements";
			sAchievements.className = "sectionS";
			sProfile.className = "sidebar-brand";
			sCollection.className = "";
			sEvents.className = "";
		}


	}


});