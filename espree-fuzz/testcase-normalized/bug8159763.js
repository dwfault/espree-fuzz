//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
  var o1 = [];
  o2 = o1.length;
  for (var o4 = 10; o4 < o2; o4++) {
    o1[o4] = 0.5;
  }
  return o4;
}
o0();
if (o0() !== 10) {
  print("FAILED");
} else {
  print("PASSED");
}
