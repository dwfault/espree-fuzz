//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("Testing object literal as prototype:");
}catch(e){}

var o2 = function () {
            try {
o2(
                function () { // enabled: [[prototype]]
                    var o11 = { o11: 123 };
                    var o12 = { __proto__: o11 };

                    try {
o13.o14(o11, Object.getPrototypeOf(o12));
}catch(e){}
                    try {
o13.o15(!o12.hasOwnProperty("__proto__"));
}catch(e){}
                    try {
o13.o14(123, o12.o11);
}catch(e){}
                    try {
o13.o14(o11, Object.getPrototypeOf(o12));
}catch(e){}
                });
}catch(e){}
        }

var o6 = Object.create(o2);
try {
o1 = 0;
}catch(e){}
try {
o6.o4 = 1;
}catch(e){}

function o7() {
    try {
o0.o1("x + y = " + o6.add());
}catch(e){}
    try {
o0.o1("x - y = " + o6.o5());
}catch(e){}
}

try {
o7(()=>{try {
o14[Symbol.hasInstance](function(){})
}catch(e){}});
}catch(e){}

try {
o7();
}catch(e){}

try {
o2.o5 = function () {
    try {
return (this.o3 - this.o4) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o7();
}catch(e){}

try {
o2.add = function () {
    try {
return (this.o3 + this.o4) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o7();
}catch(e){}

var o2 = {
    add: function () {
        try {
return (this.o3 + this.o4) + " (original)";
}catch(e){}
    },
    o5: function (o8) {
        try {
return (o8.o3 - o8.o4) + " (original)";
}catch(e){}
    }
}

var o6 = Object.create(o2);
try {
o6.o3 = 0;
}catch(e){}
try {
o6.o4 = 1;
}catch(e){}

var o10 = { 0: 0, 1: 1, 2: 2, 3: 3, length: 4 }

try {
o9();
}catch(e){}

try {
o9();
}catch(e){}

try {
o2.o5 = function (o8) {
    try {
return (o8.o3 - o8.o4) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o9();
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing the String prototype:");
}catch(e){}

try {
String.prototype.o10 = function (value) {
    try {
return value;
}catch(e){}
}
}catch(e){}

function o11() {
    var o12 = "I'm a string, I believe.";
    try {
o0.o1("s.identity() = " + o12.o10(o12));
}catch(e){}
    try {
o0.o1("s.indexOf(\"s\") = " + o12.indexOf("s"));
}catch(e){}
}

try {
o11();
}catch(e){}

try {
o11();
}catch(e){}

try {
String.prototype.indexOf = function (o13, o14) {
    try {
return -1;
}catch(e){}
}
}catch(e){}

try {
o11();
}catch(e){}

try {
String.prototype.o10 = function (value) {
    try {
return "To me you're just a number.";
}catch(e){}
}
}catch(e){}

try {
o11();
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing the global object as prototype:");
}catch(e){}

function o15() {
    try {
o0.o1("globalFixedFunction1: original");
}catch(e){}
}

var o16 = function () {
    try {
o0.o1("globalFixedFunction2: original");
}catch(e){}
}

function o17() {
    try {
return Object.create(this);
}catch(e){}
}

var o18 = o17();

function o19() {
    try {
o18.o15();
}catch(e){}
    try {
o18.o16();
}catch(e){}
}

try {
o19();
}catch(e){}

try {
o19();
}catch(e){}

try {
o15 = function () {
    try {
o0.o1("globalFixedFunction1: overwritten");
}catch(e){}
}
}catch(e){}

try {
o16 = function () {
    try {
o0.o1("globalFixedFunction2: overwritten");
}catch(e){}
}
}catch(e){}

try {
o19();
}catch(e){}

try {
o0.o1();
}catch(e){}
