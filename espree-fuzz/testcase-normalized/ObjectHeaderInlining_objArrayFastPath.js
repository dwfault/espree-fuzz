//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    o2.o3(o1[0]);
}

function o4(o5,o6)
{
    this.o5 = o5;
    this.o6 = o6;
}

//Passing the second param as JavascriptArray
var o7 = new o4({}, ["1",2,3]);

var o8 = new Object();
o8[0] = 10;

o0(o8);
o0(o8);
o0(o8);

o0(o7);