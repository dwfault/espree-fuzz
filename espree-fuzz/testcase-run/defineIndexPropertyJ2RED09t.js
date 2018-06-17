//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o591 = o864[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2) (typeof Module['postRun'] == 'function'); // helpers module.

function o5(o32) {
              try {
o4[((1-o3(NaN) >>> 0) % 0) & o6] = 0x12345678;
}catch(e){}
            }; // testRunner.

var o32 = function o32() {
  // private
  var o3 = 0;

  var o3 = "var x;";

  var o40 = function o40(o41, o259) {
    try {
if (o53  [o5]) {
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
}(); // assert.

var o1 = 0;  // tests.

var o17 = stdlib.Math.acos ;

try {
o11.o15(o16, o21);
}catch(e){}
