//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Allocate an initial array and set some fields.
//

var o0 = new Array();
o0[2] = "B";
o0[3] = "C";


//
// Cause the array to grow in storage.
//

o0[20] = "T";


//
// Dump the contents of the array, ensuring that uninitialized fields are properly set to
// 'undefined'.
//

for (var o2 = 0; o2 < o0.length; o2++)
{
    var o4 = o0[o2];
    if (o4 == undefined)
    {
        o6.o7("undefined");
    }
    else if (o4 == null)
    {
        o6.o7("null");
    }
    else
    {
        o6.o7(o4);
    }
}
