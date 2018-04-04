//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
  o2.o3(o1);
}

var o4=new Array(2);
o4[0]=1;
o4.length="";
write(o4.length);

o4.length=null;
write(o4.length);

o4.length=4294967295;
write(o4.length.toString());

try {
    o4.length="-1";
}
catch (o8)
{
    write(o8.o9);
}

try {
    o4.length=4294967296;
}
catch (o8)
{
    write(o8.o9);
}

try {
    Array.length=10;
    write(Array.length);
}
catch (o8)
{
    write(o8.o9);
}

try {
    o10 = [];
    o10.length = true;
    write(o10.length);
}
catch(o8)
{
    write(o8.o9);
}

try {
    Object.prototype.length = function () {
        return this
    };
    (function () {
        ;
        for (var o13 in [void 0]) {
            o13.length();
        }
    })();
}
catch (o8) {
    write(o8.o9);
}

try {
    Object.prototype.length = function () {
        return this
    };
    var o14 = [10, 20, 24];
    o2.o3("prop = " + o14.length);
    o2.o3("method = " + o14.length());
}
catch (o8) {
    write(o8.o9);
}

var o14 = { length: 10 };
var o15 = Object.freeze(o14);
var o17 = Object.create(o15);
o17.length = 88;
o2.o3(o17.length);
o2.o3(o15.length);

var o19 = Object.freeze([]);
var o20 = Object.create(o19)
o20.length = 5
o2.o3(o20.length);
o2.o3(o19.length);

var o10 = [];
var o13 = Object.create(o10);
o13.length = 7;
o2.o3(o13.length);
o2.o3(o10.length);

var o21 = [];
o21.length = 3;
o2.o3(o21.length);

function o22(o23) { if (this.o2) { o2.o3(o23); } else { o24.o25(o23); } }
Object.defineProperty(Object.prototype, "length", { set: function() { o22("setter"); }, configurable: true });
var o14 = [];
var o15 = Object.create(o14);
o15.length = 5;
o22(o15.length);

function o29()
{
    var o4 = new Array(10);
    var o10 = o4.length--;
    o4[o4.length + 1] = 20;
    var o13 = --o4.length;
    return o13;
}
o2.o3(o29());

