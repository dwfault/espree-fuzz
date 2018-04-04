//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
  var o1 = function (o2) {
    o2 = {};
    o2.o3 = o2;
    o2.o3;
  };
  o1();
}
o0();
o0();
o0();
o0();
o4.o5("PASSED");
