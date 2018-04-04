//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Make sure assign to the object kill it's field's value for field copy prop.
function o0(o1)
{
    var o2 = 0;
    for (var o3 = 0; o3 < 10; o3++)
    {
        var o4 = o1.o5;
        o1 = o1.o6;
        var o7 = o1.o5;
        o2 += o4 + o7;
    }
    return o2;
}

var o1 = new Object();
o1.o5 = -1;
var o4 = o1;
for (var o3 = 0; o3 < 10; o3++)
{
    o1.o6 = new Object();
    o1 = o1.o6;
    o1.o5 = o3;
}
o1.o6 = o4;

o9.o10(o0(o4) == 80? "PASS" : "FAIL");
