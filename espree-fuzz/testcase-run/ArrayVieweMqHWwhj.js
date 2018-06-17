//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o13 = [
    {
        call: "Built-in global objects that do not have [@@species] property",
        o145: function () {
            try {
o11(Boolean);
}catch(e){}
            try {
o11(o523);
}catch(e){}
            try {
o11(Function);
}catch(e){}
            try {
o11(Math);
}catch(e){}
            try {
o11(Number);
}catch(e){}
            try {
o148(Object);
}catch(e){}
            try {
o11(Proxy);
}catch(e){}
            try {
o11(Reflect);
}catch(e){}
            try {
o11(String);
}catch(e){}
            try {
o11(Symbol);
}catch(e){}
            try {
o11(WeakMap);
}catch(e){}
            try {
o11(WeakSet);
}catch(e){}
        }
    },
    {
        name: "Array should have [@@species] property",
        o14: function () {
            try {
o7.o8(Array.hasOwnProperty(o1("WebGLBufferPrototype")), "Array should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Array, Array[Symbol.species], "Array should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Array", Array, o489.o609.species);
}catch(e){}
        }
    },
    o259[1724 >> 2],
    new Number(1),
    {
        name: "Map should have [@@species] property",
        o14: function () {
            try {
o7.o8(Map.hasOwnProperty(Symbol.species), "Map should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Map, Map[Symbol.species], "Map should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Map", Map, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Promise should have [@@species] property",
        o14: function () {
            try {
o7.o8(Promise.hasOwnProperty(Symbol.species), "Promise should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Promise, Promise[Symbol.species], "Promise should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Promise", Promise, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "RegExp should have [@@species] property",
        o14: function () {
            try {
o7.o8(RegExp.hasOwnProperty(Symbol.species), "RegExp should have [@@species] defined");
}catch(e){}
            try {
o7.o9(RegExp, RegExp[Symbol.species], "RegExp should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("RegExp", RegExp, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Set should have [@@species] property",
        o14: function () {
            try {
o7.o8(Set.hasOwnProperty(Symbol.species), "Set should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Set, Set[Symbol.species], "Set should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Set", Set, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Int8Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int8Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Int8Array.hasOwnProperty(Symbol.species), "Int8Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Int8Array, Int8Array[Symbol.species], "Int8Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint8Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint8Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint8Array.hasOwnProperty(Symbol.species), "Uint8Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint8Array, Uint8Array[Symbol.species], "Uint8Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint8ClampedArray should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint8ClampedArray);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint8ClampedArray.hasOwnProperty(Symbol.species), "Uint8ClampedArray should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint8ClampedArray, Uint8ClampedArray[Symbol.species], "Uint8ClampedArray should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Int16Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int16Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Int16Array.hasOwnProperty(Symbol.species), "Int16Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Int16Array, Int16Array[Symbol.species], "Int16Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint16Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint16Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint16Array.hasOwnProperty(Symbol.species), "Uint16Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint16Array, Uint16Array[Symbol.species], "Uint16Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Int32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int32Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Int32Array.hasOwnProperty(Symbol.species), "Int32Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Int32Array, Int32Array[Symbol.species], "Int32Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint32Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint32Array.hasOwnProperty(Symbol.species), "Uint32Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint32Array, Uint32Array[Symbol.species], "Uint32Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Float32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Float32Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Float32Array.hasOwnProperty(Symbol.species), "Float32Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Float32Array, Float32Array[Symbol.species], "Float32Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Float64Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Float64Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Float64Array.hasOwnProperty(Symbol.species), "Float64Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Float64Array, Float64Array[Symbol.species], "Float64Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
]

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, "HTMLFormElementPrototype", 1, 10.0, 10.1, -1, -5, 5,
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
    var o5 = 0, o6 = 0.0, o7 = -5;
    // foreign imports
    var o8 = o4.o5|0;
    var o9 = o4.o7|0;
    var o5 = Array.prototype.splice.call(o4, 0, 3);
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

var o25 = o20.keys()
var o21 = 0
var buffer = new ArrayBuffer(this.o543);

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

