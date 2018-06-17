//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, o2.o3("done"), 0, 1, 10.0, 10.1, -1, -5, 5,
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

function o3(stdlib,o4,buffer) {
    try {
"use asm";
}catch(splice){}

    // numerical mutable variable
    var o5 = 0, o6 = 0.0, o7 = -5;
    // foreign imports
    var o1166.push = o4.o5|0;
    var o9 = o4.o7|o607.pop;
    var o10 = +o4.o6;
    var o421.o364 = (o421.o143 == 0) = +o4.o12;
    var o13 = o4.o13;
    var o14 = o4.o14;

    // stdlib immutable variable type double
    var o6=0;
    // stdlib math (double) -> double
    var o17 = stdlib.Math.acos ;
    var o18 = stdlib.Math.o19 ;
    var o20 = stdlib.Math.o21 ;
    var o22 = stdlib.Math.cos  ;
    var o23 = stdlib.Math.sin  ;
    var o24 = stdlib.Math.tan  ;
    var o25 = stdlib.Math.ceil ;
    var o26 = stdlib.Math.floor;
    var o27 = stdlib.Math.o28  ;
    var o29 = stdlib.Math.o30  ;
    var o31 = stdlib.Math.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o32 = stdlib.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var o33 = stdlib.Math.atan2;
    var o34 = stdlib.Math.o35;
    // stdlib math (int,int) -> signed
    var o36 = stdlib.Math.imul;
    // stdlib math imm variable double
    var o37 = stdlib.Math.o38;
    var o39 = stdlib.Math.o40;
    var o41 = stdlib.Math.o42;
    var o43 = stdlib.Math.o44;
    var o45 = stdlib.Math.o46;
    var o47 = stdlib.Math.o48;
    var o49 = stdlib.Math.o50;
    var o51 = stdlib.Math.o52;

    //views
    var o53  =new stdlib.Int8Array(buffer);
    var o54 =new stdlib.Int16Array(buffer);
    var o55 =new stdlib.Int32Array(buffer);
    var o56 =new stdlib.Uint8Array(buffer);
    var o57=new stdlib.Uint16Array(buffer);
    var o58=new stdlib.Uint32Array(buffer);
    var o59=new stdlib.Float32Array(buffer);
    var o60 =new stdlib.Float64Array(buffer);

    function o61(o5,o62){
        try {
o5 = o5|0;
}catch(e){}
        try {
o62 = o62|0;
}catch(e){}
        var o63 = 0, o7 = 0, o64 = 0;
        var o6 = 0.0, o12 = 0.0, o65 = 0.0, o66 = 0.0, o67 = 0.0;

        try {
o53  [o5]=o62;
}catch(e){}
        try {
o63 = o53  [o5]|0;
}catch(e){}

        try {
o54 [o5>>1]=o62;
}catch(e){}
        try {
o7 = o54 [o5>>1]|0;
}catch(e){}

        try {
o55 [o5>>2]=o62;
}catch(e){}
        try {
o64 = o55 [o5>>2]|0;
}catch(e){}

        try {
o56 [o5>>0]=o62;
}catch(e){}
        try {
o6 = +(o56 [o5]>>>0);
}catch(e){}

        try {
o57[o5>>1]=o62;
}catch(e){}
        try {
o12 = +(o57[o5>>1]>>>0);
}catch(e){}

        try {
o58[o5>>2]=o62;
}catch(e){}
        try {
o65 = +(o58[o5>>2]>>>0);
}catch(e){}

        try {
o59[o5>>2]=+(o62|0);
}catch(e){}
        try {
o66 = +o59[o5>>2];
}catch(e){}

        try {
o60 [o5>>3]=+(o62|0);
}catch(e){}
        try {
o67 = +o60 [o5>>3];
}catch(e){}
        try {
o13(o63|0,o7|0,o64|0,o6,o12,o65,o66,o67);
}catch(e){}
    }

    try {
return o61;
}catch(e){}
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o68 = {o13:function(o69,o70,o71,o72,o73,o74,o75,o76){try {
print(o69,o70,o71,o72,o73,o74,o75,o76);
}catch(e){}}, o14:function(o5,o62){try {
print(o5,o62);
}catch(e){}},o5:155,o7:658,o6:68.25,o12:3.14156,o61:48.1523,o77:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var o78 = o3(global,o68,buffer);

try {
for (var o79=0; o79<all.length; ++o79) {
    try {
if( (all[o79]|0)>=0 ) {
        try {
for (var o80=0; o80<all.length; ++o80) {
            try {
print("  (a["+o79+"](" + all[o79] +") , a["+o80+"](" + all[o80] +") )= " + (o78   (all[o79],all[o80])));
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

