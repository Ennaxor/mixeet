var webAppController = {};
var webAppFactory = {};

var mixeet = angular.module('mixeet', ['ui.router', 'ngResource'])
.controller(webAppController)
.factory(webAppFactory)

.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
	
	//$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);


	var getJSONLocal = function(key){
		var result = null;
		try{
			var json = localStorage[key];
			if(json !== undefined){
				result = JSON.parse(json);
			}
		}catch(e){

		}
		return result;
	}
	
	$stateProvider
		.state('landing', {
			url: "/landing",
			onEnter: function ($state) {
	            if (getJSONLocal("auth")) {
	               // $rootScope.go("app.home");
	               $state.go('app');
	            }
        	},
        	templateUrl: "app/landing/main.tpl.html",
			controller: "landingCtrl"
		})
		.state('app', {
			url: "/",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	               // $rootScope.go("landing");
	               $state.go('landing');
	            }
	        },
			templateUrl: "app/main.tpl.html",
			controller: "headerCtrl"
		})
		.state('app.home', {
			url: "home",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	               // $rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: 'app/home/main.tpl.html',
	                controller: 'homeCtrl'
	            	}
	        	}  
		})
		.state('app.collections', {
			url: "collections",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	                //$rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: 'app/collections/main.tpl.html',
	                controller: 'collectionsCtrl'
	            	}
	        	}  
		})
		.state('app.events', {
			url: "events",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	                //$rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: 'app/events/main.tpl.html',
	                controller: 'eventsCtrl'
	            	}
	        	}  
		})
		.state('app.achievements', {
			url: "achievements",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	                //$rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: 'app/achievements/main.tpl.html',
	                controller: 'achievementsCtrl'
	            	}
	        	}  
		});
		$urlRouterProvider.otherwise("/");
		$httpProvider.interceptors.push('interceptor');

})

.run(function ($rootScope, $state) {

    $rootScope.go = function (state, params) {
        $state.go(state, params);
    };
});

