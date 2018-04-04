//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
  var o1 = 11;
  var o2 = {};
  var o3 = {};
  var o4 = function (o5) {
    for (var o6 in o7) {
      o1;
      o7[o6] = o5;
    }
  };
  var o7 = new Int32Array(256);
  o3 = new Proxy(o3, Object());
  o4(o3);
}
try {
  o0();
  print("PASSED");
} catch (o12) {
  print("FAILED");
}
