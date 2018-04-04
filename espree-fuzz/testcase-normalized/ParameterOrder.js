//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test calling order of parameters:
// 1. Ensure arguments get evaluated in the correct order
// 2. Ensure arguments are passed in the correct order
//

function o0()
{
    //
    // By displaying the function, we'll validate the correct evaluation order.
    //

    o1.o2("a()");
    return 1;
}

function o3()
{
    o1.o2("b()");
    return 2;
}

function o4(o5, o6)
{
    //
    // By performing a subtract, we'll validate that p1 and p2 are not mixed.
    //

    o1.o2("c(p1, p2)");
    return o5 - o6;
}

function o7(o5, o6) {
    //
    // By performing a subtract, we'll validate that p1 and p2 are not mixed.
    //

    o1.o2("MyClass(p1, p2)");
    this.value = o5 - o6;
}


//
// Test a regular function call.
//

o1.o2("Regular function call");

var o9 = o4(o0(), o3());
o1.o2(o9);


//
// Test a constructor function call.
//

o1.o2("Constructor function call");

var o9 = new o7(o0(), o3());
o1.o2(o9.value);
