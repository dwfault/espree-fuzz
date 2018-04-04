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
        o4: function () {
            var o5 = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, undefined, 1.1, 2.4]

            for(var o8=0; o8 < o5.length; o8++)
            {
                o10.o11(o5.includes(o5[o8]), "includes returns true for valid search values in the array range including NaN and undefined")
            }
            o10.o11(o5.includes(-0), "includes treats -0 and +0 as same");
        }
    },
    {
        name: "Array.prototype.includes out of range test cases",
        o4: function () {
            var o5 = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, undefined, 1.1, 2.4]

            o10.o13(o5.includes(1, 1), "includes(1, 1): out of range values should return false");
            o10.o13(o5.includes(-0, 10), "includes(-0, 10): out of range values should return false");
            o10.o13(o5.includes(undefined, o5.length - 2), "includes(undefined, x.length - 2): out of range values should return false");
            o10.o13(o5.includes(10), "includes(10): out of range values should return false");
            o10.o13(o5.includes(null), "includes(null): out of range values should return false");
        }
    },
    {
        name: "Array.prototype.includes works with native arrays",
        o4: function () {
            var o5 = [1, 2, 2, 4, 5, 0]; //native int array
            o10.o11(o5.includes(2), "includes(2): includes return true for search hits");
            o10.o11(o5.includes(0), "includes(0): includes return true for search hits");
            o10.o13(o5.includes(3), "includes(3): includes return false for search miss");
            o10.o13(o5.includes(1.2), "includes(1.2): includes return false for search miss");
            o10.o13(o5.includes(undefined), "includes(undefined): includes return false for search miss");
            o10.o11(o5.includes(2, -5), "includes(2, -5): includes return true for search hit");
            o10.o13(o5.includes(2, -1), "includes(2, -1): includes return false for search miss");
            o10.o11(o5.includes(-0), "includes(-0): includes return true for search hit");

            var o5 = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; //native float array
            o10.o11(o5.includes(2.3), "includes(2.3): includes return true for search hits");
            o10.o11(o5.includes(0), "includes(0): includes return true for search hits");
            o10.o13(o5.includes(-2.9), "includes(-2.9): includes return false for search miss");
            o10.o11(o5.includes(1.2), "includes(1.2): includes return false for search miss");
            o10.o13(o5.includes(undefined), "includes(undefined): includes return false for search miss");
            o10.o11(o5.includes(2.3, -5), "includes(2.3, -5): includes return true for search hit");
            o10.o13(o5.includes(2, -1), "includes(2, -1): includes return false for search miss");
            o10.o11(o5.includes(-0), "includes(-0): includes return true for search hit");
            o10.o11(o5.includes(-0, -200), "includes(-0, -200): includes return true for search hit");

            o10.o13(o5.includes(2, 100), "includes(2, 100): includes return true for search hit");

        }
    },
    {
        name: "Array.prototype.includes works with missing elements in arrays",
        o4: function () {
            var o5 = [1, 2, 2, 4, 5, 0]; //native int array
            o5[1000] = 25;
            o10.o11(o5.includes(undefined), "includes(undefined): includes return true for search hit");

            var o5 = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; //native float array
            o5[1000] = 25.5;
            o10.o11(o5.includes(undefined), "includes(undefined): includes return true for search hit");

            var o5 = [ 1, 2, -0, "x"];
            o5[1000] = 25.5;
            o10.o11(o5.includes(undefined), "includes(undefined): includes return true for search hit");
        }
    },
    {
        name: "Array.prototype.includes walks prototype with missing elements in arrays",
        o4: function () {
            //implicit calls
            var o14 = false;
            var o15 = [10];
            Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){return 30;}});
            o15.length = 6;
            o10.o11(o15.includes(30), "includes(30): includes successful in searching prototype values");
            o10.o11(o15.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");

            o15 = [10.1];
            o15.length = 6;
            o10.o11(o15.includes(30), "includes(30): includes successful in searching prototype values");
            o10.o11(o15.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");
            o10.o11(o15.includes(30, 2), "includes(30, 2): includes successful in searching prototype values");
            o10.o11(o15.includes(undefined, 4), "includes(undefined, 4): includes return true for search hit invoking prototype");

            o15 = ["x"];
            o15.length = 6;
            o10.o11(o15.includes(30), "includes(30): includes successful in searching prototype values");
            o10.o11(o15.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");
            o10.o11(o15.includes(30, -4), "includes(30, -4): includes successful in searching prototype values");
            o10.o11(o15.includes(undefined, -2), "includes(undefined, -2): includes return true for search hit invoking prototype");

        }
    },
    {
        name: "Array.prototype.includes built-in length is 1",
        o4: function () {
            o10.o22(1, [].includes.length, "includes built-in length is 1");
        }
    },
    {
        name: "Array.prototype.includes built-in works for object",
        o4: function () {

            var o23 = function(){};
            o23.prototype = Array.prototype;
            var o24 = new o23();
            var o25 = {};

            o24[0] = "abc";
            o24[1] = "def";
            o24[2] = "efg";
            o24[3] = true;
            o24[4] = true;
            o24[5] = false;
            o24[6] = o25;
            o24[7] = o25;
            o24[8] = null;
            o24[9] = NaN;

            o24.length = 11;

            o10.o11(o24.includes("abc"), "includes('abc'): includes return true for search hit");
            o10.o13(o24.includes("abc", 3), "includes('abc', 3): includes return false for search miss");
            o10.o13(o24.includes("abc", 2), "includes('abc', 2): includes return false for search miss");
            o10.o13(o24.includes("abc", -2), "includes('abc', -2): includes return false for search miss");
            o10.o13(o24.includes("xyg"), "includes('xyg'): includes return false for search miss");
            o10.o13(o24.includes("", -2), "includes('', -2): includes return false for search miss");
            o10.o13(o24.includes(new Boolean(true)), "includes(new Boolean(true)): includes return false for search miss");
            o10.o11(o24.includes(NaN), "includes(NaN): includes return true for search hit");
            o10.o11(o24.includes(undefined), "includes(undefined):includes return true for search hit");
        }
    },
];

o27.o28(o2, { o29: o0.o30[0] != "summary" });