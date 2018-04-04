//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

Object.prototype.o2 = 100;
Object.prototype.o3 = function () { return 100; }

function o4() {
}

function o5(o6) {
    return o6.o2;
}
o7.o8(o5(new o4()));
o7.o8(o5(new o4()));
o7.o8(o5(new o4()));
o7.o8(o5(1));

function o9(o6) {
    return o6.o3();
}
o7.o8(o9(new o4()));
o7.o8(o9(new o4()));
o7.o8(o9(new o4()));
o7.o8(o9(1));

function o10(o6) {
    return o6.o2;
}
o7.o8(o10(new o4()));
o7.o8(o10(new o4()));
o7.o8(o10(new o4()));
o7.o8(o10(0.5));

function o11(o6) {
    return o6.o3();
}
o7.o8(o11(new o4()));
o7.o8(o11(new o4()));
o7.o8(o11(new o4()));
o7.o8(o11(0.5));

function o12(o6) {
    return o6.o2;
}
o7.o8(o12(new o4()));
o7.o8(o12(new o4()));
o7.o8(o12(new o4()));
o7.o8(o12(Math.o14(0x5a827999, -262144)));

function o15(o6) {
    return o6.o3();
}
o7.o8(o15(new o4()));
o7.o8(o15(new o4()));
o7.o8(o15(new o4()));
o7.o8(o15(Math.o14(0x5a827999, -262144)));

function o16(o6) {
    return o6.o2;
}
o7.o8(o16(new o4()));
o7.o8(o16(new o4()));
o7.o8(o16(new o4()));
o7.o8(o16(Math.o14(0.5, -262144)));

function o17(o6) {
    return o6.o3();
}
o7.o8(o17(new o4()));
o7.o8(o17(new o4()));
o7.o8(o17(new o4()));
o7.o8(o17(Math.o14(0.5, -262144)));
