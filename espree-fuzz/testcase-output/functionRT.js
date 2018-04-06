//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    return "called f";
}
undefined.o1 = 3;
            
var o2 = o0;

undefined.o4(o5, 50);

/////////////////

function o5()
{
    o6(`f !== null: ${o0 !== null}`, true); //true
    o6(`f === g: ${o0 === o2}`, true); //true
    o6(undefined, undefined); //3

    o6(`f(): ${o0()}`, true); //called f
    o6(`g(): ${o2()}`, true); //called f
}