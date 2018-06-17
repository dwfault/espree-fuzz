//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o259[o189 + o1072 >> 2]){}

var o2 = [
    {
        configurable: false,
        o3: o4.o10(Float64Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'")
    },
    {
        name: o4[Symbol.isConcatSpreadable] = false,
        o2: function() {
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
    Object.getPrototypeOf(undefined),
    {
        name: "Object.create in sloppy mode with `this` as a propertyDescriptor when it contains non-object properties",
        o3: function() {
            try {
o25 = 0;
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
o1("collapseToStart")(o2, { o10: o0.o11[0] != "summary" });
}catch(e){}
