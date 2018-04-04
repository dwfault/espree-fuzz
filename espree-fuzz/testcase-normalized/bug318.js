//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    o1.o2("FAILED");
    throw(1);
}

function o3(){
  var o4 = {};
  if((2 % 2)) {
  }
  else {
    o5 =(2 & 2);
  }
  o4.length =o5;
  if (o4.length != 2)
    o0();
};

// generate profile
o3();
o3();
o3();

// run JITted code
o7 = true;
o3();
o3();
o3();

// run code with bailouts enabled
o8 = true;
o3();

o1.o2("Passed");
