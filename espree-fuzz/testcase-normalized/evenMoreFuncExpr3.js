//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = [];
var o5 = [];
var o6 = 2;

for(var o7 = 0; o7 < o6; ++o7)
{
    o4[o7] = (new (o8=function o9() { this.o10=3; })());
    o5[o7] = o8;
}

for(var o7 = 0; o7 < o6; ++o7)
{
    write("Testing object " + o7 + "............");

    for(var o11 = 0; o11 < o6; ++o11)
    {
        write("obj[" + o7 + "] instanceof proto[" + o11 + "] : " + (o4[o7] instanceof o5[o11]));
    }
}

o5[0].prototype.o13 = "proto[0].z";
o5[0].prototype.o14 = "proto[0].w";

write("Checking properties .........");
for(var o7 = 0; o7 < o6; ++o7)
{
    write("obj[" + o7 + "].z : " + o4[o7].o13);
    write("obj[" + o7 + "].w : " + o4[o7].o14);
}

var o15 = function o10() {
    function o16() {
        "use strict";
        o10 = 1;
    };
}

