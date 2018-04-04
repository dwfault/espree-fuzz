//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

  var o0 = {o1:1};
  (function(){
    var o2 = o0;
    var o3 = o2;
    var o4 = 0;
    for (var o5 = 0; o5 < 2; o5++)
    {
      o4 += o2.o1;
      o4 += o3.o1;
      o3.o1 = 3;
      o4 += o2.o1;
    }
    o6.o7(o4);
  })();
