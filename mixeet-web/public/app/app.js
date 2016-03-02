var mixeet = angular.module('mixeet', ['ui.router']);

/* RUTAS ... */ 
mixeet.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	var static_path ="static/app";

	$urlRouterProvider.otherwise("/");
	
	$stateProvider
		.state('home', {   
	      url: "/",
	      templateUrl: static_path+"/home/main.tpl.html",
	      controller: 'homeCtrl'
	    })
		.state('landing', {   
	      url: "/landing"
	      //templateUrl: static_path+"/home/main.tpl.html",
	      //controller: 'landingCtrl'
	    })
		.state('collections', {
			url: "/collections",
	      	templateUrl: static_path+"/collections/main.tpl.html",
	      	controller: 'collectionsCtrl'
		})
		.state('events', {
			url: "/events",
	      	templateUrl: static_path+"/events/main.tpl.html",
	      	controller: 'eventsCtrl'
		})
		.state('achievements', {
			url: "/achievements",
	      	templateUrl: static_path+"/achievements/main.tpl.html",
	      	controller: 'achievementsCtrl'
		});




});

