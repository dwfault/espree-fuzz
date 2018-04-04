//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(name, o4, o5)
{
    var o6 = Object.getOwnPropertyDescriptor(o4, o5);

    var o9 = "Property " + o5.toString();

    o11.o12(!!o6, o9 + "not found; there is no descriptor");

    o11.o13(false, o6.enumerable, o9 + " enumerable");
    o11.o13(true, o6.configurable, o9 + " configurable");
    o11.o13("function", typeof o6.get, name + "[@@species] is an accessor property that has getter");
    o11.o13("get [Symbol.species]", o6.get.name,
        name + "[@@species] is an accessor property whose getter function has the 'name' property 'get [Symbol.species]'");
    o11.o13(undefined, o6.set, o9 + " set");
}

function o19(o4)
{
    return o4.prototype.__proto__.constructor;
}

function o23(o4)
{
    o11.o24(o4.hasOwnProperty(Symbol.species), o4 + " should not have [@@species] defined");
    o11.o13(undefined, o4[Symbol.species], o4 + " should have [@@species] that returns 'this'");
}

var o28 = [
    {
        name: "Built-in global objects that do not have [@@species] property",
        o29: function () {
            o23(Boolean);
            o23(Date);
            o23(Function);
            o23(Math);
            o23(Number);
            o23(Object);
            o23(Proxy);
            o23(Reflect);
            o23(String);
            o23(Symbol);
            o23(WeakMap);
            o23(WeakSet);
        }
    },
    {
        name: "Array should have [@@species] property",
        o29: function () {
            o11.o12(Array.hasOwnProperty(Symbol.species), "Array should have [@@species] defined");
            o11.o13(Array, Array[Symbol.species], "Array should have [@@species] that returns 'this'");
            o2("Array", Array, Symbol.species);
        }
    },
    {
        name: "Subclasses inherit [@@species] property from their super classes",
        o29: function () {
            class o41 extends Array {}
            o11.o24(o41.hasOwnProperty(Symbol.species), "Array subclass should not have [@@species] defined implicitly");
            o11.o13(o41, o41[Symbol.species], "Array subclass should have [@@species] that returns 'this'");

            class o42 {}
            class o43 extends o42 {}
            o11.o13(undefined, o42[Symbol.species], "MyClass[@@species] should be undefined");
            o11.o13(undefined, o43[Symbol.species], "MySubClass[@@species] should be undefined");
        }
    },
    {
        name: "ArrayBuffer should have [@@species] property",
        o29: function () {
            o11.o12(ArrayBuffer.hasOwnProperty(Symbol.species), "ArrayBuffer should have [@@species] defined");
            o11.o13(ArrayBuffer, ArrayBuffer[Symbol.species], "ArrayBuffer should have [@@species] that returns 'this'");
            o2("ArrayBuffer", ArrayBuffer, Symbol.species);
        }
    },
    {
        name: "Map should have [@@species] property",
        o29: function () {
            o11.o12(Map.hasOwnProperty(Symbol.species), "Map should have [@@species] defined");
            o11.o13(Map, Map[Symbol.species], "Map should have [@@species] that returns 'this'");
            o2("Map", Map, Symbol.species);
        }
    },
    {
        name: "Promise should have [@@species] property",
        o29: function () {
            o11.o12(Promise.hasOwnProperty(Symbol.species), "Promise should have [@@species] defined");
            o11.o13(Promise, Promise[Symbol.species], "Promise should have [@@species] that returns 'this'");
            o2("Promise", Promise, Symbol.species);
        }
    },
    {
        name: "RegExp should have [@@species] property",
        o29: function () {
            o11.o12(RegExp.hasOwnProperty(Symbol.species), "RegExp should have [@@species] defined");
            o11.o13(RegExp, RegExp[Symbol.species], "RegExp should have [@@species] that returns 'this'");
            o2("RegExp", RegExp, Symbol.species);
        }
    },
    {
        name: "Set should have [@@species] property",
        o29: function () {
            o11.o12(Set.hasOwnProperty(Symbol.species), "Set should have [@@species] defined");
            o11.o13(Set, Set[Symbol.species], "Set should have [@@species] that returns 'this'");
            o2("Set", Set, Symbol.species);
        }
    },
    {
        name: "Int8Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Int8Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Int8Array.hasOwnProperty(Symbol.species), "Int8Array should not have [@@species] defined");
            o11.o13(Int8Array, Int8Array[Symbol.species], "Int8Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint8Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Uint8Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Uint8Array.hasOwnProperty(Symbol.species), "Uint8Array should not have [@@species] defined");
            o11.o13(Uint8Array, Uint8Array[Symbol.species], "Uint8Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint8ClampedArray should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Uint8ClampedArray);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Uint8ClampedArray.hasOwnProperty(Symbol.species), "Uint8ClampedArray should not have [@@species] defined");
            o11.o13(Uint8ClampedArray, Uint8ClampedArray[Symbol.species], "Uint8ClampedArray should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Int16Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Int16Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Int16Array.hasOwnProperty(Symbol.species), "Int16Array should not have [@@species] defined");
            o11.o13(Int16Array, Int16Array[Symbol.species], "Int16Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint16Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Uint16Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Uint16Array.hasOwnProperty(Symbol.species), "Uint16Array should not have [@@species] defined");
            o11.o13(Uint16Array, Uint16Array[Symbol.species], "Uint16Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Int32Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Int32Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Int32Array.hasOwnProperty(Symbol.species), "Int32Array should not have [@@species] defined");
            o11.o13(Int32Array, Int32Array[Symbol.species], "Int32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint32Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Uint32Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Uint32Array.hasOwnProperty(Symbol.species), "Uint32Array should not have [@@species] defined");
            o11.o13(Uint32Array, Uint32Array[Symbol.species], "Uint32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Float32Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Float32Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Float32Array.hasOwnProperty(Symbol.species), "Float32Array should not have [@@species] defined");
            o11.o13(Float32Array, Float32Array[Symbol.species], "Float32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Float64Array should inherit [@@species] property from %TypedArray%",
        o29: function () {
            let o49 = o19(Float64Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Float64Array.hasOwnProperty(Symbol.species), "Float64Array should not have [@@species] defined");
            o11.o13(Float64Array, Float64Array[Symbol.species], "Float64Array should have [@@species] that returns 'this'");
        }
    },
];

o59.o60(o28, { o61: o0.o62[0] != "summary" });
