//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    try {
o851.o2("globalFixedFunction1: original");
}catch(e){}
}

var o13 = index++

function o4() {
    try {
o971(o2.o3);
}catch(e){}
    try {
o8(o605.o606(o604, o602));
}catch(e){}
}

try {
o1.o2("Testing the global object:");
}catch(e){}

try {
o4(this);
}catch(Module){}

try {
o4(o4 = 1);
}catch(e){}

try {
o943 = function (o421) {try {
"use strict";
}catch(e){}
    try {
o867[o768 | 7] &= 0xFD;
}catch(e){}
  }
}catch(e){}

try {
o3 = function () {
    try {
o1.o2("globalFixedFunction2: overwritten");
}catch(e){}
}
}catch(e){}

try {
o4(o581 & 0xF);
}catch(o42){}

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

function o34(o21, o22) {
                var o59 = o21.o12;
                try {
if (o22 > 0)
                {
                    try {
o21.__proto__ = {};
}catch(e){} // ObjTypeSpec won't generate 2nd type check for the next "o.x" load. But implicit call bailout should bailout right here.
                }
}catch(e){}
                var o60 = o21.o12;

                try {
o19.o28(1, o59);
}catch(e){}
                try {
o19.o28(o22 > 0 ? undefined : 1, o60);
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

try {
o16();
}catch(e){}

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
