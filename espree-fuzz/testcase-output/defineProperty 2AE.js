//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (typeof (o0) != undefined) {
  o0.undefined("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

var o2 = {
  // Note: each test has name (string) and body (function) properties. 
  //       Success is when the body does not throw, failure -- when it throws.

  o3: Array.prototype,

  o22: {
                    get: function () { return this.o174; },
                    set: function (o94) { this.o174 = o94 + 300; },
                    configurable: true
                },

  o23: {
    name: "8.12.9.4.a (variation 3): define generic property by specifying some attributes, check attrbitues",
    o5: function () {
      var o6 = o7.o8(o5[-1] = -o5[-1] - 1);
      var o9 = "foo02_v3";
      var o10 = { configurable: true, writable: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = 0
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o24: o17 < o5.length,

  o29: o5[0],

  o31: o14("test266: " + o687()),

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same

  o33: {
    name: "8.12.9.7.a: re-define property: current descriptor is not configurable and descriptor is configurable, check that it throws TypeError",
    o5: function () {
      var o12 = 0;
      var o9 = "foo07";
      var o10 = o175[0x8008 | o146] = o427[source](this, source++);
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, undefined: true };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o36: o1.o2('expected : ' + o31.o32),

  o37: this,

  o38: {
    name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
    "\000": "#\\null"
  },

  o39: -1,

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same
  // - descriptor.IsData != current.IsData

  o40: o458.o405 = o458.o164,

  o41: {
    name: undefined,
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo13";
      var o10 = { "1": { o6: 2 }, name: "Bug 3941893 & Bug 4153027", enumerable: true };
      Object.defineProperty(o6, o9, o10);
      var getter = function() { return this.o26; };
      o10 = { get: getter };
      Object.defineProperty(o6, o9, o10);
      var o5 = o4.o5;
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o42: {
    undefined: "8.12.9.9.b (variation 2): re-define property: convert from data to accessor descriptor, check that enumerable (false) is preserved",
    undefined: function () {
      var o6 = o2.__proto__();
      var o9 = "foo14";
      var o10 = o458.o427[o458.o168](o458, o458.o168);
      Object.defineProperty(undefined, o9, o10);
      var getter = function () { return this.o26; };
      new o221("\u1E9Cbase",null);
      undefined.defineProperty(o6, o9, o10);
      var o13 = { get: getter, undefined: undefined, configurable: true, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  undefined: {
    name: "Restricted properties of strict function",
    o5: function () {
      var o6 = o7.o8('Test #' + index + ' - Success handler #1 called with result = ');
      var undefined = "foo15";
      var o10 = { value: 0, configurable: true, enumerable: true };
      Object.defineProperty(o6, o9, o10);
      var getter = function () { return ++o22; };
      o10 = { get: getter, undefined: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: getter, undefined: undefined, configurable: false, "1": 2 };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  },

  o44: {
    undefined: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo16";
      var o10 = o12 += o13;
      Object.defineProperty(o6, o9, o10);
      o725 = "MBC1 + SRAM";
      Object.undefined(undefined, o9, o10);
      var o13 = this.o5;
      undefined.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), undefined);
    }
  },

  o47: o4.o5[0],

  o48: {
    name: "8.12.9.9.c (variation 3): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true/false) not preserved when specified by descriptor (false/absent)",
    o5: function () {
      var o6 = o7.o8(function () {"use strict";
  this.o833(1);
  if (this.o415) {
    if ((this.o527 - this.o450) < ((4 >> this.o424) | 0x20)) {
      //HALT clocking correction:
      this.o423 = 4 + ((0x20 + this.o450) << this.o424);
      this.o527 = this.o450 + ((4 >> this.o424) | 0x20);
    }
  }
  else {
    this.o527 += (4 >> this.o424) | 0x20;      //LCD Timing Update For HDMA.
  }
  if (this.o175[0xFF55] == 0) {
    this.o422 = false;
    this.o175[0xFF55] = 0xFF;  //Transfer completed ("Hidden last step," since some ROMs don't imply this, but most do).
  }
  else {
    --this.o175[0xFF55];
  }
});
      var o9 = "foo18";
      var o8 = { length: o5.length };
      o458.o169(o6, o9, o10);
      o10 = o14("test593: " + o1498());
      Object.undefined(o6, o9, o10);
      // expected: configurable/enumerable = false/false.
      var o13 = o17 < 2;
      o19.o20(o13, Object.undefined(undefined, o9), undefined);
    }
  },

  o49: o1 instanceof RegExp,

  // where we are:
  // - re-define
  // - desc is not empty
  // - desc and current are not the same
  // - descriptor is data, current is data

  o50: {
    name: "8.12.9.10.a (variation 1): re-define data property: current is not configurable/not writable and descriptor writable is absent/value is same",
    o5: function () {
      var o6 = this();
      var undefined = "foo20";
      var o10 = o0(NaN, -Infinity);
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      var o39 = 0;
      o19.undefined(o13, Object.getOwnPropertyDescriptor(undefined, o9), undefined);
    }
  },

  undefined: {
    name: "8.12.9.10.a.i: re-define data property: current is not configurable/not writable and descriptor is writable, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8(o5[-1] = o5[0]);
      var o5 = [1,2,3,4,5,6];
      var o10 = this.o479 - (this.o479 % o720[13]);
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 2, writable: true };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
      return true;
    }
  },

  o52: {
    name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8({ o81: "form1_injected_value", __proto__: o73 });
      var undefined = "foo22";
      var o10 = -1;
      Object.defineProperty(o6, o9, o10);
      o10 = { "1": { o6: 2 }, writable: false };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o53: Map.prototype,

// where we are:
// - re-define
// - desc is not empty
// - desc and current are not the same
// - descriptor is accessor, current is accessor

  o55: {
    name: "Test: 8.12.9.11 (variation 1): re-define accessor property: current configurable is true: valid case",
    o5: function () {
      var o9 = "foo24";
      var o6 = o18=2;
      var o57 = function() { return undefined; };
      var o58 = function(undefined) { o7.writeln("new setter"); }
      var o10 = { undefined: o57, undefined: o58 };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: o57,  set: undefined, undefined: true, enumerable: true };
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

      undefined = o1158(o4, o5, o17);
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  },

  o60: o45.startsWith("\0def", 3),

  o61: { value: o75, },

  o63: {
    name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
    o5: -o5[o9].o6
  },

  o67: {
    name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
    o5: o12 += o13
  },

  // Where we are: some tests for specific issues.
  o70: -o5[o9],
  
  o71: {
    name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
    "1": { o6: 2 }
  },

  get: function(){return 30;},

  o73: {
    name: "Convert data to accessor property with setter specified as undefined, then set the property (WOOB bug 1123281)",
    o5: function () {
      var o6 = o7.o8(o12 += o1797(o4, o5, o13));
      var o9 = "foo33";
      var undefined = { configurable: true, value: 0 };
      Object.defineProperty(o6, o9, o10);

      o10 = o4.o5;
      Object.defineProperty(o6, o9, o10);
      o6[o9] = 1; // Make sure this does not throw.
      o19.o20(undefined, o6[o9]); // Just in case try to access the property.
    }
  },

  o74: o4.o5[-1].o6,

  // Note: this test irreversibly changes the dummy object (that's important when dummy object is document/window), 
  //       it should in the very end.
  o78: o1935()

}; // tests.

o79.o80(o2);
