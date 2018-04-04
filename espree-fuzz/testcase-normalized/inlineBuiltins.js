//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2)
{
    if (o1 !== o2)
   {
        throw new Error("failed test Actual: " + o1 + " Expected: " + o2);
   }
}

function o4(o5, o6) {
    for(var o7 = 0; o7 < 1; ++o7)
        o6 += o5.charAt( o5 = "k" + o5);
    o0(o6, "u");
};

o4("u", "");
o4("u", "");
o9.o10("PASSED");