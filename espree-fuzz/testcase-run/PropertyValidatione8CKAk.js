//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try { {} } catch(e) {}try { {
                try {
if ((o1071 & o1075 | 0) == 0) {
                    try {
o259[2676] = o1071 | o1075;
}catch(e){}
                    try {
o1079 = 10744 + (o189 + 2 << 2) | 0;
}catch(e){}
                    try {
o1080 = o34
}catch(e){}
                } else {
                    try {
o227 = 10744 + (o189 + 2 << 2) | 0;
}catch(e){}
                    try {
o1061 = o259[o227 >> 2] | 0;
}catch(e){}
                    try {
if (!(o1061 >>> 0 < (o259[10720 >> 2] | 0) >>> 0)) {
                        try {
o1079 = o227;
}catch(e){}
                        try {
o1080 = o1061;
}catch(e){}
                        try {
break
}catch(e){}
                    }
}catch(e){}
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
            } } catch(e) {}

function o2(o421)
{
    try {
if (o0 != undefined)
    {
        try {
o0.o4(o3);
}catch(e){}
    }
    else
    {
        try {
o5(o3);
}catch(e){}
    }
}catch(exec){}
}

var o10 = o0.o4()

function o12(o7)
{
    try {
o2("\n\nDeleting e.stack ...\n");
}catch(e){}
    try {
try
    {
        try {
delete o7.o11
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

function o14(o7)
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

var o82 = 0

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

