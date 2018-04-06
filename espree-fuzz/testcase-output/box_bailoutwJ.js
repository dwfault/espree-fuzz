//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function undefined()
{
}
function o1(){
  function o2 (){
  }
  if (o3)
  {
     escape(o2);
  }
  (o5.length);
};

var o3 = false;
// generate profile
o1();

o3 = true;
// run JITted code
o1((o458.o163 & 0xF) + (o458.o165 & 0xF));

