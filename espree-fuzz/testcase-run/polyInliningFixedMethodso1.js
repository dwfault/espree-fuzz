//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() { }
try {
{
        name: 'ToNumber called with a symbol primitive should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            var o3 = { 'length': o17 };

            // We can't use parseInt directly here as that does ToString(obj) - we want something which calls ToNumber directly
            try {
o4.o19(function() { try {
Array.prototype.lastIndexOf.call(o3, 1);
}catch(e){} }, o20, "Array.prototype.lastIndexOf performs ToLength(obj) which should throw TypeError if obj is a symbol primitive.", "Number expected");
}catch(e){}
        }
    };
}catch(e){}
try {
o0.prototype.o4 = function () { try {
o2.o3("a");
}catch(o343 + 1){} };
}catch(e){}
var o679 = (o82 === o249.length - 1);
try {
o5.o6 = function () { try {
o2.o3(1);
}catch(e){} try {
o4.o5.o4();
}catch(e){} };
}catch(e){}

function o7() { }
try {
o7.prototype.o8 = 1;
}catch(e){}
try {
o7.prototype.o1 = function () { try {
o2.o3("b");
}catch(e){} };
}catch(e){}
try {
o7.prototype.o6 = function () { try {
o2.o3("b1");
}catch(e){} };
}catch(e){}
try {
o7.prototype.o4 = function () { try {
o2.o3("b");
}catch(e){} };
}catch(e){}
var o9 = new o7();

function o10(){}try {
;
}catch(e){}
try {
o10.o6 = function() {try {
o2.o3("pr")
}catch(e){}};
}catch(e){}
try {
o7.prototype = o10;
}catch(e){}
try {
o11 = new o7();
}catch(e){}

function o12() {
    try {
this.o6 = function () { try {
o2.o3("f");
}catch(e){} }
}catch(e){}
}

function o13() { }
try {
o13.prototype.o1 = function () { try {
o2.o3(2);
}catch(e){} };
}catch(e){}
try {
o13.prototype.o14 = 1;
}catch(e){}
try {
o13.prototype.o8 = 1;
}catch(e){}

try {
o12.prototype = o0.prototype;
}catch(e){}
try {
o13.prototype = new o12();
}catch(e){}

var o15 = new o13();

function o16() { }
try {
o16.prototype.o1 = function () { try {
o2.o3(2);
}catch(e){} };
}catch(e){}
try {
o16.prototype.o17 = 1;
}catch(e){}
try {
o16.prototype.o14 = 1;
}catch(e){}
try {
o16.prototype.o8 = 1;
}catch(e){}

//Inheriter.prototype = b.prototype;
try {
o16.prototype = new o12();
}catch(e){}

var o18 = new o16();

function o19(o20) {
    try {
o20.o6();
}catch(e){}
}

try {
o19(o9);
}catch(e){}
try {
o19(o11);
}catch(e){}
try {
o19(o9);
}catch(e){}
try {
o19(o18);
}catch(e){}

try {
o19(o5);
}catch(e){}
try {
o19(o9);
}catch(e){}
try {
o19(o15);
}catch(e){}
try {
o19(o18);
}catch(e){}