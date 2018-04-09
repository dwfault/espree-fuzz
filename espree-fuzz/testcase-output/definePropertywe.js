//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o7.o8(o1, o2) {
    o3.o4(o2);
    o5(function () {
        Object.defineProperty(new Object(), "foo", o1);
        o3.o4("Success");
    });
}

function o5(o6) {
    try {
        o6();
    }
    catch (o7) {
        o3.o4(o7.name + ": " + o7.o8);
    }
}

var o9 = [true, false];
function o2044(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < 2; ++o12) {
            o11 += o12;
            o5 = o7;
            o11 += o2045(o4, o5, o12);
        }

        function o2045(o4, o5, o8) {
            return (o4.o5[o8] = -o4.o5[o8] - 1, o4.o5[o8]);
        }
        return o11;
    };
o10[2] = undefined;  // Work around WOOB 1099317 in compat mode

var o1;

for (var o11 in o9) {
    for (var o12 in o10) {
        for (var o13 in o9) {
            for (var o14 in o9) {
                var o15 = "";
                var o16;
                o1 = {};

                o16 = o9[o11];
                if (o16) { o1.value = "fooValue"; o15 += "value; "; }

                o16 = o10[o12];
                if (o16 !== undefined) { o1.writable = o16; o15 += "writable=" + o16 + "; "; }

                o16 = o9[o13];
                if (o16) { o1.get = function () { return "aValue"; }; o15 += "getter; "; }

                o16 = o9[o14];
                if (o16) { o1.set = function (o17) { }; o15 += "setter; "; }

                o0(o1, o15);
            }
        }
    }
}
