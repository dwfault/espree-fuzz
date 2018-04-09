//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array();
function o1()
{
    var o11 = new Object();
    o2
    Object.defineProperty(o2, "Pass", {value: 1, writable:false, enumerable: true} );
    for (var o3 in o2)
    {
        o0.push(o3);
    }

    for (var o3 in Array)
    {}
}

o1();

o4();

for (var index = 0; index < o0.length; index++)
{
    o5.o6(o0[index]);
}
