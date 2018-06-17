//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o1,buffer) {
    try {
"use asm";
}catch(e){}
    var o2 = stdlib.o598.o114;
    //views
    var o51 = "foo28";

    function o4(){
        var o5 = 0.5
        var o6 = o2(1.5);
        try {
o3[1] = o6;
}catch(e){}
        try {
return +(o3[1])
}catch(e){}
    }
    try {
return o4;
}catch(e){}
}

function o8(o3, o4)
{
    var o9 = o3.concat(o4);
    try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
    var o10 = o3.concat(o4);
    try {
o6.o2(o4, o10[o3.length], "Indexing d at a.length should return b");
}catch(e){}
    try {
for(var o7 = 0;o7 < o3.length; o7++)
    {
        try {
o6.o2(o3[o7], o9[o7], "confirm array a makes up the first half of array c");
}catch(e){}
        try {
o6.o2(o3[o7], o10[o7], "confirm array a makes up the first half of array d");
}catch(e){}
    }
}catch(e){}
    try {
for(var o7 = 0;o7 < o4.length; o7++)
    {
        try {
o6.o2(o4[o7], o9[o3.length+o7], "confirm array b makes up the second half of array c");
}catch(e){}
        try {
o6.o2(o4[o7], o10[o3.length][o7], "confirm array b makes up a sub array at d[a.length]");
}catch(e){}

    }
}catch(e){}

    try {
o6.o2(o3.length+1, o10.length, "since we are not flattening the top level array grows only by 1");
}catch(e){}
    try {
o11 = false;
}catch(e){}

    try {
delete o4[Symbol.isConcatSpreadable];
}catch(e){}
}
var o3 = 0
var buffer = new ArrayBuffer(1<<20);

var o8 = o0(global,o7,buffer);

try {
o9.o10(o8());
}catch(e){}
try {
o9.o10(o8());
}catch(e){}
