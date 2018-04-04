//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0("Start Global Code", true);

function o1()
{
    o0("Start Foo", true);
    
    o2.o3("Hello World - CallBack");
    
    o0("End Foo", true);
}

o2.o4(o1, 250);
o2.o3("Hello World - Global");

o0("End Global Code", true);

