//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
function o1()
{
    o2.o3("condition, i = " + o0);
    return o0 < 10;
}

o2.o3("--- test 1 ---");
do
{
    ++o0;
    if(o0 > 5)
        continue;
    o2.o3("after continue: " + o0++);
} while(o1());

o0 = 0;

o2.o3("--- test 2 ---");
do
{
    switch(o0++)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            continue;
        default:
            o2.o3("default");

        case 9:
            break;
    }
} while(o1());
o2.o3("done");
