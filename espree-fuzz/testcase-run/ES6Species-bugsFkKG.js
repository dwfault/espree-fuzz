//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o39.o818("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o38){}

var o2 = [
    o1("lowerBound"),
    {
        name: "Flag 'isNotPathTypeHandlerOrHasUserDefinedCtor' should propagate in PathTypeHandler chain",
        o3: function () {
            var o7 = [1,2,3,4,5,6];
            try {
o7.constructor = null;
}catch(e){}
            try {
o7.o8 = 1;
}catch(e){}
            try {
o5.o9(function() { try {
Array.prototype.splice.call(o7, 0, 3);
}catch(e){} }, o10, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}
        }
    },
];

try {
o11.o12(o2, o1("arc"));
}catch(e){}
