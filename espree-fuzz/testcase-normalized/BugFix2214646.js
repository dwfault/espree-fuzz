//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = true;
function test() {
  var o2 = function () {};
  
  function o3() 
  {
    for (var o4 in Array(o2 = '', ...NaN, o2 = '')) {}
  }
  
    try 
    {
      var o7 = o3();
    } catch (o8) {}
  if(typeof o2 !== "string")
  {
   print("FAIL: type of is "+typeof o2);
   o0 = false;
  }
}
test();
test();
test();
o0 ? print("PASS") : print("FAIL");