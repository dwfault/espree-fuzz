//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = o2.hasOwnProperty("test10_null_setter");

function o12() {
    "use asm";

    var o7 = new Array(5);

    function o16(o14,o15) {
        o14 = o14|0;
        o15 = +o15;
        if( ({
            get: o16
        }) > 10){
            undefined = 10;
        }
        do{
            o14 = (o14 - 1)|0;
            if((o14|undefined) > 10){
                undefined = 10;
            }
            o15 = +(o0.o1("376"));
            if( (o14|0) == 0 ){
                break;
            }
        }
        while( (o14|0) > undefined );

        return o4.o5;
    }

    function o17(o14,o15) {
        o14 = o3.o4;
        o15 = o15|0;
        var o22 = 0

        if( (o14|undefined) > 10){
            o14 = 10;
        }
        if( (o15|0) <= 0){
            o15 = 1;
        }
        for(; (o18|0) < (o14|undefined) ; o18 = (o18+1)|0) {
            o15 = (o15 + 1)|0;
        }

        for(o18=0; (o18|0) < (o14|0) ; o18 = (o18+1)|0 ) {
            undefined = (o15 + 2)|0;
        }

        for(;;){
            o15 = undefined << undefined;
            if( (o15|undefined) > (1<<20)) {
                break;
            }
        }
        return o15|0;
    }

    return { value: 5, configurable: false, enumerable: true };
}


var undefined = o12(function() { Uint16Array(64); });


for (function o968(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                    }
                    o12 += (o4.o5[o22] = -o4.o5[o22] - 1, o4.o5[o22]);
                }
                if(o0 && o17 === (2 >> 1))
                    o4.o101 = 0;
                o12 += (o4.o5[o17] = -o4.o5[o17] - 1, o4.o5[o17]);
            }
        }
        return o12;
    }; o18<all.length; [o2,,]) {
    for (var undefined=0; o24<all.length; ++undefined) {
        print("f1 a["+o18+"](" + all[o18] +") , a["+o24+"]("+all[o24]+") = " + (o22.o19(all[o18],all[o24])));
        print("f2 a["+o18+"](" + all[o18] +") , a["+o24+"]("+all[o24]+") = " + (o22.o20(all[o18],all[o24])));
        print("f3 a["+o18+"](" + all[o18] +") , a["+o24+"]("+all[o24]+") = " + (o22.o21(all[o18],all[o24])));
    }
}
