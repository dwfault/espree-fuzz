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
      var o6 = "", o7;
      for (o7 = 0; o7 < arguments.length; o7 += 1) {
        o6 = o6.concat(arguments[o7])
      }
      if (!o2()) {
        o11.o12(o6);
      } else {
        o3.writeln(o6);
        o3.writeln("<br/>");
      }
    },

    o13: function o13(o14) {
      var name;
      for (name in o14) {
        this.writeln(name, o14.hasOwnProperty(name) ? "" : " (inherited)", ": ", o14[name]);
      }
    }
  }
} (); // helpers module.

var o17 = function o17() {
  var o18 = 0;
  var o19 = 0;
  var o20;

  return {
    // Runs provided tests.
    // passes is a collection of {name, prep}, where prep is a function to prepare for the pass.
    // The 'testsToRun' is an object that has enumerable properties,
    // each property is an object that has 'name' and 'body' properties.
    o21: function o21(o22, o23) {
      for (var o24 in o22) {
        var o25 = o22[o24];
        o20 = o25.name;
        if (o25.o26) {
            o25.o26();
        }
        for (var o7 in o23) {
            var test = o28[o7];

            //
            // * If test.disabled (e.g., temp bug), skip it.
            // * If test.pass specifies a pass name, only run it for that pass.
            // * If test.pass not defined, run it for any non "runonce" pass.
            //
            if (!test.o29 && (test.o25 === o20 || (!test.o25 && !o25.o30))) {
                this.o31(o7, test.name, test.o32);
            }
        }
      }

      o0.writeln("Summary of tests: total executed: ", o18,
        "; passed: ", o19, "; failed: ", o18 - o19);
    },

    // Runs test body catching all exceptions.
    // Result: prints PASSED/FAILED to the output.
    o31: function o31(o33, o34, o35) {
      o0.writeln("*** ", o20, " (", o33, "): ", o34);

      var o36 = true;
      try {
        o35();
      } catch (o37) {
        var o38 = o37.o38 !== undefined ? o37.o38 : o37;
        o0.writeln("Test threw exception: ", o38);
        o36 = false;
      }
      if (o36) {
        o0.writeln("PASSED");
        ++o19;
      } else {
        o0.writeln("FAILED");
      }

      ++o18;
    }
  }
}(); // testRunner.

