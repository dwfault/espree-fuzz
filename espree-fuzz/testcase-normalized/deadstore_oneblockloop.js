//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1) {
    var o2 = "";
    do
    {
        o2 += "0";
    } while (o2.length < o1);
    return o2;
}

o4.o5(test(4));

