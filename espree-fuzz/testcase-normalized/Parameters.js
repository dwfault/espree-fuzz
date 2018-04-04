//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    if (o1 == null)
    {
        o2.o3("'null'");
    }
    else if (o1 == undefined)
    {
        o2.o3("'undefined'");
    }
    else
    {
        o2.o3(o1);
    }
}


function o5(o1, o6)
{
    // TODO: Dump arguments.length, argument entries, etc.

    o0("f1(a, b)");
    o0(o1);
    o0(o6);
}


// Correct number of parameters
o5(1, 2);

// Extra parameters
o5(1, 2, 3, 4);

// Not enough parameters
o5(1);
