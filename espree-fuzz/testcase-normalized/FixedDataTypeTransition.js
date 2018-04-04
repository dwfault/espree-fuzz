//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*Path Type Handler*/
var o0 = {o1:1, o2:2} // PTH

function o3()
{
    return o0.o1;
}

o4.o5(o3());
o4.o5(o3());
o0.o1 = 99;
o4.o5(o3());

/*Simple Dictionary Type Handler*/

var o0 = {o1:1} // PTH
Object.defineProperty(o0, "B", {
    enumerable   : true,
    configurable : false,
    writable     : false, 
    value        : 20
}); //SDTH

function o12()
{
    return o0.o2;
}

o4.o5(o12());
o4.o5(o12());
o0.o2 = 99;
o4.o5(o12());


