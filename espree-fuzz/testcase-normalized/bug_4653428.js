//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

[
    (-1 >>> 0) + 1,
    (-1 >>> 0) + 2,
    Infinity,
].forEach(function(o4) {
    o5.o6(function() {
        new Uint8Array(o4);
    }, o8);

    o5.o6(function() {
        new Uint8Array({length: o4});
    }, o8);
});

print("pass");
