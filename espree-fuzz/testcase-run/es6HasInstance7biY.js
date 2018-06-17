//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests

try {
o26.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    [],
    {
        name: "change Symbol.hasInstance property of a non-function objects",
        index: function() {
            try {
[
                {},
                {0:1,"length":1},
                [],
                [0,1,2],
                ['abc'],
            ].forEach(function(o12) {
                try {
o13(o12);
}catch(e){}
            });
}catch(e){}
            
            function o13(o14) {
                var o9 = 0;
                
                var o15 = o14[Symbol.hasInstance];
                try {
o14[Symbol.hasInstance] = function() {
                    try {
o9++;
}catch(e){}
                    try {
return true;
}catch(e){}
                };
}catch(e){}
                try {
o16(o14);
}catch(e){}
                try {
o14[Symbol.hasInstance] = o15;
}catch(e){}
                
                try {
o9 = 0;
}catch(e){}
                var o17 = Object.getOwnPropertyDescriptor(o14, Symbol.hasInstance);
                try {
Object.defineProperty(o14, Symbol.hasInstance, {
                    value: function () {
                        try {
o9++;
}catch(e){}
                        try {
return true;
}catch(e){}
                    }
                });
}catch(e){}
                try {
o16(o14);
}catch(e){}
                try {
Object.defineProperty(o14, Symbol.hasInstance, o17);
}catch(e){}

                function o16(o14) {
                    try {
o10.o11(true, undefined instanceof o14, "undefined instanceof O");
}catch(e){}
                    try {
o10.o11(1, o9, "Symbol.hasInstance in a non-function object - checked==1");
}catch(e){}
                    try {
o10.o11(true, null instanceof o14, "null instanceof O");
}catch(e){}
                    try {
o10.o11(2, o9, "Symbol.hasInstance in a non-function object - checked==2");
}catch(e){}
                    try {
o10.o11(true, true instanceof o14, "true instanceof O");
}catch(e){}
                    try {
o10.o11(3, o9, "Symbol.hasInstance in a non-function object - checked==3");
}catch(e){}
                    try {
o10.o11(true, false instanceof o14, "false instanceof O");
}catch(e){}
                    try {
o10.o11(4, o9, "Symbol.hasInstance in a non-function object - checked==4");
}catch(e){}
                    try {
o10.o11(true, 0 instanceof o14, "0 instanceof O");
}catch(e){}
                    try {
o10.o11(5, o9, "Symbol.hasInstance in a non-function object - checked==5");
}catch(e){}
                    try {
o10.o11(true, 1.5e16 instanceof o14, "1.5e16 instanceof O");
}catch(e){}
                    try {
o10.o11(6, o9, "Symbol.hasInstance in a non-function object - checked==6");
}catch(e){}
                    try {
o10.o11(true, NaN instanceof o14, "NaN instanceof O");
}catch(e){}
                    try {
o10.o11(7, o9, "Symbol.hasInstance in a non-function object - checked==7");
}catch(e){}
                    try {
o10.o11(true, '' instanceof o14, "'' instanceof O");
}catch(e){}
                    try {
o10.o11(8, o9, "Symbol.hasInstance in a non-function object - checked==8");
}catch(e){}
                    try {
o10.o11(true, 'abc' instanceof o14, "'abc' instanceof O");
}catch(e){}
                    try {
o10.o11(9, o9, "Symbol.hasInstance in a non-function object - checked==9");
}catch(e){}
                    try {
o10.o11(true, {} instanceof o14, "{} instanceof O");
}catch(e){}
                    try {
o10.o11(10, o9, "Symbol.hasInstance in a non-function object - checked==10");
}catch(e){}
                    try {
o10.o11(true, function(){} instanceof o14, "function(){} instanceof O");
}catch(e){}
                    try {
o10.o11(11, o9, "Symbol.hasInstance in a non-function object - checked==11");
}catch(e){}
                }
            }
        }
    },
    {
        name: "change Symbol.hasInstance property of a bound function constructor",
        o3: o119.length
    },
    {
        name: "change Symbol.hasInstance property of a proxy of function constructor",
        o3: function() {
            function o19() { }try {
;
}catch(e){}
            var o9 = 0;
            var o20 = [];
            
            try {
Object.defineProperty(o19, Symbol.hasInstance, {
                value: function () {
                    try {
o9++;
}catch(e){}
                    try {
return false;
}catch(e){}
                }
            });
}catch(e){}
            
            var o21 = new Proxy(o19, {
                get : function (e, o22){
                    try {
try { {} } catch(e) {}
}catch(e){}
                    try {
return Reflect.get(target, o22);
}catch(e){}
                }
            });

            try {
o10.o11(false, new o21() instanceof o21, "new ProxyFoo() instanceof ProxyFoo");
}catch(e){}
            try {
o10.o11(1, o9, "Symbol.hasInstance in a function contructor through proxy - checked==1");
}catch(e){}
            try {
o10.o11(['Symbol(Symbol.hasInstance)'], o20, "checkedString==['Symbol(Symbol.hasInstance)']");
}catch(e){}
            try {
o10.o11(false, new o21() instanceof o19, "new ProxyFoo() instanceof Foo");
}catch(e){}
            try {
o10.o11(2, o9, "Symbol.hasInstance in a function contructor through proxy - checked==2");
}catch(e){}
        }
    },
    function(resolve,reject) {
                    try {
reject('failure');
}catch(e){}
                },
    {
        name: "instanceof operator and default instOfHandler gets 'prototype' property of right-hand side",
        o3: function() {
            try {
[
                undefined,
                null,
                true,
                false,
                'string',
                Symbol(),
                0,
            ].forEach(function(o12) {
                try {
o13(o12, function(){});
}catch(e){}
            });
}catch(e){}
            
            function o13(o24, o14) {
                try {
o14.prototype = o24;
}catch(e){}
                
                try {
o10.o25(()=>{try {
({}) instanceof o14
}catch(e){}}, o26, "({}) instanceof O", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
({0:1,"length":1}) instanceof o14
}catch(e){}}, o26, "({0:1,\"length\":1}) instanceof O", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
[] instanceof o14
}catch(e){}}, o26, "[] instanceof O", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
[0,1,2] instanceof o14
}catch(e){}}, o26, "[0,1,2] instanceof O", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
['abc'] instanceof o14
}catch(e){}}, o26, "['abc'] instanceof O", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
(function(){}) instanceof o14
}catch(e){}}, o26, "(function(){}) instanceof O", "Function does not have a valid prototype object");
}catch(e){}

                try {
o10.o25(()=>{try {
o14[Symbol.hasInstance]({})
}catch(e){}}, o26, "O[Symbol.hasInstance]({})", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
o14[Symbol.hasInstance]({0:1,"length":1})
}catch(e){}}, o26, "O[Symbol.hasInstance]({0:1,\"length\":1})", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
o14[Symbol.hasInstance]([])
}catch(e){}}, o26, "O[Symbol.hasInstance]([])", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
o14[Symbol.hasInstance]([0,1,2])
}catch(e){}}, o26, "O[Symbol.hasInstance]([0,1,2])", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
o14[Symbol.hasInstance](['abc'])
}catch(e){}}, o26, "O[Symbol.hasInstance](['abc'])", "Function does not have a valid prototype object");
}catch(e){}
                try {
o10.o25(()=>{try {
o14[Symbol.hasInstance](function(){})
}catch(e){}}, o26, "O[Symbol.hasInstance](function(){})", "Function does not have a valid prototype object");
}catch(e){}
            }
        }
    },
    {
        name: "instanceof operator calling user-defined instOfHandler converts the return value to boolean using ToBoolean abstract operation",
        o3: function() {
            try {
[
                [function() { try {
return undefined;
}catch(e){} }, false],
                [function() { try {
return null;
}catch(e){} }, false],
                [function() { try {
return NaN;
}catch(e){} }, false],
                [function() { try {
return 1;
}catch(e){} }, true],
                [function() { try {
return 0;
}catch(e){} }, false],
                [function() { try {
return '';
}catch(e){} }, false],
                [function() { try {
return 'abc';
}catch(e){} }, true],
                [function() { try {
return Symbol();
}catch(e){} }, true],
                [function() { try {
return {};
}catch(e){} }, true],
            ].forEach(function(o12) {
                try {
o13(o12[0], o12[1], {});
}catch(e){}
                try {
o13(o12[0], o12[1], []);
}catch(e){}
            });
}catch(e){}
            
            function o13(o27, o28, o14) {
                try {
o14[Symbol.hasInstance] = o27;
}catch(e){}
                try {
o10.o11(o28, undefined instanceof o14, "undefined instanceof O");
}catch(e){}
                try {
o10.o11(o28, null instanceof o14, "null instanceof O");
}catch(e){}
                try {
o10.o11(o28, true instanceof o14, "true instanceof O");
}catch(e){}
                try {
o10.o11(o28, false instanceof o14, "false instanceof O");
}catch(e){}
                try {
o10.o11(o28, 0 instanceof o14, "0 instanceof O");
}catch(e){}
                try {
o10.o11(o28, 1.5e16 instanceof o14, "1.5e16 instanceof O");
}catch(e){}
                try {
o10.o11(o28, NaN instanceof o14, "NaN instanceof O");
}catch(e){}
                try {
o10.o11(o28, '' instanceof o14, "'' instanceof O");
}catch(e){}
                try {
o10.o11(o28, 'abc' instanceof o14, "'abc' instanceof O");
}catch(e){}
                try {
o10.o11(o28, {} instanceof o14, "{} instanceof O");
}catch(e){}
                try {
o10.o11(o28, function(){} instanceof o14, "function(){} instanceof O");
}catch(e){}
            }
        }
    },
    {
        name: "instanceof operator calling OrdinaryHasInstance abstract operation returns false on non-object left-hand side values",
        o3: function() {
            var o4 = function() {};
            try {
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
                try {
o10.o29(o12 instanceof o4, typeof(o12) == ('symbol' ? 'Symbol' : o12) + " instanceof F");
}catch(e){}
            });
}catch(e){}
        }
    },
    {
        name: "properties of Function.prototype[Symbol.hasInstance]",
        o3: function() {
            var o17 = Object.getOwnPropertyDescriptor(Function.prototype, Symbol.hasInstance);
            try {
o10.o11(false, o17.enumerable, "protype:enumerable==false");
}catch(e){}
            try {
o10.o11(false, o17.writable, "protype:writable==false");
}catch(e){}
            try {
o10.o11(false, o17.configurable, "protype:configurable==false");
}catch(e){}
            
            var o30 = Function.prototype[Symbol.hasInstance];
            
            try {
o10.o11(1, o30.length, "Function.prototype[Symbol.hasInstance].length==1");
}catch(e){}
            try {
o17 = Object.getOwnPropertyDescriptor(o30, 'length');
}catch(e){}
            try {
o10.o11(false, o17.enumerable, "length:enumerable==false");
}catch(e){}
            try {
o10.o11(false, o17.writable, "length:enumerable==false");
}catch(e){}
            try {
o10.o11(true, o17.configurable, "length:enumerable==true");
}catch(e){}
            
            try {
o10.o11('[Symbol.hasInstance]', o30.name, "Function.prototype[Symbol.hasInstance].name");
}catch(e){}
            try {
o17 = Object.getOwnPropertyDescriptor(o30, 'name');
}catch(e){}
            try {
o10.o11(false, o17.enumerable, "name:enumerable==false");
}catch(e){}
            try {
o10.o11(false, o17.writable, "name:writable==false");
}catch(e){}
            try {
o10.o11(true, o17.configurable, "name:configurable==true");
}catch(e){}
            
            try {
o10.o11(false, o30.call(), "Function.prototype[Symbol.hasInstance].call()");
}catch(e){}
            try {
o10.o11(false, o30.call({}), "Function.prototype[Symbol.hasInstance].call({})");
}catch(e){}
        }
    },
    {
        name: "instanceof operator on callable object invokes get on 'prototype' property",
        o3: function() {
            // method 'F' has no 'prototype' property
            var o4 = Object.getOwnPropertyDescriptor({ get o30() {} }, 'f').get;
            try {
Object.defineProperty(o4, 'prototype', {
                get: function() {
                    try {
throw new Error('Hit prototype');
}catch(e){}
                }
            });
}catch(e){}
            try {
o10.o25(()=>{try {
undefined instanceof o4
}catch(e){}}, Error, "undefined instanceof F", 'Hit prototype');
}catch(e){}
        }
    },
    {
        name: "instanceof operator invokes [[getPrototypeOf]] internal method on left-hand side value",
        o3: function() {

            var o31 = new Proxy({}, {
                getPrototypeOf: function() {
                    try {
throw new Error('Hit getPrototypeOf');
}catch(e){}
                }
            });
            var o32 = Object.create(o31);
            try {
o32.prototype = {};
}catch(e){}
            var o4 = function() {};

            try {
o10.o25(()=>{try {
o31 instanceof o4
}catch(e){}}, Error, "p instanceof F", 'Hit getPrototypeOf');
}catch(e){}
            try {
o10.o25(()=>{try {
o32 instanceof o4
}catch(e){}}, Error, "obj instanceof F", 'Hit getPrototypeOf');
}catch(e){}
        }
    },
    {
        name: "changing Symbol.hasIstance property on a function contructor invalidates inline cache",
        o3: function() {
            var o4 = function() {}

            var o33 = function() {
                try {
Object.defineProperty(o4, Symbol.hasInstance, {
                    value: function(o34) { try {
return true;
}catch(e){} }
                });
}catch(e){}
            }

            function o35() {
                try {
return 0 instanceof o4;
}catch(e){}
            }

            var o36 = false;
            try {
for (var o37=0; o37<100; o37++) {
                var o7 = o35();
                try {
o10.o11(o36, o7, "i=="+o37);
}catch(e){}
                try {
if (o37==20) {
                    try {
o33();
}catch(e){}
                    try {
o36 = true;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

        }
    },
    {
        name: "changing 'prototype' property on a function contructor invalidates inline cache",
        o3: function() {
            var o4 = function() {}

            var o33 = function() {
                try {
Object.defineProperty(o4, 'prototype', {
                    value: Function.prototype
                });
}catch(e){}
            }

            function o35() {
                try {
return function(){} instanceof o4;
}catch(e){}
            }

            var o36 = false;
            try {
for (var o37=0; o37<100; o37++) {
                var o7 = o35();
                try {
o10.o11(o36, o7, "i=="+o37);
}catch(e){}
                try {
if (o37==20) {
                    try {
o33();
}catch(e){}
                    try {
o36 = true;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

        }
    },
];

try {
o38.o39(o2, Object.defineProperty(o10, o51, o52));
}catch(e){}

