//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

(function(){
  var o0 = new Object();
  for (var o2 = 0; o2 < 3; ++o2) {
  }
  for (var o2 = 0; o2 < 3; ++o2) {
    o0.o3 = 1;
  }
  function o4 (){
    eval("");
  }
  o6.o7("obj0.a = " + (o0.o3|0));
})();

o6.o7((function() {
    var o8 = 1;
    var o9 = function() {
        o8 = -1;
    }
    while (o8-- > 0) {
        o9();
    }
    return o8;
})());
