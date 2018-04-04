//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function o1()
{
    function o2()
    {
        return o3();
    }

    return o2();
}


function o3()
{
    var o4 = 123;
    function o5()
    {
        if (o6)
        {
            escape();
        }
        return o4;
    }

    function escape()
    {
        o0 = arguments.callee.caller;
    }


    return (function(o11) { return o11; })(o5());
}

var o6 = false;
o12.o13(o1());
o6 = true;
o12.o13(o1());
o6 = false;
o12.o13(o0());
