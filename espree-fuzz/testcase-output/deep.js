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

var o4 = new Array(o1);

for(var o5 = 0; o5 < o1; ++o5)
{
    var o3 = new o2(o5);
    o4[o5] = o3;
}

for(var o5 = 0; o5 < o1; ++o5)
{
    o6.o7("starting " + o5);

    // j <= i+1 because we intentionally access undefined properties
    for(var o8 = 0; o8 <= o5+1; ++o8)
    {
        o6.o7("" + o4[o5][o8]);
    }
}
