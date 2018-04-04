//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
            Number.o6, Number.MIN_VALUE, Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o6), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o12(stdlib) {
    "use asm";

    var fround = stdlib.Math.fround;

    function o16(o17,o18) {
        o17 = o17|0;
        o18 = o18|0;
        var o19 = 0;
        if( (o18|0) < 0 & (o17|0) < 0){
            o19 = 1;
        }
        else {
            if((o17|0)>0 | (o18|0)>0){
                o19 = 2;
            }
            else{
                o19 = 3;
            }
        }
        return (o19)|0;
    }

    function o20(o17,o18) {
        o17 = +o17;
        o18 = +o18;
        var o19 = 0;
        if(o18<0.0 & o17<0.0){
            o19 = 1;
        }
        else {
            if(o17>0.0 | o18>0.0){
                o19 = 2;
            }
            else{
                o19 = 3;
            }
        }
        return (o19)|0;
    }

    function o21(o17,o18) {
        o17 = fround(o17);
        o18 = fround(o18);
        var o19 = 0;
        if(o18<fround(0.0) & o17<fround(0.0)){
            o19 = 1;
        }
        else {
            if(o17>fround(0.0) | o18>fround(0.0)){
                o19 = 2;
            }
            else{
                o19 = 3;
            }
        }
        return (o19)|0;
    }

    function o22(o17,o18) {
        o17 = o17|0;
        o18 = +o18;
        var o19 = 0;
        if((o17|0)>0){
            if(o18>0.0){
                o19 = 1;
            } else {
                if(o18==0.0){
                    o19 = 2;
                } else {
                    o19 = 3;
                }
            }
            return o19|0;
        }
        else {
            if((o17|0)==0){
                if(o18>0.0){
                    o19 = 4;
                } else {
                    if(o18==0.0){
                        o19 = 5;
                    } else {
                        o19 = 6;
                    }
                }
            } else { // x < 0
                if(o18>0.0){
                    o19 = 7;
                } else {
                    if(o18==0.0){
                        o19 = 8;
                    } else {
                        o19 = 9;
                    }
                }
            }
            return o19|0;
        }
        return (o19)|0;
    }

    return {
        o16   : o16,
        o20: o20,
        o21 : o21,
        o22   : o22
    };
}


var o23 = o12({Math:Math});

for (var o19=0; o19<all.length; ++o19) {
    print("t1   +a["+o19+"](" + all[o19] +") = " + (o23.o16   (all[o19])));
    print("t2   +a["+o19+"](" + all[o19] +") = " + (o23.o20(all[o19])));
    print("t2   +a["+o19+"](" + all[o19] +") = " + (o23.o21(all[o19])));
    print("t3   +a["+o19+"](" + all[o19] +") = " + (o23.o22   (all[o19])));
}

for (var o19=0; o19<all.length; ++o19) {
    for (var o26=0; o26<all.length; ++o26) {
        print("t1 a["+o19+"](" + all[o19] +") , a["+o26+"]("+all[o26]+") = " + (o23.o16   (all[o19],all[o26])));
        print("t2 a["+o19+"](" + all[o19] +") , a["+o26+"]("+all[o26]+") = " + (o23.o20(all[o19],all[o26])));
        print("t2 a["+o19+"](" + all[o19] +") , a["+o26+"]("+all[o26]+") = " + (o23.o21 (all[o19],all[o26])));
        print("t3 a["+o19+"](" + all[o19] +") , a["+o26+"]("+all[o26]+") = " + (o23.o22   (all[o19],all[o26])));
    }
}
