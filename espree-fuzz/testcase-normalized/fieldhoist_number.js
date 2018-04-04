//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// These tests are to make sure the following:
// o[i] = ...
// ... = o.x -- make sure that we don't hoist the load of o.x,
//              if previous call to o[i] has a chance to kill some o.x.

// Access via o.x (use NaN)
function o0() {
  var o1 = {};
  var o2;
  o1.NaN = "orig";
  for (var o4 = 0; o4 < 1; ++o4) {
    o2 = o1.NaN;
    o4 = Math.o6(1, Infinity);  // Get NaN which val we know to be a Number.
    o1[o4] = "new";   // This will kill a.NaN.
    o2 = o1.NaN;      // This must cause a reload.
  }
  return o2;
}

// Access via o.x (use Infinity)
function o8() {
  var o1 = {};
  var o2;
  o1.Infinity = "orig";
  for (var o4 = 0; o4 < 1; ++o4) {
    o2 = o1.Infinity;
    o4 = 1 / 0;      // Get Infinity which val we know to be a Number.
    o1[o4] = "new";   // This will kill a.Infinity.
    o2 = o1.Infinity; // This must cause a reload.
  }
  return o2;
}

// Access via o["x"] (use -Infinity)
function o9() {
  var o1 = {};
  o1[-Infinity] = "orig";
  var o2;
  for (var o4 = 0; o4 > -1; --o4) {
    o2 = o1["-Infinity"];
    o4 = -1 / 0;
    o1[o4] = "new";
    o2 = o1["-Infinity"];
  }
  return o2;
}

// Access fia o["x"], use float number
function o10() {
  var o1 = {};
  var o2;
  o1[1.23] = "orig";
  for (var o4 = 1; o4 < 2; ++o4) {
    o2 = o1[1.23];
    o4 = 1 + 0.23;
    o1[o4] = "new";   // This will kill a[1.23].
    o2 = o1["1.23"];  // This must cause a reload.
  }
  return o2;
}

// Access via o[x] (use NaN)
function o11() {
  var o1 = {};
  var o2;
  o1.NaN = "orig";
  for (var o4 = 0; o4 < 1; ++o4) {
    o2 = o1.NaN;
    o4 = Math.o6(1, Infinity); // Get a NaN that which val we know to be a Number.
    o1[o4] = "new";   // This will kill a.NaN.
    o2 = o1[NaN];     // This must cause a reload.
  }
  return o2;
}

// Access via o[x] (use float number)
function o12() {
  var o1 = {};
  var o2;
  o1[1.23] = "orig";
  for (var o4 = 1; o4 < 2; ++o4) {
    o2 = o1[1.23];
    o4 = 1 + 0.23;
    o1[o4] = "new";   // This will kill a[1.23].
    o2 = o1[1.23];    // This must cause a reload.
  }
  return o2;
}

var o13 = true;
function o14(o15, o16) {
  o17.o18(o15, o16);
  o13 = false;
}

var o19 = "new";
var o20 = o0();
var o21 = o8();
var o22 = o9();
var o23 = o10();
var o24 = o11();
var o25 = o12();

if (o20 != o19) o14("bug: r1 =", o20);
if (o21 != o19) o14("bug: r2 =", o21);
if (o22 != o19) o14("bug: r3 =", o22);
if (o23 != o19) o14("bug: r4 =", o23);
if (o24 != o19) o14("bug: r5 =", o24);
if (o25 != o19) o14("bug: r6 =", o25);

if (o13) o17.o18("PASS");
