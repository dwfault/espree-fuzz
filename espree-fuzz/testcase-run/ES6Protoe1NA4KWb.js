//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for Object.setPrototypeOf and Object#__proto__ ES6 behavior

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = o539.push = o1098(o5.prototype, o477.o479);
var o3 = e.o13 = function (value) {
    try {
return "I don't know you anymore...";
}catch(write){}
}.set;
var o7=0;

var o5 = [
    o10.o11,
    o1("onstorage"),
    {
        name: "Cases where Object#__proto__ shouldn't change [[Prototype]]",
        o6: function () {
            var o11 = {};
            var o12 = Object.create(o11);

            try {
o7.o8(undefined, o3.call(o12), "set Object#__proto__ returns undefined if the proto argument is not passed");
}catch(e){}
            try {
o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was not changed");
}catch(e){}
            try {
o7.o8(undefined, o3.call(o12, undefined), "set Object#__proto__ returns undefined if the proto argument is undefined");
}catch(e){}
            try {
o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was not changed");
}catch(e){}
            try {
o7.o8(undefined, o3.call(o12, 5), "set Object#__proto__ returns undefined if the proto argument is non-object");
}catch(e){}
            try {
o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was not changed");
}catch(e){}

            var o13 = 5;
            try {
o7.o8(undefined, o3.call(o13, {}), "set Object#__proto__ returns undefined if the this argument is non-object when proto argument is supplied");
}catch(e){}
            try {
o7.o8(Number.prototype, o4.call(o13), "[[Prototype]] slot of n was not changed");
}catch(e){}
        }
    },
    {
        name: "Simple validation of Object#__proto__",
        o6: function () {
            var o11 = {};
            var o12 = Object.create(o11);

            try {
o7.o8(undefined, o3.call(o12, null), "set Object#__proto__ returns undefined if the proto argument is null");
}catch(e){}
            try {
o7.o8(null, o4.call(o12), "[[Prototype]] slot of o was changed to null");
}catch(e){}

            try {
o7.o8(undefined, o3.call(o12, o11), "set Object#__proto__ returns undefined if the proto argument is object");
}catch(e){}
            try {
o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was changed to p");
}catch(e){}
        }
    },
    {
        name: "Error conditions for Object.setPrototypeOf/getPrototypeOf",
        o6: function () {
            try {
o7.o9(function() { try {
Object.setPrototypeOf();
}catch(e){} }, o10, "Object.setPrototypeOf throws when called with no arguments", "Object.setPrototypeOf: argument is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
Object.setPrototypeOf(undefined);
}catch(e){} }, o10, "Object.setPrototypeOf throws when object argument is undefined", "Object.setPrototypeOf: argument is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
Object.setPrototypeOf(null);
}catch(e){} }, o10, "Object.setPrototypeOf throws when object argument is null", "Object.setPrototypeOf: argument is not an Object");
}catch(e){}

            try {
o7.o9(function() { try {
Object.setPrototypeOf({});
}catch(e){} }, o10, "Object.setPrototypeOf throws when proto is not passed", "Object.setPrototypeOf: argument is not an Object and is not null");
}catch(e){}
            try {
o7.o9(function() { try {
Object.setPrototypeOf({}, undefined);
}catch(e){} }, o10, "Object.setPrototypeOf throws when proto is undefined", "Object.setPrototypeOf: argument is not an Object and is not null");
}catch(e){}
            try {
o7.o9(function() { try {
Object.setPrototypeOf({}, 5);
}catch(e){} }, o10, "Object.setPrototypeOf throws when proto is not object", "Object.setPrototypeOf: argument is not an Object and is not null");
}catch(e){}

            try {
o7.o9(function() { try {
Object.getPrototypeOf();
}catch(e){} }, o10, "Object.getPrototypeOf throws when argument is not passed", "Object.getPrototypeOf: argument is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
Object.getPrototypeOf(undefined);
}catch(e){} }, o10, "Object.getPrototypeOf throws when argument is undefined", "Object.getPrototypeOf: argument is not an Object");
}catch(e){}
            try {
o7.o9(function() { try {
Object.getPrototypeOf(null);
}catch(e){} }, o10, "Object.getPrototypeOf throws when argument is null", "Object.getPrototypeOf: argument is not an Object");
}catch(e){}
        }
    },
    {
        name: "Object.setPrototypeOf used on non-object argument doesn't change [[Prototype]]",
        o6: function () {
            var o13 = 5;
            try {
o7.o8(5, Object.setPrototypeOf(o13, {}), "Object.setPrototypeOf returns first argument if argument is non-object when proto argument is supplied");
}catch(e){}
            try {
o7.o8(Number.prototype, Object.getPrototypeOf(o13), "[[Prototype]] slot of n was not changed");
}catch(e){}
        }
    },
    {
        name: "Simple validation of Object.setPrototypeOf",
        o6: function () {
            var o11 = {};
            var o12 = Object.create(o11);

            try {
o7.o8(o12, Object.setPrototypeOf(o12, null), "Object.setPrototypeOf returns o if the proto argument is null");
}catch(e){}
            try {
o7.o8(null, Object.getPrototypeOf(o12), "[[Prototype]] slot of o was changed to null");
}catch(e){}

            try {
o7.o8(o12, Object.setPrototypeOf(o12, o11), "Object.setPrototypeOf returns o if the proto argument is object");
}catch(e){}
            try {
o7.o8(o11, Object.getPrototypeOf(o12), "[[Prototype]] slot of o was changed to p");
}catch(e){}
        }
    },
];

try {
o14.o15(o5, { o16: o2.o3(NaN, Math.cosh(undefined), "cosh returns NaN when passed undefined").o17[0] != "summary" });
}catch(e){}
