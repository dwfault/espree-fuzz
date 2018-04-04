//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
//In theory this test could be race-y -- in which case suppress the console printing but in general ch should be well behaved
//

o0("Start Global Code", true);

var o1 = undefined;

function o3()
{
    o0("Start Foo1", true);
    
    o4.o5("Hello World - CallBack 1");
    
    o0("End Foo1", true);
}

function o6()
{
    o0("Start Foo2", true);
    
    o4.o5("Cancel Callback 1 from CallBack 2");
    o4.o7(o1);
    
    o0("End Foo2", true);
}

o1 = o4.o8(o3, 500);
o4.o8(o6, 100);
o4.o5("Hello World - Global");

o0("End Global Code", true);

