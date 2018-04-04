//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

(function(){
  var o0 = 1;
  (function(){
    var o1 = o0;
    var o2 = o1;
    var o3 = 0;
    while ((o1.o4) && o3 < 3) {
      o3++;
      var o5 = ((o1.o4 = 2147483647) <= o2.o4);
    }
  })();
})();
