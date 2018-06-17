//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function o0() {
  //private
  var o847 = null;

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
}(this); // testRunner.

var o1104 = o1058.o345; // assert.

var o21 = o1043 + 4;  // tests.

var o6 = [];

try {
o11.o15(o16, o21);
}catch(e){}
