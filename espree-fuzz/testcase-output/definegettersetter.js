//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Basic __defineGetter__, __defineSetter__, __lookupGetter__, and __lookupSetter tests -- verifies the API properties and functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = this;

var o3 = {
    o4: {
        name: "__defineGetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        o6: function () {
            var o7 = { };
            var o8 = o7.__defineGetter__("a", function () { return 1234; });

            o10.o11(o8 === undefined, "__defineGetter__ should return undefined");
            o10.o11(o7.o13 === 1234, "Getter should call the given function and return its value");

            var o14 = Object.getOwnPropertyDescriptor(o7, "a");

            o10.o11(o14.enumerable, "Getter accessor property should be enumerable");
            o10.o11(o14.configurable, "Getter accessor property should be configurable");
        }
    },
    o19: {
        name: "__defineSetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        o6: function () {
            var o7 = { o20: 0 };
            var o8 = o7.__defineSetter__("a", function (o20) { throw new Error(); });

            o10.o11(o8 === undefined, "__defineSetter__ should return undefined");
            o10.o23(function () { o7.o13 = 1234; }, Error, "Setter should call the given function");

            var o14 = Object.getOwnPropertyDescriptor(o7, "a");

            o10.o11(o14.enumerable, "Setter accessor property should be enumerable");
            o10.o11(o14.configurable, "Setter accessor property should be configurable");
        }
    },
    o24: {
        name: "__defineGetter__ should not assign a setter and __defineSetter__ should not define a getter",
        o6: function () {
            var o7 = { };

            o7.__defineGetter__("a", function () { return 1234; });
            o7.__defineSetter__("b", function (o20) { });

            var o25 = Object.getOwnPropertyDescriptor(o7, "a");
            var o26 = Object.getOwnPropertyDescriptor(o7, "b");

            o10.o11(o25.set === undefined, "__defineGetter__ does not add a setter");
            o10.o11(o26.get === undefined, "__defineSetter__ does not add a getter");

            o7.o13 = 10;
            o10.o11(o7.o13 === 1234, "Getter only property should be unaffected by uses in setter context");

            o10.o11(o7.o29 === undefined, "Setter only property should return undefined if used in getter context");
        }
    },
    o30: {
        name: "get and set functions should have access to the object's properties via this",
        o6: function () {
            var o7 = { o31: 1, o32: 2, o33: 3 };

            o7.__defineGetter__("a", function () { return this.o31 + this.o32 + this.o33; });
            o7.__defineSetter__("b", function (o20) { this.o31 = o20; this.o32 = o20 * 2; this.o33 = o20 * 3; });

            o10.o11(o7.o13 === 6, "Getter should return 1 + 2 + 3");
            o7.o29 = 2;
            o10.o11(o7.o13 === 12, "Getter should now return 2 + 4 + 6");
        }
    },
    o34: {
        name: "__defineGetter__ and __defineSetter__ called on the same property are additive; they do not clobber previous accessor",
        o6: function () {
            var o7 = { };

            o7.__defineGetter__("a", function () { return 1; });
            o7.__defineSetter__("a", function (o20) { throw new Error(2); });

            o7.__defineSetter__("b", function (o20) { throw new Error(3); });
            o7.__defineGetter__("b", function () { return 4; });

            o10.o11(o7.o13 === 1, "getter in 'a' should return 1");
            o10.o11((function () { try { o7.o13 = 0; } catch (o35) { return o35.o36; } return null; })() === "2", "setter in 'a' should throw a new Error with number equal to 2");
            o10.o11((function () { try { o7.o29 = 0; } catch (o35) { return o35.o36; } return null; })() === "3", "setter in 'b' should throw a new Error with number equal to 3");
            o10.o11(o7.o29 === 4, "getter in 'b' should return 4");
        }
    },
    o37: {
        name: "__defineGetter__ and __defineSetter__ only allow functions as the accessor argument",
        o6: function () {
            function o38(o39) {
                var o7 = { };

                o10.o23(function () { o7.__defineGetter__("a", o39); }, o40, "__defineGetter__ should throw with getter function arg: " + o39);
                o10.o23(function () { o7.__defineSetter__("a", o39); }, o40, "__defineSetter__ should throw with setter function arg: " + o39);
            }

            o38(undefined);
            o38(null);
            o38(0);
            o38(1234);
            o38("hello");
            o38({ o13: 1, o29: 2 });
            o38([ 1, 2 ]);
        }
    },
    o41: {
        name: "__defineGetter__ and __defineSetter__ overwrite existing property descriptors when configurable, otherwise throws",
        o6: function () {
            function o42(o43) {
                var o44 = o43.configurable ? false : true;

                var o7 = { };
                Object.defineProperty(o7, "a", o43);

                var o46 = function () { o7.__defineGetter__("a", function () { return undefined; }); };
                var o47 = function () { o7.__defineSetter__("a", function (o20) { }); };

                if (o44) {
                    o10.o23(o46, o40, "__defineGetter__ should throw when called on existing non-configurable property");
                    o10.o23(o47, o40, "__defineSetter__ should throw when called on existing non-configurable property");
                } else {
                    o46();
                    o47();

                    var o48 = Object.getOwnPropertyDescriptor(o7, "a");
                    o10.o49(o48.hasOwnProperty("writable"), "property should no longer be a data accessor if it happened to be");
                    o10.o49(o48.hasOwnProperty("value"), "property should no longer be a data accessor if it happened to be");
                    o10.o11(o48.get !== undefined, "property should now have a getter");
                    o10.o11(o48.set !== undefined, "property should now have a setter");
                    o10.o11(o48.configurable, "property should still be configurable");
                    o10.o11(o48.enumerable, "property should now be enumerable if it wasn't already");
                }
            }

            // generic descriptor

            o42({ configurable: true });
            o42({ enumerable: true });
            o42({ configurable: true, enumerable: true });
            o42({ configurable: false });
            o42({ enumerable: false });
            o42({ configurable: false, enumerable: false });

            // data descriptor

            o42({ value: 10 });
            o42({ writable: true });
            o42({ value: 10, writable: true });
            o42({ value: 10, enumerable: true });
            o42({ writable: true, enumerable: true });
            o42({ value: 10, writable: true, enumerable: true });
            o42({ value: 10, configurable: true });
            o42({ writable: true, configurable: true });
            o42({ value: 10, writable: true, configurable: true });
            o42({ value: 10, configurable: true, enumerable: true });
            o42({ writable: true, configurable: true, enumerable: true });
            o42({ value: 10, writable: true, configurable: true, enumerable: true });

            // accessor descriptor
            //
            // already handled accessor descriptors implicitly via successive calls to
            // __defineGetter__ and __defineSetter__ with the same property name
            // Just make sure non-configurable accessor descriptor cannot be changed:

            o42({ get: function () { }, configurable: false });
            o42({ set: function (o20) { }, configurable: false });
        }
    },
    o53: {
        name: "__defineGetter__ and __defineSetter__ should work regardless whether Object.defineProperty is changed by the user or not",
        o6: function () {
            var o54 = Object.defineProperty;
            Object.defineProperty = function (o7, o55, o14) { throw new Error("Should not execute this"); };

            var o7 = { };

            o7.__defineGetter__("a", function () { return 1234; });
            o7.__defineSetter__("a", function (o20) { throw new Error(); });

            o10.o11(o7.o13 === 1234, "Getter should be assigned and execute like normal");
            o10.o23(function () { o7.o13 = 0; }, Error, "Setter should be assigned and execute like normal");

            var o14 = Object.getOwnPropertyDescriptor(o7, "a");

            o10.o11(o14.get !== undefined, "Accessor descriptor has get value");
            o10.o11(o14.set !== undefined, "Accessor descriptor has set value");
            o10.o11(o14.configurable, "Property is configurable");
            o10.o11(o14.enumerable, "Property is enumerable");

            Object.defineProperty = o54;
        }
    },
    o56: {
        name: "__defineGetter__ and __defineSetter__ both have length 2 and __lookupGetter__ and __lookupSetter__ both have length 1",
        o6: function () {
            o10.o11(Object.prototype.__defineGetter__.length === 2, "__defineGetter__.length should be 2");
            o10.o11(Object.prototype.__defineSetter__.length === 2, "__defineSetter__.length should be 2");
            o10.o11(Object.prototype.__lookupGetter__.length === 1, "__lookupGetter__.length should be 1");
            o10.o11(Object.prototype.__lookupSetter__.length === 1, "__lookupSetter__.length should be 1");
        }
    },
    o61: {
        name: "__defineGetter__ and __defineSetter__ should convert null/undefined this argument to global object",
        o6: function () {
            Object.prototype.__defineGetter__.call(undefined, "test10_undefined_getter", function () { return undefined; });
            Object.prototype.__defineGetter__.call(null, "test10_null_getter", function () { return undefined; });
            Object.prototype.__defineSetter__.call(undefined, "test10_undefined_setter", function (o20) { });
            Object.prototype.__defineSetter__.call(null, "test10_null_setter", function (o20) { });

            o10.o11(o2.hasOwnProperty("test10_undefined_getter"), "global object should now have a getter named test10_undefined_getter");
            o10.o11(o2.hasOwnProperty("test10_null_getter"), "global object should now have a getter named test10_null_getter");
            o10.o11(o2.hasOwnProperty("test10_undefined_setter"), "global object should now have a setter named test10_undefined_setter");
            o10.o11(o2.hasOwnProperty("test10_null_setter"), "global object should now have a setter named test10_null_setter");

            delete o2["test10_undefined_getter"];
            delete o2["test10_null_getter"];
            delete o2["test10_undefined_setter"];
            delete o2["test10_null_setter"];
        }
    },
    o63: {
        name: "__lookupGetter__ and __lookupSetter__ find getters and setters of the given name on the calling object respectively",
        o6: function () {
            var o7 = {
                get o13() { return undefined; },
                set o29(o20) { },
            };
            var o13 = Object.getOwnPropertyDescriptor(o7, "a").get;
            var o29 = Object.getOwnPropertyDescriptor(o7, "b").set;

            var o64 = o7.__lookupGetter__("a");

            o10.o11(o64 !== undefined, "__lookupGetter__ should have returned a value");
            o10.o11(typeof o64 === "function", "That value should be a function");
            o10.o11(o64 === o13, "And it should be the same function returned by Object.getOwnPropertyDescriptor");

            o64 = o7.__lookupSetter__("b");

            o10.o11(o64 !== undefined, "__lookupSetter__ should have returned a value");
            o10.o11(typeof o64 === "function", "That value should be a function");
            o10.o11(o64 === o29, "And it should be the same function returned by Object.getOwnPropertyDescriptor");
        }
    },
    o65: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        o6: function () {
            var o13 = function () { return undefined; };
            var o29 = function (o20) { };

            function o66 () { }
            Object.defineProperty(o66.prototype, "a", { get: o13 });
            Object.defineProperty(o66.prototype, "b", { set: o29 });

            var o7 = new o66();

            var o64 = o7.__lookupGetter__("a");

            o10.o11(o64 !== undefined, "__lookupGetter__ should have returned a value");
            o10.o11(typeof o64 === "function", "That value should be a function");
            o10.o11(o64 === o13, "And it should be the same function as the defined getter");

            o64 = o7.__lookupSetter__("b");

            o10.o11(o64 !== undefined, "__lookupSetter__ should have returned a value");
            o10.o11(typeof o64 === "function", "That value should be a function");
            o10.o11(o64 === o29, "And it should be the same function as the defined setter");
        }
    },
    o67: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        o6: function () {
            var o68 = function () { return undefined; };
            var o69 = function (o20) { };

            function o66 () { }
            Object.defineProperty(o66.prototype, "geta", { get: o68 });
            Object.defineProperty(o66.prototype, "getb", { get: o68 });
            Object.defineProperty(o66.prototype, "seta", { set: o69 });
            Object.defineProperty(o66.prototype, "setb", { set: o69 });

            var o7 = new o66();
            Object.defineProperty(o7, "geta", { set: o69, configurable: true, enumerable: true });
            Object.defineProperty(o7, "getb", { value: 123, configurable: true, enumerable: true, writable: true });
            Object.defineProperty(o7, "seta", { get: o68, configurable: true, enumerable: true });
            Object.defineProperty(o7, "setb", { value: 123, configurable: true, enumerable: true, writable: true });

            o0.o70(o7.__lookupGetter__("geta"));

            o10.o11(o7.__lookupGetter__("geta") === undefined, "accessor property on o shadows accessor property on prototype but it is set-only so looking up a getter should return undefined");
            o10.o11(o7.__lookupGetter__("getb") === o68, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return getfn");
            o10.o11(o7.__lookupSetter__("seta") === undefined, "accessor property on o shadows accessor property on prototype but it is get-only so looking up a setter should return undefined");
            o10.o11(o7.__lookupSetter__("setb") === o69, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return setfn");
        }
    },
};

o71.o72(o3);

