//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
        name: "Array.prototype.concat",
        o3: function () {
            var o4 = ["rx+",'b','c'];
            try {
Promise.all([Promise.reject('expected2'), Promise.resolve('unexpected1')]).then(
                    o10 => o0(`Test #${index} - Success handler #2 called with result = ${o10}`)
                );
}catch(e){}

            var o37 = (o31 - o33) / 2;

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.concat should be an Array object");
}catch(o1111){}
            try {
o6.e(o80 instanceof Number, "Return from Array.prototype.concat should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(6, o5.length, "Array.prototype.concat sets the length property of returned object");
}catch(e){}
        }
    },
    o1060 + 24 >> 2,
    o1030 + "px",
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
}catch(e){}
