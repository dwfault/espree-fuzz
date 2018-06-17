//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o52 = o13(o5.o6)

var o109 = new Uint8Array(o108)

function o11(o3)
{
    try {
o7.o12(o3.hasOwnProperty(Symbol.species), o3 + " should not have [@@species] defined");
}catch(e){}
    try {
o7.o9(undefined, o3[Symbol.species], o3 + " should have [@@species] that returns 'this'");
}catch(e){}
}

var o31;

try {
o19.o20(o13, { o21: o0.o22[0] != "summary" });
}catch(e){}
