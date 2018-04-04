//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() { }
o0.prototype.o2 = function () { o3.o4(1); this.o5(); };
o0.prototype.o5 = function () { o3.o4("a"); };
var o6 = new o0();
o6.o7 = function () { o3.o4(1); this.o5(); };

function o8() { }
o8.prototype.o9 = 1;
o8.prototype.o2 = function () { o3.o4("b"); };
o8.prototype.o7 = function () { o3.o4("b1"); };
o8.prototype.o5 = function () { o3.o4("b"); };
var o10 = new o8();

function o11(){};
o11.o7 = function() {o3.o4("pr")};
o8.prototype = o11;
o12 = new o8();

function o13() {
    this.o7 = function () { o3.o4("f"); }
}

function o14() { }
o14.prototype.o2 = function () { o3.o4(2); };
o14.prototype.o15 = 1;
o14.prototype.o9 = 1;

o13.prototype = o0.prototype;
o14.prototype = new o13();

var o16 = new o14();

function o17() { }
o17.prototype.o2 = function () { o3.o4(2); };
o17.prototype.o18 = 1;
o17.prototype.o15 = 1;
o17.prototype.o9 = 1;

//Inheriter.prototype = b.prototype;
o17.prototype = new o13();

var o19 = new o17();

function o20(o21) {
    o21.o7();
}

o20(o10);
o20(o12);
o20(o10);
o20(o19);

o20(o6);
o20(o10);
o20(o16);
o20(o19);