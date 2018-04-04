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

    o8 = {};
    o9.o18(o4.bind(undefined, o8), "Object without Symbol.match property");

    o8 = {
        [Symbol.match]: true
    };
    o9.o10(o4.bind(undefined, o8), o12, "Object with Boolean Symbol.match property");

    o8 = {
        [Symbol.match]: 'coerced to true'
    };
    o9.o10(o4.bind(undefined, o8), o12, "Object with Symbol.match property coerced to 'true'");

    o8 = {
        [Symbol.match]: null
    };
    o9.o18(o4.bind(undefined, o8), "Object with Symbol.match property coerced to 'false'");
}

var o19 = [
    {
        name: "Array prototype and String prototype should have spec defined built-ins with correct lengths",
        o21: function () {
            o9.o22(Array.prototype.hasOwnProperty('find'), "Array.prototype should have a find method");
            o9.o22(Array.prototype.hasOwnProperty('findIndex'), "Array.prototype should have a findIndex method");

            o9.o22(String.prototype.hasOwnProperty('repeat'), "String.prototype should have a repeat method");
            o9.o22(String.prototype.hasOwnProperty('startsWith'), "String.prototype should have a startsWith method");
            o9.o22(String.prototype.hasOwnProperty('endsWith'), "String.prototype should have a endsWith method");
            o9.o22(String.prototype.hasOwnProperty('includes'), "String.prototype should have a includes method");

            o9.o22(Array.prototype.find.length === 1, "find method takes two arguments but the second is optional and the spec says the length must be 1");
            o9.o22(Array.prototype.findIndex.length === 1, "findIndex method takes two arguments but the second is optional and the spec says the length must be 1");

            o9.o22(String.prototype.repeat.length === 1, "repeat method takes zero arguments");
            o9.o22(String.prototype.startsWith.length === 1, "startsWith method takes two arguments but the second is optional and the spec says the length must be 1");
            o9.o22(String.prototype.endsWith.length === 1, "endsWith method takes two arguments but the second is optional and the spec says the length must be 1");
            o9.o22(String.prototype.includes.length === 1, "includes method takes two arguments but the second is optional and the spec says the length must be 1");
        }
    },
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
            o9.o10(function () { o33.find(); }, o12, "find throws TypeError if it is given no predicate argument", "Array.prototype.find: argument is not a Function object");
            o9.o10(function () { o33.find({}); }, o12, "find throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.find: argument is not a Function object");

            var o34 = {
                __proto__: Array.prototype,
                get length () { throw new Error('getter called'); }
            };

            o9.o10(function () { o34.find(); }, Error, "find gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");

            // Test simple predicates matching each element
            o9.o37(        1, o33.find(function (o38, o39, o40) { return true; }), "Simple predicate always returns true, should find first item");
            o9.o37(        1, o33.find(function (o38, o39, o40) { if (o39 >= 1) { o9.o41("shouldn't visit index > 0"); } return o38 === 1; }), "Simple predicate matching first element, should find first element");
            o9.o37(        2, o33.find(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2; }), "Simple predicate matching second element, should find second element");
            o9.o37(        3, o33.find(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 3; }), "Simple predicate matching third element, should find third element");
            o9.o37(undefined, o33.find(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 4; }), "Simple predicate matching non-existent element, should not find any element");
            o9.o37(        2, o33.find(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2 || o38 === 3; }), "Simple predicate matching two elements, second and third, should find first of them, i.e. the second element");

            // Test adding elements in predicate function
            o9.o37(undefined, o33.find(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2 (initial array length"); } o40.push(o38 + 3); return false; }), "Elements added after find has started shouldn't be included in the search");
            o9.o37([ 1, 2, 3, 4, 5, 6 ], o33, "Three more elements should be added to end of arr");

            // Test deleting elements in predicate function that have not been visited
            function o4(o38, o39, o40) {
                if (o39 % 2 === 1) {
                    o9.o37(undefined, o38, "odd indices should be undefined since they were deleted");
                } else {
                    delete o40[o39+1];
                }
                return false;
            };
            o9.o37(undefined, o33.find(o4), "Elements deleted before being visited after find has started shouldn't be included in the search");
            o9.o37(        1, o33[0], "Odd elements should be deleted [0]");
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
            o9.o37(undefined, o33[3], "All elements should be deleted [3]");
            o9.o37(undefined, o33[4], "All elements should be deleted [4]");
            o9.o37(undefined, o33[5], "All elements should be deleted [5]");

            o9.o37(6, o33.length, "arr length is still 6");

            // Test thisArg argument
            var o43 = { };
            o9.o37(undefined, o33.find(function (o38, o39, o40) { if (this !== o43) { o9.o41("this is not what was passed to second parameter of find()"); } return false; }, o43), "Argument passed as the optional second parameter of find should become the this value in the predicate");

            // Test and ensure Array.prototype.find calls ToLength
            //    checks lower bound (negative -> zero)
            //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time
            var o33 = { '0': 1, '1': 2, '2': 3, length: -1 };
            o9.o37(undefined, Array.prototype.find.call(o33, function (o38, o39, o40) {o9.o41("shouldn't visit any element when length is less than zero"); return true;}), "find should use ToLength function that clamps length between 0 and pow(2,53)-1");
        }
    },
    {
        name: "findIndex takes a predicate and applies it to each element in the array in ascending order until the predicate returns true, then findIndex returns the index of that element",
        o21: function () {
            o9.o10(function () { Array.prototype.findIndex.call(); }, o12, "findIndex throws TypeError if it is given no arguments", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(undefined); }, o12, "findIndex throws TypeError if its this argument is undefined", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(undefined, function () { return true; }, {}); }, o12, "findIndex throws TypeError if its this argument is undefined even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(null); }, o12, "findIndex throws TypeError if its this argument is null", "Array.prototype.findIndex: 'this' is null or undefined");
            o9.o10(function () { Array.prototype.findIndex.call(null, function () { return true; }, {}); }, o12, "findIndex throws TypeError if its this argument is null even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");

            var o33 = [ 1, 2, 3 ];

            // Test missing/invalid predicate argument
            o9.o10(function () { o33.findIndex(); }, o12, "findIndex throws TypeError if it is given no predicate argument", "Array.prototype.findIndex: argument is not a Function object");
            o9.o10(function () { o33.findIndex({}); }, o12, "findIndex throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.findIndex: argument is not a Function object");

            var o34 = {
                __proto__: Array.prototype,
                get length () { throw new Error('getter called'); }
            };

            o9.o10(function () { o34.findIndex(); }, Error, "findIndex gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");

            // Test simple predicates matching each element
            o9.o37( 0, o33.findIndex(function (o38, o39, o40) { return true; }), "Simple predicate always returns true, should find first item");
            o9.o37( 0, o33.findIndex(function (o38, o39, o40) { if (o39 >= 1) { o9.o41("shouldn't visit index > 0"); } return o38 === 1; }), "Simple predicate matching first element, should find first element");
            o9.o37( 1, o33.findIndex(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2; }), "Simple predicate matching second element, should find second element");
            o9.o37( 2, o33.findIndex(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 3; }), "Simple predicate matching third element, should find third element");
            o9.o37(-1, o33.findIndex(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 4; }), "Simple predicate matching non-existent element, should not find any element");
            o9.o37( 1, o33.findIndex(function (o38, o39, o40) { if (o39 >= 2) { o9.o41("shouldn't visit index > 1"); } return o38 === 2 || o38 === 3; }), "Simple predicate matching two elements, second and third, should find first of them, i.e. the second element");

            // Test adding elements in predicate function
            o9.o37(-1, o33.findIndex(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2 (initial array length"); } o40.push(o38 + 3); return false; }), "Elements added after findIndex has started shouldn't be included in the search");
            o9.o37([ 1, 2, 3, 4, 5, 6 ], o33, "Three more elements should be added to end of arr");

            // Test deleting elements in predicate function that have not been visited
            function o4(o38, o39, o40) {
                if (o39 % 2 === 1) {
                    o9.o37(undefined, o38, "odd indices should be undefined since they were deleted");
                } else {
                    delete o40[o39+1];
                }
                return false;
            }
            o9.o37(       -1, o33.findIndex(o4), "Elements deleted before being visited after findIndex has started shouldn't be included in the search");
            o9.o37(        1, o33[0], "Odd elements should be deleted [0]");
            o9.o37(undefined, o33[1], "Odd elements should be deleted [1]");
            o9.o37(        3, o33[2], "Odd elements should be deleted [2]");
            o9.o37(undefined, o33[3], "Odd elements should be deleted [3]");
            o9.o37(        5, o33[4], "Odd elements should be deleted [4]");
            o9.o37(undefined, o33[5], "Odd elements should be deleted [5]");

            // Test deleting elements in predicate function that have already been visited
            o9.o37(       -1, o33.findIndex(function (o38, o39, o40) { delete o40[o39]; return false; }), "Elements deleted after being visited has no effect on the search");
            o9.o37(undefined, o33[0], "All elements should be deleted [0]");
            o9.o37(undefined, o33[1], "All elements should be deleted [1]");
            o9.o37(undefined, o33[2], "All elements should be deleted [2]");
            o9.o37(undefined, o33[3], "All elements should be deleted [3]");
            o9.o37(undefined, o33[4], "All elements should be deleted [4]");
            o9.o37(undefined, o33[5], "All elements should be deleted [5]");

            o9.o37(6, o33.length, "arr length is still 6");

            // Test thisArg argument
            var o43 = { };
            o9.o37(-1, o33.findIndex(function (o38, o39, o40) { if (this !== o43) { o9.o41("this is not what was passed to second parameter of findIndex()"); } return false; }, o43), "Argument passed as the optional second parameter of findIndex should become the this value in the predicate");

            // Test and ensure Array.prototype.findIndex calls ToLength
            //    checks lower bound (negative -> zero)
            //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time
            var o33 = { '0': 1, '1': 2, '2': 3, length: -3 };
            o9.o37(-1, Array.prototype.findIndex.call(o33, function (o38, o39, o40) {o9.o41("shouldn't visit any element when length is less than zero"); return true;}), "findIndex should use ToLength function that clamps length between 0 and pow(2,53)-1");
        }
    },
    {
        name: "find and findIndex do not skip 'holes' in arrays and array-likes",
        o21: function () {
            var o33 = [,,,,,];
            var o44 = 0;

            o33.find(function () { o44++; return false; });
            o9.o37(o33.length, o44, "find calls its callback for every element up to the array's length even if those elements are undefined");

            o44 = 0;

            o33.findIndex(function () { o44++; return false; });
            o9.o37(o33.length, o44, "findIndex calls its callback for every element up to the array's length even if those elements are undefined");

            o33 = { length: 5, 0: undefined, 1: undefined, 3: undefined };

            o44 = 0;

            Array.prototype.find.call(o33, function () { o44++; return false; });
            o9.o37(o33.length, o44, "find calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");

            o44 = 0;

            Array.prototype.findIndex.call(o33, function () { o44++; return false; });
            o9.o37(o33.length, o44, "findIndex calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");
        }
    },
    {
        name: "repeat takes a string and number and returns a string that is the given string repeated the given number of times",
        o21: function () {
            o9.o10(function () { String.prototype.repeat.call(); }, o12, "repeat throws TypeError if it is given no arguments", "String.prototype.repeat: 'this' is null or undefined");
            o9.o10(function () { String.prototype.repeat.call(undefined); }, o12, "repeat throws TypeError if its this argument is undefined", "String.prototype.repeat: 'this' is null or undefined");
            o9.o10(function () { String.prototype.repeat.call(undefined, "", 0); }, o12, "repeat throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.repeat: 'this' is null or undefined");
            o9.o10(function () { String.prototype.repeat.call(null); }, o12, "repeat throws TypeError if its this argument is null", "String.prototype.repeat: 'this' is null or undefined");
            o9.o10(function () { String.prototype.repeat.call(null, "", 0); }, o12, "repeat throws TypeError if its this argument is null even if given further arguments", "String.prototype.repeat: 'this' is null or undefined");

            var o45;

            o45 = "";

            o9.o37("", o45.repeat(0), "empty string repeated zero times is the empty string");
            o9.o37("", o45.repeat(NaN), "empty string: NaN converts to zero so produces the empty string");
            o9.o37("", o45.repeat(1), "empty string repeated once is the empty string");
            o9.o37("", o45.repeat(2), "empty string repeated twice is the empty string");
            o9.o37("", o45.repeat(50), "empty string repeated fifty times is the empty string");

            o45 = "a";

            o9.o37("", o45.repeat(0), "single character string repeated zero times is the empty string");
            o9.o37("", o45.repeat(NaN), "single character string: NaN converts to zero so produces the empty string");
            o9.o37("a", o45.repeat(1), "single character string repeated once is itself");
            o9.o37("aa", o45.repeat(2), "single character string repeated twice is a two character string");
            o9.o37("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", o45.repeat(50), "single character string repeated fifty times is a 50 character string");

            o45 = "abc";

            o9.o37("", o45.repeat(0), "multi-character string repeated zero times is the empty string");
            o9.o37("", o45.repeat(NaN), "multi-character string: NaN converts to zero so produces the empty string");
            o9.o37("abc", o45.repeat(1), "multi-character string repeated once is itself");
            o9.o37("abcabc", o45.repeat(2), "3 character string repeated twice is a six character string");
            o9.o37("abcabcabcabcabcabcabcabcabcabc", o45.repeat(10), "3 character string repeated ten times is a 30 character string");

            o9.o10(function () { o45.repeat(-1); }, o47, "negative repeat counts are out of range", "String.prototype.repeat: argument out of range");
            o9.o10(function () { o45.repeat(-Infinity); }, o47, "negative infinite repeat count is out of range", "String.prototype.repeat: argument out of range");
            o9.o10(function () { o45.repeat(Infinity); }, o47, "infinite repeat count is out of range", "String.prototype.repeat: argument out of range");

            o9.o37("\0\0\0\0", "\0".repeat(4), "null character embedded in string is repeated");
            o9.o37("a\0ba\0ba\0b", "a\0b".repeat(3), "null character embedded in string mixed with normal characters is repeated");
            o9.o37("\0abc\0\0abc\0\0abc\0", "\0abc\0".repeat(3), "null character embedded in string surrounding normal characters is repeated");
        }
    },
    {
        name: "startsWith returns true if the given search string matches the substring of the given string starting at the given position",
        o21: function () {
            o9.o10(function () { String.prototype.startsWith.call(); }, o12, "startsWith throws TypeError if it is given no arguments", "String.prototype.startsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.startsWith.call(undefined); }, o12, "startsWith throws TypeError if its this argument is undefined", "String.prototype.startsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.startsWith.call(undefined, "", 0); }, o12, "startsWith throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.startsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.startsWith.call(null); }, o12, "startsWith throws TypeError if its this argument is null", "String.prototype.startsWith: 'this' is null or undefined");
            o9.o10(function () { String.prototype.startsWith.call(null, "", 0); }, o12, "startsWith throws TypeError if its this argument is null even if given further arguments", "String.prototype.startsWith: 'this' is null or undefined");

            var o45;

            o45 = "";

            o9.o22(o45.startsWith(""), "the empty string starts with the empty string");
            o9.o49(o45.startsWith("anything"), "the empty string does not start with any non-empty string");
            o9.o22(o45.startsWith("", 1), "the search position is clipped to exist within the string and thus the the empty string starts with the empty string for any given position argument");
            o9.o22(o45.startsWith("", Infinity), "the empty string starts with the empty string even if given starting position is Infinity, since the starting position is clipped");

            o45 = "abcdefghijklmnopqrstuvwxyz";

            o9.o22(o45.startsWith(""), "a non-empty string starts with the empty string");
            o9.o22(o45.startsWith("a"), "single character prefix substring matches the beginning of the string");
            o9.o22(o45.startsWith("abc"), "prefix substring matches the beginning of the string");
            o9.o22(o45.startsWith("abcdefghijklm"), "long prefix substring string matches the beginning of the string");
            o9.o22(o45.startsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");

            o9.o49(o45.startsWith("bcd"), "non-prefix substring does not match beginning of the string");
            o9.o49(o45.startsWith("mnopqrstuv"), "long non-prefix substring does not match beginning of the string");
            o9.o49(o45.startsWith("xyz"), "suffix substring does not match beginning of the string");
            o9.o49(o45.startsWith("abczzz"), "non-substring with partial prefix match does not match beginning of the string");

            o9.o22(o45.startsWith("", 3), "a non-empty string starts with the empty string at any position");
            o9.o22(o45.startsWith("", 26), "a non-empty string starts with the empty string at its end");
            o9.o22(o45.startsWith("", Infinity), "a non-empty string starts with the empty string at its end (Infinity clipped to end position)");
            o9.o22(o45.startsWith("abcd", -Infinity), "a non-empty string starts with a prefix substring at its beginning (-Infinity clipped to start position)");
            o9.o22(o45.startsWith("bcd", 1), "a non-empty string starts with a given substring at the position where that substring begins");
            o9.o22(o45.startsWith("mnopqrstuv", 12), "a non-empty string starts with a given (long) substring at the position where that substring begins");
            o9.o22(o45.startsWith("xyz", 23), "a non-empty string starts with a suffix substring at the position where the suffix begins");
            o9.o22(o45.startsWith("z", 25), "a non-empty string starts with a single character suffix substring at the last position in the string");
            o9.o49(o45.startsWith("z", 26), "a non-empty string does not start with a single suffix substring at the position past the string");

            o45 = "abc\0def";

            o9.o22(o45.startsWith("abc\0def"), "string with embedded null character starts with itself");
            o9.o22(o45.startsWith("abc\0d"), "string with embedded null character starts with prefix including null character");
            o9.o22(o45.startsWith("abc\0"), "string with embedded null character starts with prefix including and ending with null character in search string");
            o9.o49(o45.startsWith("abc\0abc"), "string with embedded null character does not start with string that is only different after null character");
            o9.o49(o45.startsWith("def\0abc"), "string with embedded null character does not start with string that is only different before null character");
            o9.o22(o45.startsWith("\0def", 3), "string with embedded null character starts with substring beginning with null character at corresponding starting position");

            var o50 = 12345;

            o9.o22(String.prototype.startsWith.call(o50, "123"), "startsWith works even when its this argument is not a string object");
            o9.o49(String.prototype.startsWith.call(o50, "45"), "startsWith works even when its this argument is not a string object");
        }
    },
    {
        name: "startsWith throws if searchString is a RegExp",
        o21: o2.bind(undefined, "startsWith")
    },
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
            o9.o49(o45.endsWith("anything"), "the empty string does not end with any non-empty string");
            o9.o22(o45.endsWith("", -1), "the search position is clipped to exist within the string and thus the the empty string ends with the empty string for any given position argument");
            o9.o22(o45.endsWith("", Infinity), "the empty string ends with the empty string even if given ending position is Infinity, since the ending position is clipped");

            o45 = "abcdefghijklmnopqrstuvwxyz";

            o9.o22(o45.endsWith(""), "a non-empty string ends with the empty string");
            o9.o22(o45.endsWith("z"), "single character suffix substring matches the beginning of the string");
            o9.o22(o45.endsWith("xyz"), "suffix substring matches the beginning of the string");
            o9.o22(o45.endsWith("nopqrstuvwxyz"), "long suffix substring string matches the beginning of the string");
            o9.o22(o45.endsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");

            o9.o49(o45.endsWith("wxy"), "non-suffix substring does not match beginning of the string");
            o9.o49(o45.endsWith("mnopqrstuv"), "long non-suffix substring does not match beginning of the string");
            o9.o49(o45.endsWith("abc"), "prefix substring does not match beginning of the string");
            o9.o49(o45.endsWith("aaaxyz"), "non-substring with partial suffix match does not match beginning of the string");

            o9.o22(o45.endsWith("", 23), "a non-empty string ends with the empty string at any position");
            o9.o22(o45.endsWith("", 0), "a non-empty string ends with the empty string at its beginning");
            o9.o22(o45.endsWith("wxyz", Infinity), "a non-empty string ends with a suffix substring at its end (Infinity clipped to end position)");
            o9.o22(o45.endsWith("", -Infinity), "a non-empty string ends with the empty string at its beginning (-Infinity clipped to start position)");
            o9.o22(o45.endsWith("wxy", 25), "a non-empty string ends with a given substring at the position where that substring ends");
            o9.o22(o45.endsWith("mnopqrstuv", 22), "a non-empty string ends with a given (long) substring at the position where that substring ends");
            o9.o22(o45.endsWith("abc", 3), "a non-empty string ends with a prefix substring at the position where the prefix ends");
            o9.o22(o45.endsWith("a", 1), "a non-empty string ends with a single character prefix substring at the first position in the string");
            o9.o49(o45.endsWith("a", 0), "a non-empty string does not end with a single prefix substring at the position past the beginning of the string");

            o45 = "abc\0def";

            o9.o22(o45.endsWith("abc\0def"), "string with embedded null character ends with itself");
            o9.o22(o45.endsWith("c\0def"), "string with embedded null character ends with prefix including null character");
            o9.o22(o45.endsWith("\0def"), "string with embedded null character ends with prefix including and starting with null character in search string");
            o9.o49(o45.endsWith("abc\0abc"), "string with embedded null character does not end with string that is only different after null character");
            o9.o49(o45.endsWith("def\0abc"), "string with embedded null character does not end with string that is only different before null character");
            o9.o22(o45.endsWith("abc\0", 4), "string with embedded null character ends with substring ending with null character at corresponding ending position");

            var o50 = 12345;

            o9.o22(String.prototype.endsWith.call(o50, "345"), "endsWith works even when its this argument is not a string object");
            o9.o49(String.prototype.endsWith.call(o50, "12"), "endsWith works even when its this argument is not a string object");
        }
    },
    {
        name: "endsWith throws if searchString is a RegExp",
        o21: o2.bind(undefined, "endsWith")
    },
    {
        name: "includes returns true if the given search string matches any substring of the given string",
        o21: function () {
            o9.o10(function () { String.prototype.includes.call(); }, o12, "includes throws TypeError if it is given no arguments", "String.prototype.includes: 'this' is null or undefined");
            o9.o10(function () { String.prototype.includes.call(undefined); }, o12, "includes throws TypeError if its this argument is undefined", "String.prototype.includes: 'this' is null or undefined");
            o9.o10(function () { String.prototype.includes.call(undefined, "", 0); }, o12, "includes throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.includes: 'this' is null or undefined");
            o9.o10(function () { String.prototype.includes.call(null); }, o12, "includes throws TypeError if its this argument is null", "String.prototype.includes: 'this' is null or undefined");
            o9.o10(function () { String.prototype.includes.call(null, "", 0); }, o12, "includes throws TypeError if its this argument is null even if given further arguments", "String.prototype.includes: 'this' is null or undefined");

            var o45;

            o45 = "";

            o9.o22(o45.includes(""), "the empty string includes the empty string");
            o9.o49(o45.includes("anything"), "the empty string includes no non-empty strings");
            o9.o22(o45.includes("", 1), "the search position is clipped to exist within the string and thus the empty string includes itself for any given position argument");
            o9.o22(o45.includes("", Infinity), "the empty string includes the empty string even if given ending position is Infinity, since the ending position is clipped");

            o45 = "abcdefghijklmnopqrstuvwxyz";

            o9.o22(o45.includes(""), "a non-empty string includes the empty string");
            o9.o22(o45.includes("abc"), "substring found at the beginning of the string");
            o9.o22(o45.includes("xyz"), "substring found at the end of the string");
            o9.o22(o45.includes("z"), "substring found at the very end of the string");
            o9.o22(o45.includes("ijklmno"), "substring found in the middle of the string");

            o9.o49(o45.includes("abczzz"), "substring partially matches at the beginning of the string but is not a match");
            o9.o49(o45.includes("xyzaaa"), "substring partially matches at the ending of the string but is not a match");
            o9.o49(o45.includes("zaaa"), "substring partially matches at the very ending of the string but is not a match");
            o9.o49(o45.includes("ijklxyz"), "substring partially matches in the middle of the string but is not a match");

            o9.o22(o45.includes("", 26), "a non-empty string includes the empty string even at the end");
            o9.o22(o45.includes("", Infinity), "a non-empty string includes the empty string even at the end (Infinity clipped to end position)");
            o9.o22(o45.includes("abc", -Infinity), "a non-empty string includes a substring starting at the beginning (-Infinity clipped to start position)");
            o9.o49(o45.includes("z", 26), "a non-empty string includes no non-empty string at the end");
            o9.o22(o45.includes("z", 25), "starting at the last character, a string includes its last character");
            o9.o49(o45.includes("y", 25), "starting at the last character, a string does not contain previous characters");
            o9.o49(o45.includes("abc", 1), "a string does not contain a substring if the only occurrence begins before the given start position");
            o9.o22(o45.includes("mnop", 5), "substring found in the middle of a string after the given start position");
            o9.o22(o45.includes("efg", 4), "substring found in the middle of a string at the given start position");

            o45 = "abc\0def";

            o9.o22(o45.includes("abc\0def"), "string with embedded null character includes itself");
            o9.o22(o45.includes("abc\0d"), "string with embedded null character includes prefix including null character");
            o9.o22(o45.includes("abc\0"), "string with embedded null character includes prefix including and ending with null character in search string");
            o9.o22(o45.includes("\0def"), "string with embedded null character includes prefix including and starting with null character in search string");
            o9.o49(o45.includes("abc\0abc"), "string with embedded null character does not contain string that is only different after null character");
            o9.o49(o45.includes("def\0abc"), "string with embedded null character does not contain string that is only different before null character");
            o9.o22(o45.includes("\0def", 3), "string with embedded null character includes with substring beginning with null character at corresponding starting position");

            var o50 = 12345;

            o9.o22(String.prototype.includes.call(o50, "34"), "includes works even when its this argument is not a string object");
            o9.o49(String.prototype.includes.call(o50, "7"), "includes works even when its this argument is not a string object");
        }
    },
    {
        name: "includes throws if searchString is a RegExp",
        o21: o2.bind(undefined, "includes")
    },
    {
        name: "String.fromCodePoint has correct shape",
        o21: function() {
            o9.o37(1, String.fromCodePoint.length, "String.fromCodePoint.length === 1");
        }
    },
];

o52.o53(o19, { o54: o0.o55[0] != "summary" });

