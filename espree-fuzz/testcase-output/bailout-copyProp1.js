//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test() {
    var o0;
    (o0 = -6.92053759608629E+18) | 0;
    //f = -6.92053759608629E+18 | 0; // the above line should not be equivalent to this when bailing out

    var o1 = 0; // bail-out here
    var o2 = o1 !== null ? 0 : o0 |= 0;

    return o0;
}

o3.o4(test());
