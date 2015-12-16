define(['dojo/_base/array', 'dojo/Deferred'], function(arr, Deferred) {

	function beep() {
		return 'beep';
	}
	function boop () {
		return 'boop';
	}
	function testArr () {
		var a = ['a', 'b', 'c', 'd'];
		return arr.map(a, function (item) {
			return item.toUpperCase();
		});
	}
	function testDeferred () {
		var dfrd = new Deferred();
		setTimeout(function () {
			dfrd.resolve('completed');
		}, 1000);
		return dfrd.promise;
	}

	return {
		beep: beep,
		boop: boop,
		testArr: testArr,
		testDeferred: testDeferred
	};
});

