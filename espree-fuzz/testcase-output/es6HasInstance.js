//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "change Symbol.hasInstance property of a normal function constructor",
        o4: function() {
            var o5 = function (o6, o7) {
                this.o8 = o6;
                this.o9 = o7;
            }
            var o10 = 0;
            
            Object.defineProperty(o5, Symbol.hasInstance, {
                value: function () {
                    o10++;
                    return true;
                }
            });
            
            o16.o17(true, undefined instanceof o5, "undefined instanceof F");
            o16.o17(1, o10, "Symbol.hasInstance in a normal function contructor - checked==1");
            o16.o17(true, null instanceof o5, "null instanceof F");
            o16.o17(2, o10, "Symbol.hasInstance in a normal function contructor - checked==2");
            o16.o17(true, true instanceof o5, "true instanceof F");
            o16.o17(3, o10, "Symbol.hasInstance in a normal function contructor - checked==3");
            o16.o17(true, false instanceof o5, "false instanceof F");
            o16.o17(4, o10, "Symbol.hasInstance in a normal function contructor - checked==4");
            o16.o17(true, 0 instanceof o5, "0 instanceof F");
            o16.o17(5, o10, "Symbol.hasInstance in a normal function contructor - checked==5");
            o16.o17(true, 1.5e16 instanceof o5, "1.5e16 instanceof F");
            o16.o17(6, o10, "Symbol.hasInstance in a normal function contructor - checked==6");
            o16.o17(true, NaN instanceof o5, "NaN instanceof F");
            o16.o17(7, o10, "Symbol.hasInstance in a normal function contructor - checked==7");
            o16.o17(true, '' instanceof o5, "'' instanceof F");
            o16.o17(8, o10, "Symbol.hasInstance in a normal function contructor - checked==8");
            o16.o17(true, 'abc' instanceof o5, "'abc' instanceof F");
            o16.o17(9, o10, "Symbol.hasInstance in a normal function contructor - checked==9");
            o16.o17(true, {} instanceof o5, "{} instanceof F");
            o16.o17(10, o10, "Symbol.hasInstance in a normal function contructor - checked==10");
            o16.o17(true, function(){} instanceof o5, "function(){} instanceof F");
            o16.o17(11, o10, "Symbol.hasInstance in a normal function contructor - checked==11");
        }
    },
    {
        name: "change Symbol.hasInstance property of a non-function objects",
        o4: function() {
            [
                {},
                {0:1,"length":1},
                [],
                [0,1,2],
                ['abc'],
            ].forEach(function(o21) {
                o22(o21);
            });
            
            function o22(o23) {
                var o10 = 0;
                
                var o24 = o23[Symbol.hasInstance];
                o23[Symbol.hasInstance] = function() {
                    o10++;
                    return true;
                };
                o25(o23);
                o23[Symbol.hasInstance] = o24;
                
                o10 = 0;
                var o26 = Object.getOwnPropertyDescriptor(o23, Symbol.hasInstance);
                Object.defineProperty(o23, Symbol.hasInstance, {
                    value: function () {
                        o10++;
                        return true;
                    }
                });
                o25(o23);
                Object.defineProperty(o23, Symbol.hasInstance, o26);

                function o25(o23) {
                    o16.o17(true, undefined instanceof o23, "undefined instanceof O");
                    o16.o17(1, o10, "Symbol.hasInstance in a non-function object - checked==1");
                    o16.o17(true, null instanceof o23, "null instanceof O");
                    o16.o17(2, o10, "Symbol.hasInstance in a non-function object - checked==2");
                    o16.o17(true, true instanceof o23, "true instanceof O");
                    o16.o17(3, o10, "Symbol.hasInstance in a non-function object - checked==3");
                    o16.o17(true, false instanceof o23, "false instanceof O");
                    o16.o17(4, o10, "Symbol.hasInstance in a non-function object - checked==4");
                    o16.o17(true, 0 instanceof o23, "0 instanceof O");
                    o16.o17(5, o10, "Symbol.hasInstance in a non-function object - checked==5");
                    o16.o17(true, 1.5e16 instanceof o23, "1.5e16 instanceof O");
                    o16.o17(6, o10, "Symbol.hasInstance in a non-function object - checked==6");
                    o16.o17(true, NaN instanceof o23, "NaN instanceof O");
                    o16.o17(7, o10, "Symbol.hasInstance in a non-function object - checked==7");
                    o16.o17(true, '' instanceof o23, "'' instanceof O");
                    o16.o17(8, o10, "Symbol.hasInstance in a non-function object - checked==8");
                    o16.o17(true, 'abc' instanceof o23, "'abc' instanceof O");
                    o16.o17(9, o10, "Symbol.hasInstance in a non-function object - checked==9");
                    o16.o17(true, {} instanceof o23, "{} instanceof O");
                    o16.o17(10, o10, "Symbol.hasInstance in a non-function object - checked==10");
                    o16.o17(true, function(){} instanceof o23, "function(){} instanceof O");
                    o16.o17(11, o10, "Symbol.hasInstance in a non-function object - checked==11");
                }
            }
        }
    },
    {
        name: "change Symbol.hasInstance property of a bound function constructor",
        o4: function() {
            var o5 = function (o6, o7) {
                this.o8 = o6;
                this.o9 = o7;
            }
            var o28 = o5.bind(1,2);
            var o10 = 0;
            
            Object.defineProperty(o5, Symbol.hasInstance, {
                value: function () {
                    o10++;
                    return true;
                }
            });
            
            o16.o17(true, o28 instanceof o5, "BoundF instanceof F");
            o16.o17(1, o10, "Symbol.hasInstance in a function contructor bound - checked==1");
            o16.o17(true, Object.create(o28) instanceof o5, "Object.create(BoundF) instanceof f");
            o16.o17(2, o10, "Symbol.hasInstance in a function contructor bound - checked==2");
            o16.o17(true, new o28() instanceof o5, "new BoundF() instanceof F");
            o16.o17(3, o10, "Symbol.hasInstance in a function contructor bound - checked==3");
            o16.o17(true, Object.create(o5.prototype) instanceof o28, "Object.create(F.prototype) instanceof F");
            o16.o17(true, new o5() instanceof o28, "instanceof f");
        }
    },
    {
        name: "change Symbol.hasInstance property of a proxy of function constructor",
        o4: function() {
            function o32() { };
            var o10 = 0;
            var o33 = [];
            
            Object.defineProperty(o32, Symbol.hasInstance, {
                value: function () {
                    o10++;
                    return false;
                }
            });
            
            var o34 = new Proxy(o32, {
                get : function (target, o38){
                    o33.push(o38.toString());
                    return Reflect.get(target, o38);
                }
            });

            o16.o17(false, new o34() instanceof o34, "new ProxyFoo() instanceof ProxyFoo");
            o16.o17(1, o10, "Symbol.hasInstance in a function contructor through proxy - checked==1");
            o16.o17(['Symbol(Symbol.hasInstance)'], o33, "checkedString==['Symbol(Symbol.hasInstance)']");
            o16.o17(false, new o34() instanceof o32, "new ProxyFoo() instanceof Foo");
            o16.o17(2, o10, "Symbol.hasInstance in a function contructor through proxy - checked==2");
        }
    },
    {
        name: "change Symbol.hasInstance property of a bound proxy of function constructor",
        o4: function() {
            function o32() { };
            var o10 = 0;
            var o33 = [];
            
            Object.defineProperty(o32, Symbol.hasInstance, {
                value: function () {
                    o10++;
                    return false;
                }
            });
            
            var o34 = new Proxy(o32, {
                get : function (target, o38){
                    o33.push(o38.toString());
                    return Reflect.get(target, o38);
                }
            });

            var o42 = o34.bind();
            
            o16.o17(false, o42 instanceof o34, "BP instanceof ProxyFoo");
            o16.o17(1, o10, "Symbol.hasInstance in a function contructor through bound proxy - checked==1");
            o16.o17(['bind','length','name','Symbol(Symbol.hasInstance)'], o33, "checkedString value");
        }
    },
    {
        name: "instanceof operator and default instOfHandler gets 'prototype' property of right-hand side",
        o4: function() {
            [
                undefined,
                null,
                true,
                false,
                'string',
                Symbol(),
                0,
            ].forEach(function(o21) {
                o22(o21, function(){});
            });
            
            function o22(o43, o23) {
                o23.prototype = o43;
                
                o16.o44(()=>{({}) instanceof o23}, o45, "({}) instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{({0:1,"length":1}) instanceof o23}, o45, "({0:1,\"length\":1}) instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{[] instanceof o23}, o45, "[] instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{[0,1,2] instanceof o23}, o45, "[0,1,2] instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{['abc'] instanceof o23}, o45, "['abc'] instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{(function(){}) instanceof o23}, o45, "(function(){}) instanceof O", "Function does not have a valid prototype object");

                o16.o44(()=>{o23[Symbol.hasInstance]({})}, o45, "O[Symbol.hasInstance]({})", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance]({0:1,"length":1})}, o45, "O[Symbol.hasInstance]({0:1,\"length\":1})", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance]([])}, o45, "O[Symbol.hasInstance]([])", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance]([0,1,2])}, o45, "O[Symbol.hasInstance]([0,1,2])", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance](['abc'])}, o45, "O[Symbol.hasInstance](['abc'])", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance](function(){})}, o45, "O[Symbol.hasInstance](function(){})", "Function does not have a valid prototype object");
            }
        }
    },
    {
        name: "instanceof operator calling user-defined instOfHandler converts the return value to boolean using ToBoolean abstract operation",
        o4: function() {
            [
                [function() { return undefined; }, false],
                [function() { return null; }, false],
                [function() { return NaN; }, false],
                [function() { return 1; }, true],
                [function() { return 0; }, false],
                [function() { return ''; }, false],
                [function() { return 'abc'; }, true],
                [function() { return Symbol(); }, true],
                [function() { return {}; }, true],
            ].forEach(function(o21) {
                o22(o21[0], o21[1], {});
                o22(o21[0], o21[1], []);
            });
            
            function o22(o46, o47, o23) {
                o23[Symbol.hasInstance] = o46;
                o16.o17(o47, undefined instanceof o23, "undefined instanceof O");
                o16.o17(o47, null instanceof o23, "null instanceof O");
                o16.o17(o47, true instanceof o23, "true instanceof O");
                o16.o17(o47, false instanceof o23, "false instanceof O");
                o16.o17(o47, 0 instanceof o23, "0 instanceof O");
                o16.o17(o47, 1.5e16 instanceof o23, "1.5e16 instanceof O");
                o16.o17(o47, NaN instanceof o23, "NaN instanceof O");
                o16.o17(o47, '' instanceof o23, "'' instanceof O");
                o16.o17(o47, 'abc' instanceof o23, "'abc' instanceof O");
                o16.o17(o47, {} instanceof o23, "{} instanceof O");
                o16.o17(o47, function(){} instanceof o23, "function(){} instanceof O");
            }
        }
    },
    {
        name: "instanceof operator calling OrdinaryHasInstance abstract operation returns false on non-object left-hand side values",
        o4: function() {
            var o5 = function() {};
            [
                undefined,
                null,
                true,
                false,
                '',
                'abc',
                Symbol(),
                Symbol('abc'),
                0,
                1.5e16,
                NaN,
            ].forEach(function(o21) {
                o16.o48(o21 instanceof o5, typeof(o21) == ('symbol' ? 'Symbol' : o21) + " instanceof F");
            });
        }
    },
    {
        name: "properties of Function.prototype[Symbol.hasInstance]",
        o4: function() {
            var o26 = Object.getOwnPropertyDescriptor(Function.prototype, Symbol.hasInstance);
            o16.o17(false, o26.enumerable, "protype:enumerable==false");
            o16.o17(false, o26.writable, "protype:writable==false");
            o16.o17(false, o26.configurable, "protype:configurable==false");
            
            var o53 = Function.prototype[Symbol.hasInstance];
            
            o16.o17(1, o53.length, "Function.prototype[Symbol.hasInstance].length==1");
            o26 = Object.getOwnPropertyDescriptor(o53, 'length');
            o16.o17(false, o26.enumerable, "length:enumerable==false");
            o16.o17(false, o26.writable, "length:enumerable==false");
            o16.o17(true, o26.configurable, "length:enumerable==true");
            
            o16.o17('[Symbol.hasInstance]', o53.name, "Function.prototype[Symbol.hasInstance].name");
            o26 = Object.getOwnPropertyDescriptor(o53, 'name');
            o16.o17(false, o26.enumerable, "name:enumerable==false");
            o16.o17(false, o26.writable, "name:writable==false");
            o16.o17(true, o26.configurable, "name:configurable==true");
            
            o16.o17(false, o53.call(), "Function.prototype[Symbol.hasInstance].call()");
            o16.o17(false, o53.call({}), "Function.prototype[Symbol.hasInstance].call({})");
        }
    },
    {
        name: "instanceof operator on callable object invokes get on 'prototype' property",
        o4: function() {
            // method 'F' has no 'prototype' property
            var o5 = Object.getOwnPropertyDescriptor({ get o53() {} }, 'f').get;
            Object.defineProperty(o5, 'prototype', {
                get: function() {
                    throw new Error('Hit prototype');
                }
            });
            o16.o44(()=>{undefined instanceof o5}, Error, "undefined instanceof F", 'Hit prototype');
        }
    },
    {
        name: "instanceof operator invokes [[getPrototypeOf]] internal method on left-hand side value",
        o4: function() {

            var o57 = new Proxy({}, {
                getPrototypeOf: function() {
                    throw new Error('Hit getPrototypeOf');
                }
            });
            var o59 = Object.create(o57);
            o59.prototype = {};
            var o5 = function() {};

            o16.o44(()=>{o57 instanceof o5}, Error, "p instanceof F", 'Hit getPrototypeOf');
            o16.o44(()=>{o59 instanceof o5}, Error, "obj instanceof F", 'Hit getPrototypeOf');
        }
    },
    {
        name: "changing Symbol.hasIstance property on a function contructor invalidates inline cache",
        o4: function() {
            var o5 = function() {}

            var o60 = function() {
                Object.defineProperty(o5, Symbol.hasInstance, {
                    value: function(o61) { return true; }
                });
            }

            function o62() {
                return 0 instanceof o5;
            }

            var o63 = false;
            for (var o64=0; o64<100; o64++) {
                var o8 = o62();
                o16.o17(o63, o8, "i=="+o64);
                if (o64==20) {
                    o60();
                    o63 = true;
                }
            }

        }
    },
    {
        name: "changing 'prototype' property on a function contructor invalidates inline cache",
        o4: function() {
            var o5 = function() {}

            var o60 = function() {
                Object.defineProperty(o5, 'prototype', {
                    value: Function.prototype
                });
            }

            function o62() {
                return function(){} instanceof o5;
            }

            var o63 = false;
            for (var o64=0; o64<100; o64++) {
                var o8 = o62();
                o16.o17(o63, o8, "i=="+o64);
                if (o64==20) {
                    o60();
                    o63 = true;
                }
            }

        }
    },
];

o65.o66(o2, { o67: o0.o68[0] != "summary" });

