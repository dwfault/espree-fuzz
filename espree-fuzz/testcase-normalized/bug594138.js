//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// TH: 594138

while (true) {
  var o0 = {
      o1: function () {
        return function o2() {
          this.o3.apply(this.o5, arguments);
        };
      }
    };
  var o7 = {};
  o7.o8 = o0.o1();
  o7.o8.prototype = {
    o3: function () {
      this.o10;
    }
  };
  o7.o11 = o0.o1();
  o7.o11.prototype = {
    o3: function () {
      new o7.o8();
    }
  };
  var o12 = new o7.o11();
  var o13 = new o7.o11();
  break;
}

o14.o15("PASSED");