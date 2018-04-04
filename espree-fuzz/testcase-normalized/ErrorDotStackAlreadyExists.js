//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
    var o0 = Error("123");
    o0.o2 = "xyz";
    o0.o3 = "abacaba";
    o4.o5("description = " + o0.o6);
    o4.o5("stack = " + o0.o3);
    for (var o7 in o0) {
        o4.o5(o7 + " = " + o0[o7]);
    }
    
    throw o0;
}
catch (o8) {
    o4.o5("----------------------");
    o4.o5("description = " + o0.o6);
    o4.o5("stack = " + o0.o3);
    for (var o7 in o8) {
        o4.o5(o7 + " = " + o8[o7]);
    }
}