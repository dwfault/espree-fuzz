//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = { o1: 3, o2: null };
o0.o3 = 6;

var o4 = { o1: 5, o2: 'bar', o5: null };
delete o4.o2;
o4.o6 = 'bar2'

var o7 = { o1: 10, o2: 'bar' };
delete o7.o2;
o7.o5 = 'baz'
o7.o2 = 'bar'

var o8 = [];
for(var o9 in o0)
{
    o8.push(o9);
}

var o11 = [];
for(var o12 in o4)
{
    o11.push(o12);
}

var o13 = [];
for(var o14 in o7)
{
    o13.push(o14);
}

o15.o16(o17, 50);

/////////////////

function o17()
{
    var o18 = -1;
    
    o18 = 0;
    for(var o9 in o0)
    {
        o19(`xname: ${o9}`, true); //xo[idx]
        o18++;    
    }
    
    o18 = 0;
    for(var o12 in o4)
    {
        o19(`yname: ${o12}`, true); //yo[idx]
        o18++;    
    }
    
    o18 = 0;
    for(var o14 in o7)
    {
        o19(`zname: ${o14}`, true); //zo[idx]
        o18++;    
    }
}