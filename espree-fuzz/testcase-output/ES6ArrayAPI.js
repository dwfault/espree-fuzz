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

            o5.o6(Array.hasOwnProperty('of'), "Array.hasOwnProperty('of');");
            o5.o9('function', typeof Array.of, "typeof Array.of === 'function'");
            o5.o9(0, Array.of.length, "Array.of.length === 0");
        }
    },
    {
        name: "[0].indexOf(-0.0) should return 0",
        o4: function() {
            o5.o9(0, [0].indexOf(-0.0), "[0].indexOf(-0.0) should return 0");
        }
    },
    {
        name: "Array.from basic behavior",
        o4: function() {
            o5.o9([], Array.from([]), "Array.from simplest usage is copying empty array");

            o5.o9([], Array.from([], undefined), "Array.from disables mapping function when the param is explicitly passed as undefined");

            o5.o9([0,1,2,3], Array.from([0,1,2,3]), "Array.from basic behavior with an iterable object");
            o5.o9([0,1,2,3], Array.from({ 0: 0, 1: 1, 2: 2, 3: 3, length: 4 }), "Array.from basic behavior with an object with length but no iterator");
        }
    },
    {
        name: "Array.from special behaviors",
        o4: function() {
            var o15 = Array.from;

            var o16 = o15.call(Array, "string");
            o5.o9('object', typeof o16, "Array.from.call(Array, 'string') returns an array");
            o5.o9(['s','t','r','i','n','g'], o16, "Array.from.call(Array, 'string') == ['s','t','r','i','n','g']");
            o5.o9(6, o16.length, "Array.from.call(Array, 'string').length === 6");
            o5.o18(ArrayBuffer.isView(o16), "Array.from.call(Array, 'string') is not a TypedArray");

            var o16 = o15.call(String, [0,1,2,3]);
            o5.o9('object', typeof o16, "Array.from.call(String, [0,1,2,3]) returns a String object");
            o5.o9('', o16.toString(), "Array.from.call(String, [0,1,2,3]).toString() == '4'");
            o5.o9(0, o16.length, "Array.from.call(String, [0,1,2,3]).length === 1");
            o5.o18(ArrayBuffer.isView(o16), "Array.from.call(String, [0,1,2,3]) is not a TypedArray");
            o5.o9(0, o16[0], "Integer-indexed properties are still added to the string");
            o5.o9(1, o16[1], "Integer-indexed properties are still added to the string");
            o5.o9(2, o16[2], "Integer-indexed properties are still added to the string");
            o5.o9(3, o16[3], "Integer-indexed properties are still added to the string");

            var o23 = { 0: 0, 1: 1, 2: 2, 3: 3, length: 4 };
            var o16 = o15.call(String, o23);
            o5.o9('object', typeof o16, "Array.from.call(String, objectLikeArray) returns a String object");
            o5.o9('4', o16.toString(), "Array.from.call(String, objectLikeArray).toString() == '4'");
            o5.o9(1, o16.length, "Array.from.call(String, objectLikeArray).length === 1");
            o5.o18(ArrayBuffer.isView(o16), "Array.from.call(String, objectLikeArray) is not a TypedArray");
            o5.o9(1, o16[1], "Integer-indexed properties are still added to the string");
            o5.o9(2, o16[2], "Integer-indexed properties are still added to the string");
            o5.o9(3, o16[3], "Integer-indexed properties are still added to the string");
            o5.o9('4', o16[0], "Zero-th property of the string is set to the string value, can't overwrite this via put");

            o5.o24(function() { o15.call(Uint8Array, { 0: 0, 1: 1, 2: 2, length: 5 }); }, o26, "Array.from tries to set length of the object returned from the constructor which will throw for TypedArrays", "Cannot define property: object is not extensible");

            var o23 = { 0: 0, 1: 1, 3: 3, length: 5 };
            var o16 = o15.call(Array, o23);
            o5.o9('object', typeof o16, "Array.from.call(Array, objectWithLengthProperty) returns an object");
            o5.o9('0,1,,3,', o16.toString(), "Array.from.call(String, [0,1,2,3]).toString() == '4'");
            o5.o9(5, o16.length, "Array.from.call(Array, objectWithLengthProperty) returns a new array with length = a.length");
            o5.o18(ArrayBuffer.isView(o16), "Array.from.call(Array, objectWithLengthProperty) is not a TypedArray (ArrayBuffer.isView)");
            o5.o9([0,1,undefined,3,undefined], o16, "Array.from.call(Array, objectWithLengthProperty) has missing values set to undefined");

            var o23 = { 0: 0, 1: 1 };
            var o16 = o15.call(Array, o23);
            o5.o9('object', typeof o16, "Array.from.call(Array, objectWithLengthNoProperty) returns an object");
            o5.o9(0, o16.length, "Array.from.call(Array, objectWithLengthNoProperty) returns a new array with length = 0");
            o5.o18(ArrayBuffer.isView(o16), "Array.from.call(Array, objectWithLengthNoProperty) is not a TypedArray (ArrayBuffer.isView)");
            o5.o9([], o16, "Array.from.call(Array, objectWithLengthNoProperty) is an empty array");

            o5.o9([0,1,2], o15.call(undefined, [0,1,2]), "Calling Array.from with undefined this argument produces an array");
            o5.o9([0,1,2], o15.call(null, [0,1,2]), "Calling Array.from with null this argument produces an array");
            o5.o9([0,1,2], o15.call({}, [0,1,2]), "Calling Array.from with a non-function this argument produces an array");
            o5.o9([0,1,2], o15.call(Math.sin, [0,1,2]), "Calling Array.from with a non-constructor function this argument produces an array");
        }
    },
    {
        name: "Array.from error conditions",
        o4: function() {
            o5.o24(function () { Array.from(); }, o26, "Calling Array.from with non-object items argument throws TypeError", "Array.from: argument is not an Object");
            o5.o24(function () { Array.from(undefined); }, o26, "Calling Array.from with non-object items argument throws TypeError", "Array.from: argument is not an Object");
            o5.o24(function () { Array.from(null); }, o26, "Calling Array.from with non-object items argument throws TypeError", "Array.from: argument is not an Object");
            o5.o24(function () { Array.from({}, null); }, o26, "Calling Array.from with non-object mapFn argument throws TypeError", "Array.from: argument is not a Function object");
            o5.o24(function () { Array.from({}, 'string'); }, o26, "Calling Array.from with non-object mapFn argument throws TypeError", "Array.from: argument is not a Function object");
            o5.o24(function () { Array.from({}, {}); }, o26, "Calling Array.from with non-function mapFn argument throws TypeError", "Array.from: argument is not a Function object");
        }
    },
    {
        name: "Array.from behavior with a map function",
        o4: function() {
            var o29 = 0;

            function o30(o31, o32) {
                o5.o9(o29, o32, "Array.from called with a mapping function, we should get the elements in order. Setting item[" + o32 + "] = " + o31);
                o5.o9(o31, o32, "Array.from called with a mapping function, Value and index should be same for this test");
                o5.o9(2, arguments.length, "Array.from called with a mapping function, only 2 elements should be passed as arguments");
                // increment expected index
                o29++;
            }

            var o34 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with correct arguments
            Array.from(o34, o30);
        }
    },
    {
        name: "Array.from behavior with a map function passing this argument",
        o4: function() {
            var o35 = 'thisArg';

            function o30(o31, o32) {
                // this will be wrapped as an Object
                o5.o9(Object(o35), this, "thisArg passed into Array.from should flow into mapFunction");
            }

            var o34 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with thisArg passed as this
            Array.from(o34, o30, o35);
        }
    },
    {
        name: "Array.from behavior with a map function that mutates source object",
        o4: function() {
            var o34 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                length: 5
            };

            function o30(o31, o32) {
                switch (o32) {
                    case 0:
                        // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
                        o34.length = 0;
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
            var o37 = 0;
            var o38 = false;
            var o35 = 'string';

            var o39 = {
                [Symbol.iterator]: function() {
                    return {
                        o29: 0,
                        next: function () {
                            return {
                                done: this.o29 == 5,
                                value: this.o29++
                            };
                        }
                    };
                }
            };

            function o30(o31, o32) {
                o5.o9(o37, o31, "Array.from called with a mapping function, we should get the elements in order. Setting item[" + o37 + "] = " + o31);
                o5.o9(o31, o32, "Array.from called with a mapping function, index should match the value passed in");
                o5.o9(2, arguments.length, "Array.from called with a mapping function, only 2 elements should be passed as arguments");

                // increment expected value
                o37++;

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
            var o45 = 0;

            var o39 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () {
                            return {
                                done: o45 == 5,
                                value: o45++
                            };
                        }
                    };
                }
            };

            var o46 = false;
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
    {
        name: "Array.from behavior with badly formed iterator objects",
        o4: function() {
            var o47 = { [Symbol.iterator]: 'a string' };
            var o48 = { [Symbol.iterator]: function() { return undefined; } };
            var o49 = { [Symbol.iterator]: function() { return { next: undefined }; } };
            var o50 = { [Symbol.iterator]: function() { return { next: function() { return undefined; } }; } };

            o5.o24(function() { Array.from(o47); }, o26, "obj[@@iterator] must be a function", "Function expected");
            o5.o24(function() { Array.from(o48); }, o26, "obj[@@iterator] must return an object", "Object expected");
            o5.o24(function() { Array.from(o49); }, o26, "obj[@@iterator].next must be a function", "Function expected");
            o5.o24(function() { Array.from(o50); }, o26, "obj[@@iterator].next must return an object", "Object expected");

            var o51 = { 0: "a", 1: "b", length: 2, [Symbol.iterator]: undefined };
            var o52 = { 0: "a", 1: "b", length: 2, [Symbol.iterator]: null };

            o5.o9([ "a", "b" ], Array.from(o51), "'@@iterator: undefined' is ignored");
            o5.o9([ "a", "b" ], Array.from(o52), "'@@iterator: null' is ignored");
        }
    },
    {
        name: "Array.of basic behavior",
        o4: function() {
            o5.o9([], Array.of(), "Array.of basic behavior with no arguments");
            o5.o9([3], Array.of(3), "Array.of basic behavior with a single argument");
            o5.o9([0,1,2,3], Array.of(0, 1, 2, 3), "Array.of basic behavior with a list of arguments");
        }
    },
    {
        name: "Array.of extended behavior",
        o4: function() {
            var o53 = Array.of;

            o5.o24(function() { o53.call(Uint8ClampedArray, 0, -1, 2, 300, 4); }, o26, "Array.of tries to set length of the object returned from the constructor which will throw for TypedArrays", "Cannot define property: object is not extensible");

            var o16 = o53.call(Array, 'string', 'other string', 5, { 0: 'string val',length:10 });
            o5.o9('object', typeof o16, "Array.of.call(Array, ...someStringsAndObjects) returns an array");
            o5.o9(['string','other string',5,{ 0: 'string val',length:10 }], o16, "Array.of.call(Array, ...someStringsAndObjects) == ['string','other string',5,{ 0: 'string val',length:10 }]");
            o5.o9(4, o16.length, "Array.of.call(Array, ...someStringsAndObjects).length === 4");
            o5.o18(ArrayBuffer.isView(o16), "Array.of.call(Array, ...someStringsAndObjects) is not a TypedArray");

            var o16 = o53.call(String, 0, 1, 2, 3);
            o5.o9('object', typeof o16, "Array.of.call(String, 0, 1, 2, 3) returns a string object");
            o5.o9(1, o16.length, "Array.of.call(String, 0, 1, 2, 3) returns a string object with length 1");
            o5.o9('4', o16.toString(), "Array.of.call(String, 0, 1, 2, 3) returns a string object with value == '4'");
            o5.o9('4', o16[0], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[0] == '4'");
            o5.o9(1, o16[1], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[1] == 1");
            o5.o9(2, o16[2], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[2] == 2");
            o5.o9(3, o16[3], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[3] == 3");

            o5.o9([], o53.call(Array), "Array.of.call(Array) returns empty array");
            o5.o9([], o53.call(), "Array.of.call() returns empty array");
            o5.o9(new String(0), o53.call(String), "Array.of.call(String) returns empty string");
            o5.o9("0", o53.call(String).toString(), "Array.of.call(String) returns empty string");
        }
    },
    {
        name: "OS:840217 - Array.from, Array#fill, Array#lastIndexOf should use ToLength instead of ToUint32 on their parameter's length property",
        o4: function() {
            // ToLength(-1) should be 0 which means we won't execute any iterations in the below calls.
            Array.from({length: -1});
            Array.prototype.fill.call({length: -1}, 'a');
            Array.prototype.lastIndexOf.call({length: -1}, 'a');
        }
    },
    {
        name: "Array.from called with an items object that has length > 2^32-1 and is not iterable",
        o4: function() {
            var o58 = {length: 4294967301};

            o5.o24(function() { Array.from(o58); }, o59, "Array.from uses abstract operation ArrayCreate which throws RangeError when requested length > 2^32-1", "Array length must be a finite positive integer");
        }
    },
    {
        name: "Array.from doesn't get @@iterator twice",
        o4: function () {
            let o60 = 0;
            Array.from({
                get [Symbol.iterator]() {
                    o60++;
                    return [][Symbol.iterator];
                }
            });
            o5.o9(o60, 1, "Array.from calls @@iterator getter once");

            o60 = 0;
            Array.from(new Proxy({}, {
                get(target, o64) {
                    if (o64 === Symbol.iterator) {
                        o60++;
                        return [][Symbol.iterator];
                    }
                    return Reflect.get(target, o64);
                }
            }));
            o5.o9(o60, 1, "Array.from calls proxy's getter with @@iterator as parameter only once");
        }
    },
    {
        name: "Array#fill called with an object that has length > 2^32-1",
        o4: function() {
            var o66 = {length: 4294967301, 4294967297: 1234};
            Array.prototype.fill.call(o66, 5678, 4294967298, 4294967300);

            o5.o9(1234, o66[4294967297], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 does not fill elements outside the request range");
            o5.o9(5678, o66[4294967298], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 is able to fill elements with indices > 2^32");
            o5.o9(5678, o66[4294967299], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 is able to fill elements with indices > 2^32");
            o5.o9(undefined, o66[4294967300], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 does not fill elements outside the request range");

            var o66 = {length: 4294967301, 4294967292: 1234};
            Array.prototype.fill.call(o66, 5678, 4294967293, 4294967300);

            o5.o9(1234, o66[4294967292], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 does not fill elements outside the request range");
            o5.o9(5678, o66[4294967293], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            o5.o9(5678, o66[4294967294], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            o5.o9(5678, o66[4294967295], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            o5.o9(5678, o66[4294967299], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            o5.o9(undefined, o66[4294967300], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 does not fill elements outside the request range");
        }
    },
    {
        name: "Array#lastIndexOf called with an object that has length > 2^32-1",
        o4: function() {
            var o66 = {length: 4294967301, 4294967291: 1234, 4294967294: 5678, 4294967295: 5678, 4294967296: 5678, 4294967297: 9};

            o5.o9(4294967291, Array.prototype.lastIndexOf.call(o66, 1234, 4294967300), "Array.prototype.lastIndexOf called on an object with length > 2^32 and a fromIndex also > 2^32 finds the element when expected index is < 2^32");
            o5.o9(4294967296, Array.prototype.lastIndexOf.call(o66, 5678, 4294967300), "Array.prototype.lastIndexOf called on an object with length > 2^32 and a fromIndex also > 2^32 finds the element when expected index is > 2^32");

            var o66 = [1,2,3,4];

            o5.o9(0, Array.prototype.lastIndexOf.call(o66, 1, 4294967296), "Array.prototype.lastIndexOf is able to find the element when it exists at index 0 when fromIndex > 2^32");
            o5.o9(0, Array.prototype.lastIndexOf.call(o66, 1), "Array.prototype.lastIndexOf is able to find the element when it exists at index 0 when fromIndex not defined");
        }
    },
    {
        name: "Array#copyWithin called with an object that has length > 2^32-1 and parameters also > 2^32-1",
        o4: function() {
            var o66 = {length: 4294967301, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294};
            Array.prototype.copyWithin.call(o66, 5, 4294967292, 4294967294);

            o5.o9(4294967292, o66[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely < 2^32");
            o5.o9(4294967293, o66[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely < 2^32");

            var o66 = {length: 4294967304, 4294967300: 4294967300, 4294967301: 4294967301, 4294967302: 4294967302, 4294967303: 4294967303};
            Array.prototype.copyWithin.call(o66, 4294967297, 4294967300, 4294967303);

            o5.o9(4294967300, o66[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");
            o5.o9(4294967301, o66[4294967298], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");
            o5.o9(4294967302, o66[4294967299], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");

            var o66 = {length: 4294967301, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299};
            Array.prototype.copyWithin.call(o66, 5, 4294967297, 4294967300);

            o5.o9(4294967297, o66[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");
            o5.o9(4294967298, o66[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");
            o5.o9(4294967299, o66[7], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");

            var o66 = {length: 4294967301, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4};
            Array.prototype.copyWithin.call(o66, 4294967297, 0, 5);

            o5.o9(0, o66[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
            o5.o9(1, o66[4294967298], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
            o5.o9(2, o66[4294967299], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
            o5.o9(3, o66[4294967300], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");

            var o66 = {length: 4294967301, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294, 4294967295: 4294967295, 4294967296: 4294967296, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299, 4294967300: 4294967300};
            Array.prototype.copyWithin.call(o66, 5, 4294967292, 4294967301);

            o5.o9(4294967292, o66[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967293, o66[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967294, o66[7], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967295, o66[8], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967296, o66[9], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967297, o66[10], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967298, o66[11], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967299, o66[12], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            o5.o9(4294967300, o66[13], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");

            var o66 = {length: 4294967400, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294, 4294967295: 4294967295, 4294967296: 4294967296, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299, 4294967300: 4294967300};
            Array.prototype.copyWithin.call(o66, 4294967350, 4294967292, 4294967301);

            o5.o9(4294967292, o66[4294967350], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967293, o66[4294967351], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967294, o66[4294967352], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967295, o66[4294967353], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967296, o66[4294967354], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967297, o66[4294967355], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967298, o66[4294967356], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967299, o66[4294967357], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            o5.o9(4294967300, o66[4294967358], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");

            var o66 = {length: 4294967301, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4};
            Array.prototype.copyWithin.call(o66, 4294967293, 0, 5);

            o5.o9(0, o66[4294967293], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            o5.o9(1, o66[4294967294], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            o5.o9(2, o66[4294967295], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            o5.o9(3, o66[4294967296], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            o5.o9(4, o66[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");

            var o66 = {length: 4294967420, 4294967400: 4294967400, 4294967401: 4294967401, 4294967402: 4294967402, 4294967403: 4294967403, 4294967404: 4294967404};
            Array.prototype.copyWithin.call(o66, 4294967293, 4294967400, 4294967405);

            o5.o9(4294967400, o66[4294967293], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            o5.o9(4294967401, o66[4294967294], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            o5.o9(4294967402, o66[4294967295], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            o5.o9(4294967403, o66[4294967296], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            o5.o9(4294967404, o66[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
        }
    },
    {
        name: "Array#lastIndexOf called with a fromIndex < 0 && abs(fromIndex) > length (OS #1185913)",
        o4: function() {
            var o23 = [0, 1];
            var o68 = o23.lastIndexOf(0, -3);

            o5.o9(-1, o68, "Array.prototype.lastIndexOf returns -1 when the search element is not found");
        }
    },
    {
        name: "Array.of() called with the a bound function without a constructor should not throw an exception",
        o4: function () {
            var o31 = Math.cos.bind(Math);
            o5.o6(Array.isArray(Array.of.call(o31)));
        }
    },
    {
        name: "Array.of() should not invoke setter",
        o4: function () {
            function o72() {}
            o72.of = Array.of;
            Object.defineProperty(o72.prototype, "0", {set: function(o75) { /* no-op */ }});
            o5.o9(1, o72.of(1)[0]);
        }
    },
    {
        name: "Array.from() should not invoke setter in iterable case",
        o4: function () {
            function o72() {}
            o72.from = Array.from;
            Object.defineProperty(o72.prototype, "0", {set: function(o75) { throw "Fail"; }});
            var o23 = [1,2,3];
            o5.o9(1, o72.from(o23)[0]);
        }
    },
    {
        name: "Array.from() should not invoke setter in array like case",
        o4: function () {
            function o72() {}
            o72.from = Array.from;
            Object.defineProperty(o72.prototype, "0", {set: function(o75) { throw "Fail"; }});
            var o23 = {};
            o23[0] = 1;
            o23[1] = 2;
            o23[2] = 3;
            o23.length = 3;
            o5.o9(1, o72.from(o23)[0]);
        }
    },
    {
        name: "Array.filter() should not invoke setter even with substituted constructor",
        o4: function () {
            var o23 = [1,2,3];
            o23.constructor = function()
            {
                function o72() {};
                Object.defineProperty(o72.prototype, "0", { set: function(o75){ throw "Fail"; } });
                return new o72();
            };
            o5.o9(1, o23.filter(function(o75){return o75 % 2 == 1;})[0]);
        }
    },
    {
        name: "Array.map() should not invoke setter even with substituted constructor",
        o4: function () {
            var o23 = [1,2,3];
            o23.constructor = function()
            {
                function o72() {};
                Object.defineProperty(o72.prototype, "0", { set: function(o75){ throw "Fail"; } });
                return new o72();
            };
            o5.o9(1, o23.map(function(o75){return o75 % 2;})[0]);
        }
    },
    {
        name: "Array.slice() should not invoke setter even with substituted constructor",
        o4: function () {
            var o23 = [1,2,3];
            o23.constructor = function()
            {
                function o72() {};
                Object.defineProperty(o72.prototype, "0", { set: function(o75){ throw "Fail"; } });
                return new o72();
            };
            o5.o9(2, o23.slice(1, 3)[0]);
        }
    },
    {
        name: "Array.splice() should not invoke setter even with substituted constructor",
        o4: function () {
            var o23 = [1,2,3];
            o23.constructor = function()
            {
                function o72() {};
                Object.defineProperty(o72.prototype, "0", { set: function(o75){ throw "Fail"; } });
                return new o72();
            };
            o5.o9(1, o23.splice(0, 1, 'x')[0]);
        }
    },
    {
        name: "Array.fill() should throw when applied on frozen array",
        o4: function () {
            var o81 = [0];
            Object.freeze(o81);
            o5.o24(function() { Array.prototype.fill.call(o81) }, o26, "We should get a TypeError when fill is applied to a frozen array");
        }
    },
    {
        name: "Array.copyWithin() should throw when applied on frozen array",
        o4: function () {
            var o81 = [1,2,3,4,5];
            Object.freeze(o81);
            o5.o24(function() { Array.prototype.fill.copyWithin(o81, 1, 2) }, o26, "We should get a TypeError when fill is applied to a frozen array");
        }
    },
    {
        name: "Array.concat() should always box the first item",
        o4: function () {
            o5.o6(typeof Array.prototype.concat.call(101)[0] === "object");
        }
    },
    {
        name: "Boolean primitive should never be considered concat spreadable",
        o4: function () {
            try
            {
                Boolean.prototype[Symbol.isConcatSpreadable] = true;
                Boolean.prototype[0] = 1;
                Boolean.prototype[1] = 2;
                Boolean.prototype[2] = 3;
                Boolean.prototype.length = 3;
                o5.o6([].concat(true).length === 1); /** True is added to the array as an literal, not spreaded */
            }
            finally
            {
                delete Boolean.prototype[Symbol.isConcatSpreadable];
                delete Boolean.prototype[0];
                delete Boolean.prototype[1];
                delete Boolean.prototype[2];
                delete Boolean.prototype.length;
            }
        }
    },
    {
        name: "String primitive should never be considered concat spreadable",
        o4: function () {
            try
            {
                String.prototype[Symbol.isConcatSpreadable] = true;
                String.prototype[0] = 1;
                String.prototype[1] = 2;
                String.prototype[2] = 3;
                String.prototype.length = 3;
                o5.o6([].concat("Hello").length === 1); /** True is added to the array as an literal, not spreaded */
            }
            finally
            {
                delete String.prototype[Symbol.isConcatSpreadable];
                delete String.prototype[0];
                delete String.prototype[1];
                delete String.prototype[2];
                delete String.prototype.length;
            }
        }
    }
];

o86.o87(o2, { o88: o0.o89[0] != "summary" });
