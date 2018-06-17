//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            "map", 248, 654, 987, -1026, +98768.2546, -88754.15478,
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

function o3(stdlib,o4,o154) {
    try {
"use asm";
}catch(e){}

    // numerical mutable variable
    let o3 = 0;
    // foreign imports
    var o8 = o4.o5|0;
    var o9 = o4.o7|0;
    var o10 = +o4.o6;
    var o11 = +o4.o12;
    var o13 = o4.o13;
    var o14 = o4.o14;
    
    // stdlib immutable variable type double
    var o15 = stdlib.Infinity, o16 = stdlib.NaN;
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
    var o53=new stdlib.Int8Array(buffer);
    var o54=new stdlib.Int16Array(buffer);
    var o55=new stdlib.Int32Array(buffer);
    var o56=new stdlib.Uint8Array(buffer);
    var o57=new stdlib.Uint16Array(buffer);
    var o58=new stdlib.Uint32Array(buffer);
    var o59=new stdlib.Float32Array(buffer);
    var o60=new stdlib.Float64Array(buffer);
    
    function o61(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)<(o63|0))|0;
}catch(e){}
    }
    
    function o64(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)<=(o63|0))|0;
}catch(e){}
    }
   
    function o65(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)>(o63|0))|0;
}catch(e){}
    }
    
    function o66(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)>=(o63|0))|0;
}catch(e){}
    }
    
    function o67(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)==(o63|0))|0;
}catch(e){}
    }
   
    function o68(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)!=(o63|0))|0;
}catch(e){}
    }
    
    function o69(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62<o63)|0;
}catch(e){}
    }
    
   
    function o70(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62<=o63)|0;
}catch(e){}
    }
   
    function o71(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62>o63)|0;
}catch(e){}
    }
  
    function o72(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62>=o63)|0;
}catch(e){}
    }
    
  
    function o73(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62==o63)|0;
}catch(e){}
    }
    
  
    function o74(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62!=o63)|0;
}catch(e){}
    }
    
    function o75(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return (o62+o63)|0;
}catch(e){}
    }
    function o76(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return (o62-o63)|0;
}catch(e){}
    }
   
    function imul(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        var o77 = 0;
        var o78 = 0;
        
        try {
if( o63|0 > 10 ){
            try {
o63 = 10;
}catch(e){}
        }
}catch(e){}   
        try {
for(;(o77|0)<(o63|0);o77 = (o77+1)|0){
            try {
o78 = (o78 + o62)|0;
}catch(e){}
        }
}catch(e){}
        try {
return o78|0;
}catch(e){}
    }
  
    function o79(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62>>>0)/(o63>>>0))|0;
}catch(e){}
    }
    
    function add(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62+o63);
}catch(e){}
    }

    function sub(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62-o63);
}catch(e){}
    }

    function o80(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62*o63);
}catch(e){}
    }

    function o81(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62/o63);
}catch(e){}
    }
    
    function o82(o62,o63){
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        var o77 = 0, o83 = 0;
        try {
if(o84[o62&7](o62,o63)|0){
            try {
o77 = o85[o63&3](o62,o85[o63&3](o62,o62)|0)|0;
}catch(e){}
            try {
o83 = o85[o77&3](o85[o63&3](o62,5)|0,o85[o62&3](o62,2)|0)|0;
}catch(e){}
        }
        else {
            try {
o77 = o85[o62&3](o62,o85[o62&3](o62,o63)|0)|0;
}catch(e){}
            try {
o83 = o85[o77&3](o85[o63&3](o62,5)|0,o85[o63&3](o62,o63)|0)|0;
}catch(e){}
        }
}catch(e){}
        try {
if(o61(o77,o83)|0){
            try {
o77 = o83;
}catch(e){}
        }
        else{
            try {
o13(o83|0);
}catch(e){}
        }
}catch(e){}
        try {
return o77|0;
}catch(e){}
    }
    
    function o86(o62,o63){
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        var o87 = 0, o88 = 0;
        var o77 = 0.0, o83 = 0.0;
        try {
o87 = ~~o62;
}catch(e){}
        try {
o88 = ~~o63;
}catch(e){}
        try {
if(o89[o87&7](o62,o63)|0){
            try {
o77 = +o90[o87&3](o62,+o90[o87&3](o62,o62));
}catch(e){}
            try {
o83 = +o90[~~o77&3](+o90[o88&3](o62,5.5),+o90[o88&3](o62,2.1));
}catch(e){}
        }
        else {
            try {
o77 = +o90[o88&3](o62,+o90[o88&3](o62,o63));
}catch(e){}
            try {
o83 = +o90[~~o87&3](+o90[o87&3](o62,5.5),+o90[o87&3](o62,o63));
}catch(e){}
        }
}catch(e){}
        try {
if(o69(o77,o83)|0){
            try {
o77 = o83;
}catch(e){}
        }
        else{
            try {
o13(o83);
}catch(e){}
        }
}catch(e){}
        try {
return +o77;
}catch(e){}
    }
    
    function o91(o62,o63){
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        var o77 = 0, o83 = 0.0;
        try {
o77 = o82(o62,~~(+o86(o63,5.5)))|0;
}catch(e){}
        try {
o83 = +o86(o63,+(o82(o62,5)|0));
}catch(e){}
        try {
o14(o77|0,o83);
}catch(e){}
        try {
return o77|0;
}catch(e){}
    }
    
    var o85 = [o75,o76,imul,o79];
    var o90 = [add,sub,o80,o81];
    var o84 = [o61,o64,o65,o66,o67,o68,o61,o61];
    var o89 = [o69,o70,o71,o72,o73,o74,o69,o69];
    
    
    try {
return { 
        o82 : o82,
        o86 : o86,
        o91 : o91,
    };
}catch(e){}
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,o367:Float32Array,o368:Float64Array,Infinity:Infinity, NaN:NaN}
var o4 = "x"
var buffer = new ArrayBuffer(1<<20);

var o93 = o3(global,o92,buffer);

try {
for (var o77=0; o77<all.length; ++o77) {
    try {
for (var o83=0; o83<all.length; ++o83) {
        try {
print("f1 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o82   (all[o77],all[o83])));
}catch(e){}
        try {
print("f2 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o86   (all[o77],all[o83])));
}catch(e){}
        try {
print("f3 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o91   (all[o77],all[o83])));
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

