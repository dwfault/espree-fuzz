//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
function o1() {
  o0++;
  function o2() {
  }
  var o3 = {};
  var o4 = {};
  var o5 = {};
  var o6 = function () {
    for (var o7 in o3) {
      if (o7.indexOf('method') != -1) {
        continue;
      }
      return o2();
    }
    return o2();
    do {
    } while (o5);
  };
  var o9 = function () {
  };
  o3.o10 = o9;
  o3.o11 = o6;
  o5.o11 = o9;
  Object.prototype.o14 = -21449704;
  var o15 = [
      o4,
      o3,
      o5
    ];
  var o16 = o15[o0];
  o16.o11();
}
try
{
    o1();
    o1();
    o1();
}
catch(o17)
{
    o18.o19("PASS");
}
