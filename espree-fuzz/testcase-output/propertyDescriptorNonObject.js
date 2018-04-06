//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Object.create with propertyDescriptor containing non-object keys",
        o4: function() {
            o5.o6(function() { Object.create({}, {o9: 0}) },
                o10,
                "Should throw TypeError because property 'a' is not an object.",
                "Invalid descriptor for property 'a'")
        }
    },
    {
        name: "Object.defineProperty with number for propertyDescriptor",
        o4: function() {
            o5.o6(function() { Object.defineProperty({}, "x", 0) },
                o10,
                "Should throw TypeError because property 'x' is a number.",
                "Invalid descriptor for property 'x'")
        }
    },
    {
        name: "Object.create with array of non-objects for propertyDescriptor",
        o4: function() {
            o5.o6(function() { Object.create({}, [0]) },
                o10,
                "Should throw TypeError because propertyDescriptor is an array containing non-objects.",
                "Invalid descriptor for property '0'")
        }
    },
    {
        name: "Object.create in sloppy mode with `this` as a propertyDescriptor when it contains non-object properties",
        o4: function() {
            o9 = 0;
            o5.o6(function() { Object.create({}, this) },
                o10,
                "Should throw TypeError because property 'a' is defined on `this` and is a non-object.",
                "Invalid descriptor for property 'a'")
        }
    },
];

o12.o13(o2, { o14: o0.o15[0] != "summary" });
