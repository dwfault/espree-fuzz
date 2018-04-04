//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 TypedArray extension tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Uint8ClampedArray constructor exists",
        o4: function () {
            o5.o6(typeof Uint8ClampedArray === 'function', "Uint8ClampedArray constructor exists");
        }
    },
    {
        name: "%TypedArray% intrinsic has correct properties",
        o4: function() {
            function o8(constructor, name, type, o11) {
                var o12 = Object.getOwnPropertyDescriptor(constructor, name);
                var o15 = constructor.name + "." + name;

                o5.o16(o12.writable, o15 + ".writable === false");
                o5.o16(o12.enumerable, o15 + ".enumerable === false");
                o5.o19(o11, o12.configurable, o15 + ".configurable === " +o11);
                o5.o19(type, typeof o12.value, "typeof " + o15 + " === '" + type + "'");
            }

            var o22 = Int8Array.__proto__;

            o5.o19('function', typeof o22, "typeof %TypedArray% === 'function'");

            o5.o19('TypedArray', o22.name, "%TypedArray%.name === 'TypedArray'");
            o5.o19(3, o22.length, "%TypedArray%.length === 3");

            o5.o6(o22 === Uint8Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o5.o6(o22 === Uint8ClampedArray.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o5.o6(o22 === Int16Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o5.o6(o22 === Uint16Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o5.o6(o22 === Int32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o5.o6(o22 === Uint32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o5.o6(o22 === Float32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
            o5.o6(o22 === Float64Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");

            o8(o22, 'length', 'number',false);
            o8(o22, 'name', 'string',true);

            o5.o16(o22.from === undefined, "%TypedArray%.from !== undefined");
            o5.o19('function', typeof o22.from, "typeof %TypedArray%.from == 'function'");
            o5.o19(1, o22.from.length, "%TypedArray%.from.length == 1");

            var o12 = Object.getOwnPropertyDescriptor(o22, 'from');

            o5.o6(o12.writable, "%TypedArray%.from.writable === true");
            o5.o16(o12.enumerable, "%TypedArray%.from.enumerable === false");
            o5.o6(o12.configurable, "%TypedArray%.from.configurable === true");

            o5.o16(o22.of === undefined, "%TypedArray%.of !== undefined");
            o5.o19('function', typeof o22.of, "typeof %TypedArray%.of == 'function'");
            o5.o19(0, o22.of.length, "%TypedArray%.of.length == 0");

            var o12 = Object.getOwnPropertyDescriptor(o22, 'of');

            o5.o6(o12.writable, "%TypedArray%.of.writable === true");
            o5.o16(o12.enumerable, "%TypedArray%.of.enumerable === false");
            o5.o6(o12.configurable, "%TypedArray%.of.configurable === true");

        }
    },
    {
        name: "%TypedArrayPrototype% intrinsic has correct properties",
        o4: function () {
            function o36(o37, name, o38, o39) {
                o39 = o39 || name;
                var o12 = Object.getOwnPropertyDescriptor(o37, name);
                o5.o16(o12.enumerable, o38 + ".enumerable === false");
                o5.o6(o12.configurable, o38 + ".configurable === true");
                o5.o19('function', typeof o12.get, "typeof " + o38 + ".get === 'function'");
                o5.o19(undefined, o12.set, o38 + ".set === undefined");
                o5.o19(0, o12.get.length, o38 + ".get.length === 0");

                var o42 = o12.get.toString();
                o5.o19(o39, o42, o38 + ".get.name = " + o39);
            }
            function o44(o37, name, o45, o38) {
                var o12 = Object.getOwnPropertyDescriptor(o37, name);
                o5.o6(o12.writable, o38 + ".writable === true");
                o5.o16(o12.enumerable, o38 + ".enumerable === false");
                o5.o6(o12.configurable, o38 + ".configurable === true");
                o5.o19('function', typeof o12.value, "typeof " + o38 + " === 'function'");
                o5.o19(o45, o12.value.length, o38 + ".length === " + o45);
            }

            var o46 = Int8Array.prototype.__proto__;

            o5.o19('object', typeof o46, "typeof %TypedArrayPrototype% === 'object'");
            o5.o19(Int8Array.__proto__, o46.constructor, "%TypedArrayPrototype%.constructor === %TypedArray%");

            o5.o6(o46 === Uint8Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o5.o6(o46 === Uint8ClampedArray.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o5.o6(o46 === Int16Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o5.o6(o46 === Uint16Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o5.o6(o46 === Int32Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o5.o6(o46 === Uint32Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o5.o6(o46 === Float32Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");
            o5.o6(o46 === Float64Array.prototype.__proto__, "All TypedArray prototypes have their [[prototype]] slot set to the %TypedArrayPrototype% intrinsic");

            o36(o46, "buffer", "%TypedArrayPrototype%.buffer", "get buffer");
            o36(o46, "byteLength", "%TypedArrayPrototype%.byteLength", "get byteLength");
            o36(o46, "byteOffset", "%TypedArrayPrototype%.byteOffset", "get byteOffset");
            o36(o46, "length", "%TypedArrayPrototype%.length", "get length");
            o36(o46, Symbol.toStringTag, "%TypedArrayPrototype%[@@toStringTag]", "get [Symbol.toStringTag]");

            o44(o46, "set", 2, "%TypedArrayPrototype%.set");
            o44(o46, "subarray", 2, "%TypedArrayPrototype%.subarray");
            o44(o46, "copyWithin", 2, "%TypedArrayPrototype%.copyWithin");
            o44(o46, "fill", 1, "%TypedArrayPrototype%.fill");
            o44(o46, "map", 1, "%TypedArrayPrototype%.map");
            o44(o46, "forEach", 1, "%TypedArrayPrototype%.forEach");
            o44(o46, "indexOf", 1, "%TypedArrayPrototype%.indexOf");
            o44(o46, "includes", 1, "%TypedArrayPrototype%.includes");
            o44(o46, "every", 1, "%TypedArrayPrototype%.every");
            o44(o46, "filter", 1, "%TypedArrayPrototype%.filter");
            o44(o46, "find", 1, "%TypedArrayPrototype%.find");
            o44(o46, "findIndex", 1, "%TypedArrayPrototype%.findIndex");
            o44(o46, "join", 1, "%TypedArrayPrototype%.join");
            o44(o46, "lastIndexOf", 1, "%TypedArrayPrototype%.lastIndexOf");
            o44(o46, "reduce", 1, "%TypedArrayPrototype%.reduce");
            o44(o46, "reduceRight", 1, "%TypedArrayPrototype%.reduceRight");
            o44(o46, "reverse", 0, "%TypedArrayPrototype%.reverse");
            o44(o46, "slice", 2, "%TypedArrayPrototype%.slice");
            o44(o46, "some", 1, "%TypedArrayPrototype%.some");
            o44(o46, "sort", 1, "%TypedArrayPrototype%.sort");

            o44(o46, 'entries', 0, "%TypedArrayPrototype%.entries");
            o44(o46, 'keys', 0, "%TypedArrayPrototype%.keys");
            o44(o46, 'values', 0, "%TypedArrayPrototype%.values");
            o44(o46, Symbol.iterator, 0, "%TypedArrayPrototype%[@@iterator]");
            o44(o46, 'toString', 0, "%TypedArrayPrototype%.toString");
            o44(o46, 'toLocaleString', 0, "%TypedArrayPrototype%.toLocaleString");
        }
    },
    {
        name: "TypedArray constructors have correct properties",
        o4: function () {
            function o8(constructor, name, type, o11) {
                var o12 = Object.getOwnPropertyDescriptor(constructor, name);
                var o15 = constructor.name + "." + name;

                o5.o16(o12.writable, o15 + ".writable === false");
                o5.o16(o12.enumerable, o15 + ".enumerable === false");
                o5.o19(o11, o12.configurable, o15 + ".configurable === " + o11);
                o5.o19(type, typeof o12.value, "typeof " + o15 + " === '" + type + "'");
            }

            o5.o19('Int8Array', Int8Array.name, "Int8Array.name === 'Int8Array'");
            o5.o19('Uint8Array', Uint8Array.name, "Uint8Array.name === 'Uint8Array'");
            o5.o19('Uint8ClampedArray', Uint8ClampedArray.name, "Uint8ClampedArray.name === 'Uint8ClampedArray'");
            o5.o19('Int16Array', Int16Array.name, "Int16Array.name === 'Int16Array'");
            o5.o19('Uint16Array', Uint16Array.name, "Uint16Array.name === 'Uint16Array'");
            o5.o19('Int32Array', Int32Array.name, "Int32Array.name === 'Int32Array'");
            o5.o19('Uint32Array', Uint32Array.name, "Uint32Array.name === 'Uint32Array'");
            o5.o19('Float32Array', Float32Array.name, "Float32Array.name === 'Float32Array'");
            o5.o19('Float64Array', Float64Array.name, "Float64Array.name === 'Float64Array'");

            o8(Int8Array, "name", "string", true);
            o8(Uint8Array, "name", "string", true);
            o8(Uint8ClampedArray, "name", "string", true);
            o8(Int16Array, "name", "string", true);
            o8(Uint16Array, "name", "string", true);
            o8(Int32Array, "name", "string", true);
            o8(Uint32Array, "name", "string", true);
            o8(Float32Array, "name", "string", true);
            o8(Float64Array, "name", "string", true);

            o5.o19(1, Int8Array.o51, "Int8Array.BYTES_PER_ELEMENT === 1");
            o5.o19(1, Uint8Array.o51, "Uint8Array.BYTES_PER_ELEMENT === 1");
            o5.o19(1, Uint8ClampedArray.o51, "Uint8ClampedArray.BYTES_PER_ELEMENT === 1");
            o5.o19(2, Int16Array.o51, "Int16Array.BYTES_PER_ELEMENT === 2");
            o5.o19(2, Uint16Array.o51, "Uint16Array.BYTES_PER_ELEMENT === 2");
            o5.o19(4, Int32Array.o51, "Int32Array.BYTES_PER_ELEMENT === 4");
            o5.o19(4, Uint32Array.o51, "Uint32Array.BYTES_PER_ELEMENT === 4");
            o5.o19(4, Float32Array.o51, "Float32Array.BYTES_PER_ELEMENT === 4");
            o5.o19(8, Float64Array.o51, "Float64Array.BYTES_PER_ELEMENT === 8");

            o8(Int8Array, "BYTES_PER_ELEMENT", "number", false);
            o8(Uint8Array, "BYTES_PER_ELEMENT", "number", false);
            o8(Uint8ClampedArray, "BYTES_PER_ELEMENT", "number", false);
            o8(Int16Array, "BYTES_PER_ELEMENT", "number", false);
            o8(Uint16Array, "BYTES_PER_ELEMENT", "number", false);
            o8(Int32Array, "BYTES_PER_ELEMENT", "number", false);
            o8(Uint32Array, "BYTES_PER_ELEMENT", "number", false);
            o8(Float32Array, "BYTES_PER_ELEMENT", "number", false);
            o8(Float64Array, "BYTES_PER_ELEMENT", "number", false);

            o5.o19(3, Int8Array.length, "Int8Array.length === 3");
            o5.o19(3, Uint8Array.length, "Uint8Array.length === 3");
            o5.o19(3, Uint8ClampedArray.length, "Uint8ClampedArray.length === 3");
            o5.o19(3, Int16Array.length, "Int16Array.length === 3");
            o5.o19(3, Uint16Array.length, "Uint16Array.length === 3");
            o5.o19(3, Int32Array.length, "Int32Array.length === 3");
            o5.o19(3, Uint32Array.length, "Uint32Array.length === 3");
            o5.o19(3, Float32Array.length, "Float32Array.length === 3");
            o5.o19(3, Float64Array.length, "Float64Array.length === 3");

            o8(Int8Array, "length", "number",false);
            o8(Uint8Array, "length", "number",false);
            o8(Uint8ClampedArray, "length", "number", false);
            o8(Int16Array, "length", "number", false);
            o8(Uint16Array, "length", "number", false);
            o8(Int32Array, "length", "number", false);
            o8(Uint32Array, "length", "number", false);
            o8(Float32Array, "length", "number", false);
            o8(Float64Array, "length", "number", false);

            o8(Int8Array, "prototype", "object", false);
            o8(Uint8Array, "prototype", "object", false);
            o8(Uint8ClampedArray, "prototype", "object", false);
            o8(Int16Array, "prototype", "object", false);
            o8(Uint16Array, "prototype", "object", false);
            o8(Int32Array, "prototype", "object", false);
            o8(Uint32Array, "prototype", "object", false);
            o8(Float32Array, "prototype", "object", false);
            o8(Float64Array, "prototype", "object", false);

            function o52(name, o38) {
                if(o38 === undefined)
                    o38 = name;

                o5.o16(Int8Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Uint8Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Uint8ClampedArray.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Int16Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Uint16Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Int32Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Uint32Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Float32Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
                o5.o16(Float64Array.hasOwnProperty(name), "TypedArray constructors don't have own property named '" + o38 + "'");
            }

            o52('to');
            o52('from');
            o52(Symbol.create, "@@create");
        }
    },
    {
        name: "TypedArray prototypes have correct properties",
        o4: function () {
            function o55(constructor, name, type) {
                var o12 = Object.getOwnPropertyDescriptor(constructor.prototype, name);
                var o15 = constructor.name + ".prototype." + name;

                o5.o16(o12.writable, o15 + ".writable === false");
                o5.o16(o12.enumerable, o15 + ".enumerable === false");
                o5.o16(o12.configurable, o15 + ".configurable === false");
                o5.o19(type, typeof o12.value, "typeof " + o15 + " === '" + type + "'");
            }

            o5.o19(1, Int8Array.prototype.o51, "Int8Array.prototype.BYTES_PER_ELEMENT === 1");
            o5.o19(1, Uint8Array.prototype.o51, "Uint8Array.prototype.BYTES_PER_ELEMENT === 1");
            o5.o19(1, Uint8ClampedArray.prototype.o51, "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT === 1");
            o5.o19(2, Int16Array.prototype.o51, "Int16Array.prototype.BYTES_PER_ELEMENT === 2");
            o5.o19(2, Uint16Array.prototype.o51, "Uint16Array.prototype.BYTES_PER_ELEMENT === 2");
            o5.o19(4, Int32Array.prototype.o51, "Int32Array.prototype.BYTES_PER_ELEMENT === 4");
            o5.o19(4, Uint32Array.prototype.o51, "Uint32Array.prototype.BYTES_PER_ELEMENT === 4");
            o5.o19(4, Float32Array.prototype.o51, "Float32Array.prototype.BYTES_PER_ELEMENT === 4");
            o5.o19(8, Float64Array.prototype.o51, "Float64Array.prototype.BYTES_PER_ELEMENT === 8");

            o55(Int8Array, "BYTES_PER_ELEMENT", "number");
            o55(Uint8Array, "BYTES_PER_ELEMENT", "number");
            o55(Uint8ClampedArray, "BYTES_PER_ELEMENT", "number");
            o55(Int16Array, "BYTES_PER_ELEMENT", "number");
            o55(Uint16Array, "BYTES_PER_ELEMENT", "number");
            o55(Int32Array, "BYTES_PER_ELEMENT", "number");
            o55(Uint32Array, "BYTES_PER_ELEMENT", "number");
            o55(Float32Array, "BYTES_PER_ELEMENT", "number");
            o55(Float64Array, "BYTES_PER_ELEMENT", "number");

            o5.o19(Int8Array, Int8Array.prototype.constructor, "Int8Array.prototype.constructor === Int8Array");
            o5.o19(Uint8Array, Uint8Array.prototype.constructor, "Uint8Array.prototype.constructor === Uint8Array");
            o5.o19(Uint8ClampedArray, Uint8ClampedArray.prototype.constructor, "Uint8ClampedArray.prototype.constructor === Uint8ClampedArray");
            o5.o19(Int16Array, Int16Array.prototype.constructor, "Int16Array.prototype.constructor === Int16Array");
            o5.o19(Uint16Array, Uint16Array.prototype.constructor, "Uint16Array.prototype.constructor === Uint16Array");
            o5.o19(Int32Array, Int32Array.prototype.constructor, "Int32Array.prototype.constructor === Int32Array");
            o5.o19(Uint32Array, Uint32Array.prototype.constructor, "Uint32Array.prototype.constructor === Uint32Array");
            o5.o19(Float32Array, Float32Array.prototype.constructor, "Float32Array.prototype.constructor === Float32Array");
            o5.o19(Float64Array, Float64Array.prototype.constructor, "Float64Array.prototype.constructor === Float64Array");

            function o56(name, o57) {
                o57 = o57 || name;
                o5.o16(Int8Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Uint8Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Uint8ClampedArray.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Int16Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Uint16Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Int32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Uint32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Float32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
                o5.o16(Float64Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'");
            }

            o56('set');
            o56('subarray');
            o56('copyWithin');
            o56('fill');
            o56('map');
            o56('indexOf');
            o56('includes');
            o56('forEach');
            o56('every');
            o56('filter');
            o56('find');
            o56('findIndex');
            o56('join');
            o56('lastIndexOf');
            o56('reduce');
            o56('reduceRight');
            o56('reverse');
            o56('slice');
            o56('some');
            o56('sort');
            o56('buffer');
            o56('byteLength');
            o56('byteOffset');
            o56('length');
            o56(Symbol.toStringTag, '@@toStringTag');
            o56('entries');
            o56('keys');
            o56('values');
            o56(Symbol.iterator, '@@iterator');
            o56('toString');
            o56('toLocaleString');
        }
    },
    {
        name: "TypedArray instances have the correct properties",
        o4: function() {
            var o58 = new Int8Array(20);
            var o59 = new Uint8Array(20);
            var o60 = new Uint8ClampedArray(20);
            var o61 = new Uint16Array(20);
            var o62 = new Int16Array(20);
            var o63 = new Int32Array(20);
            var o64 = new Uint32Array(20);
            var o65 = new Float32Array(20);
            var o66 = new Float64Array(20);

            function o67(o68, o69) {
                o69 = o69 || o68;

                o5.o16(o58.hasOwnProperty(o68), "new Int8Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o59.hasOwnProperty(o68), "new Uint8Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o60.hasOwnProperty(o68), "new Uint8ClampedArray(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o62.hasOwnProperty(o68), "new Int16Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o61.hasOwnProperty(o68), "new Uint16Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o63.hasOwnProperty(o68), "new Int32Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o64.hasOwnProperty(o68), "new Uint32Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o65.hasOwnProperty(o68), "new Float32Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o66.hasOwnProperty(o68), "new Float64Array(20).hasOwnProperty('" + o69 + "') === false");
            }

            // The accessors for buffer, byteLength, byteOffset, and length are inherited from prototype and are not instance properties
            o67('buffer');
            o67('byteLength');
            o67('byteOffset');
            o67('length');
            o67(Symbol.toStringTag, '@@toStringTag');
        }
    },
    {
        name: "Properties shared between Array.prototype and %TypedArray%.prototype",
        o4: function() {
            var o46 = Int8Array.prototype.__proto__;

            o5.o19(Array.prototype.toString, o46.toString, "Array.prototype.toString === %TypedArray%.prototype.toString");
            o5.o19(Array.prototype.toLocaleString, o46.toLocaleString, "Array.prototype.toLocaleString === %TypedArray%.prototype.toLocaleString");
        }
    },
    {
        name: "%TypedArrayPrototype%.buffer behavior",
        o4: function() {
            var o46 = Int8Array.prototype.__proto__;
            var o12 = Object.getOwnPropertyDescriptor(o46, 'buffer');

            o5.o72(function () { o46.buffer; }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get(); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(undefined); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call([1,2,3]); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o76 = new ArrayBuffer(100);
            o5.o19(o76, new Uint8Array(o76).buffer, "new Uint8Array(buf).buffer === buf");
            o5.o19(20, new Uint8Array(20).buffer.byteLength, "new Uint8Array(20).buffer.byteLength === 20");
            o5.o19(o76, o12.get.call(new Float32Array(o76)), "TypedArray.prototype.buffer can be used to retrieve the ArrayBuffer of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%.byteLength behavior",
        o4: function() {
            var o46 = Int8Array.prototype.__proto__;
            var o12 = Object.getOwnPropertyDescriptor(o46, 'byteLength');

            o5.o72(function () { o46.byteLength; }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get(); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(undefined); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call([1,2,3]); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o76 = new ArrayBuffer(100);
            o5.o19(100, new Uint8Array(o76).byteLength, "new Uint8Array(buf).byteLength === 100");
            o5.o19(80, new Uint32Array(20).byteLength, "new Uint8Array(20).byteLength === 80");
            o5.o19(100, o12.get.call(new Float32Array(o76)), "TypedArray.prototype.byteLength can be used to retrieve the byte length of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%.byteOffset behavior",
        o4: function() {
            var o46 = Int8Array.prototype.__proto__;
            var o12 = Object.getOwnPropertyDescriptor(o46, 'byteOffset');

            o5.o72(function () { o46.byteOffset; }, o74, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get(); }, o74, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(); }, o74, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(undefined); }, o74, "%TypedArrayPrototype%.byteOffset throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call([1,2,3]); }, o74, "%TypedArrayPrototype%.byteOffset throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o76 = new ArrayBuffer(100);
            o5.o19(0, new Uint8Array(o76).byteOffset, "new Uint8Array(buf).byteOffset === 0");
            o5.o19(0, new Uint16Array(20).byteOffset, "new Uint16Array(20).byteOffset === 0");
            o5.o19(8, new Uint32Array(o76, 8).byteOffset, "new Uint8Array(buf).byteOffset === 8");
            o5.o19(0, o12.get.call(new Float32Array(o76)), "TypedArray.prototype.byteOffset can be used to retrieve the byte offset of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%.length behavior",
        o4: function() {
            var o46 = Int8Array.prototype.__proto__;
            var o12 = Object.getOwnPropertyDescriptor(o46, 'length');

            o5.o72(function () { o46.length; }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get(); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(undefined); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call([1,2,3]); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o76 = new ArrayBuffer(100);
            o5.o19(100, new Uint8Array(o76).length, "new Uint8Array(buf).length === 100");
            o5.o19(20, new Uint32Array(20).length, "new Uint32Array(20).length === 20");
            o5.o19(50, o12.get.call(new Uint16Array(o76)), "TypedArray.prototype.length can be used to retrieve the length of a different TypedArray type");
        }
    },
    {
        name: "%TypedArrayPrototype%[@@toStringTag] behavior",
        o4: function() {
            var o46 = Int8Array.prototype.__proto__;
            var o12 = Object.getOwnPropertyDescriptor(o46, Symbol.toStringTag);

            o5.o72(function () { o46.length; }, o74, "%TypedArrayPrototype%[length] throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o19(undefined, o12.get.call(), "%TypedArrayPrototype%[@@toStringTag] returns undefined if called with no parameter");

            o5.o19('Int8Array',         new Int8Array(10)[Symbol.toStringTag],         "new Int8Array()[@@toStringTag] === 'Int8Array'");
            o5.o19('Uint8Array',        new Uint8Array(10)[Symbol.toStringTag],        "new Uint8Array()[@@toStringTag] === 'Uint8Array'");
            o5.o19('Uint8ClampedArray', new Uint8ClampedArray(10)[Symbol.toStringTag], "new Uint8ClampedArray()[@@toStringTag] === 'Uint8ClampedArray'");
            o5.o19('Int16Array',        new Int16Array(10)[Symbol.toStringTag],        "new Int16Array()[@@toStringTag] === 'Int16Array'");
            o5.o19('Uint16Array',       new Uint16Array(10)[Symbol.toStringTag],       "new Uint16Array()[@@toStringTag] === 'Uint16Array'");
            o5.o19('Int32Array',        new Int32Array(10)[Symbol.toStringTag],        "new Int32Array()[@@toStringTag] === 'Int32Array'");
            o5.o19('Uint32Array',       new Uint32Array(10)[Symbol.toStringTag],       "new Uint32Array()[@@toStringTag] === 'Uint32Array'");
            o5.o19('Float32Array',      new Float32Array(10)[Symbol.toStringTag],      "new Float32Array()[@@toStringTag] === 'Float32Array'");
            o5.o19('Float64Array',      new Float64Array(10)[Symbol.toStringTag],      "new Float64Array()[@@toStringTag] === 'Float64Array'");
        }
    },
    {
        name: "%TypedArray%.from basic behavior",
        o4: function() {
            o5.o19([0,1,2,3], Uint8Array.from([0,1,2,3]), "%TypedArray%.from basic behavior with an iterable object");
            o5.o19([0,1,2,3], Uint8Array.from({ 0: 0, 1: 1, 2: 2, 3: 3, length: 4 }), "%TypedArray%.from basic behavior with an object with length but no iterator");
        }
    },
    {
        name: "%TypedArray%.from extended behavior",
        o4: function() {
            var o80 = Uint8Array.__proto__.from;

            var o81 = o80.call(Float64Array, [1,2,3,4,5,6]);
            o5.o19('object', typeof o81, "%TypedArray%.from.call(Float64Array, 'string') returns a Float64Array");
            o5.o19([1,2,3,4,5,6], o81, "%TypedArray%.from.call(Float64Array, 'string') == [1,2,3,4,5,6]");
            o5.o19(6, o81.length, "%TypedArray%.from.call(Float64Array, 'string').length === 6");
            o5.o6(ArrayBuffer.isView(o81) && o81 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, 'string') is a Float64Array");

            var o83 = { 0: 0, 1: 1, 2: 2, length: 5 };
            var o81 = o80.call(Uint8Array, o83);
            o5.o19(5, o81.length, "Uint8Array.from(objectWithLengthProperty) returns a new Uint8Array with length = a.length");
            o5.o6(ArrayBuffer.isView(o81), "Uint8Array.from(objectWithLengthProperty) returns a TypedArray (ArrayBuffer.isView)");
            o5.o19(5, o81.byteLength, "Uint8Array.from(objectWithLengthProperty) returns a TypedArray (with correct byteLength)");
            o5.o19([0,1,2,0,0], o81, "Uint8Array.from(objectWithLengthProperty) has missing values set to 0");

            var o83 = { 0: 0, 1: 1, 2: 2, length: 5 };
            var o81 = o80.call(Float64Array, o83);
            o5.o19('object', typeof o81, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) returns an object");
            o5.o19(5, o81.length, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) returns a new typed array with length = a.length");
            o5.o6(ArrayBuffer.isView(o81) && o81 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) is a TypedArray (ArrayBuffer.isView)");
            o5.o19([0,1,2,NaN,NaN], o81, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) has missing values set to undefined");

            var o83 = { 0: 0, 1: 1 };
            var o81 = o80.call(Float64Array, o83);
            o5.o19('object', typeof o81, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) returns an object");
            o5.o19(0, o81.length, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) returns a new Float64Array with length = 0");
            o5.o6(ArrayBuffer.isView(o81) && o81 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) is a TypedArray (ArrayBuffer.isView)");
            o5.o19([], o81, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) is an empty array");

            o5.o72(function () { o80.call(); }, o74, "Calling %TypedArray%.from with no this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { o80.call(undefined); }, o74, "Calling %TypedArray%.from with undefined this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { o80.call('string'); }, o74, "Calling %TypedArray%.from with non-function this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { o80.call(Math.sin, []); }, o74, "Calling %TypedArray%.from with non-constructor this function throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { Uint8Array.from(); }, o74, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o5.o72(function () { Uint8Array.from(undefined); }, o74, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o5.o72(function () { Uint8Array.from(null); }, o74, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o5.o72(function () { Uint8Array.from({}, undefined); }, o74, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { Uint8Array.from({}, null); }, o74, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { Uint8Array.from({}, 'string'); }, o74, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { Uint8Array.from({}, {}); }, o74, "Calling %TypedArray%.from with non-function mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { o80.call(String, [0,1,2,3]); }, o74, "Calling %TypedArray%.from with no this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.from calls down into correct TypedArray SetItem API",
        o4: function() {
            var o88 = Uint8ClampedArray.from([0,-1,2,300]);
            o5.o19(4, o88.length, "Uint8ClampedArray.from([0,-1,2,300]) returns a new Uint8ClampedArray with length = 4");
            o5.o6(ArrayBuffer.isView(o88), "Uint8ClampedArray.from([0,-1,2,300]) returns a TypedArray (ArrayBuffer.isView)");
            o5.o19(4, o88.byteLength, "Uint8ClampedArray.from([0,-1,2,300]) returns a TypedArray (with correct byteLength)");
            o5.o19([0,0,2,255], o88, "Uint8ClampedArray.from([0,-1,2,300]) has the correct values");
        }
    },
    {
        name: "%TypedArray%.from behavior with iterable source item",
        o4: function() {
            var o80 = Uint8Array.__proto__.from;
            var o89 = {
                [Symbol.iterator]: function() {
                    return {
                        o90: 0,
                        next: function () {
                            return {
                                done: this.o90 == 5,
                                value: this.o90++
                            };
                        }
                    };
                }
            };

            var o81 = o80.call(Uint8Array, o89);
            o5.o19(5, o81.length, "%TypedArray%.from.call(Uint8Array, objectWithIterator) returns a new Uint8Array with length = objectWithIterator.length");
            o5.o6(ArrayBuffer.isView(o81), "%TypedArray%.from(objectWithIterator) returns a TypedArray (ArrayBuffer.isView)");
            o5.o19(5, o81.byteLength, "%TypedArray%.from(objectWithIterator) returns a TypedArray (with correct byteLength)");
            o5.o19([0,1,2,3,4], o81, "%TypedArray%.from(objectWithIterator) has correct values");
        }
    },
    {
        name: "%TypedArray%.from behavior with iterable source item which doesn't hold references to objects it returns",
        o4: function() {
            var o80 = Uint8Array.__proto__.from;
            var o89 = {
                [Symbol.iterator]: function() {
                    return {
                        o90: 0,
                        next: function () {
                            o93();
                            return {
                                done: this.o90 == 10,
                                value: this.o90++
                            };
                        }
                    };
                }
            };

            var o81 = o80.call(Float64Array, o89);
            o5.o19(10, o81.length, "%TypedArray%.from.call(Float64Array, objectWithIterator) returns a new Float64Array with length = objectWithIterator.length");
            for (var o90 = 0; o90 < o81.length; o90++) {
                o5.o6(o81[o90] !== undefined, "Object at index " + o90 + " is not undefined");
                o5.o19('number', typeof o81[o90], "Object at index " + o90 + " is a number");
                o5.o19(o90, o81[o90], "Object at index " + o90 + " has correct value");
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
        o4: function() {
            var o90 = 0;

            function o94(o95, o96) {
                o5.o19(o90, o96, "%TypedArray%.from called with a mapping function, we should get the elements in order. Setting item[" + o96 + "] = " + o95);
                o5.o19(o95, o96, "Value and index should be same for this test");
                o5.o19(2, arguments.length, "%TypedArray%.from called with a mapping function, only 2 arguments should be passed to the map function");

                // increment expected index
                o90++;
            }

            var o98 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with correct arguments
            Int8Array.from(o98, o94);
        }
    },
    {
        name: "%TypedArray%.from behavior with a map function passing this argument",
        o4: function() {
            var o99 = 'thisArg';

            function o94(o95, o96) {
                // this will be wrapped as an Object
                o5.o19(Object(o99), this, "thisArg passed into %TypedArray%.from should flow into mapFunction");
            }

            var o98 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with thisArg passed as this
            Int8Array.from(o98, o94, o99);
        }
    },
    {
        name: "%TypedArray%.from behavior with a map function that mutates source object",
        o4: function() {
            var o98 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                length: 5
            };

            function o94(o95, o96) {
                switch (o96) {
                case 0:
                    // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
                    o98.length = 0;
                    return o95;
                case 1:
                    // change the value of the next indexed value - the new value should end up in the return object
                    o98[2] = 200;
                    return o95;
                case 2:
                    // change the value of a previous indexed value - the old value should end up in the return object
                    o98[0] = -100;
                    return o95;
                case 3:
                    // delete the next indexed value - return object should have undefined there
                    delete o98[4];
                    return o95;
                }

                // otherwise
                return o95;
            }

            o5.o19([0,1,200,3,0], Int32Array.from(o98, o94), "Int32Array.from called with a map function that mutates the source object");
        }
    },
    {
        name: "%TypedArray%.from behavior with iterator and a map function",
        o4: function() {
            var o100 = 0;
            var o101 = false;
            var o99 = 'string';

            var o89 = {
                [Symbol.iterator]: function() {
                    return {
                        o90: 0,
                        next: function () {
                            return {
                                done: this.o90 == 5,
                                value: this.o90++
                            };
                        }
                    };
                }
            };

            function o94(o95, o96) {
                o5.o19(o100, o95, "%TypedArray%.from called with a mapping function, we should get the elements in order. Setting item[" + o100 + "] = " + o95);
                o5.o19(o95, o95, "%TypedArray%.from called with a mapping function, index should be equal to the value passed in.");
                o5.o19(2, arguments.length, "%TypedArray%.from called with a mapping function, only 2 arguments should be passed to the map function.");

                // increment expected value
                o100++;

                if (o101) {
                    // this will be wrapped as an Object
                    o5.o19(Object(o99), this, "thisArg passed into %TypedArray%.from should flow into mapFunction");
                }
            }

            // Verify mapFunction gets called with correct arguments
            Int8Array.from(o89, o94);

            o100 = 0;
            o101 = true;

            // Verify mapFunction gets called with thisArg passed as this
            Int8Array.from(o89, o94, o99);
        }
    },
    {
        name: "%TypedArray%.from behavior with iterator and a map function which mutates the iterator state",
        o4: function() {
            var o102 = 0;

            var o89 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () {
                            return {
                                done: o102 == 5,
                                value: o102++
                            };
                        }
                    };
                }
            };

            var o103 = false;
            function o94(o95, o96) {
                if (o95 == 2 && !o103)
                {
                    o103 = true;
                    o102 = 0;
                }

                return o95;
            }

            o5.o19([0,1,2,3,4], Int8Array.from(o89, o94), "Int8Array.from called with map function which alters iterator state");
        }
    },
    {
        name: "%TypedArray%.from behavior with badly formed iterator objects",
        o4: function() {
            // Test GetIterator where obj[@@iterator] is not a function
            var o104 = {
                [Symbol.iterator]: 'a string'
            };
            o5.o72(function() { Int8Array.from(o104); }, o74, "obj[@@iterator] must be a function", "Function expected");

            // Test GetIterator where obj[@@iterator] is a function which doesn't return an object
            var o105 = {
                [Symbol.iterator]: function() {
                    return undefined;
                }
            };
            o5.o72(function() { Int8Array.from(o105); }, o74, "obj[@@iterator] must return an object", "Object expected");

            // Test IteratorNext where obj[@@iterator].next is not a function
            var o106 = {
                [Symbol.iterator]: function() {
                    return {
                        next: undefined
                    };
                }
            };
            o5.o72(function() { Int8Array.from(o106); }, o74, "obj[@@iterator].next must be a function", "Function expected");

            // Test IteratorNext where obj[@@iterator].next doesn't return an object
            var o107 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function() {
                            return undefined;
                        }
                    };
                }
            };
            o5.o72(function() { Int8Array.from(o107); }, o74, "obj[@@iterator].next must return an object", "Object expected");
        }
    },
    {
        name: "%TypedArray%.of basic behavior",
        o4: function() {
            o5.o19([], Uint8Array.of(), "%TypedArray%.of basic behavior with no arguments");
            o5.o19([3], Uint8Array.of(3), "%TypedArray%.of basic behavior with a single argument");
            o5.o19([0,1,2,3], Uint8Array.of(0, 1, 2, 3), "%TypedArray%.of basic behavior with a list of arguments");
        }
    },
    {
        name: "%TypedArray%.of extended behavior",
        o4: function() {
            var o108 = Uint8Array.__proto__.of;

            var o88 = o108.call(Uint8ClampedArray, 0, -1, 2, 300, 4);
            o5.o19(5, o88.length, "Uint8ClampedArray.of(0, -1, 2, 300, 4) returns a new Uint8ClampedArray with length = 5");
            o5.o6(ArrayBuffer.isView(o88), "Uint8ClampedArray.of(0, -1, 2, 300, 4) returns a TypedArray (ArrayBuffer.isView)");
            o5.o19(5, o88.byteLength, "Uint8ClampedArray.of(0, -1, 2, 300, 4) returns a TypedArray (with correct byteLength)");
            o5.o19([0,0,2,255,4], o88, "Uint8ClampedArray.of(0, -1, 2, 300, 4) has the correct values");

            var o81 = Uint8Array.of();
            o5.o19(0, o81.length, "Uint8Array.of() returns empty Uint8Array");
            o5.o19(0, o81.byteLength, "Uint8Array.of() returns empty Uint8Array");
            o5.o6(ArrayBuffer.isView(o81), "Uint8Array.of() returns actual TypedArray");
            o5.o19(Uint8Array, o81.constructor, "Uint8Array.of() returns correct TypedArray type");

            o5.o72(function () { o108.call(); }, o74, "Calling %TypedArray%.of with no this throws TypeError", "[TypedArray].of: 'this' is not a Function object");
            o5.o72(function () { o108.call(undefined); }, o74, "Calling %TypedArray%.of with undefined this throws TypeError", "[TypedArray].of: 'this' is not a Function object");
            o5.o72(function () { o108.call('string'); }, o74, "Calling %TypedArray%.of with non-object this throws TypeError", "[TypedArray].of: 'this' is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.copyWithin behavior",
        o4: function() {
            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90+1;
                }

                return o110;
            }

            function o111() {
                return [1,2,3,4,5,6,7,8,9,10];
            }

            function o112() {
                return {
                    0:1, 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, length: 10
                };
            }

            function o113(o114, o115) {
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115()), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 0), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 0, 0), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o5.o19([6,7,8,9,10,6,7,8,9,10], o114.call(o115(), 0, 5), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o5.o19([6,7,8,9,10,6,7,8,9,10], o114.call(o115(), 0, 5, 10), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o5.o19([6,7,8,9,10,6,7,8,9,10], o114.call(o115(), 0, 5, 11), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o5.o19([6,2,3,4,5,6,7,8,9,10], o114.call(o115(), -50, 5, 6), "%TypedArrayPrototype%.copyWithin copying a single element beginning at index 5 to the first index");
                o5.o19([6,7,3,4,5,6,7,8,9,10], o114.call(o115(), -10, 5, 7), "%TypedArrayPrototype%.copyWithin copying two elements beginning at index 5 to the first index");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 0, 5, 3), "%TypedArrayPrototype%.copyWithin copying elements where end > start causes no changes");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 0, 5, 5), "%TypedArrayPrototype%.copyWithin copying elements where end = start causes no changes");
                o5.o19([6,7,8,9,5,6,7,8,9,10], o114.call(o115(), 0, 5, 9), "%TypedArrayPrototype%.copyWithin copying elements where end = arr.length-1");
                o5.o19([6,7,8,9,5,6,7,8,9,10], o114.call(o115(), 0, 5, -1), "%TypedArrayPrototype%.copyWithin copying elements where end -1 is the same as end === arr.length-1");
                o5.o19([1,2,3,4,5,6,7,8,9,6], o114.call(o115(), -1, 5), "%TypedArrayPrototype%.copyWithin copying from the middle of the array to the last index");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), -5, 5, -1), "%TypedArrayPrototype%.copyWithin copying the middle of the array to the last index - 1");
                o5.o19([1,6,7,8,9,6,7,8,9,10], o114.call(o115(), 1, -5, -1), "%TypedArrayPrototype%.copyWithin copying the middle of the array to the last index - 1");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 1, 0, -10), "%TypedArrayPrototype%.copyWithin copying anything where end is 0 or less causes us to do nothing");
                o5.o19([1,1,2,4,5,6,7,8,9,10], o114.call(o115(), 1, -100, 2), "%TypedArrayPrototype%.copyWithin copying two elements starting at 0 into start position 1");
                o5.o19([2,3,4,5,6,7,8,9,10,10], o114.call(o115(), 0, -9), "%TypedArrayPrototype%.copyWithin copying all but the last elements starting at 1 into start position 0");
            }

            o113(Uint8Array.prototype.__proto__.copyWithin, o109);
            o113(Array.prototype.copyWithin, o111);
            o113(Array.prototype.copyWithin, o109);

            var o114 = Uint8Array.prototype.__proto__.copyWithin;

            o5.o6(ArrayBuffer.isView(o114.call(o109(), 0, 0)), "%TypedArrayPrototype%.copyWithin returns a TypedArray");
            o5.o19("Int8Array", o114.call(o109(), 0, 0)[Symbol.toStringTag], "%TypedArrayPrototype%.copyWithin returns the right TypedArray type");

            o5.o6(ArrayBuffer.isView(Array.prototype.copyWithin.call(o109(), 0, 0)), "Array.prototype.copyWithin returns a TypedArray when a TypedArray is passed in");
            o5.o16(ArrayBuffer.isView(Array.prototype.copyWithin.call(o111(), 0, 0)), "Array.prototype.copyWithin returns a normal array when a TypedArray is not passed in");
            o5.o16(ArrayBuffer.isView(Array.prototype.copyWithin.call(o112(), 0, 0)), "Array.prototype.copyWithin returns a normal array when a TypedArray is not passed in");

            o5.o72(function() { o114.call(); }, o74, "Calling %TypedArrayPrototype%.copyWithin with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o114.call(undefined); }, o74, "Calling %TypedArrayPrototype%.copyWithin with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o114.call('string'); }, o74, "Calling %TypedArrayPrototype%.copyWithin with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o114.call(o111()); }, o74, "Calling %TypedArrayPrototype%.copyWithin with non-TypedArray object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o114.call(o112()); }, o74, "Calling %TypedArrayPrototype%.copyWithin with non-TypedArray object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.fill behavior",
        o4: function() {
            var fill = Uint8Array.prototype.__proto__.fill;

            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90+1;
                }

                return o110;
            }

            function o113(o115) {
                o5.o19([0,0,0,0,0,0,0,0,0,0], fill.call(o115(), 0), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o5.o19([0,0,0,0,0,0,0,0,0,0], fill.call(o115(), 0, undefined), "%TypedArrayPrototype%.fill should use length as the end value when undefined is specified");
                o5.o19([0,0,0,0,0,0,0,0,0,0], fill.call(o115(), 0, 0), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o5.o19([0,0,0,0,0,0,0,0,0,0], fill.call(o115(), 0, 0, 100), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o5.o19([0,0,0,0,0,0,0,0,0,0], fill.call(o115(), 0, -50), "%TypedArrayPrototype%.fill filling the entire array with 0");
                o5.o19([1,2,3,4,5,6,7,8,9,10], fill.call(o115(), 0, 100), "%TypedArrayPrototype%.fill filling no elements because start > length");
                o5.o19([1,2,3,4,5,0,0,0,0,0], fill.call(o115(), 0, 5), "%TypedArrayPrototype%.fill filling all elements after index 5");
                o5.o19([0,0,0,0,0,6,7,8,9,10], fill.call(o115(), 0, 0, 5), "%TypedArrayPrototype%.fill filling first 5 elements");
                o5.o19([1,2,3,0,5,6,7,8,9,10], fill.call(o115(), 0, 3, 4), "%TypedArrayPrototype%.fill filling one element at index 3");
                o5.o19([1,2,3,4,5,6,7,0,0,10], fill.call(o115(), 0, -3, -1), "%TypedArrayPrototype%.fill filling two elements near the end");
                o5.o19([1,2,3,4,5,6,7,8,9,0], fill.call(o115(), 0, -1), "%TypedArrayPrototype%.fill filling the last element");
                o5.o19([1,2,3,4,5,6,7,8,9,10], fill.call(o115(), 0, 5, 4), "%TypedArrayPrototype%.fill filling the no elements because start > end");
                o5.o19([1,2,3,4,5,6,7,8,9,10], fill.call(o115(), 0, 4, 4), "%TypedArrayPrototype%.fill filling the no elements because start == end");
            }

            o113(o109);

            o5.o72(function() { fill.call(); }, o74, "Calling %TypedArrayPrototype%.fill with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { fill.call(undefined); }, o74, "Calling %TypedArrayPrototype%.fill with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { fill.call('string'); }, o74, "Calling %TypedArrayPrototype%.fill with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.map behavior",
        o4: function() {
            var o118 = Int8Array.prototype.__proto__.map;
            var o120 = 0;
            var o110;
            var o99 = 'a string';

            function o109() {
                // Reset the counter var here
                o120 = 0;
                // Save the latest array in t for use by the mapping function
                o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o121(o122, index, o124) {
                o5.o19(index, o120, "We call the mapping function on elements in the correct order");
                o5.o19(o122, index, "We pass the correct values to the mapping function");
                o5.o6(o124 === o110, "Array passed to the mapping function matches array map is called on");
                o5.o19(Object(o99), this, "This value passed to map is correct");

                // Increment counter var for the next index
                o120++;

                return -1 * o122;
            }

            function o113(o125, o115, o126) {
                o5.o19([0,-1,-2,-3,-4,-5,-6,-7,-8,-9], o125.call(o115(), o121, o99), "%TypedArrayPrototype%.map basic functionality of the mapping function");

                if (o126) {
                    o5.o6(ArrayBuffer.isView(o125.call(o115(), o121, o99)), "%TypedArrayPrototype%.map returns a TypedArray");
                    o5.o19("Int8Array", o125.call(o115(), o121, o99)[Symbol.toStringTag], "%TypedArrayPrototype%.map returns the right TypedArray type");
                } else {
                    o5.o16(ArrayBuffer.isView(o125.call(o115(), o121, o99)), "%TypedArrayPrototype%.map returns a normal array");
                }
            }

            o113(o118, o109, true);
            o113(Array.prototype.map, o109, false);

            // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
            // If we set the constructor property of some TypedArray to Array built-in constructor, we should get an array object out.
            var o88 = o109();
            o88.constructor = Array;
            o5.o72(()=>o88.map(o121, o99), o74, 'u.map', "'this' is not a typed array object");

            o88.constructor = Int16Array;
            var o127 = o88.map(o121, o99);

            o5.o19([0,-1,-2,-3,-4,-5,-6,-7,-8,-9], o127, "%TypedArrayPrototype%.map called on a TypedArray with 'constructor' property set to Array produces the correct values");
            o5.o6(ArrayBuffer.isView(o127) && o127 instanceof Int16Array, "%TypedArrayPrototype%.map called on a TypedArray with 'constructor' property set to a different TypedArray produces a typed array");

            // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
            // If we set the constructor property of some TypedArray to a non-constructor, it should throw.
            var o88 = o109();
            o88.constructor = undefined;
            o5.o128(function() { o88.map(o121, o99); }, "With [@@species], calling %TypedArrayPrototype%.map with a constructor property on this which is not IsConstructor does not throw");

            o5.o72(function() { o118.call(); }, o74, "Calling %TypedArrayPrototype%.map with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o118.call(undefined); }, o74, "Calling %TypedArrayPrototype%.map with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o118.call('string'); }, o74, "Calling %TypedArrayPrototype%.map with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o118.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.map with no callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
            o5.o72(function() { o118.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.map with undefined callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
            o5.o72(function() { o118.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.map with non-function callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
        }
    },
    {
        name: "Array.prototype.map called with a TypedArray which lies about length",
        o4: function() {
            // We have to make sure that we don't rely on the TypedArray internal length slot when passing a TypedArray object
            // to Array.prototype.map as the this argument. The object might lie about the length property.
            var o118 = Array.prototype.map;
            var o120 = 0;
            var o110;
            var o99 = 'a string';

            function o109() {
                // Reset the counter var here
                o120 = 0;
                // Save the latest array in t for use by the mapping function
                o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o121(o122, index, o124) {
                o5.o19(index, o120, "We call the mapping function on elements in the correct order");
                o5.o19(o122, index, "We pass the correct values to the mapping function");
                o5.o6(o124 === o110, "Array passed to the mapping function matches array map is called on");
                o5.o19(Object(o99), this, "This value passed to map is correct");

                // Increment counter var for the next index
                o120++;

                return -1 * o122;
            }

            // This object lies and says it has length of 5 (while the internal length slot is 10)
            var o129 = new o109();
            Object.defineProperty(o129, 'length', { value: 5 });

            // Since Array.prototype.map doesn't care about TypedArrays and always gets the length property,
            // result array should only have 5 elements.
            var o131 = o118.call(o129, o121, o99);

            o5.o19([0,-1,-2,-3,-4], o131, "Array.prototype.map called with a TypedArray object which lies about length");
            o5.o16(ArrayBuffer.isView(o131), "Array.prototype.map returns a normal array object even if the this parameter is a TypedArray");
        }
    },
    {
        name: "%TypedArray%.prototype.forEach behavior",
        o4: function() {
            var o132 = Int8Array.prototype.__proto__.forEach;
            var o120 = 0;
            var o110;
            var o99 = 'a string';
            var o134 = true;

            function o135(o95, o96, o124) {
                o5.o19(o120, o95, "Callback function is called on elements in the correct order");
                o5.o19(o96, o95, "Callback function is called on elements in the correct order");
                o5.o6(o110 === o124, "Callback function is called with the correct TypedArray object");

                if (o134) {
                    o5.o19(Object(o99), this, "Callback function has this set correctly");
                }

                o120++;
            }

            function o109() {
                // Reset the counter var here
                o120 = 0;
                // Save the latest array in t for use by the callback function
                o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            o5.o19(undefined, o132.call(o109(), o135, o99), "Calling %TypedArrayPrototype%.forEach with a simple callback function and this arg");
            o5.o19(10, o120, "We called the callback function the correct number of times");

            o134 = false;
            o5.o19(undefined, o132.call(o109(), o135), "Calling %TypedArrayPrototype%.forEach with a simple callback function");
            o5.o19(10, o120, "We called the callback function the correct number of times");

            o5.o72(function() { o132.call(); }, o74, "Calling %TypedArrayPrototype%.forEach with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o132.call(undefined); }, o74, "Calling %TypedArrayPrototype%.forEach with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o132.call('string'); }, o74, "Calling %TypedArrayPrototype%.forEach with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o132.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.forEach with no callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
            o5.o72(function() { o132.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.forEach with undefined callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
            o5.o72(function() { o132.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.forEach with non-function callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.indexOf behavior",
        o4: function() {
            var o136 = Int8Array.prototype.__proto__.indexOf;

            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            o5.o19(-1, o136.call(o109(), undefined), "Calling %TypedArrayPrototype%.indexOf with undefined returns -1");
            o5.o19(0, o136.call(o109(), 0), "Calling %TypedArrayPrototype%.indexOf searching for the first value");
            o5.o19(9, o136.call(o109(), 9), "Calling %TypedArrayPrototype%.indexOf searching for the last value");
            o5.o19(-1, o136.call(o109(), 0, 1), "Calling %TypedArrayPrototype%.indexOf searching for the first value but skipping the first element returns -1");
            o5.o19(-1, o136.call(o109(), 0, 11), "Calling %TypedArrayPrototype%.indexOf where fromIndex > length returns -1");
            o5.o19(0, o136.call(o109(), 0, -10), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");
            o5.o19(5, o136.call(o109(), 5, -5), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");

            // If we use Array.prototype.indexOf but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot
            var o88 = o109();
            Object.defineProperty(o88, 'length', { value: 0 });
            o5.o19(-1, Array.prototype.indexOf.call(o88, 0), "Calling Array.prototype.indexOf where length is zero returns -1");
            var o88 = o109();
            Object.defineProperty(o88, 'length', { value: 5 });
            o5.o19(-1, Array.prototype.indexOf.call(o88, 6), "Calling Array.prototype.indexOf with a TypedArray that lies about length - make sure we don't actually find the element");

            o5.o72(function() { o136.call(); }, o74, "Calling %TypedArrayPrototype%.indexOf with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o136.call(undefined); }, o74, "Calling %TypedArrayPrototype%.indexOf with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o136.call('string'); }, o74, "Calling %TypedArrayPrototype%.indexOf with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.includes behavior",
        o4: function() {
            var o138 = Int8Array.prototype.__proto__.includes;

            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            o5.o16(o138.call(o109(), undefined), "Calling %TypedArrayPrototype%.includes with undefined returns true");
            o5.o6(o138.call(o109(), 0), "Calling %TypedArrayPrototype%.includes searching for the first value");
            o5.o6(o138.call(o109(), 9), "Calling %TypedArrayPrototype%.includes searching for the last value");
            o5.o16(o138.call(o109(), 0, 1), "Calling %TypedArrayPrototype%.includes searching for the first value but skipping the first element returns false");
            o5.o16(o138.call(o109(), 0, 11), "Calling %TypedArrayPrototype%.includes where fromIndex > length returns false");
            o5.o6(o138.call(o109(), 0, -10), "Calling %TypedArrayPrototype%.includes where fromIndex < 0 acts as indexed from the back");
            o5.o6(o138.call(o109(), 5, -5), "Calling %TypedArrayPrototype%.includes where fromIndex < 0 acts as indexed from the back");

            // If we use Array.prototype.includes but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot
            var o88 = o109();
            Object.defineProperty(o88, 'length', { value: 0 });
            o5.o16(Array.prototype.includes.call(o88, 0), "Calling Array.prototype.includes where length is zero returns false");
            var o88 = o109();
            Object.defineProperty(o88, 'length', { value: 5 });
            o5.o16(Array.prototype.includes.call(o88, 6), "Calling Array.prototype.includes with a TypedArray that lies about length - make sure we don't actually find the element");

            o5.o72(function() { o138.call(); }, o74, "Calling %TypedArrayPrototype%.includes with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o138.call(undefined); }, o74, "Calling %TypedArrayPrototype%.includes with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o138.call('string'); }, o74, "Calling %TypedArrayPrototype%.includes with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.lastIndexOf behavior",
        o4: function() {
            var lastIndexOf = Int8Array.prototype.__proto__.lastIndexOf;

            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            o5.o19(-1, lastIndexOf.call(o109(), undefined), "Calling %TypedArrayPrototype%.lastIndexOf with undefined returns -1");
            o5.o19(0, lastIndexOf.call(o109(), 0), "Calling %TypedArrayPrototype%.lastIndexOf searching for the first value");
            o5.o19(9, lastIndexOf.call(o109(), 9), "Calling %TypedArrayPrototype%.lastIndexOf searching for the last value");
            o5.o19(-1, lastIndexOf.call(o109(), 9, -2), "Calling %TypedArrayPrototype%.lastIndexOf searching for the last value but skipping the last element returns -1");
            o5.o19(-1, lastIndexOf.call(o109(), 4, 2), "Calling %TypedArrayPrototype%.lastIndexOf where fromIndex < the searched element returns -1");
            o5.o19(0, lastIndexOf.call(o109(), 0, -10), "Calling %TypedArrayPrototype%.lastIndexOf where fromIndex < 0 acts as indexed from the back");
            o5.o19(5, lastIndexOf.call(o109(), 5, -5), "Calling %TypedArrayPrototype%.lastIndexOf where fromIndex < 0 acts as indexed from the back");

            var o88 = o109();
            o88[3] = 2;
            o88[4] = 2;
            o88[5] = 2;
            o5.o19(5, lastIndexOf.call(o88, 2), "%TypedArrayPrototype%.lastIndexOf with array that repeats values returns the last index of the value");

            Object.defineProperty(o88, 'length', { value: 4 });
            o5.o19(3, Array.prototype.lastIndexOf.call(o88, 2), "Calling Array.prototype.lastIndexOf where TypedArray contains more instances of search element beyond length");

            var o88 = o109();
            Object.defineProperty(o88, 'length', { value: 0 });
            o5.o19(-1, Array.prototype.lastIndexOf.call(o88, 0), "Calling Array.prototype.lastIndexOf where length is zero returns -1");

            o5.o72(function() { lastIndexOf.call(); }, o74, "Calling %TypedArrayPrototype%.lastIndexOf with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { lastIndexOf.call(undefined); }, o74, "Calling %TypedArrayPrototype%.lastIndexOf with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { lastIndexOf.call('string'); }, o74, "Calling %TypedArrayPrototype%.lastIndexOf with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.reverse behavior",
        o4: function() {
            var reverse = Int8Array.prototype.__proto__.reverse;

            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            o5.o19([9,8,7,6,5,4,3,2,1,0], reverse.call(o109()), "Calling %TypedArrayPrototype%.reverse with basic behavior");

            var o88 = o109();
            o5.o19(o88, reverse.call(o88), "Calling %TypedArrayPrototype%.reverse returns the correct object");
            o5.o6(o88 === reverse.call(o88), "Calling %TypedArrayPrototype%.reverse returns the correct object");

            var o88 = new Uint8Array(3);
            o88[0] = 1;
            o88[1] = 2;
            o88[2] = 3;
            o5.o19([3,2,1], reverse.call(o88), "Calling %TypedArrayPrototype%.reverse with an odd-length TypedArray");

            var o88 = new Uint8Array(1);
            o88[0] = 1;
            o5.o19([1], reverse.call(o88), "Calling %TypedArrayPrototype%.reverse with TypedArray of length == 1");

            var o88 = new Uint8Array(0);
            o5.o19([], reverse.call(o88), "Calling %TypedArrayPrototype%.reverse with TypedArray of length == 0");

            // Call Array.prototype.reverse passing a TypedArray that lies about length. We should only reverse the part of it less than the indicated length.
            o88 = o109();
            Object.defineProperty(o88, 'length', { value: 5 });
            o5.o19([4,3,2,1,0,5,6,7,8,9], Array.prototype.reverse.call(o88), "Calling %TypedArrayPrototype%.reverse with a TypedArray that lies about length");

            // Call Array.prototype.reverse passing a TypedArray that lies about length. TypedArrays do not support delete so we will throw if indicated length is longer than actual.
            o88 = o109();
            Object.defineProperty(o88, 'length', { value: 20 });
            o5.o72(function() { Array.prototype.reverse.call(o88); }, o74, "Calling %TypedArrayPrototype%.reverse with a TypedArray that says it has longer length than actual throws", "Object doesn't support this action");

            o5.o72(function() { reverse.call(); }, o74, "Calling %TypedArrayPrototype%.reverse with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reverse.call(undefined); }, o74, "Calling %TypedArrayPrototype%.reverse with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reverse.call('string'); }, o74, "Calling %TypedArrayPrototype%.reverse with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.slice behavior",
        o4: function() {
            var slice = Int8Array.prototype.__proto__.slice;

            function o109(o143) {
                var o110 = new Int8Array(o143);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            var o88 = o109(10);

            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88), "%TypedArrayPrototype%.slice basic functionality");
            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, 0), "%TypedArrayPrototype%.slice basic functionality");
            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, undefined), "%TypedArrayPrototype%.slice basic functionality");
            o5.o19([5,6,7,8,9], slice.call(o88, 5), "%TypedArrayPrototype%.slice skipping the first 5 elements");
            o5.o19([8,9], slice.call(o88, -2), "%TypedArrayPrototype%.slice using a negative start index takes only the last elements");
            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, -100), "%TypedArrayPrototype%.slice has the start index clamped to zero");
            o5.o19([], slice.call(o88, 100), "%TypedArrayPrototype%.slice with start index > length returns empty array");

            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, 0, 50), "%TypedArrayPrototype%.slice has the end index clamped to length");
            o5.o19([0,1], slice.call(o88, 0, 2), "%TypedArrayPrototype%.slice selecting the first two items");
            o5.o19([8,9], slice.call(o88, 8, 10), "%TypedArrayPrototype%.slice selecting the last two items");
            o5.o19([6,7,8], slice.call(o88, 6, -1), "%TypedArrayPrototype%.slice selecting from index 6 until one before the last");
            o5.o19([6,7,8], slice.call(o88, -4, -1), "%TypedArrayPrototype%.slice selecting from index 6 until one before the last");
            o5.o19([5], slice.call(o88, 5, 6), "%TypedArrayPrototype%.slice selecting a single item from index 5");

            o5.o19([], slice.call(o88, 5, 2), "%TypedArrayPrototype%.slice returns empty array if end < start index");
            o5.o19([], slice.call(o88, 100, 2), "%TypedArrayPrototype%.slice returns empty array if end < start index");
            o5.o19([], slice.call(o88, 100, -100), "%TypedArrayPrototype%.slice returns empty array if end < start index");

            var o127 = o88.slice();
            o5.o6(o88 !== o127, "%TypedArrayPrototype%.slice returns a new object instead of altering the source object");
            o5.o6(ArrayBuffer.isView(o127), "%TypedArrayPrototype%.slice returns a TypedArray object");
            o5.o19(o88[Symbol.toStringTag], o127[Symbol.toStringTag], "%TypedArrayPrototype%.slice returns the same type of TypedArray as the source object");

            o88.constructor = Float32Array;
            var o127 = o88.slice();
            o5.o6(ArrayBuffer.isView(o127), "%TypedArrayPrototype%.slice returns a TypedArray object");
            o5.o19("Float32Array", o127[Symbol.toStringTag], "%TypedArrayPrototype%.slice returns the same type of TypedArray as the source object's constructor property");

            o88.constructor = String;
            var o127 = o88.slice();
            o5.o6(ArrayBuffer.isView(o127), "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is not a TypedArray constructor");
            o5.o19(0, o127[0], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(1, o127[1], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(2, o127[2], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(3, o127[3], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(8, o127[8], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(9, o127[9], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(10, o127.length, "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");

            o88.constructor = Array;
            o5.o72(function () { o88.slice() }, o74, "Calling %TypedArrayPrototype%.slice with a constructor property with [@@species] pointing to a non-typed-array constructor throws");

            o5.o72(function() { slice.call(); }, o74, "Calling %TypedArrayPrototype%.slice without this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { slice.call(undefined); }, o74, "Calling %TypedArrayPrototype%.slice with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { slice.call('string'); }, o74, "Calling %TypedArrayPrototype%.slice with non-object this throws TypeError", "'this' is not a typed array object");

            o88.constructor = Math.sin;
            o5.o128(function() { slice.call(o88); }, "Calling %TypedArrayPrototype%.slice with constructor property pointing to a non-constructor function can still function through [@@species]");
        }
    },
    {
        name: "%TypedArray%.prototype.sort behavior",
        o4: function() {
            var sort = Int8Array.prototype.__proto__.sort;

            function o109(o143) {
                var o110 = new Int8Array(o143);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o143-o90;
                }

                return o110;
            }

            o5.o19([1,2,3,4,5,6,7,8,9,10], o109(10).sort(), "%TypedArrayPrototype%.sort basic behavior");
            o5.o19([], o109(0).sort(), "%TypedArrayPrototype%.sort returns empty array when this arg is empty");
            o5.o19([1], o109(1).sort(), "%TypedArrayPrototype%.sort returns the same array for a single-length array");
            o5.o19([1,2], o109(2).sort(), "%TypedArrayPrototype%.sort returns the correct value for an array with length == 2");

            var o88 = new Uint8Array(6);
            o88[0] = 200;
            o88[1] = 150;
            o88[2] = o88[3] = o88[4] = 100;
            o88[5] = 0;
            o5.o19([0,100,100,100,150,200], o88.sort(), "%TypedArrayPrototype%.sort sorts multiple elements with the same value");

            var o145 = new Float64Array(5);
            o145[0] = 100.0;
            o145[1] = 99.999999999999;
            o145[2] = 99.9999;
            o145[3] = 99.99999;
            o145[4] = 99.9999;
            o5.o19([99.9999,99.9999,99.99999,99.999999999999,100], o145.sort(), "%TypedArrayPrototype%.sort basic behavior with 64-bit floats");

            function o146(o147, o148) {
                if (o147 < o148) {
                    return 1;
                } else if (o147 > o148) {
                    return -1;
                }

                return 0;
            }

            function o149(o147, o148) {
                if (o147 < o148) {
                    return -1;
                } else if (o147 > o148) {
                    return 1;
                }

                return 0;
            }

            function o150(o147, o148) {
                if (o147 == 5) {
                    return -1;
                }
                if (o148 == 5) {
                    return 1;
                }
                return o149(o147, o148);
            }

            function o151(o147, o148) {
                switch(o147) {
                case 1:
                    return 0;
                case 2:
                    return -10.5;
                case 3:
                    return 'a string';
                case 4:
                    return { o152: 'another string' };
                case 5:
                    return function o152() { return 90; };
                case 6:
                    return 12.99999999999;
                }

                return undefined;
            }

            o5.o19([1,2,3,4,5,6,7,8,9,10], o109(10).sort(o149), "%TypedArrayPrototype%.sort basic behavior with a non-lying sort callback");
            o5.o19([10,9,8,7,6,5,4,3,2,1], o109(10).sort(o146), "%TypedArrayPrototype%.sort with a sort callback function which reverses elements");
            o5.o19([5,1,2,3,4,6,7,8,9,10], o109(10).sort(o150), "%TypedArrayPrototype%.sort basic behavior with a lying sort callback which hates the number 5");
            o5.o19([9,8,7,2,10,5,4,3,1,6], o109(10).sort(o151), "%TypedArrayPrototype%.sort basic behavior with a sort callback which returns random values");

            o5.o72(function() { sort.call(); }, o74, "Calling %TypedArrayPrototype%.sort with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { sort.call(undefined); }, o74, "Calling %TypedArrayPrototype%.sort with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { sort.call('string'); }, o74, "Calling %TypedArrayPrototype%.sort with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { sort.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.sort with non-function callback function throws TypeError", "[TypedArray].prototype.sort: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.find behavior",
        o4: function() {
            var o153 = Int8Array.prototype.__proto__.find;
            var o99 = 'value';
            var o110;
            var o120;

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new Int8Array(o143);

                // Reset counter
                o120 = 0;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(o95, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.find callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.find callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.find callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.find callback called with the correct array arg");
            }

            var o157 = 5;
            function o158(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                if (o157 === o95) {
                    return true;
                }

                return false;
            }

            function o159(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return false;
            }

            o5.o19(undefined, o153.call(o109(10), o159, o99), "%TypedArrayPrototype%.find returns undefined when the callback always returns false");
            o5.o19(10, o120, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o5.o19(o157, o153.call(o109(10), o158, o99), "%TypedArrayPrototype%.find returns the value of the array which causes the callback to return true");
            o5.o19(6, o120, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o157 = 0;
            o5.o19(o157, o153.call(o109(10), o158, o99), "%TypedArrayPrototype%.find returns the value of the array which causes the callback to return true");
            o5.o19(1, o120, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o157 = 9;
            o5.o19(o157, o153.call(o109(10), o158, o99), "%TypedArrayPrototype%.find returns the value of the array which causes the callback to return true");
            o5.o19(10, o120, "%TypedArrayPrototype%.find calls the callback function the correct number of times");

            o5.o72(function() { o153.call(); }, o74, "Calling %TypedArrayPrototype%.find with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o153.call(undefined); }, o74, "Calling %TypedArrayPrototype%.find with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o153.call('string'); }, o74, "Calling %TypedArrayPrototype%.find with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o153.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.find with no callback function throws TypeError", "[TypedArray].prototype.find: argument is not a Function object");
            o5.o72(function() { o153.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.find with undefined callback function throws TypeError", "[TypedArray].prototype.find: argument is not a Function object");
            o5.o72(function() { o153.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.find with non-function callback function throws TypeError", "[TypedArray].prototype.find: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.findIndex behavior",
        o4: function() {
            var findIndex = Int8Array.prototype.__proto__.findIndex;
            var o99 = 'value';
            var o110;
            var o120;

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new Int8Array(o143);

                // Reset counter
                o120 = 0;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(o95, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.findIndex callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.findIndex callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.findIndex callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.findIndex callback called with the correct array arg");
            }

            var o157 = 5;
            function o158(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                if (o157 === o95) {
                    return true;
                }

                return false;
            }

            function o159(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return false;
            }

            o5.o19(-1, findIndex.call(o109(10), o159, o99), "%TypedArrayPrototype%.findIndex returns -1 when the callback always returns false");
            o5.o19(10, o120, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o5.o19(o157, findIndex.call(o109(10), o158, o99), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o5.o19(6, o120, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o157 = 0;
            o5.o19(o157, findIndex.call(o109(10), o158, o99), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o5.o19(1, o120, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o157 = 9;
            o5.o19(o157, findIndex.call(o109(10), o158, o99), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o5.o19(10, o120, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o5.o72(function() { findIndex.call(); }, o74, "Calling %TypedArrayPrototype%.findIndex with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { findIndex.call(undefined); }, o74, "Calling %TypedArrayPrototype%.findIndex with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { findIndex.call('string'); }, o74, "Calling %TypedArrayPrototype%.findIndex with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { findIndex.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.findIndex with no callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
            o5.o72(function() { findIndex.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.findIndex with undefined callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
            o5.o72(function() { findIndex.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.findIndex with non-function callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.filter behavior",
        o4: function() {
            var filter = Int8Array.prototype.__proto__.filter;
            var o99 = 'value';
            var o110;
            var o120;

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new Int8Array(o143);

                // Reset counter
                o120 = 0;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(o95, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.filter callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.filter callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.filter callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.filter callback called with the correct array arg");
            }

            function o162(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                if (o95 % 2 != 0) {
                    return true;
                }

                return false;
            }

            function o163(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return false;
            }

            function o164(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return true;
            }

            var o120 = 0;
            var o131 = filter.call(o109(10), o162, o99);
            o5.o19([1,3,5,7,9], o131, "%TypedArrayPrototype%.filter returns a new TypedArray with the right values");
            o5.o6(ArrayBuffer.isView(o131), "%TypedArrayPrototype%.filter returns a new TypedArray");
            o5.o19("Int8Array", o131[Symbol.toStringTag], "%TypedArrayPrototype%.filter returns the right type of new TypedArray");
            o5.o19(10, o120, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o5.o19([], filter.call(o109(10), o163, o99), "%TypedArrayPrototype%.filter returns an empty array when callback selects no elements");
            o5.o19(10, o120, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o5.o19([0,1,2,3,4,5,6,7,8,9], filter.call(o109(10), o164, o99), "%TypedArrayPrototype%.filter returns the original array when callback selects all elements");
            o5.o19(10, o120, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            var o88 = o109(10);
            o88.constructor = Int16Array;
            o120 = 0;
            var o131 = filter.call(o88, o162, o99);
            o5.o19([1,3,5,7,9], o131, "%TypedArrayPrototype%.filter returns a new array with the right values");
            o5.o6(ArrayBuffer.isView(o131) && o131 instanceof Int16Array, "%TypedArrayPrototype%.filter returns a typed array if the TypedArray constructor property is changed to a different typed array");
            o5.o19("Int16Array", o131[Symbol.toStringTag], "%TypedArrayPrototype%.filter return value doesn't have @@toStringTag value");
            o5.o19(10, o120, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o88.constructor = Math.sin;
            o120 = 0;
            o5.o128(function() { filter.call(o88, o162, o99); }, "Calling %TypedArrayPrototype%.filter with constructor property pointing to a non-constructor function can still function through [@@species]");

            o5.o72(function() { filter.call(); }, o74, "Calling %TypedArrayPrototype%.filter with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { filter.call(undefined); }, o74, "Calling %TypedArrayPrototype%.filter with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { filter.call('string'); }, o74, "Calling %TypedArrayPrototype%.filter with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { filter.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.filter with no callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
            o5.o72(function() { filter.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.filter with undefined callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
            o5.o72(function() { filter.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.filter with non-function callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.every behavior",
        o4: function() {
            var every = Int8Array.prototype.__proto__.every;
            var o99 = 'value';
            var o110;
            var o120;

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new Int8Array(o143);

                // Reset counter
                o120 = 0;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(o95, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.every callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.every callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.every callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.every callback called with the correct array arg");
            }

            var o157 = 5;
            function o158(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                if (o157 === o95) {
                    return false;
                }

                return true;
            }

            function o166(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return true;
            }

            o5.o6(every.call(o109(10), o166, o99), "%TypedArrayPrototype%.every returns true when the callback always returns true");
            o5.o19(10, o120, "%TypedArrayPrototype%.every calls the callback function the correct number of times");

            o5.o16(every.call(o109(10), o158, o99), "%TypedArrayPrototype%.every returns false if the callback ever returns false");
            o5.o19(6, o120, "%TypedArrayPrototype%.every calls the callback function the correct number of times");

            o5.o72(function() { every.call(); }, o74, "Calling %TypedArrayPrototype%.every with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { every.call(undefined); }, o74, "Calling %TypedArrayPrototype%.every with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { every.call('string'); }, o74, "Calling %TypedArrayPrototype%.every with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { every.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.every with no callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
            o5.o72(function() { every.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.every with undefined callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
            o5.o72(function() { every.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.every with non-function callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.some behavior",
        o4: function() {
            var some = Int8Array.prototype.__proto__.some;
            var o99 = 'value';
            var o110;
            var o120;

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new Int8Array(o143);

                // Reset counter
                o120 = 0;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(o95, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.some callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.some callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.some callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.some callback called with the correct array arg");
            }

            var o157 = 5;
            function o168(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                if (o157 === o95) {
                    return true;
                }

                return false;
            }

            function o159(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return false;
            }

            o5.o16(some.call(o109(10), o159, o99), "%TypedArrayPrototype%.some returns false when the callback always returns false");
            o5.o19(10, o120, "%TypedArrayPrototype%.some calls the callback function the correct number of times");

            o5.o6(some.call(o109(10), o168, o99), "%TypedArrayPrototype%.some returns true if the callback ever returns true");
            o5.o19(6, o120, "%TypedArrayPrototype%.some calls the callback function the correct number of times");

            o5.o72(function() { some.call(); }, o74, "Calling %TypedArrayPrototype%.some with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { some.call(undefined); }, o74, "Calling %TypedArrayPrototype%.some with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { some.call('string'); }, o74, "Calling %TypedArrayPrototype%.some with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { some.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.some with no callback function throws TypeError", "[TypedArray].prototype.some: argument is not a Function object");
            o5.o72(function() { some.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.some with undefined callback function throws TypeError", "[TypedArray].prototype.some: argument is not a Function object");
            o5.o72(function() { some.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.some with non-function callback function throws TypeError", "[TypedArray].prototype.some: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.join behavior",
        o4: function() {
            var join = Int8Array.prototype.__proto__.join;

            function o109(o143) {
                var o110 = new Int8Array(o143);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90+1;
                }

                return o110;
            }

            o5.o19('1,2,3,4,5,6,7,8,9,10', join.call(o109(10)), "%TypedArrayPrototype%.join basic behavior");
            o5.o19('', join.call(o109(0)), "%TypedArrayPrototype%.join called with zero-length TypedArray");
            o5.o19('1', join.call(o109(1)), "%TypedArrayPrototype%.join called with single-length TypedArray");
            o5.o19('1,2', join.call(o109(2)), "%TypedArrayPrototype%.join called with length == 2 TypedArray");
            o5.o19('1,2,3', join.call(o109(3)), "%TypedArrayPrototype%.join called with length == 3 TypedArray");

            o5.o72(function() { join.call(); }, o74, "Calling %TypedArrayPrototype%.join with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { join.call(undefined); }, o74, "Calling %TypedArrayPrototype%.join with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { join.call('string'); }, o74, "Calling %TypedArrayPrototype%.join with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        name: "%TypedArray%.prototype.reduce behavior",
        o4: function() {
            var reduce = Int8Array.prototype.__proto__.reduce;
            var o110;
            var o120;
            var o99 = Object(this);

            function o109(o143) {
                o110 = new Int8Array(o143);
                o120 = 0;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o171(o172, o95, o96, o124) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.reduce calls the callback on items in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.reduce calls the callback with the correct values");
                o5.o19(o99, this, "%TypedArrayPrototype%.reduce calls the callback with undefined as the this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.reduce calls the callback with the correct array object");

                o120++;

                return o172 + o95;
            }

            o5.o19(45, reduce.call(o109(10), o171, 0), "%TypedArrayPrototype%.reduce basic functionality");
            o5.o19(10, o120, "%TypedArrayPrototype%.reduce called the callback the correct number of times");
            o5.o19(100, reduce.call(o109(0), o171, 100), "%TypedArrayPrototype%.reduce with a zero-length array returns the initial value");
            o5.o19(0, o120, "%TypedArrayPrototype%.reduce didn't call the callback on an empty array");

            var o88 = o109(10);
            o120 = 1;
            o5.o19(45, reduce.call(o88, o171), "%TypedArrayPrototype%.reduce called with no initial value causes the first index passed to the callback to be shifted by one");
            o5.o19(10, o120, "%TypedArrayPrototype%.reduce called the callback the correct number of times");

            o5.o72(function() { reduce.call(); }, o74, "Calling %TypedArrayPrototype%.reduce with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reduce.call(undefined); }, o74, "Calling %TypedArrayPrototype%.reduce with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reduce.call('string'); }, o74, "Calling %TypedArrayPrototype%.reduce with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reduce.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.reduce with no callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
            o5.o72(function() { reduce.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.reduce with undefined callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
            o5.o72(function() { reduce.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.reduce with non-function callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
            o5.o72(function() { reduce.call(o109(0), o171); }, o74, "%TypedArrayPrototype%.reduce throws if array has zero length");
        }
    },
    {
        name: "%TypedArray%.prototype.reduceRight behavior",
        o4: function() {
            var reduceRight = Int8Array.prototype.__proto__.reduceRight;
            var o110;
            var o120;
            var o99 = Object(this);

            function o109(o143) {
                o110 = new Int8Array(o143);

                // counter starts at the end for reduceRight (last index == n-1)
                o120 = o143-1;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o171(o172, o95, o96, o124) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.reduceRight calls the callback on items in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.reduceRight calls the callback with the correct values");
                o5.o19(o99, this, "%TypedArrayPrototype%.reduceRight calls the callback with undefined as the this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.reduceRight calls the callback with the correct array object");

                o120--;

                return o172 + o95;
            }

            o5.o19(45, reduceRight.call(o109(10), o171, 0), "%TypedArrayPrototype%.reduceRight basic functionality");
            o5.o19(-1, o120, "%TypedArrayPrototype%.reduceRight called the callback the correct number of times");
            o5.o19(100, reduceRight.call(o109(0), o171, 100), "%TypedArrayPrototype%.reduceRight with a zero-length array returns the initial value");
            o5.o19(-1, o120, "%TypedArrayPrototype%.reduceRight didn't call the callback on an empty array");

            var o88 = o109(10);
            o120 = 8; // second-to-last index
            o5.o19(45, reduceRight.call(o88, o171), "%TypedArrayPrototype%.reduceRight called with no initial value causes the first index passed to the callback to be shifted by one");
            o5.o19(-1, o120, "%TypedArrayPrototype%.reduceRight called the callback the correct number of times");

            o5.o72(function() { reduceRight.call(); }, o74, "Calling %TypedArrayPrototype%.reduceRight with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reduceRight.call(undefined); }, o74, "Calling %TypedArrayPrototype%.reduceRight with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reduceRight.call('string'); }, o74, "Calling %TypedArrayPrototype%.reduceRight with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reduceRight.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.reduceRight with no callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o5.o72(function() { reduceRight.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.reduceRight with undefined callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o5.o72(function() { reduceRight.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.reduceRight with non-function callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o5.o72(function() { reduceRight.call(o109(0), o171); }, o74, "%TypedArrayPrototype%.reduceRight throws if array has zero length");
        }
    },
    {
        name: "ArrayBuffer.isView API shape verification",
        o4: function() {
            o5.o16(ArrayBuffer.isView === undefined, "ArrayBuffer.isView !== undefined");
            o5.o19('function', typeof ArrayBuffer.isView, "typeof ArrayBuffer.isView == 'function'");
            o5.o19(1, ArrayBuffer.isView.length, "ArrayBuffer.isView.length == 1");

            var o12 = Object.getOwnPropertyDescriptor(ArrayBuffer, 'isView');

            o5.o6(o12.writable, "ArrayBuffer.isView.writable === true");
            o5.o16(o12.enumerable, "ArrayBuffer.isView.enumerable === false");
            o5.o6(o12.configurable, "ArrayBuffer.isView.configurable === true");
        }
    },
    {
        name: "ArrayBuffer.isView behavior",
        o4: function() {
            // All of the TypedArray prototypes should be ordinary objects and should return false when passed to ArrayBuffer.isView.
            o5.o16(ArrayBuffer.isView(ArrayBuffer.prototype), "ArrayBuffer.isView(ArrayBuffer.prototype) === false");
            o5.o16(ArrayBuffer.isView(DataView.prototype), "ArrayBuffer.isView(DataView.prototype) === false");
            o5.o16(ArrayBuffer.isView(Uint8Array.prototype), "ArrayBuffer.isView(Uint8Array.prototype) === false");
            o5.o16(ArrayBuffer.isView(Uint16Array.prototype), "ArrayBuffer.isView(Uint16Array.prototype) === false");
            o5.o16(ArrayBuffer.isView(Uint32Array.prototype), "ArrayBuffer.isView(Uint32Array.prototype) === false");
            o5.o16(ArrayBuffer.isView(Int8Array.prototype), "ArrayBuffer.isView(Int8Array.prototype) === false");
            o5.o16(ArrayBuffer.isView(Int16Array.prototype), "ArrayBuffer.isView(Int16Array.prototype) === false");
            o5.o16(ArrayBuffer.isView(Int32Array.prototype), "ArrayBuffer.isView(Int32Array.prototype) === false");
            o5.o16(ArrayBuffer.isView(Uint8ClampedArray.prototype), "ArrayBuffer.isView(Uint8ClampedArray.prototype) === false");
            o5.o16(ArrayBuffer.isView(Float32Array.prototype), "ArrayBuffer.isView(Float32Array.prototype) === false");
            o5.o16(ArrayBuffer.isView(Float64Array.prototype), "ArrayBuffer.isView(Float64Array.prototype) === false");

            o5.o6(ArrayBuffer.isView(new DataView(new ArrayBuffer(20))), "ArrayBuffer.isView(new DataView(new ArrayBuffer(20))) === true");
            o5.o6(ArrayBuffer.isView(new Uint8Array(10)), "ArrayBuffer.isView(new Uint8Array(10)) === true");
            o5.o6(ArrayBuffer.isView(new Uint16Array(10)), "ArrayBuffer.isView(new Uint16Array(10)) === true");
            o5.o6(ArrayBuffer.isView(new Uint32Array(10)), "ArrayBuffer.isView(new Uint32Array(10)) === true");
            o5.o6(ArrayBuffer.isView(new Int8Array(10)), "ArrayBuffer.isView(new Int8Array(10)) === true");
            o5.o6(ArrayBuffer.isView(new Int16Array(10)), "ArrayBuffer.isView(new Int16Array(10)) === true");
            o5.o6(ArrayBuffer.isView(new Int32Array(10)), "ArrayBuffer.isView(new Int32Array(10)) === true");
            o5.o6(ArrayBuffer.isView(new Uint8ClampedArray(10)), "ArrayBuffer.isView(new Uint8ClampedArray(10)) === true");
            o5.o6(ArrayBuffer.isView(new Float32Array(10)), "ArrayBuffer.isView(new Float32Array(10)) === true");
            o5.o6(ArrayBuffer.isView(new Float64Array(10)), "ArrayBuffer.isView(new Float64Array(10)) === true");

            o5.o16(ArrayBuffer.isView(undefined), "ArrayBuffer.isView(undefined) === false");
            o5.o16(ArrayBuffer.isView(null), "ArrayBuffer.isView(null) === false");
            o5.o16(ArrayBuffer.isView(), "ArrayBuffer.isView() === false");
            o5.o16(ArrayBuffer.isView(new ArrayBuffer(20)), "ArrayBuffer.isView(new ArrayBuffer(20)) === false");
            o5.o16(ArrayBuffer.isView({buffer:[0,1,2],byteLength:12,byteOffset:0}), "ArrayBuffer.isView({buffer:[0,1,2],byteLength:12,byteOffset:0}) === false");
            o5.o16(ArrayBuffer.isView([1,2,3]), "ArrayBuffer.isView([1,2,3]) === false");
            o5.o16(ArrayBuffer.isView(true), "ArrayBuffer.isView(true) === false");
            o5.o16(ArrayBuffer.isView(false), "ArrayBuffer.isView(false) === false");
            o5.o16(ArrayBuffer.isView(0), "ArrayBuffer.isView(0) === false");
            o5.o16(ArrayBuffer.isView(1), "ArrayBuffer.isView(1) === false");
            o5.o16(ArrayBuffer.isView(1.0), "ArrayBuffer.isView(1.0) === false");
            o5.o16(ArrayBuffer.isView('string'), "ArrayBuffer.isView('string') === false");
            o5.o16(ArrayBuffer.isView({}), "ArrayBuffer.isView({}) === false");
            o5.o16(ArrayBuffer.isView(function() {}), "ArrayBuffer.isView(function() {}) === false");
            o5.o16(ArrayBuffer.isView(new Array(1)), "ArrayBuffer.isView(new Array(1)) === false");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice API shape verification",
        o4: function() {
            o5.o16(ArrayBuffer.prototype.slice === undefined, "ArrayBuffer.prototype.slice !== undefined");
            o5.o19('function', typeof ArrayBuffer.prototype.slice, "typeof ArrayBuffer.prototype.slice == 'function'");
            o5.o19(2, ArrayBuffer.prototype.slice.length, "ArrayBuffer.prototype.slice.length == 2");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with non-ArrayBuffer parameters",
        o4: function() {
            o5.o72(function () { ArrayBuffer.prototype.slice.apply('string'); }, o74, "ArrayBuffer.prototype.slice throws TypeError if this parameter is not an ArrayBuffer", "ArrayBuffer object expected");
            o5.o72(function () { ArrayBuffer.prototype.slice.apply(); }, o74, "ArrayBuffer.prototype.slice throws TypeError if there is no this parameter", "ArrayBuffer object expected");
            o5.o72(function () { ArrayBuffer.prototype.slice.call(); }, o74, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
            o5.o72(function () { ArrayBuffer.prototype.slice.call(undefined); }, o74, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
            o5.o72(function () { ArrayBuffer.prototype.slice(); }, o74, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
            o5.o72(function () { ArrayBuffer.prototype.slice(undefined); }, o74, "ArrayBuffer.prototype.slice throws TypeError if it is called directly", "ArrayBuffer object expected");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with positive start offset",
        o4: function() {
            var o45 = 10;
            var o76 = new ArrayBuffer(o45);
            var o176 = new Uint8Array(o76);

            for (var o90 = 0; o90 < o176.length; o90++)
            {
                o176[o90] = o90 + 1;
            }

            var o177 = o76.slice();
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice() returns the same array elements as the original");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice() returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(0);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(0) returns the same array elements as the original");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(0) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(5);
            var o178 = new Uint8Array(o177);
            o5.o19([6,7,8,9,10], o178, "slice(5) contains the last 5 elements - [6,7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "slice(5) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(9);
            var o178 = new Uint8Array(o177);
            o5.o19([10], o178, "slice(9) contains the last 1 elements - [10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(1, o177.byteLength, "slice(9) returns an ArrayBuffer with byteLength = 1");

            var o177 = o76.slice(10);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "slice(10) contains empty buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(10) returns an ArrayBuffer with byteLength = 0");

            var o177 = o76.slice(15);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "slice(15) contains empty buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(15) returns an ArrayBuffer with byteLength = 0");

            var o177 = o76.slice(100);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "slice(100) contains empty buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(100) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with negative start offset",
        o4: function() {
            var o45 = 10;
            var o76 = new ArrayBuffer(o45);
            var o176 = new Uint8Array(o76);

            for (var o90 = 0; o90 < o176.length; o90++)
            {
                o176[o90] = o90 + 1;
            }

            var o177 = o76.slice(-4);
            var o178 = new Uint8Array(o177);
            o5.o19([7,8,9,10], o178, "slice(-4) returns the last 4 elements - [7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(4, o177.byteLength, "slice(-4) returns an ArrayBuffer with the byteLength = 4");

            var o177 = o76.slice(-5);
            var o178 = new Uint8Array(o177);
            o5.o19([6,7,8,9,10], o178, "slice(-5) contains the last 5 elements - [6,7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "slice(-5) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(-9);
            var o178 = new Uint8Array(o177);
            o5.o19([2,3,4,5,6,7,8,9,10], o178, "slice(-9) contains the last 9 elements - [2,3,4,5,6,7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(9, o177.byteLength, "slice(-9) returns an ArrayBuffer with byteLength = 9");

            var o177 = o76.slice(-10);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(-10) returns ArrayBuffer containing the entire original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(-10) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(-15);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(-15) returns ArrayBuffer containing the entire original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(-15) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(-100);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(-100) returns ArrayBuffer containing the entire original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(-100) returns an ArrayBuffer with the same byteLength as the original");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with positive start offset and positive end offset",
        o4: function() {
            var o45 = 10;
            var o76 = new ArrayBuffer(o45);
            var o176 = new Uint8Array(o76);

            for (var o90 = 0; o90 < o176.length; o90++)
            {
                o176[o90] = o90 + 1;
            }

            var o177 = o76.slice(0, o45);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(0, len) returns all the elements of the original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(0, len) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(0, o45 * 10);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(0, len*10) returns all the elements of the original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(0, len*10) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(0, 5);
            var o178 = new Uint8Array(o177);
            o5.o19([1,2,3,4,5], o178, "slice(0, 5) contains the first 5 elements - [1,2,3,4,5]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "slice(0, 5) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(1, 1);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "slice(1, 1) contains no elements - the empty buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(1, 1) returns an ArrayBuffer with byteLength = 0");

            var o177 = o76.slice(5, 10);
            var o178 = new Uint8Array(o177);
            o5.o19([6,7,8,9,10], o178, "slice(5, 10) returns the last 5 elements - [6,7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "slice(5, 10) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(9, 10);
            var o178 = new Uint8Array(o177);
            o5.o19([10], o178, "slice(9, 10) returns the last element - [10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(1, o177.byteLength, "slice(9, 10) returns an ArrayBuffer with byteLength = 1");

            var o177 = o76.slice(7, 5);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "slice(7, 5) returns empty ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(7, 5) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with mix of positive and negative start offset and end offset",
        o4: function() {
            var o45 = 10;
            var o76 = new ArrayBuffer(o45);
            var o176 = new Uint8Array(o76);

            for (var o90 = 0; o90 < o176.length; o90++)
            {
                o176[o90] = o90 + 1;
            }

            var o177 = o76.slice(5, -2);
            var o178 = new Uint8Array(o177);
            o5.o19([6,7,8], o178, "slice(5, -2) returns elements 5 through (len-2) = [6,7,8]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(3, o177.byteLength, "slice(5, -2) returns an ArrayBuffer with byteLength = 3");

            var o177 = o76.slice(-5, 8);
            var o178 = new Uint8Array(o177);
            o5.o19([6,7,8], o178, "slice(-5, 8) returns elements 5 through 8 = [6,7,8]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(3, o177.byteLength, "slice(-5, 8) returns an ArrayBuffer with byteLength = 3");

            var o177 = o76.slice(-10, o76.byteLength);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(-10, len) returns elements all the elements of the original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(-10, len) returns an ArrayBuffer the same byteLength as the original");

            var o177 = o76.slice(-20, o76.byteLength * 2);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(-20, len*2) returns elements all the elements of the original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(-20, len*2) returns an ArrayBuffer the same byteLength as the original");

            var o177 = o76.slice(-7, -3);
            var o178 = new Uint8Array(o177);
            o5.o19([4,5,6,7], o178, "slice(-7, -3) returns elements 3 through (len-3) = [4,5,6,7]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(4, o177.byteLength, "slice(-7, -3) returns an ArrayBuffer with byteLength = 4");

            var o177 = o76.slice(-3, -7);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "slice(-3, -7) returns empty buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(-3, -7) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "DataView.prototype.buffer API shape",
        o4: function() {
            o5.o6(DataView.prototype.hasOwnProperty('buffer'), "ArrayBuffer.prototype.hasOwnProperty('buffer') == true");

            o12 = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer');

            o5.o6(o12 !== undefined, "Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer') !== undefined");

            o5.o6(o12.get !== undefined, "DataView.prototype.buffer.get !== undefined");
            o5.o6(typeof o12.get === 'function', "typeof DataView.prototype.buffer.get === 'function'");
            o5.o19(0, o12.get.length, "DataView.prototype.buffer.get.length === 0");

            o5.o6(o12.set === undefined, "DataView.prototype.buffer.set === undefined");

            o5.o16(o12.enumerable, "DataView.prototype.buffer.enumerable === false");
            o5.o6(o12.configurable, "DataView.prototype.buffer.configurable === true");
        }
    },
    {
        name: "DataView.prototype.buffer behavior",
        o4: function() {
            var o76 = new ArrayBuffer(10);
            var o179 = new DataView(o76);

            o5.o6(o76 === o179.buffer, "buffer returns the same ArrayBuffer object passed to DataView constructor");

            // Assignment has no effect since view.buffer does not have a setter
            o179.buffer = undefined;
            o5.o6(o76 === o179.buffer, "Assigning to buffer has no effect");

            o12 = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer');

            o5.o72(function () { o12.get(); }, o74, "DataView.prototype.buffer called with no 'this' argument", "'this' is not a DataView object");
            o5.o6(o76 === o12.get.call(o179), "Calling getter directly returns expected buffer");

            o5.o72(function () { o12.get.apply(DataView.prototype) }, o74, "Applying getter with DataView.prototype fails", "'this' is not a DataView object");
            o5.o72(function () { DataView.prototype.buffer; }, o74, "Calling DataView.prototype.buffer fails", "'this' is not a DataView object");

            Object.defineProperty(DataView.prototype, "buffer", {value: 'something'});

            o5.o19('string', typeof DataView.prototype.buffer, "Override DataView.prototype.buffer via Object.defineProperty works");
            o5.o19('something', DataView.prototype.buffer, "Override DataView.prototype.buffer via Object.defineProperty works");
            o5.o19('something', o179.buffer, "Override DataView.prototype.buffer via Object.defineProperty affects instance objects");
        }
    },
    {
        name: "DataView.prototype.byteOffset API shape",
        o4: function() {
            o5.o6(DataView.prototype.hasOwnProperty('byteOffset'), "ArrayBuffer.prototype.hasOwnProperty('byteOffset') == true");

            o12 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset');

            o5.o6(o12 !== undefined, "Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset') !== undefined");

            o5.o6(o12.get !== undefined, "DataView.prototype.byteOffset.get !== undefined");
            o5.o6(typeof o12.get === 'function', "typeof DataView.prototype.byteOffset.get === 'function'");
            o5.o19(0, o12.get.length, "DataView.prototype.byteOffset.get.length === 0");

            o5.o6(o12.set === undefined, "DataView.prototype.byteOffset.set === undefined");

            o5.o16(o12.enumerable, "DataView.prototype.byteOffset.enumerable === false");
            o5.o6(o12.configurable, "DataView.prototype.byteOffset.configurable === true");
        }
    },
    {
        name: "DataView.prototype.byteOffset behavior",
        o4: function() {
            var o76 = new ArrayBuffer(10);
            var o179 = new DataView(o76);

            o5.o19(0, o179.byteOffset, "byteOffset returns the same value passed to DataView constructor");

            // Assignment has no effect since view.byteOffset does not have a setter
            o179.byteOffset = -1;
            o5.o19(0, o179.byteOffset, "Assigning to byteOffset has no effect");

            o12 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset');

            o5.o72(function () { o12.get(); }, o74, "DataView.prototype.byteOffset called with no 'this' argument", "'this' is not a DataView object");
            o5.o19(0, o12.get.call(o179), "Calling getter directly returns expected byteOffset");

            o5.o72(function () { o12.get.apply(DataView.prototype) }, o74, "Applying getter with DataView.prototype fails", "'this' is not a DataView object");
            o5.o72(function () { DataView.prototype.byteOffset; }, o74, "Calling DataView.prototype.byteOffset fails", "'this' is not a DataView object");

            Object.defineProperty(DataView.prototype, "byteOffset", {value: 'something'});

            o5.o19('string', typeof DataView.prototype.byteOffset, "Override DataView.prototype.byteOffset via Object.defineProperty works");
            o5.o19('something', DataView.prototype.byteOffset, "Override DataView.prototype.byteOffset via Object.defineProperty works");
            o5.o19('something', o179.byteOffset, "Override DataView.prototype.byteOffset via Object.defineProperty affects instance objects");
        }
    },
    {
        name: "DataView.prototype.byteLength API shape",
        o4: function() {
            o5.o6(DataView.prototype.hasOwnProperty('byteLength'), "ArrayBuffer.prototype.hasOwnProperty('byteLength') == true");

            o12 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength');

            o5.o6(o12 !== undefined, "Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength') !== undefined");

            o5.o6(o12.get !== undefined, "DataView.prototype.byteLength.get !== undefined");
            o5.o6(typeof o12.get === 'function', "typeof DataView.prototype.byteLength.get === 'function'");
            o5.o19(0, o12.get.length, "DataView.prototype.byteLength.get.length === 0");

            o5.o6(o12.set === undefined, "DataView.prototype.byteLength.set === undefined");

            o5.o16(o12.enumerable, "DataView.prototype.byteLength.enumerable === false");
            o5.o6(o12.configurable, "DataView.prototype.byteLength.configurable === true");
        }
    },
    {
        name: "DataView.prototype.byteLength behavior",
        o4: function() {
            var o76 = new ArrayBuffer(10);
            var o179 = new DataView(o76);

            o5.o19(10, o179.byteLength, "byteLength returns the same value passed to DataView constructor");

            // Assignment has no effect since view.byteLength does not have a setter
            o179.byteLength = -1;
            o5.o19(10, o179.byteLength, "Assigning to byteLength has no effect");

            o12 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength');

            o5.o72(function () { o12.get(); }, o74, "DataView.prototype.byteLength called with no 'this' argument", "'this' is not a DataView object");
            o5.o19(10, o12.get.call(o179), "Calling getter directly returns expected byteLength");

            o5.o72(function () { o12.get.apply(DataView.prototype) }, o74, "Applying getter with DataView.prototype fails", "'this' is not a DataView object");
            o5.o72(function () { DataView.prototype.byteLength; }, o74, "Calling DataView.prototype.byteLength fails", "'this' is not a DataView object");

            Object.defineProperty(DataView.prototype, "byteLength", {value: 'something'});

            o5.o19('string', typeof DataView.prototype.byteLength, "Override DataView.prototype.byteLength via Object.defineProperty works");
            o5.o19('something', DataView.prototype.byteLength, "Override DataView.prototype.byteLength via Object.defineProperty works");
            o5.o19('something', o179.byteLength, "Override DataView.prototype.byteLength via Object.defineProperty affects instance objects");
        }
    },
    {
        name: "BLUE: 519650, 519651, 519652 - ArrayBuffer.prototype.slice behavior with undefined or infinite arguments",
        o4: function() {
            var o45 = 5;
            var o76 = new ArrayBuffer(o45);
            var o176 = new Uint8ClampedArray(o76);

            for (var o90 = 0; o90 < o176.length; o90++)
            {
                o176[o90] = o90 + 1;
            }

            var o177 = o76.slice(3, undefined);
            var o178 = new Uint8Array(o177);
            o5.o19([4,5], o178, "slice(3, undefined) returns elements 3 through len-1 = [4,5]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(2, o177.byteLength, "slice(3, undefined) returns an ArrayBuffer with byteLength = 2");

            var o177 = o76.slice(Number.o181, 3);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "buf.slice(Number.POSITIVE_INFINITY, 3) returns elements an empty ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "buf.slice(Number.POSITIVE_INFINITY, 3) returns an ArrayBuffer with byteLength = 0");

            var o177 = o76.slice(2, Number.o181);
            var o178 = new Uint8Array(o177);
            o5.o19([3,4,5], o178, "buf.slice(2, Number.POSITIVE_INFINITY) returns elements 2 through len-1 = [3,4,5]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(3, o177.byteLength, "buf.slice(2, Number.POSITIVE_INFINITY) returns an ArrayBuffer with byteLength = 3");

            var o177 = o76.slice(NaN);
            var o178 = new Uint8Array(o177);
            o5.o19([1,2,3,4,5], o178, "buf.slice(NaN) returns the same elements as the original ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "buf.slice(NaN) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(Number.NEGATIVE_INFINITY);
            var o178 = new Uint8Array(o177);
            o5.o19([1,2,3,4,5], o178, "buf.slice(Number.NEGATIVE_INFINITY) returns the same elements as the original ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "buf.slice(Number.NEGATIVE_INFINITY) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(o45-1,o45);
            var o178 = new Uint8Array(o177);
            o5.o19([5], o178, "buf.slice(len-1,len) returns the last element from the original ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(1, o177.byteLength, "buf.slice(len-1,len) returns an ArrayBuffer with byteLength = 1");

            var o177 = o76.slice(o45,o45);
            var o178 = new Uint8Array(o177);
            o5.o19([], o178, "buf.slice(len,len) returns an empty ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "buf.slice(len,len) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        name: "ArrayBuffer.prototype.byteLength API shape",
        o4: function() {
            o5.o6(ArrayBuffer.prototype.hasOwnProperty('byteLength'), "ArrayBuffer.prototype.hasOwnProperty('byteLength') == true");

            var o12 = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

            o5.o6(o12 !== undefined, "Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength') !== undefined");

            o5.o6(o12.get !== undefined, "ArrayBuffer.prototype.byteLength.get !== undefined");
            o5.o6(typeof o12.get === 'function', "typeof ArrayBuffer.prototype.byteLength.get === 'function'");
            o5.o19(0, o12.get.length, "ArrayBuffer.prototype.byteLength.get.length === 0");

            o5.o6(o12.set === undefined, "ArrayBuffer.prototype.byteLength.set === undefined");

            o5.o16(o12.enumerable, "ArrayBuffer.prototype.byteLength.enumerable === false");
            o5.o6(o12.configurable, "ArrayBuffer.prototype.byteLength.configurable === true");
        }
    },
    {
        name: "ArrayBuffer.prototype.byteLength behavior",
        o4: function() {
            var o76 = new ArrayBuffer(10);

            o5.o19(10, o76.byteLength, "byteLength returns the same value passed to ArrayBuffer constructor");

            // Assignment has no effect since buf.byteLength does not have a setter
            o76.byteLength = -1;
            o5.o19(10, o76.byteLength, "Assigning to byteLength has no effect");

            var o12 = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

            o5.o72(function () { o12.get(); }, o74, "ArrayBuffer.prototype.byteLength called with no 'this' argument", "ArrayBuffer object expected");
            o5.o19(10, o12.get.call(o76), "Calling getter directly returns expected byteLength");

            o5.o72(function () { o12.get.apply(ArrayBuffer.prototype) }, o74, "Applying getter with ArrayBuffer.prototype fails", "ArrayBuffer object expected");
            o5.o72(function () { ArrayBuffer.prototype.byteLength; }, o74, "Calling ArrayBuffer.prototype.byteLength fails", "ArrayBuffer object expected");

            Object.defineProperty(ArrayBuffer.prototype, "byteLength", {value: 'something'});

            o5.o19('string', typeof ArrayBuffer.prototype.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty works");
            o5.o19('something', ArrayBuffer.prototype.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty works");
            o5.o19('something', o76.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty affects instance objects");

            Object.defineProperty(ArrayBuffer.prototype, "byteLength", {get: o12.get});
        }
    },
    {
        name: "BLUE: 614563 - %TypedArray%.prototype.subarray should use 0 as the default value for the begin argument",
        o4: function() {
            var o124 = new Uint8Array(10);

            for (var o90 = 0; o90 < o124.length; o90++) {
                o124[o90] = o90;
            }

            o5.o19([0,1,2,3,4,5,6,7,8,9], o124.subarray(), "Subarray with no begin or end offsets uses 0 and length as respective default values");
        }
    },
    {
        name: "%TypedArray%.prototype.subarray tests on constructor access through [@@species] - special cases",
        o4: function() {
            var o124 = new Uint8Array(10);

            o124.constructor = undefined;
            o5.o128(function () { o124.subarray(); }, "With [@@species] defined, calling %TypedArray%.prototype.subarray does not throw TypeError even when constructor property is undefined");

            o124.constructor = null;
            o5.o72(function () { o124.subarray(); }, o74, "Calling %TypedArray%.prototype.subarray throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o124.constructor = 'some string';
            o5.o72(function () { o124.subarray(); }, o74, "Calling %TypedArray%.prototype.subarray throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o124.constructor = Math.sin;
            o5.o128(function () { o124.subarray(); }, "Calling %TypedArray%.prototype.subarray uses default typed array constructor when constructor property is not a constructor");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice tests on constructor access through [@@species]",
        o4: function() {
            var o124 = new ArrayBuffer(10);
            o124.constructor = Array;

            o5.o72(function () { o124.slice(); }, o74, "Calling ArrayBuffer.prototype.slice throws TypeError when constructor function returns non-ArrayBuffer object", "ArrayBuffer object expected");

            o124.constructor = function(o184) { return o124; }

            o5.o185(o124, o124.slice(), "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o124.constructor = function(o184) { return new ArrayBuffer(5); }

            o5.o128(function () { o124.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o124.constructor = function(o184) { return new ArrayBuffer(o184); }
            var o186 = o124.slice();

            o5.o19(10, o186.byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o124.constructor = function(o184) { return new ArrayBuffer(20); }
            var o186 = o124.slice();

            o5.o19(10, o186.byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice tests on constructor access through [@@species] - special cases",
        o4: function() {
            var o124 = new ArrayBuffer(10);

            o124.constructor = undefined;
            o5.o128(function () { o124.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
            o5.o19(10, o124.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");

            o124.constructor = null;
            o5.o72(function () { o124.slice(); }, o74, "Calling ArrayBuffer.prototype.slice throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o124.constructor = 'some string';
            o5.o72(function () { o124.slice(); }, o74, "Calling ArrayBuffer.prototype.slice throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o124.constructor = Math.sin;
            o5.o128(function () { o124.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
            o5.o19(10, o124.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property");
        }
    },
    {
        name: "Test of speciesConstructor codepaths accessing [@@species] through ArrayBuffer.prototype.slice",
        o4: function() {
            var o124 = new ArrayBuffer(10);

            o124.constructor = function() {};
            o124.constructor[Symbol.species] = undefined;
            o5.o128(function () { o124.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");
            o5.o19(10, o124.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");

            o124.constructor[Symbol.species] = null;
            o5.o128(function () { o124.slice(); }, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");
            o5.o19(10, o124.slice().byteLength, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined");

            o124.constructor[Symbol.species] = {};
            o5.o72(function () { o124.slice(); }, o74, "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has [@@species] == undefined", "Function 'constructor[Symbol.species]' is not a constructor");
        }
    },
    {
        name: "TypedArray constructors cannot be called without new keyword",
        o4: function() {
            o5.o72(function() { Int8Array(64); }, o74, "Calling Int8Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Uint8Array(64); }, o74, "Calling Uint8Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Uint8ClampedArray(64); }, o74, "Calling Uint8ClampedArray() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Int16Array(64); }, o74, "Calling Int16Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Uint16Array(64); }, o74, "Calling Uint16Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Int32Array(64); }, o74, "Calling Int32Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Uint32Array(64); }, o74, "Calling Uint32Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Float32Array(64); }, o74, "Calling Float32Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");
            o5.o72(function() { Float64Array(64); }, o74, "Calling Float64Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword");

            o5.o72(function() { ArrayBuffer(64); }, o74, "Calling ArrayBuffer() without new keyword throws TypeError", "ArrayBuffer: cannot be called without the new keyword");
            o5.o72(function() { DataView(64); }, o74, "Calling DataView() without new keyword throws TypeError", "DataView: cannot be called without the new keyword");
        }
    },
];

o188.o189(o2, { o190: o0.o191[0] != "summary" });
