//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative -InjectExceptionAtPartiallyInitializedInterpreterFrame:3 -InjectPartiallyInitializedInterpreterFrameErrorType:1

// We only check interpreter frame which ret addr matches one from frames pushed to scriptContext.
// Thus use same function body (causes same interpreter thunk).

function o0()
{
  var o1 = function(o2)
  {
    if (o2) o2();
  }
  return o1;
}

try
{
  var o3 = o0();
  var o4 = o0();
  o3(o4);
}
catch (o5)
{
  var o6 = o5.o7.replace(/\(.*\\/g, "(");
  o9.o10(o6);
}
