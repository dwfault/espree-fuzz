//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (o40.slice.o0 && this.o0.o421.o146) {
    try {
this.o152(this.o395)("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}

function o2(/*default=samethread*/o3) {
    try {
return o0.o1("protolib.js", o3 || "samethread");
}catch(e){}
}

// Run a function expression in this engine
function o4(o5) {
    try {
return eval("(" + o5 + ")()");
}catch(e){}
}


// Save __proto__ descriptor at startup
var o6 = Object.o406(Object.prototype, "__proto__");

// assert __proto__ throws "this" not object. "method" default to Object.prototype.__proto__
try {
{ o17: o0.o18[0] != "summary" };
}catch(e){}

// assert __proto__ throws arg not object. "method" default to Object.setPrototypeOf
try {
o62();
}catch(e){}

// assert __proto__ throws arg not object or null. "method" default to Object.prototype.__proto__
try {
o1o13o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object when constructor has no [@@species] property") = function (o5, o9) {
    try {
o7.o10(o5, o11, undefined, (o9 || "Object.prototype.__proto__") + ": argument is not an Object and is not null");
}catch(e){}
};
}catch(e){}

// assert __proto__ throws cyclic error
try {
o7.o14 = function (o5, o9) {
    try {
o7.o10(o5, o523, undefined, "Cyclic __proto__ value");
}catch(e){}
};
}catch(e){}

function o15() {
    try {
delete Object.prototype.__proto__;
}catch(e){}
}

function o48(o49, o50) {
                try {
o4.o11(o46, o50, "%TypedArray%.from called with a mapping function, we should get the elements in order. Setting item[" + o50 + "] = " + o49);
}catch(e){}
                try {
o4.o11(o49, o50, "Value and index should be same for this test");
}catch(e){}
                try {
o4.o11(2, arguments.length, "%TypedArray%.from called with a mapping function, only 2 arguments should be passed to the map function");
}catch(e){}

                // increment expected index
                try {
o46++;
}catch(e){}
            }

function o24(o25) {
    var o19 = { o20: 0 };
    var o21 = { o22: 1 };

    try {
o7.o23(Object.prototype, Object.getPrototypeOf(o21));
}catch(e){}
    try {
o21.__proto__ = o19;
}catch(e){}
    try {
o7.o23(Object.prototype, Object.getPrototypeOf(o21), "__proto__ disabled, [[prototype]] should not be changed " + (o25 || ""));
}catch(e){}
    
    try {
Object.setPrototypeOf(o21, o19);
}catch(e){} // always works
    try {
o7.o23(o19, Object.getPrototypeOf(o21));
}catch(e){}
}

// verify (in a new engine) if an expression disables __proto__.
function o26(o27, o28) {
    try {
o2().o29(o27, o28);
}catch(e){}
}
var o30 = {};
function o29(o27, o28) {
    try {
o16();
}catch(e){}
    try {
o31.writeln(o27);
}catch(e){}
    try {
eval(o27);
}catch(e){}

    try {
if (o28) {
        try {
o16();
}catch(e){}
    } else {
        try {
o24();
}catch(e){}
    }
}catch(e){}
}
