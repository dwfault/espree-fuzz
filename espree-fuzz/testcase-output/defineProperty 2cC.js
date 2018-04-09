//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (typeof (o0) != "undefined") {
  o0.o1("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

var o2 = {
  // Note: each test has name (string) and body (function) properties. 
  //       Success is when the body does not throw, failure -- when it throws.

  o3: {
    o2: "8.12.9.4.a (variation 1): define generic property, check default attrbitues",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo02";
      var o9 = {};
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: undefined, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o13: {
    name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo03";
      var o9 = { value: 0 };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 0, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o14: {
    name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo02_v3";
      var o9 = { configurable: true, writable: false };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: undefined, configurable: true, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o15: {
    name: "8.12.9.4.b: define accessor property, check default attrbitues",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo04";
      var getter = function () { return this.o16 };
      var o9 = { get: getter };
      Object.defineProperty(o5, o8, o9);
      var o10 = { get: getter, set: undefined, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o17: {
    name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
    o4: function () {
      var o8 = "foo05";
      var o5 = { o18: 1 };
      var o9 = {};
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: true, value: 1, configurable: true, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o19: {
    name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
    o4: function () {
      var o8 = "foo06";
      var o5 = { o20: 1 };
      var o9 = { value: 1 };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: true, value: 1, configurable: true, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same

  o21: {
    name: "8.12.9.7.a: re-define property: current descriptor is not configurable and descriptor is configurable, check that it throws TypeError",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo07";
      var o9 = { value: 0, configurable: false };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1, configurable: true };
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
    }
  },

  o24: {
    name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo08";
      var o9 = { value: 0 };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1, enumerable: true };
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
    }
  },

  o25: {
    name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo09";
      var o9 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1, writable: false };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 1, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o26: {
    name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo10";
      var o9 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1, enumerable: false, writable: false };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 1, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o27: {
    name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo11";
      var o9 = { value: 0, configurable: true };
      Object.defineProperty(o5, o8, o9);
      o9 = { enumerable: true }; // change enumerable to make sure that descriptor is different from current.
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 0, configurable: true, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same
  // - descriptor.IsData != current.IsData

  o28: {
    name: "8.12.9.9.a: re-define property: descriptor.IsData != current.IsData and current is not configurable, check that it throws TypeError",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo12";
      var o9 = { value: 0, configurable: false };
      Object.defineProperty(o5, o8, o9);
      o9 = { get: function () { return this.o16; } };
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
    }
  },

  o29: {
    name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo13";
      var o9 = { value: 0, configurable: true, enumerable: true };
      Object.defineProperty(o5, o8, o9);
      var getter = function() { return this.o16; };
      o9 = { get: getter };
      Object.defineProperty(o5, o8, o9);
      var o10 = { get: getter, set: undefined, configurable: true, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o30: {
    name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo14";
      var o9 = { value: 0, configurable: true, enumerable: false };
      Object.defineProperty(o5, o8, o9);
      var getter = function () { return this.o16; };
      o9 = { get: getter };
      Object.defineProperty(o5, o8, o9);
      var o10 = { get: getter, set: undefined, configurable: true, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o31: {
    name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo15";
      var o9 = { value: 0, configurable: true, enumerable: true };
      Object.defineProperty(o5, o8, o9);
      var getter = function () { return this.o16; };
      o9 = { get: getter, configurable: false };
      Object.defineProperty(o5, o8, o9);
      var o10 = { get: getter, set: undefined, configurable: false, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o32: {
    name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo16";
      var o9 = {
        set: function (o33) { o6.writeln("setter was called"); this.o16 = o33; },
        configurable: true,
        enumerable: true
      };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1 };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 1, configurable: true, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o34: {
    name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo17";
      var o9 = {
        set: function (o33) { o6.writeln("setter was called"); this.o16 = o33; },
        configurable: true,
        enumerable: false
      };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1 };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 1, configurable: true, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o35: {
    name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo18";
      var o9 = {
        set: function (o33) { o6.writeln("setter was called"); this.o16 = o33; },
        configurable: true,
        enumerable: false
      };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1, configurable: false };
      Object.defineProperty(o5, o8, o9);
      // expected: configurable/enumerable = false/false.
      var o10 = { writable: false, value: 1, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o36: {
    name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo19";
      var o9 = {
        set: function (o33) { o6.writeln("setter was called"); this.o16 = o33; },
        configurable: true,
        enumerable: true
      };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1, enumerable: false };
      Object.defineProperty(o5, o8, o9);
      // expected: configurable/enumerable = true/false.
      var o10 = { writable: false, value: 1, configurable: true, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same
  // - descriptor is data, current is data

  o37: {
    name: "8.12.9.10.a (variation 1): re-define data property: current is not configurable/not writable and descriptor writable is absent/value is same",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo20";
      var o9 = { value: 1 };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 1 };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 1, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o38: {
    name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo21";
      var o9 = { value: 1 };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 2, writable: true };
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
      return true;
    }
  },

  o39: {
    name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo22";
      var o9 = { value: 1 };
      Object.defineProperty(o5, o8, o9);
      o9 = { value: 2, writable: false };
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
    }
  },

  o40: {
    name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
    o4: function () {
      var o8 = "foo23";
      var o5 = { o41: 1 };
      var o9 = { value: 2, writable: false };
      Object.defineProperty(o5, o8, o9);
      var o10 = { writable: false, value: 2, configurable: true, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

// where we are:
// - re-define
// - desc is not empty
// - desc and current are not the same
// - descriptor is accessor, current is accessor

  o42: {
    name: "Test: 8.12.9.11 (variation 1): re-define accessor property: current configurable is true: valid case",
    o4: function () {
      var o8 = "foo24";
      var o5 = { 
        get o43() { return this.o16; }, 
        set o43(o33) { o6.writeln("old setter"); this.o16 = o33; } 
      };
      var o44 = function() { return 2; };
      var o45 = function(o33) { o6.writeln("new setter"); }
      var o9 = { get: o44, set: o45 };
      Object.defineProperty(o5, o8, o9);
      var o10 = { get: o44,  set: o45, configurable: true, enumerable: true };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o46: {
    name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
    o4: function () {
      var o8 = "foo25";
      var o5 = o6.o7();
      var o9 = { set: function(o33) { o6.writeln("old setter"); this.o16 = o33; } };
      Object.defineProperty(o5, o8, o9);

      o9 = { set: function(o33) { o6.writeln("new setter"); } };
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
    }
  },

  o47: {
    name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
    o4: function () {
      var o8 = "foo26";
      var o5 = o6.o7();
      var o9 = { get: function() { return this.o16; }, };
      Object.defineProperty(o5, o8, o9);

      o9 = { get: function() { o6.writeln("new getter"); return 2; } };
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
    }
  },

  o48: {
    name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
    o4: function () {
      var o8 = "foo27";
      var o5 = o6.o7();
      var setter = function(o33) { o6.writeln("setter") }; 
      var o9 = { set: setter };
      Object.defineProperty(o5, o8, o9);

      o9 = { get: undefined, set: setter };
      Object.defineProperty(o5, o8, o9);
      var o10 = { get: undefined, set: setter, configurable: false, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o49: {
    name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
    o4: function () {
      // define a data property.
      var o8 = "foo28";
      var o5 = o6.o7();
      var o9 = { value: 1, configurable: true };
      Object.defineProperty(o5, o8, o9);

      // re-define the property to be accessor property.
      var o50 = "";
      var getter = function() { o50 += "getter was called."; return this.o16; }
      var setter = function(o33) { o50 += "setter was called."; this.o16 = o33; }; 
      o9 = { get: getter, set: setter };
      Object.defineProperty(o5, o8, o9);

      // set the value and get it.
      var o51 = 2;
      o5[o8] = o51;
      var o52 = o5[o8];

      // validate.
      var o10 = { get: getter, set: setter, configurable: true, enumerable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
      o11.o12("setter was called.getter was called.", o50, "wrong log");
      o11.o12(o51, o52, "wrong value");
    }
  },

  o53: {
    name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
    o4: function () {
      o11.o22(
        function() { Object.defineProperty([], "length", {configurable: false, get: function() {return 2;}}); },
        o23);
      o11.o22(
        function() { Object.defineProperty(Array.prototype, "length", {configurable: false, get: function() {return 2;}}); },
        o23);
    }
  },

  // Where we are: some tests for specific issues.
  o54: {
    name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo30";
      var o9 = { get: undefined };
      Object.defineProperty(o5, o8, o9);
      o11.o12(undefined, o5[o8]);
    }
  },
  
  o55: {
    name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo31";
      var o9 = { set: undefined };
      Object.defineProperty(o5, o8, o9);
      o5[o8] = 1; // Make sure this does not throw.
      o11.o12(undefined, o5[o8]); // Just in case try to access the property.
    }
  },

  o56: {
    name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo32";
      var o9 = { configurable: true, value: 0 };
      Object.defineProperty(o5, o8, o9);

      o9 = { get: undefined };
      Object.defineProperty(o5, o8, o9);
      o11.o12(undefined, o5[o8]);
    }
  },

  o57: {
    name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "foo33";
      var o9 = { configurable: true, value: 0 };
      Object.defineProperty(o5, o8, o9);

      o9 = { set: undefined };
      Object.defineProperty(o5, o8, o9);
      o5[o8] = 1; // Make sure this does not throw.
      o11.o12(undefined, o5[o8]); // Just in case try to access the property.
    }
  },

  o58: {
    name: "Convert accessor to a data property for non-extensible object (WIN8 bug 463559)",
    o4: function () {
      var o5 = o6.o7();
      var o8 = "x";

      Object.defineProperty(o5, o8, { 
        get: function() { return 0; },
        set: function(o59) { o6.writeln("setter was called although it shouldn't"); },
        configurable: true
      });
      Object.preventExtensions(o5);
      var o59 = 1;
      Object.defineProperty(o5, o8, { value: o59, });

      var o10 = { value: o59, configurable: true, enumerable: false, writable: false };
      o11.o12(o10, Object.getOwnPropertyDescriptor(o5, o8), "wrong value of getOwnPropertyDescriptor");
      o11.o12(o59, o5[o8], "the property value is wrong");
      o11.o12(false, Object.isExtensible(o5), "isExtensible() changed");
    }
  },

  // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window), 
  //       it should in the very end.
  o60: {
    name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
    o4: function () {
      var o5 = o6.o7();
      Object.preventExtensions(o5);
      var o8 = "foo01";
      var o9 = {};
      o11.o22(function() { Object.defineProperty(o5, o8, o9); }, o23);
    }
  }

}; // tests.

o61.o62(o2);
