//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    o3.o4(o2);
    o5(function () {
        Object.defineProperty(new Object(), "foo", o1);
        o3.o4("Success");
    });
}

function o5(o8) {
    try {
        o8();
    }
    catch (o9) {
        o3.o4(o9.name + ": " + o9.o11);
    }
}

var o12 = [true, false];
var o13 = [true, false];
o13[2] = undefined;  // Work around WOOB 1099317 in compat mode

var o1;

for (var o15 in o12) {
    for (var o16 in o13) {
        for (var o17 in o12) {
            for (var o18 in o12) {
                var o19 = "";
                var o20;
                o1 = {};

                o20 = o12[o15];
                if (o20) { o1.value = "fooValue"; o19 += "value; "; }

                o20 = o13[o16];
                if (o20 !== undefined) { o1.writable = o20; o19 += "writable=" + o20 + "; "; }

                o20 = o12[o17];
                if (o20) { o1.get = function () { return "aValue"; }; o19 += "getter; "; }

                o20 = o12[o18];
                if (o20) { o1.set = function (o25) { }; o19 += "setter; "; }

                o0(o1, o19);
            }
        }
    }
}
