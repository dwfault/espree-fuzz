//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function o1() {
  var o2 = function () {
    function o3() {
      function o4() {
        return o4;
      }
      if (o0) {
        return o4();
      }
    }
    var o5 = o3();
  };
  for (var o6 = 4 - 6;;) {
    if (o6 === 4) {
      break;
    }
    o6 += 2;
    o2();
  }
}
o1();
o0 = true;
o1();
o7.o8("passed");