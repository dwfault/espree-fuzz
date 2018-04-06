//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array(10);
o0[1] = 100;
Array.prototype[5] = 50;
var o3 = 0;

function o4()
{
    o3++;
    o5.o6("FAILED");
}

function o7(o8, o9, o10)
{
    var o11 = 0;
    for(var o12 = 0;o12<10;o12++){
        o8 = o8[o9];
        o11 += o8 + 10;
        o8 = o0;
    }
    if (o11 != o10)
    {
        o4();
    }

    return o9;
}
// generate profile
for(var o9=0;o9<200;o9++)
{
    o7(o0, 5, 600);
}

Object.defineProperty(o0,5,{get:function(){return 200}});

for(var o9=0;o9<200;o9++)
{
    o7(o0, 5, 2100);
}

if (!o3)
{
    o5.o6("Passed");
}