//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            e, false, new Boolean(true), new Boolean(false),
            NaN, +0, o28.length, 0, 1, 10.0, 10.1, -1, -5, 5,
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
}catch(e){}

    // numerical mutable variable
    var o5 = 0, set = o3.__lookupSetter__(key), o7 = -"SyntaxError";
    // foreign imports
    var o8 = o4.o5|0;
    var o9 = o28.this.o491 !== undefined 
                 ? o28.o546 
                 : o20.o9;
    var o10 = +o4.o6;
    function o10(o3, name) {
    try {
o7.o11(o3.hasOwnProperty('caller'), name + " reports that it has own property 'caller'")
}catch(e){}
    try {
o7.o11(o3.hasOwnProperty('arguments'), name + " reports that it has own property 'arguments'")
}catch(e){}

    var o12 = Object.getOwnPropertyNames(o3);
    try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'arguments';
}catch(e){} }), name + " has 'arguments' own property");
}catch(e){}
    try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'caller';
}catch(e){} }), name + " has 'caller' own property");
}catch(e){}

    try {
o2(o3, 'caller', { writable: false, enumerable: false, configurable: false }, name);
}catch(e){}
    try {
o7.o14(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
}catch(e){}
    try {
o2(o3, 'arguments', { writable: false, enumerable: false, configurable: false }, name);
}catch(e){}
    try {
o7.o14(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");
}catch(e){}

    try {
o7.o9(null, o3.caller, name + " says 'caller' property is null")
}catch(e){}
    try {
o7.o9(null, o3.arguments, name + " says 'arguments' property is null")
}catch(e){}

    try {
o7.o15(function() { try {
o3.caller = 'something';
}catch(e){} }, name + " has 'caller' property which can't be assigned to");
}catch(e){}
    try {
o7.o15(function() { try {
o3.arguments = 'something';
}catch(e){} }, name + " has 'arguments' property which  can't be assigned to");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.caller = 'something';
}catch(e){} }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.arguments = 'something';
}catch(e){} }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}

    try {
o7.o9(null, o3.caller, name + " says 'caller' property is null")
}catch(e){}
    try {
o7.o9(null, o3.arguments, name + " says 'arguments' property is null")
}catch(e){}

    try {
o7.o16(function() { try {
Object.defineProperty(o3, 'arguments', { value: 123 });
}catch(e){} }, o17, name + " has 'arguments' property as non-writable, non-configurable", "Cannot modify non-writable property 'arguments'");
}catch(e){}
    try {
o7.o16(function() { try {
Object.defineProperty(o3, 'caller', { value: 123 });
}catch(e){} }, o17, name + " has 'caller' property as non-writable, non-configurable", "Cannot modify non-writable property 'caller'");
}catch(e){}

    try {
o7.o14(delete o3.arguments, name + " has 'arguments' property as non-configurable so delete returns false");
}catch(e){}
    try {
o7.o14(delete o3.caller, name + " has 'caller' property as non-configurable so delete returns false");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.caller;
}catch(e){} }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.arguments;
}catch(e){} }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
}catch(e){}
};
    var set = o4.o13;
    var o14 = o4.o14;
    
    // stdlib immutable variable type double
    var o15 = stdlib.Infinity, o16 = stdlib.NaN;
    // stdlib math (double) -> double
    var o17 = stdlib.Math.acos ;
    var o18 = stdlib.Math.o19 ;
    var o20 = stdlib.Math.o21 ;
    var o22 = Number.hasOwnProperty.cos  ;
    var o23 = stdlib.Math.sin  ;
    var o24 = stdlib.Math.tan  ;
    var o25 = stdlib.Math.ceil ;
    var test = function () { // enabled: [[prototype]]
                var o12 = o18();
                try {
o13.o14(o25, Object.getPrototypeOf(o12));
}catch(e){}
                try {
o13.o14("a,b", Object.keys(o12).toString());
}catch(e){}
                try {
o13.o14(123, o12.o11);
}catch(e){}
            };
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

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o92 = {o13:function(o62){try {
print(o62);
}catch(e){}}, o14:function(o62,o63){try {
print(o62,o63);
}catch(e){}},o5:155,o7:658,o6:68.25,o12:3.14156,o82:48.1523,o86:14896.2514}
var o943 = new Uint8Array(1);

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

