//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    ArrayBuffer.isView(o79),
    {
        name: "Object.defineProperty with number for propertyDescriptor",
        o3: function() {
            try {
o4.o5(function() { try {
Object.defineProperty({}, "x", 0)
}catch(e){} },
                o7,
                "Should throw TypeError because property 'x' is a number.",
                "Invalid descriptor for property 'x'")
}catch(e){}
        }
    },
    {
        name: "Object.create with array of non-objects for propertyDescriptor",
        o3: function() {
            try {
o4.o5(function() { try {
Object.create({}, [0])
}catch(e){} },
                o7,
                "Should throw TypeError because propertyDescriptor is an array containing non-objects.",
                "Invalid descriptor for property '0'")
}catch(e){}
        }
    },
    {
        name: "Object.create in sloppy mode with `this` as a propertyDescriptor when it contains non-object properties",
        o3: function() {
            try {
o6 = 0;
}catch(e){}
            try {
o4.o5(function() { try {
Object.create({}, this)
}catch(e){} },
                o7,
                "Should throw TypeError because property 'a' is defined on `this` and is a non-object.",
                "Invalid descriptor for property 'a'")
}catch(e){}
        }
    },
];

try {
o8.e(e, { o10: o0.o11[0] != "summary" });
}catch(e){}
