//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test()
{

    var o1 = "a";
    for (var o2 = 0; o2 < 10; o2++)
    {
        o1 += o2;        // create compound string
    }

    var o3 = "blahblahblah" + o1 + "blahblahblah"; // concat node
    o1 += "Z";  // modify compound string
    o4.o5(o3); // make sure the concat string is still valid
}

test();
test();
