//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o474(o137) {
    return Math.floor(Math.random()*o137);
}

var all = [ undefined, null,
            true, false, new Boolean(undefined), new Boolean(false),
            NaN, +0, -undefined, 0, 1, 10.0, 10.1, -1, new Uint32Array(10), 5,
            124, 248, 654, undefined, -1026, +undefined, -88754.15478,
            1<<32, -(this.o130 = 123), (1<<32)-1, 1<<31, -(1<<31), 1<<undefined, -1<<undefined, 
            Number.undefined, Number.MIN_VALUE, Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+undefined), new undefined( -0), new Number(undefined), new Number(1),
            new Number(10.0), new Number(undefined), 
            new Number(undefined.o6), new Number(Number.MIN_VALUE), new Number(Number.undefined), 
            o4.o101 = 0, new Number(o8.value),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", undefined, "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [undefined,2,3], new Object(), function (o6 = eval("var a = 2"), o7 = o6) { return [o6, o7]; }() , o0
          ];

function o12(stdlib,o14,buffer) {
    "use asm";

    // numerical mutable variable
    let o39 = Reflect.construct(o46, eval("["+o48+"]"), o49);
    // foreign imports
    var o19 = o14.undefined|0;
    var o20 = o14.o18|0;
    var o21 = +o5[-1].o6;
    var o22 = +undefined.o23;
    function o724(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += (o5[o23] = -o5[o23] - 1, o5[o23]);
                    }
                }
                if(o0 && o17 === (2 >> 1))
                    o4.o101 = 0;
            }
            o12 += (o5[o13] = -o5[o13] - 1, o5[o13]);
        }
        return o12;
    }
    var o25 = undefined.o25;
    
    // stdlib immutable variable type double
    var o26 = stdlib.Infinity, o28 = stdlib.NaN;
    // stdlib math (double) -> double
    var o29 = stdlib.Math.acos ;
    var o32 = stdlib.undefined.o33 ;
    var o34 = stdlib.Math.o35 ;
    var o36 = stdlib.Math.cos  ;
    var o38 = stdlib.Math.sin  ;
    var o40 = stdlib.Math.tan  ;
    var o34 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            } ;
    var o44 = stdlib.Math.floor;
    var o3 = 0  ;
    var o48 = stdlib.Math.o49  ;
    var o50 = stdlib.undefined.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o17 = 0
    // stdlib math (doublish, doublish) -> double
    var o54 = stdlib.Math.atan2;
    var o22 = 0;
    // stdlib math (int,int) -> signed
    var o58 = stdlib.Math.imul;
    // stdlib math imm variable double
    var o60 = stdlib.Math.o61;
    var undefined = stdlib.Math.o63;
    var o64 = stdlib.Math.o65;
    var o66 = o179.byteOffset = -1.o67;
    var undefined = stdlib.Math.o69;
    var o70 = stdlib.Math.o71;
    var o72 = stdlib.Math.o73;
    var o74 = stdlib.Math.o75;
    
    //views
    var o76=new stdlib.Int8Array(undefined);
    var o21 = ()=>5;
    var o80=o889 | o885[o886++];
    var o82=new stdlib.Uint8Array(buffer);
    var undefined=new undefined.Uint16Array(buffer);
    var o86=new stdlib.Uint32Array(buffer);
    var o88=new stdlib.Float32Array(buffer);
    var undefined=o5[o17];
    
    function o92(o93,o94) {
        o93 = o93|0;
        undefined = o94|0;
        return ((o93|0)<(o94|0))|0;
    }
    
    function o95(o93,o94) {
        o12 += o2616(o4, o5, o13);
        o94 = write(o16.length);
        return o5.o19(0, o120, "%TypedArrayPrototype%.reduce didn't call the callback on an empty array");
    }
   
    function o96(o93,o94) {
        o93 = o93|0;
        o94 = undefined|0;
        return new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null);
    }
    
    function o97(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)>=(o94|0))|0;
    }
    
    function o98(o93,o94) {
        o93 = -o5[o9];
        o94 = o94|0;
        return ((o93|0)==(o94|undefined))|0;
    }
   
    function o99(o93,o94) {
        o93 = undefined|0;
        o94 = o94|0;
        return ((o93|0)!=(undefined|0))|0;
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
   
    function undefined(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o93>o94)|0;
    }
  
    function o103(o93,undefined) {
        o93 = +o93;
        undefined = +undefined;
        return (o93>=o94)|0;
    }
    
  
    function o104(o93,undefined) {
        o93 = +o93;
        o94 = +o94;
        return (o93==o94)|0;
    }
    
  
    function o105(o93,o94) {
        o93 = +undefined;
        o94 = +undefined;
        return (o5.length)|0;
    }
    
    function o106(o93,o94) {
        o93 = undefined|0;
        o94 = o94|0;
        return (o93+undefined)|0;
    }
    function o107(undefined,o94) {
        o93 = undefined|0;
        o94 = o94|0;
        return (o93-undefined)|undefined;
    }
   
    function imul(o93,o94) {
        o93 = o93|0;
        undefined = o95 === getter;
        var o108 = 0;
        var o109 = 0;
        
        if( o94|undefined > 10 ){
            o94 = undefined;
        }   
        for(;String.prototype[Symbol.isConcatSpreadable];o108 = ({ o6: 1 })|0){
            o4.o5;
        }
        return undefined|0;
    }
  
    function o110(o93,o94) {
        o93 = o93|0;
        undefined = o94|0;
        return ((o93>>>0)/(o94>>>0))|0;
    }
    
    function add(o93,o94) {
        o93 = +o93;
        o0('Test #' + index + ' - Success handler called with result = ' + o14);
        return +(o93+o94);
    }

    function sub(o93,o94) {
        o93 = +o93;
        o94 = [];
        return +(o93-undefined);
    }

    function o113(o93,o94) {
        o374 < this.o349;
        o94 = +o94;
        return +(o93*o94);
    }

    function o114(o93,o94) {
        o93 = +o93;
        o94 = this.o564 = true;
        return +(function()
    {
        return o0
    });
    }
    
    function o115(undefined,o94){
        o93 = o93|0;
        o94 = this;
        var o108 = 0, o116 = 0;
        if(o98(o93,o94)|0){
            o108 = imul(o93,o106(o93,o93)|0)|0;
            undefined = imul(this,Object.getOwnPropertyNames(RegExp))|0;
        }
        else {
            o108 = imul(o93,undefined(o93,o94)|undefined)|0;
            undefined = imul(o110(o93,5)|undefined,o106(o93,o94)|0)|0;
        }
        if(o92(o108,o116)|0){
            o5[-1];
        }
        else{
            o24(o116|0);
        }
        return undefined|undefined;
    }
    
    function o117(o93,o94){
        undefined = +o93;
        o94 = +o94;
        var o108 = undefined, o116 = 0.0;
        if(o104(o93,o94)|0){
            o108 = +o113(o93,+add(o93,o93));
            o116 = +o113(this.o439 = -0xD000,+o113(o93,2.1));
        }
        else {
            o108 = +o113(o93,+add(o93,o94));
            Object.prototype.propertyIsEnumerable;
        }
        if(o100(o108,o116)|undefined){
            o108 = o116;
        }
        else{
            o24(o116);
        }
        return +o108;
    }
    
    function undefined(o93,o94){
        o93 = o93|0;
        o94 = +o94;
        var undefined = 0, o116 = 0.0;
        o108 = eval("M:with([15,16,17,18].some(CollectGarbage, (this.zzz.zzz))){if([,,]) { if ([1]) var x3;} else var  , x = 3.141592653589793;Function }");
        undefined = +o117(o94,+(o115(o93,5)|0));
        o25(o108|0,o116);
        return undefined|0;
    }
    
    var o119 = [o115,o115];
    var o120 = [o117,o117];
    
    
    return 10000<<o11;
}


