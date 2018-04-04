//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function o0(o1) {
  for (o2 in this) {
    if (o2 == o1) {
       o3.o4("PASS");
    }
  }
}

o0.o5 = 20;
o6 = o3.o7("crosssite_bind_child.js", "samethread");
o8 = o6.o9(o0);
o8();