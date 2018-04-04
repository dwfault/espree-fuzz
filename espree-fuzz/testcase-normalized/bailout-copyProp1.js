//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test() {
    var o1;
    (o1 = -6.92053759608629E+18) | 0;
    //f = -6.92053759608629E+18 | 0; // the above line should not be equivalent to this when bailing out

    var o2 = 0; // bail-out here
    var o3 = o2 !== null ? 0 : o1 |= 0;

    return o1;
}

o4.o5(test());
