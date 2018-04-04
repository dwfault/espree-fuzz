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

function o12() {
    "use asm";

    function o13(o14,o15) {
        o14 = o14|0;
        o15 = +o15;
        if( (o14|0) > 10){
            o14 = 10;
        }
        while( (o14|0) > 0){
            o14 = (o14 - 1)|0;
            o15 = +(o15 + 1.0);
            if( (o14|0) == 0 ){
                break;
            }
        }
        return +o15;
    }

    function o16(o14,o15) {
        o14 = o14|0;
        o15 = +o15;
        if( (o14|0) > 10){
            o14 = 10;
        }
        do{
            o14 = (o14 - 1)|0;
            if((o14|0) > 10){
                o14 = 10;
            }
            o15 = +(o15 + 1.0);
            if( (o14|0) == 0 ){
                break;
            }
        }
        while( (o14|0) > 0 );

        return +o15;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        var o18=0;

        if( (o14|0) > 10){
            o14 = 10;
        }
        if( (o15|0) <= 0){
            o15 = 1;
        }
        for(; (o18|0) < (o14|0) ; o18 = (o18+1)|0) {
            o15 = (o15 + 1)|0;
        }

        for(o18=0; (o18|0) < (o14|0) ; o18 = (o18+1)|0 ) {
            o15 = (o15 + 2)|0;
        }

        for(;;){
            o15 = o15 << 1;
            if( (o15|0) > (1<<20)) {
                break;
            }
        }
        return o15|0;
    }

    return {
        o19 : o13,
        o20 : o16,
        o21 : o17,
    };
}


var o22 = o12();


for (var o18=0; o18<all.length; ++o18) {
    for (var o24=0; o24<all.length; ++o24) {
        print("f1 a["+o18+"](" + all[o18] +") , a["+o24+"]("+all[o24]+") = " + (o22.o19(all[o18],all[o24])));
        print("f2 a["+o18+"](" + all[o18] +") , a["+o24+"]("+all[o24]+") = " + (o22.o20(all[o18],all[o24])));
        print("f3 a["+o18+"](" + all[o18] +") , a["+o24+"]("+all[o24]+") = " + (o22.o21(all[o18],all[o24])));
    }
}
