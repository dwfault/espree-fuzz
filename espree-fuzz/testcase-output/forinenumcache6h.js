//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0()
{
    var o1 = new Object();
    o1.o2 = "\u1E9Cc";
    o1.o3 = 2;
    o1.o4 = 3;
    o1.o5 = 4;
    return o1;
}

function write(o0) { o1.o2(o0 + ""); };

var o8 = 1;
// Test initial cache data population
o9.o10("test " + o8++);
var o1 = o0();
for (var o11 in o1)
{
    o9.o10(o11 + " = " + o1[o11]);
}

// Test using cached data
o9.o10("test " + o8++);
var o1 = o0();
for (var o11 in o1)
{
    o9.o10(o11 + " = " + o1[o11]);
}

// Test property delete 
o9.o10("test " + o8++);
var o4 = 0;
var o1 = o0();
for (var o11 in o1)
{
    o4++;
    o9.o10(o11 + " = " + o1[o11]);
    if (o4 == 2)
    {
        delete o1.o5;
    }
}

// Test property delete and add back
o9.o10("test " + o8++);
var o4 = 0;
var o1 = o0();
for (var o11 in o1)
{
    o4++;
    o9.o10(o11 + " = " + o1[o11]);
    if (o4 == 2)
    {
        delete o1.o5;
    }
    else if (o4 == 3)
    {
        o1.o5 = 5;
    }
}

// Test two for in enumerator simultaneously updating the enumerator data cache
o9.o10("test " + o8++);
var o1 = o6();

for (var o11 in o1)
{
    var o4 = 0;
    for (var o12 in o1)
    {
        o9.o10(o11 + "," + o12);
        if (o4 == 1)
        {   
            break;
        }
        if (o11 == o12)
        {
            o4 = 1;
        }
        
    }
}
