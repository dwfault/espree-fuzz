//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw an object with Error or Error.prototype in its prototype chain
//

function o0(o1) {
    if (this.o2) {
        o2.o3(o1);
    } else {
        o4(o1);
    }
}

function o5(o6, o7) {
    o0(o7);
    try {
        throw o6;
    } catch (o8) {
        o0(o9(o8.o10));
    }
    o0("");
}

function o11(o12, o7) {
    function o13(o7) {
        this.o14 = o7;
    }
    o13.prototype = o12;

    o5(new o13(o7), o7);
}

function o16(o12, o7) {
    function o17(){}
    o17.prototype = o12;

    o11(o12, "Prototype is " + o7);
    o11(new o17(), "Prototype has " + o7);
}

function o18() {
    o16(new Error(), "new Error()");
    o16(Error.prototype, "Error.prototype");
    o16(new o20(), "new RangeError()");
    o16(o20.prototype, "RangeError.prototype");

    o16(123, "123");
    o16(new String(), "new String()");

    o5(Error.prototype, "throw Error.prototype");
    o5(o20.prototype, "throw RangeError.prototype");
    o5(o22.prototype, "throw TypeError.prototype");
}

if (this.o2 && this.o2.o23) {
    this.o2.o23("TrimStackTracePath.js");
}
o18();
