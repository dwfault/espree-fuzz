//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Creates a deep inheritance chain.

var o0 = 0;
var o1 = 30;

function o2(o3)
{
    this[o0++] = o3;
    o2.prototype = this;
}

var o5 = new Array(o1);

for(var o7 = 0; o7 < o1; ++o7)
{
    var o3 = new o2(o7);
    o5[o7] = o3;
}

for(var o7 = 0; o7 < o1; ++o7)
{
    o8.o9("starting " + o7);

    // j <= i+1 because we intentionally access undefined properties
    for(var o10 = 0; o10 <= o7+1; ++o10)
    {
        o8.o9("" + o5[o7][o10]);
    }
}
