//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES7 Object Prototype object has an immutable [[Prototype]] internal slot
// See: 19.1.3 Properties of the Object Prototype Object
// See: 9.4.7 Immutable Prototype Exotic Objects

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Not okay to set Object.prototype.[[Prototype]] using __proto__",
        o4: function () {
            var o5 = Object.getPrototypeOf(Object.prototype)
            var o9 = Object.create(null)

            o11.o12(function () { Object.prototype.__proto__ = o9 },
                o14,
                "It should not be okay to set Object.prototype.[[Prototype]] using __proto__",
                "Can't set the prototype of this object.")

            o11.o15(o5, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged")
            o11.o15(o5, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged")
        }
    },
    {
        name: "Not okay to set Object.prototype.[[Prototype]] using Object.setPrototypeOf",
        o4: function () {
            var o5 = Object.getPrototypeOf(Object.prototype)
            var o9 = Object.create(null)

            o11.o12(function () { Object.setPrototypeOf(Object.prototype, o9) },
                o14,
                "It should not be okay to set Object.prototype.[[Prototype]] using Object.setPrototypeOf",
                "Can't set the prototype of this object.")

            o11.o15(o5, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged")
            o11.o15(o5, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged")
        }
    },
];

o17.o18(o2, { o19: o0.o20[0] != "summary" });
