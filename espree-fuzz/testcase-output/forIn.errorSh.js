//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// WinBlue 194710: wrong line/col number in exception from inside for in.

function o0()
{
    for (var o1 in o17)    // Error: c is undefined.
    {
        o3(o1);
    }
}

try
{
  o0();
}
catch (o4)
{
  var o5 = o4.o6.replace(/\(.*\\/g, "(");
  o7.o8(o5);
}
