//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Iterators Built-In APIs tests -- verifies the shape and basic behavior of the built-in iterators (Array, String, Map, Set)

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2() {
    var map = new Map();

    map.set(1, 6);
    map.set(2, 7);
    map.set(3, 8);
    map.set(4, 9);
    map.set(5, 10);

    return map;
}

function o3() {
    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);

    return set;
}

var o4 = [
    {
        name: "%IteratorPrototype% apis",
        o5: function () {
            var o6 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

            o7.o8(o6.hasOwnProperty(Symbol.iterator), "%IteratorPrototype% should have a @@iterator method");

            o7.o9(0, o6[Symbol.iterator].length, "@@iterator method takes zero arguments");
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

            o7.o9(o6, Object.getPrototypeOf(o11), "%MapIteratorPrototype%'s prototype is %IteratorPrototype%");
            o7.o9(o6, Object.getPrototypeOf(o12), "%SetIteratorPrototype%'s prototype is %IteratorPrototype%");
            o7.o9(o6, Object.getPrototypeOf(o13), "%StringIteratorPrototype%'s prototype is %IteratorPrototype%");
        }
    },
    {
        name: "Array.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o5: function () {
            o7.o8(Array.prototype.hasOwnProperty('entries'), "Array.prototype should have an entries method");
            o7.o8(Array.prototype.hasOwnProperty('keys'), "Array.prototype should have a keys method");
            o7.o8(Array.prototype.hasOwnProperty('values'), "Array.prototype should have a values method");
            o7.o8(Array.prototype.hasOwnProperty(Symbol.iterator), "Array.prototype should have an @@iterator method");

            o7.o9(0, Array.prototype.entries.length, "entries method takes zero arguments");
            o7.o9(0, Array.prototype.keys.length, "keys method takes zero arguments");
            o7.o9(0, Array.prototype.values.length, "values method takes zero arguments");

            o7.o8(Array.prototype.values === Array.prototype[Symbol.iterator], "Array.prototype's @@iterator is the same function as its values() method");
        }
    },
    {
        name: "Map.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o5: function () {
            o7.o8(Map.prototype.hasOwnProperty('entries'), "Map.prototype should have an entries method");
            o7.o8(Map.prototype.hasOwnProperty('keys'), "Map.prototype should have a keys method");
            o7.o8(Map.prototype.hasOwnProperty('values'), "Map.prototype should have a values method");
            o7.o8(Map.prototype.hasOwnProperty(Symbol.iterator), "Map.prototype should have an @@iterator method");

            o7.o9(0, Map.prototype.entries.length, "entries method takes zero arguments");
            o7.o9(0, Map.prototype.keys.length, "keys method takes zero arguments");
            o7.o9(0, Map.prototype.values.length, "values method takes zero arguments");

            o7.o8(Map.prototype.entries === Map.prototype[Symbol.iterator], "Map.prototype's @@iterator is the same function as its entries() method");
        }
    },
    {
        name: "Set.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o5: function () {
            o7.o8(Set.prototype.hasOwnProperty('entries'), "Set.prototype should have an entries method");
            o7.o8(Set.prototype.hasOwnProperty('keys'), "Set.prototype should have a keys method");
            o7.o8(Set.prototype.hasOwnProperty('values'), "Set.prototype should have a values method");
            o7.o8(Set.prototype.hasOwnProperty(Symbol.iterator), "Set.prototype should have an @@iterator method");

            o7.o9(0, Set.prototype.entries.length, "entries method takes zero arguments");
            o7.o9(0, Set.prototype.values.length, "values method takes zero arguments");

            o7.o8(Set.prototype.values === Set.prototype.keys, "Set.prototype's keys property is the same function as its values() method");
            o7.o8(Set.prototype.values === Set.prototype[Symbol.iterator], "Set.prototype's @@iterator is the same function as its values() method");
        }
    },
    {
        name: "String.prototype should have iterator APIs (@@iterator only)",
        o5: function () {
            o7.o8(String.prototype.hasOwnProperty(Symbol.iterator), "String.prototype should have an @@iterator method");

            o7.o14(String.prototype.hasOwnProperty('entries'), "String.prototype should not have an entries method");
            o7.o14(String.prototype.hasOwnProperty('keys'), "String.prototype should not have a keys method");
            o7.o14(String.prototype.hasOwnProperty('values'), "String.prototype should not have a values method");
        }
    },
    {
        name: "Array.prototype iterator APIs should throw when called with this equal to undefined or null",
        o5: function () {
            o7.o15(function () { Array.prototype.entries.call(null); }, o16, "Array.prototype.entries throws if this is null", "Array.prototype.entries: 'this' is null or undefined");
            o7.o15(function () { Array.prototype.entries.call(undefined); }, o16, "Array.prototype.entries throws if this is undefined", "Array.prototype.entries: 'this' is null or undefined");

            o7.o15(function () { Array.prototype.keys.call(null); }, o16, "Array.prototype.keys throws if this is null", "Array.prototype.keys: 'this' is null or undefined");
            o7.o15(function () { Array.prototype.keys.call(undefined); }, o16, "Array.prototype.keys throws if this is undefined", "Array.prototype.keys: 'this' is null or undefined");

            o7.o15(function () { Array.prototype.values.call(null); }, o16, "Array.prototype.values throws if this is null", "Array.prototype.values: 'this' is null or undefined");
            o7.o15(function () { Array.prototype.values.call(undefined); }, o16, "Array.prototype.values throws if this is undefined", "Array.prototype.values: 'this' is null or undefined");
        }
    },
    {
        name: "Map.prototype iterator APIs should throw when called with this equal to anything other than a Map object",
        o5: function () {
            o7.o15(function () { Map.prototype.entries.call(null); }, o16, "Map.prototype.entries throws if this is null", "Map.prototype.entries: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.entries.call(undefined); }, o16, "Map.prototype.entries throws if this is undefined", "Map.prototype.entries: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.entries.call(123); }, o16, "Map.prototype.entries throws if this is a number", "Map.prototype.entries: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.entries.call("abc"); }, o16, "Map.prototype.entries throws if this is a string", "Map.prototype.entries: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.entries.call({ }); }, o16, "Map.prototype.entries throws if this is a non-Map object", "Map.prototype.entries: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.entries.call(new Set()); }, o16, "Map.prototype.entries throws if this is a non-Map object (e.g. a Set)", "Map.prototype.entries: 'this' is not a Map object");

            o7.o15(function () { Map.prototype.keys.call(null); }, o16, "Map.prototype.keys throws if this is null", "Map.prototype.keys: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.keys.call(undefined); }, o16, "Map.prototype.keys throws if this is undefined", "Map.prototype.keys: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.keys.call(123); }, o16, "Map.prototype.keys throws if this is a number", "Map.prototype.keys: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.keys.call("abc"); }, o16, "Map.prototype.keys throws if this is a string", "Map.prototype.keys: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.keys.call({ }); }, o16, "Map.prototype.keys throws if this is a non-Map object", "Map.prototype.keys: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.keys.call(new Set()); }, o16, "Map.prototype.keys throws if this is a non-Map object (e.g. a Set)", "Map.prototype.keys: 'this' is not a Map object");

            o7.o15(function () { Map.prototype.values.call(null); }, o16, "Map.prototype.values throws if this is null", "Map.prototype.values: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.values.call(undefined); }, o16, "Map.prototype.values throws if this is undefined", "Map.prototype.values: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.values.call(123); }, o16, "Map.prototype.values throws if this is a number", "Map.prototype.values: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.values.call("abc"); }, o16, "Map.prototype.values throws if this is a string", "Map.prototype.values: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.values.call({ }); }, o16, "Map.prototype.values throws if this is a non-Map object", "Map.prototype.values: 'this' is not a Map object");
            o7.o15(function () { Map.prototype.values.call(new Set()); }, o16, "Map.prototype.values throws if this is a non-Map object (e.g. a Set)", "Map.prototype.values: 'this' is not a Map object");
        }
    },
    {
        name: "Set.prototype iterator APIs should throw when called with this equal to anything other than a Set object",
        o5: function () {
            o7.o15(function () { Set.prototype.entries.call(null); }, o16, "Set.prototype.entries throws if this is null", "Set.prototype.entries: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.entries.call(undefined); }, o16, "Set.prototype.entries throws if this is undefined", "Set.prototype.entries: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.entries.call(123); }, o16, "Set.prototype.entries throws if this is a number", "Set.prototype.entries: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.entries.call("abc"); }, o16, "Set.prototype.entries throws if this is a string", "Set.prototype.entries: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.entries.call({ }); }, o16, "Set.prototype.entries throws if this is a non-Set object", "Set.prototype.entries: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.entries.call(new Map()); }, o16, "Set.prototype.entries throws if this is a non-Set object (e.g. a Map)", "Set.prototype.entries: 'this' is not a Set object");

            o7.o15(function () { Set.prototype.values.call(null); }, o16, "Set.prototype.values throws if this is null", "Set.prototype.values: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.values.call(undefined); }, o16, "Set.prototype.values throws if this is undefined", "Set.prototype.values: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.values.call(123); }, o16, "Set.prototype.values throws if this is a number", "Set.prototype.values: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.values.call("abc"); }, o16, "Set.prototype.values throws if this is a string", "Set.prototype.values: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.values.call({ }); }, o16, "Set.prototype.values throws if this is a non-Set object", "Set.prototype.values: 'this' is not a Set object");
            o7.o15(function () { Set.prototype.values.call(new Map()); }, o16, "Set.prototype.values throws if this is a non-Set object (e.g. a Map)", "Set.prototype.values: 'this' is not a Set object");
        }
    },
    {
        name: "String.prototype iterator APIs should throw when called with this equal to undefined or null",
        o5: function () {
            o7.o15(function () { String.prototype[Symbol.iterator].call(null); }, o16, "String.prototype[Symbol.iterator] throws if this is null", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
            o7.o15(function () { String.prototype[Symbol.iterator].call(undefined); }, o16, "String.prototype[Symbol.iterator] throws if this is undefined", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
        }
    },
    {
        name: "%ArrayIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o17 = Object.getPrototypeOf([].values());

            o7.o8(o17.hasOwnProperty('next'), "%ArrayIteratorPrototype% should have a next method");
            o7.o14(o17.hasOwnProperty(Symbol.iterator), "%ArrayIteratorPrototype% should not have a @@iterator method");
            o7.o8(o17.hasOwnProperty(Symbol.toStringTag), "%ArrayIteratorPrototype% should have a @@toStringTag property");

            o7.o9(0, o17.next.length, "next method takes zero arguments");

            o7.o9("Array Iterator", o17[Symbol.toStringTag], "@@toStringTag is the string value 'Array Iterator'");

            o7.o15(function () { o17.next.call(123); }, o16, "%ArrayIteratorPrototype%.next() throws if its 'this' is not an object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
            o7.o15(function () { o17.next.call("o"); }, o16, "%ArrayIteratorPrototype%.next() throws if its 'this' is not an object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
            o7.o15(function () { o17.next.call({ }); }, o16, "%ArrayIteratorPrototype%.next() throws if its 'this' is an object but not an Array Iterator object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
        }
    },
    {
        name: "%MapIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o18 = Object.getPrototypeOf((new Map()).values());

            o7.o8(o18.hasOwnProperty('next'), "%MapIteratorPrototype% should have a next method");
            o7.o14(o18.hasOwnProperty(Symbol.iterator), "%MapIteratorPrototype% should not have a @@iterator method");
            o7.o8(o18.hasOwnProperty(Symbol.toStringTag), "%MapIteratorPrototype% should have a @@toStringTag property");

            o7.o9(0, o18.next.length, "next method takes zero arguments");

            o7.o9("Map Iterator", o18[Symbol.toStringTag], "@@toStringTag is the string value 'Map Iterator'");

            o7.o15(function () { o18.next.call(123); }, o16, "%MapIteratorPrototype%.next() throws if its 'this' is not an object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
            o7.o15(function () { o18.next.call("o"); }, o16, "%MapIteratorPrototype%.next() throws if its 'this' is not an object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
            o7.o15(function () { o18.next.call({ }); }, o16, "%MapIteratorPrototype%.next() throws if its 'this' is an object but not a Map Iterator object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
        }
    },
    {
        name: "%SetIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o19 = Object.getPrototypeOf((new Set()).values());

            o7.o8(o19.hasOwnProperty('next'), "%SetIteratorPrototype% should have a next method");
            o7.o14(o19.hasOwnProperty(Symbol.iterator), "%SetIteratorPrototype% should not have a @@iterator method");
            o7.o8(o19.hasOwnProperty(Symbol.toStringTag), "%SetIteratorPrototype% should have a @@toStringTag property");

            o7.o9(0, o19.next.length, "next method takes zero arguments");

            o7.o9("Set Iterator", o19[Symbol.toStringTag], "@@toStringTag is the string value 'Set Iterator'");

            o7.o15(function () { o19.next.call(123); }, o16, "%SetIteratorPrototype%.next() throws if its 'this' is not an object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
            o7.o15(function () { o19.next.call("o"); }, o16, "%SetIteratorPrototype%.next() throws if its 'this' is not an object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
            o7.o15(function () { o19.next.call({ }); }, o16, "%SetIteratorPrototype%.next() throws if its 'this' is an object but not a Set Iterator object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
        }
    },
    {
        name: "%StringIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o5: function () {
            var o19 = Object.getPrototypeOf(""[Symbol.iterator]());

            o7.o8(o19.hasOwnProperty('next'), "%StringIteratorPrototype% should have a next method");
            o7.o14(o19.hasOwnProperty(Symbol.iterator), "%StringIteratorPrototype% should not have a @@iterator method");
            o7.o8(o19.hasOwnProperty(Symbol.toStringTag), "%StringIteratorPrototype% should have a @@toStringTag property");

            o7.o9(0, o19.next.length, "next method takes zero arguments");

            o7.o9("String Iterator", o19[Symbol.toStringTag], "@@toStringTag is the string value 'String Iterator'");

            o7.o15(function () { o19.next.call(123); }, o16, "%StringIteratorPrototype%.next() throws if its 'this' is not an object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
            o7.o15(function () { o19.next.call("o"); }, o16, "%StringIteratorPrototype%.next() throws if its 'this' is not an object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
            o7.o15(function () { o19.next.call({ }); }, o16, "%StringIteratorPrototype%.next() throws if its 'this' is an object but not a String Iterator object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
        }
    },
    {
        name: "Array iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o21 = [ o20.entries(), o20.entries(), o20.keys(), o20.keys(), o20.values(), o20.values() ];

            for (var o22 = 0; o22 < o21.length; o22++) {
                for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
                }
            }

            for (var o22 = 0; o22 < o21.length - 1; o22++) {
                o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %ArrayIteratorPrototype%");
            }
        }
    },
    {
        name: "Map iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var map = o2();
            var o21 = [ map.entries(), map.entries(), map.keys(), map.keys(), map.values(), map.values() ];

            for (var o22 = 0; o22 < o21.length; o22++) {
                for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
                }
            }

            for (var o22 = 0; o22 < o21.length - 1; o22++) {
                o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
            }
        }
    },
    {
        name: "Set iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var set = new Set(); set.add('a'); set.add('b'); set.add('c'); set.add('d'); set.add('e');
            var o21 = [ set.entries(), set.entries(), set.values(), set.values() ];

            for (var o22 = 0; o22 < o21.length; o22++) {
                for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
                }
            }

            for (var o22 = 0; o22 < o21.length - 1; o22++) {
                o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
            }
        }
    },
    {
        name: "String iterator methods return new objects every time they are called but all have the same prototype",
        o5: function () {
            var o24 = "abcde";
            var o21 = [ o24[Symbol.iterator](), o24[Symbol.iterator]() ];

            for (var o22 = 0; o22 < o21.length; o22++) {
                for (var o23 = o22 + 1; o23 < o21.length; o23++) {
                    o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object");
                }
            }

            for (var o22 = 0; o22 < o21.length - 1; o22++) {
                o7.o8(Object.getPrototypeOf(o21[o22]) === Object.getPrototypeOf(o21[o22 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
            }
        }
    },
    {
        name: "Empty array or array-like objects give back iterators that are immediately complete",
        o5: function () {
            var o25;
            var o20 = [ ];
            var o26 = { length: 0 };

            o25 = o20.entries();
            o7.o9({ done: true, value: undefined }, o25.next(), "array entries iterator is initially complete for empty arrays");

            o25 = o20.keys();
            o7.o9({ done: true, value: undefined }, o25.next(), "array keys iterator is initially complete for empty arrays");

            o25 = o20.values();
            o7.o9({ done: true, value: undefined }, o25.next(), "array values iterator is initially complete for empty arrays");

            o25 = Array.prototype.entries.call(o26);
            o7.o9({ done: true, value: undefined }, o25.next(), "array entries iterator is initially complete for empty array-like objects");

            o25 = Array.prototype.keys.call(o26);
            o7.o9({ done: true, value: undefined }, o25.next(), "array keys iterator is initially complete for empty array-like objects");

            o25 = Array.prototype.values.call(o26);
            o7.o9({ done: true, value: undefined }, o25.next(), "array values iterator is initially complete for empty array-like objects");
        }
    },
    {
        name: "Empty (new and cleared) Map objects give back iterators that are immediately complete",
        o5: function () {
            var o25;
            var map = new Map();

            o25 = map.entries();
            o7.o9({ done: true, value: undefined }, o25.next(), "map entries iterator is initially complete for empty maps (new)");

            o25 = map.keys();
            o7.o9({ done: true, value: undefined }, o25.next(), "map keys iterator is initially complete for empty maps (new)");

            o25 = map.values();
            o7.o9({ done: true, value: undefined }, o25.next(), "map values iterator is initially complete for empty maps (new)");

            map.set('z', 'a');
            map.set('y', 'b');
            map.set('x', 'c');
            map.o27();

            o25 = map.entries();
            o7.o9({ done: true, value: undefined }, o25.next(), "map entries iterator is initially complete for empty maps (cleared)");

            o25 = map.keys();
            o7.o9({ done: true, value: undefined }, o25.next(), "map keys iterator is initially complete for empty maps (cleared)");

            o25 = map.values();
            o7.o9({ done: true, value: undefined }, o25.next(), "map values iterator is initially complete for empty maps (cleared)");
        }
    },
    {
        name: "Empty (new and cleared) Set objects give back iterators that are immediately complete",
        o5: function () {
            var o25;
            var set = new Set();

            o25 = set.entries();
            o7.o9({ done: true, value: undefined }, o25.next(), "set entries iterator is initially complete for empty sets (new)");

            o25 = set.values();
            o7.o9({ done: true, value: undefined }, o25.next(), "set values iterator is initially complete for empty sets (new)");

            set.add('a');
            set.add('b');
            set.add('c');
            set.o27();

            o25 = set.entries();
            o7.o9({ done: true, value: undefined }, o25.next(), "set entries iterator is initially complete for empty sets (cleared)");

            o25 = set.values();
            o7.o9({ done: true, value: undefined }, o25.next(), "set values iterator is initially complete for empty sets (cleared)");
        }
    },
    {
        name: "Empty strings give back iterators that are immediately complete",
        o5: function () {
            var o25 = ""[Symbol.iterator]();
            o7.o9({ done: true, value: undefined }, o25.next(), "string iterator is initially complete for empty strings");
        }
    },
    {
        name: "Array.prototype.entries gives back iterator over the index-element (key-value) pairs of an array in index order",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o25 = o20.entries();

            o7.o9({ done: false, value: [ 0, 'a' ] }, o25.next(), "1st result of entries iterator is index 0 and element 'a' as a two element array pair");
            o7.o9({ done: false, value: [ 1, 'b' ] }, o25.next(), "2nd result of entries iterator is index 1 and element 'b' as a two element array pair");
            o7.o9({ done: false, value: [ 2, 'c' ] }, o25.next(), "3rd result of entries iterator is index 2 and element 'c' as a two element array pair");
            o7.o9({ done: false, value: [ 3, 'd' ] }, o25.next(), "4th result of entries iterator is index 3 and element 'd' as a two element array pair");
            o7.o9({ done: false, value: [ 4, 'e' ] }, o25.next(), "5th result of entries iterator is index 4 and element 'e' as a two element array pair");
            o7.o9({ done: true, value: undefined }, o25.next(), "entries iterator completes after all 5 entries");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Array.prototype.keys gives back iterator over the indices of an array in index order",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o25 = o20.keys();

            o7.o9({ done: false, value: 0 }, o25.next(), "1st result of keys iterator is index 0");
            o7.o9({ done: false, value: 1 }, o25.next(), "2nd result of keys iterator is index 1");
            o7.o9({ done: false, value: 2 }, o25.next(), "3rd result of keys iterator is index 2");
            o7.o9({ done: false, value: 3 }, o25.next(), "4th result of keys iterator is index 3");
            o7.o9({ done: false, value: 4 }, o25.next(), "5th result of keys iterator is index 4");
            o7.o9({ done: true, value: undefined }, o25.next(), "keys iterator completes after all 5 keys");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Array.prototype.values gives back iterator over the elements of an array in index order",
        o5: function () {
            var o20 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o25 = o20.values();

            o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator is element 'a'");
            o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator is element 'b'");
            o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of values iterator is element 'c'");
            o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of values iterator is element 'd'");
            o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of values iterator is element 'e'");
            o7.o9({ done: true, value: undefined }, o25.next(), "values iterator completes after all 5 values");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Map.prototype.entries gives back iterator over the key-value pairs of a map in insertion order",
        o5: function () {
            var map = o2();
            var o25 = map.entries();

            o7.o9({ done: false, value: [ 1, 6 ] }, o25.next(), "1st result of entries iterator is key 1 and value 6 as a two element array pair");
            o7.o9({ done: false, value: [ 2, 7 ] }, o25.next(), "2nd result of entries iterator is key 2 and value 7 as a two element array pair");
            o7.o9({ done: false, value: [ 3, 8 ] }, o25.next(), "3rd result of entries iterator is key 3 and value 8 as a two element array pair");
            o7.o9({ done: false, value: [ 4, 9 ] }, o25.next(), "4th result of entries iterator is key 4 and value 9 as a two element array pair");
            o7.o9({ done: false, value: [ 5, 10 ] }, o25.next(), "5th result of entries iterator is key 5 and value 10 as a two element array pair");
            o7.o9({ done: true, value: undefined }, o25.next(), "entries iterator completes after all 5 entries");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Map.prototype.keys gives back iterator over the keys of a map in insertion order",
        o5: function () {
            var map = o2();
            var o25 = map.keys();

            o7.o9({ done: false, value: 1 }, o25.next(), "1st result of keys iterator is key 1");
            o7.o9({ done: false, value: 2 }, o25.next(), "2nd result of keys iterator is key 2");
            o7.o9({ done: false, value: 3 }, o25.next(), "3rd result of keys iterator is key 3");
            o7.o9({ done: false, value: 4 }, o25.next(), "4th result of keys iterator is key 4");
            o7.o9({ done: false, value: 5 }, o25.next(), "5th result of keys iterator is key 5");
            o7.o9({ done: true, value: undefined }, o25.next(), "keys iterator completes after all 5 entries");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Map.prototype.values gives back iterator over the values of a map in insertion order",
        o5: function () {
            var map = o2();
            var o25 = map.values();

            o7.o9({ done: false, value: 6 }, o25.next(), "1st result of values iterator is value 6");
            o7.o9({ done: false, value: 7 }, o25.next(), "2nd result of values iterator is value 7");
            o7.o9({ done: false, value: 8 }, o25.next(), "3rd result of values iterator is value 8");
            o7.o9({ done: false, value: 9 }, o25.next(), "4th result of values iterator is value 9");
            o7.o9({ done: false, value: 10 }, o25.next(), "5th result of values iterator is value 10");
            o7.o9({ done: true, value: undefined }, o25.next(), "values iterator completes after all 5 entries");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Set.prototype.entries gives back iterator over the 'key-value' pairs (i.e. the values twice) of a set in insertion order",
        o5: function () {
            var set = o3();
            var o25 = set.entries();

            o7.o9({ done: false, value: [ 1, 1 ] }, o25.next(), "1st result of entries iterator is key 1 and value 1 as a two element array pair");
            o7.o9({ done: false, value: [ 2, 2 ] }, o25.next(), "2nd result of entries iterator is key 2 and value 2 as a two element array pair");
            o7.o9({ done: false, value: [ 3, 3 ] }, o25.next(), "3rd result of entries iterator is key 3 and value 3 as a two element array pair");
            o7.o9({ done: false, value: [ 4, 4 ] }, o25.next(), "4th result of entries iterator is key 4 and value 4 as a two element array pair");
            o7.o9({ done: false, value: [ 5, 5 ] }, o25.next(), "5th result of entries iterator is key 5 and value 5 as a two element array pair");
            o7.o9({ done: true, value: undefined }, o25.next(), "entries iterator completes after all 5 entries");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Set.prototype.values gives back iterator over the values of a set in insertion order",
        o5: function () {
            var set = o3();
            var o25 = set.values();

            o7.o9({ done: false, value: 1 }, o25.next(), "1st result of values iterator is value 1");
            o7.o9({ done: false, value: 2 }, o25.next(), "2nd result of values iterator is value 2");
            o7.o9({ done: false, value: 3 }, o25.next(), "3rd result of values iterator is value 3");
            o7.o9({ done: false, value: 4 }, o25.next(), "4th result of values iterator is value 4");
            o7.o9({ done: false, value: 5 }, o25.next(), "5th result of values iterator is value 5");
            o7.o9({ done: true, value: undefined }, o25.next(), "values iterator completes after all 5 entries");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "String.prototype[Symbol.iterator] gives back iterator over the code points of a string in forward order",
        o5: function () {
            var o24 = "abcde";
            var o25 = o24[Symbol.iterator]();

            o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of string iterator is string 'a'");
            o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of string iterator is string 'b'");
            o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of string iterator is string 'c'");
            o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of string iterator is string 'd'");
            o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of string iterator is string 'e'");
            o7.o9({ done: true, value: undefined }, o25.next(), "string iterator completes after all 5 code points");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value (checking twice)");

            // a string with code points requiring surrogate pairs
            o24 = "ab\uD834\uDD1Ec\uD801\uDC27";
            var o25 = o24[Symbol.iterator]();

            o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of string iterator is string 'a' (surrogate pairs)");
            o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of string iterator is string 'b' (surrogate pairs)");
            o7.o9({ done: false, value: '\u{1D11E}' }, o25.next(), "3rd result of string iterator is string '\\u{1D11E}' (surrogate pairs)");
            o7.o9({ done: false, value: 'c' }, o25.next(), "4th result of string iterator is string 'c' (surrogate pairs)");
            o7.o9({ done: false, value: '\uD801\uDC27' }, o25.next(), "5th result of string iterator is string '\\uD801\\uDC27' (surrogate pairs)");
            o7.o9({ done: true, value: undefined }, o25.next(), "string iterator completes after all 5 code points (surrogate pairs)");

            o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value (surrogate pairs)");
            o7.o9({ done: true, value: undefined }, o25.next(), "calling string iterator's next method after it has completed yields the same undefined result value (checking twice) (surrogate pairs)");
        }
    },
    {
        name: "Array Iterator can be used on array-like objects; those that have length properties",
        o5: function () {
            var o28 = { length: 5, 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e' };

            var o25 = Array.prototype.values.call(o28);

            o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator on array-like object is element 'a'");
            o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator on array-like object is element 'b'");
            o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of values iterator on array-like object is element 'c'");
            o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of values iterator on array-like object is element 'd'");
            o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of values iterator on array-like object is element 'e'");
            o7.o9({ done: true, value: undefined }, o25.next(), "values iterator on array-like object completes after all 5 values");

            // Setting the length lower should be reflected by the iterator
            o28.length = 2;
            o25 = Array.prototype.values.call(o28);

            o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator on array-like object is element 'a'");
            o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator on array-like object is element 'b'");
            o7.o9({ done: true, value: undefined }, o25.next(), "values iterator on array-like object completes after 2 values");

            // Setting the length higher should also be reflected, giving undefined for the non-existent properties
            o28.length = 7;
            var o25 = Array.prototype.values.call(o28);

            o7.o9({ done: false, value: 'a' }, o25.next(), "1st result of values iterator on array-like object is element 'a'");
            o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of values iterator on array-like object is element 'b'");
            o7.o9({ done: false, value: 'c' }, o25.next(), "3rd result of values iterator on array-like object is element 'c'");
            o7.o9({ done: false, value: 'd' }, o25.next(), "4th result of values iterator on array-like object is element 'd'");
            o7.o9({ done: false, value: 'e' }, o25.next(), "5th result of values iterator on array-like object is element 'e'");
            o7.o9({ done: false, value: undefined }, o25.next(), "Sixth result of values iterator on array-like object is element undefined");
            o7.o9({ done: false, value: undefined }, o25.next(), "Seventh result of values iterator on array-like object is element undefined");
            o7.o9({ done: true, value: undefined }, o25.next(), "values iterator on array-like object completes after 7 values");
        }
    },
    {
        name: "Array Iterator created with an object whose length property is negative should be complete upon creation (and other funny values for length)",
        o5: function () {
            var o28 = { length: -1, 0: 'a', 1: 'b' };

            var o25 = Array.prototype[Symbol.iterator].call(o28);

            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = -1");
            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length = -1");

            o28.length = Number.NaN;
            o25 = Array.prototype[Symbol.iterator].call(o28);

            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = NaN");
            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length = NaN");

            o28.length = -0;
            o25 = Array.prototype[Symbol.iterator].call(o28);

            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = -0");
            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length =  -0");

            o28.length = Number.NEGATIVE_INFINITY;
            o25 = Array.prototype[Symbol.iterator].call(o28);

            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator is initially complete for length = -Infinity");
            o7.o9({ done: true, value: undefined }, o25.next(), "Iterator remains complete length = -Infinity");

            o28.length = Number.o29;
            o25 = Array.prototype[Symbol.iterator].call(o28);

            o7.o9({ done: false, value: 'a' }, o25.next(), "Iterator is not initially complete for length = +Infinity; length is capped at 2^53 - 1");
            o7.o9({ done: false, value: 'b' }, o25.next(), "Iterator would take a long time to complete for length = +Infinity (capped at 2^53 - 1)");
        }
    },
    {
        name: "Map iterator should enumerate all map items if any deletes occur on items that have already been enumerated",
        o5: function () {
            var o22 = 0;
            var map = o2();

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                map.o32(key);
                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate keys 1, 2, 3, 4, 5 in that order");
                o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 6, 7, 8, 9, 10 in that order");
            }

            for (var o30 of map.entries()) {
                o7.o33("Shouldn't execute; map should be empty");
            }


            o22 = 0;
            map = o2();

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                if (key >= 3) {
                    map.o32(key - 2);
                }
                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate keys 1, 2, 3, 4, 5 in that order");
                o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 6, 7, 8, 9, 10 in that order");
            }

            o22 = 3;
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate keys 4, 5 in that order");
                o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 9, 10 in that order");
            }
        }
    },
    {
        name: "Map iterator should not enumerate map items that are deleted during enumeration before being visited",
        o5: function () {
            var o22 = 1;
            var map = o2();

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o7.o8(key == o22, "map.entries() should enumerate keys 1, 3, 5 in that order");
                o7.o8(o31 == o22 + 5, "map.entries() should enumerate values 6, 8, 10 in that order");
                map.o32(key + 1);
                o22 += 2;
            }

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o7.o8(key == 1, "map.entries() should enumerate key 1 only");
                o7.o8(o31 == 6, "map.entries() should enumerate value 6 only");
                map.o32(3);
                map.o32(5);
            }

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o7.o8(key == 1, "map.entries() should enumerate 1 only again");
                o7.o8(o31 == 6, "map.entries() should enumerate value 6 only again");
                map.o32(1);
            }

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o7.o33("Shouldn't execute, map should be empty");
            }


            map = o2();

            o22 = 0;
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                map.o32(6 - key);
                o22 += 1;
                o7.o8(key == o22 && key <= 3, "map.entries() should enumerate keys 1, 2, 3 in that order");
                o7.o8(o31 == o22 + 5 && o31 <= 8, "map.entries() should enumerate values 6, 7, 8 in that order");
            }

            o22 = 0;
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22 && key <= 2, "map.entries() should enumerate 1, 2 in that order");
                o7.o8(o31 == o22 + 5 && o31 <= 7, "map.entries() should enumerate values 6, 7 in that order");
            }
        }
    },
    {
        name: "Map iterator should continue to enumerate items as long as they are added but only if they were not already in the map, and changing an existing key's value doesn't change its position",
        o5: function () {
            var o22 = 0;
            var map = new Map();
            map.set(1, 21);

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate keys 1 through 20 in order");
                o7.o8(o31 == o22 + 20, "map.entries() should enumerate values 21 through 40 in order");
                if (key < 20)
                {
                    map.set(key + 1, o31 + 1);
                }
            }
            o7.o8(o22 == 20, "map.entries() should have enumerated up to 20");

            o22 = 0;
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should only enumerate 1 through 20 in order once each, no duplicates");
                if (key < 20)
                {
                    map.set(key + 1, o22);
                }
            }
            o7.o8(o22 == 20, "map.entries() should have enumerated up to 20 again");
        }
    },
    {
        name: "Map iterator should stop enumerating items if the map is cleared during enumeration",
        o5: function () {
            var o22 = 0;
            var map = o2();

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate 1 and stop");
                if (key == 1)
                {
                    map.o27();
                }
            }
            o7.o8(o22 == 1, "map.entries() should have stopped after 1");

            o22 = 0;
            map = o2();
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate 1, 2 and stop");
                if (key == 2)
                {
                    map.o27();
                }
            }
            o7.o8(o22 == 2, "map.entries() should have stopped after 1, 2");

            o22 = 0;
            map = o2();
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3 and stop");
                if (key == 3)
                {
                    map.o27();
                }
            }
            o7.o8(o22 == 3, "map.entries() should have stopped after 1, 2, 3");

            o22 = 0;
            map = o2();
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3, 4 and stop");
                if (key == 4)
                {
                    map.o27();
                }
            }
            o7.o8(o22 == 4, "map.entries() should have stopped after 1, 2, 3, 4");

            o22 = 0;
            map = o2();
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3, 4, 5 and stop");
                if (key == 5)
                {
                    map.o27();
                }
            }
            o7.o8(o22 == 5, "map.entries() should have enumerated all 1, 2, 3, 4, 5");
            o7.o8(map.o34 == 0, "map should be empty");
        }
    },
    {
        name: "Map iterator should revisit items if they are removed after being visited but re-added before enumeration stops",
        o5: function () {
            var o22 = 0;
            var map = o2();

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                if (key == 3) {
                    map.o32(2);
                    map.o32(1);
                    map.set(1);
                    map.set(2);
                }

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
                if (key == 5) {
                    o22 = 0;
                }

            }

            o22 = 2;
            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                o22 += 1;
                o7.o8(key == o22, "map.entries() should enumerate 3, 4, 5, 1, 2 in that order");
                if (key == 5) {
                    o22 = 0;
                }

            }
        }
    },
    {
        name: "Map iterator should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        o5: function () {
            var map = new Map();
            map.set(1, 0);
            map.set(2, 1);

            var keys = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var o22 = 0;

            for (var o30 of map.entries()) {
                var key = o30[0];
                var o31 = o30[1];

                if (o22 < 9) {
                    if (key == 1) {
                        map.o32(1);
                        map.set(2, o22 + 1);
                    } else if (key == 2) {
                        map.o32(2);
                        map.set(1, o22 + 1);
                    }
                }

                o7.o8(key == keys[o22], "map.entries() should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");
                o7.o8(o31 == o22, "map.entries() should enumerate values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9");

                o22 += 1;
            }
            o7.o8(o22 == 10, "map.entries() should have called the callback 10 times");
        }
    },
    {
        name: "Set iterator should enumerate set items in insertion order and should not call the callback for empty sets",
        o5: function () {
            var o22 = 0;
            var set = o3();

            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            // a second forEach should start at the beginning again
            o22 = 0;
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "Repeated set.values() should enumerate 1, 2, 3, 4, 5 in that order again");
            }

            set.o27();
            for (var o31 of set.values()) {
                o7.o33("Shouldn't execute; set should be empty");
            }


            set = new Set();
            for (var o31 of set.values()) {
                o7.o33("Shouldn't execute; set should be empty");
            }

        }
    },
    {
        name: "Set iterator should enumerate all set items if any deletes occur on items that have already been enumerated",
        o5: function () {
            var o22 = 0;
            var set = o3();

            for (var o31 of set.values()) {
                set.o32(o31);
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            for (var o31 of set.values()) {
                o7.o33("Shouldn't execute; set should be empty");
            }


            o22 = 0;
            set = o3();

            for (var o31 of set.values()) {
                if (o31 >= 3) {
                    set.o32(o31 - 2);
                }
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            o22 = 3;
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 4, 5 in that order");
            }
        }
    },
    {
        name: "Set iterator should not enumerate set items that are deleted during enumeration before being visited",
        o5: function () {
            var o22 = 1;
            var set = o3();

            for (var o31 of set.values()) {
                o7.o8(o31 == o22, "set.values() should enumerate 1, 3, 5 in that order");
                set.o32(o31 + 1);
                o22 += 2;
            }

            for (var o31 of set.values()) {
                o7.o8(o31 == 1, "set.values() should enumerate 1 only");
                set.o32(3);
                set.o32(5);
            }

            for (var o31 of set.values()) {
                o7.o8(o31 == 1, "set.values() should enumerate 1 only again");
                set.o32(1);
            }

            for (var o31 of set.values()) {
                o7.o33("Shouldn't execute, set should be empty");
            }


            set = o3();

            o22 = 0;
            for (var o31 of set.values()) {
                set.o32(6 - o31);
                o22 += 1;
                o7.o8(o31 == o22 && o31 <= 3, "set.values() should enumerate 1, 2, 3 in that order");
            }

            o22 = 0;
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22 && o31 <= 2, "set.values() should enumerate 1, 2 in that order");
            }
        }
    },
    {
        name: "Set iterator should continue to enumerate items as long as they are added but only if they were not already in the set",
        o5: function () {
            var o22 = 0;
            var set = new Set();
            set.add(1);

            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1 through 20 in order");
                if (o31 < 20)
                {
                    set.add(o31 + 1);
                }
            }
            o7.o8(o22 == 20, "set.values() should have enumerated up to 20");

            o22 = 0;
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should only enumerate 1 through 20 in order once each, no duplicates");
                if (o31 < 20)
                {
                    set.add(o31 + 1);
                }
            }
            o7.o8(o22 == 20, "set.values() should have enumerated up to 20 again");
        }
    },
    {
        name: "Set iterator should stop enumerating items if the set is cleared during enumeration",
        o5: function () {
            var o22 = 0;
            var set = o3();

            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1 and stop");
                if (o31 == 1)
                {
                    set.o27();
                }
            }
            o7.o8(o22 == 1, "set.values() should have stopped after 1");

            o22 = 0;
            set = o3();
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2 and stop");
                if (o31 == 2)
                {
                    set.o27();
                }
            }
            o7.o8(o22 == 2, "set.values() should have stopped after 1, 2");

            o22 = 0;
            set = o3();
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3 and stop");
                if (o31 == 3)
                {
                    set.o27();
                }
            }
            o7.o8(o22 == 3, "set.values() should have stopped after 1, 2, 3");

            o22 = 0;
            set = o3();
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4 and stop");
                if (o31 == 4)
                {
                    set.o27();
                }
            }
            o7.o8(o22 == 4, "set.values() should have stopped after 1, 2, 3, 4");

            o22 = 0;
            set = o3();
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5 and stop");
                if (o31 == 5)
                {
                    set.o27();
                }
            }
            o7.o8(o22 == 5, "set.values() should have enumerated all 1, 2, 3, 4, 5");
            o7.o8(set.o34 == 0, "set should be empty");
        }
    },
    {
        name: "Set iterator should revisit items if they are removed after being visited but re-added before enumeration stops",
        o5: function () {
            var o22 = 0;
            var set = o3();

            for (var o31 of set.values()) {
                if (o31 == 3) {
                    set.o32(2);
                    set.o32(1);
                    set.add(1);
                    set.add(2);
                }

                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
                if (o31 == 5) {
                    o22 = 0;
                }

            }

            o22 = 2;
            for (var o31 of set.values()) {
                o22 += 1;
                o7.o8(o31 == o22, "set.values() should enumerate 3, 4, 5, 1, 2 in that order");
                if (o31 == 5) {
                    o22 = 0;
                }

            }
        }
    },
    {
        name: "Set iterator should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        o5: function () {
            var set = new Set();
            set.add(1);
            set.add(2);

            var o35 = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var o22 = 0;

            for (var o31 of set.values()) {
                if (o22 < 9) {
                    if (o31 == 1) {
                        set.o32(1);
                        set.add(2);
                    } else if (o31 == 2) {
                        set.o32(2);
                        set.add(1);
                    }
                }

                o7.o8(o31 == o35[o22], "set.values() should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");

                o22 += 1;
            }
            o7.o8(o22 == 10, "set.values() should have called the callback 10 times");
        }
    },
];

o36.o37(o4, { o38: o0.o39[0] != "summary" });
