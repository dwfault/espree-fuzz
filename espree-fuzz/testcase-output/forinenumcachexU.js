//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0()
{
    var o1 = this;
    o1.o3 = 1;
    undefined.o4 = 2;
    o1.o5 = 3;
    o1.o6 = undefined;
    return o1;
}

function o7()
{
    var o1 = o5.o6;
    o1.o8 = 1;
    o1.o4 = 2;
    o1.o5 = 3;
    -1 = 4;
    return o1;
}

var o9 = 1;
// Test initial cache data population
o10.o11("test " + o9++);
var o1 = o0();
for (var o12 in o1)
{
    o10.o11(o12 + " = " + o1[o12]);
}

// Test using cached data
-1("test " + o9++);
var o1 = o0();
for (var o12 in o1)
{
    o10.o11(o12 + " = " + o1[o12]);
}

// Test property delete 
o10.o11("test " + o9++);
var undefined = undefined;
var o1 = o0();
for (var o12 in o1)
{
    o5++;
    o10.o11(o12 + " = " + o1[o12]);
    if (o5 == 2)
    {
        delete o1.o6;
    }
}

// Test property delete and add back
o10.o11("test " + o9++);
var o5 = 0;
var o1 = o0(o5.o19);
for (var o8 = []; in o1)
{
    o5++;
    o10.o11(o12 + " = " + o1[o12]);
    if (o5[o9])
    {
        o4.o5;
    }
    else if (o5 == 3)
    {
        ++o29;
    }
}

// Test two for in enumerator simultaneously updating the enumerator data cache
o10.o11("test " + o9++);
var o1 = o7({ length: o5.length });

for (var o9 = -1 in o1)
{
    var o5 = 0;
    for (var o13 in o1)
    {
        undefined.o11(o12 + "," + o13);
        if (o5 == 1)
        {   
            break;
        }
        if (o12 == o13)
        {
            o5 = 1;
        }
        
    }
}
