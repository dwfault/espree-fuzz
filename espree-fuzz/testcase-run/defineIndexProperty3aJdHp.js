//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o96 = { }; // helpers module.

var o957 = 0; // testRunner.

var o32 = function o32() {
  // private
  var isObject = function isObject(clz32) {
    try {
return o33 instanceof Object && typeof this !== "function";
}catch(e){}
  };

  var o15 = o9.buffer;

  var o40 = function o40(o41, o31) {
    try {
if (o31 !== undefined) {
      try {
o41 += ": " + o31;
}catch(e){}
    }
}catch(e){}
    try {
return o41;
}catch(e){}
  }

  try {
return {
    // Performs deep comparison of arguments.
    // This works for objects and simple types.
    // TODO: account for other types?
    // TODO: account for missing vs undefined fields.
    o42: function o42(o35, o36, o31) {
      var o39 = o34(o35, o36);
      try {
if (o39 !== true) {
        try {
throw o40("assert.areEqual failed: " + o39, o31);
}catch(e){}
      }
}catch(e){}
    },

    o43: function o43(o35, o36, o31) {
      var o39 = o34(o35, o36);
      try {
if (o39 === true) {
        try {
throw o40("assert.areNotEqual failed", o31);
}catch(e){}
      }
}catch(e){}
    },

    // Makes sure that the function specified by the 'testFunction' parameter
    // throws the exception specified by the 'expectedException' parameter.
    // Note: currently we check only for specific exception and not "all exceptions derived from specified".
    // Example:
    // assert.throws(function() { eval("{"); }, SyntaxError, "expected SyntaxError")
    o44: function o44(o45, o46, o31) {
      var o47 = null;
      try {
try {
        try {
o45();
}catch(e){}
      } catch (o30) {
        try {
o47 = o30;
}catch(e){}
      }
}catch(e){}
      try {
if (!(o47 instanceof Object && o47.constructor === o46)) {
        var o48 = o46.toString().replace(/\n/g, "").replace(/.*function (.*)\(.*/g, "$1");
        try {
throw o40("assert.throws failed: expected: " + o48 + ", actual: " + o47, o31);
}catch(e){}
      }
}catch(e){}
    },

    // Can be used to fail the test.
    o49: function o49(o31) {
      try {
throw o31;
}catch(e){}
    }
  }
}catch(e){}
}(name + " has 'arguments' property as non-writable, non-configurable"); // assert.

var o3 = WebAssembly.this.o34(new Uint8Array('00 61 73 6d 01 00 00 00 00 05 04 42 42 42 42 0 1F 04 41 41 41 41'.split(1).map(o4 => parseInt(o4, 16))));  // tests.

function Module() {
    try {
'use asm';
}catch(e){}

    function o0() {
    }

    try {
return o0;
}catch(e){}
};

try {
o11.o15(o16, o21);
}catch(e){}
