//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array builtins using this['constructor'] property to construct their return values

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Array.prototype.concat",
        o4: function () {
            var o5 = ['a','b','c'];
            o5['constructor'] = Number;

            var o7 = Array.prototype.concat.call(o5, [1,2,3]);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.concat should be an Array object");
            o12.o15(o7 instanceof Number, "Return from Array.prototype.concat should not have been constructed from Number");
            o12.o16(['a','b','c',1,2,3], o7, "Array.prototype.concat output should show correct Array behavior");
            o12.o16(6, o7.length, "Array.prototype.concat sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.filter",
        o4: function () {
            var o5 = ['a','b','c'];
            o5['constructor'] = Number;

            var o7 = Array.prototype.filter.call(o5, function() { return true; });

            o12.o13(Array.isArray(o7), "Return from Array.prototype.filter should be an Array object");
            o12.o15(o7 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
            o12.o16(['a','b','c'], o7, "Array.prototype.filter output should show correct Array behavior");
            o12.o16(3, o7.length, "Array.prototype.filter does not set the length property of returned object");
        }
    },
    {
        name: "Array.prototype.map",
        o4: function () {
            var o5 = ['a','b','c'];
            o5['constructor'] = Number;

            var o7 = Array.prototype.map.call(o5, function(o20) { return o20; });

            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object");
            o12.o15(o7 instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior");
            o12.o16(3, o7.length, "Array.prototype.map does not set the length property of returned object");
        }
    },
    {
        name: "Array.prototype.slice",
        o4: function () {
            var o5 = ['a','b','c'];
            o5['constructor'] = Number;

            var o7 = Array.prototype.slice.call(o5);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.slice should be an Array object");
            o12.o15(o7 instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
            o12.o16(['a','b','c'], o7, "Array.prototype.slice output should show correct Array behavior");
            o12.o16(3, o7.length, "Array.prototype.slice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - array source with constructor property set to Number",
        o4: function () {
            var o5 = ['a','b','c','d','e','f'];
            o5['constructor'] = Number;

            var o7 = Array.prototype.splice.call(o5, 0, 3);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            o12.o15(o7 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - array source with constructor property set to Array",
        o4: function () {
            var o5 = [1,2,3,4,5,6];
            o5['constructor'] = Array;

            var o7 = Array.prototype.splice.call(o5, 0, 3);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            o12.o13(o7 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o12.o16([1,2,3], o7, "Array.prototype.splice output is correct");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - array source with no constructor property",
        o4: function () {
            var o5 = [1,2,3,4,5,6];

            var o7 = Array.prototype.splice.call(o5, 0, 3);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            o12.o13(o7 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o12.o16([1,2,3], o7, "Array.prototype.splice output is correct");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - object source with no constructor property",
        o4: function () {
            var o5 = {0:1,1:2,2:3,3:4,4:5,5:6,'length':6};

            var o7 = Array.prototype.splice.call(o5, 0, 3);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            o12.o13(o7 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o12.o16([1,2,3], o7, "Array.prototype.splice output is correct");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - object source with constructor property set to Number",
        o4: function () {
            var o5 = {0:1,1:2,2:3,3:4,4:5,5:6,'length':6};
            o5['constructor'] = Number;

            var o7 = Array.prototype.splice.call(o5, 0, 3);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            o12.o13(o7 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o12.o16([1,2,3], o7, "Array.prototype.splice output is correct");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.splice",
        o4: function () {
            var o5 = ['a','b','c','d','e','f'];
            o5['constructor'] = null;
            o12.o23(function() { Array.prototype.splice.call(o5, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = ['a','b','c','d','e','f'];
            Object.defineProperty(o5, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o12.o23(function() { Array.prototype.splice.call(o5, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = ['a','b','c','d','e','f'];
            o5['constructor'] = undefined;
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");

            var o5 = ['a','b','c','d','e','f'];
            o5['constructor'] = function() {};
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");

            var o32 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o5 = ['a','b','c','d','e','f'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o15(Array.isArray(o7), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
            o12.o16({'0':'a','1':'b','2':'c',"length":3}, o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");

            var o5 = ['a','b','c','d','e','f'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o32);

            var o36 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o5 = ['a','b','c','d','e','f'];
            o5['constructor'] = o36.o37;
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
            o12.o16(['a','b','c'], o7, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.splice - native arrays",
        o4: function () {
            var o5 = [1,2,3,4,5,6];
            o5['constructor'] = null;
            o12.o23(function() { Array.prototype.splice.call(o5, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = [1,2,3,4,5,6];
            Object.defineProperty(o5, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o12.o23(function() { Array.prototype.splice.call(o5, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = [1,2,3,4,5,6];
            o5['constructor'] = undefined;
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");

            var o5 = [1,2,3,4,5,6];
            o5['constructor'] = function() {};
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");

            var o32 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o5 = [1,2,3,4,5,6];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o15(Array.isArray(o7), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
            o12.o16({'0':1,'1':2,'2':3,"length":3}, o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");

            var o5 = [1,2,3,4,5,6];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o32);

            var o36 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o5 = [1,2,3,4,5,6];
            o5['constructor'] = o36.o37;
            var o7 = Array.prototype.splice.call(o5, 0, 3);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.map",
        o4: function () {
            var o38 = function(o20) { return o20; }
            var o5 = ['a','b','c'];
            o5['constructor'] = null;
            o12.o23(function() { Array.prototype.map.call(o5, o38); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = ['a','b','c'];
            Object.defineProperty(o5, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o12.o23(function() { Array.prototype.map.call(o5, o38); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = ['a','b','c'];
            o5['constructor'] = undefined;
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object when constructor == undefined");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior when constructor == undefined");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor == undefined");

            var o5 = ['a','b','c'];
            o5['constructor'] = function() {};
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object when constructor has no [@@species] property");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior when constructor has no [@@species] property");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor has no [@@species] property");

            var o32 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o5 = ['a','b','c'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o15(Array.isArray(o7), "Return from Array.prototype.map should be an object when constructor has [@@species] == Object");
            o12.o16({'0':'a','1':'b','2':'c'}, o7, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == Object");

            var o5 = ['a','b','c'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object when constructor has [@@species] == null");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == null");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o32);

            var o36 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o5 = ['a','b','c'];
            o5['constructor'] = o36.o37;
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.map should be an Array object when constructor is %Array% of a different script context");
            o12.o16(['a','b','c'], o7, "Array.prototype.map output should show correct Array behavior when constructor is %Array% of a different script context");
            o12.o16(3, o7.length, "Array.prototype.map sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.map - native arrays",
        o4: function () {
            var o38 = function(o20) { return o20; }
            var o5 = [1,2,3];
            o5['constructor'] = null;
            o12.o23(function() { Array.prototype.map.call(o5, o38); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = [1,2,3];
            Object.defineProperty(o5, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o12.o23(function() { Array.prototype.map.call(o5, o38); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o5 = [1,2,3];
            o5['constructor'] = undefined;
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");

            var o5 = [1,2,3];
            o5['constructor'] = function() {};
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");

            var o32 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o5 = [1,2,3];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o15(Array.isArray(o7), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
            o12.o16({'0':1,'1':2,'2':3}, o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");

            var o5 = [1,2,3];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o32);

            var o36 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o5 = [1,2,3];
            o5['constructor'] = o36.o37;
            var o7 = Array.prototype.map.call(o5, o38);
            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
            o12.o16([1,2,3], o7, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.filter - ES5 arrays",
        o4: function () {
           

            var o5 = ['a','b','c'];
            Object.defineProperty(o5, "3", { get : function () { return 0xff;}, set: function() { }}); //Create an ES5 array 
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            
            var o7  = Array.prototype.filter.call(o5, function() { return true; });
            o12.o15(Array.isArray(o7), "Return from Array.prototype.filter should be an object when constructor has [@@species] == Object on an ES5 array");
            o12.o16('a', o7[0], "Array.prototype.filter output Object should have correct first index value when constructor has [@@species] == Object on an ES5 array");
            o12.o16(255, o7[3], "Array.prototype.fitler output Object should have correct last index value when constructor has [@@species] == Object on an ES5 array");            
        }
    },
];

o41.o42(o2, { o43: o0.o44[0] != "summary" });
