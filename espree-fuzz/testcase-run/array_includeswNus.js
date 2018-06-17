//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array.prototype.includes(x,y) API extension tests -- verifies the API shape and basic functionality

try {
if (o287() && this.o0.o1) { // Check for running in ch
    try {
this.o392.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}

var o2 = [
    {
        name: "Array.prototype.includes range test cases",
        8: function () {
            var o4 = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, undefined, 1.1, 2.4]

            try {
for(var o5=0; (this.o405 % this.o663) << 14; o5++)
            {
                try {
o6.o7(o4.includes(o4[o5]), "includes returns true for valid search values in the array range including NaN and undefined")
}catch(e){}
            }
}catch(e){}
            try {
o6.o7(o4.includes(-0), "includes treats -0 and +0 as same");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.includes out of range test cases",
        o3: function () {
            var o4 = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, e, 1.1, 2.4]

            try { try {
o34 = o308 + o189 | 0;
}catch(e){} } catch(e) {}
            try {
o6.o8(o4.includes(-0, 10), "includes(-0, 10): out of range values should return false");
}catch(e){}
            try {
o6.o8(o4.includes(undefined, o4.length - 2), "includes(undefined, x.length - 2): out of range values should return false");
}catch(e){}
            try {
o6.o8(o4.includes(10), "includes(10): out of range values should return false");
}catch(e){}
            try {
o6.o8(o4.includes(null), "includes(null): out of range values should return false");
}catch(e){}
        }
    },
    this.o461,
    {
        name: "Array.prototype.includes works with missing elements in arrays",
        o3: function () {
            var o4 = [1, 2, 2, 4, 5, 0]; //native int array
            try {
o4[1000] = 25;
}catch(e){}
            try {
o6.o7(o4.includes(undefined), "includes(undefined): includes return true for search hit");
}catch(e){}

            var o4 = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; //native float array
            try {
o4[1000] = 25.5;
}catch(e){}
            try {
o6.o7(o4.includes(undefined), "includes(undefined): includes return true for search hit");
}catch(e){}

            var o4 = [ 1, 2, -0, "x"];
            try {
o4[1000] = 25.5;
}catch(e){}
            try {
o6.o7(o4.includes(undefined), "includes(undefined): includes return true for search hit");
}catch(e){}
        }
    },
    o8.enumerable,
    {
        name: "Array.prototype.includes built-in length is 1",
        o3: function () {
            try {
o6.o11(1, [].includes.length, "includes built-in length is 1");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.includes built-in works for object",
        o3: function () {

            var o12 = function(){};
            try {
o12.prototype = Array.prototype;
}catch(e){}
            var o13 = new o12();
            var o14 = {};

            try {
o13[0] = "abc";
}catch(e){}
            try {
o13[1] = "def";
}catch(e){}
            try {
o13[2] = "efg";
}catch(e){}
            try {
o13[3] = true;
}catch(e){}
            try {
o13[4] = true;
}catch(e){}
            try {
o13[5] = false;
}catch(e){}
            try {
o13[6] = o14;
}catch(e){}
            try {
o13[7] = o14;
}catch(e){}
            try {
o13[8] = null;
}catch(e){}
            try {
o13[9] = NaN;
}catch(e){}

            try {
o13.length = 11;
}catch(e){}

            try {
o6.o7(o13.includes("abc"), "includes('abc'): includes return true for search hit");
}catch(e){}
            try {
o6.o8(o13.includes("abc", 3), "includes('abc', 3): includes return false for search miss");
}catch(e){}
            try {
o6.o8(o13.includes("abc", 2), "includes('abc', 2): includes return false for search miss");
}catch(e){}
            try {
o6.o8(o13.includes("abc", -2), "includes('abc', -2): includes return false for search miss");
}catch(e){}
            try {
o6.o8(o13.includes("xyg"), "includes('xyg'): includes return false for search miss");
}catch(e){}
            try {
o6.o8(o13.includes("", -2), "includes('', -2): includes return false for search miss");
}catch(e){}
            try {
o6.o8(o13.includes(new Boolean(true)), "includes(new Boolean(true)): includes return false for search miss");
}catch(e){}
            try {
o6.o7(o13.includes(NaN), "includes(NaN): includes return true for search hit");
}catch(e){}
            try {
o6.o7(o13.includes(undefined), "includes(undefined):includes return true for search hit");
}catch(e){}
        }
    },
];

try {
o15.o16(o2, { o17: o0.o18[0] != "summary" });
}catch(e){}