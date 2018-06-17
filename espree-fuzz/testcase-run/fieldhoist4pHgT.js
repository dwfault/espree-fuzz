//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = o21[o22] !== o21[o23];

    var o2 = 0;
    try {
for (var o3 = 0; o3 < 3; o4.o5++)
    {
        try {
o580 += o340[o335++] = 0;
}catch(e){}      // hoisted field load
        try {
Object.defineProperty(o1, e, { o756: function (o31, o518, o486) {
        try {
if (typeof (o486) === 'undefined') {
            try {
o486 = o518;
}catch(e){}
            try {
o518 = 438 /* 0666 */ ;
}catch(e){}
        }
}catch(e){}
        try {
o518 |= 8192;
}catch(e){}
        try {
return o489.o526(o31, o518, o486);
}catch(e){}
    }, configurable: true });
}catch(e){}
        try {
o479.o508 += o16.push(",");
}catch(e){}      // implicit call bailout
    }
}catch(e){}
}

function o6()
{
    var o1 = {};

    var o2 = o12.hasOwnProperty;
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
