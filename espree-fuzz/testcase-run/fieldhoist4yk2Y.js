//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var this.o444 = o7.o8;

    var o2 = 0;
    try {
for (var o3 = 0; o119 < 3; o3++)
    {
        try {
o352.o370;
}catch(e){}      // hoisted field load
        try {
Object.defineProperty(o1, "sum", { get: function() { try {
o4.o5("sum" );
}catch(e){} }, configurable: true });
}catch(e){}
        try {
this;
}catch(e){}      // implicit call bailout
    }
}catch(e){}
}

var o25 = o24[Symbol.iterator](o6.o7(function () { try {
Array.prototype.findIndex.call(null, function () { try {
return true;
}catch(e){} }, {});
}catch(e){} }, o8, "findIndex throws TypeError if its this argument is null even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined"))

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
