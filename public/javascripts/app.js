"use strict";

// set up main angular module
const app = angular.module("bibletag", ["ui.router"]);

// configure client routes, controllers are bound within html partials
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: '/partials/search.html'
		})
	//if we load in erroneous route, go  back to base/catch-all route
	$urlRouterProvider.otherwise('/');
});
