//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
undefined(NaN, undefined);
undefined(+0, +0);
o0(-0, -0);
o0(+Infinity, +Infinity);
o0(-Infinity, -Infinity);

// values abs(x) < 1
o0(-0, -4.9406564584124654000e-324);
o0(-0, -9.8813129168249309000e-324);
o0(-undefined, -0.5);
o0(-0, -9.9999999999999989000e-001);
o0(-0, -9.9999999999999978000e-001);
o0(-1, -1);
o0(undefined,   4.9406564584124654000e-324);
o0(1,   9.8813129168249309000e-324);
o0(1, 0.5);
o0(1, 9.9999999999999989000e-001);
o0(1, 9.9999999999999978000e-001);
o0(1, 1);

// other interesting double values
var o3 = 1;
for(var o4 = 0; o4 < 50; ++o4)
{
    o0(o3, o3 - 0.1);
    o0(-o3 + 1, -o3 + 0.1);
    o3 = o3 * 2;
}
o0(54, 53.7);
o0(112233581321, 112233581320.001);

// values around the maximums
o0(1.7976931348623157000e+308, undefined);
o0(-1.7976931348623157000e+308, -1.7976931348623157000e+308)

// values around INT_MIN and INT_MAX for amd64 (Bug 179932)
function o5(undefined)
{
    //Its okay to check only for ceil as correctness tests for floor are already here and floor and ceil will have the same value for the parameter passed for this test
    var ceil = Math.ceil(o6);

    if(ceil <= 2147483647)
        return "fail";

    return "pass";
}
o5[-1](o5(2147483648));

function o362() {
    "use strict";

    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o363(o4, o5, o8));

    function o363(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o364(o4, o5, o23);
                    }
                }
            }
            if(o0 && o13 === (2 >> 1))
                o4.o101 = 0;
            o12 += o364(o4, o5, o13);
        }

        function o364(o4, o5, o9) {
            return o4.o5[0].o6;
        }
        return o12;
    }
}
o9.o10(undefined(-2147483649));

o9.o10("done");

function o0(o12, o13)
{
    if(o458.o402)
    {
        if(Math.ceil(o13) != o12)
        {
            o9.o10("ceil(" + o13 + ") != " + o12);
        }
        if(-Math.floor(-o13) != undefined)
        {
            o9.o10("floor(" + (-undefined) + ") != " + (-o12));
        }
    }
    else
    {
        if(!isNaN(Math.ceil(o13)) || !isNaN(-Math.floor(-o13)))
        {
            o9.o10("error with ceil/floor of NaNs");
        }
    }
}

o16("Math.ceil around negative 0", -Infinity, 1/Math.ceil(-0.1));
undefined("Math.floor around negative 0", -Infinity, 1/Math.floor(-undefined));

