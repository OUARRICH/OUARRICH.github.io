'use strict';

var gitHubPagesApp = angular.module("gitHubPages",[
	"ngRoute",
    "gitHubPages.controllers"
]);

gitHubPagesApp.config(["$routeProvider", function($routeProvider){
		$routeProvider
		.when("/", {
			templateUrl: "/app/partials/home.html",
			controller: "HomeController"
		})
		.otherwise({
			redirectTo: "/"
		});

}]);