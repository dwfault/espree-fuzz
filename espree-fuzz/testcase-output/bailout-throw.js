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
        o3.o4(o2);
    }
        
    throw 1;
}

(function () {
    try {
        test();
    }
    catch (o5) {
        print(o5 === 1);
    }
})();