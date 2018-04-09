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
            Number.o1, Number.MIN_VALUE, Number.NaN, Number.o2, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o1), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o2), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o3(stdlib) {
    "use asm";

    var fround = stdlib.Math.fround;

    function o4(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        var o7 = 0;
        if( (o6|0) < 0 & (o5|0) < 0){
            o7 = 1;
        }
        else {
            if((o5|0)>0 | (o6|0)>0){
                o7 = 2;
            }
            else{
                o7 = 3;
            }
        }
        return (o7)|0;
    }

    function o8(o5,o6) {
        o5 = +o5;
        o6 = +o6;
        var o7 = 0;
        if(o6<0.0 & o5<0.0){
            o7 = 1;
        }
        else {
            if(o5>0.0 | o6>0.0){
                o7 = 2;
            }
            else{
                o7 = 3;
            }
        }
        return (o7)|0;
    }

    function o9(o5,o6) {
        o5 = fround(o5);
        o6 = fround(o6);
        var o7 = 0;
        if(o6<fround(0.0) & o5<fround(0.0)){
            o7 = 1;
        }
        else {
            if(o5>fround(0.0) | o6>fround(0.0)){
                o7 = 2;
            }
            else{
                o7 = 3;
            }
        }
        return (o7)|0;
    }

    function o10(o5,o6) {
        o5 = o5|0;
        o6 = +o6;
        var o7 = 0;
        if((o5|0)>0){
            if(o6>0.0){
                o7 = 1;
            } else {
                if(o6==0.0){
                    o7 = 2;
                } else {
                    o7 = 3;
                }
            }
            return o7|0;
        }
        else {
            if((o5|0)==0){
                if(o6>0.0){
                    o7 = 4;
                } else {
                    if(o6==0.0){
                        o7 = 5;
                    } else {
                        o7 = 6;
                    }
                }
            } else { // x < 0
                if(o6>0.0){
                    o7 = 7;
                } else {
                    if(o6==0.0){
                        o7 = 8;
                    } else {
                        o7 = 9;
                    }
                }
            }
            return o7|0;
        }
        return (o7)|0;
    }

    return {
        o4   : o4,
        o8: o8,
        o9 : o9,
        o10   : o10
    };
}


var o11 = o3({Math:Math});

for (var o7=0; o7<all.length; ++o7) {
    print("t1   +a["+o7+"](" + all[o7] +") = " + (o11.o4   (all[o7])));
    print("t2   +a["+o7+"](" + all[o7] +") = " + (o11.o8(all[o7])));
    print("t2   +a["+o7+"](" + all[o7] +") = " + (o11.o9(all[o7])));
    print("t3   +a["+o7+"](" + all[o7] +") = " + (o11.o10   (all[o7])));
}

for (var o7=0; o7<all.length; ++o7) {
    for (var o12=0; o12<all.length; ++o12) {
        print("t1 a["+o7+"](" + all[o7] +") , a["+o12+"]("+all[o12]+") = " + (o11.o4   (all[o7],all[o12])));
        print("t2 a["+o7+"](" + all[o7] +") , a["+o12+"]("+all[o12]+") = " + (o11.o8(all[o7],all[o12])));
        print("t2 a["+o7+"](" + all[o7] +") , a["+o12+"]("+all[o12]+") = " + (o11.o9 (all[o7],all[o12])));
        print("t3 a["+o7+"](" + all[o7] +") , a["+o12+"]("+all[o12]+") = " + (o11.o10   (all[o7],all[o12])));
    }
}
