//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    try {
o851.o2("globalFixedFunction1: original");
}catch(e){}
}

var o1096 = o1058.o73

function o4() {
    try {
o0(o32[o31]);
}catch(e){}
    try {
o3();
}catch(e){}
}

try {
o1.o2("Testing the global object:");
}catch(e){}

try {
o4(this);
}catch(Module){}

try {
o4(o1("MSMediaKeySession"));
}catch(e){}

try {
o3 = function (o421) {try {
index;
}catch(e){}
    try {
o421.o368 &= 0xFD;
}catch(e){}
  }
}catch(o70 != null){}

try {
[].concat = function () {
    try {
o1.o2("globalFixedFunction2: overwritten");
}catch(e){}
}
}catch(e){}

try {
o4(o581 & 0xF);
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing object literal:");
}catch(e){}

function o80() {
    try {
try {
      try {
o39.o25[index++].o18();
}catch(e){}
    } catch (o78) {
      try {
o39.o67(o78);
}catch(e){}
      try {
return null;
}catch(e){}
    }
}catch(e){}
    try {
return o77;
}catch(e){}
  }

function o10() {
    try {
o1.o2("x + y = " + o5.add());
}catch(e){}
    try {
o1.o2("x - y = " + o5.o9());
}catch(e){}
}

try {
o10();
}catch(e){}

try {
o10();
}catch(e){}

try {
o5.add = function () {
    try {
return (this.o7 + this.o8) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o10();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing Object.defineProperty with accessors:");
}catch(e){}

var o11 = {};
try {
Object.defineProperty(o11, "x", { get: function() { try {
return "0 (original)";
}catch(e){} }, configurable: true });
}catch(e){}

function o12() {
    try {
o1.o2("x = " + o11.o7);
}catch(e){}
}

try {
o12();
}catch(e){}

try {
o12();
}catch(e){}

try {
Object.defineProperty(o11, "x", { get: function () { try {
return "1 (overwritten)";
}catch(e){} } });
}catch(e){}

try {
o12();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing the Math object:");
}catch(e){}

try {
Math.o13 = function (value) {
    try {
return value;
}catch(e){}
}
}catch(e){}

function o14() {
    try {
o1.o2("Math.sin(Math.PI) = " + Math.sin(Math.o15));
}catch(e){}
    try {
o1.o2("Math.identity(Math.PI) = " + Math.o13(Math.o15));
}catch(e){}
}

try {
o14();
}catch(e){}

try {
o14();
}catch(e){}

try {
Math.o13 = function (value) {
    try {
return -value;
}catch(e){}
}
}catch(e){}

try {
o14();
}catch(e){}

try {
Math.sin = function (value) {
    try {
return -value;
}catch(e){}
}
}catch(e){}

try {
o14();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing the Object constructor:");
}catch(e){}

try {
Object.o13 = function (value) {
    try {
return value;
}catch(e){}
}
}catch(e){}

function o16() {
    var o17 = {};
    try {
Object.seal(o17);
}catch(e){}
    try {
o1.o2("Object.identity(o) = " + Object.o13(o17));
}catch(e){}
    try {
o1.o2("Object.isSealed(o) = " + Object.isSealed(o17));
}catch(e){}
}

try { {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o143);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, ((o421.o364) ? 0x80 : 0) | ((o421.o365) ? 0x40 : 0) | ((o421.o366) ? 0x20 : 0) | ((o421.o367) ? 0x10 : 0));
}catch(e){}
  } } catch(e) {}try { try {
o4.o38(function() { try {
o69.call(new Uint8Array(10));
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.map with no callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
}catch(e){} } catch(e) {}

try {
o16();
}catch(e){}

try {
Object.o13 = function (value) {
    try {
return "I don't know you anymore...";
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.seal = function (o11) {
    try {
return false;
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.isSealed = function (o11) {
    try {
return "With the magic of JavaScript I pronounce you sealed!";
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
o1.o2();
}catch(e){}
