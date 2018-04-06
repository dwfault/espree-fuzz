//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 =0;
function o1()
{
    // injected bailout point #1 
    return 3;
}


// injected bailout point #2
for (var o2 = 0; o2 < 10; o2++)
{
    o0 += o1(index++);
}

o3.o4(o0);
