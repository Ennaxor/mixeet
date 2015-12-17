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
	    });




});

