'use strict';

// 异步
function sleep(ms = 0) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function test() {
    for (let i = 0; i < 10; i++) {
        await sleep(500);
        console.log(`i=${i}`);
    }
}

test().then(() => console.log('done'));

// 1.箭头
var fn = (v => console.log(v));
fn('1.箭头函数')



//类的定义
class Animal {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is ' + this.name);
    }
}
//类的继承
class Programmer extends Animal {
    constructor(name) {
        //直接调用父类构造器进行初始化
        super(name);
    }
    program() {
        console.log("I'm coding...");
    }
}
//测试我们的类
var animal = new Animal('dummy'),
    wayou = new Programmer('wayou');
animal.sayName(); //输出 ‘My name is dummy’
wayou.sayName(); //输出 ‘My name is wayou’
wayou.program(); //输出 ‘I'm coding...’



//通过对象字面量创建对象
var human = {
    breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
};
human.breathe(); //输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe(); //输出 ‘breathing...’


//产生一个随机数
var num = Math.random();
console.log(`your num is ${num}`);


var [name, gender, age] = ['wayou', 'male', 'secrect']; //数组解构
console.log('name:' + name + ', age:' + age); //输出： name:wayou, age:secrect



function sayHello(age, name = 'dude') {
    console.log(`Hello ${name}`);
}
sayHello(12);



//将所有参数相加的函数
function add(...x) {
    return x.reduce((m, n) => m + n);
}
//传递任意个数的参数
console.log(add(1, 2, 3)); //输出：6
console.log(add(1, 2, 3, 4, 5)); //输出：15




var people = ['Wayou', 'John', 'Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1, people2, people3) {
    console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people); //输出：Hello Wayou,John,Sherlock

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null, people); //输出：Hello Wayou,John,Sherlock




var someArray = ["a", "b", "c"];

for (var v of someArray) {
    console.log(v); //输出 a,b,c
}




function * foo() {};
var bar = foo();
bar.next(); // Object {value: undefined, done: true}



const items = [1, 2, 3];
const itemsCopy = [...items];