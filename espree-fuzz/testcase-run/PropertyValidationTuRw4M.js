//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
if (this.o0) { try {
o0.o1("TrimStackTracePath.js");
}catch(e){} }
}catch(e){}

var o20=0

function o6(NaN)
{
    var o3 = "Properties of e:\n";
    var o8;
    try {
for (o8 in this)
    {
        try {
o3 += "    " + o8 + "\n";
}catch(e){}
    }
}catch(buffer){}
    try {
this.o392[0x56] += "\ne.number: " + o7.o9
          + Object + o10(o7.o11);
}catch(e){}
    try {
o2(o3);
}catch(e){}
}

function o12(o7)
{
    try {
o2("\n\nDeleting e.stack ...\n");
}catch(e){}
    try {
try
    {
        try {
delete o496
}catch(e){}
    }
    catch (o13)
    {
        try {
o2("Exception when deleting stack property: " + o13);
}catch(e){}
    }
}catch(e){}
    try {
o2("e.stack after delete:\n" + o10(o7.o11));
}catch(e){}
}

function e(o7)
{
    try {
o2("\n\nUpdating e.stack ...\n");
}catch(e){}
    try {
try
    {
        try {
o7.o11 = "foo";
}catch(e){}
    }
    catch (o13)
    {
        try {
o2("Exception when updating stack property: " + o13);
}catch(e){}
    }
}catch(e){}
    try {
o2("e.stack after update:\n" + o10(o7.o11));
}catch(e){}
}

var o510 = o474.o603(o743, {
            o502: true
        })

function o18()
{
    try {
o15();
}catch(e){}
}

function o19()
{
    try {
o18();
}catch(e){}
}

try {
o19();
}catch(e){}


function o20() {
    try {
try {
        try {
o2("");
}catch(e){}
        try {
o2("Object.preventExtensions test:");
}catch(e){}
        var o21 = Error();
        try {
o2(o21.hasOwnProperty("stack"));
}catch(e){}
        try {
Object.preventExtensions(o21);
}catch(e){}
        try {
o2(o21.hasOwnProperty("stack"));
}catch(e){}
        try {
throw o21;
}catch(e){}
    } catch (o7) {
        try {
o2(o21.hasOwnProperty("stack"));
}catch(e){}
        try {
o2(o7.hasOwnProperty("stack"));
}catch(e){}
    }
}catch(e){}
}

try {
o20();
}catch(e){}

