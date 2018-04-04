//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function o0()
{
}

o0();

try
{
    o0();
    throw 1;
}
catch (o1)
{
    o0();
}
finally
{
    o0();
}

o0();


