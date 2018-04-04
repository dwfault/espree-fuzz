//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Testing constant prop into LdMethodFld

function o0()
{
    var o1 = new Object();
    o1.o3 = 1;
    return o1.o3(); // Generate LdMethodFld, and 1 is copy prop'd here.
}

try
{
    o0();
}
catch (o4)
{
    o5.o6("PASS");
}
