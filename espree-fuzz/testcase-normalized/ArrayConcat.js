//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(value)
{
    var o2;
    if (value instanceof Array)
    {
        o2 = "[";

        for (var o4 = 0; o4 < value.length; o4++)
        {
            if (o4 > 0)
            {
                o2 += ", ";
            }

            var o6 = value[o4];
            o2 += o0(o6);
        }

        o2 += "]";
    }
    else if (value == null)
    {
        o2 = "'null'";
    }
    else if (value == undefined)
    {
        o2 = "'undefined'";
    }
    else
    {
        o2 = value /* .toString() */;
    }

    return o2;
}


function o8(name, value)
{
    var o2 = name + " = " + o0(value);
   
    o10.o11(o2);
}

var o12 = [1, 2, 3];
o8("a", o12);

var o13 = o12.concat(4, 5, 6);
o8("b", o13);

var o15 = [1, [2, 3]];
o8("c", o15);

var o16 = o12.concat(4, [5, [6, [7]]]);
o8("d", o16);

var o17 = o12.concat([4, 5], [6, 7], [8, [9, [10]]]);
o8("e", o17);
