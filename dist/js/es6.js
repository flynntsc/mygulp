function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.es6 = mod.exports;
    }
})(this, function () {
    'use strict'

    // 异步
    ;

    var _marked = [foo].map(regeneratorRuntime.mark);

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = (function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                step("next");
            });
        };
    }

    function sleep() {
        var ms = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        return new Promise(function (resolve, reject) {
            return setTimeout(resolve, ms);
        });
    }

    var test = (function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i < 10)) {
                                _context.next = 8;
                                break;
                            }

                            _context.next = 4;
                            return sleep(500);

                        case 4:
                            console.log('i=' + i);

                        case 5:
                            i++;
                            _context.next = 1;
                            break;

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function test() {
            return ref.apply(this, arguments);
        };
    })();

    test().then(function () {
        return console.log('done');
    });

    // 1.箭头
    var fn = function fn(v) {
        return console.log(v);
    };
    fn('1.箭头函数');

    //类的定义

    var Animal = (function () {
        //ES6中新型构造器

        function Animal(name) {
            _classCallCheck(this, Animal);

            this.name = name;
        }
        //实例方法

        _createClass(Animal, [{
            key: 'sayName',
            value: function sayName() {
                console.log('My name is ' + this.name);
            }
        }]);

        return Animal;
    })();

    var Programmer = (function (_Animal) {
        _inherits(Programmer, _Animal);

        function Programmer(name) {
            _classCallCheck(this, Programmer);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Programmer).call(this, name));
        }

        _createClass(Programmer, [{
            key: 'program',
            value: function program() {
                console.log("I'm coding...");
            }
        }]);

        return Programmer;
    })(Animal);

    //测试我们的类
    var animal = new Animal('dummy'),
        wayou = new Programmer('wayou');
    animal.sayName(); //输出 ‘My name is dummy’
    wayou.sayName(); //输出 ‘My name is wayou’
    wayou.program(); //输出 ‘I'm coding...’

    //通过对象字面量创建对象
    var human = {
        breathe: function breathe() {
            console.log('breathing...');
        }
    };
    var worker = {
        __proto__: human, //设置此对象的原型为human,相当于继承human
        company: 'freelancer',
        work: function work() {
            console.log('working...');
        }
    };
    human.breathe(); //输出 ‘breathing...’
    //调用继承来的breathe方法
    worker.breathe(); //输出 ‘breathing...’

    //产生一个随机数
    var num = Math.random();
    console.log('your num is ' + num);

    var name = 'wayou';
    var gender = 'male';
    var age = 'secrect';
    //数组解构
    console.log('name:' + name + ', age:' + age); //输出： name:wayou, age:secrect

    function sayHello(age) {
        var name = arguments.length <= 1 || arguments[1] === undefined ? 'dude' : arguments[1];

        console.log('Hello ' + name);
    }
    sayHello(12);

    //将所有参数相加的函数
    function add() {
        for (var _len = arguments.length, x = Array(_len), _key = 0; _key < _len; _key++) {
            x[_key] = arguments[_key];
        }

        return x.reduce(function (m, n) {
            return m + n;
        });
    }
    //传递任意个数的参数
    console.log(add(1, 2, 3)); //输出：6
    console.log(add(1, 2, 3, 4, 5)); //输出：15

    var people = ['Wayou', 'John', 'Sherlock'];
    //sayHello函数本来接收三个单独的参数人妖，人二和人三
    function sayHello(people1, people2, people3) {
        console.log('Hello ' + people1 + ',' + people2 + ',' + people3);
    }
    //但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
    sayHello.apply(undefined, people); //输出：Hello Wayou,John,Sherlock

    //而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
    sayHello.apply(null, people); //输出：Hello Wayou,John,Sherlock

    var someArray = ["a", "b", "c"];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = someArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var v = _step.value;

            console.log(v); //输出 a,b,c
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    function foo() {
        return regeneratorRuntime.wrap(function foo$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _marked[0], this);
    };
    var bar = foo();
    bar.next(); // Object {value: undefined, done: true}

    var items = [1, 2, 3];
    var itemsCopy = [].concat(items);
});