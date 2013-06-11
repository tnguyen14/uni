'use strict';

define(['angular'], function(angular) {
	return angular.module('uni', [])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
});
