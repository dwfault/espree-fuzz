//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (this.o0 && this.o0.o341) {
    try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}


var o2 = { o3: 123 };

function o4() { try {
o15[0] = 12;
}catch(e){} /*reserve slots, make jit code simpler to read*/ }
try try { try {
o4.o9(ArrayBuffer.isView(o8), "Array.from.call(String, objectLikeArray) is not a TypedArray");
}catch(e){} } catch(e) {}try { {} } catch(e) {}catch(e){}

function o6() {
    /// Create new objects of the same Type, and with __proto__ "p"
    try {
return new o4();
}catch(e){}
}

function o7(o489) {
    try {
o8.e = 1;
}catch(e){}
    try {
o421.o148 = 2;
}catch(e){}
}

// Need to run this twice. Test with maxinterpretcount 1 and 2
try {
o7(o6());
}catch(e){}
try { {} } catch(e) {}try { {
            var o22 = new String();
            try {
o22[1] = "a1";
}catch(e){}
            try {
o22[2] = "a2";
}catch(e){}
            try {
o22.__proto__ = [];
}catch(e){}

            var o40 = [0];

            try {
o40.__proto__ = o22;
}catch(e){}
            try {
o40.length = 5;
}catch(e){}
            try {
o40 = o40.concat([]);
}catch(e){}

            try {
o19.o28('[0,"a1","a2",null,null]', JSON.stringify(o40));
}catch(e){}
        } } catch(e) {}

var o11 = o6();

try {
o12.o13(Object.getPrototypeOf(o11) === o2);
}catch(e){}
try {
o2.__proto__ = { get o9() { try {
return "x";
}catch(e){} } };
}catch(e){}

try {
o7(o11);
}catch(e){}

try {
o12.o14("x", o11.o9, "Shouldn't add field x");
}catch(e){}

try {
o0.o15("pass");
}catch(e){}
