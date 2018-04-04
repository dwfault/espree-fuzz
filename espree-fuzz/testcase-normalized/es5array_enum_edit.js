//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test to ensure we honor the attributes of newly added property during enumeration

var o0 = [ 0, 1, 2 ];
Object.defineProperty(o0, "10", { writable: false, value:10, enumerable:true });

var o6 = false;
for (var o7 in o0)
{
    if (!o6) {
        Object.defineProperty(o0, "5", { writable: false, value:5, enumerable:false });
        o6 = true;
    }
    o8.o9(o7);
}
