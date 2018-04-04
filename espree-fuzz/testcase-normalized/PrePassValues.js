//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;

function o1(o2)
{
    var o3 = 0.1;
    var o4 = 0.2;
    var o5 = "Louie ";
    var o6;

    for (var o7 = 0; o7 < 3; o7++)
    {
        o6 = o3 + o3;  // Type spec this add? Make sure there is a bailout...
        o3 = o4;
        o4 = o5;
    }

    if (o6 != "Louie Louie ")
    {
        o8.o9("w = " + o6);
        o8.o9("FAILED");
        o0 = true;
    }
    else if (o2 && !o0)
    {
        o8.o9("Passed");
    }
}

for (var o7 = 0; o7 < 500; o7++)
{
    o1(false);
}

o1(true);
