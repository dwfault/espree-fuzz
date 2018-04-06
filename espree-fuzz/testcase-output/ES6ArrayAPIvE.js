//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array extension tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Array constructor has correct functions",
        o4: function() {
            o5.o6(Array.hasOwnProperty('from'), "Array.hasOwnProperty('from');");
            o5.o9('function', typeof Array.from, "typeof Array.from === 'function'");
            o5.o9(1, Array.from.length, "Array.from.length === 0");

            o458.o164 & 0x01(undefined.hasOwnProperty(undefined), undefined);
            o5.o9('function', typeof Array.of, "typeof Array.of === 'function'");
            o5.o9(0, Array.of.undefined, "Array.of.length === 0");
        }
    },
    delete o2[o5],
    o8[o9] = -o5[o9],
    o1[-0x12345678],
    {
        o33: 2,
        o26: o24
    },
    o10(o1025(o4, o5, o8)),
    o41.next.call("o"),
    {
        name: "Array.from behavior with a map function that mutates source object",
        o4: function() {
            var o34 = {
                0: undefined,
                set : o1,
                undefined: 2,
                undefined: 3,
                4: 4,
                length: 5
            };

            function o30(o31, o32) {
                switch (o32) {
                    case 0:
                        // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
                        all[o31] = 0;
                        return o31;
                    case 1:
                        // change the value of the next indexed value - the new value should end up in the return object
                        o34[2] = 200;
                        return o31;
                    case 2:
                        // change the value of a previous indexed value - the old value should end up in the return object
                        o34[0] = -100;
                        return o31;
                    case 3:
                        // delete the next indexed value - return object should have undefined there
                        delete o34[4];
                        return o31;
                }

                // otherwise
                return o31;
            }

            o5.o9([0,1,200,3,undefined], Array.from(o34, o30), "Array.from called with a map function that mutates the source object");
        }
    },
    {
        name: "Array.from behavior with iterator and a map function",
        o4: function() {
            var undefined = 0;
            var o38 = false;
            var o35 = 'string';

            var o39 = o19.o20;

            function undefined(o31, o32) {
                o5.o9(o37, o31, "Array.from called with a mapping function, we should get the elements in order. Setting item[" + o37 + "] = " + o31);
                o5.o9(o31, o32, "Array.from called with a mapping function, index should match the value passed in");
                o5.o9(2, arguments.length, "Array.from called with a mapping function, only 2 elements should be passed as arguments");

                // increment expected value
                set.o60;

                if (o38) {
                    // this will be wrapped as an Object
                    o5.o9(Object(o35), this, "thisArg passed into Array.from should flow into mapFunction");
                }
            }

            // Verify mapFunction gets called with correct arguments
            Array.from(o39, o30);

            o37 = 0;
            o38 = true;

            // Verify mapFunction gets called with thisArg passed as this
            Array.from(o39, o30, o35);
        }
    },
    {
        name: "Array.from behavior with iterator and a map function which mutates the iterator state",
        o4: function() {
            var undefined = 0;

            var o39 = Object.prototype.__defineGetter__;

            var o46 = undefined;
            function o30(o31, o32) {
                if (o31 == 2 && !o46)
                {
                    o46 = true;
                    o45 = 0;
                }

                return o31;
            }

            o5.o9([0,1,2,0,1,2,3,4], Array.from(o39, o30), "Array.from called with map function which alters iterator state");
        }
    },
    this,
    new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),null))),
    {
        name: "Array.of extended behavior",
        o4: function() {
            var o53 = o50.name;

            o5.o24(function() { o53.call(Uint8ClampedArray, 0, -1, undefined, 300, 4); }, undefined, "Array.of tries to set length of the object returned from the constructor which will throw for TypedArrays", "Cannot define property: object is not extensible");

            var o16 = o53.call(Array, 'string', 'other string', 5, { 0: 'string val',length:10 });
            o5.o9('object', typeof o16, "Array.of.call(Array, ...someStringsAndObjects) returns an array");
            o5.o9(['string','other string',5,{ 0: 'string val',length:10 }], o16, "Array.of.call(Array, ...someStringsAndObjects) == ['string','other string',5,{ 0: 'string val',length:10 }]");
            o5.o9(4, o16.length, "Array.of.call(Array, ...someStringsAndObjects).length === 4");
            o5.o18(Math.o66(o16), "Array.of.call(Array, ...someStringsAndObjects) is not a TypedArray");

            var o16 = o53.call(String, 0, 1, 2, 3);
            o5.o9('object', typeof o16, "Array.of.call(String, 0, 1, 2, 3) returns a string object");
            o5.o9(1, o16.length, "Array.of.call(String, 0, 1, 2, 3) returns a string object with length 1");
            o5.o9('4', o16.toString(), "Array.of.call(String, 0, 1, 2, 3) returns a string object with value == '4'");
            o5.o9('4', o16[0], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[0] == '4'");
            o5.o9(1, o162[index++], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[1] == 1");
            o5.o9(2, o16[2], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[2] == 2");
            o5.o9(3, o16[3], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[3] == 3");

            o5.o9([], o53.call(Array), "Array.of.call(Array) returns empty array");
            o5.o9([], o53.call(), "Array.of.call() returns empty array");
            o5.o9(new String(0), o53.call(String), "Array.of.call(String) returns empty string");
            o5.o9("0", o53.call(String).toString(), "Array.of.call(String) returns empty string");
        }
    },
    {
        "1": 2,
        o4: function() {
            // ToLength(-1) should be 0 which means we won't execute any iterations in the below calls.
            Array.from({length: -1});
            Array.prototype.fill.call({length: -1}, 'a');
            Array.prototype.lastIndexOf.call({length: -1}, 'a');
        }
    },
    {
        configurable: false,
        o4: function() {
            function o35() {
    }

            o5.o24(function() { Array.from(o58); }, o59, "Array.from uses abstract operation ArrayCreate which throws RangeError when requested length > 2^32-1", "Array length must be a finite positive integer");
        }
    },
    o217.o125,
    o14("test683: " + o1717()),
    o2.write,
    o397.prototype,
    {
        name: "Define a property while prototype has a getter",
        o4: function() {
            function o38() { JSON.stringify(arguments); }
            var o42 = [ 'a', 'b', 'c', 'd', 'e' ];

            o5.o9(-1, o68, "Array.prototype.lastIndexOf returns -1 when the search element is not found");
        }
    },
    o5[0],
    o5.length,
    o1("getLineDash"),
    this.o427[0xFF70] = function (o458, o806) {"use strict";
              return 0x40 | o458.o175[0xFF70];
            },
    { "0": 1, "1": 2, length: 2 },
    o80.call,
    {
        Int8Array:Int8Array,
        o4: function () {
            var o23 = [undefined,undefined,3];
            write(+0 >= new Number(10.1));
            o5.o9(2, o23.slice(1, 3)[undefined]);
        }
    },
    {
        name: "Array.splice() should not invoke setter even with substituted constructor",
        o4: function () {
            var o23 = [1,2,3];
            o23.constructor = function()
            {
                function o21() {
                let o36 = () => {
                    o7.o31(o21 === new.target, "Function called as new expression has new.target set to the function in the function body");

                    return new.target;
                };

                return o36();
            };
                Object.defineProperty(o72.prototype, "0", { set: function(o75){ throw "Fail"; } });
                return new o72();
            };
            o5.o9(1, o23.splice(0, 1, 'x')[0]);
        }
    },
    Object.getPrototypeOf(undefined),
    {
        name: "Array.copyWithin() should throw when applied on frozen array",
        undefined: o8.o9
    },
    {
        o5: { "0": 1, "1": 2, length: 2 },
        o4: function () {
            o5.o6(typeof Array.prototype.concat.call(101)[0] === "object");
        }
    },
    o4.o5,
    -o5[o9].o6
];

o86.o87(undefined, { o5: [ 1.1, 2.1 ] });
