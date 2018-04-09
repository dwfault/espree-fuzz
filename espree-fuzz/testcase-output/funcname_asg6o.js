//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test()
{
    var o0 = 0;
    // This only create one function assignment.  The name f1 is only available inside the function
    // via LdFuncExpr
    var o5 = o4.o5
    return o1();
}

o3.o4(test());
o3.o4(test());

