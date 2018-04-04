//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0(o1)
{
    return o1===0 && (1/o1)===-Infinity;
}

function print(o1)
{
    o4.o5(o0(o1)? "-0" : o1);
}

// Test int dev specialization and bailout
function o6()
{
    print( o7 / 5);
}
    
var o7 = 5;

o6(); // collect profile
o6(); // optimized
o7 = 1;
o6(); // bailout on not int result
o7 = -0;
o6(); // bailout on FromVar of -0


// Test bailout when div is hoisted
function o8()
{
    for (var o9 = 0; o9 < o7 / 5; o9++)
    {
    }
    print(o9);
}

o7 = 5;
o8(); // collect profile
o8(); // optimized
o7 = 10;
o8();
o7 = 11;
o8(); // bailout on not int result (at loop top)
o7 = -0;
o8(); // bailout on FromVar of -0 (at loop top)


// Test bailout on negative 0 result
function o10()
{
    var o11 = o7 / 4;
    print(o11 / o12);
}

var o12 = -4;
o7 = 16;
o10(); // collect profile
o10(); // optimized
o7 = 0;
o10(); // bail on negative 0 result
o7 = 16;
o12 = 0;
o10();

o7 = 15; 
o12 = 3;
o10();

o7 = -12;
o10();


