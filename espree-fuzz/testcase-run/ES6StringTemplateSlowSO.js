//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1(0x7F);
}catch(e){}

var o2 = [
    {
        name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
        o25: function () {
            var o51 = "23";
            var o10 = { 23: 1 };
            var o52 = { value: 2, writable: false };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 2, configurable: true, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },
];

try {
o10.o11(o2, { o12: o0.o13[0] != "summary" });
}catch(e){}
