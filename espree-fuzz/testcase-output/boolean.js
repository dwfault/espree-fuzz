//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = true;
var o1 = false;

o2.o3(o4, 50);

/////////////////

function o4()
{
    o5(`x: ${o0}`, true); //true
    o5(`y: ${o1}`, true); //false

    o5(`x === y: ${o0 === o1}`, true); //false

    o5(`x && y: ${o0 && o1}`, true); //false
    o5(`x || y: ${o0 || o1}`, true); //true
}