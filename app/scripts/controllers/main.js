'use strict';

angular.module('uniApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$scope.transactions = [
		// storing currency as integer
		{date: new Date("Mon Jun 10 2013"), merchant: "Stop & Shop", item_desc: "Groceries", amount: 10123, type: "Groceries", source: "Reading Personal"},
		{date: new Date("Sun Jun 9 2013"), merchant: "Dunkin Donut", item_desc: "Coffee", amount: 354, type: "Dine Out", source: "Reading Business"}
	];
	});

function MainCtrl($scope) {



}