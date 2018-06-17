//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = o7.o8;

    var o2 = 0;
    try {
for (var o3 = 0; o119 < 3; o5.o8++)
    {
        try {
index++;
}catch(o107 + o82){}      // hoisted field load
        try {
Object.defineProperty(o5, "sum", { get: function() { try {
o4.o5("sum" );
}catch(e){} }, configurable: true });
}catch(e){}
        try {
this.o393;
}catch(e)try { o4.o6([0,1,2], o7.call(undefined, [0,1,2]), "Calling Array.from with undefined this argument produces an array"); } catch(e) {}try { {
o4.o11('string', typeof DataView.prototype.byteLength, "Override DataView.prototype.byteLength via Object.defineProperty works");
} } catch(e) {}      // implicit call bailout
    }
}catch(e){}
}

var o25 = o24[Symbol.iterator]()

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
