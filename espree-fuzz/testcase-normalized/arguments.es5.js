//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (typeof(o0) != "undefined") {
  o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = {
  // Note: each test has name (string) and body (function) properties.
  //       Success is when the body does not throw, failure -- when it throws.

  o3: {
    name: "formal arg: simple: verify connection: named vs indexed arg",
    o5: function () {
      var o6 = 1;
      function o7(o8) {
        var o9 = 2;
        o8 = o9;
        o10.o11(o9, o8, "wrong value of named parameter (val1)");
        o10.o11(o9, arguments[0], "wrong value of indexed parameter (val1)");

        var o13 = 3;
        arguments[0] = o13;
        o10.o11(o13, arguments[0], "wrong value of indexed parameter (val2)");
        o10.o11(o13, o8, "wrong value of named parameter (val2)");
      }
      o7(o6);
    }
  },

  o14: {
    name: "formal arg: defineProperty, check property descriptor",
    o5: function () {
      var o6 = 1;
      function o7(o8) {
        var o15 = 2;
        Object.defineProperty(arguments, 0, { configurable: false, enumerable: false, value: o15 });
        // Note that we expect writable: true because this was omitted in defineProperty above
        // which is actually re-define property with all attributes == true.
        var o21 = { configurable: false, enumerable: false, writable: true, value: o15 };
        o10.o11(o21, Object.getOwnPropertyDescriptor(arguments, 0), "wrong value of getOwnPropertyDescriptor");
        o10.o11(o15, o8, "wrong value of named parameter");
      }
      o7(o6);
    }
  },

  o24: {
    name: "formal arg: defineProperty, set writable to false, verify writability and lost connection. WOOB 1128023",
    o5: function () {
      var o6 = 1;
      function o7(o8) {
        Object.defineProperty(arguments, 0, { writable: false });
        var o21 = { configurable: true, enumerable: true, writable: false, value: o6 };
        o10.o11(o21, Object.getOwnPropertyDescriptor(arguments, 0), "wrong value of getOwnPropertyDescriptor");

        // Attempt to change arguments[0] which is not writable now.
        var o9 = 2;
        arguments[0] = o9;
        o10.o11(o6, arguments[0], "non-writable changed");
        o10.o11(o6, o8, "non-writable changed: named arg also changed");

        // Change named arg value, verify we are in connection named vs indexed arg.
        var o13 = 3;
        o8 = o13;
        o10.o11(o13, o8, "Attemp to change named arg: didn't work");
        o10.o11(o6, arguments[0], "At this time we should not be connected, but we are");
      }
      o7(o6);
    }
  },

  o25: {
    name: "formal arg: defineProperty, set writable to false AND set value, verify that value changed in both named and indexed arg and that the item was disconnected",
    o5: function () {
      var o6 = 1;
      function o7(o8) {
        var o9 = 2;
        var o13 = 3;
        Object.defineProperty(arguments, 0, { writable: false, value: o9 });
        var o21 = { configurable: true, enumerable: true, writable: false, value: o9 };
        o10.o11(o21, Object.getOwnPropertyDescriptor(arguments, 0), "wrong value of getOwnPropertyDescriptor");

        o10.o11(o9, arguments[0], "value: arguments[0]");
        o10.o11(o9, o8, "value: a");

        // Verify we are disconnected now.

        o8 = o13;
        o10.o11(o13, o8, "new value: a");
        o10.o11(o9, arguments[0], "value: arguments[0] -- did not get disconnected!");
      }
      o7(o6);
    }
  },

  o26: {
    name: "formal arg: defineProperty w/o cause of disconnect, verify still connected to named arg",
    o5: function () {
      var o6 = 1;
      var o9 = 2;
      var o13 = 3;
      function o7(o8) {
        Object.defineProperty(arguments, 0, { value: o9 });
        o8 = o9;
        o10.o11(o9, arguments[0], "arguments[0] got disconnected");
        arguments[0] = o13;
        o10.o11(o13, o8, "a got disconnected");
      }
      o7(o6);
    }
  },

  o27: {
    name: "formal arg: defineProperty, disconnect arg[0], verify that arg[1] is still connected",
    o5: function () {
      function o7(o8, o28) {
        Object.defineProperty(arguments, 0, { writable: false });
        var o9 = 3;
        var o13 = 4;
        arguments[1] = o9;
        o10.o11(o9, o28, "arg[1] got disconnected");
        o28 = o13;
        o10.o11(o13, arguments[1], "arg[1] got disconnected");
      }
      o7(1, 2);
    }
  },

  o29: {
    name: "formal arg: defineProperty: convert to accessor property",
    o5: function () {
      function o7(o8) {
        var o30 = false;
        var o31 = false;

        Object.defineProperty(arguments, 0, {
          get: function() { o30 = true; return this.value; },
          set: function(o34) { o31 = true; this.value = o34; }
        });

        o10.o11(undefined, arguments[0], "unexpected arg[0] value right after conversion to accessor property");
        o10.o11(true, o30, "isGetterFired (1)");
        o30 = false;

        var o9 = 2;
        arguments[0] = o9;
        o10.o11(true, o31, "isSetterFired");
        o10.o11(o9, arguments[0], "get value after set");
        o10.o11(true, o30, "isGetterFired (2)");
      }
      o7(1);
    }
  },

  o36: {
    name: "formal arg: defineProperty: convert to accessor, then to data property, verify value and that connection is lost",
    o5: function () {
      var o6 = 1;
      var o9 = 2;
      var o13 = 3;
      function o7(o8) {
        Object.defineProperty(arguments, 0, {
          get: function() { return this.value; },
          set: function(o34) { this.value = o34; }
        });
        Object.defineProperty(arguments, 0, { value: o9 });
        o8 = o13;

        o10.o11(arguments[0], o9, "arguments[0]");
        o10.o37(arguments[0], o8, "arguments[0] != a");
      }
      o7(o6);
    }
  },

  o38: {
    name: "formal arg: defineProperty: force convert to ES5 version but keep connected, check enumeration",
    o5: function () {
      var o6 = 1;
      function o7(o8) {
        Object.defineProperty(arguments, 0, { enumerable: true });
        var o39 = "";
        for (var o40 in arguments) {
          o39 += o40.toString() + ": " + arguments[o40] + ";";
        }
        o10.o11("0: " + o6 + ";" , o39, "accumulator");
      }
      o7(o6);
    }
  },

  o42: {
    name: "formal arg: defineProperty: set non-enumerable/non-writable/delete, check enumeration",
    o5: function () {
      var o43 = 2;
      var o44 = 4;
      function o7(o8, o28, o45, o46) {
        Object.defineProperty(arguments, 0, { enumerable: false }); // arguments[0].enumerable = false.
        Object.defineProperty(arguments, 1, { writable: false });   // arguments[1].writable = false -> disconnected.
        delete arguments[2];                                            // arguments[2] is deleted.
        var o40, o39 = "";
        for (o40 in arguments) {
          o39 += o40.toString() + ": " + arguments[o40] + ";";
        }
        // Note that we expect [1].enumerable = true because this was omitted in defineProperty above
        // which is actually re-define property that previously already had enumerable = true.
        o10.o11("1: " + o43 + ";" + "3: " + o44 + ";", o39, "accumulator");
      }
      o7(1, o43, 3, o44);
    }
  },

  o47: {
    name: "passed/undeclared arg: verify there is no correlation with Object.prototype indexed data properties. WOOB 1143896",
    o5: function () {
      var o6 = "passed";
      Object.defineProperty(Object.prototype, 0, { value: "from proto", configurable: true, writable: false });
      try {
        function o7() { return arguments; }
        var o49 = o7(o6);
        o10.o11(o6, o49[0]);
      } finally {
        delete Object.prototype[0];
      }
    }
  },

  o50: {
    name: "formal arg: verify there is no correlation with Object.prototype indexed properties",
    o5: function () {
      var o6 = "passed";
      Object.defineProperty(Object.prototype, 0, { value: "from proto", configurable: true, writable: false });
      try {
        function o7(o8) { return arguments }
        var o49 = o7(o6);
        o10.o11(o6, o49[0]);
      } finally {
        delete Object.prototype[0];
      }
    }
  },

  o51: {
    name: "passed/undeclared arg: verify there is no correlation with Object.prototype indexed accessor properties. WOOB 1144602",
    o5: function () {
      var o52 = "initial";
      var o6 = "passed";
      var o53 = o52;
      Object.defineProperty(Object.prototype, 0, {
        configurable: true,
        get: function() { return o53; },
        set: function(o34) { o53 = o34; }
      });
      try {
        function o7() { return arguments; }
        var o49 = o7(o6);
        o10.o11(o52, o53, "data: should not be changed as setter on prototype should not be fired");
        o10.o11(o6, o49[0], "argObj[0]");
      } finally {
        delete Object.prototype[0];
      }
    }
  },

  o54: {
    name: "formal arg: verify there is no correlation with Object.prototype indexed accessor properties",
    o5: function () {
      var o52 = "initial";
      var o6 = "passed";
      var o53 = o52;
      Object.defineProperty(Object.prototype, 0, {
        configurable: true,
        get: function() { return o53; },
        set: function(o34) { o53 = o34; }
      });
      try {
        function o7(o8) { return arguments; }
        var o49 = o7(o6);
        o10.o11(o52, o53, "data: should not be changed as setter on prototype should not be fired");
        o10.o11(o6, o49[0], "argObj[0]");
      } finally {
        delete Object.prototype[0];
      }
    }
  },

  o55: {
    name: "formal arg: delete, make sure it's deleted",
    o5: function () {
      var o6 = 1;
      function o7(o8) {
        Object.defineProperty(arguments, 0, { enumerable: false }); // Force convert to ES5 version.
        delete arguments[0];
        o10.o11(undefined, arguments[0], "was not deleted.");
        o10.o11(o6, o8, "a is changed.");
      }
      o7(o6);
    }
  },

  o56: {
    name: "formal arg: delete, add, check named arg is not changed",
    o5: function () {
      var o6 = 1;
      function o7(o8, o28) {
        Object.defineProperty(arguments, 0, { enumerable: false }); // Force convert to ES5 version.
        delete arguments[0];
        arguments[0] = o6 + 1;
        o10.o11(o6, o8, "a is changed.");
      }
      o7(o6, 2);
    }
  },

  o57: {
    name: "formal arg: delete, then defineProperty with attributes for data property, check the value",
    o5: function () {
      var o6 = 1;
      function o7(o8) {
        delete arguments[0];
        var o15 = 2;
        Object.defineProperty(arguments, 0, { enumerable: true, configurable: true, writable: true, value: o15 });
        o10.o11(o15, arguments[0], "wrong value");
      }
      o7(o6);
    }
  },

  o58: {
    name: "formal arg: delete, then defineProperty with attributes for accessor property, check the enumeration",
    o5: function () {
      var o6 = 1;
      var getter = function() {return this.value; };
      var setter = function(o34) { this.value = o34; };
      function o7(o8) {
        delete arguments[0];
        Object.defineProperty(arguments, 0, { enumerable: true, configurable: true, get: getter, set: setter });
        var o21 = { configurable: true, enumerable: true, get: getter, set: setter };
        o10.o11(o21, Object.getOwnPropertyDescriptor(arguments, 0), "wrong descriptor");
        var o39 = "";
        for (var o40 in arguments) {
          o39 += o40.toString() + ": " + arguments[o40] + ";";
        }
        o10.o11("0: " + undefined + ";", o39, "accumulator 2");
      }
      o7(o6);
    }
  },

  o61: {
    name: "formal arg, es5 heap arguments: delete, add, check enumerable/order",
    o5: function () {
      var o43 = 1;
      var o44 = 2;
      var o62 = 100;
      var o63 = 200;
      var o40, o39;
      function o7(o8, o28) {
        // Scenario 1: delete prior to converting to ES5 version.
        delete arguments[0];                                       // Delete [0] prior to conversion to ES5.
        Object.defineProperty(arguments, 0, { configurable: true, enumerable: true, value: o62 }); // Bring back [0] by defineProperty. Now args is ES5.
        o39 = "";
        for (o40 in arguments) {
          o39 += o40.toString() + ": " + arguments[o40] + ";";
        }
        o10.o11("0: " + o62 + ";" + "1: " + o44 + ";", o39, "accumulator 1");

        // Scenario 2: delete after converting to ES5 version.
        Object.defineProperty(arguments, 0, { configurable: true, enumerable: true, writable: true, value: o62 }); // Bring back [0] by defineProperty. Now args is ES5.
        delete arguments[0];                                      // Delete [0] prior after conversion to ES5.
        arguments[0] = o63;                                 // Bring back [0] by setting value.
        o39 = "";
        for (o40 in arguments) {
          o39 += o40.toString() + ": " + arguments[o40] + ";";
        }
        o10.o11("0: " + o63 + ";" + "1: " + o44 + ";", o39, "accumulator 2");
      }
      o7(o43, o44);
    }
  },

  o64: {
    name: "formal arg, es5 heap arguments: delete, add, keep another arg in objectArray and use one non-formal, check enumerable/order",
    o5: function () {
      var o43 = 1;
      var o44 = 2;
      var o65 = 3;
      var o66 = 4;
      var o67 = 100;

      function o7(o8, o28, o45) {
        Object.defineProperty(arguments, 0, { enumerable: true }); // Add objectArray item
        Object.defineProperty(arguments, 2, { enumerable: true }); // Add objectArray item
        var o39 = "";
        delete arguments[0];
        arguments[0] = o67;
        for (var o40 in arguments) {
          o39 += o40.toString() + ": " + arguments[o40] + ";";
        }
        o10.o11(
          "0: " + o67 + ";" + "1: " + o44 + ";" + "2: " + o65 + ";" + "3: " + o66 + ";",
          o39,
          "accumulator");
      }
      o7(o43, o44, o65, o66);
    }
  },

  o68: {
    name: "formal arg: defineProperty, set enumerable to false, check getOwnPropertyNames",
    o5: function (o8, o28) {
      function o7(o8) {
        Object.defineProperty(arguments, 0, { enumerable: false });
        // Note: Object.getOwnPropertyNames returns all properties, even non-enumerable.
        var o69 = Object.getOwnPropertyNames(arguments);
        var o21 = { 0: "0", 1: "1", 2: "length", 3: "callee" };
        o10.o11(o21, o69, "wrong property names");
      }
      o7(101, 102);
    }
  },

  o71: function o71(o72, o73) {
    function o74(o75) {
      return o73 + ": " + o75;
    }

    var o6 = 1;
    var o76 = "x";
    function o7(o8, o28) {
      if (o72) {
        Object.defineProperty(arguments, 1, { enumerable: true }); // Force convert to ES5 version.
      }

      Object.preventExtensions(arguments); // No new properties can be added.
      o10.o11(false, Object.isExtensible(arguments), o74("isExtensible"));
      try {
        Object.defineProperty(arguments, o76, { enumerable: true, value: 100 }); // add new property
        o10.o79(o74("did not throw exception"));
      } catch (o80) {
      }

      arguments[o76] = 100;
      o10.o11(undefined, arguments[o76], o74("New property was added after preventExtensions was called"));
    }
    o7(o6, o6 + 1);
  },

  o81: {
    name: "arguments (non-ES5 version): call Object.preventExtensions, try add new property by defineProperty and direct set",
    o5: function () {
      o2.o71(false, "non-ES5 version");
    }
  },

  o82: {
    name: "arguments (ES5 version): call Object.preventExtensions, try add new property by defineProperty and direct set",
    o5: function () {
      o2.o71(true, "ES5 version");
    }
  },

  o83: function o83(o72, o73) {
    function o74(o75) {
      return o73 + ": " + o75;
    }

    var o6 = 1;
    function o7(o8, o28) {
      if (o72) {
        Object.defineProperty(arguments, 1, { enumerable: true }); // Force convert to ES5 version.
      }

      Object.preventExtensions(arguments); // This causes configurable, writable = false for all properties + Object.preventExtensions.
      // Note: formals existed prior to calling Object.preventExtensions, thus they are still modifiable.
      o10.o11(false, Object.isExtensible(arguments), "isExtensible");

      var o69 = Object.getOwnPropertyDescriptor(arguments, 0);
      var o21 = { configurable: true, enumerable: true, writable: true, value: o6 };
      o10.o11(o21, o69, o74("wrong descriptor - initial"));

      // Try to modify/re-configure
      // Note: do not change value here as it causes different code path than exercised by identified issue.
      Object.defineProperty(arguments, 0, { enumerable: false });
      Object.defineProperty(arguments, 0, { writable: false });
      Object.defineProperty(arguments, 0, { configurable: false });
      var o21 = { configurable: false, enumerable: false, writable: false, value: o6 };
      o10.o11(o21, Object.getOwnPropertyDescriptor(arguments, 0), o74("wrong descriptor - after redefine"));
    }
    o7(o6, o6 + 1);
  },

  // After Object.preventExtensions(arguments) we can't modify the attributes on formals.
  o84: {
    name: "arguments (non-ES5 version): call Object.preventExtensions, make sure we can still modify atttibutes on formals without changing the value",
    o5: function () {
      o2.o83(false, "non-ES5 version");
    }
  },

  // After Object.preventExtensions(arguments) we can't modify the attributes on formals.
  o85: {
    name: "arguments (ES5 version): call Object.preventExtensions, make sure we can still modify atttibutes on formals without changing the value",
    o5: function () {
      o2.o83(true, "ES5 version");
    }
  },

  o86: function o86(o72, o73) {
    function o74(o75) {
      return o73 + ": " + o75;
    }

    var o6 = 1;
    function o7(o8, o28) {
      if (o72) {
        Object.defineProperty(arguments, 1, { enumerable: true }); // Force convert to ES5 version.
      }

      Object.seal(arguments); // This causes configurable = false for all properties + Object.preventExtensions.

      o10.o11(true, Object.isSealed(arguments), o74("isSealed"));
      o10.o11(false, Object.isExtensible(arguments), o74("isExtensible"));

      var o69 = Object.getOwnPropertyDescriptor(arguments, 0);
      var o21 = { configurable: false, enumerable: true, writable: true, value: o6 };
      o10.o11(o21, o69, o74("wrong descriptor"));
    }
    o7(o6, o6 + 1);
  },

  // Object.freeze(arguments -- not ES5 version) does not set configurable to false on formals.
  o89: {
    name: "arguments (non-ES5 version): call Object.seal, verify descriptor on formal",
    o5: function () {
      o2.o86(false, "non-ES5 version");
    }
  },

  o90: {
    name: "arguments (ES5 version): call Object.seal, verify descriptor on formal",
    o5: function () {
      o2.o86(true, "ES5 version");
    }
  },

  o91: function o91(o72, o73) {
    function o74(o75) {
      return o73 + ": " + o75;
    }

    var o6 = 1;
    function o7(o8, o28) {
      if (o72) {
        Object.defineProperty(arguments, 1, { enumerable: true }); // Force convert to ES5 version.
      }

      Object.freeze(arguments); // This causes configurable AND writable = false for all properties + Object.preventExtensions.

      o10.o11(true, Object.isFrozen(arguments), o74("isFrozen"));
      o10.o11(true, Object.isSealed(arguments), o74("isSealed"));
      o10.o11(false, Object.isExtensible(arguments), o74("isExtensible"));

      var o69 = Object.getOwnPropertyDescriptor(arguments, 0);
      var o21 = { configurable: false, enumerable: true, writable: false, value: o6 };
      o10.o11(o21, o69, o74("wrong descriptor"));
    }
    o7(o6, o6 + 1);
  },

  // Object.freeze(arguments -- not ES5 version) does not set configurable and writable to false on formals.
  o94: {
    name: "arguments (non-ES5 version): call Object.freeze, verify descriptor on formal",
    o5: function () {
      o2.o91(false, "non-ES5 version");
    }
  },

  o95: {
    name: "arguments (ES5 version): call Object.freeze, verify descriptor on formal",
    o5: function () {
      o2.o91(true, "ES5 version");
    }
  },

  o96: {
    name: "formal arg: delete, preventExtensions, enumerate, make sure the item is deleted",
    o5: function () {
      var o43 = 1;
      var o44 = 2;
      function o7(o8, o28) {
        delete arguments[1];
        Object.preventExtensions(arguments);
        var o39 = "";
        for (var o40 in arguments) {
          o39 += o40.toString() + ": " + arguments[o40] + ";";
        }
        o10.o11("0: " + o43 + ";", o39, "accumulator");
        o10.o11(undefined, arguments[1], "arguments[1]");
      }
      o7(o43, o44);
    }
  },

  o97: {
    name: "formal arg: convert to ES5 version, change value and set writable to false",
    o5: function () {
      var o43 = 1;
      var o15 = 2;
      function o7(o8) {
        Object.defineProperty(arguments, 0, { enumerable: true });
        o8 = o15;
        Object.defineProperty(arguments, 0, { writable: false });
        var o21 = { configurable: true, enumerable: true, writable: false, value: o15 };
        o10.o11(o21, Object.getOwnPropertyDescriptor(arguments, 0));
      }
      o7(o43);
    }
  },

  o98: {
    name: "formal arg: convert to ES5 version, enumerate when number of actual params is less than number of formals",
    o5: function () {
      var o39 = "";
      function o7(o8, o28) {
        Object.preventExtensions(arguments);
        for (var o40 in arguments) {
          if (o39.length != 0) o39 += ",";
          o39 += arguments[o40];
        }
      }
      var value = 5;
      o7(value);
      var o21 = o100.o101 ?
        value.toString() :
        value.toString() + ",undefined"; // IE9 compat mode -- Win8 558490.
      o10.o11(o21, o39, "Wrong accumulated value");
    }
  },

} // tests.

o102.o103(o2);
