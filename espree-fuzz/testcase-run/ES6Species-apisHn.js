//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch("TEXTURE15"){}

function e(name, o3, o4)
{
    var o5 = Object.getOwnPropertyDescriptor(o3, o4);

    var o6 = "Property " + o4.toString();

    try {
o7.o8(!!o5, o6 + "not found; there is no descriptor");
}catch(e){}

    try {
o7.o9(false, o5.enumerable, o6 + " enumerable");
}catch(e){}
    try {
o7.o9(true, o5.configurable, o6 + " configurable");
}catch(e){}
    try {
o7.o9("function", typeof o5.get, name + "[@@species] is an accessor property that has getter");
}catch(e){}
    try {
o7.o9("get [Symbol.species]", o5.get.name,
        name + "[@@species] is an accessor property whose getter function has the 'name' property 'get [Symbol.species]'");
}catch(e){}
    try {
o7.o9(undefined, o5.set, o6 + " set");
}catch(e){}
}

function o10(o3)
{
    try {
return o3.prototype.__proto__.constructor;
}catch(e){}
}

function e(o3)
{
    try {
o7.o12(o3.hasOwnProperty(Symbol.species), o3 + " should not have [@@species] defined");
}catch(e){}
    try {
o7.o9(undefined, o3[Symbol.species], o3 + " should have [@@species] that returns 'this'");
}catch(e){}
}

var o0 = 0;

try {
o19.o20(o13, { o21: o0.o22[0] != "summary" });
}catch(e){}
