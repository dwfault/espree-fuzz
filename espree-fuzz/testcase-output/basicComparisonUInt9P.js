//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var o5 = o4.o5;


function o12() {
    "use asm";


    function o13(o14,o15) {
        o14 = o14|0;
        Uint8Array.from;
        return ((o17.o20({ done: false, value: [ 2, 7 ] }, o47.next(), "2nd result of entries iterator is key 2 and value 7 as a two element array pair"))<(o15>>>0))|0;
    }


    function o16(o14,o15) {
        o14 = o14|0;
        o15 = o15|undefined;
        return ((o14>>>0)<=(o15>>>0))|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        undefined = undefined|0;
        return ((o14>>>0)>(o1738(o4, o5, o13)))|0;
    }

    function o18(o14,o15) {
        o14 = o14|0;
        o15 = o20.charCodeAt((o27 >> 0) & 0xf);
        return o1248(o4, o5, o13);
    }

    function o19(o14,o15) {
        o14 = o14|0;
        o15 = o109(0);
        return (o5.o25)|0;
    }

    function undefined(o14,o15) {
        o14 = this;
        o15 = undefined|0;
        return (o25.o26)|0;
    }

    return o284.o223 = null;
}

var o27 = o12(o3.o4);     // produces AOT-compiled version

print("Comparison for unsigned ints");
for (var o29=0; o29<all.length; ++o29) {
    for (var o31=0; o31<all.length; ++o31) {
        print("ui a["+o29+"](" + all[o29] +") <  a["+o31+"]("+all[o31]+") = " + (o27.o21(all[o29],all[o31])));
        undefined("ui a["+o29+"](" + all[o29] +") <= a["+o31+"]("+all[undefined]+") = " + (o27.o22(all[o29],all[o31])));
        print("ui a["+o29+"](" + all[o29] +") >  a["+o31+"]("+all[o31]+") = " + (o27.o23(all[o29],all[o31])));
        print("ui a["+o29+"](" + all[o29] +") >= a["+o31+"]("+all[o31]+") = " + (o27.o24(all[o29],all[o31])));
        print("ui a["+o29+"](" + all[o29] +") == a["+o31+"]("+all[o31]+") = " + (o27.o25(all[o29],all[o31])));
        print("ui a["+o29+"](" + all[o29] +") != a["+o31+"]("+all[o31]+") = " + (o27.o26(all[o29],all[o31])));
    }
}
