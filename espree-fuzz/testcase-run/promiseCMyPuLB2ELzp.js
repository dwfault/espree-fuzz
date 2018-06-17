//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var function () {
            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'constructor');
            try {
o4.o5(o7.writable, "Promise.prototype.constructor.writable === true");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype.constructor.enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype.constructor.configurable === true");
}catch(e){}
            try {
o4.o6('function', typeof o7.value, "typeof Promise.prototype.constructor === 'function'");
}catch(e){}
            try {
o4.o6(1, Promise.prototype.constructor.length, "Promise.prototype.constructor.length === 1");
}catch(e){}

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'catch');
            try {
o4.o5(o7.writable, "Promise.prototype.catch.writable === true");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype.catch.enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype.catch.configurable === true");
}catch(e){}
            try {
o4.o6('function', typeof o7.value, "typeof Promise.prototype.catch === 'function'");
}catch(e){}
            try {
o4.o6(1, Promise.prototype.catch.length, "Promise.prototype.catch.length === 1");
}catch(e){}

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'then');
            try {
o4.o5(o7.writable, "Promise.prototype.then.writable === true");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype.then.enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype.then.configurable === true");
}catch(e){}
            try {
o4.o6('function', typeof o7.value, "typeof Promise.prototype.then === 'function'");
}catch(e){}
            try {
o4.o6(2, Promise.prototype.then.length, "Promise.prototype.then.length === 2");
}catch(e){}

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, Symbol.toStringTag);
            try {
o4.o8(o7.writable, "Promise.prototype[@@toStringTag].writable === false");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype[@@toStringTag].enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype[@@toStringTag].configurable === true");
}catch(e){}
            try {
o4.o6('string', typeof o7.value, "typeof Promise.prototype[@@toStringTag] === 'string'");
}catch(e){}
            try {
o4.o6('Promise', Promise.prototype[Symbol.toStringTag], "Promise.prototype[@@toStringTag] === 'Promise'");
}catch(e){}
        } = o27.valueOf;  
function o475() {
    try {
if (o475.o476 === undefined) try {
try { try {
o493.input.{
        name: "%TypedArray%.from behavior with a map function passing this argument",
        o3: function() {
            var o52 = 'thisArg';

            function o48(o49, o50) {
                // this will be wrapped as an Object
                try {
o4.o11(Object(o52), this, "thisArg passed into %TypedArray%.from should flow into mapFunction");
}catch(e){}
            }

            var o51 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with thisArg passed as this
            try {
Int8Array.from(o51, o48, o52);
}catch(e){}
        }
    }.o779this.o616.o341 = function () {try {
e;
}catch(e){}  //Horizontal Blanking Period
  try {
if (o4.o7 != 0) {
    try {
if (this.o411 != 2) {
      try {
if (false >= Number.NEGATIVE_INFINITY) {
        try {
if (this.o415) {
          try {
{
        name: "%TypedArray%.prototype.reduce behavior",
        o3: function() {
            var reduce = Int8Array.prototype.__proto__.reduce;
            var o63;
            var o70;
            var o52 = Object(this);

            function o62(o85) {
                try {
o63 = new Int8Array(o85);
}catch(e){}
                try {
o70 = 0;
}catch(e){}

                try {
for(var o46 = 0; o46 < o63.length; o46++) {
                    try {
o63[o46] = o46;
}catch(e){}
                }
}catch(e){}

                try {
return o63;
}catch(e){}
            }

            function o105(o106, o49, o50, o73) {
                try {
o4.o11(o70, o50, "%TypedArrayPrototype%.reduce calls the callback on items in order");
}catch(e){}
                try {
o4.o11(o49, o50, "%TypedArrayPrototype%.reduce calls the callback with the correct values");
}catch(e){}
                try {
o4.o11(o52, this, "%TypedArrayPrototype%.reduce calls the callback with undefined as the this arg");
}catch(e){}
                try {
o4.o11(o63, o73, "%TypedArrayPrototype%.reduce calls the callback with the correct array object");
}catch(e){}

                try {
o70++;
}catch(e){}

                try {
return o106 + o49;
}catch(e){}
            }

            try {
o4.o11(45, reduce.call(o62(10), o105, 0), "%TypedArrayPrototype%.reduce basic functionality");
}catch(e){}
            try {
o4.o11(10, o70, "%TypedArrayPrototype%.reduce called the callback the correct number of times");
}catch(e){}
            try {
o4.o11(100, reduce.call(o62(0), o105, 100), "%TypedArrayPrototype%.reduce with a zero-length array returns the initial value");
}catch(e){}
            try {
o4.o11(0, o70, "%TypedArrayPrototype%.reduce didn't call the callback on an empty array");
}catch(e){}

            var o44 = o62(10);
            try {
o70 = 1;
}catch(e){}
            try {
o4.o11(45, reduce.call(o44, o105), "%TypedArrayPrototype%.reduce called with no initial value causes the first index passed to the callback to be shifted by one");
}catch(e){}
            try {
o4.o11(10, o70, "%TypedArrayPrototype%.reduce called the callback the correct number of times");
}catch(e){}

            try {
o4.o38(function() { try {
reduce.call();
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reduce with no this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
reduce.call(undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reduce with undefined this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
reduce.call('string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reduce with non-object this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
reduce.call(new Uint8Array(10));
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reduce with no callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
}catch(e){}
            try {
o4.o38(function() { try {
reduce.call(new Uint8Array(10), undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reduce with undefined callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
}catch(e){}
            try {
o4.o38(function() { try {
reduce.call(new Uint8Array(10), 'string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reduce with non-function callback function throws TypeError", "[TypedArray].prototype.reduce: argument is not a Function object");
}catch(e){}
            try {
o4.o38(function() { try {
reduce.call(o62(0), o105);
}catch(e){} }, o39, "%TypedArrayPrototype%.reduce throws if array has zero length");
}catch(e){}
        }
    };
}catch(e){}
          try {
this.o664(function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x30;
}catch(e){}
  });
}catch(e){}
        }
}catch(e){}
        try {
this.o412 = 3;
}catch(e){}
      }
}catch(e){}
      try {
this.o780(o489.o560);
}catch(e){}
      try {
this.o781(this.o502);
}catch(e){}
      try {
o489.o749(o515);
}catch(e){}
    }
}catch(e){}
    try {
if (this.o490 >= this.o413) {
      try {
if (this.o385) {
        try {
this.o782();
}catch(e){}
      }
}catch(e){}
      try {
if (this.o417) {
        try {
this.o383 |= 0x2;
}catch(e){}
        try {
this.o664();
}catch(e){}
      }
}catch(e){}
      try {
this.o411 = 3;
}catch(e){}
      try {
this.o412 = 0;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){} } catch(e) {}
}catch(o3){}
}catch(e){}
    try {
return Math.floor(o421.o144);
}catch(e){}
}; // 5  

var o1072 = global.Math.abs;

var o4 = undefined;
var o5 = ArrayBuffer.isView(o76);
var o6 = undefined;

function o7()
{
    try {
o0.then((o2) => o4 = o2);
}catch(e){}
    try {
o1.then((o1) => o5 = o2);
}catch(e){}
    try {
o3.then((o2) => o6 = o2);
}catch(e){}
    
    try {
o8.o9(o10, 50);
}catch(e){}
}

try {
o8.o9(o7, 50);
}catch(e){}

function o10()
{            
    try {
o11(`v1: ${o4}`, true);
}catch(e){} //5
    try {
o11(`v2: ${o5}`, true);
}catch(e){} //6
    try {
o11(`v3: ${o6}`, true);
}catch(e){} //10
}


