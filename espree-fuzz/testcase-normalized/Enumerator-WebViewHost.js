//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js", "self");

var o2 = {
  o3: {
    name: "Check that Enumerator is allowed for HostType = Web View",
    o5: function () {
      var o6 = ["x", "y"];
      var o7 = new Enumerator(o6);
      for (o7.o9(); !o7.atEnd(); o7.o11()) o12.writeln(o7.o14());
    }
  },
};

o15.o16(o2);
