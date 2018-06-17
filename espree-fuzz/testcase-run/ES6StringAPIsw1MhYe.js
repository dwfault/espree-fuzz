//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 String API extensions tests -- verifies the API shape and basic functionality

try { {} } catch(e) {}try { {} } catch(e) {}

var o8 = o30.call(Array, 'string', 'other string', 5, { 0: 'string val',length:10 })

var o12 = [
    {
        name: "Array prototype and String prototype should have spec defined built-ins with correct lengths",
        o13: function () {
            try {
o6.o14(Array.prototype.hasOwnProperty('find'), "Array.prototype should have a find method");
}catch(e){}
            try {
o6.o14(Array.prototype.hasOwnProperty('findIndex'), "Array.prototype should have a findIndex method");
}catch(e){}

            try {
o6.o14(String.prototype.hasOwnProperty('repeat'), "String.prototype should have a repeat method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('startsWith'), "String.prototype should have a startsWith method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('endsWith'), "String.prototype should have a endsWith method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('includes'), "String.prototype should have a includes method");
}catch(e){}

            try {
o6.o14(Array.prototype.find.length === 1, "find method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(Array.prototype.findIndex.length === 1, "findIndex method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}

            try {
o6.o14(String.prototype.repeat.length === 1, "repeat method takes zero arguments");
}catch(e){}
            try {
o6.o14(String.prototype.startsWith.length === 1, "startsWith method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(String.prototype.endsWith.length === 1, "endsWith method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(String.prototype.includes.length === 1, "includes method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
        }
    },
    {
        name: "find takes a predicate and applies it to each element in the array in ascending order until the predicate returns true, then find returns that element",
        o13: function () {
            try {
o6.o7(function () { try {
Array.prototype.find.call();
}catch(e){} }, o8, "find throws TypeError if it is given no arguments", "Array.prototype.find: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.find.call(undefined);
}catch(e){} }, o8, "find throws TypeError if its this argument is undefined", "Array.prototype.find: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.find.call(undefined, function () { try {
return true;
}catch(e){} }, {});
}catch(e){} }, o8, "find throws TypeError if its this argument is undefined even if given further arguments", "Array.prototype.find: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.find.call(null);
}catch(e){} }, o8, "find throws TypeError if its this argument is null", "Array.prototype.find: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.find.call(null, function () { try {
return true;
}catch(e){} }, {});
}catch(e){} }, o8, "find throws TypeError if its this argument is null even if given further arguments", "Array.prototype.find: 'this' is null or undefined");
}catch(e){}

            var o15 = [ 1, 2, 3 ];

            // Test missing/invalid predicate argument
            try {
o6.o7(function () { try {
o15.find();
}catch(e){} }, o8, "find throws TypeError if it is given no predicate argument", "Array.prototype.find: argument is not a Function object");
}catch(e){}
            try {
o6.o7(function () { try {
o15.find({});
}catch(e){} }, o8, "find throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.find: argument is not a Function object");
}catch(e){}

            var o16 = {
                __proto__: Array.prototype,
                get length () { try {
throw new Error('getter called');
}catch(e){} }
            };

            try {
o6.o7(function () { try {
o16.find();
}catch(e){} }, Error, "find gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");
}catch(e){}

            // Test simple predicates matching each element
            try {
o6.o17(        1, o15.find(function (o18, o19, o20) { try {
return true;
}catch(e){} }), "Simple predicate always returns true, should find first item");
}catch(e){}
            try {
o6.o17(        1, o15.find(function (o18, o19, o20) { try {
if (o19 >= 1) { try {
o6.o21("shouldn't visit index > 0");
}catch(e){} }
}catch(e){} try {
return o18 === 1;
}catch(e){} }), "Simple predicate matching first element, should find first element");
}catch(e){}
            try {
o6.o17(        2, o15.find(function (o18, o19, o20) { try {
if (o19 >= 2) { try {
o6.o21("shouldn't visit index > 1");
}catch(e){} }
}catch(e){} try {
return o18 === 2;
}catch(e){} }), "Simple predicate matching second element, should find second element");
}catch(e){}
            try {
o6.o17(        3, o15.find(function (o18, o19, o20) { try {
if (o19 >= 3) { try {
o6.o21("shouldn't visit index > 2");
}catch(e){} }
}catch(e){} try {
return o18 === 3;
}catch(e){} }), "Simple predicate matching third element, should find third element");
}catch(e){}
            try {
o6.o17(undefined, o15.find(function (o18, o19, o20) { try {
if (o19 >= 3) { try {
o6.o21("shouldn't visit index > 2");
}catch(e){} }
}catch(e){} try {
return o18 === 4;
}catch(e){} }), "Simple predicate matching non-existent element, should not find any element");
}catch(e){}
            try {
o6.o17(        2, o15.find(function (o18, o19, o20) { try {
if (o19 >= 2) { try {
o6.o21("shouldn't visit index > 1");
}catch(e){} }
}catch(e){} try {
return o18 === 2 || o18 === 3;
}catch(e){} }), "Simple predicate matching two elements, second and third, should find first of them, i.e. the second element");
}catch(e){}

            // Test adding elements in predicate function
            try {
o6.o17(undefined, o15.find(function (o18, o19, o20) { try {
if (o19 >= 3) { try {
o6.o21("shouldn't visit index > 2 (initial array length");
}catch(e){} }
}catch(e){} try {
o20.push(o18 + 3);
}catch(e){} try {
return false;
}catch(e){} }), "Elements added after find has started shouldn't be included in the search");
}catch(e){}
            try {
o6.o17([ 1, 2, 3, 4, 5, 6 ], o15, "Three more elements should be added to end of arr");
}catch(e){}

            // Test deleting elements in predicate function that have not been visited
            function o4(o18, o19, o20) {
                try {
if (o19 % 2 === 1) {
                    try {
o6.o17(undefined, o18, "odd indices should be undefined since they were deleted");
}catch(e){}
                } else {
                    try {
delete o20[o19+1];
}catch(e){}
                }
}catch(e){}
                try {
return false;
}catch(e){}
            }try {
;
}catch(e){}
            try {
o6.o17(undefined, o15.find(o4), "Elements deleted before being visited after find has started shouldn't be included in the search");
}catch(e){}
            try {
o6.o17(        1, o15[0], "Odd elements should be deleted [0]");
}catch(e){}
            try {
o6.o17(undefined, o15[1], "Odd elements should be deleted [1]");
}catch(e){}
            try {
o6.o17(        3, o15[2], "Odd elements should be deleted [2]");
}catch(e){}
            try {
o6.o17(undefined, o15[3], "Odd elements should be deleted [3]");
}catch(e){}
            try {
o6.o17(        5, o15[4], "Odd elements should be deleted [4]");
}catch(e){}
            try {
o6.o17(undefined, o15[5], "Odd elements should be deleted [5]");
}catch(e){}

            // Test deleting elements in predicate function that have already been visited
            try {
o6.o17(undefined, o15.find(function (o18, o19, o20) { try {
delete o20[o19];
}catch(e){} try {
return false;
}catch(e){} }), "Elements deleted after being visited has no effect on the search");
}catch(e){}
            try {
o6.o17(undefined, o15[0], "All elements should be deleted [0]");
}catch(e){}
            try {
o6.o17(undefined, o15[1], "All elements should be deleted [1]");
}catch(e){}
            try {
o6.o17(undefined, o15[2], "All elements should be deleted [2]");
}catch(e){}
            try {
o6.o17(undefined, o15[3], "All elements should be deleted [3]");
}catch(e){}
            try {
o6.o17(undefined, o15[4], "All elements should be deleted [4]");
}catch(e){}
            try {
o6.o17(undefined, o15[5], "All elements should be deleted [5]");
}catch(e){}

            try {
o6.o17(6, o15.length, "arr length is still 6");
}catch(e){}

            // Test thisArg argument
            var o22 = { };
            try {
o6.o17(undefined, o15.find(function (o18, o19, o20) { try {
if (this !== o22) { try {
o6.o21("this is not what was passed to second parameter of find()");
}catch(e){} }
}catch(e){} try {
return false;
}catch(e){} }, o22), "Argument passed as the optional second parameter of find should become the this value in the predicate");
}catch(e){}

            // Test and ensure Array.prototype.find calls ToLength
            //    checks lower bound (negative -> zero)
            //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time
            var o15 = { '0': 1, '1': 2, '2': 3, length: -1 };
            try {
o6.o17(undefined, Array.prototype.find.call(o15, function (o18, o19, o20) {try {
o6.o21("shouldn't visit any element when length is less than zero");
}catch(e){} try {
return true;
}catch(e){}}), "find should use ToLength function that clamps length between 0 and pow(2,53)-1");
}catch(e){}
        }
    },
    {
        name: "findIndex takes a predicate and applies it to each element in the array in ascending order until the predicate returns true, then findIndex returns the index of that element",
        o13: function () {
            try {
o6.o7(function () { try {
Array.prototype.findIndex.call();
}catch(e){} }, o8, "findIndex throws TypeError if it is given no arguments", "Array.prototype.findIndex: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.findIndex.call(undefined);
}catch(e){} }, o8, "findIndex throws TypeError if its this argument is undefined", "Array.prototype.findIndex: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.findIndex.call(undefined, function () { try {
return true;
}catch(e){} }, {});
}catch(e){} }, o8, "findIndex throws TypeError if its this argument is undefined even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.findIndex.call(null);
}catch(e){} }, o8, "findIndex throws TypeError if its this argument is null", "Array.prototype.findIndex: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
Array.prototype.findIndex.call(null, function () { try {
return true;
}catch(e){} }, {});
}catch(e){} }, o8, "findIndex throws TypeError if its this argument is null even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");
}catch(e){}

            var o15 = [ 1, 2, 3 ];

            // Test missing/invalid predicate argument
            try {
o6.o7(function () { try {
o15.findIndex();
}catch(e){} }, o8, "findIndex throws TypeError if it is given no predicate argument", "Array.prototype.findIndex: argument is not a Function object");
}catch(e){}
            try {
o6.o7(function () { try {
o15.findIndex({});
}catch(e){} }, o8, "findIndex throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.findIndex: argument is not a Function object");
}catch(e){}

            var o16 = {
                __proto__: Array.prototype,
                get length () { try {
throw new Error('getter called');
}catch(e){} }
            };

            try {
o6.o7(function () { try {
o16.findIndex();
}catch(e){} }, Error, "findIndex gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");
}catch(e){}

            // Test simple predicates matching each element
            try {
o6.o17( 0, o15.findIndex(function (o18, o19, o20) { try {
return true;
}catch(e){} }), "Simple predicate always returns true, should find first item");
}catch(e){}
            try {
o6.o17( 0, o15.findIndex(function (o18, o19, o20) { try {
if (o19 >= 1) { try {
o6.o21("shouldn't visit index > 0");
}catch(e){} }
}catch(e){} try {
return o18 === 1;
}catch(e){} }), "Simple predicate matching first element, should find first element");
}catch(e){}
            try {
o6.o17( 1, o15.findIndex(function (o18, o19, o20) { try {
if (o19 >= 2) { try {
o6.o21("shouldn't visit index > 1");
}catch(e){} }
}catch(e){} try {
return o18 === 2;
}catch(e){} }), "Simple predicate matching second element, should find second element");
}catch(e){}
            try {
o6.o17( 2, o15.findIndex(function (o18, o19, o20) { try {
if (o19 >= 3) { try {
o6.o21("shouldn't visit index > 2");
}catch(e){} }
}catch(e){} try {
return o18 === 3;
}catch(e){} }), "Simple predicate matching third element, should find third element");
}catch(e){}
            try {
o6.o17(-1, o15.findIndex(function (o18, o19, o20) { try {
if (o19 >= 3) { try {
o6.o21("shouldn't visit index > 2");
}catch(e){} }
}catch(e){} try {
return o18 === 4;
}catch(e){} }), "Simple predicate matching non-existent element, should not find any element");
}catch(e){}
            try {
o6.o17( 1, o15.findIndex(function (o18, o19, o20) { try {
if (o19 >= 2) { try {
o6.o21("shouldn't visit index > 1");
}catch(e){} }
}catch(e){} try {
return o18 === 2 || o18 === 3;
}catch(e){} }), "Simple predicate matching two elements, second and third, should find first of them, i.e. the second element");
}catch(e){}

            // Test adding elements in predicate function
            try {
o6.o17(-1, o15.findIndex(function (o18, o19, o20) { try {
if (o19 >= 3) { try {
o6.o21("shouldn't visit index > 2 (initial array length");
}catch(e){} }
}catch(e){} try {
o20.push(o18 + 3);
}catch(e){} try {
return false;
}catch(e){} }), "Elements added after findIndex has started shouldn't be included in the search");
}catch(e){}
            try {
o6.o17([ 1, 2, 3, 4, 5, 6 ], o15, "Three more elements should be added to end of arr");
}catch(e){}

            // Test deleting elements in predicate function that have not been visited
            function o4(o18, o19, o20) {
                try {
if (o19 % 2 === 1) {
                    try {
o6.o17(undefined, o18, "odd indices should be undefined since they were deleted");
}catch(e){}
                } else {
                    try {
delete o20[o19+1];
}catch(e){}
                }
}catch(e){}
                try {
return false;
}catch(e){}
            }
            try {
o6.o17(       -1, o15.findIndex(o4), "Elements deleted before being visited after findIndex has started shouldn't be included in the search");
}catch(e){}
            try {
o6.o17(        1, o15[0], "Odd elements should be deleted [0]");
}catch(e){}
            try {
o6.o17(undefined, o15[1], "Odd elements should be deleted [1]");
}catch(e){}
            try {
o6.o17(        3, o15[2], "Odd elements should be deleted [2]");
}catch(e){}
            try {
o6.o17(undefined, o15[3], "Odd elements should be deleted [3]");
}catch(e){}
            try {
o6.o17(        5, o15[4], "Odd elements should be deleted [4]");
}catch(e){}
            try {
o6.o17(undefined, o15[5], "Odd elements should be deleted [5]");
}catch(e){}

            // Test deleting elements in predicate function that have already been visited
            try {
o6.o17(       -1, o15.findIndex(function (o18, o19, o20) { try {
delete o20[o19];
}catch(e){} try {
return false;
}catch(e){} }), "Elements deleted after being visited has no effect on the search");
}catch(e){}
            try {
o6.o17(undefined, o15[0], "All elements should be deleted [0]");
}catch(e){}
            try {
o6.o17(undefined, o15[1], "All elements should be deleted [1]");
}catch(e){}
            try {
o6.o17(undefined, o15[2], "All elements should be deleted [2]");
}catch(e){}
            try {
o6.o17(undefined, o15[3], "All elements should be deleted [3]");
}catch(e){}
            try {
o6.o17(undefined, o15[4], "All elements should be deleted [4]");
}catch(e){}
            try {
o6.o17(undefined, o15[5], "All elements should be deleted [5]");
}catch(e){}

            try {
o6.o17(6, o15.length, "arr length is still 6");
}catch(e){}

            // Test thisArg argument
            var o22 = { };
            try {
o6.o17(-1, o15.findIndex(function (o18, o19, o20) { try {
if (this !== o22) { try {
o6.o21("this is not what was passed to second parameter of findIndex()");
}catch(e){} }
}catch(e){} try {
return false;
}catch(e){} }, o22), "Argument passed as the optional second parameter of findIndex should become the this value in the predicate");
}catch(e){}

            // Test and ensure Array.prototype.findIndex calls ToLength
            //    checks lower bound (negative -> zero)
            //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time
            var o15 = { '0': 1, '1': 2, '2': 3, length: -3 };
            try {
o6.o17(-1, Array.prototype.findIndex.call(o15, function (o18, o19, o20) {try {
o6.o21("shouldn't visit any element when length is less than zero");
}catch(e){} try {
return true;
}catch(e){}}), "findIndex should use ToLength function that clamps length between 0 and pow(2,53)-1");
}catch(e){}
        }
    },
    {
        name: "find and findIndex do not skip 'holes' in arrays and array-likes",
        o13: function () {
            var o15 = [,,,,,];
            var o23 = 0;

            try {
o15.find(function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "find calls its callback for every element up to the array's length even if those elements are undefined");
}catch(e){}

            try {
o23 = 0;
}catch(e){}

            try {
o15.findIndex(function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "findIndex calls its callback for every element up to the array's length even if those elements are undefined");
}catch(e){}

            try {
o15 = { length: 5, 0: undefined, 1: undefined, 3: undefined };
}catch(e){}

            try {
o23 = 0;
}catch(e){}

            try {
Array.prototype.find.call(o15, function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "find calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");
}catch(e){}

            try {
o23 = 0;
}catch(e){}

            try {
Array.prototype.findIndex.call(o15, function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "findIndex calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");
}catch(e){}
        }
    },
    {
        name: "repeat takes a string and number and returns a string that is the given string repeated the given number of times",
        o13: function () {
            try {
o6.o7(function () { try {
String.prototype.repeat.call();
}catch(e){} }, o8, "repeat throws TypeError if it is given no arguments", "String.prototype.repeat: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.repeat.call(undefined);
}catch(e){} }, o8, "repeat throws TypeError if its this argument is undefined", "String.prototype.repeat: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.repeat.call(undefined, "", 0);
}catch(e){} }, o8, "repeat throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.repeat: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.repeat.call(null);
}catch(e){} }, o8, "repeat throws TypeError if its this argument is null", "String.prototype.repeat: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.repeat.call(null, "", 0);
}catch(e){} }, o8, "repeat throws TypeError if its this argument is null even if given further arguments", "String.prototype.repeat: 'this' is null or undefined");
}catch(e){}

            var o24;

            try {
o24 = "";
}catch(e){}

            try {
o6.o17("", o24.repeat(0), "empty string repeated zero times is the empty string");
}catch(e){}
            try {
o6.o17("", o24.repeat(NaN), "empty string: NaN converts to zero so produces the empty string");
}catch(e){}
            try {
o6.o17("", o24.repeat(1), "empty string repeated once is the empty string");
}catch(e){}
            try {
o6.o17("", o24.repeat(2), "empty string repeated twice is the empty string");
}catch(e){}
            try {
o6.o17("", o24.repeat(50), "empty string repeated fifty times is the empty string");
}catch(e){}

            try {
o24 = "a";
}catch(e){}

            try {
o6.o17("", o24.repeat(0), "single character string repeated zero times is the empty string");
}catch(e){}
            try {
o6.o17("", o24.repeat(NaN), "single character string: NaN converts to zero so produces the empty string");
}catch(e){}
            try {
o6.o17("a", o24.repeat(1), "single character string repeated once is itself");
}catch(e){}
            try {
o6.o17("aa", o24.repeat(2), "single character string repeated twice is a two character string");
}catch(e){}
            try {
o6.o17("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", o24.repeat(50), "single character string repeated fifty times is a 50 character string");
}catch(e){}

            try {
o24 = "abc";
}catch(e){}

            try {
o6.o17("", o24.repeat(0), "multi-character string repeated zero times is the empty string");
}catch(e){}
            try {
o6.o17("", o24.repeat(NaN), "multi-character string: NaN converts to zero so produces the empty string");
}catch(e){}
            try {
o6.o17("abc", o24.repeat(1), "multi-character string repeated once is itself");
}catch(e){}
            try {
o6.o17("abcabc", o24.repeat(2), "3 character string repeated twice is a six character string");
}catch(e){}
            try {
o6.o17("abcabcabcabcabcabcabcabcabcabc", o24.repeat(10), "3 character string repeated ten times is a 30 character string");
}catch(e){}

            try {
o6.o7(function () { try {
o24.repeat(-1);
}catch(e){} }, o25, "negative repeat counts are out of range", "String.prototype.repeat: argument out of range");
}catch(e){}
            try {
o6.o7(function () { try {
o24.repeat(-Infinity);
}catch(e){} }, o25, "negative infinite repeat count is out of range", "String.prototype.repeat: argument out of range");
}catch(e){}
            try {
o6.o7(function () { try {
o24.repeat(Infinity);
}catch(e){} }, o25, "infinite repeat count is out of range", "String.prototype.repeat: argument out of range");
}catch(e){}

            try {
o6.o17("\0\0\0\0", "\0".repeat(4), "null character embedded in string is repeated");
}catch(e){}
            try {
o6.o17("a\0ba\0ba\0b", "a\0b".repeat(3), "null character embedded in string mixed with normal characters is repeated");
}catch(e){}
            try {
o6.o17("\0abc\0\0abc\0\0abc\0", "\0abc\0".repeat(3), "null character embedded in string surrounding normal characters is repeated");
}catch(e){}
        }
    },
    {
        name: "startsWith returns true if the given search string matches the substring of the given string starting at the given position",
        o13: function () {
            try {
o6.o7(function () { try {
String.prototype.startsWith.call();
}catch(e){} }, o8, "startsWith throws TypeError if it is given no arguments", "String.prototype.startsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.startsWith.call(undefined);
}catch(e){} }, o8, "startsWith throws TypeError if its this argument is undefined", "String.prototype.startsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.startsWith.call(undefined, "", 0);
}catch(e){} }, o8, "startsWith throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.startsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.startsWith.call(null);
}catch(e){} }, o8, "startsWith throws TypeError if its this argument is null", "String.prototype.startsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.startsWith.call(null, "", 0);
}catch(e){} }, o8, "startsWith throws TypeError if its this argument is null even if given further arguments", "String.prototype.startsWith: 'this' is null or undefined");
}catch(e){}

            var o24;

            try {
o24 = "";
}catch(e){}

            try {
o6.o14(o24.startsWith(""), "the empty string starts with the empty string");
}catch(e){}
            try {
o6.o26(o24.startsWith("anything"), "the empty string does not start with any non-empty string");
}catch(e){}
            try {
o6.o14(o24.startsWith("", 1), "the search position is clipped to exist within the string and thus the the empty string starts with the empty string for any given position argument");
}catch(e){}
            try {
o6.o14(o24.startsWith("", Infinity), "the empty string starts with the empty string even if given starting position is Infinity, since the starting position is clipped");
}catch(e){}

            try {
o24 = "abcdefghijklmnopqrstuvwxyz";
}catch(e){}

            try {
o6.o14(o24.startsWith(""), "a non-empty string starts with the empty string");
}catch(e){}
            try {
o6.o14(o24.startsWith("a"), "single character prefix substring matches the beginning of the string");
}catch(e){}
            try {
o6.o14(o24.startsWith("abc"), "prefix substring matches the beginning of the string");
}catch(e){}
            try {
o6.o14(o24.startsWith("abcdefghijklm"), "long prefix substring string matches the beginning of the string");
}catch(e){}
            try {
o6.o14(o24.startsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");
}catch(e){}

            try {
o6.o26(o24.startsWith("bcd"), "non-prefix substring does not match beginning of the string");
}catch(e){}
            try {
o6.o26(o24.startsWith("mnopqrstuv"), "long non-prefix substring does not match beginning of the string");
}catch(e){}
            try {
o6.o26(o24.startsWith("xyz"), "suffix substring does not match beginning of the string");
}catch(e){}
            try {
o6.o26(o24.startsWith("abczzz"), "non-substring with partial prefix match does not match beginning of the string");
}catch(e){}

            try {
o6.o14(o24.startsWith("", 3), "a non-empty string starts with the empty string at any position");
}catch(e){}
            try {
o6.o14(o24.startsWith("", 26), "a non-empty string starts with the empty string at its end");
}catch(e){}
            try {
o6.o14(o24.startsWith("", Infinity), "a non-empty string starts with the empty string at its end (Infinity clipped to end position)");
}catch(e){}
            try {
o6.o14(o24.startsWith("abcd", -Infinity), "a non-empty string starts with a prefix substring at its beginning (-Infinity clipped to start position)");
}catch(e){}
            try {
o6.o14(o24.startsWith("bcd", 1), "a non-empty string starts with a given substring at the position where that substring begins");
}catch(e){}
            try {
o6.o14(o24.startsWith("mnopqrstuv", 12), "a non-empty string starts with a given (long) substring at the position where that substring begins");
}catch(e){}
            try {
o6.o14(o24.startsWith("xyz", 23), "a non-empty string starts with a suffix substring at the position where the suffix begins");
}catch(e){}
            try {
o6.o14(o24.startsWith("z", 25), "a non-empty string starts with a single character suffix substring at the last position in the string");
}catch(e){}
            try {
o6.o26(o24.startsWith("z", 26), "a non-empty string does not start with a single suffix substring at the position past the string");
}catch(e){}

            try {
o24 = "abc\0def";
}catch(e){}

            try {
o6.o14(o24.startsWith("abc\0def"), "string with embedded null character starts with itself");
}catch(e){}
            try {
o6.o14(o24.startsWith("abc\0d"), "string with embedded null character starts with prefix including null character");
}catch(e){}
            try {
o6.o14(o24.startsWith("abc\0"), "string with embedded null character starts with prefix including and ending with null character in search string");
}catch(e){}
            try {
o6.o26(o24.startsWith("abc\0abc"), "string with embedded null character does not start with string that is only different after null character");
}catch(e){}
            try {
o6.o26(o24.startsWith("def\0abc"), "string with embedded null character does not start with string that is only different before null character");
}catch(e){}
            try {
o6.o14(o24.startsWith("\0def", 3), "string with embedded null character starts with substring beginning with null character at corresponding starting position");
}catch(e){}

            var o27 = 12345;

            try {
o6.o14(String.prototype.startsWith.call(o27, "123"), "startsWith works even when its this argument is not a string object");
}catch(e){}
            try {
o6.o26(String.prototype.startsWith.call(o27, "45"), "startsWith works even when its this argument is not a string object");
}catch(e){}
        }
    },
    {
        name: "startsWith throws if searchString is a RegExp",
        o13: o2.bind(undefined, "startsWith")
    },
    {
        name: "endsWith returns true if the given search string matches the substring of the given string ending at the given position",
        o13: function () {
            try {
o6.o7(function () { try {
String.prototype.endsWith.call();
}catch(e){} }, o8, "endsWith throws TypeError if it is given no arguments", "String.prototype.endsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.endsWith.call(undefined);
}catch(e){} }, o8, "endsWith throws TypeError if its this argument is undefined", "String.prototype.endsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.endsWith.call(undefined, "", 0);
}catch(e){} }, o8, "endsWith throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.endsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.endsWith.call(null);
}catch(e){} }, o8, "endsWith throws TypeError if its this argument is null", "String.prototype.endsWith: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.endsWith.call(null, "", 0);
}catch(e){} }, o8, "endsWith throws TypeError if its this argument is null even if given further arguments", "String.prototype.endsWith: 'this' is null or undefined");
}catch(e){}

            var o24;

            try {
o24 = "";
}catch(e){}

            try {
o6.o14(o24.endsWith(""), "the empty string ends with the empty string");
}catch(e){}
            try {
o6.o26(o24.endsWith("anything"), "the empty string does not end with any non-empty string");
}catch(e){}
            try {
o6.o14(o24.endsWith("", -1), "the search position is clipped to exist within the string and thus the the empty string ends with the empty string for any given position argument");
}catch(e){}
            try {
o6.o14(o24.endsWith("", Infinity), "the empty string ends with the empty string even if given ending position is Infinity, since the ending position is clipped");
}catch(e){}

            try {
o24 = "abcdefghijklmnopqrstuvwxyz";
}catch(e){}

            try {
o6.o14(o24.endsWith(""), "a non-empty string ends with the empty string");
}catch(e){}
            try {
o6.o14(o24.endsWith("z"), "single character suffix substring matches the beginning of the string");
}catch(e){}
            try {
o6.o14(o24.endsWith("xyz"), "suffix substring matches the beginning of the string");
}catch(e){}
            try {
o6.o14(o24.endsWith("nopqrstuvwxyz"), "long suffix substring string matches the beginning of the string");
}catch(e){}
            try {
o6.o14(o24.endsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");
}catch(e){}

            try {
o6.o26(o24.endsWith("wxy"), "non-suffix substring does not match beginning of the string");
}catch(e){}
            try {
o6.o26(o24.endsWith("mnopqrstuv"), "long non-suffix substring does not match beginning of the string");
}catch(e){}
            try {
o6.o26(o24.endsWith("abc"), "prefix substring does not match beginning of the string");
}catch(e){}
            try {
o6.o26(o24.endsWith("aaaxyz"), "non-substring with partial suffix match does not match beginning of the string");
}catch(e){}

            try {
o6.o14(o24.endsWith("", 23), "a non-empty string ends with the empty string at any position");
}catch(e){}
            try {
o6.o14(o24.endsWith("", 0), "a non-empty string ends with the empty string at its beginning");
}catch(e){}
            try {
o6.o14(o24.endsWith("wxyz", Infinity), "a non-empty string ends with a suffix substring at its end (Infinity clipped to end position)");
}catch(e){}
            try {
o6.o14(o24.endsWith("", -Infinity), "a non-empty string ends with the empty string at its beginning (-Infinity clipped to start position)");
}catch(e){}
            try {
o6.o14(o24.endsWith("wxy", 25), "a non-empty string ends with a given substring at the position where that substring ends");
}catch(e){}
            try {
o6.o14(o24.endsWith("mnopqrstuv", 22), "a non-empty string ends with a given (long) substring at the position where that substring ends");
}catch(e){}
            try {
o6.o14(o24.endsWith("abc", 3), "a non-empty string ends with a prefix substring at the position where the prefix ends");
}catch(e){}
            try {
o6.o14(o24.endsWith("a", 1), "a non-empty string ends with a single character prefix substring at the first position in the string");
}catch(e){}
            try {
o6.o26(o24.endsWith("a", 0), "a non-empty string does not end with a single prefix substring at the position past the beginning of the string");
}catch(e){}

            try {
o24 = "abc\0def";
}catch(e){}

            try {
o6.o14(o24.endsWith("abc\0def"), "string with embedded null character ends with itself");
}catch(e){}
            try {
o6.o14(o24.endsWith("c\0def"), "string with embedded null character ends with prefix including null character");
}catch(e){}
            try {
o6.o14(o24.endsWith("\0def"), "string with embedded null character ends with prefix including and starting with null character in search string");
}catch(e){}
            try {
o6.o26(o24.endsWith("abc\0abc"), "string with embedded null character does not end with string that is only different after null character");
}catch(e){}
            try {
o6.o26(o24.endsWith("def\0abc"), "string with embedded null character does not end with string that is only different before null character");
}catch(e){}
            try {
o6.o14(o24.endsWith("abc\0", 4), "string with embedded null character ends with substring ending with null character at corresponding ending position");
}catch(e){}

            var o27 = 12345;

            try {
o6.o14(String.prototype.endsWith.call(o27, "345"), "endsWith works even when its this argument is not a string object");
}catch(e){}
            try {
o6.o26(String.prototype.endsWith.call(o27, "12"), "endsWith works even when its this argument is not a string object");
}catch(e){}
        }
    },
    {
        name: "endsWith throws if searchString is a RegExp",
        o13: o2.bind(undefined, "endsWith")
    },
    {
        name: "includes returns true if the given search string matches any substring of the given string",
        o13: function () {
            try {
o6.o7(function () { try {
String.prototype.includes.call();
}catch(e){} }, o8, "includes throws TypeError if it is given no arguments", "String.prototype.includes: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.includes.call(undefined);
}catch(e){} }, o8, "includes throws TypeError if its this argument is undefined", "String.prototype.includes: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.includes.call(undefined, "", 0);
}catch(e){} }, o8, "includes throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.includes: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.includes.call(null);
}catch(e){} }, o8, "includes throws TypeError if its this argument is null", "String.prototype.includes: 'this' is null or undefined");
}catch(e){}
            try {
o6.o7(function () { try {
String.prototype.includes.call(null, "", 0);
}catch(e){} }, o8, "includes throws TypeError if its this argument is null even if given further arguments", "String.prototype.includes: 'this' is null or undefined");
}catch(e){}

            var o24;

            try {
o24 = "";
}catch(e){}

            try {
o6.o14(o24.includes(""), "the empty string includes the empty string");
}catch(e){}
            try {
o6.o26(o24.includes("anything"), "the empty string includes no non-empty strings");
}catch(e){}
            try {
o6.o14(o24.includes("", 1), "the search position is clipped to exist within the string and thus the empty string includes itself for any given position argument");
}catch(e){}
            try {
o6.o14(o24.includes("", Infinity), "the empty string includes the empty string even if given ending position is Infinity, since the ending position is clipped");
}catch(e){}

            try {
o24 = "abcdefghijklmnopqrstuvwxyz";
}catch(e){}

            try {
o6.o14(o24.includes(""), "a non-empty string includes the empty string");
}catch(e){}
            try {
o6.o14(o24.includes("abc"), "substring found at the beginning of the string");
}catch(e){}
            try {
o6.o14(o24.includes("xyz"), "substring found at the end of the string");
}catch(e){}
            try {
o6.o14(o24.includes("z"), "substring found at the very end of the string");
}catch(e){}
            try {
o6.o14(o24.includes("ijklmno"), "substring found in the middle of the string");
}catch(e){}

            try {
o6.o26(o24.includes("abczzz"), "substring partially matches at the beginning of the string but is not a match");
}catch(e){}
            try {
o6.o26(o24.includes("xyzaaa"), "substring partially matches at the ending of the string but is not a match");
}catch(e){}
            try {
o6.o26(o24.includes("zaaa"), "substring partially matches at the very ending of the string but is not a match");
}catch(e){}
            try {
o6.o26(o24.includes("ijklxyz"), "substring partially matches in the middle of the string but is not a match");
}catch(e){}

            try {
o6.o14(o24.includes("", 26), "a non-empty string includes the empty string even at the end");
}catch(e){}
            try {
o6.o14(o24.includes("", Infinity), "a non-empty string includes the empty string even at the end (Infinity clipped to end position)");
}catch(e){}
            try {
o6.o14(o24.includes("abc", -Infinity), "a non-empty string includes a substring starting at the beginning (-Infinity clipped to start position)");
}catch(e){}
            try {
o6.o26(o24.includes("z", 26), "a non-empty string includes no non-empty string at the end");
}catch(e){}
            try {
o6.o14(o24.includes("z", 25), "starting at the last character, a string includes its last character");
}catch(e){}
            try {
o6.o26(o24.includes("y", 25), "starting at the last character, a string does not contain previous characters");
}catch(e){}
            try {
o6.o26(o24.includes("abc", 1), "a string does not contain a substring if the only occurrence begins before the given start position");
}catch(e){}
            try {
o6.o14(o24.includes("mnop", 5), "substring found in the middle of a string after the given start position");
}catch(e){}
            try {
o6.o14(o24.includes("efg", 4), "substring found in the middle of a string at the given start position");
}catch(e){}

            try {
o24 = "abc\0def";
}catch(e){}

            try {
o6.o14(o24.includes("abc\0def"), "string with embedded null character includes itself");
}catch(e){}
            try {
o6.o14(o24.includes("abc\0d"), "string with embedded null character includes prefix including null character");
}catch(e){}
            try {
o6.o14(o24.includes("abc\0"), "string with embedded null character includes prefix including and ending with null character in search string");
}catch(e){}
            try {
o6.o14(o24.includes("\0def"), "string with embedded null character includes prefix including and starting with null character in search string");
}catch(e){}
            try {
o6.o26(o24.includes("abc\0abc"), "string with embedded null character does not contain string that is only different after null character");
}catch(e){}
            try {
o6.o26(o24.includes("def\0abc"), "string with embedded null character does not contain string that is only different before null character");
}catch(e){}
            try {
o6.o14(o24.includes("\0def", 3), "string with embedded null character includes with substring beginning with null character at corresponding starting position");
}catch(e){}

            var o27 = 12345;

            try {
o6.o14(String.prototype.includes.call(o27, "34"), "includes works even when its this argument is not a string object");
}catch(e){}
            try {
o6.o26(String.prototype.includes.call(o27, "7"), "includes works even when its this argument is not a string object");
}catch(e){}
        }
    },
    {
        name: "includes throws if searchString is a RegExp",
        o13: o2.bind(undefined, "includes")
    },
    {
        name: "String.fromCodePoint has correct shape",
        o13: function() {
            try {
o6.o17(1, String.fromCodePoint.length, "String.fromCodePoint.length === 1");
}catch(e){}
        }
    },
];

try {
o28.o29(o12, { o30: o0.o31[0] != "summary" });
}catch(e){}

