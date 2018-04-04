//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Switches:   -bgJit- -maxInterpretCount:2

// This test verifies that we mark all types (not just the type of the object being modified) as potentially having been
// updated whenever we a) store a property using a live cache or b) add a property via an object type spec'd instruction.
function o0(o1) {
    var o2 = {};
    o2.o3 = 1;

    var o4 = {};
    o4.o3 = 1;

    if (o1) {
        o4 = o2;
    }

    (function (o5, o6) {
        var o7 = o5.o3;
        o6.o8 = 11;
        o6.o9 = 12;
        o5.o10 = 21;
        o5.o11 = 22;
    })(o2, o4);

    o12.o13("obj0 === obj1: " + (o2 === o4));
    o12.o13("obj0: { prop0: " + o2.o3 + ", a: " + o2.o8 + ", b: " + o2.o9 + ", x: " + o2.o10 + ", y: " + o2.o11 + " }");
    o12.o13("obj1: { prop0: " + o4.o3 + ", a: " + o4.o8 + ", b: " + o4.o9 + ", x: " + o4.o10 + ", y: " + o4.o11 + " }");
};

o12.o13("Test0:");
o0(false);
o0(false);

o0(true);

// This test is a slight variation of the same theme. In this case we get one of the object to modify not from an input argument,
// but from a closure slot. As a result we may not optimize its property add sequence, because the object syms are different in
// the backward pass (before copy prop changes them in the forward pass), and thus appear dead in the forward pass.
function o14(o1) {
    var o2 = {};
    o2.o3 = 1;

    var o4 = {};
    o4.o3 = 1;

    if (o1) {
        o4 = o2;
    }

    (function (o5) {
        var o7 = o5.o3;
        o4.o8 = 11;
        o4.o9 = 12;
        o5.o10 = 21;
        o5.o11 = 22;
    })(o2);

    o12.o13("obj0 === obj1: " + (o2 === o4));
    o12.o13("obj0: { prop0: " + o2.o3 + ", a: " + o2.o8 + ", b: " + o2.o9 + ", x: " + o2.o10 + ", y: " + o2.o11 + " }");
    o12.o13("obj1: { prop0: " + o4.o3 + ", a: " + o4.o8 + ", b: " + o4.o9 + ", x: " + o4.o10 + ", y: " + o4.o11 + " }");
};

o12.o13("Test1:");
o14(false);
o14(false);

o14(true);
