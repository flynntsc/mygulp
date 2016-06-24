var obj={"name":"咸鱼","age":"24","sex":"男"}
console.log(Array.from(obj));  //[]

console.log('test2')

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
