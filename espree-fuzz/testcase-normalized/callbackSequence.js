//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0("Start Global Code", true);

function o1()
{
    o0("Start Foo1", true);
    
    o2.o3("Hello World - CallBack 1");
    o2.o4(o5, 200);
    
    o0("End Foo1", true);
}

function o5()
{
    o0("Start Foo2", true);
    
    o2.o3("Hello World - CallBack 2");
    o2.o4(o6, 200);

    o0("End Foo2", true);
}

function o6()
{
    o0("Start Foo3", true);
    
    o2.o3("Hello World - CallBack 3");
    
    o0("End Foo3", true);
}

o2.o4(o1, 200);
o2.o3("Hello World - Global");

o0("End Global Code", true);

