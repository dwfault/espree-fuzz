//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = o8(o9);
try {
o336 = function(o1, o2)
{
    var o3 = '';
    var o4 = 0;
    try {
for (var o37 = 0; o5 < 10000; this.o540[o126++]++)
    {
        try {
Array.prototype[o3] = o421.o367 = (o421.o144 > 0x7F);
}catch(e){}
        try {
e.o3 = o3 + o4;
}catch(e){}
        try {
o366 = (o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try {
test.o6 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o2.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try {
test.o7 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3 + o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o1.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try {
test.o8 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o2.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try {
test.o9 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3 + o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o1.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try { {
    var o1 = 0x40000;
    var o2 = 10;
    var o3 = new RegExp("(ab)".repeat(o1), "g"); // g flag to trigger the vulnerable path
    var o4 = "ab".repeat(o1); // matches have to be at least size 2 to prevent interning
    var o5 = (o4 + "|").repeat(o2);
    try {
while (true) {
        var o6 = 0;
        var o7 = [];
        try {
o5.replace(o3, function() {
            try {
for (var o8 = 1; o8 < arguments.length-2; ++o8) {
                try {
if (typeof arguments[o8] !== 'string') {
                    try {
o9 = arguments[o8];
}catch(e){}
                    try {
throw "success";
}catch(e){}
                }
}catch(e){}
                try {
o7[o6++] = arguments[o8];
}catch(e){}  // root everything to force GC
            }
}catch(e){}
            try {
return "x";
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}
} } catch(e) {}try { {} } catch(e) {}

try {
test.o11 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o1.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try {
test.o12 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o2.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try {
test.o13 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o1.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

try {
test.o14 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    try {
for (var o5 = 1; o5 < 10000; o5++)
    {
        try {
o3 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0x3FFFF;
}catch(e){}
        try {
o2.o3 = o3 + o4;
}catch(e){}
        try {
o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
    try {
return o3 + o4;
}catch(e){}
}
}catch(e){}

function o15(name, o16)
{
    var o17 = 0;
    var o18 = 0;
    try {
for (var o5 = 0; o5 < 1000; o5++)
    {
        try {
o1 = new Object();
}catch(e){}
        try {
o1.o3 = 1;
}catch(e){}
        var o19 = new Date();
        try {
o16(o1, o1);
}catch(e){}
        try {
o17 += (new Date() - o19);
}catch(e){}
        try {
o18++;
}catch(e){}
        try {
if (o17 > 1000)
        {
            try {
break;
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
    var o20 = name;
    try {
if (name.length < 40)
    {
        try {
for (var o5 = 0; o5 < 40 - name.length; o5++)
        {
            try {
o20 += " ";
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
    try {
o21.o22(o20 + ": " + (((o17 / o18) * 1000) | 0) + " (per 1000 iteration, executed " + o18 + " iterations)");
}catch(e){}
}

try {
for (var o3 in test)
{
    try {
o15(o3, test[o3]);
}catch(e){}
}
}catch(e){}
