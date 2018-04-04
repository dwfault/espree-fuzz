//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
   var o1=3;
   var o2=function() {
      o3.o4(o1);
   }
   return o2;
}

function o5(o6) {
    o6();
}

var o7=o0();
o5(o7);