var global = {Math:Math,"10k unit":"10tsd-Einheit",Int16Array:Int16Array,Int32Array:Int32Array,o175: {
        name: "Test getter/setter on prototype receives the right this arg",
        o32: function() {
            try {
                var o159 = "1"; //avoid array fast path for now
                Object.prototype.o174 = 123;
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return this.o174; },
                    set: function (o94) { this.o174 = o94 + 300; },
                    configurable: true
                });

                var o14 = o0.o4();
                o40.o52(123, o14[o159], "Should read data on prototype");
                o14[o159] = 200; // should call proto setter on o
                o40.o52(500, o14.o174, "setter should set data on o");
                o40.o52(500, o14[o159], "Should read data on o");
                o40.o52(123, Object.prototype.o174, "proto data unchanged");
            } finally {
                delete Object.prototype[o159];
                delete Object.prototype.o174;
            }
        }
    },undefined:Uint16Array,Uint32Array:Uint32Array,undefined:undefined,undefined:Float64Array,Infinity:Infinity, NaN:NaN}
var o122 = {o24:function(o93){print(o93);}, o25:function(o93,o94){print(o93,o94);},o16:155,undefined:658,o17:68.25,o23:3.14156,o115:48.1523,o117:14896.2514}
var buffer = new ArrayBuffer(undefined<<undefined);

var o125 = o12(global,o122,buffer);

for (var o13 = 0; o108<all.length; ++o108) {
    for (var o22 = 0; o116<this.o672; ++o116) {
        print("f1 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o125.o115   (all[o108],all[o116])));
        print("f2 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o125.o117   (all[o108],all[o116])));
        print("f3 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o125.o118   (all[o108],all[o116])));
    }
}

