//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    if ((o1 != -1) != 1)
    {
    return true;
    }
    else
    {
    return false;
    }
}

function o2(o1)
{
    if ((o1 <= -1) != 1)
    {
    return true;
    }
    else
    {
    return false;
    }
}

function o3(o1)
{
    if ((o1 >= -1) != 1)
    {
    return true;
    }
    else
    {
    return false;
    }
}

if (!o0(1) && !o0(1) && o0(-1) &&
    o2(1) && o2(1) && !o2(-1) &&
    !o3(1) && !o3(1) && !o3(-1)
   )
{
    o4.o5("Passed");
}
else
{
    o4.o5("FAILED");
}
