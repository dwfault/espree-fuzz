//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// OS 6471427: With -forceserialized, the name of a function is not displayed correctly.

class o0 {
    static o1() {}
}

if ("func88" == o0.o1.name) {
    o3.o4("Pass");
} else {
    o3.o4("Fail");
}
