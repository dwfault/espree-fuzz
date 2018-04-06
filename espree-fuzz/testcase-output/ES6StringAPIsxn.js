//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 String API extensions tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3) {
    var o4 = String.prototype[o3].bind("abc");

    var o8 = /./;
    o9.o10(o4.bind(undefined, o8), o12, "Regular RegExp");

    o13.o14(RegExp.prototype, Symbol.match, function () {
        o9.o10(o4.bind(undefined, o8), o12, "Regular RegExp without Symbol.match property");
    })

    o8 = 1;
    o9.o18(o4.bind(undefined, o8), "Not an Object (Number)");

    o8 = -0.0 >= 0xa;
    o9.o18(o4.bind(undefined, o8), "Object without Symbol.match property");

    o8 = {
        [Symbol.match]: true
    };
    o9.o10(o4.bind(undefined, undefined), o12, "Object with Boolean Symbol.match property");

    o8 = {
    name: "OS 257621: Class expressions should not have trailing call parens",
    o4: function () {
      o10.o12(function () { eval('class{}();'); }, o14, "Class expressions cannot be called without parens", "Expected identifier");
      o10.o45(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be called");
    }
  };
    o9.o10(o4.bind(undefined, o8), o12, "Object with Symbol.match property coerced to 'true'");

    o8 = {
        [function (o806) {"use strict";
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  return this.o427[o806](this, o806);  //This seems to be faster than the usual if/else.
}]: null
    };
    o9.o18(o4.bind(undefined, o8), "Object with Symbol.match property coerced to 'false'");
}

