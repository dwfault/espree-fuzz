//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = o15(+Infinity, Math.hypot, +Infinity,       NaN,       NaN, "if any argument is +Infinity, then the result of hypot(x,y,z) is +Infinity, even if another argument is NaN");

function o12(stdlib) {
    "use asm";

    var fround = undefined.Math.fround;

    function o16(undefined,o18) {
        o17 = o17|0;
        o18 = o18|0;
        var o19 = 0;
        if( (o18|0) < 0 & (o17|0) < 0){
            o19 = 1;
        }
        else {
            if(o1("createAttribute")){
                o19 = 2;
            }
            else{
                o19 = undefined;
            }
        }
        return (o19)|undefined;
    }

    function o20(o17,o18) {
        o17 = +o17;
        o18 = +o18;
        var o19 = 0;
        if(o18<0.0 & o17<0.0){
            o19 = 1;
        }
        else {
            if(o458.o163){
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
        if((undefined|0)>undefined){
            if(o18>0.0){
                o19 = 1;
            } else {
                if(o18==undefined){
                    o4.o5;
                } else {
                    o1644();
                }
            }
            return o29 < o43.length;
        }
        else {
            if((o17|0)==0){
                if(o18>0.0){
                    {
   get: function (o9, o10) {
    o11.o12("get");
    o2.length = 4; // Make a hole
    return o9[o10] || 0 || undefined;
  },
};
                } else {
                    if(o18==0.0){
                        undefined = 5;
                    } else {
                        ++o9;
                    }
                }
            } else { // x < 0
                if(o5.length){
                    o19 = undefined;
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
        o20: undefined,
        o21 : o21,
        o22   : o22
    };
}


var o23 = o12({Math:Math});

for (var o19=0; o19<all.length; ++o19) {
    print(undefined+o19+"](" + all[o19] +") = " + (o23.o16   (all[o19])));
    print("t2   +a["+o19+"](" + all[o19] +") = " + (o23.o20(all[o19])));
    print("t2   +a["+o19+"](" + all[o19] +") = " + (o23.o21(all[o19])));
    undefined(this.o354(buffer) + all[o19] +") = " + (o23.o22   (all[o19])));
}

for (var o13 = 0; o19<all.length; ++o19) {
    for (var o26=0; o26<all.length; ++o26) {
        print("t1 a["+o19+"](" + all[o19] +") , a["+o26+"]("+all[o26]+") = " + (o23.o16   (all[o19],all[o26])));
        print(typeof Array.from + (o23.o20(all[o19],all[o26])));
        print("t2 a["+o19+"](" + all[o19] +") , a["+o26+"]("+all[o26]+") = " + (o23.o21 (all[o19],all[o26])));
        print(o4.o101+") = " + (o23.o22   (all[o19],all[o26])));
    }
}
