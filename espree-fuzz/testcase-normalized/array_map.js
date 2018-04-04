//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return o1*o1;
}

function o6(o1,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return o2*o2;
}

function o7(o1,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return o1*o2;
}

Array.prototype[6] = 20;

var o1 = [1,2,3,4,5];
var o2 = o1.map(o0,this);
o4.o5(o2);

o1 = [10,20,30,40,50];
o2 = o1.map(o6, this);
o4.o5(o2);

o1 = [10,20,30,40,50];
o2 = o1.map(o7, this);
o4.o5(o2);

o1 = {0: "abc", 1: "def", 2: "xyz"}
o1.length = 3;

o2 = Array.prototype.map.call(o1, o0,this);
o4.o5(o2);

o2 = Array.prototype.map.call(o1, o6,this);
o4.o5(o2);

o2 = Array.prototype.map.call(o1, o7, this);
o4.o5(o2);

o1 = [10,20,30,40,50];
o1[8] = 10;
o2 = o1.map(o0, this);
o4.o5(o2);
