//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Switches:  -forcejitloopbody

function o0(o1) {
  this.o2 = this.o3 = o1;
}
(function () {
  var o4 = new o0();
  --o4.o3;
  
  for (var o5 = 0; o5 < 2; o5++) {
    o4.o6 = 100;
    o4.o3 = o4.o3;
  }
})();
