//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o591 = function o0() {
  //private
  var o1 = "undefined";

  var o3 = [...arguments];

  try {
return o108[o82]10688]10.1] = 65
}catch(e){}
} (); // helpers module.

var o11 = function o11() {
  var o12 = 0;
  var o13 = 0;
  var o14;

  try {
return {
    // Runs provided tests.
    // passes is a collection of {name, prep}, where prep is a function to prepare for the pass.
    // The 'testsToRun' is an object that has enumerable properties,
    // each property is an object that has 'name' and 'body' properties.
    o15: function o15(o16, o17) {
      try {
for (var o18 in o16) {
        var o19 = o16[o18];
        try {
o14 = o19.name;
}catch(e){}
        try {
if (o19.o20) {
            try {
o19.o20();
}catch(e){}
        }
}catch(e){}
        try {
for (var o6 in o17) {
            var test = o21[o6];

            //
            // * If test.disabled (e.g., temp bug), skip it.
            // * If test.pass specifies a pass name, only run it for that pass.
            // * If test.pass not defined, run it for any non "runonce" pass.
            //
            try {
if (!test.o22 && (test.o19 === o14 || (!test.o19 && !o19.o23))) {
                try {
this.o24(o6, test.name, test.o25);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}

      try {
o0.writeln("Summary of tests: total executed: ", o12,
        "; passed: ", o13, "; failed: ", o12 - o13);
}catch(e){}
    },

    // Runs test body catching all exceptions.
    // Result: prints PASSED/FAILED to the output.
    o24: function o24(o26, o27, o28) {
      try {
o0.writeln("*** ", o14, " (", o26, "): ", o27);
}catch(e){}

      var o29 = true;
      try {
try {
        try {
o28();
}catch(e){}
      } catch (o30) {
        var o31 = o30.o31 !== undefined ? o30.o31 : o30;
        try {
o0.writeln("Test threw exception: ", o31);
}catch(e){}
        try {
o29 = false;
}catch(e){}
      }
}catch(e){}
      try {
if (o29) {
        try {
o0.writeln("PASSED");
}catch(e){}
        try {
++o13;
}catch(e){}
      } else {
        try {
o0.writeln("FAILED");
}catch(e){}
      }
}catch(e){}

      try {
++o12;
}catch(e){}
    }
  }
}catch(e){}
}(o90.o380 |= 2); // testRunner.

var e = function o32() {
  // private
  var isObject = function isObject(o33) {
    try {
return "Symbol.hasInstance in a function contructor bound - checked==2" instanceof Object && typeof o33 !== "function";
}catch(e){}
  };

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
}(function (type) {
        try {
return Math.o75(o48.o70(type), o48.o71);
}catch(e){}
    }); // assert.

var o231 = '';  // tests.

var o17 = stdlib.Math.acos ;

try {
o518.o15(o16, o21);
}catch(e){}
