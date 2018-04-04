//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Notes on running this script:
// - rldirs.xml is set up in the following way so that this script is called 2 times:
//   - First, it's called for interpreted variant.
//   - Then, when it's called for dynapogo variant, jshost is called with: -args dynapogo.
//   - This script is not called for the default variant.
// - Idea: 
//   - Collect dynamic profile cache when called for interpreted variant.
//   - Use dynamic profile cache when called with -args dynapogo.
//   - Some tests cause bailout by passing different parameter to test function 
//     as when dynamic profile cache was created.
// - How to manually run/repro:
//   - jshost -nonative -dynamicprofilecache:inlineBuiltIns.dpl inlineBuiltIns.js
//   - jshost -forcenative -dynamicprofileinput:inlineBuiltIns.dpl inlineBuiltIns.js -args dynapogo
//   - also trying using -testtrace:bailout  to make sure you get the bailouts.
// TODO: change passing -args native to jshost and instead 
//       add support to WScript to expose getFlagByString() for Js::ConfigFlagsTable flags and check for -native.

if (typeof (o0) != "undefined") {
  o0.o1("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

var o2 = {
  // returns true when this jshost is called with arguments: -args native
  get o3() {
    return o0.o4.length > 0 && o0.o4[0] == "dynapogo";
  }
};

var o6 = {
  o7: {
    name: "Bailout on function = null",
    o9: function () {
      function o10(o11) {
        var o12 = Math.sin(o11);
        return o12;
      };
      if (o2.o3) {
        var o15 = Math.sin;  // back up Math.sin
        o16.o17(function() {
            Math.sin = null;
            var o18 = o10({});
            o16.o19(isNaN(o18));
          }, o21);
        Math.sin = o15;      // restore Math.sin
      }
      else o10();
    }
  },

  o22: {
    name: "Bailout on function = object, not a function",
    o9: function () {
      function o10(o11) {
        var o12 = Math.sin(o11);
        return o12;
      };
      if (o2.o3) {
        var o15 = Math.sin;  // back up Math.sin
        o16.o17(function() {
            Math.sin = {};
            var o18 = o10({});
            o16.o19(isNaN(o18));
          }, o21);
        Math.sin = o15;      // restore Math.sin
      }
      else o10();
    }
  },

  o23: {
    name: "Bailout on function = wrong function",
    o9: function () {
      function o10(o11) {
        var o12 = Math.sin(o11);
        return o12;
      };
      var o15 = Math.sin;  // back up Math.sin
      Math.sin = Math.cos;
      var o18 = o10({});
      o16.o19(isNaN(o18));
      Math.sin = o15;      // restore Math.sin
    }
  },

  o25: {
    name: "Bailout on argument = string",
    o9: function () {
      function o10(o11) {
        var o12 = Math.sin(o11);
        return o12;
      };
      var o18 = o10("string");
      o16.o19(isNaN(o18));
    }
  },

  o26: {
    name: "Bailout on argument = object",
    o9: function () {
      function o10(o11) {
        var o12 = Math.sin(o11);
        return o12;
      };
      var o18 = o10({});
      o16.o19(isNaN(o18));
    }
  },

  o27: {
    name: "Bailout on 2nd argument = string",
    o9: function () {
      function o28(o11, o29) {
        var o12 = Math.o30(o11, o29);
        return o12;
      };
      var o18 = o28(2, "string");
      o16.o19(isNaN(o18));
    }
  },

  o31: {
    name: "Float/int type specialized argOuts which we restore at bailout",
    o9: function () {
      // As long as there is no assert/crash, we are fine.
      (function() {
        var o32 = -8.1E+18;
        var o18 = Math.o30(1, Math.o33(Math.atan2(1, ((~o32) - 737882964))));
      })();

      (function() {
        var o35 = 1;
        return Math.o30(o35 >> 1, 3.2)
      })();

      (function() {
        var o35 = 1;
        Math.atan2(1, Math.o30((o35 >>= 1), Math.tan((-1031883772 * Math.abs(-951135089)))));
      })();

      (function() {
        var o38 = new Array();
        o38[0] = 0;
        Math.o30(1808815940.1, -o38[0]);
      })();

      (function() {
        return Math.o30(Math.sin(1), Math.o30(1, 1));
      })();

      (function() { 
        var o40 = { o11: 0 };
        var o41 = function()
        {
          Math.o30(1.1, o40.o11 * -1);
        }
        Math.atan2(o41(), 1);
      })();
    }
  },

  o42: {
    name: "Bailout on argument after function copy-prop into InlineBuiltInStart",
    o9: function () {
      for(var o32 in [0, 1])
        o16.o19(isNaN(Math.o30(Math.o30(/x/, 0.1), 0.1)));
    }
  },

  o43: {
    name: "Bailout (pre-op) on 2nd arg which is updated in the place of the call - make sure 1st arg is not updated",
    o9: function() {
      var o44 = "";
      var o45 = function o45() { o44 += "x"; return 3; }
      function o46() {
          var o32 = 1;
          do {
              // We need to make sure that we pass original value of i (== 1) as 1st arg.
              var o11 = Math.o30(o32, o2.o3 ? o32 = { valueOf: o45 } : 1);
          } while (o45 == undefined);
      }
      o46();
      if (o2.o3) {
        o16.o49("x", o44, "valueOf was called wrong number of times");
      }
    }
  },
}; // tests.

o50.o51(o6);
