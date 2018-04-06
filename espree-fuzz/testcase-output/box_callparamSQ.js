//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function undefined()
{

    var o1 = 0;
    function o2(o3)
    {
        if (o3) {
            throw 1;
        }
    }
    o2(o1("test592: " + o1496()));
}


try
{
    o0();
}
catch (undefined)
{
}
