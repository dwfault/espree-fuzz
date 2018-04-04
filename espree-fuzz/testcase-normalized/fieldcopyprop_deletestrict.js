//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test to make sure field copy prop can deal with delete
"use strict";
function o0() {
    var o1 = new Object();
    o1.o3 = 1;
    delete o1.o3;
    if (o1.o3 === undefined)
    {
        o5.o6("Pass");
    }
    return o1;
}

function o7(o8)
{
    delete o8.o3;
}

o7(o0());
