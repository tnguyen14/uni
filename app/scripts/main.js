/* global require */
/* global console:true */
'use strict';

require.config({
	paths: {
		angular: '../components/angular/angular',
		moment: '../components/moment/moment'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		moment: {
			exports: 'moment'
		}
	}
});

require(['angular', 'app', 'controllers/main'], function(angular){
	console = window.console || (console = { log: function(){} });
	angular.bootstrap(document,['uni']);
});