//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Float32Array(100);
var o1 = "style";

function o2(o3, o4)
{
    try {
o5.o6("FAILED\n");
}catch(e){}
    try {
o5.o6("Expected "+o4+", got "+o3+"\n");
}catch(e){}
    try {
throw "FAILED";
}catch(e){}
}

function test(o29, o31) {
    try {
o24("test", arguments, 2);
}catch(e){}
    try {
o0(o15(o29.test(o31)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

var o9 = 53687096686.60004;
var o10;

try {
for (var o8 = 0; o8 < 1; o259++)
{
    try {
o10 = o7();
}catch(e){}

    try {
if (o10 !== o9)
        try {
o2(e, o9);
}catch(e){}
}catch(e){}
}
}catch(e){}

try {
o5.o6("Passed\n");
}catch(e){}
