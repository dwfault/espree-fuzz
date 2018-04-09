//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o0)
{
    var o1 =o2;
    o0.o3 = 1;
    o0.o4 = 2;
    o0.o5 = 3;
    o0.o6 = 4;
    o0.o7 = 5;
    o0.o8 = 6;
    o0.o9 = 7;
    o0.o10 = 8;
    if (o1)
    {
        o0.o11 = 9;
        o12();
    }
    else
    {
        o0.o11 = 9;
    }
}

var o2 = false;

test({});
o2 = true;
try
{
test({});
}
catch(o13)
{
}

o2 = false;
test({});
