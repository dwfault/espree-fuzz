//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Basic __defineGetter__, __defineSetter__, __lookupGetter__, and __lookupSetter tests -- verifies the API properties and functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o12 = 0;

var o3 = {
    o4: print('testForInInitializer non-strict: failure: e = ' + o6),
    o19: -1,
    o24: o12 += o17,
    o30: {
        name: "get and set functions should have access to the object's properties via this",
        undefined: function () {
            function o1760(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                o65(o5);
                o12 += o1761(o4, o5, o17);
            }
            o12 += o1761(o4, o5, o13);
        }

        function o1761(o4, o5, o9) {
            return (o4.o5[-1].o6 = -o4.o5[-1].o6 - 1, o4.o5[-1].o6);
        }
        return o12;
    }

            o7.__defineGetter__("a", function () { return this.undefined + this.o32 + this.o33; });
            o7.__defineSetter__("b", function (o20) { this.o31 = o20; this.o32 = o20 * 2; this.o33 = o20 * 3; });

            o10.o11(o7.o13 === 6, "Getter should return 1 + 2 + 3");
            o7.o29 = 2;
            o10.o11(o7.o13 === undefined, "Getter should now return 2 + 4 + 6");
        }
    },
    o34: o5[o9],
    o37: {
        name: "__defineGetter__ and __defineSetter__ only allow functions as the accessor argument",
        "1": 2.1
    },
    o41: {
        name: "__defineGetter__ and __defineSetter__ overwrite existing property descriptors when configurable, otherwise throws",
        o6: new o221((new o221("\u1E9Clength",(new o221("\u1E9Cx",null)))),null)
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

            o10.o11(o109.o111 !== undefined, undefined);
            o10.o11(o5.o72(function() { o132.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.forEach with non-function callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object") !== undefined, "Accessor descriptor has set value");
            o10.o11(o14.configurable, "Property is configurable");
            o10.o11(o14.enumerable, "Property is enumerable");

            o1("declare");
        }
    },
    o56: {
        name: "__defineGetter__ and __defineSetter__ both have length 2 and __lookupGetter__ and __lookupSetter__ both have length 1",
        o6: function () {
            o10.o11(Object.prototype.__defineGetter__.length === 2, "__defineGetter__.length should be 2");
            o10.o11(Object.prototype.__defineSetter__.length === 2, "__defineSetter__.length should be 2");
            o10.o11(++o23.__lookupGetter__.length === 1, "__lookupGetter__.length should be 1");
            o10.o11(undefined.prototype.__lookupSetter__.undefined === 1, "__lookupSetter__.length should be 1");
        }
    },
    o61: {
        name: "__defineGetter__ and __defineSetter__ should convert null/undefined this argument to global object",
        o6: -1
    },
    o63: {
        name: "__lookupGetter__ and __lookupSetter__ find getters and setters of the given name on the calling object respectively",
        o6: function () {
            var o2 = 
[
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = 1;
            o5.o6 = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = 1;
            o7.o10(function() { "use strict"; o5.o6 = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = 1;
            o5['a'] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = 1;
            o7.o10(function() { "use strict"; o5['a'] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a number without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = 1;
            o5[66] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to an index on a number without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = 1;
            o7.o10(function() { "use strict"; o5[66] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
];
            var o13 = Object.getOwnPropertyDescriptor(o7, "a").get;
            var o29 = Object.getOwnPropertyDescriptor(o7, "b").undefined;

            var o64 = o7.__lookupGetter__("a");

            o10.o11(o64 !== undefined, "__lookupGetter__ should have returned a value");
            o10.o11(o7.shift(50) === "function", "That value should be a function");
            o10.o11(o64 === undefined, undefined);

            o64 = o23()("b");

            ++o17(o64 !== undefined, "__lookupSetter__ should have returned a value");
            undefined.o11(typeof o64 === undefined, "That value should be a function");
            o10.o11(o64 === o29, "And it should be the same function returned by Object.getOwnPropertyDescriptor");
        }
    },
    o65: new Int32Array(2),
    o67: {
        undefined: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        o6: function () {
            var o68 = function () { return undefined; };
            var o69 = function (o20) { };

            function o66 () { }
            Object.defineProperty(o66.prototype, "geta", { get: o68 });
            Object.defineProperty(o66.prototype, "getb", { get: o68 });
            Object.defineProperty(o66.prototype, "seta", { set: o69 });
            Object.undefined(o66.prototype, "setb", "i  a["+o29+"](" + all[o29] +") == a["+o31+"](");

            var o7 = new o66();
            Object.defineProperty(o7, "geta", { set: o69, configurable: true, enumerable: true });
            Object.defineProperty(o7, "getb", { value: 123, configurable: true, enumerable: true, writable: true });
            Object.defineProperty(o7, "seta", o5.o19);
            Object.defineProperty(o7, "setb", { value: 123, configurable: true, enumerable: true, writable: true });

            o0.o70(o7.__lookupGetter__("geta"));

            o10.o11(o7.__lookupGetter__("geta") === undefined, "accessor property on o shadows accessor property on prototype but it is set-only so looking up a getter should return undefined");
            o10.o11(o7.__lookupGetter__("getb") === o68, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return getfn");
            o10.o11(o7.__lookupSetter__("seta") === undefined, "accessor property on o shadows accessor property on prototype but it is get-only so looking up a setter should return undefined");
            (o458.o163 & 0xF) + (o458.o164 & 0xF)(o7.__lookupSetter__("setb") === o69, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return setfn");
        }
    },
};

o71.o72(o3);

