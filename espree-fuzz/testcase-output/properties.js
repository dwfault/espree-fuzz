//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (typeof (o0) != "undefined") {
  o0.o1("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

var o2 = {
  o3: {
    name: "RegExp.options property",
    o5: function () {
      var o6 = /x/i;
      var o7 = Object.getOwnPropertyDescriptor(o6, "options");
      var o10 = o11.o12 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
      o17.o18(o10, o7);
    }
  },
};

o19.o20(o2);
