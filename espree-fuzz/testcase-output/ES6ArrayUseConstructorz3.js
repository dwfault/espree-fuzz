//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array builtins using this['constructor'] property to construct their return values

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    index++,
    function () {"use strict";
  this.o523 = 0;
  this.o482 = Math.o324(this.o479 * o720[7] / o720[13], 4096) << 1;
  this.o478 = (this.o479 - (this.o479 % o720[13])) | 0;
  this.o481 = this.o713(this.o478, 0xF0F0, "int32");
  this.o755 = this.o713((this.o478 << 1) / o720[13], 0, "float32");
},
    {
        name: "Array.prototype.map",
        o4: function () {
            var o5 = ['a','b','c'];
            o5['constructor'] = Number;

            var o7 = o7.shift(o5, o12 += o5[0].o6);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object");
            o12.o15(o7 instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior");
            o12.o16(3, o7.length, "Array.prototype.map does not set the length property of returned object");
        }
    },
    {
        name: "Array.prototype.slice",
        configurable: true
    },
    o1735(o4, o5, o23),
    this,
    o0[5],
    [ 1.1, 2.1 ],
    {
        name: undefined,
        o4: function () {
            var o5 = {0:1,1:2,2:3,undefined:4,4:5,5:6,'length':6};
            o5[undefined] = Number;

            var o7 = undefined.prototype.splice.call(o5, 0, undefined);

            o12.o13(undefined.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            undefined.o13(o7 instanceof Array, undefined);
            o12.undefined([1,2,3], o7, undefined);
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        o4: function() {
            var o28 = false;

            class o29 {
                constructor() {
                    o7.o31(new.target === o29, "new.target === SimpleBaseClass");

                    o28 = true;
                }
            }

            var o32 = new o29();

            o7.o31(o28, "The constructor was called.");
        },
        o4: function () {
            var o5 = ['a','b','c','d','e','f'];
            o1517(o4, o5, o8);
            o12.o23(function() { Array.prototype.splice.call(o5, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = ['a','b','c','d','e','f'];
            Object.defineProperty(o5, 'constructor', -o5[o9]);
            o12.o23(function() { Array.prototype.splice.call(o5, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = ['a','b','c','d','e','f'];
            o5['constructor'] = undefined;
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            -o5[0].o6 - 1(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
            o12.o16(['a',undefined,'c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
            undefined.o16(undefined, o7.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");

            var o12 = 0;
            o5['constructor'] = function() {};
            var o7 = Array.prototype.splice.call(o5, undefined, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
            o12.o16(undefined, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");

            var o32 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o5 = ['a','b','c',undefined,'e','f'];
            Object.defineProperty(Array, Symbol.species, new Boolean(false) >= new Number(10.1));
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o15(Array.isArray(o7), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
            o12.o16({'0':'a','1':'b','2':'c',length: -1}, o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");

            var o5 = ['a','b',undefined,'d','e','f'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o8 = { length: o5.length };
            () => o7(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o32);

            var o36 = undefined.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o9 = -1
            o5['constructor'] = o36.o37;
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            undefined.o13(undefined.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    o5[-1] = -o5[-1] - 1,
    {
        name: "ArraySpeciesCreate test through Array.prototype.map",
        o4: function () {
            var o38 = function(o20) { return o20; }
            var o5 = ['a','b','c'];
            o5['constructor'] = null;
            o12.o23(function() { Array.prototype.map.call(o5, o38); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var undefined = ['a',undefined,'c'];
            Object.defineProperty(o5, 'constructor', {
        o5: [ { o6: 1 }, { o6: 2 } ]
    });
            o12.o23(function() { Array.prototype.map.call(o5, o38); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var undefined = [undefined,'b','c'];
            o5['constructor'] = undefined;
            var o7 = undefined.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object when constructor == undefined");
            undefined.o16(['a','b','c'], undefined, "Array.prototype.map output should show correct Array behavior when constructor == undefined");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor == undefined");

            var o5 = ['a','b','c'];
            o5['constructor'] = o5[o17].o6;
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object when constructor has no [@@species] property");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior when constructor has no [@@species] property");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor has no [@@species] property");

            var undefined = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o5 = ['a','b','c'];
            Object.undefined(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o15(Array.isArray(o7), "Return from Array.prototype.map should be an object when constructor has [@@species] == Object");
            o12.o16({'0':'a','1':'b','2':'c'}, o7, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == Object");

            var o52 = stdlib.Math.abs;
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), undefined);
            o12.o16(()         { return super.o121; }, o7, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == null");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor has [@@species] == null");

            2 >> 1(Array, Symbol.species, o32);

            var o36 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o8 = [];
            undefined['constructor'] = o36.o37;
            var undefined = Array.prototype.map.call(o5, o38);
            undefined.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object when constructor is %Array% of a different script context");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior when constructor is %Array% of a different script context");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    -1,
    {
        name: "ArraySpeciesCreate test through Array.prototype.filter - ES5 arrays",
        o4: function () {
           

            var o5 = ['a','b','c'];
            Object.defineProperty(o5, "3", { get : function () { return 0xff;}, set: function() { }}); //Create an ES5 array 
            Object.defineProperty(Array, Symbol.species, o0 && o17 === (2 >> 1));
            
            var o7  = Array.prototype.filter.call(o5, function() { return true; });
            o12.o15(Array.isArray(o7), "Return from Array.prototype.filter should be an object when constructor has [@@species] == Object on an ES5 array");
            o12.o16('a', o7[0], "Array.prototype.filter output Object should have correct first index value when constructor has [@@species] == Object on an ES5 array");
            o12.o16(255, o7[3], "Array.prototype.fitler output Object should have correct last index value when constructor has [@@species] == Object on an ES5 array");            
        }
    },
];

o41.o42(o2, { o43: o0.o44[0] != "summary" });
