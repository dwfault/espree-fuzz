//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2)
{
    var o3 = new Array();

    o3[0] = o1;
    for (var o5 = 1; (1<<o5) < o2; o5++)
    {
        o3[o5] = o3[o5-1] + o3[o5-1];
    }

    var o6 = '';

    for (var o5 = o3.length-1; o5 >= 0; o5--)
    {
        if ((1 << o5) > o2)
            continue;

        o6 += o3[o5];
        o2 -= (1 << o5);
    }

    return o6;
}

function o8()
{
    // The choice of character is somewhat important -- we need
    // something that expands out to 3 bytes in UTF-8 encoding.
    // In this case, U+20AC satisfies that requirement.
    var o9 = "\u20ac";
    var o10;
 
    try
    {
        o10 = o0(o9, 477218589);
    }
    catch (o11)
    {
        o12.o13("You don't have enough free memory or VA to run this -- you'll need as much as possible.");
        return;
    }
    
    o12.o13("SS length = " + o10.length + "<br/>");

    // encodeURI sums (3 * [number of UTF-8 bytes required]) for each character
    // Since we use a char with 3 bytes required, that means the encodeURI memory
    // allocation is 3 * 3 * 477218589 = 0x100000005.
    // This truncates when fit into a ulong to just 5.
    o12.o13(encodeURI(o10).length);
}

try {
o8();
}
catch (o11)
{
   o12.o13("Message: " + o11.o15);
}
