//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o15 = function o0() {
  //private
  var o1 = "undefined";

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
} (this); // helpers module.

var o11 = function o11() try { try {
o82++;
}catch(e){} } catch(e) {}(); // testRunner.

var o8 = Promise.race(o26); // assert.

var o21 = {
    // Note: each test has name (string) and body (function) properties.
    //       Success is when the body does not throw, failure -- when it throws.

    //---------------------- normal identifier property names -------------------------------
    1.1: function () {try {
"use strict";
}catch(e){}
  try {
if (this.o573 > 0) {
    try {
this.o704 = new o304(160, 144, this.o570, this.o702, false, true);
}catch(e){}
  }
}catch(e){}
},

    o53: o25.next(),

    o54: {
      name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo02";
        var o52 = arguments[o13];
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: undefined, configurable: true, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o55: {
      name: "8.12.9.4.b: define accessor property, check default attrbitues",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo04";
        var getter = function () { try {
return this.o56
}catch(e){} };
        var o52 = { get: getter };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { get: getter, set: undefined, configurable: false, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o57: {
      name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
      o25: function () {
        var o51 = "foo05";
        var o10 = { o58: 1 };
        var o52 = {};
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o59: {
      name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
      o25: function () {
        var o51 = "foo06";
        var o10 = { o60: 1 };
        var o52 = { value: 1 };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same

    done: true,

    o63: {
      name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo08";
        var o52 = { value: 0 };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1, enumerable: true };
}catch(e){}
        try {
o32.o44(function() { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
      }
    },

    o64: {
      name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo09";
        var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1, writable: false };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o65: {
      name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo10";
        var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1, enumerable: false, writable: false };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o66: {
      name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo11";
        var o52 = { value: 0, configurable: true };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { enumerable: true };
}catch(e){} // change enumerable to make sure that descriptor is different from current.
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 0, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
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
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { get: function () { try {
return this.o56;
}catch(e){} } };
}catch(e){}
        try {
o32.o44(function() { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
      }
    },

    o68: {
      name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo13";
        var o52 = { value: 0, configurable: true, enumerable: true };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var getter = function() { try {
return this.o56;
}catch(e){} };
        try {
o52 = { get: getter };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { get: getter, set: undefined, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o69: {
      name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo14";
        var o52 = { value: 0, configurable: true, enumerable: false };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var getter = function () { try {
return this.o56;
}catch(e){} };
        try {
o52 = { get: getter };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { get: getter, set: undefined, configurable: true, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o70: {
      name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo15";
        var o52 = { value: 0, configurable: true, enumerable: true };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var getter = function () { try {
return this.o56;
}catch(e){} };
        try {
o52 = { get: getter, configurable: false };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { get: getter, set: undefined, configurable: false, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o71: {
      name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo16";
        var o52 = {
          set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
          configurable: true,
          enumerable: true
        };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1 };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 1, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o73: {
      name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo17";
        var o52 = {
          set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
          configurable: true,
          enumerable: false
        };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1 };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o74: {
      name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo18";
        var o52 = {
          set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
          configurable: true,
          enumerable: false
        };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1, configurable: false };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        // expected: configurable/enumerable = false/false.
        var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o75: {
      name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo19";
        var o52 = {
          set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
          configurable: true,
          enumerable: true
        };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1, enumerable: false };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        // expected: configurable/enumerable = true/false.
        var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    // where we are:
    // - re-define
    // - desc is not empty
    // - desc and current are not the same
    // - descriptor is data, current is data

    o771: function () {
        try {
o474.o606('/tmp');
}catch(e){}
    },

    o77: {
      name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo21";
        var o52 = { value: 1 };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 2, writable: true };
}catch(e){}
        try {
o32.o44(function() { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        try {
return true;
}catch(e){}
      }
    },

    o78: {
      name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo22";
        var o52 = { value: 1 };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 2, writable: false };
}catch(e){}
        try {
o32.o44(function() { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
      }
    },

    o79: {
      name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
      o25: function () {
        var o51 = "foo23";
        var o10 = { o80: 1 };
        var o52 = { value: 2, writable: false };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 2, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
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
          get o82() { try {
return this.o56;
}catch(e){} },
          set o82(o72) { try {
o0.writeln("old setter");
}catch(e){} try {
this.o56 = o72;
}catch(e){} }
        };
        var o83 = function() { try {
return 2;
}catch(e){} };
        var o84 = function(o72) { try {
o0.writeln("new setter");
}catch(e){} }
        var o52 = { get: o83, set: o84 };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { get: o83,  set: o84, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o85: {
      name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
      o25: function () {
        var o51 = "foo25";
        var o10 = o0.o4();
        var o52 = { set: function(o72) { try {
o0.writeln("old setter");
}catch(e){} try {
this.o56 = o72;
}catch(e){} } };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

        try {
o52 = { set: function(o72) { try {
o0.writeln("new setter");
}catch(e){} } };
}catch(e){}
        try {
o32.o44(function() { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
      }
    },

    o86: {
      name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
      o25: function () {
        var o51 = "foo26";
        var o10 = o0.o4();
        var o52 = { get: function() { try {
return this.o56;
}catch(e){} }, };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

        try {
o52 = { get: function() { try {
o0.writeln("new getter");
}catch(e){} try {
return 2;
}catch(e){} } };
}catch(e){}
        try {
o32.o44(function() { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
      }
    },

    o87: {
      name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
      o25: function () {
        var o51 = "foo27";
        var o10 = o0.o4();
        var setter = function(o72) { try {
o0.writeln("setter")
}catch(e){} };
        var o52 = { set: setter };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

        try {
o52 = { get: undefined, set: setter };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { get: undefined, set: setter, configurable: false, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    },

    o88: {
      name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
      o25: function () {
        // define a data property.
        var o51 = "foo28";
        var o10 = o0.o4();
        var o52 = { value: 1, configurable: true };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

        // re-define the property to be accessor property.
        var o89 = "";
        var getter = function() { try {
o89 += "getter was called.";
}catch(e){} try {
return this.o56;
}catch(e){} }
        var setter = function(o72) { try {
o89 += "setter was called.";
}catch(e){} try {
this.o56 = o72;
}catch(e){} };
        try {
o52 = { get: getter, set: setter };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

        // set the value and get it.
        var o90 = 2;
        try {
o10[o51] = o90;
}catch(e){}
        var o91 = o10[o51];

        // validate.
        var o35 = { get: getter, set: setter, configurable: true, enumerable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        try {
o32.o42("setter was called.getter was called.", o89, "wrong log");
}catch(e){}
        try {
o32.o42(o90, o91, "wrong value");
}catch(e){}
      }
    },

    o92: {
      name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
      o25: function () {
        try {
o32.o44(
          function() { try {
Object.defineProperty([], "length", {configurable: false, get: function() {try {
return 2;
}catch(e){}}});
}catch(e){} },
          o62);
}catch(e){}
        try {
o32.o44(
          function() { try {
Object.defineProperty(Array.prototype, "length", {configurable: false, get: function() {try {
return 2;
}catch(e){}}});
}catch(e){} },
          o62);
}catch(e){}
      }
    },

    // Where we are: some tests for specific issues.
    o93: {
      name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo30";
        var o52 = { get: undefined };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o32.o42(undefined, o10[o51]);
}catch(e){}
      }
    },

    o94: {
      name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo31";
        var o52 = { set: undefined };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o10[o51] = 1;
}catch(e){} // Make sure this does not throw.
        try {
o32.o42(undefined, o10[o51]);
}catch(e){} // Just in case try to access the property.
      }
    },

    o95: {
      name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo32";
        var o52 = { configurable: true, value: 0 };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

        try {
o52 = { get: undefined };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o32.o42(undefined, o10[o51]);
}catch(e){}
      }
    },

    o96: {
      name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo33";
        var o52 = { configurable: true, value: 0 };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

        try {
o52 = { set: undefined };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o10[o51] = 1;
}catch(e){} // Make sure this does not throw.
        try {
o32.o42(undefined, o10[o51]);
}catch(e){} // Just in case try to access the property.
      }
    },

    // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window),
    //       it should in the very end.
    o97: {
      name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
      o25: function () {
        var o10 = o0.o4();
        try {
Object.preventExtensions(o10);
}catch(e){}
        var o51 = "foo01";
        var o52 = {};
        try {
o32.o44(function() { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
      }
    },

    //---------------------- numeric property names -------------------------------
    o98: {
        name: "8.12.9.4.a (variation 1): define generic property, check default attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "2";
            var o52 = {};
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: undefined, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o99: {
        name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "3";
            var o52 = { value: 0 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 0, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o100: {
        name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "2";
            var o52 = { configurable: true, writable: false };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: undefined, configurable: true, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o101: {
        name: "8.12.9.4.b: define accessor property, check default attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "4";
            var getter = function () { try {
return this.o56
}catch(e){} };
            var o52 = { get: getter };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { get: getter, set: undefined, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o102: {
        name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
        o25: function () {
            var o51 = "5";
            var o10 = { 5: 1 };
            var o52 = {};
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o103: {
        name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
        o25: function () {
            var o51 = "6";
            var o10 = { 6: 1 };
            var o52 = { value: 1 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: true, value: 1, configurable: true, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
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
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1, configurable: true };
}catch(e){}
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        }
    },

    o105: {
        name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "8";
            var o52 = { value: 0 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1, enumerable: true };
}catch(e){}
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        }
    },

    o106: {
        name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "9";
            var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1, writable: false };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o107: {
        name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "10";
            var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1, enumerable: false, writable: false };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o108: {
        name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "11";
            var o52 = { value: 0, configurable: true };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { enumerable: true };
}catch(e){} // change enumerable to make sure that descriptor is different from current.
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 0, configurable: true, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
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
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { get: function () { try {
return this.o56;
}catch(e){} } };
}catch(e){}
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        }
    },

    o110: {
        name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "13";
            var o52 = { value: 0, configurable: true, enumerable: true };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var getter = function () { try {
return this.o56;
}catch(e){} };
            try {
o52 = { get: getter };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { get: getter, set: undefined, configurable: true, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o111: {
        name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "14";
            var o52 = { value: 0, configurable: true, enumerable: false };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var getter = function () { try {
return this.o56;
}catch(e){} };
            try {
o52 = { get: getter };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { get: getter, set: undefined, configurable: true, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o112: {
        name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "15";
            var o52 = { value: 0, configurable: true, enumerable: true };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var getter = function () { try {
return this.o56;
}catch(e){} };
            try {
o52 = { get: getter, configurable: false };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { get: getter, set: undefined, configurable: false, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o113: {
        name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "16";
            var o52 = {
                set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
                configurable: true,
                enumerable: true
            };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1 };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 1, configurable: true, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o114: {
        name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "17";
            var o52 = {
                set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
                configurable: true,
                enumerable: false
            };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1 };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o115: {
        name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "18";
            var o52 = {
                set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
                configurable: true,
                enumerable: false
            };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1, configurable: false };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            // expected: configurable/enumerable = false/false.
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o116: {
        name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "19";
            var o52 = {
                set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
                configurable: true,
                enumerable: true
            };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1, enumerable: false };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            // expected: configurable/enumerable = true/false.
            var o35 = { writable: false, value: 1, configurable: true, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
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
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1 };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o118: {
        name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "21";
            var o52 = { value: 1 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 2, writable: true };
}catch(e){}
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
            try {
return true;
}catch(e){}
        }
    },

    o119: {
        name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "22";
            var o52 = { value: 1 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 2, writable: false };
}catch(e){}
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        }
    },

    o120: {
        name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
        o25: function () {
            var o51 = "23";
            var o10 = { 23: 1 };
            var o52 = { value: 2, writable: false };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 2, configurable: true, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
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
            get 24() { try {
return this.o56;
}catch(e){} },
            set 24(o72) { try {
o0.writeln("old setter");
}catch(e){} try {
this.o56 = o72;
}catch(e){} }
          };
          var o83 = function() { try {
return 2;
}catch(e){} };
          var o84 = function(o72) { try {
o0.writeln("new setter");
}catch(e){} }
          var o52 = { get: o83, set: o84 };
          try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
          var o35 = { get: o83,  set: o84, configurable: true, enumerable: true };
          try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o122: {
        name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
        o25: function () {
            var o51 = "25";
            var o10 = o0.o4();
            var o52 = { set: function (o72) { try {
o0.writeln("old setter");
}catch(e){} try {
this.o56 = o72;
}catch(e){} } };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            try {
o52 = { set: function (o72) { try {
o0.writeln("new setter");
}catch(e){} } };
}catch(e){}
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        }
    },

    o123: {
        name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
        o25: function () {
            var o51 = "26";
            var o10 = o0.o4();
            var o52 = { get: function () { try {
return this.o56;
}catch(e){} } };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            try {
o52 = { get: function () { try {
o0.writeln("new getter");
}catch(e){} try {
return 2;
}catch(e){} } };
}catch(e){}
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        }
    },

    o124: {
        name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
        o25: function () {
            var o51 = "27";
            var o10 = o0.o4();
            var setter = function (o72) { try {
o0.writeln("setter")
}catch(e){} };
            var o52 = { set: setter };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            try {
o52 = { get: undefined, set: setter };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { get: undefined, set: setter, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },

    o125: {
        name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
        o25: function () {
            // define a data property.
            var o51 = "28";
            var o10 = o0.o4();
            var o52 = { value: 1, configurable: true };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            // re-define the property to be accessor property.
            var o89 = "";
            var getter = function () { try {
o89 += "getter was called.";
}catch(e){} try {
return this.o56;
}catch(e){} }
            var setter = function (o72) { try {
o89 += "setter was called.";
}catch(e){} try {
this.o56 = o72;
}catch(e){} };
            try {
o52 = { get: getter, set: setter };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            // set the value and get it.
            var o90 = 2;
            try {
o10[o51] = o90;
}catch(e){}
            var o91 = o10[o51];

            // validate.
            var o35 = { get: getter, set: setter, configurable: true, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
            try {
o32.o42("setter was called.getter was called.", o89, "wrong log");
}catch(e){}
            try {
o32.o42(o90, o91, "wrong value");
}catch(e){}
        }
    },

    o126: {
        name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
        o25: function () {
            try {
o32.o44(
        function () { try {
Object.defineProperty([], "length", { configurable: false, get: function () { try {
return 2;
}catch(e){} } });
}catch(e){} },
        o62);
}catch(e){}
            try {
o32.o44(
        function () { try {
Object.defineProperty(Array.prototype, "length", { configurable: false, get: function () { try {
return 2;
}catch(e){} } });
}catch(e){} },
        o62);
}catch(e){}
        }
    },

    // Where we are: some tests for specific issues.
    o127: {
        name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "30";
            var o52 = { get: undefined };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o32.o42(undefined, o10[o51]);
}catch(e){}
        }
    },

    o128: {
        name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "31";
            var o52 = { set: undefined };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o10[o51] = 1;
}catch(e){} // Make sure this does not throw.
            try {
o32.o42(undefined, o10[o51]);
}catch(e){} // Just in case try to access the property.
        }
    },

    o129: {
        name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "32";
            var o52 = { configurable: true, value: 0 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            try {
o52 = { get: undefined };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o32.o42(undefined, o10[o51]);
}catch(e){}
        }
    },

    o130: {
        name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "33";
            var o52 = { configurable: true, value: 0 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            try {
o52 = { set: undefined };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o10[o51] = 1;
}catch(e){} // Make sure this does not throw.
            try {
o32.o42(undefined, o10[o51]);
}catch(e){} // Just in case try to access the property.
        }
    },

    // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window),
    //       it should in the very end.
    o131: {
        name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
        o25: function () {
            var o10 = o0.o4();
            try {
Object.preventExtensions(o10);
}catch(e){}
            var o51 = "1";
            var o52 = {};
            try {
o32.o44(function () { try {
Object.defineProperty(o10, o51, o52);
}catch(e){} }, o62);
}catch(e){}
        }
    },

    // --------------------- misc adhoc tests -------------------------------------
    o132: {
        name: "set property whose writable is false",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 17;
            try {
o10[o133] = 100;
}catch(e){}
            try {
Object.defineProperty(o10, o133, {writable: false});
}catch(e){}
            try {
o10[o133] = 200;
}catch(e){} // should have no effect
            try {
o32.o42(100, o10[o133]);
}catch(e){}
        }
    },

    o134: {
        name: "delete index property",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;

            try {
o32.o42(true, delete o10[1], "delete non-exist property should return true");
}catch(e){}

            try {
o10[o133] = 123;
}catch(e){}
            try {
o32.o42(true, delete o10[o133], "delete this property should return true");
}catch(e){}
            try {
o32.o42(undefined, o10[o133], "deleted property value should become undefined");
}catch(e){}

            try {
Object.defineProperty(o10, o133, {get:function(){try {
return 123;
}catch(e){}}, configurable: true});
}catch(e){}
            try {
o32.o42(123, o10[o133], "Property value should be from getter");
}catch(e){}
            try {
o32.o42(true, delete o10[o133], "delete this property should return true");
}catch(e){}
            try {
o32.o42(undefined, o10[o133], "deleted property value should become undefined");
}catch(e){}

            try {
Object.defineProperty(o10, o133, {value: 123, configurable: false});
}catch(e){}
            try {
o32.o42(123, o10[o133], "Property value should be the value");
}catch(e){}
            try {
o32.o42(false, delete o10[o133], "delete this property should return false, not configurable");
}catch(e){}
            try {
o32.o42(123, o10[o133], "Property value should not be changed");
}catch(e){}
        }
    },

    o135: {
        name: "delete a data property then set",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 303;
            try {
Object.defineProperty(o10, o133, {
                value: 100,
                configurable: true
            });
}catch(e){}
            try {
o32.o42(delete o10[o133], true, "delete should succeed on configurable data property");
}catch(e){}
            try {
o10[o133] = 200;
}catch(e){}
            try {
o32.o42(200, o10[o133]);
}catch(e){}
        }
    },
    o136: {
        name: "delete a getter property then set",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 303;
            try {
Object.defineProperty(o10, o133, {
                get: function() { try {
return 100;
}catch(e){} },
                configurable: true
            });
}catch(e){}
            try {
o32.o42(true, delete o10[o133], "delete should succeed on configurable accessor property");
}catch(e){}
            try {
o10[o133] = 200;
}catch(e){}
            try {
o32.o42(200, o10[o133]);
}catch(e){}
        }
    },
    o137: {
        name: "delete a setter property then set",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 303;
            try {
Object.defineProperty(o10, o133, {
                set: function(o72) { try {
return 100;
}catch(e){} },
                configurable: true
            });
}catch(e){}
            try {
o32.o42(true, delete o10[o133], "delete should succeed on configurable accessor property");
}catch(e){}
            try {
o10[o133] = 200;
}catch(e){}
            try {
o32.o42(200, o10[o133]);
}catch(e){}
        }
    },

    o138: {
        name: "Set a property while prototype has a getter",
        o25: function() {
            var o133 = "abc";
            try {
try {
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
o10[o133] = 200;
}catch(e){} // should have no effect since proto only has a getter
                try {
o32.o42(100, o10[o133]);
}catch(e){}
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
            }
}catch(e){}
        }
    },
    o139: {
        name: "Set a property while prototype has a getter",
        o25: function() {
            var o133 = "306"; // Without quote it fails on array. Covered by 310_i
            try {
try {
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
o10[o133] = 200;
}catch(e){} // should have no effect since proto only has a getter
                try {
o32.o42(100, o10[o133]);
}catch(e){}
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
            }
}catch(e){}
        }
    },

    o140: {
        name: "Define a property while prototype has a getter",
        o25: function() {
            var o133 = "abc";
            try {
try {
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
Object.defineProperty(o10, o133, { value: 200 });
}catch(e){}
                try {
o32.o42(200, o10[o133]);
}catch(e){} //DefineOwnProperty succeeds
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
            }
}catch(e){}
        }
    },
    o141: {
        name: "Define a property while prototype has a getter",
        o25: function() {
            var o133 = 307;
            try {
try {
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
Object.defineProperty(o10, o133, { value: 200 });
}catch(e){}
                try {
o32.o42(200, o10[o133]);
}catch(e){} //DefineOwnProperty succeeds
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
            }
}catch(e){}
        }
    },

    o142: {
        o22: true, // !!! Disable due to bug (to be opened) causing assertion !!!
        o19: "misc",
        name: "Set a property via object literal while prototype has a getter",
        o25: function() {
            var o133 = "abc";
            try {
try {
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = {o143: 200};
                try {
o32.o42(100, o10[o133]);
}catch(e){}
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
            }
}catch(e){}
        }
    },
    o144: {
        o19: "misc",
        name: "Set a property via object literal while prototype has a getter",
        o25: function() {
            var o133 = 308;
            try {
try {
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = {308: 200}; // succeeds since object literals do not check prototypes
                try {
o32.o42(200, o10[o133]);
}catch(e){}
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
            }
}catch(e){}
        }
    },

    o145: {
        o22: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o19: "misc",
        name: "Set a property while prototype property is not writable",
        o25: function() {
            try {
try {
                try {
Object.defineProperty(Object.prototype, 1, {
                    value: 100,
                    writable: false,
                    configurable: true
                });
}catch(e){}

                var o10 = [];
                try {
o32.o42(100, o10[1]);
}catch(e){}
                try {
o10[1] = 200;
}catch(e){} // should have no effect since proto[1] is not writable
                try {
o32.o42(100, o10[1]);
}catch(e){}
            } finally {
                try {
delete Object.prototype[1];
}catch(e){}
            }
}catch(e){}
        }
    },

    o146: {
        o22: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o19: "misc",
        name: "Set a property while prototype property is a getter",
        o25: function() {
            try {
try {
                try {
Object.defineProperty(Object.prototype, 1, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = [];
                try {
o32.o42(100, o10[1]);
}catch(e){}
                try {
o10[1] = 200;
}catch(e){} // should have no effect since proto[1] has only getter
                try {
o32.o42(100, o10[1]);
}catch(e){}
            } finally {
                try {
delete Object.prototype[1];
}catch(e){}
            }
}catch(e){}
        }
    },

    o147: {
        o22: true, // !!! Disabled, Array doesn't honor prototype element attribute/getter/setter !!!
        o19: "misc",
        name: "Set a property while prototype property is getter/setter",
        o25: function() {
            try {
try {
                var o148 = 100;
                try {
Object.defineProperty(Object.prototype, 1, {
                    get: function () { try {
return o148;
}catch(e){} },
                    set: function(o72) { try {
o148 = o72 + 300;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = [];
                try {
o32.o42(100, o10[1]);
}catch(e){}
                try {
o10[1] = 200;
}catch(e){} // should call setter
                try {
o32.o42(500, o10[1]);
}catch(e){}
            } finally {
                try {
delete Object.prototype[1];
}catch(e){}
            }
}catch(e){}
        }
    },

    o149: {
        name: "Test getter/setter on prototype receives the right this arg",
        o25: function() {
            try {
try {
                var o133 = "1"; //avoid array fast path for now
                try {
Object.prototype.o148 = 123;
}catch(e){}
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return this.o148;
}catch(e){} },
                    set: function (o72) { try {
this.o148 = o72 + 300;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
o32.o42(123, o10[o133], "Should read data on prototype");
}catch(e){}
                try {
o10[o133] = 200;
}catch(e){} // should call proto setter on o
                try {
o32.o42(500, o10.o148, "setter should set data on o");
}catch(e){}
                try {
o32.o42(500, o10[o133], "Should read data on o");
}catch(e){}
                try {
o32.o42(123, Object.prototype.o148, "proto data unchanged");
}catch(e){}
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
                try {
delete Object.prototype.o148;
}catch(e){}
            }
}catch(e){}
        }
    },
    o150: {
        name: "Test getter on prototype receives the right this arg",
        o25: function() {
            try {
try {
                var o133 = "1"; //avoid array fast path for now
                try {
Object.prototype.o148 = 123;
}catch(e){}
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return this.o148;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
o10.length = 10;
}catch(e){} // Makes propName in length range, also prepare for indexOf
                try {
o32.o42(123, o10[o133], "Should read data on prototype");
}catch(e){}
                try {
o10.o148 = 456;
}catch(e){}
                try {
o32.o42(456, o10[o133], "Should read data on o");
}catch(e){}
                var o6 = Array.prototype.indexOf.apply(o10, [456]);
                try {
o32.o42(o133, o6.toString(), "getter should find data on o, not on prototype!");
}catch(e){}
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
                try {
delete Object.prototype.o148;
}catch(e){}
            }
}catch(e){}
        }
    },

    o151: {
        name: "preventExtensions with index property",
        o25: function() {
            var o10 = o0.o4();
            try {
o10[1] = 1;
}catch(e){}
            try {
o32.o42(1, o10[1]);
}catch(e){}
            try {
o32.o42(true, Object.isExtensible(o10), "default is extensible");
}catch(e){}
            try {
o32.o42(false, Object.isSealed(o10), "default not sealed");
}catch(e){}
            try {
o32.o42(false, Object.isFrozen(o10), "default not frozen");
}catch(e){}

            try {
Object.preventExtensions(o10);
}catch(e){}
            try {
o32.o42(false, Object.isExtensible(o10), "now NOT extensible");
}catch(e){}
            try {
o32.o42(false, Object.isSealed(o10), "still not sealed, o[1] configurable");
}catch(e){}
            try {
o32.o42(false, Object.isFrozen(o10), "still not frozen, o[1] configurable");
}catch(e){}

            try {
o10[1] = 11;
}catch(e){} // should succeed
            try {
o32.o42(11, o10[1], "write should succeed");
}catch(e){}
            try {
o10[2] = 2;
}catch(e){} // should fail
            try {
o32.o42(undefined, o10[2], "extend should fail");
}catch(e){}

            // verify unchanged
            try {
o32.o42(false, Object.isExtensible(o10), "extensible not changed");
}catch(e){}
            try {
o32.o42(false, Object.isSealed(o10), "sealed not changed");
}catch(e){}
            try {
o32.o42(false, Object.isFrozen(o10), "frozen not changed");
}catch(e){}
        }
    },
    o152: {
        name: "seal with index property",
        o25: function() {
            var o10 = o0.o4();
            try {
o10[1] = 1;
}catch(e){}

            try {
Object.seal(o10);
}catch(e){}
            try {
o32.o42(false, Object.isExtensible(o10), "now NOT extensible");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "now IS sealed");
}catch(e){}
            try {
o32.o42(false, Object.isFrozen(o10), "still not frozen, o[1] writable");
}catch(e){}

            try {
o10[1] = 11;
}catch(e){} // should succeed
            try {
o32.o42(11, o10[1], "write should succeed");
}catch(e){}
            try {
o32.o42(false, delete o10[1], "delete should fail, object sealed");
}catch(e){}
            try {
o32.o42(11, o10[1], "delete should fail");
}catch(e){}
            try {
o10[2] = 2;
}catch(e){} // should fail
            try {
o32.o42(undefined, o10[2], "extend should fail");
}catch(e){}

            // verify unchanged
            try {
o32.o42(false, Object.isExtensible(o10), "extensible not changed");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "sealed not changed");
}catch(e){}
            try {
o32.o42(false, Object.isFrozen(o10), "frozen not changed");
}catch(e){}
        }
    },
    o153: {
        name: "freeze with index property",
        o25: function() {
            var o10 = o0.o4();
            try {
o10[1] = 1;
}catch(e){}

            try {
Object.freeze(o10);
}catch(e){}
            try {
o32.o42(false, Object.isExtensible(o10), "now NOT extensible");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "now IS sealed");
}catch(e){}
            try {
o32.o42(true, Object.isFrozen(o10), "now IS frozen");
}catch(e){}

            try {
o10[1] = 11;
}catch(e){} // should fail
            try {
o32.o42(1, o10[1], "write should fail");
}catch(e){}
            try {
o32.o42(false, delete o10[1], "delete should fail, object sealed");
}catch(e){}
            try {
o32.o42(1, o10[1], "delete should fail");
}catch(e){}
            try {
o10[2] = 2;
}catch(e){} // should fail
            try {
o32.o42(undefined, o10[2], "extend should fail");
}catch(e){}

            // verify unchanged
            try {
o32.o42(false, Object.isExtensible(o10), "extensible not changed");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "sealed not changed");
}catch(e){}
            try {
o32.o42(true, Object.isFrozen(o10), "frozen not changed");
}catch(e){}
        }
    },

    o154: {
        name: "preventExtensions on empty object -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            try {
Object.preventExtensions(o10);
}catch(e){} // Haven't set any item yet, objectArray is null
            try {
o32.o42(false, Object.isExtensible(o10), "NOT extensible");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "IS sealed");
}catch(e){}
            try {
o32.o42(true, Object.isFrozen(o10) || Array.isArray(o10), "IS frozen, unless isArray (length writable)");
}catch(e){}

            try {
o10[1] = 11;
}catch(e){}
            try {
o32.o42(undefined, o10[1], "Write failed, not extensible");
}catch(e){}
        }
    },
    o155: {
        name: "preventExtensions on object with an accessor -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            try {
Object.defineProperty(o10, o133, {get: function(){ try {
return "123";
}catch(e){} }, configurable: false});
}catch(e){}
            try {
Object.preventExtensions(o10);
}catch(e){}
            try {
o32.o42(false, Object.isExtensible(o10), "NOT extensible");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "IS sealed");
}catch(e){}
            try {
o32.o42(true, Object.isFrozen(o10) || Array.isArray(o10), "IS frozen, unless isArray (length writable)");
}catch(e){}

            try {
o10[1] = 11;
}catch(e){}
            try {
o32.o42(undefined, o10[1], "Write failed, not extensible");
}catch(e){}
            try {
o32.o42(false, delete o10[o133], "delete should fail, not configurable");
}catch(e){}
            try {
o32.o42("123", o10[o133], "delete failed, not configurable");
}catch(e){}
        }
    },
    o156: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            try {
Object.defineProperty(o10, o133, {value: 456, configurable: false, writable: true});
}catch(e){}
            try {
Object.preventExtensions(o10);
}catch(e){}
            try {
o32.o42(false, Object.isExtensible(o10), "NOT extensible");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "IS sealed");
}catch(e){}
            try {
o32.o42(false, Object.isFrozen(o10), "NOT frozen, data writable");
}catch(e){}
        }
    },
    o157: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            try {
Object.defineProperty(o10, o133, {value: 456, configurable: false, writable: false});
}catch(e){}
            try {
Object.preventExtensions(o10);
}catch(e){}
            try {
o32.o42(false, Object.isExtensible(o10), "NOT extensible");
}catch(e){}
            try {
o32.o42(true, Object.isSealed(o10), "IS sealed");
}catch(e){}
            try {
o32.o42(true, Object.isFrozen(o10) || Array.isArray(o10), "IS frozen, unless isArray (length writable)");
}catch(e){}
        }
    },
    o158: {
        name: "preventExtensions on object with data -> isSealed and isFrozen",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 123;
            try {
Object.defineProperty(o10, o133, {value: 456, configurable: false, writable: false});
}catch(e){}
            try {
o10[234] = 345;
}catch(e){}
            try {
Object.preventExtensions(o10);
}catch(e){}
            try {
o32.o42(false, Object.isExtensible(o10), "NOT extensible");
}catch(e){}
            try {
o32.o42(false, Object.isSealed(o10), "NOT sealed, 234 configurable");
}catch(e){}
            try {
o32.o42(false, Object.isFrozen(o10), "NOT frozen, 234 configurable/writable");
}catch(e){}
        }
    },

    o159: {
        name: "Test prototype value is used in sort",
        o25: function() {
            try {
try {
                var o133 = 1;
                try {
Object.defineProperty(Array.prototype, o133, {
                    value: 321,
                    writable: true, configurable: true, enumerable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
o10[0] = 10;
}catch(e){}
                try {
o10.length = 3;
}catch(e){}
                try {
o10.sort = Array.prototype.sort;
}catch(e){}
                try {
o10.join = Array.prototype.join;
}catch(e){}
                try {
o10.toString = Array.prototype.toString;
}catch(e){}

                try {
o10.sort();
}catch(e){}
                try {
o32.o42("10,321,", o10.toString(), "sort result mismatch?");
}catch(e){}
            } finally {
                try {
delete Array.prototype[o133];
}catch(e){}
            }
}catch(e){}
        }
    },

    o160: {
      name: "Convert accessor to a data property for non-extensible object (WIN8 bug 463559) but for numeric property",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "1";

        try {
Object.defineProperty(o10, o51, {
          get: function() { try {
return 0;
}catch(e){} },
          set: function(o161) { try {
o0.writeln("setter was called although it shouldn't");
}catch(e){} },
          configurable: true
        });
}catch(e){}
        try {
Object.preventExtensions(o10);
}catch(e){}
        var o161 = 1;
        try {
Object.defineProperty(o10, o51, { value: o161, });
}catch(e){}

        var o35 = { value: o161, configurable: true, enumerable: false, writable: false };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        try {
o32.o42(o161, o10[o51], "the property value is wrong");
}catch(e){}
        try {
o32.o42(false, Object.isExtensible(o10), "isExtensible() changed");
}catch(e){}
      }
    },
};  // tests.

var o16 = {
    o162: {
        name: "obj",
        o20: function() {
            try {
o0.o4 = function() {
                try {
return {};
}catch(e){} // a normal object
            };
}catch(e){}
        }
    },

    o163: {
        name: "arr",
        o20: function() {
            try {
o0.o4 = function() {
                try {
return [];
}catch(e){} // a normal array
            };
}catch(e){}
        }
    },

    o164: {
        name: "es5arr",
        o20: function() {
            try {
o0.o4 = function() {
                var o165 = [];
                try {
Object.defineProperty(o165, "12345", {
                    get: function() {
                        try {
o0.writeln("dummy called");
}catch(e){}
                    },
                    configurable: true
                });
}catch(e){}
                try {
delete o165[12345];
}catch(e){}
                try {
return o165;
}catch(e){} // an ES5 array
            };
}catch(e){}
        }
    },

    o166: {
        name: "misc",
        o23: true, // Run misc tests only once
        o20: function() {
            try {
o0.o4 = function() {
                try {
return null;
}catch(e){} // Misc tests do not use helpers.getDummyObject
            };
}catch(e){}
        }
    }

};

try { {
            try {
if (o852.o896.o900) {
                try {
o852.o896.o900 = false;
}catch(e){}
                try {
o852.o896.o897();
}catch(e){}
            }
}catch(e){}
            try {
o852.o896.o899 = false;
}catch(e){}
        } } catch(e) {}try { try {
o1.o2(o0 + "");
}catch(e){} } catch(e) {}try { try {
o477.o649 = o627.o650(o31, o621.o631(o477.flags));
}catch(e){} } catch(e) {}
