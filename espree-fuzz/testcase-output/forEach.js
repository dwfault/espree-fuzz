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

var o10 = [];
for(var o11 in o4)
{
    o10.push(o11);
}

var o12 = [];
for(var o13 in o7)
{
    o12.push(o13);
}

o14.o15(o16, 50);

/////////////////

function o16()
{
    var o17 = -1;
    
    o17 = 0;
    for(var o9 in o0)
    {
        o18(`xname: ${o9}`, true); //xo[idx]
        o17++;    
    }
    
    o17 = 0;
    for(var o11 in o4)
    {
        o18(`yname: ${o11}`, true); //yo[idx]
        o17++;    
    }
    
    o17 = 0;
    for(var o13 in o7)
    {
        o18(`zname: ${o13}`, true); //zo[idx]
        o17++;    
    }
}