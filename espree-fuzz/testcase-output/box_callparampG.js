//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function o0()
{

    function o1()
    {
        return o1;
    }
    function o2(o3)
    {
        if (o3) {
            throw 1;
        }
    }
    o2(o1([]));
}


try
{
    o0();
}
catch (o4)
{
}
