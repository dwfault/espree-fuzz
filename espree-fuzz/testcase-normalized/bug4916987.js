//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Baseline switches:
//Switches: -mic:1 -off:simplejit
var o0 = new Float64Array();
var o2 = new Int32Array();

function o4(o5) {
  o0[0x4 * (0x80000001 >> !1) >> 0] = o5;
  o2[0x4 * (0x80000001 >> !1) >> 0] = o5;
}

var o6 = 3.1415926535;
o4(o6);
o6 = 123456789.123456789;
o4(o6);

o0 = new Float64Array(16);
o2 = new Int32Array(16);
o6 = 987654321.987654321;
o4(o6);
if (o0[4] === o6 && o2[4] === (o6 | 0)) {
  print("PASSED");
} else {
  print(o0[4]);
  print(o2[4]);
  print("FAILED");
}
