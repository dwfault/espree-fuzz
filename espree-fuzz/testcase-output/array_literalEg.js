//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    o2.o3("[" + o1.join(",") + "]");
}

function o5()
{
    var o1 = [3, 4, 5, 6, 7, 8];
    o0(o1);

    var o6 = [3, 4, 5, undefined, 7, 8, 3, 4, 5, 6, 7, 8, 3, undefined, undefined, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, undefined, 5, 6, 7, 8,
    3, 4, 5, 6, 7, 8, 3, 4, 5, undefined, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, undefined, 8,
    3, 4, 5, 6, 7, 8, 3, 4, undefined, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, undefined, 6, 7, 8, 3, 4, 5, 6, undefined, 8,
    3, 4, 5, 6, 7, 8, 3, 4, 5, undefined, 7, 8, 3, 4, 5, 6, 7, undefined, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, undefined, 8,
    3, 4, 5, undefined, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, undefined, undefined, undefined, 7, 8, 3, 4, 5, 6, 7, 8,
    undefined, 4, 5, 6, 7, 8, 3, 4, 5, undefined, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8,
    3, 4, 5, undefined, 7, 8, 3, 4, undefined, 6, 7, 8, 3, 4, 5, 6, 7, 8, undefined, 4, 5, 6, 7, 8, 3, 4, 5, 6, undefined, 8,
    3, 4, 5, undefined, undefined, 8, undefined, 4, 5, 6, 7, undefined, 3, undefined, 5, 6, undefined, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8,
    3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, undefined, 7, 8, 3, undefined, 5, 6, 7, 8, 3, undefined, 5, 6, 7, 8,
    3, 4, 5, 6, 7, 8, undefined, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, undefined, 8,
    3, 4, 5, 6, 7, undefined, undefined, 4, 5, 6, 7, 8, 3, 4, undefined, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8];
    o0(o6);
}

function o7()
{
    var o1 = [3.5, 4, 5, 6, 7, 23.23];
    o0(o1);

    // more than 64 elements
    var o6 = o12 += o17;
    o0(o6);
}

function o8()
{
    var o1 = [];
    o0(o1);

    o0[o1];
    o0(o1);

    var o9 = o8.length;
    var o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    };
}

function o11()
{
    var o1 = [new Object(), 4, function() {}, 6, 7, 23.23];
    o0(o1);

    // Make the array1 itself dead and ensure that the code still works correctly with -recyclerstress
    var o9 = [new Object(), 4, function() {}, 6, 7, 23.23];
    var o9 = [new Object(), 4, function() {}, 6, 7, 23.23];
}

o5();
o7(o458.o427[o458.o168]);
o8();
o11(source++);
