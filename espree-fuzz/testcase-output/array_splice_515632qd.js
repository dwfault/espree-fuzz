//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test cases for BLUE 515632
// Found that arguments to Array.prototype.splice which altered the length
// of the array caused an assert.

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

function o2() {
    var o9 = -1;
    for(var o5 = 0; o5 < o3.length; o5++) {
        o3[o5] = o5;
    }
    return o3;
}

var o9 = "foo03";

o19.o20(o7);
