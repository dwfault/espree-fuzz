//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "change Symbol.hasInstance property of a normal function constructor",
        o3: function() {
            var o4 = function (o5, o6) {
                this.o7 = o5;
                this.o8 = o6;
            }
            var o9 = 0;
            
            Object.defineProperty(o4, Symbol.hasInstance, {
                value: function () {
                    o9++;
                    return true;
                }
            });
            
            o10.o11(true, undefined instanceof o4, "undefined instanceof F");
            o10.o11(1, o9, "Symbol.hasInstance in a normal function contructor - checked==1");
            o10.o11(true, null instanceof o4, "null instanceof F");
            o10.o11(2, o9, "Symbol.hasInstance in a normal function contructor - checked==2");
            o10.o11(true, true instanceof o4, "true instanceof F");
            o10.o11(3, o9, "Symbol.hasInstance in a normal function contructor - checked==3");
            o10.o11(true, false instanceof o4, "false instanceof F");
            o10.o11(4, o9, "Symbol.hasInstance in a normal function contructor - checked==4");
            o10.o11(true, 0 instanceof o4, "0 instanceof F");
            o10.o11(5, o9, "Symbol.hasInstance in a normal function contructor - checked==5");
            o10.o11(true, 1.5e16 instanceof o4, "1.5e16 instanceof F");
            o10.o11(6, o9, "Symbol.hasInstance in a normal function contructor - checked==6");
            o10.o11(true, NaN instanceof o4, "NaN instanceof F");
            o10.o11(7, o9, "Symbol.hasInstance in a normal function contructor - checked==7");
            o10.o11(true, '' instanceof o4, "'' instanceof F");
            o10.o11(8, o9, "Symbol.hasInstance in a normal function contructor - checked==8");
            o10.o11(true, 'abc' instanceof o4, "'abc' instanceof F");
            o10.o11(9, o9, "Symbol.hasInstance in a normal function contructor - checked==9");
            o10.o11(true, {} instanceof o4, "{} instanceof F");
            o10.o11(10, o9, "Symbol.hasInstance in a normal function contructor - checked==10");
            o10.o11(true, function(){} instanceof o4, "function(){} instanceof F");
            o10.o11(11, o9, "Symbol.hasInstance in a normal function contructor - checked==11");
        }
    },
    {
        name: "change Symbol.hasInstance property of a non-function objects",
        o3: function() {
            [
                {},
                {0:1,"length":1},
                [],
                [0,1,2],
                ['abc'],
            ].forEach(function(o12) {
                o13(o12);
            });
            
            function o13(o14) {
                var o9 = 0;
                
                var o15 = o14[Symbol.hasInstance];
                o14[Symbol.hasInstance] = function() {
                    o9++;
                    return true;
                };
                o16(o14);
                o14[Symbol.hasInstance] = o15;
                
                o9 = 0;
                var o17 = Object.getOwnPropertyDescriptor(o14, Symbol.hasInstance);
                Object.defineProperty(o14, Symbol.hasInstance, {
                    value: function () {
                        o9++;
                        return true;
                    }
                });
                o16(o14);
                Object.defineProperty(o14, Symbol.hasInstance, o17);

                function o16(o14) {
                    o10.o11(true, undefined instanceof o14, "undefined instanceof O");
                    o10.o11(1, o9, "Symbol.hasInstance in a non-function object - checked==1");
                    o10.o11(true, null instanceof o14, "null instanceof O");
                    o10.o11(2, o9, "Symbol.hasInstance in a non-function object - checked==2");
                    o10.o11(true, true instanceof o14, "true instanceof O");
                    o10.o11(3, o9, "Symbol.hasInstance in a non-function object - checked==3");
                    o10.o11(true, false instanceof o14, "false instanceof O");
                    o10.o11(4, o9, "Symbol.hasInstance in a non-function object - checked==4");
                    o10.o11(true, 0 instanceof o14, "0 instanceof O");
                    o10.o11(5, o9, "Symbol.hasInstance in a non-function object - checked==5");
                    o10.o11(true, 1.5e16 instanceof o14, "1.5e16 instanceof O");
                    o10.o11(6, o9, "Symbol.hasInstance in a non-function object - checked==6");
                    o10.o11(true, NaN instanceof o14, "NaN instanceof O");
                    o10.o11(7, o9, "Symbol.hasInstance in a non-function object - checked==7");
                    o10.o11(true, '' instanceof o14, "'' instanceof O");
                    o10.o11(8, o9, "Symbol.hasInstance in a non-function object - checked==8");
                    o10.o11(true, 'abc' instanceof o14, "'abc' instanceof O");
                    o10.o11(9, o9, "Symbol.hasInstance in a non-function object - checked==9");
                    o10.o11(true, {} instanceof o14, "{} instanceof O");
                    o10.o11(10, o9, "Symbol.hasInstance in a non-function object - checked==10");
                    o10.o11(true, function(){} instanceof o14, "function(){} instanceof O");
                    o10.o11(11, o9, "Symbol.hasInstance in a non-function object - checked==11");
                }
            }
        }
    },
    {
        name: "change Symbol.hasInstance property of a bound function constructor",
        o3: function() {
            var o4 = function (o5, o6) {
                this.o7 = o5;
                this.o8 = o6;
            }
            var o18 = o4.bind(1,2);
            var o9 = 0;
            
            Object.defineProperty(o4, Symbol.hasInstance, {
                value: function () {
                    o9++;
                    return true;
                }
            });
            
            o10.o11(true, o18 instanceof o4, "BoundF instanceof F");
            o10.o11(1, o9, "Symbol.hasInstance in a function contructor bound - checked==1");
            o10.o11(true, Object.create(o18) instanceof o4, "Object.create(BoundF) instanceof f");
            o10.o11(2, o9, "Symbol.hasInstance in a function contructor bound - checked==2");
            o10.o11(true, new o18() instanceof o4, "new BoundF() instanceof F");
            o10.o11(3, o9, "Symbol.hasInstance in a function contructor bound - checked==3");
            o10.o11(true, Object.create(o4.prototype) instanceof o18, "Object.create(F.prototype) instanceof F");
            o10.o11(true, new o4() instanceof o18, "instanceof f");
        }
    },
    {
        name: "change Symbol.hasInstance property of a proxy of function constructor",
        o3: function() {
            function o19() { };
            var o9 = 0;
            var o20 = [];
            
            Object.defineProperty(o19, Symbol.hasInstance, {
                value: function () {
                    o9++;
                    return false;
                }
            });
            
            var o21 = new Proxy(o19, {
                get : function (target, o22){
                    o20.push(o22.toString());
                    return Reflect.get(target, o22);
                }
            });

            o10.o11(false, new o21() instanceof o21, "new ProxyFoo() instanceof ProxyFoo");
            o10.o11(1, o9, "Symbol.hasInstance in a function contructor through proxy - checked==1");
            o10.o11(['Symbol(Symbol.hasInstance)'], o20, "checkedString==['Symbol(Symbol.hasInstance)']");
            o10.o11(false, new o21() instanceof o19, "new ProxyFoo() instanceof Foo");
            o10.o11(2, o9, "Symbol.hasInstance in a function contructor through proxy - checked==2");
        }
    },
    {
        name: "change Symbol.hasInstance property of a bound proxy of function constructor",
        o3: function() {
            function o19() { };
            var o9 = 0;
            var o20 = [];
            
            Object.defineProperty(o19, Symbol.hasInstance, {
                value: function () {
                    o9++;
                    return false;
                }
            });
            
            var o21 = new Proxy(o19, {
                get : function (target, o22){
                    o20.push(o22.toString());
                    return Reflect.get(target, o22);
                }
            });

            var o23 = o21.bind();
            
            o10.o11(false, o23 instanceof o21, "BP instanceof ProxyFoo");
            o10.o11(1, o9, "Symbol.hasInstance in a function contructor through bound proxy - checked==1");
            o10.o11(['bind','length','name','Symbol(Symbol.hasInstance)'], o20, "checkedString value");
        }
    },
    {
        name: "instanceof operator and default instOfHandler gets 'prototype' property of right-hand side",
        o3: function() {
            [
                undefined,
                null,
                true,
                false,
                'string',
                Symbol(),
                0,
            ].forEach(function(o12) {
                o13(o12, function(){});
            });
            
            function o13(o24, o14) {
                o14.prototype = o24;
                
                o10.o25(()=>{({}) instanceof o14}, o26, "({}) instanceof O", "Function does not have a valid prototype object");
                o10.o25(()=>{({0:1,"length":1}) instanceof o14}, o26, "({0:1,\"length\":1}) instanceof O", "Function does not have a valid prototype object");
                o10.o25(()=>{[] instanceof o14}, o26, "[] instanceof O", "Function does not have a valid prototype object");
                o10.o25(()=>{[0,1,2] instanceof o14}, o26, "[0,1,2] instanceof O", "Function does not have a valid prototype object");
                o10.o25(()=>{['abc'] instanceof o14}, o26, "['abc'] instanceof O", "Function does not have a valid prototype object");
                o10.o25(()=>{(function(){}) instanceof o14}, o26, "(function(){}) instanceof O", "Function does not have a valid prototype object");

                o10.o25(()=>{o14[Symbol.hasInstance]({})}, o26, "O[Symbol.hasInstance]({})", "Function does not have a valid prototype object");
                o10.o25(()=>{o14[Symbol.hasInstance]({0:1,"length":1})}, o26, "O[Symbol.hasInstance]({0:1,\"length\":1})", "Function does not have a valid prototype object");
                o10.o25(()=>{o14[Symbol.hasInstance]([])}, o26, "O[Symbol.hasInstance]([])", "Function does not have a valid prototype object");
                o10.o25(()=>{o14[Symbol.hasInstance]([0,1,2])}, o26, "O[Symbol.hasInstance]([0,1,2])", "Function does not have a valid prototype object");
                o10.o25(()=>{o14[Symbol.hasInstance](['abc'])}, o26, "O[Symbol.hasInstance](['abc'])", "Function does not have a valid prototype object");
                o10.o25(()=>{o14[Symbol.hasInstance](function(){})}, o26, "O[Symbol.hasInstance](function(){})", "Function does not have a valid prototype object");
            }
        }
    },
    {
        name: "instanceof operator calling user-defined instOfHandler converts the return value to boolean using ToBoolean abstract operation",
        o3: function() {
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
            ].forEach(function(o12) {
                o13(o12[0], o12[1], {});
                o13(o12[0], o12[1], []);
            });
            
            function o13(o27, o28, o14) {
                o14[Symbol.hasInstance] = o27;
                o10.o11(o28, undefined instanceof o14, "undefined instanceof O");
                o10.o11(o28, null instanceof o14, "null instanceof O");
                o10.o11(o28, true instanceof o14, "true instanceof O");
                o10.o11(o28, false instanceof o14, "false instanceof O");
                o10.o11(o28, 0 instanceof o14, "0 instanceof O");
                o10.o11(o28, 1.5e16 instanceof o14, "1.5e16 instanceof O");
                o10.o11(o28, NaN instanceof o14, "NaN instanceof O");
                o10.o11(o28, '' instanceof o14, "'' instanceof O");
                o10.o11(o28, 'abc' instanceof o14, "'abc' instanceof O");
                o10.o11(o28, {} instanceof o14, "{} instanceof O");
                o10.o11(o28, function(){} instanceof o14, "function(){} instanceof O");
            }
        }
    },
    {
        name: "instanceof operator calling OrdinaryHasInstance abstract operation returns false on non-object left-hand side values",
        o3: function() {
            var o4 = function() {};
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
            ].forEach(function(o12) {
                o10.o29(o12 instanceof o4, typeof(o12) == ('symbol' ? 'Symbol' : o12) + " instanceof F");
            });
        }
    },
    {
        name: "properties of Function.prototype[Symbol.hasInstance]",
        o3: function() {
            var o17 = Object.getOwnPropertyDescriptor(Function.prototype, Symbol.hasInstance);
            o10.o11(false, o17.enumerable, "protype:enumerable==false");
            o10.o11(false, o17.writable, "protype:writable==false");
            o10.o11(false, o17.configurable, "protype:configurable==false");
            
            var o30 = Function.prototype[Symbol.hasInstance];
            
            o10.o11(1, o30.length, "Function.prototype[Symbol.hasInstance].length==1");
            o17 = Object.getOwnPropertyDescriptor(o30, 'length');
            o10.o11(false, o17.enumerable, "length:enumerable==false");
            o10.o11(false, o17.writable, "length:enumerable==false");
            o10.o11(true, o17.configurable, "length:enumerable==true");
            
            o10.o11('[Symbol.hasInstance]', o30.name, "Function.prototype[Symbol.hasInstance].name");
            o17 = Object.getOwnPropertyDescriptor(o30, 'name');
            o10.o11(false, o17.enumerable, "name:enumerable==false");
            o10.o11(false, o17.writable, "name:writable==false");
            o10.o11(true, o17.configurable, "name:configurable==true");
            
            o10.o11(false, o30.call(), "Function.prototype[Symbol.hasInstance].call()");
            o10.o11(false, o30.call({}), "Function.prototype[Symbol.hasInstance].call({})");
        }
    },
    {
        name: "instanceof operator on callable object invokes get on 'prototype' property",
        o3: function() {
            // method 'F' has no 'prototype' property
            var o4 = Object.getOwnPropertyDescriptor({ get o30() {} }, 'f').get;
            Object.defineProperty(o4, 'prototype', {
                get: function() {
                    throw new Error('Hit prototype');
                }
            });
            o10.o25(()=>{undefined instanceof o4}, Error, "undefined instanceof F", 'Hit prototype');
        }
    },
    {
        name: "instanceof operator invokes [[getPrototypeOf]] internal method on left-hand side value",
        o3: function() {

            var o31 = new Proxy({}, {
                getPrototypeOf: function() {
                    throw new Error('Hit getPrototypeOf');
                }
            });
            var o32 = Object.create(o31);
            o32.prototype = {};
            var o4 = function() {};

            o10.o25(()=>{o31 instanceof o4}, Error, "p instanceof F", 'Hit getPrototypeOf');
            o10.o25(()=>{o32 instanceof o4}, Error, "obj instanceof F", 'Hit getPrototypeOf');
        }
    },
    {
        name: "changing Symbol.hasIstance property on a function contructor invalidates inline cache",
        o3: function() {
            var o4 = function() {}

            var o33 = function() {
                Object.defineProperty(o4, Symbol.hasInstance, {
                    value: function(o34) { return true; }
                });
            }

            function o35() {
                return 0 instanceof o4;
            }

            var o36 = false;
            for (var o37=0; o37<100; o37++) {
                var o7 = o35();
                o10.o11(o36, o7, "i=="+o37);
                if (o37==20) {
                    o33();
                    o36 = true;
                }
            }

        }
    },
    {
        name: "changing 'prototype' property on a function contructor invalidates inline cache",
        o3: function() {
            var o4 = function() {}

            var o33 = function() {
                Object.defineProperty(o4, 'prototype', {
                    value: Function.prototype
                });
            }

            function o35() {
                return function(){} instanceof o4;
            }

            var o36 = false;
            for (var o37=0; o37<100; o37++) {
                var o7 = o35();
                o10.o11(o36, o7, "i=="+o37);
                if (o37==20) {
                    o33();
                    o36 = true;
                }
            }

        }
    },
];

o38.o39(o2, { o40: o0.o41[0] != "summary" });

