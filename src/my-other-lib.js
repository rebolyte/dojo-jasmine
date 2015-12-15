define(['dojo/_base/array'], function(arr) {

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

	return {
		beep: beep,
		boop: boop,
		testArr: testArr
	};
});

