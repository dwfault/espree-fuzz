//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array;
o0[1] = 100;

function o1()
{
    // Injected bailout point: test constant as an array index, which doesn't get copy prop'd
    return o0[1];
}

o2.o3(o1());
