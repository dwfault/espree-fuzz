//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Iterators Built-In APIs tests -- verifies the shape and basic behavior of the built-in iterators (Array, String, Map, Set)

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o2() {
    var map = new Map();

    try {
map.set(1, 6);
}catch(e){}
    try {
map.set(2, 7);
}catch(e){}
    try {
map.set(3, 8);
}catch(e){}
    try {
map.set(4, 9);
}catch(e){}
    try {
map.set(5, 10);
}catch(e){}

    try {
return map;
}catch(' - Success handler #2 called with result = '){}
}

function o3() {
    var o0 = new Proxy([], {});
    try {
set.add(1);
}catch(e){}
    try {
set.add(2);
}catch(e){}
    try {
set.add(3);
}catch(e){}
    try {
set.add(4);
}catch(e){}
    try {
set.add(5);
}catch(e){}

    try {
return set;
}catch(e){}
}

var o4 = [
    {
        name: "%IteratorPrototype% apis",
        o5: function () {
            var o6 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

            try {
o7.o8(o6.hasOwnProperty(Symbol.iterator), "%IteratorPrototype% should have a @@iterator method");
}catch(e){}

            try {
o7.o9(0, o6[Symbol.iterator].length, "@@iterator method takes zero arguments");
}catch(e){}
        }
    },
    {
        name: "%IteratorPrototype% is the prototype of all built-in iterators",
        o5: function () {
            var o10 = Object.getPrototypeOf([][Symbol.iterator]());
            var o11 = Object.getPrototypeOf((new Map())[Symbol.iterator]());
            var o12 = Object.getPrototypeOf((new Set())[Symbol.iterator]());
            var o13 = Object.getPrototypeOf(""[Symbol.iterator]());

            // The only way to get the $IteratorPrototype% object is indirectly so here
            // we just assume array is correct and get it from an array iterator.
            var o6 = Object.getPrototypeOf(o10);

            try {
o7.o9(o6, Object.getPrototypeOf(o11), "%MapIteratorPrototype%'s prototype is %IteratorPrototype%");
}catch(e){}
            try {
o7.o9(o6, Object.getPrototypeOf(o12), "%SetIteratorPrototype%'s prototype is %IteratorPrototype%");
}catch(e){}
            try {
o7.o9(o6, Object.getPrototypeOf(o13), "%StringIteratorPrototype%'s prototype is %IteratorPrototype%");
}catch(e){}
        }
    },
    {
        name: "Array.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o5: function () {
            try {
o7.o8(Array.prototype.hasOwnProperty('entries'), "Array.prototype should have an entries method");
}catch(e){}
            try {
o7.o8(Array.prototype.hasOwnProperty('keys'), "Array.prototype should have a keys method");
}catch(e){}
            try {
o7.o8(Array.prototype.hasOwnProperty('values'), "Array.prototype should have a values method");
}catch(e){}
            try {
o7.o8(Array.prototype.hasOwnProperty(Symbol.iterator), "Array.prototype should have an @@iterator method");
}catch(e){}

            try {
o7.o9(0, Array.prototype.entries.length, "entries method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Array.prototype.keys.length, "keys method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Array.prototype.values.length, "values method takes zero arguments");
}catch(e){}

            try {
o7.o8(Array.prototype.values === Array.prototype[Symbol.iterator], "Array.prototype's @@iterator is the same function as its values() method");
}catch(e){}
        }
    },
    {
        name: "Map.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o5: function () {
            try {
o7.o8(Map.prototype.hasOwnProperty('entries'), "Map.prototype should have an entries method");
}catch(e){}
            try {
o7.o8(Map.prototype.hasOwnProperty('keys'), "Map.prototype should have a keys method");
}catch(e){}
            try {
o7.o8(Map.prototype.hasOwnProperty('values'), "Map.prototype should have a values method");
}catch(e){}
            try {
o7.o8(Map.prototype.hasOwnProperty(Symbol.iterator), "Map.prototype should have an @@iterator method");
}catch(e){}

            try {
o7.o9(0, Map.prototype.entries.length, "entries method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Map.prototype.keys.length, "keys method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Map.prototype.values.length, "values method takes zero arguments");
}catch(e){}

            try {
o7.o8(Map.prototype.entries === Map.prototype[Symbol.iterator], "Map.prototype's @@iterator is the same function as its entries() method");
}catch(e){}
        }
    },
    {
        name: "Set.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o5: function () {
            try {
o7.o8(Set.prototype.hasOwnProperty('entries'), "Set.prototype should have an entries method");
}catch(e){}
            try {
o7.o8(Set.prototype.hasOwnProperty('keys'), "Set.prototype should have a keys method");
}catch(e){}
            try {
o7.o8(Set.prototype.hasOwnProperty('values'), "Set.prototype should have a values method");
}catch(e){}
            try {
o7.o8(Set.prototype.hasOwnProperty(Symbol.iterator), "Set.prototype should have an @@iterator method");
}catch(e){}

            try {
o7.o9(0, Set.prototype.entries.length, "entries method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Set.prototype.values.length, "values method takes zero arguments");
}catch(e){}

            try {
o7.o8(Set.prototype.values === Set.prototype.keys, "Set.prototype's keys property is the same function as its values() method");
}catch(e){}
            try {
o7.o8(Set.prototype.values === Set.prototype[Symbol.iterator], "Set.prototype's @@iterator is the same function as its values() method");
}catch(e){}
        }
    },
    {
        name: "String.prototype should have iterator APIs (@@iterator only)",
        o5: function () {
            try {
o7.o8(String.prototype.hasOwnProperty(Symbol.iterator), "String.prototype should have an @@iterator method");
}catch(e){}

            try {
o7.o14(String.prototype.hasOwnProperty('entries'), "String.prototype should not have an entries method");
}catch(e){}
            try {
o7.o14(String.prototype.hasOwnProperty('keys'), "String.prototype should not have a keys method");
}catch(e){}
            try {
o7.o14(String.prototype.hasOwnProperty('values'), "String.prototype should not have a values method");
}catch(e){}
        }
    },
    {
        name: "Array.prototype iterator APIs should throw when called with this equal to undefined or null",
        o5: function () {
            try {
o7.o15(function () { try {
Array.prototype.entries.call(null);
}catch(e){} }, o16, "Array.prototype.entries throws if this is null", "Array.prototype.entries: 'this' is null or undefined");
}catch(e){}
            try {
o7.o15(function () { try {
Array.prototype.entries.call(undefined);
}catch(e){} }, o16, "Array.prototype.entries throws if this is undefined", "Array.prototype.entries: 'this' is null or undefined");
}catch(e){}

            try {
o7.o15(function () { try {
Array.prototype.keys.call(null);
}catch(e){} }, o16, "Array.prototype.keys throws if this is null", "Array.prototype.keys: 'this' is null or undefined");
}catch(e){}
            try {
o7.o15(function () { try {
Array.prototype.keys.call(undefined);
}catch(e){} }, o16, "Array.prototype.keys throws if this is undefined", "Array.prototype.keys: 'this' is null or undefined");
}catch(e){}

            try {
o7.o15(function () { try {
Array.prototype.values.call(null);
}catch(e){} }, o16, "Array.prototype.values throws if this is null", "Array.prototype.values: 'this' is null or undefined");
}catch(e){}
            try {
o7.o15(function () { try {
Array.prototype.values.call(undefined);
}catch(e){} }, o16, "Array.prototype.values throws if this is undefined", "Array.prototype.values: 'this' is null or undefined");
}catch(e){}
        }
    },
    {
        name: "Map.prototype iterator APIs should throw when called with this equal to anything other than a Map object",
        o5: function () {
            try {
o7.o15(function () { try {
Map.prototype.entries.call(null);
}catch(e){} }, o16, "Map.prototype.entries throws if this is null", "Map.prototype.entries: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.entries.call(undefined);
}catch(e){} }, o16, "Map.prototype.entries throws if this is undefined", "Map.prototype.entries: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.entries.call(123);
}catch(e){} }, o16, "Map.prototype.entries throws if this is a number", "Map.prototype.entries: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.entries.call("abc");
}catch(e){} }, o16, "Map.prototype.entries throws if this is a string", "Map.prototype.entries: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.entries.call({ });
}catch(e){} }, o16, "Map.prototype.entries throws if this is a non-Map object", "Map.prototype.entries: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.entries.call(new Set());
}catch(e){} }, o16, "Map.prototype.entries throws if this is a non-Map object (e.g. a Set)", "Map.prototype.entries: 'this' is not a Map object");
}catch(e){}

            try {
o7.o15(function () { try {
Map.prototype.keys.call(null);
}catch(e){} }, o16, "Map.prototype.keys throws if this is null", "Map.prototype.keys: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.keys.call(undefined);
}catch(e){} }, o16, "Map.prototype.keys throws if this is undefined", "Map.prototype.keys: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.keys.call(123);
}catch(e){} }, o16, "Map.prototype.keys throws if this is a number", "Map.prototype.keys: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.keys.call("abc");
}catch(e){} }, o16, "Map.prototype.keys throws if this is a string", "Map.prototype.keys: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.keys.call({ });
}catch(e){} }, o16, "Map.prototype.keys throws if this is a non-Map object", "Map.prototype.keys: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.keys.call(new Set());
}catch(e){} }, o16, "Map.prototype.keys throws if this is a non-Map object (e.g. a Set)", "Map.prototype.keys: 'this' is not a Map object");
}catch(e){}

            try {
o7.o15(function () { try {
Map.prototype.values.call(null);
}catch(e){} }, o16, "Map.prototype.values throws if this is null", "Map.prototype.values: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.values.call(undefined);
}catch(e){} }, o16, "Map.prototype.values throws if this is undefined", "Map.prototype.values: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.values.call(123);
}catch(e){} }, o16, "Map.prototype.values throws if this is a number", "Map.prototype.values: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.values.call("abc");
}catch(e){} }, o16, "Map.prototype.values throws if this is a string", "Map.prototype.values: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.values.call({ });
}catch(e){} }, o16, "Map.prototype.values throws if this is a non-Map object", "Map.prototype.values: 'this' is not a Map object");
}catch(e){}
            try {
o7.o15(function () { try {
Map.prototype.values.call(new Set());
}catch(e){} }, o16, "Map.prototype.values throws if this is a non-Map object (e.g. a Set)", "Map.prototype.values: 'this' is not a Map object");
}catch(e){}
        }
    },
    {
        name: "Set.prototype iterator APIs should throw when called with this equal to anything other than a Set object",
        o5: function () {
            try {
o7.o15(function () { try {
Set.prototype.entries.call(null);
}catch(e){} }, o16, "Set.prototype.entries throws if this is null", "Set.prototype.entries: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.entries.call(undefined);
}catch(e){} }, o16, "Set.prototype.entries throws if this is undefined", "Set.prototype.entries: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.entries.call(123);
}catch(e){} }, o16, "Set.prototype.entries throws if this is a number", "Set.prototype.entries: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.entries.call("abc");
}catch(e){} }, o16, "Set.prototype.entries throws if this is a string", "Set.prototype.entries: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.entries.call({ });
}catch(e){} }, o16, "Set.prototype.entries throws if this is a non-Set object", "Set.prototype.entries: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.entries.call(new Map());
}catch(e){} }, o16, "Set.prototype.entries throws if this is a non-Set object (e.g. a Map)", "Set.prototype.entries: 'this' is not a Set object");
}catch(e){}

            try {
o7.o15(function () { try {
Set.prototype.values.call(null);
}catch(e){} }, o16, "Set.prototype.values throws if this is null", "Set.prototype.values: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.values.call(undefined);
}catch(e){} }, o16, "Set.prototype.values throws if this is undefined", "Set.prototype.values: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.values.call(123);
}catch(e){} }, o16, "Set.prototype.values throws if this is a number", "Set.prototype.values: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.values.call("abc");
}catch(e){} }, o16, "Set.prototype.values throws if this is a string", "Set.prototype.values: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.values.call({ });
}catch(e){} }, o16, "Set.prototype.values throws if this is a non-Set object", "Set.prototype.values: 'this' is not a Set object");
}catch(e){}
            try {
o7.o15(function () { try {
Set.prototype.values.call(new Map());
}catch(e){} }, o16, "Set.prototype.values throws if this is a non-Set object (e.g. a Map)", "Set.prototype.values: 'this' is not a Set object");
}catch(e){}
        }
    },
    {
        name: "String.prototype iterator APIs should throw when called with this equal to undefined or null",
        o5: function () {
            try {
o7.o15(function () { try {
String.prototype[Symbol.iterator].call(null);
}catch(e){} }, o16, "String.prototype[Symbol.iterator] throws if this is null", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
}catch(e){}
            try {
o7.o15(function () { try {
String.prototype[Symbol.iterator].call(undefined);
}catch(e){} }, o16, "String.prototype[Symbol.iterator] throws if this is undefined", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
}catch(e){}
        }
    },
    {
        name: "%ArrayIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o17 = Object.getPrototypeOf([].values());

            try {
o7.o8(o17.hasOwnProperty('next'), "%ArrayIteratorPrototype% should have a next method");
}catch(e){}
            try {
o7.o14(o17.hasOwnProperty(Symbol.iterator), "%ArrayIteratorPrototype% should not have a @@iterator method");
}catch(e){}
            try {
o7.o8(o17.hasOwnProperty(Symbol.toStringTag), "%ArrayIteratorPrototype% should have a @@toStringTag property");
}catch(e){}

            try {
o7.o9(0, o17.next.length, "next method takes zero arguments");
}catch(e){}

            try {
o7.o9("Array Iterator", o17[Symbol.toStringTag], "@@toStringTag is the string value 'Array Iterator'");
}catch(e){}

            try {
o7.o15(function () { try {
o17.next.call(123);
}catch(e){} }, o16, "%ArrayIteratorPrototype%.next() throws if its 'this' is not an object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o17.next.call("o");
}catch(e){} }, o16, "%ArrayIteratorPrototype%.next() throws if its 'this' is not an object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o17.next.call({ });
}catch(e){} }, o16, "%ArrayIteratorPrototype%.next() throws if its 'this' is an object but not an Array Iterator object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
}catch(e){}
        }
    },
    {
        name: "%MapIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o18 = Object.getPrototypeOf((new Map()).values());

            try {
o7.o8(o18.hasOwnProperty('next'), "%MapIteratorPrototype% should have a next method");
}catch(e){}
            try {
o7.o14(o18.hasOwnProperty(Symbol.iterator), "%MapIteratorPrototype% should not have a @@iterator method");
}catch(e){}
            try {
o7.o8(o18.hasOwnProperty(Symbol.toStringTag), "%MapIteratorPrototype% should have a @@toStringTag property");
}catch(e){}

            try {
o7.o9(0, o18.next.length, "next method takes zero arguments");
}catch(e){}

            try {
o7.o9("Map Iterator", o18[Symbol.toStringTag], "@@toStringTag is the string value 'Map Iterator'");
}catch(e){}

            try {
o7.o15(function () { try {
o18.next.call(123);
}catch(e){} }, o16, "%MapIteratorPrototype%.next() throws if its 'this' is not an object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o18.next.call("o");
}catch(e){} }, o16, "%MapIteratorPrototype%.next() throws if its 'this' is not an object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o18.next.call({ });
}catch(e){} }, o16, "%MapIteratorPrototype%.next() throws if its 'this' is an object but not a Map Iterator object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
}catch(e){}
        }
    },
    {
        name: "%SetIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o19 = Object.getPrototypeOf((new Set()).values());

            try {
o7.o8(o19.hasOwnProperty('next'), "%SetIteratorPrototype% should have a next method");
}catch(e){}
            try {
o7.o14(o19.hasOwnProperty(Symbol.iterator), "%SetIteratorPrototype% should not have a @@iterator method");
}catch(e){}
            try {
o7.o8(o19.hasOwnProperty(Symbol.toStringTag), "%SetIteratorPrototype% should have a @@toStringTag property");
}catch(e){}

            try {
o7.o9(0, o19.next.length, "next method takes zero arguments");
}catch(e){}

            try {
o7.o9("Set Iterator", o19[Symbol.toStringTag], "@@toStringTag is the string value 'Set Iterator'");
}catch(e){}

            try {
o7.o15(function () { try {
o19.next.call(123);
}catch(e){} }, o16, "%SetIteratorPrototype%.next() throws if its 'this' is not an object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o19.next.call("o");
}catch(e){} }, o16, "%SetIteratorPrototype%.next() throws if its 'this' is not an object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o19.next.call({ });
}catch(e){} }, o16, "%SetIteratorPrototype%.next() throws if its 'this' is an object but not a Set Iterator object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
}catch(e){}
        }
    },
    {
        name: "%StringIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o19 = Object.getPrototypeOf(""[Symbol.iterator]());

            try {
o7.o8(o19.hasOwnProperty('next'), "%StringIteratorPrototype% should have a next method");
}catch(e){}
            try {
o7.o14(o19.hasOwnProperty(Symbol.iterator), "%StringIteratorPrototype% should not have a @@iterator method");
}catch(e){}
            try {
o7.o8(o19.hasOwnProperty(Symbol.toStringTag), "%StringIteratorPrototype% should have a @@toStringTag property");
}catch(e){}

            try {
o7.o9(0, o19.next.length, "next method takes zero arguments");
}catch(e){}

            try {
o7.o9("String Iterator", o19[Symbol.toStringTag], "@@toStringTag is the string value 'String Iterator'");
}catch(e){}

            try {
o7.o15(function () { try {
o19.next.call(123);
}catch(e){} }, o16, "%StringIteratorPrototype%.next() throws if its 'this' is not an object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o19.next.call("o");
}catch(e){} }, o16, "%StringIteratorPrototype%.next() throws if its 'this' is not an object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
}catch(e){}
            try {
o7.o15(function () { try {
o19.next.call({ });
}catch(e){} }, o16, "%StringIteratorPrototype%.next() throws if its 'this' is an object but not a String Iterator object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
}catch(e){}
        }
    },
    {
        name: "Array iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o21 = [ o20.entries(), o20.entries(), o20.keys(), o20.keys(), o20.values(), o20.values() ];

            try {
for (var o22 = 0; o22 < o21.length; o22++) {
                try {
for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    try {
o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

            try {
for (var o22 = 0; o22 < o21.length - 1; o22++) {
                try {
o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %ArrayIteratorPrototype%");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Map iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var map = o2();
            var o21 = [ map.entries(), map.entries(), map.keys(), map.keys(), map.values(), map.values() ];

            try {
for (var o22 = 0; o22 < o21.length; o22++) {
                try {
for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    try {
o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

            try {
for (var o22 = 0; o22 < o21.length - 1; o22++) {
                try {
o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Set iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var set = new Set(); try {
set.add('a');
}catch(e){} try {
set.add('b');
}catch(e){} try {
set.add('c');
}catch(e){} try {
set.add('d');
}catch(e){} try {
set.add('e');
}catch(e){}
            var o21 = [ set.entries(), set.entries(), set.values(), set.values() ];

            try {
for (var o22 = 0; o22 < o21.length; o22++) {
                try {
for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    try {
o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

            try {
for (var o22 = 0; o22 < o21.length - 1; o22++) {
                try {
o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "String iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var o24 = "abcde";
            var o21 = [ o24[Symbol.iterator](), o24[Symbol.iterator]() ];

            try {
for (var o22 = 0; o22 < o21.length; o22++) {
                try {
for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    try {
o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

            try {
for (var o22 = 0; o22 < o21.length - 1; o22++) {
                try {
o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Empty array or array-like objects give back iterators that are immediately complete",
        o5: function () {
            var o25;
            var o20 = [ ];
            var o26 = { length: 0 };

            try {
o25 = o20.entries();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "array entries iterator is initially complete for empty arrays");
}catch(e){}

            try {
o25 = o20.keys();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "array keys iterator is initially complete for empty arrays");
}catch(e){}

            try {
o25 = o20.values();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "array values iterator is initially complete for empty arrays");
}catch(e){}

            try {
o25 = Array.prototype.entries.call(o26);
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "array entries iterator is initially complete for empty array-like objects");
}catch(e){}

            try {
o25 = Array.prototype.keys.call(o26);
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "array keys iterator is initially complete for empty array-like objects");
}catch(e){}

            try {
o25 = Array.prototype.values.call(o26);
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "array values iterator is initially complete for empty array-like objects");
}catch(e){}
        }
    },
    {
        name: "Empty (new and cleared) Map objects give back iterators that are immediately complete",
        o5: function () {
            var o25;
            var map = new Map();

            try {
o25 = map.entries();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "map entries iterator is initially complete for empty maps (new)");
}catch(e){}

            try {
o25 = map.keys();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "map keys iterator is initially complete for empty maps (new)");
}catch(e){}

            try {
o25 = map.values();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "map values iterator is initially complete for empty maps (new)");
}catch(e){}

            try {
map.set('z', 'a');
}catch(e){}
            try {
map.set('y', 'b');
}catch(e){}
            try {
map.set('x', 'c');
}catch(e){}
            try {
map.o27();
}catch(e){}

            try {
o25 = map.entries();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "map entries iterator is initially complete for empty maps (cleared)");
}catch(e){}

            try {
o25 = map.keys();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "map keys iterator is initially complete for empty maps (cleared)");
}catch(e){}

            try {
o25 = map.values();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "map values iterator is initially complete for empty maps (cleared)");
}catch(e){}
        }
    },
    {
        name: "Empty (new and cleared) Set objects give back iterators that are immediately complete",
        o5: function () {
            var o25;
            var set = new Set();

            try {
o25 = set.entries();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "set entries iterator is initially complete for empty sets (new)");
}catch(e){}

            try {
o25 = set.values();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "set values iterator is initially complete for empty sets (new)");
}catch(e){}

            try {
set.add('a');
}catch(e){}
            try {
set.add('b');
}catch(e){}
            try {
set.add('c');
}catch(e){}
            try {
set.o27();
}catch(e){}

            try {
o25 = set.entries();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "set entries iterator is initially complete for empty sets (cleared)");
}catch(e){}

            try {
o25 = set.values();
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "set values iterator is initially complete for empty sets (cleared)");
}catch(e){}
        }
    },
    {
        name: "Empty strings give back iterators that are immediately complete",
        o5: function () {
            var o25 = ""[Symbol.iterator]();
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "string iterator is initially complete for empty strings");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.entries gives back iterator over the index-element (key-value) pairs of an array in index order",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o25 = o20.entries();

            try {
o7.o9({ done: false, value: [ 0, 'a' ] }, o25.next(), "1st result of entries iterator is index 0 and element 'a' as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 1, 'b' ] }, o25.next(), "2nd result of entries iterator is index 1 and element 'b' as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 2, 'c' ] }, o25.next(), "3rd result of entries iterator is index 2 and element 'c' as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 3, 'd' ] }, o25.next(), "4th result of entries iterator is index 3 and element 'd' as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 4, 'e' ] }, o25.next(), "5th result of entries iterator is index 4 and element 'e' as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "entries iterator completes after all 5 entries");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.keys gives back iterator over the indices of an array in index order",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o25 = o20.keys();

            try {
o7.o9({ done: false, value: 0 }, o25.next(), "1st result of keys iterator is index 0");
}catch(e){}
            try {
o7.o9({ done: false, value: 1 }, o25.next(), "2nd result of keys iterator is index 1");
}catch(e){}
            try {
o7.o9({ done: false, value: 2 }, o25.next(), "3rd result of keys iterator is index 2");
}catch(e){}
            try {
o7.o9({ done: false, value: 3 }, o25.next(), "4th result of keys iterator is index 3");
}catch(e){}
            try {
o7.o9({ done: false, value: 4 }, o25.next(), "5th result of keys iterator is index 4");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "keys iterator completes after all 5 keys");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.values gives back iterator over the elements of an array in index order",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o25 = o20.values();

            try {
o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator is element 'a'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator is element 'b'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of values iterator is element 'c'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of values iterator is element 'd'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of values iterator is element 'e'");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "values iterator completes after all 5 values");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "Map.prototype.entries gives back iterator over the key-value pairs of a map in insertion order",
        o5: function () {
            var map = o2();
            var o25 = map.entries();

            try {
o7.o9({ done: false, value: [ 1, 6 ] }, o25.next(), "1st result of entries iterator is key 1 and value 6 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 2, 7 ] }, o25.next(), "2nd result of entries iterator is key 2 and value 7 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 3, 8 ] }, o25.next(), "3rd result of entries iterator is key 3 and value 8 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 4, 9 ] }, o25.next(), "4th result of entries iterator is key 4 and value 9 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 5, 10 ] }, o25.next(), "5th result of entries iterator is key 5 and value 10 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "entries iterator completes after all 5 entries");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "Map.prototype.keys gives back iterator over the keys of a map in insertion order",
        o5: function () {
            var map = o2();
            var o25 = map.keys();

            try {
o7.o9({ done: false, value: 1 }, o25.next(), "1st result of keys iterator is key 1");
}catch(e){}
            try {
o7.o9({ done: false, value: 2 }, o25.next(), "2nd result of keys iterator is key 2");
}catch(e){}
            try {
o7.o9({ done: false, value: 3 }, o25.next(), "3rd result of keys iterator is key 3");
}catch(e){}
            try {
o7.o9({ done: false, value: 4 }, o25.next(), "4th result of keys iterator is key 4");
}catch(e){}
            try {
o7.o9({ done: false, value: 5 }, o25.next(), "5th result of keys iterator is key 5");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "keys iterator completes after all 5 entries");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "Map.prototype.values gives back iterator over the values of a map in insertion order",
        o5: function () {
            var map = o2();
            var o25 = map.values();

            try {
o7.o9({ done: false, value: 6 }, o25.next(), "1st result of values iterator is value 6");
}catch(e){}
            try {
o7.o9({ done: false, value: 7 }, o25.next(), "2nd result of values iterator is value 7");
}catch(e){}
            try {
o7.o9({ done: false, value: 8 }, o25.next(), "3rd result of values iterator is value 8");
}catch(e){}
            try {
o7.o9({ done: false, value: 9 }, o25.next(), "4th result of values iterator is value 9");
}catch(e){}
            try {
o7.o9({ done: false, value: 10 }, o25.next(), "5th result of values iterator is value 10");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "values iterator completes after all 5 entries");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "Set.prototype.entries gives back iterator over the 'key-value' pairs (i.e. the values twice) of a set in insertion order",
        o5: function () {
            var set = o3();
            var o25 = set.entries();

            try {
o7.o9({ done: false, value: [ 1, 1 ] }, o25.next(), "1st result of entries iterator is key 1 and value 1 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 2, 2 ] }, o25.next(), "2nd result of entries iterator is key 2 and value 2 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 3, 3 ] }, o25.next(), "3rd result of entries iterator is key 3 and value 3 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 4, 4 ] }, o25.next(), "4th result of entries iterator is key 4 and value 4 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 5, 5 ] }, o25.next(), "5th result of entries iterator is key 5 and value 5 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "entries iterator completes after all 5 entries");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "Set.prototype.values gives back iterator over the values of a set in insertion order",
        o5: function () {
            var set = o3();
            var o25 = set.values();

            try {
o7.o9({ done: false, value: 1 }, o25.next(), "1st result of values iterator is value 1");
}catch(e){}
            try {
o7.o9({ done: false, value: 2 }, o25.next(), "2nd result of values iterator is value 2");
}catch(e){}
            try {
o7.o9({ done: false, value: 3 }, o25.next(), "3rd result of values iterator is value 3");
}catch(e){}
            try {
o7.o9({ done: false, value: 4 }, o25.next(), "4th result of values iterator is value 4");
}catch(e){}
            try {
o7.o9({ done: false, value: 5 }, o25.next(), "5th result of values iterator is value 5");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "values iterator completes after all 5 entries");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        }
    },
    {
        name: "String.prototype[Symbol.iterator] gives back iterator over the code points of a string in forward order",
        o5: function () {
            var o24 = "abcde";
            var o25 = o24[Symbol.iterator]();

            try {
o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of string iterator is string 'a'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of string iterator is string 'b'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of string iterator is string 'c'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of string iterator is string 'd'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of string iterator is string 'e'");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "string iterator completes after all 5 code points");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}

            // a string with code points requiring surrogate pairs
            try {
o24 = "ab\uD834\uDD1Ec\uD801\uDC27";
}catch(e){}
            var o25 = o24[Symbol.iterator]();

            try {
o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of string iterator is string 'a' (surrogate pairs)");
}catch(e){}
            try {
o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of string iterator is string 'b' (surrogate pairs)");
}catch(e){}
            try {
o7.o9({ done: false, value: '\u{1D11E}' }, o25.next(), "3rd result of string iterator is string '\\u{1D11E}' (surrogate pairs)");
}catch(e){}
            try {
o7.o9({ done: false, value: 'c' }, o25.next(), "4th result of string iterator is string 'c' (surrogate pairs)");
}catch(e){}
            try {
o7.o9({ done: false, value: '\uD801\uDC27' }, o25.next(), "5th result of string iterator is string '\\uD801\\uDC27' (surrogate pairs)");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "string iterator completes after all 5 code points (surrogate pairs)");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value (surrogate pairs)");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value (checking twice) (surrogate pairs)");
}catch(e){}
        }
    },
    {
        name: "Array Iterator can be used on array-like objects; those that have length properties",
        o5: function () {
            var o28 = { length: 5, 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e' };

            var o25 = Array.prototype.values.call(o28);

            try {
o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator on array-like object is element 'a'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator on array-like object is element 'b'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of values iterator on array-like object is element 'c'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of values iterator on array-like object is element 'd'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of values iterator on array-like object is element 'e'");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "values iterator on array-like object completes after all 5 values");
}catch(e){}

            // Setting the length lower should be reflected by the iterator
            try {
o28.length = 2;
}catch(e){}
            try {
o25 = Array.prototype.values.call(o28);
}catch(e){}

            try {
o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator on array-like object is element 'a'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator on array-like object is element 'b'");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "values iterator on array-like object completes after 2 values");
}catch(e){}

            // Setting the length higher should also be reflected, giving undefined for the non-existent properties
            try {
o28.length = 7;
}catch(e){}
            var o25 = Array.prototype.values.call(o28);

            try {
o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator on array-like object is element 'a'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator on array-like object is element 'b'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of values iterator on array-like object is element 'c'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of values iterator on array-like object is element 'd'");
}catch(e){}
            try {
o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of values iterator on array-like object is element 'e'");
}catch(e){}
            try {
o7.o9({ done: false, value: undefined }, o25.next(), "Sixth result of values iterator on array-like object is element undefined");
}catch(e){}
            try {
o7.o9({ done: false, value: undefined }, o25.next(), "Seventh result of values iterator on array-like object is element undefined");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "values iterator on array-like object completes after 7 values");
}catch(e){}
        }
    },
    {
        name: "Array Iterator created with an object whose length property is negative should be complete upon creation (and other funny values for length)",
        o5: function () {
            var o28 = { length: -1, 0: 'a', 1: 'b' };

            var o25 = Array.prototype[Symbol.iterator].call(o28);

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = -1");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length = -1");
}catch(e){}

            try {
o28.length = Number.NaN;
}catch(e){}
            try {
o25 = Array.prototype[Symbol.iterator].call(o28);
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = NaN");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length = NaN");
}catch(e){}

            try {
o28.length = -0;
}catch(e){}
            try {
o25 = Array.prototype[Symbol.iterator].call(o28);
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = -0");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length =  -0");
}catch(e){}

            try {
o28.length = Number.NEGATIVE_INFINITY;
}catch(e){}
            try {
o25 = Array.prototype[Symbol.iterator].call(o28);
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = -Infinity");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length = -Infinity");
}catch(e){}

            try {
o28.length = Number.o29;
}catch(e){}
            try {
o25 = Array.prototype[Symbol.iterator].call(o28);
}catch(e){}

            try {
o7.o9({ done: false, value: 'a' }, o25.next(), "Iterator is not initially complete for length = +Infinity; length is capped at 2^53 - 1");
}catch(e){}
            try {
o7.o9({ done: false, value: 'b' }, o25.next(), "Iterator would take a long time to complete for length = +Infinity (capped at 2^53 - 1)");
}catch(e){}
        }
    },
    {
        name: "Map iterator should enumerate all map items if any deletes occur on items that have already been enumerated",
        o5: function () {
            var o22 = 0;
            var map = o2();

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
map.o32(key);
}catch(e){}
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate keys 1, 2, 3, 4, 5 in that order");
}catch(e){}
                try {
o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 6, 7, 8, 9, 10 in that order");
}catch(e){}
            }
}catch(e){}

            try {
for (var o30 of map.entries()) {
                try {
o7.o33("Shouldn't execute; map should be empty");
}catch(e){}
            }
}catch(e){}


            try {
o22 = 0;
}catch(e){}
            try {
map = o2();
}catch(e){}

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
if (key >= 3) {
                    try {
map.o32(key - 2);
}catch(e){}
                }
}catch(e){}
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate keys 1, 2, 3, 4, 5 in that order");
}catch(e){}
                try {
o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 6, 7, 8, 9, 10 in that order");
}catch(e){}
            }
}catch(e){}

            try {
o22 = 3;
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate keys 4, 5 in that order");
}catch(e){}
                try {
o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 9, 10 in that order");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Map iterator should not enumerate map items that are deleted during enumeration before being visited",
        o5: function () {
            var o22 = 1;
            var map = o2();

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o7.o8(key == o22, "map.entries() should enumerate keys 1, 3, 5 in that order");
}catch(e){}
                try {
o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 6, 8, 10 in that order");
}catch(e){}
                try {
map.o32(key + 1);
}catch(e){}
                try {
o22 += 2;
}catch(e){}
            }
}catch(e){}

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o7.o8(key == 1, "map.entries() should enumerate key 1 only");
}catch(e){}
                try {
o7.o8(o31 == 6, "map.entries() should enumerate value 6 only");
}catch(e){}
                try {
map.o32(3);
}catch(e){}
                try {
map.o32(5);
}catch(e){}
            }
}catch(e){}

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o7.o8(key == 1, "map.entries() should enumerate 1 only again");
}catch(e){}
                try {
o7.o8(o31 == 6, "map.entries() should enumerate value 6 only again");
}catch(e){}
                try {
map.o32(1);
}catch(e){}
            }
}catch(e){}

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o7.o33("Shouldn't execute, map should be empty");
}catch(e){}
            }
}catch(e){}


            try {
map = o2();
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
map.o32(6 - key);
}catch(e){}
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22 && key <= 3, "map.entries() should enumerate keys 1, 2, 3 in that order");
}catch(e){}
                try {
o7.o8(o31 == o22 + 5 && o31 <= 8, "map.entries() should enumerate values 6, 7, 8 in that order");
}catch(e){}
            }
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22 && key <= 2, "map.entries() should enumerate 1, 2 in that order");
}catch(e){}
                try {
o7.o8(o31 == o22 + 5 && o31 <= 7, "map.entries() should enumerate values 6, 7 in that order");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Map iterator should continue to enumerate items as long as they are added but only if they were not already in the map, and changing an existing key's value doesn't change its position",
        o5: function () {
            var o22 = 0;
            var map = new Map();
            try {
map.set(1, 21);
}catch(e){}

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate keys 1 through 20 in order");
}catch(e){}
                try {
o7.o8(o31 == o22 + 20, "map.entries() should enumerate values 21 through 40 in order");
}catch(e){}
                try {
if (key < 20)
                {
                    try {
map.set(key + 1, o31 + 1);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 20, "map.entries() should have enumerated up to 20");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should only enumerate 1 through 20 in order once each, no duplicates");
}catch(e){}
                try {
if (key < 20)
                {
                    try {
map.set(key + 1, o22);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 20, "map.entries() should have enumerated up to 20 again");
}catch(e){}
        }
    },
    {
        name: "Map iterator should stop enumerating items if the map is cleared during enumeration",
        o5: function () {
            var o22 = 0;
            var map = o2();

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate 1 and stop");
}catch(e){}
                try {
if (key == 1)
                {
                    try {
map.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 1, "map.entries() should have stopped after 1");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
map = o2();
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate 1, 2 and stop");
}catch(e){}
                try {
if (key == 2)
                {
                    try {
map.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 2, "map.entries() should have stopped after 1, 2");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
map = o2();
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3 and stop");
}catch(e){}
                try {
if (key == 3)
                {
                    try {
map.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 3, "map.entries() should have stopped after 1, 2, 3");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
map = o2();
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3, 4 and stop");
}catch(e){}
                try {
if (key == 4)
                {
                    try {
map.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 4, "map.entries() should have stopped after 1, 2, 3, 4");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
map = o2();
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3, 4, 5 and stop");
}catch(e){}
                try {
if (key == 5)
                {
                    try {
map.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 5, "map.entries() should have enumerated all 1, 2, 3, 4, 5");
}catch(e){}
            try {
o7.o8(map.o34 == 0, "map should be empty");
}catch(e){}
        }
    },
    {
        name: "Map iterator should revisit items if they are removed after being visited but re-added before enumeration stops",
        o5: function () {
            var o22 = 0;
            var map = o2();

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
if (key == 3) {
                    try {
map.o32(2);
}catch(e){}
                    try {
map.o32(1);
}catch(e){}
                    try {
map.set(1);
}catch(e){}
                    try {
map.set(2);
}catch(e){}
                }
}catch(e){}

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
}catch(e){}
                try {
if (key == 5) {
                    try {
o22 = 0;
}catch(e){}
                }
}catch(e){}

            }
}catch(e){}

            try {
o22 = 2;
}catch(e){}
            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(key == o22, "map.entries() should enumerate 3, 4, 5, 1, 2 in that order");
}catch(e){}
                try {
if (key == 5) {
                    try {
o22 = 0;
}catch(e){}
                }
}catch(e){}

            }
}catch(e){}
        }
    },
    {
        name: "Map iterator should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        o5: function () {
            var map = new Map();
            try {
map.set(1, 0);
}catch(e){}
            try {
map.set(2, 1);
}catch(e){}

            var keys = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var o22 = 0;

            try {
for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                try {
if (o22 < 9) {
                    try {
if (key == 1) {
                        try {
map.o32(1);
}catch(e){}
                        try {
map.set(2, o22 + 1);
}catch(e){}
                    } else try {
if (key == 2) {
                        try {
map.o32(2);
}catch(e){}
                        try {
map.set(1, o22 + 1);
}catch(e){}
                    }
}catch(e){}
}catch(e){}
                }
}catch(e){}

                try {
o7.o8(key == keys[o22], "map.entries() should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");
}catch(e){}
                try {
o7.o8(o31 == o22, "map.entries() should enumerate values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9");
}catch(e){}

                try {
o22 += 1;
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 10, "map.entries() should have called the callback 10 times");
}catch(e){}
        }
    },
    {
        name: "Set iterator should enumerate set items in insertion order and should not call the callback for empty sets",
        o5: function () {
            var o22 = 0;
            var set = o3();

            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
}catch(e){}
            }
}catch(e){}

            // a second forEach should start at the beginning again
            try {
o22 = 0;
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "Repeated set.values() should enumerate 1, 2, 3, 4, 5 in that order again");
}catch(e){}
            }
}catch(e){}

            try {
set.o27();
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o7.o33("Shouldn't execute; set should be empty");
}catch(e){}
            }
}catch(e){}


            try {
set = new Set();
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o7.o33("Shouldn't execute; set should be empty");
}catch(e){}
            }
}catch(e){}

        }
    },
    {
        name: "Set iterator should enumerate all set items if any deletes occur on items that have already been enumerated",
        o5: function () {
            var o22 = 0;
            var set = o3();

            try {
for (var o31 of set.values()) {
                try {
set.o32(o31);
}catch(e){}
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
}catch(e){}
            }
}catch(e){}

            try {
for (var o31 of set.values()) {
                try {
o7.o33("Shouldn't execute; set should be empty");
}catch(e){}
            }
}catch(e){}


            try {
o22 = 0;
}catch(e){}
            try {
set = o3();
}catch(e){}

            try {
for (var o31 of set.values()) {
                try {
if (o31 >= 3) {
                    try {
set.o32(o31 - 2);
}catch(e){}
                }
}catch(e){}
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
}catch(e){}
            }
}catch(e){}

            try {
o22 = 3;
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 4, 5 in that order");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Set iterator should not enumerate set items that are deleted during enumeration before being visited",
        o5: function () {
            var o22 = 1;
            var set = o3();

            try {
for (var o31 of set.values()) {
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 3, 5 in that order");
}catch(e){}
                try {
set.o32(o31 + 1);
}catch(e){}
                try {
o22 += 2;
}catch(e){}
            }
}catch(e){}

            try {
for (var o31 of set.values()) {
                try {
o7.o8(o31 == 1, "set.values() should enumerate 1 only");
}catch(e){}
                try {
set.o32(3);
}catch(e){}
                try {
set.o32(5);
}catch(e){}
            }
}catch(e){}

            try {
for (var o31 of set.values()) {
                try {
o7.o8(o31 == 1, "set.values() should enumerate 1 only again");
}catch(e){}
                try {
set.o32(1);
}catch(e){}
            }
}catch(e){}

            try {
for (var o31 of set.values()) {
                try {
o7.o33("Shouldn't execute, set should be empty");
}catch(e){}
            }
}catch(e){}


            try {
set = o3();
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
set.o32(6 - o31);
}catch(e){}
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22 && o31 <= 3, "set.values() should enumerate 1, 2, 3 in that order");
}catch(e){}
            }
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22 && o31 <= 2, "set.values() should enumerate 1, 2 in that order");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Set iterator should continue to enumerate items as long as they are added but only if they were not already in the set",
        o5: function () {
            var o22 = 0;
            var set = new Set();
            try {
set.add(1);
}catch(e){}

            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1 through 20 in order");
}catch(e){}
                try {
if (o31 < 20)
                {
                    try {
set.add(o31 + 1);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 20, "set.values() should have enumerated up to 20");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should only enumerate 1 through 20 in order once each, no duplicates");
}catch(e){}
                try {
if (o31 < 20)
                {
                    try {
set.add(o31 + 1);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 20, "set.values() should have enumerated up to 20 again");
}catch(e){}
        }
    },
    {
        name: "Set iterator should stop enumerating items if the set is cleared during enumeration",
        o5: function () {
            var o22 = 0;
            var set = o3();

            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1 and stop");
}catch(e){}
                try {
if (o31 == 1)
                {
                    try {
set.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 1, "set.values() should have stopped after 1");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
set = o3();
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2 and stop");
}catch(e){}
                try {
if (o31 == 2)
                {
                    try {
set.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 2, "set.values() should have stopped after 1, 2");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
set = o3();
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3 and stop");
}catch(e){}
                try {
if (o31 == 3)
                {
                    try {
set.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 3, "set.values() should have stopped after 1, 2, 3");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
set = o3();
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4 and stop");
}catch(e){}
                try {
if (o31 == 4)
                {
                    try {
set.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 4, "set.values() should have stopped after 1, 2, 3, 4");
}catch(e){}

            try {
o22 = 0;
}catch(e){}
            try {
set = o3();
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 and stop");
}catch(e){}
                try {
if (o31 == 5)
                {
                    try {
set.o27();
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 5, "set.values() should have enumerated all 1, 2, 3, 4, 5");
}catch(e){}
            try {
o7.o8(set.o34 == 0, "set should be empty");
}catch(e){}
        }
    },
    {
        name: "Set iterator should revisit items if they are removed after being visited but re-added before enumeration stops",
        o5: function () {
            var o22 = 0;
            var set = o3();

            try {
for (var o31 of set.values()) {
                try {
if (o31 == 3) {
                    try {
set.o32(2);
}catch(e){}
                    try {
set.o32(1);
}catch(e){}
                    try {
set.add(1);
}catch(e){}
                    try {
set.add(2);
}catch(e){}
                }
}catch(e){}

                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
}catch(e){}
                try {
if (o31 == 5) {
                    try {
o22 = 0;
}catch(e){}
                }
}catch(e){}

            }
}catch(e){}

            try {
o22 = 2;
}catch(e){}
            try {
for (var o31 of set.values()) {
                try {
o22 += 1;
}catch(e){}
                try {
o7.o8(o31 == o22, "set.values() should enumerate 3, 4, 5, 1, 2 in that order");
}catch(e){}
                try {
if (o31 == 5) {
                    try {
o22 = 0;
}catch(e){}
                }
}catch(e){}

            }
}catch(e){}
        }
    },
    {
        name: "Set iterator should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        o5: function () {
            var set = new Set();
            try {
set.add(1);
}catch(e){}
            try {
set.add(2);
}catch(e){}

            var o35 = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var o22 = 0;

            try {
for (var o31 of set.values()) {
                try {
if (o22 < 9) {
                    try {
if (o31 == 1) {
                        try {
set.o32(1);
}catch(e){}
                        try {
set.add(2);
}catch(e){}
                    } else try {
if (o31 == 2) {
                        try {
set.o32(2);
}catch(e){}
                        try {
set.add(1);
}catch(e){}
                    }
}catch(e){}
}catch(e){}
                }
}catch(e){}

                try {
o7.o8(o31 == o35[o22], "set.values() should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");
}catch(e){}

                try {
o22 += 1;
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 10, "set.values() should have called the callback 10 times");
}catch(e){}
        }
    },
];

try {
o36.o37(o4, { o38: o0.o39[0] != "summary" });
}catch(e){}
