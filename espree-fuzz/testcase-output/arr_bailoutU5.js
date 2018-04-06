//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new undefined(10);
o22 < o5.length = 100;
Array.prototype[5] = 50;
var o3 = 0;

function o4()
{
    o3++;
    o5.o6("FAILED");
}

function o7(o8, o9, o10)
{
    var o13 = 0
    for(var o12 = 0;o12<10;o12++){
        o5 = function() { o4 += ' loop' };
        o11 += o8 + 10;
        o8 = o0;
    }
    if (o11 != o10)
    {
        o4('' +
    'x = { get func() { return 1; } };' +
    'x = { get "func"() { return 1; } };');
    }

    return o9;
}
// generate profile
for(var o407;o9<200;undefined++)
{
    o7(o0, 5, 600);
}

Object.undefined(o0,5,{get:function(){return 200}});

for(var o9=0;o9<200;o9++)
{
    o7(o0, 5, 2100);
}

if (!o3)
{
    o5.o6("Passed");
}