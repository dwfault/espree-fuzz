//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2)
{
    o3.o4(o1, o2);
}

function o5(o1,o2)
{
    return o0(o1+1,o2+1);
}

function o6()
{
    o5(1);
    new o5(1);
    o5(10,20);
    new o5(10,20);
    o5(100,200,300);
    new o5(100,200,300);
}

o6();

o3.o4("");
o6();
