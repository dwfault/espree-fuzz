//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o10 = o0.o4();
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o2 = {
  o3: {
    name: "RegExp.options property",
    o4: function () {
      var o5 = /x/i;
      var o6 = Object.getOwnPropertyDescriptor(o5, "options");
      var o7 = o8.o9 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
      try {
o10.o11(o7, o6);
}catch(e){}
    }
  },
};
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o3('Pass');
}catch(e){}
