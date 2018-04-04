//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = function() {
    function o1() {
        return arguments;
    }
    var o3 = o1(2, 3);
    if(o3.length === 2)
    {
        o5.o6("PASSED");
    }
    else
    {
        o5.o6(o3.length);
    }
}
test();
