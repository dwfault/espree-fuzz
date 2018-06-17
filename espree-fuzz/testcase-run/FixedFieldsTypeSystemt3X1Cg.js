//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("atan2");
}catch(o6){}

var o2 = function(Array) {
    try {
o0.o1(o3.o4(this));
}catch(e){}
}

var o51 = "1"

function o136() {
    // Let's create the first (singleton) instance of LargeObject...
    function o984(o4) {
  try {
if (function() {
            var o19 = 10;
            var o40 = new ArrayBuffer(o19);
            var o107 = new Uint8Array(o40);

            try {
for (var o46 = 0; o46 < o107.length; o46++)
            {
                try {
o107[o46] = o46 + 1;
}catch(e){}
            }
}catch(e){}

            var o108 = o40.slice();
            var o109 = new Uint8Array(o108);
            try {
o4.o11(o107, o109, "slice() returns the same array elements as the original");
}catch(e){}
            try {
o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
}catch(e){}
            try {
o4.o11(o40.byteLength, o108.byteLength, "slice() returns an ArrayBuffer with the same byteLength as the original");
}catch(e){}

            var o108 = o40.slice(0);
            var o109 = new Uint8Array(o108);
            try {
o4.o11(o107, o109, "slice(0) returns the same array elements as the original");
}catch(e){}
            try {
o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
}catch(e){}
            try {
o4.o11(o40.byteLength, o108.byteLength, "slice(0) returns an ArrayBuffer with the same byteLength as the original");
}catch(e){}

            var o108 = o40.slice(5);
            var o109 = new Uint8Array(o108);
            try {
o4.o11([6,7,8,9,10], o109, "slice(5) contains the last 5 elements - [6,7,8,9,10]");
}catch(e){}
            try {
o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
}catch(e){}
            try {
o4.o11(5, o108.byteLength, "slice(5) returns an ArrayBuffer with byteLength = 5");
}catch(e){}

            var o108 = o40.slice(9);
            var o109 = new Uint8Array(o108);
            try {
o4.o11([10], o109, "slice(9) contains the last 1 elements - [10]");
}catch(e){}
            try {
o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
}catch(e){}
            try {
o4.o11(1, o108.byteLength, "slice(9) returns an ArrayBuffer with byteLength = 1");
}catch(e){}

            var o108 = o40.slice(10);
            var o109 = new Uint8Array(o108);
            try {
o4.o11([], o109, "slice(10) contains empty buffer");
}catch(e){}
            try {
o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
}catch(e){}
            try {
o4.o11(0, o108.byteLength, "slice(10) returns an ArrayBuffer with byteLength = 0");
}catch(e){}

            var o108 = o40.slice(15);
            var o109 = new Uint8Array(o108);
            try {
o4.o11([], o109, "slice(15) contains empty buffer");
}catch(e){}
            try {
o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
}catch(e){}
            try {
o4.o11(0, o108.byteLength, "slice(15) returns an ArrayBuffer with byteLength = 0");
}catch(e){}

            var o108 = o40.slice(100);
            var o109 = new Uint8Array(o108);
            try {
o4.o11([], o109, "slice(100) contains empty buffer");
}catch(e){}
            try {
o4.o10(o40 === o108, "slice returns a new ArrayBuffer - not the original");
}catch(e){}
            try {
o4.o11(0, o108.byteLength, "slice(100) returns an ArrayBuffer with byteLength = 0");
}catch(e){}
        }) {
    var o981 = o979(o78.o982);
    try {
if (o981 >= 0 && o981 < 8) {
      try {
o90.o713(o981, false);
}catch(e){}
      try {
try {
        try {
o78.o983();
}catch(e){}
      }
      catch (o68) { }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
};
    try {
o2(o19);
}catch(e){}
    // Let's JIT the function now...
    try {
o2(o137);
}catch(e){}

    // Now let's create the second one, which should first clear the singleton instance (if any), 
    // by which we should stop reporting any existing fixed fields as such.  Then each remaining
    // fixed field (if any) should get cleared and invalidated as individual properties are added 
    // in constructor.
    var o138 = new value(function() { try {
return "function on the second object";
}catch(e){} });

    // Now let's make sure we still call the right functions...
    try {
o2(o137);
}catch(e){}
    try {
o2(o138);
}catch(e){}
}

try {
o136();
}catch(e){}

try {
o0.o1(o421.o145 = o421.o143);
}catch(e){}