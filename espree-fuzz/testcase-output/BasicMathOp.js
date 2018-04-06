//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib)
{
    "use asm"
    var o2 = stdlib.Math.fround;
    function o5()
    {
        var o6 = o2(10.5);
        var o7 = o2(20);
        var o8 = o2(30);
        var o9 = o2(42.42);
        var o10 = o2(19.5);
        var o11 = 125.5

        o7 = o2(o6 - o7);
        o8 = o2(o8/o6);
        o11 = +o10;
        o9 = o2(o6*o9);
        o6 =   o2(+o10);
        return o2(o2(o6 + o7) +o2( o8 + o9 ));
    }
    return o5;
}
var o12 = o0({Math:Math});
o13.o14(o12());
o13.o14(o12());
