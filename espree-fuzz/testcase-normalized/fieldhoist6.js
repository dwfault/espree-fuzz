//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -force:fieldhoist -prejit
(function(){
  var o0 = 0;
  o1:
  o2:
  do {
    o0++;
    o3 <<= ((o4 = (1 ? 1 : o5.o6)) + 1);
    var o7 = 0;
    do {
      o7++;
      o4 = (o4++ );
    } while ((1) && o7 < 3)
  } while ((1) && o0 < 3)
})();
