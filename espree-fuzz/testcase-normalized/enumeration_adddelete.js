//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    var o2 = { };

    for(var o3 = 0; o3 < o1; ++o3)
    {
        o2[o3] = 1;
    }

    return o2;
}

function o4(o1)
{
    for(var o5 = 0; o5 <= o1; ++o5)
    {
        for(var o6 = 0; o6 <= o1; ++o6)
        {
            for(var o7 = 0; o7 <= o1; ++o7)
            {

                o8.o9("testing with " + o1 + " properties");
                o8.o9("deleting property number " + o5 + " on iteration " + o6);
                o8.o9("adding a property on iteration " + o7);

                var o10 = 0;
                var o11 = o0(o1);

                for(var o3 in o11)
                {
                    if(o10 == o6)
                        delete o11[o5];

                    if(o10 == o7)
                        o11["xxx"] = 1;

                    o8.o9(o3);

                    ++o10;
                }
            }
        }
    }
}

for(var o3 = 0; o3 < 8; ++o3)
{
    o4(o3);
}
