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
		$scope.types = [
			{name: "Choose a type", value: ""},
			{name: "Credit Card", value: "credit-card"},
			{name: "Groceries", value: "groceries"},
			{name: "Gas", value: "gas"},
			{name: "Tax", value: "tax"},
			{name: "Insurance", value: "insurance"}
		];
		$scope.sources = [
			{name: "Choose a source", value: ""},
			{name: "Reading Business", value: "reading-business"},
			{name: "Reading Personal", value: "reading-personal"}
		];
		$scope.addTransaction = function() {
			// $scope.transactions.
		}
	});