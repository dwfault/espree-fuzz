//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 TypedArray extension tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Uint8ClampedArray constructor exists",
        o3: function () {
            o4.o5(typeof Uint8ClampedArray === 'function', "Uint8ClampedArray constructor exists");
        }
    },
    {
        name: "%TypedArray% intrinsic has correct properties",
        o3: function() {
            function o6(constructor, name, type, o7) {
                var o8 = Object.getOwnPropertyDescriptor(constructor, name);
                var o9 = constructor.name + "." + name;

                o4.o10(o8.writable, o9 + ".writable === false");
                o4.o10(o8.enumerable, o9 + ".enumerable === false");
                o4.o11(o7, o8.configurable, o9 + ".configurable === " +o7);
                o4.o11(type, typeof o8.value, "typeof " + o9 + " === '" + type + "'");
            }

            var o12 = Int8Array.__proto__;

            o4.o11('function', typeof o12, "typeof %TypedArray% === 'function'");

            o4.o11('TypedArray', o12.name, "%TypedArray%.name === 'TypedArray'");
            o4.o11(3, o12.length, "%TypedArray%.length === 3");

            o4.o5(o12 === Uint8Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o4.o5(o12 === Uint8ClampedArray.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o4.o5(o12 === Int16Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o4.o5(o12 === Uint16Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o4.o5(o12 === Int32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o4.o5(o12 === Uint32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o4.o5(o12 === Float32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o4.o5(o12 === Float64Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");

            o6(o12, 'length', 'number',false);
            o6(o12, 'name', 'string',true);

            o4.o10(o12.from === undefined, "%TypedArray%.from !== undefined");
            o4.o11('function', typeof o12.from, "typeof %TypedArray%.from == 'function'");
            o4.o11(1, o12.from.length, "%TypedArray%.from.length == 1");

            var o8 = Object.getOwnPropertyDescriptor(o12, 'from');

            o4.o5(o8.writable, "%TypedArray%.from.writable === true");
            o4.o10(o8.enumerable, "%TypedArray%.from.enumerable === false");
            o4.o5(o8.configurable, "%TypedArray%.from.configurable === true");

            o4.o10(o12.of === undefined, "%TypedArray%.of !== undefined");
            o4.o11('function', typeof o12.of, "typeof %TypedArray%.of == 'function'");
            o4.o11(0, o12.of.length, "%TypedArray%.of.length == 0");

            var o8 = Object.getOwnPropertyDescriptor(o12, 'of');

            o4.o5(o8.writable, "%TypedArray%.of.writable === true");
            o4.o10(o8.enumerable, "%TypedArray%.of.enumerable === false");
            o4.o5(o8.configurable, "%TypedArray%.of.configurable === true");

        }
    },
    {
        name: "%TypedArrayPrototype% intrinsic has correct properties",
        o3: function () {
            function o13(o14, name, o15, o16) {
                o16 = o16 || name;
                var o8 = Object.getOwnPropertyDescriptor(o14, name);
                o4.o10(o8.enumerable, o15 + ".enumerable === false");
                o4.o5(o8.configurable, o15 + ".configurable === true");
                o4.o11('function', typeof o8.get, "typeof " + o15 + ".get === 'function'");
                o4.o11(undefined, o8.set, o15 + ".set === undefined");
                o4.o11(0, o8.get.length, o15 + ".get.length === 0");

                var o17 = o8.get.toString();
                o4.o11(o16, o17, o15 + ".get.name = " + o16);
            }
            function o18(o14, name, o19, o15) {
                var o8 = Object.getOwnPropertyDescriptor(o14, name);
                o4.o5(o8.writable, o15 + ".writable === true");
                o4.o10(o8.enumerable, o15 + ".enumerable === false");
                o4.o5(o8.configurable, o15 + ".configurable === true");
                o4.o11('function', typeof o8.value, "typeof " + o15 + " === 'function'");
                o4.o11(o19, o8.value.length, o15 + ".length === " + o19);
            }

            var o20 = Int8Array.prototype.__proto__;

            o4.o11('object', typeof o20, "typeof %TypedArrayPrototype% === 'object'");
            o4.o11(Int8Array.__proto__, o20.constructor, "%TypedArrayPrototype%.constructor === %TypedArray%");

            o4.o5(o20 === Uint8Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o4.o5(o20 === Uint8ClampedArray.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o4.o5(o20 === Int16Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o4.o5(o20 === Uint16Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o4.o5(o20 === Int32Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o4.o5(o20 === Uint32Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o4.o5(o20 === Float32Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o4.o5(o20 === Float64Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");

            o13(o20, "buffer", "%TypedArrayPrototype%.buffer", "get buffer");
            o13(o20, "byteLength", "%TypedArrayPrototype%.byteLength", "get byteLength");
            o13(o20, "byteOffset", "%TypedArrayPrototype%.byteOffset", "get byteOffset");
            o13(o20, "length", "%TypedArrayPrototype%.length", "get length");
            o13(o20, Symbol.toStringTag, "%TypedArrayPrototype%[@@toStringTag]", "get [Symbol.toStringTag]");

            o18(o20, "set", 2, "%TypedArrayPrototype%.set");
            o18(o20, "subarray", 2, "%TypedArrayPrototype%.subarray");
            o18(o20, "copyWithin", 2, "%TypedArrayPrototype%.copyWithin");
            o18(o20, "fill", 1, "%TypedArrayPrototype%.fill");
            o18(o20, "map", 1, "%TypedArrayPrototype%.map");
            o18(o20, "forEach", 1, "%TypedArrayPrototype%.forEach");
            o18(o20, "indexOf", 1, "%TypedArrayPrototype%.indexOf");
            o18(o20, "includes", 1, "%TypedArrayPrototype%.includes");
            o18(o20, "every", 1, "%TypedArrayPrototype%.every");
            o18(o20, "filter", 1, "%TypedArrayPrototype%.filter");
            o18(o20, "find", 1, "%TypedArrayPrototype%.find");
            o18(o20, "findIndex", 1, "%TypedArrayPrototype%.findIndex");
            o18(o20, "join", 1, "%TypedArrayPrototype%.join");
            o18(o20, "lastIndexOf", 1, "%TypedArrayPrototype%.lastIndexOf");
            o18(o20, "reduce", 1, "%TypedArrayPrototype%.reduce");
            o18(o20, "reduceRight", 1, "%TypedArrayPrototype%.reduceRight");
            o18(o20, "reverse", 0, "%TypedArrayPrototype%.reverse");
            o18(o20, "slice", 2, "%TypedArrayPrototype%.slice");
            o18(o20, "some", 1, "%TypedArrayPrototype%.some");
            o18(o20, "sort", 1, "%TypedArrayPrototype%.sort");

            o18(o20, 'entries', 0, "%TypedArrayPrototype%.entries");
            o18(o20, 'keys', 0, "%TypedArrayPrototype%.keys");
            o18(o20, 'values', 0, "%TypedArrayPrototype%.values");
            o18(o20, Symbol.iterator, 0, "%TypedArrayPrototype%[@@iterator]");
            o18(o20, 'toString', 0, "%TypedArrayPrototype%.toString");
            o18(o20, 'toLocaleString', 0, "%TypedArrayPrototype%.toLocaleString");
        }
    },
    {
        name: "TypedArray constructors have correct properties",
        o3: function () {
            function o6(constructor, name, type, o7) {
                var o8 = Object.getOwnPropertyDescriptor(constructor, name);
                var o9 = constructor.name + "." + name;

                o4.o10(o8.writable, o9 + ".writable === false");
                o4.o10(o8.enumerable, o9 + ".enumerable === false");
                o4.o11(o7, o8.configurable, o9 + ".configurable === " + o7);
                o4.o11(type, typeof o8.value, "typeof " + o9 + " === '" + type + "'");
            }

            o4.o11('Int8Array', Int8Array.name, "Int8Array.name === 'Int8Array'");
            o4.o11('Uint8Array', Uint8Array.name, "Uint8Array.name === 'Uint8Array'");
            o4.o11('Uint8ClampedArray', Uint8ClampedArray.name, "Uint8ClampedArray.name === 'Uint8ClampedArray'");
            o4.o11('Int16Array', Int16Array.name, "Int16Array.name === 'Int16Array'");
            o4.o11('Uint16Array', Uint16Array.name, "Uint16Array.name === 'Uint16Array'");
            o4.o11('Int32Array', Int32Array.name, "Int32Array.name === 'Int32Array'");
            o4.o11('Uint32Array', Uint32Array.name, "Uint32Array.name === 'Uint32Array'");
            o4.o11('Float32Array', Float32Array.name, "Float32Array.name === 'Float32Array'");
            o4.o11('Float64Array', Float64Array.name, "Float64Array.name === 'Float64Array'");

            o6(Int8Array, "name", "string", true);
            o6(Uint8Array, "name", "string", true);
            o6(Uint8ClampedArray, "name", "string", true);
            o6(Int16Array, "name", "string", true);
            o6(Uint16Array, "name", "string", true);
            o6(Int32Array, "name", "string", true);
            o6(Uint32Array, "name", "string", true);
            o6(Float32Array, "name", "string", true);
            o6(Float64Array, "name", "string", true);

            o4.o11(1, Int8Array.o21, "Int8Array.BYTES_PER_ELEMENT === 1");
            o4.o11(1, Uint8Array.o21, "Uint8Array.BYTES_PER_ELEMENT === 1");
            o4.o11(1, Uint8ClampedArray.o21, "Uint8ClampedArray.BYTES_PER_ELEMENT === 1");
            o4.o11(2, Int16Array.o21, "Int16Array.BYTES_PER_ELEMENT === 2");
            o4.o11(2, Uint16Array.o21, "Uint16Array.BYTES_PER_ELEMENT === 2");
            o4.o11(4, Int32Array.o21, "Int32Array.BYTES_PER_ELEMENT === 4");
            o4.o11(4, Uint32Array.o21, "Uint32Array.BYTES_PER_ELEMENT === 4");
            o4.o11(4, Float32Array.o21, "Float32Array.BYTES_PER_ELEMENT === 4");
            o4.o11(8, Float64Array.o21, "Float64Array.BYTES_PER_ELEMENT === 8");

            o6(Int8Array, "BYTES_PER_ELEMENT", "number", false);
            o6(Uint8Array, "BYTES_PER_ELEMENT", "number", false);
            o6(Uint8ClampedArray, "BYTES_PER_ELEMENT", "number", false);
            o6(Int16Array, "BYTES_PER_ELEMENT", "number", false);
            o6(Uint16Array, "BYTES_PER_ELEMENT", "number", false);
            o6(Int32Array, "BYTES_PER_ELEMENT", "number", false);
            o6(Uint32Array, "BYTES_PER_ELEMENT", "number", false);
            o6(Float32Array, "BYTES_PER_ELEMENT", "number", false);
            o6(Float64Array, "BYTES_PER_ELEMENT", "number", false);

            o4.o11(3, Int8Array.length, "Int8Array.length === 3");
            o4.o11(3, Uint8Array.length, "Uint8Array.length === 3");
            o4.o11(3, Uint8ClampedArray.length, "Uint8ClampedArray.length === 3");
            o4.o11(3, Int16Array.length, "Int16Array.length === 3");
            o4.o11(3, Uint16Array.length, "Uint16Array.length === 3");
            o4.o11(3, Int32Array.length, "Int32Array.length === 3");
            o4.o11(3, Uint32Array.length, "Uint32Array.length === 3");
            o4.o11(3, Float32Array.length, "Float32Array.length === 3");
            o4.o11(3, Float64Array.length, "Float64Array.length === 3");

            o6(Int8Array, "length", "number",false);
            o6(Uint8Array, "length", "number",false);
            o6(Uint8ClampedArray, "length", "number", false);
            o6(Int16Array, "length", "number", false);
            o6(Uint16Array, "length", "number", false);
            o6(Int32Array, "length", "number", false);
            o6(Uint32Array, "length", "number", false);
            o6(Float32Array, "length", "number", false);
            o6(Float64Array, "length", "number", false);

            o6(Int8Array, "prototype", "object", false);
            o6(Uint8Array, "prototype", "object", false);
            o6(Uint8ClampedArray, "prototype", "object", false);
            o6(Int16Array, "prototype", "object", false);
            o6(Uint16Array, "prototype", "object", false);
            o6(Int32Array, "prototype", "object", false);
            o6(Uint32Array, "prototype", "object", false);
            o6(Float32Array, "prototype", "object", false);
            o6(Float64Array, "prototype", "object", false);

            function o22(name, o15) {
                if(o15 === undefined)
                    o15 = name;

                o4.o10(Int8Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Uint8Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Uint8ClampedArray.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Int16Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Uint16Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Int32Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Uint32Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Float32Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
                o4.o10(Float64Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o15 + "'");
            }

            o22('to');
            o22('from');
            o22(Symbol.create, "@@create");
        }
    },
    {
        name: "TypedArray prototypes have correct properties",
        o3: function () {
            function o23(constructor, name, type) {
                var o8 = Object.getOwnPropertyDescriptor(constructor.prototype, name);
                var o9 = constructor.name + ".prototype." + name;

                o4.o10(o8.writable, o9 + ".writable === false");
                o4.o10(o8.enumerable, o9 + ".enumerable === false");
                o4.o10(o8.configurable, o9 + ".configurable === false");
                o4.o11(type, typeof o8.value, "typeof " + o9 + " === '" + type + "'");
            }

            o4.o11(1, Int8Array.prototype.o21, "Int8Array.prototype.BYTES_PER_ELEMENT === 1");
            o4.o11(1, Uint8Array.prototype.o21, "Uint8Array.prototype.BYTES_PER_ELEMENT === 1");
            o4.o11(1, Uint8ClampedArray.prototype.o21, "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT === 1");
            o4.o11(2, Int16Array.prototype.o21, "Int16Array.prototype.BYTES_PER_ELEMENT === 2");
            o4.o11(2, Uint16Array.prototype.o21, "Uint16Array.prototype.BYTES_PER_ELEMENT === 2");
            o4.o11(4, Int32Array.prototype.o21, "Int32Array.prototype.BYTES_PER_ELEMENT === 4");
            o4.o11(4, Uint32Array.prototype.o21, "Uint32Array.prototype.BYTES_PER_ELEMENT === 4");
            o4.o11(4, Float32Array.prototype.o21, "Float32Array.prototype.BYTES_PER_ELEMENT === 4");
            o4.o11(8, Float64Array.prototype.o21, "Float64Array.prototype.BYTES_PER_ELEMENT === 8");

            o23(Int8Array, "BYTES_PER_ELEMENT", "number");
            o23(Uint8Array, "BYTES_PER_ELEMENT", "number");
            o23(Uint8ClampedArray, "BYTES_PER_ELEMENT", "number");
            o23(Int16Array, "BYTES_PER_ELEMENT", "number");
            o23(Uint16Array, "BYTES_PER_ELEMENT", "number");
            o23(Int32Array, "BYTES_PER_ELEMENT", "number");
            o23(Uint32Array, "BYTES_PER_ELEMENT", "number");
            o23(Float32Array, "BYTES_PER_ELEMENT", "number");
            o23(Float64Array, "BYTES_PER_ELEMENT", "number");

            o4.o11(Int8Array, Int8Array.prototype.constructor, "Int8Array.prototype.constructor === Int8Array");
            o4.o11(Uint8Array, Uint8Array.prototype.constructor, "Uint8Array.prototype.constructor === Uint8Array");
            o4.o11(Uint8ClampedArray, Uint8ClampedArray.prototype.constructor, "Uint8ClampedArray.prototype.constructor === Uint8ClampedArray");
            o4.o11(Int16Array, Int16Array.prototype.constructor, "Int16Array.prototype.constructor === Int16Array");
            o4.o11(Uint16Array, Uint16Array.prototype.constructor, "Uint16Array.prototype.constructor === Uint16Array");
            o4.o11(Int32Array, Int32Array.prototype.constructor, "Int32Array.prototype.constructor === Int32Array");
            o4.o11(Uint32Array, Uint32Array.prototype.constructor, "Uint32Array.prototype.constructor === Uint32Array");
            o4.o11(Float32Array, Float32Array.prototype.constructor, "Float32Array.prototype.constructor === Float32Array");
            o4.o11(Float64Array, Float64Array.prototype.constructor, "Float64Array.prototype.constructor === Float64Array");

            function o24(name, o25) {
                o25 = o25 || name;
                o4.o10(Int8Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Uint8Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Uint8ClampedArray.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Int16Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Uint16Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Int32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Uint32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Float32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
                o4.o10(Float64Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
            }

            o24('set');
            o24('subarray');
            o24('copyWithin');
            o24('fill');
            o24('map');
            o24('indexOf');
            o24('includes');
            o24('forEach');
            o24('every');
            o24('filter');
            o24('find');
            o24('findIndex');
            o24('join');
            o24('lastIndexOf');
            o24('reduce');
            o24('reduceRight');
            o24('reverse');
            o24('slice');
            o24('some');
            o24('sort');
            o24('buffer');
            o24('byteLength');
            o24('byteOffset');
            o24('length');
            o24(Symbol.toStringTag, '@@toStringTag');
            o24('entries');
            o24('keys');
            o24('values');
            o24(Symbol.iterator, '@@iterator');
            o24('toString');
            o24('toLocaleString');
        }
    },
    {
        name: "TypedArray instances have the correct properties",
        o3: function() {
            var o26 = new Int8Array(20);
            var o27 = new Uint8Array(20);
            var o28 = new Uint8ClampedArray(20);
            var o29 = new Uint16Array(20);
            var o30 = new Int16Array(20);
            var o31 = new Int32Array(20);
            var o32 = new Uint32Array(20);
            var o33 = new Float32Array(20);
            var o34 = new Float64Array(20);

            function o35(o36, o37) {
                o37 = o37 || o36;

                o4.o10(o26.hasOwnProperty(o36), "new Int8Array(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o27.hasOwnProperty(o36), "new Uint8Array(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o28.hasOwnProperty(o36), "new Uint8ClampedArray(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o30.hasOwnProperty(o36), "new Int16Array(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o29.hasOwnProperty(o36), "new Uint16Array(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o31.hasOwnProperty(o36), "new Int32Array(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o32.hasOwnProperty(o36), "new Uint32Array(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o33.hasOwnProperty(o36), "new Float32Array(20).hasOwnProperty('" + o37 + "') === false");
                o4.o10(o34.hasOwnProperty(o36), "new Float64Array(20).hasOwnProperty('" + o37 + "') === false");
            }

            // The accessors for buffer, byteLength, byteOffset, and length are inherited from prototype and are not instance properties
            o35('buffer');
            o35('byteLength');
            o35('byteOffset');
            o35('length');
            o35(Symbol.toStringTag, '@@toStringTag');
        }
    },
    {
        name: "Properties shared between Array.prototype and %TypedArray%.prototype",
        o3: function() {
            var o20 = Int8Array.prototype.__proto__;

            o4.o11(Array.prototype.toString, o20.toString, "Array.prototype.toString === %TypedArray%.prototype.toString");
            o4.o11(Array.prototype.toLocaleString, o20.toLocaleString, "Array.prototype.toLocaleString === %TypedArray%.prototype.toLocaleString");
        }
    },
    {
        name: "%TypedArrayPrototype%.buffer behavior",
        o3: function() {
            var o20 = Int8Array.prototype.__proto__;
            var o8 = Object.getOwnPropertyDescriptor(o20, 'buffer');

            o4.o38(function () { o20.buffer; }, o39, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get(); }, o39, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(); }, o39, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(undefined); }, o39, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call([1,2,3]); }, o39, "%TypedArrayPrototype%.buffer throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o40 = new ArrayBuffer(100);
            o4.o11(o40, new Uint8Array(o40).buffer, "new Uint8Array(buf).buffer === buf");
            o4.o11(20, new Uint8Array(20).buffer.byteLength, "new Uint8Array(20).buffer.byteLength === 20");
            o4.o11(o40, o8.get.call(new Float32Array(o40)), "TypedArray.prototype.buffer can be used to retrieve the ArrayBuffer of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%.byteLength behavior",
        o3: function() {
            var o20 = Int8Array.prototype.__proto__;
            var o8 = Object.getOwnPropertyDescriptor(o20, 'byteLength');

            o4.o38(function () { o20.byteLength; }, o39, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get(); }, o39, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(); }, o39, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(undefined); }, o39, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call([1,2,3]); }, o39, "%TypedArrayPrototype%.byteLength throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o40 = new ArrayBuffer(100);
            o4.o11(100, new Uint8Array(o40).byteLength, "new Uint8Array(buf).byteLength === 100");
            o4.o11(80, new Uint32Array(20).byteLength, "new Uint8Array(20).byteLength === 80");
            o4.o11(100, o8.get.call(new Float32Array(o40)), "TypedArray.prototype.byteLength can be used to retrieve the byte length of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%.byteOffset behavior",
        o3: function() {
            var o20 = Int8Array.prototype.__proto__;
            var o8 = Object.getOwnPropertyDescriptor(o20, 'byteOffset');

            o4.o38(function () { o20.byteOffset; }, o39, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get(); }, o39, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(); }, o39, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(undefined); }, o39, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call([1,2,3]); }, o39, "%TypedArrayPrototype%.byteOffset throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o40 = new ArrayBuffer(100);
            o4.o11(0, new Uint8Array(o40).byteOffset, "new Uint8Array(buf).byteOffset === 0");
            o4.o11(0, new Uint16Array(20).byteOffset, "new Uint16Array(20).byteOffset === 0");
            o4.o11(8, new Uint32Array(o40, 8).byteOffset, "new Uint8Array(buf).byteOffset === 8");
            o4.o11(0, o8.get.call(new Float32Array(o40)), "TypedArray.prototype.byteOffset can be used to retrieve the byte offset of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%.length behavior",
        o3: function() {
            var o20 = Int8Array.prototype.__proto__;
            var o8 = Object.getOwnPropertyDescriptor(o20, 'length');

            o4.o38(function () { o20.length; }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get(); }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(); }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call(undefined); }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o38(function () { o8.get.call([1,2,3]); }, o39, "%TypedArrayPrototype%.length throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o40 = new ArrayBuffer(100);
            o4.o11(100, new Uint8Array(o40).length, "new Uint8Array(buf).length === 100");
            o4.o11(20, new Uint32Array(20).length, "new Uint32Array(20).length === 20");
            o4.o11(50, o8.get.call(new Uint16Array(o40)), "TypedArray.prototype.length can be used to retrieve the length of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%[@@toStringTag] behavior",
        o3: function() {
            var o20 = Int8Array.prototype.__proto__;
            var o8 = Object.getOwnPropertyDescriptor(o20, Symbol.toStringTag);

            o4.o38(function () { o20.length; }, o39, "%TypedArrayPrototype%[length] throws TypeError if called with no parameter", "'this' is not a typed array object");
            o4.o11(undefined, o8.get.call(), "%TypedArrayPrototype%[@@toStringTag] returns undefined if called with no parameter");

            o4.o11('Int8Array',         new Int8Array(10)[Symbol.toStringTag],         "new Int8Array()[@@toStringTag] === 'Int8Array'");
            o4.o11('Uint8Array',        new Uint8Array(10)[Symbol.toStringTag],        "new Uint8Array()[@@toStringTag] === 'Uint8Array'");
            o4.o11('Uint8ClampedArray', new Uint8ClampedArray(10)[Symbol.toStringTag], "new Uint8ClampedArray()[@@toStringTag] === 'Uint8ClampedArray'");
            o4.o11('Int16Array',        new Int16Array(10)[Symbol.toStringTag],        "new Int16Array()[@@toStringTag] === 'Int16Array'");
            o4.o11('Uint16Array',       new Uint16Array(10)[Symbol.toStringTag],       "new Uint16Array()[@@toStringTag] === 'Uint16Array'");
            o4.o11('Int32Array',        new Int32Array(10)[Symbol.toStringTag],        "new Int32Array()[@@toStringTag] === 'Int32Array'");
            o4.o11('Uint32Array',       new Uint32Array(10)[Symbol.toStringTag],       "new Uint32Array()[@@toStringTag] === 'Uint32Array'");
            o4.o11('Float32Array',      new Float32Array(10)[Symbol.toStringTag],      "new Float32Array()[@@toStringTag] === 'Float32Array'");
            o4.o11('Float64Array',      new Float64Array(10)[Symbol.toStringTag],      "new Float64Array()[@@toStringTag] === 'Float64Array'");
        }
    },
    {
        name: "%TypedArray%.from basic behavior",
        o3: function() {
            o4.o11([0,1,2,3], Uint8Array.from([0,1,2,3]), "%TypedArray%.from basic behavior with an iterable object");
            o4.o11([0,1,2,3], Uint8Array.from({ 0: 0, 1: 1, 2: 2, 3: 3, length: 4 }), "%TypedArray%.from basic behavior with an object with length but no iterator");
        }
    },
    {
        name: "%TypedArray%.from extended behavior",
        o3: function() {
            var o41 = Uint8Array.__proto__.from;

            var o42 = o41.call(Float64Array, [1,2,3,4,5,6]);
            o4.o11('object', typeof o42, "%TypedArray%.from.call(Float64Array, 'string') returns a Float64Array");
            o4.o11([1,2,3,4,5,6], o42, "%TypedArray%.from.call(Float64Array, 'string') == [1,2,3,4,5,6]");
            o4.o11(6, o42.length, "%TypedArray%.from.call(Float64Array, 'string').length === 6");
            o4.o5(ArrayBuffer.isView(o42) && o42 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, 'string') is a Float64Array");

            var o43 = { 0: 0, 1: 1, 2: 2, length: 5 };
            var o42 = o41.call(Uint8Array, o43);
            o4.o11(5, o42.length, "Uint8Array.from(objectWithLengthProperty) returns a new Uint8Array with length = a.length");
            o4.o5(ArrayBuffer.isView(o42), "Uint8Array.from(objectWithLengthProperty) returns a TypedArray (ArrayBuffer.isView)");
            o4.o11(5, o42.byteLength, "Uint8Array.from(objectWithLengthProperty) returns a TypedArray (with correct byteLength)");
            o4.o11([0,1,2,0,0], o42, "Uint8Array.from(objectWithLengthProperty) has missing values set to 0");

            var o43 = { 0: 0, 1: 1, 2: 2, length: 5 };
            var o42 = o41.call(Float64Array, o43);
            o4.o11('object', typeof o42, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) returns an object");
            o4.o11(5, o42.length, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) returns a new typed array with length = a.length");
            o4.o5(ArrayBuffer.isView(o42) && o42 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) is a TypedArray (ArrayBuffer.isView)");
            o4.o11([0,1,2,NaN,NaN], o42, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) has missing values set to undefined");

            var o43 = { 0: 0, 1: 1 };
            var o42 = o41.call(Float64Array, o43);
            o4.o11('object', typeof o42, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) returns an object");
            o4.o11(0, o42.length, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) returns a new Float64Array with length = 0");
            o4.o5(ArrayBuffer.isView(o42) && o42 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) is a TypedArray (ArrayBuffer.isView)");
            o4.o11([], o42, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) is an empty array");

            o4.o38(function () { o41.call(); }, o39, "Calling %TypedArray%.from with no this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o4.o38(function () { o41.call(undefined); }, o39, "Calling %TypedArray%.from with undefined this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o4.o38(function () { o41.call('string'); }, o39, "Calling %TypedArray%.from with non-function this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o4.o38(function () { o41.call(Math.sin, []); }, o39, "Calling %TypedArray%.from with non-constructor this function throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o4.o38(function () { Uint8Array.from(); }, o39, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o4.o38(function () { Uint8Array.from(undefined); }, o39, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o4.o38(function () { Uint8Array.from(null); }, o39, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o4.o38(function () { Uint8Array.from({}, undefined); }, o39, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o4.o38(function () { Uint8Array.from({}, null); }, o39, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o4.o38(function () { Uint8Array.from({}, 'string'); }, o39, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o4.o38(function () { Uint8Array.from({}, {}); }, o39, "Calling %TypedArray%.from with non-function mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o4.o38(function () { o41.call(String, [0,1,2,3]); }, o39, "Calling %TypedArray%.from with no this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.from calls down into correct TypedArray SetItem API",
        o3: function() {
            var o44 = Uint8ClampedArray.from([0,-1,2,300]);
            o4.o11(4, o44.length, "Uint8ClampedArray.from([0,-1,2,300]) returns a new Uint8ClampedArray with length = 4");
            o4.o5(ArrayBuffer.isView(o44), "Uint8ClampedArray.from([0,-1,2,300]) returns a TypedArray (ArrayBuffer.isView)");
            o4.o11(4, o44.byteLength, "Uint8ClampedArray.from([0,-1,2,300]) returns a TypedArray (with correct byteLength)");
            o4.o11([0,0,2,255], o44, "Uint8ClampedArray.from([0,-1,2,300]) has the correct values");
        }
    },
    {
        name: "%TypedArray%.from behavior with iterable source item",
        o3: function() {
            var o41 = Uint8Array.__proto__.from;
            var o45 = {
                [Symbol.iterator]: function() {
                    return {
                        o46: 0,
                        next: function () {
                            return {
                                done: this.o46 == 5,
                                value: this.o46++
                            };
                        }
                    };
                }
            };

            var o42 = o41.call(Uint8Array, o45);
            o4.o11(5, o42.length, "%TypedArray%.from.call(Uint8Array, objectWithIterator) returns a new Uint8Array with length = objectWithIterator.length");
            o4.o5(ArrayBuffer.isView(o42), "%TypedArray%.from(objectWithIterator) returns a TypedArray (ArrayBuffer.isView)");
            o4.o11(5, o42.byteLength, "%TypedArray%.from(objectWithIterator) returns a TypedArray (with correct byteLength)");
            o4.o11([0,1,2,3,4], o42, "%TypedArray%.from(objectWithIterator) has correct values");
        }
    },
    {
        name: "%TypedArray%.from behavior with iterable source item which doesn't hold references to objects it returns",
        o3: function() {
            var o41 = Uint8Array.__proto__.from;
            var o45 = {
                [Symbol.iterator]: function() {
                    return {
                        o46: 0,
                        next: function () {
                            o47();
                            return {
                                done: this.o46 == 10,
                                value: this.o46++
                            };
                        }
                    };
                }
            };

            var o42 = o41.call(Float64Array, o45);
            o4.o11(10, o42.length, "%TypedArray%.from.call(Float64Array, objectWithIterator) returns a new Float64Array with length = objectWithIterator.length");
            for (var o46 = 0; o46 < o42.length; o46++) {
                o4.o5(o42[o46] !== undefined, "Object at index " + o46 + " is not undefined");
                o4.o11('number', typeof o42[o46], "Object at index " + o46 + " is a number");
                o4.o11(o46, o42[o46], "Object at index " + o46 + " has correct value");
            }
        }
    },
    // {
        // name: "%TypedArray%.from order of operations test via proxy traps",
        // body: function() {
            // var fromFnc = Uint8Array.__proto__.from;
            // var obj = [0, 1, 2, 3, 4];
            // var currentIndex = 0;
            // var proxyHandler = {
                // get: function(target, name, receiver) {
                    // assert.isTrue(currentIndex < name, "We should be accessing the elements of obj in order.");
                    // return receiver[name];
                // }
            // };
            // var proxyObj = Proxy(obj, proxyHandler);

            // var b = fromFnc.call(Array, proxyObj);
            // assert.areEqual(10, b.length, "%TypedArray%.from(proxyObj) returns a new Array with length = obj.length");
            // for (var i = 0; i < b.length; i++) {
                // assert.isTrue(b[i] !== undefined, "Object at index " + i + " is not undefined");
                // assert.areEqual('object', typeof b[i], "Object at index " + i + " is an object");
                // assert.areEqual(i, b[i].myi, "Object at index " + i + " has correct value");
            // }
        // }
    // },
    {
        name: "%TypedArray%.from behavior with a map function",
        o3: function() {
            var o46 = 0;

            function o48(o49, o50) {
                o4.o11(o46, o50, "%TypedArray%.from called with a mapping function, we should get the elements in order. Setting item[" + o50 + "] = " + o49);
                o4.o11(o49, o50, "Value and index should be same for this test");
                o4.o11(2, arguments.length, "%TypedArray%.from called with a mapping function, only 2 arguments should be passed to the map function");

                // increment expected index
                o46++;
            }

            var o51 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with correct arguments
            Int8Array.from(o51, o48);
        }
    },
    {
        name: "%TypedArray%.from behavior with a map function passing this argument",
        o3: function() {
            var o52 = 'thisArg';

            function o48(o49, o50) {
                // this will be wrapped as an Object
                o4.o11(Object(o52), this, "thisArg passed into %TypedArray%.from should flow into mapFunction");
            }

            var o51 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with thisArg passed as this
            Int8Array.from(o51, o48, o52);
        }
    },
    {
        name: "%TypedArray%.from behavior with a map function that mutates source object",
        o3: function() {
            var o51 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                length: 5
            };

            function o48(o49, o50) {
                switch (o50) {
                case 0:
                    // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
                    o51.length = 0;
                    return o49;
                case 1:
                    // change the value of the next indexed value - the new value should end up in the return object
                    o51[2] = 200;
                    return o49;
                case 2:
                    // change the value of a previous indexed value - the old value should end up in the return object
                    o51[0] = -100;
                    return o49;
                case 3:
                    // delete the next indexed value - return object should have undefined there
                    delete o51[4];
                    return o49;
                }

                // otherwise
                return o49;
            }

            o4.o11([0,1,200,3,0], Int32Array.from(o51, o48), "Int32Array.from called with a map function that mutates the source object");
        }
    },
    {
        name: "%TypedArray%.from behavior with iterator and a map function",
        o3: function() {
            var o53 = 0;
            var o54 = false;
            var o52 = 'string';

            var o45 = {
                [Symbol.iterator]: function() {
                    return {
                        o46: 0,
                        next: function () {
                            return {
                                done: this.o46 == 5,
                                value: this.o46++
                            };
                        }
                    };
                }
            };

            function o48(o49, o50) {
                o4.o11(o53, o49, "%TypedArray%.from called with a mapping function, we should get the elements in order. Setting item[" + o53 + "] = " + o49);
                o4.o11(o49, o49, "%TypedArray%.from called with a mapping function, index should be equal to the value passed in.");
                o4.o11(2, arguments.length, "%TypedArray%.from called with a mapping function, only 2 arguments should be passed to the map function.");

                // increment expected value
                o53++;

                if (o54) {
                    // this will be wrapped as an Object
                    o4.o11(Object(o52), this, "thisArg passed into %TypedArray%.from should flow into mapFunction");
                }
            }

            // Verify mapFunction gets called with correct arguments
            Int8Array.from(o45, o48);

            o53 = 0;
            o54 = true;

            // Verify mapFunction gets called with thisArg passed as this
            Int8Array.from(o45, o48, o52);
        }
    },
    {
        name: "%TypedArray%.from behavior with iterator and a map function which mutates the iterator state",
        o3: function() {
            var o55 = 0;

            var o45 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () {
                            return {
                                done: o55 == 5,
                                value: o55++
                            };
                        }
                    };
                }
            };

            var o56 = false;
            function o48(o49, o50) {
                if (o49 == 2 && !o56)
                {
                    o56 = true;
                    o55 = 0;
                }

                return o49;
            }

            o4.o11([0,1,2,3,4], Int8Array.from(o45, o48), "Int8Array.from called with map function which alters iterator state");
        }
    },
    {
        name: "%TypedArray%.from behavior with badly formed iterator objects",
        o3: function() {
            // Test GetIterator where obj[@@iterator] is not a function
            var o57 = {
                [Symbol.iterator]: 'a string'
            };
            o4.o38(function() { Int8Array.from(o57); }, o39, "obj[@@iterator] must be a function", "Function expected");

            // Test GetIterator where obj[@@iterator] is a function which doesn't return an object
            var o58 = {
                [Symbol.iterator]: function() {
                    return undefined;
                }
            };
            o4.o38(function() { Int8Array.from(o58); }, o39, "obj[@@iterator] must return an object", "Object expected");

            // Test IteratorNext where obj[@@iterator].next is not a function
            var o59 = {
                [Symbol.iterator]: function() {
                    return {
                        next: undefined
                    };
                }
            };
            o4.o38(function() { Int8Array.from(o59); }, o39, "obj[@@iterator].next must be a function", "Function expected");

            // Test IteratorNext where obj[@@iterator].next doesn't return an object
            var o60 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function() {
                            return undefined;
                        }
                    };
                }
            };
            o4.o38(function() { Int8Array.from(o60); }, o39, "obj[@@iterator].next must return an object", "Object expected");
        }
    },
    {
        name: "%TypedArray%.of basic behavior",
        o3: function() {
            o4.o11([], Uint8Array.of(), "%TypedArray%.of basic behavior with no arguments");
            o4.o11([3], Uint8Array.of(3), "%TypedArray%.of basic behavior with a single argument");
            o4.o11([0,1,2,3], Uint8Array.of(0, 1, 2, 3), "%TypedArray%.of basic behavior with a list of arguments");
        }
    },
    {
        name: "%TypedArray%.of extended behavior",
        o3: function() {
            var o61 = Uint8Array.__proto__.of;

            var o44 = o61.call(Uint8ClampedArray, 0, -1, 2, 300, 4);
            o4.o11(5, o44.length, "Uint8ClampedArray.of(0, -1, 2, 300, 4) returns a new Uint8ClampedArray with length = 5");
            o4.o5(ArrayBuffer.isView(o44), "Uint8ClampedArray.of(0, -1, 2, 300, 4) returns a TypedArray (ArrayBuffer.isView)");
            o4.o11(5, o44.byteLength, "Uint8ClampedArray.of(0, -1, 2, 300, 4) returns a TypedArray (with correct byteLength)");
            o4.o11([0,0,2,255,4], o44, "Uint8ClampedArray.of(0, -1, 2, 300, 4) has the correct values");

            var o42 = Uint8Array.of();
            o4.o11(0, o42.length, "Uint8Array.of() returns empty Uint8Array");
            o4.o11(0, o42.byteLength, "Uint8Array.of() returns empty Uint8Array");
            o4.o5(ArrayBuffer.isView(o42), "Uint8Array.of() returns actual TypedArray");
            o4.o11(Uint8Array, o42.constructor, "Uint8Array.of() returns correct TypedArray type");

            o4.o38(function () { o61.call(); }, o39, "Calling %TypedArray%.of with no this throws TypeError", "[TypedArray].of: 'this' is not a Function object");
            o4.o38(function () { o61.call(undefined); }, o39, "Calling %TypedArray%.of with undefined this throws TypeError", "[TypedArray].of: 'this' is not a Function object");
            o4.o38(function () { o61.call('string'); }, o39, "Calling %TypedArray%.of with non-object this throws TypeError", "[TypedArray].of: 'this' is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.copyWithin behavior",
        o3: function() {
            function o62() {
                var o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46+1;
                }

                return o63;
            }

            function o64() {
                return [1,2,3,4,5,6,7,8,9,10];
            }

            function o65() {
                return {
                    0:1, 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, length: 10
                };
            }

            function o66(o67, o68) {
                o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68()), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68(), 0), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68(), 0, 0), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o4.o11([6,7,8,9,10,6,7,8,9,10], o67.call(o68(), 0, 5), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o4.o11([6,7,8,9,10,6,7,8,9,10], o67.call(o68(), 0, 5, 10), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o4.o11([6,7,8,9,10,6,7,8,9,10], o67.call(o68(), 0, 5, 11), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o4.o11([6,2,3,4,5,6,7,8,9,10], o67.call(o68(), -50, 5, 6), "%TypedArrayPrototype%.copyWithin copying a single element beginning at index 5 to the first index");
                o4.o11([6,7,3,4,5,6,7,8,9,10], o67.call(o68(), -10, 5, 7), "%TypedArrayPrototype%.copyWithin copying two elements beginning at index 5 to the first index");
                o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68(), 0, 5, 3), "%TypedArrayPrototype%.copyWithin copying elements where end > start causes no changes");
                o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68(), 0, 5, 5), "%TypedArrayPrototype%.copyWithin copying elements where end = start causes no changes");
                o4.o11([6,7,8,9,5,6,7,8,9,10], o67.call(o68(), 0, 5, 9), "%TypedArrayPrototype%.copyWithin copying elements where end = arr.length-1");
                o4.o11([6,7,8,9,5,6,7,8,9,10], o67.call(o68(), 0, 5, -1), "%TypedArrayPrototype%.copyWithin copying elements where end -1 is the same as end === arr.length-1");
                o4.o11([1,2,3,4,5,6,7,8,9,6], o67.call(o68(), -1, 5), "%TypedArrayPrototype%.copyWithin copying from the middle of the array to the last index");
                o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68(), -5, 5, -1), "%TypedArrayPrototype%.copyWithin copying the middle of the array to the last index - 1");
                o4.o11([1,6,7,8,9,6,7,8,9,10], o67.call(o68(), 1, -5, -1), "%TypedArrayPrototype%.copyWithin copying the middle of the array to the last index - 1");
                o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68(), 1, 0, -10), "%TypedArrayPrototype%.copyWithin copying anything where end is 0 or less causes us to do nothing");
                o4.o11([1,1,2,4,5,6,7,8,9,10], o67.call(o68(), 1, -100, 2), "%TypedArrayPrototype%.copyWithin copying two elements starting at 0 into start position 1");
                o4.o11([2,3,4,5,6,7,8,9,10,10], o67.call(o68(), 0, -9), "%TypedArrayPrototype%.copyWithin copying all but the last elements starting at 1 into start position 0");
            }

            o66(Uint8Array.prototype.__proto__.copyWithin, o62);
            o66(Array.prototype.copyWithin, o64);
            o66(Array.prototype.copyWithin, o62);

            var o67 = Uint8Array.prototype.__proto__.copyWithin;

            o4.o5(ArrayBuffer.isView(o67.call(o62(), 0, 0)), "%TypedArrayPrototype%.copyWithin returns a TypedArray");
            o4.o11("Int8Array", o67.call(o62(), 0, 0)[Symbol.toStringTag], "%TypedArrayPrototype%.copyWithin returns the right TypedArray type");

            o4.o5(ArrayBuffer.isView(Array.prototype.copyWithin.call(o62(), 0, 0)), "Array.prototype.copyWithin returns a TypedArray when a TypedArray is passed in");
            o4.o10(ArrayBuffer.isView(Array.prototype.copyWithin.call(o64(), 0, 0)), "Array.prototype.copyWithin returns a normal array when a TypedArray is not passed in");
            o4.o10(ArrayBuffer.isView(Array.prototype.copyWithin.call(o65(), 0, 0)), "Array.prototype.copyWithin returns a normal array when a TypedArray is not passed in");

            o4.o38(function() { o67.call(); }, o39, "Calling %TypedArrayPrototype%.copyWithin with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o67.call(undefined); }, o39, "Calling %TypedArrayPrototype%.copyWithin with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o67.call('string'); }, o39, "Calling %TypedArrayPrototype%.copyWithin with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o67.call(o64()); }, o39, "Calling %TypedArrayPrototype%.copyWithin with non-TypedArray object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o67.call(o65()); }, o39, "Calling %TypedArrayPrototype%.copyWithin with non-TypedArray object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.fill behavior",
        o3: function() {
            var fill = Uint8Array.prototype.__proto__.fill;

            function o62() {
                var o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46+1;
                }

                return o63;
            }

            function o66(o68) {
                o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, undefined), "%TypedArrayPrototype%.fill should use length as the end value when undefined is specified");
                o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, 0), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, 0, 100), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, -50), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o4.o11([1,2,3,4,5,6,7,8,9,10], fill.call(o68(), 0, 100), "%TypedArrayPrototype%.fill filling no elements because start > length");
                o4.o11([1,2,3,4,5,0,0,0,0,0], fill.call(o68(), 0, 5), "%TypedArrayPrototype%.fill filling all elements after index 5");
                o4.o11([0,0,0,0,0,6,7,8,9,10], fill.call(o68(), 0, 0, 5), "%TypedArrayPrototype%.fill filling first 5 elements");
                o4.o11([1,2,3,0,5,6,7,8,9,10], fill.call(o68(), 0, 3, 4), "%TypedArrayPrototype%.fill filling one element at index 3");
                o4.o11([1,2,3,4,5,6,7,0,0,10], fill.call(o68(), 0, -3, -1), "%TypedArrayPrototype%.fill filling two elements near the end");
                o4.o11([1,2,3,4,5,6,7,8,9,0], fill.call(o68(), 0, -1), "%TypedArrayPrototype%.fill filling the last element");
                o4.o11([1,2,3,4,5,6,7,8,9,10], fill.call(o68(), 0, 5, 4), "%TypedArrayPrototype%.fill filling the no elements because start > end");
                o4.o11([1,2,3,4,5,6,7,8,9,10], fill.call(o68(), 0, 4, 4), "%TypedArrayPrototype%.fill filling the no elements because start == end");
            }

            o66(o62);

            o4.o38(function() { fill.call(); }, o39, "Calling %TypedArrayPrototype%.fill with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { fill.call(undefined); }, o39, "Calling %TypedArrayPrototype%.fill with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { fill.call('string'); }, o39, "Calling %TypedArrayPrototype%.fill with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.map behavior",
        o3: function() {
            var o69 = Int8Array.prototype.__proto__.map;
            var o70 = 0;
            var o63;
            var o52 = 'a string';

            function o62() {
                // Reset the counter var here
                o70 = 0;
                // Save the latest array in t for use by the mapping function
                o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o71(o72, index, o73) {
                o4.o11(index, o70, "We call the mapping function on elements in the correct order");
                o4.o11(o72, index, "We pass the correct values to the mapping function");
                o4.o5(o73 === o63, "Array passed to the mapping function matches array map is called on");
                o4.o11(Object(o52), this, "This value passed to map is correct");

                // Increment counter var for the next index
                o70++;

                return -1 * o72;
            }

            function o66(o74, o68, o75) {
                o4.o11([0,-1,-2,-3,-4,-5,-6,-7,-8,-9], o74.call(o68(), o71, o52), "%TypedArrayPrototype%.map basic functionality of the mapping function");

                if (o75) {
                    o4.o5(ArrayBuffer.isView(o74.call(o68(), o71, o52)), "%TypedArrayPrototype%.map returns a TypedArray");
                    o4.o11("Int8Array", o74.call(o68(), o71, o52)[Symbol.toStringTag], "%TypedArrayPrototype%.map returns the right TypedArray type");
                } else {
                    o4.o10(ArrayBuffer.isView(o74.call(o68(), o71, o52)), "%TypedArrayPrototype%.map returns a normal array");
                }
            }

            o66(o69, o62, true);
            o66(Array.prototype.map, o62, false);

            // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
            // If we set the constructor property of some TypedArray to Array built-in constructor, we should get an array object out.
            var o44 = o62();
            o44.constructor = Array;
            o4.o38(()=>o44.map(o71, o52), o39, 'u.map', "'this' is not a typed array object");

            o44.constructor = Int16Array;
            var o76 = o44.map(o71, o52);

            o4.o11([0,-1,-2,-3,-4,-5,-6,-7,-8,-9], o76, "%TypedArrayPrototype%.map called on a TypedArray with 'constructor' property set to Array produces the correct values");
            o4.o5(ArrayBuffer.isView(o76) && o76 instanceof Int16Array, "%TypedArrayPrototype%.map called on a TypedArray with 'constructor' property set to a different TypedArray produces a typed array");

            // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
            // If we set the constructor property of some TypedArray to a non-constructor, it should throw.
            var o44 = o62();
            o44.constructor = undefined;
            o4.o77(function() { o44.map(o71, o52); }, "With [@@species], calling %TypedArrayPrototype%.map with a constructor property on this which is not IsConstructor does not throw");

            o4.o38(function() { o69.call(); }, o39, "Calling %TypedArrayPrototype%.map with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o69.call(undefined); }, o39, "Calling %TypedArrayPrototype%.map with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o69.call('string'); }, o39, "Calling %TypedArrayPrototype%.map with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o69.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.map with no callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
            o4.o38(function() { o69.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.map with undefined callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
            o4.o38(function() { o69.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.map with non-function callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
        }
    },
    {
        name: "Array.prototype.map called with a TypedArray which lies about length",
        o3: function() {
            // We have to make sure that we don't rely on the TypedArray internal length slot when passing a TypedArray object
            // to Array.prototype.map as the this argument. The object might lie about the length property.
            var o69 = Array.prototype.map;
            var o70 = 0;
            var o63;
            var o52 = 'a string';

            function o62() {
                // Reset the counter var here
                o70 = 0;
                // Save the latest array in t for use by the mapping function
                o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o71(o72, index, o73) {
                o4.o11(index, o70, "We call the mapping function on elements in the correct order");
                o4.o11(o72, index, "We pass the correct values to the mapping function");
                o4.o5(o73 === o63, "Array passed to the mapping function matches array map is called on");
                o4.o11(Object(o52), this, "This value passed to map is correct");

                // Increment counter var for the next index
                o70++;

                return -1 * o72;
            }

            // This object lies and says it has length of 5 (while the internal length slot is 10)
            var o78 = new o62();
            Object.defineProperty(o78, 'length', { value: 5 });

            // Since Array.prototype.map doesn't care about TypedArrays and always gets the length property,
            // result array should only have 5 elements.
            var o79 = o69.call(o78, o71, o52);

            o4.o11([0,-1,-2,-3,-4], o79, "Array.prototype.map called with a TypedArray object which lies about length");
            o4.o10(ArrayBuffer.isView(o79), "Array.prototype.map returns a normal array object even if the this parameter is a TypedArray");
        }
    },
    {
        name: "%TypedArray%.prototype.forEach behavior",
        o3: function() {
            var o80 = Int8Array.prototype.__proto__.forEach;
            var o70 = 0;
            var o63;
            var o52 = 'a string';
            var o81 = true;

            function o82(o49, o50, o73) {
                o4.o11(o70, o49, "Callback function is called on elements in the correct order");
                o4.o11(o50, o49, "Callback function is called on elements in the correct order");
                o4.o5(o63 === o73, "Callback function is called with the correct TypedArray object");

                if (o81) {
                    o4.o11(Object(o52), this, "Callback function has this set correctly");
                }

                o70++;
            }

            function o62() {
                // Reset the counter var here
                o70 = 0;
                // Save the latest array in t for use by the callback function
                o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            o4.o11(undefined, o80.call(o62(), o82, o52), "Calling %TypedArrayPrototype%.forEach with a simple callback function and this arg");
            o4.o11(10, o70, "We called the callback function the correct number of times");

            o81 = false;
            o4.o11(undefined, o80.call(o62(), o82), "Calling %TypedArrayPrototype%.forEach with a simple callback function");
            o4.o11(10, o70, "We called the callback function the correct number of times");

            o4.o38(function() { o80.call(); }, o39, "Calling %TypedArrayPrototype%.forEach with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o80.call(undefined); }, o39, "Calling %TypedArrayPrototype%.forEach with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o80.call('string'); }, o39, "Calling %TypedArrayPrototype%.forEach with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o80.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.forEach with no callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
            o4.o38(function() { o80.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.forEach with undefined callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
            o4.o38(function() { o80.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.forEach with non-function callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.indexOf behavior",
        o3: function() {
            var o83 = Int8Array.prototype.__proto__.indexOf;

            function o62() {
                var o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            o4.o11(-1, o83.call(o62(), undefined), "Calling %TypedArrayPrototype%.indexOf with undefined returns -1");
            o4.o11(0, o83.call(o62(), 0), "Calling %TypedArrayPrototype%.indexOf searching for the first value");
            o4.o11(9, o83.call(o62(), 9), "Calling %TypedArrayPrototype%.indexOf searching for the last value");
            o4.o11(-1, o83.call(o62(), 0, 1), "Calling %TypedArrayPrototype%.indexOf searching for the first value but skipping the first element returns -1");
            o4.o11(-1, o83.call(o62(), 0, 11), "Calling %TypedArrayPrototype%.indexOf where fromIndex > length returns -1");
            o4.o11(0, o83.call(o62(), 0, -10), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");
            o4.o11(5, o83.call(o62(), 5, -5), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");

            // If we use Array.prototype.indexOf but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot
            var o44 = o62();
            Object.defineProperty(o44, 'length', { value: 0 });
            o4.o11(-1, Array.prototype.indexOf.call(o44, 0), "Calling Array.prototype.indexOf where length is zero returns -1");
            var o44 = o62();
            Object.defineProperty(o44, 'length', { value: 5 });
            o4.o11(-1, Array.prototype.indexOf.call(o44, 6), "Calling Array.prototype.indexOf with a TypedArray that lies about length - make sure we don't actually find the element");

            o4.o38(function() { o83.call(); }, o39, "Calling %TypedArrayPrototype%.indexOf with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o83.call(undefined); }, o39, "Calling %TypedArrayPrototype%.indexOf with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o83.call('string'); }, o39, "Calling %TypedArrayPrototype%.indexOf with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.includes behavior",
        o3: function() {
            var o84 = Int8Array.prototype.__proto__.includes;

            function o62() {
                var o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            o4.o10(o84.call(o62(), undefined), "Calling %TypedArrayPrototype%.includes with undefined returns true");
            o4.o5(o84.call(o62(), 0), "Calling %TypedArrayPrototype%.includes searching for the first value");
            o4.o5(o84.call(o62(), 9), "Calling %TypedArrayPrototype%.includes searching for the last value");
            o4.o10(o84.call(o62(), 0, 1), "Calling %TypedArrayPrototype%.includes searching for the first value but skipping the first element returns false");
            o4.o10(o84.call(o62(), 0, 11), "Calling %TypedArrayPrototype%.includes where fromIndex > length returns false");
            o4.o5(o84.call(o62(), 0, -10), "Calling %TypedArrayPrototype%.includes where fromIndex < 0 acts as indexed from the back");
            o4.o5(o84.call(o62(), 5, -5), "Calling %TypedArrayPrototype%.includes where fromIndex < 0 acts as indexed from the back");

            // If we use Array.prototype.includes but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot
            var o44 = o62();
            Object.defineProperty(o44, 'length', { value: 0 });
            o4.o10(Array.prototype.includes.call(o44, 0), "Calling Array.prototype.includes where length is zero returns false");
            var o44 = o62();
            Object.defineProperty(o44, 'length', { value: 5 });
            o4.o10(Array.prototype.includes.call(o44, 6), "Calling Array.prototype.includes with a TypedArray that lies about length - make sure we don't actually find the element");

            o4.o38(function() { o84.call(); }, o39, "Calling %TypedArrayPrototype%.includes with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o84.call(undefined); }, o39, "Calling %TypedArrayPrototype%.includes with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o84.call('string'); }, o39, "Calling %TypedArrayPrototype%.includes with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.lastIndexOf behavior",
        o3: function() {
            var lastIndexOf = Int8Array.prototype.__proto__.lastIndexOf;

            function o62() {
                var o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            o4.o11(-1, lastIndexOf.call(o62(), undefined), "Calling %TypedArrayPrototype%.lastIndexOf with undefined returns -1");
            o4.o11(0, lastIndexOf.call(o62(), 0), "Calling %TypedArrayPrototype%.lastIndexOf searching for the first value");
            o4.o11(9, lastIndexOf.call(o62(), 9), "Calling %TypedArrayPrototype%.lastIndexOf searching for the last value");
            o4.o11(-1, lastIndexOf.call(o62(), 9, -2), "Calling %TypedArrayPrototype%.lastIndexOf searching for the last value but skipping the last element returns -1");
            o4.o11(-1, lastIndexOf.call(o62(), 4, 2), "Calling %TypedArrayPrototype%.lastIndexOf where fromIndex < the searched element returns -1");
            o4.o11(0, lastIndexOf.call(o62(), 0, -10), "Calling %TypedArrayPrototype%.lastIndexOf where fromIndex < 0 acts as indexed from the back");
            o4.o11(5, lastIndexOf.call(o62(), 5, -5), "Calling %TypedArrayPrototype%.lastIndexOf where fromIndex < 0 acts as indexed from the back");

            var o44 = o62();
            o44[3] = 2;
            o44[4] = 2;
            o44[5] = 2;
            o4.o11(5, lastIndexOf.call(o44, 2), "%TypedArrayPrototype%.lastIndexOf with array that repeats values returns the last index of the value");

            Object.defineProperty(o44, 'length', { value: 4 });
            o4.o11(3, Array.prototype.lastIndexOf.call(o44, 2), "Calling Array.prototype.lastIndexOf where TypedArray contains more instances of search element beyond length");

            var o44 = o62();
            Object.defineProperty(o44, 'length', { value: 0 });
            o4.o11(-1, Array.prototype.lastIndexOf.call(o44, 0), "Calling Array.prototype.lastIndexOf where length is zero returns -1");

            o4.o38(function() { lastIndexOf.call(); }, o39, "Calling %TypedArrayPrototype%.lastIndexOf with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { lastIndexOf.call(undefined); }, o39, "Calling %TypedArrayPrototype%.lastIndexOf with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { lastIndexOf.call('string'); }, o39, "Calling %TypedArrayPrototype%.lastIndexOf with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.reverse behavior",
        o3: function() {
            var reverse = Int8Array.prototype.__proto__.reverse;

            function o62() {
                var o63 = new Int8Array(10);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            o4.o11([9,8,7,6,5,4,3,2,1,0], reverse.call(o62()), "Calling %TypedArrayPrototype%.reverse with basic behavior");

            var o44 = o62();
            o4.o11(o44, reverse.call(o44), "Calling %TypedArrayPrototype%.reverse returns the correct object");
            o4.o5(o44 === reverse.call(o44), "Calling %TypedArrayPrototype%.reverse returns the correct object");

            var o44 = new Uint8Array(3);
            o44[0] = 1;
            o44[1] = 2;
            o44[2] = 3;
            o4.o11([3,2,1], reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with an odd-length TypedArray");

            var o44 = new Uint8Array(1);
            o44[0] = 1;
            o4.o11([1], reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with TypedArray of length == 1");

            var o44 = new Uint8Array(0);
            o4.o11([], reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with TypedArray of length == 0");

            // Call Array.prototype.reverse passing a TypedArray that lies about length. We should only reverse the part of it less than the indicated length.
            o44 = o62();
            Object.defineProperty(o44, 'length', { value: 5 });
            o4.o11([4,3,2,1,0,5,6,7,8,9], Array.prototype.reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with a TypedArray that lies about length");

            // Call Array.prototype.reverse passing a TypedArray that lies about length. TypedArrays do not support delete so we will throw if indicated length is longer than actual.
            o44 = o62();
            Object.defineProperty(o44, 'length', { value: 20 });
            o4.o38(function() { Array.prototype.reverse.call(o44); }, o39, "Calling %TypedArrayPrototype%.reverse with a TypedArray that says it has longer length than actual throws", "Object doesn't support this action");

            o4.o38(function() { reverse.call(); }, o39, "Calling %TypedArrayPrototype%.reverse with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reverse.call(undefined); }, o39, "Calling %TypedArrayPrototype%.reverse with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reverse.call('string'); }, o39, "Calling %TypedArrayPrototype%.reverse with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.slice behavior",
        o3: function() {
            var slice = Int8Array.prototype.__proto__.slice;

            function o62(o85) {
                var o63 = new Int8Array(o85);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            var o44 = o62(10);

            o4.o11([0,1,2,3,4,5,6,7,8,9], slice.call(o44), "%TypedArrayPrototype%.slice basic functionality");
            o4.o11([0,1,2,3,4,5,6,7,8,9], slice.call(o44, 0), "%TypedArrayPrototype%.slice basic functionality");
            o4.o11([0,1,2,3,4,5,6,7,8,9], slice.call(o44, undefined), "%TypedArrayPrototype%.slice basic functionality");
            o4.o11([5,6,7,8,9], slice.call(o44, 5), "%TypedArrayPrototype%.slice skipping the first 5 elements");
            o4.o11([8,9], slice.call(o44, -2), "%TypedArrayPrototype%.slice using a negative start index takes only the last elements");
            o4.o11([0,1,2,3,4,5,6,7,8,9], slice.call(o44, -100), "%TypedArrayPrototype%.slice has the start index clamped to zero");
            o4.o11([], slice.call(o44, 100), "%TypedArrayPrototype%.slice with start index > length returns empty array");

            o4.o11([0,1,2,3,4,5,6,7,8,9], slice.call(o44, 0, 50), "%TypedArrayPrototype%.slice has the end index clamped to length");
            o4.o11([0,1], slice.call(o44, 0, 2), "%TypedArrayPrototype%.slice selecting the first two items");
            o4.o11([8,9], slice.call(o44, 8, 10), "%TypedArrayPrototype%.slice selecting the last two items");
            o4.o11([6,7,8], slice.call(o44, 6, -1), "%TypedArrayPrototype%.slice selecting from index 6 until one before the last");
            o4.o11([6,7,8], slice.call(o44, -4, -1), "%TypedArrayPrototype%.slice selecting from index 6 until one before the last");
            o4.o11([5], slice.call(o44, 5, 6), "%TypedArrayPrototype%.slice selecting a single item from index 5");

            o4.o11([], slice.call(o44, 5, 2), "%TypedArrayPrototype%.slice returns empty array if end < start index");
            o4.o11([], slice.call(o44, 100, 2), "%TypedArrayPrototype%.slice returns empty array if end < start index");
            o4.o11([], slice.call(o44, 100, -100), "%TypedArrayPrototype%.slice returns empty array if end < start index");

            var o76 = o44.slice();
            o4.o5(o44 !== o76, "%TypedArrayPrototype%.slice returns a new object instead of altering the source object");
            o4.o5(ArrayBuffer.isView(o76), "%TypedArrayPrototype%.slice returns a TypedArray object");
            o4.o11(o44[Symbol.toStringTag], o76[Symbol.toStringTag], "%TypedArrayPrototype%.slice returns the same type of TypedArray as the source object");

            o44.constructor = Float32Array;
            var o76 = o44.slice();
            o4.o5(ArrayBuffer.isView(o76), "%TypedArrayPrototype%.slice returns a TypedArray object");
            o4.o11("Float32Array", o76[Symbol.toStringTag], "%TypedArrayPrototype%.slice returns the same type of TypedArray as the source object's constructor property");

            o44.constructor = String;
            var o76 = o44.slice();
            o4.o5(ArrayBuffer.isView(o76), "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is not a TypedArray constructor");
            o4.o11(0, o76[0], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o4.o11(1, o76[1], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o4.o11(2, o76[2], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o4.o11(3, o76[3], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o4.o11(8, o76[8], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o4.o11(9, o76[9], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o4.o11(10, o76.length, "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");

            o44.constructor = Array;
            o4.o38(function () { o44.slice() }, o39, "Calling %TypedArrayPrototype%.slice with a constructor property with [@@species] pointing to a non-typed-array constructor throws");

            o4.o38(function() { slice.call(); }, o39, "Calling %TypedArrayPrototype%.slice without this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { slice.call(undefined); }, o39, "Calling %TypedArrayPrototype%.slice with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { slice.call('string'); }, o39, "Calling %TypedArrayPrototype%.slice with non-object this throws TypeError", "'this' is not a typed array object");

            o44.constructor = Math.sin;
            o4.o77(function() { slice.call(o44); }, "Calling %TypedArrayPrototype%.slice with constructor property pointing to a non-constructor function can still function through [@@species]");
        }
    },
    {
        name: "%TypedArray%.prototype.sort behavior",
        o3: function() {
            var sort = Int8Array.prototype.__proto__.sort;

            function o62(o85) {
                var o63 = new Int8Array(o85);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o85-o46;
                }

                return o63;
            }

            o4.o11([1,2,3,4,5,6,7,8,9,10], o62(10).sort(), "%TypedArrayPrototype%.sort basic behavior");
            o4.o11([], o62(0).sort(), "%TypedArrayPrototype%.sort returns empty array when this arg is empty");
            o4.o11([1], o62(1).sort(), "%TypedArrayPrototype%.sort returns the same array for a single-length array");
            o4.o11([1,2], o62(2).sort(), "%TypedArrayPrototype%.sort returns the correct value for an array with length == 2");

            var o44 = new Uint8Array(6);
            o44[0] = 200;
            o44[1] = 150;
            o44[2] = o44[3] = o44[4] = 100;
            o44[5] = 0;
            o4.o11([0,100,100,100,150,200], o44.sort(), "%TypedArrayPrototype%.sort sorts multiple elements with the same value");

            var o86 = new Float64Array(5);
            o86[0] = 100.0;
            o86[1] = 99.999999999999;
            o86[2] = 99.9999;
            o86[3] = 99.99999;
            o86[4] = 99.9999;
            o4.o11([99.9999,99.9999,99.99999,99.999999999999,100], o86.sort(), "%TypedArrayPrototype%.sort basic behavior with 64-bit floats");

            function o87(o88, o89) {
                if (o88 < o89) {
                    return 1;
                } else if (o88 > o89) {
                    return -1;
                }

                return 0;
            }

            function o90(o88, o89) {
                if (o88 < o89) {
                    return -1;
                } else if (o88 > o89) {
                    return 1;
                }

                return 0;
            }

            function o91(o88, o89) {
                if (o88 == 5) {
                    return -1;
                }
                if (o89 == 5) {
                    return 1;
                }
                return o90(o88, o89);
            }

            function o92(o88, o89) {
                switch(o88) {
                case 1:
                    return 0;
                case 2:
                    return -10.5;
                case 3:
                    return 'a string';
                case 4:
                    return { o93: 'another string' };
                case 5:
                    return function o93() { return 90; };
                case 6:
                    return 12.99999999999;
                }

                return undefined;
            }

            o4.o11([1,2,3,4,5,6,7,8,9,10], o62(10).sort(o90), "%TypedArrayPrototype%.sort basic behavior with a non-lying sort callback");
            o4.o11([10,9,8,7,6,5,4,3,2,1], o62(10).sort(o87), "%TypedArrayPrototype%.sort with a sort callback function which reverses elements");
            o4.o11([5,1,2,3,4,6,7,8,9,10], o62(10).sort(o91), "%TypedArrayPrototype%.sort basic behavior with a lying sort callback which hates the number 5");
            o4.o11([9,8,7,2,10,5,4,3,1,6], o62(10).sort(o92), "%TypedArrayPrototype%.sort basic behavior with a sort callback which returns random values");

            o4.o38(function() { sort.call(); }, o39, "Calling %TypedArrayPrototype%.sort with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { sort.call(undefined); }, o39, "Calling %TypedArrayPrototype%.sort with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { sort.call('string'); }, o39, "Calling %TypedArrayPrototype%.sort with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { sort.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.sort with non-function callback function throws TypeError", "[TypedArray].prototype.sort: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.find behavior",
        o3: function() {
            var o94 = Int8Array.prototype.__proto__.find;
            var o52 = 'value';
            var o63;
            var o70;

            function o62(o85) {
                // Also remember t for use in verifying in the callback
                o63 = new Int8Array(o85);

                // Reset counter
                o70 = 0;

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o95(o49, o50, o73, o96) {
                o4.o11(o70, o50, "%TypedArrayPrototype%.find callback called on elements in order");
                o4.o11(o49, o50, "%TypedArrayPrototype%.find callback called with correct values");
                o4.o11(Object(o52), o96, "%TypedArrayPrototype%.find callback function should receive the correct this arg");
                o4.o11(o63, o73, "%TypedArrayPrototype%.find callback called with the correct array arg");
            }

            var o97 = 5;
            function o98(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                if (o97 === o49) {
                    return true;
                }

                return false;
            }

            function o99(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                return false;
            }

            o4.o11(undefined, o94.call(o62(10), o99, o52), "%TypedArrayPrototype%.find returns undefined when the callback always returns false");
            o4.o11(10, o70, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o4.o11(o97, o94.call(o62(10), o98, o52), "%TypedArrayPrototype%.find returns the value of the array which causes the callback to return true");
            o4.o11(6, o70, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o97 = 0;
            o4.o11(o97, o94.call(o62(10), o98, o52), "%TypedArrayPrototype%.find returns the value of the array which causes the callback to return true");
            o4.o11(1, o70, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o97 = 9;
            o4.o11(o97, o94.call(o62(10), o98, o52), "%TypedArrayPrototype%.find returns the value of the array which causes the callback to return true");
            o4.o11(10, o70, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o4.o38(function() { o94.call(); }, o39, "Calling %TypedArrayPrototype%.find with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o94.call(undefined); }, o39, "Calling %TypedArrayPrototype%.find with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o94.call('string'); }, o39, "Calling %TypedArrayPrototype%.find with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { o94.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.find with no callback function throws TypeError", "[TypedArray].prototype.find: argument is not a Function object");
            o4.o38(function() { o94.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.find with undefined callback function throws TypeError", "[TypedArray].prototype.find: argument is not a Function object");
            o4.o38(function() { o94.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.find with non-function callback function throws TypeError", "[TypedArray].prototype.find: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.findIndex behavior",
        o3: function() {
            var findIndex = Int8Array.prototype.__proto__.findIndex;
            var o52 = 'value';
            var o63;
            var o70;

            function o62(o85) {
                // Also remember t for use in verifying in the callback
                o63 = new Int8Array(o85);

                // Reset counter
                o70 = 0;

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o95(o49, o50, o73, o96) {
                o4.o11(o70, o50, "%TypedArrayPrototype%.findIndex callback called on elements in order");
                o4.o11(o49, o50, "%TypedArrayPrototype%.findIndex callback called with correct values");
                o4.o11(Object(o52), o96, "%TypedArrayPrototype%.findIndex callback function should receive the correct this arg");
                o4.o11(o63, o73, "%TypedArrayPrototype%.findIndex callback called with the correct array arg");
            }

            var o97 = 5;
            function o98(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                if (o97 === o49) {
                    return true;
                }

                return false;
            }

            function o99(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                return false;
            }

            o4.o11(-1, findIndex.call(o62(10), o99, o52), "%TypedArrayPrototype%.findIndex returns -1 when the callback always returns false");
            o4.o11(10, o70, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o4.o11(o97, findIndex.call(o62(10), o98, o52), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o4.o11(6, o70, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o97 = 0;
            o4.o11(o97, findIndex.call(o62(10), o98, o52), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o4.o11(1, o70, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o97 = 9;
            o4.o11(o97, findIndex.call(o62(10), o98, o52), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o4.o11(10, o70, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o4.o38(function() { findIndex.call(); }, o39, "Calling %TypedArrayPrototype%.findIndex with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { findIndex.call(undefined); }, o39, "Calling %TypedArrayPrototype%.findIndex with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { findIndex.call('string'); }, o39, "Calling %TypedArrayPrototype%.findIndex with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { findIndex.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.findIndex with no callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
            o4.o38(function() { findIndex.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.findIndex with undefined callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
            o4.o38(function() { findIndex.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.findIndex with non-function callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.filter behavior",
        o3: function() {
            var filter = Int8Array.prototype.__proto__.filter;
            var o52 = 'value';
            var o63;
            var o70;

            function o62(o85) {
                // Also remember t for use in verifying in the callback
                o63 = new Int8Array(o85);

                // Reset counter
                o70 = 0;

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o95(o49, o50, o73, o96) {
                o4.o11(o70, o50, "%TypedArrayPrototype%.filter callback called on elements in order");
                o4.o11(o49, o50, "%TypedArrayPrototype%.filter callback called with correct values");
                o4.o11(Object(o52), o96, "%TypedArrayPrototype%.filter callback function should receive the correct this arg");
                o4.o11(o63, o73, "%TypedArrayPrototype%.filter callback called with the correct array arg");
            }

            function o100(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                if (o49 % 2 != 0) {
                    return true;
                }

                return false;
            }

            function o101(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                return false;
            }

            function o102(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                return true;
            }

            var o70 = 0;
            var o79 = filter.call(o62(10), o100, o52);
            o4.o11([1,3,5,7,9], o79, "%TypedArrayPrototype%.filter returns a new TypedArray with the right values");
            o4.o5(ArrayBuffer.isView(o79), "%TypedArrayPrototype%.filter returns a new TypedArray");
            o4.o11("Int8Array", o79[Symbol.toStringTag], "%TypedArrayPrototype%.filter returns the right type of new TypedArray");
            o4.o11(10, o70, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o4.o11([], filter.call(o62(10), o101, o52), "%TypedArrayPrototype%.filter returns an empty array when callback selects no elements");
            o4.o11(10, o70, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o4.o11([0,1,2,3,4,5,6,7,8,9], filter.call(o62(10), o102, o52), "%TypedArrayPrototype%.filter returns the original array when callback selects all elements");
            o4.o11(10, o70, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            var o44 = o62(10);
            o44.constructor = Int16Array;
            o70 = 0;
            var o79 = filter.call(o44, o100, o52);
            o4.o11([1,3,5,7,9], o79, "%TypedArrayPrototype%.filter returns a new array with the right values");
            o4.o5(ArrayBuffer.isView(o79) && o79 instanceof Int16Array, "%TypedArrayPrototype%.filter returns a typed array if the TypedArray constructor property is changed to a different typed array");
            o4.o11("Int16Array", o79[Symbol.toStringTag], "%TypedArrayPrototype%.filter return value doesn't have @@toStringTag value");
            o4.o11(10, o70, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o44.constructor = Math.sin;
            o70 = 0;
            o4.o77(function() { filter.call(o44, o100, o52); }, "Calling %TypedArrayPrototype%.filter with constructor property pointing to a non-constructor function can still function through [@@species]");

            o4.o38(function() { filter.call(); }, o39, "Calling %TypedArrayPrototype%.filter with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { filter.call(undefined); }, o39, "Calling %TypedArrayPrototype%.filter with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { filter.call('string'); }, o39, "Calling %TypedArrayPrototype%.filter with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { filter.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.filter with no callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
            o4.o38(function() { filter.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.filter with undefined callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
            o4.o38(function() { filter.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.filter with non-function callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.every behavior",
        o3: function() {
            var every = Int8Array.prototype.__proto__.every;
            var o52 = 'value';
            var o63;
            var o70;

            function o62(o85) {
                // Also remember t for use in verifying in the callback
                o63 = new Int8Array(o85);

                // Reset counter
                o70 = 0;

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o95(o49, o50, o73, o96) {
                o4.o11(o70, o50, "%TypedArrayPrototype%.every callback called on elements in order");
                o4.o11(o49, o50, "%TypedArrayPrototype%.every callback called with correct values");
                o4.o11(Object(o52), o96, "%TypedArrayPrototype%.every callback function should receive the correct this arg");
                o4.o11(o63, o73, "%TypedArrayPrototype%.every callback called with the correct array arg");
            }

            var o97 = 5;
            function o98(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                if (o97 === o49) {
                    return false;
                }

                return true;
            }

            function o103(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                return true;
            }

            o4.o5(every.call(o62(10), o103, o52), "%TypedArrayPrototype%.every returns true when the callback always returns true");
            o4.o11(10, o70, "%TypedArrayPrototype%.every calls the callback function the correct number of times");

            o4.o10(every.call(o62(10), o98, o52), "%TypedArrayPrototype%.every returns false if the callback ever returns false");
            o4.o11(6, o70, "%TypedArrayPrototype%.every calls the callback function the correct number of times");

            o4.o38(function() { every.call(); }, o39, "Calling %TypedArrayPrototype%.every with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { every.call(undefined); }, o39, "Calling %TypedArrayPrototype%.every with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { every.call('string'); }, o39, "Calling %TypedArrayPrototype%.every with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { every.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.every with no callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
            o4.o38(function() { every.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.every with undefined callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
            o4.o38(function() { every.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.every with non-function callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.some behavior",
        o3: function() {
            var some = Int8Array.prototype.__proto__.some;
            var o52 = 'value';
            var o63;
            var o70;

            function o62(o85) {
                // Also remember t for use in verifying in the callback
                o63 = new Int8Array(o85);

                // Reset counter
                o70 = 0;

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o95(o49, o50, o73, o96) {
                o4.o11(o70, o50, "%TypedArrayPrototype%.some callback called on elements in order");
                o4.o11(o49, o50, "%TypedArrayPrototype%.some callback called with correct values");
                o4.o11(Object(o52), o96, "%TypedArrayPrototype%.some callback function should receive the correct this arg");
                o4.o11(o63, o73, "%TypedArrayPrototype%.some callback called with the correct array arg");
            }

            var o97 = 5;
            function o104(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                if (o97 === o49) {
                    return true;
                }

                return false;
            }

            function o99(o49, o50, o73) {
                o95(o49, o50, o73, this);

                o70++;

                return false;
            }

            o4.o10(some.call(o62(10), o99, o52), "%TypedArrayPrototype%.some returns false when the callback always returns false");
            o4.o11(10, o70, "%TypedArrayPrototype%.some calls the callback function the correct number of times");

            o4.o5(some.call(o62(10), o104, o52), "%TypedArrayPrototype%.some returns true if the callback ever returns true");
            o4.o11(6, o70, "%TypedArrayPrototype%.some calls the callback function the correct number of times");

            o4.o38(function() { some.call(); }, o39, "Calling %TypedArrayPrototype%.some with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { some.call(undefined); }, o39, "Calling %TypedArrayPrototype%.some with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { some.call('string'); }, o39, "Calling %TypedArrayPrototype%.some with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { some.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.some with no callback function throws TypeError", "[TypedArray].prototype.some: argument is not a Function object");
            o4.o38(function() { some.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.some with undefined callback function throws TypeError", "[TypedArray].prototype.some: argument is not a Function object");
            o4.o38(function() { some.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.some with non-function callback function throws TypeError", "[TypedArray].prototype.some: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.join behavior",
        o3: function() {
            var join = Int8Array.prototype.__proto__.join;

            function o62(o85) {
                var o63 = new Int8Array(o85);

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46+1;
                }

                return o63;
            }

            o4.o11('1,2,3,4,5,6,7,8,9,10', join.call(o62(10)), "%TypedArrayPrototype%.join basic behavior");
            o4.o11('', join.call(o62(0)), "%TypedArrayPrototype%.join called with zero-length TypedArray");
            o4.o11('1', join.call(o62(1)), "%TypedArrayPrototype%.join called with single-length TypedArray");
            o4.o11('1,2', join.call(o62(2)), "%TypedArrayPrototype%.join called with length == 2 TypedArray");
            o4.o11('1,2,3', join.call(o62(3)), "%TypedArrayPrototype%.join called with length == 3 TypedArray");

            o4.o38(function() { join.call(); }, o39, "Calling %TypedArrayPrototype%.join with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { join.call(undefined); }, o39, "Calling %TypedArrayPrototype%.join with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { join.call('string'); }, o39, "Calling %TypedArrayPrototype%.join with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.reduce behavior",
        o3: function() {
            var reduce = Int8Array.prototype.__proto__.reduce;
            var o63;
            var o70;
            var o52 = Object(this);

            function o62(o85) {
                o63 = new Int8Array(o85);
                o70 = 0;

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o105(o106, o49, o50, o73) {
                o4.o11(o70, o50, "%TypedArrayPrototype%.reduce calls the callback on items in order");
                o4.o11(o49, o50, "%TypedArrayPrototype%.reduce calls the callback with the correct values");
                o4.o11(o52, this, "%TypedArrayPrototype%.reduce calls the callback with undefined as the this arg");
                o4.o11(o63, o73, "%TypedArrayPrototype%.reduce calls the callback with the correct array object");

                o70++;

                return o106 + o49;
            }

            o4.o11(45, reduce.call(o62(10), o105, 0), "%TypedArrayPrototype%.reduce basic functionality");
            o4.o11(10, o70, "%TypedArrayPrototype%.reduce called the callback the correct number of times");
            o4.o11(100, reduce.call(o62(0), o105, 100), "%TypedArrayPrototype%.reduce with a zero-length array returns the initial value");
            o4.o11(0, o70, "%TypedArrayPrototype%.reduce didn't call the callback on an empty array");

            var o44 = o62(10);
            o70 = 1;
            o4.o11(45, reduce.call(o44, o105), "%TypedArrayPrototype%.reduce called with no initial value causes the first index passed to the callback to be shifted by one");
            o4.o11(10, o70, "%TypedArrayPrototype%.reduce called the callback the correct number of times");

            o4.o38(function() { reduce.call(); }, o39, "Calling %TypedArrayPrototype%.reduce with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reduce.call(undefined); }, o39, "Calling %TypedArrayPrototype%.reduce with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reduce.call('string'); }, o39, "Calling %TypedArrayPrototype%.reduce with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reduce.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.reduce with no callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
            o4.o38(function() { reduce.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.reduce with undefined callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
            o4.o38(function() { reduce.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.reduce with non-function callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
            o4.o38(function() { reduce.call(o62(0), o105); }, o39, "%TypedArrayPrototype%.reduce throws if array has zero length");
        }
    },
    {
        name: "%TypedArray%.prototype.reduceRight behavior",
        o3: function() {
            var reduceRight = Int8Array.prototype.__proto__.reduceRight;
            var o63;
            var o70;
            var o52 = Object(this);

            function o62(o85) {
                o63 = new Int8Array(o85);

                // counter starts at the end for reduceRight (last index == n-1)
                o70 = o85-1;

                for(var o46 = 0; o46 < o63.length; o46++) {
                    o63[o46] = o46;
                }

                return o63;
            }

            function o105(o106, o49, o50, o73) {
                o4.o11(o70, o50, "%TypedArrayPrototype%.reduceRight calls the callback on items in order");
                o4.o11(o49, o50, "%TypedArrayPrototype%.reduceRight calls the callback with the correct values");
                o4.o11(o52, this, "%TypedArrayPrototype%.reduceRight calls the callback with undefined as the this arg");
                o4.o11(o63, o73, "%TypedArrayPrototype%.reduceRight calls the callback with the correct array object");

                o70--;

                return o106 + o49;
            }

            o4.o11(45, reduceRight.call(o62(10), o105, 0), "%TypedArrayPrototype%.reduceRight basic functionality");
            o4.o11(-1, o70, "%TypedArrayPrototype%.reduceRight called the callback the correct number of times");
            o4.o11(100, reduceRight.call(o62(0), o105, 100), "%TypedArrayPrototype%.reduceRight with a zero-length array returns the initial value");
            o4.o11(-1, o70, "%TypedArrayPrototype%.reduceRight didn't call the callback on an empty array");

            var o44 = o62(10);
            o70 = 8; // second-to-last index
            o4.o11(45, reduceRight.call(o44, o105), "%TypedArrayPrototype%.reduceRight called with no initial value causes the first index passed to the callback to be shifted by one");
            o4.o11(-1, o70, "%TypedArrayPrototype%.reduceRight called the callback the correct number of times");

            o4.o38(function() { reduceRight.call(); }, o39, "Calling %TypedArrayPrototype%.reduceRight with no this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reduceRight.call(undefined); }, o39, "Calling %TypedArrayPrototype%.reduceRight with undefined this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reduceRight.call('string'); }, o39, "Calling %TypedArrayPrototype%.reduceRight with non-object this throws TypeError", "'this' is not a typed array object");
            o4.o38(function() { reduceRight.call(new Uint8Array(10)); }, o39, "Calling %TypedArrayPrototype%.reduceRight with no callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o4.o38(function() { reduceRight.call(new Uint8Array(10), undefined); }, o39, "Calling %TypedArrayPrototype%.reduceRight with undefined callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o4.o38(function() { reduceRight.call(new Uint8Array(10), 'string'); }, o39, "Calling %TypedArrayPrototype%.reduceRight with non-function callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o4.o38(function() { reduceRight.call(o62(0), o105); }, o39, "%TypedArrayPrototype%.reduceRight throws if array has zero length");
        }
    },
    {
        name: "ArrayBuffer.isView API shape verification",
        o3: function() {
            o4.o10(ArrayBuffer.isView === undefined, "ArrayBuffer.isView !== undefined");
            o4.o11('function', typeof ArrayBuffer.isView, "typeof ArrayBuffer.isView == 'function'");
            o4.o11(1, ArrayBuffer.isView.length, "ArrayBuffer.isView.length == 1");

            var o8 = Object.getOwnPropertyDescriptor(ArrayBuffer, 'isView');

            o4.o5(o8.writable, "ArrayBuffer.isView.writable === true");
            o4.o10(o8.enumerable, "ArrayBuffer.isView.enumerable === false");
            o4.o5(o8.configurable, "ArrayBuffer.isView.configurable === true");
        }
    },
    {
        name: "ArrayBuffer.isView behavior",
        o3: function() {
            // All of the TypedArray prototypes should be ordinary objects and should return false when passed to ArrayBuffer.isView.
            o4.o10(ArrayBuffer.isView(ArrayBuffer.prototype), "ArrayBuffer.isView(ArrayBuffer.prototype) === false");
            o4.o10(ArrayBuffer.isView(DataView.prototype), "ArrayBuffer.isView(DataView.prototype) === false");
            o4.o10(ArrayBuffer.isView(Uint8Array.prototype), "ArrayBuffer.isView(Uint8Array.prototype) === false");
            o4.o10(ArrayBuffer.isView(Uint16Array.prototype), "ArrayBuffer.isView(Uint16Array.prototype) === false");
            o4.o10(ArrayBuffer.isView(Uint32Array.prototype), "ArrayBuffer.isView(Uint32Array.prototype) === false");
            o4.o10(ArrayBuffer.isView(Int8Array.prototype), "ArrayBuffer.isView(Int8Array.prototype) === false");
            o4.o10(ArrayBuffer.isView(Int16Array.prototype), "ArrayBuffer.isView(Int16Array.prototype) === false");
            o4.o10(ArrayBuffer.isView(Int32Array.prototype), "ArrayBuffer.isView(Int32Array.prototype) === false");
            o4.o10(ArrayBuffer.isView(Uint8ClampedArray.prototype), "ArrayBuffer.isView(Uint8ClampedArray.prototype) === false");
            o4.o10(ArrayBuffer.isView(Float32Array.prototype), "ArrayBuffer.isView(Float32Array.prototype) === false");
            o4.o10(ArrayBuffer.isView(Float64Array.prototype), "ArrayBuffer.isView(Float64Array.prototype) === false");

            o4.o5(ArrayBuffer.isView(new DataView(new ArrayBuffer(20))), "ArrayBuffer.isView(new DataView(new ArrayBuffer(20))) === true");
            o4.o5(ArrayBuffer.isView(new Uint8Array(10)), "ArrayBuffer.isView(new Uint8Array(10)) === true");
            o4.o5(ArrayBuffer.isView(new Uint16Array(10)), "ArrayBuffer.isView(new Uint16Array(10)) === true");
            o4.o5(ArrayBuffer.isView(new Uint32Array(10)), "ArrayBuffer.isView(new Uint32Array(10)) === true");
            o4.o5(ArrayBuffer.isView(new Int8Array(10)), "ArrayBuffer.isView(new Int8Array(10)) === true");
            o4.o5(ArrayBuffer.isView(new Int16Array(10)), "ArrayBuffer.isView(new Int16Array(10)) === true");
            o4.o5(ArrayBuffer.isView(new Int32Array(10)), "ArrayBuffer.isView(new Int32Array(10)) === true");
            o4.o5(ArrayBuffer.isView(new Uint8ClampedArray(10)), "ArrayBuffer.isView(new Uint8ClampedArray(10)) === true");
            o4.o5(ArrayBuffer.isView(new Float32Array(10)), "ArrayBuffer.isView(new Float32Array(10)) === true");
            o4.o5(ArrayBuffer.isView(new Float64Array(10)), "ArrayBuffer.isView(new Float64Array(10)) === true");

            o4.o10(ArrayBuffer.isView(undefined), "ArrayBuffer.isView(undefined) === false");
            o4.o10(ArrayBuffer.isView(null), "ArrayBuffer.isView(null) === false");
            o4.o10(ArrayBuffer.isView(), "ArrayBuffer.isView() === false");
            o4.o10(ArrayBuffer.isView(new ArrayBuffer(20)), "ArrayBuffer.isView(new ArrayBuffer(20)) === false");
            o4.o10(ArrayBuffer.isView({buffer:[0,1,2],byteLength:12,byteOffset:0}), "ArrayBuffer.isView({buffer:[0,1,2],byteLength:12,byteOffset:0}) === false");
            o4.o10(ArrayBuffer.isView([1,2,3]), "ArrayBuffer.isView([1,2,3]) === false");
            o4.o10(ArrayBuffer.isView(true), "ArrayBuffer.isView(true) === false");
            o4.o10(ArrayBuffer.isView(false), "ArrayBuffer.isView(false) === false");
            o4.o10(ArrayBuffer.isView(0), "ArrayBuffer.isView(0) === false");
            o4.o10(ArrayBuffer.isView(1), "ArrayBuffer.isView(1) === false");
            o4.o10(ArrayBuffer.isView(1.0), "ArrayBuffer.isView(1.0) === false");
            o4.o10(ArrayBuffer.isView('string'), "ArrayBuffer.isView('string') === false");
            o4.o10(ArrayBuffer.isView({}), "ArrayBuffer.isView({}) === false");
            o4.o10(ArrayBuffer.isView(function() {}), "ArrayBuffer.isView(function() {}) === false");
            o4.o10(ArrayBuffer.isView(new Array(1)), "ArrayBuffer.isView(new Array(1)) === false");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice API shape verification",
        o3: function() {
            o4.o10(ArrayBuffer.prototype.slice === undefined, "ArrayBuffer.prototype.slice !== undefined");
            o4.o11('function', typeof ArrayBuffer.prototype.slice, "typeof ArrayBuffer.prototype.slice == 'function'");
            o4.o11(2, ArrayBuffer.prototype.slice.length, "ArrayBuffer.prototype.slice.length == 2");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with non-ArrayBuffer parameters",
        o3: function() {
            o4.o38(function () { ArrayBuffer.prototype.slice.apply('string'); }, o39, "ArrayBuffer.prototype.slice throws TypeError if this parameter is not an ArrayBuffer", "ArrayBuffer object expected");
            o4.o38(function () { ArrayBuffer.prototype.slice.apply(); }, o39, "ArrayBuffer.prototype.slice throws TypeError if there is no this parameter", "ArrayBuffer object expected");
            o4.o38(function () { ArrayBuffer.prototype.slice.call(); }, o39, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
            o4.o38(function () { ArrayBuffer.prototype.slice.call(undefined); }, o39, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
            o4.o38(function () { ArrayBuffer.prototype.slice(); }, o39, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
            o4.o38(function () { ArrayBuffer.prototype.slice(undefined); }, o39, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with positive start offset",
        o3: function() {
            var o19 = 10;
            var o40 = new ArrayBuffer(o19);
            var o107 = new Uint8Array(o40);

            for (var o46 = 0; o46 < o107.length; o46++)
            {
                o107[o46] = o46 + 1;
            }

            var o108 = o40.slice();
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice() returns the same array elements as the original");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice() returns an ArrayBuffer with the same byteLength as the original");

            var o108 = o40.slice(0);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(0) returns the same array elements as the original");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(0) returns an ArrayBuffer with the same byteLength as the original");

            var o108 = o40.slice(5);
            var o109 = new Uint8Array(o108);
            o4.o11([6,7,8,9,10], o109, "slice(5) contains the last 5 elements - [6,7,8,9,10]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(5, o108.byteLength, "slice(5) returns an ArrayBuffer with byteLength = 5");

            var o108 = o40.slice(9);
            var o109 = new Uint8Array(o108);
            o4.o11([10], o109, "slice(9) contains the last 1 elements - [10]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(1, o108.byteLength, "slice(9) returns an ArrayBuffer with byteLength = 1");

            var o108 = o40.slice(10);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "slice(10) contains empty buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "slice(10) returns an ArrayBuffer with byteLength = 0");

            var o108 = o40.slice(15);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "slice(15) contains empty buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "slice(15) returns an ArrayBuffer with byteLength = 0");

            var o108 = o40.slice(100);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "slice(100) contains empty buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "slice(100) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with negative start offset",
        o3: function() {
            var o19 = 10;
            var o40 = new ArrayBuffer(o19);
            var o107 = new Uint8Array(o40);

            for (var o46 = 0; o46 < o107.length; o46++)
            {
                o107[o46] = o46 + 1;
            }

            var o108 = o40.slice(-4);
            var o109 = new Uint8Array(o108);
            o4.o11([7,8,9,10], o109, "slice(-4) returns the last 4 elements - [7,8,9,10]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(4, o108.byteLength, "slice(-4) returns an ArrayBuffer with the byteLength = 4");

            var o108 = o40.slice(-5);
            var o109 = new Uint8Array(o108);
            o4.o11([6,7,8,9,10], o109, "slice(-5) contains the last 5 elements - [6,7,8,9,10]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(5, o108.byteLength, "slice(-5) returns an ArrayBuffer with byteLength = 5");

            var o108 = o40.slice(-9);
            var o109 = new Uint8Array(o108);
            o4.o11([2,3,4,5,6,7,8,9,10], o109, "slice(-9) contains the last 9 elements - [2,3,4,5,6,7,8,9,10]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(9, o108.byteLength, "slice(-9) returns an ArrayBuffer with byteLength = 9");

            var o108 = o40.slice(-10);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(-10) returns ArrayBuffer containing the entire original buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(-10) returns an ArrayBuffer with the same byteLength as the original");

            var o108 = o40.slice(-15);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(-15) returns ArrayBuffer containing the entire original buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(-15) returns an ArrayBuffer with the same byteLength as the original");

            var o108 = o40.slice(-100);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(-100) returns ArrayBuffer containing the entire original buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(-100) returns an ArrayBuffer with the same byteLength as the original");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with positive start offset and positive end offset",
        o3: function() {
            var o19 = 10;
            var o40 = new ArrayBuffer(o19);
            var o107 = new Uint8Array(o40);

            for (var o46 = 0; o46 < o107.length; o46++)
            {
                o107[o46] = o46 + 1;
            }

            var o108 = o40.slice(0, o19);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(0, len) returns all the elements of the original buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(0, len) returns an ArrayBuffer with the same byteLength as the original");

            var o108 = o40.slice(0, o19 * 10);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(0, len*10) returns all the elements of the original buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(0, len*10) returns an ArrayBuffer with the same byteLength as the original");

            var o108 = o40.slice(0, 5);
            var o109 = new Uint8Array(o108);
            o4.o11([1,2,3,4,5], o109, "slice(0, 5) contains the first 5 elements - [1,2,3,4,5]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(5, o108.byteLength, "slice(0, 5) returns an ArrayBuffer with byteLength = 5");

            var o108 = o40.slice(1, 1);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "slice(1, 1) contains no elements - the empty buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "slice(1, 1) returns an ArrayBuffer with byteLength = 0");

            var o108 = o40.slice(5, 10);
            var o109 = new Uint8Array(o108);
            o4.o11([6,7,8,9,10], o109, "slice(5, 10) returns the last 5 elements - [6,7,8,9,10]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(5, o108.byteLength, "slice(5, 10) returns an ArrayBuffer with byteLength = 5");

            var o108 = o40.slice(9, 10);
            var o109 = new Uint8Array(o108);
            o4.o11([10], o109, "slice(9, 10) returns the last element - [10]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(1, o108.byteLength, "slice(9, 10) returns an ArrayBuffer with byteLength = 1");

            var o108 = o40.slice(7, 5);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "slice(7, 5) returns empty ArrayBuffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "slice(7, 5) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with mix of positive and negative start offset and end offset",
        o3: function() {
            var o19 = 10;
            var o40 = new ArrayBuffer(o19);
            var o107 = new Uint8Array(o40);

            for (var o46 = 0; o46 < o107.length; o46++)
            {
                o107[o46] = o46 + 1;
            }

            var o108 = o40.slice(5, -2);
            var o109 = new Uint8Array(o108);
            o4.o11([6,7,8], o109, "slice(5, -2) returns elements 5 through (len-2) = [6,7,8]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(3, o108.byteLength, "slice(5, -2) returns an ArrayBuffer with byteLength = 3");

            var o108 = o40.slice(-5, 8);
            var o109 = new Uint8Array(o108);
            o4.o11([6,7,8], o109, "slice(-5, 8) returns elements 5 through 8 = [6,7,8]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(3, o108.byteLength, "slice(-5, 8) returns an ArrayBuffer with byteLength = 3");

            var o108 = o40.slice(-10, o40.byteLength);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(-10, len) returns elements all the elements of the original buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(-10, len) returns an ArrayBuffer the same byteLength as the original");

            var o108 = o40.slice(-20, o40.byteLength * 2);
            var o109 = new Uint8Array(o108);
            o4.o11(o107, o109, "slice(-20, len*2) returns elements all the elements of the original buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(o40.byteLength, o108.byteLength, "slice(-20, len*2) returns an ArrayBuffer the same byteLength as the original");

            var o108 = o40.slice(-7, -3);
            var o109 = new Uint8Array(o108);
            o4.o11([4,5,6,7], o109, "slice(-7, -3) returns elements 3 through (len-3) = [4,5,6,7]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(4, o108.byteLength, "slice(-7, -3) returns an ArrayBuffer with byteLength = 4");

            var o108 = o40.slice(-3, -7);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "slice(-3, -7) returns empty buffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "slice(-3, -7) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "DataView.prototype.buffer API shape",
        o3: function() {
            o4.o5(DataView.prototype.hasOwnProperty('buffer'), "ArrayBuffer.prototype.hasOwnProperty('buffer') == true");

            o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer');

            o4.o5(o8 !== undefined, "Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer') !== undefined");

            o4.o5(o8.get !== undefined, "DataView.prototype.buffer.get !== undefined");
            o4.o5(typeof o8.get === 'function', "typeof DataView.prototype.buffer.get === 'function'");
            o4.o11(0, o8.get.length, "DataView.prototype.buffer.get.length === 0");

            o4.o5(o8.set === undefined, "DataView.prototype.buffer.set === undefined");

            o4.o10(o8.enumerable, "DataView.prototype.buffer.enumerable === false");
            o4.o5(o8.configurable, "DataView.prototype.buffer.configurable === true");
        }
    },
    {
        name: "DataView.prototype.buffer behavior",
        o3: function() {
            var o40 = new ArrayBuffer(10);
            var o110 = new DataView(o40);

            o4.o5(o40 === o110.buffer, "buffer returns the same ArrayBuffer object passed to DataView constructor");

            // Assignment has no effect since view.buffer does not have a setter
            o110.buffer = undefined;
            o4.o5(o40 === o110.buffer, "Assigning to buffer has no effect");

            o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer');

            o4.o38(function () { o8.get(); }, o39, "DataView.prototype.buffer called with no 'this' argument", "'this' is not a DataView object");
            o4.o5(o40 === o8.get.call(o110), "Calling getter directly returns expected buffer");

            o4.o38(function () { o8.get.apply(DataView.prototype) }, o39, "Applying getter with DataView.prototype fails", "'this' is not a DataView object");
            o4.o38(function () { DataView.prototype.buffer; }, o39, "Calling DataView.prototype.buffer fails", "'this' is not a DataView object");

            Object.defineProperty(DataView.prototype, "buffer", {value: 'something'});

            o4.o11('string', typeof DataView.prototype.buffer, "Override DataView.prototype.buffer via Object.defineProperty works");
            o4.o11('something', DataView.prototype.buffer, "Override DataView.prototype.buffer via Object.defineProperty works");
            o4.o11('something', o110.buffer, "Override DataView.prototype.buffer via Object.defineProperty affects instance objects");
        }
    },
    {
        name: "DataView.prototype.byteOffset API shape",
        o3: function() {
            o4.o5(DataView.prototype.hasOwnProperty('byteOffset'), "ArrayBuffer.prototype.hasOwnProperty('byteOffset') == true");

            o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset');

            o4.o5(o8 !== undefined, "Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset') !== undefined");

            o4.o5(o8.get !== undefined, "DataView.prototype.byteOffset.get !== undefined");
            o4.o5(typeof o8.get === 'function', "typeof DataView.prototype.byteOffset.get === 'function'");
            o4.o11(0, o8.get.length, "DataView.prototype.byteOffset.get.length === 0");

            o4.o5(o8.set === undefined, "DataView.prototype.byteOffset.set === undefined");

            o4.o10(o8.enumerable, "DataView.prototype.byteOffset.enumerable === false");
            o4.o5(o8.configurable, "DataView.prototype.byteOffset.configurable === true");
        }
    },
    {
        name: "DataView.prototype.byteOffset behavior",
        o3: function() {
            var o40 = new ArrayBuffer(10);
            var o110 = new DataView(o40);

            o4.o11(0, o110.byteOffset, "byteOffset returns the same value passed to DataView constructor");

            // Assignment has no effect since view.byteOffset does not have a setter
            o110.byteOffset = -1;
            o4.o11(0, o110.byteOffset, "Assigning to byteOffset has no effect");

            o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset');

            o4.o38(function () { o8.get(); }, o39, "DataView.prototype.byteOffset called with no 'this' argument", "'this' is not a DataView object");
            o4.o11(0, o8.get.call(o110), "Calling getter directly returns expected byteOffset");

            o4.o38(function () { o8.get.apply(DataView.prototype) }, o39, "Applying getter with DataView.prototype fails", "'this' is not a DataView object");
            o4.o38(function () { DataView.prototype.byteOffset; }, o39, "Calling DataView.prototype.byteOffset fails", "'this' is not a DataView object");

            Object.defineProperty(DataView.prototype, "byteOffset", {value: 'something'});

            o4.o11('string', typeof DataView.prototype.byteOffset, "Override DataView.prototype.byteOffset via Object.defineProperty works");
            o4.o11('something', DataView.prototype.byteOffset, "Override DataView.prototype.byteOffset via Object.defineProperty works");
            o4.o11('something', o110.byteOffset, "Override DataView.prototype.byteOffset via Object.defineProperty affects instance objects");
        }
    },
    {
        name: "DataView.prototype.byteLength API shape",
        o3: function() {
            o4.o5(DataView.prototype.hasOwnProperty('byteLength'), "ArrayBuffer.prototype.hasOwnProperty('byteLength') == true");

            o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength');

            o4.o5(o8 !== undefined, "Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength') !== undefined");

            o4.o5(o8.get !== undefined, "DataView.prototype.byteLength.get !== undefined");
            o4.o5(typeof o8.get === 'function', "typeof DataView.prototype.byteLength.get === 'function'");
            o4.o11(0, o8.get.length, "DataView.prototype.byteLength.get.length === 0");

            o4.o5(o8.set === undefined, "DataView.prototype.byteLength.set === undefined");

            o4.o10(o8.enumerable, "DataView.prototype.byteLength.enumerable === false");
            o4.o5(o8.configurable, "DataView.prototype.byteLength.configurable === true");
        }
    },
    {
        name: "DataView.prototype.byteLength behavior",
        o3: function() {
            var o40 = new ArrayBuffer(10);
            var o110 = new DataView(o40);

            o4.o11(10, o110.byteLength, "byteLength returns the same value passed to DataView constructor");

            // Assignment has no effect since view.byteLength does not have a setter
            o110.byteLength = -1;
            o4.o11(10, o110.byteLength, "Assigning to byteLength has no effect");

            o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength');

            o4.o38(function () { o8.get(); }, o39, "DataView.prototype.byteLength called with no 'this' argument", "'this' is not a DataView object");
            o4.o11(10, o8.get.call(o110), "Calling getter directly returns expected byteLength");

            o4.o38(function () { o8.get.apply(DataView.prototype) }, o39, "Applying getter with DataView.prototype fails", "'this' is not a DataView object");
            o4.o38(function () { DataView.prototype.byteLength; }, o39, "Calling DataView.prototype.byteLength fails", "'this' is not a DataView object");

            Object.defineProperty(DataView.prototype, "byteLength", {value: 'something'});

            o4.o11('string', typeof DataView.prototype.byteLength, "Override DataView.prototype.byteLength via Object.defineProperty works");
            o4.o11('something', DataView.prototype.byteLength, "Override DataView.prototype.byteLength via Object.defineProperty works");
            o4.o11('something', o110.byteLength, "Override DataView.prototype.byteLength via Object.defineProperty affects instance objects");
        }
    },
    {
        name: "BLUE: 519650, 519651, 519652 - ArrayBuffer.prototype.slice behavior with undefined or infinite arguments",
        o3: function() {
            var o19 = 5;
            var o40 = new ArrayBuffer(o19);
            var o107 = new Uint8ClampedArray(o40);

            for (var o46 = 0; o46 < o107.length; o46++)
            {
                o107[o46] = o46 + 1;
            }

            var o108 = o40.slice(3, undefined);
            var o109 = new Uint8Array(o108);
            o4.o11([4,5], o109, "slice(3, undefined) returns elements 3 through len-1 = [4,5]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(2, o108.byteLength, "slice(3, undefined) returns an ArrayBuffer with byteLength = 2");

            var o108 = o40.slice(Number.o111, 3);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "buf.slice(Number.POSITIVE_INFINITY, 3) returns elements an empty ArrayBuffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "buf.slice(Number.POSITIVE_INFINITY, 3) returns an ArrayBuffer with byteLength = 0");

            var o108 = o40.slice(2, Number.o111);
            var o109 = new Uint8Array(o108);
            o4.o11([3,4,5], o109, "buf.slice(2, Number.POSITIVE_INFINITY) returns elements 2 through len-1 = [3,4,5]");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(3, o108.byteLength, "buf.slice(2, Number.POSITIVE_INFINITY) returns an ArrayBuffer with byteLength = 3");

            var o108 = o40.slice(NaN);
            var o109 = new Uint8Array(o108);
            o4.o11([1,2,3,4,5], o109, "buf.slice(NaN) returns the same elements as the original ArrayBuffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(5, o108.byteLength, "buf.slice(NaN) returns an ArrayBuffer with byteLength = 5");

            var o108 = o40.slice(Number.NEGATIVE_INFINITY);
            var o109 = new Uint8Array(o108);
            o4.o11([1,2,3,4,5], o109, "buf.slice(Number.NEGATIVE_INFINITY) returns the same elements as the original ArrayBuffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(5, o108.byteLength, "buf.slice(Number.NEGATIVE_INFINITY) returns an ArrayBuffer with byteLength = 5");

            var o108 = o40.slice(o19-1,o19);
            var o109 = new Uint8Array(o108);
            o4.o11([5], o109, "buf.slice(len-1,len) returns the last element from the original ArrayBuffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(1, o108.byteLength, "buf.slice(len-1,len) returns an ArrayBuffer with byteLength = 1");

            var o108 = o40.slice(o19,o19);
            var o109 = new Uint8Array(o108);
            o4.o11([], o109, "buf.slice(len,len) returns an empty ArrayBuffer");
            o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
            o4.o11(0, o108.byteLength, "buf.slice(len,len) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "ArrayBuffer.prototype.byteLength API shape",
        o3: function() {
            o4.o5(ArrayBuffer.prototype.hasOwnProperty('byteLength'), "ArrayBuffer.prototype.hasOwnProperty('byteLength') == true");

            var o8 = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

            o4.o5(o8 !== undefined, "Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength') !== undefined");

            o4.o5(o8.get !== undefined, "ArrayBuffer.prototype.byteLength.get !== undefined");
            o4.o5(typeof o8.get === 'function', "typeof ArrayBuffer.prototype.byteLength.get === 'function'");
            o4.o11(0, o8.get.length, "ArrayBuffer.prototype.byteLength.get.length === 0");

            o4.o5(o8.set === undefined, "ArrayBuffer.prototype.byteLength.set === undefined");

            o4.o10(o8.enumerable, "ArrayBuffer.prototype.byteLength.enumerable === false");
            o4.o5(o8.configurable, "ArrayBuffer.prototype.byteLength.configurable === true");
        }
    },
    {
        name: "ArrayBuffer.prototype.byteLength behavior",
        o3: function() {
            var o40 = new ArrayBuffer(10);

            o4.o11(10, o40.byteLength, "byteLength returns the same value passed to ArrayBuffer constructor");

            // Assignment has no effect since buf.byteLength does not have a setter
            o40.byteLength = -1;
            o4.o11(10, o40.byteLength, "Assigning to byteLength has no effect");

            var o8 = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

            o4.o38(function () { o8.get(); }, o39, "ArrayBuffer.prototype.byteLength called with no 'this' argument", "ArrayBuffer object expected");
            o4.o11(10, o8.get.call(o40), "Calling getter directly returns expected byteLength");

            o4.o38(function () { o8.get.apply(ArrayBuffer.prototype) }, o39, "Applying getter with ArrayBuffer.prototype fails", "ArrayBuffer object expected");
            o4.o38(function () { ArrayBuffer.prototype.byteLength; }, o39, "Calling ArrayBuffer.prototype.byteLength fails", "ArrayBuffer object expected");

            Object.defineProperty(ArrayBuffer.prototype, "byteLength", {value: 'something'});

            o4.o11('string', typeof ArrayBuffer.prototype.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty works");
            o4.o11('something', ArrayBuffer.prototype.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty works");
            o4.o11('something', o40.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty affects instance objects");

            Object.defineProperty(ArrayBuffer.prototype, "byteLength", {get: o8.get});
        }
    },
    {
        name: "BLUE: 614563 - %TypedArray%.prototype.subarray should use 0 as the default value for the begin argument",
        o3: function() {
            var o73 = new Uint8Array(10);

            for (var o46 = 0; o46 < o73.length; o46++) {
                o73[o46] = o46;
            }

            o4.o11([0,1,2,3,4,5,6,7,8,9], o73.subarray(), "Subarray with no begin or end offsets uses 0 and length as respective default values");
        }
    },
    {
        name: "%TypedArray%.prototype.subarray tests on constructor access through [@@species] - special cases",
        o3: function() {
            var o73 = new Uint8Array(10);

            o73.constructor = undefined;
            o4.o77(function () { o73.subarray(); }, "With [@@species] defined, calling %TypedArray%.prototype.subarray does not throw TypeError even when constructor property is undefined");

            o73.constructor = null;
            o4.o38(function () { o73.subarray(); }, o39, "Calling %TypedArray%.prototype.subarray throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o73.constructor = 'some string';
            o4.o38(function () { o73.subarray(); }, o39, "Calling %TypedArray%.prototype.subarray throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o73.constructor = Math.sin;
            o4.o77(function () { o73.subarray(); }, "Calling %TypedArray%.prototype.subarray uses default typed array constructor when constructor property is not a constructor");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice tests on constructor access through [@@species]",
        o3: function() {
            var o73 = new ArrayBuffer(10);
            o73.constructor = Array;

            o4.o38(function () { o73.slice(); }, o39, "Calling ArrayBuffer.prototype.slice throws TypeError when constructor function returns non-ArrayBuffer object", "ArrayBuffer object expected");

            o73.constructor = function(o112) { return o73; }

            o4.o113(o73, o73.slice(), "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o73.constructor = function(o112) { return new ArrayBuffer(5); }

            o4.o77(function () { o73.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o73.constructor = function(o112) { return new ArrayBuffer(o112); }
            var o114 = o73.slice();

            o4.o11(10, o114.byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o73.constructor = function(o112) { return new ArrayBuffer(20); }
            var o114 = o73.slice();

            o4.o11(10, o114.byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice tests on constructor access through [@@species] - special cases",
        o3: function() {
            var o73 = new ArrayBuffer(10);

            o73.constructor = undefined;
            o4.o77(function () { o73.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
            o4.o11(10, o73.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o73.constructor = null;
            o4.o38(function () { o73.slice(); }, o39, "Calling ArrayBuffer.prototype.slice throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o73.constructor = 'some string';
            o4.o38(function () { o73.slice(); }, o39, "Calling ArrayBuffer.prototype.slice throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o73.constructor = Math.sin;
            o4.o77(function () { o73.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
            o4.o11(10, o73.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
        }
    },
    {
        name: "Test of speciesConstructor codepaths accessing [@@species] through ArrayBuffer.prototype.slice",
        o3: function() {
            var o73 = new ArrayBuffer(10);

            o73.constructor = function() {};
            o73.constructor[Symbol.species] = undefined;
            o4.o77(function () { o73.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");
            o4.o11(10, o73.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");

            o73.constructor[Symbol.species] = null;
            o4.o77(function () { o73.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");
            o4.o11(10, o73.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");

            o73.constructor[Symbol.species] = {};
            o4.o38(function () { o73.slice(); }, o39, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined", "Function 'constructor[Symbol.species]' is not a constructor");
        }
    },
    {
        name: "TypedArray constructors cannot be called without new keyword",
        o3: function() {
            o4.o38(function() { Int8Array(64); }, o39, "Calling Int8Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Uint8Array(64); }, o39, "Calling Uint8Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Uint8ClampedArray(64); }, o39, "Calling Uint8ClampedArray() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Int16Array(64); }, o39, "Calling Int16Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Uint16Array(64); }, o39, "Calling Uint16Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Int32Array(64); }, o39, "Calling Int32Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Uint32Array(64); }, o39, "Calling Uint32Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Float32Array(64); }, o39, "Calling Float32Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o4.o38(function() { Float64Array(64); }, o39, "Calling Float64Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");

            o4.o38(function() { ArrayBuffer(64); }, o39, "Calling ArrayBuffer() without new keyword throws TypeError", "ArrayBuffer: cannot be called without the new keyword");
            o4.o38(function() { DataView(64); }, o39, "Calling DataView() without new keyword throws TypeError", "DataView: cannot be called without the new keyword");
        }
    },
];

o115.o116(o2, { o117: o0.o118[0] != "summary" });
