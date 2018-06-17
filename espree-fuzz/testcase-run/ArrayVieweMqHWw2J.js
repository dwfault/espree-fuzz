//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o13 = [
    this.o330,
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
    {
        name: "ArrayBuffer should have [@@species] property",
        o14: function () {
            try {
o7.o8(ArrayBuffer.hasOwnProperty(Symbol.species), "ArrayBuffer should have [@@species] defined");
}catch(e){}
            try {
o7.o9(ArrayBuffer, ArrayBuffer[Symbol.species], "ArrayBuffer should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("ArrayBuffer", ArrayBuffer, Symbol.species);
}catch(e){}
        }
    },
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
            NaN, Array.prototype.lastIndexOf, -0, "HTMLFormElementPrototype", 1, 10.0, 10.1, -1, -5, 5,
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

var o64 = o242(o23)

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

