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
        o4: function () {
            ["Object.seal(Object.prototype)", "Object.freeze(Object.prototype)"].forEach(function (o6) {
                o7(o6, o8); // These no longer disables __proto__
            });
        }
    },

    {
        name: "delete Object.prototype.__proto__",
        o4: function () {
            var o9 = o10();

            var o11 = o9.Object.getOwnPropertyDescriptor(o9.Object.prototype, "__proto__");
            o9.o7("delete Object.prototype.__proto__");

            // redefine such a property brings __proto__ back
            o9.Object.defineProperty(o9.Object.prototype, "__proto__", o11);
            o9.o16();
        }
    },

    {
        name: "DefineOwnProperty with missing/different attribute set",
        o4: function () {
            function o17(o11) {
                var set = [];
                for (var name in o11) {
                    set.push(name + ": " + o11[name]);
                }
                return '{' + set.join(", ") + '}';
            }

            function o21(o11, o22) {
                var o6 = 'Object.defineProperty(Object.prototype, "__proto__", ' + o17(o11) + ')';

                var o9 = o10();
                o9.o23(o6, o22);

                // Verify we indeed have those attr set successfully
                var o24 = o9.Object.getOwnPropertyDescriptor(o9.Object.prototype, "__proto__");
                for (var name in o11) {
                    o25.o26("" + o11[name], "" + o24[name], name);
                }
            }

            var o27 = ["enumerable", "configurable"];
            var o28 = { enumerable: false, configurable: true };

            // Test any attr missing
            for (var o31 = 0; o31 < 3; o31++) {
                var o11 = {};
                for (var o32 = 0; o32 < 2; o32++) {
                    if (o31 & (1 << o32)) {
                        var name = o27[o32];
                        o11[name] = o28[name];
                    }
                }

                o21(o11, o8); // Now these don't disable __proto__
            }

            // Test any attr diff
            o27.forEach(function (o33) {
                var o11 = { enumerable: false, configurable: true };
                o11[o33] = !o11[o33];

                o21(o11, o8); // Now these don't disable __proto__
            });

            o21({ enumerable: false, configurable: true }, o8);

            // But will be disabled if we change to value, or change setter
            o21({ value: 234, writable: true, enumerable: false, configurable: true });
            o21({ set: function () { return "custom setter" }, enumerable: false, configurable: true });
        }
    },

    {
        name: "Change Object.prototype.__proto__ getter or setter",
        o4: function () {
            o10().o36(function () {
                var o37 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

                var o38 = { o38: 12 };
                var o39 = { o39: 23 };
                var o40 = { o40: 34 };

                o25.o26(Object.prototype, o40.__proto__);
                o40.__proto__ = o38;
                o25.o26(o38, Object.getPrototypeOf(o40));

                // Replace the setter
                Object.defineProperty(Object.prototype, "__proto__", { set: function () { } });
                o25.o26(o38, o40.__proto__);
                o40.__proto__ = o39; // This does not work
                o25.o26(o38, o40.__proto__);
                Object.setPrototypeOf(o40, o39); // But this works
                o25.o26(o39, o40.__proto__);

                // Replace the getter
                Object.defineProperty(Object.prototype, "__proto__", { get: function () { return 123; } });
                o25.o26(123, o40.__proto__);
                o25.o26(o39, Object.getPrototypeOf(o40));
                Object.setPrototypeOf(o40, o38);
                o25.o26(123, o40.__proto__);
                o25.o26(o38, Object.getPrototypeOf(o40));

                // Restore
                Object.defineProperty(Object.prototype, "__proto__", { get: o37.get, set: o37.set });
                o25.o26(o38, o40.__proto__);

                o16();
            });
        }
    },
];
o45.o36(o2);
