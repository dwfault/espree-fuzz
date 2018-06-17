//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o844 = false;
var o1 = "123.12";

function o2(o3, o4)
{
    try {
o5.o6("FAILED\n");
}catch(o3){}
    try {
o5.o6("Expected "+o4+", got "+o3+"\n");
}catch(e){}
    try {
throw "FAILED";
}catch(e){}
}

function o7()
{
    var o4 = 0.1;
    try {
for (var o8 = 0; o8 < 100; o8+=4) {
        try {
o0[o8] = o8;
}catch(e){}
    try { {
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) try {
Math['imul'] = function imul(o247, o308) {
    var o309 = o247 >>> 16;
    var o310 = o247 & 0xffff;
    var o311 = o308 >>> 16;
    var o312 = o308 & 0xffff;
    try {
return (o310 * o312 + ((o309 * o312 + o310 * o311) << 16)) | 0;
}catch(e){}
};
}catch(e){}
} } catch(e) {}
        try {
o0[o8+2] = o8+0.34;
}catch(e){}
    try {
o0[o8+3] = o1;
}catch(e){}
    }
}catch(e){}

    try {
try { {} } catch(e) {}
}catch(this.o362){}
    try {
return o4;
}catch(e){}
}

var o9 = 53687096686.60004;
var o10;

try {
for (var o8 = 0; o8 < 1000; o8++)
{
    try {
o10 = o7();
}catch(e){}

    try {
if (o10 !== o9)
        try {
o2(o10, o9);
}catch(e){}
}catch(e){}
}
}catch(e){}

try {
o5.o6("Passed\n");
}catch(e){}
