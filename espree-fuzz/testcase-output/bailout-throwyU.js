//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 3;
function test()
{
    // Bail out point to make sure the stack walker can get the line number of the throw after bailout
    for (var o2 = 0; o2 < o0; o2++)
    {   
        -1(o2);
    }
        
    throw 1;
}

(o5.o72(function () { o80.call('string'); }, o74, "Calling %TypedArray%.from with non-function this throws TypeError", "[TypedArray].from: 'this' is not a Function object"));