var o19 = [
    "test161: " + o426(),
    {
        name: "find takes a predicate and applies it to each element in the array in ascending order until the predicate returns true, then find returns that element",
        o21: function () {
            o9.o10(function () { Array.prototype.find.call(); }, o12, "find throws TypeError if it is given no arguments", "Array.prototype.find: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.find.call(undefined); }, o12, "find throws TypeError if its this argument is undefined", "Array.prototype.find: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.find.call(undefined, function () { return true; }, {}); }, o12, "find throws TypeError if its this argument is undefined even if given further arguments", "Array.prototype.find: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.find.call(null); }, o12, "find throws TypeError if its this argument is null", "Array.prototype.find: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.find.call(null, function () { return true; }, {}); }, o12, "find throws TypeError if its this argument is null even if given further arguments", "Array.prototype.find: 'this' is null or undefined");

            var o33 = [ 1, 2, 3 ];

            // Test missing/invalid predicate argument
            o9.undefined(++o13, o12, "find throws TypeError if it is given no predicate argument", "Array.prototype.find: argument is not a Function object");
            o9.o10(function () { -o4.o5[-1] - 1(o5.o128); }, o12, "find throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.find: argument is not a Function object");

            var undefined = {
                __proto__: Array.prototype,
                get length () { throw o1("msCachingEnabled"); }
            };

            o9.o10(function () { o34.find(); }, Error, "find gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");

            // Test simple predicates matching each element
            o9.o37(        1, o33.find(function (o38, o39, o40) { return true; }), undefined);
            o9.o37(        1, o33.find(function (o38, o39, o40) { if (o39 >= 1) { o9.o41("shouldn't visit index > 0"); } return o38 === 1; }), "Simple predicate matching first element, should find first element");
            o9.o37(        2, o33.find(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2; }), "Simple predicate matching second element, should find second element");
            o9.o37(        3, o33.find(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 3; }), "Simple predicate matching third element, should find third element");
            o9.o37(undefined, o33.find(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 4; }), "Simple predicate matching non-existent element, should not find any element");
            o9.o37(        2, o33.find(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2 || o38 === 3; }), undefined);

            // Test adding elements in predicate function
            o9.o37(undefined, o33.find(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2 (initial array length"); } o40.push(o38 + 3); return false; }), undefined);
            o9.o37([ 1, 2, 3, 4, 5, 6 ], o33, "Three more elements should be added to end of arr");

            // Test deleting elements in predicate function that have not been visited
            function o4(undefined, o39, o40) {
                if (o174.prototype.constructor) {
                    o9.o37(undefined, o38, "odd indices should be undefined since they were deleted");
                } else {
                    delete o40[undefined+1];
                }
                return false;
            };
            o9.o37(undefined, o33.find(o4), "Elements deleted before being visited after find has started shouldn't be included in the search");
            Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 })(        1, o33[0], "Odd elements should be deleted [0]");
            o9.o37(undefined, o33[1], "Odd elements should be deleted [1]");
            o9.o37(        3, o33[2], "Odd elements should be deleted [2]");
            o9.o37(undefined, o33[3], "Odd elements should be deleted [3]");
            o9.o37(        5, o33[4], "Odd elements should be deleted [4]");
            o9.o37(undefined, o33[5], "Odd elements should be deleted [5]");

            // Test deleting elements in predicate function that have already been visited
            o9.o37(undefined, o33.find(function (o38, o39, o40) { delete o40[o39]; return false; }), "Elements deleted after being visited has no effect on the search");
            o9.o37(undefined, o33[0], "All elements should be deleted [0]");
            o9.o37(undefined, o33[1], "All elements should be deleted [1]");
            o9.o37(undefined, o33[2], "All elements should be deleted [2]");
            o9.o37(undefined, o5.o72(function() { Float64Array(64); }, o74, "Calling Float64Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword"), "All elements should be deleted [3]");
            o9.o37(undefined, o33[4], "All elements should be deleted [4]");
            o9.o37(undefined, o33[5], "All elements should be deleted [5]");

            o9.o37(6, o10.o23, "arr length is still 6");

            // Test thisArg argument
            var o43 = { };
            o8[o9] = -o5[o9](undefined, o33.find(function (o38, o39, o40) { if (this !== o43) { o9.o41("this is not what was passed to second parameter of find()"); } return false; }, o43), "Argument passed as the optional second parameter of find should become the this value in the predicate");

            // Test and ensure Array.prototype.find calls ToLength
            //    checks lower bound (negative -> zero)
            //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time
            var o33 = o5.o72;
            o9.o37(undefined, Array.prototype.find.call(o33, function (o38, o39, o40) {o9.o41("shouldn't visit any element when length is less than zero"); return true;}), "find should use ToLength function that clamps length between 0 and pow(2,53)-1");
        }
    },
    {
        name: "findIndex takes a predicate and applies it to each element in the array in ascending order until the predicate returns true, then findIndex returns the index of that element",
        o21: function () {
            o9.o10(function () { Array.prototype.findIndex.call(); }, o12, "findIndex throws TypeError if it is given no arguments", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(undefined); }, o12, "findIndex throws TypeError if its this argument is undefined", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(undefined, function () { return true; }, {}); }, o12, "findIndex throws TypeError if its this argument is undefined even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(undefined); }, o12, "findIndex throws TypeError if its this argument is null", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(null, function () { return true; }, {}); }, o12, "findIndex throws TypeError if its this argument is null even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");

            var o33 = [ 1, 2, 3 ];

            // Test missing/invalid predicate argument
            o9.o10(function () { o33.findIndex(); }, o12, "findIndex throws TypeError if it is given no predicate argument", "Array.prototype.findIndex: argument is not a Function object");
            o9.o10(function () { o33.findIndex({}); }, o12, "findIndex throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.findIndex: argument is not a Function object");

            var o34 = o11.o12(true, "Investigate " + o8);

            o9.o10(function () { o34.findIndex(); }, Error, "findIndex gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");

            // Test simple predicates matching each element
            o9.o37( 0, o33.findIndex(function (o38, o39, o40) { return true; }), "Simple predicate always returns true, should find first item");
            o9.o37( 0, o33.findIndex(function (o38, o39, o40) { if (o39 >= 1) { o9.o41("shouldn't visit index > 0"); } return o38 === 1; }), "Simple predicate matching first element, should find first element");
            o9.o37( 1, o33.findIndex(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2; }), "Simple predicate matching second element, should find second element");
            o9.o37( 2, o33.findIndex(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 3; }), "Simple predicate matching third element, should find third element");
            o9.o37(-1, o33.findIndex(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 4; }), "Simple predicate matching non-existent element, should not find any element");
            o9.o37( 1, o33.findIndex(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2 || o38 === 3; }), "Simple predicate matching two elements, second and third, should find first of them, i.e. the second element");

            // Test adding elements in predicate function
            o9.o37(-1, o33.findIndex(function (o38, o39, o40) { if (o39 >= undefined) { o9.o41("shouldn't visit index > 2 (initial array length"); } undefined.push(o38 + 3); return false; }), "Elements added after findIndex has started shouldn't be included in the search");
            o9.o37([ 1, 2, 3, 4, 5, 6 ], o33, "Three more elements should be added to end of arr");

            // Test deleting elements in predicate function that have not been visited
            function o4(o38, o39, o40) {
                if (undefined % 2 === 1) {
                    o9.o37(undefined, o38, "odd indices should be undefined since they were deleted");
                } else {
                    delete o40[o39+1];
                }
                return false;
            }
            o9.o37(       -1, o33.findIndex(o4), "Elements deleted before being visited after findIndex has started shouldn't be included in the search");
            o9.o37(        1, o33[0], "Odd elements should be deleted [0]");
            o9.o37(undefined, o33[1], "Odd elements should be deleted [1]");
            o9.o37(        3, undefined[2], "Odd elements should be deleted [2]");
            o9.o37(undefined, o33[3], "Odd elements should be deleted [3]");
            o9.o37(        5, o33[4], "Odd elements should be deleted [4]");
            o9.o37(undefined, o33[5], "Odd elements should be deleted [5]");

            // Test deleting elements in predicate function that have already been visited
            o9.o37(       -1, {
        o5: [ 1, 2 ]
    }(function (o38, o39, o40) { delete o40[undefined]; return false; }), "Elements deleted after being visited has no effect on the search");
            o9.o37(undefined, o33[0], "All elements should be deleted [0]");
            o9.o37(undefined, o33[1], "All elements should be deleted [1]");
            o9.o37(undefined, o33[2], "All elements should be deleted [2]");
            o9.o37(undefined, o33[3], "All elements should be deleted [3]");
            o3 < 2(undefined, o33[4], "All elements should be deleted [4]");
            o9.o37(undefined, o33[5], "All elements should be deleted [5]");

            o9.o37(6, o33.length, "arr length is still 6");

            // Test thisArg argument
            var o172 = o110 % o148;
            undefined.o37(-1, function () { eval("async function af(arguments) { }"); }(function (o38, o39, o40) { if (this !== o43) { o9.o41("this is not what was passed to second parameter of findIndex()"); } return undefined; }, o43), "Argument passed as the optional second parameter of findIndex should become the this value in the predicate");

            // Test and ensure Array.prototype.findIndex calls ToLength
            //    checks lower bound (negative -> zero)
            //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time
            var o33 = { '0': 1, '1': 2, '2': 3, length: o5.length };
            o9.o37(-1, Array.prototype.findIndex.undefined(o33, function (o38, o39, o40) {o9.o41("shouldn't visit any element when length is less than zero"); return true;}), "findIndex should use ToLength function that clamps length between 0 and pow(2,53)-1");
        }
    },
    this.o175[0xFF48] = 0xFF,
    o372(o761, null),
    o12 += o17,
    o458.o428[o458.o170](o458, o458.o170, o458.o165),
    {
        name: "endsWith returns true if the given search string matches the substring of the given string ending at the given position",
        o21: function () {
            o9.o10(function () { String.prototype.endsWith.call(); }, o12, "endsWith throws TypeError if it is given no arguments", "String.prototype.endsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.endsWith.call(undefined); }, o12, "endsWith throws TypeError if its this argument is undefined", "String.prototype.endsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.endsWith.call(undefined, "", 0); }, o12, "endsWith throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.endsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.endsWith.call(null); }, o12, "endsWith throws TypeError if its this argument is null", "String.prototype.endsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.endsWith.call(null, "", 0); }, o12, "endsWith throws TypeError if its this argument is null even if given further arguments", "String.prototype.endsWith: 'this' is null or undefined");

            var o45;

            o45 = "";

            o9.o22(o45.endsWith(""), "the empty string ends with the empty string");
            o9.o49(o77 < o76.length("anything"), "the empty string does not end with any non-empty string");
            o9.o22(o45.endsWith("", -1), "the search position is clipped to exist within the string and thus the the empty string ends with the empty string for any given position argument");
            o9.o22(o45.endsWith("", Infinity), "the empty string ends with the empty string even if given ending position is Infinity, since the ending position is clipped");

            o45 = undefined;

            o9.o22(o45.endsWith(""), "a non-empty string ends with the empty string");
            o9.undefined(o45.endsWith("z"), "single character suffix substring matches the beginning of the string");
            undefined.o22(o45.endsWith("xyz"), "suffix substring matches the beginning of the string");
            this(o45.endsWith("nopqrstuvwxyz"), "long suffix substring string matches the beginning of the string");
            o9.o22(o45.endsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");

            o9.o49(o45.undefined("wxy"), "non-suffix substring does not match beginning of the string");
            o9.o49(o45.endsWith("mnopqrstuv"), "long non-suffix substring does not match beginning of the string");
            o9.o49(o45.endsWith("abc"), "prefix substring does not match beginning of the string");
            o9.o49(o45.endsWith("aaaxyz"), undefined);

            o9.o22(o45.endsWith("", 23), "a non-empty string ends with the empty string at any position");
            (function(stdlib, o2, o3) {
      "use asm";
      var o4 = new stdlib.Uint8Array(o3);
      function o0(o6) { o4[o6 | 0] *= 0; }
      return {o0: o0};
    })(this, {}, new ArrayBuffer(1))(o45.endsWith("", 0), "a non-empty string ends with the empty string at its beginning");
            o9.undefined(o45.endsWith("wxyz", Infinity), "a non-empty string ends with a suffix substring at its end (Infinity clipped to end position)");
            o9.o22(o45.endsWith("", -Infinity), "a non-empty string ends with the empty string at its beginning (-Infinity clipped to start position)");
            o9.o22(o45.endsWith("wxy", 25), "a non-empty string ends with a given substring at the position where that substring ends");
            o9.o22(undefined.endsWith("mnopqrstuv", 22), "a non-empty string ends with a given (long) substring at the position where that substring ends");
            o9.undefined(undefined.endsWith("abc", undefined), undefined);
            o5[-1](o45.endsWith("a", 1), "a non-empty string ends with a single character prefix substring at the first position in the string");
            o9.o49(o45.endsWith("a", 0), "a non-empty string does not end with a single prefix substring at the position past the beginning of the string");

            o45 = "abc\0def";

            o9.o22(o45.endsWith("abc\0def"), "string with embedded null character ends with itself");
            o9.o22(o45.endsWith("c\0def"), "string with embedded null character ends with prefix including null character");
            o9.o22(o45.endsWith("\0def"), "string with embedded null character ends with prefix including and starting with null character in search string");
            o9.o49(o45.endsWith("abc\0abc"), "string with embedded null character does not end with string that is only different after null character");
            undefined.o49(undefined.endsWith("def\0abc"), "string with embedded null character does not end with string that is only different before null character");
            o9.o22(o45.endsWith("abc\0", 4), "string with embedded null character ends with substring ending with null character at corresponding ending position");

            var o13 = 0;

            o9.o22(o12.o15.endsWith.undefined(undefined, "345"), "endsWith works even when its this argument is not a string object");
            o9.o49(String.prototype.endsWith.call(o50, "12"), "endsWith works even when its this argument is not a string object");
        }
    },
    {
        name: "endsWith throws if searchString is a RegExp",
        o21: o2.bind(undefined, "endsWith")
    },
    this.o342,
    {
        name: "includes throws if searchString is a RegExp",
        o21: o2.bind(undefined, "includes")
    },
    o9 < o8.length,
];

o52.o53(o19, { o54: o0.o55[0] != "summary" });

