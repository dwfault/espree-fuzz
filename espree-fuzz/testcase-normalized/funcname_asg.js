//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test()
{
    var o1 = 0;
    // This only create one function assignment.  The name f1 is only available inside the function
    // via LdFuncExpr
    var o2 = function o3()
    {
        if (o1 == 0)
        {
            o1++;
            return o3();
        }
        return o1;
    }
    return o2();
}

o4.o5(test());
o4.o5(test());

