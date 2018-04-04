//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0(o1)
{
    var o2 = 100;
    function o3()
    {
        o4.o5(o2);
    }
    function o6(o7)
    {
        function o8(){
            o9++;
            o4.o5("COUNT:  " + o9);
            o3();
            o10["i"] = arguments["callee"];

        }
        if(o7)
            return o8()
        else
            return o3();
    }
    if(o1)
        return o6(true);
    else
        return o6(false);
}
var o9 = 0;
var o10 = {};
o4.o5(o0(false));
o4.o5(o0(true));
o4.o5(o10.o12());




