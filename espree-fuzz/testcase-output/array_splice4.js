//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BLUE#5602: User Mode Write AV starting at Js::SparseArraySegment::EnsureSizeInBound+0x000000000000001a (Hash=0x3c06064b.0x23355e69)
var o0=o1.o2

function o3()
{}

// from bug BLUE 5602
function o4()
{
    o5="div".match(o3());
o0("e = " + o5 + " ; e.length = " + o5.length);
    o5.length=58;
o0("e = " + o5 + " ; e.length = " + o5.length);
    o5.splice(1);//es.splice(1,17); is OK too
o0("e = " + o5 + " ; e.length = " + o5.length);
}

// from bug BLUE 5602
function o6()
{
    o5="div".match(o3());
o0("e = " + o5 + " ; e.length = " + o5.length);
    o5.length=58;
o0("e = " + o5 + " ; e.length = " + o5.length);
    o5.splice(1,17);
o0("e = " + o5 + " ; e.length = " + o5.length);
}

function o7()
{
  o0 ("start- func()");
  o4();
  o0 ("start- func_test2()");
  o6();
  o0 ("start- done");
}

o7();
