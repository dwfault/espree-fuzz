//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    //Polymorphic Object Reference. 
    //Obj.C is a property on the prototype and will only get optimized.
   return o1.o2 + o1.o3;
}

var o1 = {o4:5,o3:2};
Object.prototype.o2 = 10;
o7.o8(o0());
o1.o9 = 5;
o7.o8(o0());


//JIT - Polymorphic Fixed Field for LdRootFld
o7.o8(o0());
o1.o2 = 99;
o7.o8(o0());


