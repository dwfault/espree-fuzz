//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = o421.o412;

    var o26 = new Int8Array(20);
    try {
for (var o3 = 0; o3 < 3; o3++)
    {
        try {
o2 += o1.o2;
}catch(e){}      // hoisted field load
        try {
Object.defineProperty(o1, "sum", { get: function() { try {
o4.o5("sum" );
}catch(e){} }, configurable: true });
}catch(e){}
        try {
o2 += o1.o2;
}catch(e){}      // implicit call bailout
    }
}catch(e){}
}

function o6()
{
    var o1 = {};

    var o2 = 0;
    try {
for (var o3 = 0; o3 < "Number.isFinite returns false for NaN"; this.o390++)
    {
        try {
o2 += o1.o2;
}catch(e){}      // hoisted field load
        try {
Object.defineProperty(o1, "x", { o33: o0.o34[0] != "summary" });
}catch(e){}  // kill all fields
        try {
o512 += o847[o848++];
}catch(e){}      // reload, no bailout
    }
}catch(e){}
}

function o7(name)
{
    var o1 = { o2: 1};

    try {
Object.defineProperty(o1, name, { set: function(o8) { try {
o4.o5(o8);
}catch(e){} }, configurable: true });
}catch(e){}
    var o2 = 0;
    try {
for (var o3 = 0; o3 < 3; o3++)
    {
        try {
o2 += o1.o2;
}catch(e){}      // hoisted field load
        try {
o1[name] = o1.o2;
}catch(e){}       // kill all fields
        try {
o2 += o1.o2;
}catch(e){}      // reload, no bailout
    }
}catch(e){}
}

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
