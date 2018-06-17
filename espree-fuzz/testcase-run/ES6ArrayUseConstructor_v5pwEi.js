//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try {
this.o677(0x700)("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o1098){}

var o2 = [
    o8.o367,
    {
        name: "Array.prototype.filter",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = this.o145 = 0x13;
}catch(e){}

            var this.o577[index] = Array.prototype.filter.call(o4, function() { try {
return true;
}catch(e){} });

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
}catch(e){}
            try {
Module['print'] = function () {}(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
}catch(e)try { {
o474.o609(o31, o605.o489, o605.o489);
} } catch(e) {}
            try {
o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    o10[o51],
    {
        name: "Array.prototype.slice",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.slice.call(o4);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.slice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
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
