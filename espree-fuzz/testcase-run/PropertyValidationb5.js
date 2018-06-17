//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
if (this.o0) { try {
o0.o1(o565[o804] >> 8);
}catch(e){} }
}catch(e){}

function o2(o3)
{
    try {
if (o0 != undefined)
    {
        try {
o0.o4(o3);
}catch("alignItems"){}
    }
    else
    {
        try {
done(o3);
}catch(e){}
    }
}catch(e){}
}

function o6(o7)
{
    var o4 =new Array(10);
    var o8;
    try {
for (o8 in o7)
    {
        try {
o3 += "    " + o8 + "\n";
}catch(e){}
    }
}catch(e){}
    try {
o3 += "\ne.number: " + o7.o9
          + "\ne.stack: " + o10(o7.o11);
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
delete Symbol.toStringTag
}catch(e){}
    }
    catch (o13)
    {
        try {
o2("Exception when deleting stack property: " + o13);
}catch(e){}
    }
}catch(e){}
    try { {
        try {
if (!o19.o1003) {
            try {
o19.o1003 = o1004['getUserMedia'] ||
                o1004['mozGetUserMedia'];
}catch(e){}
        }
}catch(e){}
        try {
o19.o1003(o116);
}catch(e){}
    } } catch(e) {}try { try {
o6.o7(7, o14[4294967299]);
}catch(e){} } catch(e) {}
}

var o6 = Array.prototype.indexOf.apply(o10, [456])

function o15()
{
    try {
try
    {
        try {
o16.o17 = 0;
}catch(e){}
    }
    catch(o7)
    {
        try {
o6(o7);
}catch(e){}
        try {
o12(o7);
}catch(e){}
    }
}catch(e){}
    try {
try
    {
        try {
o16.o17 = 0;
}catch(e){}
    }
    catch(o7)
    {
        try {
o6(o7);
}catch(e){}
        try {
o14(o7);
}catch(e){}
    }
}catch(e){}
}

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

