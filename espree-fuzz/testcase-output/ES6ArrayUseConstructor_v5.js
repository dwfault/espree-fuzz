//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

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
            o12.o16(3, o7.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
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
            o12.o16(3, o7.length, "Array.prototype.map does not set the length property of returned object, but it is Array.");
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
            o12.o16(3, o7.length, "Array.prototype.slice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice",
        o4: function () {
            var o5 = ['a','b','c','d','e','f'];
            o5['constructor'] = Number;

            var o7 = Array.prototype.splice.call(o5, 0, 3);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            o12.o15(o7 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
];

o23.o24(o2, { o25: o0.o26[0] != "summary" });
