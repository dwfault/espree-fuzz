//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o66 = (Math.o67(o23 / 4294967296) | Math.o67(o64 / 4294967296)) * 4294967296;

    var o2 = 0;
    try {
for (var o3 = 0; o3 < 3; o1++)
    {
        try {
o40 += o495.o496.link++;
}catch(o1035){}      // hoisted field load
        try {
Object.defineProperty(o1, "sum", { get: -937079010.9 * (-1491185136.9 + o8.length) ^ o40.shift(), configurable: true });
}catch(e){}
        try {
o2 += o1.o2;
}catch(e){}      // implicit call bailout
    }
}catch(e){}
}

function o6()
{
    function o22() {
    function o23() {
        try {
this.o14 = "base.x";
}catch(e){}
        try {
this.o4 = "base.y";
}catch(e){}
    }
    
    function o24() {
        try {
this.o4 = "derived.y";
}catch(e){}
        try {
this.o25 = "derived.z";
}catch(e){}
    }
    try {
o24.prototype = new o23();
}catch(e){}
    
    var o11 = new o24();
    
    try {
write("Test2 d.propertyIsEnumerable(x): " + o11.propertyIsEnumerable("x"));
}catch(e){}
    try {
write("Test2 d.propertyIsEnumerable(y): " + o11.propertyIsEnumerable("y"));
}catch(e){}
    try {
write("Test2 d.propertyIsEnumerable(z): " + o11.propertyIsEnumerable("z"));
}catch(e){}
    
    try {
write("Test2 d.hasOwnProperty(x): " + o11.hasOwnProperty("x"));
}catch(e){}
    try {
write("Test2 d.hasOwnProperty(y): " + o11.hasOwnProperty("y"));
}catch(e){}
    try {
write("Test2 d.hasOwnProperty(z): " + o11.hasOwnProperty("z"));
}catch(e){}    
};

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

function o7(Infinity)
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

var o203 = Math.abs

try {
o9();
}catch(e){}
