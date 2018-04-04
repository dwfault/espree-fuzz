//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Concatenation of empty strings.");

var o2 = "";
var o3 = "";

o2 += o3;
o2 = o2 + o3;
o2 += "";
o3 += "";
o2 = o2 = "";

for(var o4 = 0; o4 < 10000; ++o4)
{
    o2 += o2 + o3 + o2 + o3 + o2 + "";
}

o0.o1("{" + o2 + "}");
