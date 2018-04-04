//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Make sure delete kill field copy prop values
function test()
{
    var o1 = new Object();
    o1.o3 = 1;

    var o4 = o1.o3;
    var o5 = delete o1.o3;
    var o6 = o1.o3;
    var o7 = delete o1.o3;

    o8.o9(o4);
    o8.o9(o5);
    o8.o9(o6);
    o8.o9(o7);

    o1.o3 = 2;
    var o4 = o1.o3;
    var o5 = delete o1["x"];
    var o6 = o1.o3;
    var o7 = delete o1["x"];
    o8.o9(o4);
    o8.o9(o5);
    o8.o9(o6);
    o8.o9(o7);

    Object.defineProperty(o1, "x", { configurable: false, value : 3 });
    var o4 = o1.o3;
    var o5 = delete o1.o3;
    var o6 = o1.o3;

    o8.o9(o4);
    o8.o9(o5);
    o8.o9(o6);
}

test();
