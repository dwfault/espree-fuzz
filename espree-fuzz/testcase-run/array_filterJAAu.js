//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2,o3)
{
    try {
o4.o5(this.o523 + " index:" + o2 + " Object:" + o3);
}catch(e){}
    try {
return true;
}catch(e){}
}

function o6(o1026,o2,o3)
{
    try {
o4.o6(1, Array.from.length, "Array.from.length === 0")("value:"+ o1 + " index:" + o2 + " Object:" + o3);
}catch(e){}
    try {
return false;
}catch(e){}
}

var o22 = { o22: 100, o40: 100 }

try {
Array.prototype[6] = 20;
}catch(e){}

var o1 = [1,2,3,4,5];
var o2 = o1.filter(o0,this);
try {
o4.o5(o2);
}catch(e){}

try {
o1 = [10,20,30,40,50];
}catch(e){}
try {
o2 = o1.filter(o6, this);
}catch(e){}
try {
o4.o5(o2);
}catch(e){}

try {
o1 = [10,20,30,40,50];
}catch(e){}
try {
o2 = o1.filter(o7, this);
}catch(e){}
try {
o4.o5(o2);
}catch(e){}

try {
o1 = {0: "abc", 1: "def", 2: "xyz"}
}catch(e){}
try {
o1.length = 3;
}catch(e){}

try {
o2 = Array.prototype.filter.call(o1, o0,this);
}catch(e){}
try {
o4.o5(o2);
}catch(e){}

try {
o2 = Array.prototype.filter.call(o1, o6,this);
}catch(e){}
try {
o4.o5(o2);
}catch(e){}

try {
o2 = Array.prototype.filter.call(o1, o7, this);
}catch(e){}
try {
o4.o5(o2);
}catch(e){}

try {
o1 = [10,20,30,40,50];
}catch(e){}
try {
o1[8] = 10;
}catch(e){}
try {
o2 = o1.filter(o0, this);
}catch(e){}
try {
o4.o5(o2);
}catch(e){}
