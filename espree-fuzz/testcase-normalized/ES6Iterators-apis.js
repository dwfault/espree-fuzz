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

function o6() {
    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);

    return set;
}

var o9 = [
    {
        name: "%IteratorPrototype% apis",
        o11: function () {
            var o12 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

            o17.o18(o12.hasOwnProperty(Symbol.iterator), "%IteratorPrototype% should have a @@iterator method");

            o17.o20(0, o12[Symbol.iterator].length, "@@iterator method takes zero arguments");
        }
    },
    {
        name: "%IteratorPrototype% is the prototype of all built-in iterators",
        o11: function () {
            var o22 = Object.getPrototypeOf([][Symbol.iterator]());
            var o23 = Object.getPrototypeOf((new Map())[Symbol.iterator]());
            var o24 = Object.getPrototypeOf((new Set())[Symbol.iterator]());
            var o25 = Object.getPrototypeOf(""[Symbol.iterator]());

            // The only way to get the $IteratorPrototype% object is indirectly so here
            // we just assume array is correct and get it from an array iterator.
            var o12 = Object.getPrototypeOf(o22);

            o17.o20(o12, Object.getPrototypeOf(o23), "%MapIteratorPrototype%'s prototype is %IteratorPrototype%");
            o17.o20(o12, Object.getPrototypeOf(o24), "%SetIteratorPrototype%'s prototype is %IteratorPrototype%");
            o17.o20(o12, Object.getPrototypeOf(o25), "%StringIteratorPrototype%'s prototype is %IteratorPrototype%");
        }
    },
    {
        name: "Array.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o11: function () {
            o17.o18(Array.prototype.hasOwnProperty('entries'), "Array.prototype should have an entries method");
            o17.o18(Array.prototype.hasOwnProperty('keys'), "Array.prototype should have a keys method");
            o17.o18(Array.prototype.hasOwnProperty('values'), "Array.prototype should have a values method");
            o17.o18(Array.prototype.hasOwnProperty(Symbol.iterator), "Array.prototype should have an @@iterator method");

            o17.o20(0, Array.prototype.entries.length, "entries method takes zero arguments");
            o17.o20(0, Array.prototype.keys.length, "keys method takes zero arguments");
            o17.o20(0, Array.prototype.values.length, "values method takes zero arguments");

            o17.o18(Array.prototype.values === Array.prototype[Symbol.iterator], "Array.prototype's @@iterator is the same function as its values() method");
        }
    },
    {
        name: "Map.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o11: function () {
            o17.o18(Map.prototype.hasOwnProperty('entries'), "Map.prototype should have an entries method");
            o17.o18(Map.prototype.hasOwnProperty('keys'), "Map.prototype should have a keys method");
            o17.o18(Map.prototype.hasOwnProperty('values'), "Map.prototype should have a values method");
            o17.o18(Map.prototype.hasOwnProperty(Symbol.iterator), "Map.prototype should have an @@iterator method");

            o17.o20(0, Map.prototype.entries.length, "entries method takes zero arguments");
            o17.o20(0, Map.prototype.keys.length, "keys method takes zero arguments");
            o17.o20(0, Map.prototype.values.length, "values method takes zero arguments");

            o17.o18(Map.prototype.entries === Map.prototype[Symbol.iterator], "Map.prototype's @@iterator is the same function as its entries() method");
        }
    },
    {
        name: "Set.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o11: function () {
            o17.o18(Set.prototype.hasOwnProperty('entries'), "Set.prototype should have an entries method");
            o17.o18(Set.prototype.hasOwnProperty('keys'), "Set.prototype should have a keys method");
            o17.o18(Set.prototype.hasOwnProperty('values'), "Set.prototype should have a values method");
            o17.o18(Set.prototype.hasOwnProperty(Symbol.iterator), "Set.prototype should have an @@iterator method");

            o17.o20(0, Set.prototype.entries.length, "entries method takes zero arguments");
            o17.o20(0, Set.prototype.values.length, "values method takes zero arguments");

            o17.o18(Set.prototype.values === Set.prototype.keys, "Set.prototype's keys property is the same function as its values() method");
            o17.o18(Set.prototype.values === Set.prototype[Symbol.iterator], "Set.prototype's @@iterator is the same function as its values() method");
        }
    },
    {
        name: "String.prototype should have iterator APIs (@@iterator only)",
        o11: function () {
            o17.o18(String.prototype.hasOwnProperty(Symbol.iterator), "String.prototype should have an @@iterator method");

            o17.o32(String.prototype.hasOwnProperty('entries'), "String.prototype should not have an entries method");
            o17.o32(String.prototype.hasOwnProperty('keys'), "String.prototype should not have a keys method");
            o17.o32(String.prototype.hasOwnProperty('values'), "String.prototype should not have a values method");
        }
    },
    {
        name: "Array.prototype iterator APIs should throw when called with this equal to undefined or null",
        o11: function () {
            o17.o33(function () { Array.prototype.entries.call(null); }, o35, "Array.prototype.entries throws if this is null", "Array.prototype.entries: 'this' is null or undefined");
            o17.o33(function () { Array.prototype.entries.call(undefined); }, o35, "Array.prototype.entries throws if this is undefined", "Array.prototype.entries: 'this' is null or undefined");

            o17.o33(function () { Array.prototype.keys.call(null); }, o35, "Array.prototype.keys throws if this is null", "Array.prototype.keys: 'this' is null or undefined");
            o17.o33(function () { Array.prototype.keys.call(undefined); }, o35, "Array.prototype.keys throws if this is undefined", "Array.prototype.keys: 'this' is null or undefined");

            o17.o33(function () { Array.prototype.values.call(null); }, o35, "Array.prototype.values throws if this is null", "Array.prototype.values: 'this' is null or undefined");
            o17.o33(function () { Array.prototype.values.call(undefined); }, o35, "Array.prototype.values throws if this is undefined", "Array.prototype.values: 'this' is null or undefined");
        }
    },
    {
        name: "Map.prototype iterator APIs should throw when called with this equal to anything other than a Map object",
        o11: function () {
            o17.o33(function () { Map.prototype.entries.call(null); }, o35, "Map.prototype.entries throws if this is null", "Map.prototype.entries: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.entries.call(undefined); }, o35, "Map.prototype.entries throws if this is undefined", "Map.prototype.entries: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.entries.call(123); }, o35, "Map.prototype.entries throws if this is a number", "Map.prototype.entries: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.entries.call("abc"); }, o35, "Map.prototype.entries throws if this is a string", "Map.prototype.entries: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.entries.call({ }); }, o35, "Map.prototype.entries throws if this is a non-Map object", "Map.prototype.entries: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.entries.call(new Set()); }, o35, "Map.prototype.entries throws if this is a non-Map object (e.g. a Set)", "Map.prototype.entries: 'this' is not a Map object");

            o17.o33(function () { Map.prototype.keys.call(null); }, o35, "Map.prototype.keys throws if this is null", "Map.prototype.keys: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.keys.call(undefined); }, o35, "Map.prototype.keys throws if this is undefined", "Map.prototype.keys: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.keys.call(123); }, o35, "Map.prototype.keys throws if this is a number", "Map.prototype.keys: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.keys.call("abc"); }, o35, "Map.prototype.keys throws if this is a string", "Map.prototype.keys: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.keys.call({ }); }, o35, "Map.prototype.keys throws if this is a non-Map object", "Map.prototype.keys: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.keys.call(new Set()); }, o35, "Map.prototype.keys throws if this is a non-Map object (e.g. a Set)", "Map.prototype.keys: 'this' is not a Map object");

            o17.o33(function () { Map.prototype.values.call(null); }, o35, "Map.prototype.values throws if this is null", "Map.prototype.values: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.values.call(undefined); }, o35, "Map.prototype.values throws if this is undefined", "Map.prototype.values: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.values.call(123); }, o35, "Map.prototype.values throws if this is a number", "Map.prototype.values: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.values.call("abc"); }, o35, "Map.prototype.values throws if this is a string", "Map.prototype.values: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.values.call({ }); }, o35, "Map.prototype.values throws if this is a non-Map object", "Map.prototype.values: 'this' is not a Map object");
            o17.o33(function () { Map.prototype.values.call(new Set()); }, o35, "Map.prototype.values throws if this is a non-Map object (e.g. a Set)", "Map.prototype.values: 'this' is not a Map object");
        }
    },
    {
        name: "Set.prototype iterator APIs should throw when called with this equal to anything other than a Set object",
        o11: function () {
            o17.o33(function () { Set.prototype.entries.call(null); }, o35, "Set.prototype.entries throws if this is null", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call(undefined); }, o35, "Set.prototype.entries throws if this is undefined", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call(123); }, o35, "Set.prototype.entries throws if this is a number", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call("abc"); }, o35, "Set.prototype.entries throws if this is a string", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call({ }); }, o35, "Set.prototype.entries throws if this is a non-Set object", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call(new Map()); }, o35, "Set.prototype.entries throws if this is a non-Set object (e.g. a Map)", "Set.prototype.entries: 'this' is not a Set object");

            o17.o33(function () { Set.prototype.values.call(null); }, o35, "Set.prototype.values throws if this is null", "Set.prototype.values: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.values.call(undefined); }, o35, "Set.prototype.values throws if this is undefined", "Set.prototype.values: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.values.call(123); }, o35, "Set.prototype.values throws if this is a number", "Set.prototype.values: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.values.call("abc"); }, o35, "Set.prototype.values throws if this is a string", "Set.prototype.values: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.values.call({ }); }, o35, "Set.prototype.values throws if this is a non-Set object", "Set.prototype.values: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.values.call(new Map()); }, o35, "Set.prototype.values throws if this is a non-Set object (e.g. a Map)", "Set.prototype.values: 'this' is not a Set object");
        }
    },
    {
        name: "String.prototype iterator APIs should throw when called with this equal to undefined or null",
        o11: function () {
            o17.o33(function () { String.prototype[Symbol.iterator].call(null); }, o35, "String.prototype[Symbol.iterator] throws if this is null", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
            o17.o33(function () { String.prototype[Symbol.iterator].call(undefined); }, o35, "String.prototype[Symbol.iterator] throws if this is undefined", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
        }
    },
    {
        name: "%ArrayIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o11: function () {
            var o37 = Object.getPrototypeOf([].values());

            o17.o18(o37.hasOwnProperty('next'), "%ArrayIteratorPrototype% should have a next method");
            o17.o32(o37.hasOwnProperty(Symbol.iterator), "%ArrayIteratorPrototype% should not have a @@iterator method");
            o17.o18(o37.hasOwnProperty(Symbol.toStringTag), "%ArrayIteratorPrototype% should have a @@toStringTag property");

            o17.o20(0, o37.next.length, "next method takes zero arguments");

            o17.o20("Array Iterator", o37[Symbol.toStringTag], "@@toStringTag is the string value 'Array Iterator'");

            o17.o33(function () { o37.next.call(123); }, o35, "%ArrayIteratorPrototype%.next() throws if its 'this' is not an object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
            o17.o33(function () { o37.next.call("o"); }, o35, "%ArrayIteratorPrototype%.next() throws if its 'this' is not an object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
            o17.o33(function () { o37.next.call({ }); }, o35, "%ArrayIteratorPrototype%.next() throws if its 'this' is an object but not an Array Iterator object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
        }
    },
    {
        name: "%MapIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o11: function () {
            var o40 = Object.getPrototypeOf((new Map()).values());

            o17.o18(o40.hasOwnProperty('next'), "%MapIteratorPrototype% should have a next method");
            o17.o32(o40.hasOwnProperty(Symbol.iterator), "%MapIteratorPrototype% should not have a @@iterator method");
            o17.o18(o40.hasOwnProperty(Symbol.toStringTag), "%MapIteratorPrototype% should have a @@toStringTag property");

            o17.o20(0, o40.next.length, "next method takes zero arguments");

            o17.o20("Map Iterator", o40[Symbol.toStringTag], "@@toStringTag is the string value 'Map Iterator'");

            o17.o33(function () { o40.next.call(123); }, o35, "%MapIteratorPrototype%.next() throws if its 'this' is not an object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
            o17.o33(function () { o40.next.call("o"); }, o35, "%MapIteratorPrototype%.next() throws if its 'this' is not an object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
            o17.o33(function () { o40.next.call({ }); }, o35, "%MapIteratorPrototype%.next() throws if its 'this' is an object but not a Map Iterator object", "Map Iterator.prototype.next: 'this' is not a Map Iterator object");
        }
    },
    {
        name: "%SetIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o11: function () {
            var o41 = Object.getPrototypeOf((new Set()).values());

            o17.o18(o41.hasOwnProperty('next'), "%SetIteratorPrototype% should have a next method");
            o17.o32(o41.hasOwnProperty(Symbol.iterator), "%SetIteratorPrototype% should not have a @@iterator method");
            o17.o18(o41.hasOwnProperty(Symbol.toStringTag), "%SetIteratorPrototype% should have a @@toStringTag property");

            o17.o20(0, o41.next.length, "next method takes zero arguments");

            o17.o20("Set Iterator", o41[Symbol.toStringTag], "@@toStringTag is the string value 'Set Iterator'");

            o17.o33(function () { o41.next.call(123); }, o35, "%SetIteratorPrototype%.next() throws if its 'this' is not an object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
            o17.o33(function () { o41.next.call("o"); }, o35, "%SetIteratorPrototype%.next() throws if its 'this' is not an object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
            o17.o33(function () { o41.next.call({ }); }, o35, "%SetIteratorPrototype%.next() throws if its 'this' is an object but not a Set Iterator object", "Set Iterator.prototype.next: 'this' is not a Set Iterator object");
        }
    },
    {
        name: "%StringIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o11: function () {
            var o41 = Object.getPrototypeOf(""[Symbol.iterator]());

            o17.o18(o41.hasOwnProperty('next'), "%StringIteratorPrototype% should have a next method");
            o17.o32(o41.hasOwnProperty(Symbol.iterator), "%StringIteratorPrototype% should not have a @@iterator method");
            o17.o18(o41.hasOwnProperty(Symbol.toStringTag), "%StringIteratorPrototype% should have a @@toStringTag property");

            o17.o20(0, o41.next.length, "next method takes zero arguments");

            o17.o20("String Iterator", o41[Symbol.toStringTag], "@@toStringTag is the string value 'String Iterator'");

            o17.o33(function () { o41.next.call(123); }, o35, "%StringIteratorPrototype%.next() throws if its 'this' is not an object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
            o17.o33(function () { o41.next.call("o"); }, o35, "%StringIteratorPrototype%.next() throws if its 'this' is not an object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
            o17.o33(function () { o41.next.call({ }); }, o35, "%StringIteratorPrototype%.next() throws if its 'this' is an object but not a String Iterator object", "String Iterator.prototype.next: 'this' is not a String Iterator object");
        }
    },
    {
        name: "Array iterator methods return new objects every time they are called but all have the same prototype",
        o11: function () {
            var o42 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o43 = [ o42.entries(), o42.entries(), o42.keys(), o42.keys(), o42.values(), o42.values() ];

            for (var o44 = 0; o44 < o43.length; o44++) {
                for (var o45 = o44 + 1; o45 < o43.length; o45++) {
                    o17.o18(o43[o44] !== o43[o45], "Each iterator is its own object");
                }
            }

            for (var o44 = 0; o44 < o43.length - 1; o44++) {
                o17.o18(Object.getPrototypeOf(o43[o44]) === Object.getPrototypeOf(o43[o44 + 1]), "Each iterator has the same prototype object: %ArrayIteratorPrototype%");
            }
        }
    },
    {
        name: "Map iterator methods return new objects every time they are called but all have the same prototype",
        o11: function () {
            var map = o2();
            var o43 = [ map.entries(), map.entries(), map.keys(), map.keys(), map.values(), map.values() ];

            for (var o44 = 0; o44 < o43.length; o44++) {
                for (var o45 = o44 + 1; o45 < o43.length; o45++) {
                    o17.o18(o43[o44] !== o43[o45], "Each iterator is its own object");
                }
            }

            for (var o44 = 0; o44 < o43.length - 1; o44++) {
                o17.o18(Object.getPrototypeOf(o43[o44]) === Object.getPrototypeOf(o43[o44 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
            }
        }
    },
    {
        name: "Set iterator methods return new objects every time they are called but all have the same prototype",
        o11: function () {
            var set = new Set(); set.add('a'); set.add('b'); set.add('c'); set.add('d'); set.add('e');
            var o43 = [ set.entries(), set.entries(), set.values(), set.values() ];

            for (var o44 = 0; o44 < o43.length; o44++) {
                for (var o45 = o44 + 1; o45 < o43.length; o45++) {
                    o17.o18(o43[o44] !== o43[o45], "Each iterator is its own object");
                }
            }

            for (var o44 = 0; o44 < o43.length - 1; o44++) {
                o17.o18(Object.getPrototypeOf(o43[o44]) === Object.getPrototypeOf(o43[o44 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
            }
        }
    },
    {
        name: "String iterator methods return new objects every time they are called but all have the same prototype",
        o11: function () {
            var o46 = "abcde";
            var o43 = [ o46[Symbol.iterator](), o46[Symbol.iterator]() ];

            for (var o44 = 0; o44 < o43.length; o44++) {
                for (var o45 = o44 + 1; o45 < o43.length; o45++) {
                    o17.o18(o43[o44] !== o43[o45], "Each iterator is its own object");
                }
            }

            for (var o44 = 0; o44 < o43.length - 1; o44++) {
                o17.o18(Object.getPrototypeOf(o43[o44]) === Object.getPrototypeOf(o43[o44 + 1]), "Each iterator has the same prototype object: %MapIteratorPrototype%");
            }
        }
    },
    {
        name: "Empty array or array-like objects give back iterators that are immediately complete",
        o11: function () {
            var o47;
            var o42 = [ ];
            var o48 = { length: 0 };

            o47 = o42.entries();
            o17.o20({ done: true, value: undefined }, o47.next(), "array entries iterator is initially complete for empty arrays");

            o47 = o42.keys();
            o17.o20({ done: true, value: undefined }, o47.next(), "array keys iterator is initially complete for empty arrays");

            o47 = o42.values();
            o17.o20({ done: true, value: undefined }, o47.next(), "array values iterator is initially complete for empty arrays");

            o47 = Array.prototype.entries.call(o48);
            o17.o20({ done: true, value: undefined }, o47.next(), "array entries iterator is initially complete for empty array-like objects");

            o47 = Array.prototype.keys.call(o48);
            o17.o20({ done: true, value: undefined }, o47.next(), "array keys iterator is initially complete for empty array-like objects");

            o47 = Array.prototype.values.call(o48);
            o17.o20({ done: true, value: undefined }, o47.next(), "array values iterator is initially complete for empty array-like objects");
        }
    },
    {
        name: "Empty (new and cleared) Map objects give back iterators that are immediately complete",
        o11: function () {
            var o47;
            var map = new Map();

            o47 = map.entries();
            o17.o20({ done: true, value: undefined }, o47.next(), "map entries iterator is initially complete for empty maps (new)");

            o47 = map.keys();
            o17.o20({ done: true, value: undefined }, o47.next(), "map keys iterator is initially complete for empty maps (new)");

            o47 = map.values();
            o17.o20({ done: true, value: undefined }, o47.next(), "map values iterator is initially complete for empty maps (new)");

            map.set('z', 'a');
            map.set('y', 'b');
            map.set('x', 'c');
            map.o51();

            o47 = map.entries();
            o17.o20({ done: true, value: undefined }, o47.next(), "map entries iterator is initially complete for empty maps (cleared)");

            o47 = map.keys();
            o17.o20({ done: true, value: undefined }, o47.next(), "map keys iterator is initially complete for empty maps (cleared)");

            o47 = map.values();
            o17.o20({ done: true, value: undefined }, o47.next(), "map values iterator is initially complete for empty maps (cleared)");
        }
    },
    {
        name: "Empty (new and cleared) Set objects give back iterators that are immediately complete",
        o11: function () {
            var o47;
            var set = new Set();

            o47 = set.entries();
            o17.o20({ done: true, value: undefined }, o47.next(), "set entries iterator is initially complete for empty sets (new)");

            o47 = set.values();
            o17.o20({ done: true, value: undefined }, o47.next(), "set values iterator is initially complete for empty sets (new)");

            set.add('a');
            set.add('b');
            set.add('c');
            set.o51();

            o47 = set.entries();
            o17.o20({ done: true, value: undefined }, o47.next(), "set entries iterator is initially complete for empty sets (cleared)");

            o47 = set.values();
            o17.o20({ done: true, value: undefined }, o47.next(), "set values iterator is initially complete for empty sets (cleared)");
        }
    },
    {
        name: "Empty strings give back iterators that are immediately complete",
        o11: function () {
            var o47 = ""[Symbol.iterator]();
            o17.o20({ done: true, value: undefined }, o47.next(), "string iterator is initially complete for empty strings");
        }
    },
    {
        name: "Array.prototype.entries gives back iterator over the index-element (key-value) pairs of an array in index order",
        o11: function () {
            var o42 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o47 = o42.entries();

            o17.o20({ done: false, value: [ 0, 'a' ] }, o47.next(), "1st result of entries iterator is index 0 and element 'a' as a two element array pair");
            o17.o20({ done: false, value: [ 1, 'b' ] }, o47.next(), "2nd result of entries iterator is index 1 and element 'b' as a two element array pair");
            o17.o20({ done: false, value: [ 2, 'c' ] }, o47.next(), "3rd result of entries iterator is index 2 and element 'c' as a two element array pair");
            o17.o20({ done: false, value: [ 3, 'd' ] }, o47.next(), "4th result of entries iterator is index 3 and element 'd' as a two element array pair");
            o17.o20({ done: false, value: [ 4, 'e' ] }, o47.next(), "5th result of entries iterator is index 4 and element 'e' as a two element array pair");
            o17.o20({ done: true, value: undefined }, o47.next(), "entries iterator completes after all 5 entries");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Array.prototype.keys gives back iterator over the indices of an array in index order",
        o11: function () {
            var o42 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o47 = o42.keys();

            o17.o20({ done: false, value: 0 }, o47.next(), "1st result of keys iterator is index 0");
            o17.o20({ done: false, value: 1 }, o47.next(), "2nd result of keys iterator is index 1");
            o17.o20({ done: false, value: 2 }, o47.next(), "3rd result of keys iterator is index 2");
            o17.o20({ done: false, value: 3 }, o47.next(), "4th result of keys iterator is index 3");
            o17.o20({ done: false, value: 4 }, o47.next(), "5th result of keys iterator is index 4");
            o17.o20({ done: true, value: undefined }, o47.next(), "keys iterator completes after all 5 keys");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Array.prototype.values gives back iterator over the elements of an array in index order",
        o11: function () {
            var o42 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o47 = o42.values();

            o17.o20({ done: false, value: 'a' }, o47.next(), "1st result of values iterator is element 'a'");
            o17.o20({ done: false, value: 'b' }, o47.next(), "2nd result of values iterator is element 'b'");
            o17.o20({ done: false, value: 'c' }, o47.next(), "3rd result of values iterator is element 'c'");
            o17.o20({ done: false, value: 'd' }, o47.next(), "4th result of values iterator is element 'd'");
            o17.o20({ done: false, value: 'e' }, o47.next(), "5th result of values iterator is element 'e'");
            o17.o20({ done: true, value: undefined }, o47.next(), "values iterator completes after all 5 values");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any array iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any array iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Map.prototype.entries gives back iterator over the key-value pairs of a map in insertion order",
        o11: function () {
            var map = o2();
            var o47 = map.entries();

            o17.o20({ done: false, value: [ 1, 6 ] }, o47.next(), "1st result of entries iterator is key 1 and value 6 as a two element array pair");
            o17.o20({ done: false, value: [ 2, 7 ] }, o47.next(), "2nd result of entries iterator is key 2 and value 7 as a two element array pair");
            o17.o20({ done: false, value: [ 3, 8 ] }, o47.next(), "3rd result of entries iterator is key 3 and value 8 as a two element array pair");
            o17.o20({ done: false, value: [ 4, 9 ] }, o47.next(), "4th result of entries iterator is key 4 and value 9 as a two element array pair");
            o17.o20({ done: false, value: [ 5, 10 ] }, o47.next(), "5th result of entries iterator is key 5 and value 10 as a two element array pair");
            o17.o20({ done: true, value: undefined }, o47.next(), "entries iterator completes after all 5 entries");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Map.prototype.keys gives back iterator over the keys of a map in insertion order",
        o11: function () {
            var map = o2();
            var o47 = map.keys();

            o17.o20({ done: false, value: 1 }, o47.next(), "1st result of keys iterator is key 1");
            o17.o20({ done: false, value: 2 }, o47.next(), "2nd result of keys iterator is key 2");
            o17.o20({ done: false, value: 3 }, o47.next(), "3rd result of keys iterator is key 3");
            o17.o20({ done: false, value: 4 }, o47.next(), "4th result of keys iterator is key 4");
            o17.o20({ done: false, value: 5 }, o47.next(), "5th result of keys iterator is key 5");
            o17.o20({ done: true, value: undefined }, o47.next(), "keys iterator completes after all 5 entries");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Map.prototype.values gives back iterator over the values of a map in insertion order",
        o11: function () {
            var map = o2();
            var o47 = map.values();

            o17.o20({ done: false, value: 6 }, o47.next(), "1st result of values iterator is value 6");
            o17.o20({ done: false, value: 7 }, o47.next(), "2nd result of values iterator is value 7");
            o17.o20({ done: false, value: 8 }, o47.next(), "3rd result of values iterator is value 8");
            o17.o20({ done: false, value: 9 }, o47.next(), "4th result of values iterator is value 9");
            o17.o20({ done: false, value: 10 }, o47.next(), "5th result of values iterator is value 10");
            o17.o20({ done: true, value: undefined }, o47.next(), "values iterator completes after all 5 entries");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Set.prototype.entries gives back iterator over the 'key-value' pairs (i.e. the values twice) of a set in insertion order",
        o11: function () {
            var set = o6();
            var o47 = set.entries();

            o17.o20({ done: false, value: [ 1, 1 ] }, o47.next(), "1st result of entries iterator is key 1 and value 1 as a two element array pair");
            o17.o20({ done: false, value: [ 2, 2 ] }, o47.next(), "2nd result of entries iterator is key 2 and value 2 as a two element array pair");
            o17.o20({ done: false, value: [ 3, 3 ] }, o47.next(), "3rd result of entries iterator is key 3 and value 3 as a two element array pair");
            o17.o20({ done: false, value: [ 4, 4 ] }, o47.next(), "4th result of entries iterator is key 4 and value 4 as a two element array pair");
            o17.o20({ done: false, value: [ 5, 5 ] }, o47.next(), "5th result of entries iterator is key 5 and value 5 as a two element array pair");
            o17.o20({ done: true, value: undefined }, o47.next(), "entries iterator completes after all 5 entries");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any set iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "Set.prototype.values gives back iterator over the values of a set in insertion order",
        o11: function () {
            var set = o6();
            var o47 = set.values();

            o17.o20({ done: false, value: 1 }, o47.next(), "1st result of values iterator is value 1");
            o17.o20({ done: false, value: 2 }, o47.next(), "2nd result of values iterator is value 2");
            o17.o20({ done: false, value: 3 }, o47.next(), "3rd result of values iterator is value 3");
            o17.o20({ done: false, value: 4 }, o47.next(), "4th result of values iterator is value 4");
            o17.o20({ done: false, value: 5 }, o47.next(), "5th result of values iterator is value 5");
            o17.o20({ done: true, value: undefined }, o47.next(), "values iterator completes after all 5 entries");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any set iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
        name: "String.prototype[Symbol.iterator] gives back iterator over the code points of a string in forward order",
        o11: function () {
            var o46 = "abcde";
            var o47 = o46[Symbol.iterator]();

            o17.o20({ done: false, value: 'a' }, o47.next(), "1st result of string iterator is string 'a'");
            o17.o20({ done: false, value: 'b' }, o47.next(), "2nd result of string iterator is string 'b'");
            o17.o20({ done: false, value: 'c' }, o47.next(), "3rd result of string iterator is string 'c'");
            o17.o20({ done: false, value: 'd' }, o47.next(), "4th result of string iterator is string 'd'");
            o17.o20({ done: false, value: 'e' }, o47.next(), "5th result of string iterator is string 'e'");
            o17.o20({ done: true, value: undefined }, o47.next(), "string iterator completes after all 5 code points");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling string iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling string iterator's next method after it has completed yields the same undefined result value (checking twice)");

            // a string with code points requiring surrogate pairs
            o46 = "ab\uD834\uDD1Ec\uD801\uDC27";
            var o47 = o46[Symbol.iterator]();

            o17.o20({ done: false, value: 'a' }, o47.next(), "1st result of string iterator is string 'a' (surrogate pairs)");
            o17.o20({ done: false, value: 'b' }, o47.next(), "2nd result of string iterator is string 'b' (surrogate pairs)");
            o17.o20({ done: false, value: '\u{1D11E}' }, o47.next(), "3rd result of string iterator is string '\\u{1D11E}' (surrogate pairs)");
            o17.o20({ done: false, value: 'c' }, o47.next(), "4th result of string iterator is string 'c' (surrogate pairs)");
            o17.o20({ done: false, value: '\uD801\uDC27' }, o47.next(), "5th result of string iterator is string '\\uD801\\uDC27' (surrogate pairs)");
            o17.o20({ done: true, value: undefined }, o47.next(), "string iterator completes after all 5 code points (surrogate pairs)");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling string iterator's next method after it has completed yields the same undefined result value (surrogate pairs)");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling string iterator's next method after it has completed yields the same undefined result value (checking twice) (surrogate pairs)");
        }
    },
    {
        name: "Array Iterator can be used on array-like objects; those that have length properties",
        o11: function () {
            var o52 = { length: 5, 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e' };

            var o47 = Array.prototype.values.call(o52);

            o17.o20({ done: false, value: 'a' }, o47.next(), "1st result of values iterator on array-like object is element 'a'");
            o17.o20({ done: false, value: 'b' }, o47.next(), "2nd result of values iterator on array-like object is element 'b'");
            o17.o20({ done: false, value: 'c' }, o47.next(), "3rd result of values iterator on array-like object is element 'c'");
            o17.o20({ done: false, value: 'd' }, o47.next(), "4th result of values iterator on array-like object is element 'd'");
            o17.o20({ done: false, value: 'e' }, o47.next(), "5th result of values iterator on array-like object is element 'e'");
            o17.o20({ done: true, value: undefined }, o47.next(), "values iterator on array-like object completes after all 5 values");

            // Setting the length lower should be reflected by the iterator
            o52.length = 2;
            o47 = Array.prototype.values.call(o52);

            o17.o20({ done: false, value: 'a' }, o47.next(), "1st result of values iterator on array-like object is element 'a'");
            o17.o20({ done: false, value: 'b' }, o47.next(), "2nd result of values iterator on array-like object is element 'b'");
            o17.o20({ done: true, value: undefined }, o47.next(), "values iterator on array-like object completes after 2 values");

            // Setting the length higher should also be reflected, giving undefined for the non-existent properties
            o52.length = 7;
            var o47 = Array.prototype.values.call(o52);

            o17.o20({ done: false, value: 'a' }, o47.next(), "1st result of values iterator on array-like object is element 'a'");
            o17.o20({ done: false, value: 'b' }, o47.next(), "2nd result of values iterator on array-like object is element 'b'");
            o17.o20({ done: false, value: 'c' }, o47.next(), "3rd result of values iterator on array-like object is element 'c'");
            o17.o20({ done: false, value: 'd' }, o47.next(), "4th result of values iterator on array-like object is element 'd'");
            o17.o20({ done: false, value: 'e' }, o47.next(), "5th result of values iterator on array-like object is element 'e'");
            o17.o20({ done: false, value: undefined }, o47.next(), "Sixth result of values iterator on array-like object is element undefined");
            o17.o20({ done: false, value: undefined }, o47.next(), "Seventh result of values iterator on array-like object is element undefined");
            o17.o20({ done: true, value: undefined }, o47.next(), "values iterator on array-like object completes after 7 values");
        }
    },
    {
        name: "Array Iterator created with an object whose length property is negative should be complete upon creation (and other funny values for length)",
        o11: function () {
            var o52 = { length: -1, 0: 'a', 1: 'b' };

            var o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator is initially complete for length = -1");
            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator remains complete length = -1");

            o52.length = Number.NaN;
            o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator is initially complete for length = NaN");
            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator remains complete length = NaN");

            o52.length = -0;
            o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator is initially complete for length = -0");
            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator remains complete length =  -0");

            o52.length = Number.NEGATIVE_INFINITY;
            o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator is initially complete for length = -Infinity");
            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator remains complete length = -Infinity");

            o52.length = Number.o56;
            o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: false, value: 'a' }, o47.next(), "Iterator is not initially complete for length = +Infinity; length is capped at 2^53 - 1");
            o17.o20({ done: false, value: 'b' }, o47.next(), "Iterator would take a long time to complete for length = +Infinity (capped at 2^53 - 1)");
        }
    },
    {
        name: "Map iterator should enumerate all map items if any deletes occur on items that have already been enumerated",
        o11: function () {
            var o44 = 0;
            var map = o2();

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                map.o60(key);
                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate keys 1, 2, 3, 4, 5 in that order");
                o17.o18(o59 == o44 + 5, "map.entries() should enumerate values 6, 7, 8, 9, 10 in that order");
            }

            for (var o57 of map.entries()) {
                o17.o61("Shouldn't execute; map should be empty");
            }


            o44 = 0;
            map = o2();

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                if (key >= 3) {
                    map.o60(key - 2);
                }
                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate keys 1, 2, 3, 4, 5 in that order");
                o17.o18(o59 == o44 + 5, "map.entries() should enumerate values 6, 7, 8, 9, 10 in that order");
            }

            o44 = 3;
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate keys 4, 5 in that order");
                o17.o18(o59 == o44 + 5, "map.entries() should enumerate values 9, 10 in that order");
            }
        }
    },
    {
        name: "Map iterator should not enumerate map items that are deleted during enumeration before being visited",
        o11: function () {
            var o44 = 1;
            var map = o2();

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o17.o18(key == o44, "map.entries() should enumerate keys 1, 3, 5 in that order");
                o17.o18(o59 == o44 + 5, "map.entries() should enumerate values 6, 8, 10 in that order");
                map.o60(key + 1);
                o44 += 2;
            }

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o17.o18(key == 1, "map.entries() should enumerate key 1 only");
                o17.o18(o59 == 6, "map.entries() should enumerate value 6 only");
                map.o60(3);
                map.o60(5);
            }

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o17.o18(key == 1, "map.entries() should enumerate 1 only again");
                o17.o18(o59 == 6, "map.entries() should enumerate value 6 only again");
                map.o60(1);
            }

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o17.o61("Shouldn't execute, map should be empty");
            }


            map = o2();

            o44 = 0;
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                map.o60(6 - key);
                o44 += 1;
                o17.o18(key == o44 && key <= 3, "map.entries() should enumerate keys 1, 2, 3 in that order");
                o17.o18(o59 == o44 + 5 && o59 <= 8, "map.entries() should enumerate values 6, 7, 8 in that order");
            }

            o44 = 0;
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44 && key <= 2, "map.entries() should enumerate 1, 2 in that order");
                o17.o18(o59 == o44 + 5 && o59 <= 7, "map.entries() should enumerate values 6, 7 in that order");
            }
        }
    },
    {
        name: "Map iterator should continue to enumerate items as long as they are added but only if they were not already in the map, and changing an existing key's value doesn't change its position",
        o11: function () {
            var o44 = 0;
            var map = new Map();
            map.set(1, 21);

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate keys 1 through 20 in order");
                o17.o18(o59 == o44 + 20, "map.entries() should enumerate values 21 through 40 in order");
                if (key < 20)
                {
                    map.set(key + 1, o59 + 1);
                }
            }
            o17.o18(o44 == 20, "map.entries() should have enumerated up to 20");

            o44 = 0;
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should only enumerate 1 through 20 in order once each, no duplicates");
                if (key < 20)
                {
                    map.set(key + 1, o44);
                }
            }
            o17.o18(o44 == 20, "map.entries() should have enumerated up to 20 again");
        }
    },
    {
        name: "Map iterator should stop enumerating items if the map is cleared during enumeration",
        o11: function () {
            var o44 = 0;
            var map = o2();

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate 1 and stop");
                if (key == 1)
                {
                    map.o51();
                }
            }
            o17.o18(o44 == 1, "map.entries() should have stopped after 1");

            o44 = 0;
            map = o2();
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate 1, 2 and stop");
                if (key == 2)
                {
                    map.o51();
                }
            }
            o17.o18(o44 == 2, "map.entries() should have stopped after 1, 2");

            o44 = 0;
            map = o2();
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate 1, 2, 3 and stop");
                if (key == 3)
                {
                    map.o51();
                }
            }
            o17.o18(o44 == 3, "map.entries() should have stopped after 1, 2, 3");

            o44 = 0;
            map = o2();
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate 1, 2, 3, 4 and stop");
                if (key == 4)
                {
                    map.o51();
                }
            }
            o17.o18(o44 == 4, "map.entries() should have stopped after 1, 2, 3, 4");

            o44 = 0;
            map = o2();
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate 1, 2, 3, 4, 5 and stop");
                if (key == 5)
                {
                    map.o51();
                }
            }
            o17.o18(o44 == 5, "map.entries() should have enumerated all 1, 2, 3, 4, 5");
            o17.o18(map.o62 == 0, "map should be empty");
        }
    },
    {
        name: "Map iterator should revisit items if they are removed after being visited but re-added before enumeration stops",
        o11: function () {
            var o44 = 0;
            var map = o2();

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                if (key == 3) {
                    map.o60(2);
                    map.o60(1);
                    map.set(1);
                    map.set(2);
                }

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
                if (key == 5) {
                    o44 = 0;
                }

            }

            o44 = 2;
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += 1;
                o17.o18(key == o44, "map.entries() should enumerate 3, 4, 5, 1, 2 in that order");
                if (key == 5) {
                    o44 = 0;
                }

            }
        }
    },
    {
        name: "Map iterator should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        o11: function () {
            var map = new Map();
            map.set(1, 0);
            map.set(2, 1);

            var keys = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var o44 = 0;

            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                if (o44 < 9) {
                    if (key == 1) {
                        map.o60(1);
                        map.set(2, o44 + 1);
                    } else if (key == 2) {
                        map.o60(2);
                        map.set(1, o44 + 1);
                    }
                }

                o17.o18(key == keys[o44], "map.entries() should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");
                o17.o18(o59 == o44, "map.entries() should enumerate values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9");

                o44 += 1;
            }
            o17.o18(o44 == 10, "map.entries() should have called the callback 10 times");
        }
    },
    {
        name: "Set iterator should enumerate set items in insertion order and should not call the callback for empty sets",
        o11: function () {
            var o44 = 0;
            var set = o6();

            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            // a second forEach should start at the beginning again
            o44 = 0;
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "Repeated set.values() should enumerate 1, 2, 3, 4, 5 in that order again");
            }

            set.o51();
            for (var o59 of set.values()) {
                o17.o61("Shouldn't execute; set should be empty");
            }


            set = new Set();
            for (var o59 of set.values()) {
                o17.o61("Shouldn't execute; set should be empty");
            }

        }
    },
    {
        name: "Set iterator should enumerate all set items if any deletes occur on items that have already been enumerated",
        o11: function () {
            var o44 = 0;
            var set = o6();

            for (var o59 of set.values()) {
                set.o60(o59);
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            for (var o59 of set.values()) {
                o17.o61("Shouldn't execute; set should be empty");
            }


            o44 = 0;
            set = o6();

            for (var o59 of set.values()) {
                if (o59 >= 3) {
                    set.o60(o59 - 2);
                }
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            o44 = 3;
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 4, 5 in that order");
            }
        }
    },
    {
        name: "Set iterator should not enumerate set items that are deleted during enumeration before being visited",
        o11: function () {
            var o44 = 1;
            var set = o6();

            for (var o59 of set.values()) {
                o17.o18(o59 == o44, "set.values() should enumerate 1, 3, 5 in that order");
                set.o60(o59 + 1);
                o44 += 2;
            }

            for (var o59 of set.values()) {
                o17.o18(o59 == 1, "set.values() should enumerate 1 only");
                set.o60(3);
                set.o60(5);
            }

            for (var o59 of set.values()) {
                o17.o18(o59 == 1, "set.values() should enumerate 1 only again");
                set.o60(1);
            }

            for (var o59 of set.values()) {
                o17.o61("Shouldn't execute, set should be empty");
            }


            set = o6();

            o44 = 0;
            for (var o59 of set.values()) {
                set.o60(6 - o59);
                o44 += 1;
                o17.o18(o59 == o44 && o59 <= 3, "set.values() should enumerate 1, 2, 3 in that order");
            }

            o44 = 0;
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44 && o59 <= 2, "set.values() should enumerate 1, 2 in that order");
            }
        }
    },
    {
        name: "Set iterator should continue to enumerate items as long as they are added but only if they were not already in the set",
        o11: function () {
            var o44 = 0;
            var set = new Set();
            set.add(1);

            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1 through 20 in order");
                if (o59 < 20)
                {
                    set.add(o59 + 1);
                }
            }
            o17.o18(o44 == 20, "set.values() should have enumerated up to 20");

            o44 = 0;
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should only enumerate 1 through 20 in order once each, no duplicates");
                if (o59 < 20)
                {
                    set.add(o59 + 1);
                }
            }
            o17.o18(o44 == 20, "set.values() should have enumerated up to 20 again");
        }
    },
    {
        name: "Set iterator should stop enumerating items if the set is cleared during enumeration",
        o11: function () {
            var o44 = 0;
            var set = o6();

            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1 and stop");
                if (o59 == 1)
                {
                    set.o51();
                }
            }
            o17.o18(o44 == 1, "set.values() should have stopped after 1");

            o44 = 0;
            set = o6();
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2 and stop");
                if (o59 == 2)
                {
                    set.o51();
                }
            }
            o17.o18(o44 == 2, "set.values() should have stopped after 1, 2");

            o44 = 0;
            set = o6();
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3 and stop");
                if (o59 == 3)
                {
                    set.o51();
                }
            }
            o17.o18(o44 == 3, "set.values() should have stopped after 1, 2, 3");

            o44 = 0;
            set = o6();
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4 and stop");
                if (o59 == 4)
                {
                    set.o51();
                }
            }
            o17.o18(o44 == 4, "set.values() should have stopped after 1, 2, 3, 4");

            o44 = 0;
            set = o6();
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5 and stop");
                if (o59 == 5)
                {
                    set.o51();
                }
            }
            o17.o18(o44 == 5, "set.values() should have enumerated all 1, 2, 3, 4, 5");
            o17.o18(set.o62 == 0, "set should be empty");
        }
    },
    {
        name: "Set iterator should revisit items if they are removed after being visited but re-added before enumeration stops",
        o11: function () {
            var o44 = 0;
            var set = o6();

            for (var o59 of set.values()) {
                if (o59 == 3) {
                    set.o60(2);
                    set.o60(1);
                    set.add(1);
                    set.add(2);
                }

                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
                if (o59 == 5) {
                    o44 = 0;
                }

            }

            o44 = 2;
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 3, 4, 5, 1, 2 in that order");
                if (o59 == 5) {
                    o44 = 0;
                }

            }
        }
    },
    {
        name: "Set iterator should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        o11: function () {
            var set = new Set();
            set.add(1);
            set.add(2);

            var o63 = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var o44 = 0;

            for (var o59 of set.values()) {
                if (o44 < 9) {
                    if (o59 == 1) {
                        set.o60(1);
                        set.add(2);
                    } else if (o59 == 2) {
                        set.o60(2);
                        set.add(1);
                    }
                }

                o17.o18(o59 == o63[o44], "set.values() should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");

                o44 += 1;
            }
            o17.o18(o44 == 10, "set.values() should have called the callback 10 times");
        }
    },
];

o64.o65(o9, { o66: o0.o67[0] != "summary" });
