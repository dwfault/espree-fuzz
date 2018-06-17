//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array.prototype.includes(x,y) API extension tests -- verifies the API shape and basic functionality

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = [
    {
        name: "Array.prototype.includes range test cases",
        o3: function () {
            var o4 = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, undefined, 1.1, 2.4]

            for(var o5=0; o5 < o4.length; o5++)
            {
                o6.o7(o4.includes(o4[o5]), "includes returns true for valid search values in the array range including NaN and undefined")
            }
            o6.o7(o4.includes(-0), "includes treats -0 and +0 as same");
        }
    },
    {
        name: "Array.prototype.includes out of range test cases",
        o3: function () {
            var o4 = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, undefined, 1.1, 2.4]

            o6.o8(o4.includes(1, 1), "includes(1, 1): out of range values should return false");
            o6.o8(o4.includes(-0, 10), "includes(-0, 10): out of range values should return false");
            o6.o8(o4.includes(undefined, o4.length - 2), "includes(undefined, x.length - 2): out of range values should return false");
            o6.o8(o4.includes(10), "includes(10): out of range values should return false");
            o6.o8(o4.includes(null), "includes(null): out of range values should return false");
        }
    },
    {
        name: "Array.prototype.includes works with native arrays",
        o3: function () {
            var o4 = [1, 2, 2, 4, 5, 0]; //native int array
            o6.o7(o4.includes(2), "includes(2): includes return true for search hits");
            o6.o7(o4.includes(0), "includes(0): includes return true for search hits");
            o6.o8(o4.includes(3), "includes(3): includes return false for search miss");
            o6.o8(o4.includes(1.2), "includes(1.2): includes return false for search miss");
            o6.o8(o4.includes(undefined), "includes(undefined): includes return false for search miss");
            o6.o7(o4.includes(2, -5), "includes(2, -5): includes return true for search hit");
            o6.o8(o4.includes(2, -1), "includes(2, -1): includes return false for search miss");
            o6.o7(o4.includes(-0), "includes(-0): includes return true for search hit");

            var o4 = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; //native float array
            o6.o7(o4.includes(2.3), "includes(2.3): includes return true for search hits");
            o6.o7(o4.includes(0), "includes(0): includes return true for search hits");
            o6.o8(o4.includes(-2.9), "includes(-2.9): includes return false for search miss");
            o6.o7(o4.includes(1.2), "includes(1.2): includes return false for search miss");
            o6.o8(o4.includes(undefined), "includes(undefined): includes return false for search miss");
            o6.o7(o4.includes(2.3, -5), "includes(2.3, -5): includes return true for search hit");
            o6.o8(o4.includes(2, -1), "includes(2, -1): includes return false for search miss");
            o6.o7(o4.includes(-0), "includes(-0): includes return true for search hit");
            o6.o7(o4.includes(-0, -200), "includes(-0, -200): includes return true for search hit");

            o6.o8(o4.includes(2, 100), "includes(2, 100): includes return true for search hit");

        }
    },
    {
        name: "Array.prototype.includes works with missing elements in arrays",
        o3: function () {
            var o4 = [1, 2, 2, 4, 5, 0]; //native int array
            o4[1000] = 25;
            o6.o7(o4.includes(undefined), "includes(undefined): includes return true for search hit");

            var o4 = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; //native float array
            o4[1000] = 25.5;
            o6.o7(o4.includes(undefined), "includes(undefined): includes return true for search hit");

            var o4 = [ 1, 2, -0, "x"];
            o4[1000] = 25.5;
            o6.o7(o4.includes(undefined), "includes(undefined): includes return true for search hit");
        }
    },
    {
        name: "Array.prototype.includes walks prototype with missing elements in arrays",
        o3: function () {
            //implicit calls
            var o9 = false;
            var o10 = [10];
            Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){return 30;}});
            o10.length = 6;
            o6.o7(o10.includes(30), "includes(30): includes successful in searching prototype values");
            o6.o7(o10.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");

            o10 = [10.1];
            o10.length = 6;
            o6.o7(o10.includes(30), "includes(30): includes successful in searching prototype values");
            o6.o7(o10.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");
            o6.o7(o10.includes(30, 2), "includes(30, 2): includes successful in searching prototype values");
            o6.o7(o10.includes(undefined, 4), "includes(undefined, 4): includes return true for search hit invoking prototype");

            o10 = ["x"];
            o10.length = 6;
            o6.o7(o10.includes(30), "includes(30): includes successful in searching prototype values");
            o6.o7(o10.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");
            o6.o7(o10.includes(30, -4), "includes(30, -4): includes successful in searching prototype values");
            o6.o7(o10.includes(undefined, -2), "includes(undefined, -2): includes return true for search hit invoking prototype");

        }
    },
    {
        name: "Array.prototype.includes built-in length is 1",
        o3: function () {
            o6.o11(1, [].includes.length, "includes built-in length is 1");
        }
    },
    {
        name: "Array.prototype.includes built-in works for object",
        o3: function () {

            var o12 = function(){};
            o12.prototype = Array.prototype;
            var o13 = new o12();
            var o14 = {};

            o13[0] = "abc";
            o13[1] = "def";
            o13[2] = "efg";
            o13[3] = true;
            o13[4] = true;
            o13[5] = false;
            o13[6] = o14;
            o13[7] = o14;
            o13[8] = null;
            o13[9] = NaN;

            o13.length = 11;

            o6.o7(o13.includes("abc"), "includes('abc'): includes return true for search hit");
            o6.o8(o13.includes("abc", 3), "includes('abc', 3): includes return false for search miss");
            o6.o8(o13.includes("abc", 2), "includes('abc', 2): includes return false for search miss");
            o6.o8(o13.includes("abc", -2), "includes('abc', -2): includes return false for search miss");
            o6.o8(o13.includes("xyg"), "includes('xyg'): includes return false for search miss");
            o6.o8(o13.includes("", -2), "includes('', -2): includes return false for search miss");
            o6.o8(o13.includes(new Boolean(true)), "includes(new Boolean(true)): includes return false for search miss");
            o6.o7(o13.includes(NaN), "includes(NaN): includes return true for search hit");
            o6.o7(o13.includes(undefined), "includes(undefined):includes return true for search hit");
        }
    },
];

o15.o16(o2, { o17: o0.o18[0] != "summary" });