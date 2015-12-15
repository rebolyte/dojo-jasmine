define([], function(){

	function sayHello() {
		return 'Hello';
	}
	function sayGoodbye () {
		return 'Goodbye';
	}

	return {
		sayHello: sayHello,
		sayGoodbye: sayGoodbye
	};
});

