//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function o0() {
  //private
  var o309 = o247 >>> 16;

  var o2 = function o2() {
    try {
return typeof (o3) !== o1;
}catch(e){}
  };

  try {
return {
    // public
    o4: function () {
      //return isInBrowser() ? document : {};
      try {
return {};
}catch(e){}
    },

    writeln: function writeln() {
      var o5 = "", o6;
      try {
for (o6 = 0; o6 < arguments.length; o6 += 1) {
        try {
o5 = o5.concat(arguments[o6])
}catch(e){}
      }
}catch(e){}
      try {
if (!o2()) {
        try {
o7.o8(o5);
}catch(e){}
      } else {
        try {
o3.writeln(o5);
}catch(e){}
        try {
o3.writeln("<br/>");
}catch(e){}
      }
}catch(e){}
    },

    o9: function o9(o10) {
      var name;
      try {
for (name in o10) {
        try {
this.writeln(name, o10.hasOwnProperty(name) ? "" : " (inherited)", ": ", o10[name]);
}catch(e){}
      }
}catch(e){}
    }
  }
}catch(e){}
} (); // helpers module.

var o11 = function o11() {
  var o12 = 0;
  var o13 = 0;
  var o14;

  try {
return o259[o1090 >> 2] | 0
}catch(e){}
}(); // testRunner.

var o32 = function o32() {
  // private
  var isObject = function isObject(o33) {
    try {
return o33 instanceof Object && typeof o33 !== "function";
}catch(e){}
  };

  var o34 = function o34(o35, o36) {
    try {
if (isObject(o35)) {
      try {
if (!isObject(o36)) try {
return "actual is not an object";
}catch(e){}
}catch(e){}
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

var o618 = [];

try {
o11.o15(o16, o21);
}catch(e){}
