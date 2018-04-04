//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

Object.defineProperty(Object.getPrototypeOf({}), "echo", { value: function () { o4.o5(this); } });
function o6(o7, o8, o9) { ((o7 === o8 ? "Passed! " : "Failed (actual: " + o7 + ", expected: " + o8 + "). Message: ") + o9).o10(); };
Object.defineProperty(Object.getPrototypeOf({}), "equalTo", { value: function (o11, o9) { o6(this.constructor(this), o11, o9); } });


try {
    String.prototype.codePointAt.call();
} catch (o17) {
    o17.o10();
}

try {
    String.prototype.codePointAt.call(null);
} catch (o17) {
    o17.o10();
}
try {
    String.prototype.codePointAt.call(undefined);
} catch (o17) {
    o17.o10();
}

try {
    new String.prototype.codePointAt();
} catch (o17) {
    o17.o10();
}

try {
    String.fromCodePoint.call();
} catch (o17) {
    "Fail!".o10();
}

try {
    String.fromCodePoint.call(null);
} catch (o17) {
    "Fail!".o10();
}
try {
    String.fromCodePoint.call(undefined);
} catch (o17) {
    "Fail!".o10();
}

try {
    new String.fromCodePoint();
} catch (o17) {
    o17.o10();
}

try {
    String.fromCodePoint(1.1);
} catch (o20) {
    o20.o10();
}

try {
    String.fromCodePoint(100000000);
} catch (o20) {
    o20.o10();
}

try {
    String.fromCodePoint(-0.0001);
} catch (o20) {
    o20.o10();
}

try {
    String.fromCodePoint(Infinity);
} catch (o20) {
    o20.o10();
}


o6("".codePointAt(0), undefined, "Size = 0, index 0 test.");
o6("a".codePointAt(-1), undefined, "Size = 1, index -1 test.");
String.fromCodePoint(97).codePointAt(0).o22(97, "Simple character test.");
String.fromCodePoint(65536).codePointAt(0).o22(65536, "Surrogate pair treated as a single code point.");
String.fromCodePoint(65536).codePointAt(1).o22(56320, "Index pointing to a second surrogate code unit returns the value of that code unit.");
String.fromCodePoint(55296).codePointAt(0).o22(55296, "Partial surrogate code unit.");
String.fromCodePoint(55295, 56320).codePointAt(0).o22(55295, "First surrogate code unit not in range [D800-DBFF].");
String.fromCodePoint(56320, 56320).codePointAt(0).o22(56320, "First surrogate code unit not in range [D800-DBFF].");
String.fromCodePoint(65536).codePointAt(0).o22(65536, "First surrogate code unit min value.");
String.fromCodePoint(55296, 56320).codePointAt(0).o22(65536, "First surrogate code unit min value.");
String.fromCodePoint(1113088).codePointAt(0).o22(1113088, "First surrogate code unit max value.");
String.fromCodePoint(56319, 56320).codePointAt(0).o22(1113088, "First surrogate code unit max value.");
String.fromCodePoint(55296, 56319).codePointAt(0).o22(55296, "Second surrogate code unit not in range [DC00-DFFF].");
String.fromCodePoint(55296, 57344).codePointAt(0).o22(55296, "Second surrogate code unit not in range [DC00-DFFF].");
String.fromCodePoint(65536).codePointAt(0).o22(65536, "Second surrogate code unit min value.");
String.fromCodePoint(55296, 56320).codePointAt(0).o22(65536, "Second surrogate code unit min value.");
String.fromCodePoint(66559).codePointAt(0).o22(66559, "Second surrogate code unit max value.");
String.fromCodePoint(55296, 57343).codePointAt(0).o22(66559, "Second surrogate code unit max value.");

String.prototype.codePointAt.call(5, 0).o22(53, "Calling on a number object instead of string object.");

if(String.fromCodePoint.length !== 1) {
    o4.o5("String.fromCodePoint length should be 1, actual: " + String.fromCodePoint.length);
}