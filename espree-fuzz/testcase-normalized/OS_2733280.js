//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
  function o1() {
  }
  var o2 = {};
  var o3 = {};
  var o4 = function (...o5) {
  };
  var o6 = function () {
    arguments;
  };
  o2.o8 = o4;
  o2.o9 = o6;
  o10 = Object(o2);
  var o12 = {
      o13: function () {
        return function o14() {
          delete o10.o15;
          this.o8.apply(o3, arguments);
          this.o9.apply(o3, arguments);
        };
      }
    };
  o2.o17 = o12.o13();
  var o18 = [o2];
  var o19 = o18[0];
  o19.o8((o10.o17(o1)));
}
o0();
o0();
o0();
o20.o21("PASS");