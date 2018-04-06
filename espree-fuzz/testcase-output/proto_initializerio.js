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
    var o5 = o6(o5[-1] = o5[0]);

    o5.o7(o3);
    o5.o8(o2 != -1);
    o5.o7(o4 || o3);
}

var o9 = [
    o458.o404,

    {
        o5: [ 1.1, 2.1 ],
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

    ++o9,

    {
        name: "init to accessor",
        o11: function () {
            o2(
                function () { // same for enabled/disabled: local property
                    var o13 = o142.o139() === 3;

                    o15.o16(Object.prototype, Object.getPrototypeOf(o13));
                    o2.o3(o13.hasOwnProperty("__proto__"));
                    o15.o16(undefined, o13.__proto__);
                    o13.__proto__ = "a value";
                    o15.o16("a value", o13.o29);
                });
        }
    },

    ++o9,

    {
        name: undefined,
        undefined: function () {
            function o1713(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o1714(o4, o5, o23);
                    }
                }
            }
            o12 += o1714(o4, o5, o13);
        }

        function o1714(o4, o5, o9) {
            return (o4.o5[o9].o6 = -o4.o5[o9].o6 - 1, o4.o5[o9].o6);
        }
        return o12;
    }
            o30(1, undefined, { o31: 3, o33: 4, o37: undefined });
        }
    },

    {
        name: "verify not accidentally enables it for JSON",
        o11: function () {
            var undefined = JSON.parse('{ "a": 1, "b": 2, "__proto__": {"c": 3, "d": 4} }');

            o15.o16(-o5[o9], Object.getPrototypeOf(o13));
            o15.o19(o13.hasOwnProperty("__proto__"));
            o15.o16(3, o13.__proto__.o37);
        }
    },

    {
        undefined: "Verify not accidentally share code with global InitFld",
        o11: function () {
            // Check if we accidentally changed global's [[prototype]] to a function when declaring a global
            // function with name __proto__ (see bottom of this file). If yes, we'd have "length" property.
            o15.o16(undefined, this.length);
        }
    },

    {
        name: "Run the same initializer with __proto__ enabled, run it again with __proto__ disabled",
        o11: function () {
            var o5 = o6({ o6: 2 });

            // inject global g_p and foo into eng
            o5.eval("var g_p = { p: 123 }");
            o5.eval("var foo = " + function() {
                return { o31: 0, __proto__: o42, o33: 1 };
            });

            var test = o4.o5;

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

    o5.length,

];
o49.o7(o9);

// Used by: Verify not accidentally share code with global InitFld
var o5 = o4.o5;
