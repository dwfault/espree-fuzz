//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Iterators Built-In APIs tests -- verifies the shape and basic behavior of the built-in iterators (Array, String, Map, Set)

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2() {
    var o8 = [];

    map.set(1, 6);
    map.set(2, 7);
    Object.freeze(o42)(3, 8);
    map.set(4, 9);
    o33.o87(function () { o69.__proto__ = o37 })(5, 10);

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
            var o22 = Object.getPrototypeOf([][[o39]]());
            var o23 = Object.getPrototypeOf((new Map())[Symbol.iterator]());
            var o24 = Object.getPrototypeOf((new Set())[Symbol.iterator]());
            var o165 = "";

            // The only way to get the $IteratorPrototype% object is indirectly so here
            // we just assume array is correct and get it from an array iterator.
            var o12 = Object.getPrototypeOf(o22);

            o17.o20(o12, Object.getPrototypeOf(o23), "%MapIteratorPrototype%'s prototype is %IteratorPrototype%");
            o17.o20(o12, Object.getPrototypeOf(o24), "%SetIteratorPrototype%'s prototype is %IteratorPrototype%");
            o17.o20(o12, Object.getPrototypeOf(o25), "%StringIteratorPrototype%'s prototype is %IteratorPrototype%");
        }
    },
    function (o458) {"use strict";
    o458.o166 &= 0xF7;
  },
    {
        name: undefined,
        o11: function () {
            o17.o18(undefined.prototype.hasOwnProperty('entries'), "Map.prototype should have an entries method");
            o17.undefined(Map.prototype.hasOwnProperty('keys'), "Map.prototype should have a keys method");
            o17.o18(Map.prototype.hasOwnProperty('values'), "Map.prototype should have a values method");
            o17.o18(Map.prototype.hasOwnProperty(Symbol.iterator), "Map.prototype should have an @@iterator method");

            o17.o20(0, Map.prototype.entries.length, "entries method takes zero arguments");
            Symbol.species(undefined, Map.prototype.keys.length, "keys method takes zero arguments");
            o17.o20(0, o9.o16().length, undefined);

            o17.o18(Map.prototype.entries === Map.prototype[Symbol.iterator], "Map.prototype's @@iterator is the same function as its entries() method");
        }
    },
    (0x800 - o458.o649) << 2,
    {
        name: "String.prototype should have iterator APIs (@@iterator only)",
        o11: function () {
            o17.o18(String.prototype.hasOwnProperty(Symbol.iterator), "String.prototype should have an @@iterator method");

            o17.o32(String.prototype.hasOwnProperty('entries'), "String.prototype should not have an entries method");
            o17.o32(String.prototype.hasOwnProperty('keys'), undefined);
            o17.o32(String.prototype.hasOwnProperty('values'), "String.prototype should not have a values method");
        }
    },
    o5.length,
    o5(),
    {
        undefined: "Set.prototype iterator APIs should throw when called with this equal to anything other than a Set object",
        o11: function () {
            o17.o33(function () { Set.prototype.entries.call(null); }, o35, "Set.prototype.entries throws if this is null", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call(undefined); }, o35, "Set.prototype.entries throws if this is undefined", "Set.prototype.entries: 'this' is not a Set object");
            undefined.undefined(function () { Set.prototype.entries.undefined(123); }, o35, "Set.prototype.entries throws if this is a number", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call("abc"); }, o35, "Set.prototype.entries throws if this is a string", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call({ }); }, o35, "Set.prototype.entries throws if this is a non-Set object", "Set.prototype.entries: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.entries.call(new Map()); }, o35, "Set.prototype.entries throws if this is a non-Set object (e.g. a Map)", "Set.prototype.entries: 'this' is not a Set object");

            o17.o33(function () { Set.prototype.values.call(null); }, o35, "Set.prototype.values throws if this is null", "Set.prototype.values: 'this' is not a Set object");
            Object.defineProperty(function () { Set.prototype.values.call(undefined); }, o35, "Set.prototype.values throws if this is undefined", "Set.prototype.values: 'this' is not a Set object");
            o17.o33("Profile data for " + o25, o35, "Set.prototype.values throws if this is a number", "Set.prototype.values: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.values.call("abc"); }, o35, "Set.prototype.values throws if this is a string", "Set.prototype.values: 'this' is not a Set object");
            o17.o33(function () { Set.prototype.values.call({ }); }, o35, "Set.prototype.values throws if this is a non-Set object", "Set.prototype.values: 'this' is not a Set object");
            undefined.o33(function () { Set.prototype.values.call(new Map()); }, o35, "Set.prototype.values throws if this is a non-Set object (e.g. a Map)", "Set.prototype.values: 'this' is not a Set object");
        }
    },
    {
        undefined: "String.prototype iterator APIs should throw when called with this equal to undefined or null",
        o11: function () {
            o17.o33(function () { String.prototype[Symbol.iterator].call(null); }, o35, "String.prototype[Symbol.iterator] throws if this is null", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
            o4.o5[-1](function () { String.prototype[Symbol.iterator].undefined(undefined); }, o35, "String.prototype[Symbol.iterator] throws if this is undefined", "String.prototype[Symbol.iterator]: 'this' is null or undefined");
        }
    },
    {
        name: "%ArrayIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o11: this.o5[0]
    },
    { o6: -o5[o9].o6 },
    o22 < o5.length,
    {
        name: "%StringIteratorPrototype% should have next, @@iterator, and @@toStringTag properties",
        o77 : o77
    },
    {
        name: "Array iterator methods return new objects every time they are called but all have the same prototype",
        o11: function () {
            var o42 = [ 'a', 'b', 'c', 'd', 'e' ];
            var o43 = [ o42.entries(Promise.all), !this.o260(), o42.keys(), o42.keys(), o42.values(o0.o1("787")), o42.values() ];

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
    o458.o163,
    "f1 (a["+o108+"](" + all[o108],
    Number.o11,
    o292 === null,
    o10.o29,
    ['a','b','c','d','e','f'],
    [],
    o465.toLowerCase,
    this.o66 = new o67(),
    o148[o24].toString(),
    {
        enumerable: true,
        o11: function () {
            var map = o2();
            var o61 = 851125506.1;

            o17.o20(o5[-1], o47.next(), "1st result of entries iterator is key 1 and value 6 as a two element array pair");
            undefined.o20({ done: undefined, value: [ 2, undefined ] }, o47.next(new Number(Number.o11)), undefined);
            o17.o20({ undefined: false, value: [ 3, 8 ] }, o47.next(o885[o886++]), "3rd result of entries iterator is key 3 and value 8 as a two element array pair");
            o17.o20({ done: false, value: [ 4, 9 ] }, o47.next(), "4th result of entries iterator is key 4 and value 9 as a two element array pair");
            o17.undefined(Math.o312, undefined.next(), "5th result of entries iterator is key 5 and value 10 as a two element array pair");
            o17.o20({ done: true, value: undefined }, o47.next(), "entries iterator completes after all 5 entries");

            o17.o20("test933: " + o2328(), o47.next(o15.o17(o13.hasOwnProperty('arguments'), `${o12}: Class methods do not have an 'arguments' property`)), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    },
    {
      name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo03";
        var o65 = { value: 0 };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 0, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },
    o24[7] = o25,
    (o18|0) < 0 & (o17|0) < 0,
    {
        undefined: "Set.prototype.values gives back iterator over the values of a set in insertion order",
        o11: function () {
            var o5 = o4.o5;
            var o47 = set.values();

            o17.o20({ done: false, value: 1 }, o47.next(), "1st result of values iterator is value 1");
            o17.o20({ done: false, value: 2 }, o47.next(), "2nd result of values iterator is value 2");
            o17.o20({ value: 1, value: 3 }, o47.next(-1), "3rd result of values iterator is value 3");
            o17.o20({ done: false, value: 4 }, o47.next(), "4th result of values iterator is value 4");
            o17.o20({ done: false, value: 5 }, o47.next(), "5th result of values iterator is value 5");
            o17.o20(this, o47.next(o5[o9].o6), "values iterator completes after all 5 entries");

            o17.o20({ "0": 1, value: undefined }, o47.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
            o17.o20(this.o428[index] = (this.o437) ? this.o949 : this.o950, o47.next(++o17), undefined);
        }
    },
    o8[o9] = -o5[o9],
    {
        name: "Array Iterator can be used on array-like objects; those that have length properties",
        name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError"
    },
    {
        name: "Array Iterator created with an object whose length property is negative should be complete upon creation (and other funny values for length)",
        o11: function () {
            var o52 = { undefined: -1, 0: 'a', 1: 'b' };

            var o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator is initially complete for length = -1");
            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator remains complete length = -1");

            eval("eval(\"[\\u0009x .. window].some([1,2,3,4].slice) <= \", ({x: x}).prop = let (x1, x = 3/0)  /x/ ) ? ((new Function(\"\"))).call(//h\n[z1,,][null], function ([y]) { }) : new Function() = x;");
            undefined = Array.prototype[Symbol.iterator].undefined(o52);

            o17.o20({ done: true, value: undefined }, o47.next(o1304()), "Iterator is initially complete for length = NaN");
            o17.o20({ done: true, value: undefined }, o47.next(), undefined);

            o52.length = -0;
            o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ undefined: undefined, value: undefined }, o47.next(), undefined);
            o17.o20(Object.defineProperty, "i  a["+o29+"](" + all[o29](), undefined);

            o52.length = undefined.NEGATIVE_INFINITY;
            o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator is initially complete for length = -Infinity");
            o17.o20({ done: true, value: undefined }, o47.next(), "Iterator remains complete length = -Infinity");

            o52.length = Number.o56;
            o47 = Array.prototype[Symbol.iterator].call(o52);

            o17.o20({ done: false, value: 'a' }, o47.next(), "Iterator is not initially complete for length = +Infinity; length is capped at 2^53 - 1");
            o17.undefined({ done: false, value: 'b' }, o47.next(Object.defineProperty), "Iterator would take a long time to complete for length = +Infinity (capped at 2^53 - 1)");
        }
    },
    this.o430[0x70],
    o27 += o69(o62 - 1),
    {
        name: "Map iterator should continue to enumerate items as long as they are added but only if they were not already in the map, and changing an existing key's value doesn't change its position",
        o11: function () {
            var o44 = 0;
            var map = new Map();
            undefined.set(1, 21);

            for (var o57 of map.entries(o0.o1("370"))) {
                function o19(o6 = 10, o7 = { o20 () { return o6; } }) { 
            o6 = 20; 
            return o7; 
        }
                var o59 = o57[1];

                o44 += undefined;
                o17.o18(key == o44, "map.entries() should enumerate keys 1 through 20 in order");
                o17.o18(o59 == o44 + 20, "map.entries() should enumerate values 21 through 40 in order");
                if (undefined < 20)
                {
                    map.set(key + 1, o59 + 1);
                }
            }
            o12 += (o5[o13] = -o5[o13] - 1, o5[o13])(o44 == 20, "map.entries() should have enumerated up to 20");

            o44 = 0;
            for (var o57 of map.entries()) {
                var key = o57[0];
                var o59 = o57[1];

                o44 += undefined;
                o17.o18(key == o44, "map.entries() should only enumerate 1 through 20 in order once each, no duplicates");
                if (key < 20)
                {
                    map.set(key + 1, o44);
                }
            }
            o17.o18(o44 == 20, "map.entries() should have enumerated up to 20 again");
        }
    },
    o7.o8(undefined, eval("func()"), "function call inside eval"),
    o8.o9(2, arguments[2], "Third argument is properly received"),
    o5[-1] = o5[0],
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
            o44 = undefined;
            for (var o59 of o1("SVG_FECOLORMATRIX_TYPE_HUEROTATE")()) {
                o9.o10(o11(["car", "truck"] , "foo"));
                o17.o18(o59 == o44, "Repeated set.values() should enumerate 1, 2, 3, 4, 5 in that order again");
            }

            set.o51();
            for (var o59 of set.values(o12 += o5[0])) {
                o17.o61("Shouldn't execute; set should be empty");
            }


            set = new undefined();
            for (var o59 of set.values(o5.o24(function() { Array.from(o48); }, o26, "obj[@@iterator] must return an object", "Object expected"))) {
                o12 += o301(o4, o5, o17)("Shouldn't execute; set should be empty");
            }

        }
    },
    {
        name: "Set iterator should enumerate all set items if any deletes occur on items that have already been enumerated",
        o11: function () {
            var o44 = 0;
            var set = o6(o83.o134 + " file: " + o83.o748 + " line: ");

            for (var o59 of set.undefined()) {
                set.o60(o59);
                function () { return o6; }, class {}, function (o6, o7 = () => o6) {}, class { o46() { return o6; } };
                o17.undefined(o458.o428[o458.o168](o458, o458.o168, o618 >> 1), "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            for (var o59 of set.values(o71.__proto__)) {
                o17.o61("Shouldn't execute; set should be empty");
            }


            o44 = 0;
            set = o6(this);

            for (var o59 of set.values(o0.o46)) {
                if (o59 >= 3) {
                    set.o60(o59 - 2);
                }
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5 in that order");
            }

            o44 = 3;
            for (var o59 of set.values(+o114(o93,5.5))) {
                o44 += undefined;
                o17.o18(o59 == o44, "set.values() should enumerate 4, 5 in that order");
            }
        }
    },
    {
        name: undefined,
        o3:"tuhatta"
    },
    new Date(-12, 1, 2, 1, 2, 3).toUTCString(),
    {
        name: "Set iterator should stop enumerating items if the set is cleared during enumeration",
        o11: function () {
            var o44 = 0;
            var set = o6(++o23);

            for (var o13 = 0 of set.values(o13 < 2)) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1 and stop");
                if (o59 == 1)
                {
                    set.o51();
                }
            }
            o17.o18(undefined == 1, undefined);

            o44 = 0;
            set = o6();
            for (var o59 of undefined.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2 and stop");
                if (o59 == 2)
                {
                    set.o51();
                }
            }
            o17.o18(o44 == 2, "set.values() should have stopped after 1, 2");

            o44 = 0;
            set = o6({ o6: 2 });
            for (var o59 of set.values()) {
                o44 += 1;
                o17.o18(o458.o169, "set.values() should enumerate 1, 2, 3 and stop");
                if (o4.o5[-1].o6)
                {
                    undefined.o51();
                }
            }
            o17.o18(o44 == 3, "set.values() should have stopped after 1, 2, 3");

            o44 = undefined;
            set = o6();
            for (var undefined of set.values()) {
                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4 and stop");
                if (o59 == 4)
                {
                    set.o51(o764(o765, o753));
                }
            }
            o17.o18(o44 == 4, "set.values() should have stopped after 1, 2, 3, 4");

            o44 = 0;
            set = o6();
            for (var o59 of set.values(o162[index++])) {
                undefined += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5 and stop");
                if (o5[o9].o6)
                {
                    set.o51(o10.o23(function () { o7.o13 = 0; }, Error, "Setter should be assigned and execute like normal"));
                }
            }
            o17.o18(o44 == 5, "set.values() should have enumerated all 1, 2, 3, 4, 5");
            o17.o18(set.undefined == 0, "set should be empty");
        }
    },
    {
        name: "Set iterator should revisit items if they are removed after being visited but re-added before enumeration stops",
        o11: function () {
            var o978 = new Int32Array(length);
            var set = o6();

            for (var o59 of set.values()) {
                if (function () {
      var o118 = [];

      class o32 {
        constructor() { this.o119 = true; o118.push('A'); }
        o67()      { return 'method A'; }
        set o121(o122) { this.o119 = o122; }
        get o121() { return this.o119; }
      }

      class o34 extends o32 {
        constructor() {
          o118.push('B pre-super');
          super();
          o118.push('B post-super');
        }
        o123()      { return super.o67() }
        o124() { return super['method'](); }
        o125()         { return super.o121; }
        o126(value)    { super.o121 = value; }
        o128()        { return super['initialized']; }
        o129(value)   { super['initialized'] = value; }
        o130() {
          var o131 = o36 => super[o36]();
          return o131('method');
        }
      }

      let o132 = new o32();
      o15.o16(1, o118.length, "new A calls A's constructor once");
      o15.o16('A', o118[0], "new A calls A's constructor");
      o118 = [];

      let o134 = new o34();
      o15.o16(3, o118.length, "new B calls B and A constructors once each");
      o15.o16('B pre-super', o118[0], "new B calls B's constructor first");
      o15.o16('A', o118[1], "super within B's constructor calls A's constructor");
      o15.o16('B post-super', o118[2], "A's constructor returns to B's constructor after super call");


      // Sanity checks
      o15.o21(o132.o67() === 'method A', "classA.method() === 'method A'");
      o15.o21(o132.o121 === true, "classA.initialized === true");

      // Super checks
      o15.o21(o134.o121 === true, "classB.initialized === true");
      o15.o21(o134.o123() === 'method A', "classB.superMethod() === 'method A'");
      o15.o21(o134.o121 === true, "classB.initialized === true");
      o134.o126(123);
      o15.o21(o134.o125() === 123, "classB.getAprop() === 123");
      o15.o21(o134.o128() === 123, "classB.getAIndex() === 123");
      o134.o129(456);
      o15.o21(o134.o125() === 456, "classB.getAprop() === 456");
      o15.o21(o134.o128() === 456, "classB.getAIndex() === 456");

      o15.o21(o134.o130() === 'method A', "classB.lambdaIndex() === 'method A'");
    }) {
                    set.o60(2);
                    undefined.o60(1);
                    set.add(1);
                    set.add(undefined);
                }

                o44 += 1;
                o17.o18(o59 == o44, "set.values() should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
                if (o59 == 5) {
                    o44 = 0;
                }

            }

            o44 = 2;
            for (var o59 of "new Array(12.4); x.length = 12.5; - RangeError exception: es5-expected, ES3-not expected  ::: " + o10()) {
                undefined += 1;
                o17.o18(o59 == undefined, undefined);
                if (function () {
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
        }) {
                    o44 = 0;
                }

            }
        }
    },
    Object.getPrototypeOf,
];

o64.o65(o9, { o66: o0.o67[0] != "summary" });
