var tests = Object.keys(window.__karma__.files).filter(function (file) {
		return /\/base\/test\/spec\/.*\.js$/.test(file);
});
console.log(tests);

requirejs.config({
	// Karma serves files from '/base'
	baseUrl: '/base/scripts',

	paths: {
		angular: '../components/angular/angular',
		moment: '../components/moment/moment',
		app: 'app'
	},

	shim: {
		angular: {
			exports: 'angular'
		},
		moment: {
			exports: 'moment'
		}
	},

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});