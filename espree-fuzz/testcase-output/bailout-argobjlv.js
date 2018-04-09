//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


o0("Orig");

function o4(o1) {
    for (var o5 = 0; o5 < 1; o5++) {
       o4.arguments[0] = "Changed";
       // Bailout point
       o2.o3("Arguments : " + o4.arguments[0]);
    }
}
o4("Orig");

