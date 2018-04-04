//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// This test verifies that we correctly bail out if a constructor cache is invalidated as part
// of evaluating one of the arguments of the call to the constructor.

// This test invalidates the constructor cache by changing the constructor's prototype.
o0.o1("Test 1:");
function o2() {
    this.o3 = 0;
}

o2.prototype = { o5: 10 };

function o6(o7) {
    var o8 = new o2(o7 ? o2.prototype = { o9: 11 } : 0);
    return o8;
}

var o8 = o6(false);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");

var o8 = o6(false);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");

o8 = o6(true);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");

for (var o10 = 0; o10 < 10; o10++) {
    o8 = o6(false);
    o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");
}
o0.o1("");

// This test invalidates the constructor cache guard by making one of the properties protected by the
// guard read-only.  The property in question is added in the constructor.
o0.o1("Test 2:");
function o11() {
    this.o3 = 0;
}

o11.prototype = { o5: 10 };

function o12(o7) {
    var o8 = new o11(o7 ? Object.defineProperty(o11.prototype, "x", { value: 12, writable: false }) : 0);
    return o8;
}

var o8 = o12(false);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");

var o8 = o12(false);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");

o8 = o12(true);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");

for (var o10 = 0; o10 < 10; o10++) {
    o8 = o12(false);
    o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + " }");
}
o0.o1("");

// This test invalidates the constructor cache guard by making one of the properties protected by the
// guard read-only.  The property in question is added after the constructor
o0.o1("Test 3:");
function o17() {
    this.o3 = 0;
}

o17.prototype = { o5: 10 };

function o18(o7) {
    var o8 = new o17(o7 ? Object.defineProperty(o17.prototype, "y", { value: 12, writable: false }) : 0);
    o8.o19 = 1;
    return o8;
}

var o8 = o18(false);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + ", y: " + o8.o19 + " }");

var o8 = o18(false);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + ", y: " + o8.o19 + " }");

o8 = o18(true);
o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + ", y: " + o8.o19 + " }");

for (var o10 = 0; o10 < 10; o10++) {
    o8 = o18(false);
    o0.o1("{ p: " + o8.o5 + ", q: " + o8.o9 + ", x: " + o8.o3 + ", y: " + o8.o19 + " }");
}

o0.o1("");
