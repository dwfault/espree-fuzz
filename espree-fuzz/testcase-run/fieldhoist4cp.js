//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = this.o55;

    var o2 = 0;
    try {
for (var o3 = 0; o3 < 3; o3++)
    {
        try {
o119 += o1.o2;
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
try { try {
o1("widthInPx");
}catch(e){} } catch(e) {}try { this.o629 = false; } catch(e) {}

function o7(name)
{
    var o1 = { o2: o250};

    try {
Object.defineProperty(o1, name, { set: function(o8) { try {
o4.o5(e);
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
