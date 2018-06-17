//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function o0() {
  //private
  var o1 = "undefined";

  var o2 = function o2() {
    return typeof (o3) !== o1;
  };

  return {
    // public
    o4: function () {
      //return isInBrowser() ? document : {};
      return {};
    },

    writeln: function writeln() {
      var o5 = "", o6;
      for (o6 = 0; o6 < arguments.length; o6 += 1) {
        o5 = o5.concat(arguments[o6])
      }
      if (!o2()) {
        o7.o8(o5);
      } else {
        o3.writeln(o5);
        o3.writeln("<br/>");
      }
    },

    o9: function o9(o10) {
      var name;
      for (name in o10) {
        this.writeln(name, o10.hasOwnProperty(name) ? "" : " (inherited)", ": ", o10[name]);
      }
    }
  }
} (); // helpers module.

var o11 = function o11() {
  var o12 = 0;
  var o13 = 0;
  var o14;

  return {
    // Runs provided tests.
    // passes is a collection of {name, prep}, where prep is a function to prepare for the pass.
    // The 'testsToRun' is an object that has enumerable properties,
    // each property is an object that has 'name' and 'body' properties.
    o15: function o15(o16, o17) {
      for (var o18 in o16) {
        var o19 = o16[o18];
        o14 = o19.name;
        if (o19.o20) {
            o19.o20();
        }
        for (var o6 in o17) {
            var test = o21[o6];

            //
            // * If test.disabled (e.g., temp bug), skip it.
            // * If test.pass specifies a pass name, only run it for that pass.
            // * If test.pass not defined, run it for any non "runonce" pass.
            //
            if (!test.o22 && (test.o19 === o14 || (!test.o19 && !o19.o23))) {
                this.o24(o6, test.name, test.o25);
            }
        }
      }

      o0.writeln("Summary of tests: total executed: ", o12,
        "; passed: ", o13, "; failed: ", o12 - o13);
    },

    // Runs test body catching all exceptions.
    // Result: prints PASSED/FAILED to the output.
    o24: function o24(o26, o27, o28) {
      o0.writeln("*** ", o14, " (", o26, "): ", o27);

      var o29 = true;
      try {
        o28();
      } catch (o30) {
        var o31 = o30.o31 !== undefined ? o30.o31 : o30;
        o0.writeln("Test threw exception: ", o31);
        o29 = false;
      }
      if (o29) {
        o0.writeln("PASSED");
        ++o13;
      } else {
        o0.writeln("FAILED");
      }

      ++o12;
    }
  }
}(); // testRunner.

