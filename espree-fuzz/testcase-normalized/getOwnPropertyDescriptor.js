//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests that getOwnPropertyDescriptor is not supported in IE8-mode for non-DOM objects.

function o0(o1, o2) {
    o3(function () {
        var o4 = Object.getOwnPropertyDescriptor(o1, o2);
        var o7 = (o4 != undefined);
        o9.o10("Found descriptor for " + o2 + ": " + o7);
        if (o7) {
            for (var o11 in o4) {
                o9.o10(o11 + "=" + o4[o11]);
            }
        }
    });
}

function o3(o12) {
    try {
        o12();
    }
    catch (o13) {
        o9.o10(o13.name + ": " + o13.o15);
    }
}

o0({ o16: "fooValue" }, "foo");
