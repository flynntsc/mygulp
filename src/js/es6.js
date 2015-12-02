let foo = 'outer';
let f = x => foo;

!function bar(func = f) {
	let foo = 'inner';
	console.log(func()); // outer
}();
alert('tan');