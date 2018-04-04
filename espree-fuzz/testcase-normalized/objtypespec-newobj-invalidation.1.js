//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Switches: -bgJit- -maxInterpretCount:2

// Test 1: Invalidate constructor cache by changing the constructor's prototype property.
o0.o1("Test 1:");

var o2 = function () {
    this.o3 = 0;
    this.o4 = 1;
}

var o5 = { o6: 100 };
var o7 = { o6: 200 };

o2.prototype = o5;

var o9 = function () {
    var o10 = new o2();
    o10.o11 = 10;
    o10.o12 = 11;
    return o10;
}

var o13 = new Array();

// Run twice in the interpreter to populate add property caches and kick off JIT compilation.
o13.push(o9());
o13.push(o9());

// Run once along the happy path.
o13.push(o9());

// Now change the prototype object to invalidate the constructor cache and cause a bailout.
o2.prototype = o7;

o13.push(o9());

// Run a few more times (bailing out every time) to force a re-JIT.  After re-JIT the optimization
// should be disabled because the constructor cache is now marked as polymorphic.

o13.push(o9());
o13.push(o9());
o13.push(o9());
o13.push(o9());
o13.push(o9());

for (var o16 = 0; o16 < o13.length; o16++) {
    var o10 = o13[o16];
    o0.o1("oa1[" + o16 + "]: " + "{ a: " + o10.o3 + ", b: " + o10.o4 + ", p: " + o10.o6 + ", x: " + o10.o11 + ", y: " + o10.o12 + " }");
}
o0.o1("");

// Test 2: Invalidate the constructor cache by making one of the properties added in the
// constructor read-only
o0.o1("Test 2:");

var o18 = function () {
    this.o3 = 0;
    this.o4 = 1;
    this.o19 = 2;
}

var o20 = { o6: 100 };

o18.prototype = o20;

var o21 = function () {
    var o10 = new o18();
    o10.o11 = 10;
    o10.o12 = 11;
    return o10;
}

var o22 = new Array();

// Run twice in the interpreter to populate add property caches and kick off JIT compilation.
o22.push(o21());
o22.push(o21());

// Run once along the happy path.
o22.push(o21());

// Now invalidate the constructor cache by making one of the properties added in the constructor
// read-only.
Object.defineProperty(o20, "a", { value: 101, writable: false });

o22.push(o21());

// Run a few more times (bailing out every time) to force a re-JIT.  After re-JIT, we should no longer
// have the offending property access object type specialized, and thus protected by the ctor guard.
o22.push(o21());
o22.push(o21());
o22.push(o21());
o22.push(o21());
o22.push(o21());

for (var o16 = 0; o16 < o22.length; o16++) {
    var o10 = o22[o16];
    o0.o1("oa2[" + o16 + "]: " + "{ a: " + o10.o3 + ", b: " + o10.o4 + ", c: " + o10.o19 + ", p: " + o10.o6 + ", x: " + o10.o11 + ", y: " + o10.o12 + " }");
}
o0.o1("");

// Test 3: Invalidate the constructor cache by making one of the properties added after the
// constructor read-only
o0.o1("Test 3:");

var o27 = function () {
    this.o3 = 0;
    this.o4 = 1;
}

var o28 = { o6: 100 };

o27.prototype = o28;

var o29 = function () {
    var o10 = new o27();
    o10.o11 = 10;
    o10.o12 = 11;
    return o10;
}

var o30 = new Array();

// Run twice in the interpreter to populate add property caches and kick off JIT compilation.
o30.push(o29());
o30.push(o29());

// Run once along the happy path.
o30.push(o29());

// Now invalidate the constructor cache by making one of the properties added in the constructor
// read-only.
Object.defineProperty(o28, "x", { value: 102, writable: false });

o30.push(o29());

// Run a few more times (bailing out every time) to force a re-JIT.  After re-JIT, we should no longer
// have the offending property access object type specialized, and thus protected by the ctor guard.
o30.push(o29());
o30.push(o29());
o30.push(o29());
o30.push(o29());
o30.push(o29());

for (var o16 = 0; o16 < o30.length; o16++) {
    var o10 = o30[o16];
    o0.o1("oa3[" + o16 + "]: " + "{ a: " + o10.o3 + ", b: " + o10.o4 + ", p: " + o10.o6 + ", x: " + o10.o11 + ", y: " + o10.o12 + " }");
}
o0.o1("");

// Test 4: Invalidate constructor cache by changing the constructor's prototype property.
o0.o1("Test 4:");

var o31 = function () {
    this.o3 = this.o6 + 0;
    this.o4 = this.o6 + 1;
    this.o19 = this.o6 + 2;
    this.o32 = this.o6 + 3;
    this.o33 = this.o6 + 4;
    this.o34 = this.o6 + 5;
    this.o35 = this.o6 + 6;
    this.o36 = this.o6 + 7;
    this.o16 = this.o6 + 8;
    this.o37 = this.o6 + 9;
}

var o38 = { o6: 100 };
var o39 = Object.create(o38);

o31.prototype = o39;

var o41 = function () {
    var o10 = new o31();
    o10.o11 = o10.o6 + 10;
    o10.o12 = o10.o6 + 11;
    return o10;
}

var o42 = new Array();

// Run twice in the interpreter to populate add property caches and kick off JIT compilation.
o42.push(o41());
o42.push(o41());

// Run once along the happy path.
o42.push(o41());

// Now change the prototype object to invalidate the constructor cache and cause a bailout.
o39.o6 = 200;

o42.push(o41());

// Run a few more times (bailing out every time) to force a re-JIT.  After re-JIT, we should no longer
// have the offending property access object type specialized, and thus protected by the ctor guard.
// This time all the other property operations should remain object type specialized, because the type
// of the object created is not affected by this change to the prototype chain.
o42.push(o41());
o42.push(o41());
o42.push(o41());
o42.push(o41());
o42.push(o41());

for (var o16 = 0; o16 < o42.length; o16++) {
    var o10 = o42[o16];
    o0.o1("oa4[" + o16 + "]: " + "{ a: " + o10.o3 + ", b: " + o10.o4 + ", c: " + o10.o19 + ", i: " + o10.o16 + ", j: " + o10.o37 + ", p: " + o10.o6 + ", x: " + o10.o11 + ", y: " + o10.o12 + " }");
}
o0.o1("");
