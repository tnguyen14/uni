/* global define */
'use strict';

define(['app', 'moment'], function(app, moment) {
	return app.controller('MainCtrl', function ($scope) {
		$scope.transactions = [
		// storing currency as integer
			{
				date: moment('2013-06-10'),
				merchant: 'Stop & Shop',
				itemDesc: 'Groceries',
				amount: 10123,
				type: {
					name: 'Groceries',
					value: 'groceries'
				},
				source: {
					name: 'Reading Personal',
					value: 'reading-personal'
				}
			},{
				date: moment('Sun Jun 9 2013'),
				merchant: 'Dunkin Donut',
				itemDesc: 'Coffee',
				amount: 354,
				type: {
					name: 'Dine out',
					value: 'dine-out'
				},
				source: {
					name: 'Reading Business',
					value: 'reading-business'
				}
			}
		];
		$scope.types = [
			{name: 'Credit Card', value: 'credit-card'},
			{name: 'Groceries', value: 'groceries'},
			{name: 'Gas', value: 'gas'},
			{name: 'Tax', value: 'tax'},
			{name: 'Insurance', value: 'insurance'}
		];
		$scope.sources = [
			{name: 'Reading Business', value: 'reading-business'},
			{name: 'Reading Personal', value: 'reading-personal'}
		];
		$scope.addTransaction = function() {
			$scope.transactions.push({
				date: moment($scope.date),
				merchant: $scope.merchant,
				itemDesc: $scope.itemDesc,
				amount: $scope.amount*100,
				type: $scope.type,
				source: $scope.source
			});
		};
	});
});
