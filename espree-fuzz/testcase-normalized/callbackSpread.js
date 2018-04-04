//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
//In theory this test could be race-y -- in which case suppress the console printing but in general ch should be well behaved
//

o0("Start Global Code", true);

function o1()
{
    o0("Start Foo1", true);
    
    o2.o3("Hello World - CallBack 1");
    
    o0("End Foo1", true);
}

function o4()
{
    o0("Start Foo2", true);
    
    o2.o3("Hello World - CallBack 2");
    
    o0("End Foo2", true);
}

function o5()
{
    o0("Start Foo3", true);
    
    o2.o3("Hello World - CallBack 3");
    
    o0("End Foo3", true);
}

o2.o6(o1, 200);
o2.o6(o4, 400);
o2.o6(o5, 600);
o2.o3("Hello World - Global");

o0("End Global Code", true);

