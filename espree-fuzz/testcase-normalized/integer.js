//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0x40000000;
var o1 = 0x40000001;
var o2  = 0x3fffffff;

test(o0,o1,o2);

o0 = 0xfffffffe;
o1 = 0xffffffff;
o2 = 0x0;

test(o0,o1,o2);

o0 = 0x40000000;
o1 = 0x40000001;
o2  = 0;

test(o0,o1,o2);

function test(o0,o1,o2)
{

    o4.o5(o0.toString(16));
    o4.o5(o1.toString(16));
    o4.o5(o2.toString(16));

    if(o0 < o1) o4.o5("less");
    else      o4.o5("greater");

    if(o0 > o1) o4.o5("greater");
    else      o4.o5("less");

    if(o0 < o2) o4.o5("less");
    else      o4.o5("greater");

    if(o0 > o2) o4.o5("greater");
    else      o4.o5("less");

    if(o1 < o2) o4.o5("less");
    else      o4.o5("greater");

    if(o1 > o2) o4.o5("less");
    else      o4.o5("greater");
}

