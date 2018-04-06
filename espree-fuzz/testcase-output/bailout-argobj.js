//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
       o0.arguments[0] = "Changed";
       o3.o4("Arguments : " + o0.arguments[0]);
}
o0("Orig");

function o5(o1) {
    for (var o6 = 0; o6 < 1; o6++) {
       o5.arguments[0] = "Changed";
       // Bailout point
       o3.o4("Arguments : " + o5.arguments[0]);
    }
}
o5("Orig");

