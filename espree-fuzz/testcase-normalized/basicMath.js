//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25, 65536, 46341,
            Number.o6, Number.MIN_VALUE, Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o6), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o12() {
    "use asm";

    function add(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14+o15)|0;
    }
    function sub(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14-o15)|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)/(o15|0))|0;
    }

    function o18(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)%(o15|0))|0;
    }

    function o19(o14) {
        o14 = o14|0;
        return (o14+1048575)|0;
    }
    function o20(o14) {
        o14 = o14|0;
        return (o14-1048575)|0;
    }
    function o21(o14) {
        o14 = o14|0;
        return (o14*1048575)|0;
    }

    function o22(o14) {
        o14 = o14|0;
        return ((o14|0)/1048575)|0;
    }

    function o23(o14) {
        o14 = o14|0;
        return ((o14|0)%1048575)|0;
    }

    return {
        add : add,
        sub : sub,
        o17 : o17,
        o18 : o18,
        o19 : o19,
        o20 : o20,
        o21 : o21,
        o22 : o22,
        o23 : o23,
    };
}

function o24() {
    "use asm";

    function add(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14>>>0)+(o15>>>0))|0;
    }
    function sub(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14>>>0)-(o15>>>0))|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14>>>0)/(o15>>>0))|0;
    }

    function o18(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14>>>0)%(o15>>>0))|0;
    }


    function o19(o14) {
        o14 = o14|0;
        return (o14+4294967295)|0;
    }
    function o20(o14) {
        o14 = o14|0;
        return (o14-4294967295)|0;
    }

    function o21(o14) {
        o14 = o14|0;
        return ((o14>>>0)*1048575)|0;
    }

    function o22(o14) {
        o14 = o14|0;
        return ((o14>>>0)/4294967295)|0;
    }

    function o23(o14) {
        o14 = o14|0;
        return ((o14>>>0)%4294967295)|0;
    }

    return {
        add : add,
        sub : sub,
        o17 : o17,
        o18 : o18,
        o19 : o19,
        o20 : o20,
        o21 : o21,
        o22 : o22,
        o23 : o23,
    };
}

function o25() {
    "use asm";

    function add(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return +(o14+o15);
    }

    function sub(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return +(o14-o15);
    }

    function o26(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return +(o14*o15);
    }

    function o17(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return +(o14/o15);
    }

    function o18(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return +(o14%o15);
    }

    return {
        add : add,
        sub : sub,
        o26 : o26,
        o17 : o17,
        o18 : o18,
    };
}

var o27 = o12();     // produces AOT-compiled version
var o28 = o24();     // produces AOT-compiled version
var o29 = o25();     // produces AOT-compiled version
print("Math for ints");
for (var o31=0; o31<all.length; ++o31) {
    for (var o33=0; o33<all.length; ++o33) {
        print("i  a["+o31+"](" + all[o31] +") + a["+o33+"]("+all[o33]+") = " + (o27.add(all[o31],all[o33])));
        print("i  a["+o31+"](" + all[o31] +") - a["+o33+"]("+all[o33]+") = " + (o27.sub(all[o31],all[o33])));
        print("i  a["+o31+"](" + all[o31] +") / a["+o33+"]("+all[o33]+") = " + (o27.o17(all[o31],all[o33])));
        print("i  a["+o31+"](" + all[o31] +") % a["+o33+"]("+all[o33]+") = " + (o27.o18(all[o31],all[o33])));
    }
    print("i  a["+o31+"](" + all[o31] +") + 1048575 = " + (o27.o19(all[o31])));
    print("i  a["+o31+"](" + all[o31] +") - 1048575 = " + (o27.o20(all[o31])));
    print("i  a["+o31+"](" + all[o31] +") * 1048575 = " + (o27.o21(all[o31])));
    print("i  a["+o31+"](" + all[o31] +") / 1048575 = " + (o27.o22(all[o31])));
    print("i  a["+o31+"](" + all[o31] +") % 1048575 = " + (o27.o23(all[o31])));
}

print("Math for unsigned ints");
for (var o31=0; o31<all.length; ++o31) {
    for (var o33=0; o33<all.length; ++o33) {
        print("ui a["+o31+"](" + all[o31] +") + a["+o33+"]("+all[o33]+") = " + (o28.add(all[o31],all[o33])));
        print("ui a["+o31+"](" + all[o31] +") - a["+o33+"]("+all[o33]+") = " + (o28.sub(all[o31],all[o33])));
        print("ui a["+o31+"](" + all[o31] +") / a["+o33+"]("+all[o33]+") = " + (o28.o17(all[o31],all[o33])));
        print("ui a["+o31+"](" + all[o31] +") % a["+o33+"]("+all[o33]+") = " + (o28.o18(all[o31],all[o33])));
    }
    print("ui  a["+o31+"](" + all[o31] +") + 4294967295 = " + (o28.o19(all[o31])));
    print("ui  a["+o31+"](" + all[o31] +") - 4294967295 = " + (o28.o20(all[o31])));
    print("ui  a["+o31+"](" + all[o31] +") * 1048575 = "    + (o28.o21(all[o31])));
    print("ui  a["+o31+"](" + all[o31] +") / 4294967295 = " + (o28.o22(all[o31])));
    print("ui  a["+o31+"](" + all[o31] +") % 4294967295 = " + (o28.o23(all[o31])));
}

print("Math for Ddoubles");
for (var o31=0; o31<all.length; ++o31) {
    for (var o33=0; o33<all.length; ++o33) {
        print("f  a["+o31+"](" + all[o31] +") + a["+o33+"]("+all[o33]+") = " + (o29.add(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") - a["+o33+"]("+all[o33]+") = " + (o29.sub(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") * a["+o33+"]("+all[o33]+") = " + (o29.o26(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") / a["+o33+"]("+all[o33]+") = " + (o29.o17(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") % a["+o33+"]("+all[o33]+") = " + (o29.o18(all[o31],all[o33])));
    }
}

