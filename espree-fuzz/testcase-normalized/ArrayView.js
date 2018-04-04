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

function o12(stdlib,o14,buffer) {
    "use asm";

    // numerical mutable variable
    var o16 = 0, o17 = 0.0, o18 = -5;
    // foreign imports
    var o19 = o14.o16|0;
    var o20 = o14.o18|0;
    var o21 = +o14.o17;
    var o22 = +o14.o23;
    var o24 = o14.o24;
    var o25 = o14.o25;

    // stdlib immutable variable type double
    var o26 = stdlib.Infinity, o28 = stdlib.NaN;
    // stdlib math (double) -> double
    var o29 = stdlib.Math.acos ;
    var o32 = stdlib.Math.o33 ;
    var o34 = stdlib.Math.o35 ;
    var o36 = stdlib.Math.cos  ;
    var o38 = stdlib.Math.sin  ;
    var o40 = stdlib.Math.tan  ;
    var o42 = stdlib.Math.ceil ;
    var o44 = stdlib.Math.floor;
    var o46 = stdlib.Math.o47  ;
    var o48 = stdlib.Math.o49  ;
    var o50 = stdlib.Math.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o52 = stdlib.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var o54 = stdlib.Math.atan2;
    var o56 = stdlib.Math.o57;
    // stdlib math (int,int) -> signed
    var o58 = stdlib.Math.imul;
    // stdlib math imm variable double
    var o60 = stdlib.Math.o61;
    var o62 = stdlib.Math.o63;
    var o64 = stdlib.Math.o65;
    var o66 = stdlib.Math.o67;
    var o68 = stdlib.Math.o69;
    var o70 = stdlib.Math.o71;
    var o72 = stdlib.Math.o73;
    var o74 = stdlib.Math.o75;

    //views
    var o76  =new stdlib.Int8Array(buffer);
    var o78 =new stdlib.Int16Array(buffer);
    var o80 =new stdlib.Int32Array(buffer);
    var o82 =new stdlib.Uint8Array(buffer);
    var o84=new stdlib.Uint16Array(buffer);
    var o86=new stdlib.Uint32Array(buffer);
    var o88=new stdlib.Float32Array(buffer);
    var o90 =new stdlib.Float64Array(buffer);

    function o92(o16,o93){
        o16 = o16|0;
        o93 = o93|0;
        var o94 = 0, o18 = 0, o95 = 0;
        var o17 = 0.0, o23 = 0.0, o96 = 0.0, o97 = 0.0, o98 = 0.0;

        o76  [o16]=o93;
        o94 = o76  [o16]|0;

        o78 [o16>>1]=o93;
        o18 = o78 [o16>>1]|0;

        o80 [o16>>2]=o93;
        o95 = o80 [o16>>2]|0;

        o82 [o16>>0]=o93;
        o17 = +(o82 [o16]>>>0);

        o84[o16>>1]=o93;
        o23 = +(o84[o16>>1]>>>0);

        o86[o16>>2]=o93;
        o96 = +(o86[o16>>2]>>>0);

        o88[o16>>2]=+(o93|0);
        o97 = +o88[o16>>2];

        o90 [o16>>3]=+(o93|0);
        o98 = +o90 [o16>>3];
        o24(o94|0,o18|0,o95|0,o17,o23,o96,o97,o98);
    }

    return o92;
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o100 = {o24:function(o101,o102,o103,o104,o105,o106,o107,o108){print(o101,o102,o103,o104,o105,o106,o107,o108);}, o25:function(o16,o93){print(o16,o93);},o16:155,o18:658,o17:68.25,o23:3.14156,o92:48.1523,o110:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var o112 = o12(global,o100,buffer);

for (var o113=0; o113<all.length; ++o113) {
    if( (all[o113]|0)>=0 ) {
        for (var o115=0; o115<all.length; ++o115) {
            print("  (a["+o113+"](" + all[o113] +") , a["+o115+"](" + all[o115] +") )= " + (o112   (all[o113],all[o115])));
        }
    }
}

