//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Confirm that we can continue executing function calls and loop bodies when we fail
// to install jitted code after the native code gen job has succeeded. (Written to run
// with /mic:2 /lic:1 /on:failnativecodeinstall.)

var o0 = 0;
var o1;

try {
    try {
        o0++;
        // Interpret f, throw on jitting of loop body
        o2();
    }
    catch (o3) {
        o4.o5('caught call ' + o0++);
        // Interpret f, throw on jitting of loop body
        o2();
    }
}
catch (o3) {
    o4.o5('caught call ' + o0);
    try {
        try {
            o0++;
            // Throw trying to jit function body
            o2();
        }
        catch (o3) {
            o4.o5('caught call ' + o0++);
            // Throw trying to jit function body
            o2();
        }
    }
    catch (o3) {
        o4.o5('done');
    }
}

function o2() {
    o4.o5('call ' + o0);
    while (1) {
        o1++;
    }
}

