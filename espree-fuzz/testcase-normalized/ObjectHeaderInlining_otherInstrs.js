//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    this.o1 = 1;
    this.o2 = 2;
    return undefined;
}


var o4 = new o0();
o4 = new o0();
o4 = new o0();
o4 = new o0();
o4 = new o0();

o5.o6(o4.o1);
o5.o6(o4.o2);

o4.o1 = 10; //Fixed Field should have got invalidated at this point.
o4.o2 = 20; //Fixed Field should have got invalidated at this point.

//Print new values
o5.o6(o4.o1);
o5.o6(o4.o2);