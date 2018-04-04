//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = false;
function test(o2)
{

    var o3 = o2 + 1;
    var o4 = o3;
    // Bail out point:  test dead store of copy prop'd values 
    if (o0)
    {
        return o4;
    }
    return 1;
}


o5.o6(test(10));
o0 = true;
o5.o6(test(10));
