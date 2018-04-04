//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o1)
{
    var o2 =o3;
    o1.o4 = 1;
    o1.o5 = 2;
    o1.o6 = 3;
    o1.o7 = 4;
    o1.o8 = 5;
    o1.o9 = 6;
    o1.o10 = 7;
    o1.o11 = 8;
    if (o2)
    {
        o1.o12 = 9;
        o13();
    }
    else
    {
        o1.o12 = 9;
    }
}

var o3 = false;

test({});
o3 = true;
try
{
test({});
}
catch(o14)
{
}

o3 = false;
test({});
