//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o591 = function o0() {
  //private
  var o1 = "undefined";

  var o3 = [...arguments];

  try {
return o247[10688] = 65
}catch(e){}
} ({ o19: o0.o20[0] != "summary" }); // helpers module.

var o11 = function o11() {
  var o12 = 0;
  var o13 = 0;
  var o52 = { get: o83, set: o84 };

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
}(o576 |= o1); // testRunner.

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
}(o8.get.call(o110)); // assert.

var o21 = function(o10) {
                    try {
o0('Test #' + index + ' - Success handler called with result = ' + o10);
}catch(e){}
                }.o379;  // tests.

function o17() {
    var o18 = [
        "Object", "Function", "Array", "String", "Boolean", "Number", "Math", "Date", "RegExp", "Error",
        "Object.prototype", "Function.prototype", "Array.prototype", "String.prototype", "Boolean.prototype",
        "Number.prototype", "Date.prototype", "RegExp.prototype", "Error.prototype",
        "o", "f", "foo", "foo.prototype", "a", "s", "b", "n", "d", "r", "e"
    ]
    
    var o19 = [
        "abs", "acos", "anchor", "apply", "Array", "asin", "atan", "atan2", "big", "bind",
        "blink", "bold", "Boolean", "call", "ceil", "charAt", "charCodeAt", "concat", "constructor", "cos",
        "Date", "decodeURI", "decodeURIComponent", "description", "E", "encodeURI", "encodeURIComponent", "escape", "Error", "eval", "EvalError",
        "every", "exec", "exp", "flags", "filter", "fixed", "floor", "fontcolor", "fontsize", "forEach",
        "fromCharCode", "Function", "getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getSeconds",
        "getTime", "getTimezoneOffset", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth",
        "getUTCSeconds", "getYear", "hasOwnProperty", "indexOf", "Infinity", "isFinite", "isNaN", "isPrototypeOf", "italics", "join", "lastIndexOf",
        "length", "link", "LN10", "LN2", "localeCompare", "log", "LOG10E", "LOG2E", "map", "Math",
        "max", "MAX_VALUE", "match", "message", "min", "MIN_VALUE", "NaN", "name", "Now", "Number",
        "number", "NEGATIVE_INFINITY", "Object", "parse", "parseFloat", "parseInt", "PI", "pop", "POSITIVE_INFINITY", "pow",
        "propertyIsEnumerable", "prototype", "push", "random", "RangeError", "reduce", "reduceRight", "ReferenceError", "replace", "reverse",
        "round", "RegExp", "search", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
        "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "shift",
        "sin", "slice", "some", "sort", "source", "splice", "split", "sqrt", "SQRT1_2", "SQRT2",
        "strike", "String", "sub", "substring", "substr", "sup", "SyntaxError", "tan", "test", "toDateString",
        "toExponential", "toFixed", "toISOString", "toJSON", "toLocaleDateString", "toLocaleLowerCase", "toLocaleString", "toLocaleTimeString",
        "toLocaleUpperCase", "toLowerCase", "toPrecision", "toString", "toTimeString", "toUpperCase", "toUTCString", "trim", "TypeError", "undefined",
        "unescape", "unshift", "URIError", "UTC", "valueOf", "enumerable", "configurable", "writable", "value", "get", "set", "defineProperty",
        "defineProperties", "toGMTString", "compile", "global", "lastIndex", "multiline", "ignoreCase", "index", "input",
        "lastMatch", "lastParen", "leftContext", "rightContext",
        "x", "y"
    ];
    
    try {
for (var o20=0; o20<o18.length; o20++)
    {
        try {
for (var o21=0; o21< o19.length; o21++)
        {
            try {
o15(o18[o20] + ".propertyIsEnumerable(\"" + o19[o21] + "\")");
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
};

try {
o11.o15(o16, o21);
}catch(e){}
