//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*Dictionary Type Handler*/
var o0 = {o1:1, o2:2} // PTH
function o3()
{
    return o0.o1;
}
   
Object.defineProperty(o0, "D", {get: function() {return 5;}});//DTH

o7.o8(o3());
o7.o8(o3());
o0.o1  =99;
o7.o8(o3());

