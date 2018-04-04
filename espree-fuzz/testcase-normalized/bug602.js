//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4()
{
    this.toString = function (){throw (new Error("some error"));}
}

function o7() {
    try
    {
        o8 = new o4();
        o9 = "hi";
        o10 = o9 + o8;
        write(o10);
    }
    catch(o11)
    {
        write(o11);
    }
    write("Test1 Done");
}

function o12() {
    try
    {
        o8 = new o4();
        o9 = "hi";
        o10 = o8 + o9;
        write(o10);
    }
    catch(o11)
    {
        write(o11);
    }
    write("Test2 Done");
}

o7();
o12();
