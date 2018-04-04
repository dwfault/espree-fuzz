//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    if (!o1)
        return;
    while (1) {}
}
o0(0);
o0(0);
o0(0);
o0(0);
o0(0);
o0(0);

function o2(o1)
{
    if ((o1 | 0) == 91)
        while (1) o1 = 91;
    return o1;
}
o2(0);
o2(0);
o2(0);
o2(0);
o2(0);
o2(0);
print("Pass");