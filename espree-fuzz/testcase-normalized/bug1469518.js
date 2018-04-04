//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function o1() {
  var o2 = function () {
  };
  (function () {
    if (o0) {
      for (var o3 = 0; o3 < 6; ++o3) {
        ({ o4: 1 });
      }
      o5;
    }
  })();
  (function () {
    `,${[o2]}`;
  })();
}
try{
    o1();
    o1();
    o0 = true;
    o1();
}
catch(o6){
    o7.o8(o6.o9);
}
