//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    o2.o3(Math.o5.apply(Math, o1)); 
    o2.o3(Math.o7.apply(Math, o1));
    o2.o3(); 
}

var o1 = [{}, 3, 3.4, , new Array()];
var o9 = [1,2,3,4,5];
var o10 = [1.2,2.3,3.4,4.5,5.6];
o0(o1);
o0(o1);

o2.o3("Testing int array");
o0(o9);

//missing value
o11 = o9.length;
o9[o11+1] = 0;
o0(o9);
o9.length = o11;

//converting to float array
o9[3] = 0.5;
o0(o9);

//with a NaN element
o9.push(Number.NaN);
o0(o9);

o2.o3("Testing float array");
o0(o10);

//missing value
o11 = o10.length;
o10[o11+1] = 0.45;
o0(o10);
o10.length = o11;

o10.push(0.5);
o0(o10);

//with undefined (will convert the array)
o10.push(undefined);
o0(o10);