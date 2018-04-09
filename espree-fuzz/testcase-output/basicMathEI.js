//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), this,
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25, 65536, 46341,
            Number.o1, Number.MIN_VALUE, Number.NaN, Number.o2, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o1), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o2), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o3() {
    "use asm";

    function add(o4,o5) {
        o4 = o4|0;
        o5 = o5|0;
        return (o4+o5)|0;
    }
    function sub(o4,o5) {
        o4 = o4|0;
        o5 = o5|0;
        return (o4-o5)|0;
    }

    function o6(o4,o5) {
        o4 = o4|0;
        o5 = o5|0;
        return ((o4|0)/(o5|0))|0;
    }

    function o7(o4,o5) {
        o4 = o4|0;
        o5 = o5|0;
        return ((o4|0)%(o5|0))|0;
    }

    function o8(o4) {
        o4 = o4|0;
        return (o4+1048575)|0;
    }
    function o9(o4) {
        o4 = o4|0;
        return (o4-1048575)|0;
    }
    function o10(o4) {
        o4 = o4|0;
        return (o4*1048575)|0;
    }

    function o11(o4) {
        o4 = o4|0;
        return ((o4|0)/1048575)|0;
    }

    function o12(o4) {
        o4 = o4|0;
        return ((o4|0)%1048575)|0;
    }

    return {
        add : add,
        sub : sub,
        o6 : o6,
        o7 : o7,
        o8 : o8,
        o9 : o9,
        o10 : o10,
        o11 : o11,
        o12 : o12,
    };
}

function o505() {
    var o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = [];
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = -o5[o8];
    return o9(o506(o4, o5, o7));

    function o506(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < o5.length; ++o22) {
                        o11 += o22;
                    }
                    o11 += o5[o21];
                }
                o11 += o5[o16];
            }
        }
        return o11;
    }
};

function o14() {
    "use asm";

    function add(o4,o5) {
        o4 = +o4;
        o5 = +o5;
        return +(o4+o5);
    }

    function sub(o4,o5) {
        o4 = +o4;
        o5 = +o5;
        return +(o4-o5);
    }

    function o15(o4,o5) {
        o4 = +o4;
        o5 = +o5;
        return +(o4*o5);
    }

    function o6(o4,o5) {
        o4 = +o4;
        o5 = +o5;
        return +(o4/o5);
    }

    function o7(o4,o5) {
        o4 = +o4;
        o5 = +o5;
        return +(o4%o5);
    }

    return {
        add : add,
        sub : sub,
        o15 : o15,
        o6 : o6,
        o7 : o7,
    };
}

var o16 = o3();     // produces AOT-compiled version
var o17 = o13();     // produces AOT-compiled version
var o18 = o14();     // produces AOT-compiled version
print("Math for ints");
for (var o19=0; o19<all.length; ++o19) {
    for (var o20=0; o20<all.length; ++o20) {
        print("i  a["+o19+"](" + all[o19] +") + a["+o20+"]("+all[o20]+") = " + (o16.add(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") - a["+o20+"]("+all[o20]+") = " + (o16.sub(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") / a["+o20+"]("+all[o20]+") = " + (o16.o6(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") % a["+o20+"]("+all[o20]+") = " + (o16.o7(all[o19],all[o20])));
    }
    print("i  a["+o19+"](" + all[o19] +") + 1048575 = " + (o16.o8(all[o19])));
    print("i  a["+o19+"](" + all[o19] +") - 1048575 = " + (o16.o9(all[o19])));
    print("i  a["+o19+"](" + all[o19] +") * 1048575 = " + (o16.o10(all[o19])));
    print("i  a["+o19+"](" + all[o19] +") / 1048575 = " + (o16.o11(all[o19])));
    print("i  a["+o19+"](" + all[o19] +") % 1048575 = " + (o16.o12(all[o19])));
}

print("Math for unsigned ints");
for (var o19=0; o19<all.length; ++o19) {
    for (var o20=0; o20<all.length; ++o20) {
        print("ui a["+o19+"](" + all[o19] +") + a["+o20+"]("+all[o20]+") = " + (o17.add(all[o19],all[o20])));
        print("ui a["+o19+"](" + all[o19] +") - a["+o20+"]("+all[o20]+") = " + (o17.sub(all[o19],all[o20])));
        print("ui a["+o19+"](" + all[o19] +") / a["+o20+"]("+all[o20]+") = " + (o17.o6(all[o19],all[o20])));
        print("ui a["+o19+"](" + all[o19] +") % a["+o20+"]("+all[o20]+") = " + (o17.o7(all[o19],all[o20])));
    }
    print("ui  a["+o19+"](" + all[o19] +") + 4294967295 = " + (o17.o8(all[o19])));
    print("ui  a["+o19+"](" + all[o19] +") - 4294967295 = " + (o17.o9(all[o19])));
    print("ui  a["+o19+"](" + all[o19] +") * 1048575 = "    + (o17.o10(all[o19])));
    print("ui  a["+o19+"](" + all[o19] +") / 4294967295 = " + (o17.o11(all[o19])));
    print("ui  a["+o19+"](" + all[o19] +") % 4294967295 = " + (o17.o12(all[o19])));
}

print("Math for Ddoubles");
for (var o19=0; o19<all.length; ++o19) {
    for (var o20=0; o20<all.length; ++o20) {
        print("f  a["+o19+"](" + all[o19] +") + a["+o20+"]("+all[o20]+") = " + (o18.add(all[o19],all[o20])));
        print("f  a["+o19+"](" + all[o19] +") - a["+o20+"]("+all[o20]+") = " + (o18.sub(all[o19],all[o20])));
        print("f  a["+o19+"](" + all[o19] +") * a["+o20+"]("+all[o20]+") = " + (o18.o15(all[o19],all[o20])));
        print("f  a["+o19+"](" + all[o19] +") / a["+o20+"]("+all[o20]+") = " + (o18.o6(all[o19],all[o20])));
        print("f  a["+o19+"](" + all[o19] +") % a["+o20+"]("+all[o20]+") = " + (o18.o7(all[o19],all[o20])));
    }
}
