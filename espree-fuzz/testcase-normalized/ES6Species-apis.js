//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(name, o3, o4)
{
    var o5 = Object.getOwnPropertyDescriptor(o3, o4);

    var o6 = "Property " + o4.toString();

    o7.o8(!!o5, o6 + "not found; there is no descriptor");

    o7.o9(false, o5.enumerable, o6 + " enumerable");
    o7.o9(true, o5.configurable, o6 + " configurable");
    o7.o9("function", typeof o5.get, name + "[@@species] is an accessor property that has getter");
    o7.o9("get [Symbol.species]", o5.get.name,
        name + "[@@species] is an accessor property whose getter function has the 'name' property 'get [Symbol.species]'");
    o7.o9(undefined, o5.set, o6 + " set");
}

function o10(o3)
{
    return o3.prototype.__proto__.constructor;
}

function o11(o3)
{
    o7.o12(o3.hasOwnProperty(Symbol.species), o3 + " should not have [@@species] defined");
    o7.o9(undefined, o3[Symbol.species], o3 + " should have [@@species] that returns 'this'");
}

var o13 = [
    {
        name: "Built-in global objects that do not have [@@species] property",
        o14: function () {
            o11(Boolean);
            o11(Date);
            o11(Function);
            o11(Math);
            o11(Number);
            o11(Object);
            o11(Proxy);
            o11(Reflect);
            o11(String);
            o11(Symbol);
            o11(WeakMap);
            o11(WeakSet);
        }
    },
    {
        name: "Array should have [@@species] property",
        o14: function () {
            o7.o8(Array.hasOwnProperty(Symbol.species), "Array should have [@@species] defined");
            o7.o9(Array, Array[Symbol.species], "Array should have [@@species] that returns 'this'");
            o2("Array", Array, Symbol.species);
        }
    },
    {
        name: "Subclasses inherit [@@species] property from their super classes",
        o14: function () {
            class o15 extends Array {}
            o7.o12(o15.hasOwnProperty(Symbol.species), "Array subclass should not have [@@species] defined implicitly");
            o7.o9(o15, o15[Symbol.species], "Array subclass should have [@@species] that returns 'this'");

            class o16 {}
            class o17 extends o16 {}
            o7.o9(undefined, o16[Symbol.species], "MyClass[@@species] should be undefined");
            o7.o9(undefined, o17[Symbol.species], "MySubClass[@@species] should be undefined");
        }
    },
    {
        name: "ArrayBuffer should have [@@species] property",
        o14: function () {
            o7.o8(ArrayBuffer.hasOwnProperty(Symbol.species), "ArrayBuffer should have [@@species] defined");
            o7.o9(ArrayBuffer, ArrayBuffer[Symbol.species], "ArrayBuffer should have [@@species] that returns 'this'");
            o2("ArrayBuffer", ArrayBuffer, Symbol.species);
        }
    },
    {
        name: "Map should have [@@species] property",
        o14: function () {
            o7.o8(Map.hasOwnProperty(Symbol.species), "Map should have [@@species] defined");
            o7.o9(Map, Map[Symbol.species], "Map should have [@@species] that returns 'this'");
            o2("Map", Map, Symbol.species);
        }
    },
    {
        name: "Promise should have [@@species] property",
        o14: function () {
            o7.o8(Promise.hasOwnProperty(Symbol.species), "Promise should have [@@species] defined");
            o7.o9(Promise, Promise[Symbol.species], "Promise should have [@@species] that returns 'this'");
            o2("Promise", Promise, Symbol.species);
        }
    },
    {
        name: "RegExp should have [@@species] property",
        o14: function () {
            o7.o8(RegExp.hasOwnProperty(Symbol.species), "RegExp should have [@@species] defined");
            o7.o9(RegExp, RegExp[Symbol.species], "RegExp should have [@@species] that returns 'this'");
            o2("RegExp", RegExp, Symbol.species);
        }
    },
    {
        name: "Set should have [@@species] property",
        o14: function () {
            o7.o8(Set.hasOwnProperty(Symbol.species), "Set should have [@@species] defined");
            o7.o9(Set, Set[Symbol.species], "Set should have [@@species] that returns 'this'");
            o2("Set", Set, Symbol.species);
        }
    },
    {
        name: "Int8Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int8Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Int8Array.hasOwnProperty(Symbol.species), "Int8Array should not have [@@species] defined");
            o7.o9(Int8Array, Int8Array[Symbol.species], "Int8Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint8Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint8Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Uint8Array.hasOwnProperty(Symbol.species), "Uint8Array should not have [@@species] defined");
            o7.o9(Uint8Array, Uint8Array[Symbol.species], "Uint8Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint8ClampedArray should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint8ClampedArray);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Uint8ClampedArray.hasOwnProperty(Symbol.species), "Uint8ClampedArray should not have [@@species] defined");
            o7.o9(Uint8ClampedArray, Uint8ClampedArray[Symbol.species], "Uint8ClampedArray should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Int16Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int16Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Int16Array.hasOwnProperty(Symbol.species), "Int16Array should not have [@@species] defined");
            o7.o9(Int16Array, Int16Array[Symbol.species], "Int16Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint16Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint16Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Uint16Array.hasOwnProperty(Symbol.species), "Uint16Array should not have [@@species] defined");
            o7.o9(Uint16Array, Uint16Array[Symbol.species], "Uint16Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Int32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int32Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Int32Array.hasOwnProperty(Symbol.species), "Int32Array should not have [@@species] defined");
            o7.o9(Int32Array, Int32Array[Symbol.species], "Int32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint32Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Uint32Array.hasOwnProperty(Symbol.species), "Uint32Array should not have [@@species] defined");
            o7.o9(Uint32Array, Uint32Array[Symbol.species], "Uint32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Float32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Float32Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Float32Array.hasOwnProperty(Symbol.species), "Float32Array should not have [@@species] defined");
            o7.o9(Float32Array, Float32Array[Symbol.species], "Float32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Float64Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Float64Array);
            o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o18, Symbol.species);

            o7.o12(Float64Array.hasOwnProperty(Symbol.species), "Float64Array should not have [@@species] defined");
            o7.o9(Float64Array, Float64Array[Symbol.species], "Float64Array should have [@@species] that returns 'this'");
        }
    },
];

o19.o20(o13, { o21: o0.o22[0] != "summary" });
