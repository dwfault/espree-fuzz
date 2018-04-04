//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//reduced switches: -mic:1 -forcejitloopbody -off:interpreterautoprofile

function o0() {
  this.o1 = 0;
}

var o2 = { o3: {} };

(function () {

  var o4 = new o0();
  o2.o3 += o4.o5++;
  o4.o5++;
  
  for (var o6 of [1,2]) {
    o4.o3 = { o7: o4.o5++ };
    o4.o5 = 4;
  }
})();

o8.o9("PASSED");