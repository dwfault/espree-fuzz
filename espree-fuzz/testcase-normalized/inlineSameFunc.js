//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -maxInterpretCount:1 -off:SimpleJit

function o0(o1) 
{ 
  if (o1 < 0) {
    throw Error("abc");
  } else {
    o0(o1-1);
  }
}

try 
{
   o0(1);
} catch (o3) 
{
  var o4 = o3.o5.replace(/\(.*\\/g, "(");
  o7.o8(o4);
}
