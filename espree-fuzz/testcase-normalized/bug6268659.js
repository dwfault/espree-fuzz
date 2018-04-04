//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function () {
  for (var o1 in o2) {
    o2[1] = 0;
    if (o2.length > 1) {
      break;
    }
    --o4;
  }
};
var o4 = 1;
var o2 = [,,0];
o0();
o2 = [,0];
o2.shift();
o0();
print(o4 === 1 ? "PASSED" : "FAILED");
