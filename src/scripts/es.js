var o = (function () {
    var person = {
        name: 'vin',
        age: 24
    };
    console.log('1')
    return {
    	run(k){
    		console.log('3')
    		return person[k]
    	}
    };
})()
console.log('2')
console.log(o.run('name'))

// Test
function TestFn() {}

// factory(x)(arr)

TestFn.prototype.assertEquals = function (fn, val) {
    // console.log((fn === val) + ' = ' + fn);
    console.log((fn === val));
};
const Test = new TestFn();

// Test.assertSimilar(crossProduct([1, 0, 0], [0, 1, 0]), [0, 0, 1]);
// Test.assertSimilar(crossProduct([3, 2, 1], [1, 2, 3]), [4, -8, 4]);
