//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() 
{
    var o1 = 1;
    var o2 = { [o1++] : o1 };
    if (o2[1] !== 2)
    {
        o3.o4('fail1: o[1] === ', o2[1]);
    }
}
o0();

function o5() 
{
    var o1 = 1;
    var o2 = { [o1++] : o1 };
    function o6() { return o1; }
    if (o2[1] !== 2)
    {
        o3.o4('fail2: o[1] ===', o2[1]);
    }
}
o5();

function o6()
{
    var o1 = 1;
    var o2 = { [o1] : o1 = 2};
    function o6() {}
    if (o2[1] !== 2)
    {
        o3.o4('fail3: o[1] === ', o2[1]);
    }
}
o6();

o3.o4('pass');    