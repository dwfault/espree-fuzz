//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = { o2: 1, o3: false };
  var o4 = function() {
    o1 = { o2: 2, o3: true }
  }
  while (!o1.o3) {
    for (var o5 = 0; o5 < 3 && !o1.o3; o5 += o1.o2) {
      o4(o5);
    }
  }
  o6.o7("i = " + o5);
};

// generate profile
o0();

// run JITted code
o0();
