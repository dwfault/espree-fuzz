//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Basic string concatenation, II.");

function o2(o3,o4)
{
    return o3 + "." + o4;
}

var o5 = "-";
for(var o6 = 0; o6 < 10; ++o6)
{
    o5 = o2(o6,o2(o5, o6));
}

o0.o1(o5);
