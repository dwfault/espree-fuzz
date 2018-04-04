//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
  var o1 = [];
  var o2 = {};
  Object.defineProperty(Object.prototype, '__getterprop4', {
    get: function () {
      function o7() {
      }
      o7.prototype.o8 = function () {
      };
      var o9 = new o7();
      function o10() {
      }
      o10.prototype.o8 = function () {
      };
      var o11 = new o10();
      function o12(o13) {
        o13.o8();
      }
      o12(o9);
      o12(o11);
    }, configurable:true
  });
  o1.push(o2.o16);
  for (;;) {
    break;

    for (var o17 in o18) {
    }
    o1.push(o19.o16);
  }
}
o0();
o0();
o0();
o20.o21("PASS");
