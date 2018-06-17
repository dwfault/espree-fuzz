//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try {
this.o677(0x700)("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o1098){}

var o2 = [
    new Uint8Array(o108).o850 < 0x80,
    {
        o972: false,
        o3: function () {
            try {
o4.o5(Number.isNaN(NaN), "Number.isNaN returns true for NaN");
}catch(e){}
            try {
o4.o5(Number.isNaN(0/0), "Number.isNaN returns true for 0/0 which is NaN");
}catch(e){}
            try {
o4.o11(Number.isNaN(123), "Number.isNaN returns false for a finite number, say 123");
}catch(e){}
            try {
o4.o11(Number.isNaN(-3.14159), "Number.isNaN returns false for a finite number, say -3.14159");
}catch(e){}
            try {
o4.o11(Number.isNaN(Infinity), "Number.isNaN returns false for +Infinity");
}catch(e){}
            try {
o4.o11(Number.isNaN(-Infinity), "Number.isNaN returns false for -Infinity");
}catch(e){}
            try {
o4.o11(Number.isNaN(undefined), "Number.isNaN returns false for undefined");
}catch(e){}
            try {
o4.o11(Number.isNaN(null), "Number.isNaN returns false for null");
}catch(e){}
            try {
o4.o11(Number.isNaN(new Number(0)), "Number.isNaN returns false for Number object");
}catch(e){}
            try {
o4.o11(Number.isNaN(new Number(NaN)), "Number.isNaN returns false for Number object whose value is NaN");
}catch(e){}
            try {
o4.o11(Number.isNaN("1234"), "Number.isNaN returns false for a string with value '1234'");
}catch(e){}
            try {
o4.o11(Number.isNaN("NaN"), "Number.isNaN returns false for a string with value 'NaN'");
}catch(e){}
            try {
o4.o11(Number.isNaN("Apple"), "Number.isNaN returns false for a string with value 'Apple'");
}catch(e){}
        }
    },
    this.o645,
    o421.o531 = ((o70 & 0x08) == 0x08) ? 0x400 : 0,
    this,
];

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(length){}
