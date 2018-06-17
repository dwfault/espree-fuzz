//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var index = 0;
var o1 = new o6();
var o48 = Array(-701848834, 234290815);
try {
o59[o5>>2] = {
        name: "Uint32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint32Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint32Array.hasOwnProperty(Symbol.species), "Uint32Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint32Array, Uint32Array[Symbol.species], "Uint32Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    };
}catch(e){}

try {
o3.o4(0);
}catch(e){}
try {
o96.o97 = 10;
}catch(e){}
try {
o3.o4(o0[1]);
}catch(e){}

try {
o3.o4("Store a single item in b");
}catch(e){}
try {
o1[3] = 99;
}catch(e){}
try {
o3.o4(o1[3]);
}catch(e){}

try {
for (var o5 = -1; o5 < o2.length; o5++) {
    try {
o3.o4(o2[o5]);
}catch(e){}
}
}catch(e){}

// Test boolean expressions in an initializer
var o6 = {}, o7 = false;
try {
o3.o4([o6||o7]);
}catch(e){}
try {
o3.o4([o6&&o7]);
}catch(e){}
try {
o3.o4([o6 ? o7 : o6]);
}catch(e){}
try {
o3.o4([o7 ? o6 : o7]);
}catch(e){}
try {
o3.o4([o7||o6]);
}catch(e){}
try {
o3.o4(o7&&o6);
}catch(e){}
try {
o3.o4([o6||o7, o6&&o7, o6 ? o7 : o6, o7 ? o6 : o7, o7||o6, o7&&o6]);
}catch(e){}

// Test some boundary property names
var o8 = [];

try {
o8["4294967294"] = 100;
}catch(e){}
try {
o3.o4(o8["4294967294"]);
}catch(e){}

try { {} } catch(e) {}try { {} } catch(e) {}
try {
o3.o4(o8["4294967295"]);
}catch(e){}

try {
o8["4294967296"] = 102;
}catch(e){}
try {
o3.o4(o8["4294967296"]);
}catch(e){}

try {
o8["4088701331"] = 103;
}catch(e){}
try {
o3.o4(o8["4088701331"]);
}catch(e){}

try {
o8["40887013312"] = 104;
}catch(e){}
try {
o3.o4(o8["40887013312"]);
}catch(e){}

try {
o8["4088.7013"] = 105;
}catch(e){}
try {
o3.o4(o8["4088.7013"]);
}catch(e){}

try {
o8["408870133X"] = 106;
}catch(e){}
try {
o3.o4(o8["408870133X"]);
}catch(e){}
