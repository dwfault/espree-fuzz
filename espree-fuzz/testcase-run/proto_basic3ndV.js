//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
try {
if (this.o0 && reject("bar").o0.o1) {
    try {
o0.o1("protolib.js");
}catch(e){}
}
}catch(e){}

var o35 = { writable: false, "_fflush": o661, configurable: true, enumerable: true }

function o9(o10, o11) {
    try {
return { o12: o10, o696: true };
}catch(e){}
}

var o14;
try {
if (o8.o15) { // TODO: Change to _11_OrLater
    try {
o14 = {
        name: "Error conditions for Object#__proto__",
        o6: function () {
            try {
o7.o9(function() { try {
o3.call();
}catch(e){} }, o10, "set Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
o3.call(undefined);
}catch(e){} }, o10, "set Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
o3.call(null);
}catch(e){} }, o10, "set Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");
}catch(e){}

            try {
o7.o9(function() { try {
o4.call();
}catch(e){} }, o10, "get Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
o4.call(undefined);
}catch(e){} }, o10, "get Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
o4.call(null);
}catch(e){} }, o10, "get Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");
}catch(e){}
        }
    };
}catch(e){}
} else {
    try {
o14 = [
    {
        name: "Test Object.prototype.__proto__",
        o16: function () {
            try {
o19.o20(Object.prototype.__proto__ === o5.o8, "Object.prototype.__proto__ only supported on IE11 or later");
}catch(e){}
            try {
o19.o20(Object.hasOwnProperty("getPrototypeOf") && !Object.hasOwnProperty("setPrototypeOf"), "Object.setPrototypeOf only supported on IE11 or later");
}catch(e){}

            var o21 = { __proto__: { o72: 123 } }; // compat mode: not working in object literal
            try {
o19.o28(undefined, o21.o72);
}catch(e){}
        }
    }
    ];
}catch(e){}
}
}catch(e){}

try {
o73.o71(o14);
}catch(e){}
