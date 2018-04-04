//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4(o5) {
    this.o5 = o5;
}

var o6 = new o4(10);

o4.prototype = { o8 : 10 };

var o9 = new o4(20);

write("f : " + o6.o8);  // should print undefined
write("f1: " + o9.o8); // should print 10


function o10(o5, o8) {
    this.o11 = o5;
    this.o12 = o5;
    this.o13 = o5;
    this.o14 = o5;
    this.o15 = o5;
    this.o16 = o5;
    this.o17 = o5;
    this.o18 = o5;
    this.o19 = o5;
    
    this.o20 = o8;
    this.o21 = o8;
    this.o22 = o8;
    this.o23 = o8;
    this.o24 = o8;
    this.o25 = o8;
    this.o26 = o8;
    this.o27 = o8;
    this.o28 = o8;
}

var o29 = new o10(10, 20);
var o30 = new o10(30, 40);

write(o30.o27);