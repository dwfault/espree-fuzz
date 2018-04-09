//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() { }
o0.prototype.o1 = function () { o2.o3(1); this.o4(); };
o0.prototype.o4 = function () { o2.o3("a"); };
var o5 = new o0();
o5.o6 = function () { o2.o3(1); this.o4(); };

function o7() { }
o7.prototype.o8 = 1;
o7.prototype.o1 = function () { o2.o3("b"); };
o7.prototype.o6 = function () { o2.o3("b1"); };
o7.prototype.o4 = function () { o2.o3("b"); };
var o9 = new o7();

function o10(){};
o10.o6 = function() {o2.o3("pr")};
o7.prototype = o10;
o11 = new o7();

function o12() {
    this.o6 = function () { o2.o3("f"); }
}

function o13() { }
o13.prototype.o1 = function () { o2.o3(2); };
o13.prototype.o14 = 1;
o13.prototype.o8 = 1;

o12.prototype = o0.prototype;
o13.prototype = new o12();

var o15 = new o13();

function o16() { }
o16.prototype.o1 = function () { o2.o3(2); };
o16.prototype.o17 = 1;
o16.prototype.o14 = 1;
o16.prototype.o8 = 1;

//Inheriter.prototype = b.prototype;
o16.prototype = new o12();

var o18 = new o16();

function o19(o20) {
    o20.o6();
}

o19(o9);
o19(o11);
o19(o9);
o19(o18);

o19(o5);
o19(o9);
o19(o15);
o19(o18);