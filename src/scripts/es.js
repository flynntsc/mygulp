function pattern(n) {
    var output = '',
        nums = ''
    while(n) {
        nums += n
        output = num + (output ? '\n' : '') + output
        n--
    }
    return output
}

console.log(pattern(4))

// Test
function TestFn() {}

// factory(x)(arr)

TestFn.prototype.assertEquals = function (fn, val) {
    // console.log((fn === val) + ' = ' + fn)
    console.log((fn === val))
}
const Test = new TestFn()
