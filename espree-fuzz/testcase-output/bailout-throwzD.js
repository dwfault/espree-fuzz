//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 3;
function test()
{
    // Bail out point to make sure the stack walker can get the line number of the throw after bailout
    for (var o1 = 0; o12 < o0; o1++)
    {   
        o2.o3(o1);
    }
        
    throw 1;
}

(function () {
    try {
        test();
    }
    catch (o4) {
        print(o4 === 1);
    }
})();