//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
if (this.o0 && this.o0.o1) {
    o0.o1("protolib.js");
}

// Test __proto__ (object literal) initializer in a new engine:
//      Run "enabled" function, disable__proto__, then run "disabled" (or by default "enabled" again).
function o2(o3, /*optional*/o4) {
    var o5 = o6();

    o5.o7(o3);
    o5.o8();
    o5.o7(o4 || o3);
}

var o9 = [
    {
        name: "init to an object",
        o11: function () {
            o2(
                function () { // enabled: [[prototype]]
                    var o12 = { o12: 123 };
                    var o13 = { __proto__: o12 };

                    o15.o16(o12, Object.getPrototypeOf(o13));
                    o15.o19(!o13.hasOwnProperty("__proto__"));
                    o15.o16(123, o13.o12);
                    o15.o16(o12, Object.getPrototypeOf(o13));
                });
        }
    },

    {
        name: "init to null",
        o11: function () {
            o2(
                function () { // enabled: [[prototype]]
                    var o13 = { __proto__: null };

                    o15.o16(null, Object.getPrototypeOf(o13));
                    o15.o21({}.hasOwnProperty.apply(o13, ["__proto__"]));
                    o15.o16(undefined, o13.__proto__); // o's [[prototype]] is null, so doesn't have a __proto__ property
                });
        }
    },

    {
        name: "init to neither object nor null",
        o11: function () {
            o2(
                function () { // enabled: throw
                    function test(value) {
                        var o13 = { __proto__: value };

                        o15.o16(Object.prototype, Object.getPrototypeOf(o13));
                        o15.o21(o13.hasOwnProperty("__proto__"));
                    }

                    [undefined, 0, 123, Infinity, true, false, "string value"].forEach(function (value) {
                        test(value);
                    });
                });
        }
    },

    {
        name: "init to accessor",
        o11: function () {
            o2(
                function () { // same for enabled/disabled: local property
                    var o13 = {
                        get __proto__() { return "proto"; },
                        set __proto__(value) { this.o29 = value; }
                    };

                    o15.o16(Object.prototype, Object.getPrototypeOf(o13));
                    o15.o19(o13.hasOwnProperty("__proto__"));
                    o15.o16("proto", o13.__proto__);
                    o13.__proto__ = "a value";
                    o15.o16("a value", o13.o29);
                });
        }
    },

    {
        name: "verify no incorrectly shared type",
        o11: function () {
            function o30(o12) {
                return {
                    o31: 100,
                    __proto__: o12,
                };
            }

            // If we incorrectly shared Type, we'll have wrong [[prototype]].
            var o32 = o30({ o33: 1 });
            var o34 = o30({ o33: 2 });
            var o35 = o30({ o33: 3 });

            o15.o16(1, o32.o33);
            o15.o16(2, o34.o33);
            o15.o16(3, o35.o33);
        }
    },

    {
        name: "verify not accidentally enables it for function parameters",
        o11: function () {
            function o30(o31, o33, __proto__) {
                var o13 = arguments;

                o15.o16(Object.prototype, Object.getPrototypeOf(o13));
                o15.o16(Object.prototype, o13.__proto__);
                o15.o19(!o13.hasOwnProperty("__proto__"));
                o15.o16(1, o13[0]);
                o15.o16(3, o13[2].o31);
                o15.o16(4, __proto__.o33);
            }
            o30(1, 2, { o31: 3, o33: 4, o37: 5 });
        }
    },

    {
        name: "verify not accidentally enables it for JSON",
        o11: function () {
            var o13 = JSON.parse('{ "a": 1, "b": 2, "__proto__": {"c": 3, "d": 4} }');

            o15.o16(Object.prototype, Object.getPrototypeOf(o13));
            o15.o19(o13.hasOwnProperty("__proto__"));
            o15.o16(3, o13.__proto__.o37);
        }
    },

    {
        name: "Verify not accidentally share code with global InitFld",
        o11: function () {
            // Check if we accidentally changed global's [[prototype]] to a function when declaring a global
            // function with name __proto__ (see bottom of this file). If yes, we'd have "length" property.
            o15.o16(undefined, this.length);
        }
    },

    {
        name: "Run the same initializer with __proto__ enabled, run it again with __proto__ disabled",
        o11: function () {
            var o5 = o6();

            // inject global g_p and foo into eng
            o5.eval("var g_p = { p: 123 }");
            o5.eval("var foo = " + function() {
                return { o31: 0, __proto__: o42, o33: 1 };
            });

            var test = function () { // enabled: [[prototype]]
                var o13 = o30();
                o15.o16(o42, Object.getPrototypeOf(o13));
                o15.o16("a,b", Object.keys(o13).toString());
                o15.o16(123, o13.o12);
            };

            o5.o7(test);
            o5.o8();
            o5.o7(test);
        }
    },

    {
        name: "Enumeration order should be unaffected",
        o11: function () {
            o2(
                function () {
                    var o13 = {
                        o31: 100,
                        __proto__: new Number(200),
                        o33: 300,
                    };
                    o15.o16("a,b", Object.keys(o13).toString());
                });

            o2(
                function () { // enabled: [[prototype]]
                    var o13 = {
                        o31: 100,
                        __proto__: { o37: "p0", o46: "p1" },
                        o33: 300,
                    };

                    var o47 = [];
                    for (var name in o13) {
                        o47.push(name);
                    }

                    o15.o16("a,b", Object.keys(o13).toString());
                    o15.o16("a,b,c,d", o47.toString());
                });
        }
    },

    {
        name: "Verify bytecode serialization",
        o11: function () { // Test in current engine to use switch -ForceSerialized
            var o13 = {
                o31: 100,
                __proto__: { o37: "p0", o46: "p1" },
                o33: 300,
            };

            // Serialized bytecode should correctly mark if initializer has__proto__
            o15.o16("a,b", Object.keys(o13).toString());
        }
    },

];
o49.o7(o9);

// Used by: Verify not accidentally share code with global InitFld
function __proto__() { }
