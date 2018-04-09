//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
if (this.o0 && this.o0.o1) {
    o0.o1("protolib.js");
}

var o2 = [
    {
        name: "seal/freeze Object.prototype",
        o3: function () {
            ["Object.seal(Object.prototype)", "Object.freeze(Object.prototype)"].forEach(function (o4) {
                o5(o4, o6); // These no longer disables __proto__
            });
        }
    },

    {
        name: "delete Object.prototype.__proto__",
        o3: function () {
            var o7 = o8();

            var o9 = o7.Object.getOwnPropertyDescriptor(o7.Object.prototype, "__proto__");
            o7.o5("delete Object.prototype.__proto__");

            // redefine such a property brings __proto__ back
            o7.Object.defineProperty(o7.Object.prototype, "__proto__", o9);
            o7.o10();
        }
    },

    {
        name: "DefineOwnProperty with missing/different attribute set",
        o3: function () {
            function o11(o9) {
                var set = [];
                for (var name in o9) {
                    set.push(name + ": " + o9[name]);
                }
                return '{' + set.join(", ") + '}';
            }

            function o12(o9, o13) {
                var o4 = 'Object.defineProperty(Object.prototype, "__proto__", ' + o11(o9) + ')';

                var o7 = o8();
                o7.o14(o4, o13);

                // Verify we indeed have those attr set successfully
                var o15 = o7.Object.getOwnPropertyDescriptor(o7.Object.prototype, "__proto__");
                for (var name in o9) {
                    o16.o17("" + o9[name], "" + o15[name], name);
                }
            }

            var o18 = ["enumerable", "configurable"];
            var o19 = { enumerable: false, configurable: true };

            // Test any attr missing
            for (var o20 = 0; o20 < 3; o20++) {
                var o9 = {};
                for (var o21 = 0; o21 < 2; o21++) {
                    if (o20 & (1 << o21)) {
                        var name = o18[o21];
                        o9[name] = o19[name];
                    }
                }

                o12(o9, o6); // Now these don't disable __proto__
            }

            // Test any attr diff
            o18.forEach(function (o22) {
                var o9 = { enumerable: false, configurable: true };
                o9[o22] = !o9[o22];

                o12(o9, o6); // Now these don't disable __proto__
            });

            o12({ enumerable: false, configurable: true }, o6);

            // But will be disabled if we change to value, or change setter
            o12({ value: 234, writable: true, enumerable: false, configurable: true });
            o12({ set: function () { return "custom setter" }, enumerable: false, configurable: true });
        }
    },

    {
        name: "Change Object.prototype.__proto__ getter or setter",
        o3: function () {
            o8().o23(function () {
                var o24 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

                var o25 = { o25: 12 };
                var o26 = { o26: 23 };
                var o27 = { o27: 34 };

                o16.o17(Object.prototype, o27.__proto__);
                o27.__proto__ = o25;
                o16.o17(o25, Object.getPrototypeOf(o27));

                // Replace the setter
                Object.defineProperty(Object.prototype, "__proto__", { set: function () { } });
                o16.o17(o25, o27.__proto__);
                o27.__proto__ = o26; // This does not work
                o16.o17(o25, o27.__proto__);
                Object.setPrototypeOf(o27, o26); // But this works
                o16.o17(o26, o27.__proto__);

                // Replace the getter
                Object.defineProperty(Object.prototype, "__proto__", { get: function () { return 123; } });
                o16.o17(123, o27.__proto__);
                o16.o17(o26, Object.getPrototypeOf(o27));
                Object.setPrototypeOf(o27, o25);
                o16.o17(123, o27.__proto__);
                o16.o17(o25, Object.getPrototypeOf(o27));

                // Restore
                Object.defineProperty(Object.prototype, "__proto__", { get: o24.get, set: o24.set });
                o16.o17(o25, o27.__proto__);

                o10();
            });
        }
    },
];
o28.o23(o2);
