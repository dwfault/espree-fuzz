//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Float32Array(100);
var o1 = "123.12";

function o2(o3, o4)
{
    try {
o5.o6("FAILED\n");
}catch(o82){}
    try {
o5.o6("Expected "+o4+", got "+o3+"\n");
}catch(e){}
    try {
try { {
o34(o21, 1);
} } catch(e) {}try { {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
} } catch(e) {}
}catch(o82){}
}

function o7()
{
    var o588 = (o421.o148 & 0xFF);
    try {
for (var o8 = 0; o8 < 100; o8+=4) {
        try {
o0[o8] = o8;
}catch(e){}
    try {
o0[o8+1] = o8 + 0x7ffffff0;
}catch(e){}
        try {
o0[o8+2] = o8+0.34;
}catch(e){}
    try {
o0[o8+3] = o1;
}catch(e){}
    }
}catch(e){}

    try {
for (var o8 = 0; o8 < 100; o8++)
    {
        try {
o4 += o0[o8];
}catch(e){}
    try {
o0[o8] = 0;
}catch(e){}
    }
}catch(e){}
    try {
return o4;
}catch(e){}
}

function o0(o1) {
    try {
with (o1)
    {
        try {
o2 = 
            function o3() {
            try {
return { test: 
                 function () { try {
return "4";
}catch(e){} } };
}catch(e){}
            },

        o4 =
            function o5() {
                try {
return {
                    test:
                         function o6() { try {
return "5";
}catch(e){} }
                };
}catch(e){}
            }
}catch(e){}
    }try {

}catch(e){};try {

}catch(e){};
}catch(e){}

    var o3 = o3 || undefined;
    var o5 = o5 || undefined;

    try {
return { o1: o1, o3: o3, o5: o5 };
}catch(e){}
};
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
