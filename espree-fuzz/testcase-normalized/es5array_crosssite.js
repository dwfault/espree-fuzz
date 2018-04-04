//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0(o1, o2)
{
    o1[o2] = "blah";
}

function o3(o4)
{
    var o5 = Object.create(o4);
    //var obj = {};
    o5[0] = 0;
    o0(o5, 0);
    o0(o5, 1);
    o8.o9(o5[1]);
}
