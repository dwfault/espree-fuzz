//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
if (this.o0 && this.o0.o1) {
    o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}


var o2 = { o3: 123 };

function o4() { this.o5 = 12; /*reserve slots, make jit code simpler to read*/ }
o4.prototype = o2;

function o7() {
    /// Create new objects of the same Type, and with __proto__ "p"
    return new o4();
}

function o8(o9) {
    o9.o10 = 1;
    o9.o11 = 2;
}

// Need to run this twice. Test with maxinterpretcount 1 and 2
o8(o7());
o8(o7());

var o12 = o7();

o13.o14(Object.getPrototypeOf(o12) === o2);
o2.__proto__ = { get o10() { return "x"; } };

o8(o12);

o13.o18("x", o12.o10, "Shouldn't add field x");

o0.o19("pass");
