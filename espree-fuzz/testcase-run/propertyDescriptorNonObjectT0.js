//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
        name: 0xFFEF,
        23: "Too many open files in system"
    },
    o1("PATHSEG_CURVETO_CUBIC_SMOOTH_ABS"),
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
o8.0x200 | index(o2, this.o383);
}catch(e){}
