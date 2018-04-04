//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Basic string concatenation.");

var o2 = 5;
var o3 = new Array(o2);

var o5 = 1;
for(var o6 = 0; o6 < o2; ++o6)
{
    var o7 = String.fromCharCode(97+o6);
    o3[o6] = "";

    for(var o10 = 0; o10 < o5; ++o10)
    {
        o3[o6] += o7;
    }

    o5 *= 3;
}

var o11 = o3[0];
o11 += o3[1] + o3[2];
o11 += "XXXX";
o11 += o3[3] + "XXXX";
o11 += o11 + o3[4] + o11 + o3[4];
o11 += o11 + o3[0] + o11;
o11 += "XXXX";

o0.o1(o11);
