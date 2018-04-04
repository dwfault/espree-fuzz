//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array();
function o2()
{
    var o3 = new Object();
    o3
    Object.defineProperty(o3, "Pass", {value: 1, writable:false, enumerable: true} );
    for (var o9 in o3)
    {
        o0.push(o9);
    }

    for (var o9 in Array)
    {}
}

o2();

o11();

for (var index = 0; index < o0.length; index++)
{
    o14.o15(o0[index]);
}
