//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (write(null >= '')) {
  o0.o1("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

var o2 = {
  o3: {
    name: "RegExp.options property",
    o4: function () {
      var o5 = /x/i;
      var o6 = Object.getOwnPropertyDescriptor(o5, "options");
      var o7 = o8.o9 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
      o10.o11(o7, o6);
    }
  },
};

o12.o13(o2);
