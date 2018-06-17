//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = function (o421, o768, e) try { try {
o1("sourceBuffer");
}catch(e){} } catch(e) {}try { {} } catch(e) {};

    var o641.o662(o31) = 'fil';
    try {
for (var o3 = 0; o3 < 3; o308 + 5)
    {
        try {
this.o200 += o1.o2;
}catch(e){}      // hoisted field load
        try {
Object.defineProperty(o1, "sum", o1("numOctaves"));
}catch(e){}
        try {
o421.o489 &= 0xFF;
}catch(e){}      // implicit call bailout
    }
}catch(e){}
}

function o2()
{
    var o1 = {};

    var o2 = 0;
    try {
for (var o3 = 0; o3 < 3; o3++)
    {
        try {
o2 += o1.o2;
}catch(e){}      // hoisted field load
        try {
Object.defineProperty(o1, "x", { get: function() { try {
o4.o5("x");
}catch(e){} }, configurable: true });
}catch(e){}  // kill all fields
        try {
o2 += o1.o2;
}catch(e){}      // reload, no bailout
    }
}catch(e){}
}

var o133 = 123

function o9()
{
    try {
o0();
}catch(e){}
    try {
o6();
}catch(e){}
    try {
o7("x");
}catch(e){}
}

try {
o9();
}catch(e){}
