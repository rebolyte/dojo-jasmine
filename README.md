# Unit testing with Dojo and Jasmine

### Configuration

`npm install` to get jasmine-node, the only dependency.

### Running

Open `tests/specRunner.html` to run the tests in the browser. Run `node tests/index` to run the tests under Node.

To add new tests, add your `*.specs.js` file to the spec folder, and add it to the dependencies in the `require` calls in specRunner.html and runner.js.

Thanks to [this repo](https://github.com/gsans/jasmine-require-bootstrap) and [this tutorial](http://www.bennadel.com/blog/2393-writing-my-first-unit-tests-with-jasmine-and-requirejs.htm) for how to get started in the browser. [This repo](https://github.com/geddski/amd-testing/blob/master/jasmine/js/runner.js) and [this page](http://rjzaworski.com/2012/07/testing-with-node-jasmine-and-require-js-part-ii) were helpful for getting things working on the Node side.