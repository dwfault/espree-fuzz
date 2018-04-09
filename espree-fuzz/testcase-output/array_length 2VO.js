//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o248(o4, o5, o8) {
            return (o5[-1].o6 = -o5[-1].o6 - 1, o5[-1].o6);
        };

var o3=new Array(2);
o3[0]=1;
o3.length="";
write(o3.length);

o3.length=null;
write(o3.length);

o3.length=4294967295;
write(o3.length.toString());

try {
    o3.length="-1";
}
catch (o4)
{
    write(o4.o5);
}

try {
    o3.length=4294967296;
}
catch (o4)
{
    write(o4.o5);
}

try {
    Array.length=10;
    write(Array.length);
}
catch (o4)
{
    write(o4.o5);
}

try {
    o6 = [];
    o6.length = true;
    write(o6.length);
}
catch(o4)
{
    write(o4.o5);
}

try {
    Object.prototype.length = function () {
        return this
    };
    (function () {
        ;
        for (var o7 in [void 0]) {
            o7.length();
        }
    })();
}
catch (o4) {
    write(o4.o5);
}

try {
    Object.prototype.length = function () {
        return this
    };
    var o8 = [10, 20, 24];
    o1.o2("prop = " + o8.length);
    o1.o2("method = " + o8.length());
}
catch (o4) {
    write(o4.o5);
}

var o8 = { length: 10 };
var o9 = Object.freeze(o8);
var o10 = Object.create(o9);
o10.length = 88;
o1.o2(o10.length);
o1.o2(o9.length);

var o11 = Object.freeze([]);
var o12 = Object.create(o11)
o12.length = 5
o1.o2(o12.length);
o1.o2(o11.length);

var o6 = [];
var o7 = Object.create(o6);
o7.length = 7;
o1.o2(o7.length);
o1.o2(o6.length);

var o13 = [];
o13.length = 3;
o1.o2(o13.length);

function o14(o15) { if (this.o1) { o1.o2(o15); } else { o16.o17(o15); } }
Object.defineProperty(Object.prototype, "length", { set: function() { o14("setter"); }, configurable: true });
var o8 = [];
var o9 = Object.create(o8);
o9.length = 5;
o14(o9.length);

function o18()
{
    var o3 = new Array(10);
    var o6 = o3.length--;
    o3[o3.length + 1] = 20;
    var o7 = --o3.length;
    return o7;
}
o1.o2(o18());

