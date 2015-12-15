define(['mylib/my-other-lib'], function(otherLib){

	describe('my-other-lib', function(){
		describe('beep', function(){
			it('should say beep', function(){
				expect(otherLib.beep()).toEqual('beep');
			});
		});
		describe('boop', function () {
			it('should say boop', function () {
				expect(otherLib.boop()).toEqual('boop');
			});
		});
		describe('testArr', function () {
			it('array.map should work', function () {
				expect(otherLib.testArr()).toEqual(['A', 'B', 'C', 'D']);
			});
		});
	});
	
});