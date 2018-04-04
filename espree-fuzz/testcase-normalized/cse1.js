//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    o1.o2("FAILED");
    throw (-1);
}

var o3 = -2147483648;
var o4;
function o5(){
  o4 =((- o3) << 1 );
  var o6 = (- o3);
  
  return o6;
};


for (var o7 = 0; o7 < 1000; o7++)
{
    if (o5() != 2147483648)
    {
        o0();
    }
}

o1.o2("Passed");