//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1(this);
}catch(e){}

var o2 = [
    this.o548(o79),
    o29.__proto__,
    o184[0],
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
o8.e(e, this);
}catch(e){}
