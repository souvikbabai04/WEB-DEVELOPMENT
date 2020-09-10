var app=angular.module("/myApp",["ngRoute"])

app.controller("/myController",function($scope){
	$scope.fname=""
	$scope.lname=""
})
app.config(function($routeProvider)
		{
	$routeProvider
	.when("/java",{
		template:`HEllo Souvik`
	})
	.when("/c",{
		template:`Hello Suravi`
	})
	.otherwise("/",{
		templates:`Something Selet`
	})
		})