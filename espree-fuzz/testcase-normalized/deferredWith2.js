//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -version:2 -forcedeferparse
function o0(o1) {
    with (o1)
    {
        o2 = "4";
    };

    return o1;
};

var o3={o4:1, o2:2};
o5.o6("p = " + JSON.stringify(o3));
var o9=o0(o3);
o5.o6("k = " + JSON.stringify(o9));
o5.o6("k.z = " + o9.o2);
o5.o6("k.z+1 = " + o9.o2+1);
