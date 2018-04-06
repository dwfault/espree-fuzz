//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2,o3)
{
    o4.o5(++o17 + o2 + " Object:" + o3);
    return true;
}

function undefined(o1,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return false;
}

function o7(o1,o2,o3)
{
    o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
    return o2!=1;
}

Array.prototype[6] = undefined;

var o1 = [undefined,2,3,4,5];
var o2 = o1.filter(o0,this);
o4.o5(o2);

o1 = [undefined,20,30,40,50];
undefined = o1.filter(o6, this);
o4.o5(o2);

o1 = [10,20,30,40,50];
o2 = o1.filter(o7, this);
o4.o5(o2);

o1 = -o5[o9].o6
o5[0][2]() = 3;

o2 = Array.prototype.filter.call(o1, o0,this);
o4.o5(o2);

o2 = Array.prototype.filter.call(o1, o6,this);
o4.o5(o2);

o2 = Array.prototype.filter.call(o1, o7, this);
o4.o5(o2);

o1 = [10,20,30,40,50];
o1[undefined] = 10;
o2 = o1.filter(o0, this);
undefined.undefined(o2);