var o40 = function o40() {
  // private
  var isObject = function isObject(o42) {
    return o42 instanceof Object && typeof o42 !== "function";
  };

  var o44 = function o44(o45, o46) {
    if (isObject(o45)) {
      if (!isObject(o46)) return "actual is not an object";
      var o47 = 0, o48 = 0;
      for (var o7 in o45) {
        var o49 = o44(o45[o7], o46[o7]);
        if (o49 !== true) return o49;
        ++o47;
      }
      for (var o7 in o46) {
        ++o48;
      }
      if (o47 !== o48) {
        return "actual has different number of fields than expected";
      }
      return true;
    } else {
      if (isObject(o46)) return "actual is an object";
      if (o45 === o46) return true;
      return "expected: " + o45 + " actual: " + o46;
    }
  };

  var o50 = function o50(o51, o38) {
    if (o38 !== undefined) {
      o51 += ": " + o38;
    }
    return o51;
  }

  return {
    // Performs deep comparison of arguments.
    // This works for objects and simple types.
    // TODO: account for other types?
    // TODO: account for missing vs undefined fields.
    o52: function o52(o45, o46, o38) {
      var o49 = o44(o45, o46);
      if (o49 !== true) {
        throw o50("assert.areEqual failed: " + o49, o38);
      }
    },

    o53: function o53(o45, o46, o38) {
      var o49 = o44(o45, o46);
      if (o49 === true) {
        throw o50("assert.areNotEqual failed", o38);
      }
    },

    // Makes sure that the function specified by the 'testFunction' parameter
    // throws the exception specified by the 'expectedException' parameter.
    // Note: currently we check only for specific exception and not "all exceptions derived from specified".
    // Example:
    // assert.throws(function() { eval("{"); }, SyntaxError, "expected SyntaxError")
    o54: function o54(o55, o56, o38) {
      var o57 = null;
      try {
        o55();
      } catch (o37) {
        o57 = o37;
      }
      if (!(o57 instanceof Object && o57.constructor === o56)) {
        var o59 = o56.toString().replace(/\n/g, "").replace(/.*function (.*)\(.*/g, "$1");
        throw o50("assert.throws failed: expected: " + o59 + ", actual: " + o57, o38);
      }
    },

    // Can be used to fail the test.
    o62: function o62(o38) {
      throw o38;
    }
  }
}(); // assert.

var o28 = {
    // Note: each test has name (string) and body (function) properties.
    //       Success is when the body does not throw, failure -- when it throws.

    //---------------------- normal identifier property names -------------------------------
    o63: {
      name: "8.12.9.4.a (variation 1): define generic property, check default attrbitues",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo02";
        var o65 = {};
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: undefined, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o72: {
      name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo03";
        var o65 = { value: 0 };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 0, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o73: {
      name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo02";
        var o65 = { configurable: true, writable: false };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: undefined, configurable: true, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o74: {
      name: "8.12.9.4.b: define accessor property, check default attrbitues",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo04";
        var getter = function () { return this.o76 };
        var o65 = { get: getter };
        Object.defineProperty(o14, o64, o65);
        var o45 = { get: getter, set: undefined, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o79: {
      name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
      o32: function () {
        var o64 = "foo05";
        var o14 = { o80: 1 };
        var o65 = {};
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: true, value: 1, configurable: true, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o81: {
      name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
      o32: function () {
        var o64 = "foo06";
        var o14 = { o82: 1 };
        var o65 = { value: 1 };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: true, value: 1, configurable: true, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same

    o83: {
      name: "8.12.9.7.a: re-define property: current descriptor is not configurable and descriptor is configurable, check that it throws TypeError",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo07";
        var o65 = { value: 0, configurable: false };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1, configurable: true };
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
      }
    },

    o85: {
      name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo08";
        var o65 = { value: 0 };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1, enumerable: true };
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
      }
    },

    o86: {
      name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo09";
        var o65 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1, writable: false };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o87: {
      name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo10";
        var o65 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1, enumerable: false, writable: false };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o88: {
      name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo11";
        var o65 = { value: 0, configurable: true };
        Object.defineProperty(o14, o64, o65);
        o65 = { enumerable: true }; // change enumerable to make sure that descriptor is different from current.
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 0, configurable: true, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor.IsData != current.IsData

    o89: {
      name: "8.12.9.9.a: re-define property: descriptor.IsData != current.IsData and current is not configurable, check that it throws TypeError",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo12";
        var o65 = { value: 0, configurable: false };
        Object.defineProperty(o14, o64, o65);
        o65 = { get: function () { return this.o76; } };
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
      }
    },

    o90: {
      name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo13";
        var o65 = { value: 0, configurable: true, enumerable: true };
        Object.defineProperty(o14, o64, o65);
        var getter = function() { return this.o76; };
        o65 = { get: getter };
        Object.defineProperty(o14, o64, o65);
        var o45 = { get: getter, set: undefined, configurable: true, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o91: {
      name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo14";
        var o65 = { value: 0, configurable: true, enumerable: false };
        Object.defineProperty(o14, o64, o65);
        var getter = function () { return this.o76; };
        o65 = { get: getter };
        Object.defineProperty(o14, o64, o65);
        var o45 = { get: getter, set: undefined, configurable: true, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o92: {
      name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo15";
        var o65 = { value: 0, configurable: true, enumerable: true };
        Object.defineProperty(o14, o64, o65);
        var getter = function () { return this.o76; };
        o65 = { get: getter, configurable: false };
        Object.defineProperty(o14, o64, o65);
        var o45 = { get: getter, set: undefined, configurable: false, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o93: {
      name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo16";
        var o65 = {
          set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
          configurable: true,
          enumerable: true
        };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1 };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 1, configurable: true, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o95: {
      name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo17";
        var o65 = {
          set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
          configurable: true,
          enumerable: false
        };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1 };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 1, configurable: true, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o96: {
      name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo18";
        var o65 = {
          set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
          configurable: true,
          enumerable: false
        };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1, configurable: false };
        Object.defineProperty(o14, o64, o65);
        // expected: configurable/enumerable = false/false.
        var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o97: {
      name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo19";
        var o65 = {
          set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
          configurable: true,
          enumerable: true
        };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1, enumerable: false };
        Object.defineProperty(o14, o64, o65);
        // expected: configurable/enumerable = true/false.
        var o45 = { writable: false, value: 1, configurable: true, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is data, current is data

    o98: {
      name: "8.12.9.10.a (variation 1): re-define data property: current is not configurable/not writable and descriptor writable is absent/value is same",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo20";
        var o65 = { value: 1 };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1 };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o99: {
      name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo21";
        var o65 = { value: 1 };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 2, writable: true };
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
        return true;
      }
    },

    o100: {
      name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo22";
        var o65 = { value: 1 };
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 2, writable: false };
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
      }
    },

    o101: {
      name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
      o32: function () {
        var o64 = "foo23";
        var o14 = { o102: 1 };
        var o65 = { value: 2, writable: false };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 2, configurable: true, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is accessor, current is accessor
    o103: {
      name: "Test: 8.12.9.11 (variation 1): re-define accessor property: current configurable is true: valid case",
      o32: function () {
        var o64 = "foo24";
        var o14 = {
          get o104() { return this.o76; },
          set o104(o94) { o0.writeln("old setter"); this.o76 = o94; }
        };
        var o105 = function() { return 2; };
        var o106 = function(o94) { o0.writeln("new setter"); }
        var o65 = { get: o105, set: o106 };
        Object.defineProperty(o14, o64, o65);
        var o45 = { get: o105,  set: o106, configurable: true, enumerable: true };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o107: {
      name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
      o32: function () {
        var o64 = "foo25";
        var o14 = o0.o4();
        var o65 = { set: function(o94) { o0.writeln("old setter"); this.o76 = o94; } };
        Object.defineProperty(o14, o64, o65);

        o65 = { set: function(o94) { o0.writeln("new setter"); } };
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
      }
    },

    o108: {
      name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
      o32: function () {
        var o64 = "foo26";
        var o14 = o0.o4();
        var o65 = { get: function() { return this.o76; }, };
        Object.defineProperty(o14, o64, o65);

        o65 = { get: function() { o0.writeln("new getter"); return 2; } };
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
      }
    },

    o109: {
      name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
      o32: function () {
        var o64 = "foo27";
        var o14 = o0.o4();
        var setter = function(o94) { o0.writeln("setter") };
        var o65 = { set: setter };
        Object.defineProperty(o14, o64, o65);

        o65 = { get: undefined, set: setter };
        Object.defineProperty(o14, o64, o65);
        var o45 = { get: undefined, set: setter, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    },

    o111: {
      name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
      o32: function () {
        // define a data property.
        var o64 = "foo28";
        var o14 = o0.o4();
        var o65 = { value: 1, configurable: true };
        Object.defineProperty(o14, o64, o65);

        // re-define the property to be accessor property.
        var o112 = "";
        var getter = function() { o112 += "getter was called."; return this.o76; }
        var setter = function(o94) { o112 += "setter was called."; this.o76 = o94; };
        o65 = { get: getter, set: setter };
        Object.defineProperty(o14, o64, o65);

        // set the value and get it.
        var o113 = 2;
        o14[o64] = o113;
        var o114 = o14[o64];

        // validate.
        var o45 = { get: getter, set: setter, configurable: true, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        o40.o52("setter was called.getter was called.", o112, "wrong log");
        o40.o52(o113, o114, "wrong value");
      }
    },

    o115: {
      name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
      o32: function () {
        o40.o54(
          function() { Object.defineProperty([], "length", {configurable: false, get: function() {return 2;}}); },
          o84);
        o40.o54(
          function() { Object.defineProperty(Array.prototype, "length", {configurable: false, get: function() {return 2;}}); },
          o84);
      }
    },

    // Where we are: some tests for specific issues.
    o118: {
      name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo30";
        var o65 = { get: undefined };
        Object.defineProperty(o14, o64, o65);
        o40.o52(undefined, o14[o64]);
      }
    },

    o119: {
      name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo31";
        var o65 = { set: undefined };
        Object.defineProperty(o14, o64, o65);
        o14[o64] = 1; // Make sure this does not throw.
        o40.o52(undefined, o14[o64]); // Just in case try to access the property.
      }
    },

    o120: {
      name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo32";
        var o65 = { configurable: true, value: 0 };
        Object.defineProperty(o14, o64, o65);

        o65 = { get: undefined };
        Object.defineProperty(o14, o64, o65);
        o40.o52(undefined, o14[o64]);
      }
    },

    o121: {
      name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo33";
        var o65 = { configurable: true, value: 0 };
        Object.defineProperty(o14, o64, o65);

        o65 = { set: undefined };
        Object.defineProperty(o14, o64, o65);
        o14[o64] = 1; // Make sure this does not throw.
        o40.o52(undefined, o14[o64]); // Just in case try to access the property.
      }
    },

    // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window),
    //       it should in the very end.
    o122: {
      name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
      o32: function () {
        var o14 = o0.o4();
        Object.preventExtensions(o14);
        var o64 = "foo01";
        var o65 = {};
        o40.o54(function() { Object.defineProperty(o14, o64, o65); }, o84);
      }
    },

    //---------------------- numeric property names -------------------------------
    o124: {
        name: "8.12.9.4.a (variation 1): define generic property, check default attrbitues",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "2";
            var o65 = {};
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: undefined, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o125: {
        name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "3";
            var o65 = { value: 0 };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 0, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o126: {
        name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "2";
            var o65 = { configurable: true, writable: false };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: undefined, configurable: true, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o127: {
        name: "8.12.9.4.b: define accessor property, check default attrbitues",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "4";
            var getter = function () { return this.o76 };
            var o65 = { get: getter };
            Object.defineProperty(o14, o64, o65);
            var o45 = { get: getter, set: undefined, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o128: {
        name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
        o32: function () {
            var o64 = "5";
            var o14 = { 5: 1 };
            var o65 = {};
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: true, value: 1, configurable: true, enumerable: true };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o129: {
        name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
        o32: function () {
            var o64 = "6";
            var o14 = { 6: 1 };
            var o65 = { value: 1 };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: true, value: 1, configurable: true, enumerable: true };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same

    o130: {
        name: "8.12.9.7.a: re-define property: current descriptor is not configurable and descriptor is configurable, check that it throws TypeError",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "7";
            var o65 = { value: 0, configurable: false };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1, configurable: true };
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
        }
    },

    o131: {
        name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "8";
            var o65 = { value: 0 };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1, enumerable: true };
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
        }
    },

    o132: {
        name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "9";
            var o65 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1, writable: false };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o133: {
        name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "10";
            var o65 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1, enumerable: false, writable: false };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o134: {
        name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "11";
            var o65 = { value: 0, configurable: true };
            Object.defineProperty(o14, o64, o65);
            o65 = { enumerable: true }; // change enumerable to make sure that descriptor is different from current.
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 0, configurable: true, enumerable: true };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor.IsData != current.IsData

    o135: {
        name: "8.12.9.9.a: re-define property: descriptor.IsData != current.IsData and current is not configurable, check that it throws TypeError",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "12";
            var o65 = { value: 0, configurable: false };
            Object.defineProperty(o14, o64, o65);
            o65 = { get: function () { return this.o76; } };
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
        }
    },

    o136: {
        name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "13";
            var o65 = { value: 0, configurable: true, enumerable: true };
            Object.defineProperty(o14, o64, o65);
            var getter = function () { return this.o76; };
            o65 = { get: getter };
            Object.defineProperty(o14, o64, o65);
            var o45 = { get: getter, set: undefined, configurable: true, enumerable: true };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o137: {
        name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "14";
            var o65 = { value: 0, configurable: true, enumerable: false };
            Object.defineProperty(o14, o64, o65);
            var getter = function () { return this.o76; };
            o65 = { get: getter };
            Object.defineProperty(o14, o64, o65);
            var o45 = { get: getter, set: undefined, configurable: true, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o138: {
        name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "15";
            var o65 = { value: 0, configurable: true, enumerable: true };
            Object.defineProperty(o14, o64, o65);
            var getter = function () { return this.o76; };
            o65 = { get: getter, configurable: false };
            Object.defineProperty(o14, o64, o65);
            var o45 = { get: getter, set: undefined, configurable: false, enumerable: true };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o139: {
        name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "16";
            var o65 = {
                set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
                configurable: true,
                enumerable: true
            };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1 };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 1, configurable: true, enumerable: true };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o140: {
        name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "17";
            var o65 = {
                set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
                configurable: true,
                enumerable: false
            };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1 };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 1, configurable: true, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o141: {
        name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "18";
            var o65 = {
                set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
                configurable: true,
                enumerable: false
            };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1, configurable: false };
            Object.defineProperty(o14, o64, o65);
            // expected: configurable/enumerable = false/false.
            var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o142: {
        name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "19";
            var o65 = {
                set: function (o94) { o0.writeln("setter was called"); this.o76 = o94; },
                configurable: true,
                enumerable: true
            };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1, enumerable: false };
            Object.defineProperty(o14, o64, o65);
            // expected: configurable/enumerable = true/false.
            var o45 = { writable: false, value: 1, configurable: true, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is data, current is data

    o143: {
        name: "8.12.9.10.a (variation 1): re-define data property: current is not configurable/not writable and descriptor writable is absent/value is same",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "20";
            var o65 = { value: 1 };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 1 };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o144: {
        name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "21";
            var o65 = { value: 1 };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 2, writable: true };
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
            return true;
        }
    },

    o145: {
        name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "22";
            var o65 = { value: 1 };
            Object.defineProperty(o14, o64, o65);
            o65 = { value: 2, writable: false };
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
        }
    },

    o146: {
        name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
        o32: function () {
            var o64 = "23";
            var o14 = { 23: 1 };
            var o65 = { value: 2, writable: false };
            Object.defineProperty(o14, o64, o65);
            var o45 = { writable: false, value: 2, configurable: true, enumerable: true };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is accessor, current is accessor

    o147: {
        name: "Test: 8.12.9.11 (variation 1): re-define accessor property: current configurable is true: valid case",
        o32: function () {
          var o64 = "24";
          var o14 = {
            get 24() { return this.o76; },
            set 24(o94) { o0.writeln("old setter"); this.o76 = o94; }
          };
          var o105 = function() { return 2; };
          var o106 = function(o94) { o0.writeln("new setter"); }
          var o65 = { get: o105, set: o106 };
          Object.defineProperty(o14, o64, o65);
          var o45 = { get: o105,  set: o106, configurable: true, enumerable: true };
          o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o148: {
        name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
        o32: function () {
            var o64 = "25";
            var o14 = o0.o4();
            var o65 = { set: function (o94) { o0.writeln("old setter"); this.o76 = o94; } };
            Object.defineProperty(o14, o64, o65);

            o65 = { set: function (o94) { o0.writeln("new setter"); } };
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
        }
    },

    o149: {
        name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
        o32: function () {
            var o64 = "26";
            var o14 = o0.o4();
            var o65 = { get: function () { return this.o76; } };
            Object.defineProperty(o14, o64, o65);

            o65 = { get: function () { o0.writeln("new getter"); return 2; } };
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
        }
    },

    o150: {
        name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
        o32: function () {
            var o64 = "27";
            var o14 = o0.o4();
            var setter = function (o94) { o0.writeln("setter") };
            var o65 = { set: setter };
            Object.defineProperty(o14, o64, o65);

            o65 = { get: undefined, set: setter };
            Object.defineProperty(o14, o64, o65);
            var o45 = { get: undefined, set: setter, configurable: false, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        }
    },

    o151: {
        name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
        o32: function () {
            // define a data property.
            var o64 = "28";
            var o14 = o0.o4();
            var o65 = { value: 1, configurable: true };
            Object.defineProperty(o14, o64, o65);

            // re-define the property to be accessor property.
            var o112 = "";
            var getter = function () { o112 += "getter was called."; return this.o76; }
            var setter = function (o94) { o112 += "setter was called."; this.o76 = o94; };
            o65 = { get: getter, set: setter };
            Object.defineProperty(o14, o64, o65);

            // set the value and get it.
            var o113 = 2;
            o14[o64] = o113;
            var o114 = o14[o64];

            // validate.
            var o45 = { get: getter, set: setter, configurable: true, enumerable: false };
            o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
            o40.o52("setter was called.getter was called.", o112, "wrong log");
            o40.o52(o113, o114, "wrong value");
        }
    },

    o152: {
        name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
        o32: function () {
            o40.o54(
        function () { Object.defineProperty([], "length", { configurable: false, get: function () { return 2; } }); },
        o84);
            o40.o54(
        function () { Object.defineProperty(Array.prototype, "length", { configurable: false, get: function () { return 2; } }); },
        o84);
        }
    },

    // Where we are: some tests for specific issues.
    o153: {
        name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "30";
            var o65 = { get: undefined };
            Object.defineProperty(o14, o64, o65);
            o40.o52(undefined, o14[o64]);
        }
    },

    o154: {
        name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "31";
            var o65 = { set: undefined };
            Object.defineProperty(o14, o64, o65);
            o14[o64] = 1; // Make sure this does not throw.
            o40.o52(undefined, o14[o64]); // Just in case try to access the property.
        }
    },

    o155: {
        name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "32";
            var o65 = { configurable: true, value: 0 };
            Object.defineProperty(o14, o64, o65);

            o65 = { get: undefined };
            Object.defineProperty(o14, o64, o65);
            o40.o52(undefined, o14[o64]);
        }
    },

    o156: {
        name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
        o32: function () {
            var o14 = o0.o4();
            var o64 = "33";
            var o65 = { configurable: true, value: 0 };
            Object.defineProperty(o14, o64, o65);

            o65 = { set: undefined };
            Object.defineProperty(o14, o64, o65);
            o14[o64] = 1; // Make sure this does not throw.
            o40.o52(undefined, o14[o64]); // Just in case try to access the property.
        }
    },

    // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window),
    //       it should in the very end.
    o157: {
        name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
        o32: function () {
            var o14 = o0.o4();
            Object.preventExtensions(o14);
            var o64 = "1";
            var o65 = {};
            o40.o54(function () { Object.defineProperty(o14, o64, o65); }, o84);
        }
    },

    // --------------------- misc adhoc tests -------------------------------------
    o158: {
        name: "set property whose writable is false",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 17;
            o14[o159] = 100;
            Object.defineProperty(o14, o159, {writable: false});
            o14[o159] = 200; // should have no effect
            o40.o52(100, o14[o159]);
        }
    },

    o160: {
        name: "delete index property",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 123;

            o40.o52(true, delete o14[1], "delete non-exist property should return true");

            o14[o159] = 123;
            o40.o52(true, delete o14[o159], "delete this property should return true");
            o40.o52(undefined, o14[o159], "deleted property value should become undefined");

            Object.defineProperty(o14, o159, {get:function(){return 123;}, configurable: true});
            o40.o52(123, o14[o159], "Property value should be from getter");
            o40.o52(true, delete o14[o159], "delete this property should return true");
            o40.o52(undefined, o14[o159], "deleted property value should become undefined");

            Object.defineProperty(o14, o159, {value: 123, configurable: false});
            o40.o52(123, o14[o159], "Property value should be the value");
            o40.o52(false, delete o14[o159], "delete this property should return false, not configurable");
            o40.o52(123, o14[o159], "Property value should not be changed");
        }
    },

    o161: {
        name: "delete a data property then set",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 303;
            Object.defineProperty(o14, o159, {
                value: 100,
                configurable: true
            });
            o40.o52(delete o14[o159], true, "delete should succeed on configurable data property");
            o14[o159] = 200;
            o40.o52(200, o14[o159]);
        }
    },
    o162: {
        name: "delete a getter property then set",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 303;
            Object.defineProperty(o14, o159, {
                get: function() { return 100; },
                configurable: true
            });
            o40.o52(true, delete o14[o159], "delete should succeed on configurable accessor property");
            o14[o159] = 200;
            o40.o52(200, o14[o159]);
        }
    },
    o163: {
        name: "delete a setter property then set",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 303;
            Object.defineProperty(o14, o159, {
                set: function(o94) { return 100; },
                configurable: true
            });
            o40.o52(true, delete o14[o159], "delete should succeed on configurable accessor property");
            o14[o159] = 200;
            o40.o52(200, o14[o159]);
        }
    },

    o164: {
        name: "Set a property while prototype has a getter",
        o32: function() {
            var o159 = "abc";
            try {
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o14 = o0.o4();
                o14[o159] = 200; // should have no effect since proto only has a getter
                o40.o52(100, o14[o159]);
            } finally {
                delete Object.prototype[o159];
            }
        }
    },
    o165: {
        name: "Set a property while prototype has a getter",
        o32: function() {
            var o159 = "306"; // Without quote it fails on array. Covered by 310_i
            try {
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o14 = o0.o4();
                o14[o159] = 200; // should have no effect since proto only has a getter
                o40.o52(100, o14[o159]);
            } finally {
                delete Object.prototype[o159];
            }
        }
    },

    o166: {
        name: "Define a property while prototype has a getter",
        o32: function() {
            var o159 = "abc";
            try {
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o14 = o0.o4();
                Object.defineProperty(o14, o159, { value: 200 });
                o40.o52(200, o14[o159]); //DefineOwnProperty succeeds
            } finally {
                delete Object.prototype[o159];
            }
        }
    },
    o167: {
        name: "Define a property while prototype has a getter",
        o32: function() {
            var o159 = 307;
            try {
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o14 = o0.o4();
                Object.defineProperty(o14, o159, { value: 200 });
                o40.o52(200, o14[o159]); //DefineOwnProperty succeeds
            } finally {
                delete Object.prototype[o159];
            }
        }
    },

    o168: {
        o29: true, // !!! Disable due to bug (to be opened) causing assertion !!!
        o25: "misc",
        name: "Set a property via object literal while prototype has a getter",
        o32: function() {
            var o159 = "abc";
            try {
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o14 = {o169: 200};
                o40.o52(100, o14[o159]);
            } finally {
                delete Object.prototype[o159];
            }
        }
    },
    o170: {
        o25: "misc",
        name: "Set a property via object literal while prototype has a getter",
        o32: function() {
            var o159 = 308;
            try {
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o14 = {308: 200}; // succeeds since object literals do not check prototypes
                o40.o52(200, o14[o159]);
            } finally {
                delete Object.prototype[o159];
            }
        }
    },

    o171: {
        o29: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o25: "misc",
        name: "Set a property while prototype property is not writable",
        o32: function() {
            try {
                Object.defineProperty(Object.prototype, 1, {
                    value: 100,
                    writable: false,
                    configurable: true
                });

                var o14 = [];
                o40.o52(100, o14[1]);
                o14[1] = 200; // should have no effect since proto[1] is not writable
                o40.o52(100, o14[1]);
            } finally {
                delete Object.prototype[1];
            }
        }
    },

    o172: {
        o29: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o25: "misc",
        name: "Set a property while prototype property is a getter",
        o32: function() {
            try {
                Object.defineProperty(Object.prototype, 1, {
                    get: function () { return 100; },
                    configurable: true
                });

                var o14 = [];
                o40.o52(100, o14[1]);
                o14[1] = 200; // should have no effect since proto[1] has only getter
                o40.o52(100, o14[1]);
            } finally {
                delete Object.prototype[1];
            }
        }
    },

    o173: {
        o29: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o25: "misc",
        name: "Set a property while prototype property is getter/setter",
        o32: function() {
            try {
                var o174 = 100;
                Object.defineProperty(Object.prototype, 1, {
                    get: function () { return o174; },
                    set: function(o94) { o174 = o94 + 300; },
                    configurable: true
                });

                var o14 = [];
                o40.o52(100, o14[1]);
                o14[1] = 200; // should call setter
                o40.o52(500, o14[1]);
            } finally {
                delete Object.prototype[1];
            }
        }
    },

    o175: {
        name: "Test getter/setter on prototype receives the right this arg",
        o32: function() {
            try {
                var o159 = "1"; //avoid array fast path for now
                Object.prototype.o174 = 123;
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return this.o174; },
                    set: function (o94) { this.o174 = o94 + 300; },
                    configurable: true
                });

                var o14 = o0.o4();
                o40.o52(123, o14[o159], "Should read data on prototype");
                o14[o159] = 200; // should call proto setter on o
                o40.o52(500, o14.o174, "setter should set data on o");
                o40.o52(500, o14[o159], "Should read data on o");
                o40.o52(123, Object.prototype.o174, "proto data unchanged");
            } finally {
                delete Object.prototype[o159];
                delete Object.prototype.o174;
            }
        }
    },
    o176: {
        name: "Test getter on prototype receives the right this arg",
        o32: function() {
            try {
                var o159 = "1"; //avoid array fast path for now
                Object.prototype.o174 = 123;
                Object.defineProperty(Object.prototype, o159, {
                    get: function () { return this.o174; },
                    configurable: true
                });

                var o14 = o0.o4();
                o14.length = 10; // Makes propName in length range, also prepare for indexOf
                o40.o52(123, o14[o159], "Should read data on prototype");
                o14.o174 = 456;
                o40.o52(456, o14[o159], "Should read data on o");
                var o7 = Array.prototype.indexOf.apply(o14, [456]);
                o40.o52(o159, o7.toString(), "getter should find data on o, not on prototype!");
            } finally {
                delete Object.prototype[o159];
                delete Object.prototype.o174;
            }
        }
    },

    o179: {
        name: "preventExtensions with index property",
        o32: function() {
            var o14 = o0.o4();
            o14[1] = 1;
            o40.o52(1, o14[1]);
            o40.o52(true, Object.isExtensible(o14), "default is extensible");
            o40.o52(false, Object.isSealed(o14), "default not sealed");
            o40.o52(false, Object.isFrozen(o14), "default not frozen");

            Object.preventExtensions(o14);
            o40.o52(false, Object.isExtensible(o14), "now NOT extensible");
            o40.o52(false, Object.isSealed(o14), "still not sealed, o[1] configurable");
            o40.o52(false, Object.isFrozen(o14), "still not frozen, o[1] configurable");

            o14[1] = 11; // should succeed
            o40.o52(11, o14[1], "write should succeed");
            o14[2] = 2; // should fail
            o40.o52(undefined, o14[2], "extend should fail");

            // verify unchanged
            o40.o52(false, Object.isExtensible(o14), "extensible not changed");
            o40.o52(false, Object.isSealed(o14), "sealed not changed");
            o40.o52(false, Object.isFrozen(o14), "frozen not changed");
        }
    },
    o183: {
        name: "seal with index property",
        o32: function() {
            var o14 = o0.o4();
            o14[1] = 1;

            Object.seal(o14);
            o40.o52(false, Object.isExtensible(o14), "now NOT extensible");
            o40.o52(true, Object.isSealed(o14), "now IS sealed");
            o40.o52(false, Object.isFrozen(o14), "still not frozen, o[1] writable");

            o14[1] = 11; // should succeed
            o40.o52(11, o14[1], "write should succeed");
            o40.o52(false, delete o14[1], "delete should fail, object sealed");
            o40.o52(11, o14[1], "delete should fail");
            o14[2] = 2; // should fail
            o40.o52(undefined, o14[2], "extend should fail");

            // verify unchanged
            o40.o52(false, Object.isExtensible(o14), "extensible not changed");
            o40.o52(true, Object.isSealed(o14), "sealed not changed");
            o40.o52(false, Object.isFrozen(o14), "frozen not changed");
        }
    },
    o185: {
        name: "freeze with index property",
        o32: function() {
            var o14 = o0.o4();
            o14[1] = 1;

            Object.freeze(o14);
            o40.o52(false, Object.isExtensible(o14), "now NOT extensible");
            o40.o52(true, Object.isSealed(o14), "now IS sealed");
            o40.o52(true, Object.isFrozen(o14), "now IS frozen");

            o14[1] = 11; // should fail
            o40.o52(1, o14[1], "write should fail");
            o40.o52(false, delete o14[1], "delete should fail, object sealed");
            o40.o52(1, o14[1], "delete should fail");
            o14[2] = 2; // should fail
            o40.o52(undefined, o14[2], "extend should fail");

            // verify unchanged
            o40.o52(false, Object.isExtensible(o14), "extensible not changed");
            o40.o52(true, Object.isSealed(o14), "sealed not changed");
            o40.o52(true, Object.isFrozen(o14), "frozen not changed");
        }
    },

    o187: {
        name: "preventExtensions on empty object -> isSealed and isFrozen",
        o32: function() {
            var o14 = o0.o4();
            Object.preventExtensions(o14); // Haven't set any item yet, objectArray is null
            o40.o52(false, Object.isExtensible(o14), "NOT extensible");
            o40.o52(true, Object.isSealed(o14), "IS sealed");
            o40.o52(true, Object.isFrozen(o14) || Array.isArray(o14), "IS frozen, unless isArray (length writable)");

            o14[1] = 11;
            o40.o52(undefined, o14[1], "Write failed, not extensible");
        }
    },
    o189: {
        name: "preventExtensions on object with an accessor -> isSealed and isFrozen",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 123;
            Object.defineProperty(o14, o159, {get: function(){ return "123"; }, configurable: false});
            Object.preventExtensions(o14);
            o40.o52(false, Object.isExtensible(o14), "NOT extensible");
            o40.o52(true, Object.isSealed(o14), "IS sealed");
            o40.o52(true, Object.isFrozen(o14) || Array.isArray(o14), "IS frozen, unless isArray (length writable)");

            o14[1] = 11;
            o40.o52(undefined, o14[1], "Write failed, not extensible");
            o40.o52(false, delete o14[o159], "delete should fail, not configurable");
            o40.o52("123", o14[o159], "delete failed, not configurable");
        }
    },
    o190: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 123;
            Object.defineProperty(o14, o159, {value: 456, configurable: false, writable: true});
            Object.preventExtensions(o14);
            o40.o52(false, Object.isExtensible(o14), "NOT extensible");
            o40.o52(true, Object.isSealed(o14), "IS sealed");
            o40.o52(false, Object.isFrozen(o14), "NOT frozen, data writable");
        }
    },
    o191: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 123;
            Object.defineProperty(o14, o159, {value: 456, configurable: false, writable: false});
            Object.preventExtensions(o14);
            o40.o52(false, Object.isExtensible(o14), "NOT extensible");
            o40.o52(true, Object.isSealed(o14), "IS sealed");
            o40.o52(true, Object.isFrozen(o14) || Array.isArray(o14), "IS frozen, unless isArray (length writable)");
        }
    },
    o192: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o32: function() {
            var o14 = o0.o4();
            var o159 = 123;
            Object.defineProperty(o14, o159, {value: 456, configurable: false, writable: false});
            o14[234] = 345;
            Object.preventExtensions(o14);
            o40.o52(false, Object.isExtensible(o14), "NOT extensible");
            o40.o52(false, Object.isSealed(o14), "NOT sealed, 234 configurable");
            o40.o52(false, Object.isFrozen(o14), "NOT frozen, 234 configurable/writable");
        }
    },

    o193: {
        name: "Test prototype value is used in sort",
        o32: function() {
            try {
                var o159 = 1;
                Object.defineProperty(Array.prototype, o159, {
                    value: 321,
                    writable: true, configurable: true, enumerable: true
                });

                var o14 = o0.o4();
                o14[0] = 10;
                o14.length = 3;
                o14.sort = Array.prototype.sort;
                o14.join = Array.prototype.join;
                o14.toString = Array.prototype.toString;

                o14.sort();
                o40.o52("10,321,", o14.toString(), "sort result mismatch?");
            } finally {
                delete Array.prototype[o159];
            }
        }
    },

    o196: {
      name: "Convert accessor to a data property for non-extensible object (WIN8 bug 463559) but for numeric property",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "1";

        Object.defineProperty(o14, o64, {
          get: function() { return 0; },
          set: function(o197) { o0.writeln("setter was called although it shouldn't"); },
          configurable: true
        });
        Object.preventExtensions(o14);
        var o197 = 1;
        Object.defineProperty(o14, o64, { value: o197, });

        var o45 = { value: o197, configurable: true, enumerable: false, writable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        o40.o52(o197, o14[o64], "the property value is wrong");
        o40.o52(false, Object.isExtensible(o14), "isExtensible() changed");
      }
    },
};  // tests.

var o22 = {
    o198: {
        name: "obj",
        o26: function() {
            o0.o4 = function() {
                return {}; // a normal object
            };
        }
    },

    o199: {
        name: "arr",
        o26: function() {
            o0.o4 = function() {
                return []; // a normal array
            };
        }
    },

    o200: {
        name: "es5arr",
        o26: function() {
            o0.o4 = function() {
                var o201 = [];
                Object.defineProperty(o201, "12345", {
                    get: function() {
                        o0.writeln("dummy called");
                    },
                    configurable: true
                });
                delete o201[12345];
                return o201; // an ES5 array
            };
        }
    },

    o202: {
        name: "misc",
        o30: true, // Run misc tests only once
        o26: function() {
            o0.o4 = function() {
                return null; // Misc tests do not use helpers.getDummyObject
            };
        }
    }

};

o17.o21(o22, o28);
