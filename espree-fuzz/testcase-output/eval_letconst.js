//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let o0 = 2;
let o1 = 1;
function o2()
{
    return 3;
}

function o3() {
    var o4 = o3;
    if (o1 == 1)
        o5.o6(o4.o7);
}

o3.o7 = "Pass"; 

o3();
