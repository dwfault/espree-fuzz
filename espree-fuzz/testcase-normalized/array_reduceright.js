//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2,o3,o4)
{
    o5.o6("accumulator:" + o1 + " value:"+ o2 + " index:" + o3 + " Object:" + o4);
    return o1 + o2;
}

function o7(o1,o2,o3,o4)
{
    o5.o6("accumulator:" + o1 + " value:"+ o2 + " index:" + o3 + " Object:" + o4);
    return o1 + o2 * o2;
}

function o8(o1,o2,o3,o4)
{
    o5.o6("accumulator:" + o1 + " value:"+ o2 + " index:" + o3 + " Object:" + o4);
    return o1 + o2 + o2;
}

function o9(o1,o2,o3,o4)
{
    o5.o6("accumulator:" + o1 + " value:"+ o2 + " index:" + o3 + " Object:" + o4);
    return o1 + o2 + o3;
}

Array.prototype[6] = 20;

var o2 = [1,2,3,4,5];
var o3 = o2.reduceRight(o0,0);
o5.o6(o3);

o2 = [10,20,30,40,50];
o3 = o2.reduceRight(o7, 0);
o5.o6(o3);

o2 = [10,20,30,40,50];
o3 = o2.reduceRight(o9);
o5.o6(o3);

o2 = {0: "abc", 1: "def", 2: "xyz"}
o2.length = 3;

o3 = Array.prototype.reduceRight.call(o2, o0, "" );
o5.o6(o3);

o3 = Array.prototype.reduceRight.call(o2, o8, "");
o5.o6(o3);

o3 = Array.prototype.reduceRight.call(o2, o9, "");
o5.o6(o3);

o2 = [10,20,30,40,50];
o2[8] = 10;
o3 = o2.reduceRight(o0, 30);
o5.o6(o3);
