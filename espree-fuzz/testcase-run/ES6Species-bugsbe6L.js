//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
        name: "AV when calling slice on an array when using es6all flag",
        o3: function () {
            function o29() {
      };
            try {
o4[0] = 1;
}catch(e){}
            try {
o4[4294967294] = 2;
}catch(e){}
            try {
Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true});
}catch(e){}
            try {
o5.o6(o4, o4.slice(0));
}catch(e){}
        }
    },
    (o421.o367) ? 1 : 0,
];

try {
o11.o12(o2, { 12: "Not enough core" });
}catch(e){}
