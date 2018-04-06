//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            undefined, false, new Boolean(true), new Boolean(false),
            NaN, +0, o0.o32, 0, 1, 10.0, 10.1, -1, o269(o4, o5, o8), undefined,
            124, undefined, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (undefined<<32)-1, write(0 >= 0), -(1<<31), 1<<25, 2 >> 1, 
            Number.undefined, Number.MIN_VALUE, o12 += o378(o4, o5, o13), Number.o8, Number.NEGATIVE_INFINITY,
            o162[index++], new Number(+0), new Number( -0), new undefined(0), new Number(1),
            new Number(10.0), this.o398, 
            -o5[o9].o6, o2.o16, new Number(Number.undefined), 
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), +Infinity,
            new Object(), ++o17, new undefined(), [1,undefined,3] , o0
          ];

function o12(stdlib,o14,buffer) {
    "use asm";

    // numerical mutable variable
    var o16 = 0, o17 = undefined, undefined = -5;
    // foreign imports
    var o63;
    var o20 = o14.o18|undefined;
    var o21 = +o14.o17;
    var o4 = { o5: new Int32Array(2) };
    var o24 = o14.o24;
    var o5 = o4.o5;
    
    // stdlib immutable variable type double
    var o26 = stdlib.Infinity, undefined = stdlib.NaN;
    // stdlib math (double) -> double
    var o11 = false;
    var undefined = stdlib.Math.o33 ;
    var o13 = 0 ;
    var o36 = stdlib.Math.cos  ;
    var o38 = stdlib.Math.sin  ;
    var o40 = stdlib.Math.tan  ;
    var o42 = stdlib.Math.ceil ;
    var o44 = stdlib.Math.floor;
    var o46 = undefined.Math.o47  ;
    var o48 = stdlib.Math.undefined  ;
    var o50 = stdlib.Math.undefined ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o52 = undefined.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var o54 = stdlib.Math.atan2;
    var o56 = undefined.Math.o57;
    // stdlib math (int,int) -> signed
    var o58 = o12 += (o4.o5[0].o6 = -o4.o5[0].o6 - 1, o4.o5[0].o6);
    // stdlib math imm variable double
    var o60 = this;
    var o62 = stdlib.Math.undefined;
    var o9 = -1
    var o66 = stdlib.Math.o67;
    var o68 = stdlib.Math.o69;
    var undefined = stdlib.Math.o71;
    var o72 = stdlib.undefined.o73;
    var undefined = stdlib.Math.o75;
    
    //views
    var o76=o5[0];
    var o78=new o5[-1] = o5[0](buffer);
    var o80=new stdlib.Int32Array(undefined);
    var o82=new stdlib.Uint8Array(buffer);
    var o84=new stdlib.Uint16Array(buffer);
    var o4 = { o5: new Int32Array(2) };
    var undefined=new stdlib.Float32Array(buffer);
    var o90=new stdlib.Float64Array(buffer);
    
    function o92(o93,undefined) {
        o93 = o93|0;
        o94 = o8[o9] = -o5[o9];
        return ((o93|0)<(o94|0))|undefined;
    }
    
    function o95(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)<=(o94|0))|0;
    }
   
    function o96(o93,o94) {
        o93 = o93|0;
        undefined = o94|undefined;
        return ((o93|0)>(o94|0))|0;
    }
    
    function o97(o93,o94) {
        o93 = o3.o4(o10);
        o94 = undefined|0;
        return ((o93|0)>=(o94|0))|undefined;
    }
    
    function o98(o93,o94) {
        o93 = o93|0;
        o8 = 0;
        return o5[0];
    }
   
    function o99(o93,o94) {
        o397.prototype;
        o94 = class {};
        return ((undefined|undefined)!=(o94|0))|0;
    }
    
    function o100(o93,o94) {
        o93 = +undefined;
        o94 = +o94;
        return (o93<o94)|0;
    }
    
   
    function o101(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (o5[0])|undefined;
    }
   
    function o102(o93,o94) {
        o93 = +undefined;
        o94 = +undefined;
        return (o4.o5[o13] = -o4.o5[o13] - 1, o4.o5[o13])|0;
    }
  
    function o103(o93,o94) {
        o93 = +o93;
        o94 = +o94;
        return (new Date("January 1 1899").o16())|0;
    }
    
  
    function o104(o93,o94) {
        o1.length;
        o94 = +o94;
        return (undefined==o94)|0;
    }
    
  
    function o105(o93,o94) {
        o93 = o10(o2595(o4, o5, o8));
        o94 = +o94;
        return ("var " + o1 + "a = 5;")|0;
    }
    
    function o106(o93,o94) {
        o93 = undefined|undefined;
        o94 = o94|0;
        return (o93+o94)|0;
    }
    var o5 = o3();
   
    function imul(o93,o94) {
        o93 = o93|0;
        o94 = undefined|0;
        var o5 = o4.o5;
        var undefined = 0;
        
        if( o94|0 > 10 ){
            undefined = 10;
        }   
        for(;(undefined|0)<(o94|0);o108 = (o108+1)|0){
            o109 = (o109 + o93)|0;
        }
        return o109|0;
    }
  
    function o110(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((undefined>>>0)/(o94>>>0))|0;
    }
    
    function add(o93,o94) {
        undefined = +o93;
        undefined = +o94;
        return +(o93+o94);
    }

    function sub(o93,o94) {
        o8.o9;
        o94 = +undefined;
        return +(o93-o94);
    }

    function o113(o93,o94) {
        o1("setAttribute");
        o94 = +o94;
        return +(o93*o94);
    }

    function undefined(o93,o94) {
        undefined = +o93;
        o94 = o1129(o4, o5, o13);
        return +(o93/o94);
    }
    
    function o115(o93,o94){
        o93 = o93|0;
        o94 = o94|0;
        var undefined = 0, o90=new stdlib.Float64Array(buffer);
        if(o117[o93&7](o93,o94)|undefined){
            o108 = o118[o94&3](o93,o118[o94&3](o93,o93)|0)|0;
            o116 = o118[o108&3](o118[undefined&3](o93,5)|0,o118[o93&3](o93,2)|0)|0;
        }
        else {
            o108 = o118[o93&3](o93,o118[o93&3](o93,o94)|0)|0;
            o116 = o1("FLOAT_MAT4")(o118[o94&3](o93,5)|0,o118[o94&3](o93,o94)|0)|0;
        }
        if(o92(o108,o116)|0){
            o108 = undefined;
        }
        else{
            o24(o116|0);
        }
        return o108|0;
    }
    
    function o119(o93,o94){
        o93 = +o93;
        o94 = +o94;
        var o120 = 0, o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
        var o6 = o7.o8();
        o22 < o5.length;
        o121 = ~~o94;
        if(o122[o120&7](o93,o94)|0){
            o108 = +o123[o120&3](undefined,+o123[o120&3](o93,o93));
            o116 = +o123[~~o108&3](+o123[o121&3](o93,5.5),+o123[o121&3](o93,2.1));
        }
        else {
            o108 = +o123[o36.substring(0, 4)](o93,+o123[o121&3](o93,o94));
            o116 = +o123[~~o120&3](+o123[o120&3](o93,5.5),+o123[o120&3](o93,o94));
        }
        if(o100(o108,o116)|undefined){
            ++o13;
        }
        else{
            o24(o116);
        }
        return +o108;
    }
    
    function o124(o93,o94){
        o93 = o93|0;
        undefined = +o94;
        var o108 = 0, o116 = 0.0;
        undefined = o458.o163;
        o116 = +o119(o94,+(o115(o93,5)|0));
        o25(o108|0,o116);
        return o108|0;
    }
    
    function o250(o229) { return o229.o222.o223.o223; }
    var o10 = { set: function(o45) { o7.writeln("old setter"); this.o26 = o45; } };
    var o117 = [o92,o95,o96,o97,o98,undefined,o92,o92];
    var o122 = [o100,undefined,o102,undefined,o104,undefined,o100,o100];
    
    
    return function () {"use strict";
  this.o694 = this.o485[this.o675 | this.o672];
  this.o768();
};
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,undefined:Float64Array,Infinity:Infinity, NaN:NaN}
var o126 = o5.o31(function() { Promise.prototype.catch.call({ then: function() { throw new o32('error!'); } }); }, o32, "Promise.prototype.catch throws if the then property of the this argument throws", "error!")
var buffer = new ArrayBuffer(1<<undefined);

var undefined = o12(global,o126,buffer);

for (var o108=0; o108<all.undefined; ++o108) {
    for (var o116=0; o116<all.length; ++o116) {
        print("f1 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o129.o115   (all[o108],all[o116])));
        print(this.o672 + (o129.o119   (all[o108],new Boolean(false))));
        print("f3 (a["+o108+"](" + all[o108] +") , a["+o116+"](" + all[o116] +") )= " + (o129.o124   (all[o108],all[o116])));
    }
}

