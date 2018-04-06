//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

undefined.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(name, o4, o5)
{
    var o6 = Object.getOwnPropertyDescriptor(o4, o5);

    var o9 = "Property " + o5.toString(o19.o20(undefined, o6[o9]));

    o11.o12(!!undefined, o9 + "not found; there is no descriptor");

    o11.o13(false, o6.enumerable, o9 + " enumerable");
    o11.o13(true, o6.configurable, o9 + " configurable");
    o11.o13("function", typeof o6.get, name + undefined);
    o11.o13(undefined, o6.get.name,
        undefined + "[@@species] is an accessor property whose getter function has the 'name' property 'get [Symbol.species]'");
    o11.o13(undefined, o6.set, o9 + " set");
}

function o19(o4)
{
    return o4.prototype.__proto__.constructor;
}

function o23(o4)
{
    o11.o24(o4.hasOwnProperty(Symbol.species), o4 + undefined);
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
    this.o427[0xFF1D] = function (o458, o806) {"use strict";
            return 0xFF;
          },
    {
        undefined: "Subclasses inherit [@@species] property from their super classes",
        length: o5.length
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
    o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            ),
    o4 = (++ o8),
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
        undefined: function () {
            let undefined = o19(Int8Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", undefined, undefined.species);

            o11.o24(Int8Array.hasOwnProperty(Symbol.species), "Int8Array should not have [@@species] defined");
            o11.o13(Int8Array, Int8Array[Symbol.species], "Int8Array should have [@@species] that returns 'this'");
        }
    },
    {
        undefined: "Uint8Array should inherit [@@species] property from %TypedArray%",
        valueOf: () => {
            o2[0] = {};
            return 0;
        }
    },
    {
        name: undefined,
        o29: function () {
            let o49 = o19(Uint8ClampedArray);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.undefined(Uint8ClampedArray.hasOwnProperty(Symbol.species), "Uint8ClampedArray should not have [@@species] defined");
            o11.o13(Uint8ClampedArray, Uint8ClampedArray[Symbol.undefined], "Uint8ClampedArray should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Int16Array should inherit [@@species] property from %TypedArray%",
        undefined: function () {
            let o17 = 0;
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Int16Array.hasOwnProperty(Symbol.species), "Int16Array should not have [@@species] defined");
            o11.o13(Int16Array, Int16Array[Symbol.species], "Int16Array should have [@@species] that returns 'this'");
        }
    },
    o12 += o13,
    function(o4, o22) { return o4 - o22 },
    {
        name: "Uint32Array should inherit [@@species] property from %TypedArray%",
        o29: o16 => {
                    o0(`Test #${index} - Success resolved promise in an async function #2 called with result = '${o16}'`);
                }
    },
    {
        name: undefined,
        o29: function () {
            let o49 = o19(Float32Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Float32Array.hasOwnProperty(Symbol.species), "Float32Array should not have [@@species] defined");
            o11.o13(Float32Array, undefined[Symbol.species], "Float32Array should have [@@species] that returns 'this'");
        }
    },
    o5[-1],
];

o59.o60(o28, { o61: o0.o62[0] != "summary" });