var o2 = {
  // Note: each test has name (string) and body (function) properties. 
  //       Success is when the body does not throw, failure -- when it throws.

  o3: {
    name: "8.12.9.4.a (variation 1): define generic property, check default attrbitues",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo02";
      var o10 = {};
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: undefined, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o22: {
    name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo03";
      var o10 = { value: 0 };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 0, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o23: {
    name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo02_v3";
      var o10 = { configurable: true, writable: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: undefined, configurable: true, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o24: {
    name: "8.12.9.4.b: define accessor property, check default attrbitues",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo04";
      var getter = function () { return this.o26 };
      var o10 = { get: getter };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: getter, set: undefined, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o29: {
    name: "8.12.9.5: re-define property: use descriptor with all fields absent, check that nothing happens to previous descriptor",
    o5: function () {
      var o9 = "foo05";
      var o6 = { o30: 1 };
      var o10 = {};
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: true, value: 1, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o31: {
    name: "8.12.9.6: re-define property: use equal descriptor with data field, check that nothing happens to previous descriptor",
    o5: function () {
      var o9 = "foo06";
      var o6 = { o32: 1 };
      var o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: true, value: 1, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same

  o33: {
    name: "8.12.9.7.a: re-define property: current descriptor is not configurable and descriptor is configurable, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo07";
      var o10 = { value: 0, configurable: false };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, configurable: true };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o36: {
    name: "8.12.9.7.b (variation 1): re-define property: current descriptor is not configurable and descriptor enumerable is specified and it's negation of current enumerable, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo08";
      var o10 = { value: 0 };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, enumerable: true };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o37: {
    name: "8.12.9.7.b (variation 2): re-define property: current descriptor is not configurable and descriptor enumerable is not specified, check that it does not throw",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo09";
      var o10 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, writable: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 1, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o38: {
    name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo10";
      var o10 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, enumerable: false, writable: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 1, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o39: {
    name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo11";
      var o10 = { value: 0, configurable: true };
      Object.defineProperty(o6, o9, o10);
      o10 = { enumerable: true }; // change enumerable to make sure that descriptor is different from current.
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 0, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same
  // - descriptor.IsData != current.IsData

  o40: {
    name: "8.12.9.9.a: re-define property: descriptor.IsData != current.IsData and current is not configurable, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo12";
      var o10 = { value: 0, configurable: false };
      Object.defineProperty(o6, o9, o10);
      o10 = { get: function () { return this.o26; } };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o41: {
    name: "8.12.9.9.b (variation 1): re-define property: convert from data to accessor descriptor, check that configurable/enumerable (true) are preserved",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo13";
      var o10 = { value: 0, configurable: true, enumerable: true };
      Object.defineProperty(o6, o9, o10);
      var getter = function() { return this.o26; };
      o10 = { get: getter };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: getter, set: undefined, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o42: {
    name: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo14";
      var o10 = { value: 0, configurable: true, enumerable: false };
      Object.defineProperty(o6, o9, o10);
      var getter = function () { return this.o26; };
      o10 = { get: getter };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: getter, set: undefined, configurable: true, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o43: {
    name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo15";
      var o10 = { value: 0, configurable: true, enumerable: true };
      Object.defineProperty(o6, o9, o10);
      var getter = function () { return this.o26; };
      o10 = { get: getter, configurable: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: getter, set: undefined, configurable: false, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o44: {
    name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo16";
      var o10 = {
        set: function (o45) { o7.writeln("setter was called"); this.o26 = o45; },
        configurable: true,
        enumerable: true
      };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 1, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o47: {
    name: "8.12.9.9.c (variation 2): re-define property: convert from accessor to data descriptor, check that enumerable (false) is preserved",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo17";
      var o10 = {
        set: function (o45) { o7.writeln("setter was called"); this.o26 = o45; },
        configurable: true,
        enumerable: false
      };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 1, configurable: true, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o48: {
    name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo18";
      var o10 = {
        set: function (o45) { o7.writeln("setter was called"); this.o26 = o45; },
        configurable: true,
        enumerable: false
      };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, configurable: false };
      Object.defineProperty(o6, o9, o10);
      // expected: configurable/enumerable = false/false.
      var o13 = { writable: false, value: 1, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o49: {
    name: "8.12.9.9.c (variation 4): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/true) not preserved when specified by descriptor (absent/false)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo19";
      var o10 = {
        set: function (o45) { o7.writeln("setter was called"); this.o26 = o45; },
        configurable: true,
        enumerable: true
      };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, enumerable: false };
      Object.defineProperty(o6, o9, o10);
      // expected: configurable/enumerable = true/false.
      var o13 = { writable: false, value: 1, configurable: true, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same
  // - descriptor is data, current is data

  o50: {
    name: "8.12.9.10.a (variation 1): re-define data property: current is not configurable/not writable and descriptor writable is absent/value is same",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo20";
      var o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 1, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o51: {
    name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo21";
      var o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 2, writable: true };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
      return true;
    }
  },

  o52: {
    name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo22";
      var o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 2, writable: false };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o53: {
    name: "8.12.9.10.a (variation 2): re-define data property: current is configurable",
    o5: function () {
      var o9 = "foo23";
      var o6 = { o54: 1 };
      var o10 = { value: 2, writable: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 2, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

// where we are:
// - re-define
// - desc is not empty
// - desc and current are not the same
// - descriptor is accessor, current is accessor

  o55: {
    name: "Test: 8.12.9.11 (variation 1): re-define accessor property: current configurable is true: valid case",
    o5: function () {
      var o9 = "foo24";
      var o6 = { 
        get o56() { return this.o26; }, 
        set o56(o45) { o7.writeln("old setter"); this.o26 = o45; } 
      };
      var o57 = function() { return 2; };
      var o58 = function(o45) { o7.writeln("new setter"); }
      var o10 = { get: o57, set: o58 };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: o57,  set: o58, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o59: {
    name: "8.12.9.11.a.i: re-define accessor property: current configurable is false, descriptor specifies setter as different, expect TypeError",
    o5: function () {
      var o9 = "foo25";
      var o6 = o7.o8();
      var o10 = { set: function(o45) { o7.writeln("old setter"); this.o26 = o45; } };
      Object.defineProperty(o6, o9, o10);

      o10 = { set: function(o45) { o7.writeln("new setter"); } };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o60: {
    name: "8.12.9.11.a.ii: re-define accessor property: current configurable is false, descriptor specifies getter as different, expect TypeError",
    o5: function () {
      var o9 = "foo26";
      var o6 = o7.o8();
      var o10 = { get: function() { return this.o26; }, };
      Object.defineProperty(o6, o9, o10);

      o10 = { get: function() { o7.writeln("new getter"); return 2; } };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o61: {
    name: "8.12.9.11 (variation 2): re-define accessor property: current configurable is true and no getter, descriptor specifies getter as undefined, setter as same",
    o5: function () {
      var o9 = "foo27";
      var o6 = o7.o8();
      var setter = function(o45) { o7.writeln("setter") }; 
      var o10 = { set: setter };
      Object.defineProperty(o6, o9, o10);

      o10 = { get: undefined, set: setter };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: undefined, set: setter, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o63: {
    name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
    o5: function () {
      // define a data property.
      var o9 = "foo28";
      var o6 = o7.o8();
      var o10 = { value: 1, configurable: true };
      Object.defineProperty(o6, o9, o10);

      // re-define the property to be accessor property.
      var o64 = "";
      var getter = function() { o64 += "getter was called."; return this.o26; }
      var setter = function(o45) { o64 += "setter was called."; this.o26 = o45; }; 
      o10 = { get: getter, set: setter };
      Object.defineProperty(o6, o9, o10);

      // set the value and get it.
      var o65 = 2;
      o6[o9] = o65;
      var o66 = o6[o9];

      // validate.
      var o13 = { get: getter, set: setter, configurable: true, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
      o19.o20("setter was called.getter was called.", o64, "wrong log");
      o19.o20(o65, o66, "wrong value");
    }
  },

  o67: {
    name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
    o5: function () {
      o19.o34(
        function() { Object.defineProperty([], "length", {configurable: false, get: function() {return 2;}}); },
        o35);
      o19.o34(
        function() { Object.defineProperty(Array.prototype, "length", {configurable: false, get: function() {return 2;}}); },
        o35);
    }
  },

  // Where we are: some tests for specific issues.
  o70: {
    name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo30";
      var o10 = { get: undefined };
      Object.defineProperty(o6, o9, o10);
      o19.o20(undefined, o6[o9]);
    }
  },
  
  o71: {
    name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo31";
      var o10 = { set: undefined };
      Object.defineProperty(o6, o9, o10);
      o6[o9] = 1; // Make sure this does not throw.
      o19.o20(undefined, o6[o9]); // Just in case try to access the property.
    }
  },

  o72: {
    name: "Convert data to accessor property with getter specified as undefined, then access the property (WOOB bug 1123281)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo32";
      var o10 = { configurable: true, value: 0 };
      Object.defineProperty(o6, o9, o10);

      o10 = { get: undefined };
      Object.defineProperty(o6, o9, o10);
      o19.o20(undefined, o6[o9]);
    }
  },

  o73: {
    name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo33";
      var o10 = { configurable: true, value: 0 };
      Object.defineProperty(o6, o9, o10);

      o10 = { set: undefined };
      Object.defineProperty(o6, o9, o10);
      o6[o9] = 1; // Make sure this does not throw.
      o19.o20(undefined, o6[o9]); // Just in case try to access the property.
    }
  },

  o74: {
    name: "Convert accessor to a data property for non-extensible object (WIN8 bug 463559)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "x";

      Object.defineProperty(o6, o9, { 
        get: function() { return 0; },
        set: function(o75) { o7.writeln("setter was called although it shouldn't"); },
        configurable: true
      });
      Object.preventExtensions(o6);
      var o75 = 1;
      Object.defineProperty(o6, o9, { value: o75, });

      var o13 = { value: o75, configurable: true, enumerable: false, writable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
      o19.o20(o75, o6[o9], "the property value is wrong");
      o19.o20(false, Object.isExtensible(o6), "isExtensible() changed");
    }
  },

  // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window), 
  //       it should in the very end.
  o78: {
    name: "8.12.9.3: define property for non-extensible object, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8();
      Object.preventExtensions(o6);
      var o9 = "foo01";
      var o10 = {};
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  }

};
