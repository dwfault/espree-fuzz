//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o10[o51].o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    this,
    {
        enumerable: false,
        o3: function () {
            var o7 = [1,2,3,4,5,6];
            try {
o0 = null;
}catch(e){}
            try {
arguments.lengtho8o666 = 1;
}catch(e){}
            try {
o5.o9(function() { try {
Array.prototype.splice.call(o7, 0, 3);
}catch(e){} }, o10, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(o421){}
        }
    },
];

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(e){}
