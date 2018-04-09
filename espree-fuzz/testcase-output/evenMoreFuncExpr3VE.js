//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }


var o4 = [];
var o5 = 2;

for(var o6 = 0; o6 < o5; ++o6)
{
    o3[o6] = (new (o7=function o8() { this.o9=3; })());
    o4[o6] = o7;
}

for(var o6 = 0; o6 < o5; ++o6)
{
    write("Testing object " + o6 + "............");

    for(var o10 = 0; o10 < o5; ++o10)
    {
        write("obj[" + o6 + "] instanceof proto[" + o10 + "] : " + (o3[o6] instanceof o4[o10]));
    }
}

o4[0].prototype.o11 = "proto[0].z";
o4[0].prototype.o12 = "proto[0].w";

write("Checking properties .........");
for(var o6 = 0; o6 < o5; ++o6)
{
    write("obj[" + o6 + "].z : " + o3[o6].o11);
    write("obj[" + o6 + "].w : " + o3[o6].o12);
}

var o13 = function o9() {
    function o14() {
        "use strict";
        o9 = 1;
    };
}

