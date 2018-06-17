//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array builtins using this['constructor'] property to construct their return values

try {
this.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o1 = [
    o6.o7(4, o15),
    {
        name: "'",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.filter.call(o4, function() { try {
return "Promise thrower function is used when no error handler is provided";
}catch(e){} });

            try {
Symbol.for(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
}catch(o535){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.filter output should show correct Array behavior");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object");
}catch(e){}
        }
    },
    o973.o974.o979(o973),
    {
        name: "Array.prototype.slice",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.slice.call(o4);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.slice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.slice output should show correct Array behavior");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.slice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.splice - array source with constructor property set to Number",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.splice - array source with constructor property set to Array",
        o3: function () {
            var o4 = [1,2,3,4,5,6];
            try {
o4['constructor'] = Array;
}catch(e){}

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.splice - array source with no constructor property",
        o3: function () {
            var o4 = [1,2,3,4,5,6];

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.splice - object source with no constructor property",
        o3: function () {
            var o4 = {0:1,1:2,2:3,3:4,4:5,5:6,'length':6};

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.splice - object source with constructor property set to Number",
        o3: function () {
            var o4 = {0:1,1:2,2:3,3:4,4:5,5:6,'length':6};
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o7(o5 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output is correct");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.splice",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = null;
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.splice.call(o4, 0, 3);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = ['a','b','c','d','e','f'];
            try {
Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.splice.call(o4, 0, 3);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = undefined;
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");
}catch(e){}

            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = function() {};
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");
}catch(e){}

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = ['a','b','c','d','e','f'];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o8(Array.isArray(o5), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
}catch(e){}
            try {
o6.o9({'0':'a','1':'b','2':'c',"length":3}, o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");
}catch(e){}

            var o4 = ['a','b','c','d','e','f'];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");
}catch(e){}

            try {
Object.defineProperty(Array, Symbol.species, o13);
}catch(e){}

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = o14.o15;
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
}catch(e){}
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.splice - native arrays",
        o3: function () {
            var o4 = [1,2,3,4,5,6];
            try {
o4['constructor'] = null;
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.splice.call(o4, 0, 3);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = [1,2,3,4,5,6];
            try {
Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.splice.call(o4, 0, 3);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = [1,2,3,4,5,6];
            try {
o4['constructor'] = undefined;
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");
}catch(e){}

            var o4 = [1,2,3,4,5,6];
            try {
o4['constructor'] = function() {};
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");
}catch(e){}

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = [1,2,3,4,5,6];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o8(Array.isArray(o5), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
}catch(e){}
            try {
o6.o9({'0':1,'1':2,'2':3,"length":3}, o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");
}catch(e){}

            var o4 = [1,2,3,4,5,6];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");
}catch(e){}

            try {
Object.defineProperty(Array, Symbol.species, o13);
}catch(e){}

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = [1,2,3,4,5,6];
            try {
o4['constructor'] = o14.o15;
}catch(e){}
            var o5 = Array.prototype.splice.call(o4, 0, 3);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
}catch(e){}
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.map",
        o3: function () {
            var o16 = function(o10) { try {
return o10;
}catch(e){} }
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = null;
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.map.call(o4, o16);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = ['a','b','c'];
            try {
Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.map.call(o4, o16);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = ['a','b','c'];
            try {
o4['constructor'] = undefined;
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor == undefined");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor == undefined");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor == undefined");
}catch(e){}

            var o4 = ['a','b','c'];
            try {
o4['constructor'] = function() {};
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor has no [@@species] property");
}catch(e){}

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = ['a','b','c'];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o8(Array.isArray(o5), "Return from Array.prototype.map should be an object when constructor has [@@species] == Object");
}catch(e){}
            try {
o6.o9({'0':'a','1':'b','2':'c'}, o5, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == Object");
}catch(e){}

            var o4 = ['a','b','c'];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor has [@@species] == null");
}catch(e){}

            try {
Object.defineProperty(Array, Symbol.species, o13);
}catch(e){}

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = o14.o15;
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9(['a','b','c'], o5, "Array.prototype.map output should show correct Array behavior when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.map sets the length property of returned object when constructor is %Array% of a different script context");
}catch(e){}
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.map - native arrays",
        o3: function () {
            var o16 = function(o10) { try {
return o10;
}catch(e){} }
            var o4 = [1,2,3];
            try {
o4['constructor'] = null;
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.map.call(o4, o16);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = [1,2,3];
            try {
Object.defineProperty(o4, 'constructor', {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            try {
o6.o11(function() { try {
Array.prototype.map.call(o4, o16);
}catch(e){} }, o12, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}

            var o4 = [1,2,3];
            try {
o4['constructor'] = undefined;
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor == undefined");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor == undefined");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor == undefined");
}catch(e){}

            var o4 = [1,2,3];
            try {
o4['constructor'] = function() {};
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has no [@@species] property");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property");
}catch(e){}

            var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species);

            var o4 = [1,2,3];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o8(Array.isArray(o5), "Return from Array.prototype.splice should be an object when constructor has [@@species] == Object");
}catch(e){}
            try {
o6.o9({'0':1,'1':2,'2':3}, o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == Object");
}catch(e){}

            var o4 = [1,2,3];
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: null});
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor has [@@species] == null");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has [@@species] == null");
}catch(e){}

            try {
Object.defineProperty(Array, Symbol.species, o13);
}catch(e){}

            var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread");
            var o4 = [1,2,3];
            try {
o4['constructor'] = o14.o15;
}catch(e){}
            var o5 = Array.prototype.map.call(o4, o16);
            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9([1,2,3], o5, "Array.prototype.splice output should show correct Array behavior when constructor is %Array% of a different script context");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor is %Array% of a different script context");
}catch(e){}
        }
    },
    {
        name: "ArraySpeciesCreate test through Array.prototype.filter - ES5 arrays",
        o3: function () {
           

            var o4 = ['a','b','c'];
            try {
Object.defineProperty(o4, "3", { get : function () { try {
return 0xff;
}catch(e){}}, set: function() { }});
}catch(e){} //Create an ES5 array 
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true, value: Object});
}catch(e){}
            
            var o5  = Array.prototype.filter.call(o4, function() { try {
return true;
}catch(e){} });
            try {
o6.o8(Array.isArray(o5), "Return from Array.prototype.filter should be an object when constructor has [@@species] == Object on an ES5 array");
}catch(e){}
            try {
o6.o9('a', o5[0], "Array.prototype.filter output Object should have correct first index value when constructor has [@@species] == Object on an ES5 array");
}catch(e){}
            try {
o6.o9(255, o5[3], "Array.prototype.fitler output Object should have correct last index value when constructor has [@@species] == Object on an ES5 array");
}catch(e){}            
        }
    },
];

try {
o17.o18(o22, write(o4.length));
}catch(o852.o909 = true){}
