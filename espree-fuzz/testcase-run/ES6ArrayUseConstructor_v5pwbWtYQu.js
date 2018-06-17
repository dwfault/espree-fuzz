//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try {
this.o677(0x700)(o5);
}catch(o1098){}

var o2 = [
    new Uint8Array(o108).o367,
    o4.includes,
    o421.o367.o645,
    {
        name: "Array.prototype.slice",
        o3: function () {
            var o4 = o259[2676] | 0;
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.slice.call(o4);

            try {
this.o412 != 3(Array.isArray(o5), "Return from Array.prototype.slice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, 4294967300);
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.slice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.splice",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
];

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(length){}
