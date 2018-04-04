//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

Object.prototype.o2 = -4;

function o3(o4) {
  var o5 = {};
  o6 = o5;
  o5.o7 += 0;

  if (o4) {
    o5.o7 = o5.o7.o2;
  } else {
    o5.o7 = o6.o2;
    o6.o2 = o5;
  }
}
o3(true);
o3(true);
o3(true);
o8.o9("PASSED");