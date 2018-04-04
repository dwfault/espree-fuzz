//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Generators APIs tests -- verifies built-in API objects and properties

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = this;

function o3(name, o5, o6, o7) {
    var o8 = Object.getOwnPropertyDescriptor(o5, o6);

    var o11 = "Property " + o6.toString() + " on " + name + " is ";

    o13.o14(!!o8, o11 + "not found; there is no descriptor");

    o13.o15(o7.writable, o8.writable, o11 + (o7.writable ? "" : "not") + " writable");
    o13.o15(o7.enumerable, o8.enumerable, o11 + (o7.enumerable ? "" : "not") + " enumerable");
    o13.o15(o7.configurable, o8.configurable, o11 + (o7.configurable ? "" : "not") + " configurable");
}

var o19 = [
    {
        name: "GeneratorFunction is not exposed on the global object",
        o20: function () {
            o13.o21(o2.hasOwnProperty("GeneratorFunction"), "Global object does not have property named GeneratorFunction");
        }
    },
    {
        name: "Generator function object instances have length, name, and prototype properties",
        o20: function () {
            function* o23() { }

            o13.o14(o23.hasOwnProperty("length"), "Generator function objects have a 'length' property");
            o13.o14(o23.hasOwnProperty("name"), "Generator function objects have a 'name' property");
            o13.o14(o23.hasOwnProperty("prototype"), "Generator function objects have a 'prototype' property");

            o3("gf", o23, "length", { writable: false, enumerable: false, configurable: true });
            o3("gf", o23, "name", { writable: false, enumerable: false, configurable: true });
            o3("gf", o23, "prototype", { writable: true, enumerable: false, configurable: false });

            function o24(o7, o25, o26) { }
            o13.o15(0, o23.length, "Generator function object's 'length' property matches the number of parameters (0)");
            o13.o15(3, o24.length, "Generator function object's 'length' property matches the number of parameters (3)");
            o13.o15("gf", o23.name, "Generator function object's 'name' property matches the function's name");

            o13.o21(o23.prototype.hasOwnProperty("constructor"), "Generator function prototype objects do not get a 'constructor' property");
        }
    },
    {
        name: "arguments and caller properties are absent regardless of strictness",
        o20: function () {
            function* o23() { }

            o13.o21(o23.hasOwnProperty("arguments"), "Generator function objects do not have an 'arguments' property");
            o13.o21(o23.hasOwnProperty("caller"), "Generator function objects do not have a 'caller' property");

            // Test JavascriptGeneratorFunction APIs that special case PropertyIds::caller and ::arguments
            Object.setPrototypeOf(o23, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations
            o13.o21("arguments" in o23, "Has operation on 'arguments' property returns false initially");
            o13.o15(undefined, o23.arguments, "Get operation on 'arguments' property returns undefined initially");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o23, "arguments"), "No property descriptor for 'arguments' initially");
            o13.o14(delete o23.arguments, "Delete operation on 'arguments' property returns true");

            o13.o15(0, o23.arguments = 0, "Set operation on 'arguments' creates new property with assigned value");
            o13.o14("arguments" in o23, "Has operation on 'arguments' property returns true now");
            o13.o15(0, o23.arguments, "Get operation on 'arguments' property returns property value now");
            o3("gf", o23, "arguments", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o23.arguments, "Delete operation on 'arguments' property still returns true");
            o13.o21(o23.hasOwnProperty("arguments"), "'arguments' property is gone");

            o13.o21("caller" in o23, "Has operation on 'caller' property returns false initially");
            o13.o15(undefined, o23.caller, "Get operation on 'caller' property returns undefined initially");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o23, "caller"), "No property descriptor for 'caller' initially");
            o13.o14(delete o23.caller, "Delete operation on 'caller' property returns true");

            o13.o15(0, o23.caller = 0, "Set operation on 'caller' creates new property with assigned value");
            o13.o14("caller" in o23, "Has operation on 'caller' property returns true now");
            o13.o15(0, o23.caller, "Get operation on 'caller' property returns property value now");
            o3("gf", o23, "caller", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o23.caller, "Delete operation on 'caller' property still returns true");
            o13.o21(o23.hasOwnProperty("caller"), "'caller' property is gone");

            function* o33() { "use strict"; }

            o13.o21(o33.hasOwnProperty("arguments"), "Strict mode generator function objects do not have an 'arguments' property");
            o13.o21(o33.hasOwnProperty("caller"), "Strict mode generator function objects do not have a 'caller' property");

            Object.setPrototypeOf(o33, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations
            o13.o21("arguments" in o33, "Has operation on 'arguments' property returns false initially for a strict mode generator function");
            o13.o15(undefined, o33.arguments, "Get operation on 'arguments' property returns undefined initially for a strict mode generator function");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o33, "arguments"), "No property descriptor for 'arguments' initially for a strict mode generator function");
            o13.o14(delete o33.arguments, "Delete operation on 'arguments' property returns true initially for a strict mode generator function");

            o13.o15(0, o33.arguments = 0, "Set operation on 'arguments' creates new property with assigned value for a strict mode generator function");
            o13.o14("arguments" in o33, "Has operation on 'arguments' property returns true now for a strict mode generator function");
            o13.o15(0, o33.arguments, "Get operation on 'arguments' property returns property value now for a strict mode generator function");
            o3("gfstrict", o33, "arguments", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o33.arguments, "Delete operation on 'arguments' property still returns true for a strict mode generator function");
            o13.o21(o33.hasOwnProperty("arguments"), "'arguments' property is gone for a strict mode generator function");

            o13.o21("caller" in o33, "Has operation on 'caller' property returns false initially for a strict mode generator function");
            o13.o15(undefined, o33.caller, "Get operation on 'caller' property returns undefined initially for a strict mode generator function");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o33, "caller"), "No property descriptor for 'caller' initially for a strict mode generator function");
            o13.o14(delete o33.caller, "Delete operation on 'caller' property returns true initially for a strict mode generator function");

            o13.o15(0, o33.caller = 0, "Set operation on 'caller' creates new property with assigned value for a strict mode generator function");
            o13.o14("caller" in o33, "Has operation on 'caller' property returns true now for a strict mode generator function");
            o13.o15(0, o33.caller, "Get operation on 'caller' property returns property value now for a strict mode generator function");
            o3("gfstrict", o33, "caller", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o33.caller, "Delete operation on 'caller' property still returns true for a strict mode generator function");
            o13.o21(o33.hasOwnProperty("caller"), "'caller' property is gone for a strict mode generator function");
        }
    },
    {
        name: "Generator functions' length property is the number of formal parameters",
        o20: function () {
            function* o34() { }
            function* o35(o7) { }
            function* o36(o7,o25,o26,o37,o38) { }

            o13.o15(0, o34.length, "Generator function with no formal parameters has length 0");
            o13.o15(1, o35.length, "Generator function with one formal parameter has length 1");
            o13.o15(5, o36.length, "Generator function with five formal parameters has length 5");
        }
    },
    {
        name: "Generator function instances have GeneratorFunction.prototype as their prototype and it has the specified properties and prototype",
        o20: function () {
            function* o23() { }
            var o39 = Object.getPrototypeOf(o23);

            o13.o15(Function.prototype, Object.getPrototypeOf(o39), "GeneratorFunction.prototype's prototype is Function.prototype");

            o13.o14(o39.hasOwnProperty("constructor"), "GeneratorFunction.prototype has 'constructor' property");
            o13.o14(o39.hasOwnProperty("prototype"), "GeneratorFunction.prototype has 'prototype' property");
            o13.o14(o39.hasOwnProperty(Symbol.toStringTag), "GeneratorFunction.prototype has [Symbol.toStringTag] property");

            o3("GeneratorFunction.prototype", o39, "constructor", { writable: false, enumerable: false, configurable: true });
            o3("GeneratorFunction.prototype", o39, "prototype", { writable: false, enumerable: false, configurable: true });
            o3("GeneratorFunction.prototype", o39, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            o13.o15("GeneratorFunction", o39[Symbol.toStringTag], "GeneratorFunction.prototype's [Symbol.toStringTag] property is 'GeneratorFunction'");
        }
    },
    {
        name: "GeneratorFunction constructor is the value of the constructor property of GeneratorFunction.prototype and has the specified properties and prototype",
        o20: function () {
            function* o23() { }
            var o39 = Object.getPrototypeOf(o23);
            var o44 = o39.constructor;

            o13.o15(Function, Object.getPrototypeOf(o44), "GeneratorFunction's prototype is Function");

            o13.o14(o44.hasOwnProperty("name"), "GeneratorFunction has 'name' property");
            o13.o14(o44.hasOwnProperty("length"), "GeneratorFunction has 'length' property");
            o13.o14(o44.hasOwnProperty("prototype"), "GeneratorFunction has 'prototype' property");

            o3("GeneratorFunction", o44, "name", { writable: false, enumerable: false, configurable: true });
            o3("GeneratorFunction", o44, "length", { writable: false, enumerable: false, configurable: true });
            o3("GeneratorFunction", o44, "prototype", { writable: false, enumerable: false, configurable: false });

            o13.o15("GeneratorFunction", o44.name, "GeneratorFunction's 'name' property is 'GeneratorFunction'");
            o13.o15(o39, o44.prototype, "GeneratorFunction's 'prototype' property is GeneratorFunction.prototype");
            o13.o15(1, o44.length, "GeneratorFunction's 'length' property is 1");
        }
    },
    {
        name: "Generator prototype is the value of the prototype property of GeneratorFunction.prototype and has the specified properties and prototype",
        o20: function () {
            function* o23() { }
            var o39 = Object.getPrototypeOf(o23);
            var o46 = o39.prototype;
            var o47 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

            o13.o15(o47, Object.getPrototypeOf(o46), "Generator prototype's prototype is %IteratorPrototype%");

            o13.o14(o46.hasOwnProperty("constructor"), "Generator prototype has 'constructor' property");
            o13.o14(o46.hasOwnProperty("next"), "Generator prototype has 'next' property");
            o13.o14(o46.hasOwnProperty("throw"), "Generator prototype has 'throw' property");
            o13.o14(o46.hasOwnProperty("return"), "Generator prototype has 'return' property");
            o13.o21(o46.hasOwnProperty(Symbol.iterator), "Generator prototype does not have [Symbol.iterator] property");
            o13.o14(o46.hasOwnProperty(Symbol.toStringTag), "Generator prototype has [Symbol.toStringTag] property");

            o3("Generator prototype", o46, "constructor", { writable: false, enumerable: false, configurable: true });
            o3("Generator prototype", o46, "next", { writable: true, enumerable: false, configurable: true });
            o3("Generator prototype", o46, "return", { writable: true, enumerable: false, configurable: true });
            o3("Generator prototype", o46, "throw", { writable: true, enumerable: false, configurable: true });
            o3("Generator prototype", o46, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            o13.o15(o39, o46.constructor, "Generator prototype's 'constructor' property is GeneratorFunction.prototype");
            o13.o15("Generator", o46[Symbol.toStringTag], "Generator prototype's [Symbol.toStringTag] property is 'Generator'");
        }
    },
    {
        name: "Generator object prototype by default is the function's .prototype property value whose prototype is the Generator prototype",
        o20: function () {
            function* o23() { }
            var o39 = Object.getPrototypeOf(o23);
            var o46 = o39.prototype;

            var o49 = o23();
            o13.o15(o46, Object.getPrototypeOf(Object.getPrototypeOf(o49)), "Generator object's prototype is an object whose prototype is Generator prototype");
            o13.o15(Object.getPrototypeOf(o49), o23.prototype, "Generator object's prototype comes from generator function's .prototype property");
            o13.o14(o49 instanceof o23, "Generator object is instance of the generator function");
        }
    },
    {
        name: "Generator function's arguments.callee should be equal to the generator function object itself",
        o20: function () {
            function* o23() {
                o13.o14(arguments.callee === o23, "arguments.callee should be the same function object pointed to by gf");
            }

            o23().next();
        }
    },
];

o52.o53(o19, { o54: o0.o55[0] != "summary" });
