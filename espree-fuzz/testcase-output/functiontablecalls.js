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
    var o76=new stdlib.Int8Array(buffer);
    var o78=new stdlib.Int16Array(buffer);
    var o80=new stdlib.Int32Array(buffer);
    var o82=new stdlib.Uint8Array(buffer);
    var o84=new stdlib.Uint16Array(buffer);
    var o86=new stdlib.Uint32Array(buffer);
    var o88=new stdlib.Float32Array(buffer);
    var o90=new stdlib.Float64Array(buffer);
    
    function o92(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)<(o94|0))|0;
    }
    
    function o95(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)<=(o94|0))|0;
    }
   
    function o96(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)>(o94|0))|0;
    }
    
    function o97(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)>=(o94|0))|0;
    }
    
    function o98(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)==(o94|0))|0;
    }
   
    function o99(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)!=(o94|0))|0;
    }
    
    function o100(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o93<o94)|0;
    }
    
   
    function o101(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o93<=o94)|0;
    }
   
    function o102(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o93>o94)|0;
    }
  
    function o103(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o93>=o94)|0;
    }
    
  
    function o104(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o93==o94)|0;
    }
    
  
    function o105(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o93!=o94)|0;
    }
    
    function o106(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return (o93+o94)|0;
    }
    function o107(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return (o93-o94)|0;
    }
   
    function imul(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        var o108 = 0;
        var o109 = 0;
        
        if( o94|0 > 10 ){
            o94 = 10;
        }   
        for(;(o108|0)<(o94|0);o108 = (o108+1)|0){
            o109 = (o109 + o93)|0;
        }
        return o109|0;
    }
  
    function o110(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93>>>0)/(o94>>>0))|0;
    }
    
    function add(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return +(o93+o94);
    }

    function sub(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return +(o93-o94);
    }

    function o113(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return +(o93*o94);
    }

    function o114(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return +(o93/o94);
    }
    
    function o115(o93,o94){
        o93 = o93|0;
        o94 = o94|0;
        var o108 = 0, o116 = 0;
        if(o117[o93&7](o93,o94)|0){
            o108 = o118[o94&3](o93,o118[o94&3](o93,o93)|0)|0;
            o116 = o118[o108&3](o118[o94&3](o93,5)|0,o118[o93&3](o93,2)|0)|0;
        }
        else {
            o108 = o118[o93&3](o93,o118[o93&3](o93,o94)|0)|0;
            o116 = o118[o108&3](o118[o94&3](o93,5)|0,o118[o94&3](o93,o94)|0)|0;
        }
        if(o92(o108,o116)|0){
            o108 = o116;
        }
        else{
            o24(o116|0);
        }
        return o108|0;
    }
    
    function o119(o93,o94){
        o93 = +o93;
        o94 = +o94;
        var o120 = 0, o121 = 0;
        var o108 = 0.0, o116 = 0.0;
        o120 = ~~o93;
        o121 = ~~o94;
        if(o122[o120&7](o93,o94)|0){
            o108 = +o123[o120&3](o93,+o123[o120&3](o93,o93));
            o116 = +o123[~~o108&3](+o123[o121&3](o93,5.5),+o123[o121&3](o93,2.1));
        }
        else {
            o108 = +o123[o121&3](o93,+o123[o121&3](o93,o94));
            o116 = +o123[~~o120&3](+o123[o120&3](o93,5.5),+o123[o120&3](o93,o94));
        }
        if(o100(o108,o116)|0){
            o108 = o116;
        }
        else{
            o24(o116);
        }
        return +o108;
    }
    
    function o124(o93,o94){
        o93 = o93|0;
        o94 = +o94;
        var o108 = 0, o116 = 0.0;
        o108 = o115(o93,~~(+o119(o94,5.5)))|0;
        o116 = +o119(o94,+(o115(o93,5)|0));
        o25(o108|0,o116);
        return o108|0;
    }
    
    var o118 = [o106,o107,imul,o110];
    var o123 = [add,sub,o113,o114];
    var o117 = [o92,o95,o96,o97,o98,o99,o92,o92];
    var o122 = [o100,o101,o102,o103,o104,o105,o100,o100];
    
    
    return { 
        o115 : o115,
        o119 : o119,
        o124 : o124,
    };
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o126 = {o24:function(o93){print(o93);}, o25:function(o93,o94){print(o93,o94);},o16:155,o18:658,o17:68.25,o23:3.14156,o115:48.1523,o119:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var o129 = o12(global,o126,buffer);

for (var o108=0; o108<all.length; ++o108) {
    for (var o116=0; o116<all.length; ++o116) {
        print("f1 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o129.o115   (all[o108],all[o116])));
        print("f2 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o129.o119   (all[o108],all[o116])));
        print("f3 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o129.o124   (all[o108],all[o116])));
    }
}

