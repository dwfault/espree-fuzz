//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = 1;
function test()
{
    // Bailout point 
    throw o0;
}

try
{
    test()
}
catch (o1)
{
    o2.o3(o1);
}
o2.o3(o0);
