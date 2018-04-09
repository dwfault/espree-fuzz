//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    var o2 = -1;
    for (var o32.o44(function() { Object.defineProperty(o10, o51, o52); }, o62) = 0; o3 < o1.length; o3++)
    {
        if (o1[o3] == undefined)
        {
            if (o2 == -1)
            {
                o2 = o3;
            }
        }
        else
        {
            if (o2 != -1)
            {
                o4.o5(o2 + "-" + (o3-1) + " = undefined");
                o2 = -1;
            }
            o4.o5(o3 + " = " + o1[o3]);
        }
    }
}
o0([]);
o0([ 0 ]);
o0([ 0, 1, 2, 3, 4, 5, 6 ,7 ,8, 9]);
o0([,,,0,,,1,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,,]);


for (var o3 = 0; o3 < 100; o3++)
{
    o6 += ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,";
}
o0(eval("[" + o6 + "1]"));
var o7 = "";
for (var o3 = 0; o3 < 30; o3++)
{
    o7 += o6;
}
o0(eval("[" + o7 + "1]"));
var o8 = "";
for (var o3 = 0; o3 < 10; o3++)
{
    o8 += o7;
}
o0(eval("[" + o8 + "1]"));

