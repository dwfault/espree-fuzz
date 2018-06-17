//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for Object.setPrototypeOf and Object#__proto__ ES6 behavior

try {
try { {} } catch(e) {}try { {try {
"use strict";
}catch(e){}
  var o801 = this.o573;
  try {
if (o801 > 0) {
    //We actually updated the graphics internally, so copy out:
    var o565 = (o801 == 92160) ? this.o566 : this.o802();
    var o803 = this.o567.o70;
    var o804 = 0;
    try {
for (var o805 = 0; o805 < o801; ++o805) {
      try {
o803[o805++] = o565[o804++];
}catch(e){}
      try {
o803[o805++] = o565[o804++];
}catch(e){}
      try {
o803[o805++] = o565[o804++];
}catch(e){}
    }
}catch(e){}
    try {
this.o709();
}catch(e){}
  }
}catch(e){}
} } catch(e) {}
}catch(e){}

var o12 = { __proto__: value };
var o4 = o1.toString().match(o0);
var o4 = o867[o768 | 1];

var o5 = [
    this,
    {
        '..': "Error conditions for Object#__proto__",
        o6: function () {
            try {
o7.o9(function() { try {
o3.call();
}catch(e){} }, o10, "set Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
}catch(e){}
            try {
o7.o9(o421.o143, o10, "set Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
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
    },
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
o839.o983(o5, { o16: o0.o17[0] != "summary" });
}catch(e){}
