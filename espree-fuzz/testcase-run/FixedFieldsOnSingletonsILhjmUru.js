//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    try {
o851.o2("globalFixedFunction1: original");
}catch(e){}
}

var o13 = [
    {
        name: "Built-in global objects that do not have [@@species] property",
        o14: function () {
            try {
o11(Boolean);
}catch(e){}
            try {
o11(Date);
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
o11(Object);
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
o7.o8(Array.hasOwnProperty(Symbol.species), "Array should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Array, Array[Symbol.species], "Array should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Array", Array, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Subclasses inherit [@@species] property from their super classes",
        o14: function () {
            class o15 extends Array {}
            try {
o7.o12(o15.hasOwnProperty(Symbol.species), "Array subclass should not have [@@species] defined implicitly");
}catch(e){}
            try {
o7.o9(o15, o15[Symbol.species], "Array subclass should have [@@species] that returns 'this'");
}catch(e){}

            class o16 {}
            class o17 extends o16 {}
            try {
o7.o9(undefined, o16[Symbol.species], "MyClass[@@species] should be undefined");
}catch(e){}
            try {
o7.o9(undefined, o17[Symbol.species], "MySubClass[@@species] should be undefined");
}catch(e){}
        }
    },
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

function o4() {
    try {
o971(o2.o3);
}catch(e){}
    try {
o3(o605.o606(o604, o602));
}catch(e){}
}

try {
o1.o2("Testing the global object:");
}catch(e){}

try {
o4(this);
}catch(Module){}

try {
o4(this.o615 = 1);
}catch(e){}

try {
o3 = function (o421) {try {
"use strict";
}catch(e){}
    try {
o867[o768 | 7] &= 0xFD;
}catch(e){}
  }
}catch(e){}

try {
o3 = function () {
    try {
o1.o2("globalFixedFunction2: overwritten");
}catch(e){}
}
}catch(e){}

try {
o4(o581 & 0xF);
}catch(o42){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing object literal:");
}catch(e){}

function o80() {
    try {
try {
      try {
o39.o25[index++].o18();
}catch(e){}
    } catch (o78) {
      try {
o39.o67(o78);
}catch(e){}
      try {
return null;
}catch(e){}
    }
}catch(e){}
    try {
return o77;
}catch(e){}
  }

function o34(o21, o22) {
                var o59 = o21.o12;
                try {
if (o22 > 0)
                {
                    try {
o21.__proto__ = {};
}catch(e){} // ObjTypeSpec won't generate 2nd type check for the next "o.x" load. But implicit call bailout should bailout right here.
                }
}catch(e){}
                var o60 = o21.o12;

                try {
o19.o28(1, o59);
}catch(e){}
                try {
o19.o28(o22 > 0 ? undefined : 1, o60);
}catch(e){}
            }

try {
o10();
}catch(e){}

try {
o10();
}catch(e){}

try {
o5.add = function () {
    try {
return (this.o7 + this.o8) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o10();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing Object.defineProperty with accessors:");
}catch(e){}

var o11 = {};
try {
Object.defineProperty(o11, "x", { get: function() { try {
return "0 (original)";
}catch(e){} }, configurable: true });
}catch(e){}

function o12() {
    try {
o1.o2("x = " + o11.o7);
}catch(e){}
}

try {
o12();
}catch(e){}

try {
o12();
}catch(e){}

try {
Object.defineProperty(o11, "x", { get: function () { try {
return "1 (overwritten)";
}catch(e){} } });
}catch(e){}

try {
o12();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing the Math object:");
}catch(e){}

try {
Math.o13 = function (value) {
    try {
return value;
}catch(e){}
}
}catch(e){}

function o14() {
    try {
o1.o2("Math.sin(Math.PI) = " + Math.sin(Math.o15));
}catch(e){}
    try {
o1.o2("Math.identity(Math.PI) = " + Math.o13(Math.o15));
}catch(e){}
}

try {
o14();
}catch(e){}

try {
o14();
}catch(e){}

try {
Math.o13 = function (value) {
    try {
return -value;
}catch(e){}
}
}catch(e){}

try {
o14();
}catch(e){}

try {
Math.sin = function (value) {
    try {
return -value;
}catch(e){}
}
}catch(e){}

try {
o14();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing the Object constructor:");
}catch(e){}

try {
Object.o13 = function (value) {
    try {
return value;
}catch(e){}
}
}catch(e){}

function o16() {
    var o17 = {};
    try {
Object.seal(o17);
}catch(e){}
    try {
o1.o2("Object.identity(o) = " + Object.o13(o17));
}catch(e){}
    try {
o1.o2("Object.isSealed(o) = " + Object.isSealed(o17));
}catch(e){}
}

try {
o16();
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.o13 = function (value) {
    try {
return "I don't know you anymore...";
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.seal = function (o11) {
    try {
return false;
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.isSealed = function (o11) {
    try {
return "With the magic of JavaScript I pronounce you sealed!";
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
o1.o2();
}catch(e){}
