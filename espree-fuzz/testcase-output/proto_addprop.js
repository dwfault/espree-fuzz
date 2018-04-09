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

function o6() {
    /// Create new objects of the same Type, and with __proto__ "p"
    return new o4();
}

function o7(o8) {
    o8.o9 = 1;
    o8.o10 = 2;
}

// Need to run this twice. Test with maxinterpretcount 1 and 2
o7(o6());
o7(o6());

var o11 = o6();

o12.o13(Object.getPrototypeOf(o11) === o2);
o2.__proto__ = { get o9() { return "x"; } };

o7(o11);

o12.o14("x", o11.o9, "Shouldn't add field x");

o0.o15("pass");
