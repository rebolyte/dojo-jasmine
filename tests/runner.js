// https://github.com/geddski/amd-testing/blob/master/jasmine/js/runner.js
// http://rjzaworski.com/2012/07/testing-with-node-jasmine-and-require-js-part-ii

require([
	'dojo/node!jasmine-node', 
	'spec/my-library.specs',
	'spec/my-other-lib.specs'
], function(jasmine) {

	// map jasmine methods to global namespace
	for (key in jasmine) {
		if (jasmine[key] instanceof Function) {
			global[key] = jasmine[key];
		}
	}

	jasmine.getEnv().addReporter(new jasmine.TapReporter());
	// jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());
	jasmine.getEnv().execute();

    // console.log('Running');
});