var o32 = function o32() {
  // private
  var isObject = function isObject(o33) {
    return o33 instanceof Object && typeof o33 !== "function";
  };

  var o34 = function o34(o35, o36) {
    if (isObject(o35)) {
      if (!isObject(o36)) return "actual is not an object";
      var o37 = 0, o38 = 0;
      for (var o6 in o35) {
        var o39 = o34(o35[o6], o36[o6]);
        if (o39 !== true) return o39;
        ++o37;
      }
      for (var o6 in o36) {
        ++o38;
      }
      if (o37 !== o38) {
        return "actual has different number of fields than expected";
      }
      return true;
    } else {
      if (isObject(o36)) return "actual is an object";
      if (o35 === o36) return true;
      return "expected: " + o35 + " actual: " + o36;
    }
  };

  var o40 = function o40(o41, o31) {
    if (o31 !== undefined) {
      o41 += ": " + o31;
    }
    return o41;
  }

  return {
    // Performs deep comparison of arguments.
    // This works for objects and simple types.
    // TODO: account for other types?
    // TODO: account for missing vs undefined fields.
    o42: function o42(o35, o36, o31) {
      var o39 = o34(o35, o36);
      if (o39 !== true) {
        throw o40("assert.areEqual failed: " + o39, o31);
      }
    },

    o43: function o43(o35, o36, o31) {
      var o39 = o34(o35, o36);
      if (o39 === true) {
        throw o40("assert.areNotEqual failed", o31);
      }
    },

    // Makes sure that the function specified by the 'testFunction' parameter
    // throws the exception specified by the 'expectedException' parameter.
    // Note: currently we check only for specific exception and not "all exceptions derived from specified".
    // Example:
    // assert.throws(function() { eval("{"); }, SyntaxError, "expected SyntaxError")
    o44: function o44(o45, o46, o31) {
      var o47 = null;
      try {
        o45();
      } catch (o30) {
        o47 = o30;
      }
      if (!(o47 instanceof Object && o47.constructor === o46)) {
        var o48 = o46.toString().replace(/\n/g, "").replace(/.*function (.*)\(.*/g, "$1");
        throw o40("assert.throws failed: expected: " + o48 + ", actual: " + o47, o31);
      }
    },

    // Can be used to fail the test.
    o49: function o49(o31) {
      throw o31;
    }
  }
}(); // assert.

var o21 = {
    // Note: each test has name (string) and body (function) properties.
    //       Success is when the body does not throw, failure -- when it throws.

    //---------------------- normal identifier property names -------------------------------
    o50: {
      name: "8.12.9.4.a (variation 1): define generic property, check default attrbitues",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo02";
        var o52 = {};
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: undefined, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o53: {
      name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo03";
        var o52 = { value: 0 };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 0, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o54: {
      name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo02";
        var o52 = { configurable: true, writable: false };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: undefined, configurable: true, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o55: {
      name: "8.12.9.4.b: define accessor property, check default attrbitues",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo04";
        var getter = function () { return this.o56 };
        var o52 = { get: getter };
        Object.defineProperty(o10, o51, o52);
        var o35 = { get: getter, set: undefined, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o57: {
      name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
      o25: function () {
        var o51 = "foo05";
        var o10 = { o58: 1 };
        var o52 = {};
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o59: {
      name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
      o25: function () {
        var o51 = "foo06";
        var o10 = { o60: 1 };
        var o52 = { value: 1 };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same

    o61: {
      name: "8.12.9.7.a: re-define property: current descriptor is not configurable and descriptor is configurable, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo07";
        var o52 = { value: 0, configurable: false };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1, configurable: true };
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
      }
    },

    o63: {
      name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo08";
        var o52 = { value: 0 };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1, enumerable: true };
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
      }
    },

    o64: {
      name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo09";
        var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1, writable: false };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o65: {
      name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo10";
        var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1, enumerable: false, writable: false };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o66: {
      name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo11";
        var o52 = { value: 0, configurable: true };
        Object.defineProperty(o10, o51, o52);
        o52 = { enumerable: true }; // change enumerable to make sure that descriptor is different from current.
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 0, configurable: true, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor.IsData != current.IsData

    o67: {
      name: "8.12.9.9.a: re-define property: descriptor.IsData != current.IsData and current is not configurable, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo12";
        var o52 = { value: 0, configurable: false };
        Object.defineProperty(o10, o51, o52);
        o52 = { get: function () { return this.o56; } };
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
      }
    },

    o68: {
      name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo13";
        var o52 = { value: 0, configurable: true, enumerable: true };
        Object.defineProperty(o10, o51, o52);
        var getter = function() { return this.o56; };
        o52 = { get: getter };
        Object.defineProperty(o10, o51, o52);
        var o35 = { get: getter, set: undefined, configurable: true, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o69: {
      name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo14";
        var o52 = { value: 0, configurable: true, enumerable: false };
        Object.defineProperty(o10, o51, o52);
        var getter = function () { return this.o56; };
        o52 = { get: getter };
        Object.defineProperty(o10, o51, o52);
        var o35 = { get: getter, set: undefined, configurable: true, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o70: {
      name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo15";
        var o52 = { value: 0, configurable: true, enumerable: true };
        Object.defineProperty(o10, o51, o52);
        var getter = function () { return this.o56; };
        o52 = { get: getter, configurable: false };
        Object.defineProperty(o10, o51, o52);
        var o35 = { get: getter, set: undefined, configurable: false, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o71: {
      name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo16";
        var o52 = {
          set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
          configurable: true,
          enumerable: true
        };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1 };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 1, configurable: true, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o73: {
      name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo17";
        var o52 = {
          set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
          configurable: true,
          enumerable: false
        };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1 };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o74: {
      name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo18";
        var o52 = {
          set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
          configurable: true,
          enumerable: false
        };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1, configurable: false };
        Object.defineProperty(o10, o51, o52);
        // expected: configurable/enumerable = false/false.
        var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o75: {
      name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo19";
        var o52 = {
          set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
          configurable: true,
          enumerable: true
        };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1, enumerable: false };
        Object.defineProperty(o10, o51, o52);
        // expected: configurable/enumerable = true/false.
        var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is data, current is data

    o76: {
      name: "8.12.9.10.a (variation 1): re-define data property: current is not configurable/not writable and descriptor writable is absent/value is same",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo20";
        var o52 = { value: 1 };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 1 };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o77: {
      name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo21";
        var o52 = { value: 1 };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 2, writable: true };
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
        return true;
      }
    },

    o78: {
      name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo22";
        var o52 = { value: 1 };
        Object.defineProperty(o10, o51, o52);
        o52 = { value: 2, writable: false };
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
      }
    },

    o79: {
      name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
      o25: function () {
        var o51 = "foo23";
        var o10 = { o80: 1 };
        var o52 = { value: 2, writable: false };
        Object.defineProperty(o10, o51, o52);
        var o35 = { writable: false, value: 2, configurable: true, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is accessor, current is accessor
    o81: {
      name: "Test: 8.12.9.11 (variation 1): re-define accessor property: current configurable is true: valid case",
      o25: function () {
        var o51 = "foo24";
        var o10 = {
          get o82() { return this.o56; },
          set o82(o72) { o0.writeln("old setter"); this.o56 = o72; }
        };
        var o83 = function() { return 2; };
        var o84 = function(o72) { o0.writeln("new setter"); }
        var o52 = { get: o83, set: o84 };
        Object.defineProperty(o10, o51, o52);
        var o35 = { get: o83,  set: o84, configurable: true, enumerable: true };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o85: {
      name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
      o25: function () {
        var o51 = "foo25";
        var o10 = o0.o4();
        var o52 = { set: function(o72) { o0.writeln("old setter"); this.o56 = o72; } };
        Object.defineProperty(o10, o51, o52);

        o52 = { set: function(o72) { o0.writeln("new setter"); } };
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
      }
    },

    o86: {
      name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
      o25: function () {
        var o51 = "foo26";
        var o10 = o0.o4();
        var o52 = { get: function() { return this.o56; }, };
        Object.defineProperty(o10, o51, o52);

        o52 = { get: function() { o0.writeln("new getter"); return 2; } };
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
      }
    },

    o87: {
      name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
      o25: function () {
        var o51 = "foo27";
        var o10 = o0.o4();
        var setter = function(o72) { o0.writeln("setter") };
        var o52 = { set: setter };
        Object.defineProperty(o10, o51, o52);

        o52 = { get: undefined, set: setter };
        Object.defineProperty(o10, o51, o52);
        var o35 = { get: undefined, set: setter, configurable: false, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o88: {
      name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
      o25: function () {
        // define a data property.
        var o51 = "foo28";
        var o10 = o0.o4();
        var o52 = { value: 1, configurable: true };
        Object.defineProperty(o10, o51, o52);

        // re-define the property to be accessor property.
        var o89 = "";
        var getter = function() { o89 += "getter was called."; return this.o56; }
        var setter = function(o72) { o89 += "setter was called."; this.o56 = o72; };
        o52 = { get: getter, set: setter };
        Object.defineProperty(o10, o51, o52);

        // set the value and get it.
        var o90 = 2;
        o10[o51] = o90;
        var o91 = o10[o51];

        // validate.
        var o35 = { get: getter, set: setter, configurable: true, enumerable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        o32.o42("setter was called.getter was called.", o89, "wrong log");
        o32.o42(o90, o91, "wrong value");
      }
    },

    o92: {
      name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
      o25: function () {
        o32.o44(
          function() { Object.defineProperty([], "length", {configurable: false, get: function() {return 2;}}); },
          o62);
        o32.o44(
          function() { Object.defineProperty(Array.prototype, "length", {configurable: false, get: function() {return 2;}}); },
          o62);
      }
    },

    // Where we are: some tests for specific issues.
    o93: {
      name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo30";
        var o52 = { get: undefined };
        Object.defineProperty(o10, o51, o52);
        o32.o42(undefined, o10[o51]);
      }
    },

    o94: {
      name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo31";
        var o52 = { set: undefined };
        Object.defineProperty(o10, o51, o52);
        o10[o51] = 1; // Make sure this does not throw.
        o32.o42(undefined, o10[o51]); // Just in case try to access the property.
      }
    },

    o95: {
      name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo32";
        var o52 = { configurable: true, value: 0 };
        Object.defineProperty(o10, o51, o52);

        o52 = { get: undefined };
        Object.defineProperty(o10, o51, o52);
        o32.o42(undefined, o10[o51]);
      }
    },

    o96: {
      name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo33";
        var o52 = { configurable: true, value: 0 };
        Object.defineProperty(o10, o51, o52);

        o52 = { set: undefined };
        Object.defineProperty(o10, o51, o52);
        o10[o51] = 1; // Make sure this does not throw.
        o32.o42(undefined, o10[o51]); // Just in case try to access the property.
      }
    },

    // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window),
    //       it should in the very end.
    o97: {
      name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        Object.preventExtensions(o10);
        var o51 = "foo01";
        var o52 = {};
        o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62);
      }
    },

    //---------------------- numeric property names -------------------------------
    o98: {
        name: "8.12.9.4.a (variation 1): define generic property, check default attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "2";
            var o52 = {};
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: undefined, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o99: {
        name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "3";
            var o52 = { value: 0 };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 0, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o100: {
        name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "2";
            var o52 = { configurable: true, writable: false };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: undefined, configurable: true, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o101: {
        name: "8.12.9.4.b: define accessor property, check default attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "4";
            var getter = function () { return this.o56 };
            var o52 = { get: getter };
            Object.defineProperty(o10, o51, o52);
            var o35 = { get: getter, set: undefined, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o102: {
        name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
        o25: function () {
            var o51 = "5";
            var o10 = { 5: 1 };
            var o52 = {};
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o103: {
        name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
        o25: function () {
            var o51 = "6";
            var o10 = { 6: 1 };
            var o52 = { value: 1 };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same

    o104: {
        name: "8.12.9.7.a: re-define property: current descriptor is not configurable and descriptor is configurable, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "7";
            var o52 = { value: 0, configurable: false };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1, configurable: true };
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
        }
    },

    o105: {
        name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "8";
            var o52 = { value: 0 };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1, enumerable: true };
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
        }
    },

    o106: {
        name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "9";
            var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1, writable: false };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o107: {
        name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "10";
            var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1, enumerable: false, writable: false };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o108: {
        name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "11";
            var o52 = { value: 0, configurable: true };
            Object.defineProperty(o10, o51, o52);
            o52 = { enumerable: true }; // change enumerable to make sure that descriptor is different from current.
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 0, configurable: true, enumerable: true };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor.IsData != current.IsData

    o109: {
        name: "8.12.9.9.a: re-define property: descriptor.IsData != current.IsData and current is not configurable, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "12";
            var o52 = { value: 0, configurable: false };
            Object.defineProperty(o10, o51, o52);
            o52 = { get: function () { return this.o56; } };
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
        }
    },

    o110: {
        name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "13";
            var o52 = { value: 0, configurable: true, enumerable: true };
            Object.defineProperty(o10, o51, o52);
            var getter = function () { return this.o56; };
            o52 = { get: getter };
            Object.defineProperty(o10, o51, o52);
            var o35 = { get: getter, set: undefined, configurable: true, enumerable: true };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o111: {
        name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "14";
            var o52 = { value: 0, configurable: true, enumerable: false };
            Object.defineProperty(o10, o51, o52);
            var getter = function () { return this.o56; };
            o52 = { get: getter };
            Object.defineProperty(o10, o51, o52);
            var o35 = { get: getter, set: undefined, configurable: true, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o112: {
        name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "15";
            var o52 = { value: 0, configurable: true, enumerable: true };
            Object.defineProperty(o10, o51, o52);
            var getter = function () { return this.o56; };
            o52 = { get: getter, configurable: false };
            Object.defineProperty(o10, o51, o52);
            var o35 = { get: getter, set: undefined, configurable: false, enumerable: true };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o113: {
        name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "16";
            var o52 = {
                set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
                configurable: true,
                enumerable: true
            };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1 };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 1, configurable: true, enumerable: true };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o114: {
        name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "17";
            var o52 = {
                set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
                configurable: true,
                enumerable: false
            };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1 };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o115: {
        name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "18";
            var o52 = {
                set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
                configurable: true,
                enumerable: false
            };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1, configurable: false };
            Object.defineProperty(o10, o51, o52);
            // expected: configurable/enumerable = false/false.
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o116: {
        name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "19";
            var o52 = {
                set: function (o72) { o0.writeln("setter was called"); this.o56 = o72; },
                configurable: true,
                enumerable: true
            };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1, enumerable: false };
            Object.defineProperty(o10, o51, o52);
            // expected: configurable/enumerable = true/false.
            var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is data, current is data

    o117: {
        name: "8.12.9.10.a (variation 1): re-define data property: current is not configurable/not writable and descriptor writable is absent/value is same",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "20";
            var o52 = { value: 1 };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 1 };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o118: {
        name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "21";
            var o52 = { value: 1 };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 2, writable: true };
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
            return true;
        }
    },

    o119: {
        name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "22";
            var o52 = { value: 1 };
            Object.defineProperty(o10, o51, o52);
            o52 = { value: 2, writable: false };
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
        }
    },

    o120: {
        name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
        o25: function () {
            var o51 = "23";
            var o10 = { 23: 1 };
            var o52 = { value: 2, writable: false };
            Object.defineProperty(o10, o51, o52);
            var o35 = { writable: false, value: 2, configurable: true, enumerable: true };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is accessor, current is accessor

    o121: {
        name: "Test: 8.12.9.11 (variation 1): re-define accessor property: current configurable is true: valid case",
        o25: function () {
          var o51 = "24";
          var o10 = {
            get 24() { return this.o56; },
            set 24(o72) { o0.writeln("old setter"); this.o56 = o72; }
          };
          var o83 = function() { return 2; };
          var o84 = function(o72) { o0.writeln("new setter"); }
          var o52 = { get: o83, set: o84 };
          Object.defineProperty(o10, o51, o52);
          var o35 = { get: o83,  set: o84, configurable: true, enumerable: true };
          o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o122: {
        name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
        o25: function () {
            var o51 = "25";
            var o10 = o0.o4();
            var o52 = { set: function (o72) { o0.writeln("old setter"); this.o56 = o72; } };
            Object.defineProperty(o10, o51, o52);

            o52 = { set: function (o72) { o0.writeln("new setter"); } };
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
        }
    },

    o123: {
        name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
        o25: function () {
            var o51 = "26";
            var o10 = o0.o4();
            var o52 = { get: function () { return this.o56; } };
            Object.defineProperty(o10, o51, o52);

            o52 = { get: function () { o0.writeln("new getter"); return 2; } };
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
        }
    },

    o124: {
        name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
        o25: function () {
            var o51 = "27";
            var o10 = o0.o4();
            var setter = function (o72) { o0.writeln("setter") };
            var o52 = { set: setter };
            Object.defineProperty(o10, o51, o52);

            o52 = { get: undefined, set: setter };
            Object.defineProperty(o10, o51, o52);
            var o35 = { get: undefined, set: setter, configurable: false, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o125: {
        name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
        o25: function () {
            // define a data property.
            var o51 = "28";
            var o10 = o0.o4();
            var o52 = { value: 1, configurable: true };
            Object.defineProperty(o10, o51, o52);

            // re-define the property to be accessor property.
            var o89 = "";
            var getter = function () { o89 += "getter was called."; return this.o56; }
            var setter = function (o72) { o89 += "setter was called."; this.o56 = o72; };
            o52 = { get: getter, set: setter };
            Object.defineProperty(o10, o51, o52);

            // set the value and get it.
            var o90 = 2;
            o10[o51] = o90;
            var o91 = o10[o51];

            // validate.
            var o35 = { get: getter, set: setter, configurable: true, enumerable: false };
            o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
            o32.o42("setter was called.getter was called.", o89, "wrong log");
            o32.o42(o90, o91, "wrong value");
        }
    },

    o126: {
        name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
        o25: function () {
            o32.o44(
        function () { Object.defineProperty([], "length", { configurable: false, get: function () { return 2; } }); },
        o62);
            o32.o44(
        function () { Object.defineProperty(Array.prototype, "length", { configurable: false, get: function () { return 2; } }); },
        o62);
        }
    },

    // Where we are: some tests for specific issues.
    o127: {
        name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "30";
            var o52 = { get: undefined };
            Object.defineProperty(o10, o51, o52);
            o32.o42(undefined, o10[o51]);
        }
    },

    o128: {
        name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "31";
            var o52 = { set: undefined };
            Object.defineProperty(o10, o51, o52);
            o10[o51] = 1; // Make sure this does not throw.
            o32.o42(undefined, o10[o51]); // Just in case try to access the property.
        }
    },

    o129: {
        name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "32";
            var o52 = { configurable: true, value: 0 };
            Object.defineProperty(o10, o51, o52);

            o52 = { get: undefined };
            Object.defineProperty(o10, o51, o52);
            o32.o42(undefined, o10[o51]);
        }
    },

    o130: {
        name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "33";
            var o52 = { configurable: true, value: 0 };
            Object.defineProperty(o10, o51, o52);

            o52 = { set: undefined };
            Object.defineProperty(o10, o51, o52);
            o10[o51] = 1; // Make sure this does not throw.
            o32.o42(undefined, o10[o51]); // Just in case try to access the property.
        }
    },

    // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window),
    //       it should in the very end.
    o131: {
        name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            Object.preventExtensions(o10);
            var o51 = "1";
            var o52 = {};
            o32.o44(function () { Object.defineProperty(o10, o51, o52); }, o62);
        }
    },

    // --------------------- misc adhoc tests -------------------------------------
    o132: {
        name: "set property whose writable is false",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 17;
            o10[o133] = 100;
            Object.defineProperty(o10, o133, {writable: false});
            o10[o133] = 200; // should have no effect
            o32.o42(100, o10[o133]);
        }
    },

    o134: {
        name: "delete index property",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;

            o32.o42(true, delete o10[1], "delete non-exist property should return true");

            o10[o133] = 123;
            o32.o42(true, delete o10[o133], "delete this property should return true");
            o32.o42(undefined, o10[o133], "deleted property value should become undefined");

            Object.defineProperty(o10, o133, {get:function(){return 123;}, configurable: true});
            o32.o42(123, o10[o133], "Property value should be from getter");
            o32.o42(true, delete o10[o133], "delete this property should return true");
            o32.o42(undefined, o10[o133], "deleted property value should become undefined");

            Object.defineProperty(o10, o133, {value: 123, configurable: false});
            o32.o42(123, o10[o133], "Property value should be the value");
            o32.o42(false, delete o10[o133], "delete this property should return false, not configurable");
            o32.o42(123, o10[o133], "Property value should not be changed");
        }
    },

    o135: {
        name: "delete a data property then set",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 303;
            Object.defineProperty(o10, o133, {
                value: 100,
                configurable: true
            });
            o32.o42(delete o10[o133], true, "delete should succeed on configurable data property");
            o10[o133] = 200;
            o32.o42(200, o10[o133]);
        }
    },
    o136: {
        name: "delete a getter property then set",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 303;
            Object.defineProperty(o10, o133, {
                get: function() { return 100; },
                configurable: true
            });
            o32.o42(true, delete o10[o133], "delete should succeed on configurable accessor property");
            o10[o133] = 200;
            o32.o42(200, o10[o133]);
        }
    },
    o137: {
        name: "delete a setter property then set",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 303;
            Object.defineProperty(o10, o133, {
                set: function(o72) { return 100; },
                configurable: true
            });
            o32.o42(true, delete o10[o133], "delete should succeed on configurable accessor property");
            o10[o133] = 200;
            o32.o42(200, o10[o133]);
        }
    },

    o138: {
        name: "Set a property while prototype has a getter",
        o25: function() {
            var o133 = "abc";
            try {
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o10 = o0.o4();
                o10[o133] = 200; // should have no effect since proto only has a getter
                o32.o42(100, o10[o133]);
            } finally {
                delete Object.prototype[o133];
            }
        }
    },
    o139: {
        name: "Set a property while prototype has a getter",
        o25: function() {
            var o133 = "306"; // Without quote it fails on array. Covered by 310_i
            try {
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o10 = o0.o4();
                o10[o133] = 200; // should have no effect since proto only has a getter
                o32.o42(100, o10[o133]);
            } finally {
                delete Object.prototype[o133];
            }
        }
    },

    o140: {
        name: "Define a property while prototype has a getter",
        o25: function() {
            var o133 = "abc";
            try {
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o10 = o0.o4();
                Object.defineProperty(o10, o133, { value: 200 });
                o32.o42(200, o10[o133]); //DefineOwnProperty succeeds
            } finally {
                delete Object.prototype[o133];
            }
        }
    },
    o141: {
        name: "Define a property while prototype has a getter",
        o25: function() {
            var o133 = 307;
            try {
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o10 = o0.o4();
                Object.defineProperty(o10, o133, { value: 200 });
                o32.o42(200, o10[o133]); //DefineOwnProperty succeeds
            } finally {
                delete Object.prototype[o133];
            }
        }
    },

    o142: {
        o22: true, // !!! Disable due to bug (to be opened) causing assertion !!!
        o19: "misc",
        name: "Set a property via object literal while prototype has a getter",
        o25: function() {
            var o133 = "abc";
            try {
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o10 = {o143: 200};
                o32.o42(100, o10[o133]);
            } finally {
                delete Object.prototype[o133];
            }
        }
    },
    o144: {
        o19: "misc",
        name: "Set a property via object literal while prototype has a getter",
        o25: function() {
            var o133 = 308;
            try {
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o10 = {308: 200}; // succeeds since object literals do not check prototypes
                o32.o42(200, o10[o133]);
            } finally {
                delete Object.prototype[o133];
            }
        }
    },

    o145: {
        o22: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o19: "misc",
        name: "Set a property while prototype property is not writable",
        o25: function() {
            try {
                Object.defineProperty(Object.prototype, 1, {
                    value: 100,
                    writable: false,
                    configurable: true
                });

                var o10 = [];
                o32.o42(100, o10[1]);
                o10[1] = 200; // should have no effect since proto[1] is not writable
                o32.o42(100, o10[1]);
            } finally {
                delete Object.prototype[1];
            }
        }
    },

    o146: {
        o22: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o19: "misc",
        name: "Set a property while prototype property is a getter",
        o25: function() {
            try {
                Object.defineProperty(Object.prototype, 1, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o10 = [];
                o32.o42(100, o10[1]);
                o10[1] = 200; // should have no effect since proto[1] has only getter
                o32.o42(100, o10[1]);
            } finally {
                delete Object.prototype[1];
            }
        }
    },

    o147: {
        o22: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o19: "misc",
        name: "Set a property while prototype property is getter/setter",
        o25: function() {
            try {
                var o148 = 100;
                Object.defineProperty(Object.prototype, 1, {
                    get: function () { return o148; },
                    set: function(o72) { o148 = o72 + 300; },
                    configurable: true
                });

                var o10 = [];
                o32.o42(100, o10[1]);
                o10[1] = 200; // should call setter
                o32.o42(500, o10[1]);
            } finally {
                delete Object.prototype[1];
            }
        }
    },

    o149: {
        name: "Test getter/setter on prototype receives the right this arg",
        o25: function() {
            try {
                var o133 = "1"; //avoid array fast path for now
                Object.prototype.o148 = 123;
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return this.o148; },
                    set: function (o72) { this.o148 = o72 + 300; },
                    configurable: true
                });

                var o10 = o0.o4();
                o32.o42(123, o10[o133], "Should read data on prototype");
                o10[o133] = 200; // should call proto setter on o
                o32.o42(500, o10.o148, "setter should set data on o");
                o32.o42(500, o10[o133], "Should read data on o");
                o32.o42(123, Object.prototype.o148, "proto data unchanged");
            } finally {
                delete Object.prototype[o133];
                delete Object.prototype.o148;
            }
        }
    },
    o150: {
        name: "Test getter on prototype receives the right this arg",
        o25: function() {
            try {
                var o133 = "1"; //avoid array fast path for now
                Object.prototype.o148 = 123;
                Object.defineProperty(Object.prototype, o133, {
                    get: function () { return this.o148; },
                    configurable: true
                });

                var o10 = o0.o4();
                o10.length = 10; // Makes propName in length range, also prepare for indexOf
                o32.o42(123, o10[o133], "Should read data on prototype");
                o10.o148 = 456;
                o32.o42(456, o10[o133], "Should read data on o");
                var o6 = Array.prototype.indexOf.apply(o10, [456]);
                o32.o42(o133, o6.toString(), "getter should find data on o, not on prototype!");
            } finally {
                delete Object.prototype[o133];
                delete Object.prototype.o148;
            }
        }
    },

    o151: {
        name: "preventExtensions with index property",
        o25: function() {
            var o10 = o0.o4();
            o10[1] = 1;
            o32.o42(1, o10[1]);
            o32.o42(true, Object.isExtensible(o10), "default is extensible");
            o32.o42(false, Object.isSealed(o10), "default not sealed");
            o32.o42(false, Object.isFrozen(o10), "default not frozen");

            Object.preventExtensions(o10);
            o32.o42(false, Object.isExtensible(o10), "now NOT extensible");
            o32.o42(false, Object.isSealed(o10), "still not sealed, o[1] configurable");
            o32.o42(false, Object.isFrozen(o10), "still not frozen, o[1] configurable");

            o10[1] = 11; // should succeed
            o32.o42(11, o10[1], "write should succeed");
            o10[2] = 2; // should fail
            o32.o42(undefined, o10[2], "extend should fail");

            // verify unchanged
            o32.o42(false, Object.isExtensible(o10), "extensible not changed");
            o32.o42(false, Object.isSealed(o10), "sealed not changed");
            o32.o42(false, Object.isFrozen(o10), "frozen not changed");
        }
    },
    o152: {
        name: "seal with index property",
        o25: function() {
            var o10 = o0.o4();
            o10[1] = 1;

            Object.seal(o10);
            o32.o42(false, Object.isExtensible(o10), "now NOT extensible");
            o32.o42(true, Object.isSealed(o10), "now IS sealed");
            o32.o42(false, Object.isFrozen(o10), "still not frozen, o[1] writable");

            o10[1] = 11; // should succeed
            o32.o42(11, o10[1], "write should succeed");
            o32.o42(false, delete o10[1], "delete should fail, object sealed");
            o32.o42(11, o10[1], "delete should fail");
            o10[2] = 2; // should fail
            o32.o42(undefined, o10[2], "extend should fail");

            // verify unchanged
            o32.o42(false, Object.isExtensible(o10), "extensible not changed");
            o32.o42(true, Object.isSealed(o10), "sealed not changed");
            o32.o42(false, Object.isFrozen(o10), "frozen not changed");
        }
    },
    o153: {
        name: "freeze with index property",
        o25: function() {
            var o10 = o0.o4();
            o10[1] = 1;

            Object.freeze(o10);
            o32.o42(false, Object.isExtensible(o10), "now NOT extensible");
            o32.o42(true, Object.isSealed(o10), "now IS sealed");
            o32.o42(true, Object.isFrozen(o10), "now IS frozen");

            o10[1] = 11; // should fail
            o32.o42(1, o10[1], "write should fail");
            o32.o42(false, delete o10[1], "delete should fail, object sealed");
            o32.o42(1, o10[1], "delete should fail");
            o10[2] = 2; // should fail
            o32.o42(undefined, o10[2], "extend should fail");

            // verify unchanged
            o32.o42(false, Object.isExtensible(o10), "extensible not changed");
            o32.o42(true, Object.isSealed(o10), "sealed not changed");
            o32.o42(true, Object.isFrozen(o10), "frozen not changed");
        }
    },

    o154: {
        name: "preventExtensions on empty object -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            Object.preventExtensions(o10); // Haven't set any item yet, objectArray is null
            o32.o42(false, Object.isExtensible(o10), "NOT extensible");
            o32.o42(true, Object.isSealed(o10), "IS sealed");
            o32.o42(true, Object.isFrozen(o10) || Array.isArray(o10), "IS frozen, unless isArray (length writable)");

            o10[1] = 11;
            o32.o42(undefined, o10[1], "Write failed, not extensible");
        }
    },
    o155: {
        name: "preventExtensions on object with an accessor -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            Object.defineProperty(o10, o133, {get: function(){ return "123"; }, configurable: false});
            Object.preventExtensions(o10);
            o32.o42(false, Object.isExtensible(o10), "NOT extensible");
            o32.o42(true, Object.isSealed(o10), "IS sealed");
            o32.o42(true, Object.isFrozen(o10) || Array.isArray(o10), "IS frozen, unless isArray (length writable)");

            o10[1] = 11;
            o32.o42(undefined, o10[1], "Write failed, not extensible");
            o32.o42(false, delete o10[o133], "delete should fail, not configurable");
            o32.o42("123", o10[o133], "delete failed, not configurable");
        }
    },
    o156: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            Object.defineProperty(o10, o133, {value: 456, configurable: false, writable: true});
            Object.preventExtensions(o10);
            o32.o42(false, Object.isExtensible(o10), "NOT extensible");
            o32.o42(true, Object.isSealed(o10), "IS sealed");
            o32.o42(false, Object.isFrozen(o10), "NOT frozen, data writable");
        }
    },
    o157: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            Object.defineProperty(o10, o133, {value: 456, configurable: false, writable: false});
            Object.preventExtensions(o10);
            o32.o42(false, Object.isExtensible(o10), "NOT extensible");
            o32.o42(true, Object.isSealed(o10), "IS sealed");
            o32.o42(true, Object.isFrozen(o10) || Array.isArray(o10), "IS frozen, unless isArray (length writable)");
        }
    },
    o158: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            Object.defineProperty(o10, o133, {value: 456, configurable: false, writable: false});
            o10[234] = 345;
            Object.preventExtensions(o10);
            o32.o42(false, Object.isExtensible(o10), "NOT extensible");
            o32.o42(false, Object.isSealed(o10), "NOT sealed, 234 configurable");
            o32.o42(false, Object.isFrozen(o10), "NOT frozen, 234 configurable/writable");
        }
    },

    o159: {
        name: "Test prototype value is used in sort",
        o25: function() {
            try {
                var o133 = 1;
                Object.defineProperty(Array.prototype, o133, {
                    value: 321,
                    writable: true, configurable: true, enumerable: true
                });

                var o10 = o0.o4();
                o10[0] = 10;
                o10.length = 3;
                o10.sort = Array.prototype.sort;
                o10.join = Array.prototype.join;
                o10.toString = Array.prototype.toString;

                o10.sort();
                o32.o42("10,321,", o10.toString(), "sort result mismatch?");
            } finally {
                delete Array.prototype[o133];
            }
        }
    },

    o160: {
      name: "Convert accessor to a data property for non-extensible object (WIN8 bug 463559) but for numeric property",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "1";

        Object.defineProperty(o10, o51, {
          get: function() { return 0; },
          set: function(o161) { o0.writeln("setter was called although it shouldn't"); },
          configurable: true
        });
        Object.preventExtensions(o10);
        var o161 = 1;
        Object.defineProperty(o10, o51, { value: o161, });

        var o35 = { value: o161, configurable: true, enumerable: false, writable: false };
        o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
        o32.o42(o161, o10[o51], "the property value is wrong");
        o32.o42(false, Object.isExtensible(o10), "isExtensible() changed");
      }
    },
};  // tests.

var o16 = {
    o162: {
        name: "obj",
        o20: function() {
            o0.o4 = function() {
                return {}; // a normal object
            };
        }
    },

    o163: {
        name: "arr",
        o20: function() {
            o0.o4 = function() {
                return []; // a normal array
            };
        }
    },

    o164: {
        name: "es5arr",
        o20: function() {
            o0.o4 = function() {
                var o165 = [];
                Object.defineProperty(o165, "12345", {
                    get: function() {
                        o0.writeln("dummy called");
                    },
                    configurable: true
                });
                delete o165[12345];
                return o165; // an ES5 array
            };
        }
    },

    o166: {
        name: "misc",
        o23: true, // Run misc tests only once
        o20: function() {
            o0.o4 = function() {
                return null; // Misc tests do not use helpers.getDummyObject
            };
        }
    }

};

o11.o15(o16, o21);
