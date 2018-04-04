//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function () {
  function o1() { 
    if( o1.caller == null || o1.arguments == null)
    {
        print("FAILED")
    }
  }
  o1(o1());
};
o0();
print("PASSED");
