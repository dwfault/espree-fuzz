//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

Object.prototype.o2 = 100;
Object.prototype.o3 = function () { return 100; }

function o4() {
    var o5 = Math.o7(0x5a827999, -262144);
    return o5.o2;
}
o8.o9(o4());
o8.o9(o4());
o8.o9(o4());

function o10() {
    var o5 = Math.o7(0x5a827999, -262144);
    return o5.o3();
}
o8.o9(o10());
o8.o9(o10());
o8.o9(o10());

function o11() {
    return Math.o7(0x5a827999, -262144).o3();
}
o8.o9(o11());
o8.o9(o11());
o8.o9(o11());

function o12() {
    var o5 = Math.o7(0.5, -262144);
    return o5.o3();
}
o8.o9(o12());
o8.o9(o12());
o8.o9(o12());

function o13() {
    var o5 = Math.o7(0.5, -262144);
    return o5.o3();
}
o8.o9(o13());
o8.o9(o13());
o8.o9(o13());

function o14() {
    return Math.o7(0.5, -262144).o3();
}
o8.o9(o14());
o8.o9(o14());
o8.o9(o14());

function o15() {
    var o5 = { o2: 1 };
    var o16 = o5.o2;

    var o5 = 1;

    // The inline cache here is shared with the one for prop0 above, so it will be populated,
    // and we will do object type specialization.
    return o5.o2;
}
o8.o9(o15());
o8.o9(o15());
o8.o9(o15());

function o17() {
    var o5 = { o3: 1 };
    var o16 = o5.o3;

    var o5 = 1;

    // The inline cache here is shared with the one for prop0 above, so it will be populated,
    // and we will do object type specialization.
    return o5.o3();
}
o8.o9(o17());
o8.o9(o17());
o8.o9(o17());
