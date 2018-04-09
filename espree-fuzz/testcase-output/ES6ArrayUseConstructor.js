//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array builtins using this['constructor'] property to construct their return values

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Array.prototype.concat",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.concat.call(o4, [1,2,3]);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.concat should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.concat should not have been constructed from Number");
            o6.o9(['a','b','c',1,2,3], o5, "Array.prototype.concat output should show correct Array behavior");
            o6.o9(6, o5.length, "Array.prototype.concat sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.filter",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.filter.call(o4, function() { return true; });

            o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
            o6.o9(['a','b','c'], o5, "Array.prototype.filter output should show correct Array behavior");
            o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object");
        }
    },
    {
        name: "Array.prototype.map",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.map.call(o4, function(o10) { return o10; });

            o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
            o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior");
            o6.o9(3, o5.length, "Array.prototype.map does not set the length property of returned object");
        }
    },
    {
        name: "Array.prototype.slice",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.slice.call(o4);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.slice should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
            o6.o9(['a','b','c'], o5, "Array.prototype.slice output should show correct Array behavior");
            o6.o9(3, o5.length, "Array.prototype.slice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - array source with constructor property set to Number",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
            o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - array source with constructor property set to Array",
        o3: function () {
            var o4 = [1,2,3,4,5,6];
            o4['constructor'] = Array;

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
            o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - array source with no constructor property",
        o3: function () {
            var o4 = [1,2,3,4,5,6];

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
            o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - object source with no constructor property",
        o3: function () {
            var o4 = {0:1,1:2,2:3,3:4,4:5,5:6,'length':6};

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
            o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice - object source with constructor property set to Number",
        o3: function () {
            var o4 = {0:1,1:2,2:3,3:4,4:5,5:6,'length':6};
            o4['constructor'] = Number;

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
            o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.splice",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            o4['constructor'] = null;
            o6.o11(function() { Array.prototype.splice.call(o4, 0, 3); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = ['a','b','c','d','e','f'];
            Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o6.o11(function() { Array.prototype.splice.call(o4, 0, 3); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = ['a','b','c','d','e','f'];
            o4['constructor'] = undefined;
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
            o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");

            var o4 = ['a','b','c','d','e','f'];
            o4['constructor'] = function() {};
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
            o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = ['a','b','c','d','e','f'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o8(Array.isArray(o5), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
            o6.o9({'0':'a','1':'b','2':'c',"length":3}, o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");

            var o4 = ['a','b','c','d','e','f'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
            o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o13);

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = ['a','b','c','d','e','f'];
            o4['constructor'] = o14.o15;
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
            o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.splice - native arrays",
        o3: function () {
            var o4 = [1,2,3,4,5,6];
            o4['constructor'] = null;
            o6.o11(function() { Array.prototype.splice.call(o4, 0, 3); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = [1,2,3,4,5,6];
            Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o6.o11(function() { Array.prototype.splice.call(o4, 0, 3); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = [1,2,3,4,5,6];
            o4['constructor'] = undefined;
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");

            var o4 = [1,2,3,4,5,6];
            o4['constructor'] = function() {};
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = [1,2,3,4,5,6];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o8(Array.isArray(o5), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
            o6.o9({'0':1,'1':2,'2':3,"length":3}, o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");

            var o4 = [1,2,3,4,5,6];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o13);

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = [1,2,3,4,5,6];
            o4['constructor'] = o14.o15;
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.map",
        o3: function () {
            var o16 = function(o10) { return o10; }
            var o4 = ['a','b','c'];
            o4['constructor'] = null;
            o6.o11(function() { Array.prototype.map.call(o4, o16); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = ['a','b','c'];
            Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o6.o11(function() { Array.prototype.map.call(o4, o16); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = ['a','b','c'];
            o4['constructor'] = undefined;
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor == undefined");
            o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor == undefined");
            o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor == undefined");

            var o4 = ['a','b','c'];
            o4['constructor'] = function() {};
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor has no [@@species] property");
            o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor has no [@@species] property");
            o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor has no [@@species] property");

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = ['a','b','c'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o8(Array.isArray(o5), "Return from Array.prototype.map should be an object when constructor has [@@species] == Object");
            o6.o9({'0':'a','1':'b','2':'c'}, o5, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == Object");

            var o4 = ['a','b','c'];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor has [@@species] == null");
            o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == null");
            o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o13);

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = ['a','b','c'];
            o4['constructor'] = o14.o15;
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor is %Array% of a different script context");
            o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor is %Array% of a different script context");
            o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.map - native arrays",
        o3: function () {
            var o16 = function(o10) { return o10; }
            var o4 = [1,2,3];
            o4['constructor'] = null;
            o6.o11(function() { Array.prototype.map.call(o4, o16); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = [1,2,3];
            Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
            o6.o11(function() { Array.prototype.map.call(o4, o16); }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");

            var o4 = [1,2,3];
            o4['constructor'] = undefined;
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");

            var o4 = [1,2,3];
            o4['constructor'] = function() {};
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = [1,2,3];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o8(Array.isArray(o5), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
            o6.o9({'0':1,'1':2,'2':3}, o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");

            var o4 = [1,2,3];
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");

            Object.defineProperty(Array, Symbol.species, o13);

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = [1,2,3];
            o4['constructor'] = o14.o15;
            var o5 = Array.prototype.map.call(o4, o16);
            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
            o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.filter - ES5 arrays",
        o3: function () {
           

            var o4 = ['a','b','c'];
            Object.defineProperty(o4, "3", { get : function () { return 0xff;}, set: function() { }}); //Create an ES5 array 
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
            
            var o5  = Array.prototype.filter.call(o4, function() { return true; });
            o6.o8(Array.isArray(o5), "Return from Array.prototype.filter should be an object when constructor has [@@species] == Object on an ES5 array");
            o6.o9('a', o5[0], "Array.prototype.filter output Object should have correct first index value when constructor has [@@species] == Object on an ES5 array");
            o6.o9(255, o5[3], "Array.prototype.fitler output Object should have correct last index value when constructor has [@@species] == Object on an ES5 array");            
        }
    },
];

o17.o18(o2, { o19: o0.o20[0] != "summary" });
