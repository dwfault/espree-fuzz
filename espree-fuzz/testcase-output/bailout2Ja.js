//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new undefined;
o0[1] = 100;

function o2()
{
    // Injected bailout point: test constant as an array index, which doesn't get copy prop'd
    return Math.clz32;
}

o3.o4(undefined());
