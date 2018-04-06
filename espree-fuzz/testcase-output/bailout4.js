//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    var o2 = 3;
    var o3;

    if (o1)
    {
        o2 = 4;
        o3 = o2 + o1;
    }
    else
    {
        o3 = o2 + o1;
    }
    return o3;
}


o4.o5(o0(true));
o4.o5(o0(false));
