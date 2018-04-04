//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() 
{
    for(var o1 = 0; o1 < arguments.length;o1++)
    {
        if(arguments[o1] != o1+1)
        {
            print("FAIL");
        }
    }
    print("PASS");
}
