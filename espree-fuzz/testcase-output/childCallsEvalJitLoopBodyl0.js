//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Due to the eval, 'a' get put in a slot and should not be assigned a non-temp register. The uses of 'a' in the loop should be
// given a temp register so that they are not loaded/restored from the jitted loop body.
(function(){
  var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    };
  while((1) && o0 < 3) {
    o0++;
    for(var o1 = 0; o1 < 3; ++o1) {
      (function(){
        (function(){
          eval("");
        })(1, 1, 1, 1);
        var o2 = 0;
        while((1) && o2 < 3) {
          o2++;
          o3 =Math.sin((-1012552393 * (o1 << o4)));
          var o4 = 1;
        }
      })(1);
    }
  }
})();
