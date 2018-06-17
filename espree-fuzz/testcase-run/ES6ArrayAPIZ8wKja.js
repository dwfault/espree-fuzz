//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array extension tests -- verifies the API shape and basic functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var prototype = [
    {
        name: "Array constructor has correct functions",
        null: function() {
            try {
o4.o5(Array.hasOwnProperty('from'), "Array.hasOwnProperty('from');");
}catch(e){}
            try {
o4.o6('function', typeof Array.from, "typeof Array.from === 'function'");
}catch(e){}
            try {
o4.o6(1, o7.from.o16, "Array.from.length === 0");
}catch(e){}

            try {
o4.o5(Array.hasOwnProperty('of'), "Array.hasOwnProperty('of');");
}catch(e){}
            try {
o4.o6('function', typeof Array.of, "typeof Array.of === 'function'");
}catch(e){}
            try {
o4.o6(0, Array.of.length, "Array.of.length === 0");
}catch(e){}
        }
    },
    {
        name: "[0].indexOf(-0.0) should return 0",
        Array: function() {
            try {
o4.o6(0, [0].indexOf(-0.0), "[0].indexOf(-0.0) should return 0");
}catch(e){}
        }
    },
    o16.push,
    {
        name: "Array.from special behaviors",
        o3: function() {
            var o7 = Array.from;

            var o211 = 1;
            try {
o4.o6('object', typeof o8, "Array.from.call(Array, 'string') returns an array");
}catch(e){}
            try {
o4.o6(['s','t','r','i','n','g'], o8, "Array.from.call(Array, 'string') == ['s','t','r','i','n','g']");
}catch(e){}
            try {
o4.o6(6, o8.length, "Array.from.call(Array, 'string').length === 6");
}catch(e){}
            try {
o4.o9(ArrayBuffer.isView(o8), "Array.from.call(Array, 'string') is not a TypedArray");
}catch(e){}

            var o8 = o7.call(String, [0,1,2,3]);
            try {
o4.o6('object', typeof o8, "Array.from.call(String, [0,1,2,3]) returns a String object");
}catch(e){}
            try {
o4.o6('', o8.toString(), "Array.from.call(String, [0,1,2,3]).toString() == '4'");
}catch(e){}
            try {
o4.o6(0, o8.length, "Array.from.call(String, [0,1,2,3]).length === 1");
}catch(e){}
            try {
o4.o9(ArrayBuffer.isView(o8), "Array.from.call(String, [0,1,2,3]) is not a TypedArray");
}catch(e){}
            try {
o4.o6(0, o8[0], "Integer-indexed properties are still added to the string");
}catch(e){}
            try {
o4.o6(1, o8[1], "Integer-indexed properties are still added to the string");
}catch(e){}
            try {
o4.o6(2, o8[2], "Integer-indexed properties are still added to the string");
}catch(e){}
            try {
o4.o6(3, o8[3], "Integer-indexed properties are still added to the string");
}catch(e){}

            var o10 = { 0: 0, 1: 1, 2: 2, 3: 3, length: 4 };
            var o8 = o7.call(String, o10);
            try {
o4.o6('object', typeof o8, "Array.from.call(String, objectLikeArray) returns a String object");
}catch(e){}
            try {
o4.o6('4', o8.toString(), "Array.from.call(String, objectLikeArray).toString() == '4'");
}catch(e){}
            try {
o4.o6(1, o8.length, "Array.from.call(String, objectLikeArray).length === 1");
}catch(e){}
            try {
o4.o9(ArrayBuffer.isView(o8), "Array.from.call(String, objectLikeArray) is not a TypedArray");
}catch(e){}
            try {
o4.o6(1, o8[1], "Integer-indexed properties are still added to the string");
}catch(e){}
            try {
o4.o6(2, o8[2], "Integer-indexed properties are still added to the string");
}catch(e){}
            try {
o4.o6(3, o8[3], "Integer-indexed properties are still added to the string");
}catch(e){}
            try {
o4.o6('4', o8[0], "Zero-th property of the string is set to the string value, can't overwrite this via put");
}catch(e){}

            try {
o4.o11(function() { try {
o7.call(Uint8Array, { 0: 0, 1: 1, 2: 2, length: 5 });
}catch(e){} }, o12, "Array.from tries to set length of the object returned from the constructor which will throw for TypedArrays", "Cannot define property: object is not extensible");
}catch(e){}

            var o10 = { 0: 0, 1: 1, 3: 3, length: 5 };
            var o8 = o7.call(Array, o10);
            try {
o4.o6('object', typeof o8, "Array.from.call(Array, objectWithLengthProperty) returns an object");
}catch(e){}
            try {
o4.o6('0,1,,3,', o8.toString(), "Array.from.call(String, [0,1,2,3]).toString() == '4'");
}catch(e){}
            try {
o4.o6(5, o8.length, "Array.from.call(Array, objectWithLengthProperty) returns a new array with length = a.length");
}catch(e){}
            try {
o4.o9(ArrayBuffer.isView(o8), "Array.from.call(Array, objectWithLengthProperty) is not a TypedArray (ArrayBuffer.isView)");
}catch(e){}
            try {
o4.o6([0,1,undefined,3,undefined], o8, "Array.from.call(Array, objectWithLengthProperty) has missing values set to undefined");
}catch(e){}

            var o10 = { 0: 0, 1: 1 };
            var o8 = o7.call(Array, o10);
            try {
o4.o6('object', typeof o8, "Array.from.call(Array, objectWithLengthNoProperty) returns an object");
}catch(e){}
            try {
o4.o6(0, o8.length, "Array.from.call(Array, objectWithLengthNoProperty) returns a new array with length = 0");
}catch(e){}
            try {
o4.o9(ArrayBuffer.isView(o8), "Array.from.call(Array, objectWithLengthNoProperty) is not a TypedArray (ArrayBuffer.isView)");
}catch(e){}
            try {
o4.o6([], o8, "Array.from.call(Array, objectWithLengthNoProperty) is an empty array");
}catch(e){}

            try {
o4.o6([0,1,2], o7.call(undefined, [0,1,2]), "Calling Array.from with undefined this argument produces an array");
}catch(e){}
            try {
o4.o6([0,1,2], o7.call(null, [0,1,2]), "Calling Array.from with null this argument produces an array");
}catch(e){}
            try {
o4.o6([0,1,2], o7.call({}, [0,1,2]), "Calling Array.from with a non-function this argument produces an array");
}catch(e){}
            try {
o4.o6([0,1,2], o7.call(Math.sin, [0,1,2]), "Calling Array.from with a non-constructor function this argument produces an array");
}catch(e){}
        }
    },
    o4.o9(function() { try {
Promise.prototype.catch.call({ get then() { try {
throw new o10('error!');
}catch(e){} } });
}catch(e){} }, o10, "Promise.prototype.catch throws if the then property of the this argument throws", "error!"),
    {
        name: "Array.from behavior with a map function",
        o3: function() {
            var o13 = 0;

            function o14(o15, o16) {
                try {
o4.o6(o13, o16, "Array.from called with a mapping function, we should get the elements in order. Setting item[" + o16 + "] = " + o15);
}catch(e){}
                try {
o4.o6(o15, o16, "Array.from called with a mapping function, Value and index should be same for this test");
}catch(e){}
                try {
o4.o6(2, arguments.length, "Array.from called with a mapping function, only 2 elements should be passed as arguments");
}catch(e){}
                // increment expected index
                try {
o13++;
}catch(e){}
            }

            var o17 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with correct arguments
            try {
Array.from(o17, o14);
}catch(e){}
        }
    },
    {
        name: "Array.from behavior with a map function passing this argument",
        o3: function() {
            var o18 = 'thisArg';

            function o14(o15, o16) {
                // this will be wrapped as an Object
                try {
o4.o6(Object(o18), this, "thisArg passed into Array.from should flow into mapFunction");
}catch(e){}
            }

            var o17 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with thisArg passed as this
            try {
Array.from(o17, o14, o18);
}catch(e){}
        }
    },
    {
        name: "Array.from behavior with a map function that mutates source object",
        o3: function() {
            var o17 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                length: 5
            };

            function o14(o15, o16) {
                try {
switch (o16) {
                    case 0:
                        // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
                        try {
o17.length = 0;
}catch(e){}
                        try {
return o15;
}catch(e){}
                    case 1:
                        // change the value of the next indexed value - the new value should end up in the return object
                        try {
o17[2] = 200;
}catch(e){}
                        try {
return o15;
}catch(e){}
                    case 2:
                        // change the value of a previous indexed value - the old value should end up in the return object
                        try {
o17[0] = -100;
}catch(e){}
                        try {
return o15;
}catch(e){}
                    case 3:
                        // delete the next indexed value - return object should have undefined there
                        try {
delete o17[4];
}catch(e){}
                        try {
return o15;
}catch(e){}
                }
}catch(e){}

                // otherwise
                try {
return o15;
}catch(e){}
            }

            try {
o4.o6([0,1,200,3,undefined], Array.from(o17, o14), "Array.from called with a map function that mutates the source object");
}catch(e){}
        }
    },
    {
        name: "Array.from behavior with iterator and a map function",
        o3: function() {
            var o19 = 0;
            var o20 = false;
            var o18 = 'string';

            var o21 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        o13: 0,
                        next: function () {
                            try {
return {
                                done: this.o13 == 5,
                                value: this.o13++
                            };
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };

            function o14(o15, o16) {
                try {
o4.o6(o19, o15, "Array.from called with a mapping function, we should get the elements in order. Setting item[" + o19 + "] = " + o15);
}catch(e){}
                try {
o4.o6(o15, o16, "Array.from called with a mapping function, index should match the value passed in");
}catch(e){}
                try {
o4.o6(2, arguments.length, "Array.from called with a mapping function, only 2 elements should be passed as arguments");
}catch(e){}

                // increment expected value
                try {
o19++;
}catch(e){}

                try {
if (o20) {
                    // this will be wrapped as an Object
                    try {
o4.o6(Object(o18), this, "thisArg passed into Array.from should flow into mapFunction");
}catch(e){}
                }
}catch(e){}
            }

            // Verify mapFunction gets called with correct arguments
            try {
Array.from(o21, o14);
}catch(e){}

            try {
o19 = 0;
}catch(e){}
            try {
o20 = true;
}catch(e){}

            // Verify mapFunction gets called with thisArg passed as this
            try {
Array.from(o21, o14, o18);
}catch(e){}
        }
    },
    {
        name: "Array.from behavior with iterator and a map function which mutates the iterator state",
        o3: function() {
            var o22 = 0;

            var o21 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        next: function () {
                            try {
return {
                                done: o22 == 5,
                                value: o22++
                            };
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };

            var o23 = false;
            function o14(o15, o16) {
                try {
if (o15 == 2 && !o23)
                {
                    try {
o23 = true;
}catch(e){}
                    try {
o22 = 0;
}catch(e){}
                }
}catch(e){}

                try {
return o15;
}catch(e){}
            }

            try {
o4.o6([0,1,2,0,1,2,3,4], Array.from(o21, o14), "Array.from called with map function which alters iterator state");
}catch(e){}
        }
    },
    {
        name: "Array.from behavior with badly formed iterator objects",
        o3: function() {
            var o24 = { [Symbol.iterator]: 'a string' };
            var o25 = { [Symbol.iterator]: function() { try {
return undefined;
}catch(e){} } };
            var o26 = { [Symbol.iterator]: function() { try {
return { next: undefined };
}catch(e){} } };
            var o27 = { [Symbol.iterator]: function() { try {
return { next: function() { try {
return undefined;
}catch(e){} } };
}catch(e){} } };

            try {
o4.o11(function() { try {
Array.from(o24);
}catch(e){} }, o12, "obj[@@iterator] must be a function", "Function expected");
}catch(e){}
            try {
o4.o11(function() { try {
Array.from(o25);
}catch(e){} }, o12, "obj[@@iterator] must return an object", "Object expected");
}catch(e){}
            try {
o4.o11(function() { try {
Array.from(o26);
}catch(e){} }, o12, "obj[@@iterator].next must be a function", "Function expected");
}catch(e){}
            try {
o4.o11(function() { try {
Array.from(o27);
}catch(e){} }, o12, "obj[@@iterator].next must return an object", "Object expected");
}catch(e){}

            var o28 = { 0: "a", 1: "b", length: 2, [Symbol.iterator]: undefined };
            var o29 = { 0: "a", 1: "b", length: 2, [Symbol.iterator]: null };

            try {
o4.o6([ "a", "b" ], Array.from(o28), "'@@iterator: undefined' is ignored");
}catch(e){}
            try {
o4.o6([ "a", "b" ], Array.from(o29), "'@@iterator: null' is ignored");
}catch(e){}
        }
    },
    {
        name: "Array.of basic behavior",
        o3: function() {
            try {
o4.o6([], Array.of(), "Array.of basic behavior with no arguments");
}catch(e){}
            try {
o4.o6([3], Array.of(3), "Array.of basic behavior with a single argument");
}catch(e){}
            try {
o4.o6([0,1,2,3], Array.of(0, 1, 2, 3), "Array.of basic behavior with a list of arguments");
}catch(e){}
        }
    },
    {
        name: "Array.of extended behavior",
        o3: function() {
            var o30 = Array.of;

            try {
o4.o11(function() { try {
o30.call(Uint8ClampedArray, 0, -1, 2, 300, 4);
}catch(e){} }, o12, "Array.of tries to set length of the object returned from the constructor which will throw for TypedArrays", "Cannot define property: object is not extensible");
}catch(e){}

            var o8 = o30.call(Array, 'string', 'other string', 5, { 0: 'string val',length:10 });
            try {
o4.o6('object', typeof o8, "Array.of.call(Array, ...someStringsAndObjects) returns an array");
}catch(e){}
            try {
o4.o6(['string','other string',5,{ 0: 'string val',length:10 }], o8, "Array.of.call(Array, ...someStringsAndObjects) == ['string','other string',5,{ 0: 'string val',length:10 }]");
}catch(e){}
            try {
o4.o6(4, o8.length, "Array.of.call(Array, ...someStringsAndObjects).length === 4");
}catch(e){}
            try {
o4.o9(ArrayBuffer.isView(o8), "Array.of.call(Array, ...someStringsAndObjects) is not a TypedArray");
}catch(e){}

            var o8 = o30.call(String, 0, 1, 2, 3);
            try {
o4.o6('object', typeof o8, "Array.of.call(String, 0, 1, 2, 3) returns a string object");
}catch(e){}
            try {
o4.o6(1, o8.length, "Array.of.call(String, 0, 1, 2, 3) returns a string object with length 1");
}catch(e){}
            try {
o4.o6('4', o8.toString(), "Array.of.call(String, 0, 1, 2, 3) returns a string object with value == '4'");
}catch(e){}
            try {
o4.o6('4', o8[0], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[0] == '4'");
}catch(e){}
            try {
o4.o6(1, o8[1], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[1] == 1");
}catch(e){}
            try {
o4.o6(2, o8[2], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[2] == 2");
}catch(e){}
            try {
o4.o6(3, o8[3], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[3] == 3");
}catch(e){}

            try {
o4.o6([], o30.call(Array), "Array.of.call(Array) returns empty array");
}catch(e){}
            try {
o4.o6([], o30.call(), "Array.of.call() returns empty array");
}catch(e){}
            try {
o4.o6(new String(0), o30.call(String), "Array.of.call(String) returns empty string");
}catch(e){}
            try {
o4.o6("0", o30.call(String).toString(), "Array.of.call(String) returns empty string");
}catch(e){}
        }
    },
    {
        name: "OS:840217 - Array.from, Array#fill, Array#lastIndexOf should use ToLength instead of ToUint32 on their parameter's length property",
        o3: function() {
            // ToLength(-1) should be 0 which means we won't execute any iterations in the below calls.
            try {
Array.from({length: -1});
}catch(e){}
            try {
Array.prototype.fill.call({length: -1}, 'a');
}catch(e){}
            try {
Array.prototype.lastIndexOf.call({length: -1}, 'a');
}catch(e){}
        }
    },
    {
        name: "Array.from called with an items object that has length > 2^32-1 and is not iterable",
        o3: function() {
            var o31 = {length: 4294967301};

            try {
o4.o11(function() { try {
Array.from(o31);
}catch(e){} }, o32, "Array.from uses abstract operation ArrayCreate which throws RangeError when requested length > 2^32-1", "Array length must be a finite positive integer");
}catch(e){}
        }
    },
    {
        name: "Array.from doesn't get @@iterator twice",
        o3: function () {
            let o33 = 0;
            try {
Array.from({
                get [Symbol.iterator]() {
                    try {
o33++;
}catch(e){}
                    try {
return [][Symbol.iterator];
}catch(e){}
                }
            });
}catch(e){}
            try {
o4.o6(o33, 1, "Array.from calls @@iterator getter once");
}catch(e){}

            try {
o33 = 0;
}catch(e){}
            try {
Array.from(new Proxy({}, {
                get(target, o34) {
                    try {
if (o34 === Symbol.iterator) {
                        try {
o33++;
}catch(e){}
                        try {
return [][Symbol.iterator];
}catch(e){}
                    }
}catch(e){}
                    try {
return Reflect.get(target, o34);
}catch(e){}
                }
            }));
}catch(e){}
            try {
o4.o6(o33, 1, "Array.from calls proxy's getter with @@iterator as parameter only once");
}catch(e){}
        }
    },
    {
        name: "Array#fill called with an object that has length > 2^32-1",
        o3: function() {
            var o35 = {length: 4294967301, 4294967297: 1234};
            try {
Array.prototype.fill.call(o35, 5678, 4294967298, 4294967300);
}catch(e){}

            try {
o4.o6(1234, o35[4294967297], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 does not fill elements outside the request range");
}catch(e){}
            try {
o4.o6(5678, o35[4294967298], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 is able to fill elements with indices > 2^32");
}catch(e){}
            try {
o4.o6(5678, o35[4294967299], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 is able to fill elements with indices > 2^32");
}catch(e){}
            try {
o4.o6(undefined, o35[4294967300], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 does not fill elements outside the request range");
}catch(e){}

            var o35 = {length: 4294967301, 4294967292: 1234};
            try {
Array.prototype.fill.call(o35, 5678, 4294967293, 4294967300);
}catch(e){}

            try {
o4.o6(1234, o35[4294967292], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 does not fill elements outside the request range");
}catch(e){}
            try {
o4.o6(5678, o35[4294967293], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
}catch(e){}
            try {
o4.o6(5678, o35[4294967294], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
}catch(e){}
            try {
o4.o6(5678, o35[4294967295], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
}catch(e){}
            try {
o4.o6(5678, o35[4294967299], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
}catch(e){}
            try {
o4.o6(undefined, o35[4294967300], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 does not fill elements outside the request range");
}catch(e){}
        }
    },
    {
        name: "Array#lastIndexOf called with an object that has length > 2^32-1",
        o3: function() {
            var o35 = {length: 4294967301, 4294967291: 1234, 4294967294: 5678, 4294967295: 5678, 4294967296: 5678, 4294967297: 9};

            try {
o4.o6(4294967291, Array.prototype.lastIndexOf.call(o35, 1234, 4294967300), "Array.prototype.lastIndexOf called on an object with length > 2^32 and a fromIndex also > 2^32 finds the element when expected index is < 2^32");
}catch(e){}
            try {
o4.o6(4294967296, Array.prototype.lastIndexOf.call(o35, 5678, 4294967300), "Array.prototype.lastIndexOf called on an object with length > 2^32 and a fromIndex also > 2^32 finds the element when expected index is > 2^32");
}catch(e){}

            var o35 = [1,2,3,4];

            try {
o4.o6(0, Array.prototype.lastIndexOf.call(o35, 1, 4294967296), "Array.prototype.lastIndexOf is able to find the element when it exists at index 0 when fromIndex > 2^32");
}catch(e){}
            try {
o4.o6(0, Array.prototype.lastIndexOf.call(o35, 1), "Array.prototype.lastIndexOf is able to find the element when it exists at index 0 when fromIndex not defined");
}catch(e){}
        }
    },
    {
        name: "Array#copyWithin called with an object that has length > 2^32-1 and parameters also > 2^32-1",
        o3: function() {
            var o35 = {length: 4294967301, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294};
            try {
Array.prototype.copyWithin.call(o35, 5, 4294967292, 4294967294);
}catch(e){}

            try {
o4.o6(4294967292, o35[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967293, o35[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely < 2^32");
}catch(e){}

            var o35 = {length: 4294967304, 4294967300: 4294967300, 4294967301: 4294967301, 4294967302: 4294967302, 4294967303: 4294967303};
            try {
Array.prototype.copyWithin.call(o35, 4294967297, 4294967300, 4294967303);
}catch(e){}

            try {
o4.o6(4294967300, o35[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967301, o35[4294967298], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967302, o35[4294967299], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");
}catch(e){}

            var o35 = {length: 4294967301, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299};
            try {
Array.prototype.copyWithin.call(o35, 5, 4294967297, 4294967300);
}catch(e){}

            try {
o4.o6(4294967297, o35[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967298, o35[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967299, o35[7], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");
}catch(e){}

            var o35 = {length: 4294967301, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4};
            try {
Array.prototype.copyWithin.call(o35, 4294967297, 0, 5);
}catch(e){}

            try {
o4.o6(0, o35[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(1, o35[4294967298], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(2, o35[4294967299], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(3, o35[4294967300], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
}catch(e){}

            var o35 = {length: 4294967301, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294, 4294967295: 4294967295, 4294967296: 4294967296, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299, 4294967300: 4294967300};
            try {
Array.prototype.copyWithin.call(o35, 5, 4294967292, 4294967301);
}catch(e){}

            try {
o4.o6(4294967292, o35[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967293, o35[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967294, o35[7], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967295, o35[8], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967296, o35[9], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967297, o35[10], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967298, o35[11], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967299, o35[12], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}
            try {
o4.o6(4294967300, o35[13], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
}catch(e){}

            var o35 = {length: 4294967400, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294, 4294967295: 4294967295, 4294967296: 4294967296, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299, 4294967300: 4294967300};
            try {
Array.prototype.copyWithin.call(o35, 4294967350, 4294967292, 4294967301);
}catch(e){}

            try {
o4.o6(4294967292, o35[4294967350], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967293, o35[4294967351], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967294, o35[4294967352], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967295, o35[4294967353], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967296, o35[4294967354], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967297, o35[4294967355], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967298, o35[4294967356], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967299, o35[4294967357], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}
            try {
o4.o6(4294967300, o35[4294967358], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
}catch(e){}

            var o35 = {length: 4294967301, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4};
            try {
Array.prototype.copyWithin.call(o35, 4294967293, 0, 5);
}catch(e){}

            try {
o4.o6(0, o35[4294967293], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(1, o35[4294967294], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(2, o35[4294967295], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(3, o35[4294967296], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(4, o35[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
}catch(e){}

            var o35 = {length: 4294967420, 4294967400: 4294967400, 4294967401: 4294967401, 4294967402: 4294967402, 4294967403: 4294967403, 4294967404: 4294967404};
            try {
Array.prototype.copyWithin.call(o35, 4294967293, 4294967400, 4294967405);
}catch(e){}

            try {
o4.o6(4294967400, o35[4294967293], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(4294967401, o35[4294967294], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(4294967402, o35[4294967295], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(4294967403, o35[4294967296], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
}catch(e){}
            try {
o4.o6(4294967404, o35[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
}catch(e){}
        }
    },
    {
        name: "Array#lastIndexOf called with a fromIndex < 0 && abs(fromIndex) > length (OS #1185913)",
        o3: function() {
            var o10 = [0, 1];
            var o36 = o10.lastIndexOf(0, -3);

            try {
o4.o6(-1, o36, "Array.prototype.lastIndexOf returns -1 when the search element is not found");
}catch(e){}
        }
    },
    {
        name: "Array.of() called with the a bound function without a constructor should not throw an exception",
        o3: function () {
            var o15 = Math.cos.bind(Math);
            try {
o4.o5(Array.isArray(Array.of.call(o15)));
}catch(e){}
        }
    },
    {
        name: "Array.of() should not invoke setter",
        o3: function () {
            function o37() {}
            try {
o37.of = Array.of;
}catch(e){}
            try {
Object.defineProperty(o37.prototype, "0", {set: function(o38) { /* no-op */ }});
}catch(e){}
            try {
o4.o6(1, o37.of(1)[0]);
}catch(e){}
        }
    },
    {
        name: "Array.from() should not invoke setter in iterable case",
        o3: function () {
            function o37() {}
            try {
o37.from = Array.from;
}catch(e){}
            try {
Object.defineProperty(o37.prototype, "0", {set: function(o38) { try {
throw "Fail";
}catch(e){} }});
}catch(e){}
            var o10 = [1,2,3];
            try {
o4.o6(1, o37.from(o10)[0]);
}catch(e){}
        }
    },
    {
        name: "Array.from() should not invoke setter in array like case",
        o3: function () {
            function o37() {}
            try {
o37.from = Array.from;
}catch(e){}
            try {
Object.defineProperty(o37.prototype, "0", {set: function(o38) { try {
throw "Fail";
}catch(e){} }});
}catch(e){}
            var o10 = {};
            try {
o10[0] = 1;
}catch(e){}
            try {
o10[1] = 2;
}catch(e){}
            try {
o10[2] = 3;
}catch(e){}
            try {
o10.length = 3;
}catch(e){}
            try {
o4.o6(1, o37.from(o10)[0]);
}catch(e){}
        }
    },
    {
        name: "Array.filter() should not invoke setter even with substituted constructor",
        o3: function () {
            var o10 = [1,2,3];
            try {
o10.constructor = function()
            {
                function o37() {}try {
;
}catch(e){}
                try {
Object.defineProperty(o37.prototype, "0", { set: function(o38){ try {
throw "Fail";
}catch(e){} } });
}catch(e){}
                try {
return new o37();
}catch(e){}
            };
}catch(e){}
            try {
o4.o6(1, o10.filter(function(o38){try {
return o38 % 2 == 1;
}catch(e){}})[0]);
}catch(e){}
        }
    },
    {
        name: "Array.map() should not invoke setter even with substituted constructor",
        o3: function () {
            var o10 = [1,2,3];
            try {
o10.constructor = function()
            {
                function o37() {}try {
;
}catch(e){}
                try {
Object.defineProperty(o37.prototype, "0", { set: function(o38){ try {
throw "Fail";
}catch(e){} } });
}catch(e){}
                try {
return new o37();
}catch(e){}
            };
}catch(e){}
            try {
o4.o6(1, o10.map(function(o38){try {
return o38 % 2;
}catch(e){}})[0]);
}catch(e){}
        }
    },
    {
        name: "Array.slice() should not invoke setter even with substituted constructor",
        o3: function () {
            var o10 = [1,2,3];
            try {
o10.constructor = function()
            {
                function o37() {}try {
;
}catch(e){}
                try {
Object.defineProperty(o37.prototype, "0", { set: function(o38){ try {
throw "Fail";
}catch(e){} } });
}catch(e){}
                try {
return new o37();
}catch(e){}
            };
}catch(e){}
            try {
o4.o6(2, o10.slice(1, 3)[0]);
}catch(e){}
        }
    },
    {
        name: "Array.splice() should not invoke setter even with substituted constructor",
        o3: function () {
            var o10 = [1,2,3];
            try {
o10.constructor = function()
            {
                function o37() {}try {
;
}catch(e){}
                try {
Object.defineProperty(o37.prototype, "0", { set: function(o38){ try {
throw "Fail";
}catch(e){} } });
}catch(e){}
                try {
return new o37();
}catch(e){}
            };
}catch(e){}
            try {
o4.o6(1, o10.splice(0, 1, 'x')[0]);
}catch(e){}
        }
    },
    {
        name: "Array.fill() should throw when applied on frozen array",
        o3: function () {
            var o39 = [0];
            try {
Object.freeze(o39);
}catch(e){}
            try {
o4.o11(function() { try {
Array.prototype.fill.call(o39)
}catch(e){} }, o12, "We should get a TypeError when fill is applied to a frozen array");
}catch(e){}
        }
    },
    {
        name: "Array.copyWithin() should throw when applied on frozen array",
        o3: function () {
            var o39 = [1,2,3,4,5];
            try {
Object.freeze(o39);
}catch(e){}
            try {
o4.o11(function() { try {
Array.prototype.fill.copyWithin(o39, 1, 2)
}catch(e){} }, o12, "We should get a TypeError when fill is applied to a frozen array");
}catch(e){}
        }
    },
    {
        name: "Array.concat() should always box the first item",
        o3: function () {
            try {
o4.o5(typeof Array.prototype.concat.call(101)[0] === "object");
}catch(e){}
        }
    },
    {
        name: "Boolean primitive should never be considered concat spreadable",
        o3: function () {
            try {
try
            {
                try {
Boolean.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
Boolean.prototype[0] = 1;
}catch(e){}
                try {
Boolean.prototype[1] = 2;
}catch(e){}
                try {
Boolean.prototype[2] = 3;
}catch(e){}
                try {
Boolean.prototype.length = 3;
}catch(e){}
                try {
o4.o5([].concat(true).length === 1);
}catch(e){} /** True is added to the array as an literal, not spreaded */
            }
            finally
            {
                try {
delete Boolean.prototype[Symbol.isConcatSpreadable];
}catch(e){}
                try {
delete Boolean.prototype[0];
}catch(e){}
                try {
delete Boolean.prototype[1];
}catch(e){}
                try {
delete Boolean.prototype[2];
}catch(e){}
                try {
delete Boolean.prototype.length;
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "String primitive should never be considered concat spreadable",
        o3: function () {
            try {
try
            {
                try {
String.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
String.prototype[0] = 1;
}catch(e){}
                try {
String.prototype[1] = 2;
}catch(e){}
                try {
String.prototype[2] = 3;
}catch(e){}
                try {
String.prototype.length = 3;
}catch(e){}
                try {
o4.o5([].concat("Hello").length === 1);
}catch(e){} /** True is added to the array as an literal, not spreaded */
            }
            finally
            {
                try {
delete String.prototype[Symbol.isConcatSpreadable];
}catch(e){}
                try {
delete String.prototype[0];
}catch(e){}
                try {
delete String.prototype[1];
}catch(e){}
                try {
delete String.prototype[2];
}catch(e){}
                try {
delete String.prototype.length;
}catch(e){}
            }
}catch(e){}
        }
    }
];

try {
o4.o41(o2, { o42: o0.o43[0] != "summary" });
}catch(e){}
