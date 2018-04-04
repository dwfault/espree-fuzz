//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
    for (var o0 = 0; o0 < 10; o0++) {
        for (var o1 = 0; o1 < 10; ++o1) {
            eval('/x/ = true');
        }
    }
} catch(o3) {
    var o4 = o3.o5;
    if(o4 == "Invalid left-hand side in assignment") 
    {
        o6.o7("Expected " + o4);
    }
    else 
    {
        o6.o7("FAILED");
        throw o3;
    }
}
o6.o7('PASS');