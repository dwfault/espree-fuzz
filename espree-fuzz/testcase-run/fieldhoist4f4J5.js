//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = o421("HTMLTableElementPrototype");

    var o69() = 0;
    try {
for (var o3 = 0; o3 < 3; o1.sort++)
    {
        try {
o40 += o7++;
}catch(o1035){}      // hoisted field load
        try {
Object.o48(o1, "sum", o804.o524 = o192(Module['read'](o804.o38), true));
}catch(e){}
        try {
o360.prototype += o1.o2;
}catch(e){}      // implicit call bailout
    }
}catch(e){}
}

function o4()
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
