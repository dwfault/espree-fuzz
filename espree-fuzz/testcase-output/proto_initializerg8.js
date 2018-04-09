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


var o9 = [
    {
        name: "init to an object",
        o10: function () {
            o2(
                function () { // enabled: [[prototype]]
                    var o11 = { o11: 123 };
                    var o12 = { __proto__: o11 };

                    o13.o14(o11, Object.getPrototypeOf(o12));
                    o13.o15(!o12.hasOwnProperty("__proto__"));
                    o13.o14(123, o12.o11);
                    o13.o14(o11, Object.getPrototypeOf(o12));
                });
        }
    },

    {
        name: "init to null",
        o10: function () {
            o2(
                function () { // enabled: [[prototype]]
                    var o12 = { __proto__: null };

                    o13.o14(null, Object.getPrototypeOf(o12));
                    o13.o16({}.hasOwnProperty.apply(o12, ["__proto__"]));
                    o13.o14(undefined, o12.__proto__); // o's [[prototype]] is null, so doesn't have a __proto__ property
                });
        }
    },

    {
        name: "init to neither object nor null",
        o10: function () {
            o2(
                function () { // enabled: throw
                    function test(value) {
                        var o12 = { __proto__: value };

                        o13.o14(Object.prototype, Object.getPrototypeOf(o12));
                        o13.o16(o12.hasOwnProperty("__proto__"));
                    }

                    [undefined, 0, 123, Infinity, true, false, "string value"].forEach(function (value) {
                        test(value);
                    });
                });
        }
    },

    {
        name: "init to accessor",
        o10: function () {
            o2(
                function () { // same for enabled/disabled: local property
                    var o12 = {
                        get __proto__() { return "proto"; },
                        set __proto__(value) { this.o17 = value; }
                    };

                    o13.o14(Object.prototype, Object.getPrototypeOf(o12));
                    o13.o15(o12.hasOwnProperty("__proto__"));
                    o13.o14("proto", o12.__proto__);
                    o12.__proto__ = "a value";
                    o13.o14("a value", o12.o17);
                });
        }
    },

    {
        name: "verify no incorrectly shared type",
        o10: function () {
            function o18(o11) {
                return {
                    o19: 100,
                    __proto__: o11,
                };
            }

            // If we incorrectly shared Type, we'll have wrong [[prototype]].
            var o20 = o18({ o21: 1 });
            var o22 = o18({ o21: 2 });
            var o23 = o18({ o21: 3 });

            o13.o14(1, o20.o21);
            o13.o14(2, o22.o21);
            o13.o14(3, o23.o21);
        }
    },

    {
        name: "verify not accidentally enables it for function parameters",
        o10: function () {
            function o18(o19, o21, __proto__) {
                var o12 = arguments;

                o13.o14(Object.prototype, Object.getPrototypeOf(o12));
                o13.o14(Object.prototype, o12.__proto__);
                o13.o15(!o12.hasOwnProperty("__proto__"));
                o13.o14(1, o12[0]);
                o13.o14(3, o12[2].o19);
                o13.o14(4, __proto__.o21);
            }
            o18(1, 2, { o19: 3, o21: 4, o24: 5 });
        }
    },

    {
        name: "verify not accidentally enables it for JSON",
        o10: function () {
            var o12 = JSON.parse('{ "a": 1, "b": 2, "__proto__": {"c": 3, "d": 4} }');

            o13.o14(Object.prototype, Object.getPrototypeOf(o12));
            o13.o15(o12.hasOwnProperty("__proto__"));
            o13.o14(3, o12.__proto__.o24);
        }
    },

    {
        name: "Verify not accidentally share code with global InitFld",
        o10: function () {
            // Check if we accidentally changed global's [[prototype]] to a function when declaring a global
            // function with name __proto__ (see bottom of this file). If yes, we'd have "length" property.
            o13.o14(undefined, this.length);
        }
    },

    {
        name: "Run the same initializer with __proto__ enabled, run it again with __proto__ disabled",
        o10: function () {
            var o5 = o6();

            // inject global g_p and foo into eng
            o5.eval("var g_p = { p: 123 }");
            o5.eval("var foo = " + function() {
                return { o19: 0, __proto__: o25, o21: 1 };
            });

            var test = function () { // enabled: [[prototype]]
                var o12 = o18();
                o13.o14(o25, Object.getPrototypeOf(o12));
                o13.o14("a,b", Object.keys(o12).toString());
                o13.o14(123, o12.o11);
            };

            o5.o7(test);
            o5.o8();
            o5.o7(test);
        }
    },

    {
        name: "Enumeration order should be unaffected",
        o10: function () {
            o2(
                function () {
                    var o12 = {
                        o19: 100,
                        __proto__: new Number(200),
                        o21: 300,
                    };
                    o13.o14("a,b", Object.keys(o12).toString());
                });

            o2(
                function () { // enabled: [[prototype]]
                    var o12 = {
                        o19: 100,
                        __proto__: { o24: "p0", o26: "p1" },
                        o21: 300,
                    };

                    var o27 = [];
                    for (var name in o12) {
                        o27.push(name);
                    }

                    o13.o14("a,b", Object.keys(o12).toString());
                    o13.o14("a,b,c,d", o27.toString());
                });
        }
    },

    {
        name: "Verify bytecode serialization",
        o10: function () { // Test in current engine to use switch -ForceSerialized
            var o12 = {
                o19: 100,
                __proto__: { o24: "p0", o26: "p1" },
                o21: 300,
            };

            // Serialized bytecode should correctly mark if initializer has__proto__
            o13.o14("a,b", Object.keys(o12).toString());
        }
    },

];
o28.o7(o9);

// Used by: Verify not accidentally share code with global InitFld
function __proto__() { }
