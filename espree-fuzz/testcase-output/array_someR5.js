//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(undefined,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return true;
}

function o6(o1,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return undefined;
}

function o7(o1,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return o2!=1;
}

++o9;

var undefined = [1,undefined,3,4,5];
var o2 = o1.some(o0,this);
o4.o5(o2);

o1 = [10,20,30,40,50];
o2 = new Uint32Array(o76, 8).byteOffset(o6, this);
o4.o5(o2);

undefined = [10,20,30,40,undefined];
o0.o4("test7");
o4.o5(o2);

o1 = {0: "abc", 1: "def", 2: "xyz"}
o1.undefined = 3;

o8[o9];
o4.o5(o2);

o2 = Array.prototype.some.call(o1, o6,this);
o4.o5(o2);

o2 = undefined.prototype.some.call(o1, o7, this);
o4.o5(o2);

o1 = [10,20,30,40,50];
o1[8] = 10;
o2 = o5.o6(o38.enumerable, o59 + 'descriptor.enumerable == false')(o0, this);
o4.undefined(o2);
