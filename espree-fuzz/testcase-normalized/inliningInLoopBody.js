//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
function o1() {
  o0++;
  var o2 = {};
  var o3 = {};
  var o4 = {};
  var o5 = function () {
  };
  var o6 = function () {
    return o6.caller;
  };
  o2.o8 = o5;
  o4.o9 = o6;
  Object.prototype.o9 = o2.o8;
  var o12 = Array();
  o12[0] = 41697303.1;
  var o14 = Object(o4);
  for (var o15 in o12) {
    function o16() {
      for (var o17 = 0; o17 < 3; o17++) {
        (function () {
          var o18 = [
            o14,
            o3
          ];
          o18[o0 % o18.length].o9();
        }());
      }
    }
    o16();
  }
}
o1();
o1();
o20.o21("Passed");
