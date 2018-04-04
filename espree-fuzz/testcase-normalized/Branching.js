//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1;        // a = undefined
    var o2 = 0;

    // We shouldn't invert this branch as relational comparison involving
    // undefined always returns false.
    if (!(o1 >= 1))
        o2 = true;

    o3.o4("e = " + o2);
}

o0();
