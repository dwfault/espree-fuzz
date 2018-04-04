//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, length)
{
    var o3;
    for(o3=0; o3< length; o3++)
    {
        o1[o3] = 0;
        o1[o3] = o3 + o3;
        o1[o3] = o3 - o3;
        o1[o3] = o3 * o3;
        o1[o3] = o3 - o3;
        o1[o3] = o3 + o3;
        o1[o3] = o3 - o3;
        o1[o3] = o3 * o3;
    }

}
function o4(o5)
{
    if(o5 <= 1)
        return 1;

    return o4(o5-1) + o4(o5-2);
}
function o6(o7, o8, o9, length)
{
    o0(o7, length);
    o0(o8, length);
    o0(o9, length);
    o0(o7, length);
    o0(o8, length);
}

function o10()
{
    var o7 = new Array(100);
    var o8 = new Array(100);
    var o9 = new Array(100);
    o6(o7, o8, o9, 100);
    o6(o7, o8, o9, 100);
    o6(o7, o8, o9, 100);
    o6(o7, o8, o9, 100);
    o6(o7, o8, o9, 100);
    o6(o7, o8, o9, 100);
    o6(o7, o8, o9, 100);
    o4(10);
}

o10();
o10();

o12.o13("PASSED");
