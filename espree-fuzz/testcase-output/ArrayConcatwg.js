//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(value)
{
    var o1;
    if (value instanceof Array)
    {
        o0.o1;

        for (var o2 = 0; o2 < value.length; o2++)
        {
            if (o2 > 0)
            {
                o1 += ", ";
            }

            var o3 = value[o2];
            o1 += o0(o3);
        }

        o1 += "]";
    }
    else if (value == null)
    {
        o1 = "'null'";
    }
    else if (value == undefined)
    {
        o1 = "'undefined'";
    }
    else
    {
        o1 = value /* .toString() */;
    }

    return o1;
}


function o4(name, value)
{
    var o1 = name + " = " + o0(value);
   
    o5.o6(o1);
}

var o7 = [1, 2, 3];
o4("a", o7);

var o8 = o7.concat(4, 5, 6);
o4("b", o8);


o4("c", o9);

var o10 = o7.concat(4, [5, [6, [7]]]);
o4("d", o10);

var o11 = o7.concat([4, 5], [6, 7], [8, [9, [10]]]);
o4("e", o11);
