//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Basic __defineGetter__, __defineSetter__, __lookupGetter__, and __lookupSetter tests -- verifies the API properties and functionality

try { o2[((o114++) | 0)] = 0; } catch(e) {}

function o42 (o33, o34, o35)
            {
                class o36 extends o33 {}
                let o29 = Reflect.construct(o33, eval("["+o35+"]"), o36);

                try {
o8.o9(true, o29 instanceof o36, "new.target should be available in built-in subclassable constructor " + o33.name);
}catch(e){}
            };

var o3 = {
    o4: {
        name: "__defineGetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        o5: function () {
            var o6 = { };
            var o7 = o6.__defineGetter__("a", function () { try {
return 1234;
}catch(e){} });

            try {
o8.o9(o7 === undefined, "__defineGetter__ should return undefined");
}catch(e){}
            try {
o8.o9(o6.o10 === 1234, "Getter should call the given function and return its value");
}catch(e){}

            var o11 = Object.getOwnPropertyDescriptor(o6, "a");

            try {
o8.o9(o11.enumerable, "Getter accessor property should be enumerable");
}catch(e){}
            try {
o8.o9(o11.configurable, "Getter accessor property should be configurable");
}catch(e){}
        }
    },
    o12: {
        name: "__defineSetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        o5: function () {
            var o6 = { o13: 0 };
            var o7 = o6.__defineSetter__("a", function (o13) { try {
throw new Error();
}catch(e){} });

            try {
o8.o9(o7 === undefined, "__defineSetter__ should return undefined");
}catch(e){}
            try {
o8.o14(function () { try {
o6.o10 = 1234;
}catch(e){} }, Error, "Setter should call the given function");
}catch(e){}

            var o11 = Object.getOwnPropertyDescriptor(o6, "a");

            try {
o8.o9(o11.enumerable, "Setter accessor property should be enumerable");
}catch(e){}
            try {
o8.o9(o11.configurable, "Setter accessor property should be configurable");
}catch(e){}
        }
    },
    o15: {
        name: "__defineGetter__ should not assign a setter and __defineSetter__ should not define a getter",
        o5: function () {
            var o6 = { };

            try {
o6.__defineGetter__("a", function () { try {
return 1234;
}catch(e){} });
}catch(e){}
            try {
o6.__defineSetter__("b", function (o13) { });
}catch(e){}

            var o16 = Object.getOwnPropertyDescriptor(o6, "a");
            var o17 = Object.getOwnPropertyDescriptor(o6, "b");

            try {
o8.o9(o16.set === undefined, "__defineGetter__ does not add a setter");
}catch(e){}
            try {
o8.o9(o17.get === undefined, "__defineSetter__ does not add a getter");
}catch(e){}

            try {
o6.o10 = 10;
}catch(e){}
            try {
o8.o9(o6.o10 === 1234, "Getter only property should be unaffected by uses in setter context");
}catch(e){}

            try {
o8.o9(o6.o18 === undefined, "Setter only property should return undefined if used in getter context");
}catch(e){}
        }
    },
    o19: {
        name: "get and set functions should have access to the object's properties via this",
        o5: function () {
            var o6 = { o20: 1, o21: 2, o22: 3 };

            try {
o6.__defineGetter__("a", function () { try {
return this.o20 + this.o21 + this.o22;
}catch(e){} });
}catch(e){}
            try {
o6.__defineSetter__("b", function (o13) { try {
this.o20 = o13;
}catch(e){} try {
this.o21 = o13 * 2;
}catch(e){} try {
this.o22 = o13 * 3;
}catch(e){} });
}catch(e){}

            try {
o8.o9(o6.o10 === 6, "Getter should return 1 + 2 + 3");
}catch(e){}
            try {
o6.o18 = 2;
}catch(e){}
            try {
o8.o9(o6.o10 === 12, "Getter should now return 2 + 4 + 6");
}catch(e){}
        }
    },
    o23: {
        name: "__defineGetter__ and __defineSetter__ called on the same property are additive; they do not clobber previous accessor",
        o5: function () {
            var o6 = { };

            try {
o6.__defineGetter__("a", function () { try {
return 1;
}catch(e){} });
}catch(e){}
            try {
o6.__defineSetter__("a", function (o13) { try {
throw new Error(2);
}catch(e){} });
}catch(e){}

            try {
o6.__defineSetter__("b", function (o13) { try {
throw new Error(3);
}catch(e){} });
}catch(e){}
            try {
o6.__defineGetter__("b", function () { try {
return 4;
}catch(e){} });
}catch(e){}

            try {
o8.o9(o6.o10 === 1, "getter in 'a' should return 1");
}catch(e){}
            try {
o8.o9((function () { try {
try { try {
o6.o10 = 0;
}catch(e){} } catch (o24) { try {
return o24.o25;
}catch(e){} }
}catch(e){} try {
return null;
}catch(e){} })() === "2", "setter in 'a' should throw a new Error with number equal to 2");
}catch(e){}
            try {
o8.o9((function () { try {
try { try {
o6.o18 = 0;
}catch(e){} } catch (o24) { try {
return o24.o25;
}catch(e){} }
}catch(e){} try {
return null;
}catch(e){} })() === "3", "setter in 'b' should throw a new Error with number equal to 3");
}catch(e){}
            try {
o8.o9(o6.o18 === 4, "getter in 'b' should return 4");
}catch(e){}
        }
    },
    o26: {
        name: "__defineGetter__ and __defineSetter__ only allow functions as the accessor argument",
        o5: function () {
            function o27(o28) {
                var o6 = { };

                try {
o8.o14(function () { try {
o6.__defineGetter__("a", o28);
}catch(e){} }, o29, "__defineGetter__ should throw with getter function arg: " + o28);
}catch(e){}
                try {
o8.o14(function () { try {
o6.__defineSetter__("a", o28);
}catch(e){} }, o29, "__defineSetter__ should throw with setter function arg: " + o28);
}catch(e){}
            }

            try {
o27(undefined);
}catch(e){}
            try {
o27(null);
}catch(e){}
            try {
o27(0);
}catch(e){}
            try {
o27(1234);
}catch(e){}
            try {
o27("hello");
}catch(e){}
            try {
o27({ o10: 1, o18: 2 });
}catch(e){}
            try {
o27([ 1, 2 ]);
}catch(e){}
        }
    },
    o30: {
        name: "__defineGetter__ and __defineSetter__ overwrite existing property descriptors when configurable, otherwise throws",
        o5: function () {
            function o31(o32) {
                var o33 = o32.configurable ? false : true;

                var o6 = { };
                try {
Object.defineProperty(o6, "a", o32);
}catch(e){}

                var o34 = function () { try {
o6.__defineGetter__("a", function () { try {
return undefined;
}catch(e){} });
}catch(e){} };
                var o35 = function () { try {
o6.__defineSetter__("a", function (o13) { });
}catch(e){} };

                try {
if (o33) {
                    try {
o8.o14(o34, o29, "__defineGetter__ should throw when called on existing non-configurable property");
}catch(e){}
                    try {
o8.o14(o35, o29, "__defineSetter__ should throw when called on existing non-configurable property");
}catch(e){}
                } else {
                    try {
o34();
}catch(e){}
                    try {
o35();
}catch(e){}

                    var o36 = Object.getOwnPropertyDescriptor(o6, "a");
                    try {
o8.o37(o36.hasOwnProperty("writable"), "property should no longer be a data accessor if it happened to be");
}catch(e){}
                    try {
o8.o37(o36.hasOwnProperty("value"), "property should no longer be a data accessor if it happened to be");
}catch(e){}
                    try {
o8.o9(o36.get !== undefined, "property should now have a getter");
}catch(e){}
                    try {
o8.o9(o36.set !== undefined, "property should now have a setter");
}catch(e){}
                    try {
o8.o9(o36.configurable, "property should still be configurable");
}catch(e){}
                    try {
o8.o9(o36.enumerable, "property should now be enumerable if it wasn't already");
}catch(e){}
                }
}catch(e){}
            }

            // generic descriptor

            try {
o31({ configurable: true });
}catch(e){}
            try {
o31({ enumerable: true });
}catch(e){}
            try {
o31({ configurable: true, enumerable: true });
}catch(e){}
            try {
o31({ configurable: false });
}catch(e){}
            try {
o31({ enumerable: false });
}catch(e){}
            try {
o31({ configurable: false, enumerable: false });
}catch(e){}

            // data descriptor

            try {
o31({ value: 10 });
}catch(e){}
            try {
o31({ writable: true });
}catch(e){}
            try {
o31({ value: 10, writable: true });
}catch(e){}
            try {
o31({ value: 10, enumerable: true });
}catch(e){}
            try {
o31({ writable: true, enumerable: true });
}catch(e){}
            try {
o31({ value: 10, writable: true, enumerable: true });
}catch(e){}
            try {
o31({ value: 10, configurable: true });
}catch(e){}
            try {
o31({ writable: true, configurable: true });
}catch(e){}
            try {
o31({ value: 10, writable: true, configurable: true });
}catch(e){}
            try {
o31({ value: 10, configurable: true, enumerable: true });
}catch(e){}
            try {
o31({ writable: true, configurable: true, enumerable: true });
}catch(e){}
            try {
o31({ value: 10, writable: true, configurable: true, enumerable: true });
}catch(e){}

            // accessor descriptor
            //
            // already handled accessor descriptors implicitly via successive calls to
            // __defineGetter__ and __defineSetter__ with the same property name
            // Just make sure non-configurable accessor descriptor cannot be changed:

            try {
o31({ get: function () { }, configurable: false });
}catch(e){}
            try {
o31({ set: function (o13) { }, configurable: false });
}catch(e){}
        }
    },
    o38: {
        name: "__defineGetter__ and __defineSetter__ should work regardless whether Object.defineProperty is changed by the user or not",
        o5: function () {
            var o39 = Object.defineProperty;
            try {
Object.defineProperty = function (o6, o40, o11) { try {
throw new Error("Should not execute this");
}catch(e){} };
}catch(e){}

            var o6 = { };

            try {
o6.__defineGetter__("a", function () { try {
return 1234;
}catch(e){} });
}catch(e){}
            try {
o6.__defineSetter__("a", function (o13) { try {
throw new Error();
}catch(e){} });
}catch(e){}

            try {
o8.o9(o6.o10 === 1234, "Getter should be assigned and execute like normal");
}catch(e){}
            try {
o8.o14(function () { try {
o6.o10 = 0;
}catch(e){} }, Error, "Setter should be assigned and execute like normal");
}catch(e){}

            var o11 = Object.getOwnPropertyDescriptor(o6, "a");

            try {
o8.o9(o11.get !== undefined, "Accessor descriptor has get value");
}catch(e){}
            try {
o8.o9(o11.set !== undefined, "Accessor descriptor has set value");
}catch(e){}
            try {
o8.o9(o11.configurable, "Property is configurable");
}catch(e){}
            try {
o8.o9(o11.enumerable, "Property is enumerable");
}catch(e){}

            try {
Object.defineProperty = o39;
}catch(e){}
        }
    },
    o41: {
        name: "__defineGetter__ and __defineSetter__ both have length 2 and __lookupGetter__ and __lookupSetter__ both have length 1",
        o5: function () {
            try {
o8.o9(Object.prototype.__defineGetter__.length === 2, "__defineGetter__.length should be 2");
}catch(e){}
            try {
o8.o9(Object.prototype.__defineSetter__.length === 2, "__defineSetter__.length should be 2");
}catch(e){}
            try {
o8.o9(Object.prototype.__lookupGetter__.length === 1, "__lookupGetter__.length should be 1");
}catch(e){}
            try {
o8.o9(Object.prototype.__lookupSetter__.length === 1, "__lookupSetter__.length should be 1");
}catch(e){}
        }
    },
    o42: {
        name: "__defineGetter__ and __defineSetter__ should convert null/undefined this argument to global object",
        o5: function () {
            try {
Object.prototype.__defineGetter__.call(undefined, "test10_undefined_getter", function () { try {
return undefined;
}catch(e){} });
}catch(e){}
            try {
Object.prototype.__defineGetter__.call(null, "test10_null_getter", function () { try {
return undefined;
}catch(e){} });
}catch(e){}
            try {
Object.prototype.__defineSetter__.call(undefined, "test10_undefined_setter", function (o13) { });
}catch(e){}
            try {
Object.prototype.__defineSetter__.call(null, "test10_null_setter", function (o13) { });
}catch(e){}

            try {
o8.o9(o2.hasOwnProperty("test10_undefined_getter"), "global object should now have a getter named test10_undefined_getter");
}catch(e){}
            try {
o8.o9(o2.hasOwnProperty("test10_null_getter"), "global object should now have a getter named test10_null_getter");
}catch(e){}
            try {
o8.o9(o2.hasOwnProperty("test10_undefined_setter"), "global object should now have a setter named test10_undefined_setter");
}catch(e){}
            try {
o8.o9(o2.hasOwnProperty("test10_null_setter"), "global object should now have a setter named test10_null_setter");
}catch(e){}

            try {
delete o2["test10_undefined_getter"];
}catch(e){}
            try {
delete o2["test10_null_getter"];
}catch(e){}
            try {
delete o2["test10_undefined_setter"];
}catch(e){}
            try {
delete o2["test10_null_setter"];
}catch(e){}
        }
    },
    o43: {
        name: "__lookupGetter__ and __lookupSetter__ find getters and setters of the given name on the calling object respectively",
        o5: function () {
            var o6 = {
                get o10() { try {
return undefined;
}catch(e){} },
                set o18(o13) { },
            };
            var o10 = Object.getOwnPropertyDescriptor(o6, "a").get;
            var o18 = Object.getOwnPropertyDescriptor(o6, "b").set;

            var o44 = o6.__lookupGetter__("a");

            try {
o8.o9(o44 !== undefined, "__lookupGetter__ should have returned a value");
}catch(e){}
            try {
o8.o9(typeof o44 === "function", "That value should be a function");
}catch(e){}
            try {
o8.o9(o44 === o10, "And it should be the same function returned by Object.getOwnPropertyDescriptor");
}catch(e){}

            try {
o44 = o6.__lookupSetter__("b");
}catch(e){}

            try {
o8.o9(o44 !== undefined, "__lookupSetter__ should have returned a value");
}catch(e){}
            try {
o8.o9(typeof o44 === "function", "That value should be a function");
}catch(e){}
            try {
o8.o9(o44 === o18, "And it should be the same function returned by Object.getOwnPropertyDescriptor");
}catch(e){}
        }
    },
    o45: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        o5: function () {
            var o10 = function () { try {
return undefined;
}catch(e){} };
            var o18 = function (o13) { };

            function o46 () { }
            try {
Object.defineProperty(o46.prototype, "a", { get: o10 });
}catch(e){}
            try {
Object.defineProperty(o46.prototype, "b", { set: o18 });
}catch(e){}

            var o6 = new o46();

            var o44 = o6.__lookupGetter__("a");

            try {
o8.o9(o44 !== undefined, "__lookupGetter__ should have returned a value");
}catch(e){}
            try {
o8.o9(typeof o44 === "function", "That value should be a function");
}catch(e){}
            try {
o8.o9(o44 === o10, "And it should be the same function as the defined getter");
}catch(e){}

            try {
o44 = o6.__lookupSetter__("b");
}catch(e){}

            try {
o8.o9(o44 !== undefined, "__lookupSetter__ should have returned a value");
}catch(e){}
            try {
o8.o9(typeof o44 === "function", "That value should be a function");
}catch(e){}
            try {
o8.o9(o44 === o18, "And it should be the same function as the defined setter");
}catch(e){}
        }
    },
    o47: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        o5: function () {
            var o48 = function () { try {
return undefined;
}catch(e){} };
            var o49 = function (o13) { };

            function o46 () { }
            try {
Object.defineProperty(o46.prototype, "geta", { get: o48 });
}catch(e){}
            try {
Object.defineProperty(o46.prototype, "getb", { get: o48 });
}catch(e){}
            try {
Object.defineProperty(o46.prototype, "seta", { set: o49 });
}catch(e){}
            try {
Object.defineProperty(o46.prototype, "setb", { set: o49 });
}catch(e){}

            var o6 = new o46();
            try {
Object.defineProperty(o6, "geta", { set: o49, configurable: true, enumerable: true });
}catch(e){}
            try {
Object.defineProperty(o6, "getb", { value: 123, configurable: true, enumerable: true, writable: true });
}catch(e){}
            try {
Object.defineProperty(o6, "seta", { get: o48, configurable: true, enumerable: true });
}catch(e){}
            try {
Object.defineProperty(o6, "setb", { value: 123, configurable: true, enumerable: true, writable: true });
}catch(e){}

            try {
o0.o50(o6.__lookupGetter__("geta"));
}catch(e){}

            try {
o8.o9(o6.__lookupGetter__("geta") === undefined, "accessor property on o shadows accessor property on prototype but it is set-only so looking up a getter should return undefined");
}catch(e){}
            try {
o8.o9(o6.__lookupGetter__("getb") === o48, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return getfn");
}catch(e){}
            try {
o8.o9(o6.__lookupSetter__("seta") === undefined, "accessor property on o shadows accessor property on prototype but it is get-only so looking up a setter should return undefined");
}catch(e){}
            try {
o8.o9(o6.__lookupSetter__("setb") === o49, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return setfn");
}catch(e){}
        }
    },
};

try {
o51.o52(o3);
}catch(e){}

