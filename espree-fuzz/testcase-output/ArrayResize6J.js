//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Allocate an initial array and set some fields.
//

var o0 = new Array();
o0[o1] = "B";
o0[3] = "C";


//
// Cause the array to grow in storage.
//

o0[20] = "T";


//
// Dump the contents of the array, ensuring that uninitialized fields are properly set to
// 'undefined'.
//

for (var o1 = 0; o1 < o0.length; o1++)
{
    var o2 = o0[o1];
    if (o2 == undefined)
    {
        o3.o4("undefined");
    }
    else if (o2 == null)
    {
        o3.o4("null");
    }
    else
    {
        o3.o4(o2);
    }
}
