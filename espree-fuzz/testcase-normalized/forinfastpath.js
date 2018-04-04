//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = { o1 : 1, o2: 2, o3 :3 };

// Test merging of string value in globopt
var o3 = 0;
for (var o4 in o0)
{
    for (var o5 in o0)
    {
        var o6;
        if (o3 < 2)
        {
            o6 = o4;
        }
        else
        {
            o6 = o5;
        }
        // Two string value merges here in globopt
        o3 = o0[o6];


        o7.o8(o6 + " = " + o3);

    }
}

