//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o6()
{
    var o1 = o581 + 1;

    var o2 = o231;
    try {
for (var o15 = { "foo" : function () { try {
new.target
}catch(e){}}}; o3 < 3; o3++)
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

var o14 = {}

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

var o52 = { value: 1 }

try {
o9();
}catch(e){}
