//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    "use strict";
    try {
        var o1 = new String("aaa");
        o1[0] = "b";
        o3.o4("failed");
    } 
    catch (o5) {
        o3.o4("passed");
    }
}
o0();

function o6() {
    try {
        var o1 = new String("aaa");
        o1[0] = "b";
        if (o1 != "aaa")
            o3.o4("failed");
        else
            o3.o4("passed");
    } 
    catch (o5) {
        o3.o4("failed");
    }
}
o6();