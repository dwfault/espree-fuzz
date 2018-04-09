//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Basic __defineGetter__, __defineSetter__, __lookupGetter__, and __lookupSetter tests -- verifies the API properties and functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o38 = 0;

var o3 = {
    o4: {
        name: "__defineGetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        o5: function () {
            var o6 = { };
            var o7 = o6.__defineGetter__("a", function () { return 1234; });

            o8.o9(o7 === undefined, "__defineGetter__ should return undefined");
            o8.o9(o6.o10 === 1234, "Getter should call the given function and return its value");

            var o11 = Object.getOwnPropertyDescriptor(o6, "a");

            o8.o9(o11.enumerable, "Getter accessor property should be enumerable");
            o8.o9(o11.configurable, "Getter accessor property should be configurable");
        }
    },
    o12: {
        name: "__defineSetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        o5: function () {
            var o6 = { o13: 0 };
            var o7 = o6.__defineSetter__("a", function (o13) { throw new Error(); });

            o8.o9(o7 === undefined, "__defineSetter__ should return undefined");
            o8.o14(function () { o6.o10 = 1234; }, Error, "Setter should call the given function");

            var o11 = Object.getOwnPropertyDescriptor(o6, "a");

            o8.o9(o11.enumerable, "Setter accessor property should be enumerable");
            o8.o9(o11.configurable, "Setter accessor property should be configurable");
        }
    },
    o15: {
        name: "__defineGetter__ should not assign a setter and __defineSetter__ should not define a getter",
        o5: function () {
            var o6 = { };

            o6.__defineGetter__("a", function () { return 1234; });
            o6.__defineSetter__("b", function (o13) { });

            var o16 = Object.getOwnPropertyDescriptor(o6, "a");
            var o17 = Object.getOwnPropertyDescriptor(o6, "b");

            o8.o9(o16.set === undefined, "__defineGetter__ does not add a setter");
            o8.o9(o17.get === undefined, "__defineSetter__ does not add a getter");

            o6.o10 = 10;
            o8.o9(o6.o10 === 1234, "Getter only property should be unaffected by uses in setter context");

            o8.o9(o6.o18 === undefined, "Setter only property should return undefined if used in getter context");
        }
    },
    o19: {
        name: "get and set functions should have access to the object's properties via this",
        o5: function () {
            var o6 = { o20: 1, o21: 2, o22: 3 };

            o6.__defineGetter__("a", function () { return this.o20 + this.o21 + this.o22; });
            o6.__defineSetter__("b", function (o13) { this.o20 = o13; this.o21 = o13 * 2; this.o22 = o13 * 3; });

            o8.o9(o6.o10 === 6, "Getter should return 1 + 2 + 3");
            o6.o18 = 2;
            o8.o9(o6.o10 === 12, "Getter should now return 2 + 4 + 6");
        }
    },
    o23: {
        name: "__defineGetter__ and __defineSetter__ called on the same property are additive; they do not clobber previous accessor",
        o5: function () {
            var o6 = { };

            o6.__defineGetter__("a", function () { return 1; });
            o6.__defineSetter__("a", function (o13) { throw new Error(2); });

            o6.__defineSetter__("b", function (o13) { throw new Error(3); });
            o6.__defineGetter__("b", function () { return 4; });

            o8.o9(o6.o10 === 1, "getter in 'a' should return 1");
            o8.o9((function () { try { o6.o10 = 0; } catch (o24) { return o24.o25; } return null; })() === "2", "setter in 'a' should throw a new Error with number equal to 2");
            o8.o9((function () { try { o6.o18 = 0; } catch (o24) { return o24.o25; } return null; })() === "3", "setter in 'b' should throw a new Error with number equal to 3");
            o8.o9(o6.o18 === 4, "getter in 'b' should return 4");
        }
    },
    o26: {
        name: "__defineGetter__ and __defineSetter__ only allow functions as the accessor argument",
        o5: function () {
            function o27(o28) {
                var o6 = { };

                o8.o14(function () { o6.__defineGetter__("a", o28); }, o29, "__defineGetter__ should throw with getter function arg: " + o28);
                o8.o14(function () { o6.__defineSetter__("a", o28); }, o29, "__defineSetter__ should throw with setter function arg: " + o28);
            }

            o27(undefined);
            o27(null);
            o27(0);
            o27(1234);
            o27("hello");
            o27({ o10: 1, o18: 2 });
            o27([ 1, 2 ]);
        }
    },
    o30: {
        name: "__defineGetter__ and __defineSetter__ overwrite existing property descriptors when configurable, otherwise throws",
        o5: function () {
            function o31(o32) {
                var o33 = o32.configurable ? false : true;

                var o6 = { };
                Object.defineProperty(o6, "a", o32);

                var o34 = function () { o6.__defineGetter__("a", function () { return undefined; }); };
                var o35 = function () { o6.__defineSetter__("a", function (o13) { }); };

                if (o33) {
                    o8.o14(o34, o29, "__defineGetter__ should throw when called on existing non-configurable property");
                    o8.o14(o35, o29, "__defineSetter__ should throw when called on existing non-configurable property");
                } else {
                    o34();
                    o35();

                    var o36 = Object.getOwnPropertyDescriptor(o6, "a");
                    o8.o37(o36.hasOwnProperty("writable"), "property should no longer be a data accessor if it happened to be");
                    o8.o37(o36.hasOwnProperty("value"), "property should no longer be a data accessor if it happened to be");
                    o8.o9(o36.get !== undefined, "property should now have a getter");
                    o8.o9(o36.set !== undefined, "property should now have a setter");
                    o8.o9(o36.configurable, "property should still be configurable");
                    o8.o9(o36.enumerable, "property should now be enumerable if it wasn't already");
                }
            }

            // generic descriptor

            o31({ configurable: true });
            o31({ enumerable: true });
            o31({ configurable: true, enumerable: true });
            o31({ configurable: false });
            o31({ enumerable: false });
            o31({ configurable: false, enumerable: false });

            // data descriptor

            o31({ value: 10 });
            o31({ writable: true });
            o31({ value: 10, writable: true });
            o31({ value: 10, enumerable: true });
            o31({ writable: true, enumerable: true });
            o31({ value: 10, writable: true, enumerable: true });
            o31({ value: 10, configurable: true });
            o31({ writable: true, configurable: true });
            o31({ value: 10, writable: true, configurable: true });
            o31({ value: 10, configurable: true, enumerable: true });
            o31({ writable: true, configurable: true, enumerable: true });
            o31({ value: 10, writable: true, configurable: true, enumerable: true });

            // accessor descriptor
            //
            // already handled accessor descriptors implicitly via successive calls to
            // __defineGetter__ and __defineSetter__ with the same property name
            // Just make sure non-configurable accessor descriptor cannot be changed:

            o31({ get: function () { }, configurable: false });
            o31({ set: function (o13) { }, configurable: false });
        }
    },
    o38: {
        name: "__defineGetter__ and __defineSetter__ should work regardless whether Object.defineProperty is changed by the user or not",
        o5: function () {
            var o39 = Object.defineProperty;
            Object.defineProperty = function (o6, o40, o11) { throw new Error("Should not execute this"); };

            var o6 = { };

            o6.__defineGetter__("a", function () { return 1234; });
            o6.__defineSetter__("a", function (o13) { throw new Error(); });

            o8.o9(o6.o10 === 1234, "Getter should be assigned and execute like normal");
            o8.o14(function () { o6.o10 = 0; }, Error, "Setter should be assigned and execute like normal");

            var o11 = Object.getOwnPropertyDescriptor(o6, "a");

            o8.o9(o11.get !== undefined, "Accessor descriptor has get value");
            o8.o9(o11.set !== undefined, "Accessor descriptor has set value");
            o8.o9(o11.configurable, "Property is configurable");
            o8.o9(o11.enumerable, "Property is enumerable");

            Object.defineProperty = o39;
        }
    },
    o41: {
        name: "__defineGetter__ and __defineSetter__ both have length 2 and __lookupGetter__ and __lookupSetter__ both have length 1",
        o5: function () {
            o8.o9(Object.prototype.__defineGetter__.length === 2, "__defineGetter__.length should be 2");
            o8.o9(Object.prototype.__defineSetter__.length === 2, "__defineSetter__.length should be 2");
            o8.o9(Object.prototype.__lookupGetter__.length === 1, "__lookupGetter__.length should be 1");
            o8.o9(Object.prototype.__lookupSetter__.length === 1, "__lookupSetter__.length should be 1");
        }
    },
    o42: {
        name: "__defineGetter__ and __defineSetter__ should convert null/undefined this argument to global object",
        o5: function () {
            Object.prototype.__defineGetter__.call(undefined, "test10_undefined_getter", function () { return undefined; });
            Object.prototype.__defineGetter__.call(null, "test10_null_getter", function () { return undefined; });
            Object.prototype.__defineSetter__.call(undefined, "test10_undefined_setter", function (o13) { });
            Object.prototype.__defineSetter__.call(null, "test10_null_setter", function (o13) { });

            o8.o9(o2.hasOwnProperty("test10_undefined_getter"), "global object should now have a getter named test10_undefined_getter");
            o8.o9(o2.hasOwnProperty("test10_null_getter"), "global object should now have a getter named test10_null_getter");
            o8.o9(o2.hasOwnProperty("test10_undefined_setter"), "global object should now have a setter named test10_undefined_setter");
            o8.o9(o2.hasOwnProperty("test10_null_setter"), "global object should now have a setter named test10_null_setter");

            delete o2["test10_undefined_getter"];
            delete o2["test10_null_getter"];
            delete o2["test10_undefined_setter"];
            delete o2["test10_null_setter"];
        }
    },
    o43: {
        name: "__lookupGetter__ and __lookupSetter__ find getters and setters of the given name on the calling object respectively",
        o5: function () {
            var o6 = {
                get o10() { return undefined; },
                set o18(o13) { },
            };
            var o10 = Object.getOwnPropertyDescriptor(o6, "a").get;
            var o18 = Object.getOwnPropertyDescriptor(o6, "b").set;

            var o44 = o6.__lookupGetter__("a");

            o8.o9(o44 !== undefined, "__lookupGetter__ should have returned a value");
            o8.o9(typeof o44 === "function", "That value should be a function");
            o8.o9(o44 === o10, "And it should be the same function returned by Object.getOwnPropertyDescriptor");

            o44 = o6.__lookupSetter__("b");

            o8.o9(o44 !== undefined, "__lookupSetter__ should have returned a value");
            o8.o9(typeof o44 === "function", "That value should be a function");
            o8.o9(o44 === o18, "And it should be the same function returned by Object.getOwnPropertyDescriptor");
        }
    },
    o45: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        o5: function () {
            var o10 = function () { return undefined; };
            var o18 = function (o13) { };

            function o46 () { }
            Object.defineProperty(o46.prototype, "a", { get: o10 });
            Object.defineProperty(o46.prototype, "b", { set: o18 });

            var o6 = new o46();

            var o44 = o6.__lookupGetter__("a");

            o8.o9(o44 !== undefined, "__lookupGetter__ should have returned a value");
            o8.o9(typeof o44 === "function", "That value should be a function");
            o8.o9(o44 === o10, "And it should be the same function as the defined getter");

            o44 = o6.__lookupSetter__("b");

            o8.o9(o44 !== undefined, "__lookupSetter__ should have returned a value");
            o8.o9(typeof o44 === "function", "That value should be a function");
            o8.o9(o44 === o18, "And it should be the same function as the defined setter");
        }
    },
    o47: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        o5: function () {
            var o48 = function () { return undefined; };
            var o49 = function (o13) { };

            function o46 () { }
            Object.defineProperty(o46.prototype, "geta", { get: o48 });
            Object.defineProperty(o46.prototype, "getb", { get: o48 });
            Object.defineProperty(o46.prototype, "seta", { set: o49 });
            Object.defineProperty(o46.prototype, "setb", { set: o49 });

            var o6 = new o46();
            Object.defineProperty(o6, "geta", { set: o49, configurable: true, enumerable: true });
            Object.defineProperty(o6, "getb", { value: 123, configurable: true, enumerable: true, writable: true });
            Object.defineProperty(o6, "seta", { get: o48, configurable: true, enumerable: true });
            Object.defineProperty(o6, "setb", { value: 123, configurable: true, enumerable: true, writable: true });

            o0.o50(o6.__lookupGetter__("geta"));

            o8.o9(o6.__lookupGetter__("geta") === undefined, "accessor property on o shadows accessor property on prototype but it is set-only so looking up a getter should return undefined");
            o8.o9(o6.__lookupGetter__("getb") === o48, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return getfn");
            o8.o9(o6.__lookupSetter__("seta") === undefined, "accessor property on o shadows accessor property on prototype but it is get-only so looking up a setter should return undefined");
            o8.o9(o6.__lookupSetter__("setb") === o49, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return setfn");
        }
    },
};

o51.o52(o3);

