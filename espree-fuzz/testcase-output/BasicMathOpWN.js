//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib)
{
    "use asm"
    var o1 = stdlib.Math.fround;
    function o2()
    {
        function o7()
{
    o0.then((o2) => o4 = o2);
    o1.then((o2) => o5 = o2);
    o3.then((o2) => o6 = o2);
    
    o8.o9(o10, 50);
};
        var o4 = o1(20);
        var o5 = o1(30);
        var o6 = o1(42.42);
        var o7 = o1(19.5);
        var o8 = 125.5

        o4 = o1(o3 - o4);
        o5 = o1(o5/o3);
        o8 = +o7;
        o6 = o1(o3*o6);
        o3 =   o1(+o7);
        return o1(o1(o3 + o4) +o1( o5 + o6 ));
    }
    return o2;
}
var o9 = o0({Math:Math});
o10.o11(o9());
o10.o11(o9());
