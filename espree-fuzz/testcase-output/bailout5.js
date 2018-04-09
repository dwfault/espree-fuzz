//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = false;
function test(o1)
{

    var o2 = o1 + 1;
    var o3 = o2;
    // Bail out point:  test dead store of copy prop'd values 
    if (o0)
    {
        return o3;
    }
    return 1;
}


o4.o5(test(10));
o0 = true;
o4.o5(test(10));
