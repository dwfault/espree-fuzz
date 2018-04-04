//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = {};
  var o2 = {};
  var o3 = function(){
  }
  o2.o4 = o3;
  var o5 = 0;
  do {
    o5++;
    o2.o4.apply(o1, arguments);
    o2.o4;
  } while((1) && o5 < 3)
};

o0();
o0();

o8.o9("PASSED\n");
