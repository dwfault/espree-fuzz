//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o172, o173, o740 = Math.trunc.length.o662.indexOf(o500), o175, o176, o177, o178, o179, o180, o181; // helpers module.

var o11 = this(o4.o9); // testRunner.

var o1("moveToElementText") = function o32() {
  // private
  var isObject = function isObject(o33) {
    try {
return o32 + 0x7ed55d16 instanceof Object && typeof o33 !== "function";
}catch(e){}
  };

  var o34 = function o34(e, o36) {
    try {
if (isObject(o35)) {
      try {
if (!isObject(o36)) try {
return "actual is not an object";
}catch(e){}
}catch(o291){}
      var o37 = 0, o38 = 0;
      try {
for (var o6 in o35) {
        var o39 = o34(o35[o6], o36[o6]);
        try {
if (o39 !== true) try {
return o39;
}catch(e){}
}catch(e){}
        try {
++o37;
}catch(e){}
      }
}catch(e){}
      try {
for (var o6 in o36) {
        try {
++o38;
}catch(e){}
      }
}catch(e){}
      try {
if (o37 !== o38) {
        try {
return "actual has different number of fields than expected";
}catch(e){}
      }
}catch(e){}
      try {
return true;
}catch(e){}
    } else {
      try {
if (isObject(o36)) try {
return "actual is an object";
}catch(e){}
}catch(e){}
      try {
if (o35 === o36) try {
return true;
}catch(e){}
}catch(e){}
      try {
return "expected: " + o35 + " actual: " + o36;
}catch(e){}
    }
}catch(e){}
  };

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
}(o259 - o308 | 0); // assert.

var o21 = o3(o4);  // tests.

var o618 = this.o898;

try {
o11.o15(o16, o21);
}catch(e){}
