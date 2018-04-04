//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
o0[4294967294] = 8;
try
{
    o0.splice(4294967295,0,1); //length grows by 1
}
catch(o2)
{
    o3.o4("PASS");
}