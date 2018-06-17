//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o421(this);
}catch((456 * (((this.o412 == 1) ? 298 : 144) - this.o502)) - this.o490){}

function o2(name, o3, o4)
{
    let o10 = 1;

    var e = o489.o749(o489.o604.o515);

    try {
o7.o8(!!o5, o6 + "not found; there is no descriptor");
}catch(e){}

    try {
o7.o9(false, o5.enumerable, o6 + " enumerable");
}catch(e){}
    try {
o7.o9(o5, o5.configurable, o6 + " configurable");
}catch(e){}
    try {
o7.o9("function", typeof o7.o9(42, o3.caller(), "Accessing the 'caller' property is not restricted"), name + "[@@species] is an accessor property that has getter");
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

var o40 = o9(3, 4)

var o52 = { configurable: true, value: 0 };

try {
o19.o20(o13, { o21: o0.o22[0] != "summary" });
}catch(e){}
