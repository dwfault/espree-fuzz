//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
var o2 = o0.o1("crossContext_remoteContext.js", "samethread");

var o3 = {
  o4: {
    name: "Make sure when called with -nonative, marshaling of results is correct (Win8 628808)",
    o6: function() {
      // �all this with -nonative
      // Win8 628808: the following cases used to cause an assertion.
      var o7 = "this is a sting";

      var o8 = o7.match(o2.o10);
      var o8 = o7.replace(o2.o10, null);
      var o8 = o7.split(o2.o10, 1);
      var o8 = o7.search(o2.o10);

      var o8 = o2.o7.match(o2.o10);
      var o8 = o2.o7.replace(o2.o10, null);
      var o8 = o2.o7.split(o2.o10, 1);
      var o8 = o2.o7.search(o2.o10);

      var o8 = o2.o14.match(o2.o10);
      var o8 = o2.o14.replace(o2.o10, null);
      var o8 = o2.o14.split(o2.o10, 1);
      var o8 = o2.o14.search(o2.o10);
      var o8 = String.prototype.replace.call(o2.o14, /forceNoMatch/, "");

      // The following cases are not impacted by Win8 628808, but it's worth verifying them for regressions in RegexHelper
      var o8 = o2.o7.replace(o2.o7, "I");
      var o8 = o2.o10.exec(o2.o7);
      var o8 = o2.o7.split(o2.o7, 1);

      var o8 = o2.o14.replace(o2.o14, "I");
      var o8 = o2.o10.exec(o2.o14);
      var o8 = o2.o14.split(o2.o14, 1);
    }
  },

  o19: {
    name: "lastIndex behavior",
    o6: function() {
      o2.o20.exec("_this_");
      o21.o22(5, o2.o20.o23, "wrong x.reg.lastIndex");
    }
  },

  o24: {
    name: "Updating $1, $2,.. behavior",
    o6: function() {
      // Disabled for IE9-compat mode due to Win8 xxxxxxx.
      // TODO: re-enable when the bug is fixed.
      if (o25.o26) {
        "this".match(o2.o27);
        o21.o22("t", RegExp.o29, "RegExp.$1 in local context wasn't updated to the capture group");
      }
    }
  },

  o30: {
    name: "Check in which context the results are created",
    o6: function() {
      var o8 = "this".match(o2.o10);
      var o31 = o25.o26 ? Array : o2.Array;
      o21.o22(o31, o8.constructor, "The result should be created in local context");
    }
  },
}

o34.o35(o3);
